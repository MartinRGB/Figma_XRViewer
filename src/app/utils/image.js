import * as THREE from 'three'
import { __awaiter } from './functions';
/**
 * Asynchronously gets an image by source
 */
export function getImage(src) {
  return new Promise(resolve => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.src = src;
  });
}

/**
 * Converts a URI to a Uint8Array for Figma
 */
export function getImageBlob(uri) {
  const data = uri.split(',')[1];
  const bytes = atob(data);
  const buf = new ArrayBuffer(bytes.length);
  const array = new Uint8Array(buf);

  for (let i = 0; i < bytes.length; i++) {
    array[i] = bytes.charCodeAt(i);
  }

  return array;
}

/**
 * Uses the browser's image loading to get the correct image src from a srcSet
 */
export async function getImageFromSrcSet({ src, srcSet, sizes }) {
  return new Promise((resolve, reject) => {
    try {
      if (!src && !srcSet) {
        throw new Error('No image src or srcSet provided');
      }

      const tempImage = new Image();

      if (src) {
        tempImage.src = src;
      }

      if (srcSet) {
        tempImage.srcset = srcSet;
      }

      if (sizes) {
        tempImage.sizes = sizes;
      }

      const onLoad = () => {
        tempImage.removeEventListener('load', onLoad);
        const source = tempImage.currentSrc;
        resolve(source);
      };

      tempImage.addEventListener('load', onLoad);
    } catch (error) {
      reject(`Error loading ${srcSet}: ${error}`);
    }
  });
}

/**
 * Generates a transparent png of a given width and height
 */
export function generateImage(width = 1, height = 1) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = width;
  canvas.height = height;

  ctx.fillStyle = 'rgba(0, 0, 0, 0)';
  ctx.fillRect(0, 0, width, height);
  const image = canvas.toDataURL('image/png', '');
  canvas.remove();
  return image;
}

/**
 * Use native image srcSet resolution for video sources
 */
export async function resolveVideoSrcFromSrcSet(srcSet) {
  const sources = srcSet.split(', ').map(srcString => {
    const [src, width] = srcString.split(' ');
    const image = generateImage(Number(width.replace('w', '')));
    return { src, image, width };
  });

  const fakeSrcSet = sources.map(({ image, width }) => `${image} ${width}`).join(', ');
  const fakeSrc = await getImageFromSrcSet({ srcSet: fakeSrcSet });

  const videoSrc = sources.find(src => src.image === fakeSrc);
  return videoSrc.src;
}


// ########################### Three.js #############################

export function createCanvasDotMaterial(color, size){
  var matCanvas = document.createElement('canvas');
  matCanvas.width = matCanvas.height = size;
  var matContext = matCanvas.getContext('2d');
  var texture = new THREE.Texture(matCanvas);
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipMapLinearFilter;
  var center = size / 2;
  matContext.beginPath();
  matContext.arc(center, center, size / 2, 0, 2 * Math.PI, false);
  matContext.closePath();
  matContext.fillStyle = color;
  matContext.fill();
  texture.generateMipmaps = true;
  texture.needsUpdate = true;
  return texture;
};

export function createCanvasGridMaterial(color,width,height,paddingW,paddingH,lineWidth){
  var matCanvas = document.createElement('canvas');
  matCanvas.width = width;
  matCanvas.height = height;

  const context = matCanvas.getContext("2d");
  
  var texture = new THREE.Texture(matCanvas);
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipMapLinearFilter;

  const paddingX = width/paddingW;
  const paddingY = height/paddingH;

  context.lineWidth = lineWidth;
  context.strokeStyle = color;
  context.beginPath();

  for (let x = 0; x <= width; x += paddingX) {
    if(x === 0){
      context.moveTo(lineWidth/2, 0);
      context.lineTo(lineWidth/2, height);
    }
    // else if(x === width){
    //   context.moveTo(x-lineWidth, 0);
    //   context.lineTo(x-lineWidth, height);
    // }
    else{
      context.moveTo(x-lineWidth/2, 0);
      context.lineTo(x-lineWidth/2, height);
    }
  }
  for (let y = 0; y <= height; y += paddingY) {

    if(y === 0){
      context.moveTo(0, lineWidth/2);
      context.lineTo(width, lineWidth/2);
    }
    // else if(y === height){
    //   context.moveTo(0, y - lineWidth/2);
    //   context.lineTo(width, y - lineWidth/2);
    // }
    else{
      context.moveTo(0, y-lineWidth/2);
      context.lineTo(width, y-lineWidth/2);
    }
  }
  //context.closePath();
  context.stroke();

  texture.generateMipmaps = true;
  texture.needsUpdate = true;
  return texture;
};

export function planeCurve(g, z){
  if (z == 0) {
      z = 0.00001;
  }
  let p = g.parameters;
  let hw = p.width * 0.5;
  let a = new THREE.Vector2(-hw, 0);
  let b = new THREE.Vector2(0, z);
  let c = new THREE.Vector2(hw, 0);
  let ab = new THREE.Vector2().subVectors(a, b);
  let bc = new THREE.Vector2().subVectors(b, c);
  let ac = new THREE.Vector2().subVectors(a, c);
  let r = (ab.length() * bc.length() * ac.length()) / (2 * Math.abs(ab.cross(ac)));
  let center = new THREE.Vector2(0, z - r);
  let baseV = new THREE.Vector2().subVectors(a, center);
  let baseAngle = baseV.angle() - Math.PI * 0.5;
  let arc = baseAngle * 2;
  let uv = g.attributes.uv;
  let pos = g.attributes.position;
  let mainV = new THREE.Vector2();
  for (let i = 0; i < uv.count; i++) {
      let uvRatio = 1 - uv.getX(i);
      let y = pos.getY(i);
      mainV.copy(c).rotateAround(center, arc * uvRatio);
      pos.setXYZ(i, mainV.x, y, -mainV.y);
  }
  pos.needsUpdate = true;
};

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