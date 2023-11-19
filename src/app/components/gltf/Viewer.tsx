import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { invalidate, useFrame, useThree } from '@react-three/fiber'
import { Environment, OrbitControls, OrthographicCamera, PerspectiveCamera, Stage } from '@react-three/drei'
import useStore from '@Utils/gltf/store'
import * as THREE from 'three'
import CombinedCamera from './CombinedCamera'

const Viewer = ({ shadows, contactShadow, autoRotate, environment, preset, intensity,animation ,perspectiveCamera,dpr}) =>{
  const gltfScene = useStore((store) => store.scene)
  const animations = useStore((store) => store.animations)
  const mixerRef = useRef(new THREE.AnimationMixer(gltfScene));
  const orbitRef = useRef()
  const {invalidate,scene,gl,camera} = useThree()

  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(()=>{
    
    if(gltfScene != null){
      gltfScene.traverse((obj) => {
        if (obj.isMesh) {
          obj.castShadow = obj.receiveShadow = shadows
          obj.material.envMapIntensity = 0.8
        }
      })
    }
  },[gltfScene, shadows])

  useEffect(()=>{
    if(animation){
      animations.forEach(clip => mixerRef.current.clipAction(clip).play())
    }
    else{
      animations.forEach(clip => mixerRef.current.clipAction(clip).stop())
      animations.forEach(clip => mixerRef.current.clipAction(clip).reset())
    }
  },[animation])

  
  useFrame((state, delta) => {
    if(animation){
      mixerRef?.current?.update(delta)
      invalidate();
    }
  })

  return (
    <>
      <Stage
        preset={preset}
        intensity={intensity}
        contactShadow={contactShadow}
        shadows
        adjustCamera={false}
        environment={null}>
          <CombinedCamera
            fov={50}
            aspect={size[0]/size[1]}
            near={0.01}
            far={10000}
            zoom={1}
            dpr={dpr}
            position={[0, 0, 50]}
            isPespective={perspectiveCamera}
          />
        <ambientLight intensity={0.25} />
          <primitive object={gltfScene} />
        <OrbitControls ref={orbitRef} autoRotate={autoRotate} />
      </Stage>
    </>
  )
}
export default Viewer;