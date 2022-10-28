import React from 'react'

import { Container } from './styles'

const PokeAnimation: React.FC = () => {
  return (
    <Container>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif"
        alt=""
      />
    </Container>
  )
}

export default PokeAnimation
