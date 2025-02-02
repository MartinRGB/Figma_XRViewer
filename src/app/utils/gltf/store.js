import { saveAs } from 'file-saver'
import create from 'zustand'
import { createZip } from './createZip'
import { parse } from './parser'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'
import prettier from 'prettier/standalone'
import parserBabel from 'prettier/parser-babel'
import parserTS from 'prettier/parser-typescript'
import { REVISION } from 'three'
import { WebGLRenderer } from 'three'
import { nginxDecoderPath } from '@Config';
import {testNginxServerExist } from '@Utils/nginxTest'
import {nginxDirLink,isDecoderFromLoacl} from '@Config'

let gltfLoader,dracoloader,ktx2Loader;
if (typeof window !== 'undefined') {

    // testNginxServerExist(
    // ()=>{
    // const DecoderPath = `${nginxDirLink}/service_1/decoder`
    // dracoloader = new DRACOLoader().setDecoderPath(`${DecoderPath}/draco/gltf/`)
    // ktx2Loader = new KTX2Loader().setTranscoderPath(`${DecoderPath}/basis/`)
    // dracoloader.preload()
    //   console.log('decoderPath is ' + DecoderPath);
    //   gltfLoader = new GLTFLoader()
    //   .setCrossOrigin('anonymous')
    //   .setDRACOLoader(dracoloader)
    //   .setKTX2Loader(ktx2Loader.detectSupport(new WebGLRenderer()))
    //   .setMeshoptDecoder(MeshoptDecoder)
    // },
    // ()=>{
    //   const DecoderPath = `https://cdn.jsdelivr.net/npm/three@0.${REVISION}.x/examples/js/libs`;
    //   dracoloader = new DRACOLoader().setDecoderPath(`${DecoderPath}/draco/gltf/`)
    //   ktx2Loader = new KTX2Loader().setTranscoderPath(`${DecoderPath}/basis/`)
    //   dracoloader.preload()
    //   console.log('decoderPath is ' + DecoderPath);
    //   gltfLoader = new GLTFLoader()
    //   .setCrossOrigin('anonymous')
    //   .setDRACOLoader(dracoloader)
    //   .setKTX2Loader(ktx2Loader.detectSupport(new WebGLRenderer()))
    //   .setMeshoptDecoder(MeshoptDecoder)
    // })
    const DecoderPath = `https://cdn.jsdelivr.net/npm/three@0.${REVISION}.x/examples/js/libs`;
    dracoloader = new DRACOLoader().setDecoderPath(`${DecoderPath}/draco/gltf/`)
    ktx2Loader = new KTX2Loader().setTranscoderPath(`${DecoderPath}/basis/`)
    dracoloader.preload()
    console.log('decoderPath is ' + DecoderPath);
    gltfLoader = new GLTFLoader()
    .setCrossOrigin('anonymous')
    .setDRACOLoader(dracoloader)
    .setKTX2Loader(ktx2Loader.detectSupport(new WebGLRenderer()))
    .setMeshoptDecoder(MeshoptDecoder)



}

const useStore = create((set, get) => ({
  fileName: '',
  buffer: null,
  textOriginalFile: '',
  // animations: false,
  animations: null,
  code: '',
  scene: null,
  figmaMsg:null,
  createZip: async ({ sandboxCode }) => {
    await import('./createZip').then((mod) => mod.createZip)
    const { fileName, textOriginalFile, buffer } = get()
    const blob = await createZip({ sandboxCode, fileName, textOriginalFile, buffer })

    saveAs(blob, `${fileName.split('.')[0]}.zip`)
  },
  generateScene: async (config) => {
    const { fileName, buffer } = get()
    const result = await new Promise((resolve, reject) => gltfLoader.parse(buffer, '', resolve, reject))

    const code = parse(fileName, result, { ...config, printwidth: 100 })

    try {
      const prettierConfig = config.types
        ? { parser: 'typescript', plugins: [parserTS] }
        : { parser: 'babel', plugins: [parserBabel] }

      set({
        code: prettier.format(code, prettierConfig),
      })
    } catch {
      set({
        code: code,
      })
    }
    // set({
    //   animations: !!result.animations.length,
    // })
    set({
      animations: result.animations,
    })
    // if (!get().scene) set({ scene: result.scene })
    set({ scene: result.scene })
  },
}))

export default useStore
