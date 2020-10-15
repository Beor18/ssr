import React from "react";
import PropTypes from "prop-types";
import "./Button.styl";

const Button = ({ text }) => {
  return (
    <div className="buttons">
      <a href="#" className="buttons link">
        {text}
      </a>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
