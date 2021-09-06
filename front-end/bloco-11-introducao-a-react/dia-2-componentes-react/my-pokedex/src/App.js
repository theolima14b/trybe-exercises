import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
render() {
  return (
    <div className="App">
      <img className="pokedex-logo" src="https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png" alt="Pokedex"></img>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

}

export default App;