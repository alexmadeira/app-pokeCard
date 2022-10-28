import styled from 'styled-components'

export const Container = styled.div`
  width: 367px;
  height: 582px;
  border-radius: ${(props) => props.theme.radii.lg};
  background-color: ${(props) => props.theme.colors.System.Red.hex};
  position: relative;
  box-shadow: 10px 10px 10px 6px rgba(0, 0, 0, 0.6);
`

export const TabTop = styled.div`
  position: absolute;
  height: 30px;
  width: 150px;
  left: 20px;
  top: 30px;
  background-color: ${(props) => props.theme.colors.System.Red.hex};
  border-bottom: 1px solid ${(props) => props.theme.colors.System.Black.hex};
  border-right: 1px solid ${(props) => props.theme.colors.System.Black.hex};
  border-bottom-right-radius: 5px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  ::after {
    content: '';
    box-shadow: -1px 9px 5px -3px rgb(0 0 0 / 40%);
    background-color: ${(props) => props.theme.colors.System.Red.hex};
    border-bottom: 1px solid ${(props) => props.theme.colors.System.Black.hex};
    height: 20px;
    width: 35.5px;
    position: absolute;
    right: -22.5px;
    transform: rotate(-45deg);
    top: -1.5px;
  }
`
export const TabBottom = styled.div`
  position: absolute;
  height: 30px;
  width: 60px;
  right: 20px;
  bottom: 105.3px;
  background-color: ${(props) => props.theme.colors.System.Red.hex};
  border-top: 1px solid ${(props) => props.theme.colors.System.Black.hex};
  border-left: 1px solid ${(props) => props.theme.colors.System.Black.hex};
  border-top-left-radius: 5px;
  display: flex;
  ::after {
    content: '';
    background-color: ${(props) => props.theme.colors.System.Red.hex};
    border-top: 1px solid ${(props) => props.theme.colors.System.Black.hex};
    height: 20px;
    width: 35.5px;
    position: absolute;
    left: -22.5px;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
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
