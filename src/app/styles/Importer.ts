import { createGlobalStyle } from 'styled-components';
const ImporterStyle = createGlobalStyle`
    * {
        border: 0;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    :root {
        --hue: 223;
        --bg: hsl(var(--hue), 90%, 95%);
        --fg: hsl(var(--hue), 90%, 5%);
        --trans-dur: 0.3s;
        font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1280 - 320));
    }

    /* Dark theme */
    @media (prefers-color-scheme: dark) {
    :root {
        --bg: hsl(var(--hue), 90%, 5%);
        --fg: hsl(var(--hue), 90%, 95%);
    }
    }
    body {
        background-color: var(--bg);
        color: var(--fg);
        font: 1em/1.5 sans-serif;
        height: 100vh;
        display: grid;
        place-items: center;
        transition: background-color var(--trans-dur);
        overflow: hidden;
    }
    p {
        font-size: 14px;
        opacity: 60%;
    }
    strong{
        font-size: 16px;
        /* margin-right:12px; */
        word-break: break-all;
    }

    code{
        background: #7f7f7f4f;
        padding: 2px 6px 2px 6px;
        border-radius: 4px;
    }

    img {
        scroll-snap-align: start;
        flex: 0 0 150px;
        width: 150px;
        height: 150px;
        border-radius: 5px;
        object-fit: contain;
        background: #ffffff40;
        padding: 12px;
    }

    textarea {
        width: 100%;
        height: 24px;
        line-height: 24px;
        padding-left: 8px;
        padding-right: 8px;
        outline: none;
        font-size: 12px;
        color:var(--fg);
        background: #7f7f7f4f;
    }

    .data_snippet{
        /* position: absolute;
        width: calc(100% -96px);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); */
        width: fit-content;
        margin: 0 auto;
    }

    .code_button{
        cursor: pointer;
    }

    .vertical-flex-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100vw;
        height: 100vh;
    }

    .horizontal-flex-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100vw;
        /* height: 100vh; */
        flex:1;
    }


    .flex-right{
        flex:1;
        padding:24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .flex-left{
        flex:1;
        padding:24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .hidden_copy_helper{
        position: absolute;
        left: -99999px;
    }

    .green-button {
        font-size: 14px;
        line-height: 16px;
        padding: 4px 8px 4px 8px;
        border-radius: 6px;
        background: #10bd4e;
        color: white;
        border: 1px solid #ffffff87;
        cursor: pointer;
    }

    .json-textarea{
        height: 100%;
        width: 100%;
        background: transparent;
        padding: 24px;
    }

    .images-list {
        width: 100%;
        gap: 1rem;
        overflow-x: auto;
        scroll-snap-type: x;
        background: #5e5e5e;
        /* position: absolute; */
        z-index: 100;
        padding: 0px;
        bottom: 0px;
        padding: 20px;
        max-height: 190px;
        height:190px;
        overflow-x: auto;
        display: flex;
        flex:1;
    }
`;
 
export default ImporterStyle;