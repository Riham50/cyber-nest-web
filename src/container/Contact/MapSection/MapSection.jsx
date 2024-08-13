import React from "react";
import "./MapSection.css";

function MapSection() {
  return (
    <section className="map-section">
      <h2>Our Location</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3940.583658142917!2d38.74992!3d9.010402!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b856d159acc4f%3A0x6eac55488e3ec44f!2sMexico%20Square%20St.!5e0!3m2!1sen!2sus!4v1723588563448!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Company Location"
      ></iframe>
    </section>
  );
}

export default MapSection;
