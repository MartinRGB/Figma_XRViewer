import React, {useState,useEffect,useCallback} from 'react'
import {FigmaApi} from '@Utils/figmaAPI';
import Spinner from '@Components/Spinner';
import { webRootURL,webClientID,webSecrectID, nginxAssetFolderPath } from '@Config';
import { copyToClipboard } from '@Utils/functions'; 
import styled,{ThemeProvider,createGlobalStyle} from 'styled-components';
import {themes,CodeBtn, DataInfo, FlexLeftContainer, FlexRightContainer, GreenBtn, HorizontalFlexContainer, ImageInList, ImageListContainer, ImporterGlobalStyle, JSONTextArea, MarginTopSix, NormalTextArea, Para, StrongText, VerticalFlexContainer,}  from '@Styles/Importer'

const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

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
    clientId:webClientID,
    clientSecrete:webSecrectID,
    redirectUri: `${webRootURL}callback.html`,
  });

  const [theme, setTheme] = useState('light');
  console.log('isDarkMode' + darkModeQuery.matches)
  useEffect(() => {
  
    setTheme(darkModeQuery.matches?'dark':'light');
    
  },[darkModeQuery.matches]);

  useEffect(()=>{
    const parsedUrl = new URL(window.location.href);
    // open html with queryKey (from figma)
    if(parsedUrl.searchParams.get('query_key') != null){
      //# TODO smart way of getting token
      if(parsedUrl.searchParams.get('query_token') === 'auth_everytime'){
        figmaApi.getOAuth2Token().then(token => {
          setCurrentToken(token)
          setIsLoading(false);
          console.log(token)
          const queryKey = parsedUrl.searchParams.get('query_key');
          const queryNode = parsedUrl.searchParams.get('query_node');
          const _rendererUrlBase = webRootURL;
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

      if(parsedUrl.searchParams.get('query_token') === 'local_server'){
        const queryKey = parsedUrl.searchParams.get('query_key');
        const queryNode = parsedUrl.searchParams.get('query_node');
        const queryToken = parsedUrl.searchParams.get('query_token');

        const _rendererUrlBase = webRootURL;
        const _rendererUrl = _rendererUrlBase + `?query_token=${queryToken}&query_key=${queryKey}&query_node=${queryNode}`

        const _apiUrl = `${nginxAssetFolderPath}/${queryKey}/${queryNode.replaceAll(':','%253A')}/data.json`

        setIsLoading(false);
        setCurrentToken(queryToken)
        setCurrentKey(queryKey)
        setCurrentNode(queryNode)
        setWebUrl(_rendererUrl)
        setApiUrl(_apiUrl)

        if(parsedUrl.searchParams.get('query_platform') === 'local_unity' ){
          onSendToUnity(queryToken,queryKey,queryNode);
        }

        // if(parsedUrl.searchParams.get('query_platform') === 'local_webxr' ){

        // }
      }
    }
    // open html without queryKey (directly from weburl)
    else{
      figmaApi.getOAuth2Token().then(token => {
        setCurrentToken(token)
        setIsLoading(false);
        console.log(token)
      });
    }
  },[window.location.href]);  

  const getToken = useCallback(() =>{
    figmaApi.getOAuth2Token().then(token => {
      setCurrentToken(token)
      setIsLoading(false);
    });
  },[])

  const onRegenerateToken = useCallback(() =>{
    localStorage.clear();
    setCurrentToken('-');
    getToken();
  },[])

  const onChangeFileUrl = useCallback((e) =>{
    const myValue = e.target.value;
    setfileUrl(myValue);
  },[])
 
  const onGetUrl = useCallback((url,token) =>{
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
    console.log(token)
    const rendererUrl = webRootURL + `?query_token=${token}&query_key=${_fileKey}&query_node=${_nodeId}`

    setCurrentKey(_fileKey)
    setCurrentNode(_nodeId)
    setApiUrl(apiUrl)
    setWebUrl(rendererUrl)
  },[])

  const FigmaImageRequestUrl = useCallback((fileKey,nodeId,imageScale) =>{
      return(
      `https://api.figma.com/v1/` + 
      `images/${fileKey}?`+ 
      `ids=${nodeId}&`+
      `svg_include_id=true&format=png&`+
      `scale=${imageScale}`
      )
  },[])

  const ImageRequestFigma = useCallback((fileKey,nodeId,imageScale,index,length,token) =>{
    
    var httpImgRequest = new XMLHttpRequest();
    console.log(fileKey,nodeId,imageScale)
    httpImgRequest.open('GET', FigmaImageRequestUrl(fileKey,nodeId,imageScale), true); 
    httpImgRequest.setRequestHeader("Authorization",`Bearer ${token}`);
    httpImgRequest.send();
    let a = index;
    //console.log(a);
    httpImgRequest.onreadystatechange = function () {
      if (httpImgRequest.readyState == 4 && httpImgRequest.status == 200) {
        // get json data
        var json = JSON.parse(httpImgRequest.responseText);
        //imgArr.push(Object.values(json.images)[0]);
        //console.log(imgArr);
        setImageArray(imageArray => [...imageArray,Object.values(json.images)[0]])
        if(a === length - 1){
          //setImageArray(imgArr);
          setIsLoading(false)
          //console.log(imgArr)
        }

      }
    };
  },[])

  const onHandleJSONTextAreaChange = useCallback((event) => {
    setJSONTextAreaVal(event.target.value);
  },[])

  const onCopyToClipboard = useCallback((str) =>{
    copyToClipboard(str);
  },[])

  const onGetJSON = useCallback((apiUrl,token) =>{
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
  },[])

  const onSendToUnity = useCallback((_token,_key,_node) =>{
    if(_token === 'local_server'){
      var hrefLink = document.createElement('a');
      hrefLink.href = `com.unity3d.kharma:custom/query_token=${_token}&file_key=${_key}&frame_name=${"figma"}&node_id=${_node}`;
      document.body.appendChild(hrefLink);
      hrefLink.click();
      document.body.removeChild(hrefLink);
    }
    else{
      var hrefLink = document.createElement('a');
      hrefLink.href = `com.unity3d.kharma:custom/query_token=${_token}&file_key=${_key}&frame_name=${"figma"}&node_id=${_node}`;
      document.body.appendChild(hrefLink);
      hrefLink.click();
      document.body.removeChild(hrefLink);
    }
  },[])

  const onOpenWebXR = useCallback((url) =>{
    //window.location.href=`${webUrl}`
    window.open(`${url}`,'_blank')
  },[])

  const onGoOrigSite = useCallback((url)=>{
    window.location.href=`${url}importer.html`;
  },[])

  const ImageRequestLocal = useCallback((child,index,length) =>{
    
    let a = index;
    setImageArray(imageArray => [...imageArray,child.src])
    if(a === length - 1){
      //setImageArray(imgArr);
      setIsLoading(false)
    }
  },[])

  const onGetImageList = useCallback((json,token,fileKey) => {
    setIsLoading(true)
    var idNodes = [];
    //var imgArr = [];
    setImageArray([]);
    const firstNodeValue = Object.values(json.nodes)[0]
    //# preview
    const firstNodeKey = Object.keys(json.nodes)[0]
    idNodes.push(firstNodeKey);

    if(token === 'local_server'){
      for(var i =0;i< firstNodeValue.document.children.length;i++){
        const child = firstNodeValue.document.children[i];
        ImageRequestLocal(child,i,firstNodeValue.document.children.length);
      }
    }
    else{
      for(var i =0;i< firstNodeValue.document.children.length;i++){
        idNodes.push(firstNodeValue.document.children[i].id)
        if(i === firstNodeValue.document.children.length-1){
            console.log(idNodes);
            // # get image url
            for(var a = 0;a<idNodes.length;a++){
              ImageRequestFigma(fileKey,idNodes[a],1,a,idNodes.length,token)
            }
        }
      }       
    }

  },[])

  return (
    <>
    <ThemeProvider theme={themes[theme]}>
        <ImporterGlobalStyle></ImporterGlobalStyle>
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
                        <GreenBtn onClick={()=>{onGetUrl(fileUrl,token)}}>Get API & Renderer Url</GreenBtn>
                      </MarginTopSix>
                    </>
                    :
                    <>
                      {token === 'local_server'?
                      <>
                      <MarginTopSix>
                          <Para>Your <CodeBtn>Frame Url</CodeBtn> is:</Para>
                          <StrongText>{`https://www.figma.com/file/${key}/figma?node-id=${node}`}</StrongText>
                          <Para>Your <CodeBtn>API Url</CodeBtn> is:</Para>
                          <StrongText>{apiUrl}</StrongText>
                          <Para>Your <CodeBtn>WebXR Website Url</CodeBtn> is:</Para>
                          <StrongText>{webUrl}</StrongText>
                      </MarginTopSix>
                      <MarginTopSix>
                          <GreenBtn onClick={()=>{onSendToUnity(token,key,node)}}>Send To Unity</GreenBtn><br></br>
                          <GreenBtn onClick={()=>{onOpenWebXR(webUrl)}}>Go WebXR Site</GreenBtn> <br></br>
                          <GreenBtn onClick={()=>{onGoOrigSite(webRootURL)}}>Go Origin Site</GreenBtn> <br></br>
                          <GreenBtn onClick={()=>{onGetJSON(apiUrl,token)}}>Get JSON Data</GreenBtn><br></br>
                          {(jsonData)?
                            <GreenBtn onClick={()=>{onGetImageList(jsonData,token,key)}}>Get Image</GreenBtn>
                            :
                            <></>
                          }
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
                            <Para>Your <CodeBtn>API Url</CodeBtn> is:</Para>
                            <StrongText>{apiUrl}</StrongText>
                            <Para>Your <CodeBtn>WebXR Website Url</CodeBtn> is:</Para>
                            <StrongText>{webUrl}</StrongText>
                        </MarginTopSix>

                        <MarginTopSix>
                          <GreenBtn onClick={()=>{onSendToUnity(token,key,node)}}>Send To Unity</GreenBtn><br></br>
                          <GreenBtn onClick={()=>{onOpenWebXR(webUrl)}}>Go WebXR Site</GreenBtn> <br></br>
                          <GreenBtn onClick={()=>{onGoOrigSite(webRootURL)}}>Go Origin Site</GreenBtn> <br></br>
                          <GreenBtn onClick={()=>{onGetJSON(apiUrl,token)}}>Get JSON Data</GreenBtn><br></br>
                          {(jsonData)?
                            <GreenBtn onClick={()=>{onGetImageList(jsonData,token,key)}}>Get Image</GreenBtn>
                            :
                            <></>
                          }
                        </MarginTopSix>
                      </>
                      }

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
              imgArray.map((imgSrc,index) =>
                <ImageInList key={index} src = {imgSrc}></ImageInList>
              )
            }
          </ImageListContainer>
          :
          <></>
          }

        </VerticalFlexContainer>
    </ThemeProvider>
    </>
  )
}
export default ImporterApp;