import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../Components/Loading";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [drink, setDrink] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    setLoading(true);
    const response = await fetch(`${url}${id}`);
    const data = await response.json();
    const { drinks } = data;
    if (drinks) {
      const {
        strDrink: name,
        strCategory: category,
        strAlcoholic: info,
        strGlass: glass,
        strDrinkThumb: image,
        strInstructions: instructions,
        strIngredient1: ingredient1,
        strIngredient2: ingredient2,
        strIngredient3: ingredient3,
        strIngredient4: ingredient4,
        strIngredient5: ingredient5,
      } = drinks[0];
      console.log(name);
      const ingredients = [
        ingredient1,
        ingredient2,
        ingredient3,
        ingredient4,
        ingredient5,
      ];
      const newCocktail = {
        name,
        category,
        info,
        glass,
        instructions,
        image,
        ingredients,
      };
      setDrink(newCocktail);
    } else {
      setDrink({});
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  if (loading) {
    return (
      <div className="loading-container">
        <Loading />
      </div>
    );
  }
  const { name, category, info, glass, instructions, image, ingredients } =
    drink;
  return (
    <section id="single-product">
      <div className="single-product">
        <div className="single-product-header">
          <h2>{name}</h2>
          <img src={image} alt={name} />
        </div>
        <div className="single-product-center">
          <h3>
            <span className="info">Category: </span>
            {category}
          </h3>
          <h3>
            <span className="info">Info: </span>
            {info}
          </h3>
          <h3>
            <span className="info">Glass: </span>
            {glass}
          </h3>
          <p>
            <span className="info">Instructions: </span>
            {instructions}
          </p>
          <h4 className="info">Ingredients : </h4>
          {ingredients.map(
            (item, index) =>
              item && (
                <p className="ingredients" key={index}>
                  {index + 1} ) {item}
                </p>
              )
          )}
        </div>
        <Link className="btn" to={"/"}>
          Back Home
        </Link>
      </div>
    </section>
  );
};

export default SingleCocktail;
