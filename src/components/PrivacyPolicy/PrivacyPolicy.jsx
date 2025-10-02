import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p>
          At <strong>BOE9</strong>, your privacy is important to us. This Privacy Policy
          explains how we collect, use, and safeguard your information.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email, phone number, 
          and any details submitted through our contact forms.
        </p>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To respond to your inquiries</li>
          <li>To improve our website and services</li>
          <li>To send updates or promotional emails (only if you consent)</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We take appropriate measures to protect your data against unauthorized access,
          alteration, or disclosure.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We may use third-party services (e.g., Google Sheets, analytics tools) 
          which have their own privacy practices.
        </p>

        <h2>Your Rights</h2>
        <p>
          You can request access, update, or deletion of your personal data by 
          contacting us at <strong>support@boe9.com</strong>.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted 
          on this page with an updated revision date.
        </p>

        <p>Effective Date: 30 Sept 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
