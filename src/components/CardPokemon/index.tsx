import Link from 'next/link';
import { IPokemon } from '../../types/pokemon'
import {
  capitalize,
} from '../../utils';
import { ContainerCardPokemon } from './styles';

interface ICardPokemon {
  pokemon?: IPokemon
}

export function CardPokemon({
  pokemon
}: ICardPokemon) {
  return (
    <ContainerCardPokemon>
      <h1>{pokemon?.name}</h1>
    </ContainerCardPokemon>
  )
}
