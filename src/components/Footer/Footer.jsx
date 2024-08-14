import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"; // Import social media icons
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer id="main-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Logo} alt="CyberNest" />
          <p>
            CyberNest is dedicated to providing innovative software solutions.
          </p>
        </div>
        <div className="newsletter">
          <h3>Email Newsletter</h3>
          <p>Subscribe to our monthly News letter.</p>
          <form>
            <input type="email" placeholder="Enter Email..." />
            <input type="text" placeholder="Enter Comment..." />
            <input type="submit" value="Submit" className="btn btn-primary" />
          </form>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <div className="quick-links-container">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "current" : "quick-links-nav"
              }
            >
              {" "}
              Home{" "}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "current" : "quick-links-nav"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "current" : "quick-links-nav"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "current" : "quick-links-nav"
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className="contact-follow">
          <h3>Contact Us</h3>
          <p>
            <strong>Address:</strong> Bole, Addis Ababa
          </p>
          <p>
            <strong>Email:</strong> info@company.com
          </p>
          <p>
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <h3 className="follow-us">Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; 2024, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
