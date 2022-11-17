import React, {useEffect} from 'react'


const QueryApp = () => {
 

  useEffect(()=>{
    window.onmessage = (event) => {
      const {type,value} = event.data.pluginMessage;
  
      if(type == 'finished_msg'){
  
        const fileKey = value[0]
        const fileName = value[1]
        const nodeId = value[2];

        // method II
        //const isLocal = false;
        //const localImporterPageUrl = `https://127.0.0.1:8886`;
        //const webImporterPageUrl = `https://www.martinrgb.com/FigmaImporter/v3`;
        
        //window.open(`${isLocal?localImporterPageUrl:webImporterPageUrl}/importer.html?query_key=${fileKey}&query_node=${nodeId}`, '_blank')
        //parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  
        const isLocal = false;
        const localImporterPageUrl = `https://127.0.0.1:8887`;
        const webImporterPageUrl = `https://www.martinrgb.com/FigmaImporter/v4`;
        
        window.open(`${isLocal?localImporterPageUrl:webImporterPageUrl}/index.html?query_token=auth_everytime&query_key=${fileKey}&query_node=${nodeId}`, '_blank')
        parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
      }
      
    };
    parent.postMessage({ pluginMessage: { type: 'copy_open' } }, '*')
  },[]);  

  const onCancel = () =>{
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  }

  const onCopyOpen = ()=>{
    parent.postMessage({ pluginMessage: { type: 'copy_open' } }, '*')
  }

  return (
    <>
    <div >
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onCopyOpen}>Copy & Open</button>
    </div>
    </>
  )
}
export default QueryApp;