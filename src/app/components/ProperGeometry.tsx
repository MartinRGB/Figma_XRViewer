import React,{useState,useRef,useEffect,useCallback, useContext} from 'react'
import * as THREE from 'three'
import { invalidate,useFrame,useLoader, useThree } from '@react-three/fiber'
import { editable as e, SheetProvider} from '@theatre/r3f'
import { 
  createCanvasGridMaterial,createPlaneCurve
} from '@Utils/threeHelper'; 
import { getProject, types } from '@theatre/core'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js'
import { nginxDecoderPath, nginxTestPath } from '@Config';
import { Select,TransformControls,AdaptiveEvents,AdaptiveDpr, Detailed  } from '@react-three/drei';
import { TheatreSelectContext } from './TheatreSelectContext';
import { testNginxServerExist } from '@Utils/nginxTest';
import {nginxDirLink,isTextureEditor} from '@Config'
import { TextureLoader } from 'three';

// todo loader should test only once
// let dracoloader;
// let ktx2Loader;
// testNginxServerExist(
//   ()=>{
//     const DecoderPath = nginxDecoderPath;
//     dracoloader = new DRACOLoader().setDecoderPath(`${DecoderPath}/draco/gltf/`)
//     ktx2Loader = new KTX2Loader().setTranscoderPath(`${DecoderPath}/basis/`)
//     dracoloader.preload()
//     console.log('decoderPath is ' + DecoderPath);
//   },
//   ()=>{
//     const DecoderPath = `https://unpkg.com/three@0.${THREE.REVISION}.x/examples/js/libs`;
//     dracoloader = new DRACOLoader().setDecoderPath(`${DecoderPath}/draco/gltf/`)
//     ktx2Loader = new KTX2Loader().setTranscoderPath(`${DecoderPath}/basis/`)
//     dracoloader.preload()
//     console.log('decoderPath is ' + DecoderPath);
//   }
// )

const Model = (props) =>{
  const modelGroupRef = useRef(null)
  const modelRef = useRef(null)
  const modelSheetObj = useRef(null)
  const [yScalePerc,setYScalePerc] = useState(1);
  const [modelScalePerc,setModelScalePer] = useState(1);
  const [currVis,setCurrVis] = useState(false);
  const {invalidate,scene,gl,camera} = useThree()
  const stateGeoProps = props.stateData?.sheetsById?.NodeTree?.staticOverrides?.byObject[`${props.name}`];

  const gltf = useLoader(GLTFLoader, `${props.modelSrc}`,(loader) => {
    console.log('finsihed model loading from:' + props.modelSrc)
    // loader.setDRACOLoader(dracoloader);
    // loader.setKTX2Loader(ktx2Loader);
    // todo loader should test only once
    testNginxServerExist(
      ()=>{
        const DecoderPath = nginxDecoderPath;
        const dracoloader = new DRACOLoader().setDecoderPath(`${DecoderPath}/draco/gltf/`)
        const ktx2Loader = new KTX2Loader().setTranscoderPath(`${DecoderPath}/basis/`)
        dracoloader.preload()
        console.log('decoderPath is ' + DecoderPath);
        loader.setDRACOLoader(dracoloader);
        loader.setKTX2Loader(ktx2Loader);

      },
      ()=>{
        const DecoderPath = `https://unpkg.com/three@0.${THREE.REVISION}.x/examples/js/libs`;
        const dracoloader = new DRACOLoader().setDecoderPath(`${DecoderPath}/draco/gltf/`)
        const ktx2Loader = new KTX2Loader().setTranscoderPath(`${DecoderPath}/basis/`)
        dracoloader.preload()
        console.log('decoderPath is ' + DecoderPath);
        loader.setDRACOLoader(dracoloader);
        loader.setKTX2Loader(ktx2Loader);

      }
    )

  })

  useEffect(()=>{
    if(gltf){
      gltf.scene.traverse( function ( child ) {

        if ( child.material ) {

            // do something with child.material
            if(child.material.map){
              child.material.map.dispose()
              child.material.dispose()
            }
        }
        if ( child.geometry){
            child.geometry.dispose()
        }

      });
    }
  },[gltf])

  const mixerRef = useRef(new THREE.AnimationMixer(gltf.scene));
  useEffect(()=>{
    if(props.hasData && props.index != 0){
      const box = new THREE.Box3().setFromObject( modelRef.current );
      const bX = box.max.x - box.min.x;
      setModelScalePer(1/bX*props.baseUnit);
      storeHoverOrigColor(modelRef.current);
      setCurrVis(true);
      console.log(`finsihed data setting`)
      console.log(modelRef.current)
    }
    gltf.animations.forEach(clip => mixerRef.current.clipAction(clip).play())
  },[props.src,props.hasData]) //props.src,props.hasData

  useFrame((state, delta) => {
    mixerRef?.current?.update(delta)
    invalidate();
  })

  useEffect(()=>{ 
    modelSheetObj.current.onValuesChange(newValues => {
      if(boxHelperRef.current) boxHelperRef.current.update()
    });
  },[modelGroupRef])
  
  const [hovered,hover] = useState(false);
  const [selected, setSelected] = React.useState([])
  const active = selected[0]

  const storeHoverOrigColor = (sceneObj) =>{
    sceneObj.traverse(function (child) {
      if(child.hasOwnProperty('material')){
        if(!child.material.userData.hasOwnProperty('originalColor')){
          child.material.userData.originalColor = child.material.color;
        }
      }
    });
  }

  // on Canvas Select
  useEffect(() => {
    if(active != undefined){
      //if(props.orbitRef.current) props.orbitRef.current.enabled  = false
      window.studio.setSelection([modelSheetObj.current])
      props.selectCallback(props.index)
    }
    else{
      //if(props.orbitRef.current) props.orbitRef.current.enabled  = true
      //window.studio.setSelection([])
    }
  },[active])

  // on Studio Select 
  useEffect(() => {
    window.studio.onSelectionChange((newSelection) => {
      //console.log(newSelection) // [ISheetObject, ISheet]
      if(window.studio.selection.length !=0 && window.studio.selection[0].address.objectKey ===  props.name){
        console.log('selected name is ' + props.name);
        //setSelected([screenRef.current])
        if(active === undefined){setSelected([modelGroupRef.current])}
      }
      else{
        setSelected([])
      }
    })
  },[])

  // on Select Move Mouse up & drag
  const onSelectTransformControl = () =>{
    window.studio.transaction(({ set }) => {
      set(modelSheetObj.current.props.position.x, modelGroupRef.current.position.x)
      set(modelSheetObj.current.props.position.y, modelGroupRef.current.position.y)
      set(modelSheetObj.current.props.position.z, modelGroupRef.current.position.z)
      set(modelSheetObj.current.props.rotation.x, modelGroupRef.current.rotation.x)
      set(modelSheetObj.current.props.rotation.y, modelGroupRef.current.rotation.y)
      set(modelSheetObj.current.props.rotation.z, modelGroupRef.current.rotation.z)
      set(modelSheetObj.current.props.scale.x,    modelGroupRef.current.scale.x)
      set(modelSheetObj.current.props.scale.y,    modelGroupRef.current.scale.y)
      set(modelSheetObj.current.props.scale.z,    modelGroupRef.current.scale.z)
    })
  }

  // disable orbit when drag
  const controlRef = useRef()
  useEffect(() => {
    if (controlRef.current) {
      const controls = controlRef.current
      const callback = (event) => {props.orbitRef.current.enabled = !event.value}
      controls.addEventListener("dragging-changed", callback)
      return () => controls.removeEventListener("dragging-changed", callback)
    }
  })

  // hintbox
  const [isShowHint,setIsShowHint] = useState(false);
  const boxHelperRef = useRef(null);
  const showHint = () =>{
    modelRef.current.traverse(function (child) {
      if(child.hasOwnProperty('material')){
        child.material.color = {isColor: true, r: 1, g: 0.1412632911304446, b: 0.45641102317066595}; //hotpink
      }
    });
  }
  const hideHint = () =>{
    if(modelRef.current){
      modelRef.current.traverse(function (child) {
        if(child.hasOwnProperty('material')){
          child.material.color = child.material.userData.originalColor
        }
      });
    }
  }
  const addBoxHelper = () =>{
    if(boxHelperRef.current === null) {
      boxHelperRef.current = new THREE.BoxHelper( modelGroupRef.current, 'hotpink' );
      scene.add( boxHelperRef.current );
    }
  }
  const removeBoxHelper = () =>{
    scene.remove( boxHelperRef.current );
    boxHelperRef.current = null;
  }
  useEffect(() => {
    if(active){
      setIsShowHint(true)
      //showHint()
    }
    else{
      if(hovered){
        setIsShowHint(true)
        // showHint();
        // addBoxHelper();
      }
      else{
        setIsShowHint(false)
        // hideHint();
        // removeBoxHelper();
      }
    }
  },[active,hovered])

  useEffect(() => {
    if(isShowHint){
      showHint();
      addBoxHelper();
    }
    else{
      hideHint();
      removeBoxHelper();
    }
  },[isShowHint])

  // transform mode
  const [tMode,setTMode] = useState(0);
  const changeTMode = (e) =>{
    if(controlRef.current){
      e.stopPropagation();
      let modeVal = tMode + 1;
      setTMode((modeVal < 3)?modeVal:0)
    }
  }

  return (
    <>
    {active && <TransformControls object={active}  ref={controlRef}  mode={['translate','rotate','scale'][tMode]}
    onMouseUp={(e)=>{
      if(boxHelperRef.current) boxHelperRef.current.update()
      onSelectTransformControl()}}
    onChange={(e)=>{
      if(boxHelperRef.current) boxHelperRef.current.update()
      onSelectTransformControl()}}
    />}
    <Select box onChange={(e)=>{
      if(e.length != 0){
        setSelected([modelGroupRef.current])
      }
      else{
        setSelected(e)
      }
      }}>
      <e.group 
        // todo chara fix
        theatreKey={props.name}
        name={props.name}
        onPointerOver={useCallback((e) => {e.stopPropagation();hover(true)},[])}
        onPointerOut={useCallback((e) => {e.stopPropagation();hover(false)},[])}
        onPointerDown = {useCallback((e) => {e.stopPropagation()},[])}
        onContextMenu={(e) => {e.stopPropagation();changeTMode(e);}}
        ref={modelGroupRef}
        objRef={modelSheetObj}
        visible={currVis}
        // scale={currVis?[modelScalePerc*(props.width/props.frameWidth),modelScalePerc*(props.width/props.frameWidth),modelScalePerc*(props.width/props.frameWidth)]:[1,1,1]}
        scale={
          (stateGeoProps && stateGeoProps.scale)?
          [stateGeoProps.scale.x,stateGeoProps.scale.y,stateGeoProps.scale.z]
          :
          [1,1,1]}
        position={
          (stateGeoProps && stateGeoProps.position)?
          [stateGeoProps.position.x,stateGeoProps.position.y,stateGeoProps.position.z]
          :
          [((props.x + props.width/2) - props.frameWidth/2)/(props.frameWidth)*props.baseUnit,
          ((props.frameHeight/2 -(props.y + props.height/2))/(props.frameHeight))*(props.frameHeight/props.frameWidth)*props.baseUnit,
          props.index*0.0005 * props.baseUnit]
        }
        rotation={
          (stateGeoProps && stateGeoProps.rotation)?
          [stateGeoProps.rotation.x,stateGeoProps.rotation.y,stateGeoProps.rotation.z]
          :
          [0,0,0]}
        // position={
        //   [((props.x + props.width/2) - props.frameWidth/2)/(props.frameWidth)*props.baseUnit,
        //   ((props.frameHeight/2 -(props.y + props.height/2))/(props.frameHeight))*(props.frameHeight/props.frameWidth)*props.baseUnit,
        //   props.index*0.0005 * props.baseUnit]}
      >
        <primitive 
          ref={modelRef} 

          scale={currVis?[modelScalePerc*(props.width/props.frameWidth),modelScalePerc*(props.width/props.frameWidth),modelScalePerc*(props.width/props.frameWidth)]:[1,1,1]} 
          object={gltf.scene} />
      </e.group>
    </Select>
    </>
  )
}

const Screen = (props) =>{

  const [isShowHint,setIsShowHint] = useState(false);
  const screeMaterial = useRef(null)
  const screenGeom = useRef(null)
  const screenRef = useRef(null)
  const screenSheetObj = useRef(null)

  const [yScalePerc,setYScalePerc] = useState(1);
  const [currMap,setCurrMap] = useState(null);
  const [currVis,setCurrVis] = useState(false);
  const {invalidate,scene,gl,camera} = useThree()

  const stateGeoProps = props.stateData?.sheetsById?.NodeTree?.staticOverrides?.byObject[`${props.name + ' / geometry'}`];
  const stateMatProps = props.stateData?.sheetsById?.NodeTree?.staticOverrides?.byObject[`${props.name + ' / material'}`];
  const defaultCurve =   (stateGeoProps && stateGeoProps.curve)?stateGeoProps.curve:0;

  // console.log(stateGeoProps)
  // console.log(stateMatProps)

  const currMapSrc = useRef({src:'',fileName:''});

  const setupTexture = useCallback((tex) =>{
    tex.needsUpdate = true;
    setYScalePerc(tex.image.height / tex.image.width)
    tex.encoding = THREE.sRGBEncoding;
    setCurrMap(tex);
    setCurrVis(true);
    tex.dispose()
    screenGeom.current.dispose();
    screeMaterial.current.dispose();
    invalidate();
  },[])

  useEffect(()=>{

    // #### query data without theatreJS mapSrc
    //query data
    if(!isTextureEditor){
      if(props.isQuery === true){
        if(props.hasData){
          new THREE.TextureLoader().load(props.src, (tex) => {
            setupTexture(tex)
          });
        }
      }else{
        // figma or static data
        if(props.hasData){
          new THREE.TextureLoader().load(props.src, (tex) => {
            setupTexture(tex)
          });
        }
        // empty data
        else{
          new Promise(function(resolve, reject) {
            resolve(createCanvasGridMaterial('white',1920,1080,9,9,4).image.toDataURL("image/png"))
          }).then(function(result) { // (**)
            var tex = new THREE.Texture();
            var loadedImage = new Image();
            loadedImage.src = result;
            var thisImg = loadedImage;
            tex.image = thisImg;
            thisImg.onload = function () {
              setupTexture(tex)
              tex.dispose();
              screenGeom.current.dispose();
              screeMaterial.current.dispose();
            };
          })
        }
      }
    }
    // #### query data without theatreJS mapSrc
    //query data
    if(isTextureEditor){
      const loadTexfromMapSrc = (url) =>{
        var img = new Image();
        img.src = url;
        img.onload = function() { 
          setYScalePerc(img.height/img.width)
          img = null;
        }

        fetch(url)
        .then(res => {
            return res.blob()
          }
        )
        .then(
          result => {
            var blobUrl = URL.createObjectURL(new Blob([result]));
            currMapSrc.current = ({src:blobUrl,fileName:`${props.name.split('-')[1]}.png`})
            setCurrVis(true);
            invalidate();
            blobUrl = null;
          }
        ) 
      }

      if(props.isQuery === true){
        if(props.hasData){
          loadTexfromMapSrc(props.src)
        }
      }else{
        // figma or static data
        if(props.hasData){
          loadTexfromMapSrc(props.src)
        }
        // empty data
        else{
          new Promise(function(resolve, reject) {
            resolve(createCanvasGridMaterial('white',1920,1080,9,9,4).image.toDataURL("image/png"))
          }).then(function(result) { // (**)
            loadTexfromMapSrc(result)
          })
        }
      }
    }

  },[props.src,props.hasData]) //props.src,props.hasData


  //console.log(props.stateData.sheetsById.NodeTree.staticOverrides.byObject['#2-Abstract_Gradient_1_1'])
  // if(props.stateData){
  //   for(let i = 0; i < props.stateData.sheetsById.NodeTree.staticOverrides.byObject.length; i++){
  //     console.log(props.stateData.sheetsById.NodeTree.staticOverrides.byObject[i])
  //     // if(props.stateData.sheetsById.NodeTree.staticOverrides.byObject[i].objectKey === props.name){
  //     //   console.log(props.stateData.sheetsById.NodeTree.staticOverrides.byObject[i])
  //     // }
  //   }
  // }


  useEffect(()=>{ 
    screenSheetObj.current.onValuesChange(newValues => {
      createPlaneCurve(screenGeom.current,newValues.curve)
      if(boxHelperRef.current) boxHelperRef.current.update()
    });
  },[screenRef])

  const [hovered, hover] = useState(false)
  const [selected, setSelected] = React.useState([])
  const active = selected[0]

  // on Canvas Select
  useEffect(() => {
    if(active != undefined){
      console.log(active)
      //if(props.orbitRef.current) props.orbitRef.current.enabled  = false
      window.studio.setSelection([screenSheetObj.current])
      props.selectCallback(props.index);
    }
    else{
      //if(props.orbitRef.current) props.orbitRef.current.enabled  = true
      //window.studio.setSelection([])
    }
  },[active])

  // on Studio Select 
  useEffect(() => {
    window.studio.onSelectionChange((newSelection) => {
      const seletObjKeyName = isTextureEditor?(props.name + ' / geometry'):props.name;
      if(window.studio.selection.length !=0 && window.studio.selection[0].address.objectKey === seletObjKeyName){
        if(active === undefined){setSelected([screenRef.current])}
      }
      else{
        setSelected([])
      }
    })
  },[])
  
  // on Select Move Mouse up & drag
  const onSelectTransformControl = () =>{
    window.studio.transaction(({ set }) => {
      set(screenSheetObj.current.props.position.x, screenRef.current.position.x)
      set(screenSheetObj.current.props.position.y, screenRef.current.position.y)
      set(screenSheetObj.current.props.position.z, screenRef.current.position.z)
      set(screenSheetObj.current.props.rotation.x, screenRef.current.rotation.x)
      set(screenSheetObj.current.props.rotation.y, screenRef.current.rotation.y)
      set(screenSheetObj.current.props.rotation.z, screenRef.current.rotation.z)
      set(screenSheetObj.current.props.scale.x,    screenRef.current.scale.x)
      set(screenSheetObj.current.props.scale.y,    screenRef.current.scale.y)
      set(screenSheetObj.current.props.scale.z,    screenRef.current.scale.z)
    })
  }

  // disable orbit when drag
  const controlRef = useRef()
  useEffect(() => {
    if (controlRef.current) {
      const controls = controlRef.current
      const callback = (event) => {props.orbitRef.current.enabled = !event.value}
      controls.addEventListener("dragging-changed", callback)
      return () => controls.removeEventListener("dragging-changed", callback)
    }
  })

  // hintbox
  const boxHelperRef = useRef(null);
  const addBoxHelper = () =>{
    if(boxHelperRef.current === null) {
      boxHelperRef.current = new THREE.BoxHelper( screenRef.current, 'hotpink' );
      scene.add( boxHelperRef.current );
    }
  }
  const removeBoxHelper = () =>{
    scene.remove( boxHelperRef.current );
    boxHelperRef.current = null;
  }
  
  useEffect(() => {
    if(active){
      setIsShowHint(true)
      //showHint()
    }
    else{
      if(hovered){
        setIsShowHint(true)
        // showHint();
        // addBoxHelper();
      }
      else{
        setIsShowHint(false)
        // hideHint();
        // removeBoxHelper();
      }
    }
  },[active,hovered])

  useEffect(() => {
    if(isShowHint){
      addBoxHelper();
    }
    else{
      removeBoxHelper();
    }
  },[isShowHint])

  // transform mode
  const [tMode,setTMode] = useState(0);
  const changeTMode = (e) =>{
    if(controlRef.current){
      let modeVal = tMode + 1;
      setTMode((modeVal < 3)?modeVal:0)
    }
  }

  return(
    <>
      {active && <TransformControls object={active} name={'controls'} ref={controlRef} mode={['translate','rotate','scale'][tMode]}
        onMouseUp={(e)=>{
          if(boxHelperRef.current) boxHelperRef.current.update()
          onSelectTransformControl()}}
        onChange={(e)=>{
          if(boxHelperRef.current) boxHelperRef.current.update()
          onSelectTransformControl()}}
      />}
      <Select box onChange={(e)=>{setSelected(e)}}>
        <e.mesh 
            theatreKey={ isTextureEditor?(props.name  + ' / geometry'):props.name }
            name={props.name}
            onPointerOver={useCallback((e) => {e.stopPropagation();hover(true)},[])}
            onPointerOut={useCallback((e) => {e.stopPropagation();hover(false)},[])}
            onContextMenu={(e) => {e.stopPropagation();changeTMode(e);}}
            ref={screenRef}
            objRef={screenSheetObj}
            additionalProps={{ 
              curve: types.number(defaultCurve, {
                nudgeMultiplier: props.baseUnit/100,
                range:[0,props.baseUnit]
              }),
            }} 
            visible={currVis}
            // scale={props.hasData?[1*(props.width/props.frameWidth),yScalePerc*(props.width/props.frameWidth),1]:[1,yScalePerc,1]}
            scale={
              (stateGeoProps && stateGeoProps.scale)?
              [stateGeoProps.scale.x,stateGeoProps.scale.y,stateGeoProps.scale.z]
              :
              [1,1,1]}
            position={
              (stateGeoProps && stateGeoProps.position)?
              [stateGeoProps.position.x,stateGeoProps.position.y,stateGeoProps.position.z]
              :
              props.hasData?
              [((props.x + props.width/2) - props.frameWidth/2)/(props.frameWidth)*props.baseUnit,
              ((props.frameHeight/2 -(props.y + props.height/2))/(props.frameHeight))*(props.frameHeight/props.frameWidth)*props.baseUnit,
              props.index*0.0005 * props.baseUnit]
              :
              [0,0,0]
            
            }
            rotation={
              (stateGeoProps && stateGeoProps.rotation)?
              [stateGeoProps.rotation.x,stateGeoProps.rotation.y,stateGeoProps.rotation.z]
              :
              [0,0,0]}
          >
            {/* <planeGeometry ref={screenGeom} args={[props.baseUnit, props.baseUnit, 40, 40]} /> */}
            <planeGeometry ref={screenGeom} args={[
              props.hasData?
                props.baseUnit*(props.width/props.frameWidth)
                :
                props.baseUnit,
              props.hasData?
                props.baseUnit*yScalePerc*(props.width/props.frameWidth)
                :
                props.baseUnit*yScalePerc, 
            40, 40]} />
            {isTextureEditor?
                <e.meshStandardMaterial 
                theatreKey={props.name + ' / material'}
                ref={screeMaterial}
                alphaTest ={0.1}
                mapSrc={currMapSrc.current}
                toneMapped={false}
                color={isShowHint ? 'hotpink' : 'white'} />
                : 
                <meshBasicMaterial 
                ref={screeMaterial}
                side={THREE.DoubleSide}
                // depthTest={true}
                // depthWrite={false}
                alphaTest ={0.1}
                transparent={true}
                map={currMap}
                toneMapped={false}
                color={isShowHint ? 'hotpink' : 'white'} //hovered
                /> 
              }

        </e.mesh>
      </Select>
    </>
  )
}

interface ProperScreenProps {
  figmaData:any;
  stateData?:any;
  isQuery:boolean;
  isFigma:boolean;
  baseUnit:number;
  orbitRef:React.MutableRefObject<any>;
  selectCallback:(e:any) => void;
}

const ProperGeometry = ({figmaData,stateData,isFigma,isQuery,baseUnit,orbitRef,selectCallback}:ProperScreenProps) =>{
  return(
    <>
    <SheetProvider sheet={getProject('XRViewer').sheet('NodeTree','Controller')}>
    {(figmaData.length != 0)?
      <>
        { figmaData.map(({ type,index,name,x,y,width,height,frameWidth,frameHeight,src,modelSrc}) => (
          (modelSrc != null)?
          <Model  
          key={type + '-three-' + index} 
          src={src}
          name={`#${index}-`+name.split('/')[name.split('/').length-1].substring(0,24)}
          x={(index===0)?0:x}
          y={(index===0)?0:y}
          index={index}
          width={width}
          height={height}
          // frameWidth={figmaData[0].width}
          // frameHeight={figmaData[0].height}
          frameWidth={frameWidth}
          frameHeight={frameHeight}
          hasData={true}
          isFigma={isFigma}
          isQuery={isQuery}
          stateData={stateData}
          baseUnit={baseUnit}
          modelSrc={modelSrc}
          orbitRef={orbitRef}
          selectCallback={(e)=>{selectCallback(e);}}
          />
          :
          <Screen  
            key={type + '-three-' + index} 
            src={src}
            name={`#${index}-`+name.replace(/\//g,`_`).replace(/\ /g,`_`).substring(0,24)}
            x={(index===0)?0:x}
            y={(index===0)?0:y}
            index={index}
            width={width}
            height={height}
            // fw={figmaData[0].width}
            // fh={figmaData[0].height}
            frameWidth={frameWidth}
            frameHeight={frameHeight}
            hasData={true}
            isQuery={isQuery}
            stateData={stateData}
            baseUnit={baseUnit}
            orbitRef={orbitRef}
            selectCallback={(e)=>{selectCallback(e);}}
            />
        ))}
      </>
      :

      <>
      {
        (isQuery === true)?
        <></> 
        :
        <Screen name={'Screen'} hasData={false} baseUnit={baseUnit} orbitRef={orbitRef} selectCallback={(e)=>{selectCallback(e);}}/>
      }
      </>
    }
    </SheetProvider>
    </>
  )
}

export default ProperGeometry;