import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3>BOE9</h3>
          <p>
            Exporting excellence in Organic food, agriculture, renewable energy, and more.
            Quality products delivered globally with trust.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/AboutUs/our-company">About Us</Link></li>
            <li><Link to="/AboutUs/Certification">Certification</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Product">Products</Link></li>
            <li><Link to="/Blogs">Blogs</Link></li>
            <li><Link to="/WhyUs">Why Us</Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
          </ul>
        </div>

        {/* Product Categories */}
        <div className="footer-section">
          <h4>Products</h4>
          <ul className="footer-links">
            <li><Link to="/products/agriculture">Agriculture Organic Fertilizer</Link></li>
            <li><Link to="/products/food-fmcg-health-food">Food & FMCG - Health Food</Link></li>
            <li><Link to="/products/medicinal-herbal-plants">Medicinal & Herbal Plants</Link></li>
            <li><Link to="/products/renewable-energy">Organic Products</Link></li>
            
            <li><Link to="/products/indian-spices">Indian Spices</Link></li>
            <li><Link to="/products/indian-super-foods">Indian Super Foods</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📍 Nashik, Maharashtra, India</p>
          <p>✉️ <a href="mailto:info@boe9.com">info@boe9.com</a></p>
          <p> <a href="mailtoExport@boe9.com">Export@boe9.com</a></p>
          <p>📞 +91 9272131561 </p>
          <p>📞 +91 9737305655 </p>
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
