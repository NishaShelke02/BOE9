import React, { useState } from "react";
import "./ProductDetails.css";

const ProductDetails = ({ product }) => {
  // ✅ Always call hooks first
  const [mainImage, setMainImage] = useState(product?.image || "");

  // Early return is fine after hooks
  if (!product) return <p>No product details available.</p>;

  const gallery = product.gallery || [];

  return (
    <div className="product-details-container">
      {/* Left Side: Product Image */}
      <div className="product-image-section">
        <div className="main-image-wrapper">
          <img src={mainImage} alt={product.name} className="main-image" />
        </div>

        {gallery.length > 0 && (
          <div className="thumbnail-gallery">
            {gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.name} ${i + 1}`}
                className={`thumbnail ${mainImage === img ? "active" : ""}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Right Side: Product Description */}
      <div className="product-info-section">
        <h1 className="product-title">{product.name}</h1>
        {product.subtitle && <h3 className="product-subtitle">{product.subtitle}</h3>}

        <p className="product-description">{product.description}</p>

        {product.features && product.features.length > 0 && (
          <div className="product-features">
            <h4>Key Features:</h4>
            <ul>
              {product.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        )}

        {product.certifications && (
          <div className="product-certification">
            <h4>Certifications:</h4>
            <p>{product.certifications}</p>
          </div>
        )}

        <div className="product-buttons">
          <a href="/ContactUs" className="btn primary">
            Enquire Now
          </a>
          <a href="/products" className="btn secondary">
            Back to Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
