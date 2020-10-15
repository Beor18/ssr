import React from "react";
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

const InputSearch = ({ placeholder, value, onChange }) => {

  return (
    <div className="input_container">
      <FaSearch />
      <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

InputSearch.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

InputSearch.defaultProps = {
  placeholder: 'ingrese su busqueda',
}

export default InputSearch;
