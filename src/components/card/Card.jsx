import { Card } from "antd";
import { servicesData } from "../../container/Service/data";

const { Meta } = Card;
const CardImg = function () {
  return (
    <>
      <section className="services-section">
        <div className="services-content">
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div key={index} className="">
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={
                    <img
                      style={{ height: "190px" }}
                      alt={service.title}
                      src={service.imgSrc}
                    />
                  }
                >
                  <Meta title={service.title} description={service.content} />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CardImg;
