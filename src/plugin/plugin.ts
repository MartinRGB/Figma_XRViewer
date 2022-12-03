const envPlugin = process.env.PLUGIN;

export const sendMsg = (tp,val) => {
  figma.ui.postMessage({type: tp, value:val});
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





figma.ui.onmessage = msg => {
  // GLTF
  if(envPlugin === 'gltf'){
    if(msg.type ==='save-canvas-image'){
      let data = msg.blob
      let imageHash = figma.createImage(data).hash
      const rect = figma.createRectangle()
      console.log(msg)
      rect.name = msg.name;
      rect.resize(msg.width,msg.height)
      rect.fills = [
          { type: "IMAGE", scaleMode: "FIT",  imageHash },
      ]
      figma.currentPage.appendChild(rect)
      figma.currentPage.selection = [rect];
    }
  }

  // WebXR Unity
  if(envPlugin === 'webxr' || envPlugin === 'unity'){  
    if (msg.type === 'get_data') {
      let nodes = figma.currentPage.selection;
      if (nodes.length === 1) {
        let frameNode = nodes[0]
        setFrameToNode(frameNode);
        const fileKey = figma.fileKey;
        const fileName = figma.root.name.replaceAll(' ','-');
        const nodeId = figma.currentPage.selection[0].id.replaceAll(':','%3A');
        sendMsg("finished_msg", [fileKey,fileName,nodeId]);
      }
      else if(nodes.length > 1){
          //sendMsg("failed",null);
        console.error("Only support one frame!")
        throw new Error('Only support one frame!');
      }
      else {
          //sendMsg("failed",null);
          console.error("No frame has been selected!")
          throw new Error('No frame has been selected');
      }
    }
  }

  if (msg.type === 'cancel') {
    figma.closePlugin();
  }

};

figma.showUI(__html__,{width:Number(process.env.WIDTH),height:Number(process.env.HEIGHT)});