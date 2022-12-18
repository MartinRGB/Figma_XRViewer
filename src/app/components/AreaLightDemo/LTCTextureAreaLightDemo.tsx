import React ,{Suspense,useState,useEffect, useRef, useLayoutEffect} from 'react'
import {applyProps, Canvas, useFrame, useLoader, useThree, Vector3} from '@react-three/fiber'
import { Environment,Center, softShadows, OrbitControls, useGLTF, Box, Plane, useHelper, PivotControls} from '@react-three/drei'
import * as LINK from '@Components/AreaLightDemo/config'
import * as THREE from 'three'
import { useControls } from 'leva'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib'
import TextureAreaLightScreenEffects from './TextureAreaLightScreenEffects'

const marble_color = 'https://172.22.0.20:8222/external/assets/marble/Marble012_1K_Color.jpg'
const marble_disp = 'https://172.22.0.20:8222/external/assets/marble/Marble012_1K_Displacement.jpg'
const marble_norm = 'https://172.22.0.20:8222/external/assets/marble/Marble012_1K_NormalDX.jpg'
const marble_roughness = 'https://172.22.0.20:8222/external/assets/marble/Marble012_1K_Roughness.jpg'
const testTex = 'https://172.22.0.20:8222/external/assets/test_tex.png';
const screenWidth = 108;
const screenHeight = 192;
const halfScreenWidth = 54;

const Model = (props) => {
  const group = useRef();
  const { scene } = useGLTF(props.ModelSrc,true)
  useFrame(() => {
    if(props.autoRotate && group.current){
        group.current.rotation.y += 0.01;
    }
  });

  useEffect(()=>{
    if(scene != null){
      scene.traverse((obj) => {
        if (obj.isMesh) {
          obj.castShadow = obj.receiveShadow = true
        }
      })
    }
  },[scene])

  return <primitive ref={group} object={scene} {...props}  dispose={null} />
}

const Ground = (props) => {
  const groundRef = useRef();

  const repeatX= props.repeat[0];
  const repeatY= props.repeat[1];
  var disp = useLoader(THREE.TextureLoader,marble_disp);
  disp.anisotropy = repeatY;
  disp.wrapS = disp.wrapT = THREE.RepeatWrapping;
  disp.repeat.set(repeatX, repeatY);

  var roughness = useLoader(THREE.TextureLoader,marble_roughness);
  roughness.anisotropy = repeatY;
  roughness.wrapS = roughness.wrapT = THREE.RepeatWrapping;
  roughness.repeat.set(repeatX, repeatY); //4

  var norm = useLoader(THREE.TextureLoader,marble_norm);
  norm.anisotropy = repeatY;
  norm.wrapS = norm.wrapT = THREE.RepeatWrapping;
  norm.repeat.set(repeatX, repeatY);

  var color = useLoader(THREE.TextureLoader,marble_color);
  color.anisotropy = repeatY;
  color.wrapS = color.wrapT = THREE.RepeatWrapping;
  color.repeat.set(repeatX, repeatY); //4


  return (
    <>
    <mesh 
      ref={groundRef}
      position={props.position} //-y*Math.min(ratioW,ratioH)/2
      rotation={props.rotation}
      receiveShadow>
      <planeGeometry args={[props.size[0], props.size[1],32]} attach="geometry" />
      <meshStandardMaterial map={color} displacementMap={disp}roughness={0.5}/>
    </mesh>

    </>
  );
}

interface AreaLightProps{
  lightColor:string,
  lightIntensity:number,
  lightRoughnessControllable:boolean,
  lightRoughness:number,
  lightWidth:number,
  lightHeight:number,
  lightTexture:THREE.Texture,
  position:Vector3,
  rotation:Vector3,
  castShadow:boolean,
}

const AreaLight =  ({lightColor,lightIntensity,lightRoughness,lightRoughnessControllable,lightWidth,lightHeight,lightTexture,position,rotation,castShadow}:AreaLightProps) =>{
  const {gl,scene} = useThree();
  const textureAreaRef = useRef();
  const cameraHelperRef = useRef(null);
  useEffect(()=>{
    if(textureAreaRef.current){
      if(cameraHelperRef.current === null){

        cameraHelperRef.current = new THREE.CameraHelper( textureAreaRef.current.shadow.camera );
        scene.add( cameraHelperRef.current );
      }
    }

  },[])

  useFrame(() => {
    if(cameraHelperRef.current) cameraHelperRef.current.update()
  });

  return(
  <>
    <group position={position} rotation={rotation}>
      <mesh castshadow>
        <planeGeometry args={[lightWidth, lightHeight,32]}  attach="geometry" />
        <meshBasicMaterial color={lightColor} map={lightTexture} toneMapped={true} onUpdate={(self)=>{self.needsUpdate = true; }}/>
      </mesh>
      <textureAreaLight
        ref={textureAreaRef}
        castShadow
        color={lightColor} intensity={-lightIntensity} roughness={lightRoughness} width={lightWidth}
        height={lightHeight} texture={lightTexture} isRouhnessControllable={lightRoughnessControllable} renderer={gl}
      />
    </group>
  </>
  )
};

export const LTCTextureAreaLightDemo = ({}) =>{

  // const [video] = useState(() => Object.assign(document.createElement('video'), { src: LINK.VideoSrc, crossOrigin: 'Anonymous', loop: true, muted: true }))
  // useEffect(() => {
  //   RectAreaLightUniformsLib.init()
  //   video.addEventListener( "loadedmetadata", function () {
  //     // retrieve dimensions
  //     const videoTexture = new THREE.VideoTexture( video );
  //     videoTexture.minFilter = THREE.NearestFilter;
  //     videoTexture.magFilter = THREE.LinearFilter;
  //     videoTexture.wrapS = videoTexture.wrapT = THREE.ClampToEdgeWrapping;
  //     videoTexture.anisotropy = 4;

  //   }, false);
  //   video.play()
  // }, [video])

  const {invalidate,scene,gl,camera,size} = useThree()
  const [threeTexture,setThreeTexture] = useState(null);
  const [video,setVideo] = useState(null);
  useEffect(()=>{
    RectAreaLightUniformsLib.init();
  },[])
  


  const { lightColor, lightIntensity, lightRoughnessControllable,lightRoughness,lightWidth,lightHeight,lightTexture,position,rotation,position2,rotation2,ambientIntensity } = useControls({ 
    lightColor:{value:'#ffffff'},
    lightIntensity:{value:1,step:0.1},
    lightRoughnessControllable:{value:false},
    lightRoughness:{value:0.2,step:0.1},
    lightTexture:{value:'https://172.22.0.20:8222/external/assets/test_222.png',rows: true,
      onChange: (val) => {
        if(val != ''){
          if(val.includes('.mp4')){
            const videoE = document.createElement('video');
            videoE.src = val;
            videoE.crossOrigin = 'Anonymous'
            videoE.loop = true
            videoE.muted = true
            videoE.load();
            videoE.play();     
            const vidTex = new THREE.VideoTexture( videoE );
            vidTex.minFilter = THREE.NearestFilter;
            vidTex.magFilter = THREE.LinearFilter;
            vidTex.wrapS = vidTex.wrapT = THREE.ClampToEdgeWrapping;
            console.log(vidTex)
            setThreeTexture(vidTex)
            setVideo(videoE)
          }

          if(val.includes('.jpg') || val.includes('.png')){
            const imgTex = new THREE.TextureLoader().load(val);
            imgTex.minFilter = THREE.NearestFilter;
            imgTex.magFilter = THREE.LinearFilter;
            imgTex.wrapS = imgTex.wrapT = THREE.ClampToEdgeWrapping;
            imgTex.repeat.set( 1, 1 );
            setThreeTexture(imgTex)
            setVideo(null)
          }
        }
        else{

          setThreeTexture(null)
          setVideo(null)
        }
      }},
      
    // lightWidth:{value:screenHeight,step:1},
    // lightHeight:{value:screenWidth,step:1},
    // position:{value:[0,20,-250],step:1},
    lightWidth:{value:14.4,step:0.1},
    lightHeight:{value:9,step:1},
    position:{value:[0,6,-14],step:0.1},
    rotation:{value:[0.4,0,0],step:0.01},
    position2:{value:[719,0,-540],step:1},
    rotation2:{value:[0,0,0]},
    ambientIntensity:{value:0.01,step:0.01}
  })

    // disable orbit when drag
    const orbitRef = useRef()
    
    // const controlRef = useRef()
    // useEffect(() => {
    //   if (controlRef.current) {
    //     const controls = controlRef.current
    //     const callback = (event) => {orbitRef.current.enabled = !event.value}
    //     controls.addEventListener("dragging-changed", callback)
    //     return () => controls.removeEventListener("dragging-changed", callback)
    //   }
    // })


  const areaLightRotRef = useRef()
  const areaLightRotRef2 = useRef();
  useFrame(() => {
    if(areaLightRotRef.current){
      areaLightRotRef.current.rotation.y += 0.004;
      areaLightRotRef2.current.rotation.y += 0.004;
    }
  });

  const imgTex = new THREE.TextureLoader().load(`https://172.22.0.20:8222/external/assets/test_222.png`);
  imgTex.minFilter = THREE.NearestFilter;
  imgTex.magFilter = THREE.LinearFilter;
  imgTex.wrapS = imgTex.wrapT = THREE.ClampToEdgeWrapping;
  imgTex.repeat.set( 1, 1 );

  return(
    <>
    <color attach="background" args={['#202020']}/>
    <ambientLight intensity={ambientIntensity} />
    <perspectiveCamera
        makeDefault
        aspect={size.width / size.height}
        fov={70}
        near={1}
        far={23000}
        position={[0, 0, 200]}/>

      <>
      <Suspense fallback={null}>
        {/* <AreaLight 
          lightColor={lightColor}
          lightIntensity={lightIntensity} 
          lightRoughness={lightRoughness}
          lightWidth={lightWidth} 
          lightHeight={lightHeight} 
          lightTexture={threeTexture} 
          lightRoughnessControllable={lightRoughnessControllable}
          position={position} 
          rotation={rotation}
          castShadow={true}
        />
        {/* <Ground size={[1000,1000]} position={[0, -screenWidth/2, 0]} rotation={[-Math.PI / 2, 0, 0]} repeat={[40,40]}/> */}
        {/* <Model ModelSrc={LINK.HelmetSrc} autoRotate={true} scale={[0.25*halfScreenWidth,0.25*halfScreenWidth,0.25*halfScreenWidth]} position={[25,-50,-200]} ></Model>
        <Model ModelSrc={LINK.ShoeSrc} autoRotate={true} scale={[0.25*halfScreenWidth,0.25*halfScreenWidth,0.25*halfScreenWidth]} position={[-25,-50,-200]} ></Model>
        <Model ModelSrc={`https://172.22.0.20:8222/external/Model/star_wars_the_clone_wars_venator_prefab.glb`} scale={[1.5*halfScreenWidth,1.5*halfScreenWidth,1.5*halfScreenWidth]} position={position2} rotation={rotation2} ></Model> */} */}
      </Suspense>
      {/* <TextureAreaLightScreenEffects CubeSrc={LINK.CubeSrc}/> */}
      <OrbitControls makeDefault ref={orbitRef}/>
        {/* <PivotControls ref={controlRef}> */}
        <group ref={areaLightRotRef}>
        <AreaLight 
          lightColor={lightColor}
          lightIntensity={lightIntensity} 
          lightRoughness={lightRoughness}
          lightWidth={lightWidth} 
          lightHeight={lightHeight} 
          lightTexture={threeTexture} 
          lightRoughnessControllable={lightRoughnessControllable}
          position={position} 
          rotation={rotation}
          castShadow={true}
        />
        </group>

        <group ref={areaLightRotRef2} rotation={[0,Math.PI,0]}>
        <AreaLight 
          lightColor={lightColor}
          lightIntensity={lightIntensity} 
          lightRoughness={lightRoughness}
          lightWidth={lightWidth} 
          lightHeight={lightHeight} 
          lightTexture={imgTex} 
          lightRoughnessControllable={lightRoughnessControllable}
          position={position} 
          rotation={rotation}
          castShadow={true}
        />
        </group>
        {/* </PivotControls> */}
        <Model ModelSrc={LINK.ShoeSrc} autoRotate={true} scale={[0.0125*halfScreenWidth,0.0125*halfScreenWidth,0.0125*halfScreenWidth]} position={[-2.5,1.,0]} ></Model>
        <Model ModelSrc={LINK.HelmetSrc} autoRotate={true} scale={[0.025*halfScreenWidth,0.025*halfScreenWidth,0.025*halfScreenWidth]} position={[2.5,1.,0]} ></Model>
        <Ground size={[1000,1000]} position={[0, -1.25, 0]} rotation={[-Math.PI / 2, 0, 0]} repeat={[40,40]}/>

      </>
    </>
  )
}