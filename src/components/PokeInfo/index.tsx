import React from 'react'
import { usePokemon } from '../../hooks/usePoke'

import PokeAnimation from '../PokeAnimation'

import { Container, Info, ImagesBox, TypesBox } from './styles'

export const PokeInfo: React.FC = () => {
  const { getPokemon, isEmpty } = usePokemon()
  const pokemon = getPokemon()

  return (
    <Container>
      <Info>
        <p>Region: kanto</p>
        <ImagesBox>
          <TypesBox>
            {!isEmpty() &&
              pokemon.types.map(({ type }) => (
                <img
                  src={`/img/pokemonTypes/${
                    type.name[0].toUpperCase() + type.name.substring(1)
                  }.png`}
                  key={type.name}
                  alt={`Tipo ${type.name}`}
                />
              ))}
          </TypesBox>
        </ImagesBox>
      </Info>
      <PokeAnimation />
    </Container>
  )
}
