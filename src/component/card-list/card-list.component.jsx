import React from "react";

import Card from "../card/card.component";

import "./card-list.styles.css";

const CardList = ({ filteredRecipes }) => {
  console.log(filteredRecipes);
  return (
    <div className="card-list">
      {filteredRecipes.map((recipe, index) => (
        <Card key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default CardList;
