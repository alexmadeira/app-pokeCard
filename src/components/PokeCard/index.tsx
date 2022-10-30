import React from 'react'

import { usePokemon } from '../../hooks/usePoke'

import { PokBox } from '../PokeBox'
import { PokeInfo } from '../PokeInfo'

import { Container, TabTop, TabBottom } from './styles'

export const PokeCard: React.FC = () => {
  const { getPokemon, isEmpty } = usePokemon()
  const { name, id } = getPokemon()

  return (
    <Container>
      <TabTop>
        <h1>{!isEmpty() && name}</h1>
      </TabTop>
      <TabBottom>
        <span>{!isEmpty() && `#${String(id).padStart(3, '0')}`}</span>
      </TabBottom>
      <PokBox />
      <PokeInfo />
    </Container>
  )
}
