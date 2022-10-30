import type { IPokemon, IPokemonSprites, IGeneration } from 'pokeapi-typescript'

interface PokemonSprites extends IPokemonSprites {
  hd_image_name: string
  versions?: {
    'generation-v': {
      'black-white': {
        animated: {
          front_default: string
        }
      }
    }
  }
}

export interface IPokemonData extends IPokemon {
  sprites: PokemonSprites
}

export interface IPokeContextData {
  findPokemon(pokemon: number | string): Promise<void>
  findGeneration(pokemon: number | string): Promise<void>
  getPokemon(): IPokemonData
  isEmpty(): boolean
  getGeneration(): IGeneration
}
