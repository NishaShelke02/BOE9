import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import "./Product.css";

// Simple loading spinner component
const LoadingSpinner = () => (
  <div className="loading-spinner" role="status" aria-label="Loading products...">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
);

const Product = () => {
  const { categorySlug, productSlug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainImage, setMainImage] = useState("");

  // Slugify helper
  const slugify = useCallback(
    (text = "") =>
      text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, ""),
    []
  );

  // Recursive category finder
  const findCategory = useCallback(
    (categories, slug) => {
      for (const cat of categories) {
        const catSlug = cat.slug ? cat.slug : slugify(cat.category || cat.name);
        if (catSlug === slug) return cat;
        if (cat.subcategories && cat.subcategories.length > 0) {
          const found = findCategory(cat.subcategories, slug);
          if (found) return found;
        }
      }
      return null;
    },
    [slugify]
  );

  // Recursive product finder
  const findProductRecursively = useCallback(
    (categories, productSlug) => {
      for (const cat of categories) {
        // Check products at this level
        if (cat.products) {
          const found = cat.products.find(
            (p) => (p.slug ? p.slug : slugify(p.name)) === productSlug
          );
          if (found) return found;
        }
        // Check subcategories
        if (cat.subcategories) {
          const foundInSub = findProductRecursively(cat.subcategories, productSlug);
          if (foundInSub) return foundInSub;
        }
      }
      return null;
    },
    [slugify]
  );

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("/data/products.json");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Set main image when productSlug changes
  useEffect(() => {
    if (!data || !productSlug) return;
    const prod = findProductRecursively(data, productSlug);
    if (prod && prod.image) setMainImage(prod.image);
  }, [data, productSlug, findProductRecursively]);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>{error}</p>;
  if (!data) return <p>No data available</p>;

  // Find category for breadcrumb
  const category = findCategory(data, categorySlug);
  if (!category) return <p>Category not found</p>;

  // Find product
  const product = productSlug ? findProductRecursively([category], productSlug) : null;

  // Flatten all products for category page
  const flattenProducts = (cat) => {
    let result = [...(cat.products || [])];
    if (cat.subcategories) {
      for (let sub of cat.subcategories) {
        result = result.concat(flattenProducts(sub));
      }
    }
    return result;
  };
  const allProducts = flattenProducts(category);

  const categorySlugValue = category.slug || slugify(category.category);

  return (
    <div className="product-page" role="main">
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span> / </span>
        <Link to={`/products/${categorySlugValue}`}>{category.category}</Link>
        {product && (
          <>
            <span> / </span>
            <span aria-current="page">{product.name}</span>
          </>
        )}
      </nav>

      {/* Category Header */}
      <div className="category-container">
        <div className="category-desc-wrapper">
          <h2>{category.category}</h2>
          {category.categoryDesc && <p>{category.categoryDesc}</p>}
        </div>
        <div className="category-image-wrapper">
          {category.categoryImage && (
            <img
              src={category.categoryImage}
              alt={`${category.category} category image`}
              loading="lazy"
            />
          )}
        </div>
      </div>

      {product ? (
        // Product detail page
        <div className="product-detail">
          <div className="product-description">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>

          <div className="product-image-container">
            {mainImage && <img src={mainImage} alt={product.name} className="product-image" />}
            {product.gallery && product.gallery.length > 0 && (
              <div className="product-gallery">
                {product.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${product.name} ${i + 1}`}
                    className={`gallery-thumb ${mainImage === img ? "active" : ""}`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        // Category page: list all products
        <div className="product-grid">
          {allProducts.map((p, i) => (
            <Link
              key={i}
              to={`/products/${categorySlugValue}/${p.slug || slugify(p.name)}`}
              className="product-card"
            >
              <div
                className="product-thumb"
                style={{ backgroundImage: `url(${p.image})` }}
              />
              <h4>{p.name}</h4>
              <p>{p.shortDesc}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
