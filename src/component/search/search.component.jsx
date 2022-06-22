import React from "react";

import "./search.styles.css";

const Search = ({ placeholderTxt, handleChange }) => {
  return (
    <input
      className="search-bar"
      type="search"
      onChange={handleChange}
      placeholder={placeholderTxt}
    />
  );
};

export default Search;
