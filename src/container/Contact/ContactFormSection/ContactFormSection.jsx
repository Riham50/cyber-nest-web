import React from "react";
import "./ContactFormSection.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function ContactFormSection() {
  return (
    <section className="contact-form-details">
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <div className="name-phone">
            <input type="text" placeholder="Full Name" required />
            <input type="tel" placeholder="Phone number" required />
          </div>

          <input className="email" type="email" placeholder="Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-details">
        <h2>Contact Details</h2>
        <p>
          <strong>Address:</strong> 1234 Street Name, City, Country
        </p>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong> contact@company.com
        </p>
        <p>
          <strong>Operating Hours:</strong> Mon-Fri, 9:00 AM - 5:00 PM
        </p>
        <div className="social-media">
          <h2>Follow Us</h2>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;
