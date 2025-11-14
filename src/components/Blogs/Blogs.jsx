import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      
      {/* Hero Section */}
      <section className="blogs-hero">
        <div className="container">
          <h1>🧅 Premium Indian Red Onions – Naturally Grown</h1>
          <p className="tagline">“Freshness You Can See, Quality You Can Taste”</p>
          <p>
            Our Indian Red Onions are cultivated using sustainable farming
            practices that ensure rich flavor, deep red color, and long shelf
            life. Grown in fertile soils with natural care, these onions remain
            a preferred choice for global buyers.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="blog-video-section">
        <div className="container">
          <h2>🎥 A Glimpse of Our Onion Farms</h2>

          <div className="video-wrapper">
            <video
              src="/video/onion.mp4"
              controls
              muted
              autoPlay={false}
              className="farm-video"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="video-caption">
            See how our farm-fresh onions are cultivated, harvested, and handled
            with natural farming techniques for premium export quality.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">
        <div className="container">
          <h2>🌱 Naturally Grown, Carefully Harvested</h2>
          <p>
            Our onions are grown without harmful chemicals, ensuring they retain
            their strong flavor, crisp texture, and vibrant red color. From soil
            preparation to final packing, every stage follows best agricultural
            practices.
          </p>

          <p>
            Due to their long shelf life and low moisture content, Indian Red
            Onions are highly demanded in international markets, especially in
            Southeast Asia, the Middle East, and Europe.
          </p>
        </div>
      </section>

      {/* Turmeric Section */}
      <section className="blogs-hero">
        <div className="container">
          <h1>🌿 Organic Turmeric – High Curcumin & Pure Aroma</h1>
          <p className="tagline">“Golden Spice of India, Naturally Cultivated”</p>
          <p>
            Our organic turmeric is cultivated using traditional sustainable
            methods. Packed with natural oils and high curcumin content, it is
            widely used in food, health, and wellness industries across the
            world.
          </p>
        </div>
      </section>

      {/* Video Section – Turmeric */}
      <section className="blog-video-section">
        <div className="container">
          <h2>🎥 Inside Our Organic Turmeric Farms</h2>

          <div className="video-wrapper">
            <video
              src="/video/turmeric.mp4"
              controls
              muted
              autoPlay={false}
              className="farm-video"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="video-caption">
            Experience how our organic turmeric is cultivated with natural care,
            maintaining its rich color and high curcumin potency.
          </p>
        </div>
      </section>

      {/* Blog Content – Turmeric */}
      <section className="blog-content">
        <div className="container">
          <h2>🌱 Organic Farming, Pure Benefits</h2>
          <p>
            From planting to processing, every step avoids chemicals and
            synthetic fertilizers. This ensures turmeric retains its authentic
            colour, aroma, and medicinal value.
          </p>

          <p>
            Our turmeric is carefully dried, polished, and processed to preserve
            its natural oils — making it a globally preferred spice.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Blogs;
