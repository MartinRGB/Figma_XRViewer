import React,{useState,useEffect,useRef} from 'react'
import styled from 'styled-components'


const Corner = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  height: 12px;
  width: 12px;
  cursor: nwse-resize;
  z-index:9999;
`

const Bottom = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: calc(100% - 12px);
  height: 4px;
  cursor: n-resize;
  z-index:9999;
`

const Right = styled.div`
  position: absolute;
  top:0px;
  right: 0px;
  height: calc(100% - 12px);
  width: 4px;
  cursor: e-resize;
  z-index:9999;
`

interface DragCornerProps {
  minWidth:number;
  minHeight:number;
}

const DragCorner = ({minWidth,minHeight}:DragCornerProps) => {

  // #### resize ####
  const cornerRef = useRef();
  const bottomRef = useRef();
  const rightRef = useRef();
  function resizeWindow(e,vert,hori) {
    const size = {
      w: Math.max(minWidth,Math.floor(e.clientX)),
      h: Math.max(minHeight,Math.floor(e.clientY)),
      vertical:vert,
      horizontal:hori,
    };
    parent.postMessage( { pluginMessage: { type: 'resize', size: size }}, '*');
  }
  
  useEffect(()=>{
    if(cornerRef.current){
      const corner = cornerRef.current;
      corner.onpointerdown = (e)=>{
        corner.onpointermove = (e) => {
          resizeWindow(e,true,true);
        }
        corner.setPointerCapture(e.pointerId);
      };
      corner.onpointerup = (e)=>{
        corner.onpointermove = null;
        corner.releasePointerCapture(e.pointerId);
      };
    }

    if(rightRef.current){
      const right = rightRef.current;
      right.onpointerdown = (e)=>{
        right.onpointermove = (e) => {
          resizeWindow(e,false,true);
        }
        right.setPointerCapture(e.pointerId);
      };
      right.onpointerup = (e)=>{
        right.onpointermove = null;
        right.releasePointerCapture(e.pointerId);
      };
    }

    if(bottomRef.current){
      const bottom = bottomRef.current;
      bottom.onpointerdown = (e)=>{
        bottom.onpointermove = (e) => {
          resizeWindow(e,true,false);
        }
        bottom.setPointerCapture(e.pointerId);
      };
      bottom.onpointerup = (e)=>{
        bottom.onpointermove = null;
        bottom.releasePointerCapture(e.pointerId);
      };
    }
  },[cornerRef,rightRef,bottomRef])

  return (
    <>
      <Bottom ref={bottomRef}/>
      <Right ref={rightRef} />
      <Corner ref={cornerRef}/>
    </>
  )
}
export default DragCorner;