import React,{ useCallback,useEffect,useRef,useState } from 'react'
import arrayBufferToString from '@Utils/gltf/arrayBufferToString'
import useStore from '@Utils/gltf/store'
import Result from '@Components/gltf/Result'
import styled from 'styled-components';
import { IGLTFViewerApp } from '@CustomTypes';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;  
`

const AlignContainer = styled.div`
  position: absolute;
  background: white;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  flex: 1 1 0%;
  display: flex;
  flex-direction: row;
  align-items: center;
  outline: none;
`

const AlignPara = styled.div`
  margin:0 auto;
  font-size: 24px;
  font-weight: 700;
`

const CommentPara = styled.div`
  margin: 0px auto;
  font-size: 16px;
  margin-top: 16px;
  font-weight: 500;
`

const GLTFViewerApp: React.FC<IGLTFViewerApp> = ({envBuild,width,height}:IGLTFViewerApp) => {

  const { buffer } = useStore((state) => ({
    buffer: state.buffer,
  }))
  const [fileName,setFileName] = useState();

  const [dragActive, setDragActive] = React.useState(false);
  const overlayRef = useRef();
  const resultRef = useRef();

  const handleDragEnter = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);

    if(overlayRef.current){
      overlayRef.current.style.zIndex= '10000';
    }
    if(resultRef.current){
      resultRef.current.style.pointerEvents = 'none';
    }
  };

  const handleDragOver = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };



  const handleDragLeave = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if(overlayRef.current){
      overlayRef.current.style.zIndex= '0';
    }
    if(resultRef.current){
      resultRef.current.style.pointerEvents = 'initial';
    }
  };

  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if(e.dataTransfer.files.length === 1){
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        // at least one file has been dropped so do something
        // handleFiles(e.dataTransfer.files);

        //console.log( e.dataTransfer.files[0])
        const file = e.dataTransfer.files[0];
        const reader = new FileReader()
        reader.onabort = () => console.error('file reading was aborted')
        reader.onerror = () => console.error('file reading has failed')
        reader.onload = async () => {
          console.log('loaded');
          const data = reader.result
          useStore.setState({ buffer: data, fileName: file.name })
          // arrayBufferToString(data, (a) => useStore.setState({ textOriginalFile: a }))
          setFileName(file.name);
        }
        reader.readAsArrayBuffer(file)
      }
    }else{
    }
  };

  useEffect(()=>{
    parent.postMessage({ pluginMessage: { type: 'get_data' } }, '*')
    window.onmessage = (event) => {
      if(event.data.pluginMessage != undefined){
        const {type,value} = event.data.pluginMessage;
        if(type === 'finished_msg'){
          console.log(value)
          const fileKey = value[0]
          const fileName = value[1]
          const nodeId = value[2];
          useStore.setState({ figmaMsg: value})
          console.log('fileKey: ' + fileKey);
          console.log('fileName: ' + fileName);
          console.log('nodeId: ' + nodeId);
        }
      }
      
    };
  },[]);  

  return (
    <>
    <Container 
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver} 
      onDragLeave={handleDragLeave} 
      onDrop={handleDrop}>

      <AlignContainer
        style={{
          opacity:dragActive?'1':(buffer?'0':'1'),
        }}
        ref={overlayRef}
        >
        {dragActive ? 
        
        (
          <AlignPara>Drop the files here ...</AlignPara>
        ) 
          : 
        (
          <div style={{
            width: '100%',
            textAlign: 'center'
          }}>
          <AlignPara>
            Drag {"'"}n{"'"} drop your <span style={{color:'blue'}}>GLTF</span> file <span className="text-blue-600">here </span> 
          </AlignPara>
          <CommentPara>
            only support 1 file with <span style={{color:'green'}}>.glb</span> or <span style={{color:'green'}}>.gltf</span> extension
          </CommentPara>
          </div>
        )}
      </AlignContainer>

        {buffer?<Result ref={resultRef} envBuild={envBuild} width={width} height={height}>{fileName}</Result>:<></>}
    </Container>
    
    
    </>
  )
}
export default GLTFViewerApp;