import React from "react";
import "./ServicesSection.css";

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-content">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <img
              src="path/to/icon1.png"
              alt="Service 1"
              className="service-icon"
            />
            <h3>Service 1</h3>
            <p>Description of Service 1.</p>
          </div>
          <div className="service-item">
            <img
              src="path/to/icon2.png"
              alt="Service 2"
              className="service-icon"
            />
            <h3>Service 2</h3>
            <p>Description of Service 2.</p>
          </div>
          <div className="service-item">
            <img
              src="path/to/icon3.png"
              alt="Service 3"
              className="service-icon"
            />
            <h3>Service 3</h3>
            <p>Description of Service 3.</p>
          </div>
          <div className="service-item">
            <img
              src="path/to/icon4.png"
              alt="Service 4"
              className="service-icon"
            />
            <h3>Service 4</h3>
            <p>Description of Service 4.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
