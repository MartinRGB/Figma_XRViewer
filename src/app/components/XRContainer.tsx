import React,{useEffect} from 'react'
import { useThree } from '@react-three/fiber'
import { XR, Controllers, Hands, useXR } from '@react-three/xr'
import { searchElementByType } from '@Utils/functions'; 

interface XRContainerProps {
  cameraRef:React.ForwardedRef<any>;
  cameraSheetObj:React.MutableRefObject<any>;
  children?: React.ReactNode;
}

const XRContainer = ({cameraRef,cameraSheetObj,children}:XRContainerProps) =>{
  const {invalidate,scene,gl,camera} = useThree()
  const UseXR = () => {
    const {player,isPresenting,session} = useXR()
    useEffect(()=>{
      const mArr = scene.children;
      if(isPresenting){
        player.visible = false;
        const mHelper =  searchElementByType(mArr,'type','CameraHelper')
        mHelper.visible = false;
        const fovSqrtInPlayer = Math.sqrt(3);
        const pX = cameraSheetObj.current.value.position.x
        const pY = cameraSheetObj.current.value.position.y
        const pZ = cameraSheetObj.current.value.position.z
        const rX = cameraSheetObj.current.value.rotation.x
        const rY = cameraSheetObj.current.value.rotation.y
        const rZ = cameraSheetObj.current.value.rotation.z
        const fov = cameraSheetObj.current.value.fov;
        const zoom = cameraSheetObj.current.value.zoom;

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
      {children}
      {<UseXR />}
    </XR>
  )
  
}
export default XRContainer;