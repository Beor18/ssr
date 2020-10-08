import React from "react";
import { FaSearch } from 'react-icons/fa';

const InputSearch = ({ placeholder, value, onChange }) => {

  return (
    <div className="input_container">
      <FaSearch />
      <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default InputSearch;
