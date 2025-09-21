import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-intro">
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
      </section>

      <section className="about-expertise">
        <h2>Our Expertise, Designed for Your Industry</h2>

        <div className="expertise-item">
          <h3>🌱 Organic Agriculture</h3>
          <p>
            You care about your soil and your future. That’s why we offer Neem Oil, Vermicompost, 
            animal and vegetable fertilizers, and seaweed-based products—to help you cultivate 
            chemical-free crops and restore the earth’s natural vitality.
          </p>
        </div>

        <div className="expertise-item">
          <h3>🥗 Health Foods & FMCG</h3>
          <p>
            Your consumers expect more—they want nutrient-dense, responsibly sourced ingredients with 
            full transparency. Our makhana, millet flour, misal mix, jackfruit, tofu, frozen vegetables, 
            and more deliver both health and authenticity.
          </p>
        </div>

        <div className="expertise-item">
          <h3>⚡ Renewable Energy & Eco-conscious Construction</h3>
          <p>
            Progress means building and powering the future responsibly. With our biomass briquettes 
            and fly ash bricks, you drive sustainability—from sustainable energy to durable, 
            environmentally responsible materials.
          </p>
        </div>

        <div className="expertise-item">
          <h3>🕉️ Traditional & Religious Products</h3>
          <p>
            We respect traditions. Our cow dung cakes are sourced with care for both soil enrichment 
            and ceremonial use—linking ancient wisdom to modern sustainability.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
