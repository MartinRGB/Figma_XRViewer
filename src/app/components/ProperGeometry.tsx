import React,{useState,useRef,useEffect,useCallback} from 'react'
import * as THREE from 'three'
import { invalidate,useFrame,useLoader, useThree } from '@react-three/fiber'
import { editable as e} from '@theatre/r3f'
import { 
  createCanvasGridMaterial,createPlaneCurve
} from '@Utils/threeHelper'; 
import { types } from '@theatre/core'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js'
import { isDecoderFromLoacl } from '@Config';
import { useHelper,Select,TransformControls } from '@react-three/drei';
import { BoxHelper, Object3D } from 'three'
import { TransformControls as TransformControlsImpl, OrbitControls as OrbitControlsImpl } from 'three-stdlib'

let dracoloader;
let ktx2Loader;
if(isDecoderFromLoacl){
  const decoderPath = `https://172.22.0.20:8222/service_1/decoder`
  dracoloader = new DRACOLoader().setDecoderPath(`${decoderPath}/draco/gltf/`)
  ktx2Loader = new KTX2Loader().setTranscoderPath(`${decoderPath}/basis/`)
  dracoloader.preload()
}
else{
  const THREE_PATH = `https://unpkg.com/three@0.${THREE.REVISION}.x`;
  dracoloader = new DRACOLoader().setDecoderPath(`${THREE_PATH}/examples/js/libs/draco/gltf/`)
  ktx2Loader = new KTX2Loader().setTranscoderPath(`${THREE_PATH}/examples/js/libs/basis/`)
  dracoloader.preload()
}


const Model = (props) =>{
  const modelGroupRef = useRef(null)
  const modelRef = useRef(null)
  const modelSheetObj = useRef(null)
  const [yScalePerc,setYScalePerc] = useState(1);
  const [modelScalePerc,setModelScalePer] = useState(1);
  const [currVis,setCurrVis] = useState(false);
  const {invalidate,scene,gl,camera} = useThree()
  const gltfRef = useRef(null);
  const gltf = useLoader(GLTFLoader, `${props.modelSrc}`,(loader) => {
    console.log('finsihed model loading from:' + props.modelSrc)
    loader.setDRACOLoader(dracoloader);
    loader.setKTX2Loader(ktx2Loader);
  })
  const mixerRef = useRef(new THREE.AnimationMixer(gltf.scene));

  const boxHelperRef = useRef(null);
  
  const storeHoverOrigColor = (sceneObj) =>{
    sceneObj.traverse(function (child) {
      if(child.hasOwnProperty('material')){
        if(!child.material.userData.hasOwnProperty('originalColor')){
          child.material.userData.originalColor = child.material.color;
        }
      }
    });
    
  }

  const onHoverIn = (e) =>{
    e.stopPropagation()
    modelRef.current.traverse(function (child) {
      if(child.hasOwnProperty('material')){
        child.material.color = {isColor: true, r: 1, g: 0.1412632911304446, b: 0.45641102317066595}; //hotpink
      }
    });
    
    boxHelperRef.current = new THREE.BoxHelper( modelGroupRef.current, 0xff0000 );
    scene.add( boxHelperRef.current );
  }


  const onHoverOut = (e) =>{
    e.stopPropagation()
    modelRef.current.traverse(function (child) {
      if(child.hasOwnProperty('material')){
        child.material.color = child.material.userData.originalColor
      }
    });
    scene.remove( boxHelperRef.current );
    boxHelperRef.current=null;
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
        onPointerOver={useCallback((e) => (onHoverIn(e)),[])}
        onPointerOut={useCallback((e) => {onHoverOut(e)},[])}
        ref={modelGroupRef}
        objRef={modelSheetObj}
        visible={currVis}
        scale={currVis?[modelScalePerc*(props.width/props.frameWidth),modelScalePerc*(props.width/props.frameWidth),modelScalePerc*(props.width/props.frameWidth)]:[1,1,1]}
        position={
          [((props.x + props.width/2) - props.frameWidth/2)/(props.frameWidth)*props.baseUnit,
          ((props.frameHeight/2 -(props.y + props.height/2))/(props.frameHeight))*(props.frameHeight/props.frameWidth)*props.baseUnit,
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
  const {invalidate,scene,gl,camera} = useThree()

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
      // if(props.hasData && props.index != 0){
      //   new THREE.TextureLoader().load(props.src, (tex) => {
      //     setupTexture(tex)
      //   });
      // }

      if(props.hasData){
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
          resolve(createCanvasGridMaterial('white',1920,1080,9,9,4).image.toDataURL("image/png"))
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
      createPlaneCurve(screenGeom.current,newValues.curve)
    });
  },[screenRef])

  const boxHelperRef = useRef(null);

  const onHoverIn = (e) =>{
    e.stopPropagation()
    hover(true)
    boxHelperRef.current = new THREE.BoxHelper( screenRef.current, 0xff0000 );
    scene.add( boxHelperRef.current );
  }


  const onHoverOut = (e) =>{
    e.stopPropagation()
    hover(false)
    scene.remove( boxHelperRef.current );
    boxHelperRef.current = null;
  }

  return(
  <e.mesh 
      theatreKey={props.name}
      name={props.name}
      onPointerOver={useCallback((e) => {onHoverIn(e)},[])}
      onPointerOut={useCallback((e) => {onHoverOut(e)},[])}
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
      scale={[1,1,1]}
      position={props.hasData?
        [((props.x + props.width/2) - props.frameWidth/2)/(props.frameWidth)*props.baseUnit,
         ((props.frameHeight/2 -(props.y + props.height/2))/(props.frameHeight))*(props.frameHeight/props.frameWidth)*props.baseUnit,
         props.index*0.0005 * props.baseUnit]
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
      <meshBasicMaterial 
          ref={screeMaterial}
          // depthTest={true}
          // depthWrite={false}
          side={THREE.DoubleSide}
          alphaTest ={0.1}
          transparent={true}
          map={currMap}
          toneMapped={false}
          color={hovered ? 'hotpink' : 'white'}
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
            // fw={figmaData[0].width}
            // fh={figmaData[0].height}
            frameWidth={frameWidth}
            frameHeight={frameHeight}
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