// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".
figma.showUI(__html__,{width:400,height:300});

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.

function sendMsg(tp,val) {
  figma.ui.postMessage({type: tp, value:val});
}

figma.ui.onmessage = msg => {
  if (msg.type === 'get_data') {
    let nodes = figma.currentPage.selection;
    if (nodes.length === 1) {
      const fileKey = figma.fileKey;
      const fileName = figma.root.name.replaceAll(' ','-');
      const nodeId = figma.currentPage.selection[0].id.replaceAll(':','%3A');
      sendMsg("finished_msg", [fileKey,fileName,nodeId]);
    }
  }
  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};
