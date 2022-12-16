import React, { useRef, useState,useEffect,forwardRef,useCallback,useImperativeHandle,Suspense, useLayoutEffect} from 'react'
import SceneTest from 'src/app/components/ScreenTest.ts'
import styled from 'styled-components'

const ScreenApp = () => {

  //todo error when in XRViewer Plugin,cannot load
  return (
    <>
      <SceneTest></SceneTest>
    </>
  )
}
export default ScreenApp;