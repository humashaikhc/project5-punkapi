import React from "react";
import "./CardList.scss";
import Card from "../../Components/Card/Card";

const CardList = ({beerArr}) =>{


    return(
        <div className = "beer-container">
           {beerArr.map((beer)=> (
        <Card
        key={beer.id}
        name={beer.name}
        image = {beer.image_url}
        abv = {beer.abv}
        ph = {beer.ph}
        year = {beer.first_brewed}/>
    ))} 
        </div>
    );
};
export default CardList;