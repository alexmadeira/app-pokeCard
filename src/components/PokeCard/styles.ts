import styled from 'styled-components'

export const Container = styled.div`
  width: 367px;
  height: 582px;
  border-radius: ${(props) => props.theme.radii.lg};
  background-color: ${(props) => props.theme.colors.System.Red.hex};
  position: relative;
`
export const Tab = styled.div`
  position: absolute;
  height: 30px;
  width: 90px;
  left: 20px;
  top: 30px;
  background-color: ${(props) => props.theme.colors.System.Red.hex};
  border-bottom: 1px solid ${(props) => props.theme.colors.System.Black.hex};
  border-right: 1px solid ${(props) => props.theme.colors.System.Black.hex};
  border-bottom-right-radius: 5px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  ::after {
    content: '';
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
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

export const PokeBox = styled.div`
  background: linear-gradient(
    #00f,
    ${(props) => props.theme.colors.Types.Fire.hex}
  );

  border: 1px solid ${(props) => props.theme.colors.System.Black.hex};
  box-shadow: inset 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  width: calc(100% - ${(props) => props.theme.space[10]});
  height: calc(100% - ${(props) => props.theme.space[35]});

  margin-top: ${(props) => props.theme.space[8]};
  margin-bottom: ${(props) => props.theme.space[27]};
  margin-left: ${(props) => props.theme.space[5]};
  margin-right: ${(props) => props.theme.space[5]};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PokeImage = styled.img`
  width: 85%;
  height: 85%;
  object-fit: contain;
`
