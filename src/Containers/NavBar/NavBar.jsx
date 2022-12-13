import React from "react";
import FilterBox from "../../Components/FilterBox/FilterBox";
import SearchBox from "../../Components/SearchBox/SearchBox";



const NavBar = ({ updateSearchTerm, updateFilters, filters }) => {
  
    
    return (
      <nav className="navBar">
        <SearchBox placeholder="Beer Name" updateSearchTerm={updateSearchTerm}/>
        <FilterBox updateFilters={updateFilters} filters={filters}/>
      </nav>
    )
  }
  
  export default NavBar;