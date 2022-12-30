import type { DirectionalLight, Object3D, OrthographicCamera, PerspectiveCamera, PointLight, SpotLight } from 'three';
import { BoxHelper, CameraHelper, DirectionalLightHelper, PointLightHelper, SpotLightHelper } from 'three';
import { types } from '@theatre/core';
declare const defaultEditableFactoryConfig: {
    group: {
        icon: "collection";
        createHelper: (object: Object3D) => BoxHelper;
        props: {
            position: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            rotation: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            scale: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
        };
        useTransformControls: boolean;
    };
    mesh: {
        icon: "cube";
        createHelper: (object: Object3D) => BoxHelper;
        props: {
            position: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            rotation: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            scale: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
        };
        useTransformControls: boolean;
    };
    meshStandardMaterial: {
        props: {
            color: {
                parse: (props: Record<string, any>) => import("./editableFactoryConfigUtils").Rgba;
                apply: (value: import("./editableFactoryConfigUtils").Rgba, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            transparent: {
                parse: (props: Record<string, any>) => boolean;
                apply: (value: boolean, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            opacity: {
                parse: (props: Record<string, any>) => number;
                apply: (value: number, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            side: {
                parse: (props: Record<string, any>) => string;
                apply: (value: string, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            wireframe: {
                parse: (props: Record<string, any>) => boolean;
                apply: (value: boolean, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            fog: {
                parse: (props: Record<string, any>) => boolean;
                apply: (value: boolean, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            flatShading: {
                parse: (props: Record<string, any>) => boolean;
                apply: (value: boolean, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            mapSrc: {
                parse: (props: Record<string, any>) => import("./editableFactoryConfigUtils").fSrcObject;
                apply: (value: import("./editableFactoryConfigUtils").fSrcObject, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            alphaMapSrc: {
                parse: (props: Record<string, any>) => import("./editableFactoryConfigUtils").fSrcObject;
                apply: (value: import("./editableFactoryConfigUtils").fSrcObject, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            aoMapSrc: {
                parse: (props: Record<string, any>) => import("./editableFactoryConfigUtils").fSrcObject;
                apply: (value: import("./editableFactoryConfigUtils").fSrcObject, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            aoMapIntensity: {
                parse: (props: Record<string, any>) => number;
                apply: (value: number, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            bumpMapSrc: {
                parse: (props: Record<string, any>) => import("./editableFactoryConfigUtils").fSrcObject;
                apply: (value: import("./editableFactoryConfigUtils").fSrcObject, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            bumpScale: {
                parse: (props: Record<string, any>) => number;
                apply: (value: number, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            displacementMapSrc: {
                parse: (props: Record<string, any>) => import("./editableFactoryConfigUtils").fSrcObject;
                apply: (value: import("./editableFactoryConfigUtils").fSrcObject, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            displacementScale: {
                parse: (props: Record<string, any>) => number;
                apply: (value: number, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            displacementBias: {
                parse: (props: Record<string, any>) => number;
                apply: (value: number, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            emissive: {
                parse: (props: Record<string, any>) => import("./editableFactoryConfigUtils").Rgba;
                apply: (value: import("./editableFactoryConfigUtils").Rgba, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            emissiveMapSrc: {
                parse: (props: Record<string, any>) => import("./editableFactoryConfigUtils").fSrcObject;
                apply: (value: import("./editableFactoryConfigUtils").fSrcObject, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            emissiveIntensity: {
                parse: (props: Record<string, any>) => number;
                apply: (value: number, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            envMapSrc: {
                parse: (props: Record<string, any>) => import("./editableFactoryConfigUtils").fSrcObject;
                apply: (value: import("./editableFactoryConfigUtils").fSrcObject, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            envMapIntensity: {
                parse: (props: Record<string, any>) => number;
                apply: (value: number, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            lightMapSrc: {
                parse: (props: Record<string, any>) => import("./editableFactoryConfigUtils").fSrcObject;
                apply: (value: import("./editableFactoryConfigUtils").fSrcObject, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            lightMapIntensity: {
                parse: (props: Record<string, any>) => number;
                apply: (value: number, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            metalnessMapSrc: {
                parse: (props: Record<string, any>) => import("./editableFactoryConfigUtils").fSrcObject;
                apply: (value: import("./editableFactoryConfigUtils").fSrcObject, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            metalness: {
                parse: (props: Record<string, any>) => number;
                apply: (value: number, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            normalMapSrc: {
                parse: (props: Record<string, any>) => import("./editableFactoryConfigUtils").fSrcObject;
                apply: (value: import("./editableFactoryConfigUtils").fSrcObject, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            roughnessMapSrc: {
                parse: (props: Record<string, any>) => import("./editableFactoryConfigUtils").fSrcObject;
                apply: (value: import("./editableFactoryConfigUtils").fSrcObject, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            roughness: {
                parse: (props: Record<string, any>) => number;
                apply: (value: number, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
        };
        test: {
            roughness: {
                parse: (props: Record<string, any>) => number;
                apply: (value: number, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
        };
        icon: "cube";
        dimensionless: boolean;
        useTransformControls: boolean;
    };
    spotLight: {
        icon: "spotLight";
        createHelper: (light: SpotLight) => SpotLightHelper;
        dimensionless: boolean;
        props: {
            position: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            rotation: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            scale: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
        } & {};
        useTransformControls: boolean;
    };
    directionalLight: {
        icon: "sun";
        dimensionless: boolean;
        createHelper: (light: DirectionalLight) => DirectionalLightHelper;
        props: {
            position: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            rotation: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            scale: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
        } & {};
        useTransformControls: boolean;
    };
    pointLight: {
        icon: "lightBulb";
        createHelper: (light: PointLight) => PointLightHelper;
        dimensionless: boolean;
        props: {
            position: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            rotation: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            scale: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
        } & {};
        useTransformControls: boolean;
    };
    ambientLight: {
        props: {
            intensity: {
                parse: (props: Record<string, any>) => number;
                apply: (value: number, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            color: {
                parse: (props: Record<string, any>) => import("./editableFactoryConfigUtils").Rgba;
                apply: (value: import("./editableFactoryConfigUtils").Rgba, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
        };
        useTransformControls: boolean;
        icon: "lightBulb";
    };
    hemisphereLight: {
        props: {
            intensity: {
                parse: (props: Record<string, any>) => number;
                apply: (value: number, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            color: {
                parse: (props: Record<string, any>) => import("./editableFactoryConfigUtils").Rgba;
                apply: (value: import("./editableFactoryConfigUtils").Rgba, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            groundColor: {
                parse: (props: Record<string, any>) => import("./editableFactoryConfigUtils").Rgba;
                apply: (value: import("./editableFactoryConfigUtils").Rgba, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
        };
        useTransformControls: boolean;
        icon: "lightBulb";
    };
    perspectiveCamera: {
        updateObject: (camera: PerspectiveCamera | OrthographicCamera) => void;
        icon: "camera";
        dimensionless: boolean;
        createHelper: (camera: PerspectiveCamera) => CameraHelper;
        props: {
            position: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            rotation: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            scale: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
        } & {};
        useTransformControls: boolean;
    } & {
        props: {};
    };
    orthographicCamera: {
        updateObject: (camera: PerspectiveCamera | OrthographicCamera) => void;
        icon: "camera";
        dimensionless: boolean;
        createHelper: (camera: PerspectiveCamera) => CameraHelper;
        props: {
            position: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            rotation: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            scale: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
        } & {};
        useTransformControls: boolean;
    };
    points: {
        props: {
            position: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            rotation: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            scale: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
        };
        useTransformControls: boolean;
        icon: "cube";
        createHelper: (object: Object3D) => BoxHelper;
    };
    line: {
        props: {
            position: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            rotation: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            scale: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
        };
        useTransformControls: boolean;
        icon: "cube";
        createHelper: (object: Object3D) => BoxHelper;
    };
    lineLoop: {
        props: {
            position: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            rotation: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            scale: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
        };
        useTransformControls: boolean;
        icon: "cube";
        createHelper: (object: Object3D) => BoxHelper;
    };
    lineSegments: {
        props: {
            position: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            rotation: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            scale: {
                parse: (props: Record<string, any>) => {
                    x: number;
                    y: number;
                    z: number;
                };
                apply: (value: {
                    x: number;
                    y: number;
                    z: number;
                }, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
        };
        useTransformControls: boolean;
        icon: "cube";
        createHelper: (object: Object3D) => BoxHelper;
    };
    fog: {
        props: {
            color: {
                parse: (props: Record<string, any>) => import("./editableFactoryConfigUtils").Rgba;
                apply: (value: import("./editableFactoryConfigUtils").Rgba, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            near: {
                parse: (props: Record<string, any>) => number;
                apply: (value: number, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
            far: {
                parse: (props: Record<string, any>) => number;
                apply: (value: number, object: any) => void;
                type: types.UnknownShorthandCompoundProps;
            };
        };
        useTransformControls: boolean;
        icon: "cloud";
    };
};
export default defaultEditableFactoryConfig;
//# sourceMappingURL=defaultEditableFactoryConfig.d.ts.map