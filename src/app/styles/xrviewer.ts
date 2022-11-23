import { createGlobalStyle } from 'styled-components';
const XRViewerStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');
    body {
        font-family: 'Inter', sans-serif;
        font-size: 10px;
        text-align: center;
        /* margin: 20px; */
        margin:0px !important;
        color: #ccc;
        background-color: #121212;
        overflow: hidden;
        height: 100vh;
    }
    button {
        border-radius: 5px;
        background: black;
        color: black;
        border: 1px #333 solid;
        padding: 8px 15px;
        margin: 15px 5px;
        box-shadow: inset 0 0 0 1px black;
        outline: none;
        border-radius: 25px;
    }

    .xr-container{
        position: absolute;
        left: 50%;
        top: 0px;
        transform: translate(-50%, 0);
        margin: 0 auto;
        
        z-index: 10;
    }

    .xr-button{
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
        
        z-index: 11;
        cursor: pointer;
    }

    .xr-button:hover{
        background: linear-gradient(99deg, rgb(7, 136, 255) 0%, rgb(153, 0, 255) 100%);
        border-bottom: 1px solid rgba(255,255,255,0.24);
    }

    .img-layout{
        width: 100%;
        gap: 1rem;
        overflow-x: auto;
        scroll-snap-type: x;
        z-index: 100;
        bottom: 0px;
        max-height: 140px;
        height: 140px;
        display: flex;
        flex: 1;
        position: absolute;
    }


    .img-imported{
        scroll-snap-align: start;
        flex: 0 0 100px;
        width: 100px;
        height: 100px;
        border-radius: 5px;
        object-fit: contain;
        background: #ffffff40;
        padding: 12px;
    }

    .webxr-previewer{
        display: flex;
        flex-direction: row-reverse;
    }


    .vis {
        flex: 1;
        height:100vh;
    }

    button {
        font-family: inherit;
        font-size: 10px;
        color: rgba(200, 200, 200);
    }
`;
 
export default XRViewerStyle;