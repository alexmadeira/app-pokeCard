import styled, { keyframes } from 'styled-components'
import type { Types } from '../../styles/tokens/colors'

interface IPokeBoxProps {
  type: keyof typeof Types
  baseColor: string
}

const animateBg = keyframes`
  0% {
    width: 10px;
    height: 10px;
  }
  100% {
    width: 500px;
    height: 250px;
  }
`

export const Container = styled.div<IPokeBoxProps>`
  overflow: hidden;
  position: relative;
  background: ${(props) => props.theme.colors.Types[props.type].hex};
  border: 1px solid ${(props) => props.theme.colors.System.Black.hex};

  width: calc(100% - ${(props) => props.theme.space[10]});
  height: calc(100% - ${(props) => props.theme.space[35]});

  margin-top: ${(props) => props.theme.space[8]};

  margin-left: ${(props) => props.theme.space[5]};
  margin-right: ${(props) => props.theme.space[5]};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 500ms linear;
  &::after {
    content: '';
    background: ${(props) => props.baseColor};
    position: absolute;
    width: 10%;
    height: 10%;
    top: 50%;
    left: 50%;
    transform-origin: center center;
    transform: translate(-50%, -50%);
    z-index: 2;
    border-radius: ${(props) => props.theme.radii.full};
    animation: 3s ${animateBg} infinite alternate;
  }
  &::before {
    content: '';
    position: absolute;
    box-shadow: inset 2px 3px 0px 2px
      ${(props) => props.theme.colors.Red[900].hex};
    border: 1px solid ${(props) => props.theme.colors.System.Black.hex};
    width: 100%;
    height: 100%;
    backdrop-filter: blur(80px);
    z-index: 3;
  }
`

export const PokeImage = styled.img`
  width: 85%;
  height: 85%;
  object-fit: contain;
  position: relative;
  z-index: 5;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.7));
`
