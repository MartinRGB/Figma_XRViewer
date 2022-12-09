import styled from 'styled-components';

export const FileNameHeading = styled.h1`
  position: absolute;
  top: 15px;
  left: 16px;
  font-size: 12px;
  background: #292d39;
  color:white;
  padding: 10px 20px 10px 20px;
  margin: 0;
  border-radius: 8px;
`

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
  translate(0px, -18px);
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
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;  
`

export const AlignContainer = styled.div`
  position: absolute;
  background: white;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  flex: 1 1 0%;
  display: flex;
  flex-direction: row;
  align-items: center;
  outline: none;
`

export const AlignPara = styled.div`
  margin: 0 auto;
  font-size: 20px;
  font-weight: 700;
`

export const CommentPara = styled.div`
  margin: 0px auto;
  font-size: 14px;
  margin-top: 14px;
  font-weight: 500;
`


//#################################################
// export const Container = styled.div`
//   display: flex;
//   width: 100vw;
//   height: 100vh;
//   flex-direction: inherit;
//   align-items: center;
// `

// export const FigmaButton = styled.button`
//   margin:6px;
//   padding:10px 20px 10px 20px;
// `

// export const FlexContainer = styled.div`
// margin: 0px auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `

// export const Image = styled.img`
//   width: 100px;
//   height: auto;
//   object-fit: contain;
// `