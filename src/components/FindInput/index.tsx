import React, { ChangeEvent, useEffect } from 'react'

import { usePokemon } from '../../hooks/usePoke'

import { Container } from './styles'

export const FindInput: React.FC = () => {
  const { findPokemon } = usePokemon()

  const getPoke = (e: ChangeEvent<HTMLInputElement>) => {
    findPokemon(e.target.value)
  }

  useEffect(() => {
    findPokemon(1)
  }, [findPokemon])

  return <Container type="text" placeholder="Find Card" onBlur={getPoke} />
}
