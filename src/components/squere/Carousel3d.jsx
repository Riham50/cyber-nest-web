import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./animation.css"; // Ensure the path is correct

const Carousel3d = ({
  children,
  style,
  className,
  onChange,
  tilt = "5rem",
  duration = ".45s",
  ease = "cubic-bezier(0.215, 0.61, 0.355, 1)",
  blurIncrease = 8,
  opacityDecline = 0.1,
  opacityBasics = 0.5,
  moveRange = 2,
  childMaxLength = 6,
  perspective = 2800,
  z = 800,
  current = 0,
  ...props
}) => {
  const length = React.Children.toArray(children).length;
  const angle = 360 / (length > childMaxLength ? childMaxLength : length);

  const [rotate, setRotate] = useState(-current * angle);
  const [currentIndex, setCurrentIndex] = useState(current);
  const [transition, setTransition] = useState("none");
  const startX = useRef(null);
  const startRotate = useRef(null);
  const w = useRef(document.body.clientWidth);

  useEffect(() => {
    const handleMouseUp = () => {
      onTouchEnd();
    };

    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    setRotate(-current * angle);
    setTransition(`transform ${duration} ${ease}`);
  }, [current, angle, duration, ease]);

  const onTouchStart = (e) => {
    if ((e.touches && e.touches.length > 1) || length <= 1) return;
    startX.current = e?.pageX || e.touches[0]?.pageX;
    startRotate.current = Math.round(rotate / angle) * angle;
  };

  const onTouchEnd = (e) => {
    if (length <= 1 || startX.current === null) return;

    let x = null;

    if (e?.changedTouches) {
      if (e.changedTouches.length === 1) {
        x = e.changedTouches[0]?.pageX;
      } else {
        return;
      }
    } else if (typeof e?.pageX === "number") {
      x = e?.pageX;
    } else {
      return;
    }

    if (x !== null) {
      const differ = x - startX.current;
      const n = differ > 0 ? 1 : -1;
      const newRotate =
        startRotate.current +
        n *
          angle *
          Math.round(Math.abs((rotate - startRotate.current) / angle));

      setRotate(newRotate);
      setTransition(`transform ${duration} ${ease}`);

      setCurrentIndex((newIndex) => {
        if (onChange) {
          onChange({ current: newIndex, rotate: newRotate, eventType: "end" });
        }
        return newIndex;
      });

      startX.current = null;
    }
  };

  const onTouchMove = (e) => {
    if ((e.touches && e.touches.length > 1) || length <= 1 || !startX.current)
      return;

    let x = null;

    if (e.touches) {
      x = e.touches[0]?.pageX;
    } else if (typeof e?.pageX === "number") {
      x = e?.pageX;
    } else {
      return;
    }

    if (x !== null) {
      const differ = (x - startX.current) * moveRange;
      const newRotate = startRotate.current + (differ / w.current) * angle;
      const r = (Math.abs(Math.ceil(rotate / 360)) * 360 - newRotate) % 360;
      const newIndex =
        Math.round(r / angle) %
        (length > childMaxLength ? childMaxLength : length);

      setRotate(newRotate);
      setCurrentIndex(newIndex);
      setTransition("none");

      if (onChange) {
        onChange({ current: newIndex, rotate: newRotate, eventType: "move" });
      }
    }
  };

  const getAnimStyle = (n, length) => {
    const center = length / 2;
    const i = n > center ? center * 2 - n : n;
    let opacity = 1 - ((i - 1) * opacityDecline + opacityBasics * (n ? 1 : 0));
    opacity = opacity < 0.1 ? 0.1 : opacity;
    const style = { opacity };
    if (blurIncrease) {
      style.filter = `blur(${i * blurIncrease}px)`;
    }
    return style;
  };

  const getChildrenToRender = () => {
    const zDpr = z * 0.5;
    return React.Children.toArray(children).map((item, i) => {
      if (i >= childMaxLength) return null;
      const transform = `rotateY(${
        angle * i
      }deg) translateZ(${zDpr}px) rotateY(-${angle * i}deg) `;
      const animStyle = getAnimStyle(
        Math.abs(currentIndex - i),
        length > childMaxLength ? childMaxLength : length
      );
      const style = { transform };
      return (
        <div className="itemWrapper" key={item.key} style={style}>
          <div
            className="rotateLayer"
            style={{ transform: `rotateY(${-rotate}deg)`, transition }}
          >
            <div className="bgAndBlurLayer" style={animStyle}>
              <div
                className="contentLayer"
                style={{ opacity: currentIndex === i ? 1 : 0 }}
              >
                {item}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const perspectiveDpr = perspective * 0.5;

  return (
    <div
      {...props}
      onTouchStart={onTouchStart}
      onMouseDown={onTouchStart}
      onTouchMove={onTouchMove}
      onMouseMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseUp={onTouchEnd}
    >
      <div className="carousel-wrapper">
        <div
          className="carousel"
          style={{
            ...style,
            perspective: perspectiveDpr,
            transform: `translateY(-${tilt}) scale(${
              (perspectiveDpr - z * 0.5) / perspectiveDpr
            })`,
          }}
        >
          <div
            className="carouselContent"
            style={{
              transform: `translateY(${tilt}) rotateY(${rotate}deg)`,
              transition,
            }}
          >
            {getChildrenToRender()}
          </div>
        </div>
      </div>
    </div>
  );
};

Carousel3d.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
  onChange: PropTypes.func,
  tilt: PropTypes.string,
  duration: PropTypes.string,
  ease: PropTypes.string,
  blurIncrease: PropTypes.number,
  opacityDecline: PropTypes.number,
  opacityBasics: PropTypes.number,
  moveRange: PropTypes.number,
  childMaxLength: PropTypes.number,
  perspective: PropTypes.number,
  z: PropTypes.number,
  current: PropTypes.number,
};

export default Carousel3d;
