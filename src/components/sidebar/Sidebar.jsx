import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header.jsx";
import "../../../App.css";
import "./Sidebar.css";
import { sidebarMainData } from "../../../services/data.js";
import { sidebarFooterData } from "../../../services/data.js";
import Logo from "../../../image/logo.png";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBarsClick = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCrossClick = () => {
    setIsOpen(false);
    document.body.style.overflow = "scroll";
  };

  return (
    <>
      <div id="sideBar">
        <Header onBarsClick={handleBarsClick} />

        <ul className={`sidebar ${isOpen ? "open" : ""} list`}>
          <ul className="navigation-list">
            {sidebarMainData.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="icon-logo-card">
            <li>
              <Link href="#" className="btn-cross" onClick={handleCrossClick}>
                &#10006;
              </Link>
            </li>
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
          </div>
          {sidebarFooterData.map((item, index) => (
            <li key={index} className={item.path === "#" ? "border" : ""}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
