import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import Logo from "../assets/pizzaLogo.png";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  // Function to close the menu when the screen width is <= 900px
  const closeMenuOnSmallScreen = () => {
    if (window.innerWidth >= 900) {
      setOpenLinks(false);
    }
  };

  // Add an event listener to check the window width and close the menu as needed
  useEffect(() => {
    window.addEventListener("resize", closeMenuOnSmallScreen);
    return () => {
      window.removeEventListener("resize", closeMenuOnSmallScreen);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="menu">Menu</Link>
          <Link to="contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <div>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="menu">Menu</Link>
          <Link to="contact">Contact</Link>
        </div>
        <button onClick={toggleNavbar}>
          <FiMenu />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
