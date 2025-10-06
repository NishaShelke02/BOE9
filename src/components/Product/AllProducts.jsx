import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllProducts.css";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Slugify helper - move above so it can be used anywhere
  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[&()]/g, "")
      .replace(/[^\w-]+/g, "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/data/products.json");
        const json = await res.json();

        const productsList = [];

        // Recursive function to handle all subcategories
        const addProducts = (category) => {
          // Add products of this category
          (category.products || []).forEach((prod) => {
            productsList.push({
              ...prod,
              categorySlug: category.slug || slugify(category.category || category.name),
              subcategorySlug: null,
            });
          });

          // Handle subcategories recursively
          (category.subcategories || []).forEach((sub) => {
            // Add products from subcategory
            (sub.products || []).forEach((prod) => {
              productsList.push({
                ...prod,
                categorySlug: category.slug || slugify(category.category || category.name),
                subcategorySlug: sub.slug || slugify(sub.name),
              });
            });
            // Recursively process nested subcategories
            if (sub.subcategories) addProducts(sub);
          });
        };

        json.forEach((category) => addProducts(category));

        setAllProducts(productsList);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading all products...</p>;

  return (
    <div className="all-products-page container">
      <h1>All Products</h1>
      <div className="product-grid">
        {allProducts.map((p, index) => (
          <ProductCard key={index} product={p} />
        ))}
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.image);

  const handleMouseEnter = () => {
    if (product.gallery && product.gallery.length > 0) {
      let i = 0;
      product.hoverInterval = setInterval(() => {
        setCurrentImage(product.gallery[i]);
        i = (i + 1) % product.gallery.length;
      }, 1000);
    }
  };

  const handleMouseLeave = () => {
    clearInterval(product.hoverInterval);
    setCurrentImage(product.image);
  };

  // URL with optional subcategory
  const productLink = `/products/${product.categorySlug}${
    product.subcategorySlug ? `/${product.subcategorySlug}` : ""
  }/${product.slug}`;

  return (
    <Link
      to={productLink}
      className="product-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {currentImage && (
        <div
          className="product-thumb"
          style={{ backgroundImage: `url(${currentImage})` }}
        />
      )}
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.shortDesc}</p>
      </div>
    </Link>
  );
};

export default AllProducts;
