import React from 'react'

import { Container, PokeImage } from './styles'

export const PokBox: React.FC = () => {
  return (
    <Container>
      <PokeImage src="/temp/Pokemon.png" alt="" />
    </Container>
  )
}
