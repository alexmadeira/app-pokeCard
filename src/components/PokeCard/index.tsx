import React from 'react'

import { Container, Tab, PokeBox, PokeImage } from './styles'

export const PokeCard: React.FC = () => {
  return (
    <Container>
      <Tab />
      <PokeBox>
        <PokeImage src="/temp/Pokemon.png" alt="" />
      </PokeBox>
    </Container>
  )
}
