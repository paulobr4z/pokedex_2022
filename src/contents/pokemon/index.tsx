import { IPokemon } from "../../types/pokemon";

interface IContentPokemonPage {
  pokemon: IPokemon
}

export function ContentPokemonPage({
  pokemon
}: IContentPokemonPage) {
  return <div>{pokemon?.name}</div>;
}
