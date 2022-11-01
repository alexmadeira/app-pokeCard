import React, { useCallback, useEffect, useState } from 'react'
import { prominent } from 'color.js'

import { usePokemon } from '../../hooks/usePoke'

import { Container, PokeImage } from './styles'

export const PokBox: React.FC = () => {
  const [color, setColor] = useState('#FFFFFF')
  const { getPokemon, isEmpty } = usePokemon()
  const { sprites, name, types } = getPokemon()

  const getImageColor = useCallback(async () => {
    const color = await prominent(`/img/pokemons/${sprites?.hd_image_name}`, {
      amount: 2,
      format: 'hex',
    })
    console.log(color[1].toString())
    setColor(color[1].toString())
  }, [sprites])

  useEffect(() => {
    if (!isEmpty()) {
      getImageColor()
    }
  }, [isEmpty, getImageColor, sprites])

  return (
    <Container type={types ? types[0].type.name : 'none'} baseColor={color}>
      {!isEmpty() && (
        <PokeImage src={`/img/pokemons/${sprites.hd_image_name}`} alt={name} />
      )}
    </Container>
  )
}
