import React,{useState,useRef,forwardRef,useEffect} from 'react'
import { useHelper,PerspectiveCamera } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { editable as e } from '@theatre/r3f'
const EditableCamera = e(PerspectiveCamera, 'perspectiveCamera')

interface CameraProps {
  cameraRef:React.ForwardedRef<any>;
  containerRef:React.ForwardedRef<any>;
  cameraSheetObj:React.MutableRefObject<any>;
  baseUnit:number;
}

// # Camera & Fake Camera
const Camera = ({cameraRef,containerRef,cameraSheetObj,baseUnit}:CameraProps) =>{
  const [mAspect,setAspect] = useState(1);
  const realCamera = useRef(null);
  useHelper(cameraRef,THREE.CameraHelper)
  const {invalidate,scene} = useThree()

  useEffect(()=>{
    let width = containerRef.current.clientWidth;
    let height = containerRef.current.clientHeight;
    console.log('camera aspect: ' + width/height)
    setAspect(width / height);
    
    cameraSheetObj.current.onValuesChange(newValues => {
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
      position={[0,0,baseUnit]}/>
    <EditableCamera
      theatreKey="camera" 
      objRef={cameraSheetObj}
      additionalProps={{ 
        control: true,
      }} 
      ref={cameraRef}
      // makeDefault
      fov={60} 
      aspect={mAspect} 
      near={0.01}
      zoom={1} 
      far={10000} 
      position={[0,0,baseUnit]}/>
    </>
  )

};
export default Camera;