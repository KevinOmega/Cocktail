import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-center">
        <div className="hero">
          <img
            src="https://www.veggiessavetheday.com/wp-content/uploads/2018/06/Easy-Berry-Vodka-Cocktails-FI.jpg"
            alt="hero"
          />
        </div>
        <div className="home-info">
          <p>
            Because never is a bad time to cool off. <br></br>If you wanna see
            more of our products please click on the button below
          </p>
          <Link className="btn-link" to={"/list"}>
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
