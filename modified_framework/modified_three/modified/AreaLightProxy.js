import { 
	Mesh, 
	NearestFilter,
	FloatType, 
	LuminanceFormat, 
	RGBFormat, 
	WebGLRenderTarget, 
	OrthographicCamera, 
	AdditiveBlending, 
	UniformsUtils, 
	Vector3,
	Quaternion,
	Object3D
} from '../src/Three.js';
import { ShaderDeferred } from './ShaderDeferred.js'
import { SphereGeometry } from '../src/geometries/SphereGeometry.js'
import { PlaneGeometry } from '../src/geometries/PlaneGeometry.js'
import { ShaderMaterial } from '../src/materials/ShaderMaterial.js'


class Gyroscope extends Object3D {

	constructor() {

		super();

	}

	updateMatrixWorld() {

		var translationObject = new Vector3();
		var quaternionObject = new Quaternion();
		var scaleObject = new Vector3();

		var translationWorld = new Vector3();
		var quaternionWorld = new Quaternion();
		var scaleWorld = new Vector3();

		return function updateMatrixWorld( force ) {

			this.matrixAutoUpdate && this.updateMatrix();

			// update matrixWorld

			if ( this.matrixWorldNeedsUpdate || force ) {

				if ( this.parent !== null ) {

					this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

					this.matrixWorld.decompose( translationWorld, quaternionWorld, scaleWorld );
					this.matrix.decompose( translationObject, quaternionObject, scaleObject );

					this.matrixWorld.compose( translationWorld, quaternionObject, scaleWorld );


				} else {

					this.matrixWorld.copy( this.matrix );

				}


				this.matrixWorldNeedsUpdate = false;

				force = true;

			}

			// update children

			for ( var i = 0, l = this.children.length; i < l; i ++ ) {

				this.children[ i ].updateMatrixWorld( force );

			}

		};

	}

}

class AreaLightProxy extends Mesh {

	constructor( light, renderer ) {

		// From AreaLightProxy
		AreaLightProxy.geometryLightSphere = new SphereGeometry( 1, 16, 8 );
		AreaLightProxy.geometryLightPlane = new PlaneGeometry( 2, 2 );
		AreaLightProxy.positionVS = new Vector3();
		AreaLightProxy.directionVS = new Vector3();
		AreaLightProxy.rightVS = new Vector3();
		AreaLightProxy.normalVS = new Vector3();
		AreaLightProxy.upVS = new Vector3();

		var c = ShaderDeferred.areaLight,
			d = UniformsUtils.clone( c.uniforms ),
			c = new ShaderMaterial( {
				uniforms: d,
				vertexShader: c.vertexShader,
				fragmentShader: c.fragmentShader,
				// defines: {
				// 	AREA_TEXTURE: !! light.texture
				// },
				blending: AdditiveBlending,
				depthWrite: ! 1,
				depthTest: ! 1,
				transparent: ! 0
			} );
		// var e = renderer.getColorTarget();
		// var f = renderer.getNormalDepthTarget();
		// d.viewWidth.value = e.width;
		// d.viewHeight.value = e.height;
		// d.samplerColor.value = e;
		// d.samplerNormalDepth.value = f;

		super( AreaLightProxy.geometryLightPlane, c );

		this.light = light ? light : null;
		this.renderer = renderer ? renderer : null;

	}

	
	copyGammaToLinear ( color, gammaFactor = 2.0 ) {

		this.r = Math.pow( color.r, gammaFactor );
		this.g = Math.pow( color.g, gammaFactor );
		this.b = Math.pow( color.b, gammaFactor );

		return this;

	}

	update( a ) {

		var ob = this.material.uniforms;
		ob.matProjInverse && ( ob.matProjInverse.value = a.projectionMatrixInverse );
		ob.matView && ( ob.matView.value = a.matrixWorldInverse );
		ob.matViewInverse && ( ob.matViewInverse.value = a.matrixWorld );
		this.light && ( this.visible = this.light.visible );

		// From AreaLightProxy
		var b = this.light,
			c = this.material.uniforms,
			d = b.matrixWorld;
		a = a.matrixWorldInverse;
		var e = AreaLightProxy.positionVS,
			f = AreaLightProxy.rightVS,
			g = AreaLightProxy.normalVS,
			h = AreaLightProxy.upVS;
		// e.copy( d.getPosition() );
		e.setFromMatrixPosition( d );
		// a.multiplyVector3( e );
		e.applyMatrix4( a );
		c.lightPositionVS.value.copy( e );
		f.copy( b.right );
		g.copy( b.normal );
		// d.rotateAxis( f );
		// d.rotateAxis( g );
		// a.rotateAxis( f );
		// a.rotateAxis( g );
		f.transformDirection( d );
		g.transformDirection( d );
		f.transformDirection( a );
		g.transformDirection( a );
		h.crossVectors( f, g );
		h.normalize();
		c.lightRightVS.value.copy( f );
		c.lightNormalVS.value.copy( g );
		c.lightUpVS.value.copy( h );
		c.lightWidth.value = b.width;
		c.lightHeight.value = b.height;
		c.constantAttenuation.value = b.constantAttenuation;
		c.linearAttenuation.value = b.linearAttenuation;
		c.quadraticAttenuation.value = b.quadraticAttenuation;
		c.samplerTexture.value = b.texture;
		c.lightIntensity.value = b.intensity * b.intensity;
		// c.lightColor.value.copyGammaToLinear( b.color );
		c.lightColor.value = this.copyGammaToLinear( b.color );

	}


	resize( a, b, c, d ) {

		var e = this.material.uniforms,
			f = void 0 !== this.colorLabel ? this.colorLabel : 'samplerColor',
			g = void 0 !== this.normalDepthLabel ? this.normalDepthLabel : 'samplerNormalDepth';
		e[ f ] && ( e[ f ].value = c );
		e[ g ] && ( e[ g ].value = d );
		e.viewWidth && ( e.viewWidth.value = a );
		e.viewHeight && ( e.viewHeight.value = b );

	}

	generateDefines() {

		var a = this.light,
			b = this.renderer,
			c = {};
		if ( b.shadowMapEnabled && a.castShadow ) {

			c.USE_SHADOWMAP = ! 0;
			switch ( b.shadowMapType ) {

				case BasicShadowMap:
					c.SHADOWMAP_TYPE_BASIC = ! 0;
					break;
				case PCFShadowMap:
					c.SHADOWMAP_TYPE_PCF = ! 0;
					break;
				case PCFSoftShadowMap:
					c.SHADOWMAP_TYPE_PCF_SOFT = ! 0;

			}

			c.SLOPE_DEPTH_BIAS = b.shadowMapSlopeDepthBias;
			c.SHADOWMAP_DEBUG = b.shadowMapDebug;

		}

		return c;

	}

	setupDirectionalShadowmap( a ) {

		var b = this.light,
			c = this.renderer.renderer.supportsLuminanceFloatRenderTarget() ? LuminanceFormat : RGBFormat,
			c = {
				minFilter: NearestFilter,
				magFilter: NearestFilter,
				stencilBuffer: ! 1,
				format: c,
				type: FloatType
			};
		b.properties.shadowMap = [];
		b.properties.shadowCamera = [];
		b.properties.pointsWorld = [];
		b.properties.pointsFrustum = [];
		for ( var d = 0; d < a; d ++ ) {

			var e = new WebGLRenderTarget( b.shadowMapWidth, b.shadowMapHeight, c );
			e.generateMipmaps = ! 1;
			b.properties.shadowMap[ d ] = e;
			e = new OrthographicCamera( b.shadowCameraLeft, b.shadowCameraRight, b.shadowCameraTop, b.shadowCameraBottom, b.shadowCameraNear, b.shadowCameraFar );
			b.properties.shadowCamera[ d ] = e;
			if ( b.shadowCascade ) {

				b.properties.pointsWorld[ d ] = [];
				b.properties.pointsFrustum[ d ] = [];
				for ( var f = b.properties.pointsWorld[ d ], e = b.properties.pointsFrustum[ d ], g = 0; 8 > g; g ++ ) f[ g ] = new Vector3(), e[ g ] = new Vector3();
				f = b.shadowCascadeNearZ[ d ];
				g = b.shadowCascadeFarZ[ d ];
				e[ 0 ].set( - 1, - 1, f );
				e[ 1 ].set( 1,
					- 1, f );
				e[ 2 ].set( - 1, 1, f );
				e[ 3 ].set( 1, 1, f );
				e[ 4 ].set( - 1, - 1, g );
				e[ 5 ].set( 1, - 1, g );
				e[ 6 ].set( - 1, 1, g );
				e[ 7 ].set( 1, 1, g );

			}

		}

		b.properties.cascadeCount = a;

	}

	updateDirectionalShadowmap( a ) {

		var b = this.light,
			c = this.material.uniforms;
		if ( b.shadowCascade && ! b.properties.gyro ) {

			var d = new Gyroscope();
			d.position = b.shadowCascadeOffset;
			d.add( b );
			d.add( b.target );
			a.add( d );
			b.properties.gyro = d;

		}

		for ( a = 0; a < b.properties.cascadeCount; a ++ ) {

			var d = b.properties.shadowCamera[ a ],
				e = b.properties.shadowMap[ a ];
			c.matLightView.value[ a ] = d.matrixWorldInverse;
			c.matLightProj.value[ a ] = d.projectionMatrix;
			c.samplerShadowMap.value[ a ] = e;

		}

		c.shadowDarkness.value =
			Math.sqrt( b.shadowDarkness );
		c.shadowBias.value = b.shadowBias;
		c.shadowMapSize.value.set( b.shadowMapWidth, b.shadowMapHeight );

	}

}

export { AreaLightProxy };
