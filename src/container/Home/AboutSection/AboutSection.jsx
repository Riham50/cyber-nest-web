import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img src="../../../../image/about1.jpg" alt="About Us" />
          <div className="overlay">
            <p>
              We are a dedicated team of technology enthusiasts committed to
              delivering innovative solutions. Our expertise spans in web
              development, mobile applications, and cybersecurity services,
              allowing us to provide comprehensive digital solutions for
              businesses of all sizes. With a focus on quality, reliability, and
              user experience, we strive to exceed our clients' expectations in
              every project we undertake.
            </p>
            <a href="/contact" className="cta-button">
              contact us
            </a>
          </div>
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            CyberNest is dedicated to providing innovative software solutions.
            With a team of experts, we create tailored solutions to meet your
            unique needs and help your business grow.
          </p>
          <p>
            Our mission is to empower businesses with cutting-edge technology
            and exceptional service. We are committed to delivering results and
            fostering long-term partnerships.
          </p>
          <a href="/about" className="cta-button">
            More About us
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
