import Link from 'next/link';
import { IPokemon } from '../../types/pokemon'
import {
  capitalize,
} from '../../utils';
import { ContainerCardHome } from './styles'

interface ICard {
  pokemon?: IPokemon
}

export function CardHome({
  pokemon
}: ICard) {
  return (
    <ContainerCardHome>
      <Link href={`/pokemon/${pokemon?.name}`}>
        <a>
          <div className="background" />
          <header className={pokemon?.types[0].type.name}>
            <img src={pokemon?.sprites.other.home.front_default} alt={pokemon?.name} />
            <h1>{`#${pokemon?.id} ${capitalize(pokemon?.name)}`}</h1>
            <div className='types'>
              {pokemon?.types.map((types, index) => (
                <span key={index}>{types?.type.name}</span>
              ))}
            </div>
          </header>
        </a>
      </Link>
    </ContainerCardHome>
  )
}
