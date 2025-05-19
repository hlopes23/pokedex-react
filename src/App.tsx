import { useEffect, useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard';
import PokemonSelector from './components/PokemonSelector';

function App() {

  const [selectedPokemon, setPokemon] = useState('mewtwo');
  const [pokemonData, setPokemonData] = useState<any>(null);

  const handleSelectedPokemon = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPokemon(e.target.value);
  }

  async function fetchPokemon(pokemonName: string) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();

    const transformedData = {
      name: data.name,
      type: data.types[0].type.name,
      image: data.sprites.other['official-artwork'].front_default,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      specialAttack: data.stats[3].base_stat,
      specialDefense: data.stats[4].base_stat,
      speed: data.stats[5].base_stat,
      height: data.height / 10, 
      weight: data.weight / 10, 
      ability: data.abilities[0]?.ability.name,
      hiddenAbility: data.abilities[1]?.ability.name || "None"
    };
  
    setPokemonData(transformedData);
  }

  useEffect(() => {
    if (selectedPokemon) {
      fetchPokemon(selectedPokemon);
    }
  }, [selectedPokemon]);
  

  return (
      <div>
        <p>pokédex</p>
        <PokemonSelector selectedPokemon={selectedPokemon} handleSelectedPokemon={handleSelectedPokemon} />
        {pokemonData ? <PokemonCard pokemon={pokemonData} /> : <p>Loading...</p>}
      </div>
  )
}

export default App