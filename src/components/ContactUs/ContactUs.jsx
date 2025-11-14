import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Send email using EmailJS
      await emailjs.send(
        "service_9ad4tbj", // Your service ID
        "template_ea20mjg", // Your template ID
        formData,
        "V4XOc5_23GjM09fQN" // Your public key
      );

      // ✅ Send data to Google Sheet via Apps Script
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwb5VDFVH93PwxXsdgPGgwLokFbPzoVptpu3-BhJKlLjUxmWWfMuuOTvAozqHh6d7NO/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("✅ Message sent & saved to Google Sheet!");
      } else {
        setStatus("Successfully submitted details,I will get back to you soon!");
      }

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Failed to send or save message.");
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="contact-container">
      <h2>Welcome to Bumi Organic Exim</h2>
      <p>Get in touch with us for all your organic product needs</p>

      <div className="contact-details">
        <div>
          <h3><FaMapMarkerAlt /> Address</h3>
          <p>Nashik, Maharashtra, India - 422010</p>
        </div>
        <div>
          <h3><FaPhoneAlt /> Phone</h3>
          <p>+91 9272131561</p>
          <p>+91 9737305655</p>
        </div>
        <div>
          <h3><FaEnvelope /> Email</h3>
          <p>info@boe9.com</p>
          <p>exports@boe9.com</p>
        </div>
        <div>
          <h3><FaClock /> Business Hours</h3>
          <p>Available 24/7</p>
        </div>
      </div>

      <div className="contact-form-map">
        <form onSubmit={handleSubmit}>
          <h3>Send us an enquiry</h3>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
          {status && <p className="status-message">{status}</p>}
        </form>

        <div className="map-container">
          <iframe
            title="Bumi Organic Exim Location"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
