import React from "react";
import "./Card.styl";

const Card = ({ title, description, image }) => {
  return (
    <li className="cards__item">
      <div className="card">
        <div className="card__image">
          <img src={image} />
        </div>
        <div className="card__content">
          <div className="card__title">{title}</div>
          <p className="card__text">{description} </p>
        </div>
      </div>
    </li>
  );
};

export default Card;
