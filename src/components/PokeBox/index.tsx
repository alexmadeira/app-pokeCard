import React from 'react'

import { usePokemon } from '../../hooks/usePoke'

import { Container, PokeImage } from './styles'

export const PokBox: React.FC = () => {
  const { getPokemon, isEmpty } = usePokemon()
  const { sprites, name } = getPokemon()

  return (
    <Container>
      {!isEmpty() && (
        <PokeImage src={`/img/pokemons/${sprites?.hd_image_name}`} alt={name} />
      )}
    </Container>
  )
}
