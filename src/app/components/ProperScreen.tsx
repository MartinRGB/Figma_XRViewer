import React,{useState,useRef,useEffect,useCallback} from 'react'
import * as THREE from 'three'
import { invalidate } from '@react-three/fiber'
import { editable as e} from '@theatre/r3f'
import { 
  createCanvasGridMaterial,createPlaneCurve
} from '@Utils/functions.js'; 
import { types } from '@theatre/core'

const Screen = (props) =>{

  const [hovered, hover] = useState(false)
  const screeMaterial = useRef(null)
  const screenGeom = useRef(null)
  const screenRef = useRef(null)
  const screenObjRef = useRef(null)
  const defaultCurve = 0;
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
}

const ProperScreen = ({figmaData,isQuery,baseUnit}:ProperScreenProps) =>{
  return(
    <>
    {(figmaData.length != 0)?
      <>
        { figmaData.map(({ type,index,name,x,y,width,height,src}) => (
          
              <Screen  
                key={type + '-three-' + index} 
                src={src}
                name={name.replace(/\//g,`_`).replace(/\ /g,`_`).substring(0,24)+`_#${index}`}
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

export default ProperScreen;