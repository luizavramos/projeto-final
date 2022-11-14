import React, { useState } from 'react';
import useDebounce from './useDebounce';
import "./SearchInput.css"

const SearchInput = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  function handleChange(event) {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  }

  return (
    <div className="Div-search">
    <div></div>
    <div className="float-label">
    <label> <img src="https://i.imgur.com/GSH3Qwv.png"/><input
      type="search"
      value={displayValue}
      onChange={handleChange}
      placeholder="Search"
    />
    </label></div></div>
  );
};

export default SearchInput;
