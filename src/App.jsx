import './App.scss';
import beer from "./data/beers";

import CardList from "./Containers/CardList/CardList";
import NavBar from "./Containers/NavBar/NavBar";


function App() {
  return (
    <div className="app">
      <div className="navBar">
        <h2 className="navBar__header">Navigation</h2>
        <NavBar beerArr ={beer}/>
      </div>
      <header className="beer-header">Beer List Using Punk-API</header>
        <CardList beerArr = {beer}/>
    </div>
  );
}

export default App;
