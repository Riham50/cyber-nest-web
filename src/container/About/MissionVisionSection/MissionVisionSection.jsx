import React from "react";
import "./MissionVisionSection.css";
import missionImage from "../../../assets/mission-image.webp";
import visionImage from "../../../assets/vision-image.svg";
import whyUsImage from "../../../assets/whyus-image.webp";

function MissionVisionSection() {
  return (
    <section className="mission-vision-section">
      <div className="mission">
        <div className="text-content">
          <h2>Our Mission</h2>
          <p>
            At CyberNest, our mission is to empower businesses by delivering
            cutting-edge digital solutions that drive innovation and success. We
            strive to create an environment where creativity and technology
            converge, allowing our clients to realize their full potential. Our
            team of experts is dedicated to developing customized strategies
            that not only meet the needs of our clients but also exceed their
            expectations. We believe in building long-term relationships,
            grounded in trust, transparency, and a shared vision for the future.
          </p>
        </div>
        <div className="image-content">
          <img src={missionImage} alt="Mission" />
        </div>
      </div>

      <div className="vision">
        <div className="image-content">
          <img src={visionImage} alt="Vision" />
        </div>
        <div className="text-content">
          <h2>Our Vision</h2>
          <p>
            Our vision is to be the leading force in digital transformation,
            turning innovative ideas into reality for businesses worldwide. We
            aim to be at the forefront of technological advancements, constantly
            pushing the boundaries of what’s possible. By staying ahead of
            industry trends and embracing new technologies, we ensure that our
            clients are always equipped with the tools they need to thrive in a
            rapidly evolving digital landscape. Our ultimate goal is to create a
            future where technology seamlessly integrates with human creativity,
            driving progress and positive change across all industries.
          </p>
        </div>
      </div>

      <div className="why-us">
        <div className="text-content">
          <h2>Why Choose Us</h2>
          <p>
            Choosing CyberNest means partnering with a team that is as
            passionate about your success as you are. We are committed to
            delivering exceptional results through our deep industry knowledge,
            innovative solutions, and unwavering dedication to quality. Our
            collaborative approach ensures that we fully understand your unique
            challenges and goals, allowing us to tailor our services to meet
            your specific needs. Whether you're looking to enhance your digital
            presence, streamline operations, or develop new products, we have
            the expertise and experience to help you achieve your objectives.
            With CyberNest, you gain a partner who is invested in your success,
            every step of the way.
          </p>
        </div>
        <div className="image-content">
          <img src={whyUsImage} alt="Why Us" />
        </div>
      </div>
    </section>
  );
}

export default MissionVisionSection;
