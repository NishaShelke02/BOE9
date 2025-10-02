import React, { useState, useEffect } from 'react';
import './Home.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slides for the hero slider
  const slides = [
    {
      image: "/images/fly.png",
      title: "Construction - Fly Ash Bricks",
      description: "Building a sustainable future with durable and eco-friendly fly ash brick solutions.",
      cta: "Explore Products",
      link: "/Products/construction"
    },
    {
      image: "/images/Neem.png",
      title: "Organic Neem Products",
      description: "Enhance your farm and home with 100% natural neem-based products for health and protection.",
      cta: "View Products",
      link: "/Products/agriculture"
    },
    {
      image: "/images/Biofertilizer.jpeg",
      title: "Agricultural Organic Fertilizers - Biofertilizer",
      description: "Nourishing your soil with natural biofertilizers for healthier crops and sustainable farming practices.",
      cta: "Shop Now",
      link: "/Products/biofertilizer"
    },
    {
      image: "/images/Renewable.jpg",
      title: "Renewable Energy Innovations",
      description: "Harnessing nature's power for a sustainable future.",
      cta: "Discover Solutions",
      link: "/Products/renewable"
    },
    {
      image: "/images/Spices.png",
      title: "Indian Homemade Spices",
      description: "Experience the authentic flavors of India with our homemade spices, crafted to perfection.",
      cta: "Shop Now",
      link: "/Products/spices"
    },
    {
      image: "/images/millet.png",
      title: "Healthy Food Products - Gluten-Free Millets",
      description: "Fueling health naturally with gluten-free superfoods for a better tomorrow.",
      cta: "Shop Now",
      link: "/Products/millets"
    },
    {
      image: "/images/Misal.png",
      title: "Nashik Misal Mix - Ready to Eat",
      description: "Experience the authentic taste of Nashik with our Misal Mix – delicious and wholesome.",
      cta: "Explore Now",
      link: "/Products/misal"
    }
  ];

  // Featured products
  const products = [
    {
      name: "Construction - Fly Ash Bricks",
      image: "/images/fly.png",
      description: "Building a sustainable future with durable and eco-friendly fly ash brick solutions.",
      link: "/Products/construction"
    },
    {
      name: "Cow Dung Cakes",
      image: "/images/Cow.png",
      description: "Nourishing your soil with natural cow dung cakes for healthier crops.",
      link: "/Products/agriculture"
    },
    {
      name: "Health Foods",
      image: "/images/Food.jpeg",
      description: "Nutritious organic food products for healthy living.",
      link: "/Products/health-foods"
    },
    {
      name: "Renewable Energy",
      image: "/images/renewable.jpg",
      description: "Eco-friendly energy solutions for a sustainable future.",
      link: "/Products/renewable"
    },
    {
      name: "Indian Homemade Spices",
      image: "/images/Spices.png",
      description: "Experience the authentic flavors of India with our homemade spices.",
      link: "/Products/spices"
    },
    {
      name: "Gluten-Free Millets",
      image: "/images/millet.png",
      description: "Fueling health naturally with gluten-free superfoods.",
      link: "/Products/millets"
    },
    {
      name: "Nashik Misal Mix",
      image: "/images/Misal.png",
      description: "Experience the authentic taste of Nashik with our Misal Mix.",
      link: "/Products/misal"
    },
    {
      name: "Super Food - Makhana",
      image: "/images/Makhana.png",
      description: "Low-fat, high-fiber, and protein-rich fox nuts for healthy snacking.",
      link: "/Products/makhana"
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="home">
      {/* Hero Slider */}
      <section className="hero-slider">
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-overlay">
                <div className="slide-content">
                  {slide.title && <h1 className="slide-title">{slide.title}</h1>}
                  {slide.description && <p className="slide-description">{slide.description}</p>}
                  {slide.cta && slide.link && (
                    <button className="cta-button" onClick={() => navigate(slide.link)}>
                      {slide.cta}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button className="slider-arrow prev-arrow" onClick={prevSlide}>‹</button>
        <button className="slider-arrow next-arrow" onClick={nextSlide}>›</button>

        {/* Dots */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
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
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>100% Organic</h3>
              <p>Chemical-free products for sustainable farming and healthy living</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">♻️</div>
              <h3>Eco-Friendly</h3>
              <p>Environmentally conscious solutions that protect our planet</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Premium Quality</h3>
              <p>Highest quality standards ensuring superior results</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Worldwide Delivery</h3>
              <p>Fast and reliable delivery across World</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="products-preview">
        <div className="container">
          <h2 className="section-title">Our Featured Products</h2>
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <div
                  className="product-image"
                  style={{ backgroundImage: `url(${product.image})` }}
                  role="img"
                  aria-label={product.name}
                ></div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button className="view-product-btn" onClick={() => navigate(product.link)}>
                  View Product
                </button>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="view-all-btn" onClick={() => navigate('/Products')}>
              View All Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
