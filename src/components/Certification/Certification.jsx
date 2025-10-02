// src/components/Certification/Certification.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Certification.css";

const Certification = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/ContactUs"); // 👈 make sure you have this route defined in App.js
  };

  return (
    <div className="certification-container">
      {/* Hero Section */}
      <section className="certification-hero">
        <div className="container">
          <h1>We are Certified</h1>
          <p>
            At <strong>BOE9 Export Import Pvt Ltd</strong>, we are proud to hold
            multiple government-recognized certifications, ensuring trust,
            transparency, and global compliance for our exports. These
            certifications empower us to deliver authentic and quality products
            across the world.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="certifications-list">
        <div className="container">
          <h2>Our Key Certifications</h2>
          <div className="cert-grid">
            {/* APEDA */}
            <div className="cert-item">
              <h3>🔬 APEDA</h3>
              <p>
                Certified by the Agricultural and Processed Food Products Export
                Development Authority for seamless exports of agri-based
                products worldwide.
              </p>
              <img src="/images/APEDA.png" alt="APEDA Logo" className="cert-logo" />
            </div>

            {/* Aadhaar */}
            <div className="cert-item">
              <h3>🆔 Aadhaar Verified</h3>
              <p>
                Registered and verified under India’s Aadhaar framework to ensure
                transparency in business identity.
              </p>
              <img src="/images/AADHAAR.png" alt="Aadhaar Logo" className="cert-logo" />
            </div>

            {/* DGFT */}
            <div className="cert-item">
              <h3>📑 DGFT</h3>
              <p>
                Licensed with the Directorate General of Foreign Trade, allowing
                us to conduct import-export operations legally.
              </p>
              <img src="/images/DGFT.png" alt="DGFT Logo" className="cert-logo" />
            </div>

            {/* FICCI */}
            <div className="cert-item">
              <h3>🏢 FICCI</h3>
              <p>
                Member of the Federation of Indian Chambers of Commerce &amp;
                Industry, supporting global trade networks.
              </p>
              <img src="/images/FICCI.png" alt="FICCI Logo" className="cert-logo" />
            </div>

            {/* GST */}
            <div className="cert-item">
              <h3>💰 GST Registered</h3>
              <p>
                Fully compliant with Goods and Services Tax regulations,
                ensuring lawful financial operations.
              </p>
              <img src="/images/GST.png" alt="GST Logo" className="cert-logo" />
            </div>

            {/* MSME */}
            <div className="cert-item">
              <h3>🏭 MSME</h3>
              <p>
                Recognized under India’s Micro, Small, and Medium Enterprises
                (MSME) scheme to promote sustainable business growth.
              </p>
              <img src="/images/MSME.png" alt="MSME Logo" className="cert-logo" />
            </div>

            {/* Spice Board */}
            <div className="cert-item">
              <h3>🌶 Spice Board of India</h3>
              <p>
                Certified by the Spices Board of India, ensuring authenticity
                and quality for our premium spices exports.
              </p>
              <img src="/images/SPICEB.png" alt="Spice Board Logo" className="cert-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cert-cta">
        <div className="container">
          <h2>Verify Our Certifications</h2>
          <p>
            Download our official certificates or get in touch with us for
            verification details.
          </p>
          <div className="cta-buttons">
            <a href="/certificates.pdf" className="cta-button" download>
              Download Certificates
            </a>
            <button className="cta-button" onClick={handleContactClick}>
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certification;
