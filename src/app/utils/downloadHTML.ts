import JSZip, { forEach } from "jszip";
import { saveAs } from 'file-saver';

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

// ################################## function ##################################

async function syncGetModelBlobFromUrl (url,callback){
  fetch(url)
  .then((data) =>{
    return data.blob();
  })
  .then((blob)=>{
    var bb = new Blob([blob], { type: url.includes('.gltf')?'model/gltf+json':'model/gltf-binary' });
    callback(bb)  
  })
}

export const onDownloadHTML = async(event,isServe,figmaData,layout) =>{
  var frameHTML = document.documentElement.innerHTML;
  var outputData = new Array(figmaData.length)
  new Promise((resolve, reject) => {
      if(isServe === true){
        for(var i=0;i<outputData.length;i++){
          // todo
          let index = i;;
          outputData.splice(index,1,{
            name:figmaData[index].name,
            width:figmaData[index].width,
            height:figmaData[index].height,
            frameWidth:figmaData[index].frameWidth,
            frameHeight:figmaData[index].frameHeight,
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
              console.log(outputData)
              const newHtml = frameHTML.replace(/savedFigData = \'\'/g,`savedFigData = ${JSON.stringify(outputData)}`);
              const withOutTheatreHTML = newHtml.replaceAll(`<div id="theatrejs-studio-root" style="position: fixed; inset: 0px; pointer-events: none; z-index: 100;"></div>`,'');
              resolve({data:withOutTheatreHTML,isServe:true})
          }
        }
      }
      else{
        let finishNum = 0;
        const resolveStaticHTMLDataWithModelSrc = (mSrc,iSrc,index) =>{
          outputData.splice(index,1,{
            name:figmaData[index].name,
            width:figmaData[index].width,
            height:figmaData[index].height,
            frameWidth:figmaData[index].frameWidth,
            frameHeight:figmaData[index].frameHeight,
            x:figmaData[index].x,
            y:figmaData[index].y,
            src: iSrc,
            type:figmaData[index].type,
            index:figmaData[index].index,
            id:figmaData[index].id,
            imageData:null,
            modelSrc:mSrc,
          })
          
          finishNum++;
          if(finishNum === outputData.length){
            const newHtml = frameHTML.replace(/savedFigData = \'\'/g,`savedFigData = ${JSON.stringify(outputData)}`);
            const withOutTheatreHTML = newHtml.replaceAll(`<div id="theatrejs-studio-root" style="position: fixed; inset: 0px; pointer-events: none; z-index: 100;"></div>`,'');
            resolve({data:withOutTheatreHTML,isServe:false})
          }
        }

        for(var i=0;i<outputData.length;i++){
          let index = i;
          const imgReader = new FileReader();
          imgReader.readAsDataURL(new Blob([figmaData[index].imageData], { type: 'image/png' }));   
          imgReader.onloadend = () => {

            if(figmaData[index].modelSrc != null){
              syncGetModelBlobFromUrl(
                figmaData[index].modelSrc
                ,
                (modelBlob)=>{ 
                  const modelReader = new FileReader();
                  modelReader.readAsDataURL(modelBlob);   
                  modelReader.onloadend = () => {
                    resolveStaticHTMLDataWithModelSrc(modelReader.result,imgReader.result,index);
                  }
                }
              )
  
            }
            else{
              resolveStaticHTMLDataWithModelSrc(null,imgReader.result,index);
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
          var bb = new Blob([res.data], { type: 'text/html' });
          var htmlUrl = window.URL.createObjectURL(bb);
          mUrl.push({url:htmlUrl,name:'index',ext:'html'})

          for(var a=0;a<figmaData.length;a++){
            //todo
            let index = a;
            //let index = figmaData.length - a - 1;
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
                    layout.children[index].src, // layout.children[figmaData.length - 1 - index].src,
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
                layout.children[index].src, //layout.children[figmaData.length - 1 - index].src,
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