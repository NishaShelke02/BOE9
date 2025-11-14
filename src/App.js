import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import Spices from "./components/Spices"; 
import AboutUs from "./components/AboutUs"; 
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import WhyUs from "./components/WhyUs";
import Blogs from "./components/Blogs/Blogs";
import Services from "./components/Services/Services";
import Certification from "./components/Certification";
import AllProducts from "./components/Product/AllProducts";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import WhatsApp from "./components/WhatsApp";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          {/* Product routes */}
          <Route path="/products/:categorySlug" element={<Product />} />
          <Route path="/products/*" element={<Product />} />
          <Route path="/products/:categorySlug/:productSlug/:itemSlug" element={<Product />} />
          <Route path="/products/:categorySlug/:productSlug" element={<Product />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/Spices" element={<Spices />} />
          {/* Other pages */}
          
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/AboutUs/our-company" element={<AboutUs />} />
          <Route path="/AboutUs/certification" element={<Certification />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/WhyUs" element={<WhyUs />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

          {/* 404 Fallback */}
          <Route
            path="*"
            element={
              <div className="placeholder-page">
                <h1>Page Not Found (404)</h1>
                <p>The page you're looking for doesn't exist.</p>
                <a href="/">Go to Home</a>
              </div>
            }
          />
        </Routes>
        <WhatsApp />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
