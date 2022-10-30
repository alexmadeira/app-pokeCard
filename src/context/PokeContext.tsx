import React, { useCallback, useState } from 'react'
import PokeAPI from 'pokeapi-typescript'

import type { IGeneration } from 'pokeapi-typescript'
import type { IPokeContextData, IPokemonData } from '../@types/poke'

import { createContext } from 'use-context-selector'

export interface IReactComponentProps {
  children: React.ReactNode
}

const PokeContext = createContext<IPokeContextData>({} as IPokeContextData)

const PokeProvider: React.FC<IReactComponentProps> = ({ children }) => {
  const [empty, setEmpty] = useState(true)
  const [pokemon, setPokemon] = useState({} as IPokemonData)
  const [generation, setGeneration] = useState({} as IGeneration)

  const findPokemon = useCallback(async (pokemon: number | string = 1) => {
    try {
      const pokemonResponse = await PokeAPI.Pokemon.resolve(pokemon)

      const pokemonStringId = String(pokemonResponse.id).padStart(3, '0')
      const pokemonClearName = pokemonResponse.name.split('-')[0]
      const pokemonHDImageName = `${pokemonStringId}${pokemonClearName}.png`

      const newSprites = {
        ...pokemonResponse.sprites,
        hd_image_name: pokemonHDImageName,
      }

      findGeneration(pokemon)
      setPokemon({ ...pokemonResponse, sprites: newSprites })
      setEmpty(false)
    } catch (err) {
      console.log(err)
    }
  }, [])

  const findGeneration = useCallback(async (pokemon: number | string = 1) => {
    try {
      const generationResponse = await PokeAPI.Generaition.resolve(pokemon)
      setGeneration(generationResponse)
    } catch (err) {
      console.log(err)
    }
  }, [])

  const getPokemon = useCallback(() => {
    return pokemon
  }, [pokemon])

  const getGeneration = useCallback(() => {
    return generation
  }, [generation])

  const isEmpty = useCallback(() => {
    return empty
  }, [empty])

  return (
    <PokeContext.Provider
      value={{
        findPokemon,
        findGeneration,
        getPokemon,
        getGeneration,
        isEmpty,
      }}
    >
      {children}
    </PokeContext.Provider>
  )
}

export { PokeContext, PokeProvider }
