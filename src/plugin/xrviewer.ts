var exportScale = 1;
var selectionName = '';
const modelExtArr = ['.gltf','.glb']
var finishNum = 0;
const isContainFrame = false;

export const sendMsg = (tp,val) => {
  figma.ui.postMessage({type: tp, value:val});
}

export const rejectedMsg = (msg) => {
  console.error(msg)
  sendMsg("failed",null);
  throw new Error(msg);
}

export const setFrameToNode = (frameNode) =>{
  
  const mapKeyValue = (key,child,frame) =>{
    child[key] = frame[key]
  }

  if((frameNode.effects.length + frameNode.strokes.length + frameNode.fills.length) != 0){
    const rect = figma.createRectangle();
    rect.x = 0;
    rect.y = 0;
    rect.resize(frameNode.width,frameNode.height)
    mapKeyValue('fills',rect,frameNode);
    mapKeyValue('strokes',rect,frameNode);
    mapKeyValue('strokeAlign',rect,frameNode);
    mapKeyValue('strokeBottomWeight',rect,frameNode);
    mapKeyValue('strokeCap',rect,frameNode);
    mapKeyValue('strokeJoin',rect,frameNode);
    mapKeyValue('strokeLeftWeight',rect,frameNode);
    mapKeyValue('strokeMiterLimit',rect,frameNode);
    mapKeyValue('strokeRightWeight',rect,frameNode);
    mapKeyValue('strokeTopWeight',rect,frameNode);
    mapKeyValue('strokeStyleId',rect,frameNode);
    mapKeyValue('strokeWeight',rect,frameNode);
    mapKeyValue('topLeftRadius',rect,frameNode);
    mapKeyValue('topRightRadius',rect,frameNode);
    mapKeyValue('rotation',rect,frameNode);
    mapKeyValue('effects',rect,frameNode);
    mapKeyValue('cornerSmoothing',rect,frameNode);
    mapKeyValue('cornerRadius',rect,frameNode);
    mapKeyValue('bottomRightRadius',rect,frameNode);
    mapKeyValue('bottomLeftRadius',rect,frameNode);
    mapKeyValue('blendMode',rect,frameNode);
    mapKeyValue('name',rect,frameNode);
    frameNode.fills = new Array(0);
    frameNode.strokes = new Array(0);
    frameNode.effects = new Array(0);
    frameNode.insertChild(0,rect);
  }
}

const exportFrameOBJ = (frameNode,exportLength,frameOBJCallback,finishCallback) => {
  frameNode.exportAsync({contentsOnly: true, useAbsoluteBounds:true,format: "PNG",constraint: {type: "SCALE",value: exportScale,}})
  .then(resolved => {
    frameOBJCallback({ 
      name:frameNode.name,
      width:frameNode.width,
      height:frameNode.height,
      x:frameNode.x,
      y:frameNode.y,
      imageData:resolved,
      type:'image-framenode',
      frameWidth:frameNode.width,
      frameHeight:frameNode.height,
      index:0,
      modelSrc:null,
    })

    finishNum++;
    if(finishNum === exportLength){
      console.log('from figma: ' +'last exported image!')
      console.log('111111111')
      finishCallback();
    }
  }), rejected => {
    console.error(rejected)
    rejectedMsg('Failed to send image!')
  }
}

const exportNodeImgObjArr = (childrenNode,exportLength,nodeOBJCallback,finishCallback) => {
  for(let i=0;i<childrenNode.length;i++){
    childrenNode[i].visible = true;
    childrenNode[i].exportAsync({
      contentsOnly: true,
      useAbsoluteBounds:true,
      format: "PNG",
      constraint: {
          type: "SCALE",
          value: exportScale,
      }
    })
    .then( 
      resolved => {
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
            // index:++index,
            index:i + (isContainFrame?1:0),
            modelSrc:(childrenNode[i].name.includes('.gltf') || childrenNode[i].name.includes('.glb'))?childrenNode[i].name:null,
          },
          i
        )

        finishNum++;
        if(finishNum === exportLength){
          console.log('from figma: ' +'last exported image!')
          console.log('0000000000')
          finishCallback();
        }

      }, rejected => {
        console.error(rejected)
        rejectedMsg('Failed to send image!')
      })
  }
}


// Method II
const postImagePromise = () => {
  let nodes = figma.currentPage.selection;
  const dataArray = [];

  if (nodes.length === 1) {
    
      let frameNode = nodes[0] 
      setFrameToNode(frameNode)
      let childrenNode = [...frameNode.children];
      console.log('from figma: ')
      console.log(frameNode)
      selectionName = frameNode.name;
      // ############### filt invisible node ###############
      for(var c=0;c<frameNode.children.length;c++){
        // # get invisible node
        if(!frameNode.children[c].visible) {
          childrenNode[c] = null;
        }
        else{
          childrenNode[c].visible = false;
        }
      }

      childrenNode = childrenNode.filter(n => {return n != null && n != '';})
      const exportLength = childrenNode.length + (isContainFrame?1:0);
      console.log(childrenNode);

      if(isContainFrame){
        exportFrameOBJ(
          frameNode,exportLength,
          (frameOBJ) =>
          {
            dataArray.push(frameOBJ)
            console.log('from figma: Succeed to get frameNode image!')
          },
          ()=>{
            sendMsg("selection",{isFigma:true,data:dataArray});
          }
        )
      }

      exportNodeImgObjArr(
        childrenNode,exportLength,
        (nodeOBJ,i) =>
        {
          dataArray.push(nodeOBJ)
          console.log('from figma: ' + `Succeed to get childNode ${i} image!`)
        },
        ()=>{
          sendMsg("selection",{isFigma:true,data:dataArray});
        }
      )

  }
  else if(nodes.length > 1){
    rejectedMsg("Only support one frame!")
  }
  else {
    rejectedMsg("No frame has been selected!")
  }
}

postImagePromise();

figma.ui.onmessage = (msg) => {
  if(msg.type ==='save-canvas-image'){
      // let data = msg.blob as Uint8Array
      let data = msg.blob
      let imageHash = figma.createImage(data).hash
      const rect = figma.createRectangle()
      console.log('from figma: ')
      console.log(msg)
      rect.name = msg.name;
      rect.resize(msg.width,msg.height)
      rect.fills = [
          { type: "IMAGE", scaleMode: "FIT",  imageHash },
      ]
      figma.currentPage.appendChild(rect)
      figma.currentPage.selection = [rect];
      //figma.viewport.scrollAndZoomIntoView([rect]);
  }
  if(msg.type ==='cancel'){
      figma.closePlugin();
  }
};

figma.showUI(__html__,{width:900,height:675});