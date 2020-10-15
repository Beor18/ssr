import React from "react";
import PropTypes from "prop-types";
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

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Card;
