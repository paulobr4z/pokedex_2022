import { useEffect, useState } from 'react';
import Select from 'react-select'
import { getAllPokemons, getPokemonByName } from '../../services';
import { IPokemon } from '../../types/pokemon';
import { capitalize } from '../../utils';
import { 
  ContainerContentSearch,
} from "./styles";

export function ContentSearch() {
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [allPokemons, setAllPokemons] = useState();
  const [selectedPokemon, setSelectedPokemon] = useState('');

  async function onGetAllPokemons() {
    const response = await getAllPokemons();

    const pokemonList = response.results.map((pokemon:any) => {
      const formatedPokemonList = {
        value: pokemon.name,
        label: capitalize(pokemon.name)
      }
      return formatedPokemonList
    })
    setAllPokemons(pokemonList);    
  }

  useEffect(() => {
    onGetAllPokemons()
  }, []);

  async function onGetPokemonsByName() {
    if (!selectedPokemon) return

    const response = await getPokemonByName(selectedPokemon);

    setPokemon(response)
  }

  useEffect(() => {
    onGetPokemonsByName()
  }, [selectedPokemon]);
  
  return(
    <ContainerContentSearch>
      <Select 
        options={allPokemons}
        onChange={(e:any) => setSelectedPokemon(e.value)}
      />
      <h1>{pokemon?.name}</h1>
    </ContainerContentSearch>
  );
}
