import React, { useEffect } from "react";
import "./About.css";
import Footer from "../../components/Footer/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import AboutHeroSection from "./AboutHeroSection/AboutHeroSection";
import MissionVisionSection from "./MissionVisionSection/MissionVisionSection";
import MilestonesSection from "./MilestonesSection/MilestonesSection";
import TeamSection from "./TeamSection/TeamSection";

function About() {
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
      <AboutHeroSection />
      <MissionVisionSection />
      <MilestonesSection />
      <TeamSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default About;
