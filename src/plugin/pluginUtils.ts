import { nginxDirLink,nginxUploadFolder,figmaExportScale,figmaIsUseAbsoluteBounds } from "@Config";

export const sendMsg = (tp,val) => {
  figma.ui.postMessage({type: tp, value:val});
}

export const rejectedMsg = (msg) => {
  console.error(msg)
  sendMsg("failed",null);
  figma.closePlugin();
  throw new Error(msg);
}

const mapKeyValue = (keys,child,frame) =>{
  for(var i =0;i<keys.length;i++){
    child[keys[i].toString()] = frame[keys[i].toString()]
  }
}

export const convertFrameToChild = (frameNode) =>{
  if((frameNode.effects.length + frameNode.strokes.length + frameNode.fills.length) != 0){
    const rect = figma.createRectangle();
    rect.x = 0;
    rect.y = 0;
    rect.resize(frameNode.width,frameNode.height)
    const copyProperties = ['fills','strokes','strokeRightWeight','strokeTopWeight','strokeLeftWeight','strokeBottomWeight',
    'strokeAlign','strokeCap','strokeJoin','strokeMiterLimit','strokeStyleId','strokeWeight',
    'topLeftRadius','topRightRadius','bottomRightRadius','bottomLeftRadius','cornerSmoothing','cornerRadius',
    'rotation','effects','blendMode','name'];
    mapKeyValue(copyProperties,rect,frameNode)
    frameNode.fills = new Array(0);
    frameNode.strokes = new Array(0);
    frameNode.effects = new Array(0);
    frameNode.insertChild(0,rect);
  }
}

export const JSONMapPropsFromParent = (frame,key,node) =>{

  const fileKey = key;
  const nodeId = node.replaceAll(':','%3A');
  const finalLink = nginxDirLink + nginxUploadFolder + '/' + fileKey +'/' + nodeId + '/'

  const isModel = (frame.name.includes('https://') && (frame.name.includes('.gltf') || frame.name.includes('.glb')));
  const obj = {}
  const copyProperties = ['id','width','height','x','y','absoluteBoundingBox','absoluteRenderBounds'];
  mapKeyValue(copyProperties,obj,frame)
  obj.name = isModel?
    frame.name.replaceAll('(','%28').replaceAll(')','%29').replaceAll('%3A','%253A')
    :
    frame.name;
  obj.src = 
    isModel? 
    ((finalLink +  frame.name.split('/')[frame.name.split('/').length - 1]) + `.png`).replaceAll('(','%28').replaceAll(')','%29').replaceAll('%3A','%253A') 
    : 
    ((finalLink + frame.name) + `.png`).replaceAll('(','%28').replaceAll(')','%29').replaceAll('%3A','%253A') 
  return obj
}


export const exportChildImgObjArrForLocal = (childrenNode,childlength,nodeOBJCallback,finishCallback) => {
  const exportLength = childlength
  let finishNum = 0;
  for(let i=0;i<childrenNode.length;i++){
    childrenNode[i].visible = true;
    childrenNode[i].exportAsync({
      contentsOnly: true,
      useAbsoluteBounds:figmaIsUseAbsoluteBounds,
      format: "PNG",
      constraint: {
          type: "SCALE",
          value: figmaExportScale,
      }
    })
    .then( 
      resolved => {
        nodeOBJCallback(
          { 
            name:childrenNode[i].name,
            imageData:resolved,
            type:'image-childnode',
            index:i,
            //modelSrc:(childrenNode[i].name.includes('.gltf') || childrenNode[i].name.includes('.glb'))?childrenNode[i].name:null,
          },
          i
        )

        finishNum++;
        if(finishNum === exportLength){
          console.log('from figma: ' +'last exported image!')
          finishCallback();
        }

      }, rejected => {
        console.error(rejected)
        rejectedMsg('Failed to send image!')
      })
  }
}

export const exportChildImgObjArrForFigma = (childrenNode,childlength,nodeOBJCallback,finishCallback) => {
  const exportLength = childlength
  let finishNum = 0;
  for(let i=0;i<childrenNode.length;i++){
    childrenNode[i].visible = true;
    childrenNode[i].exportAsync({
      contentsOnly: true,
      useAbsoluteBounds:figmaIsUseAbsoluteBounds,
      format: "PNG",
      constraint: {
          type: "SCALE",
          value: figmaExportScale,
      }
    })
    .then( 
      resolved => {
        const modelSrcName = childrenNode[i].name.replaceAll(' ','%20').replaceAll('(','%28').replaceAll(')','%29');
        nodeOBJCallback(
          { 
            name:childrenNode[i].name,
            width:childrenNode[i].width,
            height:childrenNode[i].height,
            x:childrenNode[i].x,
            y:childrenNode[i].y,
            imageData:resolved,
            type:'image-childnode',
            frameWidth:childrenNode[i].parent.width,
            frameHeight:childrenNode[i].parent.height,
            index:i ,
            modelSrc:(childrenNode[i].name.includes('.gltf') || childrenNode[i].name.includes('.glb'))?modelSrcName:null,
          },
          i
        )

        finishNum++;
        if(finishNum === exportLength){
          console.log('from figma: ' +'last exported image!')
          finishCallback();
        }

      }, rejected => {
        console.error(rejected)
        rejectedMsg('Failed to send image!')
      })
  }
}

export const getVisibleChildNode = (frameNode,visibleNodeCallback) =>{
  let childrenNode = [...frameNode.children];
  for(var c=0;c<frameNode.children.length;c++){
    // # get invisible node
    if(!frameNode.children[c].visible) {childrenNode[c] = null;}
    else{
      visibleNodeCallback(frameNode.children[c])
      childrenNode[c].visible = false;
    }
  }
  childrenNode = childrenNode.filter(n => {return n != null && n != '';})
  return childrenNode;
}