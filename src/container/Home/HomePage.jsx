import React, { useEffect } from "react";
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import ContactSection from "./ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";
import "./HomePage.css";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import Slider from "../../components/slider/Slider";
import CardImg from "../../components/card/Card";
import Animation from "../../components/squere/Animation";
function HomePage() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CardImg />
      <Slider />
      <Animation />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default HomePage;
