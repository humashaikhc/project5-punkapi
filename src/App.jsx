import React, {useState, useEffect} from "react";
import './App.scss';
//import beer from "./data/beers";
import { getBeers } from "./data/getBeer";
import { extractYear } from "./data/year";

import CheckContent from "./Containers/CheckContent/CheckContent";
import NavBar from "./Containers/NavBar/NavBar";

 
const App = () => {
  const [ beers, setBeers ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ filters, setFilters ] = useState([false, false, false]);
  const [ filteredBeers, setFilteredBeers ] = useState([]);

  const updateSearchTerm = (input) => {
    let APIParameter;
    if (input === "") {
      APIParameter = "";
    } else {
      APIParameter = `?beer_name=${input}`
    }
    setSearchTerm(APIParameter);
  }

  const updateBeers = async (input) => {
    const updatedBeers = await getBeers(input);
    setBeers(updatedBeers);
  }

  const updateFilters = (filterNo) => {
    setFilters([
      ...filters.slice(0, filterNo),
      !filters[filterNo],
      ...filters.slice(filterNo + 1),
    ]);  
  }



  const filterBeers = (filters, beersToFilter) => {
    let filteredBeerArray = [...beersToFilter];
    if(filters[0]) {
      filteredBeerArray = filteredBeerArray.filter(beer => beer.abv > 6);
    }
    if(filters[1]) {
      filteredBeerArray = filteredBeerArray.filter(beer => {
        const year = extractYear(beer.first_brewed);
        return year < 2010;
      })
    }
    if(filters[2]) {
      filteredBeerArray = filteredBeerArray.filter(beer => beer.ph < 4);
    }
    console.log(filteredBeerArray);
    return filteredBeerArray; 
  }
    

  useEffect(() => {
    updateBeers("");
  }, []);

  useEffect(() => {
    updateBeers(searchTerm)
  }, [searchTerm]);
  
  useEffect(() => {
    setFilteredBeers(filterBeers(filters, beers))
  }, [beers, filters]);

  return (
    <div className="app">
      <header className="header">Punk Api Beer List</header>
        <div className="app__main" >
          <NavBar 
            updateSearchTerm={updateSearchTerm} 
            updateFilters={updateFilters}
            filters={filters}
            className="app__main--nav-sidebar"/>
        
          <CheckContent beerArr={filteredBeers} className="app__main--main"/>
          </div>
        
      
    </div>
  );
}

export default App;
