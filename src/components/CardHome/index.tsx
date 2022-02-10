import Link from 'next/link';
import Image from 'next/image';
import { IPokemon } from '../../types/pokemon'
import { capitalize, formatPokemonNumber } from '../../utils';
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
          <main className={pokemon?.types[0].type.name}>
            <Image
              src={pokemon?.sprites?.other?.home?.front_default || ''}
              height={214}
              width={214}
              alt={pokemon?.name}
            />
            <h1>{`${formatPokemonNumber(pokemon?.id)}`}</h1>
            <h1>{`${capitalize(pokemon?.name)}`}</h1>
            <div className='types'>
              {pokemon?.types.map((types, index) => (
                <span key={index}>
                  <Image
                    src={`/${pokemon.types[index].type.name}.svg`}
                    height={25}
                    width={25}
                    alt={pokemon?.name}
                  />
                  {types?.type.name}
                </span>
              ))}
            </div>
          </main>
        </a>
      </Link>
    </ContainerCardHome>
  )
}
