import React, {useEffect} from 'react'

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
    <h1 >
      Callback
    </h1>
    </>
  )
}
export default CallbackApp;