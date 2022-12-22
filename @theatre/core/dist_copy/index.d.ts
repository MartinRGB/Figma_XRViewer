import { Pointer, PointerType } from '@theatre/dataverse';

declare type VoidFn = () => void;
declare type SerializableMap<Primitives extends SerializablePrimitive = SerializablePrimitive> = {
    [Key in string]?: SerializableValue<Primitives>;
};
declare type SerializablePrimitive = string | number | boolean | {
    r: number;
    g: number;
    b: number;
    a: number;
};
/**
 * This type represents all values that can be safely serialized.
 * Also, it's notable that this type is compatible for dataverse pointer traversal (everything
 * is path accessible [e.g. `a.b.c`]).
 *
 * One example usage is for keyframe values or static overrides such as `Rgba`, `string`, `number`, and "compound values".
 */
declare type SerializableValue<Primitives extends SerializablePrimitive = SerializablePrimitive> = Primitives | SerializableMap;
declare type DeepPartialOfSerializableValue<T extends SerializableValue> = T extends SerializableMap ? {
    [K in keyof T]?: DeepPartialOfSerializableValue<Exclude<T[K], undefined>>;
} : T;
/** For `any`s that we don't care about */
declare type $IntentionalAny = any;

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

/**
 * Represents the address to a project
 */
interface ProjectAddress {
    projectId: ProjectId;
}
/**
 * Represents the address to a specific instance of a Sheet
 *
 * @example
 * ```ts
 * const sheet = project.sheet('a sheet', 'some instance id')
 * sheet.address.sheetId === 'a sheet'
 * sheet.address.sheetInstanceId === 'sheetInstanceId'
 * ```
 */
interface SheetAddress extends ProjectAddress {
    sheetId: SheetId;
    sheetInstanceId: SheetInstanceId;
}
/**
 * Represents the address to a Sheet's Object
 */
interface SheetObjectAddress extends SheetAddress {
    /**
     * The key of the object.
     *
     * @example
     * ```ts
     * const obj = sheet.object('foo', {})
     * obj.address.objectKey === 'foo'
     * ```
     */
    objectKey: ObjectAddressKey;
}

declare type Rgba = {
    r: number;
    g: number;
    b: number;
    a: number;
};

/**
 * A compound prop type (basically a JS object).
 *
 * @example
 * Usage:
 * ```ts
 * // shorthand
 * const position = {
 *   x: 0,
 *   y: 0
 * }
 * assert(sheet.object('some object', position).value.x === 0)
 *
 * // nesting
 * const foo = {bar: {baz: {quo: 0}}}
 * assert(sheet.object('some object', foo).value.bar.baz.quo === 0)
 *
 * // With additional options:
 * const position = t.compound(
 *   {x: 0, y: 0},
 *   // a custom label for the prop:
 *   {label: "Position"}
 * )
 * ```
 *
 */
declare const compound: <Props extends UnknownShorthandCompoundProps>(props: Props, opts?: CommonOpts) => PropTypeConfig_Compound<ShorthandCompoundPropsToLonghandCompoundProps<Props>>;
/**
 * A number prop type.
 *
 * @example
 * Usage
 * ```ts
 * // shorthand:
 * const obj = sheet.object('key', {x: 0})
 *
 * // With options (equal to above)
 * const obj = sheet.object('key', {
 *   x: t.number(0)
 * })
 *
 * // With a range (note that opts.range is just a visual guide, not a validation rule)
 * const x = t.number(0, {range: [0, 10]}) // limited to 0 and 10
 *
 * // With custom nudging
 * const x = t.number(0, {nudgeMultiplier: 0.1}) // nudging will happen in 0.1 increments
 *
 * // With custom nudging function
 * const x = t.number({
 *   nudgeFn: (
 *     // the mouse movement (in pixels)
 *     deltaX: number,
 *     // the movement as a fraction of the width of the number editor's input
 *     deltaFraction: number,
 *     // A multiplier that's usually 1, but might be another number if user wants to nudge slower/faster
 *     magnitude: number,
 *     // the configuration of the number
 *     config: {nudgeMultiplier?: number; range?: [number, number]},
 *   ): number => {
 *     return deltaX * magnitude
 *   },
 * })
 * ```
 *
 * @param defaultValue - The default value (Must be a finite number)
 * @param opts - The options (See usage examples)
 * @returns A number prop config
 */
declare const number: (defaultValue: number, opts?: {
    nudgeFn?: PropTypeConfig_Number['nudgeFn'];
    range?: PropTypeConfig_Number['range'];
    nudgeMultiplier?: number;
    label?: string;
}) => PropTypeConfig_Number;
declare const rgba: (defaultValue?: Rgba, opts?: CommonOpts) => PropTypeConfig_Rgba;
/**
 * A boolean prop type
 *
 * @example
 * Usage:
 * ```ts
 * // shorthand:
 * const obj = sheet.object('key', {isOn: true})
 *
 * // with a label:
 * const obj = sheet.object('key', {
 *   isOn: t.boolean(true, {
 *     label: 'Enabled'
 *   })
 * })
 * ```
 *
 * @param defaultValue - The default value (must be a boolean)
 * @param opts - Options (See usage examples)
 */
declare const boolean: (defaultValue: boolean, opts?: {
    label?: string;
    interpolate?: Interpolator<boolean>;
}) => PropTypeConfig_Boolean;
/**
 * A string prop type
 *
 * @example
 * Usage:
 * ```ts
 * // shorthand:
 * const obj = sheet.object('key', {message: "Animation loading"})
 *
 * // with a label:
 * const obj = sheet.object('key', {
 *   message: t.string("Animation Loading", {
 *     label: 'The Message'
 *   })
 * })
 * ```
 *
 * @param defaultValue - The default value (must be a string)
 * @param opts - The options (See usage examples)
 * @returns A string prop type
 */
declare const string: (defaultValue: string, opts?: {
    label?: string;
    interpolate?: Interpolator<string>;
}) => PropTypeConfig_String;
/**
 * A stringLiteral prop type, useful for building menus or radio buttons.
 *
 * @example
 * Usage:
 * ```ts
 * // Basic usage
 * const obj = sheet.object('key', {
 *   light: t.stringLiteral("r", {r: "Red", "g": "Green"})
 * })
 *
 * // Shown as a radio switch with a custom label
 * const obj = sheet.object('key', {
 *   light: t.stringLiteral("r", {r: "Red", "g": "Green"})
 * }, {as: "switch", label: "Street Light"})
 * ```
 *
 * @returns A stringLiteral prop type
 *
 */
declare function stringLiteral<ValuesAndLabels extends {
    [key in string]: string;
}>(
/**
 * Default value (a string that equals one of the options)
 */
defaultValue: Extract<keyof ValuesAndLabels, string>, 
/**
 * The options. Use the `"value": "Label"` format.
 *
 * An object like `{[value]: Label}`. Example: `{r: "Red", "g": "Green"}`
 */
valuesAndLabels: ValuesAndLabels, 
/**
 * opts.as Determines if editor is shown as a menu or a switch. Either 'menu' or 'switch'.  Default: 'menu'
 */
opts?: {
    as?: 'menu' | 'switch';
    label?: string;
    interpolate?: Interpolator<Extract<keyof ValuesAndLabels, string>>;
}): PropTypeConfig_StringLiteral<Extract<keyof ValuesAndLabels, string>>;
/**
 * A linear interpolator for a certain value type.
 *
 * @param left - the value to interpolate from (beginning)
 * @param right - the value to interpolate to (end)
 * @param progression - the amount of progression. Starts at 0 and ends at 1. But could overshoot in either direction
 *
 * @example
 * ```ts
 * const numberInterpolator: Interpolator<number> = (left, right, progression) => left + progression * (right - left)
 *
 * numberInterpolator(-50, 50, 0.5) === 0
 * numberInterpolator(-50, 50, 0) === -50
 * numberInterpolator(-50, 50, 1) === 50
 * numberInterpolator(-50, 50, 2) === 150 // overshoot
 * ```
 */
declare type Interpolator<T> = (left: T, right: T, progression: number) => T;
interface IBasePropType<LiteralIdentifier extends string, ValueType, DeserializeType = ValueType> {
    /**
     * Each prop config has a string literal identifying it. For example,
     * `assert.equal(t.number(10).type, 'number')`
     */
    type: LiteralIdentifier;
    /**
     * the `valueType` is only used by typescript. It won't be present in runtime.
     */
    valueType: ValueType;
    [propTypeSymbol]: 'TheatrePropType';
    /**
     * Each prop type may be given a custom label instead of the name of the sub-prop
     * it is in.
     *
     * @example
     * ```ts
     * const position = {
     *   x: t.number(0), // label would be 'x'
     *   y: t.number(0, {label: 'top'}) // label would be 'top'
     * }
     * ```
     */
    label: string | undefined;
    default: ValueType;
    /**
     * Each prop config has a `deserializeAndSanitize()` function that deserializes and sanitizes
     * any js value into one that is acceptable by this prop config, or `undefined`.
     *
     * As a rule, the value returned by this function should not hold any reference to `json` or any
     * other value referenced by the descendent props of `json`. This is to ensure that json values
     * controlled by the user can never change the values in the store. See `deserializeAndSanitize()` in
     * `t.compound()` or `t.rgba()` as examples.
     *
     * The `DeserializeType` is usually equal to `ValueType`. That is the case with
     * all simple prop configs, such as `number`, `string`, or `rgba`. However, composite
     * configs such as `compound` or `enum` may deserialize+sanitize into a partial value. For example,
     * a prop config of `t.compound({x: t.number(0), y: t.number(0)})` may deserialize+sanitize into `{x: 10}`.
     * This behavior is used by {@link SheetObject.getValues} to replace the missing sub-props
     * with their default value.
     *
     * Admittedly, this partial deserialization behavior is not what the word "deserialize"
     * typically implies in most codebases, so feel free to change this name into a more
     * appropriate one.
     *
     * Additionally, returning an `undefined` allows {@link SheetObject.getValues} to
     * replace the `undefined` with the default value of that prop.
     */
    deserializeAndSanitize: (json: unknown) => undefined | DeserializeType;
}
interface ISimplePropType<LiteralIdentifier extends string, ValueType> extends IBasePropType<LiteralIdentifier, ValueType, ValueType> {
    interpolate: Interpolator<ValueType>;
}
interface PropTypeConfig_Number extends ISimplePropType<'number', number> {
    range?: [min: number, max: number];
    nudgeFn: NumberNudgeFn;
    nudgeMultiplier: number;
}
declare type NumberNudgeFn = (p: {
    deltaX: number;
    deltaFraction: number;
    magnitude: number;
    config: PropTypeConfig_Number;
}) => number;
interface PropTypeConfig_Boolean extends ISimplePropType<'boolean', boolean> {
}
declare type CommonOpts = {
    /**
     * Each prop type may be given a custom label instead of the name of the sub-prop
     * it is in.
     *
     * @example
     * ```ts
     * const position = {
     *   x: t.number(0), // label would be 'x'
     *   y: t.number(0, {label: 'top'}) // label would be 'top'
     * }
     * ```
     */
    label?: string;
};
interface PropTypeConfig_String extends ISimplePropType<'string', string> {
}
interface PropTypeConfig_StringLiteral<T extends string> extends ISimplePropType<'stringLiteral', T> {
    valuesAndLabels: Record<T, string>;
    as: 'menu' | 'switch';
}
interface PropTypeConfig_Rgba extends ISimplePropType<'rgba', Rgba> {
}
declare type DeepPartialCompound<Props extends UnknownValidCompoundProps> = {
    [K in keyof Props]?: DeepPartial<Props[K]>;
};
declare type DeepPartial<Conf extends PropTypeConfig> = Conf extends PropTypeConfig_AllSimples ? Conf['valueType'] : Conf extends PropTypeConfig_Compound<infer T> ? DeepPartialCompound<T> : never;
interface PropTypeConfig_Compound<Props extends UnknownValidCompoundProps> extends IBasePropType<'compound', {
    [K in keyof Props]: Props[K]['valueType'];
}, DeepPartialCompound<Props>> {
    props: Record<keyof Props, PropTypeConfig>;
}
interface PropTypeConfig_Enum extends IBasePropType<'enum', {}> {
    cases: Record<string, PropTypeConfig>;
    defaultCase: string;
}
declare type PropTypeConfig_AllSimples = PropTypeConfig_Number | PropTypeConfig_Boolean | PropTypeConfig_String | PropTypeConfig_StringLiteral<$IntentionalAny> | PropTypeConfig_Rgba;
declare type PropTypeConfig = PropTypeConfig_AllSimples | PropTypeConfig_Compound<$IntentionalAny> | PropTypeConfig_Enum;

type index_d_UnknownShorthandCompoundProps = UnknownShorthandCompoundProps;
declare const index_d_compound: typeof compound;
declare const index_d_number: typeof number;
declare const index_d_rgba: typeof rgba;
declare const index_d_boolean: typeof boolean;
declare const index_d_string: typeof string;
declare const index_d_stringLiteral: typeof stringLiteral;
type index_d_Interpolator<_0> = Interpolator<_0>;
type index_d_IBasePropType<_0, _1, _2> = IBasePropType<_0, _1, _2>;
type index_d_PropTypeConfig_Number = PropTypeConfig_Number;
type index_d_NumberNudgeFn = NumberNudgeFn;
type index_d_PropTypeConfig_Boolean = PropTypeConfig_Boolean;
type index_d_PropTypeConfig_String = PropTypeConfig_String;
type index_d_PropTypeConfig_StringLiteral<_0> = PropTypeConfig_StringLiteral<_0>;
type index_d_PropTypeConfig_Rgba = PropTypeConfig_Rgba;
type index_d_PropTypeConfig_Compound<_0> = PropTypeConfig_Compound<_0>;
type index_d_PropTypeConfig_Enum = PropTypeConfig_Enum;
type index_d_PropTypeConfig_AllSimples = PropTypeConfig_AllSimples;
type index_d_PropTypeConfig = PropTypeConfig;
declare namespace index_d {
  export {
    index_d_UnknownShorthandCompoundProps as UnknownShorthandCompoundProps,
    index_d_compound as compound,
    index_d_number as number,
    index_d_rgba as rgba,
    index_d_boolean as boolean,
    index_d_string as string,
    index_d_stringLiteral as stringLiteral,
    index_d_Interpolator as Interpolator,
    index_d_IBasePropType as IBasePropType,
    index_d_PropTypeConfig_Number as PropTypeConfig_Number,
    index_d_NumberNudgeFn as NumberNudgeFn,
    index_d_PropTypeConfig_Boolean as PropTypeConfig_Boolean,
    index_d_PropTypeConfig_String as PropTypeConfig_String,
    index_d_PropTypeConfig_StringLiteral as PropTypeConfig_StringLiteral,
    index_d_PropTypeConfig_Rgba as PropTypeConfig_Rgba,
    index_d_PropTypeConfig_Compound as PropTypeConfig_Compound,
    index_d_PropTypeConfig_Enum as PropTypeConfig_Enum,
    index_d_PropTypeConfig_AllSimples as PropTypeConfig_AllSimples,
    index_d_PropTypeConfig as PropTypeConfig,
  };
}

declare const propTypeSymbol: unique symbol;
declare type UnknownValidCompoundProps = {
    [K in string]: PropTypeConfig;
};
/**
 *
 * This does not include Rgba since Rgba does not have a predictable
 * object shape. We prefer to infer that compound props are described as
 * `Record<string, IShorthandProp>` for now.
 *
 * In the future, it might be reasonable to wrap these types up into something
 * which would allow us to differentiate between values at runtime
 * (e.g. `val.type = "Rgba"` vs `val.type = "Compound"` etc)
 */
declare type UnknownShorthandProp = string | number | boolean | PropTypeConfig | UnknownShorthandCompoundProps;
/** Given an object like this, we have enough info to predict the compound prop */
declare type UnknownShorthandCompoundProps = {
    [K in string]: UnknownShorthandProp;
};
declare type ShorthandPropToLonghandProp<P extends UnknownShorthandProp> = P extends string ? PropTypeConfig_String : P extends number ? PropTypeConfig_Number : P extends boolean ? PropTypeConfig_Boolean : P extends PropTypeConfig ? P : P extends UnknownShorthandCompoundProps ? PropTypeConfig_Compound<ShorthandCompoundPropsToLonghandCompoundProps<P>> : never;
declare type LonghandCompoundPropsToInitialValue<P extends UnknownValidCompoundProps> = {
    [K in keyof P]: P[K]['valueType'];
};
declare type PropsValue<P> = P extends UnknownValidCompoundProps ? LonghandCompoundPropsToInitialValue<P> : P extends UnknownShorthandCompoundProps ? LonghandCompoundPropsToInitialValue<ShorthandCompoundPropsToLonghandCompoundProps<P>> : never;
declare type ShorthandCompoundPropsToLonghandCompoundProps<P extends UnknownShorthandCompoundProps> = {
    [K in keyof P]: ShorthandPropToLonghandProp<P[K]>;
};

interface ISheetObject<Props extends UnknownShorthandCompoundProps = UnknownShorthandCompoundProps> {
    /**
     * All Objects will have `object.type === 'Theatre_SheetObject_PublicAPI'`
     */
    readonly type: 'Theatre_SheetObject_PublicAPI';
    /**
     * The current values of the props.
     *
     * @example
     * Usage:
     * ```ts
     * const obj = sheet.object("obj", {x: 0})
     * console.log(obj.value.x) // prints 0 or the current numeric value
     * ```
     *
     * Future: Notice that if the user actually changes the Props config for one of the
     * properties, then this type can't be guaranteed accurrate.
     *  * Right now the user can't change prop configs, but we'll probably enable that
     *    functionality later via (`object.overrideConfig()`). We need to educate the
     *    user that they can't rely on static types to know the type of object.value.
     */
    readonly value: PropsValue<Props>;
    /**
     * A Pointer to the props of the object.
     *
     * More documentation soon.
     */
    readonly props: Pointer<this['value']>;
    /**
     * The instance of Sheet the Object belongs to
     */
    readonly sheet: ISheet;
    /**
     * The Project the project belongs to
     */
    readonly project: IProject;
    /**
     * An object representing the address of the Object
     */
    readonly address: SheetObjectAddress;
    /**
     * Calls `fn` every time the value of the props change.
     *
     * @returns an Unsubscribe function
     *
     * @example
     * Usage:
     * ```ts
     * const obj = sheet.object("Box", {position: {x: 0, y: 0}})
     * const div = document.getElementById("box")
     *
     * const unsubscribe = obj.onValuesChange((newValues) => {
     *   div.style.left = newValues.position.x + 'px'
     *   div.style.top = newValues.position.y + 'px'
     * })
     *
     * // you can call unsubscribe() to stop listening to changes
     * ```
     */
    onValuesChange(fn: (values: this['value']) => void): VoidFn;
    /**
     * Sets the initial value of the object. This value overrides the default
     * values defined in the prop types, but would itself be overridden if the user
     * overrides it in the UI with a static or animated value.
     *
     * @example
     * Usage:
     * ```ts
     * const obj = sheet.object("obj", {position: {x: 0, y: 0}})
     *
     * obj.value // {position: {x: 0, y: 0}}
     *
     * // here, we only override position.x
     * obj.initialValue = {position: {x: 2}}
     *
     * obj.value // {position: {x: 2, y: 0}}
     * ```
     */
    set initialValue(value: DeepPartialOfSerializableValue<this['value']>);
}

declare type ProjectId = Nominal<'ProjectId'>;
declare type SheetId = Nominal<'SheetId'>;
declare type SheetInstanceId = Nominal<'SheetInstanceId'>;
declare type ObjectAddressKey = Nominal<'ObjectAddressKey'>;

declare type IPlaybackRange = [from: number, to: number];
declare type IPlaybackDirection = 'normal' | 'reverse' | 'alternate' | 'alternateReverse';

interface IAttachAudioArgs {
    /**
     * Either a URL to the audio file (eg "http://localhost:3000/audio.mp3") or an instance of AudioBuffer
     */
    source: string | AudioBuffer;
    /**
     * An optional AudioContext. If not provided, one will be created.
     */
    audioContext?: AudioContext;
    /**
     * An AudioNode to feed the audio into. Will use audioContext.destination if not provided.
     */
    destinationNode?: AudioNode;
}
interface ISequence {
    readonly type: 'Theatre_Sequence_PublicAPI';
    /**
     * Starts playback of a sequence.
     * Returns a promise that either resolves to true when the playback completes,
     * or resolves to false if playback gets interrupted (for example by calling sequence.pause())
     *
     * @returns A promise that resolves when the playback is finished, or rejects if interruped
     *
     * @example
     * Usage:
     * ```ts
     * // plays the sequence from the current position to sequence.length
     * sheet.sequence.play()
     *
     * // plays the sequence at 2.4x speed
     * sheet.sequence.play({rate: 2.4})
     *
     * // plays the sequence from second 1 to 4
     * sheet.sequence.play({range: [1, 4]})
     *
     * // plays the sequence 4 times
     * sheet.sequence.play({iterationCount: 4})
     *
     * // plays the sequence in reverse
     * sheet.sequence.play({direction: 'reverse'})
     *
     * // plays the sequence back and forth forever (until interrupted)
     * sheet.sequence.play({iterationCount: Infinity, direction: 'alternateReverse})
     *
     * // plays the sequence and logs "done" once playback is finished
     * sheet.sequence.play().then(() => console.log('done'))
     * ```
     */
    play(conf?: {
        /**
         * The number of times the animation must run. Must be an integer larger
         * than 0. Defaults to 1. Pick Infinity to run forever
         */
        iterationCount?: number;
        /**
         * Limits the range to be played. Default is [0, sequence.length]
         */
        range?: IPlaybackRange;
        /**
         * The playback rate. Defaults to 1. Choosing 2 would play the animation
         * at twice the speed.
         */
        rate?: number;
        /**
         * The direction of the playback. Similar to CSS's animation-direction
         */
        direction?: IPlaybackDirection;
    }): Promise<boolean>;
    /**
     * Pauses the currently playing animation
     */
    pause(): void;
    /**
     * The current position of the playhead.
     * In a time-based sequence, this represents the current time in seconds.
     */
    position: number;
    /**
     * A Pointer to the sequence's inner state.
     *
     * @remarks
     * As with any Pointer, you can use this with {@link onChange | onChange()} to listen to its value changes
     * or with {@link val | val()} to read its current value.
     *
     * @example Usage
     * ```ts
     * import {onChange, val} from '@theatre/core'
     *
     * // let's assume `sheet` is a sheet
     * const sequence = sheet.sequence
     *
     * onChange(sequence.pointer.length, (len) => {
     *   console.log("Length of the sequence changed to:", len)
     * })
     *
     * onChange(sequence.pointer.position, (position) => {
     *   console.log("Position of the sequence changed to:", position)
     * })
     *
     * onChange(sequence.pointer.playing, (playing) => {
     *   console.log(playing ? 'playing' : 'paused')
     * })
     *
     * // we can also read the current value of the pointer
     * console.log('current length is', val(sequence.pointer.length))
     * ```
     */
    pointer: Pointer<{
        playing: boolean;
        length: number;
        position: number;
    }>;
    /**
     * Attaches an audio source to the sequence. Playing the sequence automatically
     * plays the audio source and their times are kept in sync.
     *
     * @returns A promise that resolves once the audio source is loaded and decoded
     *
     * Learn more [here](https://docs.theatrejs.com/in-depth/#sequence-attachaudio).
     *
     * @example
     * Usage:
     * ```ts
     * // Loads and decodes audio from the URL and then attaches it to the sequence
     * await sheet.sequence.attachAudio({source: "http://localhost:3000/audio.mp3"})
     * sheet.sequence.play()
     *
     * // Providing your own AudioAPI Context, destination, etc
     * const audioContext: AudioContext = {...} // create an AudioContext using the Audio API
     * const audioBuffer: AudioBuffer = {...} // create an AudioBuffer
     * const destinationNode = audioContext.destination
     *
     * await sheet.sequence.attachAudio({source: audioBuffer, audioContext, destinationNode})
     * ```
     *
     * Note: It's better to provide the `audioContext` rather than allow Theatre.js to create it.
     * That's because some browsers [suspend the audioContext](https://developer.chrome.com/blog/autoplay/#webaudio)
     * unless it's initiated by a user gesture, like a click. If that happens, Theatre.js will
     * wait for a user gesture to resume the audioContext. But that's probably not an
     * optimal user experience. It is better to provide a button or some other UI element
     * to communicate to the user that they have to initiate the animation.
     *
     * @example
     * Example:
     * ```ts
     * // html: <button id="#start">start</button>
     * const button = document.getElementById('start')
     *
     * button.addEventListener('click', async () => {
     *   const audioContext = ...
     *   await sheet.sequence.attachAudio({audioContext, source: '...'})
     *   sheet.sequence.play()
     * })
     * ```
     */
    attachAudio(args: IAttachAudioArgs): Promise<{
        /**
         * An {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer | AudioBuffer}.
         * If `args.source` is a URL, then `decodedBuffer` would be the result
         * of {@link https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData | audioContext.decodeAudioData()}
         * on the audio file at that URL.
         *
         * If `args.source` is an `AudioBuffer`, then `decodedBuffer` would be equal to `args.source`
         */
        decodedBuffer: AudioBuffer;
        /**
         * The `AudioContext`. It is either equal to `source.audioContext` if it is provided, or
         * one that's created on the fly.
         */
        audioContext: AudioContext;
        /**
         * Equals to either `args.destinationNode`, or if none is provided, it equals `audioContext.destinationNode`.
         *
         * See `gainNode` for more info.
         */
        destinationNode: AudioNode;
        /**
         * This is an intermediate GainNode that Theatre.js feeds its audio to. It is by default
         * connected to destinationNode, but you can disconnect the gainNode and feed it to your own graph.
         *
         * @example
         * For example:
         * ```ts
         * const {gainNode, audioContext} = await sequence.attachAudio({source: '/audio.mp3'})
         * // disconnect the gainNode (at this point, the sequence's audio track won't be audible)
         * gainNode.disconnect()
         * // create our own gain node
         * const lowerGain = audioContext.createGain()
         * // lower its volume to 10%
         * lowerGain.gain.setValueAtTime(0.1, audioContext.currentTime)
         * // feed the sequence's audio to our lowered gainNode
         * gainNode.connect(lowerGain)
         * // feed the lowered gainNode to the audioContext's destination
         * lowerGain.connect(audioContext.destination)
         * // now audio will be audible, with 10% the volume
         * ```
         */
        gainNode: GainNode;
    }>;
}

interface ISheet {
    /**
     * All sheets have `sheet.type === 'Theatre_Sheet_PublicAPI'`
     */
    readonly type: 'Theatre_Sheet_PublicAPI';
    /**
     * The Project this Sheet belongs to
     */
    readonly project: IProject;
    /**
     * The address of the Sheet
     */
    readonly address: SheetAddress;
    /**
     * Creates a child object for the sheet
     *
     * **Docs: https://docs.theatrejs.com/in-depth/#objects**
     *
     * @param key - Each object is identified by a key, which is a non-empty string
     * @param props - The props of the object. See examples
     *
     * @returns An Object
     *
     * @example
     * Usage:
     * ```ts
     * // Create an object named "a unique key" with no props
     * const obj = sheet.object("a unique key", {})
     * obj.address.objectKey // "a unique key"
     *
     *
     * // Create an object with {x: 0}
     * const obj = sheet.object("obj", {x: 0})
     * obj.value.x // returns 0 or the current number that the user has set
     *
     * // Create an object with nested props
     * const obj = sheet.object("obj", {position: {x: 0, y: 0}})
     * obj.value.position // {x: 0, y: 0}
     * ```
     */
    object<Props extends UnknownShorthandCompoundProps>(key: string, props: Props): ISheetObject<Props>;
    /**
     * The Sequence of this Sheet
     */
    readonly sequence: ISequence;
}

/**
 * A project's config object (currently the only point of configuration is the project's state)
 */
declare type IProjectConfig = {
    /**
     * The state of the project, as [exported](https://docs.theatrejs.com/in-depth/#exporting) by the studio.
     */
    state?: $IntentionalAny;
};
/**
 * A Theatre.js project
 */
interface IProject {
    readonly type: 'Theatre_Project_PublicAPI';
    /**
     * If `@theatre/studio` is used, this promise would resolve when studio has loaded
     * the state of the project into memory.
     *
     * If `@theatre/studio` is not used, this promise is already resolved.
     */
    readonly ready: Promise<void>;
    /**
     * Shows whether the project is ready to be used.
     * Better to use {@link IProject.ready}, which is a promise that would
     * resolve when the project is ready.
     */
    readonly isReady: boolean;
    /**
     * The project's address
     */
    readonly address: ProjectAddress;
    /**
     * Creates a Sheet under the project
     * @param sheetId - Sheets are identified by their `sheetId`, which must be a string longer than 3 characters
     * @param instanceId - Optionally provide an `instanceId` if you want to create multiple instances of the same Sheet
     * @returns The newly created Sheet
     *
     * **Docs: https://docs.theatrejs.com/in-depth/#sheets**
     */
    sheet(sheetId: string, instanceId?: string): ISheet;
}

/**
 * Returns a project of the given id, or creates one if it doesn't already exist.
 *
 * @remarks
 * If \@theatre/studio is also loaded, then the state of the project will be managed by the studio.
 *
 * [Learn more about exporting](https://docs.theatrejs.com/in-depth/#exporting)
 *
 * @example
 * Usage:
 * ```ts
 * import {getProject} from '@theatre/core'
 * const config = {} // the config can be empty when starting a new project
 * const project = getProject("a-unique-id", config)
 * ```
 *
 * @example
 * Usage with an explicit state:
 * ```ts
 * import {getProject} from '@theatre/core'
 * import state from './saved-state.json'
 * const config = {state} // here the config contains our saved state
 * const project = getProject("a-unique-id", config)
 * ```
 */
declare function getProject(id: string, config?: IProjectConfig): IProject;
/**
 * Calls `callback` every time the pointed value of `pointer` changes.
 *
 * @param pointer - A Pointer (like `object.props.x`)
 * @param callback - The callback is called every time the value of pointer changes
 * @returns An unsubscribe function
 *
 * @example
 * Usage:
 * ```ts
 * import {getProject, onChange} from '@theatre/core'
 *
 * const obj = getProject("A project").sheet("Scene").object("Box", {position: {x: 0}})
 *
 * const usubscribe = onChange(obj.props.position.x, (x) => {
 *   console.log('position.x changed to:', x)
 * })
 *
 * setTimeout(usubscribe, 10000) // stop listening to changes after 10 seconds
 * ```
 */
declare function onChange<P extends PointerType<$IntentionalAny>>(pointer: P, callback: (value: P extends PointerType<infer T> ? T : unknown) => void): VoidFn;
/**
 * Takes a Pointer and returns the value it points to.
 *
 * @param pointer - A pointer (like `object.props.x`)
 * @returns The value the pointer points to
 *
 * @example
 *
 * Usage
 * ```ts
 * import {val, getProject} from '@theatre/core'
 *
 * const obj = getProject("A project").sheet("Scene").object("Box", {position: {x: 0}})
 *
 * console.log(val(obj.props.position.x)) // logs the value of obj.props.x
 * ```
 */
declare function val<T>(pointer: PointerType<T>): T;

export { IProject, IProjectConfig, ISequence, ISheet, ISheetObject, UnknownShorthandCompoundProps, getProject, onChange, index_d as types, val };
