import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

// Reusable FeatureCard Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Reusable ProductCard Component
const ProductCard = ({ product, onClick }) => (
  <div className="product-card" onClick={onClick}>
    <div className="product-image-container">
      <img src={product.image} alt={product.name} className="product-img" />
    </div>
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <button className="view-product-btn">
      View Product
    </button>
  </div>
);

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/Organic.png",
      title: "Organic Products",
      description:
        "Pure, natural, and sustainable organic products for a healthier lifestyle.",
      link: "/products/organic-products",
      cta: "Explore More"
    },
    {
      image: "/images/millet.png",
      title: "Healthy Food Products - Gluten-Free Millets",
      description:
        "Fueling health naturally with gluten-free superfoods for a better tomorrow.",
      link: "/products/indian-super-foods",
      cta: "Shop Healthy"
    },
    {
      image: "/images/Spices.png",
      title: "Indian Homemade Spices",
      description:
        "Experience the authentic flavors of India with our homemade spices, crafted to perfection.",
      link: "/products/indian-spices",
      cta: "Shop Now"
    },
    {
      image: "/images/dehydrated.png",
      title: "Dehydrated Products & Powder",
      description:
        "Premium quality dehydrated vegetables and powders for culinary excellence.",
      link: "/products/dehydrated-products",
      cta: "Buy Now"
      
    },
    {
      image: "/images/onions5.png",
      title: "Onions",
      description: "Fresh, high-quality onions sourced directly from farms for superior taste and nutrition.",
      link: "/products/food-and-fmcg-health-food",
      cta: "Order Now"
    },
    {
      image: "/images/Medicinal.jpeg",
      title: "Medicinal & Herbal Plants",
      description:
        "Sourcing India's finest organic medicinal and herbal plants for wellness and vitality.",
      link: "/products/medicinal-herbal-plants",
      cta: "Discover Now"
    }
    
    
  ];

  const products = [
    {
      name: "Organic Products",
      image: "/images/Organic.png",
      description:
        "Pure, natural, and sustainable organic products for a healthier lifestyle.",
      link: "/products/organic-products",

    },
     {
      name: "Indian Super Food - Makhana",
      image: "/images/Makha.png",
      description: "Low-fat, high-fiber, and protein-rich fox nuts for healthy snacking.",
      link: "/products/indian-super-foods",
    },
    {
      name: "Indian Spices",
      image: "/images/Spices.png",
      description: "Experience the authentic flavors of India with our homemade spices.",
      link: "/products/indian-spices",
    },
    {
      name: "Dehardrated Product & Powder",
      image: "/images/dehyadrated-veg.png",
      description: "Premium quality dehydrated vegetables and powders for culinary excellence.",
      link: "/products/dehydrated-products",
    },
    
    {
      name: "Gluten-Free Millets",
      image: "/images/millet.png",
      description: "Fueling health naturally with gluten-free superfoods.",
      link: "/products/indian-super-foods",
    },
    {
      name: "Food & FMCG - Ready to Eat & Cook Products",
      image: "/images/food.png",
      description: "Convenient and nutritious ready-to-eat and cook food products.",
      link: "/products/food-and-fmcg-health-food",

    },
    
   
    {
      name: "Medicinal & Herbal Plants",
      image: "/images/Medicinal1.jpeg",
      description: "Sourcing India's finest organic medicinal and herbal plants for wellness.",
      link: "/products/medicinal-herbal-plants",
    },
    {
      name: "Agriculture Organic Fertilizer",
      image: "/images/seaweed.png",
      description: "Eco-friendly organic fertilizers to enrich your soil and boost crop yield.",
      link: "/products/agriculture",
    },
  ];

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="home">
      {/* Hero Slider */}
      <section className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay">
              <div className="slide-content">
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-description">{slide.description}</p>
                <button className="cta-button" 
                  onClick={() => {
                    console.log("Navigating to:", slide.link);
                    navigate(slide.link);
                  }}
                >
                  {slide.cta || "Learn More"}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button className="slider-arrow prev-arrow" onClick={prevSlide}>‹</button>
        <button className="slider-arrow next-arrow" onClick={nextSlide}>›</button>
        
        {/* Dots */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </section>

      
      {/* Products Preview */}
      <section className="products-preview">
        <div className="container">
          <h2 className="section-title">Our Featured Products</h2>
          <div className="products-grid">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                onClick={() => navigate(product.link)}
              />
            ))}
          </div>
          <div className="text-center">
            <button className="view-all-btn" onClick={() => navigate("/all-products")}>
              View All Products
            </button>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Bumi Organic Exim</h2>
          <div className="features-grid">
            <FeatureCard
              icon="🌱"
              title="100% Organic"
              description="Chemical-free products for sustainable farming and healthy living"
            />
            <FeatureCard
              icon="♻️"
              title="Eco-Friendly"
              description="Environmentally conscious solutions that protect our planet"
            />
            <FeatureCard
              icon="⭐"
              title="Premium Quality"
              description="Highest quality standards ensuring superior results"
            />
            <FeatureCard
              icon="🚚"
              title="Worldwide Delivery"
              description="Fast and reliable delivery across World"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;