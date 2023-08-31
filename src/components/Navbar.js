import React from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import Logo from "../assets/pizzaLogo.png";
import "../styles/Navbar.css";
import { useState } from "react";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
        <div className="hiddenLinks">
          <Link to="home" smooth={true}>
            Home
          </Link>
          <Link to="about" smooth={true}>
            About
          </Link>
          <Link to="menu" smooth={true}>
            Menu
          </Link>
          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </div>
      </div>
      <div className="rightSide">
        <div>
          <Link to="home" smooth={true}>
            Home
          </Link>
          <Link to="about" smooth={true}>
            About
          </Link>
          <Link to="menu" smooth={true}>
            Menu
          </Link>
          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </div>
        <button onClick={toggleNavbar}>
          <FiMenu />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
