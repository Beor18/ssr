import React from "react";
import "./../Button/Button.styl";

const FilterButtons = ({ text, pagSelected, setPagSelected, result = [] }) => {
  return (
    <div id="searchButtoms" className="formGroup buttonFilter button-filter">
      <button
        className={`btnSearch focusable ${pagSelected === "all" && `active`}`}
        onClick={() => setPagSelected("all")}
      >
        Human
      </button>

      <button
        className={`btnSearch focusable ${pagSelected === "tv" && `active`}`}
        onClick={() => setPagSelected("tv")}
      >
        Aliens
      </button>
    </div>
  );
};

export default FilterButtons;
