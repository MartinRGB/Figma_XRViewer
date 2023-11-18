var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// ../../node_modules/zustand/vanilla.js
var require_vanilla = __commonJS({
  "../../node_modules/zustand/vanilla.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function create2(createState) {
      var state;
      var listeners = new Set();
      var setState = function setState2(partial, replace) {
        var nextState = typeof partial === "function" ? partial(state) : partial;
        if (nextState !== state) {
          var _previousState = state;
          state = replace ? nextState : Object.assign({}, state, nextState);
          listeners.forEach(function(listener) {
            return listener(state, _previousState);
          });
        }
      };
      var getState = function getState2() {
        return state;
      };
      var subscribeWithSelector = function subscribeWithSelector2(listener, selector, equalityFn) {
        if (selector === void 0) {
          selector = getState;
        }
        if (equalityFn === void 0) {
          equalityFn = Object.is;
        }
        var currentSlice = selector(state);
        function listenerToAdd() {
          var nextSlice = selector(state);
          if (!equalityFn(currentSlice, nextSlice)) {
            var _previousSlice = currentSlice;
            listener(currentSlice = nextSlice, _previousSlice);
          }
        }
        listeners.add(listenerToAdd);
        return function() {
          return listeners.delete(listenerToAdd);
        };
      };
      var subscribe = function subscribe2(listener, selector, equalityFn) {
        if (selector || equalityFn) {
          return subscribeWithSelector(listener, selector, equalityFn);
        }
        listeners.add(listener);
        return function() {
          return listeners.delete(listener);
        };
      };
      var destroy = function destroy2() {
        return listeners.clear();
      };
      var api = {
        setState,
        getState,
        subscribe,
        destroy
      };
      state = createState(setState, getState, api);
      return api;
    }
    exports.default = create2;
  }
});

// src/main/editable.tsx
import { useMemo, useState } from "react";
import React2, { forwardRef, useEffect as useEffect2, useLayoutEffect as useLayoutEffect2, useRef } from "react";

// src/main/store.ts
var import_vanilla = __toModule(require_vanilla());
import { Group } from "three";
var allRegisteredObjects = new WeakSet();
var config = (set, get) => {
  return {
    sheet: null,
    editorObject: null,
    scene: null,
    gl: null,
    helpersRoot: new Group(),
    editables: {},
    canvasName: "default",
    sceneSnapshot: null,
    editablesSnapshot: null,
    initialEditorCamera: {},
    init: (scene, gl) => {
      set({
        scene,
        gl
      });
      get().createSnapshot();
    },
    addEditable: (theatreKey, editable2) => {
      set((state) => ({
        editables: __spreadProps(__spreadValues({}, state.editables), {
          [theatreKey]: editable2
        })
      }));
    },
    removeEditable: (theatreKey) => {
      set((state) => {
        const editables = __spreadValues({}, state.editables);
        delete editables[theatreKey];
        return {
          editables
        };
      });
    },
    createSnapshot: () => {
      set((state) => {
        var _a, _b;
        return {
          sceneSnapshot: (_b = (_a = state.scene) == null ? void 0 : _a.clone()) != null ? _b : null,
          editablesSnapshot: state.editables
        };
      });
    },
    setSnapshotProxyObject: (proxyObject, theatreKey) => {
      set((state) => ({
        editablesSnapshot: __spreadProps(__spreadValues({}, state.editablesSnapshot), {
          [theatreKey]: __spreadProps(__spreadValues({}, state.editablesSnapshot[theatreKey]), {
            proxyObject
          })
        })
      }));
    }
  };
};
var editorStore = (0, import_vanilla.default)(config);
var bindToCanvas = ({ gl, scene }) => {
  const init = editorStore.getState().init;
  init(scene, gl);
};

// ../../node_modules/react-merge-refs/dist/react-merge-refs.esm.js
function mergeRefs(refs) {
  return function(value) {
    refs.forEach(function(ref) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}
var react_merge_refs_esm_default = mergeRefs;

// src/main/useInvalidate.ts
import { useThree } from "@react-three/fiber";
function useInvalidate() {
  return useThree(({ invalidate: invalidate2 }) => invalidate2);
}

// src/main/SheetProvider.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect
} from "react";
import { useThree as useThree2 } from "@react-three/fiber";
var ctx = createContext(void 0);
var useWrapperContext = () => {
  const val = useContext(ctx);
  if (!val) {
    throw new Error(`No sheet found. You need to add a <SheetProvider> higher up in the tree. https://docs.theatrejs.com/r3f.html#sheetprovider`);
  }
  return val;
};
var useCurrentSheet = () => {
  return useWrapperContext().sheet;
};
var SheetProvider = ({ sheet, children }) => {
  const { scene, gl } = useThree2((s) => ({ scene: s.scene, gl: s.gl }));
  useEffect(() => {
    if (!sheet || sheet.type !== "Theatre_Sheet_PublicAPI") {
      throw new Error(`sheet in <Wrapper sheet={sheet}> has an invalid value`);
    }
  }, [sheet]);
  useLayoutEffect(() => {
    bindToCanvas({ gl, scene });
  }, [scene, gl]);
  return /* @__PURE__ */ React.createElement(ctx.Provider, {
    value: { sheet }
  }, children);
};
var SheetProvider_default = SheetProvider;

// src/main/editableFactoryConfigUtils.ts
import { notify } from "@theatre/core";
import { types } from "@theatre/core";
import { sRGBEncoding, TextureLoader, VideoTexture } from "three";
import { Color } from "three";
import { invalidate } from "@react-three/fiber";
function isNumber(value) {
  return typeof value === "number" && isFinite(value);
}
function isVectorObject(value) {
  return ["x", "y", "z"].every((axis) => isNumber(value[axis]));
}
var createVector = (components) => {
  return components ? { x: components[0], y: components[1], z: components[2] } : {
    x: 0,
    y: 0,
    z: 0
  };
};
var createVectorPropConfig = (key, defaultValue = createVector(), { nudgeMultiplier = 0.01 } = {}) => ({
  parse: (props) => {
    const propValue = props[key];
    const vector = !propValue ? defaultValue : Array.isArray(propValue) ? createVector(propValue) : isNumber(propValue) ? {
      x: propValue,
      y: propValue,
      z: propValue
    } : isVectorObject(propValue) ? {
      x: propValue.x,
      y: propValue.y,
      z: propValue.z
    } : (notify.warning(`Invalid value for vector prop "${key}"`, `Couldn't make sense of \`${key}={${JSON.stringify(propValue)}}\`, falling back to \`${key}={${JSON.stringify([
      defaultValue.x,
      defaultValue.y,
      defaultValue.z
    ])}}\`.

To fix this, make sure the prop is set to either a number, an array of numbers, or a three.js Vector3 object.`), defaultValue);
    ["x", "y", "z"].forEach((axis) => {
      if (props[`${key}-${axis}`])
        vector[axis] = props[`${key}-${axis}`];
    });
    return vector;
  },
  apply: (value, object) => {
    object[key].set(value.x, value.y, value.z);
  },
  type: {
    [key]: {
      x: types.number(defaultValue.x, { nudgeMultiplier }),
      y: types.number(defaultValue.y, { nudgeMultiplier }),
      z: types.number(defaultValue.z, { nudgeMultiplier })
    }
  }
});
var createNumberPropConfig = (key, defaultValue = 0, { nudgeMultiplier = 0.01, range = [0, 1] } = {}) => ({
  parse: (props) => {
    var _a;
    return (_a = props[key]) != null ? _a : defaultValue;
  },
  apply: (value, object) => {
    object[key] = value;
  },
  type: {
    [key]: types.number(defaultValue, { nudgeMultiplier })
  }
});
var createColorPropConfig = (key, defaultValue = new Color(0, 0, 0)) => ({
  parse: (props) => {
    var _a;
    return __spreadProps(__spreadValues({}, (_a = props[key]) != null ? _a : defaultValue), { a: 1 });
  },
  apply: (value, object) => {
    object[key].setRGB(value.r, value.g, value.b);
  },
  type: {
    [key]: types.rgba(__spreadProps(__spreadValues({}, defaultValue), { a: 1 }))
  }
});
var createNumberRangePropConfig = (key, defaultValue = 0, { nudgeMultiplier = 0.01 } = {}, range = [0, 1]) => ({
  parse: (props) => {
    var _a;
    return (_a = props[key]) != null ? _a : defaultValue;
  },
  apply: (value, object) => {
    object[key] = value;
  },
  type: {
    [key]: types.number(defaultValue, { nudgeMultiplier, range })
  }
});
var NumberLiteral = class {
  constructor(key, object) {
    __publicField(this, "key");
    __publicField(this, "object");
    this.key = key;
    this.object = object;
  }
};
var createNumberLietralPropConfig = (key, defaultValue = new NumberLiteral(0, { 0: "Red", 1: "Green", 3: "Blue" })) => ({
  parse: (props) => {
    var _a;
    return (_a = props[key]) != null ? _a : defaultValue.key;
  },
  apply: (value, object) => {
    object[key] = Number(value);
  },
  type: {
    [key]: types.numberLiteral(defaultValue.key, defaultValue.object)
  }
});
var createBooleanPropConfig = (key, defaultValue = false) => ({
  parse: (props) => {
    var _a;
    return (_a = props[key]) != null ? _a : defaultValue;
  },
  apply: (value, object) => {
    object[key] = value;
  },
  type: {
    [key]: types.boolean(defaultValue)
  }
});
var FileSrcObject = class {
  constructor(src, fileName) {
    __publicField(this, "src");
    __publicField(this, "fileName");
    this.src = src;
    this.fileName = fileName;
  }
};
var createFileSrcPropConfig = (key, defaultValue = new FileSrcObject("", "")) => ({
  parse: (props) => {
    return props[key];
  },
  apply: (value, object) => {
    const imgExt = ["jpg", "png", "jpeg"];
    const videoExt = ["mp4", "web"];
    const gltfExt = ["gltf", "glb"];
    if (value.src && value.src != "") {
      if (value.fileName) {
        const fileExt = value.fileName.split(".")[value.fileName.split(".").length - 1];
        if (imgExt.includes(fileExt)) {
          new TextureLoader().load(value.src, (tex) => {
            tex.encoding = sRGBEncoding;
            object.needsUpdate = true;
            object[`${key.split("Src")[0]}`] = tex;
            tex.dispose();
            invalidate();
          });
        }
        if (videoExt.includes(fileExt)) {
          const videoE = document.createElement("video");
          videoE.src = value.src;
          videoE.crossOrigin = "Anonymous";
          videoE.loop = true;
          videoE.muted = true;
          videoE.load();
          videoE.play();
          const vidTex = new VideoTexture(videoE);
          vidTex.encoding = sRGBEncoding;
          object.needsUpdate = true;
          object[key.split("Src")[0]] = vidTex;
          vidTex.dispose();
          invalidate();
        }
      }
    } else {
      object[key.split("Src")[0]] = null;
      invalidate();
    }
  },
  type: {
    [key]: types.filesrc(defaultValue)
  }
});
var extendObjectProps = (objectConfig, extension) => __spreadProps(__spreadValues({}, objectConfig), {
  props: __spreadValues(__spreadValues({}, objectConfig.props), extension)
});

// src/main/defaultEditableFactoryConfig.ts
import {
  BoxHelper,
  CameraHelper,
  Color as Color2,
  DirectionalLightHelper,
  PointLightHelper,
  SpotLightHelper
} from "three";
import "@theatre/core";
var baseObjectConfig = {
  props: {
    position: createVectorPropConfig("position"),
    rotation: createVectorPropConfig("rotation"),
    scale: createVectorPropConfig("scale", createVector([1, 1, 1]))
  },
  useTransformControls: true,
  icon: "cube",
  createHelper: (object) => new BoxHelper(object, selectionColor)
};
var baseLightConfig = __spreadProps(__spreadValues({}, extendObjectProps(baseObjectConfig, {
  intensity: createNumberPropConfig("intensity", 1),
  distance: createNumberPropConfig("distance"),
  decay: createNumberPropConfig("decay"),
  color: createColorPropConfig("color", new Color2("white"))
})), {
  dimensionless: true
});
var baseCameraConfig = __spreadProps(__spreadValues({}, extendObjectProps(baseObjectConfig, {
  near: createNumberPropConfig("near", 0.1, { nudgeMultiplier: 0.1 }),
  far: createNumberPropConfig("far", 2e3, { nudgeMultiplier: 0.1 })
})), {
  updateObject: (camera) => {
    camera.updateProjectionMatrix();
  },
  icon: "camera",
  dimensionless: true,
  createHelper: (camera) => new CameraHelper(camera)
});
var selectionColor = "#40AAA4";
var defaultEditableFactoryConfig = {
  group: __spreadProps(__spreadValues({}, baseObjectConfig), {
    icon: "collection",
    createHelper: (object) => new BoxHelper(object, selectionColor)
  }),
  mesh: __spreadProps(__spreadValues({}, baseObjectConfig), {
    icon: "cube",
    createHelper: (object) => new BoxHelper(object, selectionColor)
  }),
  meshStandardMaterial: {
    props: {
      color: createColorPropConfig("color", new Color2("white")),
      transparent: createBooleanPropConfig("transparent", true),
      opacity: createNumberRangePropConfig("opacity", 1, { nudgeMultiplier: 0.1 }, [0, 1]),
      side: createNumberLietralPropConfig("side", new NumberLiteral("2", { "0": "FrontSide", "1": "BackSide", "2": "DoubleSide", "3": "TwoPassDoubleSide" })),
      wireframe: createBooleanPropConfig("wireframe", false),
      fog: createBooleanPropConfig("fog", false),
      flatShading: createBooleanPropConfig("flatShading", false),
      mapSrc: createFileSrcPropConfig("mapSrc"),
      alphaMapSrc: createFileSrcPropConfig("alphaMapSrc"),
      aoMapSrc: createFileSrcPropConfig("aoMapSrc"),
      aoMapIntensity: createNumberRangePropConfig("aoMapIntensity", 1, { nudgeMultiplier: 0.1 }, [0, 1]),
      bumpMapSrc: createFileSrcPropConfig("bumpMapSrc"),
      bumpScale: createNumberRangePropConfig("bumpScale", 1, { nudgeMultiplier: 0.1 }, [0, 1]),
      displacementMapSrc: createFileSrcPropConfig("displacementMapSrc"),
      displacementScale: createNumberRangePropConfig("displacementScale", 1, { nudgeMultiplier: 0.1 }, [0, 1]),
      displacementBias: createNumberRangePropConfig("displacementBias", 0, { nudgeMultiplier: 0.1 }, [0, 1]),
      emissive: createColorPropConfig("emissive", new Color2("black")),
      emissiveMapSrc: createFileSrcPropConfig("emissiveMapSrc"),
      emissiveIntensity: createNumberRangePropConfig("emissiveIntensity", 0, { nudgeMultiplier: 0.1 }, [0, 1]),
      envMapSrc: createFileSrcPropConfig("envMapSrc"),
      envMapIntensity: createNumberRangePropConfig("envMapIntensity", 0, { nudgeMultiplier: 0.1 }, [0, 1]),
      lightMapSrc: createFileSrcPropConfig("lightMapSrc"),
      lightMapIntensity: createNumberRangePropConfig("lightMapIntensity", 1, { nudgeMultiplier: 0.1 }, [0, 1]),
      metalnessMapSrc: createFileSrcPropConfig("metalnessMapSrc"),
      metalness: createNumberRangePropConfig("metalness", 0, { nudgeMultiplier: 0.1 }, [0, 1]),
      normalMapSrc: createFileSrcPropConfig("normalMapSrc"),
      roughnessMapSrc: createFileSrcPropConfig("roughnessMapSrc"),
      roughness: createNumberRangePropConfig("roughness", 1, { nudgeMultiplier: 0.1 }, [0, 1])
    },
    test: {
      roughness: createNumberRangePropConfig("roughness", 1, { nudgeMultiplier: 0.1 }, [0, 1])
    },
    icon: "cube",
    dimensionless: true,
    useTransformControls: false
  },
  spotLight: __spreadProps(__spreadValues({}, extendObjectProps(baseLightConfig, {
    angle: createNumberPropConfig("angle", 0, { nudgeMultiplier: 1e-3 }),
    penumbra: createNumberPropConfig("penumbra", 0, { nudgeMultiplier: 1e-3 })
  })), {
    icon: "spotLight",
    createHelper: (light) => new SpotLightHelper(light, selectionColor)
  }),
  directionalLight: __spreadProps(__spreadValues({}, extendObjectProps(baseObjectConfig, {
    intensity: createNumberPropConfig("intensity", 1),
    color: createColorPropConfig("color", new Color2("white"))
  })), {
    icon: "sun",
    dimensionless: true,
    createHelper: (light) => new DirectionalLightHelper(light, 1, selectionColor)
  }),
  pointLight: __spreadProps(__spreadValues({}, baseLightConfig), {
    icon: "lightBulb",
    createHelper: (light) => new PointLightHelper(light, 1, selectionColor)
  }),
  ambientLight: {
    props: {
      intensity: createNumberPropConfig("intensity", 1),
      color: createColorPropConfig("color", new Color2("white"))
    },
    useTransformControls: false,
    icon: "lightBulb"
  },
  hemisphereLight: {
    props: {
      intensity: createNumberPropConfig("intensity", 1),
      color: createColorPropConfig("color", new Color2("white")),
      groundColor: createColorPropConfig("groundColor", new Color2("white"))
    },
    useTransformControls: false,
    icon: "lightBulb"
  },
  perspectiveCamera: extendObjectProps(baseCameraConfig, {
    fov: createNumberPropConfig("fov", 50, { nudgeMultiplier: 0.1 }),
    zoom: createNumberPropConfig("zoom", 1)
  }),
  orthographicCamera: baseCameraConfig,
  points: baseObjectConfig,
  line: baseObjectConfig,
  lineLoop: baseObjectConfig,
  lineSegments: baseObjectConfig,
  fog: {
    props: {
      color: createColorPropConfig("color"),
      near: createNumberPropConfig("near", 1, { nudgeMultiplier: 0.1 }),
      far: createNumberPropConfig("far", 1e3, { nudgeMultiplier: 0.1 })
    },
    useTransformControls: false,
    icon: "cloud"
  }
};
var defaultEditableFactoryConfig_default = defaultEditableFactoryConfig;

// src/main/utils.ts
var refreshSnapshot = editorStore.getState().createSnapshot;
var makeStoreKey = (sheetObjectAddress) => `${sheetObjectAddress.sheetId}:${sheetObjectAddress.sheetInstanceId}:${sheetObjectAddress.objectKey}`;

// src/main/editable.tsx
import { notify as notify2 } from "@theatre/core";
var createEditable = (config2) => {
  const editable2 = (Component, type) => {
    if (Component !== "primitive" && !type) {
      throw new Error(`You must provide the type of the component you're creating an editable for. For example: editable(MyComponent, 'mesh').`);
    }
    return forwardRef((_a, ref) => {
      var _b = _a, {
        theatreKey,
        visible,
        editableType,
        additionalProps,
        objRef
      } = _b, props = __objRest(_b, [
        "theatreKey",
        "visible",
        "editableType",
        "additionalProps",
        "objRef"
      ]);
      if (typeof theatreKey !== "string") {
        throw new Error(`No valid theatreKey was provided to the editable component. theatreKey must be a string. Received: ${theatreKey}`);
      }
      if (Component === "primitive" && !editableType) {
        throw new Error(`When using the primitive component, you must provide the editableType prop. Received: ${editableType}`);
      }
      const actualType = type != null ? type : editableType;
      const objectRef = useRef();
      const sheet = useCurrentSheet();
      const [sheetObject, setSheetObject] = useState(void 0);
      const storeKey = useMemo(() => makeStoreKey(__spreadProps(__spreadValues({}, sheet.address), {
        objectKey: theatreKey
      })), [sheet, theatreKey]);
      const invalidate2 = useInvalidate();
      useEffect2(() => {
        if (Component === "perspectiveCamera" || Component === "orthographicCamera") {
          const dreiComponent = Component.charAt(0).toUpperCase() + Component.slice(1);
          notify2.warning(`Possibly incorrect use of <e.${Component} />`, `You seem to have declared the camera "${theatreKey}" simply as \`<e.${Component} ... />\`. This alone won't make r3f use it for rendering.

The easiest way to create a custom animatable \`${dreiComponent}\` is to import it from \`@react-three/drei\`, and make it editable.
\`\`\`
import {${dreiComponent}} from '@react-three/drei'

const EditableCamera =
  editable(${dreiComponent}, '${Component}')
\`\`\`
Then you can use it in your JSX like any other editable component. Note the makeDefault prop exposed by drei, which makes r3f use it for rendering.
\`\`\`
<EditableCamera
  theatreKey="${theatreKey}"
  makeDefault
>
\`\`\`
`);
        }
      }, [Component, theatreKey]);
      useLayoutEffect2(() => {
        if (!sheet)
          return;
        if (sheetObject) {
          sheet.object(theatreKey, Object.assign(__spreadValues({}, additionalProps), ...Object.values(config2[actualType].props).map((value) => value.type)), { reconfigure: true });
          return;
        } else {
          const sheetObject2 = sheet.object(theatreKey, Object.assign(__spreadValues({}, additionalProps), ...Object.values(config2[actualType].props).map((value) => value.type)));
          allRegisteredObjects.add(sheetObject2);
          setSheetObject(sheetObject2);
          if (objRef)
            typeof objRef === "function" ? objRef(sheetObject2) : objRef.current = sheetObject2;
          editorStore.getState().addEditable(storeKey, {
            type: actualType,
            sheetObject: sheetObject2,
            visibleOnlyInEditor: visible === "editor",
            objectConfig: config2[actualType]
          });
        }
      }, [sheet, storeKey, additionalProps]);
      useLayoutEffect2(() => {
        if (!sheetObject)
          return;
        sheetObject.initialValue = Object.fromEntries(Object.entries(config2[actualType].props).map(([key, value]) => [key, value.parse(props)]));
      }, [
        sheetObject,
        ...Object.keys(config2[actualType].props).map((key) => props[key])
      ]);
      useLayoutEffect2(() => {
        if (!sheetObject)
          return;
        const object = objectRef.current;
        const setFromTheatre = (newValues) => {
          var _a2, _b2;
          Object.entries(config2[actualType].props).forEach(([key, value]) => {
            value.apply(newValues[key], object);
          });
          (_b2 = (_a2 = config2[actualType]).updateObject) == null ? void 0 : _b2.call(_a2, object);
          invalidate2();
        };
        setFromTheatre(sheetObject.value);
        const untap = sheetObject.onValuesChange(setFromTheatre);
        return () => {
          untap();
          sheetObject.sheet.detachObject(theatreKey);
          allRegisteredObjects.delete(sheetObject);
          editorStore.getState().removeEditable(storeKey);
        };
      }, [sheetObject]);
      return /* @__PURE__ */ React2.createElement(Component, __spreadProps(__spreadValues({
        ref: react_merge_refs_esm_default([objectRef, ref])
      }, props), {
        visible: visible !== "editor" && visible,
        userData: {
          __editable: true,
          __storeKey: storeKey
        }
      }));
    });
  };
  const extensions = __spreadProps(__spreadValues({}, Object.fromEntries(Object.keys(config2).map((key) => [
    key,
    editable2(key, key)
  ]))), {
    primitive: editable2("primitive", null)
  });
  return Object.assign(editable2, extensions);
};
var editable = createEditable(defaultEditableFactoryConfig_default);
var editable_default = editable;

// src/main/RefreshSnapshot.tsx
import React3, { useEffect as useEffect3 } from "react";
var RefreshSnapshot = () => {
  useEffect3(() => {
    setTimeout(() => {
      refreshSnapshot();
    });
  }, []);
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null);
};
var RefreshSnapshot_default = RefreshSnapshot;

// src/drei/PerspectiveCamera.tsx
import {
  createElement,
  forwardRef as forwardRef2,
  useLayoutEffect as useLayoutEffect3,
  useRef as useRef2
} from "react";
import { useFrame, useThree as useThree3 } from "@react-three/fiber";
import { Vector3 } from "three";
var PerspectiveCamera = editable_default(forwardRef2((_a, ref) => {
  var _b = _a, { makeDefault, lookAt } = _b, props = __objRest(_b, ["makeDefault", "lookAt"]);
  const set = useThree3(({ set: set2 }) => set2);
  const camera = useThree3(({ camera: camera2 }) => camera2);
  const size = useThree3(({ size: size2 }) => size2);
  const cameraRef = useRef2(null);
  useLayoutEffect3(() => {
    if (!props.manual) {
      cameraRef.current.aspect = size.width / size.height;
    }
  }, [size, props]);
  useLayoutEffect3(() => {
    cameraRef.current.updateProjectionMatrix();
  });
  useLayoutEffect3(() => {
    if (makeDefault) {
      const oldCam = camera;
      set(() => ({ camera: cameraRef.current }));
      return () => set(() => ({ camera: oldCam }));
    }
  }, [cameraRef, makeDefault, set]);
  useFrame(() => {
    var _a2;
    if (lookAt && cameraRef.current) {
      cameraRef.current.lookAt(Array.isArray(lookAt) ? new Vector3(...lookAt) : lookAt.current ? lookAt.current.position : lookAt);
      const snapshot = editorStore.getState().editablesSnapshot;
      if (snapshot) {
        (_a2 = snapshot[cameraRef.current.userData.__storeKey].proxyObject) == null ? void 0 : _a2.rotation.copy(cameraRef.current.rotation);
      }
    }
  });
  return /* @__PURE__ */ createElement("perspectiveCamera", __spreadValues({
    ref: react_merge_refs_esm_default([cameraRef, ref])
  }, props));
}), "perspectiveCamera");

// src/drei/OrthographicCamera.tsx
import {
  createElement as createElement2,
  forwardRef as forwardRef3,
  useLayoutEffect as useLayoutEffect4,
  useRef as useRef3
} from "react";
import { useFrame as useFrame2, useThree as useThree4 } from "@react-three/fiber";
import { Vector3 as Vector32 } from "three";
var OrthographicCamera = editable_default(forwardRef3((_a, ref) => {
  var _b = _a, { makeDefault, lookAt } = _b, props = __objRest(_b, ["makeDefault", "lookAt"]);
  const set = useThree4(({ set: set2 }) => set2);
  const camera = useThree4(({ camera: camera2 }) => camera2);
  const size = useThree4(({ size: size2 }) => size2);
  const cameraRef = useRef3(null);
  useLayoutEffect4(() => {
    if (!props.manual) {
      cameraRef.current.updateProjectionMatrix();
    }
  }, [size, props]);
  useLayoutEffect4(() => {
    cameraRef.current.updateProjectionMatrix();
  });
  useLayoutEffect4(() => {
    if (makeDefault) {
      const oldCam = camera;
      set(() => ({ camera: cameraRef.current }));
      return () => set(() => ({ camera: oldCam }));
    }
  }, [cameraRef, makeDefault, set]);
  useFrame2(() => {
    var _a2;
    if (lookAt && cameraRef.current) {
      cameraRef.current.lookAt(Array.isArray(lookAt) ? new Vector32(...lookAt) : lookAt.current ? lookAt.current.position : lookAt);
      const snapshot = editorStore.getState().editablesSnapshot;
      if (snapshot) {
        (_a2 = snapshot[cameraRef.current.userData.__storeKey].proxyObject) == null ? void 0 : _a2.rotation.copy(cameraRef.current.rotation);
      }
    }
  });
  return /* @__PURE__ */ createElement2("orthographicCamera", __spreadValues({
    left: size.width / -2,
    right: size.width / 2,
    top: size.height / 2,
    bottom: size.height / -2,
    ref: react_merge_refs_esm_default([cameraRef, ref])
  }, props));
}), "orthographicCamera");
export {
  OrthographicCamera,
  PerspectiveCamera,
  RefreshSnapshot_default as RefreshSnapshot,
  SheetProvider_default as SheetProvider,
  editorStore as ____private_editorStore,
  allRegisteredObjects as __private_allRegisteredObjects,
  makeStoreKey as __private_makeStoreKey,
  editable_default as editable,
  refreshSnapshot,
  useCurrentSheet
};
//# sourceMappingURL=index.esm.js.map
