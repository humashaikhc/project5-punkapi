import "./SearchBox.scss";

const SearchBox = ({searchTerm,handleInput}) => {
  
    return (
      <form className="search-box">
        <label className="search-box__label">
          Search Name of Beer
        </label>
        <input
          type="text"
          value={searchTerm}
          onInput={handleInput}
          className="search-box__input"
        />
      </form>
    );
  };
  
  export default SearchBox;