import { createGlobalStyle } from 'styled-components';
const ImporterStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');
    * {
        border: 0;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Inter', sans-serif;
        background-color: var(--bg);
        color: var(--fg);
        font: 1em/1.5 sans-serif;
        height: 100vh;
        display: grid;
        place-items: center;
        transition: background-color var(--trans-dur);
        overflow: hidden;
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

`;
 
export default ImporterStyle;