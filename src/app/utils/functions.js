
import JSZip from "jszip";
import { saveAs } from 'file-saver';

export function searchElementByType(data,type,value){
  const res = data.find(({type}) => type === value);
  return res ? res : null;
}

export function findValueIndexByKey(arr,attr,val){
  return arr.findIndex(function(person) {
    return person[attr] == val
  })
};

export function __awaiter (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
} ;

export function saveZip(filename, datas){
  if(!datas) return;

  const zip = new JSZip();
  const pngFolder = zip.folder("pngs"); // folder name where all files will be placed in 

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

  });

  zip.generateAsync({ type: "blob" }).then((blob) => saveAs(blob, filename));

};


export function downloadFile(url, onSuccess) {
  var xhr = new XMLHttpRequest();
  xhr.onprogress = calculateAndUpdateProgress;
  xhr.open('GET', url, true);
  xhr.responseType = "blob";
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
          if (onSuccess) onSuccess(xhr.response);
      }
  }
}

export function onDownloadComplete(blobData){
  if (count < fileURLs.length) {
      blobToBase64(blobData, function(binaryData){
              // add downloaded file to zip:
              var fileName = fileURLs[count].substring(fileURLs[count].lastIndexOf('/')+1);
              zip.file(fileName, binaryData, {base64: true});
              if (count < fileURLs.length -1){
                  count++;
                  downloadFile(fileURLs[count], onDownloadCompleted);
              }
              else {
                  // all files have been downloaded, create the zip
                  var content = zip.generate();

                  // then trigger the download link:        
                  var zipName = 'download.zip';
                  var a = document.createElement('a'); 
                  a.href = "data:application/zip;base64," + content;
                  a.download = zipName;
                  a.click();
              }
          });
  }
}

export function blobToBase64(blob, callback) {
  var reader = new FileReader();
  reader.onload = function() {
      var dataUrl = reader.result;
      var base64 = dataUrl.split(',')[1];
      callback(base64);
  };
  reader.readAsDataURL(blob);
}

export function calculateAndUpdateProgress(evt) {
  if (evt.lengthComputable) {
      //
  }
}

export async function asyncGetBase64FromUrl(url){
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob); 
    reader.onloadend = () => {
      const base64data = reader.result;   
      resolve(base64data);
    }
  });
}

export async function syncGetBase64FromUrl (url,callback){
  fetch(url)
  .then((data) =>{
    return data.blob()
  })
  .then((blob)=>{
    const reader = new FileReader();
    reader.readAsDataURL(blob); 
    reader.onloadend = () => {
      callback(reader.result)  
      //return base64data
    } 
  })
}

export async function asyncFetchQueryFigmaJSON (token,fileKey,nodeId,callBackProgress,callbackFinished) {
  const _apiUrlBase = `https://api.figma.com/v1/files/`
  const _apiUrl = _apiUrlBase + `${fileKey}/nodes?ids=${nodeId}`
  var jsonArr = [];

  const data = await fetch(_apiUrl,{
    headers: {'Authorization': `Bearer ${token}`},
    method: 'GET',
  })
  const json = await data.json();

  const parentNode = Object.values(json.nodes)[0].document;

  const childrenLength = parentNode.children.length;

  const frameImgData = await fetch(
    `https://api.figma.com/v1/` + 
    `images/${fileKey}?`+ 
    `ids=${nodeId}&`+
    `svg_include_id=true&format=png&`+
    `scale=${1}`
    ,{
    headers: {'Authorization': `Bearer ${token}`},
    method: 'GET',
  });
  const frameImgJSON = await frameImgData.json();
  const frameImgSrc = await Object.values(frameImgJSON.images)[0];
  const framebase64Src = await asyncGetBase64FromUrl(frameImgSrc);

  jsonArr.push({
    name:parentNode.name,
    width:parentNode.absoluteRenderBounds.width,
    height:parentNode.absoluteRenderBounds.height,
    x:parentNode.absoluteRenderBounds.x - parentNode.absoluteRenderBounds.x,
    y:parentNode.absoluteRenderBounds.y - parentNode.absoluteRenderBounds.y,
    src:framebase64Src,
    type:`image-framenode`,
    index:0,
    id:parentNode.id,
    fw:parentNode.absoluteRenderBounds.width,
    fh:parentNode.absoluteRenderBounds.height
  })
  //console.log('fetched index ' + '0');
  //setQueryLoadingProgress(`1/${childrenLength+1}`)
  callBackProgress(`1/${childrenLength+1}`);

  for(var i=0;i<childrenLength;i++){
    let index = i
    const node = parentNode.children[index];

    const imgData = await fetch(
      `https://api.figma.com/v1/` + 
      `images/${fileKey}?`+ 
      `ids=${node.id}&`+
      `svg_include_id=true&format=png&`+
      `scale=${1}`
      ,{
      headers: {'Authorization': `Bearer ${token}`},
      method: 'GET',
    });
    const imgJSON = await imgData.json();
    const imgSrc = await Object.values(imgJSON.images)[0];
    const base64Src = await asyncGetBase64FromUrl(imgSrc);
    jsonArr.push({
      name:node.name,
      width:node.absoluteRenderBounds.width,
      height:node.absoluteRenderBounds.height,
      x:node.absoluteRenderBounds.x - parentNode.absoluteRenderBounds.x,
      y:node.absoluteRenderBounds.y - parentNode.absoluteRenderBounds.y,
      src:base64Src,
      type:`image-childnode`,
      index:index+1,
      id:node.id,
      fw:parentNode.absoluteRenderBounds.width,
      fh:parentNode.absoluteRenderBounds.height
    })
    //console.log('fetched index ' + (index + 1));
    //setQueryLoadingProgress(`${index+2}/${childrenLength+1}`);
    callBackProgress(`${index+2}/${childrenLength+1}`);
  }

  // savedFigData = jsonArr;
  // setFigData(savedFigData);
  // console.log(savedFigData)
  // setIsQueryLoading(false);
  callbackFinished();
}

export async function syncFetchQueryFigmaJSON (token,fileKey,nodeId,progressCallback,finishedCallback) {
  var num = 0;
  const _apiUrlBase = `https://api.figma.com/v1/files/`
  const _apiUrl = _apiUrlBase + `${fileKey}/nodes?ids=${nodeId}`

  const data = await fetch(_apiUrl,{
    headers: {'Authorization': `Bearer ${token}`},
    method: 'GET',
  })
  const json = await data.json();

  const parentNode = Object.values(json.nodes)[0].document;

  const childrenLength = parentNode.children.length;

  var jsonArr = new Array(childrenLength+1);
  const getSyncData = async (callback)=>{
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
      const mIndex = 0;
      syncGetBase64FromUrl(src,(base64Src)=>{
        jsonArr.splice(mIndex,1,{
          name:parentNode.name,
          width:parentNode.absoluteRenderBounds.width,
          height:parentNode.absoluteRenderBounds.height,
          x:parentNode.absoluteRenderBounds.x - parentNode.absoluteRenderBounds.x,
          y:parentNode.absoluteRenderBounds.y - parentNode.absoluteRenderBounds.y,
          src:base64Src,
          type:`image-framenode`,
          index:mIndex,
          id:parentNode.id,
          fw:parentNode.absoluteRenderBounds.width,
          fh:parentNode.absoluteRenderBounds.height
        })

        console.log('fetched num ' + num);
        console.log('fetched index ' + 0);
        num++
        progressCallback(`${num}/${childrenLength+1}`)
        //setQueryLoadingProgress(`${num}/${childrenLength+1}`)
        callback(num);
      })
    });



    for(var i=0;i<childrenLength;i++){
      let index = i
      const node = parentNode.children[index];

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
        const mIndex = index + 1;
        syncGetBase64FromUrl(src,(base64Src)=>{
          jsonArr.splice(mIndex,1,{
            name:node.name,
            width:node.absoluteRenderBounds.width,
            height:node.absoluteRenderBounds.height,
            x:node.absoluteRenderBounds.x - parentNode.absoluteRenderBounds.x,
            y:node.absoluteRenderBounds.y - parentNode.absoluteRenderBounds.y,
            src:base64Src,
            type:`image-childnode`,
            index:index+1,
            id:node.id,
            fw:parentNode.absoluteRenderBounds.width,
            fh:parentNode.absoluteRenderBounds.height
          })

          console.log('fetched num ' + num);
          console.log('fetched index ' + (index+1));
          num++
          progressCallback(`${num}/${childrenLength+1}`)
          //setQueryLoadingProgress(`${num}/${childrenLength+1}`);
          callback(num);
        })
      })
    
    }
  }

  await getSyncData((number)=>{
    if(num === childrenLength+1){
      finishedCallback(jsonArr)
      // savedFigData = jsonArr;
      // setFigData(savedFigData);
      // console.log(savedFigData)
      // setIsQueryLoading(false);
    }
  })


}