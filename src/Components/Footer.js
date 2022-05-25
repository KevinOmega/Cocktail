import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-text">All Rights Reserved by KevinOmega</div>
      <div className="footer-icons">
        <span>
          <FaFacebookSquare />
        </span>
        <span>
          <FaInstagramSquare />
        </span>
        <span>
          <FaTwitterSquare />
        </span>
      </div>
    </section>
  );
};

export default Footer;
