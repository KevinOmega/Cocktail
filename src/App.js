import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Main from "./Pages/Main";
import SingleCocktail from "./Pages/SingleCocktail";
import Error from "./Pages/Error";
import ProductsList from "./Pages/ProductsList";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/list" element={<ProductsList />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
