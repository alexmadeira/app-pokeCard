import React from 'react'

import { PokBox } from '../PokeBox'
import { PokeInfo } from '../PokeInfo'

import { Container, TabTop, TabBottom } from './styles'

export const PokeCard: React.FC = () => {
  return (
    <Container>
      <TabTop>
        <h1>Charizard</h1>
      </TabTop>
      <TabBottom>
        <span>#006</span>
      </TabBottom>
      <PokBox />
      <PokeInfo />
    </Container>
  )
}
