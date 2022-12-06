/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/configs/index.ts":
/*!**********************************!*\
  !*** ./src/app/configs/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "figmaExportScale": () => (/* binding */ figmaExportScale),
/* harmony export */   "figmaIsContainFrame": () => (/* binding */ figmaIsContainFrame),
/* harmony export */   "figmaIsUseAbsoluteBounds": () => (/* binding */ figmaIsUseAbsoluteBounds),
/* harmony export */   "isLocal": () => (/* binding */ isLocal),
/* harmony export */   "nginxAssetLink": () => (/* binding */ nginxAssetLink),
/* harmony export */   "nginxDirLink": () => (/* binding */ nginxDirLink),
/* harmony export */   "nginxUploadFolder": () => (/* binding */ nginxUploadFolder),
/* harmony export */   "nginxUploadPHPLink": () => (/* binding */ nginxUploadPHPLink),
/* harmony export */   "webClientID": () => (/* binding */ webClientID),
/* harmony export */   "webRendererURL": () => (/* binding */ webRendererURL),
/* harmony export */   "webRootURL": () => (/* binding */ webRootURL),
/* harmony export */   "webSecrectID": () => (/* binding */ webSecrectID)
/* harmony export */ });
var isLocal = true;
var webRootURL = isLocal ? "https://127.0.0.1:8887/" : "https://www.martinrgb.com/FigmaImporter/v4/";
var webRendererURL = isLocal ? "https://127.0.0.1:8887" : "https://www.martinrgb.com/FigmaImporter/v4/index.html";
var webClientID = isLocal ? '6clxS2O4bl9ADNcy1wh5rk' : '2beFW69qeg7DvjBp6bKpm5';
var webSecrectID = isLocal ? '3RtOK3Qx3lMUm3svNfZuycyNAeouxq' : '013RerD24yjKxvSIrUr4f6dESMYST8';
var nginxDirLink = "https://172.22.0.20:8222";
var nginxUploadPHPLink = nginxDirLink + "/php/upload.php";
var nginxUploadFolder = "/external";
var nginxAssetLink = nginxDirLink + nginxUploadFolder;
var figmaExportScale = 1;
var figmaIsContainFrame = false;
var figmaIsUseAbsoluteBounds = true;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/plugin/plugin.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exportNodeImgObjArr": () => (/* binding */ exportNodeImgObjArr),
/* harmony export */   "rejectedMsg": () => (/* binding */ rejectedMsg),
/* harmony export */   "sendMsg": () => (/* binding */ sendMsg),
/* harmony export */   "setFrameToNode": () => (/* binding */ setFrameToNode)
/* harmony export */ });
/* harmony import */ var src_app_configs_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/configs.ts */ "./src/app/configs/index.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var envPlugin = "localserver";
var finishNum = 0;

var sendMsg = function sendMsg(tp, val) {
  figma.ui.postMessage({
    type: tp,
    value: val
  });
};
var rejectedMsg = function rejectedMsg(msg) {
  console.error(msg);
  sendMsg("failed", null);
  figma.closePlugin();
  throw new Error(msg);
};
var setFrameToNode = function setFrameToNode(frameNode) {
  var mapKeyValue = function mapKeyValue(key, child, frame) {
    child[key] = frame[key];
  };
  if (frameNode.effects.length + frameNode.strokes.length + frameNode.fills.length != 0) {
    var rect = figma.createRectangle();
    rect.x = 0;
    rect.y = 0;
    rect.resize(frameNode.width, frameNode.height);
    mapKeyValue('fills', rect, frameNode);
    mapKeyValue('strokes', rect, frameNode);
    mapKeyValue('strokeAlign', rect, frameNode);
    mapKeyValue('strokeBottomWeight', rect, frameNode);
    mapKeyValue('strokeCap', rect, frameNode);
    mapKeyValue('strokeJoin', rect, frameNode);
    mapKeyValue('strokeLeftWeight', rect, frameNode);
    mapKeyValue('strokeMiterLimit', rect, frameNode);
    mapKeyValue('strokeRightWeight', rect, frameNode);
    mapKeyValue('strokeTopWeight', rect, frameNode);
    mapKeyValue('strokeStyleId', rect, frameNode);
    mapKeyValue('strokeWeight', rect, frameNode);
    mapKeyValue('topLeftRadius', rect, frameNode);
    mapKeyValue('topRightRadius', rect, frameNode);
    mapKeyValue('rotation', rect, frameNode);
    mapKeyValue('effects', rect, frameNode);
    mapKeyValue('cornerSmoothing', rect, frameNode);
    mapKeyValue('cornerRadius', rect, frameNode);
    mapKeyValue('bottomRightRadius', rect, frameNode);
    mapKeyValue('bottomLeftRadius', rect, frameNode);
    mapKeyValue('blendMode', rect, frameNode);
    mapKeyValue('name', rect, frameNode);
    frameNode.fills = new Array(0);
    frameNode.strokes = new Array(0);
    frameNode.effects = new Array(0);
    frameNode.insertChild(0, rect);
  }
};
var mapPropsFrom = function mapPropsFrom(frame) {
  //fileKey nodeId
  var fileKey = figma.fileKey;
  var nodeId = figma.currentPage.selection[0].id.replaceAll(':', '%3A');
  var finalLink = src_app_configs_ts__WEBPACK_IMPORTED_MODULE_0__.nginxDirLink + src_app_configs_ts__WEBPACK_IMPORTED_MODULE_0__.nginxUploadFolder + '/' + fileKey + '/' + nodeId + '/';
  var isModel = frame.name.includes('https://') && (frame.name.includes('.gltf') || frame.name.includes('.glb'));
  var obj = {};
  obj.id = frame.id;
  obj.name = isModel ? frame.name.replaceAll('(', '%28').replaceAll(')', '%29').replaceAll('%3A', '%253A') : frame.name;
  obj.width = frame.width;
  obj.height = frame.height;
  obj.x = frame.x;
  obj.y = frame.y;
  obj.absoluteBoundingBox = frame.absoluteBoundingBox;
  obj.absoluteRenderBounds = frame.absoluteRenderBounds;
  obj.src = isModel ? (finalLink + frame.name.split('/')[frame.name.split('/').length - 1] + ".png").replaceAll('(', '%28').replaceAll(')', '%29').replaceAll('%3A', '%253A') : (finalLink + frame.name + ".png").replaceAll('(', '%28').replaceAll(')', '%29').replaceAll('%3A', '%253A');
  return obj;
};
var exportNodeImgObjArr = function exportNodeImgObjArr(childrenNode, exportLength, nodeOBJCallback, finishCallback) {
  var _loop = function _loop(i) {
    childrenNode[i].visible = true;
    childrenNode[i].exportAsync({
      contentsOnly: true,
      useAbsoluteBounds: src_app_configs_ts__WEBPACK_IMPORTED_MODULE_0__.figmaIsUseAbsoluteBounds,
      format: "PNG",
      constraint: {
        type: "SCALE",
        value: src_app_configs_ts__WEBPACK_IMPORTED_MODULE_0__.figmaExportScale
      }
    }).then(function (resolved) {
      nodeOBJCallback({
        name: childrenNode[i].name,
        imageData: resolved,
        type: 'image-childnode',
        index: i + (src_app_configs_ts__WEBPACK_IMPORTED_MODULE_0__.figmaIsContainFrame ? 1 : 0)
        //modelSrc:(childrenNode[i].name.includes('.gltf') || childrenNode[i].name.includes('.glb'))?childrenNode[i].name:null,
      }, i);
      finishNum++;
      if (finishNum === exportLength) {
        console.log('from figma: ' + 'last exported image!');
        finishCallback();
      }
    }, function (rejected) {
      console.error(rejected);
      rejectedMsg('Failed to send image!');
    });
  };
  for (var i = 0; i < childrenNode.length; i++) {
    _loop(i);
  }
};
figma.ui.onmessage = function (msg) {
  // GLTF
  if (envPlugin === 'gltf') {
    if (msg.type === 'save-canvas-image') {
      var data = msg.blob;
      var imageHash = figma.createImage(data).hash;
      var rect = figma.createRectangle();
      console.log(msg);
      rect.name = msg.name;
      rect.resize(Number("400"), Number("300"));
      rect.fills = [{
        type: "IMAGE",
        scaleMode: "FIT",
        imageHash: imageHash
      }];
      figma.currentPage.appendChild(rect);
      figma.currentPage.selection = [rect];
    }
    if (msg.type === 'get_data') {
      var fileKey = figma.fileKey;
      var fileName = figma.root.name.replaceAll(' ', '-');
      //console.log(figma.currentPage.id);
      var nodeId = figma.currentPage.id; //figma.currentPage.selection[0].id.replaceAll(':','%3A')
      sendMsg("finished_msg", [fileKey, fileName, nodeId]);
    }
  }

  // WebXR Unity
  if (envPlugin === 'webxr' || envPlugin === 'unity') {
    if (msg.type === 'get_data') {
      var nodes = figma.currentPage.selection;
      if (nodes.length === 1) {
        var frameNode = nodes[0];
        setFrameToNode(frameNode);
        var _fileKey = figma.fileKey;
        var _fileName = figma.root.name.replaceAll(' ', '-');
        var _nodeId = figma.currentPage.selection[0].id.replaceAll(':', '%3A');
        sendMsg("finished_msg", [_fileKey, _fileName, _nodeId]);
      } else if (nodes.length > 1) {
        rejectedMsg('Only support one frame!');
      } else {
        rejectedMsg('No frame has been selected');
      }
    }
  }

  // LocalServer
  if (envPlugin === 'localserver') {
    if (msg.type === 'get_data') {
      var _nodes = figma.currentPage.selection;
      if (_nodes.length === 1) {
        var _fileKey2 = figma.fileKey;
        var _fileName2 = figma.root.name.replaceAll(' ', '-');
        var _nodeId2 = figma.currentPage.selection[0].id.replaceAll(':', '%3A');
        var _frameNode = _nodes[0];
        setFrameToNode(_frameNode);
        console.log(_frameNode);
        var imgArray = [];
        var childrenNode = _toConsumableArray(_frameNode.children);

        // ############### json add ###############

        var jsonObject = mapPropsFrom(_frameNode);
        jsonObject.children = [];

        // ############### filt invisible node ###############
        for (var c = 0; c < _frameNode.children.length; c++) {
          // # get invisible node
          if (!_frameNode.children[c].visible) {
            childrenNode[c] = null;
          } else {
            // ############### child json add ###############
            var jsonChildObject = mapPropsFrom(_frameNode.children[c]);
            jsonObject.children.push(jsonChildObject);
            childrenNode[c].visible = false;
          }
        }
        childrenNode = childrenNode.filter(function (n) {
          return n != null && n != '';
        });
        var exportLength = childrenNode.length + (src_app_configs_ts__WEBPACK_IMPORTED_MODULE_0__.figmaIsContainFrame ? 1 : 0);
        exportNodeImgObjArr(childrenNode, exportLength, function (nodeOBJ, i) {
          imgArray.push(nodeOBJ);
          //console.log('from figma: ' + `Succeed to get childNode ${i} image!`)
        }, function () {
          sendMsg("finished_msg", [_fileKey2, _fileName2, _nodeId2, imgArray, {
            node: jsonObject
          }]);
        });
      } else if (_nodes.length > 1) {
        rejectedMsg('Only support one frame!');
      } else {
        rejectedMsg('No frame has been selected');
      }
    }
  }
  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};
figma.showUI(__html__, {
  width: Number("400"),
  height: Number("300")
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsT0FBTyxHQUFHLElBQUk7QUFDcEIsSUFBTUMsVUFBVSxHQUFHRCxPQUFPLDRFQUF3RTtBQUNsRyxJQUFNRSxjQUFjLEdBQUdGLE9BQU8scUZBQWlGO0FBQy9HLElBQU1HLFdBQVcsR0FBR0gsT0FBTyxHQUFDLHdCQUF3QixHQUFDLHdCQUF3QjtBQUM3RSxJQUFNSSxZQUFZLEdBQUdKLE9BQU8sR0FBQyxnQ0FBZ0MsR0FBQyxnQ0FBZ0M7QUFDOUYsSUFBTUssWUFBWSw2QkFBNkI7QUFDL0MsSUFBTUMsa0JBQWtCLEdBQUdELFlBQVksb0JBQW9CO0FBQzNELElBQU1FLGlCQUFpQixjQUFjO0FBQ3JDLElBQU1DLGNBQWMsR0FBR0gsWUFBWSxHQUFHRSxpQkFBaUI7QUFDdkQsSUFBTUUsZ0JBQWdCLEdBQUcsQ0FBQztBQUMxQixJQUFNQyxtQkFBbUIsR0FBRyxLQUFLO0FBQ2pDLElBQU1DLHdCQUF3QixHQUFFLElBQUk7Ozs7OztVQ1gzQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsSUFBTUMsU0FBUyxHQUFHQyxhQUFrQjtBQUNwQyxJQUFJRyxTQUFTLEdBQUcsQ0FBQztBQUNpSDtBQUUzSCxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBTyxDQUFJQyxFQUFFLEVBQUNDLEdBQUcsRUFBSztFQUNqQ0MsS0FBSyxDQUFDQyxFQUFFLENBQUNDLFdBQVcsQ0FBQztJQUFDQyxJQUFJLEVBQUVMLEVBQUU7SUFBRU0sS0FBSyxFQUFDTDtFQUFHLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBRU0sSUFBTU0sV0FBVyxHQUFHLFNBQWRBLFdBQVcsQ0FBSUMsR0FBRyxFQUFLO0VBQ2xDQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsR0FBRyxDQUFDO0VBQ2xCVCxPQUFPLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQztFQUN0QkcsS0FBSyxDQUFDUyxXQUFXLEVBQUU7RUFDbkIsTUFBTSxJQUFJQyxLQUFLLENBQUNKLEdBQUcsQ0FBQztBQUN0QixDQUFDO0FBRU0sSUFBTUssY0FBYyxHQUFHLFNBQWpCQSxjQUFjLENBQUlDLFNBQVMsRUFBSTtFQUUxQyxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBVyxDQUFJQyxHQUFHLEVBQUNDLEtBQUssRUFBQ0MsS0FBSyxFQUFJO0lBQ3RDRCxLQUFLLENBQUNELEdBQUcsQ0FBQyxHQUFHRSxLQUFLLENBQUNGLEdBQUcsQ0FBQztFQUN6QixDQUFDO0VBRUQsSUFBSUYsU0FBUyxDQUFDSyxPQUFPLENBQUNDLE1BQU0sR0FBR04sU0FBUyxDQUFDTyxPQUFPLENBQUNELE1BQU0sR0FBR04sU0FBUyxDQUFDUSxLQUFLLENBQUNGLE1BQU0sSUFBSyxDQUFDLEVBQUM7SUFDckYsSUFBTUcsSUFBSSxHQUFHckIsS0FBSyxDQUFDc0IsZUFBZSxFQUFFO0lBQ3BDRCxJQUFJLENBQUNFLENBQUMsR0FBRyxDQUFDO0lBQ1ZGLElBQUksQ0FBQ0csQ0FBQyxHQUFHLENBQUM7SUFDVkgsSUFBSSxDQUFDSSxNQUFNLENBQUNiLFNBQVMsQ0FBQ2MsS0FBSyxFQUFDZCxTQUFTLENBQUNlLE1BQU0sQ0FBQztJQUM3Q2QsV0FBVyxDQUFDLE9BQU8sRUFBQ1EsSUFBSSxFQUFDVCxTQUFTLENBQUM7SUFDbkNDLFdBQVcsQ0FBQyxTQUFTLEVBQUNRLElBQUksRUFBQ1QsU0FBUyxDQUFDO0lBQ3JDQyxXQUFXLENBQUMsYUFBYSxFQUFDUSxJQUFJLEVBQUNULFNBQVMsQ0FBQztJQUN6Q0MsV0FBVyxDQUFDLG9CQUFvQixFQUFDUSxJQUFJLEVBQUNULFNBQVMsQ0FBQztJQUNoREMsV0FBVyxDQUFDLFdBQVcsRUFBQ1EsSUFBSSxFQUFDVCxTQUFTLENBQUM7SUFDdkNDLFdBQVcsQ0FBQyxZQUFZLEVBQUNRLElBQUksRUFBQ1QsU0FBUyxDQUFDO0lBQ3hDQyxXQUFXLENBQUMsa0JBQWtCLEVBQUNRLElBQUksRUFBQ1QsU0FBUyxDQUFDO0lBQzlDQyxXQUFXLENBQUMsa0JBQWtCLEVBQUNRLElBQUksRUFBQ1QsU0FBUyxDQUFDO0lBQzlDQyxXQUFXLENBQUMsbUJBQW1CLEVBQUNRLElBQUksRUFBQ1QsU0FBUyxDQUFDO0lBQy9DQyxXQUFXLENBQUMsaUJBQWlCLEVBQUNRLElBQUksRUFBQ1QsU0FBUyxDQUFDO0lBQzdDQyxXQUFXLENBQUMsZUFBZSxFQUFDUSxJQUFJLEVBQUNULFNBQVMsQ0FBQztJQUMzQ0MsV0FBVyxDQUFDLGNBQWMsRUFBQ1EsSUFBSSxFQUFDVCxTQUFTLENBQUM7SUFDMUNDLFdBQVcsQ0FBQyxlQUFlLEVBQUNRLElBQUksRUFBQ1QsU0FBUyxDQUFDO0lBQzNDQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUNRLElBQUksRUFBQ1QsU0FBUyxDQUFDO0lBQzVDQyxXQUFXLENBQUMsVUFBVSxFQUFDUSxJQUFJLEVBQUNULFNBQVMsQ0FBQztJQUN0Q0MsV0FBVyxDQUFDLFNBQVMsRUFBQ1EsSUFBSSxFQUFDVCxTQUFTLENBQUM7SUFDckNDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBQ1EsSUFBSSxFQUFDVCxTQUFTLENBQUM7SUFDN0NDLFdBQVcsQ0FBQyxjQUFjLEVBQUNRLElBQUksRUFBQ1QsU0FBUyxDQUFDO0lBQzFDQyxXQUFXLENBQUMsbUJBQW1CLEVBQUNRLElBQUksRUFBQ1QsU0FBUyxDQUFDO0lBQy9DQyxXQUFXLENBQUMsa0JBQWtCLEVBQUNRLElBQUksRUFBQ1QsU0FBUyxDQUFDO0lBQzlDQyxXQUFXLENBQUMsV0FBVyxFQUFDUSxJQUFJLEVBQUNULFNBQVMsQ0FBQztJQUN2Q0MsV0FBVyxDQUFDLE1BQU0sRUFBQ1EsSUFBSSxFQUFDVCxTQUFTLENBQUM7SUFDbENBLFNBQVMsQ0FBQ1EsS0FBSyxHQUFHLElBQUlRLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDOUJoQixTQUFTLENBQUNPLE9BQU8sR0FBRyxJQUFJUyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2hDaEIsU0FBUyxDQUFDSyxPQUFPLEdBQUcsSUFBSVcsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNoQ2hCLFNBQVMsQ0FBQ2lCLFdBQVcsQ0FBQyxDQUFDLEVBQUNSLElBQUksQ0FBQztFQUMvQjtBQUNGLENBQUM7QUFFRCxJQUFNUyxZQUFZLEdBQUcsU0FBZkEsWUFBWSxDQUFJZCxLQUFLLEVBQUk7RUFDN0I7RUFDQSxJQUFNZSxPQUFPLEdBQUcvQixLQUFLLENBQUMrQixPQUFPO0VBQzdCLElBQU1DLE1BQU0sR0FBR2hDLEtBQUssQ0FBQ2lDLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxFQUFFLENBQUNDLFVBQVUsQ0FBQyxHQUFHLEVBQUMsS0FBSyxDQUFDO0VBRXRFLElBQU1DLFNBQVMsR0FBR3BELDREQUFZLEdBQUdFLGlFQUFpQixHQUFHLEdBQUcsR0FBRzRDLE9BQU8sR0FBRSxHQUFHLEdBQUdDLE1BQU0sR0FBRyxHQUFHO0VBRXRGLElBQU1NLE9BQU8sR0FBSXRCLEtBQUssQ0FBQ3VCLElBQUksQ0FBQ0MsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLeEIsS0FBSyxDQUFDdUIsSUFBSSxDQUFDQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUl4QixLQUFLLENBQUN1QixJQUFJLENBQUNDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBRTtFQUNsSCxJQUFNQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0VBQ2RBLEdBQUcsQ0FBQ04sRUFBRSxHQUFHbkIsS0FBSyxDQUFDbUIsRUFBRTtFQUNqQk0sR0FBRyxDQUFDRixJQUFJLEdBQUdELE9BQU8sR0FDaEJ0QixLQUFLLENBQUN1QixJQUFJLENBQUNILFVBQVUsQ0FBQyxHQUFHLEVBQUMsS0FBSyxDQUFDLENBQUNBLFVBQVUsQ0FBQyxHQUFHLEVBQUMsS0FBSyxDQUFDLENBQUNBLFVBQVUsQ0FBQyxLQUFLLEVBQUMsT0FBTyxDQUFDLEdBRWhGcEIsS0FBSyxDQUFDdUIsSUFBSTtFQUNaRSxHQUFHLENBQUNmLEtBQUssR0FBR1YsS0FBSyxDQUFDVSxLQUFLO0VBQ3ZCZSxHQUFHLENBQUNkLE1BQU0sR0FBR1gsS0FBSyxDQUFDVyxNQUFNO0VBQ3pCYyxHQUFHLENBQUNsQixDQUFDLEdBQUdQLEtBQUssQ0FBQ08sQ0FBQztFQUNma0IsR0FBRyxDQUFDakIsQ0FBQyxHQUFHUixLQUFLLENBQUNRLENBQUM7RUFDZmlCLEdBQUcsQ0FBQ0MsbUJBQW1CLEdBQUcxQixLQUFLLENBQUMwQixtQkFBbUI7RUFDbkRELEdBQUcsQ0FBQ0Usb0JBQW9CLEdBQUczQixLQUFLLENBQUMyQixvQkFBb0I7RUFDckRGLEdBQUcsQ0FBQ0csR0FBRyxHQUNMTixPQUFPLEdBQ1AsQ0FBRUQsU0FBUyxHQUFJckIsS0FBSyxDQUFDdUIsSUFBSSxDQUFDTSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM3QixLQUFLLENBQUN1QixJQUFJLENBQUNNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzNCLE1BQU0sR0FBRyxDQUFDLENBQUMsU0FBVSxFQUFFa0IsVUFBVSxDQUFDLEdBQUcsRUFBQyxLQUFLLENBQUMsQ0FBQ0EsVUFBVSxDQUFDLEdBQUcsRUFBQyxLQUFLLENBQUMsQ0FBQ0EsVUFBVSxDQUFDLEtBQUssRUFBQyxPQUFPLENBQUMsR0FFdkosQ0FBRUMsU0FBUyxHQUFHckIsS0FBSyxDQUFDdUIsSUFBSSxTQUFVLEVBQUVILFVBQVUsQ0FBQyxHQUFHLEVBQUMsS0FBSyxDQUFDLENBQUNBLFVBQVUsQ0FBQyxHQUFHLEVBQUMsS0FBSyxDQUFDLENBQUNBLFVBQVUsQ0FBQyxLQUFLLEVBQUMsT0FBTyxDQUFDO0VBQzNHLE9BQU9LLEdBQUc7QUFDWixDQUFDO0FBR00sSUFBTUssbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQixDQUFJQyxZQUFZLEVBQUNDLFlBQVksRUFBQ0MsZUFBZSxFQUFDQyxjQUFjLEVBQUs7RUFBQSwyQkFDdkZDLENBQUM7SUFDUEosWUFBWSxDQUFDSSxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxHQUFHLElBQUk7SUFDOUJMLFlBQVksQ0FBQ0ksQ0FBQyxDQUFDLENBQUNFLFdBQVcsQ0FBQztNQUMxQkMsWUFBWSxFQUFFLElBQUk7TUFDbEJDLGlCQUFpQixFQUFDaEUsd0VBQXdCO01BQzFDaUUsTUFBTSxFQUFFLEtBQUs7TUFDYkMsVUFBVSxFQUFFO1FBQ1J0RCxJQUFJLEVBQUUsT0FBTztRQUNiQyxLQUFLLEVBQUVmLGdFQUFnQkE7TUFDM0I7SUFDRixDQUFDLENBQUMsQ0FDRHFFLElBQUksQ0FDSCxVQUFBQyxRQUFRLEVBQUk7TUFDVlYsZUFBZSxDQUNiO1FBQ0VWLElBQUksRUFBQ1EsWUFBWSxDQUFDSSxDQUFDLENBQUMsQ0FBQ1osSUFBSTtRQUN6QnFCLFNBQVMsRUFBQ0QsUUFBUTtRQUNsQnhELElBQUksRUFBQyxpQkFBaUI7UUFDdEIwRCxLQUFLLEVBQUNWLENBQUMsSUFBSTdELG1FQUFtQixHQUFDLENBQUMsR0FBQyxDQUFDO1FBQ2xDO01BQ0YsQ0FBQyxFQUNENkQsQ0FBQyxDQUNGO01BRUR2RCxTQUFTLEVBQUU7TUFDWCxJQUFHQSxTQUFTLEtBQUtvRCxZQUFZLEVBQUM7UUFDNUJ6QyxPQUFPLENBQUN1RCxHQUFHLENBQUMsY0FBYyxHQUFFLHNCQUFzQixDQUFDO1FBQ25EWixjQUFjLEVBQUU7TUFDbEI7SUFFRixDQUFDLEVBQUUsVUFBQWEsUUFBUSxFQUFJO01BQ2J4RCxPQUFPLENBQUNDLEtBQUssQ0FBQ3VELFFBQVEsQ0FBQztNQUN2QjFELFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQztJQUN0QyxDQUFDLENBQUM7RUFBQTtFQWpDTixLQUFJLElBQUk4QyxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUNKLFlBQVksQ0FBQzdCLE1BQU0sRUFBQ2lDLENBQUMsRUFBRSxFQUFDO0lBQUEsTUFBOUJBLENBQUM7RUFrQ1Q7QUFDRixDQUFDO0FBSURuRCxLQUFLLENBQUNDLEVBQUUsQ0FBQytELFNBQVMsR0FBRyxVQUFBMUQsR0FBRyxFQUFJO0VBQzFCO0VBQ0EsSUFBR2QsU0FBUyxLQUFLLE1BQU0sRUFBQztJQUN0QixJQUFHYyxHQUFHLENBQUNILElBQUksS0FBSSxtQkFBbUIsRUFBQztNQUNqQyxJQUFJOEQsSUFBSSxHQUFHM0QsR0FBRyxDQUFDNEQsSUFBSTtNQUNuQixJQUFJQyxTQUFTLEdBQUduRSxLQUFLLENBQUNvRSxXQUFXLENBQUNILElBQUksQ0FBQyxDQUFDSSxJQUFJO01BQzVDLElBQU1oRCxJQUFJLEdBQUdyQixLQUFLLENBQUNzQixlQUFlLEVBQUU7TUFDcENmLE9BQU8sQ0FBQ3VELEdBQUcsQ0FBQ3hELEdBQUcsQ0FBQztNQUNoQmUsSUFBSSxDQUFDa0IsSUFBSSxHQUFHakMsR0FBRyxDQUFDaUMsSUFBSTtNQUNwQmxCLElBQUksQ0FBQ0ksTUFBTSxDQUFDNkMsTUFBTSxDQUFDN0UsS0FBaUIsQ0FBQyxFQUFDNkUsTUFBTSxDQUFDN0UsS0FBa0IsQ0FBQyxDQUFDO01BQ2pFNEIsSUFBSSxDQUFDRCxLQUFLLEdBQUcsQ0FDVDtRQUFFakIsSUFBSSxFQUFFLE9BQU87UUFBRXNFLFNBQVMsRUFBRSxLQUFLO1FBQUdOLFNBQVMsRUFBVEE7TUFBVSxDQUFDLENBQ2xEO01BQ0RuRSxLQUFLLENBQUNpQyxXQUFXLENBQUN5QyxXQUFXLENBQUNyRCxJQUFJLENBQUM7TUFDbkNyQixLQUFLLENBQUNpQyxXQUFXLENBQUNDLFNBQVMsR0FBRyxDQUFDYixJQUFJLENBQUM7SUFDdEM7SUFFQSxJQUFJZixHQUFHLENBQUNILElBQUksS0FBSyxVQUFVLEVBQUU7TUFDM0IsSUFBTTRCLE9BQU8sR0FBRy9CLEtBQUssQ0FBQytCLE9BQU87TUFDN0IsSUFBTTRDLFFBQVEsR0FBRzNFLEtBQUssQ0FBQzRFLElBQUksQ0FBQ3JDLElBQUksQ0FBQ0gsVUFBVSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUM7TUFDcEQ7TUFDQSxJQUFNSixNQUFNLEdBQUdoQyxLQUFLLENBQUNpQyxXQUFXLENBQUNFLEVBQUUsQ0FBQyxDQUFDO01BQ3JDdEMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDa0MsT0FBTyxFQUFDNEMsUUFBUSxFQUFDM0MsTUFBTSxDQUFDLENBQUM7SUFDcEQ7RUFDRjs7RUFFQTtFQUNBLElBQUd4QyxTQUFTLEtBQUssT0FBTyxJQUFJQSxTQUFTLEtBQUssT0FBTyxFQUFDO0lBQ2hELElBQUljLEdBQUcsQ0FBQ0gsSUFBSSxLQUFLLFVBQVUsRUFBRTtNQUMzQixJQUFJMEUsS0FBSyxHQUFHN0UsS0FBSyxDQUFDaUMsV0FBVyxDQUFDQyxTQUFTO01BQ3ZDLElBQUkyQyxLQUFLLENBQUMzRCxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3RCLElBQUlOLFNBQVMsR0FBR2lFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEJsRSxjQUFjLENBQUNDLFNBQVMsQ0FBQztRQUN6QixJQUFNbUIsUUFBTyxHQUFHL0IsS0FBSyxDQUFDK0IsT0FBTztRQUM3QixJQUFNNEMsU0FBUSxHQUFHM0UsS0FBSyxDQUFDNEUsSUFBSSxDQUFDckMsSUFBSSxDQUFDSCxVQUFVLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQztRQUNwRCxJQUFNSixPQUFNLEdBQUdoQyxLQUFLLENBQUNpQyxXQUFXLENBQUNDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsRUFBRSxDQUFDQyxVQUFVLENBQUMsR0FBRyxFQUFDLEtBQUssQ0FBQztRQUN0RXZDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQ2tDLFFBQU8sRUFBQzRDLFNBQVEsRUFBQzNDLE9BQU0sQ0FBQyxDQUFDO01BQ3BELENBQUMsTUFDSSxJQUFHNkMsS0FBSyxDQUFDM0QsTUFBTSxHQUFHLENBQUMsRUFBQztRQUN2QmIsV0FBVyxDQUFDLHlCQUF5QixDQUFDO01BQ3hDLENBQUMsTUFDSTtRQUNIQSxXQUFXLENBQUMsNEJBQTRCLENBQUM7TUFDM0M7SUFDRjtFQUNGOztFQUVBO0VBQ0EsSUFBR2IsU0FBUyxLQUFLLGFBQWEsRUFBQztJQUM3QixJQUFJYyxHQUFHLENBQUNILElBQUksS0FBSyxVQUFVLEVBQUU7TUFDM0IsSUFBSTBFLE1BQUssR0FBRzdFLEtBQUssQ0FBQ2lDLFdBQVcsQ0FBQ0MsU0FBUztNQUN2QyxJQUFJMkMsTUFBSyxDQUFDM0QsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN0QixJQUFNYSxTQUFPLEdBQUcvQixLQUFLLENBQUMrQixPQUFPO1FBQzdCLElBQU00QyxVQUFRLEdBQUczRSxLQUFLLENBQUM0RSxJQUFJLENBQUNyQyxJQUFJLENBQUNILFVBQVUsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO1FBQ3BELElBQU1KLFFBQU0sR0FBR2hDLEtBQUssQ0FBQ2lDLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxFQUFFLENBQUNDLFVBQVUsQ0FBQyxHQUFHLEVBQUMsS0FBSyxDQUFDO1FBRXRFLElBQUl4QixVQUFTLEdBQUdpRSxNQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hCbEUsY0FBYyxDQUFDQyxVQUFTLENBQUM7UUFDekJMLE9BQU8sQ0FBQ3VELEdBQUcsQ0FBQ2xELFVBQVMsQ0FBQztRQUN0QixJQUFNa0UsUUFBUSxHQUFHLEVBQUU7UUFDbkIsSUFBSS9CLFlBQVksc0JBQU9uQyxVQUFTLENBQUNtRSxRQUFRLENBQUM7O1FBRTFDOztRQUVBLElBQU1DLFVBQVUsR0FBR2xELFlBQVksQ0FBQ2xCLFVBQVMsQ0FBQztRQUMxQ29FLFVBQVUsQ0FBQ0QsUUFBUSxHQUFHLEVBQUU7O1FBRXhCO1FBQ0EsS0FBSSxJQUFJRSxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUNyRSxVQUFTLENBQUNtRSxRQUFRLENBQUM3RCxNQUFNLEVBQUMrRCxDQUFDLEVBQUUsRUFBQztVQUMxQztVQUNBLElBQUcsQ0FBQ3JFLFVBQVMsQ0FBQ21FLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDLENBQUM3QixPQUFPLEVBQUU7WUFBQ0wsWUFBWSxDQUFDa0MsQ0FBQyxDQUFDLEdBQUcsSUFBSTtVQUFDLENBQUMsTUFDeEQ7WUFDRjtZQUNBLElBQU1DLGVBQWUsR0FBR3BELFlBQVksQ0FBQ2xCLFVBQVMsQ0FBQ21FLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDLENBQUM7WUFDM0RELFVBQVUsQ0FBQ0QsUUFBUSxDQUFDSSxJQUFJLENBQUNELGVBQWUsQ0FBQztZQUN6Q25DLFlBQVksQ0FBQ2tDLENBQUMsQ0FBQyxDQUFDN0IsT0FBTyxHQUFHLEtBQUs7VUFDakM7UUFDRjtRQUVBTCxZQUFZLEdBQUdBLFlBQVksQ0FBQ3FDLE1BQU0sQ0FBQyxVQUFBQyxDQUFDLEVBQUk7VUFBQyxPQUFPQSxDQUFDLElBQUksSUFBSSxJQUFJQSxDQUFDLElBQUksRUFBRTtRQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFNckMsWUFBWSxHQUFHRCxZQUFZLENBQUM3QixNQUFNLElBQUk1QixtRUFBbUIsR0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBRXBFd0QsbUJBQW1CLENBQ2pCQyxZQUFZLEVBQUNDLFlBQVksRUFDekIsVUFBQ3NDLE9BQU8sRUFBQ25DLENBQUMsRUFDVjtVQUNFMkIsUUFBUSxDQUFDSyxJQUFJLENBQUNHLE9BQU8sQ0FBQztVQUN0QjtRQUNGLENBQUMsRUFDRCxZQUFJO1VBQ0Z6RixPQUFPLENBQUMsY0FBYyxFQUFFLENBQUNrQyxTQUFPLEVBQUM0QyxVQUFRLEVBQUMzQyxRQUFNLEVBQUM4QyxRQUFRLEVBQUM7WUFBQ1MsSUFBSSxFQUFDUDtVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQy9FLENBQUMsQ0FDRjtNQUNILENBQUMsTUFDSSxJQUFHSCxNQUFLLENBQUMzRCxNQUFNLEdBQUcsQ0FBQyxFQUFDO1FBQ3ZCYixXQUFXLENBQUMseUJBQXlCLENBQUM7TUFDeEMsQ0FBQyxNQUNJO1FBQ0hBLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQztNQUMzQztJQUNGO0VBQ0Y7RUFFQSxJQUFJQyxHQUFHLENBQUNILElBQUksS0FBSyxRQUFRLEVBQUU7SUFDekJILEtBQUssQ0FBQ1MsV0FBVyxFQUFFO0VBQ3JCO0FBRUYsQ0FBQztBQUVEVCxLQUFLLENBQUN3RixNQUFNLENBQUNDLFFBQVEsRUFBQztFQUFDL0QsS0FBSyxFQUFDNEMsTUFBTSxDQUFDN0UsS0FBaUIsQ0FBQztFQUFDa0MsTUFBTSxFQUFDMkMsTUFBTSxDQUFDN0UsS0FBa0I7QUFBQyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL1hSVmlld2VyLy4vc3JjL2FwcC9jb25maWdzL2luZGV4LnRzIiwid2VicGFjazovL1hSVmlld2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1hSVmlld2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9YUlZpZXdlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1hSVmlld2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vWFJWaWV3ZXIvLi9zcmMvcGx1Z2luL3BsdWdpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaXNMb2NhbCA9IHRydWU7XHJcbmV4cG9ydCBjb25zdCB3ZWJSb290VVJMID0gaXNMb2NhbD9gaHR0cHM6Ly8xMjcuMC4wLjE6ODg4Ny9gOmBodHRwczovL3d3dy5tYXJ0aW5yZ2IuY29tL0ZpZ21hSW1wb3J0ZXIvdjQvYDtcclxuZXhwb3J0IGNvbnN0IHdlYlJlbmRlcmVyVVJMID0gaXNMb2NhbD9gaHR0cHM6Ly8xMjcuMC4wLjE6ODg4N2A6YGh0dHBzOi8vd3d3Lm1hcnRpbnJnYi5jb20vRmlnbWFJbXBvcnRlci92NC9pbmRleC5odG1sYDtcclxuZXhwb3J0IGNvbnN0IHdlYkNsaWVudElEID0gaXNMb2NhbD8nNmNseFMyTzRibDlBRE5jeTF3aDVyayc6JzJiZUZXNjlxZWc3RHZqQnA2YktwbTUnO1xyXG5leHBvcnQgY29uc3Qgd2ViU2VjcmVjdElEID0gaXNMb2NhbD8nM1J0T0szUXgzbE1VbTNzdk5mWnV5Y3lOQWVvdXhxJzonMDEzUmVyRDI0eWpLeHZTSXJVcjRmNmRFU01ZU1Q4JztcclxuZXhwb3J0IGNvbnN0IG5naW54RGlyTGluayA9IGBodHRwczovLzE3Mi4yMi4wLjIwOjgyMjJgO1xyXG5leHBvcnQgY29uc3QgbmdpbnhVcGxvYWRQSFBMaW5rID0gbmdpbnhEaXJMaW5rICsgYC9waHAvdXBsb2FkLnBocGA7XHJcbmV4cG9ydCBjb25zdCBuZ2lueFVwbG9hZEZvbGRlciA9IGAvZXh0ZXJuYWxgO1xyXG5leHBvcnQgY29uc3QgbmdpbnhBc3NldExpbmsgPSBuZ2lueERpckxpbmsgKyBuZ2lueFVwbG9hZEZvbGRlcjtcclxuZXhwb3J0IGNvbnN0IGZpZ21hRXhwb3J0U2NhbGUgPSAxO1xyXG5leHBvcnQgY29uc3QgZmlnbWFJc0NvbnRhaW5GcmFtZSA9IGZhbHNlO1xyXG5leHBvcnQgY29uc3QgZmlnbWFJc1VzZUFic29sdXRlQm91bmRzID10cnVlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgZW52UGx1Z2luID0gcHJvY2Vzcy5lbnYuUExVR0lOO1xyXG52YXIgZmluaXNoTnVtID0gMDtcclxuaW1wb3J0IHsgbmdpbnhEaXJMaW5rLG5naW54VXBsb2FkRm9sZGVyLGZpZ21hRXhwb3J0U2NhbGUsZmlnbWFJc0NvbnRhaW5GcmFtZSxmaWdtYUlzVXNlQWJzb2x1dGVCb3VuZHMgfSBmcm9tIFwic3JjL2FwcC9jb25maWdzLnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZE1zZyA9ICh0cCx2YWwpID0+IHtcclxuICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7dHlwZTogdHAsIHZhbHVlOnZhbH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVqZWN0ZWRNc2cgPSAobXNnKSA9PiB7XHJcbiAgY29uc29sZS5lcnJvcihtc2cpXHJcbiAgc2VuZE1zZyhcImZhaWxlZFwiLG51bGwpO1xyXG4gIGZpZ21hLmNsb3NlUGx1Z2luKCk7XHJcbiAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRGcmFtZVRvTm9kZSA9IChmcmFtZU5vZGUpID0+e1xyXG4gIFxyXG4gIGNvbnN0IG1hcEtleVZhbHVlID0gKGtleSxjaGlsZCxmcmFtZSkgPT57XHJcbiAgICBjaGlsZFtrZXldID0gZnJhbWVba2V5XVxyXG4gIH1cclxuXHJcbiAgaWYoKGZyYW1lTm9kZS5lZmZlY3RzLmxlbmd0aCArIGZyYW1lTm9kZS5zdHJva2VzLmxlbmd0aCArIGZyYW1lTm9kZS5maWxscy5sZW5ndGgpICE9IDApe1xyXG4gICAgY29uc3QgcmVjdCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpO1xyXG4gICAgcmVjdC54ID0gMDtcclxuICAgIHJlY3QueSA9IDA7XHJcbiAgICByZWN0LnJlc2l6ZShmcmFtZU5vZGUud2lkdGgsZnJhbWVOb2RlLmhlaWdodClcclxuICAgIG1hcEtleVZhbHVlKCdmaWxscycscmVjdCxmcmFtZU5vZGUpO1xyXG4gICAgbWFwS2V5VmFsdWUoJ3N0cm9rZXMnLHJlY3QsZnJhbWVOb2RlKTtcclxuICAgIG1hcEtleVZhbHVlKCdzdHJva2VBbGlnbicscmVjdCxmcmFtZU5vZGUpO1xyXG4gICAgbWFwS2V5VmFsdWUoJ3N0cm9rZUJvdHRvbVdlaWdodCcscmVjdCxmcmFtZU5vZGUpO1xyXG4gICAgbWFwS2V5VmFsdWUoJ3N0cm9rZUNhcCcscmVjdCxmcmFtZU5vZGUpO1xyXG4gICAgbWFwS2V5VmFsdWUoJ3N0cm9rZUpvaW4nLHJlY3QsZnJhbWVOb2RlKTtcclxuICAgIG1hcEtleVZhbHVlKCdzdHJva2VMZWZ0V2VpZ2h0JyxyZWN0LGZyYW1lTm9kZSk7XHJcbiAgICBtYXBLZXlWYWx1ZSgnc3Ryb2tlTWl0ZXJMaW1pdCcscmVjdCxmcmFtZU5vZGUpO1xyXG4gICAgbWFwS2V5VmFsdWUoJ3N0cm9rZVJpZ2h0V2VpZ2h0JyxyZWN0LGZyYW1lTm9kZSk7XHJcbiAgICBtYXBLZXlWYWx1ZSgnc3Ryb2tlVG9wV2VpZ2h0JyxyZWN0LGZyYW1lTm9kZSk7XHJcbiAgICBtYXBLZXlWYWx1ZSgnc3Ryb2tlU3R5bGVJZCcscmVjdCxmcmFtZU5vZGUpO1xyXG4gICAgbWFwS2V5VmFsdWUoJ3N0cm9rZVdlaWdodCcscmVjdCxmcmFtZU5vZGUpO1xyXG4gICAgbWFwS2V5VmFsdWUoJ3RvcExlZnRSYWRpdXMnLHJlY3QsZnJhbWVOb2RlKTtcclxuICAgIG1hcEtleVZhbHVlKCd0b3BSaWdodFJhZGl1cycscmVjdCxmcmFtZU5vZGUpO1xyXG4gICAgbWFwS2V5VmFsdWUoJ3JvdGF0aW9uJyxyZWN0LGZyYW1lTm9kZSk7XHJcbiAgICBtYXBLZXlWYWx1ZSgnZWZmZWN0cycscmVjdCxmcmFtZU5vZGUpO1xyXG4gICAgbWFwS2V5VmFsdWUoJ2Nvcm5lclNtb290aGluZycscmVjdCxmcmFtZU5vZGUpO1xyXG4gICAgbWFwS2V5VmFsdWUoJ2Nvcm5lclJhZGl1cycscmVjdCxmcmFtZU5vZGUpO1xyXG4gICAgbWFwS2V5VmFsdWUoJ2JvdHRvbVJpZ2h0UmFkaXVzJyxyZWN0LGZyYW1lTm9kZSk7XHJcbiAgICBtYXBLZXlWYWx1ZSgnYm90dG9tTGVmdFJhZGl1cycscmVjdCxmcmFtZU5vZGUpO1xyXG4gICAgbWFwS2V5VmFsdWUoJ2JsZW5kTW9kZScscmVjdCxmcmFtZU5vZGUpO1xyXG4gICAgbWFwS2V5VmFsdWUoJ25hbWUnLHJlY3QsZnJhbWVOb2RlKTtcclxuICAgIGZyYW1lTm9kZS5maWxscyA9IG5ldyBBcnJheSgwKTtcclxuICAgIGZyYW1lTm9kZS5zdHJva2VzID0gbmV3IEFycmF5KDApO1xyXG4gICAgZnJhbWVOb2RlLmVmZmVjdHMgPSBuZXcgQXJyYXkoMCk7XHJcbiAgICBmcmFtZU5vZGUuaW5zZXJ0Q2hpbGQoMCxyZWN0KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFByb3BzRnJvbSA9IChmcmFtZSkgPT57XHJcbiAgLy9maWxlS2V5IG5vZGVJZFxyXG4gIGNvbnN0IGZpbGVLZXkgPSBmaWdtYS5maWxlS2V5O1xyXG4gIGNvbnN0IG5vZGVJZCA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXS5pZC5yZXBsYWNlQWxsKCc6JywnJTNBJyk7XHJcbiAgXHJcbiAgY29uc3QgZmluYWxMaW5rID0gbmdpbnhEaXJMaW5rICsgbmdpbnhVcGxvYWRGb2xkZXIgKyAnLycgKyBmaWxlS2V5ICsnLycgKyBub2RlSWQgKyAnLydcclxuXHJcbiAgY29uc3QgaXNNb2RlbCA9IChmcmFtZS5uYW1lLmluY2x1ZGVzKCdodHRwczovLycpICYmIChmcmFtZS5uYW1lLmluY2x1ZGVzKCcuZ2x0ZicpIHx8IGZyYW1lLm5hbWUuaW5jbHVkZXMoJy5nbGInKSkpO1xyXG4gIGNvbnN0IG9iaiA9IHt9XHJcbiAgb2JqLmlkID0gZnJhbWUuaWQ7XHJcbiAgb2JqLm5hbWUgPSBpc01vZGVsP1xyXG4gICAgZnJhbWUubmFtZS5yZXBsYWNlQWxsKCcoJywnJTI4JykucmVwbGFjZUFsbCgnKScsJyUyOScpLnJlcGxhY2VBbGwoJyUzQScsJyUyNTNBJylcclxuICAgIDpcclxuICAgIGZyYW1lLm5hbWU7XHJcbiAgb2JqLndpZHRoID0gZnJhbWUud2lkdGg7XHJcbiAgb2JqLmhlaWdodCA9IGZyYW1lLmhlaWdodDtcclxuICBvYmoueCA9IGZyYW1lLng7XHJcbiAgb2JqLnkgPSBmcmFtZS55O1xyXG4gIG9iai5hYnNvbHV0ZUJvdW5kaW5nQm94ID0gZnJhbWUuYWJzb2x1dGVCb3VuZGluZ0JveDtcclxuICBvYmouYWJzb2x1dGVSZW5kZXJCb3VuZHMgPSBmcmFtZS5hYnNvbHV0ZVJlbmRlckJvdW5kcztcclxuICBvYmouc3JjID0gXHJcbiAgICBpc01vZGVsPyBcclxuICAgICgoZmluYWxMaW5rICsgIGZyYW1lLm5hbWUuc3BsaXQoJy8nKVtmcmFtZS5uYW1lLnNwbGl0KCcvJykubGVuZ3RoIC0gMV0pICsgYC5wbmdgKS5yZXBsYWNlQWxsKCcoJywnJTI4JykucmVwbGFjZUFsbCgnKScsJyUyOScpLnJlcGxhY2VBbGwoJyUzQScsJyUyNTNBJykgXHJcbiAgICA6IFxyXG4gICAgKChmaW5hbExpbmsgKyBmcmFtZS5uYW1lKSArIGAucG5nYCkucmVwbGFjZUFsbCgnKCcsJyUyOCcpLnJlcGxhY2VBbGwoJyknLCclMjknKS5yZXBsYWNlQWxsKCclM0EnLCclMjUzQScpIFxyXG4gIHJldHVybiBvYmpcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBleHBvcnROb2RlSW1nT2JqQXJyID0gKGNoaWxkcmVuTm9kZSxleHBvcnRMZW5ndGgsbm9kZU9CSkNhbGxiYWNrLGZpbmlzaENhbGxiYWNrKSA9PiB7XHJcbiAgZm9yKGxldCBpPTA7aTxjaGlsZHJlbk5vZGUubGVuZ3RoO2krKyl7XHJcbiAgICBjaGlsZHJlbk5vZGVbaV0udmlzaWJsZSA9IHRydWU7XHJcbiAgICBjaGlsZHJlbk5vZGVbaV0uZXhwb3J0QXN5bmMoe1xyXG4gICAgICBjb250ZW50c09ubHk6IHRydWUsXHJcbiAgICAgIHVzZUFic29sdXRlQm91bmRzOmZpZ21hSXNVc2VBYnNvbHV0ZUJvdW5kcyxcclxuICAgICAgZm9ybWF0OiBcIlBOR1wiLFxyXG4gICAgICBjb25zdHJhaW50OiB7XHJcbiAgICAgICAgICB0eXBlOiBcIlNDQUxFXCIsXHJcbiAgICAgICAgICB2YWx1ZTogZmlnbWFFeHBvcnRTY2FsZSxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKCBcclxuICAgICAgcmVzb2x2ZWQgPT4ge1xyXG4gICAgICAgIG5vZGVPQkpDYWxsYmFjayhcclxuICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgIG5hbWU6Y2hpbGRyZW5Ob2RlW2ldLm5hbWUsXHJcbiAgICAgICAgICAgIGltYWdlRGF0YTpyZXNvbHZlZCxcclxuICAgICAgICAgICAgdHlwZTonaW1hZ2UtY2hpbGRub2RlJyxcclxuICAgICAgICAgICAgaW5kZXg6aSArIChmaWdtYUlzQ29udGFpbkZyYW1lPzE6MCksXHJcbiAgICAgICAgICAgIC8vbW9kZWxTcmM6KGNoaWxkcmVuTm9kZVtpXS5uYW1lLmluY2x1ZGVzKCcuZ2x0ZicpIHx8IGNoaWxkcmVuTm9kZVtpXS5uYW1lLmluY2x1ZGVzKCcuZ2xiJykpP2NoaWxkcmVuTm9kZVtpXS5uYW1lOm51bGwsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgZmluaXNoTnVtKys7XHJcbiAgICAgICAgaWYoZmluaXNoTnVtID09PSBleHBvcnRMZW5ndGgpe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2Zyb20gZmlnbWE6ICcgKydsYXN0IGV4cG9ydGVkIGltYWdlIScpXHJcbiAgICAgICAgICBmaW5pc2hDYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0sIHJlamVjdGVkID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKHJlamVjdGVkKVxyXG4gICAgICAgIHJlamVjdGVkTXNnKCdGYWlsZWQgdG8gc2VuZCBpbWFnZSEnKVxyXG4gICAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5maWdtYS51aS5vbm1lc3NhZ2UgPSBtc2cgPT4ge1xyXG4gIC8vIEdMVEZcclxuICBpZihlbnZQbHVnaW4gPT09ICdnbHRmJyl7XHJcbiAgICBpZihtc2cudHlwZSA9PT0nc2F2ZS1jYW52YXMtaW1hZ2UnKXtcclxuICAgICAgbGV0IGRhdGEgPSBtc2cuYmxvYlxyXG4gICAgICBsZXQgaW1hZ2VIYXNoID0gZmlnbWEuY3JlYXRlSW1hZ2UoZGF0YSkuaGFzaFxyXG4gICAgICBjb25zdCByZWN0ID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKClcclxuICAgICAgY29uc29sZS5sb2cobXNnKVxyXG4gICAgICByZWN0Lm5hbWUgPSBtc2cubmFtZTtcclxuICAgICAgcmVjdC5yZXNpemUoTnVtYmVyKHByb2Nlc3MuZW52LldJRFRIKSxOdW1iZXIocHJvY2Vzcy5lbnYuSEVJR0hUKSlcclxuICAgICAgcmVjdC5maWxscyA9IFtcclxuICAgICAgICAgIHsgdHlwZTogXCJJTUFHRVwiLCBzY2FsZU1vZGU6IFwiRklUXCIsICBpbWFnZUhhc2ggfSxcclxuICAgICAgXVxyXG4gICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChyZWN0KVxyXG4gICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbcmVjdF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1zZy50eXBlID09PSAnZ2V0X2RhdGEnKSB7XHJcbiAgICAgIGNvbnN0IGZpbGVLZXkgPSBmaWdtYS5maWxlS2V5O1xyXG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGZpZ21hLnJvb3QubmFtZS5yZXBsYWNlQWxsKCcgJywnLScpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKGZpZ21hLmN1cnJlbnRQYWdlLmlkKTtcclxuICAgICAgY29uc3Qgbm9kZUlkID0gZmlnbWEuY3VycmVudFBhZ2UuaWQ7IC8vZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdLmlkLnJlcGxhY2VBbGwoJzonLCclM0EnKVxyXG4gICAgICBzZW5kTXNnKFwiZmluaXNoZWRfbXNnXCIsIFtmaWxlS2V5LGZpbGVOYW1lLG5vZGVJZF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gV2ViWFIgVW5pdHlcclxuICBpZihlbnZQbHVnaW4gPT09ICd3ZWJ4cicgfHwgZW52UGx1Z2luID09PSAndW5pdHknKXsgIFxyXG4gICAgaWYgKG1zZy50eXBlID09PSAnZ2V0X2RhdGEnKSB7XHJcbiAgICAgIGxldCBub2RlcyA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcclxuICAgICAgaWYgKG5vZGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGxldCBmcmFtZU5vZGUgPSBub2Rlc1swXVxyXG4gICAgICAgIHNldEZyYW1lVG9Ob2RlKGZyYW1lTm9kZSk7XHJcbiAgICAgICAgY29uc3QgZmlsZUtleSA9IGZpZ21hLmZpbGVLZXk7XHJcbiAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBmaWdtYS5yb290Lm5hbWUucmVwbGFjZUFsbCgnICcsJy0nKTtcclxuICAgICAgICBjb25zdCBub2RlSWQgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0uaWQucmVwbGFjZUFsbCgnOicsJyUzQScpO1xyXG4gICAgICAgIHNlbmRNc2coXCJmaW5pc2hlZF9tc2dcIiwgW2ZpbGVLZXksZmlsZU5hbWUsbm9kZUlkXSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihub2Rlcy5sZW5ndGggPiAxKXtcclxuICAgICAgICByZWplY3RlZE1zZygnT25seSBzdXBwb3J0IG9uZSBmcmFtZSEnKVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHJlamVjdGVkTXNnKCdObyBmcmFtZSBoYXMgYmVlbiBzZWxlY3RlZCcpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIExvY2FsU2VydmVyXHJcbiAgaWYoZW52UGx1Z2luID09PSAnbG9jYWxzZXJ2ZXInKXsgIFxyXG4gICAgaWYgKG1zZy50eXBlID09PSAnZ2V0X2RhdGEnKSB7XHJcbiAgICAgIGxldCBub2RlcyA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcclxuICAgICAgaWYgKG5vZGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGNvbnN0IGZpbGVLZXkgPSBmaWdtYS5maWxlS2V5O1xyXG4gICAgICAgIGNvbnN0IGZpbGVOYW1lID0gZmlnbWEucm9vdC5uYW1lLnJlcGxhY2VBbGwoJyAnLCctJyk7XHJcbiAgICAgICAgY29uc3Qgbm9kZUlkID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdLmlkLnJlcGxhY2VBbGwoJzonLCclM0EnKTtcclxuXHJcbiAgICAgICAgbGV0IGZyYW1lTm9kZSA9IG5vZGVzWzBdO1xyXG4gICAgICAgIHNldEZyYW1lVG9Ob2RlKGZyYW1lTm9kZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZnJhbWVOb2RlKTtcclxuICAgICAgICBjb25zdCBpbWdBcnJheSA9IFtdO1xyXG4gICAgICAgIGxldCBjaGlsZHJlbk5vZGUgPSBbLi4uZnJhbWVOb2RlLmNoaWxkcmVuXTtcclxuICBcclxuICAgICAgICAvLyAjIyMjIyMjIyMjIyMjIyMganNvbiBhZGQgIyMjIyMjIyMjIyMjIyMjXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QganNvbk9iamVjdCA9IG1hcFByb3BzRnJvbShmcmFtZU5vZGUpO1xyXG4gICAgICAgIGpzb25PYmplY3QuY2hpbGRyZW4gPSBbXTtcclxuICBcclxuICAgICAgICAvLyAjIyMjIyMjIyMjIyMjIyMgZmlsdCBpbnZpc2libGUgbm9kZSAjIyMjIyMjIyMjIyMjIyNcclxuICAgICAgICBmb3IodmFyIGM9MDtjPGZyYW1lTm9kZS5jaGlsZHJlbi5sZW5ndGg7YysrKXtcclxuICAgICAgICAgIC8vICMgZ2V0IGludmlzaWJsZSBub2RlXHJcbiAgICAgICAgICBpZighZnJhbWVOb2RlLmNoaWxkcmVuW2NdLnZpc2libGUpIHtjaGlsZHJlbk5vZGVbY10gPSBudWxsO31cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIC8vICMjIyMjIyMjIyMjIyMjIyBjaGlsZCBqc29uIGFkZCAjIyMjIyMjIyMjIyMjIyNcclxuICAgICAgICAgICAgY29uc3QganNvbkNoaWxkT2JqZWN0ID0gbWFwUHJvcHNGcm9tKGZyYW1lTm9kZS5jaGlsZHJlbltjXSk7XHJcbiAgICAgICAgICAgIGpzb25PYmplY3QuY2hpbGRyZW4ucHVzaChqc29uQ2hpbGRPYmplY3QpO1xyXG4gICAgICAgICAgICBjaGlsZHJlbk5vZGVbY10udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBjaGlsZHJlbk5vZGUgPSBjaGlsZHJlbk5vZGUuZmlsdGVyKG4gPT4ge3JldHVybiBuICE9IG51bGwgJiYgbiAhPSAnJzt9KVxyXG4gICAgICAgIGNvbnN0IGV4cG9ydExlbmd0aCA9IGNoaWxkcmVuTm9kZS5sZW5ndGggKyAoZmlnbWFJc0NvbnRhaW5GcmFtZT8xOjApO1xyXG4gIFxyXG4gICAgICAgIGV4cG9ydE5vZGVJbWdPYmpBcnIoXHJcbiAgICAgICAgICBjaGlsZHJlbk5vZGUsZXhwb3J0TGVuZ3RoLFxyXG4gICAgICAgICAgKG5vZGVPQkosaSkgPT5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaW1nQXJyYXkucHVzaChub2RlT0JKKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdmcm9tIGZpZ21hOiAnICsgYFN1Y2NlZWQgdG8gZ2V0IGNoaWxkTm9kZSAke2l9IGltYWdlIWApXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgKCk9PntcclxuICAgICAgICAgICAgc2VuZE1zZyhcImZpbmlzaGVkX21zZ1wiLCBbZmlsZUtleSxmaWxlTmFtZSxub2RlSWQsaW1nQXJyYXkse25vZGU6anNvbk9iamVjdH1dKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihub2Rlcy5sZW5ndGggPiAxKXtcclxuICAgICAgICByZWplY3RlZE1zZygnT25seSBzdXBwb3J0IG9uZSBmcmFtZSEnKVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHJlamVjdGVkTXNnKCdObyBmcmFtZSBoYXMgYmVlbiBzZWxlY3RlZCcpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChtc2cudHlwZSA9PT0gJ2NhbmNlbCcpIHtcclxuICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XHJcbiAgfVxyXG5cclxufTtcclxuXHJcbmZpZ21hLnNob3dVSShfX2h0bWxfXyx7d2lkdGg6TnVtYmVyKHByb2Nlc3MuZW52LldJRFRIKSxoZWlnaHQ6TnVtYmVyKHByb2Nlc3MuZW52LkhFSUdIVCl9KTsiXSwibmFtZXMiOlsiaXNMb2NhbCIsIndlYlJvb3RVUkwiLCJ3ZWJSZW5kZXJlclVSTCIsIndlYkNsaWVudElEIiwid2ViU2VjcmVjdElEIiwibmdpbnhEaXJMaW5rIiwibmdpbnhVcGxvYWRQSFBMaW5rIiwibmdpbnhVcGxvYWRGb2xkZXIiLCJuZ2lueEFzc2V0TGluayIsImZpZ21hRXhwb3J0U2NhbGUiLCJmaWdtYUlzQ29udGFpbkZyYW1lIiwiZmlnbWFJc1VzZUFic29sdXRlQm91bmRzIiwiZW52UGx1Z2luIiwicHJvY2VzcyIsImVudiIsIlBMVUdJTiIsImZpbmlzaE51bSIsInNlbmRNc2ciLCJ0cCIsInZhbCIsImZpZ21hIiwidWkiLCJwb3N0TWVzc2FnZSIsInR5cGUiLCJ2YWx1ZSIsInJlamVjdGVkTXNnIiwibXNnIiwiY29uc29sZSIsImVycm9yIiwiY2xvc2VQbHVnaW4iLCJFcnJvciIsInNldEZyYW1lVG9Ob2RlIiwiZnJhbWVOb2RlIiwibWFwS2V5VmFsdWUiLCJrZXkiLCJjaGlsZCIsImZyYW1lIiwiZWZmZWN0cyIsImxlbmd0aCIsInN0cm9rZXMiLCJmaWxscyIsInJlY3QiLCJjcmVhdGVSZWN0YW5nbGUiLCJ4IiwieSIsInJlc2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiQXJyYXkiLCJpbnNlcnRDaGlsZCIsIm1hcFByb3BzRnJvbSIsImZpbGVLZXkiLCJub2RlSWQiLCJjdXJyZW50UGFnZSIsInNlbGVjdGlvbiIsImlkIiwicmVwbGFjZUFsbCIsImZpbmFsTGluayIsImlzTW9kZWwiLCJuYW1lIiwiaW5jbHVkZXMiLCJvYmoiLCJhYnNvbHV0ZUJvdW5kaW5nQm94IiwiYWJzb2x1dGVSZW5kZXJCb3VuZHMiLCJzcmMiLCJzcGxpdCIsImV4cG9ydE5vZGVJbWdPYmpBcnIiLCJjaGlsZHJlbk5vZGUiLCJleHBvcnRMZW5ndGgiLCJub2RlT0JKQ2FsbGJhY2siLCJmaW5pc2hDYWxsYmFjayIsImkiLCJ2aXNpYmxlIiwiZXhwb3J0QXN5bmMiLCJjb250ZW50c09ubHkiLCJ1c2VBYnNvbHV0ZUJvdW5kcyIsImZvcm1hdCIsImNvbnN0cmFpbnQiLCJ0aGVuIiwicmVzb2x2ZWQiLCJpbWFnZURhdGEiLCJpbmRleCIsImxvZyIsInJlamVjdGVkIiwib25tZXNzYWdlIiwiZGF0YSIsImJsb2IiLCJpbWFnZUhhc2giLCJjcmVhdGVJbWFnZSIsImhhc2giLCJOdW1iZXIiLCJXSURUSCIsIkhFSUdIVCIsInNjYWxlTW9kZSIsImFwcGVuZENoaWxkIiwiZmlsZU5hbWUiLCJyb290Iiwibm9kZXMiLCJpbWdBcnJheSIsImNoaWxkcmVuIiwianNvbk9iamVjdCIsImMiLCJqc29uQ2hpbGRPYmplY3QiLCJwdXNoIiwiZmlsdGVyIiwibiIsIm5vZGVPQkoiLCJub2RlIiwic2hvd1VJIiwiX19odG1sX18iXSwic291cmNlUm9vdCI6IiJ9