import React, { useRef, useState,useEffect,forwardRef,useCallback,useImperativeHandle,Suspense, useLayoutEffect, useContext} from 'react'

import * as THREE from 'three'
import { Canvas, invalidate,useFrame,useThree } from '@react-three/fiber'
import { XRButton  } from '@react-three/xr'
import { CreateImageProps,DownloadImageProps } from '@CustomTypes';
import {WebXRContainer,XRDivContainer,TopFixedBtn,CanvasContainer,XRViewerGlobalrtyle} from '@Styles/XRViewer'
import Spinner from '@Components/Spinner'
import Orbit from '@Components/Orbit'
import CombinedCamera from '@Components/CombinedCamera';
import XRContainer from '@Components/XRContainer'
import ProperGeometry from '@Components/ProperGeometry'
import { 
  helperSetting,
} from '@Utils/threeHelper'; 
import {onCreateImage,saveImageFromRenderer} from '@Utils/saveImage'
import {onDownloadHTML} from '@Utils/downloadHTML'
import {asyncFetchQueryFigmaJSON,asyncFetchQueryLocalServerJSON,asyncFetchQueryLocalServerStateJSON,sortDataInDescendingOrder}  from '@Utils/queryData'
import {FigmaApi} from '@Utils/figmaAPI';
import { webRootURL,webClientID,webSecrectID, isTextureEditor, nginxDirLink, nginxUploadFolder} from '@Config';

import { getProject,
        asyncGetProject,
        ISheetObject,
        types, } from '@theatre/core'

import studio from '@theatre/studio'

import { editable as e,SheetProvider } from '@theatre/r3f'
import { AdaptiveDpr, AdaptiveEvents, Environment, GizmoHelper, GizmoViewport, Stage, Stats, useHelper } from '@react-three/drei'
import DragCorner from '@Components/DragCorner';
import GalleryComponent from '../components/GalleryComponent';
import { isLocal } from '../../config/index';
import { postData } from '../utils/uploadToServer';

// todo
// 2.computer data pass to XR Device 
// 3.player coord/move
// 4.screen position (fov -> rotation's position & simple position)
// 5.control -> <- camera

// ### Global Variable ###
// # init R3F Config 
import projectState from './XRViewer.json'

const ViewerConfig ={
  baseUnit:100,
  bgColor:'#272730',
  savedImageQuality:2,
}

const lightSheet = getProject('XRViewer').sheet('Light','Controller')
const helperSheet = getProject('XRViewer').sheet('Helper','Controller')
const sceneHelper = helperSheet.object(' - Helper Controller', {
  // cameraHelper:types.boolean(false),
  polarHelper: types.boolean(true),
  dotHelper:types.boolean(false),
  quality: types.stringLiteral(ViewerConfig.savedImageQuality, {1: 'x1', 2: 'x2',3:'x3'}),
  dpr:types.number(1, {nudgeMultiplier: 0.5,range:[0,2]}),
  preset: types.stringLiteral('rembrandt', {
    'rembrandt':'rembrandt',
    'portrait':'portrait',
    'upfront':'upfront', 
    'soft':'soft',
  }),
  environment: types.stringLiteral('sunset', {
    "sunset": "sunset",
    "dawn": "dawn",
    "night": "night",
    "warehouse": "warehouse",
    "forest": "forest",
    "apartment": "apartment",
    "studio": "studio",
    "city": "city",
    "park": "park",
    "lobby": "lobby"
  }),
})


interface RendererProps {
  containerRef:React.MutableRefObject<any>;
  figmaData:any;
  stateData?:any
  isQuery:boolean;
  isFigma:boolean;
  isLocalSever:boolean;
  loadingProgress:string;
  finishedRenderingCallback:()=>void;
  selectCallback:(e:any)=>void;
}

const Renderer = forwardRef(({containerRef,figmaData,stateData,isQuery,isFigma,isLocalServer,loadingProgress,finishedRenderingCallback,selectCallback}:RendererProps,ref) =>{

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
    getCameraSheetObj:() =>{return cameraSheetObj}
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
          // console.log(gl)
          setStageEnv(val.environment)
          gl.setPixelRatio(val.dpr)
          invalidate()
        })
      }
    );
  },[])

  useEffect(()=>{
    if(isQuery === true){
      const isOnLoading = (loadingProgress.split('/').length === 2);
      const isLoadingFinished = (loadingProgress.split('/')[0] === loadingProgress.split('/')[1]);
      if(isOnLoading && isLoadingFinished){
        InitRenderer();
        finishedRenderingCallback();
      }
    }
    else{
      InitRenderer();
      finishedRenderingCallback();
    }
  },[isQuery,loadingProgress])

  const [stageEnv,setStageEnv] = useState("sunset");
  
  return(
    <> 
     {/* <Stage shadows={false} preset={stagePreset} intensity={1}  adjustCamera={false}> */}
      {isLocalServer?<Environment files={`${nginxDirLink}/service_1/environment/${stageEnv}.hdr`} />:<></>}
          <SheetProvider sheet={lightSheet}>
            <e.ambientLight 
              theatreKey="Light - Ambient"
              intensity={1}
            />
            <e.pointLight
              theatreKey="Light - Point" 
              intensity={0}
              position={[100, -50, 0]}
            />
            <e.spotLight
              theatreKey="Light - Spot"
              castShadow
              intensity={0}
              angle={0.2}
              penumbra={1}
              position={[0, 0, 500]}
              shadow-mapSize={[1024, 1024]}
              shadow-bias={-0.0001}
            />
            <e.directionalLight 
              theatreKey="Light - Directional" 
              position={[0, 0, 100]}
              intensity={0} 
            />

          </SheetProvider>
          <SheetProvider sheet={helperSheet}>
            <CombinedCamera cameraRef={cameraRef} cameraSheetObj={cameraSheetObj} baseUnit={ViewerConfig.baseUnit} aspect={window.innerWidth/window.innerHeight}/>
          </SheetProvider>
          {/* <color attach="background" args={[ViewerConfig.bgColor]} />  */}
          
          <Orbit orbitRef={orbitRef} cameraSheetObj={cameraSheetObj}></Orbit>
          {(isFigma === false)?
            // is not in Figma
            <XRContainer cameraSheetObj={cameraSheetObj}>
              <SheetProvider sheet={helperSheet}>
                <e.group theatreKey={'- Main Controller'} ref={groupRef} objRef={groupSheetObj}>
                  <ProperGeometry selectCallback={(e)=>{selectCallback(e)}} figmaData={figmaData} stateData={stateData} isFigma={isFigma} isQuery={isQuery} baseUnit={ViewerConfig.baseUnit} orbitRef={orbitRef}></ProperGeometry>
                </e.group> 
              </SheetProvider>
            </XRContainer>
            :
            // is in Figma
            <>
              <SheetProvider sheet={helperSheet}>
                <e.group theatreKey={'- Main Controller'} ref={groupRef} objRef={groupSheetObj}>
                    <ProperGeometry selectCallback={(e)=>{selectCallback(e)}} figmaData={figmaData} isFigma={isFigma} isQuery={isQuery} baseUnit={ViewerConfig.baseUnit} orbitRef={orbitRef}></ProperGeometry>
                </e.group>
              </SheetProvider>
            </>
          }
          <AdaptiveDpr pixelated />

      {/* </Stage> */}
    </>
  )
})
const MemoOfRenderer = React.memo(Renderer);


const XRViewerApp = () => {
  const canvasContainerRef = useRef(null);
  const rendererRef = useRef(null);
  const galleryCompRef = useRef();

  const [figData,setFigData] = useState([]);
  const [stateData,setStateData] = useState(null);
  const [isFigma, setIsFigma] = useState(false);
  const [isQuery,setIsQuery] = useState(false);
  const [isLocalServer,setIsLocalServer] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [loadingProgress,setLoadingProgress] = useState(`0`);
  const [isRendered,setIsRendered] = useState(false);
  

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
    setFigData(sortDataInDescendingOrder(data))
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
          setFigData(sortDataInDescendingOrder(value.data))
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
          setFigData(sortDataInDescendingOrder(arr));
          setIsLoading(false);
        }
      }
    }

    if(token === 'local_server'){
      console.log('query - local server')
      console.log(fileKey)
      console.log(nodeId)
      setIsLocalServer(true)
      const url = new URL(window.location.href);
      const key = url.searchParams.get('query_key')
      const node = url.searchParams.get('query_node')
      const state = url.searchParams.get('query_state')
      if(state){
        asyncFetchQueryLocalServerStateJSON(key,node,state,(data)=>{
          setStateData(data);
          asyncFetchQueryLocalServerJSON(
            fileKey,nodeId,
            (str)=>{
              setLoadingProgress(str);
            },
            (arr)=>{
              modifyArrDataNSet(arr);
            }
          )
        })
      }
      else{
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

  
  useEffect(() => {
    const parsedUrl = new URL(window.location.href);
    const fileKey = parsedUrl.searchParams.get('query_key');
    const nodeId = parsedUrl.searchParams.get('query_node');
    const token = parsedUrl.searchParams.get('query_token');
   
    console.log('fileKey is: ' + fileKey);
    console.log('nodeId is: ' + nodeId);
    console.log('token is: ' + token);
    // ## on saved static data(Download(Static))
    if(savedFigData != ''){
      console.log('init with saved figma data')
      InitWithStaticData(savedFigData)
    }
    else{
      // ## load data with query string
      if(fileKey != null && nodeId != null){
        console.log('init with query data')
        InitWithQueryData(token,fileKey,nodeId);
      }
      // ## empty data
      else{
        console.log('init with empty data')
        InitWithEmptyData();
      }
    }

    // ## figma data
    window.onmessage = (event) => {
      if(event.data.pluginMessage != undefined){
        const { type, value } = event.data.pluginMessage;
        console.log('init with figma app data')
        InitWithFigmaData(type,value)
      }
    };

  }, []);

  const clickXRBtn = (e) =>{
    if(e.target.innerHTML === 'Enter VR' || e.target.innerHTML === 'Enter AR'){
      // document.getElementById('theatrejs-studio-root').style.display='none';
      // document.getElementById('gallery-root').style.display='none';
      document.getElementById('theatrejs-studio-root').style.zIndex='99999999999';
      document.getElementById('gallery-root').style.zIndex='99999999999';
    }

    if(e.target.innerHTML === 'Exit VR' || e.target.innerHTML === 'Exit AR'){
      // document.getElementById('theatrejs-studio-root').style.display='block';
      // document.getElementById('gallery-root').style.display='block';
      document.getElementById('theatrejs-studio-root').style.zIndex='100';
      document.getElementById('gallery-root').style.zIndex='100';
    }
  }

  const updateStateBtn = (e) =>{
    const str = JSON.stringify(
      studio.createContentOfSaveFile("XRViewer"),
      null,
      2,
    )
    const file = new File([str], "xrviewer.theatre-project-state.json", {
      type: 'application/json',
    })
    const objUrl = URL.createObjectURL(file)

    // make this an Object
    const parsedUrl = new URL(window.location.href);
    const fileKey = parsedUrl.searchParams.get('query_key')
    const nodeId = parsedUrl.searchParams.get('query_node')
    var date = new Date();
    var currentdate = date.getFullYear() + '-' +  date.getMonth() + '-' + date.getDate() +
    date.getHours() + '-' +  date.getMinutes() + '-' + date.getSeconds()
    ;
    console.log(currentdate)

    postData(objUrl, `${nginxUploadFolder}/${fileKey}/${nodeId}/`, `theatre-state-${currentdate}.json`,()=>{
      },
      ()=>{},
      ()=>{
        console.log('end')
      },
    )
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('query_state', currentdate);
    window.location.search = urlParams;
  }

  //todo error when in XRViewer Plugin,cannot load
  return (
    <>
    <XRViewerGlobalrtyle></XRViewerGlobalrtyle>
    {(isLoading)?
      <Spinner loadingProgress={`${loadingProgress}`} hintText={` of total nodes is loaded`}></Spinner>
      :
      <>
      {isRendered?<></>:<Spinner hintText={`init the renderer`}></Spinner>}
      <Suspense fallback={<></>}>
        <WebXRContainer>
          <CanvasContainer ref={canvasContainerRef}>
                <GalleryComponent style={{display:`${!isTextureEditor?'initial':'none'}`}} ref={galleryCompRef} figData={figData}></GalleryComponent>
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
                      imageLayout:galleryCompRef.current.getImgLayout()
                    })}}>Download(Serve)</TopFixedBtn>
                    <TopFixedBtn onClick={(e)=>{DownloadHTML({
                      event:e,
                      isServe:false,
                      data:figData, 
                      imageLayout:galleryCompRef.current.getImgLayout()
                    })}}>Download(Static)</TopFixedBtn>
                  </>
                  :
                  <>
                    <XRButton className="xr-button" onClick={(e)=>{clickXRBtn(e)}} mode={'AR'} />
                    <XRButton className="xr-button" onClick={(e)=>{clickXRBtn(e)}} mode={'VR'} />
                  </>
                  }
                </XRDivContainer>

                <Canvas frameloop="demand" 
                  performance = {{
                    current: 1,
                    min: 0.1,
                    max: 1,
                    debounce: 200,
                  }}
                  gl={{
                    // preserveDrawingBuffer:true,
                    autoClear:true,
                    outputEncoding:THREE.sRGBEncoding,
                    antialias: true, 
                    alpha: true,
                    logarithmicDepthBuffer:true,
                  }} >
                      <MemoOfRenderer 
                        ref={rendererRef} 
                        containerRef={canvasContainerRef}
                        isFigma={isFigma}
                        isQuery={isQuery}
                        isLocalServer={isLocalServer}
                        loadingProgress={loadingProgress}
                        figmaData={figData}
                        stateData={stateData}
                        finishedRenderingCallback={()=>{setIsRendered(true)}}
                        selectCallback={(e)=>{                          
                            if(!isTextureEditor){
                              galleryCompRef.current.setSelect(e)
                            }
                          }
                        }
                      />
                </Canvas>
                <Stats className="stats"/>
          </CanvasContainer>
        </WebXRContainer>
        {isFigma && <DragCorner minWidth={512} minHeight={512}/>}
      </Suspense>
      {isLocalServer?
            <button className='xr-button' style={{
              position: 'absolute',
              left: '100px',
              width: '32px',
              height: '32px',
              top: '4px',
              zIndex: '999',
              fontSize: '16px',
              textAlign: 'center',
              padding: '0px',
              border: 'none'
            }}
            onClick={
              (e)=>{
                updateStateBtn(e);
              }
            }> ⇧ </button>
        :
        <></>
      }

      </>
      }
    </>
  )
}
export default XRViewerApp;