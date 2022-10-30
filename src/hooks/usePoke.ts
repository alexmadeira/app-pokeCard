import { useContextSelector } from 'use-context-selector'
import { PokeContext } from '../context/PokeContext'

import type { IPokeContextData } from '../@types/poke'

export function usePokemon(): IPokeContextData {
  const findPokemon = useContextSelector(
    PokeContext,
    (pokemon) => pokemon.findPokemon,
  )
  const findGeneration = useContextSelector(
    PokeContext,
    (pokemon) => pokemon.findGeneration,
  )
  const getPokemon = useContextSelector(
    PokeContext,
    (pokemon) => pokemon.getPokemon,
  )
  const getGeneration = useContextSelector(
    PokeContext,
    (pokemon) => pokemon.getGeneration,
  )
  const isEmpty = useContextSelector(PokeContext, (pokemon) => pokemon.isEmpty)

  return {
    findPokemon,
    findGeneration,
    getPokemon,
    isEmpty,
    getGeneration,
  }
}
