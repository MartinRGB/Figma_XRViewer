// ################################## util ##################################
export function findValueIndexByKey(arr,attr,val){
  return arr.findIndex(function(person) {
    return person[attr] == val
  })
};

// ################################## download ##################################
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

// ################################## web request ##################################
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
    callBackProgress(`${index+2}/${childrenLength+1}`);
  }
  callbackFinished();
}

// ################################## image ##################################

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
