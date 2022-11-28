import { useDropzone } from 'react-dropzone'
import React,{ useCallback,useState,useEffect } from 'react'
// import suzanne from '../public/suzanne.gltf'
import arrayBufferToString from '@Utils/gltf/arrayBufferToString'
import useStore from '@Utils/gltf/store'
import Result from '@Components/gltf/Result'

const GLTFViewerApp = () => {
 

  const { buffer } = useStore((state) => ({
    buffer: state.buffer,
  }))
  const [fileName,setFileName] = useState();

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onabort = () => console.error('file reading was aborted')
      reader.onerror = () => console.error('file reading has failed')
      reader.onload = async () => {
        console.log('loaded');
        const data = reader.result
        useStore.setState({ buffer: data, fileName: file.name })
        arrayBufferToString(data, (a) => useStore.setState({ textOriginalFile: a }))
        setFileName(file.name);
      }
      reader.readAsArrayBuffer(file)
    })
  }, [])

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: '.gltf, .glb',
  })

  return (
    <>
    <div style={{
      width: '100vw',
      height: '100vh',
      position:'absolute'
    }} className="h-full w-screen flex flex-col items-center justify-center text-center" {...getRootProps({
      onClick: event => event.stopPropagation()
    })}>
      <input {...getInputProps()} />

      <div
        style={{
          position: 'absolute',
          opacity:isDragActive?'1':(buffer?'0':'1'),
          background:'white',
          width: '100vw',
          height: '100vh',
          pointerEvents:'none',
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          // padding: '20px',
          outline: 'none',
          transition: 'border .24s ease-in-out',
          zIndex: '100000'
        }}
        >
        {isDragActive ? 
        
        (
          <p style={{margin:'0 auto'}} className="text-4xl font-bold text-blue-600">Drop the files here ...</p>
        ) 
          : 
        (
          // buffer?
          // <></>
          // : 
          <p style={{margin:'0 auto'}} className="text-4xl font-bold ">
            Drag {"'"}n{"'"} drop your GLTF file <span className="text-blue-600">here </span>
            {/* <button className="font-bold">
            or{' '} try it with <span className="text-blue-600">Suzanne</span>
            </button> */}
          </p>
        )}
      </div>
      {fileRejections.length ? (
        <p className="block text-center text-xl pt-4 text-red-300">Only .gltf or .glb files are accepted</p>
      ) : null}
      
      {buffer?<Result>{fileName}</Result>:<></>}
    </div>
    
    </>
  )
}
export default GLTFViewerApp;