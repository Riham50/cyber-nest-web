import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import "./Slider.css";
import { testimonialData } from "../../container/Services/data";

function Slider() {
  const [people, setPeople] = useState(testimonialData);
  const [index, setIndex] = React.useState(0); ////////////
  //

  // const [testimonialData, setTestimonialData] = useState(testimonialData);

  let newIndex;
  useEffect(() => {
    const lastIndex = testimonialData?.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, testimonialData]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <>
      <div id="slider">
        <section className="slider-section border-bottom">
          <div className="title">
            <h2>What our customers said</h2>
          </div>
          <div className="section-center">
            {people.map((person, personIndex) => {
              const { postId, image, detail, title, content } = person;

              newIndex = personIndex;
              let position = "nextSlide";

              if (personIndex === index) {
                position = "activeSlide";
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === testimonialData.length - 1)
              ) {
                position = "lastSlide";
              }

              return (
                <article className={position} key={postId}>
                  <p className="text">{content}</p>
                  <div className="name-div">
                    <div className="circle-img">
                      <img src={image} alt="" />{" "}
                      <CgProfile className="icon-profile" />
                      <h4 className="text-primary">{detail.name}</h4>
                    </div>
                  </div>
                </article>
              );
            })}
            <button className="prev" onClick={() => setIndex(index - 1)}>
              <FiChevronLeft className="" />
            </button>
            <button className="next" onClick={() => setIndex(index + 1)}>
              <FiChevronRight className="" />
            </button>
            <div className="dots-content">
              {testimonialData?.map((_, i) => {
                return (
                  <button
                    key={i}
                    className={`content-dots__dot ${
                      i === index ? "dots__dot--active-content" : ""
                    }`}
                    data-slide={i}
                    onClick={() => setIndex(i)}
                  ></button>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Slider;
