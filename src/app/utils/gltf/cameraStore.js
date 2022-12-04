import create from 'zustand'

const useCameraStore = create((set, get) => ({
  tFov:0,
  tNear:0.01,
  tFar:10000,
  tZoom:0,
  tAsept:1,
  tProjectionMatrix: null,
  tInPerspectiveMode:false,
  tInOrthographicMode:true,
  tPosition:[0,0,0],
}))

export default useCameraStore
