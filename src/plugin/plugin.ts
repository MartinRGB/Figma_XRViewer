const envPlugin = process.env.PLUGIN;
import { sendMsg,rejectedMsg,convertFrameToChild,JSONMapPropsFromParent,exportChildImgObjArrForLocal,getVisibleChildNode } from './pluginUtils'

const fileKey = figma.fileKey;
const fileName = figma.root.name;

figma.ui.onmessage = msg => {
  // ############### GLTF ###############
  if(envPlugin === 'gltf'){
    if(msg.type ==='save-canvas-image'){
      let data = msg.blob
      let imageHash = figma.createImage(data).hash
      const rect = figma.createRectangle()
      console.log(msg)
      rect.name = msg.name;
      rect.resize(Number(process.env.WIDTH),Number(process.env.HEIGHT))
      rect.fills = [
          { type: "IMAGE", scaleMode: "FIT",  imageHash },
      ]
      figma.currentPage.appendChild(rect)
      figma.currentPage.selection = [rect];
    }

    if (msg.type === 'get_data') {
      const figmaId = figma.currentPage.id
      sendMsg("finished_msg", [fileKey,fileName.replaceAll(' ','-'),figmaId]);
    }
  }

  // ############### WebXR Unity ###############
  if(envPlugin === 'webxr' || envPlugin === 'unity'){  
    if (msg.type === 'get_data') {
      let nodes = figma.currentPage.selection;
      if (nodes.length === 1) {
        let frameNode = nodes[0]
        convertFrameToChild(frameNode);
        const nodeId = figma.currentPage.selection[0].id.replaceAll(':','%3A');
        sendMsg("finished_msg", [fileKey,fileName.replaceAll(' ','-'),nodeId]);
      }
      else if(nodes.length > 1){
        rejectedMsg('Only support one frame!')
      }
      else {
        rejectedMsg('No frame has been selected')
      }
    }
  }

  // ############### LocalServer ###############
  if(envPlugin === 'localserver'){  
    if (msg.type === 'get_data') {
      let nodes = figma.currentPage.selection;
      if (nodes.length === 1) {
        const nodeId = figma.currentPage.selection[0].id.replaceAll(':','%3A');

        let frameNode = nodes[0];
        convertFrameToChild(frameNode);
        console.log(frameNode);
        const imgArray = [];

        // ############### json add ###############
        const jsonArr = JSONMapPropsFromParent(frameNode,fileKey,figma.currentPage.selection[0].id);
        jsonArr.children = [];
  
        // ############### filt filt invisible node ###############
        let childrenNode = getVisibleChildNode(frameNode,
        (visibleChildNode)=>{
          // ############### child json add ###############
          const jsonChildArr = JSONMapPropsFromParent(visibleChildNode,fileKey,figma.currentPage.selection[0].id);
          jsonArr.children.push(jsonChildArr);
        }
        );

        childrenNode = childrenNode.filter(n => {return n != null && n != '';})

        const exportChildLength = childrenNode.length;
  
        exportChildImgObjArrForLocal(
          childrenNode,exportChildLength,
          (nodeOBJ,i) =>
          {
            imgArray.push(nodeOBJ)
            //console.log('from figma: ' + `Succeed to get childNode ${i} image!`)
          },
          ()=>{
            sendMsg("finished_msg", [fileKey,fileName.replaceAll(' ','-'),nodeId,imgArray,{node:jsonArr}]);
          }
        )
      }
      else if(nodes.length > 1){
        rejectedMsg('Only support one frame!')
      }
      else {
        rejectedMsg('No frame has been selected')
      }
    }
  }

  // ############### Cancel ###############
  if (msg.type === 'cancel') {
    figma.closePlugin();
  }

};

figma.showUI(__html__,{width:Number(process.env.WIDTH),height:Number(process.env.HEIGHT)});