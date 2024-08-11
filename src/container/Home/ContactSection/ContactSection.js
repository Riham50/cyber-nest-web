import React from "react";
import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>Have any questions or want to start a project? Reach out to us!</p>
        <a href="/contact" className="contact-button">
          Contact Us
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
