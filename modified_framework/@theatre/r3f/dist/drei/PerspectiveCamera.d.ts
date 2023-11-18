import * as React from 'react';
import type { Object3D } from 'three';
import { Vector3 } from 'three';
import type { MutableRefObject } from 'react';
export declare type PerspectiveCameraProps = Omit<JSX.IntrinsicElements['perspectiveCamera'], 'lookAt'> & {
    lookAt?: [number, number, number] | Vector3 | MutableRefObject<Object3D | null | undefined>;
    makeDefault?: boolean;
    manual?: boolean;
    children?: React.ReactNode;
};
export declare const PerspectiveCamera: React.ForwardRefExoticComponent<Pick<Omit<Pick<Omit<import("@react-three/fiber").PerspectiveCameraProps, "lookAt"> & {
    lookAt?: Vector3 | [number, number, number] | React.MutableRefObject<Object3D<import("three").Event> | null | undefined> | undefined;
    makeDefault?: boolean | undefined;
    manual?: boolean | undefined;
    children?: React.ReactNode;
}, "attach" | "attachArray" | "attachObject" | "attachFns" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "type" | "isPerspectiveCamera" | "zoom" | "fov" | "aspect" | "near" | "far" | "focus" | "view" | "filmGauge" | "filmOffset" | "setFocalLength" | "getFocalLength" | "getEffectiveFOV" | "getFilmWidth" | "getFilmHeight" | "setViewOffset" | "clearViewOffset" | "updateProjectionMatrix" | "toJSON" | "setLens" | "matrixWorldInverse" | "projectionMatrix" | "projectionMatrixInverse" | "isCamera" | "getWorldDirection" | "updateMatrixWorld" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldAutoUpdate" | "matrixWorldNeedsUpdate" | "visible" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateWorldMatrix" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | keyof import("@react-three/fiber/dist/declarations/src/core/events").EventHandlers | "makeDefault" | "manual"> & React.RefAttributes<unknown>, "visible"> & {
    theatreKey: string;
    visible?: boolean | "editor" | undefined;
    additionalProps?: any;
    objRef?: any;
} & React.RefAttributes<import("@react-three/fiber").PerspectiveCameraProps>, "attach" | "attachArray" | "attachObject" | "attachFns" | "args" | "children" | "key" | "onUpdate" | "position" | "up" | "scale" | "rotation" | "matrix" | "quaternion" | "layers" | "dispose" | "type" | "isPerspectiveCamera" | "zoom" | "fov" | "aspect" | "near" | "far" | "focus" | "view" | "filmGauge" | "filmOffset" | "setFocalLength" | "getFocalLength" | "getEffectiveFOV" | "getFilmWidth" | "getFilmHeight" | "setViewOffset" | "clearViewOffset" | "updateProjectionMatrix" | "toJSON" | "setLens" | "matrixWorldInverse" | "projectionMatrix" | "projectionMatrixInverse" | "isCamera" | "getWorldDirection" | "updateMatrixWorld" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldAutoUpdate" | "matrixWorldNeedsUpdate" | "visible" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateWorldMatrix" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "onClick" | "onContextMenu" | "onDoubleClick" | "onPointerUp" | "onPointerDown" | "onPointerOver" | "onPointerOut" | "onPointerEnter" | "onPointerLeave" | "onPointerMove" | "onPointerMissed" | "onPointerCancel" | "onWheel" | "makeDefault" | "manual" | "theatreKey" | "additionalProps" | "objRef"> & React.RefAttributes<unknown>>;
//# sourceMappingURL=PerspectiveCamera.d.ts.map