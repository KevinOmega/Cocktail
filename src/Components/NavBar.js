import React, { useEffect, useState } from "react";

const NavBar = ({ nameClass }) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  }, [isClicked]);

  return (
    <div className={nameClass}>
      <div className="navbar-center">
        <h2>Cocktail List</h2>
      </div>
      <nav className={`links ${isClicked && "links-active"}`}>
        <ul>
          <li>
            <a onClick={() => setIsClicked(false)} href="/#home">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => setIsClicked(false)} href="/#featured">
              Featured
            </a>
          </li>
          <li>
            <a onClick={() => setIsClicked(false)} href="/list#products">
              Products
            </a>
          </li>
        </ul>
      </nav>
      <div
        className={`btn-container ${isClicked && "btn-container-active"}`}
        onClick={() => setIsClicked(!isClicked)}
      >
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
    </div>
  );
};

export default NavBar;
