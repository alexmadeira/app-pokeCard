import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: calc(100% - ${(props) => props.theme.space[10]});
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  margin: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[5]}
    ${(props) => props.theme.space[2]} ${(props) => props.theme.space[8]};
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImagesBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`
export const TypesBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const Animation = styled.div``
