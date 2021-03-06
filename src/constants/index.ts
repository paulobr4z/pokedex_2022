//routes
export const GET_POKEMONS = `/pokemon`;
export const GET_ALL_POKEMONS = `/pokemon?limit=1118`;
export const GET_POKEMON_BY_NAME = (name: string) => `/pokemon/${name}`;
export const GET_POKEMON_BY_NUMBER = (number: string) => `/pokemon/${number}`;