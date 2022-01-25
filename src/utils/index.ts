export function capitalize(str: string | undefined) {
  return (str || '').charAt(0).toUpperCase() + (str || '').substring(1);
}

export function formatPokemonStats(str:string) {
  switch (str) {
    case 'hp':
      return 'Hp';
    case 'attack':
      return 'Attack';
    case 'defense':
      return 'Defense';
    case 'special-attack':
      return 'Sp. Atk';
    case 'special-defense':
      return 'Sp. Def';
    case 'speed':
      return 'Speed';
  }  
}

export function formatPercentageBar(str:string) {
  return `${Math.round((Number(str) / 150) * 100)}%`  
}