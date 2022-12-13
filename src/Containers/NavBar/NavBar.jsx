import "./NavBar.scss";
import SearchBox from "../../Components/SearchBox/SearchBox";



  return (
    <div>
      <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
    </div>
  );
};

export default NavBar;
