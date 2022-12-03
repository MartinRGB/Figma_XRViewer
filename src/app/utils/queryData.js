async function syncGetBase64FromUrl (url,callback){
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
  const reader = new FileReader();
  reader.readAsDataURL(blobData); 
  reader.onloadend = () => {
    callback(reader.result)  
    //return base64data
  } 
}

async function getVisibleNode (parentNode){
  let childrenNode = parentNode.children;
  for(let b=0;b<parentNode.children.length;b++){
    // error here
    if(parentNode.children[b].visible === false){
      delete childrenNode[b];
    }

  }
  childrenNode = childrenNode.filter(n => {return n != null && n != '';})
  return childrenNode
}

export async function syncFetchQueryFigmaJSON (token,fileKey,nodeId,progressCallback,finishedCallback) {
  var num = 0;
  var mIndex = 0;
  const isContainFrame = false;

  const _apiUrlBase = `https://api.figma.com/v1/files/`
  const _apiUrl = _apiUrlBase + `${fileKey}/nodes?ids=${nodeId}`

  const data = await fetch(_apiUrl,{
    headers: {'Authorization': `Bearer ${token}`},
    method: 'GET',
  })
  const json = await data.json();

  const parentNode = Object.values(json.nodes)[0].document;
  
  // # filter invisilbe node
  const childrenNode = await getVisibleNode(parentNode);
  const childrenLength = childrenNode.length;
  // # array length is (all node - invisibile node)
  var jsonArr = new Array(childrenLength + (isContainFrame?1:0));

  const getFrameImgOBJ = (token,fileKey,nodeId,frameNode,frameOBJCallback) =>{
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
    .then((src)=>{
      ///////////
      syncGetBase64FromUrl(src,(base64Src)=>{
        frameOBJCallback(
          {
            name:frameNode.name,
            width:frameNode.absoluteRenderBounds.width,
            height:frameNode.absoluteRenderBounds.height,
            frameWidth:frameNode.absoluteRenderBounds.width,
            frameHeight:frameNode.absoluteRenderBounds.height,
            x:frameNode.absoluteRenderBounds.x - frameNode.absoluteRenderBounds.x,
            y:frameNode.absoluteRenderBounds.y - frameNode.absoluteRenderBounds.y,
            src:base64Src,
            type:`image-framenode`,
            index:0,
            id:frameNode.id,
          }
        )

      })
    })
  }

  const getNodeImgOBJArr = (token,fileKey,parentNode,childrenNode,nodeOBJCallback) =>{
    for(var i=0;i<childrenNode.length;i++){
      let index = i
      const node = childrenNode[index];
      fetch(
        `https://api.figma.com/v1/` + 
        `images/${fileKey}?`+ 
        `ids=${childrenNode[index].id}&`+
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
        syncGetBase64FromUrl(src,(base64Src)=>{
          nodeOBJCallback(
            {
              name:childrenNode[index].name,
              width:childrenNode[index].absoluteRenderBounds.width,
              height:childrenNode[index].absoluteRenderBounds.height,
              frameWidth:parentNode.absoluteRenderBounds.width,
              frameHeight:parentNode.absoluteRenderBounds.height,
              x:childrenNode[index].absoluteRenderBounds.x - parentNode.absoluteRenderBounds.x,
              y:childrenNode[index].absoluteRenderBounds.y - parentNode.absoluteRenderBounds.y,
              src:base64Src,
              type:`image-childnode`,
              index:index + (isContainFrame?1:0),
              id:childrenNode[index].id,
            },
            index
          )
        })
      })
    }
  }

  const getSyncData = async (callback)=>{
    
    if(isContainFrame){
      getFrameImgOBJ(token,fileKey,nodeId,parentNode,(frameOBJ) =>{
        jsonArr.splice(0,1,frameOBJ)
        console.log('fetched num ' + num);
        console.log('fetched index ' + 0);

        num++
        progressCallback(`${num}/${childrenLength + (isContainFrame?1:0)}`)
        callback(num);
      })
    }

    getNodeImgOBJArr(token,fileKey,parentNode,childrenNode,(nodeOBJ,index) =>{
        jsonArr.splice(index + (isContainFrame?1:0),1,nodeOBJ)

        console.log('fetched num ' + num);
        console.log('fetched index ' +  `${index +(isContainFrame?1:0)}`);

        num++
        progressCallback(`${num}/${childrenLength + (isContainFrame?1:0)}`)
        callback(num);
    })
  }

  await getSyncData((number)=>{
    if(number === childrenLength + (isContainFrame?1:0)){
      finishedCallback(jsonArr)
    }
  })
}