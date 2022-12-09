import React,{useState,useEffect} from 'react'
import styled,{ ThemeProvider,keyframes }  from 'styled-components'

const themes = {
  light: {
    colors: {
      bg: "#e7edfe",
      fg: "#010818",
      stroke: "##cfdcfc",
    }
  },
  dark: {
    colors: {
      bg: "#010818",
      fg: "#e7edfe",
      stroke: "#041749",
    }
  }
};

const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

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

const SpinnerContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.fg};
  font: 1em/1.5 sans-serif;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 10000;
  left: 0;
  top: 0;
  display: grid;
  place-items: center;
  transition: background-color 0.3s;
  overflow: hidden;
`

const IpSVG = styled.svg`
  // width: 16em;
  height: 8em;
  width:78px;
`

const IpTrackG = styled.g`
  stroke: ${({ theme }) => theme.colors.stroke};
  transition: stroke 0.3s;
`

const Worm1Animation = keyframes`
  from { stroke-dashoffset: 0; }
  50% { animation-timing-function: steps(1);stroke-dashoffset: -358; }
  50.01% { animation-timing-function: linear;stroke-dashoffset: 358; }
  to { troke-dashoffset: 0; }
`

const Worm2Animation = keyframes`
  from { stroke-dashoffset: 358; }
  50% { stroke-dashoffset: 0; }
  to { stroke-dashoffset: -358; }
`

const IpWorm1Path = styled.path`
  animation: ${Worm1Animation} 2s linear infinite;
`

const IpWorm2Path = styled.path`
  animation: ${Worm2Animation} 2s linear infinite;
`

const Spinner = (props) => {
  const [theme, setTheme] = useState('light');
  console.log('isDarkMode' +  darkModeQuery.matches)
  useEffect(() => {
  
    setTheme(darkModeQuery.matches?'dark':'light');
    
  },[darkModeQuery.matches]);

  return (
    <>
    <ThemeProvider theme={themes[theme]}>
      <SpinnerContainer>
        <LoadingDiv id="loading">
          <IpSVG viewBox="0 0 256 128" width="256px" height="128px" xmlns="http://www.w3.org/2000/svg">
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
              <IpTrackG stroke="#ddd">
                <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"/>
                <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"/>
              </IpTrackG>
              <g strokeDasharray="180 656">
                <IpWorm1Path stroke="url(#grad1)" strokeDashoffset="0" d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"/>
                <IpWorm2Path stroke="url(#grad2)" strokeDashoffset="358" d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"/>
              </g>
            </g>
          </IpSVG>
        </LoadingDiv>
        <LoadingTextDiv>
          <p>{props.loadingProgress?<StrongText>{props.loadingProgress}</StrongText>:<></>}{props.hintText?props.hintText:''}</p>
        </LoadingTextDiv>
      </SpinnerContainer>
    </ThemeProvider>
    </>
  )
}
export default Spinner;