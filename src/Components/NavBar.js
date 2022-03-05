import React, { useState } from "react";

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-center">
        <h2>Cocktail List</h2>
      </div>
      <nav className={`links ${isClicked && "links-active"}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#about">About</a>
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
