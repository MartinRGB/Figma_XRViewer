import React, { useEffect, useMemo, useCallback, Suspense, useRef, useState } from 'react'
import saveAs from 'file-saver'
import { useControls, button } from 'leva'
import toast from 'react-hot-toast'
import { isGlb } from '@Utils/gltf/isExtension'
import useSandbox from '@Utils/gltf/useSandbox'
import Viewer from '@Components/gltf/Viewer'
import useStore from '@Utils/gltf/store'
import {onCreateImage,trimCanvas} from '@Utils/saveImage.js'; 
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import {postData} from '@Utils/server.js';
import { PerspectiveCamera } from '@react-three/drei'
import {nginxAssetLink,nginxUploadFolder} from '@Config'
import {LoadingContainer,LoadingComponent,LoadingProgressBar,Loading} from '@Styles/Plugin'


const FileNameHeading = styled.h1`
  position: absolute;
  top: 15px;
  left: 16px;
  font-size: 12px;
  background: #292d39;
  color:white;
  padding: 10px 20px 10px 20px;
  margin: 0;
  border-radius: 8px;
`

const Container = styled.div`
`

interface LoadingProps 
{
  isLoading:boolean;
}
const LoadingComp = ({isLoading}:LoadingProps) =>{
  const [compLoadingState,setCompLoadingState] = useState(true);
  const [compLoadingText,setCompLoadingText] = useState('');

  useEffect(() => {
    if(isLoading){
      setCompLoadingState(true);setCompLoadingText('Loading...')
    }
    else{
      setCompLoadingText('Finished...');setTimeout(()=>{setCompLoadingState(false)},1000)
    }
  }, [isLoading])
  return(
    <LoadingComponent style={{zIndex:`${compLoadingState?'9999':'-1'}`,opacity:`${compLoadingState?'1':'0'}`,top:`0`}}>
      <LoadingContainer style={{width:`40%`}}>
        <Loading>{compLoadingText}</Loading>
      </LoadingContainer>
    </LoadingComponent>
  )
}

const Result = React.forwardRef((props,ref) =>{
  const { buffer, fileName, textOriginalFile, scene, code, createZip, generateScene, animations,figmaMsg } = useStore()
  const [config, setConfig] = useControls(() => (
  {
    // types: { value: false, hint: 'Add Typescript definitions' },
    // shadows: { value: true, hint: 'Let meshes cast and receive shadows' },
    // instanceall: { label: 'instance all', value: true, hint: 'Instance every geometry (for cheaper re-use)' },
    // instance: { value: false, hint: ' Instance re-occuring geometry' },
    // verbose: { value: false, hint: 'Verbose output w/ names and empty groups' },
    // keepnames: { value: false, label: 'keep names', hint: 'Keep original names' },
    // keepgroups: { value: false, label: 'keep groups', hint: 'Keep (empty) groups' },
    // aggressive: { value: false, hint: 'Aggressively prune the graph (empty groups, transform overlap)' },
    // meta: { value: false, hint: 'Include metadata (as userData)' },
    // precision: { value: 2, min: 1, max: 8, step: 1, hint: 'Number of fractional digits (default: 2)' },
  }))
  const preview = useControls(
    'configs',
    {
      autoRotate: false,
      perspectiveCamera: true,
      animation:true,
      shadows: { value: true, hint: 'Let meshes cast and receive shadows' },
      contactShadow: true,
      intensity: { value: 1, min: 0, max: 2, step: 0.1, label: 'light intensity' },
      dpr: { value: 1.5, min: 0, max: 2, step: 0.1, label: 'dpr' },
      preset: {
        value: 'rembrandt',
        options: ['rembrandt', 'portrait', 'upfront', 'soft'],
      },
      environment: {
        value: 'city',
        options: ['', 'sunset', 'dawn', 'night', 'warehouse', 'forest', 'apartment', 'studio', 'city', 'park', 'lobby'],
      },
    },
    { collapsed: true }
  )

  // const [loading, sandboxId, error, sandboxCode] = useSandbox({
  //   fileName,
  //   textOriginalFile,
  //   code,
  //   config: { ...config, ...preview },
  // })

  // useEffect(() => {
  //   setConfig({ verbose: animations })
  // }, [animations])

  // useEffect(() => {
  //   generateScene(preview)
  // }, [preview])

  useEffect(() => {
    if(props.children != null){
      useStore.setState({scene:null,code:null})
      console.log(props.children)
      generateScene(preview)
      setIsLoading(true);
    }

  }, [props.children])

  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    if(scene != null){
      
      setIsLoading(false);
    }
    
  }, [scene])

  // const download = useCallback(async () => {
  //   createZip({ sandboxCode })
  // }, [sandboxCode, fileName, textOriginalFile, buffer])

  const exports = useMemo(() => {
    const temp = {}
    // temp['copy to clipboard'] = button(() =>
    //   toast.promise(copy(code), {
    //     loading: 'Loading',
    //     success: () => `Successfully copied`,
    //     error: (err) => err.toString(),
    //   })
    // )

    // temp['download zip'] = button(() =>
    //   toast.promise(download(), {
    //     loading: 'Loading',
    //     success: () => `Ready for download`,
    //     error: (err) => err.toString(),
    //   })
    // )

  if(props.envBuild === 'page'){
    temp['download image'] = button(() => {
      var image = document
        .getElementsByTagName('canvas')[0]
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream')

      //################# resize //#################

      var img = document.createElement('img');
      img.src = image;
      img.onload = function()
      {        
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');

          canvas.width = window.innerWidth*preview.dpr;
          canvas.height =  window.innerHeight*preview.dpr;

          // We resize the image with the canvas method drawImage();
          ctx.drawImage(img, 0, 0, window.innerWidth*preview.dpr, window.innerHeight*preview.dpr);

          var dataURI = canvas.toDataURL('image/png',2.0).replace('image/png', 'image/octet-stream');

          saveAs(dataURI, `${fileName.split('.')[0]}.png`)
          /////////////////////////////////////////
          // Use and treat your Data URI here !! //
          /////////////////////////////////////////
      };

    })
  }
  else{
    temp['export image to fimga'] = button(() => {
      setIsLoading(true);
      const fileKey = figmaMsg[0]
      //const fileName = figmaMsg[1]
      const nodeId = figmaMsg[2];

      var image = document
        .getElementsByTagName('canvas')[0]
        .toDataURL('image/png',2.0)
        .replace('image/png', 'image/octet-stream')
  
      // ############## save to figma ##############
      
      // console.log(nginxAssetLink+`/${fileKey}/Model/${fileName}`)
      const inFigName = nginxAssetLink+`/${fileKey}/Model/${fileName}`;
      //saveAs(image, `${fileName.split('.')[0]}.png`)
      onCreateImage(null,image,'save-canvas-image',inFigName) //`${fileName.split('.')[0]}.png`

      // ############## save model to cloud drive ##############

      const bb = new Blob([buffer],{type:'model/gltf+json'});
      const blob = URL.createObjectURL(bb);
      postData(
        blob, //blob
        //`/${fileKey}/Model/`,  //`./zfile/test/${fileKey}/${nodeId}/`
        `${nginxUploadFolder}/${fileKey}/Model/`,
        `${fileName}`,
        // ()=>{setIsLoading(true)},
        // ()=>{setIsLoading(false)},
        ()=>{}, //start
        ()=>{}, //middle
        ()=>{setIsLoading(false)}, //end
      )

    })
  }


  // if (!isGlb(fileName) && !error) {
  //   const name = 'codesandbox' + (loading ? ' loading' : '')
  //   temp[name] = button(() => {
  //     location.href = sandboxId
  //       ? `https://codesandbox.io/s/${sandboxId}?file=/src/Model.${config.types ? 'tsx' : 'js'}`
  //       : '#'
  //   })
  // }

    return temp
  }, [fileName]) // config.types, loading, error, sandboxCode, sandboxId

  useControls('exports', exports, { collapsed: false }, [exports])
  return(
    <Container ref={ref}>
          <div style={{textAlign:'left'}}>
            <FileNameHeading>{props.children}</FileNameHeading>
            {scene != null?
              <>
                <Canvas style={{width:`100vw`,height:`100vh`}}gl={{ preserveDrawingBuffer: true }} shadows dpr={[0, preview.dpr]}>
                  <Viewer scene={scene} {...preview}/>
                </Canvas>
              </>
              :
              <>
              </>
            }
            <LoadingComp isLoading={isLoading}></LoadingComp>
          </div>
    </Container>
  )
})
export default Result;

