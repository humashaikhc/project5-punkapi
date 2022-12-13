import {useState, useEffect} from "react";
import './App.scss';
//import beer from "./data/beers";

import CardList from "./Containers/CardList/CardList";
import NavBar from "./Containers/NavBar/NavBar";

 
const app = () => {
  const [ beers, setBeers ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState("");
  const [ filters, setFilters ] = useState([false, false, false]);
  const [ filteredBeers, setFilteredBeers ] = useState([]);

const getBeers = async(result)=>{
  const url = `https://api.punkapi.com/v2/beers${result}`
  const res = await fetch(url);
  const data = await res.json();
  setBeers(data.results);
}

const updateSearchTerm = (input) => {
  let APIParameter;
  if (input === "") {
    APIParameter = "";
  } else {
    APIParameter = `?beer_name=${input}`
  }
  setSearchTerm(APIParameter);
}

const updateFilters = (filterNum) => {
  setFilters([...filters.slice(0, filterNum), !filters[filterNum], ...filters.slice(filterNum + 1),]);  
}

const extractYear = (date) => {
  if(!date.includes("/")) {
    return "Invalid year";
  };
  const splitDate = date.split("/");
  const yearOnly = parseInt(splitDate[1]);
  if (yearOnly === NaN) {
    return "Invalid year"
  } else {
    return yearOnly;
  }
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
     <header className="beer-header">Beer List Using Punk-API</header>
      <div className="navBar">
        <h2 className="navBar__header">Navigation</h2>
        <NavBar 
        searchterm={updateSearchTerm} 
        updateFilters={updateFilters} 
        filter={filters}/>
      </div>
        <div>
          <CardList beerArr = {filteredBeers}/>
        </div>
    </div>
  );
}


export default app;
