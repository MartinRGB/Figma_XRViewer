import {nginxUploadPHPLink,nginxUploadFolder} from '../configs/index';

export async function dataToPHPServer (link,blob,headers,endCallback) {

  fetch(link, {
    method:"POST", 
    body:blob, //from
    headers: headers,
  })
  .then(response => {
    console.log(response)
    if(response.statusText === "OK"){
      //setIsLoading(false)
      endCallback();
      console.log('finished')
    }
    if (response.ok) return response;
    else throw Error(`Server returned ${response.status}: ${response.statusText}`)
  })
  .catch(err => {
      alert(err);
  });
}

export async function postData (url,path,name,startCallback,middleCallback,endCallback) {

  //setIsLoading(true)
  startCallback();
  // # get file
  await
  fetch(url).then((r) => {
    console.log(r)
    if (r.status === 200) {
      return r.blob();
    }
    return Promise.reject(new Error(r.statusText));
  })
  .then((blob)=>{
    console.log(blob)
    middleCallback();
    //console.log(nginxUploadFolder + path)
    // ########################### METHOD - QUERY DATA ###########################
    dataToPHPServer(
      `${nginxUploadPHPLink}?fileDir=${path}&fileName=${name}`,
      blob,
      {},
      endCallback
    )

  })

}