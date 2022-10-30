import React, { ChangeEvent, useEffect } from 'react'
import { debounce } from 'lodash'

import { usePokemon } from '../../hooks/usePoke'

import { Container } from './styles'

export const FindInput: React.FC = () => {
  const { findPokemon } = usePokemon()

  const getPoke = debounce((e: ChangeEvent<HTMLInputElement>) => {
    findPokemon(e.target.value)
  }, 500)

  useEffect(() => {
    findPokemon(1)
  }, [findPokemon])

  return <Container type="text" placeholder="Find Pokemon" onChange={getPoke} />
}
