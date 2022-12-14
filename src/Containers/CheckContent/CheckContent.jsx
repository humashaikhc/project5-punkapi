import React from 'react';
import NotFound from "../../Components/NotFound/NotFound";
import "./CheckContent.scss";
import CardList from "../CardList/CardList";

const CheckContent=({beerArr}) => {
  
  const content = beerArr.length
    ? (<CardList beerArr={beerArr}/>)
    : (<NotFound text="Sorry !! No Beers found" />
  );

  return (
    <section>
      {content}
     </section>
  )
}

export default CheckContent;