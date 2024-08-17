import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import { Card } from "antd";
import "./MilestonesSection.css";

const { Meta } = Card;

const Milestones = [
  {
    title: "Established",
    content: 25,
  },
  {
    title: "Clients",
    content: 30,
  },
  {
    title: "Employees",
    content: 40,
  },
  {
    title: "Products",
    content: 60,
  },
];

function MilestonesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section className="milestones-section" ref={sectionRef}>
      <div className="milestones-content">
        <h2>Milestones</h2>
        <div className="milestones-grid">
          {Milestones.map((milestone, index) => (
            <div key={index}>
              <Card
                hoverable
                style={{
                  width: 270,
                  height: 160,
                  fontSize: 50,
                  borderRadius: 30,
                  backgroundColor: "#7fc2e8",
                  fontWeight: "bold",
                  fontFamily: "cursive",
                }}
              >
                <Meta
                  title={
                    <span className="milestone-title">{milestone.title}</span>
                  }
                  description={
                    isVisible ? (
                      <CountUp
                        start={0}
                        end={milestone.content}
                        duration={3.5}
                        separator=","
                      />
                    ) : (
                      milestone.content
                    )
                  }
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MilestonesSection;
