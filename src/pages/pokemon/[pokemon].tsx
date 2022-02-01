import { ContentPokemonPage } from "../../contents/pokemon";
import { getPokemonByName } from "../../services";
import { IPokemon } from "../../types/pokemon";

interface IPokemonPage {
  pokemon: IPokemon
}

export default function PokemonPage({
  pokemon,
}: IPokemonPage) {
  return <ContentPokemonPage pokemon={pokemon} />;
}

export async function getServerSideProps(context: any) {
  const { pokemon } = context.query;

  const response = await getPokemonByName(pokemon);
  
  return {
    props: {
      pokemon: response
    }, 
  }
}