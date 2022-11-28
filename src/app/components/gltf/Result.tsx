import React, { useEffect, useMemo, useCallback } from 'react'
import saveAs from 'file-saver'
import { Leva, useControls, button } from 'leva'
import toast from 'react-hot-toast'
import { isGlb } from '@Utils/gltf/isExtension'
import useSandbox from '@Utils/gltf/useSandbox'
import Viewer from '@Components/gltf/Viewer'
import useStore from '@Utils/gltf/store'
import {onCreateImage} from '@Utils/functions.js'; 


const Result = ({children}) =>{
  const { buffer, fileName, textOriginalFile, scene, code, createZip, generateScene, animations } = useStore()
  const [config, setConfig] = useControls(() => (
  {
    // types: { value: false, hint: 'Add Typescript definitions' },
    shadows: { value: true, hint: 'Let meshes cast and receive shadows' },
    instanceall: { label: 'instance all', value: false, hint: 'Instance every geometry (for cheaper re-use)' },
    // instance: { value: false, hint: ' Instance re-occuring geometry' },
    verbose: { value: false, hint: 'Verbose output w/ names and empty groups' },
    // keepnames: { value: false, label: 'keep names', hint: 'Keep original names' },
    // keepgroups: { value: false, label: 'keep groups', hint: 'Keep (empty) groups' },
    // aggressive: { value: false, hint: 'Aggressively prune the graph (empty groups, transform overlap)' },
    // meta: { value: false, hint: 'Include metadata (as userData)' },
    // precision: { value: 2, min: 1, max: 8, step: 1, hint: 'Number of fractional digits (default: 2)' },
  }))

  const preview = useControls(
    'preview',
    {
      autoRotate: false,
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
    config: { ...config, ...preview },
  })

  useEffect(() => {
    setConfig({ verbose: animations })
  }, [animations])

  useEffect(() => {
    generateScene(config)
  }, [config])

  useEffect(() => {
    console.log(scene)
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
    <div className="h-full w-screen">
    {!code && !scene ? (
      <p className="text-4xl font-bold w-screen h-screen flex justify-center items-center">Loading ...</p>
    ) : (
      // <div style={{textAlign:'left'}} className="grid grid-cols-5 h-full">
      //   {code && <Code>{code}</Code>}
      //   <section className="h-full w-full col-span-2">
      //     {scene && <Viewer scene={scene} {...config} {...preview} />}
      //   </section>
      // </div>
      <div style={{textAlign:'left'}} className="grid h-full">
        <h1
          style={{
            textAlign: 'center',
            width: '100%',
            position: 'absolute',
            top: '0px',
            fontSize: '24px',
          }} className="font-bold"
        >{children}</h1>
        <section className="h-full w-full">
          {scene && <Viewer scene={scene} {...config} {...preview} />}
        </section>
      </div>
    )}
    <Leva hideTitleBar collapsed />
  </div>
  )
}
export default Result;