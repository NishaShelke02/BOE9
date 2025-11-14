// AboutUs.jsx
import React from "react";
import "./our-company.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Intro Section */}
      <section className="about-intro">
        <div className="container">
          <h1>About Us</h1>
          <p>
            At <strong>BOE9</strong>, we believe the foundation of every great business starts not with 
            what you do, but with <em>why</em> you do it. Our “Why” is clear: to be a trusted partner 
            in your journey toward a more sustainable and ethical supply chain—so that together, we 
            can build products and brands that stand for something bigger than profit.
          </p>
          <p>
            We understand that your sourcing decisions are about more than ingredients; they’re about 
            earning the trust of your customers, safeguarding your reputation, and making a meaningful 
            impact. That’s why we exist: to provide you with the certainty that every product you 
            receive from us reflects your values as well as ours.
          </p>
          <p>
            BOE9 is not just an exporter. We are your strategic collaborator in organic and sustainable 
            sourcing, bridging the gap between conscientious Indian producers and businesses around the 
            world who demand authenticity, quality, and an unshakeable ethical ethos.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="about-expertise">
        <div className="container">
          <h2>Our Expertise, Designed for Your Industry</h2>
          <div className="expertise-grid">
            
            <div className="expertise-item">
              <h3>🌿 Organic Products (NPOP Certified)</h3>
              <p>
                Your customers value purity, traceability, and trust. Our NPOP-certified organic range ensures 
                authenticity from farm to shelf. From cold-pressed oils and natural sweeteners to certified organic 
                grains and pulses—we help you offer products that protect health, soil, and the planet.
              </p>
            </div>

            <div className="expertise-item">
              <h3>🍛 Indian Super Foods</h3>
              <p>
                India’s traditional superfoods are winning hearts worldwide for their taste and nutrition. Our 
                makhana, millets, amla powder, turmeric latte mix, sesame seeds, jaggery products, and more bring 
                the goodness of ancient wellness into modern diets—clean, powerful, and naturally functional.
              </p>
            </div>

            <div className="expertise-item">
              <h3>🌶️ Indian Spices</h3>
              <p>
                Aroma, flavour, and purity—our spices bring India’s culinary heritage to life. From single-origin 
                turmeric, cumin, and coriander to premium blends like garam masala and chaat masala, we deliver 
                spices that elevate food with authenticity, consistency, and farm-level traceability.
              </p>
            </div>

            <div className="expertise-item">
              <h3>🧄 Dehydrated Products & Powder</h3>
              <p>
                Consistency and long shelf life make our dehydrated ingredients ideal for food processors, HoReCa, 
                and FMCG brands. With dehydrated onion, garlic, tomato, ginger, and a wide range of fruit & vegetable 
                powders, we help businesses achieve flavour stability and zero-waste efficiency.
              </p>
            </div>

            <div className="expertise-item">
              <h3>🍲 Food & FMCG – Ready to Eat & Ready to Cook</h3>
              <p>
                Modern consumers want convenience without compromise. Our ready-to-eat curries, biryanis, snacks, 
                and ready-to-cook mixes deliver authentic Indian flavours using clean, responsibly sourced ingredients—
                perfect for retail shelves, hotels, cloud kitchens, and export markets.
              </p>
            </div>

            <div className="expertise-item">
              <h3>🌱 Medicinal & Herbal Products</h3>
              <p>
                Rooted in Ayurveda and plant-based science, our herbal range includes ashwagandha, giloy, moringa, 
                neem, tulsi, and more—formulated for wellness brands, nutraceuticals, and holistic health businesses 
                looking for purity, potency, and proven benefits.
              </p>
            </div>

            <div className="expertise-item">
              <h3>🌾 Agriculture Organic Fertilizer – Save the Soil</h3>
              <p>
                Healthy soil is the foundation of sustainable farming. Our organic fertilizers—including vermicompost, 
                bio-fertilizers, seaweed extracts, and plant-based nutrient boosters—help farmers restore soil vitality, 
                increase yield naturally, and reduce chemical dependency while protecting the land for future generations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Collaborate?</h2>
          <p>Join us in building a sustainable future. Explore our products or get in touch.</p>
          <div className="cta-buttons">
            <a href="/products" className="cta-button primary">Explore Products</a>
            <a href="/ContactUs" className="cta-button secondary">Contact Us</a>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑ Back to Top
      </button>
    </div>
  );
};

export default AboutUs;
