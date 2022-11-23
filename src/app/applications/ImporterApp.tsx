import React, {useState,useEffect} from 'react'
import {FigmaApi} from '@Utils/figmaAPI';
import Spinner from '@Components/Spinner';
import { rootURL,rendererURL,clientID,secrectID } from '@Config';
import ImporterStyle from '@Styles/Importer';
import { copyToClipboard } from '@Utils/functions.js'; 
import styled from 'styled-components';

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

  const figmaApi = new FigmaApi({
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

  const getToken = () =>{
    figmaApi.getOAuth2Token().then(token => {
      setCurrentToken(token)
      setIsLoading(false);
    });
  }

  const onRegenerateToken = () =>{
    localStorage.clear();
    setCurrentToken('-');
    getToken();
  }

  const onChangeFileUrl = (e) =>{
    const myValue = e.target.value;
    setfileUrl(myValue);
  }
 
  const onGetUrl = (url) =>{
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

  const onGetJSON = (apiUrl,token) =>{
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

  const onCopyToClipboard = (str) =>{
    copyToClipboard(str);
  }

  const onSendToUnity = (_token,_key,_node) =>{
    var hrefLink = document.createElement('a');
    hrefLink.href = `com.unity3d.kharma:custom/query_token=${_token}&file_key=${_key}&frame_name=${"figma"}&node_id=${_node}`;
    document.body.appendChild(hrefLink);
    hrefLink.click();
    document.body.removeChild(hrefLink);
  }

  const onOpenWebXR = () =>{
    //window.location.href=`${webUrl}`
    window.open(`${webUrl}`,'_blank')
  }

  const onGoOrigSite = ()=>{
    window.location.href=`${rootURL}importer.html`;
  }

  const onGetImageList = (json) => {
    setIsLoading(true)
    var idNodes = [];
    var imgArr = [];
    setImageArray([]);
    const firstNodeValue = Object.values(json.nodes)[0]
    console.log(firstNodeValue)
    //# preview
    const firstNodeKey = Object.keys(json.nodes)[0]
    idNodes.push(firstNodeKey); 

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

  const CodeBtn = styled.code`
    cursor: pointer;
    background: #7f7f7f4f;
    padding: 2px 6px 2px 6px;
    border-radius: 4px;
  `
  const StrongText = styled.strong`
    font-size: 16px;
    word-break: break-all;
  `

  const GreenBtn = styled.button`
    font-size: 14px;
    line-height: 16px;
    padding: 4px 8px 4px 8px;
    border-radius: 6px;
    background: #10bd4e;
    color: white;
    border: 1px solid #ffffff87;
    cursor: pointer;
    margin-right:6px;
  `

  const MarginTopSix = styled.div`
    * {
      margin-top: 6px;
      margin-bottom: 6px;
    }
  `

  const NormalTextArea = styled.textarea`
    width: 100%;
    height: 24px;
    line-height: 24px;
    padding-left: 8px;
    padding-right: 8px;
    outline: none;
    font-size: 12px;
    color:var(--fg);
    background: #7f7f7f4f;
  `

  return (
    <>
    <ImporterStyle></ImporterStyle>
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
                {/* <div>
                  <p>Your Figma <CodeBtn>Token</CodeBtn> is:</p>
                  <div style={{marginTop: "6px"}}><StrongText>{token}</StrongText></div>
                  <div style={{marginTop: "6px"}}>
                    <button className="green-button" onClick={()=>{onCopyToClipboard(token)}}>Copy</button>
                    <button style={{marginLeft:"6px"}} className="green-button" onClick={()=>{onRegenerateToken()}}>Regenerate</button>
                  </div>
                </div>

                <div style={{marginTop: "24px"}}>
                  <textarea className="file_textarea" rows={1} cols={33} onChange={(e)=>onChangeFileUrl(e)} value={fileUrl}></textarea>
                  <button style={{marginTop: "10px"}} className="green-button" onClick={()=>{onGetUrl(fileUrl)}}>Get API & Renderer Url</button>
                </div> */}
                <MarginTopSix>
                  <p>Your Figma <CodeBtn>Token</CodeBtn> is:</p>
                  <StrongText>{token}</StrongText>
                  <MarginTopSix>
                  <GreenBtn onClick={()=>{onCopyToClipboard(token)}}>Copy</GreenBtn>
                  <GreenBtn onClick={()=>{onRegenerateToken()}}>Regenerate</GreenBtn>
                  </MarginTopSix>
                </MarginTopSix>

                <MarginTopSix>
                  <NormalTextArea rows={1} cols={33} onChange={(e)=>onChangeFileUrl(e)} value={fileUrl}></NormalTextArea>
                  <GreenBtn onClick={()=>{onGetUrl(fileUrl)}}>Get API & Renderer Url</GreenBtn>
                </MarginTopSix>
              </>
              :
              <>
              <div style={{display:'none',marginTop: "24px"}}>
                <p>Your Figma <CodeBtn>API Url</CodeBtn> is:</p>
                <div style={{marginTop: "6px"}}><StrongText>{apiUrl}</StrongText></div>
                <button style={{marginTop: "6px"}} className="green-button" onClick={()=>{onCopyToClipboard(apiUrl)}}>Copy</button>
              </div>

              <div style={{marginTop: "24px"}}>
                <p>Your <CodeBtn>Figma Token</CodeBtn> is:</p>
                <div style={{marginTop: "6px"}}><StrongText>{token}</StrongText></div>
                <p>Your <CodeBtn>Frame Url</CodeBtn> is:</p>
                <div style={{marginTop: "6px"}}><StrongText>{`https://www.figma.com/file/${key}/figma?node-id=${node}`}</StrongText></div>
                <p>Your <CodeBtn>WebXR Website Url</CodeBtn> is:</p>
                <div style={{marginTop: "6px"}}><StrongText>{webUrl}</StrongText></div>
                <div style={{marginTop: "6px"}}>
                  <button  className="green-button" onClick={()=>{onSendToUnity(token,key,node)}}>Send To Unity</button><br></br>
                  <button style={{marginTop: "6px"}} className="green-button" onClick={()=>{onOpenWebXR()}}>Go WebXR Site</button> <br></br>
                  <button style={{marginTop: "6px"}} className="green-button" onClick={()=>{onGoOrigSite()}}>Go Origin Site</button> <br></br>
                  <button style={{marginTop: "6px"}} className="green-button" onClick={()=>{onGetJSON(apiUrl,token)}}>Get JSON Data</button><br></br>
                  {(jsonData)?
                   <button style={{marginTop: "6px"}} className="green-button" onClick={()=>{onGetImageList(jsonData)}}>Get Image</button>
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