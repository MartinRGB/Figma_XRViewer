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
    /* background-color: rgb(51, 51, 51);
    color: white; */

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
    overflow-x: scroll;
    scroll-snap-type: x;
    z-index: 100;
    bottom: 0px;
    max-height: 140px;
    height: 140px;
    overflow-x: scroll;
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

/* #VRButton{
    left: 20px !important;
} */


.webxr-previewer{
    display: flex;
    flex-direction: row-reverse;
}

.react-tabs__tab-list {
    border-bottom: 1px solid #333;
    margin: 0 0 10px;
    padding: 0;
    padding-bottom: 10px !important;
}
.react-tabs__tab--selected {
    background: none !important;
    border: 1px solid transparent;
    color: #18a0fb !important;
}

.smallbtn {
    position: absolute;
    bottom: 20px;
    border-radius: 15px;
    background: white;
    color: red;
    border: none;
    margin-left: -15px;
    padding: 4px 15px;
    box-shadow: inset 0 0 0 1px white !important;
    outline: none !important;
}

.reset {
    background: none !important;
    color: #666;
    border: none !important;
    font-size: 10px;
    padding: 1px 1px !important;
    margin: 1px 1px !important;
    box-shadow: none !important;
    outline: none;
    border-radius: 25px;
}

#create {
    box-shadow: none;
    border: 1px #18a0fb solid;
    background: #18a0fb;
    color: white;
}

.title_size {
    color: white;
    font-size: 14px !important;
}
.info {
    float: right;
    text-align: left;
    font-style: italic;
    width: 200px;
    font-size: 10px;
    margin-top: 6px;
    margin-left: 5px;
    color: #666 !important;
}

.vis {
    /* position: fixed;
    top: 0;
    right: 25%;
    bottom: 0;
    left: 0; */
    flex: 1;
    height:100vh;
}
.ui {
    width: 250px;
    height:100vh;
    /* left: 75%;
    width: 25%; */
    
    /* position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 25%;
    text-align: left; */
}

.visually-hidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
}
.btn_hold {
    margin-top: 30px;
    margin-left: -10px;
}

.btn_play{
    margin-top: 10px;
}
.btn_pause{
    margin-top: 10px;
}


input[type='text'] {
    font-size: 5px !important;
}
input,
label,
button {
    font-family: inherit;
    font-size: 10px;
    color: rgba(200, 200, 200);
}

.sidebar {
    background: #111111;
    border-left: 1px solid rgba(60, 60, 60);
    padding: 8px 0 0;
    display: flex;
    height: 100vh;
    flex-direction: column;
}

.sidebar__label {
    font-size: 10px;
    font-weight: 600;
    color: rgba(200, 200, 200);
    padding: 0 8px;
    margin-bottom: 6px;
    text-align: left;
}

.sidebar__control {
    padding: 8px;
    display: flex;
    flex-direction: column;
}

.sidebar__control-group {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 6px;
}

.sidebar__actions {
    margin-top: auto;
    display: grid;
    grid-auto-flow: row;
    grid-gap: 8px;
    padding: 16px;
}

.sidebar__devices {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 8px;
    grid-auto-columns: min-content;
    padding: 4px 16px 0 16px;
    margin: 0 -8px;
    overflow-x: auto;
}

.sidebar__device-button {
    width: 64px;
    height: 64px;
    border-radius: 4px;
    background-color: rgba(200, 200, 200, 0.05);
    border: 0;
    margin: 0;
    padding: 4px;
    outline: none;
    position: relative;
    cursor: pointer;
    display: flex;
    transition: box-shadow 0.3s ease, background 0.3s ease;
}

.sidebar__device-button:hover {
    background-color: rgba(200, 200, 200, 0.1);
}

.sidebar__device-button:focus {
    box-shadow: inset 0 0 0 2px rgba(200, 200, 200, 0.2);
}

.sidebar__device-button[aria-pressed='true'] {
    box-shadow: inset 0 0 0 2px rgba(24, 160, 251);
    background-color: rgba(24, 160, 251, 0.2);
}

.sidebar__device-image {
    display: block;
    width: 100%;
    height: 100%;
    flex: 1 1 auto;
}
.top_title {
    margin-bottom: 12px;
}
.input__check {
    margin-top: 5px;
    margin-left: 8px;
}
.radio_space {
    margin: 10px;
}
.radio_holder {
    width: 200px;
    padding-left: 5px;
    padding-top: 10px;
}
.switch_holder {
    float: left;
    margin-left: 10px;
    margin-top: 10px;
}
.radio_element {
    margin-left: 20px;
    margin-right: 20px;
    padding-left: 10px !important;
}
.input {
    display: grid;
    justify-items: flex-start;
    position: relative;
}

.input__label {
    font-size: 11px;
    font-weight: 600;
    color: rgba(var(--rgbText));
    padding: 0 8px;
    margin-bottom: 6px;
}

.input__element {
    border: none;
    outline: none;
    padding: 8px;
    padding-right: 0;
    margin: 0;
    justify-self: stretch;
    min-width: 0;
    border-radius: 2px;
    transition: box-shadow 0.3s ease;
    background-color: rgba(var(--rgbSurface));
    height: 32px;
}

.input__element::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

.input__element:hover {
    box-shadow: inset 0 0 0 1px rgba(var(--rgbText), 0.1);
}

.input__element:focus {
    box-shadow: inset 0 0 0 2px rgba(var(--rgbPrimary));
}

.input__color-swatch {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    position: absolute;
    left: 8px;
    bottom: 8px;
    box-shadow: inset 0 0 0 1px rgba(var(--rgbText), 0.05);
    border: 0;
    margin: 0;
    padding: 0;
    cursor: pointer;
    outline: none;
    transition: box-shadow 0.3s ease;
}

.input__color-swatch:focus {
    box-shadow: inset 0 0 0 1px rgba(var(--rgbText), 0.05), 0 0 0 2px rgba(var(--rgbText), 0.2);
}

.input__icon {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 8px;
    bottom: 8px;
    color: rgba(255, 255, 255, 0.6);
    pointer-events: none;
}

.input__dragger {
    width: 32px;
    height: 32px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ew-resize;
}

.input__dragger .input__icon {
    position: static;
}

.input__icon + .input__element,
.input__dragger + .input__element,
.input__color-swatch + .input__element,
.dropdown + .input__element {
    padding-left: 32px;
}

.switch-multi-button {
    display: flex;
    align-items: center;
    gap: 3px;
    border: 1px #333 solid;
    position: relative;
    margin: 0px;
    padding: 3px;
    box-sizing: border-box;
    background: #000 !important;
    border-radius: 3px;
    width: intrinsic;
    width: -moz-max-content;
    width: -webkit-max-content;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    height: intrinsic;
    height: -moz-max-content;
    height: -webkit-max-content;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    font-size: 10px;
    font-weight: 800;
}
.switch-multi-button .sweep-button-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 4px 9px !important;
    color: #999 !important;
    border-radius: 3px;
    cursor: pointer;
    box-sizing: border-box;
}
.switch-multi-button .sweep-button-item-active {
    position: absolute !important;
    background: #18a0fb !important;
    color: white !important;
    cursor: default;
    box-sizing: border-box;
}

.arrow {
    border: solid white;
    border-width: 0 1px 1px 0;
    display: inline-flex;
    padding: 1px;
    position: absolute;
    margin-top: 4px;
    margin-left: 8px;
}

.right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
}

.left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
}

.up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
}

.down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}

.dropdown-wrapper {
    position: relative;
    display: flex;
    margin-left: -6px;
}

.dropdown-toggle-label {
    display: flex;
    position: relative;
    width: 100%;
    border-radius: 25px;
    border: 1px #333 solid;
    padding: 8px 30px 8px 20px;
    color: #fff;
    background: black;
    transition: opacity 0.1s ease;
    cursor: pointer;
}

.dropdown-toggle-label:after {
    content: '';
    height: 4px;
    width: 4px;
    background: linear-gradient(45deg, #999 50%, transparent 0);
    display: flex;
    position: absolute;
    right: 15px;
    top: 42%;
    transform: rotate(-45deg);
}

.dropdown-wrapper input {
    display: none;
}

.dropdown-wrapper > input:checked + label:after {
    top: 50%;
    transform: rotate(135deg);
}

.dropdown-wrapper > input:checked + label + .dropdown {
    display: flex;
    flex-direction: column;
}

.dropdown {
    min-width: 100px;
    z-index: 100;
    display: none;
    background: black;
    opacity: 1;
    border-radius: 10px;
    padding: 8px 0;
    position: absolute;
    top: calc(100% + 4px);
    left: 0px;
}

.dropdown label {
    display: block;
    padding: 5px 20px;
    color: #fff;
    font-family: sans-serif;
    z-index: 100;
    opacity: 1;
    cursor: pointer;
}

.dropdown label:hover {
    background-color: #222;
}

.dropdown input:checked + label {
    font-weight: 700;
    opacity: 1;
    background-color: rgba(180, 180, 180, 0.1);
}

.float_right {
    position: absolute;
    right: -70px;
    bottom: 113px;
    width: 175px;
}

.float_plane_rotate {
    position: absolute;
    right: 0px;
    z-index: 400;
    top: 54px;
    width: 105px;
}
.float_plane_height{
    position: absolute;
    right: 0px;
    z-index: 400;
    top: 120px;
    width: 105px;
}


.float_plane_height .input__element {
    width: 60px;
}
.float_plane_rotate .input__element {
    width: 60px;
}
.float_UI_scale .input__element {
    width: 60px;
}
.float_UI_shadow{
    position: absolute;
    right: 0px;
    z-index: 400;
    top: 260px;
    width: 105px;
}
.float_UI_scale{
    position: absolute;
    right: 0px;
    z-index: 400;
    top: 241px;
    width: 105px;
}
.sidebar_float {
    width: 10px;
}
.float_color_char {
    position: absolute;
    right: -70px;
    top: 130px;
    width: 175px;
}
.float_color_grid {
    position: absolute;
    right: -70px;
    top: 204px;
    width: 175px;
}
.float_color_orbit {
    position: absolute;
    right: -70px;
    top: 264px;
    width: 175px;
}
.color_holder {
    margin-top: 14px;
    margin-left: 8px;
}
.color_prompt {
    position: absolute;
    margin-top: 9px;
    color: #666;
}
.color_comp {
    color: #666;
    margin-top: 19px;
    margin-left: 14px;
}
.color_comp_sm {
    color: #666;
    margin-top: 11px;
    margin-left: 46px;
}

.float_bottom {
    position: absolute;
    bottom: 0px;
}

.picker {
    position: relative;
}

.swatch {
    width: 18px;
    height: 18px;
    border-radius: 4px;
    margin-top: 16px;
    border: 1px solid #333;
    cursor: pointer;
}
.sm_color .swatch {
    margin-top: 8px !important;
    margin-left: 2px;
}

.popover {
    position: absolute;
    z-index: 500;
    top: calc(100% + 5px);
    right: 15px;
    border-radius: 9px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.react-colorful {
    z-index: 1000;
    height: 80px !important;
    width: 160px !important;
}
.popover input {
    display: block;
    box-sizing: border-box;
    width: 160px;
    margin: -10px 0px 0;
    padding: 5px;
    padding-top: 15px;
    border: 0px solid #333;
    border-radius: 9px;

    background: #000;
    color: white;
    outline: none;
    font: inherit;
    text-transform: uppercase;
    text-align: center;
    z-index: 3000;
}

.react-colorful__hue-pointer {
    width: 16px !important;
    height: 16px !important;
    border-radius: 0;
}
.react-colorful__saturation-pointer {
    width: 16px !important;
    height: 16px !important;
    border-radius: 0;
}

.react-colorful__saturation {
    border-radius: 4px 4px 0 0;
}
.react-colorful__hue {
    height: 18px !important;
    border-radius: 0 !important;
}

