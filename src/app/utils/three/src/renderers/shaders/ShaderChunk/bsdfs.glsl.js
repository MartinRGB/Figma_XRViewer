export default /* glsl */`

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

	float D = D_GGX( alpha, dotNH );

	return F * ( V * D );

}

#ifdef USE_IRIDESCENCE

	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {

		float alpha = pow2( roughness ); // UE4's roughness

		vec3 halfDir = normalize( lightDir + viewDir );

		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );

		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

		return F * ( V * D );

	}

#endif

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	
	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

// ############################## LTC TextureAreaLight ##############################

void ClipQuadToHorizon(inout vec3 L[5], out int n)
{
    // detect clipping config
    int config = 0;
    if (L[0].z > 0.0) config += 1;
    if (L[1].z > 0.0) config += 2;
    if (L[2].z > 0.0) config += 4;
    if (L[3].z > 0.0) config += 8;

    // clip
    n = 0;

    if (config == 0)
    {
        // clip all
    }
    else if (config == 1) // V1 clip V2 V3 V4
    {
        n = 3;
        L[1] = -L[1].z * L[0] + L[0].z * L[1];
        L[2] = -L[3].z * L[0] + L[0].z * L[3];
    }
    else if (config == 2) // V2 clip V1 V3 V4
    {
        n = 3;
        L[0] = -L[0].z * L[1] + L[1].z * L[0];
        L[2] = -L[2].z * L[1] + L[1].z * L[2];
    }
    else if (config == 3) // V1 V2 clip V3 V4
    {
        n = 4;
        L[2] = -L[2].z * L[1] + L[1].z * L[2];
        L[3] = -L[3].z * L[0] + L[0].z * L[3];
    }
    else if (config == 4) // V3 clip V1 V2 V4
    {
        n = 3;
        L[0] = -L[3].z * L[2] + L[2].z * L[3];
        L[1] = -L[1].z * L[2] + L[2].z * L[1];
    }
    else if (config == 5) // V1 V3 clip V2 V4) impossible
    {
        n = 0;
    }
    else if (config == 6) // V2 V3 clip V1 V4
    {
        n = 4;
        L[0] = -L[0].z * L[1] + L[1].z * L[0];
        L[3] = -L[3].z * L[2] + L[2].z * L[3];
    }
    else if (config == 7) // V1 V2 V3 clip V4
    {
        n = 5;
        L[4] = -L[3].z * L[0] + L[0].z * L[3];
        L[3] = -L[3].z * L[2] + L[2].z * L[3];
    }
    else if (config == 8) // V4 clip V1 V2 V3
    {
        n = 3;
        L[0] = -L[0].z * L[3] + L[3].z * L[0];
        L[1] = -L[2].z * L[3] + L[3].z * L[2];
        L[2] =  L[3];
    }
    else if (config == 9) // V1 V4 clip V2 V3
    {
        n = 4;
        L[1] = -L[1].z * L[0] + L[0].z * L[1];
        L[2] = -L[2].z * L[3] + L[3].z * L[2];
    }
    else if (config == 10) // V2 V4 clip V1 V3) impossible
    {
        n = 0;
    }
    else if (config == 11) // V1 V2 V4 clip V3
    {
        n = 5;
        L[4] = L[3];
        L[3] = -L[2].z * L[3] + L[3].z * L[2];
        L[2] = -L[2].z * L[1] + L[1].z * L[2];
    }
    else if (config == 12) // V3 V4 clip V1 V2
    {
        n = 4;
        L[1] = -L[1].z * L[2] + L[2].z * L[1];
        L[0] = -L[0].z * L[3] + L[3].z * L[0];
    }
    else if (config == 13) // V1 V3 V4 clip V2
    {
        n = 5;
        L[4] = L[3];
        L[3] = L[2];
        L[2] = -L[1].z * L[2] + L[2].z * L[1];
        L[1] = -L[1].z * L[0] + L[0].z * L[1];
    }
    else if (config == 14) // V2 V3 V4 clip V1
    {
        n = 5;
        L[4] = -L[0].z * L[3] + L[3].z * L[0];
        L[0] = -L[0].z * L[1] + L[1].z * L[0];
    }
    else if (config == 15) // V1 V2 V3 V4
    {
        n = 4;
    }
    
    if (n == 3)
        L[3] = L[0];
    if (n == 4)
        L[4] = L[0];
}

float IntegrateEdge(vec3 v1, vec3 v2)
{
    float cosTheta = dot(v1, v2);
    float theta = acos(cosTheta);    
    float res = cross(v1, v2).z * ((theta > 0.001) ? theta/sin(theta) : 1.0);

	return res;
}

vec3 LTC_Evaluate_Without_Texture(vec3 N, vec3 V, vec3 P, mat3 Minv, vec3 points[4]) {
    // construct orthonormal basis around N
    vec3 T1, T2;
    T1 = normalize(V - N*dot(V, N));
    T2 = cross(N, T1);

    // rotate area light in (T1, T2, N) basis
    mat3 mInv = Minv * (transpose(mat3(T1, T2, N)));

    // polygon (allocate 5 vertices for clipping)
    vec3 L[5];
    L[0] = mInv * (points[0] - P);
    L[1] = mInv * (points[1] - P);
    L[2] = mInv * (points[2] - P);
    L[3] = mInv * (points[3] - P);

    int n;
    ClipQuadToHorizon(L, n);
    
    if (n == 0)
        return vec3(0, 0, 0);

    // project onto sphere
    L[0] = normalize(L[0]);
    L[1] = normalize(L[1]);
    L[2] = normalize(L[2]);
    L[3] = normalize(L[3]);
    L[4] = normalize(L[4]);

    // integrate
    float sum = 0.0;

    sum += IntegrateEdge(L[0], L[1]);
    sum += IntegrateEdge(L[1], L[2]);
    sum += IntegrateEdge(L[2], L[3]);
    if (n >= 4)
        sum += IntegrateEdge(L[3], L[4]);
    if (n == 5)
        sum += IntegrateEdge(L[4], L[0]);

    //sum = twoSided ? abs(sum) : max(0.0, sum);
	sum = max(0.0, sum);

    vec3 Lo_i = vec3(sum, sum, sum);
	
	return Lo_i;
}


float maskBox(vec2 _st, vec2 _size, float _smoothEdges){
    _size = vec2(0.5)-_size*0.5;
    vec2 aa = vec2(_smoothEdges*0.5);
    vec2 uv = smoothstep(_size,_size+aa,_st);
    uv *= smoothstep(_size,_size+aa,vec2(1.0)-_st);
    return uv.x*uv.y;
}

vec3 draw(vec2 uv,in sampler2D tex) {
    return texture(tex,vec2(1.- uv.x,uv.y)).rgb;   
}

float grid(float var, float size) {
    return floor(var*size)/size;
}

float blurRand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

vec3 blurredImage( in float roughness,in vec2 uv , in sampler2D tex)
{
    
    float bluramount = 0.2 * roughness;
    //float dists = 5.;
    vec3 blurred_image = vec3(0.);
    #define repeats 60.
    for (float i = 0.; i < repeats; i++) { 
        //Older:
        //vec2 q = vec2(cos(degrees((grid(i,dists)/repeats)*360.)),sin(degrees((grid(i,dists)/repeats)*360.))) * (1./(1.+mod(i,dists)));
        vec2 q = vec2(cos(degrees((i/repeats)*360.)),sin(degrees((i/repeats)*360.))) *  (blurRand(vec2(i,uv.x+uv.y))+bluramount); 
        vec2 uv2 = uv+(q*bluramount);
        blurred_image += draw(uv2,tex)/2.;
        //One more to hide the noise.
        q = vec2(cos(degrees((i/repeats)*360.)),sin(degrees((i/repeats)*360.))) *  (blurRand(vec2(i+2.,uv.x+uv.y+24.))+bluramount); 
        uv2 = uv+(q*bluramount);
        blurred_image += draw(uv2,tex)/2.;
    }
    blurred_image /= repeats;
        
    return blurred_image;
}


vec3 filterBorderRegion(in float roughness,in vec2 uv,in sampler2D tex){
	float scale = 1.;
    float error = 0.4; //0.45

    // Convert uv range to -1 to 1
    vec2 UVC = uv * 2.0 - 1.0;
    UVC *= (1. * 0.5 + 0.5) * (1. + (1. - scale));
    // Convert back to 0 to 1 range
    UVC = UVC * 0.5 + 0.5;

    vec4 ClearCol;
    vec4 BlurCol;
    
    BlurCol.rgb = blurredImage(2.,uv,tex);
	if(UVC.x < 1. && UVC.x > 0. && UVC.y > 0. && UVC.y < 1.){
        ClearCol.rgb = blurredImage(min(2.,roughness),UVC,tex);
    }
	//ClearCol.rgb = blurredImage(roughness,UVC,tex);
	float boxMask = maskBox(UVC,vec2(scale+0.),error);
    BlurCol.rgb = mix(BlurCol.rgb, ClearCol.rgb, boxMask);

	return BlurCol.rgb;
}

// https://advances.realtimerendering.com/s2016/s2016_ltc_rnd.pdf p-104  -> filtered border region
// https://www.shadertoy.com/view/dd2SDd
vec3 FetchDiffuseFilteredTexture(float roughness,vec3 L[5],vec3 vLooupVector,sampler2D tex)
{
	vec3 V1 = L[1] - L[0];
	vec3 V2 = L[3] - L[0];
	// Plane's normal
	vec3 PlaneOrtho = cross(V1, V2);
	float PlaneAreaSquared = dot(PlaneOrtho, PlaneOrtho);
	float planeDistxPlaneArea = dot(PlaneOrtho, L[0]);
	// orthonormal projection of (0,0,0) in area light space
	vec3 P = planeDistxPlaneArea * PlaneOrtho / PlaneAreaSquared - L[0];

	// find tex coords of P
	float dot_V1_V2 = dot(V1, V2);
	float inv_dot_V1_V1 = 1.0 / dot(V1, V1);
	vec3 V2_ = V2 - V1 * dot_V1_V2 * inv_dot_V1_V1;
	vec2 UV;
	UV.y = dot(V2_, P) / dot(V2_, V2_);
	UV.x = dot(V1, P) * inv_dot_V1_V1 - dot_V1_V2 * inv_dot_V1_V1 * UV.y;

	// float scale = 1.;
    // float error = 0.45;
    // // Convert uv range to -1 to 1
    // vec2 UVC = UV * 2.0 - 1.0;
    // UVC *= (1. * 0.5 + 0.5) * (1. + (1. - scale));
    // // Convert back to 0 to 1 range
    // UVC = UVC * 0.5 + 0.5;

    // vec4 ClearCol;
    // vec4 BlurCol;
    
    // BlurCol.rgb = blurredImage(2.,UV,tex);
	// if(UVC.x < 1. && UVC.x > 0. && UVC.y > 0. && UVC.y < 1.){
    //     ClearCol.rgb = blurredImage(min(2.,roughness),UVC,tex);
    // }
	// //ClearCol.rgb = blurredImage(roughness,UVC,tex);
	// float boxMask = maskBox(UVC,vec2(scale+0.),error);
    // BlurCol.rgb = mix(BlurCol.rgb, ClearCol.rgb, boxMask);


	return filterBorderRegion(roughness,UV,tex);
}


vec3 LTC_Evaluate_With_Texture( in bool isDiffuse,in float roughness,const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 Minv, const in vec3 points[ 4 ], in sampler2D tex) {
	
	// construct orthonormal basis around N
	vec3 T1, T2;
    T1 = normalize(V - N*dot(V, N));
    T2 = cross(N, T1);
    // rotate area light in (T1, T2, N) basis
	mat3 mInv = Minv * transpose(mat3(T1, T2, N));
	
	vec3 L[5];
    L[0] = mInv * (points[0] - P);
    L[1] = mInv * (points[1] - P);
    L[2] = mInv * (points[2] - P);
	L[3] = mInv * (points[3] - P);

	int n=0;
    ClipQuadToHorizon(L, n);
	
	if (n == 0)
		return vec3(0, 0, 0);

	vec3 PL[5];
	PL[0] = normalize(L[0]);
	PL[1] = normalize(L[1]);
	PL[2] = normalize(L[2]);
	PL[3] = normalize(L[3]);
	PL[4] = normalize(L[4]);

	// integrate for every edge.
	float sum = 0.0;
	
	sum += IntegrateEdge(PL[0], PL[1]);
    sum += IntegrateEdge(PL[1], PL[2]);
    sum += IntegrateEdge(PL[2], PL[3]);
    if (n >= 4)
        sum += IntegrateEdge(PL[3], PL[4]);
    if (n == 5)
		sum += IntegrateEdge(PL[4], PL[0]);
		
	sum =  max(0.0, sum);
    
    // Calculate colour
    vec3 e1 = normalize(L[0] - L[1]);
    vec3 e2 = normalize(L[2] - L[1]);
    vec3 N2 = cross(e1, e2); // Normal to light
    vec3 V2 = N2 * dot(L[1], N2); // Vector to some point in light rect
    vec2 Tlight_shape = vec2(length(L[0] - L[1]), length(L[2] - L[1]));
    V2 = V2 - L[1];
    float b = e1.y*e2.x - e1.x*e2.y + 0.1; // + .1 to remove artifacts
	vec2 pLight = vec2((V2.y*e2.x - V2.x*e2.y)/b, (V2.x*e1.y - V2.y*e1.x)/b);
   	pLight /= Tlight_shape;
    // pLight -= .5;
    // pLight /= 2.5;
    // pLight += .5;
    
	vec3 ref_col;
	//ref_col = filterBorderRegion(roughness,vec2(saturate(pLight.x),saturate(pLight.y)),tex);

	ref_col = FetchDiffuseFilteredTexture(roughness,L,vec3(sum),tex);

	vec3 Lo_i = vec3(sum)*ref_col;
	
    return Lo_i;

}

// ############################## LTC TextureAreaLight ##############################

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif
`;
