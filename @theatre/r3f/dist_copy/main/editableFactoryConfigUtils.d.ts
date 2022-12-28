import type { UnknownShorthandCompoundProps } from '@theatre/core';
import type { Object3D } from 'three';
import type { IconID } from '../extension/icons';
import { Color } from 'three';
export declare type Helper = Object3D & {
    update?: () => void;
};
declare type PropConfig<T> = {
    parse: (props: Record<string, any>) => T;
    apply: (value: T, object: any) => void;
    type: UnknownShorthandCompoundProps;
};
declare type Props = Record<string, PropConfig<any>>;
declare type Meta<T> = {
    useTransformControls: boolean;
    updateObject?: (object: T) => void;
    icon: IconID;
    dimensionless?: boolean;
    createHelper?: (object: T) => Helper;
};
export declare type ObjectConfig<T> = {
    props: Props;
} & Meta<T>;
export declare type EditableFactoryConfig = Partial<Record<keyof JSX.IntrinsicElements, ObjectConfig<any>>>;
declare type Vector3 = {
    x: number;
    y: number;
    z: number;
};
export declare const createVector: (components?: [number, number, number] | undefined) => {
    x: number;
    y: number;
    z: number;
};
export declare const createVectorPropConfig: (key: string, defaultValue?: {
    x: number;
    y: number;
    z: number;
}, { nudgeMultiplier }?: {
    nudgeMultiplier?: number | undefined;
}) => PropConfig<Vector3>;
export declare const createNumberPropConfig: (key: string, defaultValue?: number, { nudgeMultiplier }?: {
    nudgeMultiplier?: number | undefined;
}) => PropConfig<number>;
export declare type Rgba = {
    r: number;
    g: number;
    b: number;
    a: number;
};
export declare const createColorPropConfig: (key: string, defaultValue?: Color) => PropConfig<Rgba>;
export declare const extendObjectProps: <T extends {
    props: {};
}>(objectConfig: T, extension: Props) => T & {
    props: {};
};
export {};
//# sourceMappingURL=editableFactoryConfigUtils.d.ts.map