import React from "react";

import "./card.styles.css";

const Card = ({ recipe }) => {
  const { name, slug, thumbnail_url, thumbnail_alt_text } = recipe;
  return (
    <div className="card">
      <img src={thumbnail_url} alt={thumbnail_alt_text} height="200" />
      <div className="details">
        <h2>{name}</h2>
        <a href={`https://tasty.co/recipe/${slug}`} target="_blank">
          Link to recipe
        </a>
      </div>
    </div>
  );
};

export default Card;
