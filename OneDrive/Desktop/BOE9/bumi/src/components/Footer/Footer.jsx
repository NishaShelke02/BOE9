import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Main Footer Content */}
        <div className="footer-content">
          
        
          

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/blogs">Blogs</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="footer-section">
            <h3 className="footer-title">Our Products</h3>
            <ul className="footer-links">
              <li><a href="/products/agriculture">Agriculture Solutions</a></li>
              <li><a href="/products/food">Health Foods</a></li>
              <li><a href="/products/energy">Renewable Energy</a></li>
              <li><a href="/products/construction">Construction Materials</a></li>
              <li><a href="/products/electronics">Electronics</a></li>
              <li><a href="/products/technology">Technology</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Nashik , Maharashtra, India - 422010</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href="tel:+919272131561">+91 9272131561</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:info@boe9.com">info@boe9.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <span>Available 24/7</span>
              </div>
            </div>
          </div>

        </div>

        

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 BOE9. All rights reserved.Designed & Managed by Nivvish InfoTech</p>
            <div className="footer-bottom-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-service">Terms of Service</a>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;