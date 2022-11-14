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
            value: 1,
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
    var index = 0;
    // todo,mutiple selection
    //sendMsg("isFigmaEnv",true)
    if (nodes.length === 1) {
      
        let frameNode = nodes[0] 
        selectionName = frameNode.name;
        // todo
        for(var c=0;c<frameNode.children.length;c++){
          frameNode.children[c].visible = false;
        }
        frameNode.exportAsync({
          contentsOnly: true,
          format: "PNG",
          constraint: {
              type: "SCALE",
              value: 2,
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
                  index:index
                }
              )
              console.log("Succeed to send frameNode image!")
              for(let i=0;i<frameNode.children.length;i++){
                frameNode.children[i].visible = true
                frameNode.children[i].exportAsync({
                  contentsOnly: true,
                  format: "PNG",
                  constraint: {
                      type: "SCALE",
                      value: 2,
                  }
                }).then( 
                  resolved => {
                    dataArray.push(
                      { 
                        name:frameNode.children[i].name,
                        width:frameNode.children[i].width,
                        height:frameNode.children[i].height,
                        x:frameNode.children[i].x,
                        y:frameNode.children[i].y,
                        imageData:resolved,
                        type:'image-childnode',
                        index:++index,
                      }
                    )
                    console.log("Succeed to send childNode image!")
                    if(i === frameNode.children.length -1){
                      console.log('last childNode image!')
                      sendMsg("selection",{isFigma:true,data:dataArray});
                    }
                }, rejected => {
                  console.error(rejected)
                  sendMsg("failed",null);
                  console.error("Failed to send image!")
                  throw new Error('Failed to send image!');
                })
              }
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

