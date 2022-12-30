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
declare const TransformControls: React.ForwardRefExoticComponent<Pick<TransformControlsProps, "object" | "position" | "rotation" | "scale" | "quaternion" | "type" | "name" | "key" | "id" | "children" | "onClick" | "onContextMenu" | "onDoubleClick" | "onPointerDown" | "onPointerMove" | "onPointerUp" | "onPointerCancel" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOut" | "onWheel" | "orbitControlsRef" | "mode" | "space" | "target" | "visible" | "attach" | "attachArray" | "attachObject" | "attachFns" | "args" | "onUpdate" | "up" | "matrix" | "layers" | "dispose" | "raycast" | "uuid" | "parent" | "modelViewMatrix" | "normalMatrix" | "matrixWorld" | "matrixAutoUpdate" | "matrixWorldAutoUpdate" | "matrixWorldNeedsUpdate" | "castShadow" | "receiveShadow" | "frustumCulled" | "renderOrder" | "animations" | "userData" | "customDepthMaterial" | "customDistanceMaterial" | "isObject3D" | "onBeforeRender" | "onAfterRender" | "applyMatrix4" | "applyQuaternion" | "setRotationFromAxisAngle" | "setRotationFromEuler" | "setRotationFromMatrix" | "setRotationFromQuaternion" | "rotateOnAxis" | "rotateOnWorldAxis" | "rotateX" | "rotateY" | "rotateZ" | "translateOnAxis" | "translateX" | "translateY" | "translateZ" | "localToWorld" | "worldToLocal" | "lookAt" | "add" | "remove" | "removeFromParent" | "clear" | "getObjectById" | "getObjectByName" | "getObjectByProperty" | "getWorldPosition" | "getWorldQuaternion" | "getWorldScale" | "getWorldDirection" | "traverse" | "traverseVisible" | "traverseAncestors" | "updateMatrix" | "updateMatrixWorld" | "updateWorldMatrix" | "toJSON" | "clone" | "copy" | "addEventListener" | "hasEventListener" | "removeEventListener" | "dispatchEvent" | "onPointerMissed" | "update" | "setSize" | "isTransformControls" | "detach" | "getMode" | "setMode" | "setTranslationSnap" | "setRotationSnap" | "setScaleSnap" | "setSpace" | "onObjectChange" | "onDraggingChange"> & React.RefAttributes<unknown>>;
export default TransformControls;
//# sourceMappingURL=TransformControls.d.ts.map