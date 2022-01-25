import { IPokemon } from '../../types/pokemon'
import {
  capitalize,
  formatPercentageBar,
  formatPokemonStats
} from '../../utils';
import { ContainerCard } from './styles'

interface ICard {
  pokemon?: IPokemon
}

export function Card({
  pokemon
}: ICard) {
  return (
    <ContainerCard>
      <header className={pokemon?.types[0].type.name}>
        <h1>{`${pokemon?.id}. ${capitalize(pokemon?.name)}`}</h1>
        <div className="types">
          {pokemon?.types.map((types, index) => (
            <span key={index}>{types?.type.name}</span>
          ))}
        </div>
      </header>
      <main>
        <div className='sprites'>
          <img src={pokemon?.sprites.other.home.front_default} alt={pokemon?.name} />
        </div>
        <h1>Base Stats</h1>
        {pokemon?.stats.map((stats, index) => (
          <div className="stats" key={index}>
            <span>{formatPokemonStats(stats?.stat?.name)}</span>
            <span>{stats.base_stat}</span>
            <div className="barStats">
              <div className="bar" style={{ width: formatPercentageBar(stats.base_stat) }} />
            </div>
          </div>
        ))}
      </main>
    </ContainerCard>
  )
}
