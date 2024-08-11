import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer id="main-footer" className="py-2">
      <div className="container footer-container">
        <div>
          <img src="img/logo.png" alt="NewsGrid" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            deserunt assumenda enim non? Ratione ipsum voluptates fuga eos earum
            vitae.
          </p>
        </div>
        <div>
          <h3>Email Newsletter</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <form>
            <input type="email" placeholder="Enter Email..." />
            <input type="text" placeholder="Enter Comment..." />
            <input type="submit" value="Submit" className="btn btn-primary" />
          </form>
        </div>
        <div>
          <h3>Site Links</h3>
          <ul className="list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Contact Information</h2>
          <p>
            <strong>Address:</strong> Bole,Addis Ababa
          </p>
          <p>
            <strong>Email:</strong>info@company.com
          </p>
          <p>
            <strong>Phone:</strong> (123) 456-7890
          </p>
        </div>
        <div>
          <p>Copyright &copy; 2019, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
