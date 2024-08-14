import "./Services.css";
import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import AvailableServices from "./available-service/AvailableService";
import WorkProcess from "./work-process/WorkProcess";

function Services() {
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
      <AvailableServices />
      <WorkProcess />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default Services;
