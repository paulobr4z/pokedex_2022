import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { Loading } from '../../components/Loading';
import { getPokemonByNumber, getPokemons } from '../../services';
import { IPokemon, IPokemonListResults } from '../../types/pokemon';
import { ContainerHome } from './styles';

export function ContentHome() {
  const [pokemonsList, setPokemonsList] = useState<IPokemonListResults[]>([]);
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  async function onGetPokemonsList() {
    if (!offset) return;

    const response = await getPokemons(nextUrl);
    
    setPokemonsList(response.results);
    setNextUrl(response.next)
  }

  useEffect(() => {
    onGetPokemonsList();
  }, [offset]);


  async function onGetPokemonsByNumber() {
    if (!nextUrl) {
      setLoading(false)
      return;
    }

    axios.all(pokemonsList?.map(async (pokemon) => await getPokemonByNumber(pokemon.url))).then(
      (data) => data.map(data => setPokemons(newPokemons => [...newPokemons, data])),
    );
  }  
    
  useEffect(() => {
    onGetPokemonsByNumber();
  }, [pokemonsList]);

  useEffect(() => {
    const endlist = document.querySelector('.endlist') as HTMLElement;
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setOffset(num => num + 20);
      }
    })

    intersectionObserver.observe(endlist)

    return () => intersectionObserver.disconnect();
  }, [])

  return (
    <ContainerHome>
      <main>
        {
          pokemons?.map((pokemon, index) => (
            <div key={index}>
              <Card pokemon={pokemon} />
            </div>
          ))
        }
      </main>
      <Loading loading={loading} />
      <div 
        className='endlist'
        style={{ width: 50, height: 10 }}
      />
    </ContainerHome>
  )
}

