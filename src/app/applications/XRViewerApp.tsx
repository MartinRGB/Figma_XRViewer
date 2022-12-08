import React, { useRef, useState,useEffect,forwardRef,useCallback,useImperativeHandle,Suspense, useLayoutEffect} from 'react'

import * as THREE from 'three'
import { Canvas, invalidate,useFrame,useThree } from '@react-three/fiber'
import { XRButton  } from '@react-three/xr'
import { CreateImageProps,DownloadImageProps } from '@CustomTypes';
import {WebXRContainer,ImageInList,ImageListContainer,XRDivContainer,TopFixedBtn,CanvasContainer,XRViewerGlobalrtyle} from '@Styles/XRViewer'
import Spinner from '@Components/Spinner'
import Orbit from '@Components/Orbit'
import CombinedCamera from '@Components/CombinedCamera';
import XRContainer from '@Components/XRContainer'
import ProperGeometry from '@Components/ProperGeometry'
import { 
  helperSetting,
  theatreStudioCameraHelperFixed
} from '@Utils/threeHelper'; 
import {onCreateImage,saveImageFromRenderer} from '@Utils/saveImage'
import {onDownloadHTML} from '@Utils/downloadHTML'
import {asyncFetchQueryFigmaJSON,asyncFetchQueryLocalServerJSON}  from '@Utils/queryData'
import {FigmaApi} from '@Utils/figmaAPI';
import { webRootURL,webClientID,webSecrectID} from '@Config';

import { getProject,ISheetObject,types } from '@theatre/core'

import { editable as e,SheetProvider } from '@theatre/r3f'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Stage, useHelper } from '@react-three/drei'

// todo
// 2.computer data pass to XR Device 
// 3.player coord/move
// 4.screen position (fov -> rotation's position & simple position)
// 5.control -> <- camera

// ### Global Variable ###
// # init R3F Config 

const ViewerConfig ={
  baseUnit:100,
  bgColor:'#272730',
  savedImageQuality:2,
}

const helperSheet = getProject('XRViewer').sheet('Node Tree','Controller')
const assetSheet = getProject('XRViewer').sheet('Node Tree','Asset')
const sceneHelper = helperSheet.object(' - Helper Controller', {
  // cameraHelper:types.boolean(false),
  polarHelper: types.boolean(true),
  dotHelper:types.boolean(false),
  quality: types.stringLiteral(ViewerConfig.savedImageQuality, {1: 'x1', 2: 'x2',3:'x3'}),
})


interface RendererProps {
  containerRef:React.MutableRefObject<any>;
  figmaData:any;
  isQuery:boolean;
  isFigma:boolean;
  loadingProgress:string;
}

const Renderer = forwardRef(({containerRef,figmaData,isQuery,isFigma,loadingProgress}:RendererProps,ref) =>{

  const cameraRef = useRef(null);
  const orbitRef = useRef(null);
  const cameraSheetObj = useRef(null);
  const helperSheetObj = useRef(sceneHelper)
  const groupRef= useRef(null);
  const groupSheetObj = useRef(null);

  const {invalidate,scene,gl,camera} = useThree()
  useImperativeHandle(ref, () => ({
    saveImage: () => {
      scene.background = null;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      const savedImage = saveImageFromRenderer(w,h,Number(sceneHelper.value.quality),scene,gl,camera);
      scene.background = new THREE.Color(ViewerConfig.bgColor);
      return savedImage;
    },
  }));

  
  const InitRenderer = useCallback(() =>{
    const yScalePerc = (figmaData.length != 0)?figmaData[0].frameHeight/figmaData[0].frameWidth:(1080/1920);
    console.log('the screen aspect ratio is : ' + yScalePerc)
    helperSetting(scene,helperSheetObj,yScalePerc,ViewerConfig.baseUnit,
      (polarHelper,dotHelper)=>
      {
        helperSheetObj.current.onValuesChange((val)=>{
          polarHelper.visible = val.polarHelper
          dotHelper.visible = val.dotHelper
          invalidate()
        })
      }
    );
    theatreStudioCameraHelperFixed(scene,invalidate);
  },[])

  useEffect(()=>{

    if(isQuery === true){
      const isOnLoading = (loadingProgress.split('/').length === 2);
      const isLoadingFinished = (loadingProgress.split('/')[0] === loadingProgress.split('/')[1]);
      if(isOnLoading && isLoadingFinished){
        InitRenderer();
      }
    }
    else{
      InitRenderer();
    }

  },[isQuery,loadingProgress])
  
  return(
    <> 
     <Stage shadows={false} preset="rembrandt" intensity={1} environment="sunset" adjustCamera={false}>
          <SheetProvider sheet={helperSheet}>
            <CombinedCamera cameraRef={cameraRef} cameraSheetObj={cameraSheetObj} baseUnit={ViewerConfig.baseUnit} aspect={window.innerWidth/window.innerHeight}/>
          </SheetProvider>
          {/* <color attach="background" args={[ViewerConfig.bgColor]} />  */}
          <ambientLight />
          
          <Orbit orbitRef={orbitRef} cameraSheetObj={cameraSheetObj}></Orbit>
          {(isFigma === false)?
            // is not in Figma
            <XRContainer cameraSheetObj={cameraSheetObj}>
              <SheetProvider sheet={helperSheet}>
                <e.group theatreKey={' - Main Controller'} ref={groupRef} objRef={groupSheetObj}>
                  <ProperGeometry figmaData={figmaData} isFigma={isFigma} isQuery={isQuery} baseUnit={ViewerConfig.baseUnit} orbitRef={orbitRef}></ProperGeometry>
                </e.group> 
              </SheetProvider>
            </XRContainer>
            :
            // is in Figma
            <>
              <SheetProvider sheet={helperSheet}>
                <e.group theatreKey={' - Main Controller'} ref={groupRef} objRef={groupSheetObj}>
                    <ProperGeometry figmaData={figmaData} isFigma={isFigma} isQuery={isQuery} baseUnit={ViewerConfig.baseUnit} orbitRef={orbitRef}></ProperGeometry>
                </e.group>
              </SheetProvider>
            </>
          }
        {/* </SheetProvider> */}
      </Stage>
      
    </>
  )
})


const XRViewerApp = () => {
  const canvasContainerRef = useRef(null);
  const rendererRef = useRef(null);
  const imgLayoutRef = useRef(null);

  const [figData,setFigData] = useState([]);
  const [isFigma, setIsFigma] = useState(false);
  const [isQuery,setIsQuery] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [loadingProgress,setLoadingProgress] = useState(`0`);
  
  const CreateImage = useCallback(({event,image,message,name}:CreateImageProps) => {
    onCreateImage(event,image,message,name)
  },[figData]);

  const DownloadHTML = useCallback(({event,isServe,data,imageLayout}:DownloadImageProps) => {
    onDownloadHTML(event,isServe,data,imageLayout);
  },[]);

  const InitWithEmptyData = useCallback(() =>{
    console.log('successed - init with empty data');
    setIsLoading(false);
  },[])

  const InitWithStaticData = useCallback((data) =>{
    console.log('init with saved data')
    setIsFigma(false)
    setIsQuery(false);
    setFigData(data)
    setIsLoading(false);
  },[])

  const InitWithFigmaData = useCallback((type,value) =>{
    if(type === 'selection'){
      if (!value){
        console.log('failed - no figma selection')
        return ()=>{}
      }
      console.log('successed - init with figma data')

      setIsQuery(false);
      setIsLoading(true);
      for(var i=0;i<value.data.length;i++){
        let index = i;
        value.data[index].src = URL.createObjectURL(new Blob([value.data[index].imageData], { type: 'image/png' }));
        if(i === value.data.length - 1){
          setIsFigma(value.isFigma)
          setFigData(value.data)
          setIsLoading(false);
        }
      }
    }

    if(type === 'failed'){
      if (!value){
        console.log('failed - get data failed')
        return ()=>{}
      }
    }
  },[])
  
  const InitWithQueryData = useCallback((token,fileKey,nodeId) =>{
    console.log('successed - init with query data')

    setIsFigma(false);
    setIsQuery(true);
    setIsLoading(true);

    const modifyArrDataNSet = (arr) =>{
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.includes('.glb') || arr[i].name.includes('.gltf')){
          arr[i].modelSrc =  arr[i].name;
          arr[i].name = arr[i].name.split('/')[arr[i].name.split('/').length-1];
        }
        else{

        }
        if(i === arr.length - 1){
          setFigData(arr);
          setIsLoading(false);
        }
      }
    }

    if(token === 'local_server'){
      console.log('query - local server')
      console.log(fileKey)
      console.log(nodeId)
      
      asyncFetchQueryLocalServerJSON(
        fileKey,nodeId,
        (str)=>{
          setLoadingProgress(str);
        },
        (arr)=>{
          modifyArrDataNSet(arr);
        }
      )
    }
    else if(token === 'auth_everytime'){
      console.log('query - need OAuth')
      const figmaApi = new FigmaApi({
        clientId: webClientID,
        clientSecrete: webSecrectID,
        redirectUri: `${webRootURL}callback.html`,
      });

      figmaApi.getOAuth2Token().then(authedToken => {
        asyncFetchQueryFigmaJSON(authedToken,fileKey,nodeId,
          (str)=>{
            setLoadingProgress(str);
          },
          (arr)=>{
            modifyArrDataNSet(arr);
          }
        );
      });
    }
    else{
      console.log('query - already exist OAuth')
      asyncFetchQueryFigmaJSON(token,fileKey,nodeId,
        (str)=>{
          setLoadingProgress(str);
        },
        (arr)=>{
          modifyArrDataNSet(arr);
        }
      );
    }
  },[])

  React.useEffect(() => {
    const parsedUrl = new URL(window.location.href);
    const fileKey = parsedUrl.searchParams.get('query_key');
    const nodeId = parsedUrl.searchParams.get('query_node');
    const token = parsedUrl.searchParams.get('query_token');

    // window.studio.onSelectionChange((newSelection) => {
    //   //console.log(newSelection) // [ISheetObject, ISheet]
    //   console.log(window.studio.selection)
    // })

    console.log('fileKey is: ' + fileKey);
    console.log('nodeId is: ' + nodeId);
    console.log('token is: ' + token);
    // ## on saved static data(Download(Static))
    if(savedFigData != ''){
      InitWithStaticData(savedFigData)
    }
    else{
      // ## load data with query string
      if(fileKey != null && nodeId != null){
        InitWithQueryData(token,fileKey,nodeId);
      }
      // ## empty data
      else{
        InitWithEmptyData();
      }
    }

    // ## figma data
    window.onmessage = (event) => {
      if(event.data.pluginMessage != undefined){
        const { type, value } = event.data.pluginMessage;
        InitWithFigmaData(type,value)
      }
    };


  }, []);

  return (
    <>
    <XRViewerGlobalrtyle></XRViewerGlobalrtyle>
    {(isLoading)?
      <Spinner loadingProgress={`${loadingProgress}`} hintText={` of total nodes is loaded`}></Spinner>
      :
      <WebXRContainer>
        <CanvasContainer ref={canvasContainerRef}>
          {/* {(isLoading)?
            <Spinner loadingProgress={`${loadingProgress}`} hintText={` of total nodes is loaded`}></Spinner>
            : */}
            <Suspense fallback={<Spinner hintText={`init the renderer`}></Spinner>}>

              <ImageListContainer ref={imgLayoutRef} >
              {figData.reverse().map(({ src,type,index,name }) => (
                    <ImageInList  key={type + '-' + index} 
                          src={src}
                          className={'img-imported'}
                          id={type + '-' + index}
                          // name={`#${index}-` + name.replace(/\//g,`_`).replace(/\ /g,`_`).substring(0,24)}
                          name={name}
                          
                          />
              ))}
              </ImageListContainer>
              <XRDivContainer>
                {isFigma?
                <>
                  <TopFixedBtn onClick={(e)=>{
                    CreateImage({
                      event:e,
                      image:rendererRef.current.saveImage(),
                      message:'save-canvas-image',
                      name:figData[0].name
                    })}
                  }>SaveToFigma</TopFixedBtn>
                  <TopFixedBtn onClick={(e)=>{DownloadHTML({
                    event:e,
                    isServe:true,
                    data:figData,
                    imageLayout:imgLayoutRef.current
                  })}}>Download(Serve)</TopFixedBtn>
                  <TopFixedBtn onClick={(e)=>{DownloadHTML({
                    event:e,
                    isServe:false,
                    data:figData, 
                    imageLayout:imgLayoutRef.current
                  })}}>Download(Static)</TopFixedBtn>
                </>:
                <>
                  <XRButton className="xr-button" mode={'AR'} />
                  <XRButton className="xr-button" mode={'VR'} />
                </>
                }
              </XRDivContainer>

              <Canvas frameloop="demand" gl={{
                preserveDrawingBuffer:true,
                outputEncoding:THREE.sRGBEncoding,
                antialias: true, 
                alpha: true,
                logarithmicDepthBuffer:true,
                }} >
                    <Renderer 
                      ref={rendererRef} 
                      containerRef={canvasContainerRef}
                      isFigma={isFigma}
                      isQuery={isQuery}
                      loadingProgress={loadingProgress}
                      figmaData={figData.reverse()}
                    />
              </Canvas>
            </Suspense>
          {/* } */}
        </CanvasContainer>
      </WebXRContainer>
    }
    </>
  )
}
export default XRViewerApp;