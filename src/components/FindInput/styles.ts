import styled from 'styled-components'

export const Container = styled.input`
  margin-bottom: 20px;
  background: none;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.System.White.hex};
  color: ${(props) => props.theme.colors.System.White.hex};
  width: 250px;
  outline: none;
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-family: ${(props) => props.theme.fonts.heading};
  padding: 0 ${(props) => props.theme.space[2]};
  letter-spacing: 3px;
  text-align: center;
`
