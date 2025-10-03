import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Slugify function to create URL-friendly paths
const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[&()]/g, "") // Remove &, (, )
    .replace(/[^\w-]+/g, ""); // Remove other special characters

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // For PRODUCTS
  const [activeAbout, setActiveAbout] = useState(null); // For ABOUT US dropdown
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle

  const productCategories = [
    {
      name: "Food & FMCG - Health Food",
      products: [
        "Nashik Misal Mix",
        "Jackfruit Products",
        "Tofu",
        "Frozen Green Peas",
        "Onions",
        "Jaggery",
      ],
    },
    {
      name: "Medicinal & Herbal Plants",
      
      products: [
        "Ashwagandha",
        "Zedoary",
        "Shatavari",
        "Brahmi/Gotu Kola",
        "Saptrangi",
        "Giloy",
        "Moringa",
      ],
    },
    {
      name: "Renewable Energy",
      products: ["Biomass Briquettes"],
    },
    {
      name: "Construction",
      products: ["Fly Ash Bricks"],
    },
    {
      name: "Indian Spices",
      products: ["Spices"],
    },
    {
      name: "Indian Super Foods",
      products: ["Makhana (Fox Nuts)",
         "Gluten-Free/Roasted millets products"
        ],
    },
    {
      name: "Agriculture",
      products: ["Organic Manures",
         "Biofertilizer"],
    },
  ];

  const aboutSubItems = [
    { name: "Our Company", path: "/AboutUs/our-company" },
    { name: "Certification", path: "/AboutUs/certification" },
  ];

  return (
    <header className="navbar-header">
      {/* Top Bar */}
      <div className="navbar-top">
        <div className="navbar-location">📍 Nashik, Maharashtra, India</div>
        <div className="navbar-contact">
          <Link to="mailto:info@boe9.com"> info@boe9.com</Link>
        </div>
        <div className="navbar-social">
          <a
            href="https://www.facebook.com/profile.php?id=61580965360742&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <img src="/logo.png" alt="Bumi Logo" className="logo-image" />
        </div>

        {/* Mobile Hamburger */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
          </li>

          {/* Products Dropdown */}
          <li
            className="nav-item dropdown-trigger"
            onMouseEnter={() => setActiveDropdown("products")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className="nav-link dropdown-toggle"
              onClick={(e) => {
                e.preventDefault();
                setActiveDropdown(activeDropdown === "products" ? null : "products");
              }}
            >
              PRODUCTS{" "}
              <span className={`dropdown-arrow ${activeDropdown === "products" ? "open" : ""}`}>
                ▼
              </span>
            </button>

            {activeDropdown === "products" && (
              <div className="vertical-dropdown">
                <ul className="product-categories">
                  {productCategories.map((category, index) => (
                    <li key={index} className="category-item">
                      <Link
                        to={`/products/${slugify(category.name)}`}
                        className="category-header"
                        onClick={() => setMenuOpen(false)}
                      >
                        {category.name}
                      </Link>

                      {category.products && (
                        <div className="sub-dropdown">
                          <ul className="product-list">
                            {category.products.map((product, pIndex) => (
                              <li key={pIndex}>
                                <Link
                                  to={`/products/${slugify(category.name)}/${slugify(product)}`}
                                  onClick={() => setMenuOpen(false)}
                                >
                                  {product}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          {/* Services */}
          <li className="nav-item">
            <Link to="/Services" onClick={() => setMenuOpen(false)}>
              SERVICES
            </Link>
          </li>

          {/* About Us Dropdown */}
          <li
            className="nav-item dropdown-trigger"
            onMouseEnter={() => setActiveAbout("about")}
            onMouseLeave={() => setActiveAbout(null)}
          >
            <button
              className="nav-link dropdown-toggle"
              onClick={(e) => {
                e.preventDefault();
                setActiveAbout(activeAbout === "about" ? null : "about");
              }}
            >
              ABOUT US{" "}
              <span className={`dropdown-arrow ${activeAbout === "about" ? "open" : ""}`}>▼</span>
            </button>

            {activeAbout === "about" && (
              <div className="vertical-dropdown">
                <ul className="product-categories">
                  {aboutSubItems.map((item, index) => (
                    <li key={index} className="category-item">
                      <Link
                        to={item.path}
                        className="category-header"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>

          <li className="nav-item">
            <Link to="/WhyUs" onClick={() => setMenuOpen(false)}>
              WHY US
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Blogs" onClick={() => setMenuOpen(false)}>
              BLOGS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ContactUs" onClick={() => setMenuOpen(false)}>
              CONTACT US
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
