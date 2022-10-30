import React from 'react'

import { usePokemon } from '../../hooks/usePoke'

import { Container } from './styles'

const PokeAnimation: React.FC = () => {
  const { getPokemon } = usePokemon()
  const { sprites, name } = getPokemon()

  return (
    <Container>
      <img
        src={
          sprites?.versions!['generation-v']['black-white'].animated
            .front_default
        }
        alt={`${name} - Animação`}
      />
    </Container>
  )
}

export default PokeAnimation
