import React, { useState } from "react";
import logo from "../images/logo.svg";

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-center">
        <img src={logo} alt="Cocktail List" />
      </div>
      <nav className={`links ${isClicked && "links-active"}`}>
        <ul>
          <li>
            <a onClick={() => setIsClicked(false)} href="/#home">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => setIsClicked(false)} href="/#products">
              Products
            </a>
          </li>
          <li>
            <a onClick={() => setIsClicked(false)} href="/#about">
              About
            </a>
          </li>
        </ul>
      </nav>
      <div className="btn-container" onClick={() => setIsClicked(!isClicked)}>
        <div className={`links-btn ${isClicked && "links-btn-active"}`} />
      </div>
    </div>
  );
};

export default NavBar;
