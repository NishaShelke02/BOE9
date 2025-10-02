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

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_9ad4tbj", // your EmailJS service ID
        "template_ea20mjg", // your EmailJS template ID
        formData,
        "V4XOc5_23GjM09fQN" // your EmailJS public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setStatus("❌ Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  // Auto-hide status message after 4 seconds
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
          <p>Export@boe9.com</p>
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

          {/* Status message with fade-in/out */}
          {status && <p className="status-message">{status}</p>}
        </form>

        <div className="map-container">
          <iframe
            title="Bumi Organic Exim Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.209800188764!2d73.75735407491016!3d20.0054886940109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd9c93c4f3a1b31%3A0x1234567890abcdef!2sNashik%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1695637841234!5m2!1sen!2sin"
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
