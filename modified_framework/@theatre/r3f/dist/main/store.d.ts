import type { Object3D, Scene, WebGLRenderer } from 'three';
import { Group } from 'three';
import type { ISheetObject } from '@theatre/core';
import type { ObjectConfig } from './editableFactoryConfigUtils';
export declare type TransformControlsMode = 'translate' | 'rotate' | 'scale';
export declare type TransformControlsSpace = 'world' | 'local';
export declare type ViewportShading = 'wireframe' | 'flat' | 'solid' | 'rendered';
export declare type BaseSheetObjectType = ISheetObject<any>;
export declare const allRegisteredObjects: WeakSet<BaseSheetObjectType>;
export interface Editable<T> {
    type: string;
    sheetObject: ISheetObject<any>;
    objectConfig: ObjectConfig<T>;
    visibleOnlyInEditor: boolean;
}
export declare type EditableSnapshot<T extends Editable<any> = Editable<any>> = {
    proxyObject?: Object3D | null;
} & T;
export interface SerializedEditable {
    type: string;
}
export interface EditableState {
    editables: Record<string, SerializedEditable>;
}
export declare type EditorStore = {
    scene: Scene | null;
    gl: WebGLRenderer | null;
    helpersRoot: Group;
    editables: Record<string, Editable<any>>;
    canvasName: string;
    sceneSnapshot: Scene | null;
    editablesSnapshot: Record<string, EditableSnapshot> | null;
    init: (scene: Scene, gl: WebGLRenderer) => void;
    addEditable: (theatreKey: string, editable: Editable<any>) => void;
    removeEditable: (theatreKey: string) => void;
    createSnapshot: () => void;
    setSnapshotProxyObject: (proxyObject: Object3D | null, theatreKey: string) => void;
};
export declare const editorStore: import("zustand").StoreApi<EditorStore>;
export declare type BindFunction = (options: {
    allowImplicitInstancing?: boolean;
    gl: WebGLRenderer;
    scene: Scene;
}) => void;
export declare const bindToCanvas: BindFunction;
//# sourceMappingURL=store.d.ts.map