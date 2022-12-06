import styled from 'styled-components';

export const LoadingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    align-items: center;
    background: white;
    opacity: 0.9;
`


export const Loading = styled.p`
  margin: 0 auto;
  color: black;
  font-size: 36px;
`

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: inherit;
  align-items: center;
`

export const FigmaButton = styled.button`
  margin:6px;
  padding:10px 20px 10px 20px;
`

export const FlexContainer = styled.div`
margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  width: 100px;
  height: auto;
  object-fit: contain;
`