import React from "react";
import { Link } from "react-router-dom";

const List = ({ id, name, category, image, info, nameClass }) => {
  return (
    <article className={`cocktail card ${nameClass}`}>
      <div className="cocktail-hero">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-center">
        <h3>{name}</h3>
        <h4>{category}</h4>
        <p>{info}</p>
      </div>
      <div className="cocktail-btn">
        <Link className="btn-link" to={`/cocktail/${id}`}>
          See the product
        </Link>
      </div>
    </article>
  );
};

export default List;
