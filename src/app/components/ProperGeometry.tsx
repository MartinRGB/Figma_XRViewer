import React,{useState,useRef,useEffect,useCallback} from 'react'
import * as THREE from 'three'
import { invalidate,useFrame,useLoader } from '@react-three/fiber'
import { editable as e} from '@theatre/r3f'
import { 
  createCanvasGridMaterial,createPlaneCurve
} from '@Utils/functions.js'; 
import { types } from '@theatre/core'
import { useHelper } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

const Model = (props) =>{
  const modelGroupRef = useRef(null)
  const modelRef = useRef(null)
  const modelSheetObj = useRef(null)
  const [yScalePerc,setYScalePerc] = useState(1);
  const [modelScalePerc,setModelScalePer] = useState(1);
  const [currVis,setCurrVis] = useState(false);
  const gltfRef = useRef(null);
  const gltf = useLoader(GLTFLoader, `${props.modelSrc}`,(loader) => {
    console.log('finsihed model loading from:' + props.modelSrc)
    const dracoLoader = new DRACOLoader();
    // todo
    dracoLoader.setDecoderPath('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/');
    loader.setDRACOLoader(dracoLoader);
  })
  const mixerRef = useRef(new THREE.AnimationMixer(gltf.scene));
  
  const storeHoverOrigColor = (sceneObj) =>{
    sceneObj.traverse(function (child) {
      if(child.hasOwnProperty('material')){
        if(!child.material.userData.hasOwnProperty('originalColor')){
          child.material.userData.originalColor = child.material.color;
        }
      }
    });
  }

  const onHoverIn = (e,sceneObj) =>{
    sceneObj.traverse(function (child) {
      if(child.hasOwnProperty('material')){
        child.material.color = {isColor: true, r: 1, g: 0.1412632911304446, b: 0.45641102317066595}; //hotpink
      }
    });
  }


  const onHoverOut = (e,sceneObj) =>{
    sceneObj.traverse(function (child) {
      if(child.hasOwnProperty('material')){
        child.material.color = child.material.userData.originalColor
      }
    });
  }

  useEffect(()=>{
    if(props.hasData && props.index != 0){
      const box = new THREE.Box3().setFromObject( modelRef.current );
      const bX = box.max.x - box.min.x;
      setModelScalePer(1/bX*props.baseUnit);
      storeHoverOrigColor(modelRef.current);
      setCurrVis(true);
      console.log(`finsihed data setting`)

    }

    gltf.animations.forEach(clip => mixerRef.current.clipAction(clip).play())

  },[props.src,props.hasData]) //props.src,props.hasData

  useFrame((state, delta) => {
    mixerRef?.current?.update(delta)
    invalidate();
  })

  return (
    
    <e.group 
      // todo chara fix
      theatreKey={
        props.name
      }
      name={
        props.name
      }
      onPointerOver={useCallback((e) => (onHoverIn(e,modelRef.current)),[])}
      onPointerOut={useCallback((e) => {onHoverOut(e,modelRef.current)},[])}
      ref={modelGroupRef}
      objRef={modelSheetObj}
      visible={currVis}
      scale={currVis?[modelScalePerc*(props.width/props.fw),modelScalePerc*(props.width/props.fw),modelScalePerc*(props.width/props.fw)]:[1,1,1]}
      position={
        [((props.x + props.width/2) - props.fw/2)/(props.fw)*props.baseUnit,
        ((props.fh/2 -(props.y + props.height/2))/(props.fh))*(props.fh/props.fw)*props.baseUnit,
        props.index*0.0005 * props.baseUnit]}
    
    >
      <primitive ref={modelRef} object={gltf.scene} />
    </e.group>
  )
}

const Screen = (props) =>{

  const [hovered, hover] = useState(false)
  const screeMaterial = useRef(null)
  const screenGeom = useRef(null)
  const screenRef = useRef(null)
  const screenSheetObj = useRef(null)
  const defaultCurve = 0;
  const [yScalePerc,setYScalePerc] = useState(1);
  const [currMap,setCurrMap] = useState(null);
  const [currVis,setCurrVis] = useState(false);
  

  const setupTexture = useCallback((tex) =>{
    tex.needsUpdate = true;
    setYScalePerc(tex.image.height / tex.image.width)
    tex.encoding = THREE.sRGBEncoding;
    setCurrMap(tex);
    setCurrVis(true);
    tex.dispose()
    invalidate();
  },[])

  useEffect(()=>{

    if(props.isQuery === true){
      if(props.hasData && props.index != 0){
        new THREE.TextureLoader().load(props.src, (tex) => {
          setupTexture(tex)
        });
      }
    }else{
      if(props.hasData){
        new THREE.TextureLoader().load(props.src, (tex) => {
          setupTexture(tex)
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
            setupTexture(tex)
          };
        })
      }
    }
  },[props.src,props.hasData]) //props.src,props.hasData

  useEffect(()=>{ 
    screenSheetObj.current.onValuesChange(newValues => {
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
      objRef={screenSheetObj}
      additionalProps={{ 
        curve: types.number(defaultCurve, {
          nudgeMultiplier: 0.01,
          range:[0,props.baseUnit]
        }),
      }} 
      visible={currVis}
      scale={props.hasData?[1*(props.width/props.fw),yScalePerc*(props.width/props.fw),1]:[1,yScalePerc,1]}
      position={props.hasData?
        [((props.x + props.width/2) - props.fw/2)/(props.fw)*props.baseUnit,
         ((props.fh/2 -(props.y + props.height/2))/(props.fh))*(props.fh/props.fw)*props.baseUnit,
         props.index*0.0005 * props.baseUnit]
        :
        [0,0,0]}
     >
      <planeGeometry ref={screenGeom} args={[props.baseUnit, props.baseUnit, 40, 40]} />
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

interface ProperScreenProps {
  figmaData:any;
  isQuery:boolean;
  baseUnit:number;
  isFigma:boolean;
}

const ProperGeometry = ({figmaData,isFigma,isQuery,baseUnit}:ProperScreenProps) =>{
  return(
    <>
    {(figmaData.length != 0)?
      <>
        { figmaData.map(({ type,index,name,x,y,width,height,src,modelSrc}) => (
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
          fw={figmaData[0].width}
          fh={figmaData[0].height}
          hasData={true}
          isFigma={isFigma}
          isQuery={isQuery}
          baseUnit={baseUnit}
          modelSrc={modelSrc}
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
            fw={figmaData[0].width}
            fh={figmaData[0].height}
            hasData={true}
            isQuery={isQuery}
            baseUnit={baseUnit}
            />
        ))}
      </>
      :

      <>
      {
        (isQuery === true)?
        <></> 
        :
        <Screen name={'Screen'} hasData={false} baseUnit={baseUnit}/>
      }
      </>
    }
    
    </>
  )
}

export default ProperGeometry;