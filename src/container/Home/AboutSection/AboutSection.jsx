import React from "react";
import "./AboutSection.css";
import aboutImage from "../../../assets/about-image.jpg";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
          <div className="overlay">
            <p>
              Sit vestibulum nec nam porttitor nibh. Urna at faucibus aliquet
              dolor. Facilisis id diam pellentesque et odio. Potenti sagittis
              massa lorem arcu sed diam. Consectetur elit sit in donec vitae
              blandit tincidunt eu. Sed nulla vel diam commodo. Placerat cursus
              sed blandit eu odio. Sit vestibulum nec nam porttitor nibh. Urna
              at faucibus aliquet dolor. Facilisis id diam pellentesque et odio.
              Potenti sagittis massa lorem arcu sed diam. Consectetur elit sit
              in donec vitae blandit tincidunt eu. Sed nulla vel diam commodo.
              Placerat cursus sed blandit eu odio. Sit vestibulum nec nam
              porttitor nibh. Urna at faucibus aliquet dolor. Facilisis id diam
              pellentesque et odio. Potenti sagittis massa lorem arcu sed diam.
              Consectetur elit sit in donec vitae blandit tincidunt eu. Sed
              nulla vel diam commodo. Placerat cursus sed blandit eu odio.
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
