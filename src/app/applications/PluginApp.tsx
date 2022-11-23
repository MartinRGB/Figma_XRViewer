import React, {useEffect} from 'react'
import { rootURL } from '@Config';


export interface IPluginApp {
  platform:string;
}

const PluginApp: React.FC<IPluginApp> = ({platform}:IPluginApp) => {
 
  useEffect(()=>{
    
    parent.postMessage({ pluginMessage: { type: 'get_data' } }, '*')

    window.onmessage = (event) => {
      const {type,value} = event.data.pluginMessage;
  
      if(type == 'finished_msg'){
  
        const fileKey = value[0]
        const fileName = value[1]
        const nodeId = value[2];
        //const platform = value[3];
        
        window.open(`${rootURL}${platform === 'webxr'?'index':'importer'}.html?query_token=auth_everytime&query_key=${fileKey}&query_node=${nodeId}&query_platform=${platform}`, '_blank')
        parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
      }
      
    };
  },[]);  

  const onCancel = () =>{
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  }

  return (
    <>
    <h1>{platform}</h1>
    <div >
      <button onClick={onCancel}>Cancel</button>
    </div>
    </>
  )
}
export default PluginApp;