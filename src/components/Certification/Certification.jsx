// src/components/Certification/Certification.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Certification.css";

const Certification = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/ContactUs"); // 👈 make sure you have this route defined in App.js
  };

  const handleViewPDF = (pdfPath) => {
    window.open(pdfPath, '_blank');
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
              <button className="view-pdf-btn" onClick={() => handleViewPDF('/pdf/APEDA.pdf')}>
                View PDF
              </button>
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
              <h3>📑 DGFT(IEC)</h3>
              <p>
                Licensed with the Directorate General of Foreign Trade, allowing
                us to conduct import-export operations legally.
              </p>
              <img src="/images/DGFT.png" alt="DGFT Logo" className="cert-logo" />
              <button className="view-pdf-btn" onClick={() => handleViewPDF('/pdf/IEC.pdf')}>
                View PDF
              </button>
            </div>

           {/* FSSAI */}
<div className="cert-item">
  <h3>🥗 FSSAI</h3>
  <p>
    Licensed under the Food Safety and Standards Authority of India (FSSAI),
    ensuring our products meet national food safety and quality standards.
  </p>
  <img src="/images/FSSAI.png" alt="FSSAI Logo" className="cert-logo" />
  <button
    className="view-pdf-btn"
    onClick={() => handleViewPDF('/pdf/FSSAI.pdf')}
  >
    View PDF
  </button>
</div>

            {/* GST */}
            <div className="cert-item">
              <h3>💰 GST Registered</h3>
              <p>
                Fully compliant with Goods and Services Tax regulations,
                ensuring lawful financial operations.
              </p>
              <img src="/images/GST.png" alt="GST Logo" className="cert-logo" />
              <button className="view-pdf-btn" onClick={() => handleViewPDF('/pdf/GST.pdf')}>
                View PDF
              </button>
            </div>

            {/* MSME */}
            <div className="cert-item">
              <h3>🏭 MSME(Udyam)</h3>
              <p>
                Recognized under India’s Micro, Small, and Medium Enterprises 
                (MSME)   scheme to promote sustainable business growth.
              </p>
              <img src="/images/MSME.png" alt="MSME Logo" className="cert-logo" />
              <button className="view-pdf-btn" onClick={() => handleViewPDF('/pdf/Udyam.pdf')}>
                View PDF
              </button>
            </div>

            {/* Spice Board */}
            <div className="cert-item">
              <h3>🌶 Spice Board of India</h3>
              <p>
                Certified by the Spices Board of India, ensuring authenticity
                and quality for our premium spices exports.
              </p>
              <img src="/images/SPICEB.png" alt="Spice Board Logo" className="cert-logo" />
              <button className="view-pdf-btn" onClick={() => handleViewPDF('/pdf/SPICEB.pdf')}>
                View PDF
              </button>
            </div>

            {/* ECGC */}
            <div className="cert-item">
              <h3>🛡️ ECGC</h3>
              <p>
                Covered by the Export Credit Guarantee Corporation of India for
                risk mitigation in international trade and export financing.
              </p>
              <img src="/images/ECGC.png" alt="ECGC Logo" className="cert-logo" />
              <button className="view-pdf-btn" onClick={() => handleViewPDF('/pdfs/ECGC.pdf')}>
                View PDF
              </button>
            </div>

            {/* NPOP */}
            <div className="cert-item">
              <h3>🌱 NPOP - Under Progress</h3>
              <p>
                Working towards certification under the National Programme for
                Organic Production to ensure organic standards in our products.
              </p>
              <img src="/images/NPOP.png" alt="NPOP Logo" className="cert-logo" />
              <button className="view-pdf-btn" onClick={() => handleViewPDF('/pdfs/NPOP.pdf')}>
                View PDF
              </button>
            </div>

            {/* FIEO */}
            <div className="cert-item">
              <h3>🏢 FIEO - Under Process</h3>
              <p>
                In the process of affiliation with the Federation of Indian Export
                Organisations for enhanced export support and networking.
              </p>
              <img src="/images/FIEO.png" alt="FIEO Logo" className="cert-logo" />
              <button className="view-pdf-btn" onClick={() => handleViewPDF('/pdfs/FIEO.pdf')}>
                View PDF
              </button>
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
