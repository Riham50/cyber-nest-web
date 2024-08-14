import React, { useState } from "react";
import "./AvailableServices.css";
import { services } from "../../Service/data";

const ServiceContent = ({ title, content, imageUrl }) => {
  return (
    <div className="service-content-container">
      <div className="service-content-text">
        <h1>
          <a href="article">{title}</a>
        </h1>
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="service-content-image">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

const AvailableServices = () => {
  const [activeService, setActiveService] = useState(
    "Custom Software Development"
  );

  return (
    <section className="service-container">
      <div className="button-container service-btn-container">
        {Object.keys(services).map((service) => (
          <button
            key={service}
            className={`service-btn ${
              activeService === service ? "active" : ""
            }`}
            onClick={() => setActiveService(service)}
          >
            {service}
          </button>
        ))}
      </div>
      <div className="service-card-container">
        <article className="card service-article-card bg-primary p-3 py-3">
          <ServiceContent
            title={services[activeService].title}
            content={services[activeService].content}
            imageUrl={services[activeService].imageUrl}
          />
        </article>
      </div>
    </section>
  );
};

export default AvailableServices;
