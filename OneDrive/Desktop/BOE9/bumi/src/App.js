import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs"; 
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import WhyUs from "./components/WhyUs";  // ✅ Import WhyUs
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/why-us" element={<WhyUs />} /> {/* ✅ Added WhyUs route */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
