import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaLink,
} from "react-icons/fa";
import "../App.css";

function Contact() {
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Form submission handler
  async function handleSubmit(e) {
    e.preventDefault();

    const payload = { name, email, message };

    try {
      // Replace this URL with your deployed backend URL
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      // Updated to use 'message' key from backend
      alert(data.message || "Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert("Error sending message: " + error.message);
    }
  }

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        {/* Contact Info Section */}
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Rishikesh, India</span>
          </div>
          <div className="info-item">
            <FaPhone className="contact-icon" />
            <span>+91 98765 43210</span>
          </div>
          <div className="info-item">
            <FaEnvelope className="contact-icon" />
            <span>info@yogabliss.com</span>
          </div>
          <div className="info-circle">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="contact-icon whatsapp" />
            </a>
            <a
              href="https://www.instagram.com/sanskaaryog001/?utm_source=qr&igsh=djUweTRwNm95Z2p1#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="contact-icon instagram" />
            </a>
            <a
              href="https://youtube.com/yogabliss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="contact-icon youtube" />
            </a>
            <a
              href="https://facebook.com/yogabliss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="contact-icon facebook" />
            </a>
            <a
              href="https://twitter.com/yogabliss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="contact-icon twitter" />
            </a>
            <a
              href="https://yogabliss.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLink className="contact-icon link" />
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
