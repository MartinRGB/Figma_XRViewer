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
var mapFrameToChild = function mapFrameToChild(child, frame) {
  //fileKey nodeId
  var fileKey = figma.fileKey;
  var nodeId = figma.currentPage.selection[0].id.replaceAll(':', '%3A');
  var finalLink = src_app_configs_ts__WEBPACK_IMPORTED_MODULE_0__.nginxDirLink + src_app_configs_ts__WEBPACK_IMPORTED_MODULE_0__.nginxUploadFolder + '/' + fileKey + '/' + nodeId + '/';
  var isModel = frame.name.includes('https://') && (frame.name.includes('.gltf') || frame.name.includes('.glb'));
  child.id = frame.id;
  child.name = isModel ? frame.name.replaceAll('(', '%28').replaceAll(')', '%29').replaceAll('%3A', '%253A') : frame.name;
  child.width = frame.width;
  child.height = frame.height;
  child.x = frame.x;
  child.y = frame.y;
  child.absoluteBoundingBox = frame.absoluteBoundingBox;
  child.absoluteRenderBounds = frame.absoluteRenderBounds;
  child.src = isModel ? (finalLink + frame.name.split('/')[frame.name.split('/').length - 1] + ".png").replaceAll('(', '%28').replaceAll(')', '%29').replaceAll('%3A', '%253A') : (finalLink + frame.name + ".png").replaceAll('(', '%28').replaceAll(')', '%29').replaceAll('%3A', '%253A');
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
        console.log('0000000000');
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
        //sendMsg("failed",null);
        console.error("Only support one frame!");
        throw new Error('Only support one frame!');
      } else {
        //sendMsg("failed",null);
        console.error("No frame has been selected!");
        throw new Error('No frame has been selected');
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
        var jsonObject = {};
        mapFrameToChild(jsonObject, _frameNode);
        jsonObject.children = [];

        // ############### filt invisible node ###############
        for (var c = 0; c < _frameNode.children.length; c++) {
          // # get invisible node
          if (!_frameNode.children[c].visible) {
            childrenNode[c] = null;
          } else {
            // ############### child json add ###############
            var jsonChildObject = {};
            mapFrameToChild(jsonChildObject, _frameNode.children[c]);
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
          console.log('from figma: ' + "Succeed to get childNode ".concat(i, " image!"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDLENBQ0Y7TUFDSCxDQUFDLE1BQ0ksSUFBR0gsTUFBSyxDQUFDMUQsTUFBTSxHQUFHLENBQUMsRUFBQztRQUN2QlosV0FBVyxDQUFDLHlCQUF5QixDQUFDO01BQ3hDLENBQUMsTUFDSTtRQUNEQSxXQUFXLENBQUMsNEJBQTRCLENBQUM7TUFDN0M7SUFDRjtFQUNGO0VBRUEsSUFBSUMsR0FBRyxDQUFDSCxJQUFJLEtBQUssUUFBUSxFQUFFO0lBQ3pCSCxLQUFLLENBQUNzRixXQUFXLEVBQUU7RUFDckI7QUFFRixDQUFDO0FBRUR0RixLQUFLLENBQUN1RixNQUFNLENBQUNDLFFBQVEsRUFBQztFQUFDL0QsS0FBSyxFQUFDMkMsTUFBTSxDQUFDM0UsS0FBaUIsQ0FBQztFQUFDaUMsTUFBTSxFQUFDMEMsTUFBTSxDQUFDM0UsS0FBa0I7QUFBQyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL1hSVmlld2VyLy4vc3JjL2FwcC9jb25maWdzL2luZGV4LnRzIiwid2VicGFjazovL1hSVmlld2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1hSVmlld2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9YUlZpZXdlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1hSVmlld2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vWFJWaWV3ZXIvLi9zcmMvcGx1Z2luL3BsdWdpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaXNMb2NhbCA9IHRydWU7XHJcbmV4cG9ydCBjb25zdCB3ZWJSb290VVJMID0gaXNMb2NhbD9gaHR0cHM6Ly8xMjcuMC4wLjE6ODg4Ny9gOmBodHRwczovL3d3dy5tYXJ0aW5yZ2IuY29tL0ZpZ21hSW1wb3J0ZXIvdjQvYDtcclxuZXhwb3J0IGNvbnN0IHdlYlJlbmRlcmVyVVJMID0gaXNMb2NhbD9gaHR0cHM6Ly8xMjcuMC4wLjE6ODg4N2A6YGh0dHBzOi8vd3d3Lm1hcnRpbnJnYi5jb20vRmlnbWFJbXBvcnRlci92NC9pbmRleC5odG1sYDtcclxuZXhwb3J0IGNvbnN0IHdlYkNsaWVudElEID0gaXNMb2NhbD8nNmNseFMyTzRibDlBRE5jeTF3aDVyayc6JzJiZUZXNjlxZWc3RHZqQnA2YktwbTUnO1xyXG5leHBvcnQgY29uc3Qgd2ViU2VjcmVjdElEID0gaXNMb2NhbD8nM1J0T0szUXgzbE1VbTNzdk5mWnV5Y3lOQWVvdXhxJzonMDEzUmVyRDI0eWpLeHZTSXJVcjRmNmRFU01ZU1Q4JztcclxuZXhwb3J0IGNvbnN0IG5naW54RGlyTGluayA9IGBodHRwczovLzE3Mi4yMi4wLjIwOjgyMjJgO1xyXG5leHBvcnQgY29uc3QgbmdpbnhVcGxvYWRQSFBMaW5rID0gbmdpbnhEaXJMaW5rICsgYC9waHAvdXBsb2FkLnBocGA7XHJcbmV4cG9ydCBjb25zdCBuZ2lueFVwbG9hZEZvbGRlciA9IGAvZXh0ZXJuYWxgO1xyXG5leHBvcnQgY29uc3QgbmdpbnhBc3NldExpbmsgPSBuZ2lueERpckxpbmsgKyBuZ2lueFVwbG9hZEZvbGRlcjtcclxuZXhwb3J0IGNvbnN0IGZpZ21hRXhwb3J0U2NhbGUgPSAxO1xyXG5leHBvcnQgY29uc3QgZmlnbWFJc0NvbnRhaW5GcmFtZSA9IGZhbHNlO1xyXG5leHBvcnQgY29uc3QgZmlnbWFJc1VzZUFic29sdXRlQm91bmRzID10cnVlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgZW52UGx1Z2luID0gcHJvY2Vzcy5lbnYuUExVR0lOO1xyXG52YXIgZmluaXNoTnVtID0gMDtcclxuaW1wb3J0IHsgbmdpbnhEaXJMaW5rLG5naW54VXBsb2FkRm9sZGVyLGZpZ21hRXhwb3J0U2NhbGUsZmlnbWFJc0NvbnRhaW5GcmFtZSxmaWdtYUlzVXNlQWJzb2x1dGVCb3VuZHMgfSBmcm9tIFwic3JjL2FwcC9jb25maWdzLnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZE1zZyA9ICh0cCx2YWwpID0+IHtcclxuICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7dHlwZTogdHAsIHZhbHVlOnZhbH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVqZWN0ZWRNc2cgPSAobXNnKSA9PiB7XHJcbiAgY29uc29sZS5lcnJvcihtc2cpXHJcbiAgc2VuZE1zZyhcImZhaWxlZFwiLG51bGwpO1xyXG4gIHRocm93IG5ldyBFcnJvcihtc2cpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0RnJhbWVUb05vZGUgPSAoZnJhbWVOb2RlKSA9PntcclxuICBcclxuICBjb25zdCBtYXBLZXlWYWx1ZSA9IChrZXksY2hpbGQsZnJhbWUpID0+e1xyXG4gICAgY2hpbGRba2V5XSA9IGZyYW1lW2tleV1cclxuICB9XHJcblxyXG4gIGlmKChmcmFtZU5vZGUuZWZmZWN0cy5sZW5ndGggKyBmcmFtZU5vZGUuc3Ryb2tlcy5sZW5ndGggKyBmcmFtZU5vZGUuZmlsbHMubGVuZ3RoKSAhPSAwKXtcclxuICAgIGNvbnN0IHJlY3QgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcclxuICAgIHJlY3QueCA9IDA7XHJcbiAgICByZWN0LnkgPSAwO1xyXG4gICAgcmVjdC5yZXNpemUoZnJhbWVOb2RlLndpZHRoLGZyYW1lTm9kZS5oZWlnaHQpXHJcbiAgICBtYXBLZXlWYWx1ZSgnZmlsbHMnLHJlY3QsZnJhbWVOb2RlKTtcclxuICAgIG1hcEtleVZhbHVlKCdzdHJva2VzJyxyZWN0LGZyYW1lTm9kZSk7XHJcbiAgICBtYXBLZXlWYWx1ZSgnc3Ryb2tlQWxpZ24nLHJlY3QsZnJhbWVOb2RlKTtcclxuICAgIG1hcEtleVZhbHVlKCdzdHJva2VCb3R0b21XZWlnaHQnLHJlY3QsZnJhbWVOb2RlKTtcclxuICAgIG1hcEtleVZhbHVlKCdzdHJva2VDYXAnLHJlY3QsZnJhbWVOb2RlKTtcclxuICAgIG1hcEtleVZhbHVlKCdzdHJva2VKb2luJyxyZWN0LGZyYW1lTm9kZSk7XHJcbiAgICBtYXBLZXlWYWx1ZSgnc3Ryb2tlTGVmdFdlaWdodCcscmVjdCxmcmFtZU5vZGUpO1xyXG4gICAgbWFwS2V5VmFsdWUoJ3N0cm9rZU1pdGVyTGltaXQnLHJlY3QsZnJhbWVOb2RlKTtcclxuICAgIG1hcEtleVZhbHVlKCdzdHJva2VSaWdodFdlaWdodCcscmVjdCxmcmFtZU5vZGUpO1xyXG4gICAgbWFwS2V5VmFsdWUoJ3N0cm9rZVRvcFdlaWdodCcscmVjdCxmcmFtZU5vZGUpO1xyXG4gICAgbWFwS2V5VmFsdWUoJ3N0cm9rZVN0eWxlSWQnLHJlY3QsZnJhbWVOb2RlKTtcclxuICAgIG1hcEtleVZhbHVlKCdzdHJva2VXZWlnaHQnLHJlY3QsZnJhbWVOb2RlKTtcclxuICAgIG1hcEtleVZhbHVlKCd0b3BMZWZ0UmFkaXVzJyxyZWN0LGZyYW1lTm9kZSk7XHJcbiAgICBtYXBLZXlWYWx1ZSgndG9wUmlnaHRSYWRpdXMnLHJlY3QsZnJhbWVOb2RlKTtcclxuICAgIG1hcEtleVZhbHVlKCdyb3RhdGlvbicscmVjdCxmcmFtZU5vZGUpO1xyXG4gICAgbWFwS2V5VmFsdWUoJ2VmZmVjdHMnLHJlY3QsZnJhbWVOb2RlKTtcclxuICAgIG1hcEtleVZhbHVlKCdjb3JuZXJTbW9vdGhpbmcnLHJlY3QsZnJhbWVOb2RlKTtcclxuICAgIG1hcEtleVZhbHVlKCdjb3JuZXJSYWRpdXMnLHJlY3QsZnJhbWVOb2RlKTtcclxuICAgIG1hcEtleVZhbHVlKCdib3R0b21SaWdodFJhZGl1cycscmVjdCxmcmFtZU5vZGUpO1xyXG4gICAgbWFwS2V5VmFsdWUoJ2JvdHRvbUxlZnRSYWRpdXMnLHJlY3QsZnJhbWVOb2RlKTtcclxuICAgIG1hcEtleVZhbHVlKCdibGVuZE1vZGUnLHJlY3QsZnJhbWVOb2RlKTtcclxuICAgIG1hcEtleVZhbHVlKCduYW1lJyxyZWN0LGZyYW1lTm9kZSk7XHJcbiAgICBmcmFtZU5vZGUuZmlsbHMgPSBuZXcgQXJyYXkoMCk7XHJcbiAgICBmcmFtZU5vZGUuc3Ryb2tlcyA9IG5ldyBBcnJheSgwKTtcclxuICAgIGZyYW1lTm9kZS5lZmZlY3RzID0gbmV3IEFycmF5KDApO1xyXG4gICAgZnJhbWVOb2RlLmluc2VydENoaWxkKDAscmVjdCk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBGcmFtZVRvQ2hpbGQgPSAoY2hpbGQsZnJhbWUpID0+e1xyXG4gIC8vZmlsZUtleSBub2RlSWRcclxuICBjb25zdCBmaWxlS2V5ID0gZmlnbWEuZmlsZUtleTtcclxuICBjb25zdCBub2RlSWQgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0uaWQucmVwbGFjZUFsbCgnOicsJyUzQScpO1xyXG4gIFxyXG4gIGNvbnN0IGZpbmFsTGluayA9IG5naW54RGlyTGluayArIG5naW54VXBsb2FkRm9sZGVyICsgJy8nICsgZmlsZUtleSArJy8nICsgbm9kZUlkICsgJy8nXHJcblxyXG4gIGNvbnN0IGlzTW9kZWwgPSAoZnJhbWUubmFtZS5pbmNsdWRlcygnaHR0cHM6Ly8nKSAmJiAoZnJhbWUubmFtZS5pbmNsdWRlcygnLmdsdGYnKSB8fCBmcmFtZS5uYW1lLmluY2x1ZGVzKCcuZ2xiJykpKTtcclxuICBjaGlsZC5pZCA9IGZyYW1lLmlkO1xyXG4gIGNoaWxkLm5hbWUgPSBpc01vZGVsP1xyXG4gICAgZnJhbWUubmFtZS5yZXBsYWNlQWxsKCcoJywnJTI4JykucmVwbGFjZUFsbCgnKScsJyUyOScpLnJlcGxhY2VBbGwoJyUzQScsJyUyNTNBJylcclxuICAgIDpcclxuICAgIGZyYW1lLm5hbWU7XHJcbiAgY2hpbGQud2lkdGggPSBmcmFtZS53aWR0aDtcclxuICBjaGlsZC5oZWlnaHQgPSBmcmFtZS5oZWlnaHQ7XHJcbiAgY2hpbGQueCA9IGZyYW1lLng7XHJcbiAgY2hpbGQueSA9IGZyYW1lLnk7XHJcbiAgY2hpbGQuYWJzb2x1dGVCb3VuZGluZ0JveCA9IGZyYW1lLmFic29sdXRlQm91bmRpbmdCb3g7XHJcbiAgY2hpbGQuYWJzb2x1dGVSZW5kZXJCb3VuZHMgPSBmcmFtZS5hYnNvbHV0ZVJlbmRlckJvdW5kcztcclxuICBjaGlsZC5zcmMgPSBcclxuICAgIGlzTW9kZWw/IFxyXG4gICAgKChmaW5hbExpbmsgKyAgZnJhbWUubmFtZS5zcGxpdCgnLycpW2ZyYW1lLm5hbWUuc3BsaXQoJy8nKS5sZW5ndGggLSAxXSkgKyBgLnBuZ2ApLnJlcGxhY2VBbGwoJygnLCclMjgnKS5yZXBsYWNlQWxsKCcpJywnJTI5JykucmVwbGFjZUFsbCgnJTNBJywnJTI1M0EnKSBcclxuICAgIDogXHJcbiAgICAoKGZpbmFsTGluayArIGZyYW1lLm5hbWUpICsgYC5wbmdgKS5yZXBsYWNlQWxsKCcoJywnJTI4JykucmVwbGFjZUFsbCgnKScsJyUyOScpLnJlcGxhY2VBbGwoJyUzQScsJyUyNTNBJykgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZXhwb3J0Tm9kZUltZ09iakFyciA9IChjaGlsZHJlbk5vZGUsZXhwb3J0TGVuZ3RoLG5vZGVPQkpDYWxsYmFjayxmaW5pc2hDYWxsYmFjaykgPT4ge1xyXG4gIGZvcihsZXQgaT0wO2k8Y2hpbGRyZW5Ob2RlLmxlbmd0aDtpKyspe1xyXG4gICAgY2hpbGRyZW5Ob2RlW2ldLnZpc2libGUgPSB0cnVlO1xyXG4gICAgY2hpbGRyZW5Ob2RlW2ldLmV4cG9ydEFzeW5jKHtcclxuICAgICAgY29udGVudHNPbmx5OiB0cnVlLFxyXG4gICAgICB1c2VBYnNvbHV0ZUJvdW5kczpmaWdtYUlzVXNlQWJzb2x1dGVCb3VuZHMsXHJcbiAgICAgIGZvcm1hdDogXCJQTkdcIixcclxuICAgICAgY29uc3RyYWludDoge1xyXG4gICAgICAgICAgdHlwZTogXCJTQ0FMRVwiLFxyXG4gICAgICAgICAgdmFsdWU6IGZpZ21hRXhwb3J0U2NhbGUsXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAudGhlbiggXHJcbiAgICAgIHJlc29sdmVkID0+IHtcclxuICAgICAgICBub2RlT0JKQ2FsbGJhY2soXHJcbiAgICAgICAgICB7IFxyXG4gICAgICAgICAgICBuYW1lOmNoaWxkcmVuTm9kZVtpXS5uYW1lLFxyXG4gICAgICAgICAgICBpbWFnZURhdGE6cmVzb2x2ZWQsXHJcbiAgICAgICAgICAgIHR5cGU6J2ltYWdlLWNoaWxkbm9kZScsXHJcbiAgICAgICAgICAgIGluZGV4OmkgKyAoZmlnbWFJc0NvbnRhaW5GcmFtZT8xOjApLFxyXG4gICAgICAgICAgICAvL21vZGVsU3JjOihjaGlsZHJlbk5vZGVbaV0ubmFtZS5pbmNsdWRlcygnLmdsdGYnKSB8fCBjaGlsZHJlbk5vZGVbaV0ubmFtZS5pbmNsdWRlcygnLmdsYicpKT9jaGlsZHJlbk5vZGVbaV0ubmFtZTpudWxsLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGlcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGZpbmlzaE51bSsrO1xyXG4gICAgICAgIGlmKGZpbmlzaE51bSA9PT0gZXhwb3J0TGVuZ3RoKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdmcm9tIGZpZ21hOiAnICsnbGFzdCBleHBvcnRlZCBpbWFnZSEnKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJzAwMDAwMDAwMDAnKVxyXG4gICAgICAgICAgZmluaXNoQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9LCByZWplY3RlZCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihyZWplY3RlZClcclxuICAgICAgICByZWplY3RlZE1zZygnRmFpbGVkIHRvIHNlbmQgaW1hZ2UhJylcclxuICAgICAgfSlcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcclxuICAvLyBHTFRGXHJcbiAgaWYoZW52UGx1Z2luID09PSAnZ2x0Zicpe1xyXG4gICAgaWYobXNnLnR5cGUgPT09J3NhdmUtY2FudmFzLWltYWdlJyl7XHJcbiAgICAgIGxldCBkYXRhID0gbXNnLmJsb2JcclxuICAgICAgbGV0IGltYWdlSGFzaCA9IGZpZ21hLmNyZWF0ZUltYWdlKGRhdGEpLmhhc2hcclxuICAgICAgY29uc3QgcmVjdCA9IGZpZ21hLmNyZWF0ZVJlY3RhbmdsZSgpXHJcbiAgICAgIGNvbnNvbGUubG9nKG1zZylcclxuICAgICAgcmVjdC5uYW1lID0gbXNnLm5hbWU7XHJcbiAgICAgIHJlY3QucmVzaXplKE51bWJlcihwcm9jZXNzLmVudi5XSURUSCksTnVtYmVyKHByb2Nlc3MuZW52LkhFSUdIVCkpXHJcbiAgICAgIHJlY3QuZmlsbHMgPSBbXHJcbiAgICAgICAgICB7IHR5cGU6IFwiSU1BR0VcIiwgc2NhbGVNb2RlOiBcIkZJVFwiLCAgaW1hZ2VIYXNoIH0sXHJcbiAgICAgIF1cclxuICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQocmVjdClcclxuICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uID0gW3JlY3RdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2dldF9kYXRhJykge1xyXG4gICAgICBjb25zdCBmaWxlS2V5ID0gZmlnbWEuZmlsZUtleTtcclxuICAgICAgY29uc3QgZmlsZU5hbWUgPSBmaWdtYS5yb290Lm5hbWUucmVwbGFjZUFsbCgnICcsJy0nKTtcclxuICAgICAgLy9jb25zb2xlLmxvZyhmaWdtYS5jdXJyZW50UGFnZS5pZCk7XHJcbiAgICAgIGNvbnN0IG5vZGVJZCA9IGZpZ21hLmN1cnJlbnRQYWdlLmlkOyAvL2ZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXS5pZC5yZXBsYWNlQWxsKCc6JywnJTNBJylcclxuICAgICAgc2VuZE1zZyhcImZpbmlzaGVkX21zZ1wiLCBbZmlsZUtleSxmaWxlTmFtZSxub2RlSWRdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFdlYlhSIFVuaXR5XHJcbiAgaWYoZW52UGx1Z2luID09PSAnd2VieHInIHx8IGVudlBsdWdpbiA9PT0gJ3VuaXR5Jyl7ICBcclxuICAgIGlmIChtc2cudHlwZSA9PT0gJ2dldF9kYXRhJykge1xyXG4gICAgICBsZXQgbm9kZXMgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XHJcbiAgICAgIGlmIChub2Rlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBsZXQgZnJhbWVOb2RlID0gbm9kZXNbMF1cclxuICAgICAgICBzZXRGcmFtZVRvTm9kZShmcmFtZU5vZGUpO1xyXG4gICAgICAgIGNvbnN0IGZpbGVLZXkgPSBmaWdtYS5maWxlS2V5O1xyXG4gICAgICAgIGNvbnN0IGZpbGVOYW1lID0gZmlnbWEucm9vdC5uYW1lLnJlcGxhY2VBbGwoJyAnLCctJyk7XHJcbiAgICAgICAgY29uc3Qgbm9kZUlkID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdLmlkLnJlcGxhY2VBbGwoJzonLCclM0EnKTtcclxuICAgICAgICBzZW5kTXNnKFwiZmluaXNoZWRfbXNnXCIsIFtmaWxlS2V5LGZpbGVOYW1lLG5vZGVJZF0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYobm9kZXMubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgICAvL3NlbmRNc2coXCJmYWlsZWRcIixudWxsKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiT25seSBzdXBwb3J0IG9uZSBmcmFtZSFcIilcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgc3VwcG9ydCBvbmUgZnJhbWUhJyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAvL3NlbmRNc2coXCJmYWlsZWRcIixudWxsKTtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBmcmFtZSBoYXMgYmVlbiBzZWxlY3RlZCFcIilcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZnJhbWUgaGFzIGJlZW4gc2VsZWN0ZWQnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gTG9jYWxTZXJ2ZXJcclxuICBpZihlbnZQbHVnaW4gPT09ICdsb2NhbHNlcnZlcicpeyAgXHJcbiAgICBpZiAobXNnLnR5cGUgPT09ICdnZXRfZGF0YScpIHtcclxuICAgICAgbGV0IG5vZGVzID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xyXG4gICAgICBpZiAobm9kZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgY29uc3QgZmlsZUtleSA9IGZpZ21hLmZpbGVLZXk7XHJcbiAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBmaWdtYS5yb290Lm5hbWUucmVwbGFjZUFsbCgnICcsJy0nKTtcclxuICAgICAgICBjb25zdCBub2RlSWQgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0uaWQucmVwbGFjZUFsbCgnOicsJyUzQScpO1xyXG5cclxuICAgICAgICBsZXQgZnJhbWVOb2RlID0gbm9kZXNbMF07XHJcbiAgICAgICAgc2V0RnJhbWVUb05vZGUoZnJhbWVOb2RlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhmcmFtZU5vZGUpO1xyXG4gICAgICAgIGNvbnN0IGltZ0FycmF5ID0gW107XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuTm9kZSA9IFsuLi5mcmFtZU5vZGUuY2hpbGRyZW5dO1xyXG4gIFxyXG4gICAgICAgIC8vICMjIyMjIyMjIyMjIyMjIyBqc29uIGFkZCAjIyMjIyMjIyMjIyMjIyNcclxuICAgICAgICBjb25zdCBqc29uT2JqZWN0ID0ge307XHJcbiAgICAgICAgbWFwRnJhbWVUb0NoaWxkKGpzb25PYmplY3QsZnJhbWVOb2RlKVxyXG4gICAgICAgIGpzb25PYmplY3QuY2hpbGRyZW4gPSBbXTtcclxuICBcclxuICAgICAgICAvLyAjIyMjIyMjIyMjIyMjIyMgZmlsdCBpbnZpc2libGUgbm9kZSAjIyMjIyMjIyMjIyMjIyNcclxuICAgICAgICBmb3IodmFyIGM9MDtjPGZyYW1lTm9kZS5jaGlsZHJlbi5sZW5ndGg7YysrKXtcclxuICAgICAgICAgIC8vICMgZ2V0IGludmlzaWJsZSBub2RlXHJcbiAgICAgICAgICBpZighZnJhbWVOb2RlLmNoaWxkcmVuW2NdLnZpc2libGUpIHtcclxuICAgICAgICAgICAgY2hpbGRyZW5Ob2RlW2NdID0gbnVsbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIC8vICMjIyMjIyMjIyMjIyMjIyBjaGlsZCBqc29uIGFkZCAjIyMjIyMjIyMjIyMjIyNcclxuICAgICAgICAgICAgY29uc3QganNvbkNoaWxkT2JqZWN0ID0ge307XHJcbiAgICAgICAgICAgIG1hcEZyYW1lVG9DaGlsZChqc29uQ2hpbGRPYmplY3QsZnJhbWVOb2RlLmNoaWxkcmVuW2NdKVxyXG4gICAgICAgICAgICBqc29uT2JqZWN0LmNoaWxkcmVuLnB1c2goanNvbkNoaWxkT2JqZWN0KTtcclxuICBcclxuICAgICAgICAgICAgY2hpbGRyZW5Ob2RlW2NdLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgY2hpbGRyZW5Ob2RlID0gY2hpbGRyZW5Ob2RlLmZpbHRlcihuID0+IHtyZXR1cm4gbiAhPSBudWxsICYmIG4gIT0gJyc7fSlcclxuICAgICAgICBjb25zdCBleHBvcnRMZW5ndGggPSBjaGlsZHJlbk5vZGUubGVuZ3RoICsgKGZpZ21hSXNDb250YWluRnJhbWU/MTowKTtcclxuICBcclxuICAgICAgICBleHBvcnROb2RlSW1nT2JqQXJyKFxyXG4gICAgICAgICAgY2hpbGRyZW5Ob2RlLGV4cG9ydExlbmd0aCxcclxuICAgICAgICAgIChub2RlT0JKLGkpID0+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZ0FycmF5LnB1c2gobm9kZU9CSilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Zyb20gZmlnbWE6ICcgKyBgU3VjY2VlZCB0byBnZXQgY2hpbGROb2RlICR7aX0gaW1hZ2UhYClcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICBzZW5kTXNnKFwiZmluaXNoZWRfbXNnXCIsIFtmaWxlS2V5LGZpbGVOYW1lLG5vZGVJZCxpbWdBcnJheSx7bm9kZTpqc29uT2JqZWN0fV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKG5vZGVzLmxlbmd0aCA+IDEpe1xyXG4gICAgICAgIHJlamVjdGVkTXNnKCdPbmx5IHN1cHBvcnQgb25lIGZyYW1lIScpXHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgICByZWplY3RlZE1zZygnTm8gZnJhbWUgaGFzIGJlZW4gc2VsZWN0ZWQnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAobXNnLnR5cGUgPT09ICdjYW5jZWwnKSB7XHJcbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xyXG4gIH1cclxuXHJcbn07XHJcblxyXG5maWdtYS5zaG93VUkoX19odG1sX18se3dpZHRoOk51bWJlcihwcm9jZXNzLmVudi5XSURUSCksaGVpZ2h0Ok51bWJlcihwcm9jZXNzLmVudi5IRUlHSFQpfSk7Il0sIm5hbWVzIjpbImlzTG9jYWwiLCJ3ZWJSb290VVJMIiwid2ViUmVuZGVyZXJVUkwiLCJ3ZWJDbGllbnRJRCIsIndlYlNlY3JlY3RJRCIsIm5naW54RGlyTGluayIsIm5naW54VXBsb2FkUEhQTGluayIsIm5naW54VXBsb2FkRm9sZGVyIiwibmdpbnhBc3NldExpbmsiLCJmaWdtYUV4cG9ydFNjYWxlIiwiZmlnbWFJc0NvbnRhaW5GcmFtZSIsImZpZ21hSXNVc2VBYnNvbHV0ZUJvdW5kcyIsImVudlBsdWdpbiIsInByb2Nlc3MiLCJlbnYiLCJQTFVHSU4iLCJmaW5pc2hOdW0iLCJzZW5kTXNnIiwidHAiLCJ2YWwiLCJmaWdtYSIsInVpIiwicG9zdE1lc3NhZ2UiLCJ0eXBlIiwidmFsdWUiLCJyZWplY3RlZE1zZyIsIm1zZyIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwic2V0RnJhbWVUb05vZGUiLCJmcmFtZU5vZGUiLCJtYXBLZXlWYWx1ZSIsImtleSIsImNoaWxkIiwiZnJhbWUiLCJlZmZlY3RzIiwibGVuZ3RoIiwic3Ryb2tlcyIsImZpbGxzIiwicmVjdCIsImNyZWF0ZVJlY3RhbmdsZSIsIngiLCJ5IiwicmVzaXplIiwid2lkdGgiLCJoZWlnaHQiLCJBcnJheSIsImluc2VydENoaWxkIiwibWFwRnJhbWVUb0NoaWxkIiwiZmlsZUtleSIsIm5vZGVJZCIsImN1cnJlbnRQYWdlIiwic2VsZWN0aW9uIiwiaWQiLCJyZXBsYWNlQWxsIiwiZmluYWxMaW5rIiwiaXNNb2RlbCIsIm5hbWUiLCJpbmNsdWRlcyIsImFic29sdXRlQm91bmRpbmdCb3giLCJhYnNvbHV0ZVJlbmRlckJvdW5kcyIsInNyYyIsInNwbGl0IiwiZXhwb3J0Tm9kZUltZ09iakFyciIsImNoaWxkcmVuTm9kZSIsImV4cG9ydExlbmd0aCIsIm5vZGVPQkpDYWxsYmFjayIsImZpbmlzaENhbGxiYWNrIiwiaSIsInZpc2libGUiLCJleHBvcnRBc3luYyIsImNvbnRlbnRzT25seSIsInVzZUFic29sdXRlQm91bmRzIiwiZm9ybWF0IiwiY29uc3RyYWludCIsInRoZW4iLCJyZXNvbHZlZCIsImltYWdlRGF0YSIsImluZGV4IiwibG9nIiwicmVqZWN0ZWQiLCJvbm1lc3NhZ2UiLCJkYXRhIiwiYmxvYiIsImltYWdlSGFzaCIsImNyZWF0ZUltYWdlIiwiaGFzaCIsIk51bWJlciIsIldJRFRIIiwiSEVJR0hUIiwic2NhbGVNb2RlIiwiYXBwZW5kQ2hpbGQiLCJmaWxlTmFtZSIsInJvb3QiLCJub2RlcyIsImltZ0FycmF5IiwiY2hpbGRyZW4iLCJqc29uT2JqZWN0IiwiYyIsImpzb25DaGlsZE9iamVjdCIsInB1c2giLCJmaWx0ZXIiLCJuIiwibm9kZU9CSiIsIm5vZGUiLCJjbG9zZVBsdWdpbiIsInNob3dVSSIsIl9faHRtbF9fIl0sInNvdXJjZVJvb3QiOiIifQ==