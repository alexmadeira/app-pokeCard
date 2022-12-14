import React from 'react'

import { usePokemon } from '../../hooks/usePoke'

import { Container } from './styles'

const PokeAnimation: React.FC = () => {
  const { getPokemon, isEmpty } = usePokemon()
  const { sprites, name } = getPokemon()

  return (
    <Container>
      {!isEmpty() && (
        <img
          src={
            sprites.versions['generation-v']['black-white'].animated
              .front_default ||
            sprites.versions['generation-v']['black-white'].front_default
          }
          alt={`${name} - Animação`}
        />
      )}
    </Container>
  )
}

export default PokeAnimation
