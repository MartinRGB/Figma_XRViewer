import React,{useState,useRef} from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'

interface OrbitProps {
  cameraSheetObj?:React.MutableRefObject<any>;
}

const Orbit = ({cameraSheetObj}:OrbitProps) =>{
  const orbitRef = useRef(null);
  const [showOribt,setShowOrbit] = useState(true)
  useFrame(() => {
    if(cameraSheetObj.current.value.control){
      setShowOrbit(true)
    }
    else{
      setShowOrbit(false)
    }
  },)
  return(
    <>{(showOribt)?<OrbitControls ref={orbitRef}/>:<></>}</>
  )
}
export default Orbit;