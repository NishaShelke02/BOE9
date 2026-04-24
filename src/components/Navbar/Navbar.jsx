import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Desktop hover handling
  const handleMouseEnter = (menu) => {
    if (window.innerWidth > 768) setDropdownOpen(menu);
  };
  const handleMouseLeave = () => {
    if (window.innerWidth > 768) setDropdownOpen(null);
  };

  // Mobile click toggle
  const toggleDropdown = (menu) => {
    if (window.innerWidth <= 768) {
      setDropdownOpen(dropdownOpen === menu ? null : menu);
    }
  };

  return (
    <header>
      {/* Top info bar */}
      <div className="top-bar">
        <div className="top-left">
          <span>Nashik, Maharashtra</span>{" "}
          <a href="mailto:info@boe9.com" title="Contact BOE9 via Email">
            info@boe9.com
          </a>
        </div>
        <div className="top-right">
          <a
            href="https://www.facebook.com/profile.php?id=61580965360742&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="BOE9 Facebook"
          >
            <FaFacebook />
          </a>
          
          <a href="https://www.instagram.com/bumi_organicexim?igsh=MWFjMW0yazUzbjZ6Nw==" target="_blank" rel="noopener noreferrer" aria-label="BOE9 Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/109393938/admin/dashboard/" target="_blank" rel="noopener noreferrer" aria-label="BOE9 LinkedIn">
            <FaLinkedin />

          </a>
          <a
            href="https://wa.me/919272131561"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="BOE9 WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <Link to="/">
              <img src="/logo.png" alt="BOE9 Organic Products ,Lakadong Turmeric,Dehydrated Products,Onion Powder and dairy Products" />
            </Link>
          </div>

          {/* Hamburger menu for mobile */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" title="BOE9 Home - Organic Products, Lakadong Turmeric, Dehydrated Products, Onion Powder and Dairy Products">
                HOME
              </Link>
            </li>

            {/* Products Dropdown */}
            <li
              className={`dropdown ${dropdownOpen === "products" ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <span
                className="dropdown-toggle"
                onClick={() => toggleDropdown("products")}
              >
                PRODUCTS <span className="arrow">▲</span>
              </span>
              {dropdownOpen === "products" && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/products/organic-products" title="BOE9 Organic Products - NPOP Certified, Pure and Sustainable">
                      Organic Products (NPOP Certified)
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/indian-super-foods" title="BOE9 Indian Super Foods - Gluten-Free, Nutrient-Rich Options">
                      Indian Super Foods/Gluten-free Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/indian-spices" title="BOE9 Indian Spices - Authentic and High-Quality">
                      Indian Spices
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/dehydrated-products" title="BOE9 Dehydrated Products & Powder - Preserved Nutrients, Ready to Use">
                      Dehydrated Products & Powder
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/food-and-fmcg-health-food" title="BOE9 Fresh Vegetables & Fruits - Natural, Nutritious, and Delicious">
                      Fresh Vegetables & Fruits
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/coffee-and-cocoa-powder" title="BOE9 Coffee & Cocoa Powder - Premium Quality, Rich Flavors">
                      Coffee & Cocoa Powder
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/dairy-products" title="BOE9 Dairy Products - Fresh, Nutritious, and Delightful">
                      Dairy Products
                    </Link>
                  </li>
                 
                </ul>
              )}
            </li>

            <li>
              <Link to="/services" title="BOE9 Services - Comprehensive Solutions for Your Business Needs">
                SERVICES
              </Link>
            </li>

            {/* About Us - single link */}
            <li>
              <Link to="/AboutUs/our-company" title="BOE9 About Us - Our Company, Mission, and Values">
                ABOUT US
              </Link>
            </li>

            {/* Verify Us - single link (no dropdown) */}
            <li>
              <Link to="/AboutUs/Certification" title="BOE9 Verify Us - Certification and Compliance">
                VERIFY US
              </Link>
            </li>
            <li>
              <Link to="/Blogs" title="BOE9 Blogs - Latest News and Insights">
                BLOG
              </Link>
            </li>

            <li>
              <Link to="/ContactUs" title="BOE9 Contact Us - Get in Touch with Our Team">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
