import React, { useEffect } from "react";
import "./Contact.css";
import Footer from "../../components/Footer/Footer";
import MapSection from "./MapSection/MapSection";
import ContactFormSection from "./ContactFormSection/ContactFormSection";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";

function ContactUs() {
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
    <div className="contact-us">
      <ContactFormSection />
      <MapSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default ContactUs;
