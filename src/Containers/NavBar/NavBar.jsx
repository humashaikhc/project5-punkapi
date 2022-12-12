import "./NavBar.scss";
import SearchBox from "../../Components/SearchBox/SearchBox";
import { useState } from "react";

const NavBar = ({ beerArr }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filterBeer = beerArr.filter((beer) => {
    const beerNameLowerCase = beer.name.toLowerCase();
    return beerNameLowerCase.includes(searchTerm);
  });
  return (
    <div>
      <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
    </div>
  );
};

export default NavBar;
