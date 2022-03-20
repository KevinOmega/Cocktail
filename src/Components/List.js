import React from "react";
import { Link } from "react-router-dom";

const List = ({ id, name, category, image, info }) => {
  return (
    <Link className="cocktail" to={`/cocktail/${id}`}>
      <div className="cocktail-center">
        <div className="cocktail-header">
          <h3>{name}</h3>
        </div>
        <div className="cocktail-img">
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="cocktail-info">
        <h4> {category}</h4>
        <p>{info}</p>
      </div>
    </Link>
  );
};

export default List;
