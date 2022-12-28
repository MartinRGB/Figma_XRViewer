import type { Object3D, Event } from 'three';
import React from 'react';
import type { ReactThreeFiber, Overwrite } from '@react-three/fiber';
import { TransformControls as TransformControlsImpl } from 'three-stdlib';
import type { OrbitControls } from 'three-stdlib';
declare type R3fTransformControls = Overwrite<ReactThreeFiber.Object3DNode<TransformControlsImpl, typeof TransformControlsImpl>, {
    target?: ReactThreeFiber.Vector3;
}>;
export interface TransformControlsProps extends R3fTransformControls {
    object: Object3D;
    orbitControlsRef?: React.MutableRefObject<OrbitControls | null>;
    onObjectChange?: (event: Event) => void;
    onDraggingChange?: (event: Event) => void;
    mode: TransformControlsImpl['mode'];
    space: TransformControlsImpl['space'];
}
declare const TransformControls: React.ForwardRefExoticComponent<Pick<TransformControlsProps, "object" | "quaternion" | "children" | "scale" | "position" | "rotation" | "visible" | "attach" | "attachArray" | "attachObject" | "attachFns" | "args" | "key" | "onUpdate" | "up" | "matrix" | "layers" | "dispose" | "type" | "updateMatrixWorld" | "id" | "uuid" | "name" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "raycast" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "update" | "onClick" | "onContextMenu" | "onDoubleClick" | "onPointerUp" | "onPointerDown" | "onPointerOver" | "onPointerOut" | "onPointerEnter" | "onPointerLeave" | "onPointerMove" | "onPointerMissed" | "onPointerCancel" | "onWheel" | "target" | "setSize" | "isTransformControls" | "detach" | "getMode" | "setMode" | "setTranslationSnap" | "setRotationSnap" | "setScaleSnap" | "setSpace" | "mode" | "space" | "orbitControlsRef" | "onObjectChange" | "onDraggingChange"> & React.RefAttributes<unknown>>;
export default TransformControls;
//# sourceMappingURL=TransformControls.d.ts.map