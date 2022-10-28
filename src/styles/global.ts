import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background:  ${(props) => props.theme.colors.System.Gray.hex};
    color: ${(props) => props.theme.colors.System.White.hex};
    font-family: ${(props) => props.theme.fonts.default};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    line-height: ${(props) => props.theme.lineHeights.base};
  }
`
