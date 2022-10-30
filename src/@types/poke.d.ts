import type { ISprites } from './pokemon/sprites'
import type { IPokemon } from './pokemon'
interface PokemonSprites extends ISprites {
  hd_image_name: string
}

export interface IPokemonData extends IPokemon {
  sprites: PokemonSprites
}

export interface IPokeContextData {
  findPokemon(pokemon: number | string): Promise<void>
  getPokemon(): IPokemonData
  isEmpty(): boolean
}
