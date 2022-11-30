import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { invalidate, useFrame, useThree } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import useStore from '@Utils/gltf/store'
import * as THREE from 'three'

const Viewer = ({ shadows, contactShadow, autoRotate, environment, preset, intensity,animation }) =>{
  const scene = useStore((store) => store.scene)
  const animations = useStore((store) => store.animations)
  const mixerRef = useRef(new THREE.AnimationMixer(scene));
  const ref = useRef()

  useEffect(()=>{
    
    if(scene != null){
      console.log('traverse')
      scene.traverse((obj) => {
        if (obj.isMesh) {
          obj.castShadow = obj.receiveShadow = shadows
          obj.material.envMapIntensity = 0.8
        }
      })
    }
  },[scene, shadows])

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
    }
    
  })
  

  return (
    <>
      <Stage
        preset={preset}
        intensity={intensity}
        contactShadow={contactShadow}
        shadows
        adjustCamera
        environment={environment}>
          
        <ambientLight intensity={0.25} />
          <primitive object={scene} />
        <OrbitControls ref={ref} autoRotate={autoRotate} />
      </Stage>
    </>
  )
}
export default Viewer;