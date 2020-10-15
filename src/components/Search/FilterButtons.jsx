import React from "react";
import PropTypes from "prop-types";
import "./../Button/Button.styl";

const FilterButtons = ({ text, pagSelected, setPagSelected, result = [] }) => {
  return (
    <div id="searchButtoms" className="form_group button_filter">
      <button
        className={`btn_search ${pagSelected === "all" && `active`}`}
        onClick={() => setPagSelected("all")}
      >
        Todos
      </button>

      <button
        className={`btn_search ${pagSelected === "humans" && `active`}`}
        onClick={() => setPagSelected("humans")}
      >
        Human
      </button>

      <button
        className={`btn_search ${pagSelected === "aliens" && `active`}`}
        onClick={() => setPagSelected("aliens")}
      >
        Aliens
      </button>
    </div>
  );
};

FilterButtons.propTypes = {
  text: PropTypes.string,
  pagSelected: PropTypes.string,
  setPagSelected: PropTypes.func,
  result: PropTypes.array,
};

export default FilterButtons;
