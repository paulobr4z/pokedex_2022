export interface IPokemon {
  id: number;
  name: string;
  abilities: IAbilities;
  height: number;
  weight: number;
  sprites: ISprites;
  stats: IStats[];
  species: ISpecies;
  types: ITypes[];
}

export interface IPokemonList {
  count: number;
  next: string;
  previous: string;
  results: IPokemonListResults[];
}

export interface IPokemonListResults {
  name: string;
  url: string;
}

export interface IAbilities {
  ability: { name: string }
}

export interface ISprites {
  other: { home: { front_default: string } }
}

export interface IStats {
  base_stat: string;
  stat: { name: string };
}

export interface ITypes {
  type: { name: string };
}

export interface ISpecies {
  name: string;
  url: string;
}

export interface IPokemonSpecies {
  name: string;
  evolution_chain: IEvolutionChain;
}

export interface IEvolutionChain {
  chain: {
    evolves_to: []
  };
}

export interface IStats {
  h
}