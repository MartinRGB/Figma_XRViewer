import React,{useState,useEffect} from 'react'
import styled  from 'styled-components'

const IconWrapper = styled.div`
  position: absolute;
  right: 23px;
  width: 32px;
  height: 32px;
  bottom: 23px;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  cursor:pointer;
  // border: 1px solid hsl(0deg 0% 25%);
  &:hover{
    background: #40aeff;
  }
  z-index:9999;
`

const SVGWrapper = styled.svg<{active: boolean,hover:boolean}>`
  fill: ${({active,hover}) => (active ? 'white' : hover?'white':'rgba(255,255,255,0.5)')};
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 3px;
  right: 3px;

  &:hover {
    fill: white;
  }
`

interface SVGProps {
  active:boolean;
  hover:boolean;
}

const SVGIcon = ({active,hover}:SVGProps) => {

  return (
  <SVGWrapper active={active} hover={hover}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.002 460.002" >
    <g xmlns="http://www.w3.org/2000/svg" id="XMLID_11_">
      <path id="XMLID_12_" d="M195,150c27.57,0,50-22.43,50-50s-22.43-50-50-50s-50,22.43-50,50S167.43,150,195,150z"/>
      <path id="XMLID_13_" d="M315,0H15C6.716,0,0,6.716,0,15v239.804c0,0.01,0,0.02,0,0.03V315c0,8.284,6.716,15,15,15h300   c8.284,0,15-6.716,15-15V15C330,6.716,323.284,0,315,0z M300,209.636l-32.957-44.388c-2.829-3.811-7.296-6.058-12.043-6.058   s-9.214,2.247-12.043,6.058l-47.531,64.016l-78.093-112.802C114.531,112.415,109.922,110,105,110s-9.531,2.415-12.333,6.462   L30,206.981V30h270V209.636z"/>
    </g>
  </SVGWrapper>
  )
}

interface GalleryProps {
  onClick:() => void
}

const GalleryIcon = ({onClick}:GalleryProps) => {
  const [actived,active] = useState(false);
  const [hovered, hover] = useState(false);
  return(
    <IconWrapper 
      onClick={()=>{
        onClick();
        active(!actived);
      }}
      onMouseEnter={()=>{hover(true)}} 
      onMouseLeave={()=>{hover(false)}}
      >
      <SVGIcon active={actived} hover={hovered} />
    </IconWrapper>
  )
}
export default GalleryIcon;