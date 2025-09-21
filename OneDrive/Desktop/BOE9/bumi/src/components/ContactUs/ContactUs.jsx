import React, { useState } from 'react';
import './ContactUs.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section with Image */}
      <div className="contact-hero">
        <div className="hero-overlay">
          <h1>Welcome to Bumi Organic Exim</h1>
          <p>Get in touch with us for all your organic product needs</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Details</h2>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Address</h3>
                <p>Nashik , Maharashtra, India - 422010</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+91 9272131561</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>info@boe9.com</p>
                <p>Export@boe9.com</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-clock"></i>
              <div>
                <h3>Business Hours</h3>
                <p>Available 24/7</p>
                
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send Us a Enquiry</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>

        <div className="map-section">
        <h2>Find Us Here</h2>
          <div className="map-container">
            <iframe
              title="Bumi Organic Exim Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.019092328852!2d73.77913307471593!3d19.997453582054104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeba64d2283b5%3A0x1c3d9bcd0ff3a0e4!2sNashik%2C%20Maharashtra%20422010!5e0!3m2!1sen!2sin!4v1694456000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;