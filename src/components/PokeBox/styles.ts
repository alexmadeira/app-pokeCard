import styled from 'styled-components'

export const Container = styled.div`
  background: linear-gradient(
    #00f,
    ${(props) => props.theme.colors.Types.Fire.hex}
  );

  border: 1px solid ${(props) => props.theme.colors.System.Black.hex};
  box-shadow: inset 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  width: calc(100% - ${(props) => props.theme.space[10]});
  height: calc(100% - ${(props) => props.theme.space[35]});

  margin-top: ${(props) => props.theme.space[8]};

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
  filter: drop-shadow(3px 0px 0px rgba(0, 0, 0, 0.5));
`
