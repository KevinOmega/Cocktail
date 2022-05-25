import React from "react";
import Home from "../Components/Home";
import Products from "../Components/Products";
import NavBar from "../Components/NavBar";

const Main = () => {
  return (
    <>
      <NavBar nameClass="primary-navbar" />
      <Home />
      <Products />
    </>
  );
};

export default Main;
