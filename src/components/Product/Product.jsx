import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const { categorySlug, productSlug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");

  // Utility: slugify text
  const slugify = useCallback(
    (text = "") =>
      text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, ""),
    []
  );

  // Helper: find product in category or subcategories
  const getProductFromCategory = useCallback(
    (category, slug) => {
      const allProducts = [
        ...(category.products || []),
        ...(category.subcategories?.flatMap((sub) => sub.products || []) || []),
      ];
      return allProducts.find((p) => (p.slug ? p.slug : slugify(p.name)) === slug);
    },
    [slugify]
  );

  // Fetch data from products.json
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/products.json");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Set main image when productSlug changes
  useEffect(() => {
    if (!data) return;

    const category = data.find(
      (cat) =>
        (cat.slug ? cat.slug : slugify(cat.category)) === categorySlug
    );

    const product =
      productSlug && category && getProductFromCategory(category, productSlug);

    if (product && product.image) {
      setMainImage(product.image);
    }
  }, [data, categorySlug, productSlug, getProductFromCategory, slugify]);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data available</p>;

  const category = data.find(
    (cat) =>
      (cat.slug ? cat.slug : slugify(cat.category)) === categorySlug
  );
  if (!category) return <p>Category not found</p>;

  const product =
    productSlug && getProductFromCategory(category, productSlug);

  // Flatten all products for category page
  const allProducts = [
    ...(category.products || []),
    ...(category.subcategories?.flatMap((sub) => sub.products || []) || []),
  ];

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
            <p>{product.description}</p>
          </div>

          <div className="product-image-container">
            {mainImage && (
              <img
                src={mainImage}
                alt={product.name}
                className="product-image"
              />
            )}

            {product.gallery && product.gallery.length > 0 && (
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
              <p>{p.shortDesc}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
