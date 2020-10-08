import React from "react";
import "./../Button/Button.styl";

const FilterButtons = ({ text, pagSelected, setPagSelected, result = [] }) => {
  return (
    <div id="searchButtoms" className="form_group button_filter">
      <button
        className={`btn_search focusable ${pagSelected === "all" && `active`}`}
        onClick={() => setPagSelected("all")}
      >
        Todos
      </button>

      <button
        className={`btn_search focusable ${pagSelected === "humans" && `active`}`}
        onClick={() => setPagSelected("humans")}
      >
        Human
      </button>

      <button
        className={`btn_search focusable ${pagSelected === "aliens" && `active`}`}
        onClick={() => setPagSelected("aliens")}
      >
        Aliens
      </button>
    </div>
  );
};

export default FilterButtons;
