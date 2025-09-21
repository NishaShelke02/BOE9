import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/fly.jpg",
      title: "Construction - Fly Ash Bricks",
      description: "Building a sustainable future with durable and eco-friendly fly ash brick solutions",

      cta: "Explore Products"
    },
    {
      image: "/images/agri.jpg",
      title: "Premium Organic Fertilizers",
      description: "Enhance soil health and crop yield naturally",
      cta: "Learn More"
    },
    {
      image: "/images/Renewable.jpg",
      title: "Renewable Energy Innovations",
      description: "Harnessing nature's power for a sustainable future",
      cta: "Discover Solutions"
    },
    {
      image: "/images/food.jpeg",
      title: "Healthy Food Products",
      description: "Nutritious and organic food for better living",
      cta: "View Products"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="home">
      {/* Hero Slider Section */}
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
                  <h1 className="slide-title">{slide.title}</h1>
                  <p className="slide-description">{slide.description}</p>
                  <button className="cta-button">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="slider-arrow prev-arrow" onClick={prevSlide}>
          ‹
        </button>
        <button className="slider-arrow next-arrow" onClick={nextSlide}>
          ›
        </button>

        {/* Dots Indicator */}
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

      {/* Features Section */}
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

      {/* Products Preview Section */}
      <section className="products-preview">
        <div className="container">
          <h2 className="section-title">Our Featured Products</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('/images/fly.jpg')"}}></div>
              <h3>Construction - Fly Ash Bricks</h3>
              <p>Building a sustainable future with durable and eco-friendly fly ash brick solutions</p>
            </div>
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('/images/Food.jpeg')"}}></div>
              <h3>Health Foods</h3>
              <p>Nutritious organic food products for healthy living</p>
            </div>
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('/images/renewable.jpg')"}}></div>
              <h3>Renewable Energy</h3>
              <p>Eco-friendly energy solutions for a sustainable future</p>
            </div>
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('/images/electrical.jpg')"}}></div>
              <h3>Electrical Solutions</h3>
              <p>Innovative electrical products for modern agriculture</p>
            </div>
          </div>
          <div className="text-center">
            <button className="view-all-btn">View All Products</button>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Home;