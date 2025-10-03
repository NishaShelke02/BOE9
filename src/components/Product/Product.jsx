import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const { categorySlug, productSlug } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");

  // Utility: slugify text
  const slugify = useCallback((text = "") =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/&/g, "and")
      .replace(/[^\w-]+/g, "")
  , []);

  // Helper: flatten products in category + subcategories
  const getAllProducts = useCallback((category) => {
    const mainProducts = category.products || [];
    const subProducts = category.subcategories?.flatMap(sub => sub.products || []) || [];
    return [...mainProducts, ...subProducts];
  }, []);

  // Helper: find product by slug
  const findProduct = useCallback((category, slug) => {
    const products = getAllProducts(category);
    return products.find(p => (p.slug ? p.slug : slugify(p.name)) === slug);
  }, [getAllProducts, slugify]);

  // Fetch products JSON
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/products.json");
        if (!res.ok) throw new Error("Network response not ok");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Update main image when product changes
  useEffect(() => {
    if (!data.length) return;

    const category = data.find(cat => (cat.slug ? cat.slug : slugify(cat.category)) === categorySlug);
    if (!category) return;

    const product = productSlug ? findProduct(category, productSlug) : null;
    if (product?.image) setMainImage(product.image);
  }, [data, categorySlug, productSlug, findProduct, slugify]);

  if (loading) return <p>Loading...</p>;
  if (!data.length) return <p>No data available</p>;

  // Get category and product objects
  const category = data.find(cat => (cat.slug ? cat.slug : slugify(cat.category)) === categorySlug);
  if (!category) return <p>Under Working</p>;

  const product = productSlug ? findProduct(category, productSlug) : null;
  const allProducts = getAllProducts(category);
  const categorySlugValue = category.slug || slugify(category.category);

  return (
    <div className="product-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">Home</Link> /{" "}
        <Link to={`/products/${categorySlugValue}`}>{category.category}</Link>{" "}
        {product && `/ ${product.name}`}
      </nav>

      {/* Category heading */}
      <h2>{category.category}</h2>
      {category.categoryDesc && <p className="category-desc">{category.categoryDesc}</p>}
      {category.categoryImage && (
        <img
          src={category.categoryImage}
          alt={category.category}
          className="category-image"
        />
      )}

      {product ? (
        // Product detail page
        <div className="product-detail">
          <div className="product-description">
            <h3>{product.name}</h3>
            <p>{product.description || product.shortDesc || "No description available"}</p>
          </div>

          <div className="product-image-container">
            {mainImage && (
              <img
                src={mainImage}
                alt={product.name}
                className="product-image"
              />
            )}
            {product.gallery?.length > 0 && (
              <div className="product-gallery">
                {product.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${product.name} ${i + 1}`}
                    onClick={() => setMainImage(img)}
                    className={mainImage === img ? "active-thumb" : ""}
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
              <p>{p.shortDesc || "No description available"}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
