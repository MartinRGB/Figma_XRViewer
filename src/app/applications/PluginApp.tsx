import React, {useEffect,useRef,useState} from 'react'
import { IPluginApp } from '@CustomTypes';
import {postData} from '@Utils/uploadToServer'
import {LoadingContainer,LoadingComponent,LoadingProgressBar,Loading} from '@Styles/Plugin'
import {webRootURL,nginxHostWebUrl,nginxUploadFolder} from '@Config'
import DragCorner from '@Components/DragCorner';

const PluginApp: React.FC<IPluginApp> = ({platform}:IPluginApp) => {
  const [isLoading,setIsLoading] = useState(true);
  const [loadingProgress,setLoadingProgress] = useState(0);
  const [loadingText,setLoadingText] = useState('Uploading...');
  useEffect(()=>{
    parent.postMessage({ pluginMessage: { type: 'get_data' } }, '*')

    window.onmessage = (event) => {
      const {type,value} = event.data.pluginMessage;
  
      if(type == 'finished_msg'){

        if(platform === 'local_webxr' || platform === 'local_unity'){
          const fileKey = value[0]
          const fileName = value[1]
          const nodeId = value[2];
          const data = value[3];
          const nodeJSON = value[4];
          let fetchNum = 0;
          let loadingNum = 0;
          const totalLoadingNum = data.length + 1;

          // ############### upload json data ###############
          console.log(nodeJSON);
          console.log(nodeId)
          const jsonbb = new Blob([JSON.stringify(nodeJSON)]);
          const jsonBlob = URL.createObjectURL(jsonbb);

          const finishCBFunc = () =>{setTimeout(()=>{
            setIsLoading(false)
            //overwrite files to nginxHostWebUrl's folder
            //isLocal?webRootURL:nginxHostWebUrl
            if(platform === 'local_webxr'){
              window.open(`${nginxHostWebUrl}index.html?query_token=local_server&query_key=${fileKey}&query_node=${nodeId}&query_platform=${platform}`, '_blank')
            }
            else if(platform === 'local_unity'){
              window.open(`${nginxHostWebUrl}importer.html?query_token=local_server&query_key=${fileKey}&query_node=${nodeId}&query_platform=${platform}`, '_blank')
            }
            onCancel();
            //parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
          },1000);setLoadingText('Finished!');}
          
          // ############### upload json data ###############
          postData(jsonBlob, `${nginxUploadFolder}/${fileKey}/${nodeId}/`, `data.json`,()=>{
              fetchNum++;setLoadingProgress(((loadingNum+fetchNum)/2/totalLoadingNum));
            },
            ()=>{},
            ()=>{
              loadingNum++;setLoadingProgress(((loadingNum+fetchNum)/2/totalLoadingNum));
              if(loadingNum === totalLoadingNum){finishCBFunc()}
            },
          )
          // ############### upload imag array ###############
          for(var i=0;i<data.length;i++){ 
            let index = i;
            const bb = new Blob([data[i].imageData]);
            const blob = URL.createObjectURL(bb);
            // # plain img data
            if(!data[index].name.includes('.gltf') && !data[index].name.includes('https://')){
              postData(blob, `${nginxUploadFolder}/${fileKey}/${nodeId}/`, `${data[index].name}.png`,()=>{
                  fetchNum++;setLoadingProgress(((loadingNum+fetchNum)/2/totalLoadingNum));
                },
                ()=>{},
                ()=>{
                  loadingNum++;setLoadingProgress(((loadingNum+fetchNum)/2/totalLoadingNum));
                  if(loadingNum === totalLoadingNum){finishCBFunc()}
                },
              )
            }
            else{
              // # model img data
              const name = data[index].name.split('/')[data[index].name.split('/').length - 1];
              postData(blob,`${nginxUploadFolder}/${fileKey}/${nodeId}/`, `${name}.png`,()=>{
                  fetchNum++;setLoadingProgress(((loadingNum+fetchNum)/2/totalLoadingNum));
                },
                ()=>{},
                ()=>{
                  loadingNum++;setLoadingProgress(((loadingNum+fetchNum)/2/totalLoadingNum));
                  if(loadingNum === totalLoadingNum){finishCBFunc()}
                },
              )
            }
          }
        }
        // figma Unity & WebXR
        else{
          const fileKey = value[0]
          const fileName = value[1]
          const nodeId = value[2];
          //const platform = value[3];
          setIsLoading(false);
          setLoadingText('Finished!')
          setLoadingProgress(1);

          if(platform === 'webxr'){
            window.open(`${webRootURL}index.html?query_token=auth_everytime&query_key=${fileKey}&query_node=${nodeId}&query_platform=${platform}`, '_blank')
          }
          else if(platform === 'unity'){
            window.open(`${webRootURL}importer.html?query_token=auth_everytime&query_key=${fileKey}&query_node=${nodeId}&query_platform=${platform}`, '_blank')
          }
          
          onCancel();
          //parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
        }

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
    <LoadingComponent style={{zIndex:`${isLoading?'1':'-1'}`,opacity:`${isLoading?'1':'0'}`}}>
      <LoadingContainer>
        <Loading>{loadingText}</Loading>
        <LoadingProgressBar style={{width:`${loadingProgress*100}%`}}></LoadingProgressBar>
      </LoadingContainer>
    </LoadingComponent>
    <DragCorner minWidth={120} minHeight={120}></DragCorner>
    </>
  )
}
export default PluginApp;