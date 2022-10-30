import { useContextSelector } from 'use-context-selector'
import { PokeContext } from '../context/PokeContext'

import type { IPokeContextData } from '../@types/poke'

export function usePokemon(): IPokeContextData {
  const findPokemon = useContextSelector(
    PokeContext,
    (pokemon) => pokemon.findPokemon,
  )

  const getPokemon = useContextSelector(
    PokeContext,
    (pokemon) => pokemon.getPokemon,
  )

  const isEmpty = useContextSelector(PokeContext, (pokemon) => pokemon.isEmpty)

  return {
    findPokemon,
    getPokemon,
    isEmpty,
  }
}
