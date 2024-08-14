import React, { useState, useEffect, useRef } from "react";
import "./TeamSection.css";
import { TeamTop, TeamMembers } from "../../Service/data";

function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState(TeamMembers);
  const sliderRef = useRef(null);
  const cloneCount = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1700);

    return () => clearInterval(interval);
  }, [currentIndex, items]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    sliderRef.current.style.transition = "transform 0.5s ease-in-out";
    sliderRef.current.style.transform = `translateX(-${
      (currentIndex + 1) * (100 / cloneCount)
    }%)`;

    if (currentIndex === items.length - cloneCount) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        sliderRef.current.style.transform = `translateX(0)`;
        setItems((prevItems) => [...prevItems, ...TeamMembers]);
        setCurrentIndex(0);
      }, 500);
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - cloneCount : prevIndex - 1
    );
    sliderRef.current.style.transition = "transform 0.5s ease-in-out";
    sliderRef.current.style.transform = `translateX(-${
      currentIndex * (100 / cloneCount)
    }%)`;
  };

  return (
    <section className="team">
      <h2>Meet Our Team</h2>
      <div className="team-members">
        {TeamTop.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        ))}
      </div>

      <h3 className="squad">Meet The Tech Squad</h3>

      <div className="slider">
        <button onClick={prevSlide} className="slider-btn">
          ‹
        </button>
        <div className="slider-track" ref={sliderRef}>
          {items.map((member, index) => (
            <div key={index} className="slider-item">
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.title}</p>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="slider-btn">
          ›
        </button>
      </div>
    </section>
  );
}

export default TeamSection;
