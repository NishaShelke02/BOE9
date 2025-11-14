import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import "./Product.css";

// Loading Spinner
const LoadingSpinner = () => (
  <div className="loading-spinner" role="status" aria-label="Loading products...">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
);

const Product = () => {
  const { categorySlug, productSlug, itemSlug } = useParams();

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

  // Find category recursively
  const findCategory = useCallback(
    (categories, slug) => {
      for (const cat of categories) {
        const catSlug = cat.slug || slugify(cat.category || cat.name);
        if (catSlug === slug) return cat;

        if (cat.subcategories?.length > 0) {
          const found = findCategory(cat.subcategories, slug);
          if (found) return found;
        }
      }
      return null;
    },
    [slugify]
  );

  // Find product recursively
  const findProductRecursively = useCallback(
    (categories, productSlug) => {
      for (const cat of categories) {
        if (cat.products) {
          const found = cat.products.find(
            (p) => (p.slug || slugify(p.name)) === productSlug
          );
          if (found) return found;
        }

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
    const loadData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/data/products.json");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const json = await res.json();
        setData(json);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Update main image
  useEffect(() => {
    if (!data || !categorySlug) return;

    const category = findCategory(data, categorySlug);
    if (!category) return;

    const product = productSlug ? findProductRecursively([category], productSlug) : null;

    if (product && itemSlug && product.items) {
      const item = product.items.find(
        (it) => (it.slug || slugify(it.name)) === itemSlug
      );
      if (item && item.image) {
        setMainImage(item.image);
        return;
      }
    }

    if (product?.image) {
      setMainImage(product.image);
      return;
    }

    if (category.categoryImage) {
      setMainImage(category.categoryImage);
      return;
    }

    setMainImage("");
  }, [data, categorySlug, productSlug, itemSlug, findCategory, findProductRecursively, slugify]);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>{error}</p>;
  if (!data) return <p>No data found.</p>;

  const category = findCategory(data, categorySlug);
  if (!category) return <p>under working</p>;

  const product = productSlug ? findProductRecursively([category], productSlug) : null;

  let currentItem = null;
  if (product && itemSlug && product.items) {
    currentItem = product.items.find(
      (it) => (it.slug || slugify(it.name)) === itemSlug
    );
  }

  // Flatten products for category page
  const flattenProducts = (cat) => {
    let items = [...(cat.products || [])];
    if (cat.subcategories) {
      for (const sub of cat.subcategories) {
        items = [...items, ...flattenProducts(sub)];
      }
    }
    return items;
  };

  const allProducts = flattenProducts(category);
  const categorySlugValue = category.slug || slugify(category.category);

  return (
    <div className="product-page" role="main">
      
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">Home</Link>
        <span> / </span>

        <Link to={`/products/${categorySlugValue}`}>{category.category}</Link>

        {product && (
          <>
            <span> / </span>
            <Link to={`/products/${categorySlugValue}/${product.slug || slugify(product.name)}`}>
              {product.name}
            </Link>
          </>
        )}

        {currentItem && (
          <>
            <span> / </span>
            <span aria-current="page">{currentItem.name}</span>
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
            <img src={category.categoryImage} alt={category.category} loading="lazy" />
          )}
        </div>
      </div>

      {/* ===========================
          CONDITIONAL RENDERING
      =========================== */}

      {currentItem ? (
        /* ITEM DETAIL */
        <div className="product-detail">
          <div className="product-description">
            <h3>{currentItem.name}</h3>
            <p>{currentItem.description}</p>
          </div>

          <div className="product-image-container">
            {mainImage && <img src={mainImage} alt={currentItem.name} className="product-image" />}

            {currentItem.gallery?.length > 0 && (
              <div className="product-gallery">
                {currentItem.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${currentItem.name} ${i + 1}`}
                    className={`gallery-thumb ${mainImage === img ? "active" : ""}`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ) : product ? (
        product.items?.length > 0 ? (
          /* PRODUCT WITH MULTIPLE ITEMS */
          <div className="items-grid">
            <h3>{product.name}</h3>
            {product.description && <p>{product.description}</p>}

            <div className="product-grid">
              {product.items.map((it, i) => {
                const itemSlugValue = it.slug || slugify(it.name);
                const productSlugValue = product.slug || slugify(product.name);

                return (
                  <Link
                    key={i}
                    to={`/products/${categorySlugValue}/${productSlugValue}/${itemSlugValue}`}
                    className="product-card"
                  >
                    <div
                      className="product-thumb"
                      style={{ backgroundImage: `url(${it.image})` }}
                      role="img"
                      aria-label={it.name}
                    />
                    <h4>{it.name}</h4>
                    <p>{it.shortDesc}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          /* PRODUCT DETAIL (NO ITEMS) */
          <div className="product-detail">
            <div className="product-description">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-image-container">
              {mainImage && <img src={mainImage} alt={product.name} className="product-image" />}

              {product.gallery?.length > 0 && (
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
        )
      ) : (
        /* CATEGORY PAGE (PRODUCT LIST) */
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

      {/* CONTACT US SECTION */}
      <section className="contact-us-section">
        <div className="container contact-box">
          <h2>📞 Contact Us</h2>
          <p>
            Need premium quality products, bulk orders, or export details?
            Our team is here to help 24/7.
          </p>

          <div className="contact-details">
            <p>✉️ <a href="mailto:info@boe9.com">info@boe9.com</a></p>
            <p>✉️ <a href="mailto:exports@boe9.com">exports@boe9.com</a></p>

            <p><strong>📞 Phone:</strong> +91 9272131561</p>

            <p><strong>🌍 Location:</strong> Nashik, Maharashtra, India</p>
          </div>

          <Link to="/ContactUs" className="contact-btn">
            Send Inquiry →
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Product;
