import styled from 'styled-components'

export const Container = styled.div`
  width: 367px;
  height: 582px;
  border-radius: ${(props) => props.theme.radii.lg};
  background-color: ${(props) => props.theme.colors.Red[600].hex};
  position: relative;
  box-shadow: 10px 10px 10px 6px rgba(0, 0, 0, 0.6);
`

export const TabTop = styled.div`
  position: absolute;
  height: 30px;
  width: 150px;
  left: 20px;
  top: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: ${(props) => props.theme.colors.Red[600].hex};
  border-bottom: 1px solid ${(props) => props.theme.colors.System.Black.hex};
  border-right: 1px solid ${(props) => props.theme.colors.System.Black.hex};
  box-shadow: 3px 3px 0px 2px ${(props) => props.theme.colors.Red[900].hex};
  border-bottom-right-radius: 5px;
  z-index: 5;
  ::after {
    content: '';
    background-color: ${(props) => props.theme.colors.Red[600].hex};
    border-bottom: 1px solid ${(props) => props.theme.colors.System.Black.hex};
    box-shadow: 0px 7px 0px -1px ${(props) => props.theme.colors.Red[900].hex};
    height: 20px;
    width: 35.5px;
    position: absolute;
    right: -22px;
    top: -1.5px;
    transform: rotate(-45deg);
  }
  h1 {
    font-family: ${(props) => props.theme.fonts.heading};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.xl};
    line-height: ${(props) => props.theme.lineHeights.shorter};
    position: absolute;
    bottom: ${(props) => props.theme.space[3]};
    left: ${(props) => props.theme.space[1]};
    text-transform: capitalize;
  }
`
export const TabBottom = styled.div`
  position: absolute;
  height: 30px;
  width: 60px;
  right: 20px;
  bottom: 105.3px;
  background-color: ${(props) => props.theme.colors.Red[600].hex};
  border-top: 1px solid ${(props) => props.theme.colors.System.Black.hex};
  border-left: 1px solid ${(props) => props.theme.colors.System.Black.hex};
  border-top-left-radius: 5px;
  display: flex;
  z-index: 5;
  ::after {
    content: '';
    background-color: ${(props) => props.theme.colors.Red[600].hex};
    border-top: 1px solid ${(props) => props.theme.colors.System.Black.hex};
    height: 20px;
    width: 35.5px;
    position: absolute;
    left: -22.5px;
    transform: rotate(-45deg);
    top: 10px;
  }
  span {
    font-family: ${(props) => props.theme.fonts.default};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.md};
    line-height: ${(props) => props.theme.lineHeights.base};
    z-index: 2;
    margin: ${(props) => props.theme.space[1]};
  }
`
