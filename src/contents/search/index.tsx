import Link from 'next/link';
import { useEffect, useState } from 'react';
import Select, { createFilter } from 'react-select'
import { getAllPokemons, getPokemonByName } from '../../services';
import { IPokemon } from '../../types/pokemon';
import { capitalize, formatPokemonNumber, formatPokemonStats } from '../../utils';

import { 
  BackIcon,
  ContainerContentSearch, 
  ContainerPokemonDetails,
  LikedIcon,
  UnlikedIcon,
} from "./styles";

export function ContentSearch() {
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [allPokemons, setAllPokemons] = useState();
  const [selectedPokemon, setSelectedPokemon] = useState('bulbasaur');
  const [liked, setLiked] = useState(false);

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
        filterOption={createFilter({ ignoreAccents: false })}
      />
      <ContainerPokemonDetails>
        <main>
          <header>
            <Link href="/">
              <BackIcon />
            </Link>
            <h1>{formatPokemonNumber(pokemon?.id)}</h1>
            {liked 
              ? <LikedIcon onClick={() => setLiked(!liked)} /> 
              : <UnlikedIcon onClick={() => setLiked(!liked)} />
            }
          </header>
          <div className='pokemonImage'>
            <img src={pokemon?.sprites.other.home.front_default} alt="" />
          </div>
        </main>
        <footer>
          <div className="info">
            <h2>{pokemon?.name}</h2>
            <span>
              {pokemon?.types[0]?.type.name}
              {pokemon?.types[1]?.type.name}
            </span>
          </div>
          <div className="description">
            <p>{`${pokemon?.height}m`}</p>
            <p>{`${pokemon?.weight}kg`}</p>
            <p>{pokemon?.abilities[0]?.ability.name}</p>
            <p>{pokemon?.abilities[1]?.ability.name}</p>
          </div>
          <div className="baseStats">
            <h3>Base Stats</h3>
            {pokemon?.stats.map(stats => (
              <span key={stats.stat.name}>
                <p>{formatPokemonStats(stats?.stat?.name)}</p>
                <p>{stats.base_stat}</p>
              </span>
            ))}
          </div>
        </footer>
      </ContainerPokemonDetails>
    </ContainerContentSearch>
  );
}
