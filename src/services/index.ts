import api from "./api";
import { 
  GET_POKEMONS,
  GET_POKEMON_BY_NAME, 
  GET_POKEMON_BY_NUMBER,
} from "../constants";

export async function getPokemonByName( name: string ) {
  try {
    const response = await api.get(GET_POKEMON_BY_NAME(name));

    const { data } = response;

    return data;
  } catch (error) {
    throw "Falha, tente novamente!";
  }
}

export async function getPokemonByNumber( url: string ) {
  try {
    const response = await api.get(url);

    const { data } = response;
    
    return data;
  } catch (error) {
    throw "Falha, tente novamente!";
  }
}

export async function getPokemons( url: string ) {
  try {
    const response = await api.get(url);

    return response.data;
  } catch (error) {
    throw "Falha, tente novamente!";
  }
}
