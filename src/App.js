import React, { useState } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  // console.log(pokemons);
  let pokeList = [];
  //const result = words.filter(word => word.length > 6);
  const matchPokemon = pokemons.filter((pokemon) => pokemon.name === name);
  matchPokemon.forEach((item) => {
    pokeList.push(<CardItem name={item.name} sprite={item.sprite} />);
  });
  //console.log(name)
  //console.log(matchPokemon);
  //console.log(pokeList);
  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      {/*<h2>Preview:{name}</h2>*/}
      <input
        name="name"
        type="text"
        placeholder="Enter the Pokémon name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      {/*}
     <button> Insert Pokemon</button>
      */}

      <div className="cards">{pokeList}</div>
    </div>
  );
}
