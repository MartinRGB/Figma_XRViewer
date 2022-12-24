import React,{useState,useEffect, useCallback, useImperativeHandle, forwardRef, useRef} from 'react'
import styled  from 'styled-components'

export const ImageListContainer = styled.div<{isShow:boolean}>`
    background: black;
    z-index: 9999;
    bottom: 17px;
    right: 16px;
    border-radius: 12px;
    width: 246px;
    height: 184px;
    padding:8px;
    gap: 1rem;
    overflow-x: auto;
    position: absolute;
    flex-flow: row;
    align-items: baseline;
    border:1px solid #4b4b4b; // #cacaca
    display:${({isShow}) => (isShow ? 'flex' : 'none')};

    ::before {       
        content: ''; 
        background-color: rgba(127,127,127,1.0);
        background-image: linear-gradient(45deg,#b0b0b0 25%,transparent 25%),linear-gradient(-45deg,#b0b0b0 25%,transparent 25%),linear-gradient(45deg,transparent 75%,#b0b0b0 75%),linear-gradient(-45deg,transparent 75%,#b0b0b0 75%);
        background-size: 20px 20px;
        background-position: 0 0,0 10px,10px -10px,-10px 0px;
        border-radius: 6px;
        position: absolute;
        left: 8px;
        top: 8px;
        width: calc(100% - 16px);
        height: calc(100% - 50px);
    }
`

export const ImageInList = styled.img<{isSelect:boolean}>`
    transition:all 0.15s;
    scroll-snap-align: start;
    object-fit: contain;
    user-select: none;
    width: calc(100% - 40px);
    height: calc(100% - 77px);
    padding: 20px;
    z-index:9999;
    display:${({isSelect}) => (isSelect ? 'initial' : 'none')};
`

export const ImageName = styled.div<{isShow:boolean}>`
  position: absolute;
  bottom: 23px;
  right: 16px;
  width: 255px;
  color: white;
  line-height: 32px;
  font-family: 'Inter','Helvetica',sans-serif;
  font-size: 12px;
  font-weight: 600;
  z-index: 9999;
  text-align: left;
  user-select:none;
  display:${({isShow}) => (isShow ? 'flex' : 'none')};
`

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

interface GalleryIconProps {
  onClick:() => void
}

const GalleryIcon = ({onClick}:GalleryIconProps) => {
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

interface ConditionalImageProps {
  selectIndex:number;
  key:string;
  src:any;
  name:string;
  index:number;
}

interface GalleryCompProps {
  figData:any[];
}

const GalleryComponent = forwardRef(({figData}:GalleryCompProps,ref) =>{

  const [isShow,setIsShow] = useState(false);
  const [selectIndex,setSelectIndex] = useState(-1);
  const [name,setName] = useState('empty');
  
  useImperativeHandle(ref, () => ({
    setSelect: (e) => {setSelectIndex(e)},
  }));

  useEffect(()=>{
    setName((selectIndex != -1)?figData[figData.length - 1 - selectIndex].name:'empty')
  },[selectIndex])

  return(
    <>
    <ImageListContainer isShow={isShow} >
      {figData.map(({ src,type,index,name }) => (
          <ImageInList 
            key={type + '-' + index} 
            src={src}
            id={type + '-' + index}
            name={name}
            isSelect={selectIndex === index}
          />    
      ))}
    </ImageListContainer >
    <ImageName isShow={isShow}>{name}</ImageName>
    {figData.length != 0 &&<GalleryIcon onClick={()=>{setIsShow(!isShow)}}/>}
    </>
  )
})

export default GalleryComponent;