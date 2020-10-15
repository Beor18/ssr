import React from "react";
import PropTypes from "prop-types";
import "./Search.styl";

export default function SearchContainer({ children, ref }) {
  return (
    <div className="filter_container" ref={ref}>
      {children}
    </div>
  );
}

SearchContainer.propTypes = {
  children: PropTypes.object,
  ref: PropTypes.string,
};
