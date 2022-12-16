import React, { forwardRef } from 'react';
import {useTexture, MeshReflectorMaterial } from '@react-three/drei'

const ReflectorInstance = (props) => {
	const [floor, normal] = useTexture([props.floorTex, props.floorNormal])
	return (
		<mesh {...props}>
			<planeGeometry args={[1080, 1080]}></planeGeometry>
			<MeshReflectorMaterial
				resolution={2048}
				mirror={1} 
				blur={[1500, 1500]} 
				mixBlur={500} 
				mixStrength={1} 
				color="#f0f0f0"
				metalness={0}
				roughness={1}
				roughnessMap={floor} 
				// normalMap={normal} 
				normalScale={[0.1, 0.1]}
				{...props}
				/>
		</mesh>
	)
}

export default ReflectorInstance;