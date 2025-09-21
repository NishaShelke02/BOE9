// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Contact API
app.post("/api/ContactUs", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // ✅ Transporter for custom domain (cPanel/Zoho/Outlook)
    let transporter = nodemailer.createTransport({
      host: "mail.boe9.com",       // replace with your mail server (from hosting)
      port: 465,                   // 465 = SSL, 587 = TLS
      secure: true,                // true if port is 465, false if 587
      auth: {
        user: "info@boe9.com",     // your domain email
        pass: "Nisha@2302" // your email password (from hosting/cPanel)
      },
      tls: {
        rejectUnauthorized: false  // fixes self-signed cert errors (common on cPanel)
      }
    });

    // ✅ Mail details
    let mailOptions = {
      from: `"Website Contact" <info@boe9.com>`,
      to: "export@boe9.com",   // where you want to receive the enquiry
      subject: `New Enquiry: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `
    };

    // ✅ Send mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
