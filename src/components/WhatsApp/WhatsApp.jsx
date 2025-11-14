// src/components/WhatsAppButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsApp.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919272131561" // ← replace with your real WhatsApp number
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
