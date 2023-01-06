console.log('process env build is:')
console.log(process.env.mode)
// export to LAN SERVER OR WEB SERVER
export const isLocal = (process.env.mode === 'dev')?true:false; 
console.log('is local environment ' + isLocal)

// if use modified theatre.js
export const isTextureEditor = true

// load three.js decoder from LAN Sever
//export const isDecoderFromLoacl = isLocal?true:false; 

export const thisLocalServerPhysicIP = `172.30.9.86`;
export const serverPhysicIP = `vrtest.xihongxian.cn`; //172.22.0.20

export const webRootURL = isLocal?`https://127.0.0.1:8887/`:`https://www.martinrgb.com/FigmaImporter/v4/`;
export const localWebRootURL =  isLocal?`https://127.0.0.1:8887/`:`https://${serverPhysicIP}/service_1/`;
//export const localWebRootURL =  `https://${serverPhysicIP}/service_1/`;

// figma token's para
export const webClientID = isLocal?'6clxS2O4bl9ADNcy1wh5rk':'2beFW69qeg7DvjBp6bKpm5';
export const webSecrectID = isLocal?'3RtOK3Qx3lMUm3svNfZuycyNAeouxq':'013RerD24yjKxvSIrUr4f6dESMYST8';

// nginx Directory & Web & PHPLink & UploadFolder
export const nginxDirLink = isLocal?`https://${thisLocalServerPhysicIP}:8222`:`https://${serverPhysicIP}`;
//export const nginxDirLink = `https://${serverPhysicIP}`;

//test local server is exist
export const nginxTestPath =  nginxDirLink + `/php/isLocalServer.php`;
//localserver decoderPath
export const nginxDecoderPath = nginxDirLink + `/service_1/decoder`;
export const nginxUploadPHPPath = nginxDirLink + `/php/upload.php`;
export const nginxUploadFolder = `/external`;
export const nginxAssetFolderPath = nginxDirLink + nginxUploadFolder;

// figma Plugin API export para
export const figmaExportScale = 1;
export const figmaIsContainFrame = false;
export const figmaIsUseAbsoluteBounds =true;

