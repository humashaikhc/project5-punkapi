import React from "react";


const FilterItem = ({ id, boxName, value, checked, onChange }) => {
    
    return (
      <div>
        <input
          type="checkbox"
          id={id}
          value={value}
          checked={checked}
          onChange={() => onChange(+id)}
          className="filterItem"
        />  
      <span>{boxName}</span>
      </div>
    )
  }
  
  export default FilterItem