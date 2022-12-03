const exportScale = 1;

function sendMsg(tp,val) {
  figma.ui.postMessage({type: tp, value:val});
}


// Method I
function getImg() {
  let nodes = figma.currentPage.selection;
  if (nodes.length > 0) {
    let node = nodes[0] 
    let img = node.exportAsync({
      contentsOnly: true,
      format: "PNG",
      constraint: {
          type: "SCALE",
          value: exportScale,
      }
    })
    return img
  } else {
    return false
  }
}

function postImage(){
  let img = getImg();
  if (img) {
    img.then((img) => {
      sendMsg("selection",img);
    })
  } else {
    sendMsg("msg","No frame has been selected");
  }
}


// todo,mutiple selection
var selectionName = '';

// Method II
function postImagePromise(){
  let nodes = figma.currentPage.selection;
  const dataArray = [];
  //const invisibileIndex = [];
  var index = 0;
  // todo,mutiple selection
  //sendMsg("isFigmaEnv",true)
  if (nodes.length === 1) {
    
      let frameNode = nodes[0] 
      let childrenNode = [...frameNode.children];
      console.log(childrenNode);
      console.log(frameNode)
      console.log('from figma: ')
      console.log(frameNode)
      selectionName = frameNode.name;
      // todo
      for(var c=0;c<frameNode.children.length;c++){
        // # get invisible node
        if(!frameNode.children[c].visible) {
          //invisibileIndex.push(c)
          childrenNode[c] = null;
          
        }
        else{
          childrenNode[c].visible = false;
        }
      }

      childrenNode = childrenNode.filter(n => {return n != null && n != '';})
      console.log(childrenNode);
      frameNode.exportAsync({
        contentsOnly: true,
        format: "PNG",
        constraint: {
            type: "SCALE",
            value: exportScale,
        }
      }).then(
        resolved => {
            dataArray.push(
              { 
                name:frameNode.name,
                width:frameNode.width,
                height:frameNode.height,
                x:frameNode.x,
                y:frameNode.y,
                imageData:resolved,
                type:'image-framenode',
                index:0,
                modelSrc:null,
              }
            )
            console.log('from figma: ' +"Succeed to send frameNode image!")
            
            for(let i=0;i<childrenNode.length;i++){
              // # filt invisible node
              // if(invisibileIndex.includes(i)){
              //   console.log('from figma: ' + i + ' is invisible node');
              // }
              // else{
                console.log(i);
                childrenNode[i].visible = true;
                childrenNode[i].exportAsync({
                  contentsOnly: true,
                  format: "PNG",
                  constraint: {
                      type: "SCALE",
                      value: exportScale,
                  }
                }).then( 
                  resolved => {
                    dataArray.push(
                      { 
                        name:childrenNode[i].name,
                        width:childrenNode[i].width,
                        height:childrenNode[i].height,
                        x:childrenNode[i].x,
                        y:childrenNode[i].y,
                        imageData:resolved,
                        type:'image-childnode',
                        // index:++index,
                        index:i + 1,
                        modelSrc:(childrenNode[i].name.includes('.gltf') || childrenNode[i].name.includes('.glb'))?childrenNode[i].name:null,
                      }
                    )
                    console.log('from figma: ' + `Succeed to send childNode ${i} image!`)
                    // # use index because need filt invisible node
                    if((i + 1 ) === (childrenNode.length)){ //index
                      console.log('from figma: ' +'last childNode image!')
                      sendMsg("selection",{isFigma:true,data:dataArray});
                    }
                }, rejected => {
                  console.error(rejected)
                  sendMsg("failed",null);
                  console.error("Failed to send image!")
                  throw new Error('Failed to send image!');
                })
              }

            // }
        },
        rejected => {
            console.error(rejected)
            sendMsg("failed",null);
            console.error("Failed to send image!")
            throw new Error('Failed to send image!');
      })
  }
  else if(nodes.length > 1){
    sendMsg("failed",null);
    console.error("Only support one frame!")
    throw new Error('Only support one frame!');
  }
  else {
      sendMsg("failed",null);
      console.error("No frame has been selected!")
      throw new Error('No frame has been selected');
  }
}

figma.showUI(__html__,{width:900,height:675});
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

