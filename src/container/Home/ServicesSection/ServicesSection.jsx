import React from "react";
import "./ServicesSection.css";
import { servicesContentData } from "../../Services/data";
function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-content">
        <h2>Our Services</h2>
        <div className="services-grid">
          {servicesContentData.map((service, index) => (
            <div key={index} className="service-item">
              <p>
                {service.icon} {service.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
