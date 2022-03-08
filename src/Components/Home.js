import React from "react";
import { useGlobalContext } from "../context";

const Home = () => {
  const { home } = useGlobalContext();
  return (
    <div className="home" id="home" ref={home}>
      <div className="home-center">
        <h2 className="home-text">Home</h2>
        <h4 className="home-text">Welcome scroll down and see our products</h4>
      </div>
    </div>
  );
};

export default Home;
