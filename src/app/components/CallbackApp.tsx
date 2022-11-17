import React, { useRef, useState,useEffect,forwardRef,useCallback,useImperativeHandle,createContext} from 'react'
import '../styles/ui.css';


const CallbackApp = () => {
 

  useEffect(()=>{
	  const parsedUrl = new URL(window.location.href);
    const code = parsedUrl.searchParams.get('code');
    const state = parsedUrl.searchParams.get('state');
    const figmaAuthorizationCodeData = JSON.stringify({code, state});
    
    window.localStorage.setItem('figma-authorization-code-data', figmaAuthorizationCodeData);
    window.close();
  },[]);  


  return (
    <>
    <div >
      Callback
    </div>
    </>
  )
}
export default CallbackApp;