import styled from 'styled-components';

export const LoadingComponent = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    align-items: center;
    background: white;
    opacity: 0.9;
`

export const LoadingContainer = styled.div`
  padding: 60px;
  margin: 0 auto;
  width: 100%;
`

export const Loading = styled.p`
  margin: 0 auto;
  margin-bottom: 8px;
  color: black;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
`
export const LoadingProgressBar = styled.div`
    height: 4px;
    background: #1da1f2;
    box-shadow: 2px 14px 15px -7px rgb(30 166 250 / 36%);
    border-radius: 50px;
    width: 0%;
    transition: all 0.2s;
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