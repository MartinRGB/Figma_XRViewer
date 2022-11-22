import React, { useRef, useState,useEffect,forwardRef,useCallback,useImperativeHandle,createContext} from 'react'
import {FigmaApi} from '@Utils/figmaAPI';
import Spinner from '@Components/Spinner';
import { rootURL,rendererURL,clientID,secrectID } from '@Config';
import '../styles/importer.css';

// fileName nodeId token
// local
// const isLocal = true;

const ImporterApp = () => {
  const [token,setCurrentToken] = useState('-');
  const [key,setCurrentKey] = useState('-');
  const [node,setCurrentNode] = useState('-');

  const [fileUrl,setfileUrl] = useState('copy figma file url here...')
  const [apiUrl,setApiUrl] = useState('-');
  const [webUrl,setWebUrl] = useState('-');

  const [jsonData,setJSONData] = useState('')
  const [jsonTextAreaVal,setJSONTextAreaVal] = useState('')

  const [imgArray,setImageArray] = useState([]);

  const [isLoading,setIsLoading] = useState(true);

  // const figmaApi = new FigmaApi({
  //   clientId: clientID,
  //   clientSecrete: secrectID,
  //   redirectUri: `${rootURL}callback.html`,
  // });
  const figmaApi = new FigmaApi({
    // local
    // clientId: 'l1KN3Rbdm5ilEpXw5etfrp',
    // clientSecrete: 'axsYPEuvQqK9ya2AZtgW0CbLogy02p',
    // online
    // local v3 | GitHub v3
    // clientId: isLocal?'l1KN3Rbdm5ilEpXw5etfrp':'GyTJq7HCHjW49zAmMvy6WW', 
    // clientSecrete: isLocal?'axsYPEuvQqK9ya2AZtgW0CbLogy02p':'nu0XbFimZJV3pFYafonCpJ9nAofvbc',
    // local v4 | GitHub v4
    clientId:clientID,
    clientSecrete:secrectID,
    redirectUri: `${rootURL}callback.html`,
  });

  useEffect(()=>{
    const parsedUrl = new URL(window.location.href);
    if(parsedUrl.searchParams.get('query_key') != null){
      //TODO smart way of getting token

      figmaApi.getOAuth2Token().then(token => {
        setCurrentToken(token)
        setIsLoading(false);
        console.log(token)
        const queryKey = parsedUrl.searchParams.get('query_key');
        const queryNode = parsedUrl.searchParams.get('query_node');
        const _rendererUrlBase = rendererURL;
        const _rendererUrl = _rendererUrlBase + `?query_token=${token}&query_key=${queryKey}&query_node=${queryNode}`
        const _apiUrlBase = `https://api.figma.com/v1/files/`
        const _apiUrl = _apiUrlBase + `${queryKey}/nodes?ids=${queryNode}`
  
        setCurrentKey(queryKey)
        setCurrentNode(queryNode)
  
        setApiUrl(_apiUrl)
        setWebUrl(_rendererUrl)

        if(parsedUrl.searchParams.get('query_platform') === 'unity' ){
          onSendToUnity(token,queryKey,queryNode);
        }
        if(parsedUrl.searchParams.get('query_platform') === 'webxr' ){
          window.location.href =`${_rendererUrl}`;
        }
      });
    }
    else{
      figmaApi.getOAuth2Token().then(token => {
        setCurrentToken(token)
        setIsLoading(false);
        console.log(token)
      });
    }
  },[window.location.href]);  

  const copyToClipboard = (str) => {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.className = 'hidden_copy_helper';
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
    alert("Copied the string: " + str);
  }

  const getToken = () =>{
    figmaApi.getOAuth2Token().then(token => {
      setCurrentToken(token)
      setIsLoading(false);
    });
  }

  const regenerateToken = () =>{
    localStorage.clear();
    setCurrentToken('-');
    getToken();
  }

  const fileUrlOnChange = (e) =>{
    const myValue = e.target.value;
    setfileUrl(myValue);
  }
 
  const getUrl = (url) =>{
    var substrings = url.split('/');
    var length = substrings.length;
    var isNodeUrl = substrings[length - 1].includes("node-id");
    var _fileKey = substrings[length - 2];
    console.log(_fileKey);
    var apiUrl;
    if (!isNodeUrl)
    {
      apiUrl = `https://api.figma.com/v1/files/${_fileKey}`;
    }

    var _nodeId = substrings[length - 1].split(`?node-id=`)[1];
    apiUrl = `https://api.figma.com/v1/files/${_fileKey}/nodes?ids=${_nodeId}`

    const rendererUrl = rendererURL + `?query_token=${token}&query_key=${_fileKey}&query_node=${_nodeId}`

    setCurrentKey(_fileKey)
    setCurrentNode(_nodeId)

    setApiUrl(apiUrl)
    setWebUrl(rendererUrl)
  }

  const handleJSONTextAreaChange = (event) => {
    setJSONTextAreaVal(event.target.value);
  };

  const getJSON = (apiUrl,token) =>{
    // # request get json
    setIsLoading(true)
    var httpRequest = new XMLHttpRequest(); 
    httpRequest.open('GET', apiUrl, true); 
    httpRequest.setRequestHeader("Authorization",`Bearer ${token}`);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            // # get json data
            var json = JSON.parse(httpRequest.responseText);
            setJSONData(json)
            setJSONTextAreaVal(JSON.stringify(json,null,'\t'))
            setIsLoading(false)

        }
    };
  }

const ImageRequestUrl = (fileKey,nodeId,imageScale) =>{
    return(
    `https://api.figma.com/v1/` + 
    `images/${fileKey}?`+ 
    `ids=${nodeId}&`+
    `svg_include_id=true&format=png&`+
    `scale=${imageScale}`
    )
}

const ImageRequest = (fileKey,nodeId,imageScale,index,length,imgArr) =>{
  var httpImgRequest = new XMLHttpRequest();
  httpImgRequest.open('GET', ImageRequestUrl(fileKey,nodeId,imageScale), true); 
  httpImgRequest.setRequestHeader("Authorization",`Bearer ${token}`);
  httpImgRequest.send();
  let a = index;
  console.log(a);
  httpImgRequest.onreadystatechange = function () {
      if (httpImgRequest.readyState == 4 && httpImgRequest.status == 200) {
          // get json data
          var json = JSON.parse(httpImgRequest.responseText);
          imgArr.push(Object.values(json.images)[0]);
          console.log(imgArr);
          setImageArray(imageArray => [...imageArray,Object.values(json.images)[0]])
          if(a === length - 1){
             
              //setImageArray(imgArr);
              setIsLoading(false)
              console.log(imgArr)
          }

      }
  };
}

const onSendToUnity = (_token,_key,_node) =>{
  var hrefLink = document.createElement('a');
  hrefLink.href = `com.unity3d.kharma:custom/query_token=${_token}&file_key=${_key}&frame_name=${"figma"}&node_id=${_node}`;
  hrefLink.addEventListener("click",()=>{

  })
  document.body.appendChild(hrefLink);
  hrefLink.click();
  document.body.removeChild(hrefLink);
}

const goWebXR = () =>{
  //window.location.href=`${webUrl}`
  window.open(`${webUrl}`,'_blank')
}

const getImage = (json) => {
    setIsLoading(true)
    var idNodes = [];
    var imgArr = [];
    setImageArray([]);
    const firstNodeValue = Object.values(json.nodes)[0]
    console.log(firstNodeValue)
    //# preview
    //const firstNodeKey = Object.keys(json.nodes)[0]
    //idNodes.push(firstNodeKey); 

    for(var i =0;i< firstNodeValue.document.children.length;i++){

    console.log(i)
        idNodes.push(firstNodeValue.document.children[i].id)
        if(i === firstNodeValue.document.children.length-1){
            console.log(idNodes);
            // # get image url
            for(var a = 0;a<idNodes.length;a++){
                ImageRequest(key,idNodes[a],1,a,idNodes.length,imgArr)
            }
        }
    }
}

  return (
    <>
    <div className="vertical-flex-container">
    <div className="horizontal-flex-container">
      <div className='flex-left'>
        {(isLoading)?
          <Spinner hintText={`loading`}></Spinner>
          :
          <div className="data_snippet">
            {
              (webUrl === '-')?
              <>
                <div>
                  <p>Your Figma <code className="code_button" >Token</code> is:</p>
                  <div style={{marginTop: "6px"}}><strong>{token}</strong></div>
                  <div style={{marginTop: "6px"}}>
                    <button className="green-button" onClick={()=>{copyToClipboard(token)}}>Copy</button>
                    <button style={{marginLeft:"6px"}} className="green-button" onClick={()=>{regenerateToken()}}>Regenerate</button>
                  </div>
                </div>

                <div style={{marginTop: "24px"}}>
                  <textarea className="file_textarea" rows={1} cols={33} onChange={(e)=>fileUrlOnChange(e)} value={fileUrl}></textarea>
                  <button style={{marginTop: "10px"}} className="green-button" onClick={()=>{getUrl(fileUrl)}}>Get API & Renderer Url</button>
                </div>
              </>
              :
              <>
              <div style={{display:'none',marginTop: "24px"}}>
                <p>Your Figma <code className="code_button">API Url</code> is:</p>
                <div style={{marginTop: "6px"}}><strong>{apiUrl}</strong></div>
                <button style={{marginTop: "6px"}} className="green-button" onClick={()=>{copyToClipboard(apiUrl)}}>Copy</button>
              </div>

              <div style={{marginTop: "24px"}}>
                <p>Your <code className="code_button">Figma Token</code> is:</p>
                <div style={{marginTop: "6px"}}><strong>{token}</strong></div>
                <p>Your <code className="code_button">Frame Url</code> is:</p>
                <div style={{marginTop: "6px"}}><strong>{`https://www.figma.com/file/${key}/figma?node-id=${node}`}</strong></div>
                <p>Your <code className="code_button">WebXR Website Url</code> is:</p>
                <div style={{marginTop: "6px"}}><strong>{webUrl}</strong></div>
                <div style={{marginTop: "6px"}}>
                  <button  className="green-button" onClick={()=>{onSendToUnity(token,key,node)}}>Send To Unity</button><br></br>
                  <button style={{marginTop: "6px"}} className="green-button" onClick={()=>{goWebXR()}}>Go WebXR Site</button> <br></br>
                  <button style={{marginTop: "6px"}} className="green-button" onClick={()=>{window.location.href=`${rootURL}importer.html`}}>Go Origin Site</button> <br></br>
                  <button style={{marginTop: "6px"}} className="green-button" onClick={()=>{getJSON(apiUrl,token)}}>Get JSON Data</button><br></br>
                  {(jsonData)?
                   <button style={{marginTop: "6px"}} className="green-button" onClick={()=>{getImage(jsonData)}}>Get Image</button>
                   :
                   <></>
                  }
                </div>
              </div>
              </>
            }
          </div>
        }
      </div>
      {(jsonData && !isLoading)?
        <div className='flex-right'>
          <textarea className='json-textarea' value={jsonTextAreaVal} onChange={handleJSONTextAreaChange}></textarea>
        </div>
        :
        <></>
      }
    </div>

    {(imgArray.length != 0)?
      <div className="images-list">
      {
        imgArray.map((number) =>
          <img src = {number}></img>
        )
      }
      </div>
      :
      <></>
    }

    </div>
    </>
  )
}
export default ImporterApp;