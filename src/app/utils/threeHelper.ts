import { searchElementByType } from "@Utils/functions";

export function createCanvasDotMaterial(THREE,color, size){
  var matCanvas = document.createElement('canvas');
  matCanvas.width = matCanvas.height = size;
  var matContext = matCanvas.getContext('2d');
  var texture = new THREE.Texture(matCanvas);
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipMapLinearFilter;
  var center = size / 2;
  matContext.beginPath();
  matContext.arc(center, center, size / 2, 0, 2 * Math.PI, false);
  matContext.closePath();
  matContext.fillStyle = color;
  matContext.fill();
  texture.generateMipmaps = true;
  texture.needsUpdate = true;
  return texture;
};

export function createCanvasGridMaterial(THREE,color,width,height,paddingW,paddingH,lineWidth){
  var matCanvas = document.createElement('canvas');
  matCanvas.width = width;
  matCanvas.height = height;

  const context = matCanvas.getContext("2d");
  
  var texture = new THREE.Texture(matCanvas);
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipMapLinearFilter;

  const paddingX = width/paddingW;
  const paddingY = height/paddingH;

  context.lineWidth = lineWidth;
  context.strokeStyle = color;
  context.beginPath();

  for (let x = 0; x <= width; x += paddingX) {
    if(x === 0){
      context.moveTo(lineWidth/2, 0);
      context.lineTo(lineWidth/2, height);
    }
    // else if(x === width){
    //   context.moveTo(x-lineWidth, 0);
    //   context.lineTo(x-lineWidth, height);
    // }
    else{
      context.moveTo(x-lineWidth/2, 0);
      context.lineTo(x-lineWidth/2, height);
    }
  }
  for (let y = 0; y <= height; y += paddingY) {

    if(y === 0){
      context.moveTo(0, lineWidth/2);
      context.lineTo(width, lineWidth/2);
    }
    // else if(y === height){
    //   context.moveTo(0, y - lineWidth/2);
    //   context.lineTo(width, y - lineWidth/2);
    // }
    else{
      context.moveTo(0, y-lineWidth/2);
      context.lineTo(width, y-lineWidth/2);
    }
  }
  //context.closePath();
  context.stroke();

  texture.generateMipmaps = true;
  texture.needsUpdate = true;
  return texture;
};

export const helperSetting = (THREE,scene,sheetObj,yScalePerc,baseUnit,callback) =>{
  const cameraGuideHelper =  searchElementByType(scene.children,'type','CameraHelper');
  console.log( -yScalePerc/2*baseUnit)
  //radius angles radius
  const polarGridHelper = new THREE.PolarGridHelper(baseUnit*4, 8, 4, 64, 0xffffff, 0xffffff);
  polarGridHelper.position.y = -yScalePerc/2*baseUnit;
  polarGridHelper.position.z = baseUnit;
  polarGridHelper.visible = sheetObj.current.value.polarHelper;
  scene.add(polarGridHelper);

  const ground = new THREE.PlaneGeometry(baseUnit*8, baseUnit*8, Math.min(250,Math.max(40,baseUnit*8.*5)), Math.min(250,Math.max(40,baseUnit*8.*5)));
  ground.rotateX(Math.PI / 2);
  const dotGrid = new THREE.PointsMaterial({ transparent: false, fog: false });
  (dotGrid.map = createCanvasDotMaterial(THREE,'#ffffff', baseUnit*8)), (dotGrid.size = 1*0.00825);
  const dotGridHelper = new THREE.Points(ground, dotGrid);
  dotGridHelper.position.y =  -yScalePerc/2*baseUnit;
  dotGridHelper.position.z = baseUnit;
  dotGridHelper.visible = sheetObj.current.value.dotHelper;
  scene.add(dotGridHelper);
  
  callback(cameraGuideHelper,polarGridHelper,dotGridHelper)
}

export const theatreStudioCameraHelperFixed = (scene,invalidate)=>{
  
  const snapBtn = document.getElementById('theatrejs-studio-root').shadowRoot.children[1].children[0].children[1].children[0].children[1];
  const mArr = scene.children;
  const mHelper =  searchElementByType(mArr,'type','CameraHelper');

  snapBtn.addEventListener("click", 
  (event)=>{
    if(mArr.includes(mHelper)){
      event.stopPropagation()
      new Promise(function(resolve, reject) {
        console.log('remove step 1 - remove helper first')
        mHelper.removeFromParent();
        invalidate() 
        setTimeout(() => resolve(1), 1); // (*)
      }).then(function(result) { // (**)
        console.log('remove step 2 - click btn second')
        snapBtn.children[1].click();
      })
    }
    else{
      console.log('remove step 3 - snapshot opened')
      setTimeout(()=>{
        // enable cameraHelper when open SnapShot
        const closeBtn = document.getElementById('theatrejs-studio-root').shadowRoot.children[1].children[0].children[2].children[8].children[0].children[0];
        const closeListener = () =>{
          if(!mArr.includes(mHelper)){
            //no need to event.stopPropagation()
            new Promise(function(resolve, reject) {
              console.log('add step 1 - close window first')
              setTimeout(() => resolve(1), 1); // (*)
            }).then(function(result) { // (**)
              console.log('add step 2 - add camHelper')
              scene.add(mHelper);
              invalidate();
            })
          }
          closeBtn.removeEventListener('click',closeListener)
          return true;
        }
        closeBtn.addEventListener("click",closeListener)
      },1)
    }
    return true;
  });  
}


export function createPlaneCurve(THREE,g, z){
  if (z == 0) {
      z = 0.00001;
  }
  let p = g.parameters;
  let hw = p.width * 0.5;
  let a = new THREE.Vector2(-hw, 0);
  let b = new THREE.Vector2(0, z);
  let c = new THREE.Vector2(hw, 0);
  let ab = new THREE.Vector2().subVectors(a, b);
  let bc = new THREE.Vector2().subVectors(b, c);
  let ac = new THREE.Vector2().subVectors(a, c);
  let r = (ab.length() * bc.length() * ac.length()) / (2 * Math.abs(ab.cross(ac)));
  let center = new THREE.Vector2(0, z - r);
  let baseV = new THREE.Vector2().subVectors(a, center);
  let baseAngle = baseV.angle() - Math.PI * 0.5;
  let arc = baseAngle * 2;
  let uv = g.attributes.uv;
  let pos = g.attributes.position;
  let mainV = new THREE.Vector2();
  for (let i = 0; i < uv.count; i++) {
      let uvRatio = 1 - uv.getX(i);
      let y = pos.getY(i);
      mainV.copy(c).rotateAround(center, arc * uvRatio);
      pos.setXYZ(i, mainV.x, y, -mainV.y);
  }
  pos.needsUpdate = true;
};
