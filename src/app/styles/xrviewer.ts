import styled,{ createGlobalStyle } from 'styled-components';

export const XRViewerGlobalrtyle = createGlobalStyle`
    body {
        font-family: sans-serif;
        font-size: 10px;
        text-align: center;
        /* margin: 20px; */
        margin:0px !important;
        color: #ccc;
        background-color: #121212;
        overflow: hidden;
        height: 100vh;
    }
    .xr-button{
        border-radius: 8px;
        opacity: 1;
        user-select: auto;
        padding: 8px 12px 8px 12px;
        font-family: sans-serif;
        border-radius: 100px;
        line-height: 10px;
        font-size: 10px;

        box-shadow: 0 3px 4px -1px rgb(0 0 0 / 48%);
        color: rgba(255,255,255,0.9);
        background: rgba(29,53,59,0.7);
        backdrop-filter: blur(14px);
        border-bottom: 1px solid rgba(255,255,255,0.08);
        margin:15px 5px;
        z-index: 11;
        cursor: pointer;
    }

    .xr-button:hover{
        background: linear-gradient(99deg, rgb(7, 136, 255) 0%, rgb(153, 0, 255) 100%);
        border-bottom: 1px solid rgba(255,255,255,0.24);
    }
`;

export const WebXRContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
`
export const ImageListContainer = styled.div`
    width: calc(100% - 40px);
    padding: 20px;
    gap: 1rem;
    overflow-x: auto;
    z-index: 100;
    bottom: 0px;
    position: absolute;
    display: flex;
    flex-flow: row;
`

export const ImageInList = styled.img`
    padding:20px;
    scroll-snap-align: start;
    flex: 0 0 60px;
    width: 60px;
    height: 60px;
    border-radius: 5px;
    object-fit: contain;
    background: #ffffff40;
    padding: 12px;
`

export const XRDivContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 0px;
    transform: translate(-50%, 0);
    margin: 0 auto;
    z-index: 10;
    display:flex;
`

export const TopFixedBtn = styled.div`
    border-radius: 8px;
    opacity: 1;
    user-select: auto;
    padding: 8px 12px 8px 12px;
    font-family: 'Inter', sans-serif;
    border-radius: 100px;
    line-height: 10px;
    font-size: 10px;

    box-shadow: 0 3px 4px -1px rgb(0 0 0 / 48%);
    color: rgba(255,255,255,0.9);
    background: rgba(29,53,59,0.7);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(255,255,255,0.08);
    margin:15px 5px;
    z-index: 11;
    cursor: pointer;

    &:hover {
        background: linear-gradient(99deg, rgb(7, 136, 255) 0%, rgb(153, 0, 255) 100%);
        border-bottom: 1px solid rgba(255,255,255,0.24);
    }
`

export const CanvasContainer = styled.div`
    flex: 1;
    height:100vh;
    width:100vw;
`