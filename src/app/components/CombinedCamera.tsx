import React,{useState,useRef,forwardRef,useEffect, useLayoutEffect} from 'react'
import { useHelper,PerspectiveCamera, OrthographicCamera } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { editable as e } from '@theatre/r3f'
import { types } from '@theatre/core'
import { searchElementByType } from '../utils/functions'
import { theatreStudioCameraHelperFixed } from '../utils/threeHelper'

interface CameraProps {
  cameraRef:React.ForwardedRef<any>;
  cameraSheetObj:React.MutableRefObject<any>;
  baseUnit:number;
  aspect:number;
}

// # Camera & Fake Camera
const CombinedCamera = ({cameraRef,cameraSheetObj,baseUnit,aspect}:CameraProps) =>{
  const realCamera = useRef(null);
  const persCam = useRef(null);
  const orthCam = useRef(null);
  //useHelper(cameraRef,THREE.CameraHelper)
  //here
  const {invalidate,scene} = useThree()

  const [mAspect,setAspect] = useState(aspect);

  useLayoutEffect(() => {
    function updateSize() {
      setAspect(window.innerWidth/window.innerHeight)
      window.studio.transaction(({ set }) => {
        console.log('set cam')
        set(cameraSheetObj.current.props.aspect, window.innerWidth/window.innerHeight) // New value is {x: 10, y: 0}
      })
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Perspective && Enable Mode
  const [isPerspective,setIsPerspective] = useState(true);
  const [isEnableHelper,setIsEnableHelper] = useState(false);
  const helperRef = useRef(cameraRef.current);
  useEffect(()=>{ 
    const isExistHelper =  searchElementByType(scene.children,'type','CameraHelper');
    if( isExistHelper === null){

    }
    else{
      scene.remove(isExistHelper);
    }
    helperRef.current = new THREE.CameraHelper( cameraRef.current );
    scene.add( helperRef.current );
    theatreStudioCameraHelperFixed(scene,invalidate);
    if(isEnableHelper){
      helperRef.current.visible = true;
    }
    else{
      helperRef.current.visible = false;
    }
    //todo fix
  },[isPerspective,,isEnableHelper])

  useEffect(()=>{

    cameraSheetObj.current.onValuesChange(newValues => {
      setIsPerspective(newValues.isPerspective)
      setIsEnableHelper(newValues.helper);

      // update camera Helper
      if(cameraRef.current){
        cameraRef.current.position.x = newValues.position.x;
        cameraRef.current.position.y = newValues.position.y;
        cameraRef.current.position.z = newValues.position.z;
        cameraRef.current.rotation.x = newValues.rotation.x;
        cameraRef.current.rotation.y = newValues.rotation.y;
        cameraRef.current.rotation.z = newValues.rotation.z;
        cameraRef.current.scale.x = newValues.scale.x ;
        cameraRef.current.scale.y = newValues.scale.y;
        cameraRef.current.scale.z = newValues.scale.z;
        cameraRef.current.near = newValues.near;
        cameraRef.current.far = newValues.far;
        cameraRef.current.fov = newValues.fov;
        cameraRef.current.zoom = newValues.zoom;
        cameraRef.current.aspect = newValues.aspect;
        cameraRef.current.matrixWorldNeedsUpdate = true;
        cameraRef.current.updateProjectionMatrix()
        cameraRef.current.updateMatrixWorld();
      }

      if(helperRef.current) {
        helperRef.current.update()
      }

      if(newValues.control){
        //invalidate();
      }
      else{
        if(realCamera.current){
          // update camera para when there is no control
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
          realCamera.current.aspect = newValues.aspect;
          //realCamera.current.copy(ref.current,false)
          
          realCamera.current.matrixWorldNeedsUpdate = true;
          realCamera.current.updateProjectionMatrix()
          realCamera.current.updateMatrixWorld();
        }
      }
      
      invalidate();
    });
  },[])

  // useEffect(()=>{
  //   realCamera.current = isPerspective?persCam.current:orthCam.current;
  //   console.log(isPerspective)
  // },[isPerspective])


  return (
    <>
    {
      isPerspective?
      <PerspectiveCamera
        ref={realCamera}
        makeDefault
        near={0.01}
        far={10000} 
        fov={60} 
        zoom={1} 
        aspect={mAspect} 
        position={[0,0,baseUnit]}/>
      :
      <OrthographicCamera
        ref={realCamera}
        makeDefault
        near={0.01}
        zoom={1} 
        far={10000} 
        position={[0,0,baseUnit]}/>
      
    }

    <e.group
      theatreKey=" - Camera Controller" 
      objRef={cameraSheetObj}
      additionalProps={{ 
        control: true,
        isPerspective:isPerspective,
        helper:isEnableHelper,
        near:0.01,
        far:10000,
        fov:60, 
        zoom:1,
        aspect: types.number(mAspect, {
          nudgeMultiplier: 0.1,
          range:[0,100]
        }),
      }} 
      position={[0,0,baseUnit]}>
        {isPerspective?<PerspectiveCamera ref={cameraRef}/>:<OrthographicCamera ref={cameraRef} />}
    </e.group>
    </>
  )

};
export default CombinedCamera;