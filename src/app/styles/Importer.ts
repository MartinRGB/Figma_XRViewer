import styled, { createGlobalStyle } from 'styled-components';

export const themes = {
    light: {
        colors: {
            bg: "#e7edfe",
            fg: "#010818",
        }
    },
    dark: {
        colors: {
            bg: "#010818",
            fg: "#e7edfe",
        }
    }
};


export const ImporterGlobalStyle = createGlobalStyle`
    * {
        border: 0;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: sans-serif;
        background-color: ${({ theme }) => theme.colors.bg};
        color: ${({ theme }) => theme.colors.fg};
        font: 1em/1.5 sans-serif;
        height: 100vh;
        display: grid;
        place-items: center;
        transition: background-color 0.3s;
        overflow: hidden;
    }
`


export const VerticalFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`

export const HorizontalFlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    flex:1;
`

export const FlexLeftContainer = styled.div`
    flex:1;
    padding:24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const FlexRightContainer = styled.div`
    flex:1;
    padding:24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const DataInfo = styled.div`
    width: fit-content;
    margin: 0 auto;
`
export const MarginTopSix = styled.div`
    margin-top: 6px;
    margin-bottom: 6px;
    * {
      margin-top: 6px;
      margin-bottom: 6px;
    }
`

export const Para = styled.p`
    font-size: 14px;
    opacity: 60%;
`

export const StrongText = styled.strong`
    font-size: 16px;
    word-break: break-all;
`

export const CodeBtn = styled.code`
    //cursor: pointer;
    background: #7f7f7f4f;
    padding: 2px 6px 2px 6px;
    border-radius: 4px;
    font-family: sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
`

export const GreenBtn = styled.button`
    font-size: 14px;
    line-height: 16px;
    padding: 4px 8px 4px 8px;
    border-radius: 6px;
    background: #10bd4e;
    color: white;
    border: 1px solid #ffffff87;
    cursor: pointer;
    margin-right:6px;
    outline: none;
`

export const NormalTextArea = styled.textarea`
    width: 100%;
    height: 24px;
    line-height: 24px;
    padding-left: 8px;
    padding-right: 8px;
    outline: none;
    font-size: 12px;
    color:${({ theme }) => theme.colors.fg};
    background: #7f7f7f4f;
    font-family: sans-serif;
    font-weight: 400;
`
export const JSONTextArea = styled.textarea`
    height: 100%;
    width: 100%;
    line-height: 24px;
    padding: 24px;
    outline: none;
    font-size: 12px;
    color:${({ theme }) => theme.colors.fg};
    background: transparent;
    font-family: sans-serif;
    font-weight: 400;
`

export const ImageListContainer = styled.div`
    width: 100%;
    gap: 1rem;
    overflow-x: auto;
    scroll-snap-type: x;
    background: #5e5e5e;
    z-index: 100;
    padding: 0px;
    bottom: 0px;
    padding: 20px;
    max-height: 190px;
    height:190px;
    overflow-x: auto;
    display: flex;
    flex:1;
`
export const ImageInList = styled.img`
    scroll-snap-align: start;
    flex: 0 0 150px;
    width: 150px;
    height: 150px;
    border-radius: 5px;
    object-fit: contain;
    background: #ffffff40;
    padding: 12px;
`