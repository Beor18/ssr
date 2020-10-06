import React from "react";

const InputSearch = ({ placeholder, value, onChange }) => {

  return (
    <div className="inputContainer">
      <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default InputSearch;
