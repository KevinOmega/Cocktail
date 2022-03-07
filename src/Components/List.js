import React from "react";

const List = ({ name, category, image, info }) => {
  return (
    <article className="cocktail">
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
    </article>
  );
};

export default List;
