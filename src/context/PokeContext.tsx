import React, { useCallback, useState } from 'react'
import api from '../api'

import type { IPokemon } from '../@types/pokemon'
import type { IPokeContextData, IPokemonData } from '../@types/poke'

import { createContext } from 'use-context-selector'

export interface IReactComponentProps {
  children: React.ReactNode
}

const PokeContext = createContext<IPokeContextData>({} as IPokeContextData)

const PokeProvider: React.FC<IReactComponentProps> = ({ children }) => {
  const [empty, setEmpty] = useState(true)
  const [pokemon, setPokemon] = useState({} as IPokemonData)

  const findPokemon = useCallback(async (pokemon: number | string = 1) => {
    try {
      const { data } = await api.get<IPokemon>(`pokemon/${pokemon}`)

      const pokemonStringId = String(data.id).padStart(3, '0')
      const pokemonClearName = data.name.split('-')[0]
      const pokemonHDImageName = `${pokemonStringId}${pokemonClearName}.png`

      const newSprites = {
        ...data.sprites,
        hd_image_name: pokemonHDImageName,
      }
      setPokemon({ ...data, sprites: newSprites })
      setEmpty(false)
    } catch (err) {
      console.log(err)
    }
  }, [])

  const getPokemon = useCallback(() => {
    return pokemon
  }, [pokemon])

  const isEmpty = useCallback(() => {
    return empty
  }, [empty])

  return (
    <PokeContext.Provider
      value={{
        findPokemon,
        getPokemon,
        isEmpty,
      }}
    >
      {children}
    </PokeContext.Provider>
  )
}

export { PokeContext, PokeProvider }
