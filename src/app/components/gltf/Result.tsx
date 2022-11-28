import React, { useEffect, useMemo, useCallback, Suspense } from 'react'
import saveAs from 'file-saver'
import { Leva, useControls, button } from 'leva'
import toast from 'react-hot-toast'
import { isGlb } from '@Utils/gltf/isExtension'
import useSandbox from '@Utils/gltf/useSandbox'
import Viewer from '@Components/gltf/Viewer'
import useStore from '@Utils/gltf/store'
import {onCreateImage} from '@Utils/functions.js'; 
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber'

const AlignContainer = styled.div`
  position: absolute;
  background: white;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  flex: 1 1 0%;
  display: flex;
  flex-direction: row;
  align-items: center;
  outline: none;
  z-index: 100000;
`

const AlignPara = styled.div`
  margin:0 auto;
  font-size: 24px;
  font-weight: 700;
`

const FileNameHeading = styled.h1`
  text-align: center;
  width: 100%;
  position: absolute;
  top: 8px;
  font-size: 16px;
`

const LoadingComnponent = () =>{
  return (
    <AlignContainer>
      <AlignPara>Loading ...</AlignPara>
    </AlignContainer>
  )
}
 
const Result = ({children}) =>{
  const { buffer, fileName, textOriginalFile, scene, code, createZip, generateScene, animations } = useStore()
  const [config, setConfig] = useControls(() => (
  {
    // types: { value: false, hint: 'Add Typescript definitions' },
    // shadows: { value: true, hint: 'Let meshes cast and receive shadows' },
    // instanceall: { label: 'instance all', value: true, hint: 'Instance every geometry (for cheaper re-use)' },
    // instance: { value: false, hint: ' Instance re-occuring geometry' },
    // verbose: { value: false, hint: 'Verbose output w/ names and empty groups' },
    // keepnames: { value: false, label: 'keep names', hint: 'Keep original names' },
    // keepgroups: { value: false, label: 'keep groups', hint: 'Keep (empty) groups' },
    // aggressive: { value: false, hint: 'Aggressively prune the graph (empty groups, transform overlap)' },
    // meta: { value: false, hint: 'Include metadata (as userData)' },
    // precision: { value: 2, min: 1, max: 8, step: 1, hint: 'Number of fractional digits (default: 2)' },
  }))

  const preview = useControls(
    'configs',
    {
      autoRotate: false,
      animation:true,
      shadows: { value: true, hint: 'Let meshes cast and receive shadows' },
      contactShadow: true,
      intensity: { value: 1, min: 0, max: 2, step: 0.1, label: 'light intensity' },
      preset: {
        value: 'rembrandt',
        options: ['rembrandt', 'portrait', 'upfront', 'soft'],
      },
      environment: {
        value: 'city',
        options: ['', 'sunset', 'dawn', 'night', 'warehouse', 'forest', 'apartment', 'studio', 'city', 'park', 'lobby'],
      },
    },
    { collapsed: false }
  )

  const [loading, sandboxId, error, sandboxCode] = useSandbox({
    fileName,
    textOriginalFile,
    code,
    // config: { ...config, ...preview },
    config: {...preview },
  })

  // useEffect(() => {
  //   setConfig({ verbose: animations })
  // }, [animations])

  useEffect(() => {
    generateScene(config)
  }, [config])

  useEffect(() => {
    useStore.setState({scene:null,code:null})
    generateScene(config)
  }, [children])

  const download = useCallback(async () => {
    createZip({ sandboxCode })
  }, [sandboxCode, fileName, textOriginalFile, buffer])

  const exports = useMemo(() => {
    const temp = {}
    // temp['copy to clipboard'] = button(() =>
    //   toast.promise(copy(code), {
    //     loading: 'Loading',
    //     success: () => `Successfully copied`,
    //     error: (err) => err.toString(),
    //   })
    // )

    // temp['download zip'] = button(() =>
    //   toast.promise(download(), {
    //     loading: 'Loading',
    //     success: () => `Ready for download`,
    //     error: (err) => err.toString(),
    //   })
    // )

  temp['export image'] = button(() => {
    var image = document
      .getElementsByTagName('canvas')[0]
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream')

    //saveAs(image, `${fileName.split('.')[0]}.png`)
    onCreateImage(null,image,'save-canvas-image',`${fileName.split('.')[0]}.png`)
  })

  // if (!isGlb(fileName) && !error) {
  //   const name = 'codesandbox' + (loading ? ' loading' : '')
  //   temp[name] = button(() => {
  //     location.href = sandboxId
  //       ? `https://codesandbox.io/s/${sandboxId}?file=/src/Model.${config.types ? 'tsx' : 'js'}`
  //       : '#'
  //   })
  // }

    return temp
  }, [fileName, loading, error, sandboxCode, sandboxId, config.types])

  useControls('exports', exports, { collapsed: false }, [exports])

  return(
    <>
     
    {!code && !scene ? (
      <LoadingComnponent/>
    ) : (
      // <div style={{textAlign:'left'}} className="grid grid-cols-5 h-full">
      //   {code && <Code>{code}</Code>}
      //   <section className="h-full w-full col-span-2">
      //     {scene && <Viewer scene={scene} {...config} {...preview} />}
      //   </section>
      // </div>
      <Suspense fallback={<LoadingComnponent/>}>
      <div style={{textAlign:'left'}}>
        <FileNameHeading>{children}</FileNameHeading>
        <Canvas gl={{ preserveDrawingBuffer: true }} shadows dpr={[1, 1.5]}>
          {/* {scene && <Viewer scene={scene} {...config} {...preview} />} */}
          {scene && <Viewer scene={scene} {...preview} />}
        </Canvas>
      </div>
      </Suspense>
    )}
    <Leva hideTitleBar collapsed />
  </>
  )
}
export default Result;