import React from 'react'
import {Canvas} from '@react-three/fiber'
import { LTCTextureAreaLightDemo } from '@Components/AreaLightDemo/LTCTextureAreaLightDemo';

const SceneTest: React.FC = ({}) => {

  return (
  <Canvas dpr={[0,1.5]} shadows gl={{ antialias: true }}>
    <LTCTextureAreaLightDemo/>
  </Canvas>
  )
};

export default SceneTest;