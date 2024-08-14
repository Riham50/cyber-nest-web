import React, { useEffect, useRef } from "react";
import "./TeamSection.css";
import { TeamTop, TeamMembers } from "../../Service/data";

function TeamSection() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const handleTransitionEnd = () => {
      slider.appendChild(slider.firstElementChild);
      slider.style.transition = "none";
      slider.style.transform = "translateX(0)";
      setTimeout(() => {
        slider.style.transition = "transform 0.5s ease-in-out";
      }, 0);
    };

    slider.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      slider.removeEventListener("transitionend", handleTransitionEnd);
  }, []);

  const nextSlide = () => {
    const slider = sliderRef.current;
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(-25%)`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1800);

    return () => clearInterval(interval);
  }, []);

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
        <div className="slider-track" ref={sliderRef}>
          {TeamMembers.map((member, index) => (
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
