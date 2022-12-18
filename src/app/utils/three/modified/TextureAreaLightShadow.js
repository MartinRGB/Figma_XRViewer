import { LightShadow } from '../src/lights/LightShadow.js';
import { Matrix4,Matrix3,Vector2,Vector3,Vector4,Frustum,Quaternion,Euler } from '../src/Three.js';
import { OrthographicCamera } from '../src/cameras/OrthographicCamera.js';
import { PerspectiveCamera } from '../src/cameras/PerspectiveCamera.js';
import * as MathUtils from '../src/math/MathUtils.js';

const _projScreenMatrix = /*@__PURE__*/ new Matrix4();
const _lightPositionWorld = /*@__PURE__*/ new Vector3();
const _lookTarget = /*@__PURE__*/ new Vector3();

class TextureAreaLightShadow {

	// constructor(left,right,top,bottom,near,far) {

	// 	super( new OrthographicCamera(left,right,top,bottom,near,far) );
	// 	this.isTextureAreaLightShadow = true;

	// }
	constructor( left,right,top,bottom,near,far ) {

		this.camera = new OrthographicCamera(left,right,top,bottom,near,far);
		//this.camera = new PerspectiveCamera(170, 1, 0.1, 500);

		this.bias = 0;
		this.normalBias = 0;
		this.radius = 1;
		this.blurSamples = 8;

		this.mapSize = new Vector2( 512, 512 );

		this.map = null;
		this.mapPass = null;
		this.matrix = new Matrix4();

		this.autoUpdate = true;
		this.needsUpdate = false;

		this._frustum = new Frustum();
		this._frameExtents = new Vector2( 1, 1 );

		this._viewportCount = 1;

		this._viewports = [

			new Vector4( 0, 0, 1, 1 )

		];
		this.isTextureAreaLightShadow = true;
		this.normalVS = new Vector3();
	}

	getViewportCount() {

		return this._viewportCount;

	}

	getFrustum() {

		return this._frustum;

	}

	updateMatrices( light ) {

		const shadowCamera = this.camera;
		const shadowMatrix = this.matrix;

		shadowCamera.left = -light.width/2;
		shadowCamera.right = light.width/2;
		shadowCamera.top = -light.height/2;
		shadowCamera.bottom = light.height/2;
		
		////////////////
		// # get world property
		const position = new Vector3(); // create one and reuse it
		const quaternion = new Quaternion();
		const scale = new Vector3();
		light.matrixWorld.decompose( position, quaternion, scale );
		
		// # flip the lookAt
		var euler0 = new Euler();
		euler0.setFromQuaternion(quaternion);
		euler0.y += Math.PI;
		euler0.z = - euler0.z;
		var quaternion0 = new Quaternion();
		quaternion0.setFromEuler(euler0);
		/////////////////////

		shadowCamera.position.set(position.x,position.y,position.z)
		shadowCamera.quaternion.set(quaternion0.x,quaternion0.y,quaternion0.z,quaternion0.w)
		shadowCamera.scale.set(scale.x,scale.y,scale.z)

		// _lightPositionWorld.setFromMatrixPosition( light.matrixWorld );
		// shadowCamera.position.copy( _lightPositionWorld );

		//_lookTarget.setFromMatrixPosition( light.target.matrixWorld );
		//shadowCamera.lookAt(_lookTarget);

		shadowCamera.updateMatrixWorld();

		_projScreenMatrix.multiplyMatrices( shadowCamera.projectionMatrix, shadowCamera.matrixWorldInverse );
		this._frustum.setFromProjectionMatrix( _projScreenMatrix );
		

		shadowMatrix.set(
			0.5, 0.0, 0.0, 0.5,
			0.0, 0.5, 0.0, 0.5,
			0.0, 0.0, 0.5, 0.5,
			0.0, 0.0, 0.0, 1.0
		);

		shadowMatrix.multiply( _projScreenMatrix );

	}

	getViewport( viewportIndex ) {

		return this._viewports[ viewportIndex ];

	}

	getFrameExtents() {

		return this._frameExtents;

	}

	dispose() {

		if ( this.map ) {

			this.map.dispose();

		}

		if ( this.mapPass ) {

			this.mapPass.dispose();

		}

	}

	copy( source ) {

		this.camera = source.camera.clone();

		this.bias = source.bias;
		this.radius = source.radius;

		this.mapSize.copy( source.mapSize );

		return this;

	}

	clone() {

		return new this.constructor().copy( this );

	}

	toJSON() {

		const object = {};

		if ( this.bias !== 0 ) object.bias = this.bias;
		if ( this.normalBias !== 0 ) object.normalBias = this.normalBias;
		if ( this.radius !== 1 ) object.radius = this.radius;
		if ( this.mapSize.x !== 512 || this.mapSize.y !== 512 ) object.mapSize = this.mapSize.toArray();

		object.camera = this.camera.toJSON( false ).object;
		delete object.camera.matrix;

		return object;

	}
}


export { TextureAreaLightShadow };
