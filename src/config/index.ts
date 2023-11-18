console.log('process env build is:')
console.log(process.env.mode)
// export to LAN SERVER OR WEB SERVER
export const isLocal = (process.env.mode === 'dev')?true:false; 
console.log('is local environment ' + isLocal)

// if use modified theatre.js
export const isTextureEditor = true

// will switch to localhost to serve the html when in dev env.
export const webRootURL = isLocal?`https://127.0.0.1:8887/`:`https://martinrgb.github.io/FigmaImporter/v4/`;

// figma token's para - one for local dev,one for product
export const webClientID = isLocal?'6clxS2O4bl9ADNcy1wh5rk':'2beFW69qeg7DvjBp6bKpm5';
export const webSecrectID = isLocal?'3RtOK3Qx3lMUm3svNfZuycyNAeouxq':'013RerD24yjKxvSIrUr4f6dESMYST8';

// nginx Directory & Web & PHPLink & UploadFolder(need self-hosted server)
export const serverPhysicIP = `172.25.96.1:8222`;
export const localWebRootURL =  `https://${serverPhysicIP}/service_1/`;
export const nginxDirLink = `https://${serverPhysicIP}`;

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

