// TeamSection.jsx
import React from "react";
import "./TeamSection.css";

function TeamSection() {
  const team = [
    { name: "John Doe", title: "CEO", img: "path-to-image.jpg" },
    { name: "Jane Smith", title: "CFO", img: "path-to-image.jpg" },
    { name: "Mark Johnson", title: "CTO", img: "path-to-image.jpg" },
  ];

  return (
    <section className="team">
      <h2>Meet Our Team</h2>
      <div className="team-members">
        {team.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
