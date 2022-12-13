import React from "react";
import FilterItem from "../FilterItem/FilterItem";
import "./FilterBox.scss";

const FilterBox = ({updateFilters,filters}) =>{

    return (
        <form className="filterBox">
          <FilterItem 
            id="0"
            boxName="High Alcohol (ABV > 6%)"
            value="High ABV"
            checked={filters[0]}
            onChange={updateFilters}
          />
          <FilterItem 
            id="1"
            boxName="Classic Range (Brewed before 2010)"
            value="Classic Range"
            checked={filters[1]}
            onChange={updateFilters}
          />
          <FilterItem 
            id="2"
            boxName="Acidic (ph < 4)"
            value="Acidic (ph < 4)"
            checked={filters[2]}
            onChange={updateFilters}
          />
        </form>
      )
}
export default FilterBox;