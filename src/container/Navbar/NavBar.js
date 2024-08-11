import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = scrolled
    ? "sticky-main-nav scrolled"
    : "sticky-main-nav";

  return (
    <nav id="main-nav" className={navbarClasses}>
      <div className="container">
        <img src={Logo} alt="CyberNest" className="logo" />
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              className={({ isActive }) =>
                isActive ? "Current" : "half-header-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "Current" : "half-header-link"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "Current" : "half-header-link"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "contact-current" : "contact-button"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
