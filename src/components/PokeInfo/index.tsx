import React from 'react'

import PokeAnimation from '../PokeAnimation'

import { Container, Info, ImagesBox, TypesBox } from './styles'

export const PokeInfo: React.FC = () => {
  return (
    <Container>
      <Info>
        <p>Region: Kanto</p>
        <ImagesBox>
          <TypesBox>
            <img src="/temp/fire.png" alt="fire" />
            <img src="/temp/fire.png" alt="fire" />
          </TypesBox>
        </ImagesBox>
      </Info>
      <PokeAnimation />
    </Container>
  )
}
