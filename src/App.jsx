import React, { useEffect, useState } from 'react'
import PokemonThumb from './components/PokemonThumb'
import navbar from './Navbar'
import Filters from "./pages/Filters"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"


const App = () => {

   const[allPokemons, setAllPokemons] = useState([])
   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }

 useEffect(() => {
  getAllPokemons()
 }, [])

  return (
    <>
      <navbar/>
      <div className="app-contaner">
      <h1>PokeDex</h1>
        <div className="pokemon-container">
          <div className="all-container">
            {allPokemons.map( (pokemonStats, index) => 
              <PokemonThumb
                key={index}
                id={pokemonStats.id}
                image={pokemonStats.sprites.other.dream_world.front_default}
                name={pokemonStats.name}
                type={pokemonStats.types[0].type.name}
              />)}
          
        </div>
          <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
      </div>
      </div>
    </>
  );
}

export default App;