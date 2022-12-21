import { Light, Vector3, Object3D } from '../src/Three.js';
import { AreaLightProxy } from './AreaLightProxy.js';
import { TextureAreaLightShadow } from './TextureAreaLightShadow.js'
import { OrthographicCamera } from '../src/cameras/OrthographicCamera.js';

class TextureAreaLight extends Light {

	constructor( 
		color,
		intensity,
		roughness,
		width,
		height,
		texture,
		renderer,
		isRouhnessControllable,
		constantAttenuation,
		linearAttenuation,
		quadraticAttenuation,
		normal,
		right ) {
		super( color, intensity );
		this.type = 'TextureAreaLight';
		this.isTextureAreaLight = true;
		this.width = ( width !== undefined ) ? width : 10;
		this.height = ( height !== undefined ) ? height : 10;
		this.texture = ( texture !== null ) ? texture : null;
		this.renderer = ( renderer !== null ) ? renderer : null;
		this.isRouhnessControllable = ( isRouhnessControllable !== null ) ? isRouhnessControllable : false;
		this.normal = ( normal !== undefined ) ? normal : new Vector3( 0, - 1, 0 );
		this.right = ( right !== undefined ) ? right : new Vector3( 1, 0, 0 );
		this.intensity = ( intensity !== undefined ) ? intensity : 1;
		this.roughness = ( roughness !== undefined ) ? roughness : 1;
		this.constantAttenuation = ( constantAttenuation !== undefined ) ? constantAttenuation : 1.5;
		this.linearAttenuation = ( linearAttenuation !== undefined ) ? linearAttenuation : 0.5;
		this.quadraticAttenuation = ( quadraticAttenuation !== undefined ) ? quadraticAttenuation : 0.5;
		this.lightProxy = ( renderer !== null ) ? new AreaLightProxy( this, renderer ) : null;
		
		this.shadow = new TextureAreaLightShadow(-this.width/2,this.width/2,-this.height/2,this.height/2,0.01,500);
		this.updateMatrix();
	}

	dispose() {
		super.dispose()
		this.shadow.dispose();

	}

	copy( source ) {

		super.copy( this, source );

		this.width = source.width;
		this.height = source.height;
		this.texture = source.texture;
		this.normal = source.normal;
		this.right = source.right;
		this.intensity = source.intensity;
		this.constantAttenuation = source.constantAttenuation;
		this.linearAttenuation = source.linearAttenuation;
		this.quadraticAttenuation = source.quadraticAttenuation;
		this.lightProxy = source.lightProxy;

		this.shadow = source.shadow.clone();

		return this;

	}

	toJSON( meta ) {

		const data = super.toJSON.call( meta );

		data.object.width = this.width;
		data.object.height = this.height;
		data.object.texture = this.texture;
		data.object.normal = this.normal;
		data.object.right = this.right;
		data.object.intensity = this.intensity;
		data.object.constantAttenuation = this.constantAttenuation;
		data.object.linearAttenuation = this.linearAttenuation;
		data.object.quadraticAttenuation = this.quadraticAttenuation;
		data.object.lightProxy = this.lightProxy;

		return data;

	}

}

export { TextureAreaLight };
