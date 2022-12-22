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
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// ../node_modules/timing-function/lib/UnitBezier.js
var require_UnitBezier = __commonJS({
  "../node_modules/timing-function/lib/UnitBezier.js"(exports2, module2) {
    var UnitBezier2;
    module2.exports = UnitBezier2 = function() {
      function UnitBezier3(p1x, p1y, p2x, p2y) {
        this.set(p1x, p1y, p2x, p2y);
      }
      UnitBezier3.prototype.set = function(p1x, p1y, p2x, p2y) {
        this._cx = 3 * p1x;
        this._bx = 3 * (p2x - p1x) - this._cx;
        this._ax = 1 - this._cx - this._bx;
        this._cy = 3 * p1y;
        this._by = 3 * (p2y - p1y) - this._cy;
        this._ay = 1 - this._cy - this._by;
      };
      UnitBezier3.epsilon = 1e-6;
      UnitBezier3.prototype._sampleCurveX = function(t3) {
        return ((this._ax * t3 + this._bx) * t3 + this._cx) * t3;
      };
      UnitBezier3.prototype._sampleCurveY = function(t3) {
        return ((this._ay * t3 + this._by) * t3 + this._cy) * t3;
      };
      UnitBezier3.prototype._sampleCurveDerivativeX = function(t3) {
        return (3 * this._ax * t3 + 2 * this._bx) * t3 + this._cx;
      };
      UnitBezier3.prototype._solveCurveX = function(x2, epsilon) {
        var d2, i2, t0, t1, t22, x22;
        t0 = void 0;
        t1 = void 0;
        t22 = void 0;
        x22 = void 0;
        d2 = void 0;
        i2 = void 0;
        t22 = x2;
        i2 = 0;
        while (i2 < 8) {
          x22 = this._sampleCurveX(t22) - x2;
          if (Math.abs(x22) < epsilon) {
            return t22;
          }
          d2 = this._sampleCurveDerivativeX(t22);
          if (Math.abs(d2) < epsilon) {
            break;
          }
          t22 = t22 - x22 / d2;
          i2++;
        }
        t0 = 0;
        t1 = 1;
        t22 = x2;
        if (t22 < t0) {
          return t0;
        }
        if (t22 > t1) {
          return t1;
        }
        while (t0 < t1) {
          x22 = this._sampleCurveX(t22);
          if (Math.abs(x22 - x2) < epsilon) {
            return t22;
          }
          if (x2 > x22) {
            t0 = t22;
          } else {
            t1 = t22;
          }
          t22 = (t1 - t0) * 0.5 + t0;
        }
        return t22;
      };
      UnitBezier3.prototype.solve = function(x2, epsilon) {
        return this._sampleCurveY(this._solveCurveX(x2, epsilon));
      };
      UnitBezier3.prototype.solveSimple = function(x2) {
        return this._sampleCurveY(this._solveCurveX(x2, 1e-6));
      };
      return UnitBezier3;
    }();
  }
});

// ../node_modules/levenshtein-edit-distance/index.js
var require_levenshtein_edit_distance = __commonJS({
  "../node_modules/levenshtein-edit-distance/index.js"(exports2, module2) {
    var cache2;
    var codes;
    cache2 = [];
    codes = [];
    function levenshtein(value, other, insensitive) {
      var length, lengthOther, code, result, distance, distanceOther, index, indexOther;
      if (value === other) {
        return 0;
      }
      length = value.length;
      lengthOther = other.length;
      if (length === 0) {
        return lengthOther;
      }
      if (lengthOther === 0) {
        return length;
      }
      if (insensitive) {
        value = value.toLowerCase();
        other = other.toLowerCase();
      }
      index = 0;
      while (index < length) {
        codes[index] = value.charCodeAt(index);
        cache2[index] = ++index;
      }
      indexOther = 0;
      while (indexOther < lengthOther) {
        code = other.charCodeAt(indexOther);
        result = distance = indexOther++;
        index = -1;
        while (++index < length) {
          distanceOther = code === codes[index] ? distance : distance + 1;
          distance = cache2[index];
          cache2[index] = result = distance > result ? distanceOther > result ? result + 1 : distanceOther : distanceOther > distance ? distance + 1 : distanceOther;
        }
      }
      return result;
    }
    module2.exports = levenshtein;
  }
});

// ../node_modules/propose/propose.js
var require_propose = __commonJS({
  "../node_modules/propose/propose.js"(exports2, module2) {
    var levenshtein = require_levenshtein_edit_distance();
    function propose2() {
      var ratio;
      var distance;
      var proposed;
      var threshold;
      var ignoreCase;
      var max_ratio = 0;
      var word = arguments[0];
      var dictionary = arguments[1];
      var len = dictionary.length;
      var options = arguments[2];
      if (options) {
        threshold = options.threshold;
        ignoreCase = options.ignoreCase;
      }
      if (threshold === void 0)
        threshold = 0;
      for (var i2 = 0; i2 < len; ++i2) {
        if (ignoreCase)
          distance = levenshtein(word, dictionary[i2], true);
        else
          distance = levenshtein(word, dictionary[i2]);
        if (distance > word.length)
          ratio = 1 - distance / dictionary[i2].length;
        else
          ratio = 1 - distance / word.length;
        if (ratio > max_ratio) {
          max_ratio = ratio;
          proposed = dictionary[i2];
        }
      }
      if (max_ratio >= threshold)
        return proposed;
      return null;
    }
    module2.exports = propose2;
  }
});

// ../node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "../node_modules/fast-deep-equal/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function equal(a2, b2) {
      if (a2 === b2)
        return true;
      if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
        if (a2.constructor !== b2.constructor)
          return false;
        var length, i2, keys2;
        if (Array.isArray(a2)) {
          length = a2.length;
          if (length != b2.length)
            return false;
          for (i2 = length; i2-- !== 0; )
            if (!equal(a2[i2], b2[i2]))
              return false;
          return true;
        }
        if (a2.constructor === RegExp)
          return a2.source === b2.source && a2.flags === b2.flags;
        if (a2.valueOf !== Object.prototype.valueOf)
          return a2.valueOf() === b2.valueOf();
        if (a2.toString !== Object.prototype.toString)
          return a2.toString() === b2.toString();
        keys2 = Object.keys(a2);
        length = keys2.length;
        if (length !== Object.keys(b2).length)
          return false;
        for (i2 = length; i2-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b2, keys2[i2]))
            return false;
        for (i2 = length; i2-- !== 0; ) {
          var key = keys2[i2];
          if (!equal(a2[key], b2[key]))
            return false;
        }
        return true;
      }
      return a2 !== a2 && b2 !== b2;
    };
  }
});

// core/src/index.ts
__export(exports, {
  getProject: () => getProject,
  onChange: () => onChange,
  types: () => propTypes_exports,
  val: () => val6
});

// core/src/coreExports.ts
var coreExports_exports = {};
__export(coreExports_exports, {
  getProject: () => getProject,
  onChange: () => onChange,
  types: () => propTypes_exports,
  val: () => val6
});

// core/src/projects/projectsSingleton.ts
var import_dataverse = __toModule(require("@theatre/dataverse"));
var ProjectsSingleton = class {
  constructor() {
    __publicField(this, "atom", new import_dataverse.Atom({ projects: {} }));
  }
  add(id, project) {
    this.atom.reduceState(["projects", id], () => project);
  }
  get(id) {
    return this.atom.getState().projects[id];
  }
  has(id) {
    return !!this.get(id);
  }
};
var singleton = new ProjectsSingleton();
var projectsSingleton_default = singleton;

// core/src/privateAPIs.ts
var publicAPIToPrivateAPIMap = new WeakMap();
function privateAPI(pub) {
  return publicAPIToPrivateAPIMap.get(pub);
}
function setPrivateAPI(pub, priv) {
  publicAPIToPrivateAPIMap.set(pub, priv);
}

// shared/src/utils/index.ts
var emptyArray = [];

// ../node_modules/lodash-es/isArray.js
var isArray = Array.isArray;
var isArray_default = isArray;

// ../node_modules/lodash-es/_freeGlobal.js
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// ../node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// ../node_modules/lodash-es/_Symbol.js
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;

// ../node_modules/lodash-es/_getRawTag.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var getRawTag_default = getRawTag;

// ../node_modules/lodash-es/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// ../node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// ../node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// ../node_modules/lodash-es/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
var isSymbol_default = isSymbol;

// ../node_modules/lodash-es/_isKey.js
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray_default(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var isKey_default = isKey;

// ../node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

// ../node_modules/lodash-es/isFunction.js
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;

// ../node_modules/lodash-es/_coreJsData.js
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;

// ../node_modules/lodash-es/_isMasked.js
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;

// ../node_modules/lodash-es/_toSource.js
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e2) {
    }
    try {
      return func + "";
    } catch (e2) {
    }
  }
  return "";
}
var toSource_default = toSource;

// ../node_modules/lodash-es/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var baseIsNative_default = baseIsNative;

// ../node_modules/lodash-es/_getValue.js
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default = getValue;

// ../node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;

// ../node_modules/lodash-es/_nativeCreate.js
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;

// ../node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;

// ../node_modules/lodash-es/_hashDelete.js
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var hashDelete_default = hashDelete;

// ../node_modules/lodash-es/_hashGet.js
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto4 = Object.prototype;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty3.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;

// ../node_modules/lodash-es/_hashHas.js
var objectProto5 = Object.prototype;
var hasOwnProperty4 = objectProto5.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty4.call(data, key);
}
var hashHas_default = hashHas;

// ../node_modules/lodash-es/_hashSet.js
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var hashSet_default = hashSet;

// ../node_modules/lodash-es/_Hash.js
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;

// ../node_modules/lodash-es/_listCacheClear.js
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;

// ../node_modules/lodash-es/eq.js
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default = eq;

// ../node_modules/lodash-es/_assocIndexOf.js
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_default(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;

// ../node_modules/lodash-es/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;

// ../node_modules/lodash-es/_listCacheGet.js
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;

// ../node_modules/lodash-es/_listCacheHas.js
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;

// ../node_modules/lodash-es/_listCacheSet.js
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var listCacheSet_default = listCacheSet;

// ../node_modules/lodash-es/_ListCache.js
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;

// ../node_modules/lodash-es/_Map.js
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;

// ../node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;

// ../node_modules/lodash-es/_isKeyable.js
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default = isKeyable;

// ../node_modules/lodash-es/_getMapData.js
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;

// ../node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var mapCacheDelete_default = mapCacheDelete;

// ../node_modules/lodash-es/_mapCacheGet.js
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;

// ../node_modules/lodash-es/_mapCacheHas.js
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;

// ../node_modules/lodash-es/_mapCacheSet.js
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;

// ../node_modules/lodash-es/_MapCache.js
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;

// ../node_modules/lodash-es/memoize.js
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
    if (cache2.has(key)) {
      return cache2.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache2.set(key, result) || cache2;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache_default)();
  return memoized;
}
memoize.Cache = MapCache_default;
var memoize_default = memoize;

// ../node_modules/lodash-es/_memoizeCapped.js
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize_default(func, function(key) {
    if (cache2.size === MAX_MEMOIZE_SIZE) {
      cache2.clear();
    }
    return key;
  });
  var cache2 = result.cache;
  return result;
}
var memoizeCapped_default = memoizeCapped;

// ../node_modules/lodash-es/_stringToPath.js
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped_default(function(string2) {
  var result = [];
  if (string2.charCodeAt(0) === 46) {
    result.push("");
  }
  string2.replace(rePropName, function(match, number2, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number2 || match);
  });
  return result;
});
var stringToPath_default = stringToPath;

// ../node_modules/lodash-es/_arrayMap.js
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var arrayMap_default = arrayMap;

// ../node_modules/lodash-es/_baseToString.js
var INFINITY = 1 / 0;
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
var symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray_default(value)) {
    return arrayMap_default(value, baseToString) + "";
  }
  if (isSymbol_default(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var baseToString_default = baseToString;

// ../node_modules/lodash-es/toString.js
function toString(value) {
  return value == null ? "" : baseToString_default(value);
}
var toString_default = toString;

// ../node_modules/lodash-es/_castPath.js
function castPath(value, object) {
  if (isArray_default(value)) {
    return value;
  }
  return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
}
var castPath_default = castPath;

// ../node_modules/lodash-es/_toKey.js
var INFINITY2 = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol_default(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY2 ? "-0" : result;
}
var toKey_default = toKey;

// ../node_modules/lodash-es/_baseGet.js
function baseGet(object, path) {
  path = castPath_default(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey_default(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var baseGet_default = baseGet;

// ../node_modules/lodash-es/get.js
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet_default(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_default = get;

// shared/src/utils/getDeep.ts
function getDeep(v2, path) {
  if (path.length === 0)
    return v2;
  return get_default(v2, path);
}

// shared/src/utils/SimpleCache.ts
var SimpleCache = class {
  constructor() {
    __publicField(this, "_values", {});
  }
  get(key, producer) {
    if (this.has(key)) {
      return this._values[key];
    } else {
      const cachedValue = producer();
      this._values[key] = cachedValue;
      return cachedValue;
    }
  }
  has(key) {
    return this._values.hasOwnProperty(key);
  }
};

// core/src/sheetObjects/SheetObjectTemplate.ts
var import_dataverse7 = __toModule(require("@theatre/dataverse"));

// ../node_modules/lodash-es/_defineProperty.js
var defineProperty = function() {
  try {
    var func = getNative_default(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e2) {
  }
}();
var defineProperty_default = defineProperty;

// ../node_modules/lodash-es/_baseAssignValue.js
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty_default) {
    defineProperty_default(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var baseAssignValue_default = baseAssignValue;

// ../node_modules/lodash-es/_assignValue.js
var objectProto6 = Object.prototype;
var hasOwnProperty5 = objectProto6.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty5.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var assignValue_default = assignValue;

// ../node_modules/lodash-es/_isIndex.js
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var isIndex_default = isIndex;

// ../node_modules/lodash-es/_baseSet.js
function baseSet(object, path, value, customizer) {
  if (!isObject_default(object)) {
    return object;
  }
  path = castPath_default(path, object);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index < length) {
    var key = toKey_default(path[index]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject_default(objValue) ? objValue : isIndex_default(path[index + 1]) ? [] : {};
      }
    }
    assignValue_default(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var baseSet_default = baseSet;

// ../node_modules/lodash-es/set.js
function set(object, path, value) {
  return object == null ? object : baseSet_default(object, path, value);
}
var set_default = set;

// core/src/sheetObjects/getPropDefaultsOfSheetObject.ts
var cachedDefaults = new WeakMap();
function getPropDefaultsOfSheetObject(config) {
  return getDefaultsOfPropTypeConfig(config);
}
function getDefaultsOfPropTypeConfig(config) {
  if (cachedDefaults.has(config)) {
    return cachedDefaults.get(config);
  }
  const generated = config.type === "compound" ? generateDefaultsForCompound(config) : config.type === "enum" ? generateDefaultsForEnum(config) : config.default;
  cachedDefaults.set(config, generated);
  return generated;
}
function generateDefaultsForEnum(config) {
  const defaults = {
    $case: config.defaultCase
  };
  for (const [case_, caseConf] of Object.entries(config.cases)) {
    defaults[case_] = getDefaultsOfPropTypeConfig(caseConf);
  }
  return defaults;
}
function generateDefaultsForCompound(config) {
  const defaults = {};
  for (const [key, propConf] of Object.entries(config.props)) {
    defaults[key] = getDefaultsOfPropTypeConfig(propConf);
  }
  return defaults;
}

// core/src/sequences/interpolationTripleAtPosition.ts
var import_dataverse2 = __toModule(require("@theatre/dataverse"));
var import_UnitBezier = __toModule(require_UnitBezier());
function interpolationTripleAtPosition(ctx, trackP, timeD) {
  return (0, import_dataverse2.prism)(() => {
    const track = (0, import_dataverse2.val)(trackP);
    const driverD = import_dataverse2.prism.memo("driver", () => {
      if (!track) {
        return new import_dataverse2.ConstantDerivation(void 0);
      } else if (track.type === "BasicKeyframedTrack") {
        return _forKeyframedTrack(ctx, track, timeD);
      } else {
        ctx.logger.error(`Track type not yet supported.`);
        return new import_dataverse2.ConstantDerivation(void 0);
      }
    }, [track]);
    return driverD.getValue();
  });
}
function _forKeyframedTrack(ctx, track, timeD) {
  return (0, import_dataverse2.prism)(() => {
    let stateRef = import_dataverse2.prism.ref("state", { started: false });
    let state = stateRef.current;
    const time = timeD.getValue();
    if (!state.started || time < state.validFrom || state.validTo <= time) {
      stateRef.current = state = updateState(ctx, timeD, track);
    }
    return state.der.getValue();
  });
}
var undefinedConstD = new import_dataverse2.ConstantDerivation(void 0);
function updateState(ctx, progressionD, track) {
  const progression = progressionD.getValue();
  if (track.keyframes.length === 0) {
    return {
      started: true,
      validFrom: -Infinity,
      validTo: Infinity,
      der: undefinedConstD
    };
  }
  let currentKeyframeIndex = 0;
  while (true) {
    const currentKeyframe = track.keyframes[currentKeyframeIndex];
    if (!currentKeyframe) {
      if (process.env.NODE_ENV !== "production") {
        ctx.logger.error(`Bug here`);
      }
      return states.error;
    }
    const isLastKeyframe = currentKeyframeIndex === track.keyframes.length - 1;
    if (progression < currentKeyframe.position) {
      if (currentKeyframeIndex === 0) {
        return states.beforeFirstKeyframe(currentKeyframe);
      } else {
        if (process.env.NODE_ENV !== "production") {
          ctx.logger.error(`Bug here`);
        }
        return states.error;
      }
    } else if (currentKeyframe.position === progression) {
      if (isLastKeyframe) {
        return states.lastKeyframe(currentKeyframe);
      } else {
        return states.between(currentKeyframe, track.keyframes[currentKeyframeIndex + 1], progressionD);
      }
    } else {
      if (currentKeyframeIndex === track.keyframes.length - 1) {
        return states.lastKeyframe(currentKeyframe);
      } else {
        const nextKeyframeIndex = currentKeyframeIndex + 1;
        if (track.keyframes[nextKeyframeIndex].position <= progression) {
          currentKeyframeIndex = nextKeyframeIndex;
          continue;
        } else {
          return states.between(currentKeyframe, track.keyframes[currentKeyframeIndex + 1], progressionD);
        }
      }
    }
  }
}
var states = {
  beforeFirstKeyframe(kf) {
    return {
      started: true,
      validFrom: -Infinity,
      validTo: kf.position,
      der: new import_dataverse2.ConstantDerivation({ left: kf.value, progression: 0 })
    };
  },
  lastKeyframe(kf) {
    return {
      started: true,
      validFrom: kf.position,
      validTo: Infinity,
      der: new import_dataverse2.ConstantDerivation({ left: kf.value, progression: 0 })
    };
  },
  between(left, right, progressionD) {
    if (!left.connectedRight) {
      return {
        started: true,
        validFrom: left.position,
        validTo: right.position,
        der: new import_dataverse2.ConstantDerivation({ left: left.value, progression: 0 })
      };
    }
    const solver = new import_UnitBezier.default(left.handles[2], left.handles[3], right.handles[0], right.handles[1]);
    const globalProgressionToLocalProgression = (globalProgression) => {
      return (globalProgression - left.position) / (right.position - left.position);
    };
    const der = (0, import_dataverse2.prism)(() => {
      const progression = globalProgressionToLocalProgression(progressionD.getValue());
      const valueProgression = solver.solveSimple(progression);
      return {
        left: left.value,
        right: right.value,
        progression: valueProgression
      };
    });
    return {
      started: true,
      validFrom: left.position,
      validTo: right.position,
      der
    };
  },
  error: {
    started: true,
    validFrom: -Infinity,
    validTo: Infinity,
    der: undefinedConstD
  }
};

// shared/src/utils/deepMergeWithCache.ts
function deepMergeWithCache(base, override, cache2) {
  const _cache = cache2;
  const possibleCachedValue = _cache.get(base);
  if (possibleCachedValue && possibleCachedValue.override === override) {
    return possibleCachedValue.merged;
  }
  const merged = __spreadValues({}, base);
  for (const key of Object.keys(override)) {
    const valueInOverride = override[key];
    const valueInBase = base[key];
    merged[key] = typeof valueInOverride === "object" && typeof valueInBase === "object" ? deepMergeWithCache(valueInBase, valueInOverride, cache2) : valueInOverride === void 0 ? valueInBase : valueInOverride;
  }
  cache2.set(base, { override, merged });
  return merged;
}

// shared/src/utils/pointerDeep.ts
function pointerDeep(base, toAppend) {
  let p2 = base;
  for (const k2 of toAppend) {
    p2 = p2[k2];
  }
  return p2;
}

// shared/src/utils/valToAtom.ts
var import_dataverse3 = __toModule(require("@theatre/dataverse"));
var valToAtom = (key, vals) => {
  const a2 = import_dataverse3.prism.memo(key, () => new import_dataverse3.Atom(vals), []);
  a2.setState(vals);
  return a2;
};

// core/src/sheetObjects/SheetObject.ts
var import_dataverse6 = __toModule(require("@theatre/dataverse"));

// core/src/coreTicker.ts
var import_dataverse4 = __toModule(require("@theatre/dataverse"));
var coreTicker = import_dataverse4.Ticker.raf;
var coreTicker_default = coreTicker;

// core/src/sheetObjects/TheatreSheetObject.ts
var import_dataverse5 = __toModule(require("@theatre/dataverse"));

// ../node_modules/lodash-es/_trimmedEndIndex.js
var reWhitespace = /\s/;
function trimmedEndIndex(string2) {
  var index = string2.length;
  while (index-- && reWhitespace.test(string2.charAt(index))) {
  }
  return index;
}
var trimmedEndIndex_default = trimmedEndIndex;

// ../node_modules/lodash-es/_baseTrim.js
var reTrimStart = /^\s+/;
function baseTrim(string2) {
  return string2 ? string2.slice(0, trimmedEndIndex_default(string2) + 1).replace(reTrimStart, "") : string2;
}
var baseTrim_default = baseTrim;

// ../node_modules/lodash-es/toNumber.js
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol_default(value)) {
    return NAN;
  }
  if (isObject_default(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject_default(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim_default(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_default = toNumber;

// ../node_modules/lodash-es/toFinite.js
var INFINITY3 = 1 / 0;
var MAX_INTEGER = 17976931348623157e292;
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_default(value);
  if (value === INFINITY3 || value === -INFINITY3) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
var toFinite_default = toFinite;

// ../node_modules/lodash-es/toInteger.js
function toInteger(value) {
  var result = toFinite_default(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
var toInteger_default = toInteger;

// ../node_modules/lodash-es/identity.js
function identity(value) {
  return value;
}
var identity_default = identity;

// ../node_modules/lodash-es/_WeakMap.js
var WeakMap2 = getNative_default(root_default, "WeakMap");
var WeakMap_default = WeakMap2;

// ../node_modules/lodash-es/isLength.js
var MAX_SAFE_INTEGER2 = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
}
var isLength_default = isLength;

// ../node_modules/lodash-es/isArrayLike.js
function isArrayLike(value) {
  return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default = isArrayLike;

// ../node_modules/lodash-es/_isPrototype.js
var objectProto7 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto7;
  return value === proto;
}
var isPrototype_default = isPrototype;

// ../node_modules/lodash-es/_baseTimes.js
function baseTimes(n2, iteratee) {
  var index = -1, result = Array(n2);
  while (++index < n2) {
    result[index] = iteratee(index);
  }
  return result;
}
var baseTimes_default = baseTimes;

// ../node_modules/lodash-es/_baseIsArguments.js
var argsTag = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
}
var baseIsArguments_default = baseIsArguments;

// ../node_modules/lodash-es/isArguments.js
var objectProto8 = Object.prototype;
var hasOwnProperty6 = objectProto8.hasOwnProperty;
var propertyIsEnumerable = objectProto8.propertyIsEnumerable;
var isArguments = baseIsArguments_default(function() {
  return arguments;
}()) ? baseIsArguments_default : function(value) {
  return isObjectLike_default(value) && hasOwnProperty6.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_default = isArguments;

// ../node_modules/lodash-es/stubFalse.js
function stubFalse() {
  return false;
}
var stubFalse_default = stubFalse;

// ../node_modules/lodash-es/isBuffer.js
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer2 = moduleExports ? root_default.Buffer : void 0;
var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse_default;
var isBuffer_default = isBuffer;

// ../node_modules/lodash-es/_baseIsTypedArray.js
var argsTag2 = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag2 = "[object Function]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var objectTag = "[object Object]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
  return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
}
var baseIsTypedArray_default = baseIsTypedArray;

// ../node_modules/lodash-es/_baseUnary.js
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var baseUnary_default = baseUnary;

// ../node_modules/lodash-es/_nodeUtil.js
var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
var freeProcess = moduleExports2 && freeGlobal_default.process;
var nodeUtil = function() {
  try {
    var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e2) {
  }
}();
var nodeUtil_default = nodeUtil;

// ../node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
var isTypedArray_default = isTypedArray;

// ../node_modules/lodash-es/_arrayLikeKeys.js
var objectProto9 = Object.prototype;
var hasOwnProperty7 = objectProto9.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty7.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex_default(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var arrayLikeKeys_default = arrayLikeKeys;

// ../node_modules/lodash-es/_overArg.js
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var overArg_default = overArg;

// ../node_modules/lodash-es/_nativeKeys.js
var nativeKeys = overArg_default(Object.keys, Object);
var nativeKeys_default = nativeKeys;

// ../node_modules/lodash-es/_baseKeys.js
var objectProto10 = Object.prototype;
var hasOwnProperty8 = objectProto10.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype_default(object)) {
    return nativeKeys_default(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty8.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var baseKeys_default = baseKeys;

// ../node_modules/lodash-es/keys.js
function keys(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
}
var keys_default = keys;

// ../node_modules/lodash-es/_arrayPush.js
function arrayPush(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var arrayPush_default = arrayPush;

// ../node_modules/lodash-es/_getPrototype.js
var getPrototype = overArg_default(Object.getPrototypeOf, Object);
var getPrototype_default = getPrototype;

// ../node_modules/lodash-es/isPlainObject.js
var objectTag2 = "[object Object]";
var funcProto3 = Function.prototype;
var objectProto11 = Object.prototype;
var funcToString3 = funcProto3.toString;
var hasOwnProperty9 = objectProto11.hasOwnProperty;
var objectCtorString = funcToString3.call(Object);
function isPlainObject(value) {
  if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag2) {
    return false;
  }
  var proto = getPrototype_default(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty9.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString3.call(Ctor) == objectCtorString;
}
var isPlainObject_default = isPlainObject;

// ../node_modules/lodash-es/_baseSlice.js
function baseSlice(array, start, end) {
  var index = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}
var baseSlice_default = baseSlice;

// ../node_modules/lodash-es/_castSlice.js
function castSlice(array, start, end) {
  var length = array.length;
  end = end === void 0 ? length : end;
  return !start && end >= length ? array : baseSlice_default(array, start, end);
}
var castSlice_default = castSlice;

// ../node_modules/lodash-es/_hasUnicode.js
var rsAstralRange = "\\ud800-\\udfff";
var rsComboMarksRange = "\\u0300-\\u036f";
var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange = "\\u20d0-\\u20ff";
var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
var rsVarRange = "\\ufe0e\\ufe0f";
var rsZWJ = "\\u200d";
var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
function hasUnicode(string2) {
  return reHasUnicode.test(string2);
}
var hasUnicode_default = hasUnicode;

// ../node_modules/lodash-es/_asciiToArray.js
function asciiToArray(string2) {
  return string2.split("");
}
var asciiToArray_default = asciiToArray;

// ../node_modules/lodash-es/_unicodeToArray.js
var rsAstralRange2 = "\\ud800-\\udfff";
var rsComboMarksRange2 = "\\u0300-\\u036f";
var reComboHalfMarksRange2 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange2 = "\\u20d0-\\u20ff";
var rsComboRange2 = rsComboMarksRange2 + reComboHalfMarksRange2 + rsComboSymbolsRange2;
var rsVarRange2 = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange2 + "]";
var rsCombo = "[" + rsComboRange2 + "]";
var rsFitz = "\\ud83c[\\udffb-\\udfff]";
var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
var rsNonAstral = "[^" + rsAstralRange2 + "]";
var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsZWJ2 = "\\u200d";
var reOptMod = rsModifier + "?";
var rsOptVar = "[" + rsVarRange2 + "]?";
var rsOptJoin = "(?:" + rsZWJ2 + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeToArray(string2) {
  return string2.match(reUnicode) || [];
}
var unicodeToArray_default = unicodeToArray;

// ../node_modules/lodash-es/_stringToArray.js
function stringToArray(string2) {
  return hasUnicode_default(string2) ? unicodeToArray_default(string2) : asciiToArray_default(string2);
}
var stringToArray_default = stringToArray;

// ../node_modules/lodash-es/_baseClamp.js
function baseClamp(number2, lower, upper) {
  if (number2 === number2) {
    if (upper !== void 0) {
      number2 = number2 <= upper ? number2 : upper;
    }
    if (lower !== void 0) {
      number2 = number2 >= lower ? number2 : lower;
    }
  }
  return number2;
}
var baseClamp_default = baseClamp;

// ../node_modules/lodash-es/clamp.js
function clamp(number2, lower, upper) {
  if (upper === void 0) {
    upper = lower;
    lower = void 0;
  }
  if (upper !== void 0) {
    upper = toNumber_default(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== void 0) {
    lower = toNumber_default(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp_default(toNumber_default(number2), lower, upper);
}
var clamp_default = clamp;

// ../node_modules/lodash-es/_stackClear.js
function stackClear() {
  this.__data__ = new ListCache_default();
  this.size = 0;
}
var stackClear_default = stackClear;

// ../node_modules/lodash-es/_stackDelete.js
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var stackDelete_default = stackDelete;

// ../node_modules/lodash-es/_stackGet.js
function stackGet(key) {
  return this.__data__.get(key);
}
var stackGet_default = stackGet;

// ../node_modules/lodash-es/_stackHas.js
function stackHas(key) {
  return this.__data__.has(key);
}
var stackHas_default = stackHas;

// ../node_modules/lodash-es/_stackSet.js
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache_default) {
    var pairs = data.__data__;
    if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache_default(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var stackSet_default = stackSet;

// ../node_modules/lodash-es/_Stack.js
function Stack(entries) {
  var data = this.__data__ = new ListCache_default(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear_default;
Stack.prototype["delete"] = stackDelete_default;
Stack.prototype.get = stackGet_default;
Stack.prototype.has = stackHas_default;
Stack.prototype.set = stackSet_default;
var Stack_default = Stack;

// ../node_modules/lodash-es/_arrayFilter.js
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var arrayFilter_default = arrayFilter;

// ../node_modules/lodash-es/stubArray.js
function stubArray() {
  return [];
}
var stubArray_default = stubArray;

// ../node_modules/lodash-es/_getSymbols.js
var objectProto12 = Object.prototype;
var propertyIsEnumerable2 = objectProto12.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray_default : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter_default(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable2.call(object, symbol);
  });
};
var getSymbols_default = getSymbols;

// ../node_modules/lodash-es/_baseGetAllKeys.js
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_default(object) ? result : arrayPush_default(result, symbolsFunc(object));
}
var baseGetAllKeys_default = baseGetAllKeys;

// ../node_modules/lodash-es/_getAllKeys.js
function getAllKeys(object) {
  return baseGetAllKeys_default(object, keys_default, getSymbols_default);
}
var getAllKeys_default = getAllKeys;

// ../node_modules/lodash-es/_DataView.js
var DataView = getNative_default(root_default, "DataView");
var DataView_default = DataView;

// ../node_modules/lodash-es/_Promise.js
var Promise2 = getNative_default(root_default, "Promise");
var Promise_default = Promise2;

// ../node_modules/lodash-es/_Set.js
var Set2 = getNative_default(root_default, "Set");
var Set_default = Set2;

// ../node_modules/lodash-es/_getTag.js
var mapTag2 = "[object Map]";
var objectTag3 = "[object Object]";
var promiseTag = "[object Promise]";
var setTag2 = "[object Set]";
var weakMapTag2 = "[object WeakMap]";
var dataViewTag2 = "[object DataView]";
var dataViewCtorString = toSource_default(DataView_default);
var mapCtorString = toSource_default(Map_default);
var promiseCtorString = toSource_default(Promise_default);
var setCtorString = toSource_default(Set_default);
var weakMapCtorString = toSource_default(WeakMap_default);
var getTag = baseGetTag_default;
if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag2 || Map_default && getTag(new Map_default()) != mapTag2 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag2 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
  getTag = function(value) {
    var result = baseGetTag_default(value), Ctor = result == objectTag3 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag2;
        case mapCtorString:
          return mapTag2;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag2;
        case weakMapCtorString:
          return weakMapTag2;
      }
    }
    return result;
  };
}
var getTag_default = getTag;

// ../node_modules/lodash-es/_Uint8Array.js
var Uint8Array2 = root_default.Uint8Array;
var Uint8Array_default = Uint8Array2;

// ../node_modules/lodash-es/_setCacheAdd.js
var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED3);
  return this;
}
var setCacheAdd_default = setCacheAdd;

// ../node_modules/lodash-es/_setCacheHas.js
function setCacheHas(value) {
  return this.__data__.has(value);
}
var setCacheHas_default = setCacheHas;

// ../node_modules/lodash-es/_SetCache.js
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache_default();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
SetCache.prototype.has = setCacheHas_default;
var SetCache_default = SetCache;

// ../node_modules/lodash-es/_arraySome.js
function arraySome(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
var arraySome_default = arraySome;

// ../node_modules/lodash-es/_cacheHas.js
function cacheHas(cache2, key) {
  return cache2.has(key);
}
var cacheHas_default = cacheHas;

// ../node_modules/lodash-es/_equalArrays.js
var COMPARE_PARTIAL_FLAG = 1;
var COMPARE_UNORDERED_FLAG = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache_default() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome_default(other, function(othValue2, othIndex) {
        if (!cacheHas_default(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var equalArrays_default = equalArrays;

// ../node_modules/lodash-es/_mapToArray.js
function mapToArray(map) {
  var index = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
var mapToArray_default = mapToArray;

// ../node_modules/lodash-es/_setToArray.js
function setToArray(set2) {
  var index = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var setToArray_default = setToArray;

// ../node_modules/lodash-es/_equalByTag.js
var COMPARE_PARTIAL_FLAG2 = 1;
var COMPARE_UNORDERED_FLAG2 = 2;
var boolTag2 = "[object Boolean]";
var dateTag2 = "[object Date]";
var errorTag2 = "[object Error]";
var mapTag3 = "[object Map]";
var numberTag2 = "[object Number]";
var regexpTag2 = "[object RegExp]";
var setTag3 = "[object Set]";
var stringTag2 = "[object String]";
var symbolTag2 = "[object Symbol]";
var arrayBufferTag2 = "[object ArrayBuffer]";
var dataViewTag3 = "[object DataView]";
var symbolProto2 = Symbol_default ? Symbol_default.prototype : void 0;
var symbolValueOf = symbolProto2 ? symbolProto2.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag3:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag2:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array_default(object), new Uint8Array_default(other))) {
        return false;
      }
      return true;
    case boolTag2:
    case dateTag2:
    case numberTag2:
      return eq_default(+object, +other);
    case errorTag2:
      return object.name == other.name && object.message == other.message;
    case regexpTag2:
    case stringTag2:
      return object == other + "";
    case mapTag3:
      var convert = mapToArray_default;
    case setTag3:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
      convert || (convert = setToArray_default);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG2;
      stack.set(object, other);
      var result = equalArrays_default(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag2:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var equalByTag_default = equalByTag;

// ../node_modules/lodash-es/_equalObjects.js
var COMPARE_PARTIAL_FLAG3 = 1;
var objectProto13 = Object.prototype;
var hasOwnProperty10 = objectProto13.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG3, objProps = getAllKeys_default(object), objLength = objProps.length, othProps = getAllKeys_default(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty10.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var equalObjects_default = equalObjects;

// ../node_modules/lodash-es/_baseIsEqualDeep.js
var COMPARE_PARTIAL_FLAG4 = 1;
var argsTag3 = "[object Arguments]";
var arrayTag2 = "[object Array]";
var objectTag4 = "[object Object]";
var objectProto14 = Object.prototype;
var hasOwnProperty11 = objectProto14.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_default(object), othIsArr = isArray_default(other), objTag = objIsArr ? arrayTag2 : getTag_default(object), othTag = othIsArr ? arrayTag2 : getTag_default(other);
  objTag = objTag == argsTag3 ? objectTag4 : objTag;
  othTag = othTag == argsTag3 ? objectTag4 : othTag;
  var objIsObj = objTag == objectTag4, othIsObj = othTag == objectTag4, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer_default(object)) {
    if (!isBuffer_default(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack_default());
    return objIsArr || isTypedArray_default(object) ? equalArrays_default(object, other, bitmask, customizer, equalFunc, stack) : equalByTag_default(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG4)) {
    var objIsWrapped = objIsObj && hasOwnProperty11.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty11.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack_default());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack_default());
  return equalObjects_default(object, other, bitmask, customizer, equalFunc, stack);
}
var baseIsEqualDeep_default = baseIsEqualDeep;

// ../node_modules/lodash-es/_baseIsEqual.js
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike_default(value) && !isObjectLike_default(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep_default(value, other, bitmask, customizer, baseIsEqual, stack);
}
var baseIsEqual_default = baseIsEqual;

// ../node_modules/lodash-es/_baseIsMatch.js
var COMPARE_PARTIAL_FLAG5 = 1;
var COMPARE_UNORDERED_FLAG3 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack_default();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG5 | COMPARE_UNORDERED_FLAG3, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var baseIsMatch_default = baseIsMatch;

// ../node_modules/lodash-es/_isStrictComparable.js
function isStrictComparable(value) {
  return value === value && !isObject_default(value);
}
var isStrictComparable_default = isStrictComparable;

// ../node_modules/lodash-es/_getMatchData.js
function getMatchData(object) {
  var result = keys_default(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable_default(value)];
  }
  return result;
}
var getMatchData_default = getMatchData;

// ../node_modules/lodash-es/_matchesStrictComparable.js
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var matchesStrictComparable_default = matchesStrictComparable;

// ../node_modules/lodash-es/_baseMatches.js
function baseMatches(source) {
  var matchData = getMatchData_default(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable_default(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch_default(object, source, matchData);
  };
}
var baseMatches_default = baseMatches;

// ../node_modules/lodash-es/_baseHasIn.js
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
var baseHasIn_default = baseHasIn;

// ../node_modules/lodash-es/_hasPath.js
function hasPath(object, path, hasFunc) {
  path = castPath_default(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey_default(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_default(length) && isIndex_default(key, length) && (isArray_default(object) || isArguments_default(object));
}
var hasPath_default = hasPath;

// ../node_modules/lodash-es/hasIn.js
function hasIn(object, path) {
  return object != null && hasPath_default(object, path, baseHasIn_default);
}
var hasIn_default = hasIn;

// ../node_modules/lodash-es/_baseMatchesProperty.js
var COMPARE_PARTIAL_FLAG6 = 1;
var COMPARE_UNORDERED_FLAG4 = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey_default(path) && isStrictComparable_default(srcValue)) {
    return matchesStrictComparable_default(toKey_default(path), srcValue);
  }
  return function(object) {
    var objValue = get_default(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn_default(object, path) : baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG6 | COMPARE_UNORDERED_FLAG4);
  };
}
var baseMatchesProperty_default = baseMatchesProperty;

// ../node_modules/lodash-es/_baseProperty.js
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var baseProperty_default = baseProperty;

// ../node_modules/lodash-es/_basePropertyDeep.js
function basePropertyDeep(path) {
  return function(object) {
    return baseGet_default(object, path);
  };
}
var basePropertyDeep_default = basePropertyDeep;

// ../node_modules/lodash-es/property.js
function property(path) {
  return isKey_default(path) ? baseProperty_default(toKey_default(path)) : basePropertyDeep_default(path);
}
var property_default = property;

// ../node_modules/lodash-es/_baseIteratee.js
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity_default;
  }
  if (typeof value == "object") {
    return isArray_default(value) ? baseMatchesProperty_default(value[0], value[1]) : baseMatches_default(value);
  }
  return property_default(value);
}
var baseIteratee_default = baseIteratee;

// ../node_modules/lodash-es/_createBaseFor.js
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var createBaseFor_default = createBaseFor;

// ../node_modules/lodash-es/_baseFor.js
var baseFor = createBaseFor_default();
var baseFor_default = baseFor;

// ../node_modules/lodash-es/_baseForOwn.js
function baseForOwn(object, iteratee) {
  return object && baseFor_default(object, iteratee, keys_default);
}
var baseForOwn_default = baseForOwn;

// ../node_modules/lodash-es/now.js
var now = function() {
  return root_default.Date.now();
};
var now_default = now;

// ../node_modules/lodash-es/debounce.js
var FUNC_ERROR_TEXT2 = "Expected a function";
var nativeMax = Math.max;
var nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT2);
  }
  wait = toNumber_default(wait) || 0;
  if (isObject_default(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber_default(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now_default();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now_default());
  }
  function debounced() {
    var time = now_default(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var debounce_default = debounce;

// ../node_modules/lodash-es/isInteger.js
function isInteger(value) {
  return typeof value == "number" && value == toInteger_default(value);
}
var isInteger_default = isInteger;

// ../node_modules/lodash-es/mapValues.js
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee_default(iteratee, 3);
  baseForOwn_default(object, function(value, key, object2) {
    baseAssignValue_default(result, key, iteratee(value, key, object2));
  });
  return result;
}
var mapValues_default = mapValues;

// ../node_modules/lodash-es/_baseRepeat.js
var MAX_SAFE_INTEGER3 = 9007199254740991;
var nativeFloor = Math.floor;
function baseRepeat(string2, n2) {
  var result = "";
  if (!string2 || n2 < 1 || n2 > MAX_SAFE_INTEGER3) {
    return result;
  }
  do {
    if (n2 % 2) {
      result += string2;
    }
    n2 = nativeFloor(n2 / 2);
    if (n2) {
      string2 += string2;
    }
  } while (n2);
  return result;
}
var baseRepeat_default = baseRepeat;

// ../node_modules/lodash-es/_asciiSize.js
var asciiSize = baseProperty_default("length");
var asciiSize_default = asciiSize;

// ../node_modules/lodash-es/_unicodeSize.js
var rsAstralRange3 = "\\ud800-\\udfff";
var rsComboMarksRange3 = "\\u0300-\\u036f";
var reComboHalfMarksRange3 = "\\ufe20-\\ufe2f";
var rsComboSymbolsRange3 = "\\u20d0-\\u20ff";
var rsComboRange3 = rsComboMarksRange3 + reComboHalfMarksRange3 + rsComboSymbolsRange3;
var rsVarRange3 = "\\ufe0e\\ufe0f";
var rsAstral2 = "[" + rsAstralRange3 + "]";
var rsCombo2 = "[" + rsComboRange3 + "]";
var rsFitz2 = "\\ud83c[\\udffb-\\udfff]";
var rsModifier2 = "(?:" + rsCombo2 + "|" + rsFitz2 + ")";
var rsNonAstral2 = "[^" + rsAstralRange3 + "]";
var rsRegional2 = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair2 = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsZWJ3 = "\\u200d";
var reOptMod2 = rsModifier2 + "?";
var rsOptVar2 = "[" + rsVarRange3 + "]?";
var rsOptJoin2 = "(?:" + rsZWJ3 + "(?:" + [rsNonAstral2, rsRegional2, rsSurrPair2].join("|") + ")" + rsOptVar2 + reOptMod2 + ")*";
var rsSeq2 = rsOptVar2 + reOptMod2 + rsOptJoin2;
var rsSymbol2 = "(?:" + [rsNonAstral2 + rsCombo2 + "?", rsCombo2, rsRegional2, rsSurrPair2, rsAstral2].join("|") + ")";
var reUnicode2 = RegExp(rsFitz2 + "(?=" + rsFitz2 + ")|" + rsSymbol2 + rsSeq2, "g");
function unicodeSize(string2) {
  var result = reUnicode2.lastIndex = 0;
  while (reUnicode2.test(string2)) {
    ++result;
  }
  return result;
}
var unicodeSize_default = unicodeSize;

// ../node_modules/lodash-es/_stringSize.js
function stringSize(string2) {
  return hasUnicode_default(string2) ? unicodeSize_default(string2) : asciiSize_default(string2);
}
var stringSize_default = stringSize;

// ../node_modules/lodash-es/_createPadding.js
var nativeCeil = Math.ceil;
function createPadding(length, chars) {
  chars = chars === void 0 ? " " : baseToString_default(chars);
  var charsLength = chars.length;
  if (charsLength < 2) {
    return charsLength ? baseRepeat_default(chars, length) : chars;
  }
  var result = baseRepeat_default(chars, nativeCeil(length / stringSize_default(chars)));
  return hasUnicode_default(chars) ? castSlice_default(stringToArray_default(result), 0, length).join("") : result.slice(0, length);
}
var createPadding_default = createPadding;

// ../node_modules/lodash-es/padStart.js
function padStart(string2, length, chars) {
  string2 = toString_default(string2);
  length = toInteger_default(length);
  var strLength = length ? stringSize_default(string2) : 0;
  return length && strLength < length ? createPadding_default(length - strLength, chars) + string2 : string2;
}
var padStart_default = padStart;

// core/src/sheetObjects/TheatreSheetObject.ts
var KEEP_HOT_FOR_MS = 5 * 1e3;
var TheatreSheetObject = class {
  constructor(internals) {
    __publicField(this, "_cache", new SimpleCache());
    __publicField(this, "_keepHotUntapDebounce");
    setPrivateAPI(this, internals);
  }
  get type() {
    return "Theatre_SheetObject_PublicAPI";
  }
  get props() {
    return privateAPI(this).propsP;
  }
  get sheet() {
    return privateAPI(this).sheet.publicApi;
  }
  get project() {
    return privateAPI(this).sheet.project.publicApi;
  }
  get address() {
    return __spreadValues({}, privateAPI(this).address);
  }
  _valuesDerivation() {
    return this._cache.get("onValuesChangeDerivation", () => {
      const sheetObject = privateAPI(this);
      const d2 = (0, import_dataverse5.prism)(() => {
        return (0, import_dataverse5.val)(sheetObject.getValues().getValue());
      });
      return d2;
    });
  }
  onValuesChange(fn2) {
    return this._valuesDerivation().tapImmediate(coreTicker_default, fn2);
  }
  get value() {
    const der = this._valuesDerivation();
    if (KEEP_HOT_FOR_MS != null) {
      if (!der.isHot) {
        if (this._keepHotUntapDebounce != null) {
          if (process.env.NODE_ENV === "development") {
            privateAPI(this)._logger.errorDev("`sheet.value` keepHot debouncer is set, even though the derivation is not actually hot.");
          }
          this._keepHotUntapDebounce.flush();
        }
        const untap = der.keepHot();
        this._keepHotUntapDebounce = debounce_default(() => {
          untap();
          this._keepHotUntapDebounce = void 0;
        }, KEEP_HOT_FOR_MS);
      }
      if (this._keepHotUntapDebounce) {
        this._keepHotUntapDebounce();
      }
    }
    return der.getValue();
  }
  set initialValue(val7) {
    privateAPI(this).setInitialValue(val7);
  }
};

// shared/src/propTypes/utils.ts
function isPropConfigComposite(c2) {
  return c2.type === "compound" || c2.type === "enum";
}
function getPropConfigByPath(parentConf, path) {
  if (!parentConf)
    return void 0;
  const [key, ...rest] = path;
  if (key === void 0)
    return parentConf;
  if (!isPropConfigComposite(parentConf))
    return void 0;
  const sub = parentConf.type === "enum" ? parentConf.cases[key] : parentConf.props[key];
  return getPropConfigByPath(sub, rest);
}
function isPropConfSequencable(conf) {
  return !isPropConfigComposite(conf);
}
var compoundPropSequenceabilityCache = new WeakMap();

// core/src/sheetObjects/SheetObject.ts
var SheetObject = class {
  constructor(sheet, template, nativeObject) {
    this.sheet = sheet;
    this.template = template;
    this.nativeObject = nativeObject;
    __publicField(this, "$$isIdentityDerivationProvider", true);
    __publicField(this, "address");
    __publicField(this, "publicApi");
    __publicField(this, "_initialValue", new import_dataverse6.Atom({}));
    __publicField(this, "_cache", new SimpleCache());
    __publicField(this, "_logger");
    __publicField(this, "_internalUtilCtx");
    this._logger = sheet._logger.named("SheetObject", template.address.objectKey);
    this._logger._trace("creating object");
    this._internalUtilCtx = { logger: this._logger.utilFor.internal() };
    this.address = __spreadProps(__spreadValues({}, template.address), {
      sheetInstanceId: sheet.address.sheetInstanceId
    });
    this.publicApi = new TheatreSheetObject(this);
  }
  get type() {
    return "Theatre_SheetObject";
  }
  getValues() {
    return this._cache.get("getValues()", () => (0, import_dataverse6.prism)(() => {
      const defaults = (0, import_dataverse6.val)(this.template.getDefaultValues());
      const initial = (0, import_dataverse6.val)(this._initialValue.pointer);
      const withInitialCache = import_dataverse6.prism.memo("withInitialCache", () => new WeakMap(), []);
      const withInitial = deepMergeWithCache(defaults, initial, withInitialCache);
      const statics = (0, import_dataverse6.val)(this.template.getStaticValues());
      const withStaticsCache = import_dataverse6.prism.memo("withStatics", () => new WeakMap(), []);
      const withStatics = deepMergeWithCache(withInitial, statics, withStaticsCache);
      let final = withStatics;
      let sequenced;
      {
        const pointerToSequencedValuesD = import_dataverse6.prism.memo("seq", () => this.getSequencedValues(), []);
        const withSeqsCache = import_dataverse6.prism.memo("withSeqsCache", () => new WeakMap(), []);
        sequenced = (0, import_dataverse6.val)((0, import_dataverse6.val)(pointerToSequencedValuesD));
        const withSeqs = deepMergeWithCache(final, sequenced, withSeqsCache);
        final = withSeqs;
      }
      const a2 = valToAtom("finalAtom", final);
      return a2.pointer;
    }));
  }
  getValueByPointer(pointer3) {
    const allValuesP = (0, import_dataverse6.val)(this.getValues());
    const { path } = (0, import_dataverse6.getPointerParts)(pointer3);
    return (0, import_dataverse6.val)(pointerDeep(allValuesP, path));
  }
  getIdentityDerivation(path) {
    return (0, import_dataverse6.prism)(() => {
      const allValuesP = (0, import_dataverse6.val)(this.getValues());
      return (0, import_dataverse6.val)(pointerDeep(allValuesP, path));
    });
  }
  getSequencedValues() {
    return (0, import_dataverse6.prism)(() => {
      const tracksToProcessD = import_dataverse6.prism.memo("tracksToProcess", () => this.template.getArrayOfValidSequenceTracks(), []);
      const tracksToProcess = (0, import_dataverse6.val)(tracksToProcessD);
      const valsAtom = new import_dataverse6.Atom({});
      import_dataverse6.prism.effect("processTracks", () => {
        const untaps = [];
        for (const { trackId, pathToProp } of tracksToProcess) {
          const derivation = this._trackIdToDerivation(trackId);
          const propConfig = getPropConfigByPath(this.template.config, pathToProp);
          const deserializeAndSanitize = propConfig.deserializeAndSanitize;
          const interpolate = propConfig.interpolate;
          const updateSequenceValueFromItsDerivation = () => {
            const triple = derivation.getValue();
            if (!triple)
              return valsAtom.setIn(pathToProp, void 0);
            const leftDeserialized = deserializeAndSanitize(triple.left);
            const left = leftDeserialized === void 0 ? propConfig.default : leftDeserialized;
            if (triple.right === void 0)
              return valsAtom.setIn(pathToProp, left);
            const rightDeserialized = deserializeAndSanitize(triple.right);
            const right = rightDeserialized === void 0 ? propConfig.default : rightDeserialized;
            return valsAtom.setIn(pathToProp, interpolate(left, right, triple.progression));
          };
          const untap = derivation.changesWithoutValues().tap(updateSequenceValueFromItsDerivation);
          updateSequenceValueFromItsDerivation();
          untaps.push(untap);
        }
        return () => {
          for (const untap of untaps) {
            untap();
          }
        };
      }, tracksToProcess);
      return valsAtom.pointer;
    });
  }
  _trackIdToDerivation(trackId) {
    const trackP = this.template.project.pointers.historic.sheetsById[this.address.sheetId].sequence.tracksByObject[this.address.objectKey].trackData[trackId];
    const timeD = this.sheet.getSequence().positionDerivation;
    return interpolationTripleAtPosition(this._internalUtilCtx, trackP, timeD);
  }
  get propsP() {
    return this._cache.get("propsP", () => (0, import_dataverse6.pointer)({ root: this, path: [] }));
  }
  validateValue(pointer3, value) {
  }
  setInitialValue(val7) {
    this.validateValue(this.propsP, val7);
    this._initialValue.setState(val7);
  }
};

// shared/src/_logger/logger.ts
function lazy(f2) {
  return function lazyLogIncluded(m, lazyArg) {
    return f2(m, lazyArg());
  };
}
var _Category;
(function(_Category2) {
  _Category2[_Category2["GENERAL"] = 1] = "GENERAL";
  _Category2[_Category2["TODO"] = 2] = "TODO";
  _Category2[_Category2["TROUBLESHOOTING"] = 4] = "TROUBLESHOOTING";
})(_Category || (_Category = {}));
var _Audience;
(function(_Audience2) {
  _Audience2[_Audience2["INTERNAL"] = 8] = "INTERNAL";
  _Audience2[_Audience2["DEV"] = 16] = "DEV";
  _Audience2[_Audience2["PUBLIC"] = 32] = "PUBLIC";
})(_Audience || (_Audience = {}));
var TheatreLoggerLevel;
(function(TheatreLoggerLevel2) {
  TheatreLoggerLevel2[TheatreLoggerLevel2["TRACE"] = 64] = "TRACE";
  TheatreLoggerLevel2[TheatreLoggerLevel2["DEBUG"] = 128] = "DEBUG";
  TheatreLoggerLevel2[TheatreLoggerLevel2["WARN"] = 256] = "WARN";
  TheatreLoggerLevel2[TheatreLoggerLevel2["ERROR"] = 512] = "ERROR";
})(TheatreLoggerLevel || (TheatreLoggerLevel = {}));
var _LoggerLevel;
(function(_LoggerLevel2) {
  _LoggerLevel2[_LoggerLevel2["ERROR_PUBLIC"] = 545] = "ERROR_PUBLIC";
  _LoggerLevel2[_LoggerLevel2["ERROR_DEV"] = 529] = "ERROR_DEV";
  _LoggerLevel2[_LoggerLevel2["_HMM"] = 524] = "_HMM";
  _LoggerLevel2[_LoggerLevel2["_TODO"] = 522] = "_TODO";
  _LoggerLevel2[_LoggerLevel2["_ERROR"] = 521] = "_ERROR";
  _LoggerLevel2[_LoggerLevel2["WARN_PUBLIC"] = 289] = "WARN_PUBLIC";
  _LoggerLevel2[_LoggerLevel2["WARN_DEV"] = 273] = "WARN_DEV";
  _LoggerLevel2[_LoggerLevel2["_KAPOW"] = 268] = "_KAPOW";
  _LoggerLevel2[_LoggerLevel2["_WARN"] = 265] = "_WARN";
  _LoggerLevel2[_LoggerLevel2["DEBUG_DEV"] = 145] = "DEBUG_DEV";
  _LoggerLevel2[_LoggerLevel2["_DEBUG"] = 137] = "_DEBUG";
  _LoggerLevel2[_LoggerLevel2["TRACE_DEV"] = 81] = "TRACE_DEV";
  _LoggerLevel2[_LoggerLevel2["_TRACE"] = 73] = "_TRACE";
})(_LoggerLevel || (_LoggerLevel = {}));
var LEVELS = {
  _hmm: getLogMeta(524),
  _todo: getLogMeta(522),
  _error: getLogMeta(521),
  errorDev: getLogMeta(529),
  errorPublic: getLogMeta(545),
  _kapow: getLogMeta(268),
  _warn: getLogMeta(265),
  warnDev: getLogMeta(273),
  warnPublic: getLogMeta(289),
  _debug: getLogMeta(137),
  debugDev: getLogMeta(145),
  _trace: getLogMeta(73),
  traceDev: getLogMeta(81)
};
function getLogMeta(level) {
  return Object.freeze({
    audience: hasFlag(level, 8) ? "internal" : hasFlag(level, 16) ? "dev" : "public",
    category: hasFlag(level, 4) ? "troubleshooting" : hasFlag(level, 2) ? "todo" : "general",
    level: hasFlag(level, 512) ? 512 : hasFlag(level, 256) ? 256 : hasFlag(level, 128) ? 128 : 64
  });
}
function hasFlag(level, flag) {
  return (level & flag) === flag;
}
function shouldLog(includes, level) {
  return ((level & 32) === 32 ? true : (level & 16) === 16 ? includes.dev : (level & 8) === 8 ? includes.internal : false) && includes.min <= level;
}
var DEFAULTS = {
  loggingConsoleStyle: true,
  loggerConsoleStyle: true,
  includes: Object.freeze({
    internal: false,
    dev: false,
    min: 256
  }),
  filtered: function defaultFiltered() {
  },
  include: function defaultInclude() {
    return {};
  },
  create: null,
  creatExt: null,
  named(parent, name, key) {
    return this.create({
      names: [...parent.names, { name, key }]
    });
  },
  style: {
    bold: void 0,
    italic: void 0,
    cssMemo: new Map([
      ["", ""]
    ]),
    collapseOnRE: /[a-z- ]+/g,
    color: void 0,
    collapsed(name) {
      if (name.length < 5)
        return name;
      const collapsed = name.replace(this.collapseOnRE, "");
      if (!this.cssMemo.has(collapsed)) {
        this.cssMemo.set(collapsed, this.css(name));
      }
      return collapsed;
    },
    css(name) {
      var _a, _b, _c, _d;
      const found = this.cssMemo.get(name);
      if (found)
        return found;
      let css = `color:${(_b = (_a = this.color) == null ? void 0 : _a.call(this, name)) != null ? _b : `hsl(${(name.charCodeAt(0) + name.charCodeAt(name.length - 1)) % 360}, 100%, 60%)`}`;
      if ((_c = this.bold) == null ? void 0 : _c.test(name)) {
        css += ";font-weight:600";
      }
      if ((_d = this.italic) == null ? void 0 : _d.test(name)) {
        css += ";font-style:italic";
      }
      this.cssMemo.set(name, css);
      return css;
    }
  }
};
function createTheatreInternalLogger(useConsole = console, _options = {}) {
  const ref = __spreadProps(__spreadValues({}, DEFAULTS), { includes: __spreadValues({}, DEFAULTS.includes) });
  const createConsole = {
    styled: createConsoleLoggerStyled.bind(ref, useConsole),
    noStyle: createConsoleLoggerNoStyle.bind(ref, useConsole)
  };
  const createExtBound = createExtLogger.bind(ref);
  function getConCreate() {
    return ref.loggingConsoleStyle && ref.loggerConsoleStyle ? createConsole.styled : createConsole.noStyle;
  }
  ref.create = getConCreate();
  return {
    configureLogger(config) {
      var _a;
      if (config === "console") {
        ref.loggerConsoleStyle = DEFAULTS.loggerConsoleStyle;
        ref.create = getConCreate();
      } else if (config.type === "console") {
        ref.loggerConsoleStyle = (_a = config.style) != null ? _a : DEFAULTS.loggerConsoleStyle;
        ref.create = getConCreate();
      } else if (config.type === "keyed") {
        ref.creatExt = (source) => config.keyed(source.names);
        ref.create = createExtBound;
      } else if (config.type === "named") {
        ref.creatExt = configNamedToKeyed.bind(null, config.named);
        ref.create = createExtBound;
      }
    },
    configureLogging(config) {
      var _a, _b, _c, _d, _e;
      ref.includes.dev = (_a = config.dev) != null ? _a : DEFAULTS.includes.dev;
      ref.includes.internal = (_b = config.internal) != null ? _b : DEFAULTS.includes.internal;
      ref.includes.min = (_c = config.min) != null ? _c : DEFAULTS.includes.min;
      ref.include = (_d = config.include) != null ? _d : DEFAULTS.include;
      ref.loggingConsoleStyle = (_e = config.consoleStyle) != null ? _e : DEFAULTS.loggingConsoleStyle;
      ref.create = getConCreate();
    },
    getLogger() {
      return ref.create({ names: [] });
    }
  };
}
function configNamedToKeyed(namedFn, source) {
  const names = [];
  for (let { name, key } of source.names) {
    names.push(key == null ? name : `${name} (${key})`);
  }
  return namedFn(names);
}
function createExtLogger(source) {
  const includes = __spreadValues(__spreadValues({}, this.includes), this.include(source));
  const f2 = this.filtered;
  const named = this.named.bind(this, source);
  const ext = this.creatExt(source);
  const _HMM = shouldLog(includes, 524);
  const _TODO = shouldLog(includes, 522);
  const _ERROR = shouldLog(includes, 521);
  const ERROR_DEV = shouldLog(includes, 529);
  const ERROR_PUBLIC = shouldLog(includes, 545);
  const _WARN = shouldLog(includes, 265);
  const _KAPOW = shouldLog(includes, 268);
  const WARN_DEV = shouldLog(includes, 273);
  const WARN_PUBLIC = shouldLog(includes, 289);
  const _DEBUG = shouldLog(includes, 137);
  const DEBUG_DEV = shouldLog(includes, 145);
  const _TRACE = shouldLog(includes, 73);
  const TRACE_DEV = shouldLog(includes, 81);
  const _hmm = _HMM ? ext.error.bind(ext, LEVELS._hmm) : f2.bind(source, 524);
  const _todo = _TODO ? ext.error.bind(ext, LEVELS._todo) : f2.bind(source, 522);
  const _error = _ERROR ? ext.error.bind(ext, LEVELS._error) : f2.bind(source, 521);
  const errorDev = ERROR_DEV ? ext.error.bind(ext, LEVELS.errorDev) : f2.bind(source, 529);
  const errorPublic = ERROR_PUBLIC ? ext.error.bind(ext, LEVELS.errorPublic) : f2.bind(source, 545);
  const _kapow = _KAPOW ? ext.warn.bind(ext, LEVELS._kapow) : f2.bind(source, 268);
  const _warn = _WARN ? ext.warn.bind(ext, LEVELS._warn) : f2.bind(source, 265);
  const warnDev = WARN_DEV ? ext.warn.bind(ext, LEVELS.warnDev) : f2.bind(source, 273);
  const warnPublic = WARN_PUBLIC ? ext.warn.bind(ext, LEVELS.warnPublic) : f2.bind(source, 273);
  const _debug = _DEBUG ? ext.debug.bind(ext, LEVELS._debug) : f2.bind(source, 137);
  const debugDev = DEBUG_DEV ? ext.debug.bind(ext, LEVELS.debugDev) : f2.bind(source, 145);
  const _trace = _TRACE ? ext.trace.bind(ext, LEVELS._trace) : f2.bind(source, 73);
  const traceDev = TRACE_DEV ? ext.trace.bind(ext, LEVELS.traceDev) : f2.bind(source, 81);
  const logger = {
    _hmm,
    _todo,
    _error,
    errorDev,
    errorPublic,
    _kapow,
    _warn,
    warnDev,
    warnPublic,
    _debug,
    debugDev,
    _trace,
    traceDev,
    lazy: {
      _hmm: _HMM ? lazy(_hmm) : _hmm,
      _todo: _TODO ? lazy(_todo) : _todo,
      _error: _ERROR ? lazy(_error) : _error,
      errorDev: ERROR_DEV ? lazy(errorDev) : errorDev,
      errorPublic: ERROR_PUBLIC ? lazy(errorPublic) : errorPublic,
      _kapow: _KAPOW ? lazy(_kapow) : _kapow,
      _warn: _WARN ? lazy(_warn) : _warn,
      warnDev: WARN_DEV ? lazy(warnDev) : warnDev,
      warnPublic: WARN_PUBLIC ? lazy(warnPublic) : warnPublic,
      _debug: _DEBUG ? lazy(_debug) : _debug,
      debugDev: DEBUG_DEV ? lazy(debugDev) : debugDev,
      _trace: _TRACE ? lazy(_trace) : _trace,
      traceDev: TRACE_DEV ? lazy(traceDev) : traceDev
    },
    named,
    utilFor: {
      internal() {
        return {
          debug: logger._debug,
          error: logger._error,
          warn: logger._warn,
          trace: logger._trace,
          named(name, key) {
            return logger.named(name, key).utilFor.internal();
          }
        };
      },
      dev() {
        return {
          debug: logger.debugDev,
          error: logger.errorDev,
          warn: logger.warnDev,
          trace: logger.traceDev,
          named(name, key) {
            return logger.named(name, key).utilFor.dev();
          }
        };
      },
      public() {
        return {
          error: logger.errorPublic,
          warn: logger.warnPublic,
          debug(message, obj) {
            logger._warn(`(public "debug" filtered out) ${message}`, obj);
          },
          trace(message, obj) {
            logger._warn(`(public "trace" filtered out) ${message}`, obj);
          },
          named(name, key) {
            return logger.named(name, key).utilFor.public();
          }
        };
      }
    }
  };
  return logger;
}
function createConsoleLoggerStyled(con, source) {
  const includes = __spreadValues(__spreadValues({}, this.includes), this.include(source));
  const styleArgs = [];
  let prefix = "";
  for (let i2 = 0; i2 < source.names.length; i2++) {
    const { name, key } = source.names[i2];
    prefix += ` %c${name}`;
    styleArgs.push(this.style.css(name));
    if (key != null) {
      const keyStr = `%c#${key}`;
      prefix += keyStr;
      styleArgs.push(this.style.css(keyStr));
    }
  }
  const f2 = this.filtered;
  const named = this.named.bind(this, source);
  const prefixArr = [prefix, ...styleArgs];
  return _createConsoleLogger(f2, source, includes, con, prefixArr, styledKapowPrefix(prefixArr), named);
}
function styledKapowPrefix(args) {
  const start = args.slice(0);
  for (let i2 = 1; i2 < start.length; i2++)
    start[i2] += ";background-color:#e0005a;padding:2px;color:white";
  return start;
}
function createConsoleLoggerNoStyle(con, source) {
  const includes = __spreadValues(__spreadValues({}, this.includes), this.include(source));
  let prefix = "";
  for (let i2 = 0; i2 < source.names.length; i2++) {
    const { name, key } = source.names[i2];
    prefix += ` ${name}`;
    if (key != null) {
      prefix += `#${key}`;
    }
  }
  const f2 = this.filtered;
  const named = this.named.bind(this, source);
  const prefixArr = [prefix];
  return _createConsoleLogger(f2, source, includes, con, prefixArr, prefixArr, named);
}
function _createConsoleLogger(f2, source, includes, con, prefix, kapowPrefix, named) {
  const _HMM = shouldLog(includes, 524);
  const _TODO = shouldLog(includes, 522);
  const _ERROR = shouldLog(includes, 521);
  const ERROR_DEV = shouldLog(includes, 529);
  const ERROR_PUBLIC = shouldLog(includes, 545);
  const _WARN = shouldLog(includes, 265);
  const _KAPOW = shouldLog(includes, 268);
  const WARN_DEV = shouldLog(includes, 273);
  const WARN_PUBLIC = shouldLog(includes, 289);
  const _DEBUG = shouldLog(includes, 137);
  const DEBUG_DEV = shouldLog(includes, 145);
  const _TRACE = shouldLog(includes, 73);
  const TRACE_DEV = shouldLog(includes, 81);
  const _hmm = _HMM ? con.error.bind(con, ...prefix) : f2.bind(source, 524);
  const _todo = _TODO ? con.error.bind(con, ...prefix) : f2.bind(source, 522);
  const _error = _ERROR ? con.error.bind(con, ...prefix) : f2.bind(source, 521);
  const errorDev = ERROR_DEV ? con.error.bind(con, ...prefix) : f2.bind(source, 529);
  const errorPublic = ERROR_PUBLIC ? con.error.bind(con, ...prefix) : f2.bind(source, 545);
  const _kapow = _KAPOW ? con.warn.bind(con, ...kapowPrefix) : f2.bind(source, 268);
  const _warn = _WARN ? con.warn.bind(con, ...prefix) : f2.bind(source, 265);
  const warnDev = WARN_DEV ? con.warn.bind(con, ...prefix) : f2.bind(source, 273);
  const warnPublic = WARN_PUBLIC ? con.warn.bind(con, ...prefix) : f2.bind(source, 273);
  const _debug = _DEBUG ? con.info.bind(con, ...prefix) : f2.bind(source, 137);
  const debugDev = DEBUG_DEV ? con.info.bind(con, ...prefix) : f2.bind(source, 145);
  const _trace = _TRACE ? con.debug.bind(con, ...prefix) : f2.bind(source, 73);
  const traceDev = TRACE_DEV ? con.debug.bind(con, ...prefix) : f2.bind(source, 81);
  const logger = {
    _hmm,
    _todo,
    _error,
    errorDev,
    errorPublic,
    _kapow,
    _warn,
    warnDev,
    warnPublic,
    _debug,
    debugDev,
    _trace,
    traceDev,
    lazy: {
      _hmm: _HMM ? lazy(_hmm) : _hmm,
      _todo: _TODO ? lazy(_todo) : _todo,
      _error: _ERROR ? lazy(_error) : _error,
      errorDev: ERROR_DEV ? lazy(errorDev) : errorDev,
      errorPublic: ERROR_PUBLIC ? lazy(errorPublic) : errorPublic,
      _kapow: _KAPOW ? lazy(_kapow) : _kapow,
      _warn: _WARN ? lazy(_warn) : _warn,
      warnDev: WARN_DEV ? lazy(warnDev) : warnDev,
      warnPublic: WARN_PUBLIC ? lazy(warnPublic) : warnPublic,
      _debug: _DEBUG ? lazy(_debug) : _debug,
      debugDev: DEBUG_DEV ? lazy(debugDev) : debugDev,
      _trace: _TRACE ? lazy(_trace) : _trace,
      traceDev: TRACE_DEV ? lazy(traceDev) : traceDev
    },
    named,
    utilFor: {
      internal() {
        return {
          debug: logger._debug,
          error: logger._error,
          warn: logger._warn,
          trace: logger._trace,
          named(name, key) {
            return logger.named(name, key).utilFor.internal();
          }
        };
      },
      dev() {
        return {
          debug: logger.debugDev,
          error: logger.errorDev,
          warn: logger.warnDev,
          trace: logger.traceDev,
          named(name, key) {
            return logger.named(name, key).utilFor.dev();
          }
        };
      },
      public() {
        return {
          error: logger.errorPublic,
          warn: logger.warnPublic,
          debug(message, obj) {
            logger._warn(`(public "debug" filtered out) ${message}`, obj);
          },
          trace(message, obj) {
            logger._warn(`(public "trace" filtered out) ${message}`, obj);
          },
          named(name, key) {
            return logger.named(name, key).utilFor.public();
          }
        };
      }
    }
  };
  return logger;
}

// shared/src/logger.ts
var internal = createTheatreInternalLogger(console, {
  _debug: function() {
  },
  _error: function() {
  }
});
internal.configureLogging({
  dev: true,
  min: TheatreLoggerLevel.TRACE
});
var logger_default = internal.getLogger().named("Theatre.js (default logger)").utilFor.dev();

// core/src/sheetObjects/getOrderingOfPropTypeConfig.ts
var cache = new WeakMap();
function getOrderingOfPropTypeConfig(config) {
  const existing = cache.get(config);
  if (existing)
    return existing;
  const map = new Map();
  cache.set(config, map);
  iterateOnCompound([], config, map);
  return map;
}
function iterateOnCompound(path, config, map) {
  for (const [key, subConf] of Object.entries(config.props)) {
    if (!isPropConfigComposite(subConf)) {
      const subPath = [...path, key];
      map.set(JSON.stringify(subPath), map.size);
      iterateOnAny(subPath, subConf, map);
    }
  }
  for (const [key, subConf] of Object.entries(config.props)) {
    if (isPropConfigComposite(subConf)) {
      const subPath = [...path, key];
      map.set(JSON.stringify(subPath), map.size);
      iterateOnAny(subPath, subConf, map);
    }
  }
}
function iterateOnAny(path, config, map) {
  if (config.type === "compound") {
    iterateOnCompound(path, config, map);
  } else if (config.type === "enum") {
    throw new Error(`Enums aren't supported yet`);
  } else {
    map.set(JSON.stringify(path), map.size);
  }
}

// core/src/sheetObjects/SheetObjectTemplate.ts
var SheetObjectTemplate = class {
  constructor(sheetTemplate, objectKey, nativeObject, config) {
    this.sheetTemplate = sheetTemplate;
    __publicField(this, "address");
    __publicField(this, "type", "Theatre_SheetObjectTemplate");
    __publicField(this, "_config");
    __publicField(this, "_cache", new SimpleCache());
    __publicField(this, "project");
    this.address = __spreadProps(__spreadValues({}, sheetTemplate.address), { objectKey });
    this._config = new import_dataverse7.Atom(config);
    this.project = sheetTemplate.project;
  }
  get config() {
    return this._config.getState();
  }
  createInstance(sheet, nativeObject, config) {
    this._config.setState(config);
    return new SheetObject(sheet, this, nativeObject);
  }
  overrideConfig(config) {
    this._config.setState(config);
  }
  getDefaultValues() {
    return this._cache.get("getDefaultValues()", () => (0, import_dataverse7.prism)(() => {
      const config = (0, import_dataverse7.val)(this._config.pointer);
      return getPropDefaultsOfSheetObject(config);
    }));
  }
  getStaticValues() {
    return this._cache.get("getDerivationOfStatics", () => (0, import_dataverse7.prism)(() => {
      var _a;
      const pointerToSheetState = this.sheetTemplate.project.pointers.historic.sheetsById[this.address.sheetId];
      const json = (_a = (0, import_dataverse7.val)(pointerToSheetState.staticOverrides.byObject[this.address.objectKey])) != null ? _a : {};
      const config = (0, import_dataverse7.val)(this._config.pointer);
      const deserialized = config.deserializeAndSanitize(json) || {};
      return deserialized;
    }));
  }
  getArrayOfValidSequenceTracks() {
    return this._cache.get("getArrayOfValidSequenceTracks", () => (0, import_dataverse7.prism)(() => {
      const pointerToSheetState = this.project.pointers.historic.sheetsById[this.address.sheetId];
      const trackIdByPropPath = (0, import_dataverse7.val)(pointerToSheetState.sequence.tracksByObject[this.address.objectKey].trackIdByPropPath);
      if (!trackIdByPropPath)
        return emptyArray;
      const arrayOfIds = [];
      if (!trackIdByPropPath)
        return emptyArray;
      const _entries = Object.entries(trackIdByPropPath);
      for (const [pathToPropInString, trackId] of _entries) {
        const pathToProp = parsePathToProp(pathToPropInString);
        if (!pathToProp)
          continue;
        const propConfig = getPropConfigByPath(this.config, pathToProp);
        const isSequencable = propConfig && isPropConfSequencable(propConfig);
        if (!isSequencable)
          continue;
        arrayOfIds.push({ pathToProp, trackId });
      }
      const mapping = getOrderingOfPropTypeConfig(this.config);
      arrayOfIds.sort((a2, b2) => {
        const pathToPropA = a2.pathToProp;
        const pathToPropB = b2.pathToProp;
        const indexA = mapping.get(JSON.stringify(pathToPropA));
        const indexB = mapping.get(JSON.stringify(pathToPropB));
        if (indexA > indexB) {
          return 1;
        }
        return -1;
      });
      if (arrayOfIds.length === 0) {
        return emptyArray;
      } else {
        return arrayOfIds;
      }
    }));
  }
  getMapOfValidSequenceTracks_forStudio() {
    return this._cache.get("getMapOfValidSequenceTracks_forStudio", () => this.getArrayOfValidSequenceTracks().map((arr) => {
      let map = {};
      for (const { pathToProp, trackId } of arr) {
        set_default(map, pathToProp, trackId);
      }
      return map;
    }));
  }
  getDefaultsAtPointer(pointer3) {
    const { path } = (0, import_dataverse7.getPointerParts)(pointer3);
    const defaults = this.getDefaultValues().getValue();
    const defaultsAtPath = getDeep(defaults, path);
    return defaultsAtPath;
  }
};
function parsePathToProp(pathToPropInString) {
  try {
    const pathToProp = JSON.parse(pathToPropInString);
    return pathToProp;
  } catch (e2) {
    logger_default.warn(`property ${JSON.stringify(pathToPropInString)} cannot be parsed. Skipping.`);
    return void 0;
  }
}

// core/src/sheets/SheetTemplate.ts
var import_dataverse13 = __toModule(require("@theatre/dataverse"));

// shared/src/utils/didYouMean.ts
var import_propose = __toModule(require_propose());
function didYouMean(str, dictionary, prepend = "Did you mean ", append = "?") {
  const p2 = (0, import_propose.default)(str, dictionary, {
    threshold: 0.7
  });
  if (p2) {
    return prepend + JSON.stringify(p2) + append;
  } else {
    return "";
  }
}

// shared/src/utils/errors.ts
var TheatreError = class extends Error {
};
var InvalidArgumentError = class extends TheatreError {
};

// core/src/sequences/Sequence.ts
var import_dataverse10 = __toModule(require("@theatre/dataverse"));
var import_dataverse11 = __toModule(require("@theatre/dataverse"));

// shared/src/utils/defer.ts
function defer() {
  let resolve;
  let reject;
  const promise = new Promise((rs, rj) => {
    resolve = (v2) => {
      rs(v2);
      deferred.status = "resolved";
    };
    reject = (v2) => {
      rj(v2);
      deferred.status = "rejected";
    };
  });
  const deferred = {
    resolve,
    reject,
    promise,
    status: "pending"
  };
  return deferred;
}

// shared/src/utils/noop.ts
var noop = () => {
};
var noop_default = noop;

// core/src/sequences/playbackControllers/DefaultPlaybackController.ts
var import_dataverse8 = __toModule(require("@theatre/dataverse"));
var DefaultPlaybackController = class {
  constructor(_ticker) {
    this._ticker = _ticker;
    __publicField(this, "_stopPlayCallback", noop_default);
    __publicField(this, "_state", new import_dataverse8.Atom({
      position: 0,
      playing: false
    }));
    __publicField(this, "statePointer");
    this.statePointer = this._state.pointer;
  }
  destroy() {
  }
  pause() {
    this._stopPlayCallback();
    this.playing = false;
    this._stopPlayCallback = noop_default;
  }
  gotoPosition(time) {
    this._updatePositionInState(time);
  }
  _updatePositionInState(time) {
    this._state.reduceState(["position"], () => time);
  }
  getCurrentPosition() {
    return this._state.getState().position;
  }
  get playing() {
    return this._state.getState().playing;
  }
  set playing(playing) {
    this._state.setIn(["playing"], playing);
  }
  play(iterationCount, range, rate, direction) {
    if (this.playing) {
      this.pause();
    }
    this.playing = true;
    const ticker = this._ticker;
    const iterationLength = range[1] - range[0];
    {
      const startPos = this.getCurrentPosition();
      if (startPos < range[0] || startPos > range[1]) {
        if (direction === "normal" || direction === "alternate") {
          this._updatePositionInState(range[0]);
        } else if (direction === "reverse" || direction === "alternateReverse") {
          this._updatePositionInState(range[1]);
        }
      } else if (direction === "normal" || direction === "alternate") {
        if (startPos === range[1]) {
          this._updatePositionInState(range[0]);
        }
      } else {
        if (startPos === range[0]) {
          this._updatePositionInState(range[1]);
        }
      }
    }
    const deferred = defer();
    const initialTickerTime = ticker.time;
    const totalPlaybackLength = iterationLength * iterationCount;
    let initialElapsedPos = this.getCurrentPosition() - range[0];
    if (direction === "reverse" || direction === "alternateReverse") {
      initialElapsedPos = range[1] - this.getCurrentPosition();
    }
    const tick = (currentTickerTime) => {
      const elapsedTickerTime = Math.max(currentTickerTime - initialTickerTime, 0);
      const elapsedTickerTimeInSeconds = elapsedTickerTime / 1e3;
      const elapsedPos = Math.min(elapsedTickerTimeInSeconds * rate + initialElapsedPos, totalPlaybackLength);
      if (elapsedPos !== totalPlaybackLength) {
        const iterationNumber = Math.floor(elapsedPos / iterationLength);
        let currentIterationPos = elapsedPos / iterationLength % 1 * iterationLength;
        if (direction !== "normal") {
          if (direction === "reverse") {
            currentIterationPos = iterationLength - currentIterationPos;
          } else {
            const isCurrentIterationNumberEven = iterationNumber % 2 === 0;
            if (direction === "alternate") {
              if (!isCurrentIterationNumberEven) {
                currentIterationPos = iterationLength - currentIterationPos;
              }
            } else {
              if (isCurrentIterationNumberEven) {
                currentIterationPos = iterationLength - currentIterationPos;
              }
            }
          }
        }
        this._updatePositionInState(currentIterationPos + range[0]);
        requestNextTick();
      } else {
        if (direction === "normal") {
          this._updatePositionInState(range[1]);
        } else if (direction === "reverse") {
          this._updatePositionInState(range[0]);
        } else {
          const isLastIterationEven = (iterationCount - 1) % 2 === 0;
          if (direction === "alternate") {
            if (isLastIterationEven) {
              this._updatePositionInState(range[1]);
            } else {
              this._updatePositionInState(range[0]);
            }
          } else {
            if (isLastIterationEven) {
              this._updatePositionInState(range[0]);
            } else {
              this._updatePositionInState(range[1]);
            }
          }
        }
        this.playing = false;
        deferred.resolve(true);
      }
    };
    this._stopPlayCallback = () => {
      ticker.offThisOrNextTick(tick);
      ticker.offNextTick(tick);
      if (this.playing)
        deferred.resolve(false);
    };
    const requestNextTick = () => ticker.onNextTick(tick);
    ticker.onThisOrNextTick(tick);
    return deferred.promise;
  }
  playDynamicRange(rangeD) {
    if (this.playing) {
      this.pause();
    }
    this.playing = true;
    const ticker = this._ticker;
    const deferred = defer();
    const untapFromRangeD = rangeD.keepHot();
    deferred.promise.then(untapFromRangeD, untapFromRangeD);
    let lastTickerTime = ticker.time;
    const tick = (currentTickerTime) => {
      const elapsedSinceLastTick = Math.max(currentTickerTime - lastTickerTime, 0);
      lastTickerTime = currentTickerTime;
      const elapsedSinceLastTickInSeconds = elapsedSinceLastTick / 1e3;
      const lastPosition = this.getCurrentPosition();
      const range = rangeD.getValue();
      if (lastPosition < range[0] || lastPosition > range[1]) {
        this.gotoPosition(range[0]);
      } else {
        let newPosition = lastPosition + elapsedSinceLastTickInSeconds;
        if (newPosition > range[1]) {
          newPosition = range[0] + (newPosition - range[1]);
        }
        this.gotoPosition(newPosition);
      }
      requestNextTick();
    };
    this._stopPlayCallback = () => {
      ticker.offThisOrNextTick(tick);
      ticker.offNextTick(tick);
      deferred.resolve(false);
    };
    const requestNextTick = () => ticker.onNextTick(tick);
    ticker.onThisOrNextTick(tick);
    return deferred.promise;
  }
};

// core/src/sequences/playbackControllers/AudioPlaybackController.ts
var import_dataverse9 = __toModule(require("@theatre/dataverse"));
var AudioPlaybackController = class {
  constructor(_ticker, _decodedBuffer, _audioContext, _nodeDestination) {
    this._ticker = _ticker;
    this._decodedBuffer = _decodedBuffer;
    this._audioContext = _audioContext;
    this._nodeDestination = _nodeDestination;
    __publicField(this, "_mainGain");
    __publicField(this, "_state", new import_dataverse9.Atom({
      position: 0,
      playing: false
    }));
    __publicField(this, "statePointer");
    __publicField(this, "_stopPlayCallback", noop_default);
    this.statePointer = this._state.pointer;
    this._mainGain = this._audioContext.createGain();
    this._mainGain.connect(this._nodeDestination);
  }
  playDynamicRange(rangeD) {
    throw new Error("Method not implemented.");
  }
  get _playing() {
    return this._state.getState().playing;
  }
  set _playing(playing) {
    this._state.setIn(["playing"], playing);
  }
  destroy() {
  }
  pause() {
    this._stopPlayCallback();
    this._playing = false;
    this._stopPlayCallback = noop_default;
  }
  gotoPosition(time) {
    this._updatePositionInState(time);
  }
  _updatePositionInState(time) {
    this._state.reduceState(["position"], () => time);
  }
  getCurrentPosition() {
    return this._state.getState().position;
  }
  play(iterationCount, range, rate, direction) {
    if (this._playing) {
      this.pause();
    }
    this._playing = true;
    const ticker = this._ticker;
    let startPos = this.getCurrentPosition();
    const iterationLength = range[1] - range[0];
    if (direction !== "normal") {
      throw new InvalidArgumentError(`Audio-controlled sequences can only be played in the "normal" direction. '${direction}' given.`);
    }
    if (startPos < range[0] || startPos > range[1]) {
      this._updatePositionInState(range[0]);
    } else if (startPos === range[1]) {
      this._updatePositionInState(range[0]);
    }
    startPos = this.getCurrentPosition();
    const deferred = defer();
    const currentSource = this._audioContext.createBufferSource();
    currentSource.buffer = this._decodedBuffer;
    currentSource.connect(this._mainGain);
    currentSource.playbackRate.value = rate;
    if (iterationCount > 1e3) {
      console.warn(`Audio-controlled sequences cannot have an iterationCount larger than 1000. It has been clamped to 1000.`);
      iterationCount = 1e3;
    }
    if (iterationCount > 1) {
      currentSource.loop = true;
      currentSource.loopStart = range[0];
      currentSource.loopEnd = range[1];
    }
    const initialTickerTime = ticker.time;
    let initialElapsedPos = startPos - range[0];
    const totalPlaybackLength = iterationLength * iterationCount;
    currentSource.start(0, startPos, totalPlaybackLength - initialElapsedPos);
    const tick = (currentTickerTime) => {
      const elapsedTickerTime = Math.max(currentTickerTime - initialTickerTime, 0);
      const elapsedTickerTimeInSeconds = elapsedTickerTime / 1e3;
      const elapsedPos = Math.min(elapsedTickerTimeInSeconds * rate + initialElapsedPos, totalPlaybackLength);
      if (elapsedPos !== totalPlaybackLength) {
        let currentIterationPos = elapsedPos / iterationLength % 1 * iterationLength;
        this._updatePositionInState(currentIterationPos + range[0]);
        requestNextTick();
      } else {
        this._updatePositionInState(range[1]);
        this._playing = false;
        cleanup();
        deferred.resolve(true);
      }
    };
    const cleanup = () => {
      currentSource.stop();
      currentSource.disconnect();
    };
    this._stopPlayCallback = () => {
      cleanup();
      ticker.offThisOrNextTick(tick);
      ticker.offNextTick(tick);
      if (this._playing)
        deferred.resolve(false);
    };
    const requestNextTick = () => ticker.onNextTick(tick);
    ticker.onThisOrNextTick(tick);
    return deferred.promise;
  }
};

// core/src/sequences/TheatreSequence.ts
var TheatreSequence = class {
  get type() {
    return "Theatre_Sequence_PublicAPI";
  }
  constructor(sheet) {
    setPrivateAPI(this, sheet);
  }
  play(conf) {
    const priv = privateAPI(this);
    if (priv._project.isReady()) {
      return priv.play(conf);
    } else {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`You seem to have called sequence.play() before the project has finished loading.
This would **not** a problem in production when using '@theatre/core', since Theatre.js loads instantly in core mode. However, when using '@theatre/studio', it takes a few milliseconds for it to load your project's state, before which your sequences cannot start playing.

To fix this, simply defer calling sequence.play() until after the project is loaded, like this:
project.ready.then(() => {
  sequence.play()
})`);
      }
      const d2 = defer();
      d2.resolve(true);
      return d2.promise;
    }
  }
  pause() {
    privateAPI(this).pause();
  }
  get position() {
    return privateAPI(this).position;
  }
  set position(position) {
    privateAPI(this).position = position;
  }
  async attachAudio(args) {
    const { audioContext, destinationNode, decodedBuffer, gainNode } = await resolveAudioBuffer(args);
    const playbackController = new AudioPlaybackController(coreTicker_default, decodedBuffer, audioContext, gainNode);
    privateAPI(this).replacePlaybackController(playbackController);
    return { audioContext, destinationNode, decodedBuffer, gainNode };
  }
  get pointer() {
    return privateAPI(this).pointer;
  }
};
async function resolveAudioBuffer(args) {
  function getAudioContext() {
    if (args.audioContext)
      return Promise.resolve(args.audioContext);
    const ctx = new AudioContext();
    if (ctx.state === "running")
      return Promise.resolve(ctx);
    if (typeof window === "undefined") {
      return Promise.resolve(ctx);
    }
    return new Promise((resolve) => {
      const listener = () => {
        ctx.resume();
      };
      const eventsToHookInto = [
        "mousedown",
        "keydown",
        "touchstart"
      ];
      const eventListenerOpts = { capture: true, passive: false };
      eventsToHookInto.forEach((eventName) => {
        window.addEventListener(eventName, listener, eventListenerOpts);
      });
      ctx.addEventListener("statechange", () => {
        if (ctx.state === "running") {
          eventsToHookInto.forEach((eventName) => {
            window.removeEventListener(eventName, listener, eventListenerOpts);
          });
          resolve(ctx);
        }
      });
    });
  }
  async function getAudioBuffer() {
    if (args.source instanceof AudioBuffer) {
      return args.source;
    }
    const decodedBufferDeferred = defer();
    if (typeof args.source !== "string") {
      throw new Error(`Error validating arguments to sequence.attachAudio(). args.source must either be a string or an instance of AudioBuffer.`);
    }
    let fetchResponse;
    try {
      fetchResponse = await fetch(args.source);
    } catch (e2) {
      console.error(e2);
      throw new Error(`Could not fetch '${args.source}'. Network error logged above.`);
    }
    let arrayBuffer;
    try {
      arrayBuffer = await fetchResponse.arrayBuffer();
    } catch (e2) {
      console.error(e2);
      throw new Error(`Could not read '${args.source}' as an arrayBuffer.`);
    }
    const audioContext2 = await audioContextPromise;
    audioContext2.decodeAudioData(arrayBuffer, decodedBufferDeferred.resolve, decodedBufferDeferred.reject);
    let decodedBuffer2;
    try {
      decodedBuffer2 = await decodedBufferDeferred.promise;
    } catch (e2) {
      console.error(e2);
      throw new Error(`Could not decode ${args.source} as an audio file.`);
    }
    return decodedBuffer2;
  }
  const audioContextPromise = getAudioContext();
  const audioBufferPromise = getAudioBuffer();
  const [audioContext, decodedBuffer] = await Promise.all([
    audioContextPromise,
    audioBufferPromise
  ]);
  const destinationNode = args.destinationNode || audioContext.destination;
  const gainNode = audioContext.createGain();
  gainNode.connect(destinationNode);
  return {
    audioContext,
    decodedBuffer,
    gainNode,
    destinationNode
  };
}

// core/src/sequences/Sequence.ts
var possibleDirections = [
  "normal",
  "reverse",
  "alternate",
  "alternateReverse"
];
var Sequence = class {
  constructor(_project, _sheet, _lengthD, _subUnitsPerUnitD, playbackController) {
    this._project = _project;
    this._sheet = _sheet;
    this._lengthD = _lengthD;
    this._subUnitsPerUnitD = _subUnitsPerUnitD;
    __publicField(this, "address");
    __publicField(this, "publicApi");
    __publicField(this, "_playbackControllerBox");
    __publicField(this, "_statePointerDerivation");
    __publicField(this, "_positionD");
    __publicField(this, "_positionFormatterD");
    __publicField(this, "_playableRangeD");
    __publicField(this, "pointer", (0, import_dataverse10.pointer)({ root: this, path: [] }));
    __publicField(this, "$$isIdentityDerivationProvider", true);
    __publicField(this, "_logger");
    __publicField(this, "closestGridPosition", (posInUnitSpace) => {
      const subUnitsPerUnit = this.subUnitsPerUnit;
      const gridLength = 1 / subUnitsPerUnit;
      return parseFloat((Math.round(posInUnitSpace / gridLength) * gridLength).toFixed(3));
    });
    this._logger = _project._logger.named("Sheet", _sheet.address.sheetId).named("Instance", _sheet.address.sheetInstanceId);
    this.address = __spreadProps(__spreadValues({}, this._sheet.address), { sequenceName: "default" });
    this.publicApi = new TheatreSequence(this);
    this._playbackControllerBox = new import_dataverse11.Box(playbackController != null ? playbackController : new DefaultPlaybackController(coreTicker_default));
    this._statePointerDerivation = this._playbackControllerBox.derivation.map((playbackController2) => playbackController2.statePointer);
    this._positionD = this._statePointerDerivation.flatMap((statePointer) => (0, import_dataverse11.valueDerivation)(statePointer.position));
    this._positionFormatterD = this._subUnitsPerUnitD.map((subUnitsPerUnit) => new TimeBasedPositionFormatter(subUnitsPerUnit));
  }
  getIdentityDerivation(path) {
    if (path.length === 0) {
      return (0, import_dataverse11.prism)(() => ({
        length: (0, import_dataverse11.val)(this.pointer.length),
        playing: (0, import_dataverse11.val)(this.pointer.playing),
        position: (0, import_dataverse11.val)(this.pointer.position)
      }));
    }
    if (path.length > 1) {
      return (0, import_dataverse11.prism)(() => void 0);
    }
    const [prop] = path;
    if (prop === "length") {
      return this._lengthD;
    } else if (prop === "position") {
      return this._positionD;
    } else if (prop === "playing") {
      return (0, import_dataverse11.prism)(() => {
        return (0, import_dataverse11.val)(this._statePointerDerivation.getValue().playing);
      });
    } else {
      return (0, import_dataverse11.prism)(() => void 0);
    }
  }
  get positionFormatter() {
    return this._positionFormatterD.getValue();
  }
  get derivationToStatePointer() {
    return this._statePointerDerivation;
  }
  get length() {
    return this._lengthD.getValue();
  }
  get positionDerivation() {
    return this._positionD;
  }
  get position() {
    return this._playbackControllerBox.get().getCurrentPosition();
  }
  get subUnitsPerUnit() {
    return this._subUnitsPerUnitD.getValue();
  }
  get positionSnappedToGrid() {
    return this.closestGridPosition(this.position);
  }
  set position(requestedPosition) {
    let position = requestedPosition;
    this.pause();
    if (process.env.NODE_ENV !== "production") {
      if (typeof position !== "number") {
        console.error(`value t in sequence.position = t must be a number. ${typeof position} given`);
        position = 0;
      }
      if (position < 0) {
        console.error(`sequence.position must be a positive number. ${position} given`);
        position = 0;
      }
    }
    if (position > this.length) {
      position = this.length;
    }
    const dur = this.length;
    this._playbackControllerBox.get().gotoPosition(position > dur ? dur : position);
  }
  getDurationCold() {
    return this._lengthD.getValue();
  }
  get playing() {
    return (0, import_dataverse11.val)(this._playbackControllerBox.get().statePointer.playing);
  }
  _makeRangeFromSequenceTemplate() {
    return (0, import_dataverse11.prism)(() => {
      return [0, (0, import_dataverse11.val)(this._lengthD)];
    });
  }
  playDynamicRange(rangeD) {
    return this._playbackControllerBox.get().playDynamicRange(rangeD);
  }
  async play(conf) {
    const sequenceDuration = this.length;
    const range = conf && conf.range ? conf.range : [0, sequenceDuration];
    if (process.env.NODE_ENV !== "production") {
      if (typeof range[0] !== "number" || range[0] < 0) {
        throw new InvalidArgumentError(`Argument conf.range[0] in sequence.play(conf) must be a positive number. ${JSON.stringify(range[0])} given.`);
      }
      if (range[0] >= sequenceDuration) {
        throw new InvalidArgumentError(`Argument conf.range[0] in sequence.play(conf) cannot be longer than the duration of the sequence, which is ${sequenceDuration}s. ${JSON.stringify(range[0])} given.`);
      }
      if (typeof range[1] !== "number" || range[1] <= 0) {
        throw new InvalidArgumentError(`Argument conf.range[1] in sequence.play(conf) must be a number larger than zero. ${JSON.stringify(range[1])} given.`);
      }
      if (range[1] > sequenceDuration) {
        console.warn(`Argument conf.range[1] in sequence.play(conf) cannot be longer than the duration of the sequence, which is ${sequenceDuration}s. ${JSON.stringify(range[1])} given.`);
        range[1] = sequenceDuration;
      }
      if (range[1] <= range[0]) {
        throw new InvalidArgumentError(`Argument conf.range[1] in sequence.play(conf) must be larger than conf.range[0]. ${JSON.stringify(range)} given.`);
      }
    }
    const iterationCount = conf && typeof conf.iterationCount === "number" ? conf.iterationCount : 1;
    if (process.env.NODE_ENV !== "production") {
      if (!(Number.isInteger(iterationCount) && iterationCount > 0) && iterationCount !== Infinity) {
        throw new InvalidArgumentError(`Argument conf.iterationCount in sequence.play(conf) must be an integer larger than 0. ${JSON.stringify(iterationCount)} given.`);
      }
    }
    const rate = conf && typeof conf.rate !== "undefined" ? conf.rate : 1;
    if (process.env.NODE_ENV !== "production") {
      if (typeof rate !== "number" || rate === 0) {
        throw new InvalidArgumentError(`Argument conf.rate in sequence.play(conf) must be a number larger than 0. ${JSON.stringify(rate)} given.`);
      }
      if (rate < 0) {
        throw new InvalidArgumentError(`Argument conf.rate in sequence.play(conf) must be a number larger than 0. ${JSON.stringify(rate)} given. If you want the animation to play backwards, try setting conf.direction to 'reverse' or 'alternateReverse'.`);
      }
    }
    const direction = conf && conf.direction ? conf.direction : "normal";
    if (process.env.NODE_ENV !== "production") {
      if (possibleDirections.indexOf(direction) === -1) {
        throw new InvalidArgumentError(`Argument conf.direction in sequence.play(conf) must be one of ${JSON.stringify(possibleDirections)}. ${JSON.stringify(direction)} given. ${didYouMean(direction, possibleDirections)}`);
      }
    }
    return await this._play(iterationCount, [range[0], range[1]], rate, direction);
  }
  _play(iterationCount, range, rate, direction) {
    return this._playbackControllerBox.get().play(iterationCount, range, rate, direction);
  }
  pause() {
    this._playbackControllerBox.get().pause();
  }
  replacePlaybackController(playbackController) {
    this.pause();
    const oldController = this._playbackControllerBox.get();
    this._playbackControllerBox.set(playbackController);
    const time = oldController.getCurrentPosition();
    oldController.destroy();
    playbackController.gotoPosition(time);
  }
};
var TimeBasedPositionFormatter = class {
  constructor(_fps) {
    this._fps = _fps;
  }
  formatSubUnitForGrid(posInUnitSpace) {
    const subSecondPos = posInUnitSpace % 1;
    const frame = 1 / this._fps;
    const frames = Math.round(subSecondPos / frame);
    return frames + "f";
  }
  formatFullUnitForGrid(posInUnitSpace) {
    let p2 = posInUnitSpace;
    let s2 = "";
    if (p2 >= hour) {
      const hours = Math.floor(p2 / hour);
      s2 += hours + "h";
      p2 = p2 % hour;
    }
    if (p2 >= minute) {
      const minutes = Math.floor(p2 / minute);
      s2 += minutes + "m";
      p2 = p2 % minute;
    }
    if (p2 >= second) {
      const seconds = Math.floor(p2 / second);
      s2 += seconds + "s";
      p2 = p2 % second;
    }
    const frame = 1 / this._fps;
    if (p2 >= frame) {
      const frames = Math.floor(p2 / frame);
      s2 += frames + "f";
      p2 = p2 % frame;
    }
    return s2.length === 0 ? "0s" : s2;
  }
  formatForPlayhead(posInUnitSpace) {
    let p2 = posInUnitSpace;
    let s2 = "";
    if (p2 >= hour) {
      const hours = Math.floor(p2 / hour);
      s2 += padStart_default(hours.toString(), 2, "0") + "h";
      p2 = p2 % hour;
    }
    if (p2 >= minute) {
      const minutes = Math.floor(p2 / minute);
      s2 += padStart_default(minutes.toString(), 2, "0") + "m";
      p2 = p2 % minute;
    } else if (s2.length > 0) {
      s2 += "00m";
    }
    if (p2 >= second) {
      const seconds = Math.floor(p2 / second);
      s2 += padStart_default(seconds.toString(), 2, "0") + "s";
      p2 = p2 % second;
    } else {
      s2 += "00s";
    }
    const frameLength = 1 / this._fps;
    if (p2 >= frameLength) {
      const frames = Math.round(p2 / frameLength);
      s2 += padStart_default(frames.toString(), 2, "0") + "f";
      p2 = p2 % frameLength;
    } else if (p2 / frameLength > 0.98) {
      const frames = 1;
      s2 += padStart_default(frames.toString(), 2, "0") + "f";
      p2 = p2 % frameLength;
    } else {
      s2 += "00f";
    }
    return s2.length === 0 ? "00s00f" : s2;
  }
  formatBasic(posInUnitSpace) {
    return posInUnitSpace.toFixed(2) + "s";
  }
};
var second = 1;
var minute = second * 60;
var hour = minute * 60;

// core/src/propTypes/index.ts
var propTypes_exports = {};
__export(propTypes_exports, {
  boolean: () => boolean,
  compound: () => compound,
  number: () => number,
  rgba: () => rgba,
  string: () => string,
  stringLiteral: () => stringLiteral
});

// shared/src/utils/ellipsify.ts
function ellipsify(str, maxLength) {
  if (str.length <= maxLength)
    return str;
  return str.substr(0, maxLength - 3) + "...";
}

// shared/src/utils/userReadableTypeOfValue.ts
var userReadableTypeOfValue = (v2) => {
  if (typeof v2 === "string") {
    return `string("${ellipsify(v2, 10)}")`;
  } else if (typeof v2 === "number") {
    return `number(${ellipsify(String(v2), 10)})`;
  } else if (v2 === null) {
    return "null";
  } else if (v2 === void 0) {
    return "undefined";
  } else if (typeof v2 === "boolean") {
    return String(v2);
  } else if (Array.isArray(v2)) {
    return "array";
  } else if (typeof v2 === "object") {
    return "object";
  } else {
    return "unknown";
  }
};
var userReadableTypeOfValue_default = userReadableTypeOfValue;

// shared/src/utils/color.ts
function rgba2hex(rgba2, {
  removeAlphaIfOpaque = false
} = {}) {
  const alpha = (rgba2.a * 255 | 1 << 8).toString(16).slice(1);
  const hex = (rgba2.r * 255 | 1 << 8).toString(16).slice(1) + (rgba2.g * 255 | 1 << 8).toString(16).slice(1) + (rgba2.b * 255 | 1 << 8).toString(16).slice(1) + (removeAlphaIfOpaque && alpha === "ff" ? "" : alpha);
  return `#${hex}`;
}
function decorateRgba(rgba2) {
  return __spreadProps(__spreadValues({}, rgba2), {
    toString() {
      return rgba2hex(this, { removeAlphaIfOpaque: true });
    }
  });
}
function clampRgba(rgba2) {
  return Object.fromEntries(Object.entries(rgba2).map(([key, value]) => [key, clamp_default(value, 0, 1)]));
}
function linearSrgbToSrgb(rgba2) {
  function compress(x2) {
    if (x2 >= 31308e-7)
      return 1.055 * x2 ** (1 / 2.4) - 0.055;
    else
      return 12.92 * x2;
  }
  return clampRgba({
    r: compress(rgba2.r),
    g: compress(rgba2.g),
    b: compress(rgba2.b),
    a: rgba2.a
  });
}
function srgbToLinearSrgb(rgba2) {
  function expand(x2) {
    if (x2 >= 0.04045)
      return ((x2 + 0.055) / (1 + 0.055)) ** 2.4;
    else
      return x2 / 12.92;
  }
  return {
    r: expand(rgba2.r),
    g: expand(rgba2.g),
    b: expand(rgba2.b),
    a: rgba2.a
  };
}
function linearSrgbToOklab(rgba2) {
  let l2 = 0.4122214708 * rgba2.r + 0.5363325363 * rgba2.g + 0.0514459929 * rgba2.b;
  let m = 0.2119034982 * rgba2.r + 0.6806995451 * rgba2.g + 0.1073969566 * rgba2.b;
  let s2 = 0.0883024619 * rgba2.r + 0.2817188376 * rgba2.g + 0.6299787005 * rgba2.b;
  let l_ = Math.cbrt(l2);
  let m_ = Math.cbrt(m);
  let s_ = Math.cbrt(s2);
  return {
    L: 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_,
    a: 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_,
    b: 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_,
    alpha: rgba2.a
  };
}
function oklabToLinearSrgb(laba) {
  let l_ = laba.L + 0.3963377774 * laba.a + 0.2158037573 * laba.b;
  let m_ = laba.L - 0.1055613458 * laba.a - 0.0638541728 * laba.b;
  let s_ = laba.L - 0.0894841775 * laba.a - 1.291485548 * laba.b;
  let l2 = l_ * l_ * l_;
  let m = m_ * m_ * m_;
  let s2 = s_ * s_ * s_;
  return {
    r: 4.0767416621 * l2 - 3.3077115913 * m + 0.2309699292 * s2,
    g: -1.2684380046 * l2 + 2.6097574011 * m - 0.3413193965 * s2,
    b: -0.0041960863 * l2 - 0.7034186147 * m + 1.707614701 * s2,
    a: laba.alpha
  };
}

// core/src/propTypes/internals.ts
var propTypeSymbol = Symbol("TheatrePropType_Basic");
function isLonghandPropType(t3) {
  return typeof t3 === "object" && !!t3 && t3[propTypeSymbol] === "TheatrePropType";
}
function toLonghandProp(p2) {
  if (typeof p2 === "number") {
    return number(p2);
  } else if (typeof p2 === "boolean") {
    return boolean(p2);
  } else if (typeof p2 === "string") {
    return string(p2);
  } else if (typeof p2 === "object" && !!p2) {
    if (isLonghandPropType(p2))
      return p2;
    if (isPlainObject_default(p2)) {
      return compound(p2);
    } else {
      throw new InvalidArgumentError(`This value is not a valid prop type: ${userReadableTypeOfValue_default(p2)}`);
    }
  } else {
    throw new InvalidArgumentError(`This value is not a valid prop type: ${userReadableTypeOfValue_default(p2)}`);
  }
}
function sanitizeCompoundProps(props) {
  const sanitizedProps = {};
  if (process.env.NODE_ENV !== "production") {
    if (typeof props !== "object" || !props) {
      throw new InvalidArgumentError(`t.compound() expects an object, like: {x: 10}. ${userReadableTypeOfValue_default(props)} given.`);
    }
  }
  for (const key of Object.keys(props)) {
    if (process.env.NODE_ENV !== "production") {
      if (typeof key !== "string") {
        throw new InvalidArgumentError(`t.compound()'s keys must be all strings. ${userReadableTypeOfValue_default(key)} given.`);
      } else if (key.length === 0 || !key.match(/^\w+$/)) {
        throw new InvalidArgumentError(`compound key ${userReadableTypeOfValue_default(key)} is invalid. The keys must be alphanumeric and start with a letter.`);
      } else if (key.length > 64) {
        throw new InvalidArgumentError(`compound key ${userReadableTypeOfValue_default(key)} is too long.`);
      }
    }
    const val7 = props[key];
    if (isLonghandPropType(val7)) {
      sanitizedProps[key] = val7;
    } else {
      sanitizedProps[key] = toLonghandProp(val7);
    }
  }
  return sanitizedProps;
}

// core/src/propTypes/index.ts
var validateCommonOpts = (fnCallSignature, opts) => {
  if (process.env.NODE_ENV !== "production") {
    if (opts === void 0)
      return;
    if (typeof opts !== "object" || opts === null) {
      throw new Error(`opts in ${fnCallSignature} must either be undefined or an object.`);
    }
    if (Object.prototype.hasOwnProperty.call(opts, "label")) {
      const { label } = opts;
      if (typeof label !== "string") {
        throw new Error(`opts.label in ${fnCallSignature} should be a string. ${userReadableTypeOfValue_default(label)} given.`);
      }
      if (label.trim().length !== label.length) {
        throw new Error(`opts.label in ${fnCallSignature} should not start/end with whitespace. "${label}" given.`);
      }
      if (label.length === 0) {
        throw new Error(`opts.label in ${fnCallSignature} should not be an empty string. If you wish to have no label, remove opts.label from opts.`);
      }
    }
  }
};
var compound = (props, opts = {}) => {
  validateCommonOpts("t.compound(props, opts)", opts);
  const sanitizedProps = sanitizeCompoundProps(props);
  const deserializationCache = new WeakMap();
  const config = {
    type: "compound",
    props: sanitizedProps,
    valueType: null,
    [propTypeSymbol]: "TheatrePropType",
    label: opts.label,
    default: mapValues_default(sanitizedProps, (p2) => p2.default),
    deserializeAndSanitize: (json) => {
      if (typeof json !== "object" || !json)
        return void 0;
      if (deserializationCache.has(json)) {
        return deserializationCache.get(json);
      }
      const deserialized = {};
      let atLeastOnePropWasDeserialized = false;
      for (const [key, propConfig] of Object.entries(sanitizedProps)) {
        if (Object.prototype.hasOwnProperty.call(json, key)) {
          const deserializedSub = propConfig.deserializeAndSanitize(json[key]);
          if (deserializedSub != null) {
            atLeastOnePropWasDeserialized = true;
            deserialized[key] = deserializedSub;
          }
        }
      }
      deserializationCache.set(json, deserialized);
      if (atLeastOnePropWasDeserialized) {
        return deserialized;
      }
    }
  };
  return config;
};
var number = (defaultValue, opts = {}) => {
  var _a;
  if (process.env.NODE_ENV !== "production") {
    validateCommonOpts("t.number(defaultValue, opts)", opts);
    if (typeof defaultValue !== "number" || !isFinite(defaultValue)) {
      throw new Error(`Argument defaultValue in t.number(defaultValue) must be a number. ${userReadableTypeOfValue_default(defaultValue)} given.`);
    }
    if (typeof opts === "object" && opts !== null) {
      if (Object.prototype.hasOwnProperty.call(opts, "range")) {
        if (!Array.isArray(opts.range)) {
          throw new Error(`opts.range in t.number(defaultValue, opts) must be a tuple of two numbers. ${userReadableTypeOfValue_default(opts.range)} given.`);
        }
        if (opts.range.length !== 2) {
          throw new Error(`opts.range in t.number(defaultValue, opts) must have two elements. ${opts.range.length} given.`);
        }
        if (!opts.range.every((n2) => typeof n2 === "number" && !isNaN(n2))) {
          throw new Error(`opts.range in t.number(defaultValue, opts) must be a tuple of two numbers.`);
        }
        if (opts.range[0] >= opts.range[1]) {
          throw new Error(`opts.range[0] in t.number(defaultValue, opts) must be smaller than opts.range[1]. Given: ${JSON.stringify(opts.range)}`);
        }
      }
      if (Object.prototype.hasOwnProperty.call(opts, "nudgeMultiplier")) {
        if (typeof opts.nudgeMultiplier !== "number" || !isFinite(opts.nudgeMultiplier)) {
          throw new Error(`opts.nudgeMultiplier in t.number(defaultValue, opts) must be a finite number. ${userReadableTypeOfValue_default(opts.nudgeMultiplier)} given.`);
        }
      }
      if (Object.prototype.hasOwnProperty.call(opts, "nudgeFn")) {
        if (typeof opts.nudgeFn !== "function") {
          throw new Error(`opts.nudgeFn in t.number(defaultValue, opts) must be a function. ${userReadableTypeOfValue_default(opts.nudgeFn)} given.`);
        }
      }
    }
  }
  return __spreadProps(__spreadValues({
    type: "number",
    valueType: 0,
    default: defaultValue,
    [propTypeSymbol]: "TheatrePropType"
  }, opts ? opts : {}), {
    label: opts.label,
    nudgeFn: (_a = opts.nudgeFn) != null ? _a : defaultNumberNudgeFn,
    nudgeMultiplier: typeof opts.nudgeMultiplier === "number" ? opts.nudgeMultiplier : 1,
    interpolate: _interpolateNumber,
    deserializeAndSanitize: numberDeserializer(opts.range)
  });
};
var numberDeserializer = (range) => range ? (json) => {
  if (!(typeof json === "number" && isFinite(json)))
    return void 0;
  return clamp_default(json, range[0], range[1]);
} : _ensureNumber;
var _ensureNumber = (value) => typeof value === "number" && isFinite(value) ? value : void 0;
var _interpolateNumber = (left, right, progression) => {
  return left + progression * (right - left);
};
var rgba = (defaultValue = { r: 0, g: 0, b: 0, a: 1 }, opts = {}) => {
  if (process.env.NODE_ENV !== "production") {
    validateCommonOpts("t.rgba(defaultValue, opts)", opts);
    let valid = true;
    for (const p2 of ["r", "g", "b", "a"]) {
      if (!Object.prototype.hasOwnProperty.call(defaultValue, p2) || typeof defaultValue[p2] !== "number") {
        valid = false;
      }
    }
    if (!valid) {
      throw new Error(`Argument defaultValue in t.rgba(defaultValue) must be of the shape { r: number; g: number, b: number, a: number; }.`);
    }
  }
  const sanitized = {};
  for (const component of ["r", "g", "b", "a"]) {
    ;
    sanitized[component] = Math.min(Math.max(defaultValue[component], 0), 1);
  }
  return {
    type: "rgba",
    valueType: null,
    default: decorateRgba(sanitized),
    [propTypeSymbol]: "TheatrePropType",
    label: opts.label,
    interpolate: _interpolateRgba,
    deserializeAndSanitize: _sanitizeRgba
  };
};
var _sanitizeRgba = (val7) => {
  if (!val7)
    return void 0;
  let valid = true;
  for (const c2 of ["r", "g", "b", "a"]) {
    if (!Object.prototype.hasOwnProperty.call(val7, c2) || typeof val7[c2] !== "number") {
      valid = false;
    }
  }
  if (!valid)
    return void 0;
  const sanitized = {};
  for (const c2 of ["r", "g", "b", "a"]) {
    ;
    sanitized[c2] = Math.min(Math.max(val7[c2], 0), 1);
  }
  return decorateRgba(sanitized);
};
var _interpolateRgba = (left, right, progression) => {
  const leftLab = linearSrgbToOklab(srgbToLinearSrgb(left));
  const rightLab = linearSrgbToOklab(srgbToLinearSrgb(right));
  const interpolatedLab = {
    L: (1 - progression) * leftLab.L + progression * rightLab.L,
    a: (1 - progression) * leftLab.a + progression * rightLab.a,
    b: (1 - progression) * leftLab.b + progression * rightLab.b,
    alpha: (1 - progression) * leftLab.alpha + progression * rightLab.alpha
  };
  const interpolatedRgba = linearSrgbToSrgb(oklabToLinearSrgb(interpolatedLab));
  return decorateRgba(interpolatedRgba);
};
var boolean = (defaultValue, opts = {}) => {
  var _a;
  if (process.env.NODE_ENV !== "production") {
    validateCommonOpts("t.boolean(defaultValue, opts)", opts);
    if (typeof defaultValue !== "boolean") {
      throw new Error(`defaultValue in t.boolean(defaultValue) must be a boolean. ${userReadableTypeOfValue_default(defaultValue)} given.`);
    }
  }
  return {
    type: "boolean",
    default: defaultValue,
    valueType: null,
    [propTypeSymbol]: "TheatrePropType",
    label: opts.label,
    interpolate: (_a = opts.interpolate) != null ? _a : leftInterpolate,
    deserializeAndSanitize: _ensureBoolean
  };
};
var _ensureBoolean = (val7) => {
  return typeof val7 === "boolean" ? val7 : void 0;
};
function leftInterpolate(left) {
  return left;
}
var string = (defaultValue, opts = {}) => {
  var _a;
  if (process.env.NODE_ENV !== "production") {
    validateCommonOpts("t.string(defaultValue, opts)", opts);
    if (typeof defaultValue !== "string") {
      throw new Error(`defaultValue in t.string(defaultValue) must be a string. ${userReadableTypeOfValue_default(defaultValue)} given.`);
    }
  }
  return {
    type: "string",
    default: defaultValue,
    valueType: null,
    [propTypeSymbol]: "TheatrePropType",
    label: opts.label,
    interpolate: (_a = opts.interpolate) != null ? _a : leftInterpolate,
    deserializeAndSanitize: _ensureString
  };
};
function _ensureString(s2) {
  return typeof s2 === "string" ? s2 : void 0;
}
function stringLiteral(defaultValue, valuesAndLabels, opts = {}) {
  var _a, _b;
  return {
    type: "stringLiteral",
    default: defaultValue,
    valuesAndLabels: __spreadValues({}, valuesAndLabels),
    [propTypeSymbol]: "TheatrePropType",
    valueType: null,
    as: (_a = opts.as) != null ? _a : "menu",
    label: opts.label,
    interpolate: (_b = opts.interpolate) != null ? _b : leftInterpolate,
    deserializeAndSanitize(json) {
      if (typeof json !== "string")
        return void 0;
      if (Object.prototype.hasOwnProperty.call(valuesAndLabels, json)) {
        return json;
      } else {
        return void 0;
      }
    }
  };
}
var defaultNumberNudgeFn = ({
  config,
  deltaX,
  deltaFraction,
  magnitude
}) => {
  const { range } = config;
  if (range) {
    return deltaFraction * (range[1] - range[0]) * magnitude * config.nudgeMultiplier;
  }
  return deltaX * magnitude * config.nudgeMultiplier;
};

// shared/src/utils/slashedPaths.ts
var normalizeSlashedPath = (p2) => p2.replace(/^[\s\/]*/, "").replace(/[\s\/]*$/, "").replace(/\s*\/\s*/g, " / ");
var getValidationErrorsOfSlashedPath = (p2) => {
  if (typeof p2 !== "string")
    return `it is not a string. (it is a ${typeof p2})`;
  const components = p2.split(/\//);
  if (components.length === 0)
    return `it is empty.`;
  for (let i2 = 0; i2 < components.length; i2++) {
    const component = components[i2].trim();
    if (component.length === 0)
      return `the component #${i2 + 1} is empty.`;
    if (component.length > 32)
      return `the component '${component}' must have 32 characters or less.`;
  }
};
function validateAndSanitiseSlashedPathOrThrow(unsanitisedPath, fnName) {
  const sanitisedPath = normalizeSlashedPath(unsanitisedPath);
  if (process.env.NODE_ENV !== "development") {
    return sanitisedPath;
  }
  const validation = getValidationErrorsOfSlashedPath(sanitisedPath);
  if (validation) {
    throw new InvalidArgumentError(`The path in ${fnName}(${typeof unsanitisedPath === "string" ? `"${unsanitisedPath}"` : ""}) is invalid because ${validation}`);
  }
  if (unsanitisedPath !== sanitisedPath) {
    logger_default.warn(`The path in ${fnName}("${unsanitisedPath}") was sanitised to "${sanitisedPath}".`);
  }
  return sanitisedPath;
}

// core/src/sheets/TheatreSheet.ts
var import_fast_deep_equal = __toModule(require_fast_deep_equal());
var weakMapOfUnsanitizedProps = new WeakMap();
var TheatreSheet = class {
  get type() {
    return "Theatre_Sheet_PublicAPI";
  }
  constructor(sheet) {
    setPrivateAPI(this, sheet);
  }
  object(key, config) {
    const internal2 = privateAPI(this);
    const sanitizedPath = validateAndSanitiseSlashedPathOrThrow(key, `sheet.object`);
    const existingObject = internal2.getObject(sanitizedPath);
    const nativeObject = null;
    if (existingObject) {
      if (process.env.NODE_ENV !== "production") {
        const prevConfig = weakMapOfUnsanitizedProps.get(existingObject);
        if (prevConfig) {
          if (!(0, import_fast_deep_equal.default)(config, prevConfig)) {
            throw new Error(`You seem to have called sheet.object("${key}", config) twice, with different values for \`config\`. This is disallowed because changing the config of an object on the fly would make it difficult to reason about.

You can fix this by either re-using the existing object, or calling sheet.object("${key}", config) with the same config.`);
          }
        }
      }
      return existingObject.publicApi;
    } else {
      const sanitizedConfig = compound(config);
      const object = internal2.createObject(sanitizedPath, nativeObject, sanitizedConfig);
      if (process.env.NODE_ENV !== "production") {
        weakMapOfUnsanitizedProps.set(object, config);
      }
      return object.publicApi;
    }
  }
  get sequence() {
    return privateAPI(this).getSequence().publicApi;
  }
  get project() {
    return privateAPI(this).project.publicApi;
  }
  get address() {
    return __spreadValues({}, privateAPI(this).address);
  }
};

// core/src/sheets/Sheet.ts
var import_dataverse12 = __toModule(require("@theatre/dataverse"));
var Sheet = class {
  constructor(template, instanceId) {
    this.template = template;
    this.instanceId = instanceId;
    __publicField(this, "_objects", new import_dataverse12.Atom({}));
    __publicField(this, "_sequence");
    __publicField(this, "address");
    __publicField(this, "publicApi");
    __publicField(this, "project");
    __publicField(this, "objectsP", this._objects.pointer);
    __publicField(this, "type", "Theatre_Sheet");
    __publicField(this, "_logger");
    this._logger = template.project._logger.named("Sheet", instanceId);
    this._logger._trace("creating sheet");
    this.project = template.project;
    this.address = __spreadProps(__spreadValues({}, template.address), {
      sheetInstanceId: this.instanceId
    });
    this.publicApi = new TheatreSheet(this);
  }
  createObject(objectKey, nativeObject, config) {
    const objTemplate = this.template.getObjectTemplate(objectKey, nativeObject, config);
    const object = objTemplate.createInstance(this, nativeObject, config);
    this._objects.setIn([objectKey], object);
    return object;
  }
  getObject(key) {
    return this._objects.getState()[key];
  }
  getSequence() {
    if (!this._sequence) {
      const lengthD = (0, import_dataverse12.valueDerivation)(this.project.pointers.historic.sheetsById[this.address.sheetId].sequence.length).map(sanitizeSequenceLength);
      const subUnitsPerUnitD = (0, import_dataverse12.valueDerivation)(this.project.pointers.historic.sheetsById[this.address.sheetId].sequence.subUnitsPerUnit).map(sanitizeSequenceSubUnitsPerUnit);
      this._sequence = new Sequence(this.template.project, this, lengthD, subUnitsPerUnitD);
    }
    return this._sequence;
  }
};
var sanitizeSequenceLength = (len) => typeof len === "number" && isFinite(len) && len > 0 ? len : 10;
var sanitizeSequenceSubUnitsPerUnit = (subs) => typeof subs === "number" && isInteger_default(subs) && subs >= 1 && subs <= 1e3 ? subs : 30;

// core/src/sheets/SheetTemplate.ts
var SheetTemplate = class {
  constructor(project, sheetId) {
    this.project = project;
    __publicField(this, "type", "Theatre_SheetTemplate");
    __publicField(this, "address");
    __publicField(this, "_instances", new import_dataverse13.Atom({}));
    __publicField(this, "instancesP", this._instances.pointer);
    __publicField(this, "_objectTemplates", new import_dataverse13.Atom({}));
    __publicField(this, "objectTemplatesP", this._objectTemplates.pointer);
    this.address = __spreadProps(__spreadValues({}, project.address), { sheetId });
  }
  getInstance(instanceId) {
    let inst = this._instances.getState()[instanceId];
    if (!inst) {
      inst = new Sheet(this, instanceId);
      this._instances.setIn([instanceId], inst);
    }
    return inst;
  }
  getObjectTemplate(objectKey, nativeObject, config) {
    let template = this._objectTemplates.getState()[objectKey];
    if (!template) {
      template = new SheetObjectTemplate(this, objectKey, nativeObject, config);
      this._objectTemplates.setIn([objectKey], template);
    }
    return template;
  }
};

// core/src/projects/Project.ts
var import_dataverse14 = __toModule(require("@theatre/dataverse"));
var import_dataverse15 = __toModule(require("@theatre/dataverse"));

// shared/src/utils/delay.ts
var delay = (dur) => new Promise((resolve) => setTimeout(resolve, dur));
var delay_default = delay;

// ../node_modules/immer/dist/immer.esm.js
function n(n2) {
  for (var t3 = arguments.length, r2 = Array(t3 > 1 ? t3 - 1 : 0), e2 = 1; e2 < t3; e2++)
    r2[e2 - 1] = arguments[e2];
  if (process.env.NODE_ENV !== "production") {
    var i2 = Y[n2], o2 = i2 ? typeof i2 == "function" ? i2.apply(null, r2) : i2 : "unknown error nr: " + n2;
    throw Error("[Immer] " + o2);
  }
  throw Error("[Immer] minified error nr: " + n2 + (r2.length ? " " + r2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function t2(n2) {
  return !!n2 && !!n2[Q];
}
function r(n2) {
  return !!n2 && (function(n3) {
    if (!n3 || typeof n3 != "object")
      return false;
    var t3 = Object.getPrototypeOf(n3);
    if (t3 === null)
      return true;
    var r2 = Object.hasOwnProperty.call(t3, "constructor") && t3.constructor;
    return r2 === Object || typeof r2 == "function" && Function.toString.call(r2) === Z;
  }(n2) || Array.isArray(n2) || !!n2[L] || !!n2.constructor[L] || s(n2) || v(n2));
}
function e(r2) {
  return t2(r2) || n(23, r2), r2[Q].t;
}
function i(n2, t3, r2) {
  r2 === void 0 && (r2 = false), o(n2) === 0 ? (r2 ? Object.keys : nn)(n2).forEach(function(e2) {
    r2 && typeof e2 == "symbol" || t3(e2, n2[e2], n2);
  }) : n2.forEach(function(r3, e2) {
    return t3(e2, r3, n2);
  });
}
function o(n2) {
  var t3 = n2[Q];
  return t3 ? t3.i > 3 ? t3.i - 4 : t3.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
}
function u(n2, t3) {
  return o(n2) === 2 ? n2.has(t3) : Object.prototype.hasOwnProperty.call(n2, t3);
}
function a(n2, t3) {
  return o(n2) === 2 ? n2.get(t3) : n2[t3];
}
function f(n2, t3, r2) {
  var e2 = o(n2);
  e2 === 2 ? n2.set(t3, r2) : e2 === 3 ? (n2.delete(t3), n2.add(r2)) : n2[t3] = r2;
}
function c(n2, t3) {
  return n2 === t3 ? n2 !== 0 || 1 / n2 == 1 / t3 : n2 != n2 && t3 != t3;
}
function s(n2) {
  return X && n2 instanceof Map;
}
function v(n2) {
  return q && n2 instanceof Set;
}
function p(n2) {
  return n2.o || n2.t;
}
function l(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var t3 = tn(n2);
  delete t3[Q];
  for (var r2 = nn(t3), e2 = 0; e2 < r2.length; e2++) {
    var i2 = r2[e2], o2 = t3[i2];
    o2.writable === false && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (t3[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), t3);
}
function d(n2, e2) {
  return e2 === void 0 && (e2 = false), y(n2) || t2(n2) || !r(n2) ? n2 : (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e2 && i(n2, function(n3, t3) {
    return d(t3, true);
  }, true), n2);
}
function h() {
  n(2);
}
function y(n2) {
  return n2 == null || typeof n2 != "object" || Object.isFrozen(n2);
}
function b(t3) {
  var r2 = rn[t3];
  return r2 || n(18, t3), r2;
}
function _() {
  return process.env.NODE_ENV === "production" || U || n(0), U;
}
function j(n2, t3) {
  t3 && (b("Patches"), n2.u = [], n2.s = [], n2.v = t3);
}
function O(n2) {
  g(n2), n2.p.forEach(S), n2.p = null;
}
function g(n2) {
  n2 === U && (U = n2.l);
}
function w(n2) {
  return U = { p: [], l: U, h: n2, m: true, _: 0 };
}
function S(n2) {
  var t3 = n2[Q];
  t3.i === 0 || t3.i === 1 ? t3.j() : t3.O = true;
}
function P(t3, e2) {
  e2._ = e2.p.length;
  var i2 = e2.p[0], o2 = t3 !== void 0 && t3 !== i2;
  return e2.h.g || b("ES5").S(e2, t3, o2), o2 ? (i2[Q].P && (O(e2), n(4)), r(t3) && (t3 = M(e2, t3), e2.l || x(e2, t3)), e2.u && b("Patches").M(i2[Q], t3, e2.u, e2.s)) : t3 = M(e2, i2, []), O(e2), e2.u && e2.v(e2.u, e2.s), t3 !== H ? t3 : void 0;
}
function M(n2, t3, r2) {
  if (y(t3))
    return t3;
  var e2 = t3[Q];
  if (!e2)
    return i(t3, function(i2, o3) {
      return A(n2, e2, t3, i2, o3, r2);
    }, true), t3;
  if (e2.A !== n2)
    return t3;
  if (!e2.P)
    return x(n2, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o2 = e2.i === 4 || e2.i === 5 ? e2.o = l(e2.k) : e2.o;
    i(e2.i === 3 ? new Set(o2) : o2, function(t4, i2) {
      return A(n2, e2, o2, t4, i2, r2);
    }), x(n2, o2, false), r2 && n2.u && b("Patches").R(e2, r2, n2.u, n2.s);
  }
  return e2.o;
}
function A(e2, i2, o2, a2, c2, s2) {
  if (process.env.NODE_ENV !== "production" && c2 === o2 && n(5), t2(c2)) {
    var v2 = M(e2, c2, s2 && i2 && i2.i !== 3 && !u(i2.D, a2) ? s2.concat(a2) : void 0);
    if (f(o2, a2, v2), !t2(v2))
      return;
    e2.m = false;
  }
  if (r(c2) && !y(c2)) {
    if (!e2.h.F && e2._ < 1)
      return;
    M(e2, c2), i2 && i2.A.l || x(e2, c2);
  }
}
function x(n2, t3, r2) {
  r2 === void 0 && (r2 = false), n2.h.F && n2.m && d(t3, r2);
}
function z(n2, t3) {
  var r2 = n2[Q];
  return (r2 ? p(r2) : n2)[t3];
}
function I(n2, t3) {
  if (t3 in n2)
    for (var r2 = Object.getPrototypeOf(n2); r2; ) {
      var e2 = Object.getOwnPropertyDescriptor(r2, t3);
      if (e2)
        return e2;
      r2 = Object.getPrototypeOf(r2);
    }
}
function k(n2) {
  n2.P || (n2.P = true, n2.l && k(n2.l));
}
function E(n2) {
  n2.o || (n2.o = l(n2.t));
}
function R(n2, t3, r2) {
  var e2 = s(t3) ? b("MapSet").N(t3, r2) : v(t3) ? b("MapSet").T(t3, r2) : n2.g ? function(n3, t4) {
    var r3 = Array.isArray(n3), e3 = { i: r3 ? 1 : 0, A: t4 ? t4.A : _(), P: false, I: false, D: {}, l: t4, t: n3, k: null, o: null, j: null, C: false }, i2 = e3, o2 = en;
    r3 && (i2 = [e3], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e3.k = f2, e3.j = a2, f2;
  }(t3, r2) : b("ES5").J(t3, r2);
  return (r2 ? r2.A : _()).p.push(e2), e2;
}
function D(e2) {
  return t2(e2) || n(22, e2), function n2(t3) {
    if (!r(t3))
      return t3;
    var e3, u2 = t3[Q], c2 = o(t3);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
        return u2.t;
      u2.I = true, e3 = F(t3, c2), u2.I = false;
    } else
      e3 = F(t3, c2);
    return i(e3, function(t4, r2) {
      u2 && a(u2.t, t4) === r2 || f(e3, t4, n2(r2));
    }), c2 === 3 ? new Set(e3) : e3;
  }(e2);
}
function F(n2, t3) {
  switch (t3) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l(n2);
}
var G;
var U;
var W = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol";
var X = typeof Map != "undefined";
var q = typeof Set != "undefined";
var B = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined";
var H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
var Q = W ? Symbol.for("immer-state") : "__$immer_state";
var V = typeof Symbol != "undefined" && Symbol.iterator || "@@iterator";
var Y = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n2) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n2;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n2) {
  return "Cannot apply patch, path doesn't resolve: " + n2;
}, 16: 'Sets cannot have "replace" patches.', 17: function(n2) {
  return "Unsupported patch operation: " + n2;
}, 18: function(n2) {
  return "The plugin for '" + n2 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n2 + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n2) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n2 + "'";
}, 22: function(n2) {
  return "'current' expects a draft, got: " + n2;
}, 23: function(n2) {
  return "'original' expects a draft, got: " + n2;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" };
var Z = "" + Object.prototype.constructor;
var nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames;
var tn = Object.getOwnPropertyDescriptors || function(n2) {
  var t3 = {};
  return nn(n2).forEach(function(r2) {
    t3[r2] = Object.getOwnPropertyDescriptor(n2, r2);
  }), t3;
};
var rn = {};
var en = { get: function(n2, t3) {
  if (t3 === Q)
    return n2;
  var e2 = p(n2);
  if (!u(e2, t3))
    return function(n3, t4, r2) {
      var e3, i3 = I(t4, r2);
      return i3 ? "value" in i3 ? i3.value : (e3 = i3.get) === null || e3 === void 0 ? void 0 : e3.call(n3.k) : void 0;
    }(n2, e2, t3);
  var i2 = e2[t3];
  return n2.I || !r(i2) ? i2 : i2 === z(n2.t, t3) ? (E(n2), n2.o[t3] = R(n2.A.h, i2, n2)) : i2;
}, has: function(n2, t3) {
  return t3 in p(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p(n2));
}, set: function(n2, t3, r2) {
  var e2 = I(p(n2), t3);
  if (e2 == null ? void 0 : e2.set)
    return e2.set.call(n2.k, r2), true;
  if (!n2.P) {
    var i2 = z(p(n2), t3), o2 = i2 == null ? void 0 : i2[Q];
    if (o2 && o2.t === r2)
      return n2.o[t3] = r2, n2.D[t3] = false, true;
    if (c(r2, i2) && (r2 !== void 0 || u(n2.t, t3)))
      return true;
    E(n2), k(n2);
  }
  return n2.o[t3] === r2 && typeof r2 != "number" && (r2 !== void 0 || t3 in n2.o) || (n2.o[t3] = r2, n2.D[t3] = true, true);
}, deleteProperty: function(n2, t3) {
  return z(n2.t, t3) !== void 0 || t3 in n2.t ? (n2.D[t3] = false, E(n2), k(n2)) : delete n2.D[t3], n2.o && delete n2.o[t3], true;
}, getOwnPropertyDescriptor: function(n2, t3) {
  var r2 = p(n2), e2 = Reflect.getOwnPropertyDescriptor(r2, t3);
  return e2 ? { writable: true, configurable: n2.i !== 1 || t3 !== "length", enumerable: e2.enumerable, value: r2[t3] } : e2;
}, defineProperty: function() {
  n(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n(12);
} };
var on = {};
i(en, function(n2, t3) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], t3.apply(this, arguments);
  };
}), on.deleteProperty = function(t3, r2) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(r2)) && n(13), en.deleteProperty.call(this, t3[0], r2);
}, on.set = function(t3, r2, e2) {
  return process.env.NODE_ENV !== "production" && r2 !== "length" && isNaN(parseInt(r2)) && n(14), en.set.call(this, t3[0], r2, e2, t3[0]);
};
var un = function() {
  function e2(t3) {
    var e3 = this;
    this.g = B, this.F = true, this.produce = function(t4, i3, o2) {
      if (typeof t4 == "function" && typeof i3 != "function") {
        var u2 = i3;
        i3 = t4;
        var a2 = e3;
        return function(n2) {
          var t5 = this;
          n2 === void 0 && (n2 = u2);
          for (var r2 = arguments.length, e4 = Array(r2 > 1 ? r2 - 1 : 0), o3 = 1; o3 < r2; o3++)
            e4[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var r3;
            return (r3 = i3).call.apply(r3, [t5, n3].concat(e4));
          });
        };
      }
      var f2;
      if (typeof i3 != "function" && n(6), o2 !== void 0 && typeof o2 != "function" && n(7), r(t4)) {
        var c2 = w(e3), s2 = R(e3, t4, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? O(c2) : g(c2);
        }
        return typeof Promise != "undefined" && f2 instanceof Promise ? f2.then(function(n2) {
          return j(c2, o2), P(n2, c2);
        }, function(n2) {
          throw O(c2), n2;
        }) : (j(c2, o2), P(f2, c2));
      }
      if (!t4 || typeof t4 != "object") {
        if ((f2 = i3(t4)) === H)
          return;
        return f2 === void 0 && (f2 = t4), e3.F && d(f2, true), f2;
      }
      n(21, t4);
    }, this.produceWithPatches = function(n2, t4) {
      return typeof n2 == "function" ? function(t5) {
        for (var r3 = arguments.length, i4 = Array(r3 > 1 ? r3 - 1 : 0), o2 = 1; o2 < r3; o2++)
          i4[o2 - 1] = arguments[o2];
        return e3.produceWithPatches(t5, function(t6) {
          return n2.apply(void 0, [t6].concat(i4));
        });
      } : [e3.produce(n2, t4, function(n3, t5) {
        r2 = n3, i3 = t5;
      }), r2, i3];
      var r2, i3;
    }, typeof (t3 == null ? void 0 : t3.useProxies) == "boolean" && this.setUseProxies(t3.useProxies), typeof (t3 == null ? void 0 : t3.autoFreeze) == "boolean" && this.setAutoFreeze(t3.autoFreeze);
  }
  var i2 = e2.prototype;
  return i2.createDraft = function(e3) {
    r(e3) || n(8), t2(e3) && (e3 = D(e3));
    var i3 = w(this), o2 = R(this, e3, void 0);
    return o2[Q].C = true, g(i3), o2;
  }, i2.finishDraft = function(t3, r2) {
    var e3 = t3 && t3[Q];
    process.env.NODE_ENV !== "production" && (e3 && e3.C || n(9), e3.I && n(10));
    var i3 = e3.A;
    return j(i3, r2), P(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.F = n2;
  }, i2.setUseProxies = function(t3) {
    t3 && !B && n(20), this.g = t3;
  }, i2.applyPatches = function(n2, r2) {
    var e3;
    for (e3 = r2.length - 1; e3 >= 0; e3--) {
      var i3 = r2[e3];
      if (i3.path.length === 0 && i3.op === "replace") {
        n2 = i3.value;
        break;
      }
    }
    var o2 = b("Patches").$;
    return t2(n2) ? o2(n2, r2) : this.produce(n2, function(n3) {
      return o2(n3, r2.slice(e3 + 1));
    });
  }, e2;
}();
var an = new un();
var fn = an.produce;
var cn = an.produceWithPatches.bind(an);
var sn = an.setAutoFreeze.bind(an);
var vn = an.setUseProxies.bind(an);
var pn = an.applyPatches.bind(an);
var ln = an.createDraft.bind(an);
var dn = an.finishDraft.bind(an);

// shared/src/globals.ts
var globals = {
  currentProjectStateDefinitionVersion: "0.4.0"
};
var globals_default = globals;

// core/src/projects/initialiseProjectState.ts
async function initialiseProjectState(studio, project, onDiskState) {
  await delay_default(0);
  studio.transaction(({ drafts }) => {
    var _a;
    const projectId = project.address.projectId;
    drafts.ephemeral.coreByProject[projectId] = {
      lastExportedObject: null,
      loadingState: { type: "loading" }
    };
    drafts.ahistoric.coreByProject[projectId] = {
      ahistoricStuff: ""
    };
    function useInitialState() {
      drafts.ephemeral.coreByProject[projectId].loadingState = {
        type: "loaded"
      };
      drafts.historic.coreByProject[projectId] = {
        sheetsById: {},
        definitionVersion: globals_default.currentProjectStateDefinitionVersion,
        revisionHistory: []
      };
    }
    function useOnDiskState(state) {
      drafts.ephemeral.coreByProject[projectId].loadingState = {
        type: "loaded"
      };
      drafts.historic.coreByProject[projectId] = state;
    }
    function useBrowserState() {
      drafts.ephemeral.coreByProject[projectId].loadingState = {
        type: "loaded"
      };
    }
    function browserStateIsNotBasedOnDiskState(onDiskState2) {
      drafts.ephemeral.coreByProject[projectId].loadingState = {
        type: "browserStateIsNotBasedOnDiskState",
        onDiskState: onDiskState2
      };
    }
    const browserState = (_a = e(drafts.historic)) == null ? void 0 : _a.coreByProject[project.address.projectId];
    if (!browserState) {
      if (!onDiskState) {
        useInitialState();
      } else {
        useOnDiskState(onDiskState);
      }
    } else {
      if (!onDiskState) {
        useBrowserState();
      } else {
        if (browserState.revisionHistory.indexOf(onDiskState.revisionHistory[0]) == -1) {
          browserStateIsNotBasedOnDiskState(onDiskState);
        } else {
          useBrowserState();
        }
      }
    }
  });
}

// core/src/_coreLogger.ts
function noop2() {
}
function _coreLogger(config) {
  var _a, _b;
  const internalMin = ((_a = config == null ? void 0 : config.logging) == null ? void 0 : _a.internal) ? (_b = config.logging.min) != null ? _b : TheatreLoggerLevel.WARN : Infinity;
  const shouldDebugLogger = internalMin <= TheatreLoggerLevel.DEBUG;
  const shouldShowLoggerErrors = internalMin <= TheatreLoggerLevel.ERROR;
  const internal2 = createTheatreInternalLogger(void 0, {
    _debug: shouldDebugLogger ? console.debug.bind(console, "_coreLogger(TheatreInternalLogger) debug") : noop2,
    _error: shouldShowLoggerErrors ? console.error.bind(console, "_coreLogger(TheatreInternalLogger) error") : noop2
  });
  if (config) {
    const { logger, logging } = config;
    if (logger)
      internal2.configureLogger(logger);
    if (logging)
      internal2.configureLogging(logging);
    else {
      internal2.configureLogging({
        dev: process.env.NODE_ENV !== "production"
      });
    }
  }
  return internal2.getLogger().named("Theatre");
}

// core/src/projects/Project.ts
var Project = class {
  constructor(id, config = {}, publicApi) {
    this.config = config;
    this.publicApi = publicApi;
    __publicField(this, "pointers");
    __publicField(this, "_pointerProxies");
    __publicField(this, "address");
    __publicField(this, "_readyDeferred");
    __publicField(this, "_sheetTemplates", new import_dataverse15.Atom({}));
    __publicField(this, "sheetTemplatesP", this._sheetTemplates.pointer);
    __publicField(this, "_studio");
    __publicField(this, "type", "Theatre_Project");
    __publicField(this, "_logger");
    var _a;
    this._logger = _coreLogger({ logging: { dev: true } }).named("Project", id);
    this._logger.traceDev("creating project");
    this.address = { projectId: id };
    const onDiskStateAtom = new import_dataverse15.Atom({
      ahistoric: {
        ahistoricStuff: ""
      },
      historic: (_a = config.state) != null ? _a : {
        sheetsById: {},
        definitionVersion: globals_default.currentProjectStateDefinitionVersion,
        revisionHistory: []
      },
      ephemeral: {
        loadingState: {
          type: "loaded"
        },
        lastExportedObject: null
      }
    });
    this._pointerProxies = {
      historic: new import_dataverse14.PointerProxy(onDiskStateAtom.pointer.historic),
      ahistoric: new import_dataverse14.PointerProxy(onDiskStateAtom.pointer.ahistoric),
      ephemeral: new import_dataverse14.PointerProxy(onDiskStateAtom.pointer.ephemeral)
    };
    this.pointers = {
      historic: this._pointerProxies.historic.pointer,
      ahistoric: this._pointerProxies.ahistoric.pointer,
      ephemeral: this._pointerProxies.ephemeral.pointer
    };
    projectsSingleton_default.add(id, this);
    this._readyDeferred = defer();
    if (config.state) {
      setTimeout(() => {
        if (!this._studio) {
          this._readyDeferred.resolve(void 0);
          this._logger._trace("ready deferred resolved with no state");
        }
      }, 0);
    } else {
      setTimeout(() => {
        if (!this._studio) {
          throw new Error(`Argument config.state in Theatre.getProject("${id}", config) is empty. This is fine while you are using @theatre/core along with @theatre/studio. But since @theatre/studio is not loaded, the state of project "${id}" will be empty.

To fix this, you need to add @theatre/studio into the bundle and export the project's state. Learn how to do that at https://docs.theatrejs.com/in-depth/#exporting
If you are using a framework like Next.js, this error may be caused by running Theatre on the server side.`);
        }
      }, 1e3);
    }
  }
  attachToStudio(studio) {
    if (this._studio) {
      if (this._studio !== studio) {
        throw new Error(`Project ${this.address.projectId} is already attached to studio ${this._studio.address.studioId}`);
      } else {
        console.warn(`Project ${this.address.projectId} is already attached to studio ${this._studio.address.studioId}`);
        return;
      }
    }
    this._studio = studio;
    studio.initialized.then(async () => {
      await initialiseProjectState(studio, this, this.config.state);
      this._pointerProxies.historic.setPointer(studio.atomP.historic.coreByProject[this.address.projectId]);
      this._pointerProxies.ahistoric.setPointer(studio.atomP.ahistoric.coreByProject[this.address.projectId]);
      this._pointerProxies.ephemeral.setPointer(studio.atomP.ephemeral.coreByProject[this.address.projectId]);
      this._readyDeferred.resolve(void 0);
    });
  }
  get isAttachedToStudio() {
    return !!this._studio;
  }
  get ready() {
    return this._readyDeferred.promise;
  }
  isReady() {
    return this._readyDeferred.status === "resolved";
  }
  getOrCreateSheet(sheetId, instanceId = "default") {
    let template = this._sheetTemplates.getState()[sheetId];
    if (!template) {
      template = new SheetTemplate(this, sheetId);
      this._sheetTemplates.setIn([sheetId], template);
    }
    return template.getInstance(instanceId);
  }
};

// shared/src/utils/sanitizers.ts
var _validateSym = (val7, thingy, range) => {
  if (typeof val7 !== "string") {
    return `${thingy} must be a string. ${userReadableTypeOfValue_default(val7)} given.`;
  } else if (val7.trim().length !== val7.length) {
    return `${thingy} must not have leading or trailing spaces. '${val7}' given.`;
  } else if (val7.length < range[0] || val7.length > range[1]) {
    return `${thingy} must have between ${range[0]} and ${range[1]} characters. '${val7}' given.`;
  }
};
var validateName = (name, thingy, shouldThrow = false) => {
  const result = _validateSym(name, thingy, [3, 32]);
  if (typeof result === "string" && shouldThrow) {
    throw new InvalidArgumentError(result);
  } else {
    return result;
  }
};
var validateInstanceId = (name, thingy, shouldThrow = false) => {
  const result = _validateSym(name, thingy, [1, 32]);
  if (typeof result === "string" && shouldThrow) {
    throw new InvalidArgumentError(result);
  } else {
    return result;
  }
};

// core/src/projects/TheatreProject.ts
var TheatreProject = class {
  get type() {
    return "Theatre_Project_PublicAPI";
  }
  constructor(id, config = {}) {
    setPrivateAPI(this, new Project(id, config, this));
  }
  get ready() {
    return privateAPI(this).ready;
  }
  get isReady() {
    return privateAPI(this).isReady();
  }
  get address() {
    return __spreadValues({}, privateAPI(this).address);
  }
  sheet(sheetId, instanceId = "default") {
    const sanitizedPath = validateAndSanitiseSlashedPathOrThrow(sheetId, "project.sheet");
    if (process.env.NODE_ENV !== "production") {
      validateInstanceId(instanceId, "instanceId in project.sheet(sheetId, instanceId)", true);
    }
    return privateAPI(this).getOrCreateSheet(sanitizedPath, instanceId).publicApi;
  }
};

// core/src/coreExports.ts
var import_fast_deep_equal2 = __toModule(require_fast_deep_equal());
var import_dataverse16 = __toModule(require("@theatre/dataverse"));
var import_dataverse17 = __toModule(require("@theatre/dataverse"));
function getProject(id, config = {}) {
  const existingProject = projectsSingleton_default.get(id);
  if (existingProject) {
    if (process.env.NODE_ENV !== "production") {
      if (!(0, import_fast_deep_equal2.default)(config, existingProject.config)) {
        throw new Error(`You seem to have called Theatre.getProject("${id}", config) twice, with different config objects. This is disallowed because changing the config of a project on the fly can lead to hard-to-debug issues.

You can fix this by either calling Theatre.getProject() once per projectId, or calling it multiple times but with the exact same config.`);
      }
    }
    return existingProject.publicApi;
  }
  const rootLogger = _coreLogger();
  const plogger = rootLogger.named("Project", id);
  if (process.env.NODE_ENV !== "production") {
    validateName(id, "projectName in Theatre.getProject(projectName)", true);
    validateProjectIdOrThrow(id);
    plogger._debug("validated projectName", { projectName: id });
  }
  if (config.state) {
    if (process.env.NODE_ENV !== "production") {
      shallowValidateOnDiskState(id, config.state);
      plogger._debug("shallow validated config.state on disk");
    } else {
      deepValidateOnDiskState(id, config.state);
      plogger._debug("deep validated config.state on disk");
    }
  } else {
    plogger._debug("no config.state");
  }
  return new TheatreProject(id, config);
}
var shallowValidateOnDiskState = (projectId, s2) => {
  if (Array.isArray(s2) || s2 == null || s2.definitionVersion !== globals_default.currentProjectStateDefinitionVersion) {
    throw new InvalidArgumentError(`Error validating conf.state in Theatre.getProject(${JSON.stringify(projectId)}, conf). The state seems to be formatted in a way that is unreadable to Theatre.js. Read more at https://docs.theatrejs.com`);
  }
};
var deepValidateOnDiskState = (projectId, s2) => {
  shallowValidateOnDiskState(projectId, s2);
};
var validateProjectIdOrThrow = (value) => {
  if (typeof value !== "string") {
    throw new InvalidArgumentError(`Argument 'projectId' in \`Theatre.getProject(projectId, ...)\` must be a string. Instead, it was ${userReadableTypeOfValue_default(value)}.`);
  }
  const idTrimmed = value.trim();
  if (idTrimmed.length !== value.length) {
    throw new InvalidArgumentError(`Argument 'projectId' in \`Theatre.getProject("${value}", ...)\` should not have surrounding whitespace.`);
  }
  if (idTrimmed.length < 3) {
    throw new InvalidArgumentError(`Argument 'projectId' in \`Theatre.getProject("${value}", ...)\` should be at least 3 characters long.`);
  }
};
function onChange(pointer3, callback) {
  if ((0, import_dataverse16.isPointer)(pointer3)) {
    const derivation = (0, import_dataverse17.valueDerivation)(pointer3);
    return derivation.tapImmediate(coreTicker_default, callback);
  } else if ((0, import_dataverse17.isDerivation)(pointer3)) {
    return pointer3.tapImmediate(coreTicker_default, callback);
  } else {
    throw new Error(`Called onChange(p) where p is neither a pointer nor a derivation.`);
  }
}
function val6(pointer3) {
  if ((0, import_dataverse16.isPointer)(pointer3)) {
    return (0, import_dataverse17.valueDerivation)(pointer3).getValue();
  } else {
    throw new Error(`Called val(p) where p is not a pointer.`);
  }
}

// shared/src/globalVariableNames.ts
var studioBundle = "__TheatreJS_StudioBundle";
var coreBundle = "__TheatreJS_CoreBundle";

// core/src/CoreBundle.ts
var CoreBundle = class {
  constructor() {
    __publicField(this, "_studio");
  }
  get type() {
    return "Theatre_CoreBundle";
  }
  get version() {
    return "0.5.0";
  }
  getBitsForStudio(studio, callback) {
    if (this._studio) {
      throw new Error(`@theatre/core is already attached to @theatre/studio`);
    }
    this._studio = studio;
    const bits = {
      projectsP: projectsSingleton_default.atom.pointer.projects,
      privateAPI,
      coreExports: coreExports_exports
    };
    callback(bits);
  }
};

// core/src/index.ts
registerCoreBundle();
function registerCoreBundle() {
  if (typeof window == "undefined")
    return;
  const existingBundle = window[coreBundle];
  if (typeof existingBundle !== "undefined") {
    if (typeof existingBundle === "object" && existingBundle && typeof existingBundle.version === "string") {
      throw new Error(`It seems that the module '@theatre/core' is loaded more than once. This could have two possible causes:
1. You might have two separate versions of Theatre.js in node_modules.
2. Or this might be a bundling misconfiguration, in case you're using a bundler like Webpack/ESBuild/Rollup.

Note that it **is okay** to import '@theatre/core' multiple times. But those imports should point to the same module.`);
    } else {
      throw new Error(`The variable window.${coreBundle} seems to be already set by a module other than @theatre/core.`);
    }
  }
  const coreBundle2 = new CoreBundle();
  window[coreBundle] = coreBundle2;
  const possibleExistingStudioBundle = window[studioBundle];
  if (possibleExistingStudioBundle && possibleExistingStudioBundle !== null && possibleExistingStudioBundle.type === "Theatre_StudioBundle") {
    possibleExistingStudioBundle.registerCoreBundle(coreBundle2);
  }
}
/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
//# sourceMappingURL=index.js.map
