import type { ISheet, ISheetObject } from '@theatre/core';
import { types } from '@theatre/core';
declare const editorSheetObjectConfig: {
    viewport: types.PropTypeConfig_Compound<import("@theatre/core/propTypes/internals").ShorthandCompoundPropsToLonghandCompoundProps<{
        showAxes: types.PropTypeConfig_Boolean;
        showGrid: types.PropTypeConfig_Boolean;
        showOverlayIcons: types.PropTypeConfig_Boolean;
        shading: types.PropTypeConfig_StringLiteral<"wireframe" | "rendered" | "flat" | "solid">;
        referenceWindow: types.PropTypeConfig_StringLiteral<"hidden" | "minimized" | "maximized">;
        lighting: types.PropTypeConfig_StringLiteral<"physical" | "legacy">;
    }>>;
    transformControls: types.PropTypeConfig_Compound<import("@theatre/core/propTypes/internals").ShorthandCompoundPropsToLonghandCompoundProps<{
        mode: types.PropTypeConfig_StringLiteral<"scale" | "translate" | "rotate">;
        space: types.PropTypeConfig_StringLiteral<"world" | "local">;
    }>>;
};
export declare function getEditorSheet(): ISheet;
export declare function getEditorSheetObject(): ISheetObject<typeof editorSheetObjectConfig> | null;
export {};
//# sourceMappingURL=editorStuff.d.ts.map