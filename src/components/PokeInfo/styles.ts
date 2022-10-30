import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[6]}
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
  gap: ${(props) => props.theme.space[4]};
  img {
    width: 32px;
    height: 32px;
    filter: drop-shadow(2px 0px 0px rgba(0, 0, 0, 0.5));
  }
`
export const Animation = styled.div``
