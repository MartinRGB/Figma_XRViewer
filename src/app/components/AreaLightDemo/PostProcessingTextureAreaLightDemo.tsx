import React , {Suspense,useRef,useState,useEffect } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import {OrbitControls, Preload} from '@react-three/drei'
import ReflectorInstance from '@Components/AreaLightDemo/ReflectorInstance'
import { useGLTF } from "@react-three/drei";
import TextureAreaLightScreenEffects from '@Components/AreaLightDemo/TextureAreaLightScreenEffects'
import * as LINK from '@Components/AreaLightDemo/config'

const Model = (props) => {
  const group = useRef();
  const { scene } = useGLTF(props.ModelSrc,true)
  return <primitive ref={group} object={scene} {...props}  dispose={null} />
}
useGLTF.preload(LINK.HallSrc);
useGLTF.preload(LINK.ShoeSrc);

const VideoPlane = (props)  =>{
  return (
    <>
      <mesh {...props}>
        <planeGeometry />
        <meshBasicMaterial side={THREE.DoubleSide} toneMapped={true}>
          <videoTexture attach="map" args={[props.video]} encoding={THREE.sRGBEncoding} />
        </meshBasicMaterial>
      </mesh>
    </>
  )
}

const Rig = () => {
  useFrame((state) => {
    state.camera.position.lerp({ x: state.pointer.x / 2, y: -state.pointer.y / 4 ,z:2 }, 0.1)
    state.camera.lookAt(0, 0, -1)
  })
  return(<></>)
}

export const PostProcessingTextureAreaLightDemo = () =>{
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: LINK.VideoSrc, crossOrigin: 'Anonymous', loop: true, muted: true }))
  const [vidSize,setVidSize] = useState([0,0])
  useEffect(() => {
    video.addEventListener( "loadedmetadata", function () {
      // retrieve dimensions
      const height = this.videoHeight;
      const width = this.videoWidth;
      console.log(width)
      console.log(height)
      setVidSize([width,height])
  }, false);
    video.play()
  }, [video])

  return(
    <>
      <color attach="background" args={['#202020']} />
      <fog attach="fog" args={['#202020', 20, 25]} />
      <ambientLight intensity={0.6} />
      <spotLight
        angle={0.12}
        penumbra={0.1}
        position={[10, 0, -10]}
        intensity={10}
        onUpdate={(self) => {
          self.target.position.set(-10, 0, 0)
          self.target.updateMatrixWorld()
        }}
        />
        <>
        <Suspense fallback={null}>
          <>
            <VideoPlane position={[0,0.25,-0.75]} rotation={[0,0,Math.PI/2]} scale={[2,2*vidSize[1]/vidSize[0],2]} video={video} ></VideoPlane>
            {/* <ReflectorInstance 
              floorTex={LINK.FloorTex}
              floorNormal={LINK.FloorNorm}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]} 
              position={[0,-vidSize[1]/(vidSize[0]*2),0]} /> */}
          </>
          <Model ModelSrc={LINK.ShoeSrc} scale={[0.25,0.25,0.25]} position={[0,-0.5,0]}></Model>
          <Model ModelSrc={LINK.HallSrc} rotation={[0,-Math.PI/2,0]} position={[0, vidSize[1]/(vidSize[0]*1), 0]} scale={[2,2,2]}></Model>
        </Suspense>
        <TextureAreaLightScreenEffects CubeSrc={LINK.CubeSrc}></TextureAreaLightScreenEffects>
        <OrbitControls/>
        {/* <Rig/> */}
      </>
    </>
  )

}