
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