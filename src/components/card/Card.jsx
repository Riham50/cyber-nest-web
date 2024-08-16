import { Card } from "antd";
import "./Card.css";
import { servicesData } from "../../container/Service/data";

const { Meta } = Card;

const CardImg = function () {
  return (
    <section className="services-section">
      <div className="services-content">
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              hoverable
              style={{
                width: "100%",
                maxWidth: "240px",
                margin: "0 auto", // Center the card
              }}
              cover={
                <img
                  style={{ height: "190px", width: "100%", objectFit: "cover" }}
                  alt={service.title}
                  src={service.imgSrc}
                />
              }
            >
              <Meta title={service.title} description={service.content} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardImg;
