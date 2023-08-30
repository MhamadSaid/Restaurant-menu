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
          <Link to="/" smooth={true}>
            {" "}
            Home{" "}
          </Link>
          <Link to="/menu" smooth={true}>
            {" "}
            Menu{" "}
          </Link>
          <Link to="/about" smooth={true}>
            {" "}
            About{" "}
          </Link>
          <Link to="/contact" smooth={true}>
            {" "}
            Contact{" "}
          </Link>
        </div>
      </div>
      <div className="rightSide">
        <div className="w-full bg-black/20 h-[70px] backdrop-blur-2xl rounded-full max-w-[350px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link to="/" smooth={true}>
            Home
          </Link>
          <Link to="/about" smooth={true}>
            About
          </Link>
          <Link to="/menu" smooth={true}>
            Menu
          </Link>
          <Link to="/contact" smooth={true}>
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
