import './App.scss';
import beer from "./data/beers";

import CardList from "./Containers/CardList/CardList";

function App() {
  return (

    <div className="app">
      <header className="beer-header">Beer List Using Punk-API</header>
        <CardList beerArr = {beer}/>
    </div>
  );
}

export default App;
