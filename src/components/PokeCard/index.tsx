import React from 'react'

import { PokBox } from '../PokeBox'
import { PokeInfo } from '../PokeInfo'

import { Container, TabTop, TabBottom } from './styles'

export const PokeCard: React.FC = () => {
  return (
    <Container>
      <TabTop />
      <TabBottom>
        <span>#006</span>
      </TabBottom>
      <PokBox />
      <PokeInfo />
    </Container>
  )
}
