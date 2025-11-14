import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3>BOE9</h3>
          <p>
            Documentation errors. Quality swings. Certification hurdles.
                      These are the hidden costs that eat into your profits.
                      Our value is eliminating these costs before they occur.
                        We deliver a seamless, transparent, and dependable export process.
                          Reach out to build a hassle-free import pipeline 
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
             <li><Link to="/Product">Products</Link></li>
             <li><Link to="/Services">Services</Link></li>
            <li><Link to="/AboutUs/our-company">About Us</Link></li>
            <li><Link to="/AboutUs/Certification">Verify Us</Link></li>
            <li><Link to="/WhyUs">Why Us</Link></li>
            <li><Link to="/Blogs">Blog</Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
          </ul>
        </div>

        {/* Product Categories */}
        <div className="footer-section">
          <h4>Products</h4>
          <ul className="footer-links">
            <li><Link to="/products/organic-products">Organic Products(NPOP Certified)</Link></li>
            <li><Link to="/products/indian-super-foods">Indian Super Foods</Link></li>
            <li><Link to="/products/indian-spices">Indian Spices</Link></li>
            <li><Link to="/products/dehydrated-products">Dehydrated Products & Powder</Link></li>
            
            <li><Link to="/products/food-and-fmcg-health-food">Food & FMCG - Health Food</Link></li>
            <li><Link to="/products/medicinal-herbal-plants">Medicinal & Herbal Products</Link></li>
           <li><Link to="/products/agriculture">Agriculture Organic Fertilizer</Link></li>
            
            
            
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📍 Nashik, Maharashtra, India</p>
          <p>✉️ <a href="mailto:info@boe9.com">info@boe9.com</a></p>
          <p> ✉️<a href="mailto:exports@boe9.com">exports@boe9.com</a></p>
         <p>
          <a
            href="https://wa.me/919272131561"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <FaWhatsapp style={{ color: "#25D366", marginRight: "8px" }} />
           +91 9272131561
          </a>
          </p>
          
         <p>
          <a
            href="https://wa.me/919737305655"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
        >
          <FaWhatsapp style={{ color: "#25D366", marginRight: "8px" }} />
          +91 9737305655
          </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BOE9. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
