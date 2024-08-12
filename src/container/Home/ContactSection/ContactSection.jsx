import React from "react";
import "./ContactSection.css";
import { IoMail, IoChatbubbles, IoCall } from "react-icons/io5";
import ScrollAnimation from "react-animate-on-scroll";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <h2>Contact Us</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" delay={100} animateOnce={true}>
          <p>Have any questions or want to start a project? Reach out to us!</p>
        </ScrollAnimation>
        <div className="contact-icons">
          <ScrollAnimation animateIn="bounceIn" delay={200} animateOnce={true}>
            <a href="mailto:info@yourcompany.com" className="icon-link">
              <IoMail
                style={{
                  fontSize: "2rem",
                  background: "linear-gradient(45deg, #FF5722, #FFC107)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              />
              <span>Email Us</span>
            </a>
          </ScrollAnimation>
          <ScrollAnimation animateIn="bounceIn" delay={400} animateOnce={true}>
            <a href="/chat" className="icon-link">
              <IoChatbubbles
                style={{
                  fontSize: "2rem",
                  background: "linear-gradient(45deg, #2196F3, #00BCD4)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              />
              <span>Live Chat</span>
            </a>
          </ScrollAnimation>
          <ScrollAnimation animateIn="bounceIn" delay={600} animateOnce={true}>
            <a href="tel:+123456789" className="icon-link">
              <IoCall
                style={{
                  fontSize: "2rem",
                  background: "linear-gradient(45deg, #4CAF50, #8BC34A)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              />
              <span>Call Us</span>
            </a>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fadeInUp" delay={800} animateOnce={true}>
          <a href="/contact" className="contact-button">
            Contact Us
          </a>
        </ScrollAnimation>
      </div>
    </section>
  );
}

export default ContactSection;
