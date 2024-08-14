import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import { ReactComponent as Svg1 } from "../../../assets/desktop.svg";
import { ReactComponent as Svg2 } from "../../../assets/programmer-w-desktop.svg";
import { ReactComponent as Svg3 } from "../../../assets/lady-w-mobile.svg";
import { ReactComponent as Svg4 } from "../../../assets/devs-w-mobile.svg";
import Particle from "../../../components/ParticlesBackground";

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      svg: <Svg1 />,
      text: {
        heading: "Welcome to CyberNest",
        paragraph: "Your partner in innovative software solutions.",
      },
    },
    {
      svg: <Svg2 />,
      text: {
        heading: "Empower Your Business",
        paragraph:
          "Leverage our expertise to drive growth and innovation. At CyberNest, we provide scalable and secure solutions tailored to your business needs.",
      },
    },
    {
      svg: <Svg3 />,
      text: {
        heading: "Innovative Solutions",
        paragraph:
          "We harness cutting-edge technology to deliver innovative solutions that keep you ahead of the curve in a fast-paced digital world.",
      },
    },
    {
      svg: <Svg4 />,
      text: {
        heading: "Join Us Today",
        paragraph:
          "Be part of a forward-thinking community. Together, we can create and deploy technologies that transform industries and improve lives.",
      },
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <section className="hero-section">
      <div className="particle-wrapper">
        <Particle />
      </div>
      <div className="hero-carousel">
        <button className="carousel-button prev" onClick={handlePrevSlide}>
          ❮
        </button>
        <div className="carousel-slides">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentSlide ? "active" : "inactive"
              }`}
            >
              <div className="carousel-text">
                <h1>{slide.text.heading}</h1>
                <p>{slide.text.paragraph}</p>
              </div>
              <div className="carousel-svg">{slide.svg}</div>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={handleNextSlide}>
          ❯
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
