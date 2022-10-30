import type { IBase } from './base'
import type { IAbility } from './ability'
import type { IGameIndicie } from './gameIndices'
import type { IMovie } from './movies'
import type { ISprites } from './sprites'
import type { IStart } from './starts'
import type { IType } from './types'

export interface IPokemon {
  id: number
  name: string
  abilities: IAbility[]
  base_experience: number
  forms: IBase[]
  game_indices: IGameIndicie[]
  height: number
  is_default: boolean
  location_area_encounters: string
  moves: IMovie[]
  order: number
  species: IBase
  sprites: ISprites
  stats: IStart[]
  types: IType[]
  weight: number
}
