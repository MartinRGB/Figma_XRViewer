import React,{useState} from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'

interface OrbitProps {
  cameraSheetObj?:React.MutableRefObject<any>;
  orbitRef:React.ForwardedRef<any>;
}

const Orbit = ({orbitRef,cameraSheetObj}:OrbitProps) =>{
  const [showOribt,setShowOrbit] = useState(true)
  useFrame((state) => {
 
    if(cameraSheetObj.current.value.control){
      setShowOrbit(true)
    }
    else{
      setShowOrbit(false)
    }
  },)
  return(
    <>{(showOribt)?<OrbitControls makeDefault target={[0,0,-100]} ref={orbitRef}/>:<></>}</>
  )
}
export default Orbit;