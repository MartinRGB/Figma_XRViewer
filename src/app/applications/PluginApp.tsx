import React, {useEffect} from 'react'
import { rootURL } from '@Config';
import { IPluginApp } from '@CustomTypes';

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
    <div style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)'}}>
      <h1 style={{marginTop:'0px'}}>{platform}</h1>
      <div style={{textAlign:'center'}}>
        <button style={{
          fontSize:'14px',
          lineHeight:'16px',
          padding: '4px 8px 4px 8px',
          borderRadius: '6px',
          background: '#10bd4e',
          color: 'white',
          border: '1px solid #ffffff87',
          cursor: 'pointer',
        }   
        }onClick={onCancel}>Cancel</button>
      </div>
    </div>
    </>
  )
}
export default PluginApp;