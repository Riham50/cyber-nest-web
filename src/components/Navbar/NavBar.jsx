import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
        <NavLink to="/">
          <img src={Logo} alt="CyberNest" className="logo" />
        </NavLink>
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
