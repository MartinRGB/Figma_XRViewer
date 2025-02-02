import type { ReactThreeFiber } from '@react-three/fiber';
import * as React from 'react';
import type { Camera, Event } from 'three';
import { OrbitControlsImpl as OrbitControlsImpl } from './OrbitControlsImpl';
export declare type OrbitControlsProps = Omit<ReactThreeFiber.Overwrite<ReactThreeFiber.Object3DNode<OrbitControlsImpl, typeof OrbitControlsImpl>, {
    camera?: Camera;
    domElement?: HTMLElement;
    enableDamping?: boolean;
    makeDefault?: boolean;
    onChange?: (e?: Event) => void;
    onEnd?: (e?: Event) => void;
    onStart?: (e?: Event) => void;
    regress?: boolean;
    target?: ReactThreeFiber.Vector3;
}>, 'ref'>;
export declare const OrbitControls: React.ForwardRefExoticComponent<OrbitControlsProps & React.RefAttributes<OrbitControlsImpl>>;
export { OrbitControlsImpl };
//# sourceMappingURL=index.d.ts.map