import React, { useRef, useState,useEffect,forwardRef,useCallback,useImperativeHandle} from 'react'

import * as THREE from 'three'
import { Canvas, invalidate, useFrame,useThree } from '@react-three/fiber'
import { OrbitControls,PerspectiveCamera,useHelper } from '@react-three/drei'
import { XR, Controllers, Hands, XRButton, useXR } from '@react-three/xr'

import '../styles/ui.css';

import Spinner from '@Components/Spinner'
import { 
  searchElementByType,
  // __awaiter,
  // saveZip,
  syncFetchQueryFigmaJSON,
  // getImage, getImageBlob,
  onCreateImage,onDownloadImage,
  createCanvasDotMaterial,createCanvasGridMaterial,createPlaneCurve,
  saveImageFromRenderer 
} from '@Utils/functions.js'; 
import {FigmaApi} from '@Utils/figmaAPI';
import { rootURL,clientID,secrectID } from '@Config';

import { getProject,ISheetObject,types } from '@theatre/core'
import { editable as e,SheetProvider } from '@theatre/r3f'
import studio from '@theatre/studio';
import extension from '@theatre/r3f/dist/extension';

// todo
// 2.computer data pass to XR Device 
// 3.player coord/move
// 4.screen position (fov -> rotation's position & simple position)
// 5.control -> <- camera

// ### Global Variable ###
// # init saved local data
// # init R3F Config 
const ViewerConfig ={
  baseUnit:100,
  bgColor:'#272730',
  savedImageQuality:2,
}

// # init Theatre Studio
studio.initialize({usePersistentStorage:false}) 
studio.extend(extension)
const EditableCamera = e(PerspectiveCamera, 'perspectiveCamera')

const helperSheet = getProject('XRViewer').sheet('Node Tree','Helper')
const assetSheet = getProject('XRViewer').sheet('Node Tree','Asset')
const sceneHelper = helperSheet.object('helper', {
  cameraHelper:types.boolean(false),
  polarHelper: types.boolean(true),
  dotHelper:types.boolean(false),
  quality: types.stringLiteral(ViewerConfig.savedImageQuality, {1: 'x1', 2: 'x2',3:'x3'}),
})

const helperSetting = (scene,helperRef,yScalePerc) =>{

  const cameraGuideHelper =  searchElementByType(scene.children,'type','CameraHelper');
  //radius angles radius
  const polarGridHelper = new THREE.PolarGridHelper(ViewerConfig.baseUnit*4, 8, 4, 64, 0xffffff, 0xffffff);
  polarGridHelper.position.y = -yScalePerc/2*ViewerConfig.baseUnit;
  polarGridHelper.position.z = ViewerConfig.baseUnit;
  polarGridHelper.visible = helperRef.current.value.polarHelper;
  scene.add(polarGridHelper);

  const ground = new THREE.PlaneGeometry(ViewerConfig.baseUnit*8, ViewerConfig.baseUnit*8, Math.min(250,Math.max(40,ViewerConfig.baseUnit*8.*5)), Math.min(250,Math.max(40,ViewerConfig.baseUnit*8.*5)));
  ground.rotateX(Math.PI / 2);
  const dotGrid = new THREE.PointsMaterial({ transparent: false, fog: false });
  (dotGrid.map = createCanvasDotMaterial(THREE,'#ffffff', ViewerConfig.baseUnit*8)), (dotGrid.size = 1*0.00825);
  const dotGridHelper = new THREE.Points(ground, dotGrid);
  dotGridHelper.position.y =  -yScalePerc/2*ViewerConfig.baseUnit;
  dotGridHelper.position.z = ViewerConfig.baseUnit;
  dotGridHelper.visible = helperRef.current.value.dotHelper;
  scene.add(dotGridHelper);

  
  helperRef.current.onValuesChange((val)=>{
    cameraGuideHelper.visible = val.cameraHelper
    polarGridHelper.visible = val.polarHelper
    dotGridHelper.visible = val.dotHelper
    invalidate()
  })
}

const theatreStudioCameraHelperFixed = (scene,invalidate)=>{
  
  //todo
  if(document.getElementById('theatrejs-studio-root').shadowRoot === null){
    console.log('removed duplicated theatreJS studio')
    document.body.removeChild(document.getElementById('theatrejs-studio-root'))
  }
  const snapBtn = document.getElementById('theatrejs-studio-root').shadowRoot.children[1].children[0].children[1].children[0].children[1];
  const mArr = scene.children;
  const mHelper =  searchElementByType(mArr,'type','CameraHelper');

  // todo 
  // disable cameraHelper when open SnapShot
  snapBtn.addEventListener("click", 
  (event)=>{
    if(mArr.includes(mHelper)){
      event.stopPropagation()
      new Promise(function(resolve, reject) {
        console.log('remove step 1 - remove helper first')
        mHelper.removeFromParent();
        invalidate() 
        setTimeout(() => resolve(1), 1); // (*)
      }).then(function(result) { // (**)
        console.log('remove step 2 - click btn second')
        snapBtn.children[1].click();
      })
    }
    else{
      console.log('remove step 3 - snapshot opened')
      setTimeout(()=>{
        // enable cameraHelper when open SnapShot
        const closeBtn = document.getElementById('theatrejs-studio-root').shadowRoot.children[1].children[0].children[2].children[8].children[0].children[0];
        const closeListener = () =>{
          if(!mArr.includes(mHelper)){
            //no need to event.stopPropagation()
            new Promise(function(resolve, reject) {
              console.log('add step 1 - close window first')
              setTimeout(() => resolve(1), 1); // (*)
            }).then(function(result) { // (**)
              console.log('add step 2 - add camHelper')
              scene.add(mHelper);
              invalidate();
            })
          }
          closeBtn.removeEventListener('click',closeListener)
          return true;
        }
        closeBtn.addEventListener("click",closeListener)
      },1)
    }
    return true;
  });  
}
// # Camera & Fake Camera
const Camera = forwardRef((props,ref) =>{
  const [mAspect,setAspect] = useState(1);
  const realCamera = useRef(null);
  useHelper(ref,THREE.CameraHelper)
  const {invalidate,scene} = useThree()

  useEffect(()=>{
    let width = props.mount.current?.getParentRef().current.clientWidth;
    let height = props.mount.current?.getParentRef().current.clientHeight;
    console.log('aspect: ' + width/height)
    setAspect(width / height);
    
    props.objRef.current.onValuesChange(newValues => {
      if(newValues.control){
        invalidate();
      }
      else{
        if(realCamera.current){
          realCamera.current.position.x = newValues.position.x;
          realCamera.current.position.y = newValues.position.y;
          realCamera.current.position.z = newValues.position.z;
          realCamera.current.rotation.x = newValues.rotation.x;
          realCamera.current.rotation.y = newValues.rotation.y;
          realCamera.current.rotation.z = newValues.rotation.z;
          realCamera.current.scale.x = newValues.scale.x ;
          realCamera.current.scale.y = newValues.scale.y;
          realCamera.current.scale.z = newValues.scale.z;
          realCamera.current.near = newValues.near;
          realCamera.current.far = newValues.far;
          realCamera.current.fov = newValues.fov;
          realCamera.current.zoom = newValues.zoom;
          //realCamera.current.copy(ref.current,false)
          
          realCamera.current.matrixWorldNeedsUpdate = true;
          realCamera.current.updateProjectionMatrix()
          realCamera.current.updateMatrixWorld();
          invalidate();
        }
      }
    });
  },[])

  //useFrame(() => {})
  
  return (
    <>
    <PerspectiveCamera
      ref={realCamera}
      makeDefault
      fov={60} 
      aspect={mAspect} 
      near={0.01}
      zoom={1} 
      far={10000} 
      position={[0,0,ViewerConfig.baseUnit]}/>
    <EditableCamera
      theatreKey="camera" 
      // makeDefault
      objRef={props.objRef}
      ref={ref}
      additionalProps={{ 
        control: types.boolean(true),
      }} 
      fov={60} 
      aspect={mAspect} 
      near={0.01}
      zoom={1} 
      far={10000} 
      position={[0,0,ViewerConfig.baseUnit]}/>
    </>
  )

});

// # OrbitControls
const Orbit = (props) =>{
  const orbitRef = useRef(null);
  const [showOribt,setShowOrbit] = useState(true)
  useFrame(() => {
    if(props.cameraObj.current.getParentRef().current.value.control){
      setShowOrbit(true)
    }
    else{
      setShowOrbit(false)
    }

  })
  return(
    <>{showOribt?<OrbitControls ref={orbitRef}/>:<></>}</>
  )
}

const XRContainer = (props) =>{
  const {invalidate,scene,gl,camera} = useThree()
  const UseXR = () => {
    const {player,isPresenting,session} = useXR()
    useEffect(()=>{
      const mArr = props.camera.current.getParentRef().current.parent.children;
      if(isPresenting){

        player.visible = false;
        const mHelper =  searchElementByType(mArr,'type','CameraHelper')
        mHelper.visible = false;
        const fovSqrtInPlayer = Math.sqrt(3);
        const pX = props.cameraObj.current.getParentRef().current.value.position.x
        const pY = props.cameraObj.current.getParentRef().current.value.position.y
        const pZ = props.cameraObj.current.getParentRef().current.value.position.z
        const rX = props.cameraObj.current.getParentRef().current.value.rotation.x
        const rY = props.cameraObj.current.getParentRef().current.value.rotation.y
        const rZ = props.cameraObj.current.getParentRef().current.value.rotation.z
        const fov = props.cameraObj.current.getParentRef().current.value.fov;
        const zoom = props.cameraObj.current.getParentRef().current.value.zoom;

        // #TODO need thinking about rotation
        player.position.x = pX;
        // todo still some mistake
        player.position.y = pY - 1.60000;//yScalePer/2 ; //- 1.6000;//yScalePer/2 ;
        player.position.z = pZ * Math.tan( (fov/(2*zoom))* Math.PI/180.0)*fovSqrtInPlayer;
        player.rotation.x = rX
        player.rotation.y = rY
        player.rotation.z = rZ
        player.children[0].position.y = 0;
        // player.matrixWorldNeedsUpdate = true;
        // invalidate();
        console.log(player)
        setTimeout(()=>{player.visible = true;invalidate();},1);
      }
      else{
      }
    },[isPresenting])
    
    return null
  }

  return(
    <XR>
      <Controllers />
      <Hands />
      {props.children}
      {<UseXR />}
    </XR>
  )
  
}

const Screen = (props) =>{

  const [hovered, hover] = useState(false)
  const screeMaterial = useRef(null)
  const screenGeom = useRef(null)
  const screenRef = useRef(null)
  const screenObjRef = useRef(null)
  const defaultCurve = 0.001*ViewerConfig.baseUnit;
  const [yScalePerc,setYScalePerc] = useState(1);
  const [currMap,setCurrMap] = useState(null);
  const [currVis,setCurrVis] = useState(false);

  useEffect(()=>{
    if(props.isQuery === true){
      if(props.hasData && props.index != 0){
        new THREE.TextureLoader().load(props.src, (tex) => {
          tex.needsUpdate = true;
          setYScalePerc(tex.image.height / tex.image.width)
          tex.encoding = THREE.sRGBEncoding;
          setCurrMap(tex);
          setCurrVis(true);
          tex.dispose()
          invalidate();
        });
      }
    }else{
      if(props.hasData){
        new THREE.TextureLoader().load(props.src, (tex) => {
          tex.needsUpdate = true;
          setYScalePerc(tex.image.height / tex.image.width)
          tex.encoding = THREE.sRGBEncoding;
          setCurrMap(tex);
          setCurrVis(true);
          tex.dispose()
          invalidate();
        });
      }
      else{
        new Promise(function(resolve, reject) {
          resolve(createCanvasGridMaterial(THREE,'white',1920,1080,9,9,4).image.toDataURL("image/png"))
        }).then(function(result) { // (**)
          var tex = new THREE.Texture();
          var loadedImage = new Image();
          loadedImage.src = result;
          var thisImg = loadedImage;
          tex.image = thisImg;
          thisImg.onload = function () {
              tex.needsUpdate = true;
              setYScalePerc(tex.image.height / tex.image.width)
              tex.encoding = THREE.sRGBEncoding;
              setCurrMap(tex);
              setCurrVis(true);
              invalidate();
          };
        })
      }
    }
  },[props.src,props.hasData]) //props.src,props.hasData

  useEffect(()=>{ 
    screenObjRef.current.onValuesChange(newValues => {
      createPlaneCurve(THREE,screenGeom.current,newValues.curve)
    });
  },[screenRef])

  return(
  <e.mesh 
      theatreKey={props.name}
      name={props.name}
      onPointerOver={useCallback((e) => hover(true),[])}
      onPointerOut={useCallback((e) => hover(false),[])}
      ref={screenRef}
      objRef={screenObjRef}
      additionalProps={{ 
        curve: types.number(defaultCurve, {
          nudgeMultiplier: 0.001,
          range:[0.001,ViewerConfig.baseUnit]
        }),
      }} 
      visible={currVis}
      scale={props.hasData?[1*(props.width/props.fw),yScalePerc*(props.width/props.fw),1]:[1,yScalePerc,1]}
      position={props.hasData?
        [((props.x + props.width/2) - props.fw/2)/(props.fw)*ViewerConfig.baseUnit,
         ((props.fh/2 -(props.y + props.height/2))/(props.fh))*(props.fh/props.fw)*ViewerConfig.baseUnit,
         props.index*0.0005 * ViewerConfig.baseUnit]
        :
        [0,0,0]}
     >
      <planeGeometry ref={screenGeom} args={[ViewerConfig.baseUnit, ViewerConfig.baseUnit, 40, 40]} />
      <meshBasicMaterial 
          ref={screeMaterial}
          // depthTest={true}
          // depthWrite={false}
          side={THREE.DoubleSide}
          alphaTest ={0.0001}
          transparent={true}
          map={currMap}
          toneMapped={false}
          color={hovered ? (props.index === 0?'':'hotpink') : 'white'}
          />
  </e.mesh>
  )
}

const getProperScreen = (props) =>{
  return(
    <>
    {(props.figData.length != 0)?
      <>
        { props.figData.map(({ type,index,name,x,y,width,height,src}) => (
          
              <Screen  
                key={type + '-three-' + index} 
                src={src}
                name={name.replace(/\//g,`_`).replace(/\ /g,`_`).substring(0,24)+`_#${index}`}
                x={(index===0)?0:x}
                y={(index===0)?0:y}
                index={index}
                width={width}
                height={height}
                fw={props.figData[0].width}
                fh={props.figData[0].height}
                hasData={true}
                isQuery={props.isQuery}
                />
        ))}
        </>
      :

      <>
      {
        (props.isQuery === true)?
        <></> 
        :
        <Screen name={'Screen'} hasData={false}/>
      }
      </>
    }
    
    </>
  )
}

const Content = forwardRef((props,ref) =>{

  const cameraRef = useRef(null);
  const camraObjRef = useRef(null);
  const helperRef = useRef(sceneHelper)
  const [isXR,setIsXR] = useState(false);
  const {invalidate,scene,gl,camera} = useThree()
  
  useImperativeHandle(ref, () => ({
    saveImage: () => {
      scene.background = null;
      const w = props.mount.current.getParentRef().current.clientWidth;
      const h = props.mount.current.getParentRef().current.clientHeight;
      const savedImage = saveImageFromRenderer(w,h,Number(sceneHelper.value.quality),scene,gl,camera);
      scene.background = new THREE.Color(ViewerConfig.bgColor);
      return savedImage;
    },
  }));

  const getCamera = useRef({getParentRef: () => {return cameraRef }});
  const getCameraObj = useRef({getParentRef: () => {return camraObjRef }});


  useEffect(()=>{
    // const yScalePerc = (props.figData.length != 0)?props.figData[props.figData.length - 1].height/props.figData[props.figData.length - 1].width:(1080/1920);
    if(props.isQuery === true){
      console.log(props.queryLoadingProgress.split('/'))
      if(props.queryLoadingProgress.split('/').length === 2 && props.queryLoadingProgress.split('/')[0] === props.queryLoadingProgress.split('/')[1]){
        const yScalePerc = props.figData[0].height/props.figData[0].width;
        console.log('the screen aspect ratio is : ' + yScalePerc)
        helperSetting(scene,helperRef,yScalePerc);
        theatreStudioCameraHelperFixed(scene,invalidate)
      }
    }
    else{
      const yScalePerc = (props.figData.length != 0)?props.figData[0].height/props.figData[0].width:(1080/1920);
      console.log('the screen aspect ratio is : ' + yScalePerc)
      helperSetting(scene,helperRef,yScalePerc);
      theatreStudioCameraHelperFixed(scene,invalidate)
    }
  


  },[props.isQuery,props.queryLoadingProgress])

  return(
      <SheetProvider sheet={assetSheet}>
        {/* <color attach="background" args={[ViewerConfig.bgColor]} />  */}
        <ambientLight />
        <Camera 
          mount={props.mount}
          ref={cameraRef}
          objRef={camraObjRef}
          isXR={isXR}
          />
        <Orbit cameraObj={getCameraObj}/>
        {(props.isFigma === false)?
          (<XRContainer
            camera={getCamera} 
            cameraObj={getCameraObj} 
            gl={gl}
            isXRPresenting={
              (e)=>{setIsXR(e)}
            }>
            <SheetProvider sheet={assetSheet}>
              {getProperScreen(props)}
            </SheetProvider>
          </XRContainer>)
          :
          <>
            <SheetProvider sheet={assetSheet}>
              {getProperScreen(props)}
            </SheetProvider>
          </>
          }
      </SheetProvider>
  )
})

const XRViewerApp = () => {
  const mountRef = useRef(null);
  const contentRef = useRef(null);
  const imgLayoutRef = useRef(null);
  const getMount = useRef({getParentRef: () => {return mountRef }});

  const [figData,setFigData] = useState([]);
  const [isFigma, setIsFigma] = useState(false);
  const [isQuery,setIsQuery] = useState(false);
  const [isQueryLoading,setIsQueryLoading] = useState(false);
  const [queryLoadingProgress,setQueryLoadingProgress] = useState(`0`);

  interface CreateImageProps {
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>;
    image: number;
    message: any;
    name: string;
  }
  
  const CreateImage = useCallback(({event,image,message,name}:CreateImageProps) => {
    onCreateImage(event,image,message,name)
  },[figData]);

  interface DownloadImageProps {
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>;
    isServe: boolean;
    data: any;
    imageLayout: React.MutableRefObject<any>;
  }
  const DownloadImage = useCallback(({event,isServe,data,imageLayout}:DownloadImageProps) => {
    onDownloadImage(event,isServe,data,imageLayout);
  },[]);

  React.useEffect(() => {
    //init with data
    const parsedUrl = new URL(window.location.href);
    const fileKey = parsedUrl.searchParams.get('query_key');
    const nodeId = parsedUrl.searchParams.get('query_node');
    const token = parsedUrl.searchParams.get('query_token');



    console.log('fileKey is: ' + fileKey);
    console.log('nodeId is: ' + nodeId);
    console.log('token is: ' + token);

    // ## on saved static data(Download(Static))
    if(savedFigData != ''){
      console.log('init with saved data')
      setFigData(savedFigData)
      setIsFigma(false)
    }
    else{
      // ## load data with query string
      
      if(fileKey != null && nodeId != null){
        console.log('init with query data')
        
        const figmaApi = new FigmaApi({
          clientId: clientID,
          clientSecrete: secrectID,
          redirectUri: `${rootURL}callback.html`,
        });

        setIsQuery(true);
        setIsQueryLoading(true);

        if(token === 'auth_everytime'){
          figmaApi.getOAuth2Token().then(token => {
            syncFetchQueryFigmaJSON(token,fileKey,nodeId,
              (str)=>{
                setQueryLoadingProgress(str);
              },
              (arr)=>{
                savedFigData = arr;
                setFigData(savedFigData);
                console.log(savedFigData)
                setIsQueryLoading(false);
              }
            );
          });
        }
        else{
          syncFetchQueryFigmaJSON(token,fileKey,nodeId,
            (str)=>{
              setQueryLoadingProgress(str);
            },
            (arr)=>{
              savedFigData = arr;
              setFigData(savedFigData);
              console.log(savedFigData)
              setIsQueryLoading(false);
            }
          );
        }
        

      }
      else{
        console.log('init with empty data')
      }
      // ## empty grid screen
    }

    // ## on figma message(From figma plugin)
    window.onmessage = (event) => {
      //console.log(event.data.pluginMessage)
      if(event.data.pluginMessage != undefined){
        const { type, value } = event.data.pluginMessage;
        if(type === 'selection'){
          if (!value){
            return ()=>{}
          }
          savedFigData = value.data;
          for(var i=0;i<savedFigData.length;i++){
            let index = i;
            savedFigData[index].src = URL.createObjectURL(new Blob([savedFigData[index].imageData], { type: 'image/png' }));
            if(i === savedFigData.length - 1){
              console.log('init with figma data')
              setFigData(savedFigData)
              setIsFigma(value.isFigma)
            }
          }
        }

        if(type === 'failed'){
          if (!value){
            return ()=>{}
          }
        }
      }
    };
  }, []);

  return (
    <>
    <div className="webxr-previewer" id="webxr-previewer">
        <div className="img-layout" id="img-layout" ref={imgLayoutRef} >
            {figData.reverse().map(({ src,type,index,name }) => (
                  <img  key={type + '-' + index} 
                        src={src}
                        className={'img-imported'}
                        id={type + '-' + index}
                        name={name.replace(/\//g,`_`).replace(/\ /g,`_`).substring(0,24)+`_#${index}`}/>
            ))}
        </div>
        <div className="xr-container">
        {isFigma?
          <>
            <button className="xr-button" onClick={(e)=>{
              CreateImage({
                event:e,
                image:contentRef.current.saveImage(),
                message:'save-canvas-image',
                name:figData[0].name
              })}
            }>SaveToFigma</button>
            <button className="xr-button" onClick={(e)=>{DownloadImage({
              event:e,
              isServe:true,
              data:figData, //savedFigData
              imageLayout:imgLayoutRef.current
            })}}>Download(Serve)</button>
            <button className="xr-button" onClick={(e)=>{DownloadImage({
              event:e,
              isServe:false,
              data:figData, //savedFigData
              imageLayout:imgLayoutRef.current
            })}}>Download(Static)</button>
          </>:
          <>
            <XRButton className="xr-button" mode={'AR'} />
            <XRButton className="xr-button" mode={'VR'} />
          </>
        }
        </div>
        <div className="vis" ref={mountRef}>
          {(isQueryLoading)?
            <Spinner loadingProgress={`${queryLoadingProgress}`} hintText={` of total nodes is loaded`}></Spinner>
            :
            <Canvas frameloop="demand" gl={{
              preserveDrawingBuffer:true,
              outputEncoding:THREE.sRGBEncoding,
              antialias: true, 
              alpha: true,
              logarithmicDepthBuffer:true,
              }} >
                  <Content 
                    ref={contentRef} 
                    mount={getMount} 
                    isFigma={isFigma}
                    isQuery={isQuery}
                    queryLoadingProgress={queryLoadingProgress}
                    figData={figData.reverse()}
                  />
            </Canvas>
          }
        </div>
    </div>
    </>
  )
}
export default XRViewerApp;