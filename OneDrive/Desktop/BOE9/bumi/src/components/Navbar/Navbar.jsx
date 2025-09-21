import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const productCategories = [
    {
      name: "Agriculture - Organic Farming",
      products: [
        "Neem Oil (Cold-Pressed)",
        "Cow Dung Cakes (Dry)",
        "Vermicompost with Dung",
        "Seaweed-Based Products"
      ]
    },
    {
      name: "Food & FMCG - Health Food",
      products: [
        "Makhana (Fox Nuts)",
        "Nashik Misal Mix",
        "Roasted millets products",
        "Gluten-free millets (Jowar, Bajra)",
        "Jackfruit products",
        "Indian Homemade Spices",
        "Tofu",
        "Frozen Green Peas",
        "Onions"
      ]
    },
    {
      name: "Renewable Energy",
      products: ["Biomass Briquettes"]
    },
    {
      name: "Construction",
      products: ["Fly Ash Bricks"]
    },
    {
      name: "Electronics & Electrical Industry",
      products: []
    },
    {
      name: "Technology & Hardware",
      products: []
    }
  ];

  const handleProductsClick = (e) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === 'products' ? null : 'products');
  };

  return (
    <header className="navbar-header">
      <div className="navbar-top">
        <div className="navbar-location">
          <span role="img" aria-label="location">📍</span>
          <span>Nashik,Maharashtra,India</span>
        </div>
        <div className="navbar-contact">
          <a href="mailto:info@boe9.com">
            <span role="img" aria-label="mail">✉️</span> info@boe9
.com
          </a>
        </div>
        <div className="navbar-social">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
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
      <nav className="navbar">
        <div className="navbar-brand">
          <img src="/logo.png" alt="Bumi Logo" className="logo-image" />
        </div>
        
        <ul className="nav-menu">
          <li className="nav-item"><Link to="/">HOME</Link></li>
          
          {/* Products Dropdown */}
          <li 
            className="nav-item dropdown-trigger"
            onMouseEnter={() => setActiveDropdown('products')}
            onMouseLeave={() => {
              setActiveDropdown(null);
              setActiveSubmenu(null);
            }}
          >
            <button 
              className="nav-link dropdown-toggle"
              onClick={handleProductsClick}
              aria-expanded={activeDropdown === 'products'}
            >
              PRODUCTS <span className={`dropdown-arrow ${activeDropdown === 'products' ? 'open' : ''}`}>▼</span>
            </button>
            
            {activeDropdown === 'products' && (
              <div className="vertical-dropdown">
                <ul className="product-categories">
                  {productCategories.map((category, index) => (
                    <li 
                      key={index}
                      className={`category-item ${category.products.length > 0 ? 'has-submenu' : ''}`}
                      onMouseEnter={() => setActiveSubmenu(index)}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <a 
                        href={`/products/${category.name.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')}`}
                        className="category-header"
                      >
                        {category.name}
                        {category.products.length > 0 && (
                          <span className="submenu-arrow">›</span>
                        )}
                      </a>
                      
                      {activeSubmenu === index && category.products.length > 0 && (
                        <div className="sub-dropdown">
                          <ul className="product-list">
                            {category.products.map((product, i) => (
                              <li key={i}>
                                <a href={`/products/${category.name.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')}/${product.toLowerCase().replace(/ /g, '-')}`}>
                                  {product}
                                </a>
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

          <li className="nav-item"><Link to="/about">ABOUT US</Link></li>
          <li className="nav-item"><Link to="/why-us">WHY US</Link></li>
          <li className="nav-item"><Link to="/blogs">BLOGS</Link></li>
          <li className="nav-item"><Link to="/contact">CONTACT US</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
