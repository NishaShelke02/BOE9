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
  <div className="product-card">
    <div
      className="product-image"
      style={{ backgroundImage: `url(${product.image})` }}
      role="img"
      aria-label={product.name}
      onClick={onClick}
    ></div>
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <button className="view-product-btn" onClick={onClick}>
      View Product
    </button>
  </div>
);

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/Spices.png",
      title: "Indian Homemade Spices",
      description:
        "Experience the authentic flavors of India with our homemade spices, crafted to perfection.",
        link: "/Products/indian-spices",
      cta: "Shop Now"
     
    },
    {
      image: "/images/Organic.png",
      title: "Organic Products",
      description:
        "Pure, natural, and sustainable organic products for a healthier lifestyle.",
      link: "/Products/agriculture",
      cta: "Explore More"
    },
    {
      image:" /images/Medicinal.jpeg",
      title: "Medicinal & Herbal Plants",
      description:
        "Sourcing India's finest organic medicinal and herbal plants for wellness and vitality.",
      link: "/Products/medicinal-herbal-plants",
      cta: "Discover Now"
    },
    {
      image: "/images/Biofertilizer.jpeg",
      title: "Agricultural Organic Fertilizers - Biofertilizer",
      
      
      link: "/Products/agriculture",
      cta: "Buy Now"
    },
    {
      image: "/images/millet.png",
      title: "Healthy Food Products - Gluten-Free Millets",
      description:
        "Fueling health naturally with gluten-free superfoods for a better tomorrow.",
      link: "/Products/indian-super-foods",
      cta: "Shop Healthy"
    },
    {
      image: "/images/Misal.png",
      title: "Nashik Misal Mix - Ready to Eat",
      
        
      link: "/Products/nashik-misal-mix",
      cta: "Order Now"
    },
  ];

  const products = [
    
    {
      name: "Cow Dung Cakes",
      image: "/images/Cow.png",
      description:
        "Nourishing your soil with natural cow dung cakes for healthier crops.",
      link: "/Products/agriculture",
    },
   
    
    {
      name: "Indian Spices",
      image: "/images/Spices.png",
      description: "Experience the authentic flavors of India with our homemade spices.",
      link: "/Products/indian-spices",
    },
    {
      name: "Gluten-Free Millets",
      image: "/images/millet.png",
      description: "Fueling health naturally with gluten-free superfoods.",
      link: "/Products/indian-super-foods",
    },
    {
      name: "Nashik Misal Mix",
      image: "/images/misal.png",
      description: "Experience the authentic taste of Nashik with our Misal Mix.",
      link: "/Products/nashik-misal-mix",
    },
    {
      name: "Super Food - Makhana",
      image: "/images/Makhana.png",
      description: "Low-fat, high-fiber, and protein-rich fox nuts for healthy snacking.",
      link: "/Products/makhana-fox-nuts",
    },
    {
      name: "Medicinal & Herbal Plants" ,
      image: "/images/Medicinal1.jpeg",
      description: "Sourcing India's finest organic medicinal and herbal plants for wellness.",
      link: "/Products/medicinal-herbal-plants",
    }
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
                <button className="cta-button" onClick={() => navigate(slide.link)}>

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
    </div>
  );
};

export default Home;
