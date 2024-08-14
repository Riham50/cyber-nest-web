import React from "react";
import "./WorkProcess.css";
import "../../../container/Home/ServicesSection/ServicesSection.css";
import { WorkProcessData } from "../../Service/data";
import { Card } from "antd";

function WorkProcess() {
  return (
    <section className="workprocess-section">
      <div className="workprocess-content">
        <h2>Our Work Process</h2>
        <div className="workprocess-card">
          {WorkProcessData.map((service, index) => (
            <Card
              hoverable
              style={{
                width: 360,
              }}
              key={index}
              className="workprocess-item"
            >
              <h3>{service.title}</h3>
              <p>{service.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkProcess;
