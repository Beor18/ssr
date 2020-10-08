import React from "react";
import "./Card.styl";

const Card = ({ title, description, image }) => {
  return (
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
          <img src={image} />
        </div>
        <div className="card_content">
          <div className="card_title">{title}</div>
          <p className="card_text">{description} </p>
        </div>
      </div>
    </li>
  );
};

export default Card;
