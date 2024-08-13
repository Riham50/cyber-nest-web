import React, { useEffect, useState } from "react";
import "./AboutHeroSection.css";
import aboutImage from "../../../assets/about-image.webp";

function AboutHeroSection() {
  const [words, setWords] = useState([
    "Partner",
    "Designer",
    "Developer",
    "Creator",
    "Planner",
  ]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="about-hero-section">
      <div className="hero-content">
        <h3>Who we Are</h3>
        <div className="slider-container">
          <h1>
            CyberNest Is Your{" "}
            <span className="slider-word">{words[index]}</span> In Digital
            Transformation!
          </h1>
          <p className="line"></p>
          <p className="smaller-text">
            We are a team of passionate professionals dedicated to helping
            businesses succeed in the digital world. Your partner in crafting
            innovative digital solutions!
          </p>
        </div>
      </div>
      <div className="hero-image">
        <img src={aboutImage} alt="About Us" />
      </div>
    </section>
  );
}

export default AboutHeroSection;
