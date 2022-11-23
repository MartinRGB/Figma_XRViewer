import React, {useState,useEffect} from 'react'
import {FigmaApi} from '@Utils/figmaAPI';
import Spinner from '@Components/Spinner';
import { rootURL,rendererURL,clientID,secrectID } from '@Config';
import ImporterStyle from '@Styles/Importer';
import { copyToClipboard } from '@Utils/functions.js'; 
import styled from 'styled-components';

const VerticalFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

const HorizontalFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
  flex:1;
`

const FlexLeftContainer = styled.div`
  flex:1;
  padding:24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const FlexRightContainer = styled.div`
  flex:1;
  padding:24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const DataInfo = styled.div`
  width: fit-content;
  margin: 0 auto;
`
const MarginTopSix = styled.div`
  margin-top: 6px;
  margin-bottom: 6px;
  * {
    margin-top: 6px;
    margin-bottom: 6px;
  }
`

const Para = styled.p`
  font-size: 14px;
  opacity: 60%;
`

const StrongText = styled.strong`
  font-size: 16px;
  word-break: break-all;
`

const CodeBtn = styled.code`
  //cursor: pointer;
  background: #7f7f7f4f;
  padding: 2px 6px 2px 6px;
  border-radius: 4px;
  font-family: sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
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
  outline: none;
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
  font-family: sans-serif;
  font-weight: 400;
`
const JSONTextArea = styled.textarea`
  height: 100%;
  width: 100%;
  line-height: 24px;
  padding: 24px;
  outline: none;
  font-size: 12px;
  color:var(--fg);
  background: transparent;
  font-family: sans-serif;
  font-weight: 400;
`

const ImageListContainer = styled.div`
  width: 100%;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x;
  background: #5e5e5e;
  z-index: 100;
  padding: 0px;
  bottom: 0px;
  padding: 20px;
  max-height: 190px;
  height:190px;
  overflow-x: auto;
  display: flex;
  flex:1;
`
const ImageInList = styled.img`
  scroll-snap-align: start;
  flex: 0 0 150px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  object-fit: contain;
  background: #ffffff40;
  padding: 12px;
`

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

  const FigmaImageRequestUrl = (fileKey,nodeId,imageScale) =>{
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
    httpImgRequest.open('GET', FigmaImageRequestUrl(fileKey,nodeId,imageScale), true); 
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

  const onHandleJSONTextAreaChange = (event) => {
    setJSONTextAreaVal(event.target.value);
  };

  const onCopyToClipboard = (str) =>{
    copyToClipboard(str);
  }

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

  const onSendToUnity = (_token,_key,_node) =>{
    var hrefLink = document.createElement('a');
    hrefLink.href = `com.unity3d.kharma:custom/query_token=${_token}&file_key=${_key}&frame_name=${"figma"}&node_id=${_node}`;
    document.body.appendChild(hrefLink);
    hrefLink.click();
    document.body.removeChild(hrefLink);
  }

  const onOpenWebXR = (url) =>{
    //window.location.href=`${webUrl}`
    window.open(`${url}`,'_blank')
  }

  const onGoOrigSite = (url)=>{
    window.location.href=`${url}importer.html`;
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

  return (
    <>
      <ImporterStyle></ImporterStyle>
      <VerticalFlexContainer>
        <HorizontalFlexContainer>
          <FlexLeftContainer>
            {(isLoading)?
              <Spinner hintText={`loading`}></Spinner>
              :
              <DataInfo>
                {
                  (webUrl === '-')?
                  <>
                    <MarginTopSix>
                      <Para>Your Figma <CodeBtn>Token</CodeBtn> is:</Para>
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
                  <MarginTopSix>
                      <Para>Your Figma <CodeBtn>API Url</CodeBtn> is:</Para>
                      <StrongText>{apiUrl}</StrongText>
                      <Para>Your <CodeBtn>Figma Token</CodeBtn> is:</Para>
                      <StrongText>{token}</StrongText>
                      <Para>Your <CodeBtn>Frame Url</CodeBtn> is:</Para>
                      <StrongText>{`https://www.figma.com/file/${key}/figma?node-id=${node}`}</StrongText>
                      <Para>Your <CodeBtn>WebXR Website Url</CodeBtn> is:</Para>
                      <StrongText>{webUrl}</StrongText>
                  </MarginTopSix>

                  <MarginTopSix>
                    <GreenBtn onClick={()=>{onSendToUnity(token,key,node)}}>Send To Unity</GreenBtn><br></br>
                    <GreenBtn onClick={()=>{onOpenWebXR(webUrl)}}>Go WebXR Site</GreenBtn> <br></br>
                    <GreenBtn onClick={()=>{onGoOrigSite(rootURL)}}>Go Origin Site</GreenBtn> <br></br>
                    <GreenBtn onClick={()=>{onGetJSON(apiUrl,token)}}>Get JSON Data</GreenBtn><br></br>
                    {(jsonData)?
                      <GreenBtn onClick={()=>{onGetImageList(jsonData)}}>Get Image</GreenBtn>
                      :
                      <></>
                    }
                  </MarginTopSix>
                  </>
                }
              </DataInfo>
            }
          </FlexLeftContainer>
          {(jsonData && !isLoading)?
          <FlexRightContainer>
            <JSONTextArea value={jsonTextAreaVal} onChange={onHandleJSONTextAreaChange}></JSONTextArea>
          </FlexRightContainer>
          :
          <></>
          }
        </HorizontalFlexContainer>

        {(imgArray.length != 0)?
        <ImageListContainer>
          {
            imgArray.map((number) =>
              <ImageInList src = {number}></ImageInList>
            )
          }
        </ImageListContainer>
        :
        <></>
        }

      </VerticalFlexContainer>
    </>
  )
}
export default ImporterApp;