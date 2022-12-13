import React from "react";
import "./SearchBox.scss";

const SearchBox = ({updateSearchTerm,placeholder}) => {
  
    return (
      <form className="search-box">
        <label className="search-box__label">
          Search-
        </label>
        <input
          type="text"
          placeholder={placeholder}
          onInput={e =>updateSearchTerm(e.target.value)}
          className="search-box__input">
        </input>
      </form>
    );
  };
  
  export default SearchBox;