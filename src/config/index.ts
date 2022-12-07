// export to LAN SERVER OR WEB SERVER
export const isLocal = true; 
// load three.js decoder from LAN Sever
export const isDecoderFromLoacl = isLocal?true:false; 
// load three.js decoder from LAN Sever 
// todo replace local url to nginx website url
export const webRootURL = isLocal?`https://127.0.0.1:8887/`:`https://www.martinrgb.com/FigmaImporter/v4/`;
//export const webRendererURL = isLocal?`https://127.0.0.1:8887`:`https://www.martinrgb.com/FigmaImporter/v4/index.html`;
// figma token's para
export const webClientID = isLocal?'6clxS2O4bl9ADNcy1wh5rk':'2beFW69qeg7DvjBp6bKpm5';
export const webSecrectID = isLocal?'3RtOK3Qx3lMUm3svNfZuycyNAeouxq':'013RerD24yjKxvSIrUr4f6dESMYST8';
// nginx Directory & Web & PHPLINk & UploadFolder
export const nginxDirLink = `https://172.22.0.20:8222`;
export const nginxHostWebUrl =  `https://172.22.0.20:8099/`;
export const nginxUploadPHPLink = nginxDirLink + `/php/upload.php`;
export const nginxUploadFolder = `/external`;
export const nginxAssetLink = nginxDirLink + nginxUploadFolder;
// figma Plugin API export para
export const figmaExportScale = 1;
export const figmaIsContainFrame = false;
export const figmaIsUseAbsoluteBounds =true;
