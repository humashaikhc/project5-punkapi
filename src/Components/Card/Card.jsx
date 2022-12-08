import "./Card.scss"

const Card = ({name, image,abv,ph,year}) => {
    return (
        <div className="card">
           <img className="card__image" src = {image} alt = {name}/>
        
            <div className = "card__content">
                <h2 className="card__heading">{name}</h2>
                <p className="card__abv">{abv}</p>
                <p className="card__ph">{ph}</p>
                <p className="card__year">{year}</p>
            </div>
        </div>
    );
};

export default Card;