import JSZip from "jszip";
import { saveAs } from 'file-saver';

// ################################## utils ##################################
export function searchElementByType(data,type,value){
  const res = data.find(({type}) => type === value);
  return res ? res : null;
}

export function __awaiter (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

export const copyToClipboard = (str) => {
  var el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-99999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert("Copied the string: " + str);
}

// ################################## zip ##################################
export function saveZip(filename, datas){
  if(!datas) return;

  const zip = new JSZip();
  const pngFolder = zip.folder("pngs"); // folder name where all files will be placed in 
  const modelFolder = zip.folder("models"); // folder name where all files will be placed in 

  datas.forEach((data) => {
      const blobPromise = fetch(data.url).then((r) => {
          if (r.status === 200) return r.blob();
          return Promise.reject(new Error(r.statusText));
      });
      // const name = data.name.replace(/\//g,`_`).replace(/\ /g,`_`) + '.' + data.ext
     const name = data.name + '.' + data.ext
      if(data.ext === 'html'){
        zip.file(name, blobPromise);
      }
      if(data.ext === 'png'){
        pngFolder.file(name, blobPromise);
      }
      // zip.file(name,blobPromise);
      if(data.ext === 'gltf' || data.ext === 'glb' ){
        modelFolder.file(name, blobPromise);
      }

  });

  zip.generateAsync({ type: "blob" }).then((blob) => saveAs(blob, filename)).then(()=>{
  });

};

// ################################## image ##################################
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

export async function syncGetModelBlobFromUrl (url,callback){
  fetch(url)
  .then((data) =>{
    return data.blob();
  })
  .then((blob)=>{
    var bb = new Blob([blob], { type: url.includes('.gltf')?'model/gltf+json':'model/gltf-binary' });
    callback(bb)  
  })
}

export const onDownloadImage = async(event,isServe,figmaData,layout) =>{
  var frameHTML = document.documentElement.innerHTML;
  var outputData = new Array(figmaData.length)
  new Promise((resolve, reject) => {
      if(isServe === true){
        for(var i=0;i<outputData.length;i++){
          let index = i;
          outputData.splice(index,1,{
            name:figmaData[index].name,
            width:figmaData[index].width,
            height:figmaData[index].height,
            x:figmaData[index].x,
            y:figmaData[index].y,
            // %23 -> #
            // todo chara fix
            src:
            (figmaData[index].modelSrc != null)?
            `./pngs/`+`%23${index}-`+ 
            figmaData[index].name.split('/')[figmaData[index].name.split(`/`).length - 1].substring(0,24)+`.png`
            :
            `./pngs/`+`%23${index}-`+ 
            figmaData[index].name.replaceAll(/\//g,`_`).replaceAll(/\ /g,`_`).substring(0,24)+`.png`,
            type:figmaData[index].type,
            index:figmaData[index].index,
            id:figmaData[index].id,
            imageData:null,
            modelSrc:(figmaData[index].modelSrc != null)?`./models/`+`%23${index}-`+figmaData[index].modelSrc.split('/')[figmaData[index].modelSrc.split(`/`).length - 1]:null,
          })

          if(index === outputData.length - 1){
              const newHtml = frameHTML.replace(/savedFigData = \'\'/g,`savedFigData = ${JSON.stringify(outputData)}`);
              const withOutTheatreHTML = newHtml.replaceAll(`<div id="theatrejs-studio-root" style="position: fixed; inset: 0px; pointer-events: none; z-index: 100;"></div>`,'');
              resolve({data:withOutTheatreHTML,isServe:true})
          }
        }
      }
      else{
        var loopIndex = 0;
        for(var i=0;i<outputData.length;i++){
          let index = i;
          const reader = new FileReader();
          const resolveStaticHTMLDataWithModelSrc = (mSrc) =>{
            outputData.splice(index,1,{
              name:figmaData[index].name,
              width:figmaData[index].width,
              height:figmaData[index].height,
              x:figmaData[index].x,
              y:figmaData[index].y,
              src: reader.result,
              type:figmaData[index].type,
              index:figmaData[index].index,
              id:figmaData[index].id,
              imageData:null,
              modelSrc:mSrc,
            })
            loopIndex++;
            if(loopIndex === outputData.length){
              console.log(outputData)
              const newHtml = frameHTML.replace(/savedFigData = \'\'/g,`savedFigData = ${JSON.stringify(outputData)}`);
              const withOutTheatreHTML = newHtml.replaceAll(`<div id="theatrejs-studio-root" style="position: fixed; inset: 0px; pointer-events: none; z-index: 100;"></div>`,'');
              resolve({data:withOutTheatreHTML,isServe:false})
            }
          }
          reader.readAsDataURL(new Blob([figmaData[index].imageData], { type: 'image/png' }));   
          reader.onloadend = () => {
            if(figmaData[index].modelSrc != null){
              syncGetModelBlobFromUrl(
                figmaData[index].modelSrc
                ,
                (modelBlob)=>{ 
                  const reader = new FileReader();
                  reader.readAsDataURL(modelBlob);   
                  reader.onloadend = () => {
                    resolveStaticHTMLDataWithModelSrc(reader.result);
                  }
                }
              )
  
            }
            else{
              resolveStaticHTMLDataWithModelSrc(null);
            }
            
          }
        }

      }

    }).then(res => {
        if(res.isServe === true){
          var mUrl = [];
          var loopIndex = 0;

          console.log ('start');

          const URLPush = (url,name,ext) =>{
            console.log('added')
            mUrl.push({url:url,name:name,ext:ext}) 
            return mUrl;
          }
          const URLLoopTillEnd = () =>{
            loopIndex++;
            if(loopIndex === outputData.length){
              saveZip('my_project',mUrl)
            }
          }
          //console.log(res.data)
          var bb = new Blob([res.data], { type: 'text/html' });
          var htmlUrl = window.URL.createObjectURL(bb);
          mUrl.push({url:htmlUrl,name:'index',ext:'html'})

          for(var a=0;a<figmaData.length;a++){
            let index = a;
            //let data = outputData[index];
            if(figmaData[index].modelSrc != null){
              syncGetModelBlobFromUrl(
                // outputData[index].name
                figmaData[index].modelSrc
                ,
                (modelBlob)=>{ 
                  //console.log(modelUrl)
                  // todo chara fix
                  mUrl =  URLPush(
                    URL.createObjectURL(modelBlob)
                    ,
                    `#${index}-` + figmaData[index].modelSrc.split('/')[figmaData[index].modelSrc.split(`/`).length - 1].split(`.`)[0].substring(0,24),
                    figmaData[index].modelSrc.includes('.gltf')?'gltf':'glb'
                  )
                  mUrl = URLPush(
                    layout.children[figmaData.length - 1 - index].src,
                    `#${index}-` + figmaData[index].modelSrc.split('/')[figmaData[index].modelSrc.split(`/`).length - 1].substring(0,24),
                    'png'
                  )
                  URLLoopTillEnd();                  
                }
              )
  
            }
            else{
              //console.log(layout.children[figmaData.length - 1 - index].src)
              mUrl = URLPush(
                layout.children[figmaData.length - 1 - index].src,
                `#${index}-` + figmaData[index].name.replaceAll(/\//g,`_`).replaceAll(/\ /g,`_`).substring(0,24),
                'png')
              URLLoopTillEnd();
            }
          }
          
          // # Original
          // for(var a=0;a<outputData.length;a++){
          //   mUrl.push({
          //     url:layout.children[outputData.length - 1 - a].src,
          //     name:`#${a}-` + outputData[a].name.replace(/\//g,`_`).replace(/\ /g,`_`).substring(0,24),
          //     ext:'png'
          //   })
          // }
          // saveZip('my_project',mUrl)
        }
        else{
          var bb = new Blob([res.data], { type: 'text/html' });
          var htmlUrl = window.URL.createObjectURL(bb);
          var a = document.createElement("a");
          a.href = htmlUrl;
          a.download = 'index_static.html';
          a.style = "display: none";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }

  })
};
// ################################## web-request ##################################
export async function syncGetBase64FromUrl (url,callback){
  // fetch(url)
  // .then((data) =>{
  //   return data.blob()
  // })
  // .then((blob)=>{
  //   const reader = new FileReader();
  //   reader.readAsDataURL(blob); 
  //   reader.onloadend = () => {
  //     callback(reader.result)  
  //     //return base64data
  //   } 
  // })
  const data = await(fetch(url));
  const blobData = await(data.blob());
  console.log(blobData);
  const reader = new FileReader();
  reader.readAsDataURL(blobData); 
  reader.onloadend = () => {
    callback(reader.result)  
    //return base64data
  } 
}

export async function syncFetchQueryFigmaJSON (token,fileKey,nodeId,progressCallback,finishedCallback) {
  var num = 0;
  var mIndex = 0;

  const _apiUrlBase = `https://api.figma.com/v1/files/`
  const _apiUrl = _apiUrlBase + `${fileKey}/nodes?ids=${nodeId}`

  const data = await fetch(_apiUrl,{
    headers: {'Authorization': `Bearer ${token}`},
    method: 'GET',
  })
  const json = await data.json();

  const parentNode = Object.values(json.nodes)[0].document;
  // # filter invisilbe node
  const invisibleIndex = [];
  for(let b=0;b<parentNode.children.length;b++){
    if(parentNode.children[b].visible === false){
      invisibleIndex.push(b)
    }
  }
  const childrenLength = parentNode.children.length;
  // # array length is all node - invisibile node
  var jsonArr = new Array(childrenLength - invisibleIndex.length +1);

  const getSyncData = async (callback)=>{
    console.log("0 is started!");
    fetch(
      `https://api.figma.com/v1/` + 
      `images/${fileKey}?`+ 
      `ids=${nodeId}&`+
      `svg_include_id=true&format=png&`+
      `scale=${1}`
      ,{
      headers: {'Authorization': `Bearer ${token}`},
      method: 'GET',
    })
    .then((response) => {
      return response.json()
    })
    .then((responseObject) => {
      const apiSrc = Object.values(responseObject.images)[0];
      return apiSrc;
    })
    .then((src) =>{
      const frameIndex = 0;
      syncGetBase64FromUrl(src,(base64Src)=>{
        jsonArr.splice(frameIndex,1,{
          name:parentNode.name,
          width:parentNode.absoluteRenderBounds.width,
          height:parentNode.absoluteRenderBounds.height,
          x:parentNode.absoluteRenderBounds.x - parentNode.absoluteRenderBounds.x,
          y:parentNode.absoluteRenderBounds.y - parentNode.absoluteRenderBounds.y,
          src:base64Src,
          type:`image-framenode`,
          index:frameIndex,
          id:parentNode.id,
          fw:parentNode.absoluteRenderBounds.width,
          fh:parentNode.absoluteRenderBounds.height
        })

        console.log('fetched num ' + num);
        console.log('fetched index ' + frameIndex);

        num++
        progressCallback(`${num}/${childrenLength - invisibleIndex.length +1}`)
        callback(num);
      })
    });

    for(var i=0;i<childrenLength;i++){
      let index = i
      const node = parentNode.children[index];
      if(invisibleIndex.includes(index)){
        console.log('from figma: ' + index + ' is invisible node');
      }
      else{
        fetch(
          `https://api.figma.com/v1/` + 
          `images/${fileKey}?`+ 
          `ids=${node.id}&`+
          `svg_include_id=true&format=png&`+
          `scale=${1}`
          ,{
          headers: {'Authorization': `Bearer ${token}`},
          method: 'GET',
        })
        .then((response) =>{
          return response.json()
        })
        .then((responseObject) =>{
          const apiSrc = Object.values(responseObject.images)[0];
          return apiSrc;
        })
        .then((src)=>{
          //const mIndex = index + 1;
          let index = ++mIndex;
          syncGetBase64FromUrl(src,(base64Src)=>{
            console.log('node Name' +node.name);
            jsonArr.splice(index,1,{
              name:node.name,
              width:node.absoluteRenderBounds.width,
              height:node.absoluteRenderBounds.height,
              x:node.absoluteRenderBounds.x - parentNode.absoluteRenderBounds.x,
              y:node.absoluteRenderBounds.y - parentNode.absoluteRenderBounds.y,
              src:base64Src,
              type:`image-childnode`,
              index:index,
              id:node.id,
              fw:parentNode.absoluteRenderBounds.width,
              fh:parentNode.absoluteRenderBounds.height
            })
            
            console.log('fetched num ' + num);
            console.log('fetched index ' + (index)); // all index +1 -> index

            num++
            progressCallback(`${num}/${childrenLength  - invisibleIndex.length  +1}`)
            callback(num);

          })
        })
      }
    }
  }

  await getSyncData((number)=>{
    if(number === childrenLength  - invisibleIndex.length  +1){
      finishedCallback(jsonArr)
    }
  })
}

// ########################### Three.js #############################

export function createCanvasDotMaterial(THREE,color, size){
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

export function createCanvasGridMaterial(THREE,color,width,height,paddingW,paddingH,lineWidth){
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

export const helperSetting = (THREE,scene,sheetObj,yScalePerc,baseUnit,callback) =>{
  const cameraGuideHelper =  searchElementByType(scene.children,'type','CameraHelper');
  //radius angles radius
  const polarGridHelper = new THREE.PolarGridHelper(baseUnit*4, 8, 4, 64, 0xffffff, 0xffffff);
  polarGridHelper.position.y = -yScalePerc/2*baseUnit;
  polarGridHelper.position.z = baseUnit;
  polarGridHelper.visible = sheetObj.current.value.polarHelper;
  scene.add(polarGridHelper);

  const ground = new THREE.PlaneGeometry(baseUnit*8, baseUnit*8, Math.min(250,Math.max(40,baseUnit*8.*5)), Math.min(250,Math.max(40,baseUnit*8.*5)));
  ground.rotateX(Math.PI / 2);
  const dotGrid = new THREE.PointsMaterial({ transparent: false, fog: false });
  (dotGrid.map = createCanvasDotMaterial(THREE,'#ffffff', baseUnit*8)), (dotGrid.size = 1*0.00825);
  const dotGridHelper = new THREE.Points(ground, dotGrid);
  dotGridHelper.position.y =  -yScalePerc/2*baseUnit;
  dotGridHelper.position.z = baseUnit;
  dotGridHelper.visible = sheetObj.current.value.dotHelper;
  scene.add(dotGridHelper);
  
  callback(cameraGuideHelper,polarGridHelper,dotGridHelper)
}

export const theatreStudioCameraHelperFixed = (scene,invalidate)=>{
  
  const snapBtn = document.getElementById('theatrejs-studio-root').shadowRoot.children[1].children[0].children[1].children[0].children[1];
  const mArr = scene.children;
  const mHelper =  searchElementByType(mArr,'type','CameraHelper');

  snapBtn.addEventListener("click", 
  (event)=>{
    if(mArr.includes(mHelper)){
      event.stopPropagation()
      new Promise(function(resolve, reject) {
        console.log('remove step 1 - remove helper first')
        mHelper.removeFromParent();
        invalidate() 
        setTimeout(() => resolve(1), 1); // (*)
      }).then(function(result) { // (**)
        console.log('remove step 2 - click btn second')
        snapBtn.children[1].click();
      })
    }
    else{
      console.log('remove step 3 - snapshot opened')
      setTimeout(()=>{
        // enable cameraHelper when open SnapShot
        const closeBtn = document.getElementById('theatrejs-studio-root').shadowRoot.children[1].children[0].children[2].children[8].children[0].children[0];
        const closeListener = () =>{
          if(!mArr.includes(mHelper)){
            //no need to event.stopPropagation()
            new Promise(function(resolve, reject) {
              console.log('add step 1 - close window first')
              setTimeout(() => resolve(1), 1); // (*)
            }).then(function(result) { // (**)
              console.log('add step 2 - add camHelper')
              scene.add(mHelper);
              invalidate();
            })
          }
          closeBtn.removeEventListener('click',closeListener)
          return true;
        }
        closeBtn.addEventListener("click",closeListener)
      },1)
    }
    return true;
  });  
}


export function createPlaneCurve(THREE,g, z){
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