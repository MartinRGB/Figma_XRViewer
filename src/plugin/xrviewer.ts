var selectionName = '';
import { sendMsg,rejectedMsg,convertFrameToChild,exportChildImgObjArrForFigma,getVisibleChildNode } from './pluginUtils'

const postImgToPlugin = () => {
  let nodes = figma.currentPage.selection;
  const imgArray = [];

  if (nodes.length === 1) {
    
      let frameNode = nodes[0] 
      convertFrameToChild(frameNode)
      console.log('from figma: ')
      console.log(frameNode)
      selectionName = frameNode.name;
      // ############### filt invisible node ###############
      let childrenNode = getVisibleChildNode(frameNode,(n)=>{});
      const exportLength = childrenNode.length ;
      console.log(childrenNode);

      exportChildImgObjArrForFigma(
        childrenNode,exportLength,
        (nodeOBJ,i) =>
        {
          imgArray.push(nodeOBJ)
          console.log('from figma: ' + `Succeed to get childNode ${i} image!`)
        },
        ()=>{
          sendMsg("selection",{isFigma:true,data:imgArray});
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

postImgToPlugin();

figma.ui.onmessage = (msg) => {
  if(msg.type ==='save-canvas-image'){
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