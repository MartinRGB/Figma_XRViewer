import type { DirectionalLight, Object3D, OrthographicCamera, PerspectiveCamera, PointLight, SpotLight } from 'three';
import { BoxHelper, CameraHelper, DirectionalLightHelper, PointLightHelper, SpotLightHelper } from 'three';
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
            };
        };
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
            };
        } & {};
        useTransformControls: boolean;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
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
                type: import("@theatre/core").UnknownShorthandCompoundProps;
            };
            near: {
                parse: (props: Record<string, any>) => number;
                apply: (value: number, object: any) => void;
                type: import("@theatre/core").UnknownShorthandCompoundProps;
            };
            far: {
                parse: (props: Record<string, any>) => number;
                apply: (value: number, object: any) => void;
                type: import("@theatre/core").UnknownShorthandCompoundProps;
            };
        };
        useTransformControls: boolean;
        icon: "cloud";
    };
};
export default defaultEditableFactoryConfig;
//# sourceMappingURL=defaultEditableFactoryConfig.d.ts.map