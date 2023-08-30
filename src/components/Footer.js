import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FaInstagram />
        <FaFacebook />
        <FaLinkedin />
        <FaTwitter />
      </div>
      <p> &copy; 2022 Pizza Joy.com</p>
    </div>
  );
}

export default Footer;
