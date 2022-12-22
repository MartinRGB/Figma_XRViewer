import { ISheetObject, ISheet, IProject } from '@theatre/core';
import { Pointer } from '@theatre/dataverse';
import React from 'react';

/**
 * Using a symbol, we can sort of add unique properties to arbitrary other types.
 * So, we use this to our advantage to add a "marker" of information to strings using
 * the {@link Nominal} type.
 *
 * Can be used with keys in pointers.
 * This identifier shows in the expanded {@link Nominal} as `string & {[nominal]:"SequenceTrackId"}`,
 * So, we're opting to keeping the identifier short.
 */
declare const nominal: unique symbol;
/**
 * This creates an "opaque"/"nominal" type.
 *
 * Our primary use case is to be able to use with keys in pointers.
 *
 * Numbers cannot be added together if they are "nominal"
 *
 * See {@link nominal} for more details.
 */
declare type Nominal<N extends string> = string & {
    [nominal]: N;
};
declare global {
    interface ObjectConstructor {
        /** Nominal: Extension to the Object prototype definition to properly manage {@link Nominal} keyed records */
        keys<T extends Record<Nominal<string>, any>>(obj: T): any extends T ? never[] : Extract<keyof T, string>[];
        /** Nominal: Extension to the Object prototype definition to properly manage {@link Nominal} keyed records */
        entries<T extends Record<Nominal<string>, any>>(obj: T): any extends T ? [never, never][] : Array<{
            [P in keyof T]: [P, T[P]];
        }[Extract<keyof T, string>]>;
    }
}

declare type PaneInstanceId = Nominal<'PaneInstanceId'>;

/**
 * The scrub API is a simple construct for changing values in Theatre.js in a history-compatible way.
 * Primarily, it can be used to create a series of value changes using a temp transaction without
 * creating multiple transactions.
 *
 * The name is inspired by the activity of "scrubbing" the value of an input through clicking and
 * dragging left and right. But, the API is not limited to chaning a single prop's value.
 *
 * For now, using the {@link IScrubApi.set} will result in changing the values where the
 * playhead is (the `sequence.position`).
 */
interface IScrubApi {
    /**
     * Set the value of a prop by its pointer. If the prop is sequenced, the value
     * will be a keyframe at the current playhead position (`sequence.position`).
     *
     * @param pointer - A Pointer, like object.props
     * @param value - The value to override the existing value. This is treated as a deep partial value.
     *
     * @example
     * Usage:
     * ```ts
     * const obj = sheet.object("box", {x: 0, y: 0})
     * const scrub = studio.scrub()
     * scrub.capture(({set}) => {
     *   // set a specific prop's value
     *   set(obj.props.x, 10) // New value is {x: 10, y: 0}
     *   // values are set partially
     *   set(obj.props, {y: 11}) // New value is {x: 10, y: 11}
     *
     *   // this will error, as there is no such prop as 'z'
     *   set(obj.props.z, 10)
     * })
     * ```
     */
    set<T>(pointer: Pointer<T>, value: T): void;
}
interface IScrub {
    /**
     * Clears all the ops in the scrub, but keeps the scrub open so you can call
     * `scrub.capture()` again.
     */
    reset(): void;
    /**
     * Commits the scrub and creates a single undo level.
     */
    commit(): void;
    /**
     * Captures operations for the scrub.
     *
     * Note that running `scrub.capture()` multiple times means all the older
     * calls of `scrub.capture()` will be reset.
     *
     * @example
     * Usage:
     * ```ts
     * scrub.capture(({set}) => {
     *   set(obj.props.x, 10) // set the value of obj.props.x to 10
     * })
     * ```
     */
    capture(fn: (api: IScrubApi) => void): void;
    /**
     * Clears the ops of the scrub and destroys it. After calling this,
     * you won't be able to call `scrub.capture()` anymore.
     */
    discard(): void;
}

interface ITransactionAPI {
    /**
     * Set the value of a prop by its pointer. If the prop is sequenced, the value
     * will be a keyframe at the current sequence position.
     *
     * @example
     * Usage:
     * ```ts
     * const obj = sheet.object("box", {x: 0, y: 0})
     * studio.transaction(({set}) => {
     *   // set a specific prop's value
     *   set(obj.props.x, 10) // New value is {x: 10, y: 0}
     *   // values are set partially
     *   set(obj.props, {y: 11}) // New value is {x: 10, y: 11}
     *
     *   // this will error, as there is no such prop as 'z'
     *   set(obj.props.z, 10)
     * })
     * ```
     * @param pointer - A Pointer, like object.props
     * @param value - The value to override the existing value. This is treated as a deep partial value.
     */
    set<V>(pointer: Pointer<V>, value: V): void;
    /**
     * Unsets the value of a prop by its pointer.
     *
     * @example
     * Usage:
     * ```ts
     * const obj = sheet.object("box", {x: 0, y: 0})
     * studio.transaction(({set}) => {
     *   // set props.x to its default value
     *   unset(obj.props.x)
     *   // set all props to their default value
     *   set(obj.props)
     * })
     * ```
     * @param pointer - A pointer, like object.props
     */
    unset<V>(pointer: Pointer<V>): void;
}
/**
 *
 */
interface PaneClassDefinition {
    /**
     * Each pane has a `class`, which is a string.
     */
    class: string;
    mount: (opts: {
        paneId: string;
        node: HTMLElement;
    }) => () => void;
}
declare type ToolConfigIcon = {
    type: 'Icon';
    svgSource: string;
    title: string;
    onClick: () => void;
};
declare type ToolConfigSwitch = {
    type: 'Switch';
    value: string;
    onChange: (value: string) => void;
    options: {
        value: string;
        label: string;
        svgSource: string;
    }[];
};
declare type ToolConfig = ToolConfigIcon | ToolConfigSwitch;
declare type ToolsetConfig = Array<ToolConfig>;
/**
 * A Theatre.js Studio extension. You can define one either
 * in a separate package, or within your project.
 */
interface IExtension {
    /**
     * Pick a unique ID for your extension. Ideally the name would be unique if
     * the extension was to be published to the npm repository.
     */
    id: string;
    /**
     * Set this if you'd like to add a component to the global toolbar (on the top)
     *
     * @example
     * TODO
     */
    toolbars?: {
        [key in 'global' | string]: (set: (config: ToolsetConfig) => void, studio: IStudio) => () => void;
    };
    /**
     * Introduces new pane types.
     * @example
     * TODO
     */
    panes?: Array<PaneClassDefinition>;
}
declare type PaneInstance<ClassName extends string> = {
    extensionId: string;
    instanceId: PaneInstanceId;
    definition: PaneClassDefinition;
};
interface IStudioUI {
    /**
     * Temporarily hides the studio
     */
    hide(): void;
    /**
     * Whether the studio is currently visible or hidden
     */
    readonly isHidden: boolean;
    /**
     * Makes the studio visible again.
     */
    restore(): void;
    renderToolset(toolsetId: string, htmlNode: HTMLElement): () => void;
}
interface _StudioInitializeOpts {
    /**
     * The local storage key to use to persist the state.
     *
     * Default: "theatrejs:0.4"
     */
    persistenceKey?: string;
    /**
     * Whether to persist the changes in the browser's temporary storage.
     * It is useful to set this to false in the test environment or when debugging things.
     *
     * Default: true
     */
    usePersistentStorage?: boolean;
}
/**
 * This is the public api of Theatre's studio. It is exposed through:
 *
 * @example
 * Basic usage:
 * ```ts
 * import studio from '@theatre/studio'
 *
 * studio.initialize()
 * ```
 *
 * @example
 * Usage with **tree-shaking**:
 * ```ts
 * import studio from '@theatre/studio'
 *
 * if (process.env.NODE_ENV !== 'production') {
 *   studio.initialize()
 * }
 * ```
 */
interface IStudio {
    readonly ui: IStudioUI;
    /**
     * Initializes the studio. Call it once in your index.js/index.ts module.
     * It silently ignores subsequent calls.
     */
    initialize(opts?: _StudioInitializeOpts): void;
    /**
     * Runs an undo-able transaction. Creates a single undo level for all
     * the operations inside the transaction.
     *
     * Will roll back if an error is thrown.
     *
     * @example
     * Usage:
     * ```ts
     * studio.transaction(({set, unset}) => {
     *   set(obj.props.x, 10) // set the value of obj.props.x to 10
     *   unset(obj.props.y) // unset the override at obj.props.y
     * })
     * ```
     */
    transaction(fn: (api: ITransactionAPI) => void): void;
    /**
     * Creates a scrub, which is just like a transaction, except you
     * can run it multiple times without creating extra undo levels.
     *
     * @example
     * Usage:
     * ```ts
     * const scrub = studio.scrub()
     * scrub.capture(({set}) => {
     *   set(obj.props.x, 10) // set the value of obj.props.x to 10
     * })
     *
     * // half a second later...
     * scrub.capture(({set}) => {
     *   set(obj.props.y, 11) // set the value of obj.props.y to 11
     *   // note that since we're not setting obj.props.x, its value reverts back to its old value (ie. not 10)
     * })
     *
     * // then either:
     * scrub.commit() // commits the scrub and creates a single undo level
     * // or:
     * scrub.reset() // clear all the ops in the scrub so we can run scrub.capture() again
     * // or:
     * scrub.discard() // clears the ops and destroys it (ie. can't call scrub.capture() anymore)
     * ```
     */
    scrub(): IScrub;
    /**
     * Creates a debounced scrub, which is just like a normal scrub, but
     * automatically runs scrub.commit() after `threshhold` milliseconds have
     * passed after the last `scrub.capture`.
     *
     * @param threshhold - How long to wait before committing the scrub
     *
     * @example
     * Usage:
     * ```ts
     * // Will create a new undo-level after 2 seconds have passed
     * // since the last scrub.capture()
     * const scrub = studio.debouncedScrub(2000)
     *
     * // capture some ops
     * scrub.capture(...)
     * // wait one second
     * await delay(1000)
     * // capture more ops but no new undo level is made,
     * // because the last scrub.capture() was called less than 2 seconds ago
     * scrub.capture(...)
     *
     * // wait another seonc and half
     * await delay(1500)
     * // still no new undo level, because less than 2 seconds have passed
     * // since the last capture
     * scrub.capture(...)
     *
     * // wait 3 seconds
     * await delay(3000) // at this point, one undo level is created.
     *
     * // this call to capture will start a new undo level
     * scrub.capture(...)
     * ```
     */
    debouncedScrub(threshhold: number): Pick<IScrub, 'capture'>;
    /**
     * Sets the current selection.
     *
     * @example
     * Usage:
     * ```ts
     * const sheet1: ISheet = ...
     * const obj1: ISheetObject<any> = ...
     *
     * studio.setSelection([sheet1, obj1])
     * ```
     *
     * You can read the current selection from studio.selection
     */
    setSelection(selection: Array<ISheetObject<any> | ISheet>): void;
    /**
     * Calls fn every time the current selection changes.
     */
    onSelectionChange(fn: (s: Array<ISheetObject<{}> | ISheet>) => void): VoidFunction;
    /**
     * The current selection, consisting of Sheets and Sheet Objects
     *
     * @example
     * Usage:
     * ```ts
     * console.log(studio.selection) // => [ISheetObject, ISheet]
     * ```
     */
    readonly selection: Array<ISheetObject<{}> | ISheet>;
    /**
     * Registers an extension
     */
    extend(
    /**
     * The extension's definition
     */
    extension: IExtension): void;
    /**
     * Creates a new pane
     *
     * @param paneClass - The class name of the pane (provided by an extension)
     */
    createPane<PaneClass extends string>(paneClass: PaneClass): PaneInstance<PaneClass>;
    /**
     * Returns the Theatre.js project that contains the studio's sheets and objects.
     *
     * It is useful if you'd like to have sheets/objects that are present only when
     * studio is present.
     */
    getStudioProject(): IProject;
    /**
     * Creates a JSON object that contains the state of the project. You can use this
     * to programmatically save the state of your projects to the storage system of your
     * choice, rather than manually clicking on the "Export" button in the UI.
     *
     * @param projectId - same projectId as in `core.getProject(projectId)`
     *
     * @example
     * Usage:
     * ```ts
     * const projectId = "project"
     * const json = studio.createContentOfSaveFile(projectId)
     * const string = JSON.stringify(json)
     * fetch(`/projects/${projectId}/state`, {method: 'POST', body: string}).then(() => {
     *   console.log("Saved")
     * })
     * ```
     */
    createContentOfSaveFile(projectId: string): Record<string, unknown>;
}

declare const ToolbarDropdownSelect: React.FC<{
    value: string;
    options: Array<{
        label: string;
        value: string;
        icon: React.ReactElement;
    }>;
    onChange: (value: string) => void;
    label: (cur: {
        label: string;
        value: string;
    }) => string;
}>;
//# sourceMappingURL=ToolbarDropdownSelect.d.ts.map

/**
 * The library providing the editor components of Theatre.js.
 *
 * @packageDocumentation
 */

/**
 * The main instance of Studio. Read more at {@link IStudio}
 */
declare const studio: IStudio;
//# sourceMappingURL=index.d.ts.map

export { IExtension, IScrub, IStudio, IStudioUI, PaneClassDefinition, PaneInstance, ToolConfig, ToolConfigIcon, ToolConfigSwitch, ToolbarDropdownSelect, ToolsetConfig, _StudioInitializeOpts, studio as default };
