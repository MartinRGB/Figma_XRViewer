import {__awaiter} from './functions'
function getImage(src) {
  return new Promise(resolve => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.src = src;
  });
}

/**
 * Converts a URI to a Uint8Array for Figma
 */
function getImageBlob(uri) {
  const data = uri.split(',')[1];
  const bytes = atob(data);
  const buf = new ArrayBuffer(bytes.length);
  const array = new Uint8Array(buf);

  for (let i = 0; i < bytes.length; i++) {
    array[i] = bytes.charCodeAt(i);
  }

  return array;
}


export const onCreateImage = async(event,img,msgType,name) => __awaiter(void 0, void 0, void 0, function* () {
  if(event) event.preventDefault();
  // const image = yield contentRef.current.saveImage();
  // const image = yield getImageFunction();
  const image = yield img;
  if (!image)
      return;
  const { width, height } = yield getImage(image);
  const blob = getImageBlob(image);
  return parent.postMessage({
      pluginMessage: {
          type: msgType, //'save-canvas-image',
          name: name, //figmaData[0].name
          width,
          height,
          blob,
      },
  }, '*');
});

export const saveImageFromRenderer = (w,h,thisQual,scene,gl,camera) => __awaiter(void 0, void 0, void 0, function* () {
  var imgData;
  try {
      const width = w;
      const height = h;

      let thisW = width * 1;
      let thisH = height * 1;
      if (thisQual === 2) {
          thisW = width * 1;
          thisH = height * 1;
      }
      if (thisQual === 3) {
          thisW = width * 2;
          thisH = height * 2;
      }
      if (thisQual === 1) {
          thisW = width * 0.5;
          thisH = height * 0.5;
      }

      camera.aspect = thisW / thisH;
      camera.updateProjectionMatrix();
      gl.setSize(thisW, thisH);
      gl.render(scene, camera, null, false);
      var strMime = 'image/png';
      imgData = gl.domElement.toDataURL(strMime);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      gl.setSize(width, height);
      return imgData;
  }
  catch (e) {
      console.log(e);
      return;
  }
});