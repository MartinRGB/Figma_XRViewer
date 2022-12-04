import React, { useEffect, useRef, useLayoutEffect} from 'react'
import { invalidate, useFrame, useThree } from '@react-three/fiber'
import { Environment, OrbitControls, OrthographicCamera, PerspectiveCamera, Stage } from '@react-three/drei'
import create from 'zustand'
import * as THREE from 'three';

interface CombinedCameraProps {
  fov:number,
  near:number,
  far:number,
  zoom:number,
  aspect:number,
  position:number[],
  isPespective:boolean,
}

const CombinedCamera = ({fov,near,far,zoom,aspect,position,isPespective}:CombinedCameraProps) =>{
  const orthRef = useRef();
  const persRef = useRef();
  const {invalidate,scene,gl,camera} = useThree()

  useLayoutEffect(() => {
    function updateSize() {
      orthRef.current.zoom = 100;
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(()=>{
    if(isPespective){
      persRef.current.position.set(orthRef.current.position.x,orthRef.current.position.y,orthRef.current.position.z);
      persRef.current.zoom = zoom;
      persRef.current.position.set(position[0],position[1],position[2]);
      persRef.current.updateProjectionMatrix();
      console.log(isPespective)
    }
    else{
      var hyperfocus = ( near + far ) / 2;
      var halfHeight = Math.tan( fov * Math.PI / 180 / 2 ) * hyperfocus;
      var planeHeight = 2 * halfHeight;
      var planeWidth = planeHeight * aspect;
      var halfWidth = planeWidth / 2;
      halfHeight /= ((far/25)*persRef.current.zoom);
      halfWidth /= ((far/25)*persRef.current.zoom);

      orthRef.current.left = -halfWidth;
      orthRef.current.right = halfWidth;
      orthRef.current.top = halfHeight;
      orthRef.current.bottom = -halfHeight;
      orthRef.current.zoom = zoom*aspect;
      orthRef.current.position.set(position[0],position[1],position[2]);
      orthRef.current.far = far+((far/25)*persRef.current.zoom)-0.5;

      orthRef.current.updateProjectionMatrix();
      console.log(isPespective)
    }
  },[isPespective])

  useEffect(()=>{
  },[])
  useFrame((state, delta) => {
  })

  return (
    <>
      <PerspectiveCamera
      ref={persRef}
      makeDefault={isPespective}
      aspect={aspect}
      fov={fov}
      near={near}
      far={far}
      position={position}
      onUpdate={self => self.updateProjectionMatrix()}/>
      <OrthographicCamera
      ref={orthRef}
      makeDefault={!isPespective}
      fov={fov}
      near={near}
      far={far}
      position={position}
      onUpdate={self => self.updateProjectionMatrix()}/>
    </>
  )
}
export default CombinedCamera;