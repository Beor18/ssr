import React from "react";
import "./Card.styl";

const Card = ({ title, description }) => {
  return (
    <li className="cards__item">
      <div className="card">
        <div className="card__image card__image--fence">
          <img href="https://unsplash.it/800/600?image=39" />
        </div>
        <div className="card__content">
          <div className="card__title">{title}</div>
          <p className="card__text">{description} </p>
          <button className="btn btn--block card__btn">Button</button>
        </div>
      </div>
    </li>
  );
};

export default Card;
