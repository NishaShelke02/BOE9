import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { Helmet } from "react-helmet";
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
      // Send Email via EmailJS
      await emailjs.send(
        "service_9ad4tbj",
        "template_ea20mjg",
        formData,
        "V4XOc5_23GjM09fQN"
      );

      // Save to Google Sheet
      await fetch(
        "https://script.google.com/macros/s/AKfycbwb5VDFVH93PwxXsdgPGgwLokFbPzoVptpu3-BhJKlLjUxmWWfMuuOTvAozqHh6d7NO/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      setStatus("✅ Successfully submitted! We will contact you soon.");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Failed to send message. Please try again.");
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

      {/* ✅ SEO */}
      <Helmet>
        <title>
          Contact BOE9 | Lakadong Turmeric Supplier organic spices, and export inquiries. Trusted global supplier from India.
        </title>

        <meta
          name="description"
          content="Contact BOE9 (Bumi Organic Exim) for bulk Lakadong turmeric, organic spices, and export inquiries. Trusted global supplier from India."
        />

        <meta
          name="keywords"
          content="contact BOE9, turmeric supplier India contact, organic exporter India, bulk turmeric supplier contact"
        />

        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* ✅ Main Heading */}
      <h1>
        Contact Turmeric Supplier & Organic Exporter - BOE9 India
      </h1>

      <p className="contact-subtext">
        Get in touch with BOE9 (Bumi Organic Exim) for bulk organic products,
        turmeric supply, and international export inquiries.
      </p>

      {/* Contact Details */}
      <div className="contact-details">
        <div>
          <h2><FaMapMarkerAlt /> Address</h2>
          <p>Nashik, Maharashtra, India - 422010</p>
        </div>

        <div>
          <h2><FaPhoneAlt /> Phone</h2>
          <p>+91 9272131561</p>
          <p>+91 9737305655</p>
        </div>

        <div>
          <h2><FaEnvelope /> Email</h2>
          <p>info@boe9.com</p>
          <p>exports@boe9.com</p>
        </div>

        <div>
          <h2><FaClock /> Business Hours</h2>
          <p>Available 24/7</p>
        </div>
      </div>

      {/* Form + Map */}
      <div className="contact-form-map">
        <form onSubmit={handleSubmit}>
          <h2>Send Business Enquiry</h2>

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
            placeholder="Email Address"
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
            placeholder="Subject (Bulk Order / Export Inquiry)"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Requirement (Quantity, Country, Product)"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Enquiry</button>

          {status && <p className="status-message">{status}</p>}
        </form>

        {/* Map */}
        <div className="map-container">
          <iframe
            title="BOE9 Location Nashik India"
            src="https://www.google.com/maps?q=Nashik,Maharashtra&output=embed"
            width="100%"
            height="400px"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;