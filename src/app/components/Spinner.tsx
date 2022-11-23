import React from 'react'
//import '../styles/spinner.css';
import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components'

const Spinner = (props) => {

  const SpinnerStyle = createGlobalStyle`
    .spinner_bg {
      background-color: var(--bg);
      color: var(--fg);
      // background-color:hsl(var(--hue), 90%, 95%);
      // color: hsl(var(--hue), 90%, 5%);
      font: 1em/1.5 sans-serif;
      height: 100vh;
      width: 100vw;
      position: absolute;
      z-index: 10000;
      left: 0;
      top: 0;
      display: grid;
      place-items: center;
      transition: background-color var(--trans-dur);
      overflow: hidden;
    }

    .ip {
      width: 16em;
      height: 8em;
    }
    .ip__worm1,
    .ip__worm2 {
      animation: worm1 2s linear infinite;
    }
    .ip__worm2 {
      animation-name: worm2;
    }

    .ip__track {
      stroke: hsl(var(--hue), 90%, 90%);
      transition: stroke var(--trans-dur);
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

      .ip__track {
        stroke: hsl(var(--hue), 90%, 15%);
      }
    }

    /* Animation */
    @keyframes worm1 {
      from {
        stroke-dashoffset: 0;
      }
      50% {
        animation-timing-function: steps(1);
        stroke-dashoffset: -358;
      }
      50.01% {
        animation-timing-function: linear;
        stroke-dashoffset: 358;
      }
      to {
        stroke-dashoffset: 0;
      }
    }
    @keyframes worm2 {
      from {
        stroke-dashoffset: 358;
      }
      50% {
        stroke-dashoffset: 0;
      }
      to {
        stroke-dashoffset: -358;
      }
    }
  `
  const LoadingDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `

  const LoadingTextDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% + 40px));
    z-index: 1000;
    font-size:14px;
  `

  const StrongText = styled.strong`
    font-size: 16px;
    word-break: break-all;
  `
  
  return (
    <>
    <SpinnerStyle></SpinnerStyle>
    <div className='spinner_bg'>
    <LoadingDiv id="loading">
      <svg style={{width:"78px"}} className="ip" viewBox="0 0 256 128" width="256px" height="128px" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5ebd3e" />
            <stop offset="33%" stopColor="#ffb900" />
            <stop offset="67%" stopColor="#f78200" />
            <stop offset="100%" stopColor="#e23838" />
          </linearGradient>
          <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#e23838" />
            <stop offset="33%" stopColor="#973999" />
            <stop offset="67%" stopColor="#009cdf" />
            <stop offset="100%" stopColor="#5ebd3e" />
          </linearGradient>
        </defs>
        <g fill="none" strokeLinecap="round" strokeWidth="16">
          <g className="ip__track" stroke="#ddd">
            <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"/>
            <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"/>
          </g>
          <g strokeDasharray="180 656">
            <path className="ip__worm1" stroke="url(#grad1)" strokeDashoffset="0" d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"/>
            <path className="ip__worm2" stroke="url(#grad2)" strokeDashoffset="358" d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"/>
          </g>
        </g>
      </svg>
    </LoadingDiv>
    <LoadingTextDiv>
		  <p>{props.loadingProgress?<StrongText>{props.loadingProgress}</StrongText>:<></>}{props.hintText?props.hintText:''}</p>
	  </LoadingTextDiv>
  </div>
    </>
  )
}
export default Spinner;