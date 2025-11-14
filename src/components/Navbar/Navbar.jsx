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
          <a href="mailto:info@boe9.com">info@boe9.com</a>
        </div>
        <div className="top-right">
          <a
            href="https://www.facebook.com/profile.php?id=61580965360742&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />

          </a>
          <a
            href="https://wa.me/919272131561"
            target="_blank"
            rel="noopener noreferrer"
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
              <img src="/logo.png" alt="BOE9 Logo" />
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
              <Link to="/">HOME</Link>
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
                    <Link to="/products/organic-products">
                      Organic Products (NPOP Certified)
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/indian-super-foods">
                      Indian Super Foods
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/indian-spices">Indian Spices</Link>
                  </li>
                  <li>
                    <Link to="/products/dehydrated-products">
                      Dehydrated Products & Powder
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/food-and-fmcg-health-food">
                      Food & FMCG – Ready to Eat & Cook Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/medicinal-herbal-plants">
                      Medicinal & Herbal Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/products/agriculture">
                      Agriculture Organic Fertilizer – Save the Soil
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/services">SERVICES</Link>
            </li>

            {/* About Us - single link */}
            <li>
              <Link to="/AboutUs/our-company">ABOUT US</Link>
            </li>

            {/* Verify Us - single link (no dropdown) */}
            <li>
              <Link to="/AboutUs/Certification">VERIFY US</Link>
            </li>
            <li>
              <Link to="/Blogs">BLOG</Link>
            </li>

            <li>
              <Link to="/ContactUs">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
