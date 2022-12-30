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
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
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

// ../../node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "../../node_modules/object-assign/index.js"(exports2, module2) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty10 = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val3) {
      if (val3 === null || val3 === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val3);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i3 = 0; i3 < 10; i3++) {
          test2["_" + String.fromCharCode(i3)] = i3;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
          return test2[n2];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s2 = 1; s2 < arguments.length; s2++) {
        from = Object(arguments[s2]);
        for (var key in from) {
          if (hasOwnProperty10.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i3 = 0; i3 < symbols.length; i3++) {
            if (propIsEnumerable.call(from, symbols[i3])) {
              to[symbols[i3]] = from[symbols[i3]];
            }
          }
        }
      }
      return to;
    };
  }
});

// ../../node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "../../node_modules/react/cjs/react.production.min.js"(exports2) {
    "use strict";
    var l2 = require_object_assign();
    var n2 = 60103;
    var p = 60106;
    exports2.Fragment = 60107;
    exports2.StrictMode = 60108;
    exports2.Profiler = 60114;
    var q2 = 60109;
    var r2 = 60110;
    var t2 = 60112;
    exports2.Suspense = 60113;
    var u2 = 60115;
    var v4 = 60116;
    if (typeof Symbol === "function" && Symbol.for) {
      w2 = Symbol.for;
      n2 = w2("react.element");
      p = w2("react.portal");
      exports2.Fragment = w2("react.fragment");
      exports2.StrictMode = w2("react.strict_mode");
      exports2.Profiler = w2("react.profiler");
      q2 = w2("react.provider");
      r2 = w2("react.context");
      t2 = w2("react.forward_ref");
      exports2.Suspense = w2("react.suspense");
      u2 = w2("react.memo");
      v4 = w2("react.lazy");
    }
    var w2;
    var x2 = typeof Symbol === "function" && Symbol.iterator;
    function y2(a2) {
      if (a2 === null || typeof a2 !== "object")
        return null;
      a2 = x2 && a2[x2] || a2["@@iterator"];
      return typeof a2 === "function" ? a2 : null;
    }
    function z2(a2) {
      for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
        b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
      return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var A2 = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var B2 = {};
    function C2(a2, b2, c2) {
      this.props = a2;
      this.context = b2;
      this.refs = B2;
      this.updater = c2 || A2;
    }
    C2.prototype.isReactComponent = {};
    C2.prototype.setState = function(a2, b2) {
      if (typeof a2 !== "object" && typeof a2 !== "function" && a2 != null)
        throw Error(z2(85));
      this.updater.enqueueSetState(this, a2, b2, "setState");
    };
    C2.prototype.forceUpdate = function(a2) {
      this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
    };
    function D() {
    }
    D.prototype = C2.prototype;
    function E2(a2, b2, c2) {
      this.props = a2;
      this.context = b2;
      this.refs = B2;
      this.updater = c2 || A2;
    }
    var F2 = E2.prototype = new D();
    F2.constructor = E2;
    l2(F2, C2.prototype);
    F2.isPureReactComponent = true;
    var G2 = { current: null };
    var H2 = Object.prototype.hasOwnProperty;
    var I2 = { key: true, ref: true, __self: true, __source: true };
    function J2(a2, b2, c2) {
      var e2, d2 = {}, k2 = null, h2 = null;
      if (b2 != null)
        for (e2 in b2.ref !== void 0 && (h2 = b2.ref), b2.key !== void 0 && (k2 = "" + b2.key), b2)
          H2.call(b2, e2) && !I2.hasOwnProperty(e2) && (d2[e2] = b2[e2]);
      var g2 = arguments.length - 2;
      if (g2 === 1)
        d2.children = c2;
      else if (1 < g2) {
        for (var f = Array(g2), m2 = 0; m2 < g2; m2++)
          f[m2] = arguments[m2 + 2];
        d2.children = f;
      }
      if (a2 && a2.defaultProps)
        for (e2 in g2 = a2.defaultProps, g2)
          d2[e2] === void 0 && (d2[e2] = g2[e2]);
      return { $$typeof: n2, type: a2, key: k2, ref: h2, props: d2, _owner: G2.current };
    }
    function K2(a2, b2) {
      return { $$typeof: n2, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
    }
    function L2(a2) {
      return typeof a2 === "object" && a2 !== null && a2.$$typeof === n2;
    }
    function escape(a2) {
      var b2 = { "=": "=0", ":": "=2" };
      return "$" + a2.replace(/[=:]/g, function(a3) {
        return b2[a3];
      });
    }
    var M2 = /\/+/g;
    function N2(a2, b2) {
      return typeof a2 === "object" && a2 !== null && a2.key != null ? escape("" + a2.key) : b2.toString(36);
    }
    function O2(a2, b2, c2, e2, d2) {
      var k2 = typeof a2;
      if (k2 === "undefined" || k2 === "boolean")
        a2 = null;
      var h2 = false;
      if (a2 === null)
        h2 = true;
      else
        switch (k2) {
          case "string":
          case "number":
            h2 = true;
            break;
          case "object":
            switch (a2.$$typeof) {
              case n2:
              case p:
                h2 = true;
            }
        }
      if (h2)
        return h2 = a2, d2 = d2(h2), a2 = e2 === "" ? "." + N2(h2, 0) : e2, Array.isArray(d2) ? (c2 = "", a2 != null && (c2 = a2.replace(M2, "$&/") + "/"), O2(d2, b2, c2, "", function(a3) {
          return a3;
        })) : d2 != null && (L2(d2) && (d2 = K2(d2, c2 + (!d2.key || h2 && h2.key === d2.key ? "" : ("" + d2.key).replace(M2, "$&/") + "/") + a2)), b2.push(d2)), 1;
      h2 = 0;
      e2 = e2 === "" ? "." : e2 + ":";
      if (Array.isArray(a2))
        for (var g2 = 0; g2 < a2.length; g2++) {
          k2 = a2[g2];
          var f = e2 + N2(k2, g2);
          h2 += O2(k2, b2, c2, f, d2);
        }
      else if (f = y2(a2), typeof f === "function")
        for (a2 = f.call(a2), g2 = 0; !(k2 = a2.next()).done; )
          k2 = k2.value, f = e2 + N2(k2, g2++), h2 += O2(k2, b2, c2, f, d2);
      else if (k2 === "object")
        throw b2 = "" + a2, Error(z2(31, b2 === "[object Object]" ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2));
      return h2;
    }
    function P2(a2, b2, c2) {
      if (a2 == null)
        return a2;
      var e2 = [], d2 = 0;
      O2(a2, e2, "", "", function(a3) {
        return b2.call(c2, a3, d2++);
      });
      return e2;
    }
    function Q2(a2) {
      if (a2._status === -1) {
        var b2 = a2._result;
        b2 = b2();
        a2._status = 0;
        a2._result = b2;
        b2.then(function(b3) {
          a2._status === 0 && (b3 = b3.default, a2._status = 1, a2._result = b3);
        }, function(b3) {
          a2._status === 0 && (a2._status = 2, a2._result = b3);
        });
      }
      if (a2._status === 1)
        return a2._result;
      throw a2._result;
    }
    var R = { current: null };
    function S2() {
      var a2 = R.current;
      if (a2 === null)
        throw Error(z2(321));
      return a2;
    }
    var T2 = { ReactCurrentDispatcher: R, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G2, IsSomeRendererActing: { current: false }, assign: l2 };
    exports2.Children = { map: P2, forEach: function(a2, b2, c2) {
      P2(a2, function() {
        b2.apply(this, arguments);
      }, c2);
    }, count: function(a2) {
      var b2 = 0;
      P2(a2, function() {
        b2++;
      });
      return b2;
    }, toArray: function(a2) {
      return P2(a2, function(a3) {
        return a3;
      }) || [];
    }, only: function(a2) {
      if (!L2(a2))
        throw Error(z2(143));
      return a2;
    } };
    exports2.Component = C2;
    exports2.PureComponent = E2;
    exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T2;
    exports2.cloneElement = function(a2, b2, c2) {
      if (a2 === null || a2 === void 0)
        throw Error(z2(267, a2));
      var e2 = l2({}, a2.props), d2 = a2.key, k2 = a2.ref, h2 = a2._owner;
      if (b2 != null) {
        b2.ref !== void 0 && (k2 = b2.ref, h2 = G2.current);
        b2.key !== void 0 && (d2 = "" + b2.key);
        if (a2.type && a2.type.defaultProps)
          var g2 = a2.type.defaultProps;
        for (f in b2)
          H2.call(b2, f) && !I2.hasOwnProperty(f) && (e2[f] = b2[f] === void 0 && g2 !== void 0 ? g2[f] : b2[f]);
      }
      var f = arguments.length - 2;
      if (f === 1)
        e2.children = c2;
      else if (1 < f) {
        g2 = Array(f);
        for (var m2 = 0; m2 < f; m2++)
          g2[m2] = arguments[m2 + 2];
        e2.children = g2;
      }
      return {
        $$typeof: n2,
        type: a2.type,
        key: d2,
        ref: k2,
        props: e2,
        _owner: h2
      };
    };
    exports2.createContext = function(a2, b2) {
      b2 === void 0 && (b2 = null);
      a2 = { $$typeof: r2, _calculateChangedBits: b2, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null };
      a2.Provider = { $$typeof: q2, _context: a2 };
      return a2.Consumer = a2;
    };
    exports2.createElement = J2;
    exports2.createFactory = function(a2) {
      var b2 = J2.bind(null, a2);
      b2.type = a2;
      return b2;
    };
    exports2.createRef = function() {
      return { current: null };
    };
    exports2.forwardRef = function(a2) {
      return { $$typeof: t2, render: a2 };
    };
    exports2.isValidElement = L2;
    exports2.lazy = function(a2) {
      return { $$typeof: v4, _payload: { _status: -1, _result: a2 }, _init: Q2 };
    };
    exports2.memo = function(a2, b2) {
      return { $$typeof: u2, type: a2, compare: b2 === void 0 ? null : b2 };
    };
    exports2.useCallback = function(a2, b2) {
      return S2().useCallback(a2, b2);
    };
    exports2.useContext = function(a2, b2) {
      return S2().useContext(a2, b2);
    };
    exports2.useDebugValue = function() {
    };
    exports2.useEffect = function(a2, b2) {
      return S2().useEffect(a2, b2);
    };
    exports2.useImperativeHandle = function(a2, b2, c2) {
      return S2().useImperativeHandle(a2, b2, c2);
    };
    exports2.useLayoutEffect = function(a2, b2) {
      return S2().useLayoutEffect(a2, b2);
    };
    exports2.useMemo = function(a2, b2) {
      return S2().useMemo(a2, b2);
    };
    exports2.useReducer = function(a2, b2, c2) {
      return S2().useReducer(a2, b2, c2);
    };
    exports2.useRef = function(a2) {
      return S2().useRef(a2);
    };
    exports2.useState = function(a2) {
      return S2().useState(a2);
    };
    exports2.version = "17.0.2";
  }
});

// ../../node_modules/react/index.js
var require_react = __commonJS({
  "../../node_modules/react/index.js"(exports2, module2) {
    "use strict";
    if (true) {
      module2.exports = require_react_production_min();
    } else {
      module2.exports = null;
    }
  }
});

// ../../node_modules/regenerator-runtime/runtime.js
var require_runtime = __commonJS({
  "../../node_modules/regenerator-runtime/runtime.js"(exports2, module2) {
    var runtime = function(exports3) {
      "use strict";
      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined2;
      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
      function define(obj, key, value) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }
      try {
        define({}, "");
      } catch (err) {
        define = function(obj, key, value) {
          return obj[key] = value;
        };
      }
      function wrap(innerFn, outerFn, self2, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context2 = new Context(tryLocsList || []);
        generator._invoke = makeInvokeMethod(innerFn, self2, context2);
        return generator;
      }
      exports3.wrap = wrap;
      function tryCatch(fn, obj, arg) {
        try {
          return { type: "normal", arg: fn.call(obj, arg) };
        } catch (err) {
          return { type: "throw", arg: err };
        }
      }
      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed";
      var ContinueSentinel = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var IteratorPrototype = {};
      define(IteratorPrototype, iteratorSymbol, function() {
        return this;
      });
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        IteratorPrototype = NativeIteratorPrototype;
      }
      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      define(Gp, "constructor", GeneratorFunctionPrototype);
      define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
      GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function(method) {
          define(prototype, method, function(arg) {
            return this._invoke(method, arg);
          });
        });
      }
      exports3.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };
      exports3.mark = function(genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
      };
      exports3.awrap = function(arg) {
        return { __await: arg };
      };
      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);
          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;
            if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function(value2) {
                invoke("next", value2, resolve, reject);
              }, function(err) {
                invoke("throw", err, resolve, reject);
              });
            }
            return PromiseImpl.resolve(value).then(function(unwrapped) {
              result.value = unwrapped;
              resolve(result);
            }, function(error) {
              return invoke("throw", error, resolve, reject);
            });
          }
        }
        var previousPromise;
        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function(resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        this._invoke = enqueue;
      }
      defineIteratorMethods(AsyncIterator.prototype);
      define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
      });
      exports3.AsyncIterator = AsyncIterator;
      exports3.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0)
          PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
        return exports3.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
      };
      function makeInvokeMethod(innerFn, self2, context2) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }
          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            }
            return doneResult();
          }
          context2.method = method;
          context2.arg = arg;
          while (true) {
            var delegate = context2.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context2);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel)
                  continue;
                return delegateResult;
              }
            }
            if (context2.method === "next") {
              context2.sent = context2._sent = context2.arg;
            } else if (context2.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context2.arg;
              }
              context2.dispatchException(context2.arg);
            } else if (context2.method === "return") {
              context2.abrupt("return", context2.arg);
            }
            state = GenStateExecuting;
            var record = tryCatch(innerFn, self2, context2);
            if (record.type === "normal") {
              state = context2.done ? GenStateCompleted : GenStateSuspendedYield;
              if (record.arg === ContinueSentinel) {
                continue;
              }
              return {
                value: record.arg,
                done: context2.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted;
              context2.method = "throw";
              context2.arg = record.arg;
            }
          }
        };
      }
      function maybeInvokeDelegate(delegate, context2) {
        var method = delegate.iterator[context2.method];
        if (method === undefined2) {
          context2.delegate = null;
          if (context2.method === "throw") {
            if (delegate.iterator["return"]) {
              context2.method = "return";
              context2.arg = undefined2;
              maybeInvokeDelegate(delegate, context2);
              if (context2.method === "throw") {
                return ContinueSentinel;
              }
            }
            context2.method = "throw";
            context2.arg = new TypeError("The iterator does not provide a 'throw' method");
          }
          return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context2.arg);
        if (record.type === "throw") {
          context2.method = "throw";
          context2.arg = record.arg;
          context2.delegate = null;
          return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
          context2.method = "throw";
          context2.arg = new TypeError("iterator result is not an object");
          context2.delegate = null;
          return ContinueSentinel;
        }
        if (info.done) {
          context2[delegate.resultName] = info.value;
          context2.next = delegate.nextLoc;
          if (context2.method !== "return") {
            context2.method = "next";
            context2.arg = undefined2;
          }
        } else {
          return info;
        }
        context2.delegate = null;
        return ContinueSentinel;
      }
      defineIteratorMethods(Gp);
      define(Gp, toStringTagSymbol, "Generator");
      define(Gp, iteratorSymbol, function() {
        return this;
      });
      define(Gp, "toString", function() {
        return "[object Generator]";
      });
      function pushTryEntry(locs) {
        var entry = { tryLoc: locs[0] };
        if (1 in locs) {
          entry.catchLoc = locs[1];
        }
        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
      }
      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }
      function Context(tryLocsList) {
        this.tryEntries = [{ tryLoc: "root" }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }
      exports3.keys = function(object) {
        var keys3 = [];
        for (var key in object) {
          keys3.push(key);
        }
        keys3.reverse();
        return function next() {
          while (keys3.length) {
            var key2 = keys3.pop();
            if (key2 in object) {
              next.value = key2;
              next.done = false;
              return next;
            }
          }
          next.done = true;
          return next;
        };
      };
      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];
          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }
          if (typeof iterable.next === "function") {
            return iterable;
          }
          if (!isNaN(iterable.length)) {
            var i3 = -1, next = function next2() {
              while (++i3 < iterable.length) {
                if (hasOwn.call(iterable, i3)) {
                  next2.value = iterable[i3];
                  next2.done = false;
                  return next2;
                }
              }
              next2.value = undefined2;
              next2.done = true;
              return next2;
            };
            return next.next = next;
          }
        }
        return { next: doneResult };
      }
      exports3.values = values;
      function doneResult() {
        return { value: undefined2, done: true };
      }
      Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
          this.prev = 0;
          this.next = 0;
          this.sent = this._sent = undefined2;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined2;
          this.tryEntries.forEach(resetTryEntry);
          if (!skipTempReset) {
            for (var name in this) {
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined2;
              }
            }
          }
        },
        stop: function() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;
          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }
          return this.rval;
        },
        dispatchException: function(exception) {
          if (this.done) {
            throw exception;
          }
          var context2 = this;
          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context2.next = loc;
            if (caught) {
              context2.method = "next";
              context2.arg = undefined2;
            }
            return !!caught;
          }
          for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
            var entry = this.tryEntries[i3];
            var record = entry.completion;
            if (entry.tryLoc === "root") {
              return handle("end");
            }
            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function(type, arg) {
          for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
            var entry = this.tryEntries[i3];
            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }
          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            finallyEntry = null;
          }
          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;
          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }
          return this.complete(record);
        },
        complete: function(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }
          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }
          return ContinueSentinel;
        },
        finish: function(finallyLoc) {
          for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
            var entry = this.tryEntries[i3];
            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function(tryLoc) {
          for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
            var entry = this.tryEntries[i3];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName,
            nextLoc
          };
          if (this.method === "next") {
            this.arg = undefined2;
          }
          return ContinueSentinel;
        }
      };
      return exports3;
    }(typeof module2 === "object" ? module2.exports : {});
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  }
});

// ../../node_modules/@babel/runtime/regenerator/index.js
var require_regenerator = __commonJS({
  "../../node_modules/@babel/runtime/regenerator/index.js"(exports2, module2) {
    module2.exports = require_runtime();
  }
});

// ../../node_modules/zustand/index.js
var require_zustand = __commonJS({
  "../../node_modules/zustand/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var _regeneratorRuntime = require_regenerator();
    var react = require_react();
    function _interopDefaultLegacy(e2) {
      return e2 && typeof e2 === "object" && "default" in e2 ? e2 : { "default": e2 };
    }
    var _regeneratorRuntime__default = /* @__PURE__ */ _interopDefaultLegacy(_regeneratorRuntime);
    function create$1(createState) {
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
    var isSSR = typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
    var useIsomorphicLayoutEffect2 = isSSR ? react.useEffect : react.useLayoutEffect;
    function create4(createState) {
      var api = typeof createState === "function" ? create$1(createState) : createState;
      var useStore = function useStore2(selector, equalityFn) {
        if (selector === void 0) {
          selector = api.getState;
        }
        if (equalityFn === void 0) {
          equalityFn = Object.is;
        }
        var _ref = react.useReducer(function(c2) {
          return c2 + 1;
        }, 0), forceUpdate = _ref[1];
        var state = api.getState();
        var stateRef = react.useRef(state);
        var selectorRef = react.useRef(selector);
        var equalityFnRef = react.useRef(equalityFn);
        var erroredRef = react.useRef(false);
        var currentSliceRef = react.useRef();
        if (currentSliceRef.current === void 0) {
          currentSliceRef.current = selector(state);
        }
        var newStateSlice;
        var hasNewStateSlice = false;
        if (stateRef.current !== state || selectorRef.current !== selector || equalityFnRef.current !== equalityFn || erroredRef.current) {
          newStateSlice = selector(state);
          hasNewStateSlice = !equalityFn(currentSliceRef.current, newStateSlice);
        }
        useIsomorphicLayoutEffect2(function() {
          if (hasNewStateSlice) {
            currentSliceRef.current = newStateSlice;
          }
          stateRef.current = state;
          selectorRef.current = selector;
          equalityFnRef.current = equalityFn;
          erroredRef.current = false;
        });
        var stateBeforeSubscriptionRef = react.useRef(state);
        useIsomorphicLayoutEffect2(function() {
          var listener = function listener2() {
            try {
              var nextState = api.getState();
              var nextStateSlice = selectorRef.current(nextState);
              if (!equalityFnRef.current(currentSliceRef.current, nextStateSlice)) {
                stateRef.current = nextState;
                currentSliceRef.current = nextStateSlice;
                forceUpdate();
              }
            } catch (error) {
              erroredRef.current = true;
              forceUpdate();
            }
          };
          var unsubscribe = api.subscribe(listener);
          if (api.getState() !== stateBeforeSubscriptionRef.current) {
            listener();
          }
          return unsubscribe;
        }, []);
        return hasNewStateSlice ? newStateSlice : currentSliceRef.current;
      };
      Object.assign(useStore, api);
      useStore[Symbol.iterator] = _regeneratorRuntime__default["default"].mark(function _callee() {
        return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
                _context.next = 3;
                return useStore;
              case 3:
                _context.next = 5;
                return api;
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      });
      return useStore;
    }
    exports2.default = create4;
  }
});

// ../../node_modules/zustand/shallow.js
var require_shallow = __commonJS({
  "../../node_modules/zustand/shallow.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function shallow6(objA, objB) {
      if (Object.is(objA, objB)) {
        return true;
      }
      if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
        return false;
      }
      var keysA = Object.keys(objA);
      if (keysA.length !== Object.keys(objB).length) {
        return false;
      }
      for (var i3 = 0; i3 < keysA.length; i3++) {
        if (!Object.prototype.hasOwnProperty.call(objB, keysA[i3]) || !Object.is(objA[keysA[i3]], objB[keysA[i3]])) {
          return false;
        }
      }
      return true;
    }
    exports2.default = shallow6;
  }
});

// ../../node_modules/scheduler/cjs/scheduler.production.min.js
var require_scheduler_production_min = __commonJS({
  "../../node_modules/scheduler/cjs/scheduler.production.min.js"(exports2) {
    "use strict";
    var f;
    var g2;
    var h2;
    var k2;
    if (typeof performance === "object" && typeof performance.now === "function") {
      l2 = performance;
      exports2.unstable_now = function() {
        return l2.now();
      };
    } else {
      p = Date, q2 = p.now();
      exports2.unstable_now = function() {
        return p.now() - q2;
      };
    }
    var l2;
    var p;
    var q2;
    if (typeof window === "undefined" || typeof MessageChannel !== "function") {
      t2 = null, u2 = null, w2 = function() {
        if (t2 !== null)
          try {
            var a2 = exports2.unstable_now();
            t2(true, a2);
            t2 = null;
          } catch (b2) {
            throw setTimeout(w2, 0), b2;
          }
      };
      f = function(a2) {
        t2 !== null ? setTimeout(f, 0, a2) : (t2 = a2, setTimeout(w2, 0));
      };
      g2 = function(a2, b2) {
        u2 = setTimeout(a2, b2);
      };
      h2 = function() {
        clearTimeout(u2);
      };
      exports2.unstable_shouldYield = function() {
        return false;
      };
      k2 = exports2.unstable_forceFrameRate = function() {
      };
    } else {
      x2 = window.setTimeout, y2 = window.clearTimeout;
      if (typeof console !== "undefined") {
        z2 = window.cancelAnimationFrame;
        typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
        typeof z2 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      }
      A2 = false, B2 = null, C2 = -1, D = 5, E2 = 0;
      exports2.unstable_shouldYield = function() {
        return exports2.unstable_now() >= E2;
      };
      k2 = function() {
      };
      exports2.unstable_forceFrameRate = function(a2) {
        0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < a2 ? Math.floor(1e3 / a2) : 5;
      };
      F2 = new MessageChannel(), G2 = F2.port2;
      F2.port1.onmessage = function() {
        if (B2 !== null) {
          var a2 = exports2.unstable_now();
          E2 = a2 + D;
          try {
            B2(true, a2) ? G2.postMessage(null) : (A2 = false, B2 = null);
          } catch (b2) {
            throw G2.postMessage(null), b2;
          }
        } else
          A2 = false;
      };
      f = function(a2) {
        B2 = a2;
        A2 || (A2 = true, G2.postMessage(null));
      };
      g2 = function(a2, b2) {
        C2 = x2(function() {
          a2(exports2.unstable_now());
        }, b2);
      };
      h2 = function() {
        y2(C2);
        C2 = -1;
      };
    }
    var t2;
    var u2;
    var w2;
    var x2;
    var y2;
    var z2;
    var A2;
    var B2;
    var C2;
    var D;
    var E2;
    var F2;
    var G2;
    function H2(a2, b2) {
      var c2 = a2.length;
      a2.push(b2);
      a:
        for (; ; ) {
          var d2 = c2 - 1 >>> 1, e2 = a2[d2];
          if (e2 !== void 0 && 0 < I2(e2, b2))
            a2[d2] = b2, a2[c2] = e2, c2 = d2;
          else
            break a;
        }
    }
    function J2(a2) {
      a2 = a2[0];
      return a2 === void 0 ? null : a2;
    }
    function K2(a2) {
      var b2 = a2[0];
      if (b2 !== void 0) {
        var c2 = a2.pop();
        if (c2 !== b2) {
          a2[0] = c2;
          a:
            for (var d2 = 0, e2 = a2.length; d2 < e2; ) {
              var m2 = 2 * (d2 + 1) - 1, n2 = a2[m2], v4 = m2 + 1, r2 = a2[v4];
              if (n2 !== void 0 && 0 > I2(n2, c2))
                r2 !== void 0 && 0 > I2(r2, n2) ? (a2[d2] = r2, a2[v4] = c2, d2 = v4) : (a2[d2] = n2, a2[m2] = c2, d2 = m2);
              else if (r2 !== void 0 && 0 > I2(r2, c2))
                a2[d2] = r2, a2[v4] = c2, d2 = v4;
              else
                break a;
            }
        }
        return b2;
      }
      return null;
    }
    function I2(a2, b2) {
      var c2 = a2.sortIndex - b2.sortIndex;
      return c2 !== 0 ? c2 : a2.id - b2.id;
    }
    var L2 = [];
    var M2 = [];
    var N2 = 1;
    var O2 = null;
    var P2 = 3;
    var Q2 = false;
    var R = false;
    var S2 = false;
    function T2(a2) {
      for (var b2 = J2(M2); b2 !== null; ) {
        if (b2.callback === null)
          K2(M2);
        else if (b2.startTime <= a2)
          K2(M2), b2.sortIndex = b2.expirationTime, H2(L2, b2);
        else
          break;
        b2 = J2(M2);
      }
    }
    function U2(a2) {
      S2 = false;
      T2(a2);
      if (!R)
        if (J2(L2) !== null)
          R = true, f(V2);
        else {
          var b2 = J2(M2);
          b2 !== null && g2(U2, b2.startTime - a2);
        }
    }
    function V2(a2, b2) {
      R = false;
      S2 && (S2 = false, h2());
      Q2 = true;
      var c2 = P2;
      try {
        T2(b2);
        for (O2 = J2(L2); O2 !== null && (!(O2.expirationTime > b2) || a2 && !exports2.unstable_shouldYield()); ) {
          var d2 = O2.callback;
          if (typeof d2 === "function") {
            O2.callback = null;
            P2 = O2.priorityLevel;
            var e2 = d2(O2.expirationTime <= b2);
            b2 = exports2.unstable_now();
            typeof e2 === "function" ? O2.callback = e2 : O2 === J2(L2) && K2(L2);
            T2(b2);
          } else
            K2(L2);
          O2 = J2(L2);
        }
        if (O2 !== null)
          var m2 = true;
        else {
          var n2 = J2(M2);
          n2 !== null && g2(U2, n2.startTime - b2);
          m2 = false;
        }
        return m2;
      } finally {
        O2 = null, P2 = c2, Q2 = false;
      }
    }
    var W2 = k2;
    exports2.unstable_IdlePriority = 5;
    exports2.unstable_ImmediatePriority = 1;
    exports2.unstable_LowPriority = 4;
    exports2.unstable_NormalPriority = 3;
    exports2.unstable_Profiling = null;
    exports2.unstable_UserBlockingPriority = 2;
    exports2.unstable_cancelCallback = function(a2) {
      a2.callback = null;
    };
    exports2.unstable_continueExecution = function() {
      R || Q2 || (R = true, f(V2));
    };
    exports2.unstable_getCurrentPriorityLevel = function() {
      return P2;
    };
    exports2.unstable_getFirstCallbackNode = function() {
      return J2(L2);
    };
    exports2.unstable_next = function(a2) {
      switch (P2) {
        case 1:
        case 2:
        case 3:
          var b2 = 3;
          break;
        default:
          b2 = P2;
      }
      var c2 = P2;
      P2 = b2;
      try {
        return a2();
      } finally {
        P2 = c2;
      }
    };
    exports2.unstable_pauseExecution = function() {
    };
    exports2.unstable_requestPaint = W2;
    exports2.unstable_runWithPriority = function(a2, b2) {
      switch (a2) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a2 = 3;
      }
      var c2 = P2;
      P2 = a2;
      try {
        return b2();
      } finally {
        P2 = c2;
      }
    };
    exports2.unstable_scheduleCallback = function(a2, b2, c2) {
      var d2 = exports2.unstable_now();
      typeof c2 === "object" && c2 !== null ? (c2 = c2.delay, c2 = typeof c2 === "number" && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
      switch (a2) {
        case 1:
          var e2 = -1;
          break;
        case 2:
          e2 = 250;
          break;
        case 5:
          e2 = 1073741823;
          break;
        case 4:
          e2 = 1e4;
          break;
        default:
          e2 = 5e3;
      }
      e2 = c2 + e2;
      a2 = { id: N2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
      c2 > d2 ? (a2.sortIndex = c2, H2(M2, a2), J2(L2) === null && a2 === J2(M2) && (S2 ? h2() : S2 = true, g2(U2, c2 - d2))) : (a2.sortIndex = e2, H2(L2, a2), R || Q2 || (R = true, f(V2)));
      return a2;
    };
    exports2.unstable_wrapCallback = function(a2) {
      var b2 = P2;
      return function() {
        var c2 = P2;
        P2 = b2;
        try {
          return a2.apply(this, arguments);
        } finally {
          P2 = c2;
        }
      };
    };
  }
});

// ../../node_modules/scheduler/index.js
var require_scheduler = __commonJS({
  "../../node_modules/scheduler/index.js"(exports2, module2) {
    "use strict";
    if (true) {
      module2.exports = require_scheduler_production_min();
    } else {
      module2.exports = null;
    }
  }
});

// ../../node_modules/react-reconciler/cjs/react-reconciler.production.min.js
var require_react_reconciler_production_min = __commonJS({
  "../../node_modules/react-reconciler/cjs/react-reconciler.production.min.js"(exports2, module2) {
    module2.exports = function $$$reconciler($$$hostConfig) {
      var exports3 = {};
      "use strict";
      var aa = require_object_assign(), ba = require_react(), m2 = require_scheduler();
      function q2(a2) {
        for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
          b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
        return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var ca = ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, da = 60103, ea = 60106, fa = 60107, ha = 60108, ia = 60114, ja = 60109, ka = 60110, la = 60112, ma = 60113, na = 60120, oa = 60115, pa = 60116, qa = 60121, ra = 60129, sa = 60130, ta = 60131;
      if (typeof Symbol === "function" && Symbol.for) {
        var r2 = Symbol.for;
        da = r2("react.element");
        ea = r2("react.portal");
        fa = r2("react.fragment");
        ha = r2("react.strict_mode");
        ia = r2("react.profiler");
        ja = r2("react.provider");
        ka = r2("react.context");
        la = r2("react.forward_ref");
        ma = r2("react.suspense");
        na = r2("react.suspense_list");
        oa = r2("react.memo");
        pa = r2("react.lazy");
        qa = r2("react.block");
        r2("react.scope");
        ra = r2("react.debug_trace_mode");
        sa = r2("react.offscreen");
        ta = r2("react.legacy_hidden");
      }
      var ua = typeof Symbol === "function" && Symbol.iterator;
      function va(a2) {
        if (a2 === null || typeof a2 !== "object")
          return null;
        a2 = ua && a2[ua] || a2["@@iterator"];
        return typeof a2 === "function" ? a2 : null;
      }
      function wa(a2) {
        if (a2 == null)
          return null;
        if (typeof a2 === "function")
          return a2.displayName || a2.name || null;
        if (typeof a2 === "string")
          return a2;
        switch (a2) {
          case fa:
            return "Fragment";
          case ea:
            return "Portal";
          case ia:
            return "Profiler";
          case ha:
            return "StrictMode";
          case ma:
            return "Suspense";
          case na:
            return "SuspenseList";
        }
        if (typeof a2 === "object")
          switch (a2.$$typeof) {
            case ka:
              return (a2.displayName || "Context") + ".Consumer";
            case ja:
              return (a2._context.displayName || "Context") + ".Provider";
            case la:
              var b2 = a2.render;
              b2 = b2.displayName || b2.name || "";
              return a2.displayName || (b2 !== "" ? "ForwardRef(" + b2 + ")" : "ForwardRef");
            case oa:
              return wa(a2.type);
            case qa:
              return wa(a2._render);
            case pa:
              b2 = a2._payload;
              a2 = a2._init;
              try {
                return wa(a2(b2));
              } catch (c2) {
              }
          }
        return null;
      }
      function xa(a2) {
        var b2 = a2, c2 = a2;
        if (a2.alternate)
          for (; b2.return; )
            b2 = b2.return;
        else {
          a2 = b2;
          do
            b2 = a2, (b2.flags & 1026) !== 0 && (c2 = b2.return), a2 = b2.return;
          while (a2);
        }
        return b2.tag === 3 ? c2 : null;
      }
      function ya(a2) {
        if (xa(a2) !== a2)
          throw Error(q2(188));
      }
      function za(a2) {
        var b2 = a2.alternate;
        if (!b2) {
          b2 = xa(a2);
          if (b2 === null)
            throw Error(q2(188));
          return b2 !== a2 ? null : a2;
        }
        for (var c2 = a2, d2 = b2; ; ) {
          var e2 = c2.return;
          if (e2 === null)
            break;
          var f = e2.alternate;
          if (f === null) {
            d2 = e2.return;
            if (d2 !== null) {
              c2 = d2;
              continue;
            }
            break;
          }
          if (e2.child === f.child) {
            for (f = e2.child; f; ) {
              if (f === c2)
                return ya(e2), a2;
              if (f === d2)
                return ya(e2), b2;
              f = f.sibling;
            }
            throw Error(q2(188));
          }
          if (c2.return !== d2.return)
            c2 = e2, d2 = f;
          else {
            for (var g2 = false, h2 = e2.child; h2; ) {
              if (h2 === c2) {
                g2 = true;
                c2 = e2;
                d2 = f;
                break;
              }
              if (h2 === d2) {
                g2 = true;
                d2 = e2;
                c2 = f;
                break;
              }
              h2 = h2.sibling;
            }
            if (!g2) {
              for (h2 = f.child; h2; ) {
                if (h2 === c2) {
                  g2 = true;
                  c2 = f;
                  d2 = e2;
                  break;
                }
                if (h2 === d2) {
                  g2 = true;
                  d2 = f;
                  c2 = e2;
                  break;
                }
                h2 = h2.sibling;
              }
              if (!g2)
                throw Error(q2(189));
            }
          }
          if (c2.alternate !== d2)
            throw Error(q2(190));
        }
        if (c2.tag !== 3)
          throw Error(q2(188));
        return c2.stateNode.current === c2 ? a2 : b2;
      }
      function Aa(a2) {
        a2 = za(a2);
        if (!a2)
          return null;
        for (var b2 = a2; ; ) {
          if (b2.tag === 5 || b2.tag === 6)
            return b2;
          if (b2.child)
            b2.child.return = b2, b2 = b2.child;
          else {
            if (b2 === a2)
              break;
            for (; !b2.sibling; ) {
              if (!b2.return || b2.return === a2)
                return null;
              b2 = b2.return;
            }
            b2.sibling.return = b2.return;
            b2 = b2.sibling;
          }
        }
        return null;
      }
      function Ba(a2) {
        a2 = za(a2);
        if (!a2)
          return null;
        for (var b2 = a2; ; ) {
          if (b2.tag === 5 || b2.tag === 6)
            return b2;
          if (b2.child && b2.tag !== 4)
            b2.child.return = b2, b2 = b2.child;
          else {
            if (b2 === a2)
              break;
            for (; !b2.sibling; ) {
              if (!b2.return || b2.return === a2)
                return null;
              b2 = b2.return;
            }
            b2.sibling.return = b2.return;
            b2 = b2.sibling;
          }
        }
        return null;
      }
      function Ca(a2, b2) {
        for (var c2 = a2.alternate; b2 !== null; ) {
          if (b2 === a2 || b2 === c2)
            return true;
          b2 = b2.return;
        }
        return false;
      }
      var Da = $$$hostConfig.getPublicInstance, Ea = $$$hostConfig.getRootHostContext, Fa = $$$hostConfig.getChildHostContext, Ga = $$$hostConfig.prepareForCommit, Ha = $$$hostConfig.resetAfterCommit, Ia = $$$hostConfig.createInstance, Ja = $$$hostConfig.appendInitialChild, Ka = $$$hostConfig.finalizeInitialChildren, La = $$$hostConfig.prepareUpdate, Ma = $$$hostConfig.shouldSetTextContent, Na = $$$hostConfig.createTextInstance, Pa = $$$hostConfig.scheduleTimeout, Qa = $$$hostConfig.cancelTimeout, Ra = $$$hostConfig.noTimeout, Sa = $$$hostConfig.isPrimaryRenderer, Ta = $$$hostConfig.supportsMutation, Ua = $$$hostConfig.supportsPersistence, Va = $$$hostConfig.supportsHydration, Wa = $$$hostConfig.getInstanceFromNode, Xa = $$$hostConfig.makeOpaqueHydratingObject, Ya = $$$hostConfig.makeClientId, Za = $$$hostConfig.beforeActiveInstanceBlur, $a = $$$hostConfig.afterActiveInstanceBlur, ab = $$$hostConfig.preparePortalMount, bb = $$$hostConfig.supportsTestSelectors, cb = $$$hostConfig.findFiberRoot, db = $$$hostConfig.getBoundingRect, eb = $$$hostConfig.getTextContent, fb = $$$hostConfig.isHiddenSubtree, gb = $$$hostConfig.matchAccessibilityRole, hb = $$$hostConfig.setFocusIfFocusable, ib = $$$hostConfig.setupIntersectionObserver, jb = $$$hostConfig.appendChild, kb = $$$hostConfig.appendChildToContainer, lb = $$$hostConfig.commitTextUpdate, mb = $$$hostConfig.commitMount, nb = $$$hostConfig.commitUpdate, ob = $$$hostConfig.insertBefore, pb = $$$hostConfig.insertInContainerBefore, qb = $$$hostConfig.removeChild, rb = $$$hostConfig.removeChildFromContainer, sb = $$$hostConfig.resetTextContent, tb = $$$hostConfig.hideInstance, ub = $$$hostConfig.hideTextInstance, vb = $$$hostConfig.unhideInstance, wb = $$$hostConfig.unhideTextInstance, xb = $$$hostConfig.clearContainer, yb = $$$hostConfig.cloneInstance, zb = $$$hostConfig.createContainerChildSet, Ab = $$$hostConfig.appendChildToContainerChildSet, Bb = $$$hostConfig.finalizeContainerChildren, Cb = $$$hostConfig.replaceContainerChildren, Db = $$$hostConfig.cloneHiddenInstance, Eb = $$$hostConfig.cloneHiddenTextInstance, Fb = $$$hostConfig.canHydrateInstance, Gb = $$$hostConfig.canHydrateTextInstance, Hb = $$$hostConfig.isSuspenseInstancePending, Ib = $$$hostConfig.isSuspenseInstanceFallback, Jb = $$$hostConfig.getNextHydratableSibling, Kb = $$$hostConfig.getFirstHydratableChild, Lb = $$$hostConfig.hydrateInstance, Mb = $$$hostConfig.hydrateTextInstance, Nb = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance, Ob = $$$hostConfig.commitHydratedContainer, Pb = $$$hostConfig.commitHydratedSuspenseInstance, Qb;
      function Rb(a2) {
        if (Qb === void 0)
          try {
            throw Error();
          } catch (c2) {
            var b2 = c2.stack.trim().match(/\n( *(at )?)/);
            Qb = b2 && b2[1] || "";
          }
        return "\n" + Qb + a2;
      }
      var Sb = false;
      function Tb(a2, b2) {
        if (!a2 || Sb)
          return "";
        Sb = true;
        var c2 = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b2)
            if (b2 = function() {
              throw Error();
            }, Object.defineProperty(b2.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect === "object" && Reflect.construct) {
              try {
                Reflect.construct(b2, []);
              } catch (k2) {
                var d2 = k2;
              }
              Reflect.construct(a2, [], b2);
            } else {
              try {
                b2.call();
              } catch (k2) {
                d2 = k2;
              }
              a2.call(b2.prototype);
            }
          else {
            try {
              throw Error();
            } catch (k2) {
              d2 = k2;
            }
            a2();
          }
        } catch (k2) {
          if (k2 && d2 && typeof k2.stack === "string") {
            for (var e2 = k2.stack.split("\n"), f = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f[h2]; )
              h2--;
            for (; 1 <= g2 && 0 <= h2; g2--, h2--)
              if (e2[g2] !== f[h2]) {
                if (g2 !== 1 || h2 !== 1) {
                  do
                    if (g2--, h2--, 0 > h2 || e2[g2] !== f[h2])
                      return "\n" + e2[g2].replace(" at new ", " at ");
                  while (1 <= g2 && 0 <= h2);
                }
                break;
              }
          }
        } finally {
          Sb = false, Error.prepareStackTrace = c2;
        }
        return (a2 = a2 ? a2.displayName || a2.name : "") ? Rb(a2) : "";
      }
      var Ub = [], Vb = -1;
      function Wb(a2) {
        return { current: a2 };
      }
      function z2(a2) {
        0 > Vb || (a2.current = Ub[Vb], Ub[Vb] = null, Vb--);
      }
      function A2(a2, b2) {
        Vb++;
        Ub[Vb] = a2.current;
        a2.current = b2;
      }
      var Xb = {}, B2 = Wb(Xb), D = Wb(false), Yb = Xb;
      function Zb(a2, b2) {
        var c2 = a2.type.contextTypes;
        if (!c2)
          return Xb;
        var d2 = a2.stateNode;
        if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
          return d2.__reactInternalMemoizedMaskedChildContext;
        var e2 = {}, f;
        for (f in c2)
          e2[f] = b2[f];
        d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
        return e2;
      }
      function E2(a2) {
        a2 = a2.childContextTypes;
        return a2 !== null && a2 !== void 0;
      }
      function $b() {
        z2(D);
        z2(B2);
      }
      function ac(a2, b2, c2) {
        if (B2.current !== Xb)
          throw Error(q2(168));
        A2(B2, b2);
        A2(D, c2);
      }
      function bc(a2, b2, c2) {
        var d2 = a2.stateNode;
        a2 = b2.childContextTypes;
        if (typeof d2.getChildContext !== "function")
          return c2;
        d2 = d2.getChildContext();
        for (var e2 in d2)
          if (!(e2 in a2))
            throw Error(q2(108, wa(b2) || "Unknown", e2));
        return aa({}, c2, d2);
      }
      function cc(a2) {
        a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Xb;
        Yb = B2.current;
        A2(B2, a2);
        A2(D, D.current);
        return true;
      }
      function dc(a2, b2, c2) {
        var d2 = a2.stateNode;
        if (!d2)
          throw Error(q2(169));
        c2 ? (a2 = bc(a2, b2, Yb), d2.__reactInternalMemoizedMergedChildContext = a2, z2(D), z2(B2), A2(B2, a2)) : z2(D);
        A2(D, c2);
      }
      var ec = null, fc = null, gc = m2.unstable_now;
      gc();
      var hc = 0, F2 = 8;
      function ic(a2) {
        if ((1 & a2) !== 0)
          return F2 = 15, 1;
        if ((2 & a2) !== 0)
          return F2 = 14, 2;
        if ((4 & a2) !== 0)
          return F2 = 13, 4;
        var b2 = 24 & a2;
        if (b2 !== 0)
          return F2 = 12, b2;
        if ((a2 & 32) !== 0)
          return F2 = 11, 32;
        b2 = 192 & a2;
        if (b2 !== 0)
          return F2 = 10, b2;
        if ((a2 & 256) !== 0)
          return F2 = 9, 256;
        b2 = 3584 & a2;
        if (b2 !== 0)
          return F2 = 8, b2;
        if ((a2 & 4096) !== 0)
          return F2 = 7, 4096;
        b2 = 4186112 & a2;
        if (b2 !== 0)
          return F2 = 6, b2;
        b2 = 62914560 & a2;
        if (b2 !== 0)
          return F2 = 5, b2;
        if (a2 & 67108864)
          return F2 = 4, 67108864;
        if ((a2 & 134217728) !== 0)
          return F2 = 3, 134217728;
        b2 = 805306368 & a2;
        if (b2 !== 0)
          return F2 = 2, b2;
        if ((1073741824 & a2) !== 0)
          return F2 = 1, 1073741824;
        F2 = 8;
        return a2;
      }
      function jc(a2) {
        switch (a2) {
          case 99:
            return 15;
          case 98:
            return 10;
          case 97:
          case 96:
            return 8;
          case 95:
            return 2;
          default:
            return 0;
        }
      }
      function kc(a2) {
        switch (a2) {
          case 15:
          case 14:
            return 99;
          case 13:
          case 12:
          case 11:
          case 10:
            return 98;
          case 9:
          case 8:
          case 7:
          case 6:
          case 4:
          case 5:
            return 97;
          case 3:
          case 2:
          case 1:
            return 95;
          case 0:
            return 90;
          default:
            throw Error(q2(358, a2));
        }
      }
      function lc(a2, b2) {
        var c2 = a2.pendingLanes;
        if (c2 === 0)
          return F2 = 0;
        var d2 = 0, e2 = 0, f = a2.expiredLanes, g2 = a2.suspendedLanes, h2 = a2.pingedLanes;
        if (f !== 0)
          d2 = f, e2 = F2 = 15;
        else if (f = c2 & 134217727, f !== 0) {
          var k2 = f & ~g2;
          k2 !== 0 ? (d2 = ic(k2), e2 = F2) : (h2 &= f, h2 !== 0 && (d2 = ic(h2), e2 = F2));
        } else
          f = c2 & ~g2, f !== 0 ? (d2 = ic(f), e2 = F2) : h2 !== 0 && (d2 = ic(h2), e2 = F2);
        if (d2 === 0)
          return 0;
        d2 = 31 - mc(d2);
        d2 = c2 & ((0 > d2 ? 0 : 1 << d2) << 1) - 1;
        if (b2 !== 0 && b2 !== d2 && (b2 & g2) === 0) {
          ic(b2);
          if (e2 <= F2)
            return b2;
          F2 = e2;
        }
        b2 = a2.entangledLanes;
        if (b2 !== 0)
          for (a2 = a2.entanglements, b2 &= d2; 0 < b2; )
            c2 = 31 - mc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
        return d2;
      }
      function nc(a2) {
        a2 = a2.pendingLanes & -1073741825;
        return a2 !== 0 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
      }
      function oc(a2, b2) {
        switch (a2) {
          case 15:
            return 1;
          case 14:
            return 2;
          case 12:
            return a2 = pc(24 & ~b2), a2 === 0 ? oc(10, b2) : a2;
          case 10:
            return a2 = pc(192 & ~b2), a2 === 0 ? oc(8, b2) : a2;
          case 8:
            return a2 = pc(3584 & ~b2), a2 === 0 && (a2 = pc(4186112 & ~b2), a2 === 0 && (a2 = 512)), a2;
          case 2:
            return b2 = pc(805306368 & ~b2), b2 === 0 && (b2 = 268435456), b2;
        }
        throw Error(q2(358, a2));
      }
      function pc(a2) {
        return a2 & -a2;
      }
      function qc(a2) {
        for (var b2 = [], c2 = 0; 31 > c2; c2++)
          b2.push(a2);
        return b2;
      }
      function rc(a2, b2, c2) {
        a2.pendingLanes |= b2;
        var d2 = b2 - 1;
        a2.suspendedLanes &= d2;
        a2.pingedLanes &= d2;
        a2 = a2.eventTimes;
        b2 = 31 - mc(b2);
        a2[b2] = c2;
      }
      var mc = Math.clz32 ? Math.clz32 : sc, tc = Math.log, uc = Math.LN2;
      function sc(a2) {
        return a2 === 0 ? 32 : 31 - (tc(a2) / uc | 0) | 0;
      }
      var vc = m2.unstable_runWithPriority, wc = m2.unstable_scheduleCallback, xc = m2.unstable_cancelCallback, yc = m2.unstable_shouldYield, zc = m2.unstable_requestPaint, Ac = m2.unstable_now, Bc = m2.unstable_getCurrentPriorityLevel, Cc = m2.unstable_ImmediatePriority, Dc = m2.unstable_UserBlockingPriority, Ec = m2.unstable_NormalPriority, Fc = m2.unstable_LowPriority, Gc = m2.unstable_IdlePriority, Hc = {}, Ic = zc !== void 0 ? zc : function() {
      }, Jc = null, Kc = null, Lc = false, Mc = Ac(), G2 = 1e4 > Mc ? Ac : function() {
        return Ac() - Mc;
      };
      function Nc() {
        switch (Bc()) {
          case Cc:
            return 99;
          case Dc:
            return 98;
          case Ec:
            return 97;
          case Fc:
            return 96;
          case Gc:
            return 95;
          default:
            throw Error(q2(332));
        }
      }
      function Oc(a2) {
        switch (a2) {
          case 99:
            return Cc;
          case 98:
            return Dc;
          case 97:
            return Ec;
          case 96:
            return Fc;
          case 95:
            return Gc;
          default:
            throw Error(q2(332));
        }
      }
      function Pc(a2, b2) {
        a2 = Oc(a2);
        return vc(a2, b2);
      }
      function Qc(a2, b2, c2) {
        a2 = Oc(a2);
        return wc(a2, b2, c2);
      }
      function H2() {
        if (Kc !== null) {
          var a2 = Kc;
          Kc = null;
          xc(a2);
        }
        Rc();
      }
      function Rc() {
        if (!Lc && Jc !== null) {
          Lc = true;
          var a2 = 0;
          try {
            var b2 = Jc;
            Pc(99, function() {
              for (; a2 < b2.length; a2++) {
                var c2 = b2[a2];
                do
                  c2 = c2(true);
                while (c2 !== null);
              }
            });
            Jc = null;
          } catch (c2) {
            throw Jc !== null && (Jc = Jc.slice(a2 + 1)), wc(Cc, H2), c2;
          } finally {
            Lc = false;
          }
        }
      }
      var Sc = ca.ReactCurrentBatchConfig;
      function Tc(a2, b2) {
        return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
      }
      var I2 = typeof Object.is === "function" ? Object.is : Tc, Uc = Object.prototype.hasOwnProperty;
      function Vc(a2, b2) {
        if (I2(a2, b2))
          return true;
        if (typeof a2 !== "object" || a2 === null || typeof b2 !== "object" || b2 === null)
          return false;
        var c2 = Object.keys(a2), d2 = Object.keys(b2);
        if (c2.length !== d2.length)
          return false;
        for (d2 = 0; d2 < c2.length; d2++)
          if (!Uc.call(b2, c2[d2]) || !I2(a2[c2[d2]], b2[c2[d2]]))
            return false;
        return true;
      }
      function Wc(a2) {
        switch (a2.tag) {
          case 5:
            return Rb(a2.type);
          case 16:
            return Rb("Lazy");
          case 13:
            return Rb("Suspense");
          case 19:
            return Rb("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a2 = Tb(a2.type, false), a2;
          case 11:
            return a2 = Tb(a2.type.render, false), a2;
          case 22:
            return a2 = Tb(a2.type._render, false), a2;
          case 1:
            return a2 = Tb(a2.type, true), a2;
          default:
            return "";
        }
      }
      function Xc(a2, b2) {
        if (a2 && a2.defaultProps) {
          b2 = aa({}, b2);
          a2 = a2.defaultProps;
          for (var c2 in a2)
            b2[c2] === void 0 && (b2[c2] = a2[c2]);
          return b2;
        }
        return b2;
      }
      var Yc = Wb(null), Zc = null, $c = null, ad = null;
      function bd() {
        ad = $c = Zc = null;
      }
      function cd(a2, b2) {
        a2 = a2.type._context;
        Sa ? (A2(Yc, a2._currentValue), a2._currentValue = b2) : (A2(Yc, a2._currentValue2), a2._currentValue2 = b2);
      }
      function dd(a2) {
        var b2 = Yc.current;
        z2(Yc);
        a2 = a2.type._context;
        Sa ? a2._currentValue = b2 : a2._currentValue2 = b2;
      }
      function ed(a2, b2) {
        for (; a2 !== null; ) {
          var c2 = a2.alternate;
          if ((a2.childLanes & b2) === b2)
            if (c2 === null || (c2.childLanes & b2) === b2)
              break;
            else
              c2.childLanes |= b2;
          else
            a2.childLanes |= b2, c2 !== null && (c2.childLanes |= b2);
          a2 = a2.return;
        }
      }
      function fd(a2, b2) {
        Zc = a2;
        ad = $c = null;
        a2 = a2.dependencies;
        a2 !== null && a2.firstContext !== null && ((a2.lanes & b2) !== 0 && (gd = true), a2.firstContext = null);
      }
      function J2(a2, b2) {
        if (ad !== a2 && b2 !== false && b2 !== 0) {
          if (typeof b2 !== "number" || b2 === 1073741823)
            ad = a2, b2 = 1073741823;
          b2 = { context: a2, observedBits: b2, next: null };
          if ($c === null) {
            if (Zc === null)
              throw Error(q2(308));
            $c = b2;
            Zc.dependencies = { lanes: 0, firstContext: b2, responders: null };
          } else
            $c = $c.next = b2;
        }
        return Sa ? a2._currentValue : a2._currentValue2;
      }
      var hd = false;
      function id(a2) {
        a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
      }
      function jd(a2, b2) {
        a2 = a2.updateQueue;
        b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
      }
      function kd(a2, b2) {
        return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
      }
      function md(a2, b2) {
        a2 = a2.updateQueue;
        if (a2 !== null) {
          a2 = a2.shared;
          var c2 = a2.pending;
          c2 === null ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
          a2.pending = b2;
        }
      }
      function nd(a2, b2) {
        var c2 = a2.updateQueue, d2 = a2.alternate;
        if (d2 !== null && (d2 = d2.updateQueue, c2 === d2)) {
          var e2 = null, f = null;
          c2 = c2.firstBaseUpdate;
          if (c2 !== null) {
            do {
              var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
              f === null ? e2 = f = g2 : f = f.next = g2;
              c2 = c2.next;
            } while (c2 !== null);
            f === null ? e2 = f = b2 : f = f.next = b2;
          } else
            e2 = f = b2;
          c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f, shared: d2.shared, effects: d2.effects };
          a2.updateQueue = c2;
          return;
        }
        a2 = c2.lastBaseUpdate;
        a2 === null ? c2.firstBaseUpdate = b2 : a2.next = b2;
        c2.lastBaseUpdate = b2;
      }
      function od(a2, b2, c2, d2) {
        var e2 = a2.updateQueue;
        hd = false;
        var f = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
        if (h2 !== null) {
          e2.shared.pending = null;
          var k2 = h2, l2 = k2.next;
          k2.next = null;
          g2 === null ? f = l2 : g2.next = l2;
          g2 = k2;
          var n2 = a2.alternate;
          if (n2 !== null) {
            n2 = n2.updateQueue;
            var t2 = n2.lastBaseUpdate;
            t2 !== g2 && (t2 === null ? n2.firstBaseUpdate = l2 : t2.next = l2, n2.lastBaseUpdate = k2);
          }
        }
        if (f !== null) {
          t2 = e2.baseState;
          g2 = 0;
          n2 = l2 = k2 = null;
          do {
            h2 = f.lane;
            var p = f.eventTime;
            if ((d2 & h2) === h2) {
              n2 !== null && (n2 = n2.next = {
                eventTime: p,
                lane: 0,
                tag: f.tag,
                payload: f.payload,
                callback: f.callback,
                next: null
              });
              a: {
                var y2 = a2, x2 = f;
                h2 = b2;
                p = c2;
                switch (x2.tag) {
                  case 1:
                    y2 = x2.payload;
                    if (typeof y2 === "function") {
                      t2 = y2.call(p, t2, h2);
                      break a;
                    }
                    t2 = y2;
                    break a;
                  case 3:
                    y2.flags = y2.flags & -4097 | 64;
                  case 0:
                    y2 = x2.payload;
                    h2 = typeof y2 === "function" ? y2.call(p, t2, h2) : y2;
                    if (h2 === null || h2 === void 0)
                      break a;
                    t2 = aa({}, t2, h2);
                    break a;
                  case 2:
                    hd = true;
                }
              }
              f.callback !== null && (a2.flags |= 32, h2 = e2.effects, h2 === null ? e2.effects = [f] : h2.push(f));
            } else
              p = { eventTime: p, lane: h2, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, n2 === null ? (l2 = n2 = p, k2 = t2) : n2 = n2.next = p, g2 |= h2;
            f = f.next;
            if (f === null)
              if (h2 = e2.shared.pending, h2 === null)
                break;
              else
                f = h2.next, h2.next = null, e2.lastBaseUpdate = h2, e2.shared.pending = null;
          } while (1);
          n2 === null && (k2 = t2);
          e2.baseState = k2;
          e2.firstBaseUpdate = l2;
          e2.lastBaseUpdate = n2;
          pd |= g2;
          a2.lanes = g2;
          a2.memoizedState = t2;
        }
      }
      function qd(a2, b2, c2) {
        a2 = b2.effects;
        b2.effects = null;
        if (a2 !== null)
          for (b2 = 0; b2 < a2.length; b2++) {
            var d2 = a2[b2], e2 = d2.callback;
            if (e2 !== null) {
              d2.callback = null;
              d2 = c2;
              if (typeof e2 !== "function")
                throw Error(q2(191, e2));
              e2.call(d2);
            }
          }
      }
      var rd = new ba.Component().refs;
      function sd(a2, b2, c2, d2) {
        b2 = a2.memoizedState;
        c2 = c2(d2, b2);
        c2 = c2 === null || c2 === void 0 ? b2 : aa({}, b2, c2);
        a2.memoizedState = c2;
        a2.lanes === 0 && (a2.updateQueue.baseState = c2);
      }
      var vd = { isMounted: function(a2) {
        return (a2 = a2._reactInternals) ? xa(a2) === a2 : false;
      }, enqueueSetState: function(a2, b2, c2) {
        a2 = a2._reactInternals;
        var d2 = K2(), e2 = td(a2), f = kd(d2, e2);
        f.payload = b2;
        c2 !== void 0 && c2 !== null && (f.callback = c2);
        md(a2, f);
        ud(a2, e2, d2);
      }, enqueueReplaceState: function(a2, b2, c2) {
        a2 = a2._reactInternals;
        var d2 = K2(), e2 = td(a2), f = kd(d2, e2);
        f.tag = 1;
        f.payload = b2;
        c2 !== void 0 && c2 !== null && (f.callback = c2);
        md(a2, f);
        ud(a2, e2, d2);
      }, enqueueForceUpdate: function(a2, b2) {
        a2 = a2._reactInternals;
        var c2 = K2(), d2 = td(a2), e2 = kd(c2, d2);
        e2.tag = 2;
        b2 !== void 0 && b2 !== null && (e2.callback = b2);
        md(a2, e2);
        ud(a2, d2, c2);
      } };
      function wd(a2, b2, c2, d2, e2, f, g2) {
        a2 = a2.stateNode;
        return typeof a2.shouldComponentUpdate === "function" ? a2.shouldComponentUpdate(d2, f, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Vc(c2, d2) || !Vc(e2, f) : true;
      }
      function xd(a2, b2, c2) {
        var d2 = false, e2 = Xb;
        var f = b2.contextType;
        typeof f === "object" && f !== null ? f = J2(f) : (e2 = E2(b2) ? Yb : B2.current, d2 = b2.contextTypes, f = (d2 = d2 !== null && d2 !== void 0) ? Zb(a2, e2) : Xb);
        b2 = new b2(c2, f);
        a2.memoizedState = b2.state !== null && b2.state !== void 0 ? b2.state : null;
        b2.updater = vd;
        a2.stateNode = b2;
        b2._reactInternals = a2;
        d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f);
        return b2;
      }
      function yd(a2, b2, c2, d2) {
        a2 = b2.state;
        typeof b2.componentWillReceiveProps === "function" && b2.componentWillReceiveProps(c2, d2);
        typeof b2.UNSAFE_componentWillReceiveProps === "function" && b2.UNSAFE_componentWillReceiveProps(c2, d2);
        b2.state !== a2 && vd.enqueueReplaceState(b2, b2.state, null);
      }
      function zd(a2, b2, c2, d2) {
        var e2 = a2.stateNode;
        e2.props = c2;
        e2.state = a2.memoizedState;
        e2.refs = rd;
        id(a2);
        var f = b2.contextType;
        typeof f === "object" && f !== null ? e2.context = J2(f) : (f = E2(b2) ? Yb : B2.current, e2.context = Zb(a2, f));
        od(a2, c2, e2, d2);
        e2.state = a2.memoizedState;
        f = b2.getDerivedStateFromProps;
        typeof f === "function" && (sd(a2, b2, f, c2), e2.state = a2.memoizedState);
        typeof b2.getDerivedStateFromProps === "function" || typeof e2.getSnapshotBeforeUpdate === "function" || typeof e2.UNSAFE_componentWillMount !== "function" && typeof e2.componentWillMount !== "function" || (b2 = e2.state, typeof e2.componentWillMount === "function" && e2.componentWillMount(), typeof e2.UNSAFE_componentWillMount === "function" && e2.UNSAFE_componentWillMount(), b2 !== e2.state && vd.enqueueReplaceState(e2, e2.state, null), od(a2, c2, e2, d2), e2.state = a2.memoizedState);
        typeof e2.componentDidMount === "function" && (a2.flags |= 4);
      }
      var Ad = Array.isArray;
      function Bd(a2, b2, c2) {
        a2 = c2.ref;
        if (a2 !== null && typeof a2 !== "function" && typeof a2 !== "object") {
          if (c2._owner) {
            c2 = c2._owner;
            if (c2) {
              if (c2.tag !== 1)
                throw Error(q2(309));
              var d2 = c2.stateNode;
            }
            if (!d2)
              throw Error(q2(147, a2));
            var e2 = "" + a2;
            if (b2 !== null && b2.ref !== null && typeof b2.ref === "function" && b2.ref._stringRef === e2)
              return b2.ref;
            b2 = function(a3) {
              var b3 = d2.refs;
              b3 === rd && (b3 = d2.refs = {});
              a3 === null ? delete b3[e2] : b3[e2] = a3;
            };
            b2._stringRef = e2;
            return b2;
          }
          if (typeof a2 !== "string")
            throw Error(q2(284));
          if (!c2._owner)
            throw Error(q2(290, a2));
        }
        return a2;
      }
      function Cd(a2, b2) {
        if (a2.type !== "textarea")
          throw Error(q2(31, Object.prototype.toString.call(b2) === "[object Object]" ? "object with keys {" + Object.keys(b2).join(", ") + "}" : b2));
      }
      function Dd(a2) {
        function b2(b3, c3) {
          if (a2) {
            var d3 = b3.lastEffect;
            d3 !== null ? (d3.nextEffect = c3, b3.lastEffect = c3) : b3.firstEffect = b3.lastEffect = c3;
            c3.nextEffect = null;
            c3.flags = 8;
          }
        }
        function c2(c3, d3) {
          if (!a2)
            return null;
          for (; d3 !== null; )
            b2(c3, d3), d3 = d3.sibling;
          return null;
        }
        function d2(a3, b3) {
          for (a3 = new Map(); b3 !== null; )
            b3.key !== null ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
          return a3;
        }
        function e2(a3, b3) {
          a3 = Ed(a3, b3);
          a3.index = 0;
          a3.sibling = null;
          return a3;
        }
        function f(b3, c3, d3) {
          b3.index = d3;
          if (!a2)
            return c3;
          d3 = b3.alternate;
          if (d3 !== null)
            return d3 = d3.index, d3 < c3 ? (b3.flags = 2, c3) : d3;
          b3.flags = 2;
          return c3;
        }
        function g2(b3) {
          a2 && b3.alternate === null && (b3.flags = 2);
          return b3;
        }
        function h2(a3, b3, c3, d3) {
          if (b3 === null || b3.tag !== 6)
            return b3 = Fd(c3, a3.mode, d3), b3.return = a3, b3;
          b3 = e2(b3, c3);
          b3.return = a3;
          return b3;
        }
        function k2(a3, b3, c3, d3) {
          if (b3 !== null && b3.elementType === c3.type)
            return d3 = e2(b3, c3.props), d3.ref = Bd(a3, b3, c3), d3.return = a3, d3;
          d3 = Gd(c3.type, c3.key, c3.props, null, a3.mode, d3);
          d3.ref = Bd(a3, b3, c3);
          d3.return = a3;
          return d3;
        }
        function l2(a3, b3, c3, d3) {
          if (b3 === null || b3.tag !== 4 || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
            return b3 = Hd(c3, a3.mode, d3), b3.return = a3, b3;
          b3 = e2(b3, c3.children || []);
          b3.return = a3;
          return b3;
        }
        function n2(a3, b3, c3, d3, f2) {
          if (b3 === null || b3.tag !== 7)
            return b3 = Id(c3, a3.mode, d3, f2), b3.return = a3, b3;
          b3 = e2(b3, c3);
          b3.return = a3;
          return b3;
        }
        function t2(a3, b3, c3) {
          if (typeof b3 === "string" || typeof b3 === "number")
            return b3 = Fd("" + b3, a3.mode, c3), b3.return = a3, b3;
          if (typeof b3 === "object" && b3 !== null) {
            switch (b3.$$typeof) {
              case da:
                return c3 = Gd(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = Bd(a3, null, b3), c3.return = a3, c3;
              case ea:
                return b3 = Hd(b3, a3.mode, c3), b3.return = a3, b3;
            }
            if (Ad(b3) || va(b3))
              return b3 = Id(b3, a3.mode, c3, null), b3.return = a3, b3;
            Cd(a3, b3);
          }
          return null;
        }
        function p(a3, b3, c3, d3) {
          var e3 = b3 !== null ? b3.key : null;
          if (typeof c3 === "string" || typeof c3 === "number")
            return e3 !== null ? null : h2(a3, b3, "" + c3, d3);
          if (typeof c3 === "object" && c3 !== null) {
            switch (c3.$$typeof) {
              case da:
                return c3.key === e3 ? c3.type === fa ? n2(a3, b3, c3.props.children, d3, e3) : k2(a3, b3, c3, d3) : null;
              case ea:
                return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
            }
            if (Ad(c3) || va(c3))
              return e3 !== null ? null : n2(a3, b3, c3, d3, null);
            Cd(a3, c3);
          }
          return null;
        }
        function y2(a3, b3, c3, d3, e3) {
          if (typeof d3 === "string" || typeof d3 === "number")
            return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
          if (typeof d3 === "object" && d3 !== null) {
            switch (d3.$$typeof) {
              case da:
                return a3 = a3.get(d3.key === null ? c3 : d3.key) || null, d3.type === fa ? n2(b3, a3, d3.props.children, e3, d3.key) : k2(b3, a3, d3, e3);
              case ea:
                return a3 = a3.get(d3.key === null ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
            }
            if (Ad(d3) || va(d3))
              return a3 = a3.get(c3) || null, n2(b3, a3, d3, e3, null);
            Cd(b3, d3);
          }
          return null;
        }
        function x2(e3, g3, h3, k3) {
          for (var l3 = null, v4 = null, u2 = g3, C2 = g3 = 0, n3 = null; u2 !== null && C2 < h3.length; C2++) {
            u2.index > C2 ? (n3 = u2, u2 = null) : n3 = u2.sibling;
            var w2 = p(e3, u2, h3[C2], k3);
            if (w2 === null) {
              u2 === null && (u2 = n3);
              break;
            }
            a2 && u2 && w2.alternate === null && b2(e3, u2);
            g3 = f(w2, g3, C2);
            v4 === null ? l3 = w2 : v4.sibling = w2;
            v4 = w2;
            u2 = n3;
          }
          if (C2 === h3.length)
            return c2(e3, u2), l3;
          if (u2 === null) {
            for (; C2 < h3.length; C2++)
              u2 = t2(e3, h3[C2], k3), u2 !== null && (g3 = f(u2, g3, C2), v4 === null ? l3 = u2 : v4.sibling = u2, v4 = u2);
            return l3;
          }
          for (u2 = d2(e3, u2); C2 < h3.length; C2++)
            n3 = y2(u2, e3, C2, h3[C2], k3), n3 !== null && (a2 && n3.alternate !== null && u2.delete(n3.key === null ? C2 : n3.key), g3 = f(n3, g3, C2), v4 === null ? l3 = n3 : v4.sibling = n3, v4 = n3);
          a2 && u2.forEach(function(a3) {
            return b2(e3, a3);
          });
          return l3;
        }
        function Y2(e3, g3, h3, k3) {
          var l3 = va(h3);
          if (typeof l3 !== "function")
            throw Error(q2(150));
          h3 = l3.call(h3);
          if (h3 == null)
            throw Error(q2(151));
          for (var u2 = l3 = null, v4 = g3, n3 = g3 = 0, C2 = null, w2 = h3.next(); v4 !== null && !w2.done; n3++, w2 = h3.next()) {
            v4.index > n3 ? (C2 = v4, v4 = null) : C2 = v4.sibling;
            var x3 = p(e3, v4, w2.value, k3);
            if (x3 === null) {
              v4 === null && (v4 = C2);
              break;
            }
            a2 && v4 && x3.alternate === null && b2(e3, v4);
            g3 = f(x3, g3, n3);
            u2 === null ? l3 = x3 : u2.sibling = x3;
            u2 = x3;
            v4 = C2;
          }
          if (w2.done)
            return c2(e3, v4), l3;
          if (v4 === null) {
            for (; !w2.done; n3++, w2 = h3.next())
              w2 = t2(e3, w2.value, k3), w2 !== null && (g3 = f(w2, g3, n3), u2 === null ? l3 = w2 : u2.sibling = w2, u2 = w2);
            return l3;
          }
          for (v4 = d2(e3, v4); !w2.done; n3++, w2 = h3.next())
            w2 = y2(v4, e3, n3, w2.value, k3), w2 !== null && (a2 && w2.alternate !== null && v4.delete(w2.key === null ? n3 : w2.key), g3 = f(w2, g3, n3), u2 === null ? l3 = w2 : u2.sibling = w2, u2 = w2);
          a2 && v4.forEach(function(a3) {
            return b2(e3, a3);
          });
          return l3;
        }
        return function(a3, d3, f2, h3) {
          var k3 = typeof f2 === "object" && f2 !== null && f2.type === fa && f2.key === null;
          k3 && (f2 = f2.props.children);
          var l3 = typeof f2 === "object" && f2 !== null;
          if (l3)
            switch (f2.$$typeof) {
              case da:
                a: {
                  l3 = f2.key;
                  for (k3 = d3; k3 !== null; ) {
                    if (k3.key === l3) {
                      switch (k3.tag) {
                        case 7:
                          if (f2.type === fa) {
                            c2(a3, k3.sibling);
                            d3 = e2(k3, f2.props.children);
                            d3.return = a3;
                            a3 = d3;
                            break a;
                          }
                          break;
                        default:
                          if (k3.elementType === f2.type) {
                            c2(a3, k3.sibling);
                            d3 = e2(k3, f2.props);
                            d3.ref = Bd(a3, k3, f2);
                            d3.return = a3;
                            a3 = d3;
                            break a;
                          }
                      }
                      c2(a3, k3);
                      break;
                    } else
                      b2(a3, k3);
                    k3 = k3.sibling;
                  }
                  f2.type === fa ? (d3 = Id(f2.props.children, a3.mode, h3, f2.key), d3.return = a3, a3 = d3) : (h3 = Gd(f2.type, f2.key, f2.props, null, a3.mode, h3), h3.ref = Bd(a3, d3, f2), h3.return = a3, a3 = h3);
                }
                return g2(a3);
              case ea:
                a: {
                  for (k3 = f2.key; d3 !== null; ) {
                    if (d3.key === k3)
                      if (d3.tag === 4 && d3.stateNode.containerInfo === f2.containerInfo && d3.stateNode.implementation === f2.implementation) {
                        c2(a3, d3.sibling);
                        d3 = e2(d3, f2.children || []);
                        d3.return = a3;
                        a3 = d3;
                        break a;
                      } else {
                        c2(a3, d3);
                        break;
                      }
                    else
                      b2(a3, d3);
                    d3 = d3.sibling;
                  }
                  d3 = Hd(f2, a3.mode, h3);
                  d3.return = a3;
                  a3 = d3;
                }
                return g2(a3);
            }
          if (typeof f2 === "string" || typeof f2 === "number")
            return f2 = "" + f2, d3 !== null && d3.tag === 6 ? (c2(a3, d3.sibling), d3 = e2(d3, f2), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = Fd(f2, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3);
          if (Ad(f2))
            return x2(a3, d3, f2, h3);
          if (va(f2))
            return Y2(a3, d3, f2, h3);
          l3 && Cd(a3, f2);
          if (typeof f2 === "undefined" && !k3)
            switch (a3.tag) {
              case 1:
              case 22:
              case 0:
              case 11:
              case 15:
                throw Error(q2(152, wa(a3.type) || "Component"));
            }
          return c2(a3, d3);
        };
      }
      var Jd = Dd(true), Kd = Dd(false), Ld = {}, L2 = Wb(Ld), Md = Wb(Ld), Nd = Wb(Ld);
      function Od(a2) {
        if (a2 === Ld)
          throw Error(q2(174));
        return a2;
      }
      function Pd(a2, b2) {
        A2(Nd, b2);
        A2(Md, a2);
        A2(L2, Ld);
        a2 = Ea(b2);
        z2(L2);
        A2(L2, a2);
      }
      function Qd() {
        z2(L2);
        z2(Md);
        z2(Nd);
      }
      function Rd(a2) {
        var b2 = Od(Nd.current), c2 = Od(L2.current);
        b2 = Fa(c2, a2.type, b2);
        c2 !== b2 && (A2(Md, a2), A2(L2, b2));
      }
      function Sd(a2) {
        Md.current === a2 && (z2(L2), z2(Md));
      }
      var M2 = Wb(0);
      function Td(a2) {
        for (var b2 = a2; b2 !== null; ) {
          if (b2.tag === 13) {
            var c2 = b2.memoizedState;
            if (c2 !== null && (c2 = c2.dehydrated, c2 === null || Hb(c2) || Ib(c2)))
              return b2;
          } else if (b2.tag === 19 && b2.memoizedProps.revealOrder !== void 0) {
            if ((b2.flags & 64) !== 0)
              return b2;
          } else if (b2.child !== null) {
            b2.child.return = b2;
            b2 = b2.child;
            continue;
          }
          if (b2 === a2)
            break;
          for (; b2.sibling === null; ) {
            if (b2.return === null || b2.return === a2)
              return null;
            b2 = b2.return;
          }
          b2.sibling.return = b2.return;
          b2 = b2.sibling;
        }
        return null;
      }
      var Ud = null, Vd = null, Wd = false;
      function Xd(a2, b2) {
        var c2 = Yd(5, null, null, 0);
        c2.elementType = "DELETED";
        c2.type = "DELETED";
        c2.stateNode = b2;
        c2.return = a2;
        c2.flags = 8;
        a2.lastEffect !== null ? (a2.lastEffect.nextEffect = c2, a2.lastEffect = c2) : a2.firstEffect = a2.lastEffect = c2;
      }
      function Zd(a2, b2) {
        switch (a2.tag) {
          case 5:
            return b2 = Fb(b2, a2.type, a2.pendingProps), b2 !== null ? (a2.stateNode = b2, true) : false;
          case 6:
            return b2 = Gb(b2, a2.pendingProps), b2 !== null ? (a2.stateNode = b2, true) : false;
          case 13:
            return false;
          default:
            return false;
        }
      }
      function $d(a2) {
        if (Wd) {
          var b2 = Vd;
          if (b2) {
            var c2 = b2;
            if (!Zd(a2, b2)) {
              b2 = Jb(c2);
              if (!b2 || !Zd(a2, b2)) {
                a2.flags = a2.flags & -1025 | 2;
                Wd = false;
                Ud = a2;
                return;
              }
              Xd(Ud, c2);
            }
            Ud = a2;
            Vd = Kb(b2);
          } else
            a2.flags = a2.flags & -1025 | 2, Wd = false, Ud = a2;
        }
      }
      function ae2(a2) {
        for (a2 = a2.return; a2 !== null && a2.tag !== 5 && a2.tag !== 3 && a2.tag !== 13; )
          a2 = a2.return;
        Ud = a2;
      }
      function be2(a2) {
        if (!Va || a2 !== Ud)
          return false;
        if (!Wd)
          return ae2(a2), Wd = true, false;
        var b2 = a2.type;
        if (a2.tag !== 5 || b2 !== "head" && b2 !== "body" && !Ma(b2, a2.memoizedProps))
          for (b2 = Vd; b2; )
            Xd(a2, b2), b2 = Jb(b2);
        ae2(a2);
        if (a2.tag === 13) {
          if (!Va)
            throw Error(q2(316));
          a2 = a2.memoizedState;
          a2 = a2 !== null ? a2.dehydrated : null;
          if (!a2)
            throw Error(q2(317));
          Vd = Nb(a2);
        } else
          Vd = Ud ? Jb(a2.stateNode) : null;
        return true;
      }
      function ce2() {
        Va && (Vd = Ud = null, Wd = false);
      }
      var de2 = [];
      function ee2() {
        for (var a2 = 0; a2 < de2.length; a2++) {
          var b2 = de2[a2];
          Sa ? b2._workInProgressVersionPrimary = null : b2._workInProgressVersionSecondary = null;
        }
        de2.length = 0;
      }
      var fe2 = ca.ReactCurrentDispatcher, ge2 = ca.ReactCurrentBatchConfig, he2 = 0, N2 = null, O2 = null, P2 = null, ie2 = false, je2 = false;
      function Q2() {
        throw Error(q2(321));
      }
      function ke2(a2, b2) {
        if (b2 === null)
          return false;
        for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++)
          if (!I2(a2[c2], b2[c2]))
            return false;
        return true;
      }
      function le2(a2, b2, c2, d2, e2, f) {
        he2 = f;
        N2 = b2;
        b2.memoizedState = null;
        b2.updateQueue = null;
        b2.lanes = 0;
        fe2.current = a2 === null || a2.memoizedState === null ? me2 : ne2;
        a2 = c2(d2, e2);
        if (je2) {
          f = 0;
          do {
            je2 = false;
            if (!(25 > f))
              throw Error(q2(301));
            f += 1;
            P2 = O2 = null;
            b2.updateQueue = null;
            fe2.current = oe2;
            a2 = c2(d2, e2);
          } while (je2);
        }
        fe2.current = pe2;
        b2 = O2 !== null && O2.next !== null;
        he2 = 0;
        P2 = O2 = N2 = null;
        ie2 = false;
        if (b2)
          throw Error(q2(300));
        return a2;
      }
      function qe2() {
        var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        P2 === null ? N2.memoizedState = P2 = a2 : P2 = P2.next = a2;
        return P2;
      }
      function re2() {
        if (O2 === null) {
          var a2 = N2.alternate;
          a2 = a2 !== null ? a2.memoizedState : null;
        } else
          a2 = O2.next;
        var b2 = P2 === null ? N2.memoizedState : P2.next;
        if (b2 !== null)
          P2 = b2, O2 = a2;
        else {
          if (a2 === null)
            throw Error(q2(310));
          O2 = a2;
          a2 = { memoizedState: O2.memoizedState, baseState: O2.baseState, baseQueue: O2.baseQueue, queue: O2.queue, next: null };
          P2 === null ? N2.memoizedState = P2 = a2 : P2 = P2.next = a2;
        }
        return P2;
      }
      function se2(a2, b2) {
        return typeof b2 === "function" ? b2(a2) : b2;
      }
      function te2(a2) {
        var b2 = re2(), c2 = b2.queue;
        if (c2 === null)
          throw Error(q2(311));
        c2.lastRenderedReducer = a2;
        var d2 = O2, e2 = d2.baseQueue, f = c2.pending;
        if (f !== null) {
          if (e2 !== null) {
            var g2 = e2.next;
            e2.next = f.next;
            f.next = g2;
          }
          d2.baseQueue = e2 = f;
          c2.pending = null;
        }
        if (e2 !== null) {
          e2 = e2.next;
          d2 = d2.baseState;
          var h2 = g2 = f = null, k2 = e2;
          do {
            var l2 = k2.lane;
            if ((he2 & l2) === l2)
              h2 !== null && (h2 = h2.next = { lane: 0, action: k2.action, eagerReducer: k2.eagerReducer, eagerState: k2.eagerState, next: null }), d2 = k2.eagerReducer === a2 ? k2.eagerState : a2(d2, k2.action);
            else {
              var n2 = {
                lane: l2,
                action: k2.action,
                eagerReducer: k2.eagerReducer,
                eagerState: k2.eagerState,
                next: null
              };
              h2 === null ? (g2 = h2 = n2, f = d2) : h2 = h2.next = n2;
              N2.lanes |= l2;
              pd |= l2;
            }
            k2 = k2.next;
          } while (k2 !== null && k2 !== e2);
          h2 === null ? f = d2 : h2.next = g2;
          I2(d2, b2.memoizedState) || (gd = true);
          b2.memoizedState = d2;
          b2.baseState = f;
          b2.baseQueue = h2;
          c2.lastRenderedState = d2;
        }
        return [b2.memoizedState, c2.dispatch];
      }
      function ue2(a2) {
        var b2 = re2(), c2 = b2.queue;
        if (c2 === null)
          throw Error(q2(311));
        c2.lastRenderedReducer = a2;
        var d2 = c2.dispatch, e2 = c2.pending, f = b2.memoizedState;
        if (e2 !== null) {
          c2.pending = null;
          var g2 = e2 = e2.next;
          do
            f = a2(f, g2.action), g2 = g2.next;
          while (g2 !== e2);
          I2(f, b2.memoizedState) || (gd = true);
          b2.memoizedState = f;
          b2.baseQueue === null && (b2.baseState = f);
          c2.lastRenderedState = f;
        }
        return [f, d2];
      }
      function ve2(a2, b2, c2) {
        var d2 = b2._getVersion;
        d2 = d2(b2._source);
        var e2 = Sa ? b2._workInProgressVersionPrimary : b2._workInProgressVersionSecondary;
        if (e2 !== null)
          a2 = e2 === d2;
        else if (a2 = a2.mutableReadLanes, a2 = (he2 & a2) === a2)
          Sa ? b2._workInProgressVersionPrimary = d2 : b2._workInProgressVersionSecondary = d2, de2.push(b2);
        if (a2)
          return c2(b2._source);
        de2.push(b2);
        throw Error(q2(350));
      }
      function we2(a2, b2, c2, d2) {
        var e2 = R;
        if (e2 === null)
          throw Error(q2(349));
        var f = b2._getVersion, g2 = f(b2._source), h2 = fe2.current, k2 = h2.useState(function() {
          return ve2(e2, b2, c2);
        }), l2 = k2[1], n2 = k2[0];
        k2 = P2;
        var t2 = a2.memoizedState, p = t2.refs, y2 = p.getSnapshot, x2 = t2.source;
        t2 = t2.subscribe;
        var Y2 = N2;
        a2.memoizedState = { refs: p, source: b2, subscribe: d2 };
        h2.useEffect(function() {
          p.getSnapshot = c2;
          p.setSnapshot = l2;
          var a3 = f(b2._source);
          if (!I2(g2, a3)) {
            a3 = c2(b2._source);
            I2(n2, a3) || (l2(a3), a3 = td(Y2), e2.mutableReadLanes |= a3 & e2.pendingLanes);
            a3 = e2.mutableReadLanes;
            e2.entangledLanes |= a3;
            for (var d3 = e2.entanglements, h3 = a3; 0 < h3; ) {
              var k3 = 31 - mc(h3), t3 = 1 << k3;
              d3[k3] |= a3;
              h3 &= ~t3;
            }
          }
        }, [c2, b2, d2]);
        h2.useEffect(function() {
          return d2(b2._source, function() {
            var a3 = p.getSnapshot, c3 = p.setSnapshot;
            try {
              c3(a3(b2._source));
              var d3 = td(Y2);
              e2.mutableReadLanes |= d3 & e2.pendingLanes;
            } catch (Oa) {
              c3(function() {
                throw Oa;
              });
            }
          });
        }, [b2, d2]);
        I2(y2, c2) && I2(x2, b2) && I2(t2, d2) || (a2 = { pending: null, dispatch: null, lastRenderedReducer: se2, lastRenderedState: n2 }, a2.dispatch = l2 = xe2.bind(null, N2, a2), k2.queue = a2, k2.baseQueue = null, n2 = ve2(e2, b2, c2), k2.memoizedState = k2.baseState = n2);
        return n2;
      }
      function ye2(a2, b2, c2) {
        var d2 = re2();
        return we2(d2, a2, b2, c2);
      }
      function ze2(a2) {
        var b2 = qe2();
        typeof a2 === "function" && (a2 = a2());
        b2.memoizedState = b2.baseState = a2;
        a2 = b2.queue = { pending: null, dispatch: null, lastRenderedReducer: se2, lastRenderedState: a2 };
        a2 = a2.dispatch = xe2.bind(null, N2, a2);
        return [b2.memoizedState, a2];
      }
      function Ae2(a2, b2, c2, d2) {
        a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
        b2 = N2.updateQueue;
        b2 === null ? (b2 = { lastEffect: null }, N2.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, c2 === null ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
        return a2;
      }
      function Be2(a2) {
        var b2 = qe2();
        a2 = { current: a2 };
        return b2.memoizedState = a2;
      }
      function Ce2() {
        return re2().memoizedState;
      }
      function De2(a2, b2, c2, d2) {
        var e2 = qe2();
        N2.flags |= a2;
        e2.memoizedState = Ae2(1 | b2, c2, void 0, d2 === void 0 ? null : d2);
      }
      function Ee2(a2, b2, c2, d2) {
        var e2 = re2();
        d2 = d2 === void 0 ? null : d2;
        var f = void 0;
        if (O2 !== null) {
          var g2 = O2.memoizedState;
          f = g2.destroy;
          if (d2 !== null && ke2(d2, g2.deps)) {
            Ae2(b2, c2, f, d2);
            return;
          }
        }
        N2.flags |= a2;
        e2.memoizedState = Ae2(1 | b2, c2, f, d2);
      }
      function Fe2(a2, b2) {
        return De2(516, 4, a2, b2);
      }
      function Ge2(a2, b2) {
        return Ee2(516, 4, a2, b2);
      }
      function He2(a2, b2) {
        return Ee2(4, 2, a2, b2);
      }
      function Ie(a2, b2) {
        if (typeof b2 === "function")
          return a2 = a2(), b2(a2), function() {
            b2(null);
          };
        if (b2 !== null && b2 !== void 0)
          return a2 = a2(), b2.current = a2, function() {
            b2.current = null;
          };
      }
      function Je2(a2, b2, c2) {
        c2 = c2 !== null && c2 !== void 0 ? c2.concat([a2]) : null;
        return Ee2(4, 2, Ie.bind(null, b2, a2), c2);
      }
      function Ke2() {
      }
      function Le2(a2, b2) {
        var c2 = re2();
        b2 = b2 === void 0 ? null : b2;
        var d2 = c2.memoizedState;
        if (d2 !== null && b2 !== null && ke2(b2, d2[1]))
          return d2[0];
        c2.memoizedState = [a2, b2];
        return a2;
      }
      function Me2(a2, b2) {
        var c2 = re2();
        b2 = b2 === void 0 ? null : b2;
        var d2 = c2.memoizedState;
        if (d2 !== null && b2 !== null && ke2(b2, d2[1]))
          return d2[0];
        a2 = a2();
        c2.memoizedState = [a2, b2];
        return a2;
      }
      function Ne2(a2, b2) {
        var c2 = Nc();
        Pc(98 > c2 ? 98 : c2, function() {
          a2(true);
        });
        Pc(97 < c2 ? 97 : c2, function() {
          var c3 = ge2.transition;
          ge2.transition = 1;
          try {
            a2(false), b2();
          } finally {
            ge2.transition = c3;
          }
        });
      }
      function xe2(a2, b2, c2) {
        var d2 = K2(), e2 = td(a2), f = { lane: e2, action: c2, eagerReducer: null, eagerState: null, next: null }, g2 = b2.pending;
        g2 === null ? f.next = f : (f.next = g2.next, g2.next = f);
        b2.pending = f;
        g2 = a2.alternate;
        if (a2 === N2 || g2 !== null && g2 === N2)
          je2 = ie2 = true;
        else {
          if (a2.lanes === 0 && (g2 === null || g2.lanes === 0) && (g2 = b2.lastRenderedReducer, g2 !== null))
            try {
              var h2 = b2.lastRenderedState, k2 = g2(h2, c2);
              f.eagerReducer = g2;
              f.eagerState = k2;
              if (I2(k2, h2))
                return;
            } catch (l2) {
            } finally {
            }
          ud(a2, e2, d2);
        }
      }
      var pe2 = { readContext: J2, useCallback: Q2, useContext: Q2, useEffect: Q2, useImperativeHandle: Q2, useLayoutEffect: Q2, useMemo: Q2, useReducer: Q2, useRef: Q2, useState: Q2, useDebugValue: Q2, useDeferredValue: Q2, useTransition: Q2, useMutableSource: Q2, useOpaqueIdentifier: Q2, unstable_isNewReconciler: false }, me2 = { readContext: J2, useCallback: function(a2, b2) {
        qe2().memoizedState = [a2, b2 === void 0 ? null : b2];
        return a2;
      }, useContext: J2, useEffect: Fe2, useImperativeHandle: function(a2, b2, c2) {
        c2 = c2 !== null && c2 !== void 0 ? c2.concat([a2]) : null;
        return De2(4, 2, Ie.bind(null, b2, a2), c2);
      }, useLayoutEffect: function(a2, b2) {
        return De2(4, 2, a2, b2);
      }, useMemo: function(a2, b2) {
        var c2 = qe2();
        b2 = b2 === void 0 ? null : b2;
        a2 = a2();
        c2.memoizedState = [a2, b2];
        return a2;
      }, useReducer: function(a2, b2, c2) {
        var d2 = qe2();
        b2 = c2 !== void 0 ? c2(b2) : b2;
        d2.memoizedState = d2.baseState = b2;
        a2 = d2.queue = { pending: null, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
        a2 = a2.dispatch = xe2.bind(null, N2, a2);
        return [d2.memoizedState, a2];
      }, useRef: Be2, useState: ze2, useDebugValue: Ke2, useDeferredValue: function(a2) {
        var b2 = ze2(a2), c2 = b2[0], d2 = b2[1];
        Fe2(function() {
          var b3 = ge2.transition;
          ge2.transition = 1;
          try {
            d2(a2);
          } finally {
            ge2.transition = b3;
          }
        }, [a2]);
        return c2;
      }, useTransition: function() {
        var a2 = ze2(false), b2 = a2[0];
        a2 = Ne2.bind(null, a2[1]);
        Be2(a2);
        return [a2, b2];
      }, useMutableSource: function(a2, b2, c2) {
        var d2 = qe2();
        d2.memoizedState = { refs: { getSnapshot: b2, setSnapshot: null }, source: a2, subscribe: c2 };
        return we2(d2, a2, b2, c2);
      }, useOpaqueIdentifier: function() {
        if (Wd) {
          var a2 = false, b2 = Xa(function() {
            a2 || (a2 = true, c2(Ya()));
            throw Error(q2(355));
          }), c2 = ze2(b2)[1];
          (N2.mode & 2) === 0 && (N2.flags |= 516, Ae2(5, function() {
            c2(Ya());
          }, void 0, null));
          return b2;
        }
        b2 = Ya();
        ze2(b2);
        return b2;
      }, unstable_isNewReconciler: false }, ne2 = {
        readContext: J2,
        useCallback: Le2,
        useContext: J2,
        useEffect: Ge2,
        useImperativeHandle: Je2,
        useLayoutEffect: He2,
        useMemo: Me2,
        useReducer: te2,
        useRef: Ce2,
        useState: function() {
          return te2(se2);
        },
        useDebugValue: Ke2,
        useDeferredValue: function(a2) {
          var b2 = te2(se2), c2 = b2[0], d2 = b2[1];
          Ge2(function() {
            var b3 = ge2.transition;
            ge2.transition = 1;
            try {
              d2(a2);
            } finally {
              ge2.transition = b3;
            }
          }, [a2]);
          return c2;
        },
        useTransition: function() {
          var a2 = te2(se2)[0];
          return [Ce2().current, a2];
        },
        useMutableSource: ye2,
        useOpaqueIdentifier: function() {
          return te2(se2)[0];
        },
        unstable_isNewReconciler: false
      }, oe2 = {
        readContext: J2,
        useCallback: Le2,
        useContext: J2,
        useEffect: Ge2,
        useImperativeHandle: Je2,
        useLayoutEffect: He2,
        useMemo: Me2,
        useReducer: ue2,
        useRef: Ce2,
        useState: function() {
          return ue2(se2);
        },
        useDebugValue: Ke2,
        useDeferredValue: function(a2) {
          var b2 = ue2(se2), c2 = b2[0], d2 = b2[1];
          Ge2(function() {
            var b3 = ge2.transition;
            ge2.transition = 1;
            try {
              d2(a2);
            } finally {
              ge2.transition = b3;
            }
          }, [a2]);
          return c2;
        },
        useTransition: function() {
          var a2 = ue2(se2)[0];
          return [Ce2().current, a2];
        },
        useMutableSource: ye2,
        useOpaqueIdentifier: function() {
          return ue2(se2)[0];
        },
        unstable_isNewReconciler: false
      }, Oe = ca.ReactCurrentOwner, gd = false;
      function S2(a2, b2, c2, d2) {
        b2.child = a2 === null ? Kd(b2, null, c2, d2) : Jd(b2, a2.child, c2, d2);
      }
      function Pe2(a2, b2, c2, d2, e2) {
        c2 = c2.render;
        var f = b2.ref;
        fd(b2, e2);
        d2 = le2(a2, b2, c2, d2, f, e2);
        if (a2 !== null && !gd)
          return b2.updateQueue = a2.updateQueue, b2.flags &= -517, a2.lanes &= ~e2, Re2(a2, b2, e2);
        b2.flags |= 1;
        S2(a2, b2, d2, e2);
        return b2.child;
      }
      function Se2(a2, b2, c2, d2, e2, f) {
        if (a2 === null) {
          var g2 = c2.type;
          if (typeof g2 === "function" && !Te2(g2) && g2.defaultProps === void 0 && c2.compare === null && c2.defaultProps === void 0)
            return b2.tag = 15, b2.type = g2, Ue2(a2, b2, g2, d2, e2, f);
          a2 = Gd(c2.type, null, d2, b2, b2.mode, f);
          a2.ref = b2.ref;
          a2.return = b2;
          return b2.child = a2;
        }
        g2 = a2.child;
        if ((e2 & f) === 0 && (e2 = g2.memoizedProps, c2 = c2.compare, c2 = c2 !== null ? c2 : Vc, c2(e2, d2) && a2.ref === b2.ref))
          return Re2(a2, b2, f);
        b2.flags |= 1;
        a2 = Ed(g2, d2);
        a2.ref = b2.ref;
        a2.return = b2;
        return b2.child = a2;
      }
      function Ue2(a2, b2, c2, d2, e2, f) {
        if (a2 !== null && Vc(a2.memoizedProps, d2) && a2.ref === b2.ref)
          if (gd = false, (f & e2) !== 0)
            (a2.flags & 16384) !== 0 && (gd = true);
          else
            return b2.lanes = a2.lanes, Re2(a2, b2, f);
        return Ve2(a2, b2, c2, d2, f);
      }
      function We2(a2, b2, c2) {
        var d2 = b2.pendingProps, e2 = d2.children, f = a2 !== null ? a2.memoizedState : null;
        if (d2.mode === "hidden" || d2.mode === "unstable-defer-without-hiding")
          if ((b2.mode & 4) === 0)
            b2.memoizedState = { baseLanes: 0 }, Xe2(b2, c2);
          else if ((c2 & 1073741824) !== 0)
            b2.memoizedState = { baseLanes: 0 }, Xe2(b2, f !== null ? f.baseLanes : c2);
          else
            return a2 = f !== null ? f.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2 }, Xe2(b2, a2), null;
        else
          f !== null ? (d2 = f.baseLanes | c2, b2.memoizedState = null) : d2 = c2, Xe2(b2, d2);
        S2(a2, b2, e2, c2);
        return b2.child;
      }
      function Ye2(a2, b2) {
        var c2 = b2.ref;
        if (a2 === null && c2 !== null || a2 !== null && a2.ref !== c2)
          b2.flags |= 128;
      }
      function Ve2(a2, b2, c2, d2, e2) {
        var f = E2(c2) ? Yb : B2.current;
        f = Zb(b2, f);
        fd(b2, e2);
        c2 = le2(a2, b2, c2, d2, f, e2);
        if (a2 !== null && !gd)
          return b2.updateQueue = a2.updateQueue, b2.flags &= -517, a2.lanes &= ~e2, Re2(a2, b2, e2);
        b2.flags |= 1;
        S2(a2, b2, c2, e2);
        return b2.child;
      }
      function Ze2(a2, b2, c2, d2, e2) {
        if (E2(c2)) {
          var f = true;
          cc(b2);
        } else
          f = false;
        fd(b2, e2);
        if (b2.stateNode === null)
          a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), xd(b2, c2, d2), zd(b2, c2, d2, e2), d2 = true;
        else if (a2 === null) {
          var g2 = b2.stateNode, h2 = b2.memoizedProps;
          g2.props = h2;
          var k2 = g2.context, l2 = c2.contextType;
          typeof l2 === "object" && l2 !== null ? l2 = J2(l2) : (l2 = E2(c2) ? Yb : B2.current, l2 = Zb(b2, l2));
          var n2 = c2.getDerivedStateFromProps, t2 = typeof n2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function";
          t2 || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== d2 || k2 !== l2) && yd(b2, g2, d2, l2);
          hd = false;
          var p = b2.memoizedState;
          g2.state = p;
          od(b2, d2, g2, e2);
          k2 = b2.memoizedState;
          h2 !== d2 || p !== k2 || D.current || hd ? (typeof n2 === "function" && (sd(b2, c2, n2, d2), k2 = b2.memoizedState), (h2 = hd || wd(b2, c2, h2, d2, p, k2, l2)) ? (t2 || typeof g2.UNSAFE_componentWillMount !== "function" && typeof g2.componentWillMount !== "function" || (typeof g2.componentWillMount === "function" && g2.componentWillMount(), typeof g2.UNSAFE_componentWillMount === "function" && g2.UNSAFE_componentWillMount()), typeof g2.componentDidMount === "function" && (b2.flags |= 4)) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4), d2 = false);
        } else {
          g2 = b2.stateNode;
          jd(a2, b2);
          h2 = b2.memoizedProps;
          l2 = b2.type === b2.elementType ? h2 : Xc(b2.type, h2);
          g2.props = l2;
          t2 = b2.pendingProps;
          p = g2.context;
          k2 = c2.contextType;
          typeof k2 === "object" && k2 !== null ? k2 = J2(k2) : (k2 = E2(c2) ? Yb : B2.current, k2 = Zb(b2, k2));
          var y2 = c2.getDerivedStateFromProps;
          (n2 = typeof y2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function") || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== t2 || p !== k2) && yd(b2, g2, d2, k2);
          hd = false;
          p = b2.memoizedState;
          g2.state = p;
          od(b2, d2, g2, e2);
          var x2 = b2.memoizedState;
          h2 !== t2 || p !== x2 || D.current || hd ? (typeof y2 === "function" && (sd(b2, c2, y2, d2), x2 = b2.memoizedState), (l2 = hd || wd(b2, c2, l2, d2, p, x2, k2)) ? (n2 || typeof g2.UNSAFE_componentWillUpdate !== "function" && typeof g2.componentWillUpdate !== "function" || (typeof g2.componentWillUpdate === "function" && g2.componentWillUpdate(d2, x2, k2), typeof g2.UNSAFE_componentWillUpdate === "function" && g2.UNSAFE_componentWillUpdate(d2, x2, k2)), typeof g2.componentDidUpdate === "function" && (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate === "function" && (b2.flags |= 256)) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && p === a2.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && p === a2.memoizedState || (b2.flags |= 256), b2.memoizedProps = d2, b2.memoizedState = x2), g2.props = d2, g2.state = x2, g2.context = k2, d2 = l2) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && p === a2.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && p === a2.memoizedState || (b2.flags |= 256), d2 = false);
        }
        return $e2(a2, b2, c2, d2, f, e2);
      }
      function $e2(a2, b2, c2, d2, e2, f) {
        Ye2(a2, b2);
        var g2 = (b2.flags & 64) !== 0;
        if (!d2 && !g2)
          return e2 && dc(b2, c2, false), Re2(a2, b2, f);
        d2 = b2.stateNode;
        Oe.current = b2;
        var h2 = g2 && typeof c2.getDerivedStateFromError !== "function" ? null : d2.render();
        b2.flags |= 1;
        a2 !== null && g2 ? (b2.child = Jd(b2, a2.child, null, f), b2.child = Jd(b2, null, h2, f)) : S2(a2, b2, h2, f);
        b2.memoizedState = d2.state;
        e2 && dc(b2, c2, true);
        return b2.child;
      }
      function af(a2) {
        var b2 = a2.stateNode;
        b2.pendingContext ? ac(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ac(a2, b2.context, false);
        Pd(a2, b2.containerInfo);
      }
      var bf = { dehydrated: null, retryLane: 0 };
      function cf(a2, b2, c2) {
        var d2 = b2.pendingProps, e2 = M2.current, f = false, g2;
        (g2 = (b2.flags & 64) !== 0) || (g2 = a2 !== null && a2.memoizedState === null ? false : (e2 & 2) !== 0);
        g2 ? (f = true, b2.flags &= -65) : a2 !== null && a2.memoizedState === null || d2.fallback === void 0 || d2.unstable_avoidThisFallback === true || (e2 |= 1);
        A2(M2, e2 & 1);
        if (a2 === null) {
          d2.fallback !== void 0 && $d(b2);
          a2 = d2.children;
          e2 = d2.fallback;
          if (f)
            return a2 = df(b2, a2, e2, c2), b2.child.memoizedState = { baseLanes: c2 }, b2.memoizedState = bf, a2;
          if (typeof d2.unstable_expectedLoadTime === "number")
            return a2 = df(b2, a2, e2, c2), b2.child.memoizedState = { baseLanes: c2 }, b2.memoizedState = bf, b2.lanes = 33554432, a2;
          c2 = ef({ mode: "visible", children: a2 }, b2.mode, c2, null);
          c2.return = b2;
          return b2.child = c2;
        }
        if (a2.memoizedState !== null) {
          if (f)
            return d2 = ff(a2, b2, d2.children, d2.fallback, c2), f = b2.child, e2 = a2.child.memoizedState, f.memoizedState = e2 === null ? { baseLanes: c2 } : { baseLanes: e2.baseLanes | c2 }, f.childLanes = a2.childLanes & ~c2, b2.memoizedState = bf, d2;
          c2 = gf(a2, b2, d2.children, c2);
          b2.memoizedState = null;
          return c2;
        }
        if (f)
          return d2 = ff(a2, b2, d2.children, d2.fallback, c2), f = b2.child, e2 = a2.child.memoizedState, f.memoizedState = e2 === null ? { baseLanes: c2 } : { baseLanes: e2.baseLanes | c2 }, f.childLanes = a2.childLanes & ~c2, b2.memoizedState = bf, d2;
        c2 = gf(a2, b2, d2.children, c2);
        b2.memoizedState = null;
        return c2;
      }
      function df(a2, b2, c2, d2) {
        var e2 = a2.mode, f = a2.child;
        b2 = { mode: "hidden", children: b2 };
        (e2 & 2) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = b2) : f = ef(b2, e2, 0, null);
        c2 = Id(c2, e2, d2, null);
        f.return = a2;
        c2.return = a2;
        f.sibling = c2;
        a2.child = f;
        return c2;
      }
      function gf(a2, b2, c2, d2) {
        var e2 = a2.child;
        a2 = e2.sibling;
        c2 = Ed(e2, { mode: "visible", children: c2 });
        (b2.mode & 2) === 0 && (c2.lanes = d2);
        c2.return = b2;
        c2.sibling = null;
        a2 !== null && (a2.nextEffect = null, a2.flags = 8, b2.firstEffect = b2.lastEffect = a2);
        return b2.child = c2;
      }
      function ff(a2, b2, c2, d2, e2) {
        var f = b2.mode, g2 = a2.child;
        a2 = g2.sibling;
        var h2 = { mode: "hidden", children: c2 };
        (f & 2) === 0 && b2.child !== g2 ? (c2 = b2.child, c2.childLanes = 0, c2.pendingProps = h2, g2 = c2.lastEffect, g2 !== null ? (b2.firstEffect = c2.firstEffect, b2.lastEffect = g2, g2.nextEffect = null) : b2.firstEffect = b2.lastEffect = null) : c2 = Ed(g2, h2);
        a2 !== null ? d2 = Ed(a2, d2) : (d2 = Id(d2, f, e2, null), d2.flags |= 2);
        d2.return = b2;
        c2.return = b2;
        c2.sibling = d2;
        b2.child = c2;
        return d2;
      }
      function hf(a2, b2) {
        a2.lanes |= b2;
        var c2 = a2.alternate;
        c2 !== null && (c2.lanes |= b2);
        ed(a2.return, b2);
      }
      function jf(a2, b2, c2, d2, e2, f) {
        var g2 = a2.memoizedState;
        g2 === null ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2, lastEffect: f } : (g2.isBackwards = b2, g2.rendering = null, g2.renderingStartTime = 0, g2.last = d2, g2.tail = c2, g2.tailMode = e2, g2.lastEffect = f);
      }
      function kf(a2, b2, c2) {
        var d2 = b2.pendingProps, e2 = d2.revealOrder, f = d2.tail;
        S2(a2, b2, d2.children, c2);
        d2 = M2.current;
        if ((d2 & 2) !== 0)
          d2 = d2 & 1 | 2, b2.flags |= 64;
        else {
          if (a2 !== null && (a2.flags & 64) !== 0)
            a:
              for (a2 = b2.child; a2 !== null; ) {
                if (a2.tag === 13)
                  a2.memoizedState !== null && hf(a2, c2);
                else if (a2.tag === 19)
                  hf(a2, c2);
                else if (a2.child !== null) {
                  a2.child.return = a2;
                  a2 = a2.child;
                  continue;
                }
                if (a2 === b2)
                  break a;
                for (; a2.sibling === null; ) {
                  if (a2.return === null || a2.return === b2)
                    break a;
                  a2 = a2.return;
                }
                a2.sibling.return = a2.return;
                a2 = a2.sibling;
              }
          d2 &= 1;
        }
        A2(M2, d2);
        if ((b2.mode & 2) === 0)
          b2.memoizedState = null;
        else
          switch (e2) {
            case "forwards":
              c2 = b2.child;
              for (e2 = null; c2 !== null; )
                a2 = c2.alternate, a2 !== null && Td(a2) === null && (e2 = c2), c2 = c2.sibling;
              c2 = e2;
              c2 === null ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
              jf(b2, false, e2, c2, f, b2.lastEffect);
              break;
            case "backwards":
              c2 = null;
              e2 = b2.child;
              for (b2.child = null; e2 !== null; ) {
                a2 = e2.alternate;
                if (a2 !== null && Td(a2) === null) {
                  b2.child = e2;
                  break;
                }
                a2 = e2.sibling;
                e2.sibling = c2;
                c2 = e2;
                e2 = a2;
              }
              jf(b2, true, c2, null, f, b2.lastEffect);
              break;
            case "together":
              jf(b2, false, null, null, void 0, b2.lastEffect);
              break;
            default:
              b2.memoizedState = null;
          }
        return b2.child;
      }
      function Re2(a2, b2, c2) {
        a2 !== null && (b2.dependencies = a2.dependencies);
        pd |= b2.lanes;
        if ((c2 & b2.childLanes) !== 0) {
          if (a2 !== null && b2.child !== a2.child)
            throw Error(q2(153));
          if (b2.child !== null) {
            a2 = b2.child;
            c2 = Ed(a2, a2.pendingProps);
            b2.child = c2;
            for (c2.return = b2; a2.sibling !== null; )
              a2 = a2.sibling, c2 = c2.sibling = Ed(a2, a2.pendingProps), c2.return = b2;
            c2.sibling = null;
          }
          return b2.child;
        }
        return null;
      }
      function lf(a2) {
        a2.flags |= 4;
      }
      var mf, nf, of, pf;
      if (Ta)
        mf = function(a2, b2) {
          for (var c2 = b2.child; c2 !== null; ) {
            if (c2.tag === 5 || c2.tag === 6)
              Ja(a2, c2.stateNode);
            else if (c2.tag !== 4 && c2.child !== null) {
              c2.child.return = c2;
              c2 = c2.child;
              continue;
            }
            if (c2 === b2)
              break;
            for (; c2.sibling === null; ) {
              if (c2.return === null || c2.return === b2)
                return;
              c2 = c2.return;
            }
            c2.sibling.return = c2.return;
            c2 = c2.sibling;
          }
        }, nf = function() {
        }, of = function(a2, b2, c2, d2, e2) {
          a2 = a2.memoizedProps;
          if (a2 !== d2) {
            var f = b2.stateNode, g2 = Od(L2.current);
            c2 = La(f, c2, a2, d2, e2, g2);
            (b2.updateQueue = c2) && lf(b2);
          }
        }, pf = function(a2, b2, c2, d2) {
          c2 !== d2 && lf(b2);
        };
      else if (Ua) {
        mf = function(a2, b2, c2, d2) {
          for (var e2 = b2.child; e2 !== null; ) {
            if (e2.tag === 5) {
              var f = e2.stateNode;
              c2 && d2 && (f = Db(f, e2.type, e2.memoizedProps, e2));
              Ja(a2, f);
            } else if (e2.tag === 6)
              f = e2.stateNode, c2 && d2 && (f = Eb(f, e2.memoizedProps, e2)), Ja(a2, f);
            else if (e2.tag !== 4) {
              if (e2.tag === 13 && (e2.flags & 4) !== 0 && (f = e2.memoizedState !== null)) {
                var g2 = e2.child;
                if (g2 !== null && (g2.child !== null && (g2.child.return = g2, mf(a2, g2, true, f)), f = g2.sibling, f !== null)) {
                  f.return = e2;
                  e2 = f;
                  continue;
                }
              }
              if (e2.child !== null) {
                e2.child.return = e2;
                e2 = e2.child;
                continue;
              }
            }
            if (e2 === b2)
              break;
            for (; e2.sibling === null; ) {
              if (e2.return === null || e2.return === b2)
                return;
              e2 = e2.return;
            }
            e2.sibling.return = e2.return;
            e2 = e2.sibling;
          }
        };
        var qf = function(a2, b2, c2, d2) {
          for (var e2 = b2.child; e2 !== null; ) {
            if (e2.tag === 5) {
              var f = e2.stateNode;
              c2 && d2 && (f = Db(f, e2.type, e2.memoizedProps, e2));
              Ab(a2, f);
            } else if (e2.tag === 6)
              f = e2.stateNode, c2 && d2 && (f = Eb(f, e2.memoizedProps, e2)), Ab(a2, f);
            else if (e2.tag !== 4) {
              if (e2.tag === 13 && (e2.flags & 4) !== 0 && (f = e2.memoizedState !== null)) {
                var g2 = e2.child;
                if (g2 !== null && (g2.child !== null && (g2.child.return = g2, qf(a2, g2, true, f)), f = g2.sibling, f !== null)) {
                  f.return = e2;
                  e2 = f;
                  continue;
                }
              }
              if (e2.child !== null) {
                e2.child.return = e2;
                e2 = e2.child;
                continue;
              }
            }
            if (e2 === b2)
              break;
            for (; e2.sibling === null; ) {
              if (e2.return === null || e2.return === b2)
                return;
              e2 = e2.return;
            }
            e2.sibling.return = e2.return;
            e2 = e2.sibling;
          }
        };
        nf = function(a2) {
          var b2 = a2.stateNode;
          if (a2.firstEffect !== null) {
            var c2 = b2.containerInfo, d2 = zb(c2);
            qf(d2, a2, false, false);
            b2.pendingChildren = d2;
            lf(a2);
            Bb(c2, d2);
          }
        };
        of = function(a2, b2, c2, d2, e2) {
          var f = a2.stateNode, g2 = a2.memoizedProps;
          if ((a2 = b2.firstEffect === null) && g2 === d2)
            b2.stateNode = f;
          else {
            var h2 = b2.stateNode, k2 = Od(L2.current), l2 = null;
            g2 !== d2 && (l2 = La(h2, c2, g2, d2, e2, k2));
            a2 && l2 === null ? b2.stateNode = f : (f = yb(f, l2, c2, g2, d2, b2, a2, h2), Ka(f, c2, d2, e2, k2) && lf(b2), b2.stateNode = f, a2 ? lf(b2) : mf(f, b2, false, false));
          }
        };
        pf = function(a2, b2, c2, d2) {
          c2 !== d2 ? (a2 = Od(Nd.current), c2 = Od(L2.current), b2.stateNode = Na(d2, a2, c2, b2), lf(b2)) : b2.stateNode = a2.stateNode;
        };
      } else
        nf = function() {
        }, of = function() {
        }, pf = function() {
        };
      function rf(a2, b2) {
        if (!Wd)
          switch (a2.tailMode) {
            case "hidden":
              b2 = a2.tail;
              for (var c2 = null; b2 !== null; )
                b2.alternate !== null && (c2 = b2), b2 = b2.sibling;
              c2 === null ? a2.tail = null : c2.sibling = null;
              break;
            case "collapsed":
              c2 = a2.tail;
              for (var d2 = null; c2 !== null; )
                c2.alternate !== null && (d2 = c2), c2 = c2.sibling;
              d2 === null ? b2 || a2.tail === null ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
          }
      }
      function sf(a2, b2, c2) {
        var d2 = b2.pendingProps;
        switch (b2.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return null;
          case 1:
            return E2(b2.type) && $b(), null;
          case 3:
            Qd();
            z2(D);
            z2(B2);
            ee2();
            d2 = b2.stateNode;
            d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
            if (a2 === null || a2.child === null)
              be2(b2) ? lf(b2) : d2.hydrate || (b2.flags |= 256);
            nf(b2);
            return null;
          case 5:
            Sd(b2);
            var e2 = Od(Nd.current);
            c2 = b2.type;
            if (a2 !== null && b2.stateNode != null)
              of(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 128);
            else {
              if (!d2) {
                if (b2.stateNode === null)
                  throw Error(q2(166));
                return null;
              }
              a2 = Od(L2.current);
              if (be2(b2)) {
                if (!Va)
                  throw Error(q2(175));
                a2 = Lb(b2.stateNode, b2.type, b2.memoizedProps, e2, a2, b2);
                b2.updateQueue = a2;
                a2 !== null && lf(b2);
              } else {
                var f = Ia(c2, d2, e2, a2, b2);
                mf(f, b2, false, false);
                b2.stateNode = f;
                Ka(f, c2, d2, e2, a2) && lf(b2);
              }
              b2.ref !== null && (b2.flags |= 128);
            }
            return null;
          case 6:
            if (a2 && b2.stateNode != null)
              pf(a2, b2, a2.memoizedProps, d2);
            else {
              if (typeof d2 !== "string" && b2.stateNode === null)
                throw Error(q2(166));
              a2 = Od(Nd.current);
              e2 = Od(L2.current);
              if (be2(b2)) {
                if (!Va)
                  throw Error(q2(176));
                Mb(b2.stateNode, b2.memoizedProps, b2) && lf(b2);
              } else
                b2.stateNode = Na(d2, a2, e2, b2);
            }
            return null;
          case 13:
            z2(M2);
            d2 = b2.memoizedState;
            if ((b2.flags & 64) !== 0)
              return b2.lanes = c2, b2;
            d2 = d2 !== null;
            e2 = false;
            a2 === null ? b2.memoizedProps.fallback !== void 0 && be2(b2) : e2 = a2.memoizedState !== null;
            if (d2 && !e2 && (b2.mode & 2) !== 0)
              if (a2 === null && b2.memoizedProps.unstable_avoidThisFallback !== true || (M2.current & 1) !== 0)
                T2 === 0 && (T2 = 3);
              else {
                if (T2 === 0 || T2 === 3)
                  T2 = 4;
                R === null || (pd & 134217727) === 0 && (tf & 134217727) === 0 || uf(R, U2);
              }
            Ua && d2 && (b2.flags |= 4);
            Ta && (d2 || e2) && (b2.flags |= 4);
            return null;
          case 4:
            return Qd(), nf(b2), a2 === null && ab(b2.stateNode.containerInfo), null;
          case 10:
            return dd(b2), null;
          case 17:
            return E2(b2.type) && $b(), null;
          case 19:
            z2(M2);
            d2 = b2.memoizedState;
            if (d2 === null)
              return null;
            e2 = (b2.flags & 64) !== 0;
            f = d2.rendering;
            if (f === null)
              if (e2)
                rf(d2, false);
              else {
                if (T2 !== 0 || a2 !== null && (a2.flags & 64) !== 0)
                  for (a2 = b2.child; a2 !== null; ) {
                    f = Td(a2);
                    if (f !== null) {
                      b2.flags |= 64;
                      rf(d2, false);
                      a2 = f.updateQueue;
                      a2 !== null && (b2.updateQueue = a2, b2.flags |= 4);
                      d2.lastEffect === null && (b2.firstEffect = null);
                      b2.lastEffect = d2.lastEffect;
                      a2 = c2;
                      for (d2 = b2.child; d2 !== null; )
                        e2 = d2, c2 = a2, e2.flags &= 2, e2.nextEffect = null, e2.firstEffect = null, e2.lastEffect = null, f = e2.alternate, f === null ? (e2.childLanes = 0, e2.lanes = c2, e2.child = null, e2.memoizedProps = null, e2.memoizedState = null, e2.updateQueue = null, e2.dependencies = null, e2.stateNode = null) : (e2.childLanes = f.childLanes, e2.lanes = f.lanes, e2.child = f.child, e2.memoizedProps = f.memoizedProps, e2.memoizedState = f.memoizedState, e2.updateQueue = f.updateQueue, e2.type = f.type, c2 = f.dependencies, e2.dependencies = c2 === null ? null : { lanes: c2.lanes, firstContext: c2.firstContext }), d2 = d2.sibling;
                      A2(M2, M2.current & 1 | 2);
                      return b2.child;
                    }
                    a2 = a2.sibling;
                  }
                d2.tail !== null && G2() > vf && (b2.flags |= 64, e2 = true, rf(d2, false), b2.lanes = 33554432);
              }
            else {
              if (!e2)
                if (a2 = Td(f), a2 !== null) {
                  if (b2.flags |= 64, e2 = true, a2 = a2.updateQueue, a2 !== null && (b2.updateQueue = a2, b2.flags |= 4), rf(d2, true), d2.tail === null && d2.tailMode === "hidden" && !f.alternate && !Wd)
                    return b2 = b2.lastEffect = d2.lastEffect, b2 !== null && (b2.nextEffect = null), null;
                } else
                  2 * G2() - d2.renderingStartTime > vf && c2 !== 1073741824 && (b2.flags |= 64, e2 = true, rf(d2, false), b2.lanes = 33554432);
              d2.isBackwards ? (f.sibling = b2.child, b2.child = f) : (a2 = d2.last, a2 !== null ? a2.sibling = f : b2.child = f, d2.last = f);
            }
            return d2.tail !== null ? (a2 = d2.tail, d2.rendering = a2, d2.tail = a2.sibling, d2.lastEffect = b2.lastEffect, d2.renderingStartTime = G2(), a2.sibling = null, b2 = M2.current, A2(M2, e2 ? b2 & 1 | 2 : b2 & 1), a2) : null;
          case 23:
          case 24:
            return wf(), a2 !== null && a2.memoizedState !== null !== (b2.memoizedState !== null) && d2.mode !== "unstable-defer-without-hiding" && (b2.flags |= 4), null;
        }
        throw Error(q2(156, b2.tag));
      }
      function xf(a2) {
        switch (a2.tag) {
          case 1:
            E2(a2.type) && $b();
            var b2 = a2.flags;
            return b2 & 4096 ? (a2.flags = b2 & -4097 | 64, a2) : null;
          case 3:
            Qd();
            z2(D);
            z2(B2);
            ee2();
            b2 = a2.flags;
            if ((b2 & 64) !== 0)
              throw Error(q2(285));
            a2.flags = b2 & -4097 | 64;
            return a2;
          case 5:
            return Sd(a2), null;
          case 13:
            return z2(M2), b2 = a2.flags, b2 & 4096 ? (a2.flags = b2 & -4097 | 64, a2) : null;
          case 19:
            return z2(M2), null;
          case 4:
            return Qd(), null;
          case 10:
            return dd(a2), null;
          case 23:
          case 24:
            return wf(), null;
          default:
            return null;
        }
      }
      function yf(a2, b2) {
        try {
          var c2 = "", d2 = b2;
          do
            c2 += Wc(d2), d2 = d2.return;
          while (d2);
          var e2 = c2;
        } catch (f) {
          e2 = "\nError generating stack: " + f.message + "\n" + f.stack;
        }
        return { value: a2, source: b2, stack: e2 };
      }
      function zf(a2, b2) {
        try {
          console.error(b2.value);
        } catch (c2) {
          setTimeout(function() {
            throw c2;
          });
        }
      }
      var Af = typeof WeakMap === "function" ? WeakMap : Map;
      function Bf(a2, b2, c2) {
        c2 = kd(-1, c2);
        c2.tag = 3;
        c2.payload = { element: null };
        var d2 = b2.value;
        c2.callback = function() {
          Cf || (Cf = true, Df = d2);
          zf(a2, b2);
        };
        return c2;
      }
      function Ef(a2, b2, c2) {
        c2 = kd(-1, c2);
        c2.tag = 3;
        var d2 = a2.type.getDerivedStateFromError;
        if (typeof d2 === "function") {
          var e2 = b2.value;
          c2.payload = function() {
            zf(a2, b2);
            return d2(e2);
          };
        }
        var f = a2.stateNode;
        f !== null && typeof f.componentDidCatch === "function" && (c2.callback = function() {
          typeof d2 !== "function" && (Ff === null ? Ff = new Set([this]) : Ff.add(this), zf(a2, b2));
          var c3 = b2.stack;
          this.componentDidCatch(b2.value, { componentStack: c3 !== null ? c3 : "" });
        });
        return c2;
      }
      var Gf = typeof WeakSet === "function" ? WeakSet : Set;
      function Hf(a2) {
        var b2 = a2.ref;
        if (b2 !== null)
          if (typeof b2 === "function")
            try {
              b2(null);
            } catch (c2) {
              If(a2, c2);
            }
          else
            b2.current = null;
      }
      function Jf(a2, b2) {
        switch (b2.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            return;
          case 1:
            if (b2.flags & 256 && a2 !== null) {
              var c2 = a2.memoizedProps, d2 = a2.memoizedState;
              a2 = b2.stateNode;
              b2 = a2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? c2 : Xc(b2.type, c2), d2);
              a2.__reactInternalSnapshotBeforeUpdate = b2;
            }
            return;
          case 3:
            Ta && b2.flags & 256 && xb(b2.stateNode.containerInfo);
            return;
          case 5:
          case 6:
          case 4:
          case 17:
            return;
        }
        throw Error(q2(163));
      }
      function Kf(a2, b2) {
        b2 = b2.updateQueue;
        b2 = b2 !== null ? b2.lastEffect : null;
        if (b2 !== null) {
          var c2 = b2 = b2.next;
          do {
            if ((c2.tag & a2) === a2) {
              var d2 = c2.destroy;
              c2.destroy = void 0;
              d2 !== void 0 && d2();
            }
            c2 = c2.next;
          } while (c2 !== b2);
        }
      }
      function Lf(a2, b2, c2) {
        switch (c2.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            b2 = c2.updateQueue;
            b2 = b2 !== null ? b2.lastEffect : null;
            if (b2 !== null) {
              a2 = b2 = b2.next;
              do {
                if ((a2.tag & 3) === 3) {
                  var d2 = a2.create;
                  a2.destroy = d2();
                }
                a2 = a2.next;
              } while (a2 !== b2);
            }
            b2 = c2.updateQueue;
            b2 = b2 !== null ? b2.lastEffect : null;
            if (b2 !== null) {
              a2 = b2 = b2.next;
              do {
                var e2 = a2;
                d2 = e2.next;
                e2 = e2.tag;
                (e2 & 4) !== 0 && (e2 & 1) !== 0 && (Mf(c2, a2), Nf(c2, a2));
                a2 = d2;
              } while (a2 !== b2);
            }
            return;
          case 1:
            a2 = c2.stateNode;
            c2.flags & 4 && (b2 === null ? a2.componentDidMount() : (d2 = c2.elementType === c2.type ? b2.memoizedProps : Xc(c2.type, b2.memoizedProps), a2.componentDidUpdate(d2, b2.memoizedState, a2.__reactInternalSnapshotBeforeUpdate)));
            b2 = c2.updateQueue;
            b2 !== null && qd(c2, b2, a2);
            return;
          case 3:
            b2 = c2.updateQueue;
            if (b2 !== null) {
              a2 = null;
              if (c2.child !== null)
                switch (c2.child.tag) {
                  case 5:
                    a2 = Da(c2.child.stateNode);
                    break;
                  case 1:
                    a2 = c2.child.stateNode;
                }
              qd(c2, b2, a2);
            }
            return;
          case 5:
            a2 = c2.stateNode;
            b2 === null && c2.flags & 4 && mb(a2, c2.type, c2.memoizedProps, c2);
            return;
          case 6:
            return;
          case 4:
            return;
          case 12:
            return;
          case 13:
            Va && c2.memoizedState === null && (c2 = c2.alternate, c2 !== null && (c2 = c2.memoizedState, c2 !== null && (c2 = c2.dehydrated, c2 !== null && Pb(c2))));
            return;
          case 19:
          case 17:
          case 20:
          case 21:
          case 23:
          case 24:
            return;
        }
        throw Error(q2(163));
      }
      function Of(a2, b2) {
        if (Ta)
          for (var c2 = a2; ; ) {
            if (c2.tag === 5) {
              var d2 = c2.stateNode;
              b2 ? tb(d2) : vb(c2.stateNode, c2.memoizedProps);
            } else if (c2.tag === 6)
              d2 = c2.stateNode, b2 ? ub(d2) : wb(d2, c2.memoizedProps);
            else if ((c2.tag !== 23 && c2.tag !== 24 || c2.memoizedState === null || c2 === a2) && c2.child !== null) {
              c2.child.return = c2;
              c2 = c2.child;
              continue;
            }
            if (c2 === a2)
              break;
            for (; c2.sibling === null; ) {
              if (c2.return === null || c2.return === a2)
                return;
              c2 = c2.return;
            }
            c2.sibling.return = c2.return;
            c2 = c2.sibling;
          }
      }
      function Pf(a2, b2) {
        if (fc && typeof fc.onCommitFiberUnmount === "function")
          try {
            fc.onCommitFiberUnmount(ec, b2);
          } catch (f) {
          }
        switch (b2.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            a2 = b2.updateQueue;
            if (a2 !== null && (a2 = a2.lastEffect, a2 !== null)) {
              var c2 = a2 = a2.next;
              do {
                var d2 = c2, e2 = d2.destroy;
                d2 = d2.tag;
                if (e2 !== void 0)
                  if ((d2 & 4) !== 0)
                    Mf(b2, c2);
                  else {
                    d2 = b2;
                    try {
                      e2();
                    } catch (f) {
                      If(d2, f);
                    }
                  }
                c2 = c2.next;
              } while (c2 !== a2);
            }
            break;
          case 1:
            Hf(b2);
            a2 = b2.stateNode;
            if (typeof a2.componentWillUnmount === "function")
              try {
                a2.props = b2.memoizedProps, a2.state = b2.memoizedState, a2.componentWillUnmount();
              } catch (f) {
                If(b2, f);
              }
            break;
          case 5:
            Hf(b2);
            break;
          case 4:
            Ta ? Qf(a2, b2) : Ua && Ua && (b2 = b2.stateNode.containerInfo, a2 = zb(b2), Cb(b2, a2));
        }
      }
      function Rf(a2, b2) {
        for (var c2 = b2; ; )
          if (Pf(a2, c2), c2.child === null || Ta && c2.tag === 4) {
            if (c2 === b2)
              break;
            for (; c2.sibling === null; ) {
              if (c2.return === null || c2.return === b2)
                return;
              c2 = c2.return;
            }
            c2.sibling.return = c2.return;
            c2 = c2.sibling;
          } else
            c2.child.return = c2, c2 = c2.child;
      }
      function Sf(a2) {
        a2.alternate = null;
        a2.child = null;
        a2.dependencies = null;
        a2.firstEffect = null;
        a2.lastEffect = null;
        a2.memoizedProps = null;
        a2.memoizedState = null;
        a2.pendingProps = null;
        a2.return = null;
        a2.updateQueue = null;
      }
      function Tf(a2) {
        return a2.tag === 5 || a2.tag === 3 || a2.tag === 4;
      }
      function Uf(a2) {
        if (Ta) {
          a: {
            for (var b2 = a2.return; b2 !== null; ) {
              if (Tf(b2))
                break a;
              b2 = b2.return;
            }
            throw Error(q2(160));
          }
          var c2 = b2;
          b2 = c2.stateNode;
          switch (c2.tag) {
            case 5:
              var d2 = false;
              break;
            case 3:
              b2 = b2.containerInfo;
              d2 = true;
              break;
            case 4:
              b2 = b2.containerInfo;
              d2 = true;
              break;
            default:
              throw Error(q2(161));
          }
          c2.flags & 16 && (sb(b2), c2.flags &= -17);
          a:
            b:
              for (c2 = a2; ; ) {
                for (; c2.sibling === null; ) {
                  if (c2.return === null || Tf(c2.return)) {
                    c2 = null;
                    break a;
                  }
                  c2 = c2.return;
                }
                c2.sibling.return = c2.return;
                for (c2 = c2.sibling; c2.tag !== 5 && c2.tag !== 6 && c2.tag !== 18; ) {
                  if (c2.flags & 2)
                    continue b;
                  if (c2.child === null || c2.tag === 4)
                    continue b;
                  else
                    c2.child.return = c2, c2 = c2.child;
                }
                if (!(c2.flags & 2)) {
                  c2 = c2.stateNode;
                  break a;
                }
              }
          d2 ? Vf(a2, c2, b2) : Wf(a2, c2, b2);
        }
      }
      function Vf(a2, b2, c2) {
        var d2 = a2.tag, e2 = d2 === 5 || d2 === 6;
        if (e2)
          a2 = e2 ? a2.stateNode : a2.stateNode.instance, b2 ? pb(c2, a2, b2) : kb(c2, a2);
        else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
          for (Vf(a2, b2, c2), a2 = a2.sibling; a2 !== null; )
            Vf(a2, b2, c2), a2 = a2.sibling;
      }
      function Wf(a2, b2, c2) {
        var d2 = a2.tag, e2 = d2 === 5 || d2 === 6;
        if (e2)
          a2 = e2 ? a2.stateNode : a2.stateNode.instance, b2 ? ob(c2, a2, b2) : jb(c2, a2);
        else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
          for (Wf(a2, b2, c2), a2 = a2.sibling; a2 !== null; )
            Wf(a2, b2, c2), a2 = a2.sibling;
      }
      function Qf(a2, b2) {
        for (var c2 = b2, d2 = false, e2, f; ; ) {
          if (!d2) {
            d2 = c2.return;
            a:
              for (; ; ) {
                if (d2 === null)
                  throw Error(q2(160));
                e2 = d2.stateNode;
                switch (d2.tag) {
                  case 5:
                    f = false;
                    break a;
                  case 3:
                    e2 = e2.containerInfo;
                    f = true;
                    break a;
                  case 4:
                    e2 = e2.containerInfo;
                    f = true;
                    break a;
                }
                d2 = d2.return;
              }
            d2 = true;
          }
          if (c2.tag === 5 || c2.tag === 6)
            Rf(a2, c2), f ? rb(e2, c2.stateNode) : qb(e2, c2.stateNode);
          else if (c2.tag === 4) {
            if (c2.child !== null) {
              e2 = c2.stateNode.containerInfo;
              f = true;
              c2.child.return = c2;
              c2 = c2.child;
              continue;
            }
          } else if (Pf(a2, c2), c2.child !== null) {
            c2.child.return = c2;
            c2 = c2.child;
            continue;
          }
          if (c2 === b2)
            break;
          for (; c2.sibling === null; ) {
            if (c2.return === null || c2.return === b2)
              return;
            c2 = c2.return;
            c2.tag === 4 && (d2 = false);
          }
          c2.sibling.return = c2.return;
          c2 = c2.sibling;
        }
      }
      function Xf(a2, b2) {
        if (Ta) {
          switch (b2.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              Kf(3, b2);
              return;
            case 1:
              return;
            case 5:
              var c2 = b2.stateNode;
              if (c2 != null) {
                var d2 = b2.memoizedProps;
                a2 = a2 !== null ? a2.memoizedProps : d2;
                var e2 = b2.type, f = b2.updateQueue;
                b2.updateQueue = null;
                f !== null && nb(c2, f, e2, a2, d2, b2);
              }
              return;
            case 6:
              if (b2.stateNode === null)
                throw Error(q2(162));
              c2 = b2.memoizedProps;
              lb(b2.stateNode, a2 !== null ? a2.memoizedProps : c2, c2);
              return;
            case 3:
              Va && (b2 = b2.stateNode, b2.hydrate && (b2.hydrate = false, Ob(b2.containerInfo)));
              return;
            case 12:
              return;
            case 13:
              Yf(b2);
              Zf(b2);
              return;
            case 19:
              Zf(b2);
              return;
            case 17:
              return;
            case 23:
            case 24:
              Of(b2, b2.memoizedState !== null);
              return;
          }
          throw Error(q2(163));
        }
        switch (b2.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            Kf(3, b2);
            return;
          case 12:
            return;
          case 13:
            Yf(b2);
            Zf(b2);
            return;
          case 19:
            Zf(b2);
            return;
          case 3:
            Va && (c2 = b2.stateNode, c2.hydrate && (c2.hydrate = false, Ob(c2.containerInfo)));
            break;
          case 23:
          case 24:
            return;
        }
        a:
          if (Ua) {
            switch (b2.tag) {
              case 1:
              case 5:
              case 6:
              case 20:
                break a;
              case 3:
              case 4:
                b2 = b2.stateNode;
                Cb(b2.containerInfo, b2.pendingChildren);
                break a;
            }
            throw Error(q2(163));
          }
      }
      function Yf(a2) {
        a2.memoizedState !== null && ($f = G2(), Ta && Of(a2.child, true));
      }
      function Zf(a2) {
        var b2 = a2.updateQueue;
        if (b2 !== null) {
          a2.updateQueue = null;
          var c2 = a2.stateNode;
          c2 === null && (c2 = a2.stateNode = new Gf());
          b2.forEach(function(b3) {
            var d2 = ag.bind(null, a2, b3);
            c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
          });
        }
      }
      function bg(a2, b2) {
        return a2 !== null && (a2 = a2.memoizedState, a2 === null || a2.dehydrated !== null) ? (b2 = b2.memoizedState, b2 !== null && b2.dehydrated === null) : false;
      }
      var cg = 0, dg = 1, eg = 2, fg = 3, gg = 4;
      if (typeof Symbol === "function" && Symbol.for) {
        var hg = Symbol.for;
        cg = hg("selector.component");
        dg = hg("selector.has_pseudo_class");
        eg = hg("selector.role");
        fg = hg("selector.test_id");
        gg = hg("selector.text");
      }
      function ig(a2) {
        var b2 = Wa(a2);
        if (b2 != null) {
          if (typeof b2.memoizedProps["data-testname"] !== "string")
            throw Error(q2(364));
          return b2;
        }
        a2 = cb(a2);
        if (a2 === null)
          throw Error(q2(362));
        return a2.stateNode.current;
      }
      function jg(a2, b2) {
        switch (b2.$$typeof) {
          case cg:
            if (a2.type === b2.value)
              return true;
            break;
          case dg:
            a: {
              b2 = b2.value;
              a2 = [a2, 0];
              for (var c2 = 0; c2 < a2.length; ) {
                var d2 = a2[c2++], e2 = a2[c2++], f = b2[e2];
                if (d2.tag !== 5 || !fb(d2)) {
                  for (; f != null && jg(d2, f); )
                    e2++, f = b2[e2];
                  if (e2 === b2.length) {
                    b2 = true;
                    break a;
                  } else
                    for (d2 = d2.child; d2 !== null; )
                      a2.push(d2, e2), d2 = d2.sibling;
                }
              }
              b2 = false;
            }
            return b2;
          case eg:
            if (a2.tag === 5 && gb(a2.stateNode, b2.value))
              return true;
            break;
          case gg:
            if (a2.tag === 5 || a2.tag === 6) {
              if (a2 = eb(a2), a2 !== null && 0 <= a2.indexOf(b2.value))
                return true;
            }
            break;
          case fg:
            if (a2.tag === 5 && (a2 = a2.memoizedProps["data-testname"], typeof a2 === "string" && a2.toLowerCase() === b2.value.toLowerCase()))
              return true;
            break;
          default:
            throw Error(q2(365, b2));
        }
        return false;
      }
      function kg(a2) {
        switch (a2.$$typeof) {
          case cg:
            return "<" + (wa(a2.value) || "Unknown") + ">";
          case dg:
            return ":has(" + (kg(a2) || "") + ")";
          case eg:
            return '[role="' + a2.value + '"]';
          case gg:
            return '"' + a2.value + '"';
          case fg:
            return '[data-testname="' + a2.value + '"]';
          default:
            throw Error(q2(365, a2));
        }
      }
      function lg(a2, b2) {
        var c2 = [];
        a2 = [a2, 0];
        for (var d2 = 0; d2 < a2.length; ) {
          var e2 = a2[d2++], f = a2[d2++], g2 = b2[f];
          if (e2.tag !== 5 || !fb(e2)) {
            for (; g2 != null && jg(e2, g2); )
              f++, g2 = b2[f];
            if (f === b2.length)
              c2.push(e2);
            else
              for (e2 = e2.child; e2 !== null; )
                a2.push(e2, f), e2 = e2.sibling;
          }
        }
        return c2;
      }
      function mg(a2, b2) {
        if (!bb)
          throw Error(q2(363));
        a2 = ig(a2);
        a2 = lg(a2, b2);
        b2 = [];
        a2 = Array.from(a2);
        for (var c2 = 0; c2 < a2.length; ) {
          var d2 = a2[c2++];
          if (d2.tag === 5)
            fb(d2) || b2.push(d2.stateNode);
          else
            for (d2 = d2.child; d2 !== null; )
              a2.push(d2), d2 = d2.sibling;
        }
        return b2;
      }
      var ng = null;
      function og(a2) {
        if (ng === null)
          try {
            var b2 = ("require" + Math.random()).slice(0, 7);
            ng = (module2 && module2[b2]).call(module2, "timers").setImmediate;
          } catch (c2) {
            ng = function(a3) {
              var b3 = new MessageChannel();
              b3.port1.onmessage = a3;
              b3.port2.postMessage(void 0);
            };
          }
        return ng(a2);
      }
      var pg = Math.ceil, qg = ca.ReactCurrentDispatcher, rg = ca.ReactCurrentOwner, sg = ca.IsSomeRendererActing, V2 = 0, R = null, W2 = null, U2 = 0, tg = 0, ug = Wb(0), T2 = 0, vg = null, wg = 0, pd = 0, tf = 0, xg = 0, yg = null, $f = 0, vf = Infinity;
      function zg() {
        vf = G2() + 500;
      }
      var X2 = null, Cf = false, Df = null, Ff = null, Ag = false, Bg = null, Cg = 90, Dg = [], Eg = [], Fg = null, Gg = 0, Hg = null, Ig = -1, Jg = 0, Kg = 0, Lg = null, Mg = false;
      function K2() {
        return (V2 & 48) !== 0 ? G2() : Ig !== -1 ? Ig : Ig = G2();
      }
      function td(a2) {
        a2 = a2.mode;
        if ((a2 & 2) === 0)
          return 1;
        if ((a2 & 4) === 0)
          return Nc() === 99 ? 1 : 2;
        Jg === 0 && (Jg = wg);
        if (Sc.transition !== 0) {
          Kg !== 0 && (Kg = yg !== null ? yg.pendingLanes : 0);
          a2 = Jg;
          var b2 = 4186112 & ~Kg;
          b2 &= -b2;
          b2 === 0 && (a2 = 4186112 & ~a2, b2 = a2 & -a2, b2 === 0 && (b2 = 8192));
          return b2;
        }
        a2 = Nc();
        (V2 & 4) !== 0 && a2 === 98 ? a2 = oc(12, Jg) : (a2 = jc(a2), a2 = oc(a2, Jg));
        return a2;
      }
      function ud(a2, b2, c2) {
        if (50 < Gg)
          throw Gg = 0, Hg = null, Error(q2(185));
        a2 = Ng(a2, b2);
        if (a2 === null)
          return null;
        rc(a2, b2, c2);
        a2 === R && (tf |= b2, T2 === 4 && uf(a2, U2));
        var d2 = Nc();
        b2 === 1 ? (V2 & 8) !== 0 && (V2 & 48) === 0 ? Og(a2) : (Z2(a2, c2), V2 === 0 && (zg(), H2())) : ((V2 & 4) === 0 || d2 !== 98 && d2 !== 99 || (Fg === null ? Fg = new Set([a2]) : Fg.add(a2)), Z2(a2, c2));
        yg = a2;
      }
      function Ng(a2, b2) {
        a2.lanes |= b2;
        var c2 = a2.alternate;
        c2 !== null && (c2.lanes |= b2);
        c2 = a2;
        for (a2 = a2.return; a2 !== null; )
          a2.childLanes |= b2, c2 = a2.alternate, c2 !== null && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
        return c2.tag === 3 ? c2.stateNode : null;
      }
      function Z2(a2, b2) {
        for (var c2 = a2.callbackNode, d2 = a2.suspendedLanes, e2 = a2.pingedLanes, f = a2.expirationTimes, g2 = a2.pendingLanes; 0 < g2; ) {
          var h2 = 31 - mc(g2), k2 = 1 << h2, l2 = f[h2];
          if (l2 === -1) {
            if ((k2 & d2) === 0 || (k2 & e2) !== 0) {
              l2 = b2;
              ic(k2);
              var n2 = F2;
              f[h2] = 10 <= n2 ? l2 + 250 : 6 <= n2 ? l2 + 5e3 : -1;
            }
          } else
            l2 <= b2 && (a2.expiredLanes |= k2);
          g2 &= ~k2;
        }
        d2 = lc(a2, a2 === R ? U2 : 0);
        b2 = F2;
        if (d2 === 0)
          c2 !== null && (c2 !== Hc && xc(c2), a2.callbackNode = null, a2.callbackPriority = 0);
        else {
          if (c2 !== null) {
            if (a2.callbackPriority === b2)
              return;
            c2 !== Hc && xc(c2);
          }
          b2 === 15 ? (c2 = Og.bind(null, a2), Jc === null ? (Jc = [c2], Kc = wc(Cc, Rc)) : Jc.push(c2), c2 = Hc) : b2 === 14 ? c2 = Qc(99, Og.bind(null, a2)) : (c2 = kc(b2), c2 = Qc(c2, Pg.bind(null, a2)));
          a2.callbackPriority = b2;
          a2.callbackNode = c2;
        }
      }
      function Pg(a2) {
        Ig = -1;
        Kg = Jg = 0;
        if ((V2 & 48) !== 0)
          throw Error(q2(327));
        var b2 = a2.callbackNode;
        if (Qg() && a2.callbackNode !== b2)
          return null;
        var c2 = lc(a2, a2 === R ? U2 : 0);
        if (c2 === 0)
          return null;
        var d2 = c2;
        var e2 = V2;
        V2 |= 16;
        var f = Rg();
        if (R !== a2 || U2 !== d2)
          zg(), Sg(a2, d2);
        do
          try {
            Tg();
            break;
          } catch (h2) {
            Ug(a2, h2);
          }
        while (1);
        bd();
        qg.current = f;
        V2 = e2;
        W2 !== null ? d2 = 0 : (R = null, U2 = 0, d2 = T2);
        if ((wg & tf) !== 0)
          Sg(a2, 0);
        else if (d2 !== 0) {
          d2 === 2 && (V2 |= 64, a2.hydrate && (a2.hydrate = false, xb(a2.containerInfo)), c2 = nc(a2), c2 !== 0 && (d2 = Vg(a2, c2)));
          if (d2 === 1)
            throw b2 = vg, Sg(a2, 0), uf(a2, c2), Z2(a2, G2()), b2;
          a2.finishedWork = a2.current.alternate;
          a2.finishedLanes = c2;
          switch (d2) {
            case 0:
            case 1:
              throw Error(q2(345));
            case 2:
              Zg(a2);
              break;
            case 3:
              uf(a2, c2);
              if ((c2 & 62914560) === c2 && (d2 = $f + 500 - G2(), 10 < d2)) {
                if (lc(a2, 0) !== 0)
                  break;
                e2 = a2.suspendedLanes;
                if ((e2 & c2) !== c2) {
                  K2();
                  a2.pingedLanes |= a2.suspendedLanes & e2;
                  break;
                }
                a2.timeoutHandle = Pa(Zg.bind(null, a2), d2);
                break;
              }
              Zg(a2);
              break;
            case 4:
              uf(a2, c2);
              if ((c2 & 4186112) === c2)
                break;
              d2 = a2.eventTimes;
              for (e2 = -1; 0 < c2; ) {
                var g2 = 31 - mc(c2);
                f = 1 << g2;
                g2 = d2[g2];
                g2 > e2 && (e2 = g2);
                c2 &= ~f;
              }
              c2 = e2;
              c2 = G2() - c2;
              c2 = (120 > c2 ? 120 : 480 > c2 ? 480 : 1080 > c2 ? 1080 : 1920 > c2 ? 1920 : 3e3 > c2 ? 3e3 : 4320 > c2 ? 4320 : 1960 * pg(c2 / 1960)) - c2;
              if (10 < c2) {
                a2.timeoutHandle = Pa(Zg.bind(null, a2), c2);
                break;
              }
              Zg(a2);
              break;
            case 5:
              Zg(a2);
              break;
            default:
              throw Error(q2(329));
          }
        }
        Z2(a2, G2());
        return a2.callbackNode === b2 ? Pg.bind(null, a2) : null;
      }
      function uf(a2, b2) {
        b2 &= ~xg;
        b2 &= ~tf;
        a2.suspendedLanes |= b2;
        a2.pingedLanes &= ~b2;
        for (a2 = a2.expirationTimes; 0 < b2; ) {
          var c2 = 31 - mc(b2), d2 = 1 << c2;
          a2[c2] = -1;
          b2 &= ~d2;
        }
      }
      function Og(a2) {
        if ((V2 & 48) !== 0)
          throw Error(q2(327));
        Qg();
        if (a2 === R && (a2.expiredLanes & U2) !== 0) {
          var b2 = U2;
          var c2 = Vg(a2, b2);
          (wg & tf) !== 0 && (b2 = lc(a2, b2), c2 = Vg(a2, b2));
        } else
          b2 = lc(a2, 0), c2 = Vg(a2, b2);
        a2.tag !== 0 && c2 === 2 && (V2 |= 64, a2.hydrate && (a2.hydrate = false, xb(a2.containerInfo)), b2 = nc(a2), b2 !== 0 && (c2 = Vg(a2, b2)));
        if (c2 === 1)
          throw c2 = vg, Sg(a2, 0), uf(a2, b2), Z2(a2, G2()), c2;
        a2.finishedWork = a2.current.alternate;
        a2.finishedLanes = b2;
        Zg(a2);
        Z2(a2, G2());
        return null;
      }
      function $g() {
        if (Fg !== null) {
          var a2 = Fg;
          Fg = null;
          a2.forEach(function(a3) {
            a3.expiredLanes |= 24 & a3.pendingLanes;
            Z2(a3, G2());
          });
        }
        H2();
      }
      function ah(a2, b2) {
        var c2 = V2;
        V2 |= 1;
        try {
          return a2(b2);
        } finally {
          V2 = c2, V2 === 0 && (zg(), H2());
        }
      }
      function bh(a2, b2) {
        var c2 = V2;
        if ((c2 & 48) !== 0)
          return a2(b2);
        V2 |= 1;
        try {
          if (a2)
            return Pc(99, a2.bind(null, b2));
        } finally {
          V2 = c2, H2();
        }
      }
      function Xe2(a2, b2) {
        A2(ug, tg);
        tg |= b2;
        wg |= b2;
      }
      function wf() {
        tg = ug.current;
        z2(ug);
      }
      function Sg(a2, b2) {
        a2.finishedWork = null;
        a2.finishedLanes = 0;
        var c2 = a2.timeoutHandle;
        c2 !== Ra && (a2.timeoutHandle = Ra, Qa(c2));
        if (W2 !== null)
          for (c2 = W2.return; c2 !== null; ) {
            var d2 = c2;
            switch (d2.tag) {
              case 1:
                d2 = d2.type.childContextTypes;
                d2 !== null && d2 !== void 0 && $b();
                break;
              case 3:
                Qd();
                z2(D);
                z2(B2);
                ee2();
                break;
              case 5:
                Sd(d2);
                break;
              case 4:
                Qd();
                break;
              case 13:
                z2(M2);
                break;
              case 19:
                z2(M2);
                break;
              case 10:
                dd(d2);
                break;
              case 23:
              case 24:
                wf();
            }
            c2 = c2.return;
          }
        R = a2;
        W2 = Ed(a2.current, null);
        U2 = tg = wg = b2;
        T2 = 0;
        vg = null;
        xg = tf = pd = 0;
      }
      function Ug(a2, b2) {
        do {
          var c2 = W2;
          try {
            bd();
            fe2.current = pe2;
            if (ie2) {
              for (var d2 = N2.memoizedState; d2 !== null; ) {
                var e2 = d2.queue;
                e2 !== null && (e2.pending = null);
                d2 = d2.next;
              }
              ie2 = false;
            }
            he2 = 0;
            P2 = O2 = N2 = null;
            je2 = false;
            rg.current = null;
            if (c2 === null || c2.return === null) {
              T2 = 1;
              vg = b2;
              W2 = null;
              break;
            }
            a: {
              var f = a2, g2 = c2.return, h2 = c2, k2 = b2;
              b2 = U2;
              h2.flags |= 2048;
              h2.firstEffect = h2.lastEffect = null;
              if (k2 !== null && typeof k2 === "object" && typeof k2.then === "function") {
                var l2 = k2;
                if ((h2.mode & 2) === 0) {
                  var n2 = h2.alternate;
                  n2 ? (h2.updateQueue = n2.updateQueue, h2.memoizedState = n2.memoizedState, h2.lanes = n2.lanes) : (h2.updateQueue = null, h2.memoizedState = null);
                }
                var t2 = (M2.current & 1) !== 0, p = g2;
                do {
                  var y2;
                  if (y2 = p.tag === 13) {
                    var x2 = p.memoizedState;
                    if (x2 !== null)
                      y2 = x2.dehydrated !== null ? true : false;
                    else {
                      var Y2 = p.memoizedProps;
                      y2 = Y2.fallback === void 0 ? false : Y2.unstable_avoidThisFallback !== true ? true : t2 ? false : true;
                    }
                  }
                  if (y2) {
                    var u2 = p.updateQueue;
                    if (u2 === null) {
                      var v4 = new Set();
                      v4.add(l2);
                      p.updateQueue = v4;
                    } else
                      u2.add(l2);
                    if ((p.mode & 2) === 0) {
                      p.flags |= 64;
                      h2.flags |= 16384;
                      h2.flags &= -2981;
                      if (h2.tag === 1)
                        if (h2.alternate === null)
                          h2.tag = 17;
                        else {
                          var C2 = kd(-1, 1);
                          C2.tag = 2;
                          md(h2, C2);
                        }
                      h2.lanes |= 1;
                      break a;
                    }
                    k2 = void 0;
                    h2 = b2;
                    var Oa = f.pingCache;
                    Oa === null ? (Oa = f.pingCache = new Af(), k2 = new Set(), Oa.set(l2, k2)) : (k2 = Oa.get(l2), k2 === void 0 && (k2 = new Set(), Oa.set(l2, k2)));
                    if (!k2.has(h2)) {
                      k2.add(h2);
                      var Qe = ch.bind(null, f, l2, h2);
                      l2.then(Qe, Qe);
                    }
                    p.flags |= 4096;
                    p.lanes = b2;
                    break a;
                  }
                  p = p.return;
                } while (p !== null);
                k2 = Error((wa(h2.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
              }
              T2 !== 5 && (T2 = 2);
              k2 = yf(k2, h2);
              p = g2;
              do {
                switch (p.tag) {
                  case 3:
                    f = k2;
                    p.flags |= 4096;
                    b2 &= -b2;
                    p.lanes |= b2;
                    var Wg = Bf(p, f, b2);
                    nd(p, Wg);
                    break a;
                  case 1:
                    f = k2;
                    var Xg = p.type, ld = p.stateNode;
                    if ((p.flags & 64) === 0 && (typeof Xg.getDerivedStateFromError === "function" || ld !== null && typeof ld.componentDidCatch === "function" && (Ff === null || !Ff.has(ld)))) {
                      p.flags |= 4096;
                      b2 &= -b2;
                      p.lanes |= b2;
                      var Yg = Ef(p, f, b2);
                      nd(p, Yg);
                      break a;
                    }
                }
                p = p.return;
              } while (p !== null);
            }
            dh(c2);
          } catch (w2) {
            b2 = w2;
            W2 === c2 && c2 !== null && (W2 = c2 = c2.return);
            continue;
          }
          break;
        } while (1);
      }
      function Rg() {
        var a2 = qg.current;
        qg.current = pe2;
        return a2 === null ? pe2 : a2;
      }
      function Vg(a2, b2) {
        var c2 = V2;
        V2 |= 16;
        var d2 = Rg();
        R === a2 && U2 === b2 || Sg(a2, b2);
        do
          try {
            eh();
            break;
          } catch (e2) {
            Ug(a2, e2);
          }
        while (1);
        bd();
        V2 = c2;
        qg.current = d2;
        if (W2 !== null)
          throw Error(q2(261));
        R = null;
        U2 = 0;
        return T2;
      }
      function eh() {
        for (; W2 !== null; )
          fh(W2);
      }
      function Tg() {
        for (; W2 !== null && !yc(); )
          fh(W2);
      }
      function fh(a2) {
        var b2 = gh(a2.alternate, a2, tg);
        a2.memoizedProps = a2.pendingProps;
        b2 === null ? dh(a2) : W2 = b2;
        rg.current = null;
      }
      function dh(a2) {
        var b2 = a2;
        do {
          var c2 = b2.alternate;
          a2 = b2.return;
          if ((b2.flags & 2048) === 0) {
            c2 = sf(c2, b2, tg);
            if (c2 !== null) {
              W2 = c2;
              return;
            }
            c2 = b2;
            if (c2.tag !== 24 && c2.tag !== 23 || c2.memoizedState === null || (tg & 1073741824) !== 0 || (c2.mode & 4) === 0) {
              for (var d2 = 0, e2 = c2.child; e2 !== null; )
                d2 |= e2.lanes | e2.childLanes, e2 = e2.sibling;
              c2.childLanes = d2;
            }
            a2 !== null && (a2.flags & 2048) === 0 && (a2.firstEffect === null && (a2.firstEffect = b2.firstEffect), b2.lastEffect !== null && (a2.lastEffect !== null && (a2.lastEffect.nextEffect = b2.firstEffect), a2.lastEffect = b2.lastEffect), 1 < b2.flags && (a2.lastEffect !== null ? a2.lastEffect.nextEffect = b2 : a2.firstEffect = b2, a2.lastEffect = b2));
          } else {
            c2 = xf(b2);
            if (c2 !== null) {
              c2.flags &= 2047;
              W2 = c2;
              return;
            }
            a2 !== null && (a2.firstEffect = a2.lastEffect = null, a2.flags |= 2048);
          }
          b2 = b2.sibling;
          if (b2 !== null) {
            W2 = b2;
            return;
          }
          W2 = b2 = a2;
        } while (b2 !== null);
        T2 === 0 && (T2 = 5);
      }
      function Zg(a2) {
        var b2 = Nc();
        Pc(99, hh.bind(null, a2, b2));
        return null;
      }
      function hh(a2, b2) {
        do
          Qg();
        while (Bg !== null);
        if ((V2 & 48) !== 0)
          throw Error(q2(327));
        var c2 = a2.finishedWork;
        if (c2 === null)
          return null;
        a2.finishedWork = null;
        a2.finishedLanes = 0;
        if (c2 === a2.current)
          throw Error(q2(177));
        a2.callbackNode = null;
        var d2 = c2.lanes | c2.childLanes, e2 = d2, f = a2.pendingLanes & ~e2;
        a2.pendingLanes = e2;
        a2.suspendedLanes = 0;
        a2.pingedLanes = 0;
        a2.expiredLanes &= e2;
        a2.mutableReadLanes &= e2;
        a2.entangledLanes &= e2;
        e2 = a2.entanglements;
        for (var g2 = a2.eventTimes, h2 = a2.expirationTimes; 0 < f; ) {
          var k2 = 31 - mc(f), l2 = 1 << k2;
          e2[k2] = 0;
          g2[k2] = -1;
          h2[k2] = -1;
          f &= ~l2;
        }
        Fg !== null && (d2 & 24) === 0 && Fg.has(a2) && Fg.delete(a2);
        a2 === R && (W2 = R = null, U2 = 0);
        1 < c2.flags ? c2.lastEffect !== null ? (c2.lastEffect.nextEffect = c2, d2 = c2.firstEffect) : d2 = c2 : d2 = c2.firstEffect;
        if (d2 !== null) {
          e2 = V2;
          V2 |= 32;
          rg.current = null;
          Lg = Ga(a2.containerInfo);
          Mg = false;
          X2 = d2;
          do
            try {
              ih();
            } catch (v4) {
              if (X2 === null)
                throw Error(q2(330));
              If(X2, v4);
              X2 = X2.nextEffect;
            }
          while (X2 !== null);
          Lg = null;
          X2 = d2;
          do
            try {
              for (g2 = a2; X2 !== null; ) {
                var n2 = X2.flags;
                n2 & 16 && Ta && sb(X2.stateNode);
                if (n2 & 128) {
                  var t2 = X2.alternate;
                  if (t2 !== null) {
                    var p = t2.ref;
                    p !== null && (typeof p === "function" ? p(null) : p.current = null);
                  }
                }
                switch (n2 & 1038) {
                  case 2:
                    Uf(X2);
                    X2.flags &= -3;
                    break;
                  case 6:
                    Uf(X2);
                    X2.flags &= -3;
                    Xf(X2.alternate, X2);
                    break;
                  case 1024:
                    X2.flags &= -1025;
                    break;
                  case 1028:
                    X2.flags &= -1025;
                    Xf(X2.alternate, X2);
                    break;
                  case 4:
                    Xf(X2.alternate, X2);
                    break;
                  case 8:
                    h2 = g2;
                    f = X2;
                    Ta ? Qf(h2, f) : Rf(h2, f);
                    var y2 = f.alternate;
                    Sf(f);
                    y2 !== null && Sf(y2);
                }
                X2 = X2.nextEffect;
              }
            } catch (v4) {
              if (X2 === null)
                throw Error(q2(330));
              If(X2, v4);
              X2 = X2.nextEffect;
            }
          while (X2 !== null);
          Mg && $a();
          Ha(a2.containerInfo);
          a2.current = c2;
          X2 = d2;
          do
            try {
              for (n2 = a2; X2 !== null; ) {
                var x2 = X2.flags;
                x2 & 36 && Lf(n2, X2.alternate, X2);
                if (x2 & 128) {
                  t2 = void 0;
                  var Y2 = X2.ref;
                  if (Y2 !== null) {
                    var u2 = X2.stateNode;
                    switch (X2.tag) {
                      case 5:
                        t2 = Da(u2);
                        break;
                      default:
                        t2 = u2;
                    }
                    typeof Y2 === "function" ? Y2(t2) : Y2.current = t2;
                  }
                }
                X2 = X2.nextEffect;
              }
            } catch (v4) {
              if (X2 === null)
                throw Error(q2(330));
              If(X2, v4);
              X2 = X2.nextEffect;
            }
          while (X2 !== null);
          X2 = null;
          Ic();
          V2 = e2;
        } else
          a2.current = c2;
        if (Ag)
          Ag = false, Bg = a2, Cg = b2;
        else
          for (X2 = d2; X2 !== null; )
            b2 = X2.nextEffect, X2.nextEffect = null, X2.flags & 8 && (x2 = X2, x2.sibling = null, x2.stateNode = null), X2 = b2;
        d2 = a2.pendingLanes;
        d2 === 0 && (Ff = null);
        d2 === 1 ? a2 === Hg ? Gg++ : (Gg = 0, Hg = a2) : Gg = 0;
        c2 = c2.stateNode;
        if (fc && typeof fc.onCommitFiberRoot === "function")
          try {
            fc.onCommitFiberRoot(ec, c2, void 0, (c2.current.flags & 64) === 64);
          } catch (v4) {
          }
        Z2(a2, G2());
        if (Cf)
          throw Cf = false, a2 = Df, Df = null, a2;
        if ((V2 & 8) !== 0)
          return null;
        H2();
        return null;
      }
      function ih() {
        for (; X2 !== null; ) {
          var a2 = X2.alternate;
          Mg || Lg === null || ((X2.flags & 8) !== 0 ? Ca(X2, Lg) && (Mg = true, Za()) : X2.tag === 13 && bg(a2, X2) && Ca(X2, Lg) && (Mg = true, Za()));
          var b2 = X2.flags;
          (b2 & 256) !== 0 && Jf(a2, X2);
          (b2 & 512) === 0 || Ag || (Ag = true, Qc(97, function() {
            Qg();
            return null;
          }));
          X2 = X2.nextEffect;
        }
      }
      function Qg() {
        if (Cg !== 90) {
          var a2 = 97 < Cg ? 97 : Cg;
          Cg = 90;
          return Pc(a2, jh);
        }
        return false;
      }
      function Nf(a2, b2) {
        Dg.push(b2, a2);
        Ag || (Ag = true, Qc(97, function() {
          Qg();
          return null;
        }));
      }
      function Mf(a2, b2) {
        Eg.push(b2, a2);
        Ag || (Ag = true, Qc(97, function() {
          Qg();
          return null;
        }));
      }
      function jh() {
        if (Bg === null)
          return false;
        var a2 = Bg;
        Bg = null;
        if ((V2 & 48) !== 0)
          throw Error(q2(331));
        var b2 = V2;
        V2 |= 32;
        var c2 = Eg;
        Eg = [];
        for (var d2 = 0; d2 < c2.length; d2 += 2) {
          var e2 = c2[d2], f = c2[d2 + 1], g2 = e2.destroy;
          e2.destroy = void 0;
          if (typeof g2 === "function")
            try {
              g2();
            } catch (k2) {
              if (f === null)
                throw Error(q2(330));
              If(f, k2);
            }
        }
        c2 = Dg;
        Dg = [];
        for (d2 = 0; d2 < c2.length; d2 += 2) {
          e2 = c2[d2];
          f = c2[d2 + 1];
          try {
            var h2 = e2.create;
            e2.destroy = h2();
          } catch (k2) {
            if (f === null)
              throw Error(q2(330));
            If(f, k2);
          }
        }
        for (h2 = a2.current.firstEffect; h2 !== null; )
          a2 = h2.nextEffect, h2.nextEffect = null, h2.flags & 8 && (h2.sibling = null, h2.stateNode = null), h2 = a2;
        V2 = b2;
        H2();
        return true;
      }
      function kh(a2, b2, c2) {
        b2 = yf(c2, b2);
        b2 = Bf(a2, b2, 1);
        md(a2, b2);
        b2 = K2();
        a2 = Ng(a2, 1);
        a2 !== null && (rc(a2, 1, b2), Z2(a2, b2));
      }
      function If(a2, b2) {
        if (a2.tag === 3)
          kh(a2, a2, b2);
        else
          for (var c2 = a2.return; c2 !== null; ) {
            if (c2.tag === 3) {
              kh(c2, a2, b2);
              break;
            } else if (c2.tag === 1) {
              var d2 = c2.stateNode;
              if (typeof c2.type.getDerivedStateFromError === "function" || typeof d2.componentDidCatch === "function" && (Ff === null || !Ff.has(d2))) {
                a2 = yf(b2, a2);
                var e2 = Ef(c2, a2, 1);
                md(c2, e2);
                e2 = K2();
                c2 = Ng(c2, 1);
                if (c2 !== null)
                  rc(c2, 1, e2), Z2(c2, e2);
                else if (typeof d2.componentDidCatch === "function" && (Ff === null || !Ff.has(d2)))
                  try {
                    d2.componentDidCatch(b2, a2);
                  } catch (f) {
                  }
                break;
              }
            }
            c2 = c2.return;
          }
      }
      function ch(a2, b2, c2) {
        var d2 = a2.pingCache;
        d2 !== null && d2.delete(b2);
        b2 = K2();
        a2.pingedLanes |= a2.suspendedLanes & c2;
        R === a2 && (U2 & c2) === c2 && (T2 === 4 || T2 === 3 && (U2 & 62914560) === U2 && 500 > G2() - $f ? Sg(a2, 0) : xg |= c2);
        Z2(a2, b2);
      }
      function ag(a2, b2) {
        var c2 = a2.stateNode;
        c2 !== null && c2.delete(b2);
        b2 = 0;
        b2 === 0 && (b2 = a2.mode, (b2 & 2) === 0 ? b2 = 1 : (b2 & 4) === 0 ? b2 = Nc() === 99 ? 1 : 2 : (Jg === 0 && (Jg = wg), b2 = pc(62914560 & ~Jg), b2 === 0 && (b2 = 4194304)));
        c2 = K2();
        a2 = Ng(a2, b2);
        a2 !== null && (rc(a2, b2, c2), Z2(a2, c2));
      }
      var gh;
      gh = function(a2, b2, c2) {
        var d2 = b2.lanes;
        if (a2 !== null)
          if (a2.memoizedProps !== b2.pendingProps || D.current)
            gd = true;
          else if ((c2 & d2) !== 0)
            gd = (a2.flags & 16384) !== 0 ? true : false;
          else {
            gd = false;
            switch (b2.tag) {
              case 3:
                af(b2);
                ce2();
                break;
              case 5:
                Rd(b2);
                break;
              case 1:
                E2(b2.type) && cc(b2);
                break;
              case 4:
                Pd(b2, b2.stateNode.containerInfo);
                break;
              case 10:
                cd(b2, b2.memoizedProps.value);
                break;
              case 13:
                if (b2.memoizedState !== null) {
                  if ((c2 & b2.child.childLanes) !== 0)
                    return cf(a2, b2, c2);
                  A2(M2, M2.current & 1);
                  b2 = Re2(a2, b2, c2);
                  return b2 !== null ? b2.sibling : null;
                }
                A2(M2, M2.current & 1);
                break;
              case 19:
                d2 = (c2 & b2.childLanes) !== 0;
                if ((a2.flags & 64) !== 0) {
                  if (d2)
                    return kf(a2, b2, c2);
                  b2.flags |= 64;
                }
                var e2 = b2.memoizedState;
                e2 !== null && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
                A2(M2, M2.current);
                if (d2)
                  break;
                else
                  return null;
              case 23:
              case 24:
                return b2.lanes = 0, We2(a2, b2, c2);
            }
            return Re2(a2, b2, c2);
          }
        else
          gd = false;
        b2.lanes = 0;
        switch (b2.tag) {
          case 2:
            d2 = b2.type;
            a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
            a2 = b2.pendingProps;
            e2 = Zb(b2, B2.current);
            fd(b2, c2);
            e2 = le2(null, b2, d2, a2, e2, c2);
            b2.flags |= 1;
            if (typeof e2 === "object" && e2 !== null && typeof e2.render === "function" && e2.$$typeof === void 0) {
              b2.tag = 1;
              b2.memoizedState = null;
              b2.updateQueue = null;
              if (E2(d2)) {
                var f = true;
                cc(b2);
              } else
                f = false;
              b2.memoizedState = e2.state !== null && e2.state !== void 0 ? e2.state : null;
              id(b2);
              var g2 = d2.getDerivedStateFromProps;
              typeof g2 === "function" && sd(b2, d2, g2, a2);
              e2.updater = vd;
              b2.stateNode = e2;
              e2._reactInternals = b2;
              zd(b2, d2, a2, c2);
              b2 = $e2(null, b2, d2, true, f, c2);
            } else
              b2.tag = 0, S2(null, b2, e2, c2), b2 = b2.child;
            return b2;
          case 16:
            e2 = b2.elementType;
            a: {
              a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
              a2 = b2.pendingProps;
              f = e2._init;
              e2 = f(e2._payload);
              b2.type = e2;
              f = b2.tag = lh(e2);
              a2 = Xc(e2, a2);
              switch (f) {
                case 0:
                  b2 = Ve2(null, b2, e2, a2, c2);
                  break a;
                case 1:
                  b2 = Ze2(null, b2, e2, a2, c2);
                  break a;
                case 11:
                  b2 = Pe2(null, b2, e2, a2, c2);
                  break a;
                case 14:
                  b2 = Se2(null, b2, e2, Xc(e2.type, a2), d2, c2);
                  break a;
              }
              throw Error(q2(306, e2, ""));
            }
            return b2;
          case 0:
            return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Xc(d2, e2), Ve2(a2, b2, d2, e2, c2);
          case 1:
            return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Xc(d2, e2), Ze2(a2, b2, d2, e2, c2);
          case 3:
            af(b2);
            d2 = b2.updateQueue;
            if (a2 === null || d2 === null)
              throw Error(q2(282));
            d2 = b2.pendingProps;
            e2 = b2.memoizedState;
            e2 = e2 !== null ? e2.element : null;
            jd(a2, b2);
            od(b2, d2, null, c2);
            d2 = b2.memoizedState.element;
            if (d2 === e2)
              ce2(), b2 = Re2(a2, b2, c2);
            else {
              e2 = b2.stateNode;
              if (f = e2.hydrate)
                Va ? (Vd = Kb(b2.stateNode.containerInfo), Ud = b2, f = Wd = true) : f = false;
              if (f) {
                if (Va && (a2 = e2.mutableSourceEagerHydrationData, a2 != null))
                  for (e2 = 0; e2 < a2.length; e2 += 2)
                    f = a2[e2], g2 = a2[e2 + 1], Sa ? f._workInProgressVersionPrimary = g2 : f._workInProgressVersionSecondary = g2, de2.push(f);
                c2 = Kd(b2, null, d2, c2);
                for (b2.child = c2; c2; )
                  c2.flags = c2.flags & -3 | 1024, c2 = c2.sibling;
              } else
                S2(a2, b2, d2, c2), ce2();
              b2 = b2.child;
            }
            return b2;
          case 5:
            return Rd(b2), a2 === null && $d(b2), d2 = b2.type, e2 = b2.pendingProps, f = a2 !== null ? a2.memoizedProps : null, g2 = e2.children, Ma(d2, e2) ? g2 = null : f !== null && Ma(d2, f) && (b2.flags |= 16), Ye2(a2, b2), S2(a2, b2, g2, c2), b2.child;
          case 6:
            return a2 === null && $d(b2), null;
          case 13:
            return cf(a2, b2, c2);
          case 4:
            return Pd(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, a2 === null ? b2.child = Jd(b2, null, d2, c2) : S2(a2, b2, d2, c2), b2.child;
          case 11:
            return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Xc(d2, e2), Pe2(a2, b2, d2, e2, c2);
          case 7:
            return S2(a2, b2, b2.pendingProps, c2), b2.child;
          case 8:
            return S2(a2, b2, b2.pendingProps.children, c2), b2.child;
          case 12:
            return S2(a2, b2, b2.pendingProps.children, c2), b2.child;
          case 10:
            a: {
              d2 = b2.type._context;
              e2 = b2.pendingProps;
              g2 = b2.memoizedProps;
              f = e2.value;
              cd(b2, f);
              if (g2 !== null) {
                var h2 = g2.value;
                f = I2(h2, f) ? 0 : (typeof d2._calculateChangedBits === "function" ? d2._calculateChangedBits(h2, f) : 1073741823) | 0;
                if (f === 0) {
                  if (g2.children === e2.children && !D.current) {
                    b2 = Re2(a2, b2, c2);
                    break a;
                  }
                } else
                  for (h2 = b2.child, h2 !== null && (h2.return = b2); h2 !== null; ) {
                    var k2 = h2.dependencies;
                    if (k2 !== null) {
                      g2 = h2.child;
                      for (var l2 = k2.firstContext; l2 !== null; ) {
                        if (l2.context === d2 && (l2.observedBits & f) !== 0) {
                          h2.tag === 1 && (l2 = kd(-1, c2 & -c2), l2.tag = 2, md(h2, l2));
                          h2.lanes |= c2;
                          l2 = h2.alternate;
                          l2 !== null && (l2.lanes |= c2);
                          ed(h2.return, c2);
                          k2.lanes |= c2;
                          break;
                        }
                        l2 = l2.next;
                      }
                    } else
                      g2 = h2.tag === 10 ? h2.type === b2.type ? null : h2.child : h2.child;
                    if (g2 !== null)
                      g2.return = h2;
                    else
                      for (g2 = h2; g2 !== null; ) {
                        if (g2 === b2) {
                          g2 = null;
                          break;
                        }
                        h2 = g2.sibling;
                        if (h2 !== null) {
                          h2.return = g2.return;
                          g2 = h2;
                          break;
                        }
                        g2 = g2.return;
                      }
                    h2 = g2;
                  }
              }
              S2(a2, b2, e2.children, c2);
              b2 = b2.child;
            }
            return b2;
          case 9:
            return e2 = b2.type, f = b2.pendingProps, d2 = f.children, fd(b2, c2), e2 = J2(e2, f.unstable_observedBits), d2 = d2(e2), b2.flags |= 1, S2(a2, b2, d2, c2), b2.child;
          case 14:
            return e2 = b2.type, f = Xc(e2, b2.pendingProps), f = Xc(e2.type, f), Se2(a2, b2, e2, f, d2, c2);
          case 15:
            return Ue2(a2, b2, b2.type, b2.pendingProps, d2, c2);
          case 17:
            return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Xc(d2, e2), a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), b2.tag = 1, E2(d2) ? (a2 = true, cc(b2)) : a2 = false, fd(b2, c2), xd(b2, d2, e2), zd(b2, d2, e2, c2), $e2(null, b2, d2, true, a2, c2);
          case 19:
            return kf(a2, b2, c2);
          case 23:
            return We2(a2, b2, c2);
          case 24:
            return We2(a2, b2, c2);
        }
        throw Error(q2(156, b2.tag));
      };
      var mh = { current: false }, nh = m2.unstable_flushAllWithoutAsserting, oh = typeof nh === "function";
      function ph() {
        if (nh !== void 0)
          return nh();
        for (var a2 = false; Qg(); )
          a2 = true;
        return a2;
      }
      function qh(a2) {
        try {
          ph(), og(function() {
            ph() ? qh(a2) : a2();
          });
        } catch (b2) {
          a2(b2);
        }
      }
      var rh = 0, sh = false;
      function th(a2, b2, c2, d2) {
        this.tag = a2;
        this.key = c2;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b2;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d2;
        this.flags = 0;
        this.lastEffect = this.firstEffect = this.nextEffect = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Yd(a2, b2, c2, d2) {
        return new th(a2, b2, c2, d2);
      }
      function Te2(a2) {
        a2 = a2.prototype;
        return !(!a2 || !a2.isReactComponent);
      }
      function lh(a2) {
        if (typeof a2 === "function")
          return Te2(a2) ? 1 : 0;
        if (a2 !== void 0 && a2 !== null) {
          a2 = a2.$$typeof;
          if (a2 === la)
            return 11;
          if (a2 === oa)
            return 14;
        }
        return 2;
      }
      function Ed(a2, b2) {
        var c2 = a2.alternate;
        c2 === null ? (c2 = Yd(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.nextEffect = null, c2.firstEffect = null, c2.lastEffect = null);
        c2.childLanes = a2.childLanes;
        c2.lanes = a2.lanes;
        c2.child = a2.child;
        c2.memoizedProps = a2.memoizedProps;
        c2.memoizedState = a2.memoizedState;
        c2.updateQueue = a2.updateQueue;
        b2 = a2.dependencies;
        c2.dependencies = b2 === null ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
        c2.sibling = a2.sibling;
        c2.index = a2.index;
        c2.ref = a2.ref;
        return c2;
      }
      function Gd(a2, b2, c2, d2, e2, f) {
        var g2 = 2;
        d2 = a2;
        if (typeof a2 === "function")
          Te2(a2) && (g2 = 1);
        else if (typeof a2 === "string")
          g2 = 5;
        else
          a:
            switch (a2) {
              case fa:
                return Id(c2.children, e2, f, b2);
              case ra:
                g2 = 8;
                e2 |= 16;
                break;
              case ha:
                g2 = 8;
                e2 |= 1;
                break;
              case ia:
                return a2 = Yd(12, c2, b2, e2 | 8), a2.elementType = ia, a2.type = ia, a2.lanes = f, a2;
              case ma:
                return a2 = Yd(13, c2, b2, e2), a2.type = ma, a2.elementType = ma, a2.lanes = f, a2;
              case na:
                return a2 = Yd(19, c2, b2, e2), a2.elementType = na, a2.lanes = f, a2;
              case sa:
                return ef(c2, e2, f, b2);
              case ta:
                return a2 = Yd(24, c2, b2, e2), a2.elementType = ta, a2.lanes = f, a2;
              default:
                if (typeof a2 === "object" && a2 !== null)
                  switch (a2.$$typeof) {
                    case ja:
                      g2 = 10;
                      break a;
                    case ka:
                      g2 = 9;
                      break a;
                    case la:
                      g2 = 11;
                      break a;
                    case oa:
                      g2 = 14;
                      break a;
                    case pa:
                      g2 = 16;
                      d2 = null;
                      break a;
                    case qa:
                      g2 = 22;
                      break a;
                  }
                throw Error(q2(130, a2 == null ? a2 : typeof a2, ""));
            }
        b2 = Yd(g2, c2, b2, e2);
        b2.elementType = a2;
        b2.type = d2;
        b2.lanes = f;
        return b2;
      }
      function Id(a2, b2, c2, d2) {
        a2 = Yd(7, a2, d2, b2);
        a2.lanes = c2;
        return a2;
      }
      function ef(a2, b2, c2, d2) {
        a2 = Yd(23, a2, d2, b2);
        a2.elementType = sa;
        a2.lanes = c2;
        return a2;
      }
      function Fd(a2, b2, c2) {
        a2 = Yd(6, a2, null, b2);
        a2.lanes = c2;
        return a2;
      }
      function Hd(a2, b2, c2) {
        b2 = Yd(4, a2.children !== null ? a2.children : [], a2.key, b2);
        b2.lanes = c2;
        b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
        return b2;
      }
      function uh(a2, b2, c2) {
        this.tag = b2;
        this.containerInfo = a2;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = Ra;
        this.pendingContext = this.context = null;
        this.hydrate = c2;
        this.callbackNode = null;
        this.callbackPriority = 0;
        this.eventTimes = qc(0);
        this.expirationTimes = qc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = qc(0);
        Va && (this.mutableSourceEagerHydrationData = null);
      }
      function vh(a2) {
        var b2 = a2._reactInternals;
        if (b2 === void 0) {
          if (typeof a2.render === "function")
            throw Error(q2(188));
          throw Error(q2(268, Object.keys(a2)));
        }
        a2 = Aa(b2);
        return a2 === null ? null : a2.stateNode;
      }
      function wh(a2, b2) {
        a2 = a2.memoizedState;
        if (a2 !== null && a2.dehydrated !== null) {
          var c2 = a2.retryLane;
          a2.retryLane = c2 !== 0 && c2 < b2 ? c2 : b2;
        }
      }
      function xh(a2, b2) {
        wh(a2, b2);
        (a2 = a2.alternate) && wh(a2, b2);
      }
      function yh(a2) {
        a2 = Aa(a2);
        return a2 === null ? null : a2.stateNode;
      }
      function zh() {
        return null;
      }
      exports3.IsThisRendererActing = mh;
      exports3.act = function(a2) {
        function b2() {
          rh--;
          sg.current = c2;
          mh.current = d2;
        }
        sh === false && (sh = true, console.error("act(...) is not supported in production builds of React, and might not behave as expected."));
        rh++;
        var c2 = sg.current, d2 = mh.current;
        sg.current = true;
        mh.current = true;
        try {
          var e2 = ah(a2);
        } catch (f) {
          throw b2(), f;
        }
        if (e2 !== null && typeof e2 === "object" && typeof e2.then === "function")
          return { then: function(a3, d3) {
            e2.then(function() {
              1 < rh || oh === true && c2 === true ? (b2(), a3()) : qh(function(c3) {
                b2();
                c3 ? d3(c3) : a3();
              });
            }, function(a4) {
              b2();
              d3(a4);
            });
          } };
        try {
          rh !== 1 || oh !== false && c2 !== false || ph(), b2();
        } catch (f) {
          throw b2(), f;
        }
        return { then: function(a3) {
          a3();
        } };
      };
      exports3.attemptContinuousHydration = function(a2) {
        if (a2.tag === 13) {
          var b2 = K2();
          ud(a2, 67108864, b2);
          xh(a2, 67108864);
        }
      };
      exports3.attemptHydrationAtCurrentPriority = function(a2) {
        if (a2.tag === 13) {
          var b2 = K2(), c2 = td(a2);
          ud(a2, c2, b2);
          xh(a2, c2);
        }
      };
      exports3.attemptSynchronousHydration = function(a2) {
        switch (a2.tag) {
          case 3:
            var b2 = a2.stateNode;
            if (b2.hydrate) {
              var c2 = ic(b2.pendingLanes);
              b2.expiredLanes |= c2 & b2.pendingLanes;
              Z2(b2, G2());
              (V2 & 48) === 0 && (zg(), H2());
            }
            break;
          case 13:
            var d2 = K2();
            bh(function() {
              return ud(a2, 1, d2);
            });
            xh(a2, 4);
        }
      };
      exports3.attemptUserBlockingHydration = function(a2) {
        if (a2.tag === 13) {
          var b2 = K2();
          ud(a2, 4, b2);
          xh(a2, 4);
        }
      };
      exports3.batchedEventUpdates = function(a2, b2) {
        var c2 = V2;
        V2 |= 2;
        try {
          return a2(b2);
        } finally {
          V2 = c2, V2 === 0 && (zg(), H2());
        }
      };
      exports3.batchedUpdates = ah;
      exports3.createComponentSelector = function(a2) {
        return { $$typeof: cg, value: a2 };
      };
      exports3.createContainer = function(a2, b2, c2) {
        a2 = new uh(a2, b2, c2);
        b2 = Yd(3, null, null, b2 === 2 ? 7 : b2 === 1 ? 3 : 0);
        a2.current = b2;
        b2.stateNode = a2;
        id(b2);
        return a2;
      };
      exports3.createHasPsuedoClassSelector = function(a2) {
        return { $$typeof: dg, value: a2 };
      };
      exports3.createPortal = function(a2, b2, c2) {
        var d2 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return { $$typeof: ea, key: d2 == null ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
      };
      exports3.createRoleSelector = function(a2) {
        return { $$typeof: eg, value: a2 };
      };
      exports3.createTestNameSelector = function(a2) {
        return { $$typeof: fg, value: a2 };
      };
      exports3.createTextSelector = function(a2) {
        return { $$typeof: gg, value: a2 };
      };
      exports3.deferredUpdates = function(a2) {
        return Pc(97, a2);
      };
      exports3.discreteUpdates = function(a2, b2, c2, d2, e2) {
        var f = V2;
        V2 |= 4;
        try {
          return Pc(98, a2.bind(null, b2, c2, d2, e2));
        } finally {
          V2 = f, V2 === 0 && (zg(), H2());
        }
      };
      exports3.findAllNodes = mg;
      exports3.findBoundingRects = function(a2, b2) {
        if (!bb)
          throw Error(q2(363));
        b2 = mg(a2, b2);
        a2 = [];
        for (var c2 = 0; c2 < b2.length; c2++)
          a2.push(db(b2[c2]));
        for (b2 = a2.length - 1; 0 < b2; b2--) {
          c2 = a2[b2];
          for (var d2 = c2.x, e2 = d2 + c2.width, f = c2.y, g2 = f + c2.height, h2 = b2 - 1; 0 <= h2; h2--)
            if (b2 !== h2) {
              var k2 = a2[h2], l2 = k2.x, n2 = l2 + k2.width, t2 = k2.y, p = t2 + k2.height;
              if (d2 >= l2 && f >= t2 && e2 <= n2 && g2 <= p) {
                a2.splice(b2, 1);
                break;
              } else if (!(d2 !== l2 || c2.width !== k2.width || p < f || t2 > g2)) {
                t2 > f && (k2.height += t2 - f, k2.y = f);
                p < g2 && (k2.height = g2 - t2);
                a2.splice(b2, 1);
                break;
              } else if (!(f !== t2 || c2.height !== k2.height || n2 < d2 || l2 > e2)) {
                l2 > d2 && (k2.width += l2 - d2, k2.x = d2);
                n2 < e2 && (k2.width = e2 - l2);
                a2.splice(b2, 1);
                break;
              }
            }
        }
        return a2;
      };
      exports3.findHostInstance = vh;
      exports3.findHostInstanceWithNoPortals = function(a2) {
        a2 = Ba(a2);
        return a2 === null ? null : a2.tag === 20 ? a2.stateNode.instance : a2.stateNode;
      };
      exports3.findHostInstanceWithWarning = function(a2) {
        return vh(a2);
      };
      exports3.flushControlled = function(a2) {
        var b2 = V2;
        V2 |= 1;
        try {
          Pc(99, a2);
        } finally {
          V2 = b2, V2 === 0 && (zg(), H2());
        }
      };
      exports3.flushDiscreteUpdates = function() {
        (V2 & 49) === 0 && ($g(), Qg());
      };
      exports3.flushPassiveEffects = Qg;
      exports3.flushSync = bh;
      exports3.focusWithin = function(a2, b2) {
        if (!bb)
          throw Error(q2(363));
        a2 = ig(a2);
        b2 = lg(a2, b2);
        b2 = Array.from(b2);
        for (a2 = 0; a2 < b2.length; ) {
          var c2 = b2[a2++];
          if (!fb(c2)) {
            if (c2.tag === 5 && hb(c2.stateNode))
              return true;
            for (c2 = c2.child; c2 !== null; )
              b2.push(c2), c2 = c2.sibling;
          }
        }
        return false;
      };
      exports3.getCurrentUpdateLanePriority = function() {
        return hc;
      };
      exports3.getFindAllNodesFailureDescription = function(a2, b2) {
        if (!bb)
          throw Error(q2(363));
        var c2 = 0, d2 = [];
        a2 = [ig(a2), 0];
        for (var e2 = 0; e2 < a2.length; ) {
          var f = a2[e2++], g2 = a2[e2++], h2 = b2[g2];
          if (f.tag !== 5 || !fb(f)) {
            if (jg(f, h2) && (d2.push(kg(h2)), g2++, g2 > c2 && (c2 = g2)), g2 < b2.length)
              for (f = f.child; f !== null; )
                a2.push(f, g2), f = f.sibling;
          }
        }
        if (c2 < b2.length) {
          for (a2 = []; c2 < b2.length; c2++)
            a2.push(kg(b2[c2]));
          return "findAllNodes was able to match part of the selector:\n  " + (d2.join(" > ") + "\n\nNo matching component was found for:\n  ") + a2.join(" > ");
        }
        return null;
      };
      exports3.getPublicRootInstance = function(a2) {
        a2 = a2.current;
        if (!a2.child)
          return null;
        switch (a2.child.tag) {
          case 5:
            return Da(a2.child.stateNode);
          default:
            return a2.child.stateNode;
        }
      };
      exports3.injectIntoDevTools = function(a2) {
        a2 = {
          bundleType: a2.bundleType,
          version: a2.version,
          rendererPackageName: a2.rendererPackageName,
          rendererConfig: a2.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: ca.ReactCurrentDispatcher,
          findHostInstanceByFiber: yh,
          findFiberByHostInstance: a2.findFiberByHostInstance || zh,
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined")
          a2 = false;
        else {
          var b2 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!b2.isDisabled && b2.supportsFiber)
            try {
              ec = b2.inject(a2), fc = b2;
            } catch (c2) {
            }
          a2 = true;
        }
        return a2;
      };
      exports3.observeVisibleRects = function(a2, b2, c2, d2) {
        if (!bb)
          throw Error(q2(363));
        a2 = mg(a2, b2);
        var e2 = ib(a2, c2, d2).disconnect;
        return { disconnect: function() {
          e2();
        } };
      };
      exports3.registerMutableSourceForHydration = function(a2, b2) {
        var c2 = b2._getVersion;
        c2 = c2(b2._source);
        a2.mutableSourceEagerHydrationData == null ? a2.mutableSourceEagerHydrationData = [b2, c2] : a2.mutableSourceEagerHydrationData.push(b2, c2);
      };
      exports3.runWithPriority = function(a2, b2) {
        var c2 = hc;
        try {
          return hc = a2, b2();
        } finally {
          hc = c2;
        }
      };
      exports3.shouldSuspend = function() {
        return false;
      };
      exports3.unbatchedUpdates = function(a2, b2) {
        var c2 = V2;
        V2 &= -2;
        V2 |= 8;
        try {
          return a2(b2);
        } finally {
          V2 = c2, V2 === 0 && (zg(), H2());
        }
      };
      exports3.updateContainer = function(a2, b2, c2, d2) {
        var e2 = b2.current, f = K2(), g2 = td(e2);
        a:
          if (c2) {
            c2 = c2._reactInternals;
            b: {
              if (xa(c2) !== c2 || c2.tag !== 1)
                throw Error(q2(170));
              var h2 = c2;
              do {
                switch (h2.tag) {
                  case 3:
                    h2 = h2.stateNode.context;
                    break b;
                  case 1:
                    if (E2(h2.type)) {
                      h2 = h2.stateNode.__reactInternalMemoizedMergedChildContext;
                      break b;
                    }
                }
                h2 = h2.return;
              } while (h2 !== null);
              throw Error(q2(171));
            }
            if (c2.tag === 1) {
              var k2 = c2.type;
              if (E2(k2)) {
                c2 = bc(c2, k2, h2);
                break a;
              }
            }
            c2 = h2;
          } else
            c2 = Xb;
        b2.context === null ? b2.context = c2 : b2.pendingContext = c2;
        b2 = kd(f, g2);
        b2.payload = { element: a2 };
        d2 = d2 === void 0 ? null : d2;
        d2 !== null && (b2.callback = d2);
        md(e2, b2);
        ud(e2, g2, f);
        return g2;
      };
      return exports3;
    };
  }
});

// ../../node_modules/react-reconciler/index.js
var require_react_reconciler = __commonJS({
  "../../node_modules/react-reconciler/index.js"(exports2, module2) {
    "use strict";
    if (true) {
      module2.exports = require_react_reconciler_production_min();
    } else {
      module2.exports = null;
    }
  }
});

// ../../node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "../../node_modules/fast-deep-equal/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function equal(a2, b2) {
      if (a2 === b2)
        return true;
      if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
        if (a2.constructor !== b2.constructor)
          return false;
        var length, i3, keys3;
        if (Array.isArray(a2)) {
          length = a2.length;
          if (length != b2.length)
            return false;
          for (i3 = length; i3-- !== 0; )
            if (!equal(a2[i3], b2[i3]))
              return false;
          return true;
        }
        if (a2.constructor === RegExp)
          return a2.source === b2.source && a2.flags === b2.flags;
        if (a2.valueOf !== Object.prototype.valueOf)
          return a2.valueOf() === b2.valueOf();
        if (a2.toString !== Object.prototype.toString)
          return a2.toString() === b2.toString();
        keys3 = Object.keys(a2);
        length = keys3.length;
        if (length !== Object.keys(b2).length)
          return false;
        for (i3 = length; i3-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b2, keys3[i3]))
            return false;
        for (i3 = length; i3-- !== 0; ) {
          var key = keys3[i3];
          if (!equal(a2[key], b2[key]))
            return false;
        }
        return true;
      }
      return a2 !== a2 && b2 !== b2;
    };
  }
});

// ../../node_modules/debounce/index.js
var require_debounce = __commonJS({
  "../../node_modules/debounce/index.js"(exports2, module2) {
    function debounce2(func, wait, immediate) {
      var timeout, args, context2, timestamp, result;
      if (wait == null)
        wait = 100;
      function later() {
        var last = Date.now() - timestamp;
        if (last < wait && last >= 0) {
          timeout = setTimeout(later, wait - last);
        } else {
          timeout = null;
          if (!immediate) {
            result = func.apply(context2, args);
            context2 = args = null;
          }
        }
      }
      ;
      var debounced = function() {
        context2 = this;
        args = arguments;
        timestamp = Date.now();
        var callNow = immediate && !timeout;
        if (!timeout)
          timeout = setTimeout(later, wait);
        if (callNow) {
          result = func.apply(context2, args);
          context2 = args = null;
        }
        return result;
      };
      debounced.clear = function() {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
      };
      debounced.flush = function() {
        if (timeout) {
          result = func.apply(context2, args);
          context2 = args = null;
          clearTimeout(timeout);
          timeout = null;
        }
      };
      return debounced;
    }
    debounce2.debounce = debounce2;
    module2.exports = debounce2;
  }
});

// ../../node_modules/react-dom/cjs/react-dom-server.browser.production.min.js
var require_react_dom_server_browser_production_min = __commonJS({
  "../../node_modules/react-dom/cjs/react-dom-server.browser.production.min.js"(exports2) {
    "use strict";
    var l2 = require_object_assign();
    var m2 = require_react();
    function p(a2) {
      for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
        b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
      return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var q2 = 60106;
    var r2 = 60107;
    var u2 = 60108;
    var z2 = 60114;
    var B2 = 60109;
    var aa = 60110;
    var ba = 60112;
    var D = 60113;
    var ca = 60120;
    var da = 60115;
    var ea = 60116;
    var fa = 60121;
    var ha = 60117;
    var ia = 60119;
    var ja = 60129;
    var ka = 60131;
    if (typeof Symbol === "function" && Symbol.for) {
      E2 = Symbol.for;
      q2 = E2("react.portal");
      r2 = E2("react.fragment");
      u2 = E2("react.strict_mode");
      z2 = E2("react.profiler");
      B2 = E2("react.provider");
      aa = E2("react.context");
      ba = E2("react.forward_ref");
      D = E2("react.suspense");
      ca = E2("react.suspense_list");
      da = E2("react.memo");
      ea = E2("react.lazy");
      fa = E2("react.block");
      ha = E2("react.fundamental");
      ia = E2("react.scope");
      ja = E2("react.debug_trace_mode");
      ka = E2("react.legacy_hidden");
    }
    var E2;
    function F2(a2) {
      if (a2 == null)
        return null;
      if (typeof a2 === "function")
        return a2.displayName || a2.name || null;
      if (typeof a2 === "string")
        return a2;
      switch (a2) {
        case r2:
          return "Fragment";
        case q2:
          return "Portal";
        case z2:
          return "Profiler";
        case u2:
          return "StrictMode";
        case D:
          return "Suspense";
        case ca:
          return "SuspenseList";
      }
      if (typeof a2 === "object")
        switch (a2.$$typeof) {
          case aa:
            return (a2.displayName || "Context") + ".Consumer";
          case B2:
            return (a2._context.displayName || "Context") + ".Provider";
          case ba:
            var b2 = a2.render;
            b2 = b2.displayName || b2.name || "";
            return a2.displayName || (b2 !== "" ? "ForwardRef(" + b2 + ")" : "ForwardRef");
          case da:
            return F2(a2.type);
          case fa:
            return F2(a2._render);
          case ea:
            b2 = a2._payload;
            a2 = a2._init;
            try {
              return F2(a2(b2));
            } catch (c2) {
            }
        }
      return null;
    }
    var la = m2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    var ma = {};
    function I2(a2, b2) {
      for (var c2 = a2._threadCount | 0; c2 <= b2; c2++)
        a2[c2] = a2._currentValue2, a2._threadCount = c2 + 1;
    }
    function na(a2, b2, c2, d2) {
      if (d2 && (d2 = a2.contextType, typeof d2 === "object" && d2 !== null))
        return I2(d2, c2), d2[c2];
      if (a2 = a2.contextTypes) {
        c2 = {};
        for (var f in a2)
          c2[f] = b2[f];
        b2 = c2;
      } else
        b2 = ma;
      return b2;
    }
    for (var J2 = new Uint16Array(16), K2 = 0; 15 > K2; K2++)
      J2[K2] = K2 + 1;
    J2[15] = 0;
    var oa = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var pa = Object.prototype.hasOwnProperty;
    var qa = {};
    var ra = {};
    function sa(a2) {
      if (pa.call(ra, a2))
        return true;
      if (pa.call(qa, a2))
        return false;
      if (oa.test(a2))
        return ra[a2] = true;
      qa[a2] = true;
      return false;
    }
    function ta(a2, b2, c2, d2) {
      if (c2 !== null && c2.type === 0)
        return false;
      switch (typeof b2) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d2)
            return false;
          if (c2 !== null)
            return !c2.acceptsBooleans;
          a2 = a2.toLowerCase().slice(0, 5);
          return a2 !== "data-" && a2 !== "aria-";
        default:
          return false;
      }
    }
    function ua(a2, b2, c2, d2) {
      if (b2 === null || typeof b2 === "undefined" || ta(a2, b2, c2, d2))
        return true;
      if (d2)
        return false;
      if (c2 !== null)
        switch (c2.type) {
          case 3:
            return !b2;
          case 4:
            return b2 === false;
          case 5:
            return isNaN(b2);
          case 6:
            return isNaN(b2) || 1 > b2;
        }
      return false;
    }
    function M2(a2, b2, c2, d2, f, h2, t2) {
      this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
      this.attributeName = d2;
      this.attributeNamespace = f;
      this.mustUseProperty = c2;
      this.propertyName = a2;
      this.type = b2;
      this.sanitizeURL = h2;
      this.removeEmptyString = t2;
    }
    var N2 = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
      N2[a2] = new M2(a2, 0, false, a2, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
      var b2 = a2[0];
      N2[b2] = new M2(b2, 1, false, a2[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
      N2[a2] = new M2(a2, 2, false, a2.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
      N2[a2] = new M2(a2, 2, false, a2, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
      N2[a2] = new M2(a2, 3, false, a2.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a2) {
      N2[a2] = new M2(a2, 3, true, a2, null, false, false);
    });
    ["capture", "download"].forEach(function(a2) {
      N2[a2] = new M2(a2, 4, false, a2, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a2) {
      N2[a2] = new M2(a2, 6, false, a2, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a2) {
      N2[a2] = new M2(a2, 5, false, a2.toLowerCase(), null, false, false);
    });
    var va = /[\-:]([a-z])/g;
    function wa(a2) {
      return a2[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
      var b2 = a2.replace(va, wa);
      N2[b2] = new M2(b2, 1, false, a2, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
      var b2 = a2.replace(va, wa);
      N2[b2] = new M2(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
      var b2 = a2.replace(va, wa);
      N2[b2] = new M2(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a2) {
      N2[a2] = new M2(a2, 1, false, a2.toLowerCase(), null, false, false);
    });
    N2.xlinkHref = new M2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a2) {
      N2[a2] = new M2(a2, 1, false, a2.toLowerCase(), null, true, true);
    });
    var xa = /["'&<>]/;
    function O2(a2) {
      if (typeof a2 === "boolean" || typeof a2 === "number")
        return "" + a2;
      a2 = "" + a2;
      var b2 = xa.exec(a2);
      if (b2) {
        var c2 = "", d2, f = 0;
        for (d2 = b2.index; d2 < a2.length; d2++) {
          switch (a2.charCodeAt(d2)) {
            case 34:
              b2 = "&quot;";
              break;
            case 38:
              b2 = "&amp;";
              break;
            case 39:
              b2 = "&#x27;";
              break;
            case 60:
              b2 = "&lt;";
              break;
            case 62:
              b2 = "&gt;";
              break;
            default:
              continue;
          }
          f !== d2 && (c2 += a2.substring(f, d2));
          f = d2 + 1;
          c2 += b2;
        }
        a2 = f !== d2 ? c2 + a2.substring(f, d2) : c2;
      }
      return a2;
    }
    function ya(a2, b2) {
      var c2 = N2.hasOwnProperty(a2) ? N2[a2] : null;
      var d2;
      if (d2 = a2 !== "style")
        d2 = c2 !== null ? c2.type === 0 : !(2 < a2.length) || a2[0] !== "o" && a2[0] !== "O" || a2[1] !== "n" && a2[1] !== "N" ? false : true;
      if (d2 || ua(a2, b2, c2, false))
        return "";
      if (c2 !== null) {
        a2 = c2.attributeName;
        d2 = c2.type;
        if (d2 === 3 || d2 === 4 && b2 === true)
          return a2 + '=""';
        c2.sanitizeURL && (b2 = "" + b2);
        return a2 + '="' + (O2(b2) + '"');
      }
      return sa(a2) ? a2 + '="' + (O2(b2) + '"') : "";
    }
    function za(a2, b2) {
      return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
    }
    var Aa = typeof Object.is === "function" ? Object.is : za;
    var P2 = null;
    var Q2 = null;
    var R = null;
    var S2 = false;
    var T2 = false;
    var U2 = null;
    var V2 = 0;
    function W2() {
      if (P2 === null)
        throw Error(p(321));
      return P2;
    }
    function Ba() {
      if (0 < V2)
        throw Error(p(312));
      return { memoizedState: null, queue: null, next: null };
    }
    function Ca() {
      R === null ? Q2 === null ? (S2 = false, Q2 = R = Ba()) : (S2 = true, R = Q2) : R.next === null ? (S2 = false, R = R.next = Ba()) : (S2 = true, R = R.next);
      return R;
    }
    function Da(a2, b2, c2, d2) {
      for (; T2; )
        T2 = false, V2 += 1, R = null, c2 = a2(b2, d2);
      Ea();
      return c2;
    }
    function Ea() {
      P2 = null;
      T2 = false;
      Q2 = null;
      V2 = 0;
      R = U2 = null;
    }
    function Fa(a2, b2) {
      return typeof b2 === "function" ? b2(a2) : b2;
    }
    function Ga(a2, b2, c2) {
      P2 = W2();
      R = Ca();
      if (S2) {
        var d2 = R.queue;
        b2 = d2.dispatch;
        if (U2 !== null && (c2 = U2.get(d2), c2 !== void 0)) {
          U2.delete(d2);
          d2 = R.memoizedState;
          do
            d2 = a2(d2, c2.action), c2 = c2.next;
          while (c2 !== null);
          R.memoizedState = d2;
          return [d2, b2];
        }
        return [R.memoizedState, b2];
      }
      a2 = a2 === Fa ? typeof b2 === "function" ? b2() : b2 : c2 !== void 0 ? c2(b2) : b2;
      R.memoizedState = a2;
      a2 = R.queue = { last: null, dispatch: null };
      a2 = a2.dispatch = Ha.bind(null, P2, a2);
      return [R.memoizedState, a2];
    }
    function Ia(a2, b2) {
      P2 = W2();
      R = Ca();
      b2 = b2 === void 0 ? null : b2;
      if (R !== null) {
        var c2 = R.memoizedState;
        if (c2 !== null && b2 !== null) {
          var d2 = c2[1];
          a:
            if (d2 === null)
              d2 = false;
            else {
              for (var f = 0; f < d2.length && f < b2.length; f++)
                if (!Aa(b2[f], d2[f])) {
                  d2 = false;
                  break a;
                }
              d2 = true;
            }
          if (d2)
            return c2[0];
        }
      }
      a2 = a2();
      R.memoizedState = [a2, b2];
      return a2;
    }
    function Ha(a2, b2, c2) {
      if (!(25 > V2))
        throw Error(p(301));
      if (a2 === P2)
        if (T2 = true, a2 = { action: c2, next: null }, U2 === null && (U2 = new Map()), c2 = U2.get(b2), c2 === void 0)
          U2.set(b2, a2);
        else {
          for (b2 = c2; b2.next !== null; )
            b2 = b2.next;
          b2.next = a2;
        }
    }
    function Ja() {
    }
    var X2 = null;
    var Ka = { readContext: function(a2) {
      var b2 = X2.threadID;
      I2(a2, b2);
      return a2[b2];
    }, useContext: function(a2) {
      W2();
      var b2 = X2.threadID;
      I2(a2, b2);
      return a2[b2];
    }, useMemo: Ia, useReducer: Ga, useRef: function(a2) {
      P2 = W2();
      R = Ca();
      var b2 = R.memoizedState;
      return b2 === null ? (a2 = { current: a2 }, R.memoizedState = a2) : b2;
    }, useState: function(a2) {
      return Ga(Fa, a2);
    }, useLayoutEffect: function() {
    }, useCallback: function(a2, b2) {
      return Ia(function() {
        return a2;
      }, b2);
    }, useImperativeHandle: Ja, useEffect: Ja, useDebugValue: Ja, useDeferredValue: function(a2) {
      W2();
      return a2;
    }, useTransition: function() {
      W2();
      return [function(a2) {
        a2();
      }, false];
    }, useOpaqueIdentifier: function() {
      return (X2.identifierPrefix || "") + "R:" + (X2.uniqueID++).toString(36);
    }, useMutableSource: function(a2, b2) {
      W2();
      return b2(a2._source);
    } };
    var La = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
    function Ma(a2) {
      switch (a2) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    var Na = { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
    var Oa = l2({ menuitem: true }, Na);
    var Y2 = {
      animationIterationCount: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var Pa = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Y2).forEach(function(a2) {
      Pa.forEach(function(b2) {
        b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
        Y2[b2] = Y2[a2];
      });
    });
    var Qa = /([A-Z])/g;
    var Ra = /^ms-/;
    var Z2 = m2.Children.toArray;
    var Sa = la.ReactCurrentDispatcher;
    var Ta = { listing: true, pre: true, textarea: true };
    var Ua = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var Va = {};
    var Wa = {};
    function Xa(a2) {
      if (a2 === void 0 || a2 === null)
        return a2;
      var b2 = "";
      m2.Children.forEach(a2, function(a3) {
        a3 != null && (b2 += a3);
      });
      return b2;
    }
    var Ya = Object.prototype.hasOwnProperty;
    var Za = { children: null, dangerouslySetInnerHTML: null, suppressContentEditableWarning: null, suppressHydrationWarning: null };
    function $a(a2, b2) {
      if (a2 === void 0)
        throw Error(p(152, F2(b2) || "Component"));
    }
    function ab(a2, b2, c2) {
      function d2(d3, h3) {
        var e2 = h3.prototype && h3.prototype.isReactComponent, f2 = na(h3, b2, c2, e2), t2 = [], g2 = false, n2 = { isMounted: function() {
          return false;
        }, enqueueForceUpdate: function() {
          if (t2 === null)
            return null;
        }, enqueueReplaceState: function(a3, c3) {
          g2 = true;
          t2 = [c3];
        }, enqueueSetState: function(a3, c3) {
          if (t2 === null)
            return null;
          t2.push(c3);
        } };
        if (e2) {
          if (e2 = new h3(d3.props, f2, n2), typeof h3.getDerivedStateFromProps === "function") {
            var k2 = h3.getDerivedStateFromProps.call(null, d3.props, e2.state);
            k2 != null && (e2.state = l2({}, e2.state, k2));
          }
        } else if (P2 = {}, e2 = h3(d3.props, f2, n2), e2 = Da(h3, d3.props, e2, f2), e2 == null || e2.render == null) {
          a2 = e2;
          $a(a2, h3);
          return;
        }
        e2.props = d3.props;
        e2.context = f2;
        e2.updater = n2;
        n2 = e2.state;
        n2 === void 0 && (e2.state = n2 = null);
        if (typeof e2.UNSAFE_componentWillMount === "function" || typeof e2.componentWillMount === "function")
          if (typeof e2.componentWillMount === "function" && typeof h3.getDerivedStateFromProps !== "function" && e2.componentWillMount(), typeof e2.UNSAFE_componentWillMount === "function" && typeof h3.getDerivedStateFromProps !== "function" && e2.UNSAFE_componentWillMount(), t2.length) {
            n2 = t2;
            var v4 = g2;
            t2 = null;
            g2 = false;
            if (v4 && n2.length === 1)
              e2.state = n2[0];
            else {
              k2 = v4 ? n2[0] : e2.state;
              var H2 = true;
              for (v4 = v4 ? 1 : 0; v4 < n2.length; v4++) {
                var x2 = n2[v4];
                x2 = typeof x2 === "function" ? x2.call(e2, k2, d3.props, f2) : x2;
                x2 != null && (H2 ? (H2 = false, k2 = l2({}, k2, x2)) : l2(k2, x2));
              }
              e2.state = k2;
            }
          } else
            t2 = null;
        a2 = e2.render();
        $a(a2, h3);
        if (typeof e2.getChildContext === "function" && (d3 = h3.childContextTypes, typeof d3 === "object")) {
          var y2 = e2.getChildContext();
          for (var A2 in y2)
            if (!(A2 in d3))
              throw Error(p(108, F2(h3) || "Unknown", A2));
        }
        y2 && (b2 = l2({}, b2, y2));
      }
      for (; m2.isValidElement(a2); ) {
        var f = a2, h2 = f.type;
        if (typeof h2 !== "function")
          break;
        d2(f, h2);
      }
      return { child: a2, context: b2 };
    }
    var bb = function() {
      function a2(a3, b3, f) {
        m2.isValidElement(a3) ? a3.type !== r2 ? a3 = [a3] : (a3 = a3.props.children, a3 = m2.isValidElement(a3) ? [a3] : Z2(a3)) : a3 = Z2(a3);
        a3 = { type: null, domNamespace: La.html, children: a3, childIndex: 0, context: ma, footer: "" };
        var c2 = J2[0];
        if (c2 === 0) {
          var d2 = J2;
          c2 = d2.length;
          var g2 = 2 * c2;
          if (!(65536 >= g2))
            throw Error(p(304));
          var e2 = new Uint16Array(g2);
          e2.set(d2);
          J2 = e2;
          J2[0] = c2 + 1;
          for (d2 = c2; d2 < g2 - 1; d2++)
            J2[d2] = d2 + 1;
          J2[g2 - 1] = 0;
        } else
          J2[0] = J2[c2];
        this.threadID = c2;
        this.stack = [a3];
        this.exhausted = false;
        this.currentSelectValue = null;
        this.previousWasTextNode = false;
        this.makeStaticMarkup = b3;
        this.suspenseDepth = 0;
        this.contextIndex = -1;
        this.contextStack = [];
        this.contextValueStack = [];
        this.uniqueID = 0;
        this.identifierPrefix = f && f.identifierPrefix || "";
      }
      var b2 = a2.prototype;
      b2.destroy = function() {
        if (!this.exhausted) {
          this.exhausted = true;
          this.clearProviders();
          var a3 = this.threadID;
          J2[a3] = J2[0];
          J2[0] = a3;
        }
      };
      b2.pushProvider = function(a3) {
        var b3 = ++this.contextIndex, c2 = a3.type._context, h2 = this.threadID;
        I2(c2, h2);
        var t2 = c2[h2];
        this.contextStack[b3] = c2;
        this.contextValueStack[b3] = t2;
        c2[h2] = a3.props.value;
      };
      b2.popProvider = function() {
        var a3 = this.contextIndex, b3 = this.contextStack[a3], f = this.contextValueStack[a3];
        this.contextStack[a3] = null;
        this.contextValueStack[a3] = null;
        this.contextIndex--;
        b3[this.threadID] = f;
      };
      b2.clearProviders = function() {
        for (var a3 = this.contextIndex; 0 <= a3; a3--)
          this.contextStack[a3][this.threadID] = this.contextValueStack[a3];
      };
      b2.read = function(a3) {
        if (this.exhausted)
          return null;
        var b3 = X2;
        X2 = this;
        var c2 = Sa.current;
        Sa.current = Ka;
        try {
          for (var h2 = [""], t2 = false; h2[0].length < a3; ) {
            if (this.stack.length === 0) {
              this.exhausted = true;
              var g2 = this.threadID;
              J2[g2] = J2[0];
              J2[0] = g2;
              break;
            }
            var e2 = this.stack[this.stack.length - 1];
            if (t2 || e2.childIndex >= e2.children.length) {
              var L2 = e2.footer;
              L2 !== "" && (this.previousWasTextNode = false);
              this.stack.pop();
              if (e2.type === "select")
                this.currentSelectValue = null;
              else if (e2.type != null && e2.type.type != null && e2.type.type.$$typeof === B2)
                this.popProvider(e2.type);
              else if (e2.type === D) {
                this.suspenseDepth--;
                var G2 = h2.pop();
                if (t2) {
                  t2 = false;
                  var C2 = e2.fallbackFrame;
                  if (!C2)
                    throw Error(p(303));
                  this.stack.push(C2);
                  h2[this.suspenseDepth] += "<!--$!-->";
                  continue;
                } else
                  h2[this.suspenseDepth] += G2;
              }
              h2[this.suspenseDepth] += L2;
            } else {
              var n2 = e2.children[e2.childIndex++], k2 = "";
              try {
                k2 += this.render(n2, e2.context, e2.domNamespace);
              } catch (v4) {
                if (v4 != null && typeof v4.then === "function")
                  throw Error(p(294));
                throw v4;
              } finally {
              }
              h2.length <= this.suspenseDepth && h2.push("");
              h2[this.suspenseDepth] += k2;
            }
          }
          return h2[0];
        } finally {
          Sa.current = c2, X2 = b3, Ea();
        }
      };
      b2.render = function(a3, b3, f) {
        if (typeof a3 === "string" || typeof a3 === "number") {
          f = "" + a3;
          if (f === "")
            return "";
          if (this.makeStaticMarkup)
            return O2(f);
          if (this.previousWasTextNode)
            return "<!-- -->" + O2(f);
          this.previousWasTextNode = true;
          return O2(f);
        }
        b3 = ab(a3, b3, this.threadID);
        a3 = b3.child;
        b3 = b3.context;
        if (a3 === null || a3 === false)
          return "";
        if (!m2.isValidElement(a3)) {
          if (a3 != null && a3.$$typeof != null) {
            f = a3.$$typeof;
            if (f === q2)
              throw Error(p(257));
            throw Error(p(258, f.toString()));
          }
          a3 = Z2(a3);
          this.stack.push({ type: null, domNamespace: f, children: a3, childIndex: 0, context: b3, footer: "" });
          return "";
        }
        var c2 = a3.type;
        if (typeof c2 === "string")
          return this.renderDOM(a3, b3, f);
        switch (c2) {
          case ka:
          case ja:
          case u2:
          case z2:
          case ca:
          case r2:
            return a3 = Z2(a3.props.children), this.stack.push({
              type: null,
              domNamespace: f,
              children: a3,
              childIndex: 0,
              context: b3,
              footer: ""
            }), "";
          case D:
            throw Error(p(294));
          case ia:
            throw Error(p(343));
        }
        if (typeof c2 === "object" && c2 !== null)
          switch (c2.$$typeof) {
            case ba:
              P2 = {};
              var d2 = c2.render(a3.props, a3.ref);
              d2 = Da(c2.render, a3.props, d2, a3.ref);
              d2 = Z2(d2);
              this.stack.push({ type: null, domNamespace: f, children: d2, childIndex: 0, context: b3, footer: "" });
              return "";
            case da:
              return a3 = [m2.createElement(c2.type, l2({ ref: a3.ref }, a3.props))], this.stack.push({ type: null, domNamespace: f, children: a3, childIndex: 0, context: b3, footer: "" }), "";
            case B2:
              return c2 = Z2(a3.props.children), f = { type: a3, domNamespace: f, children: c2, childIndex: 0, context: b3, footer: "" }, this.pushProvider(a3), this.stack.push(f), "";
            case aa:
              c2 = a3.type;
              d2 = a3.props;
              var g2 = this.threadID;
              I2(c2, g2);
              c2 = Z2(d2.children(c2[g2]));
              this.stack.push({ type: a3, domNamespace: f, children: c2, childIndex: 0, context: b3, footer: "" });
              return "";
            case ha:
              throw Error(p(338));
            case ea:
              return c2 = a3.type, d2 = c2._init, c2 = d2(c2._payload), a3 = [m2.createElement(c2, l2({ ref: a3.ref }, a3.props))], this.stack.push({
                type: null,
                domNamespace: f,
                children: a3,
                childIndex: 0,
                context: b3,
                footer: ""
              }), "";
          }
        throw Error(p(130, c2 == null ? c2 : typeof c2, ""));
      };
      b2.renderDOM = function(a3, b3, f) {
        var c2 = a3.type.toLowerCase();
        f === La.html && Ma(c2);
        if (!Va.hasOwnProperty(c2)) {
          if (!Ua.test(c2))
            throw Error(p(65, c2));
          Va[c2] = true;
        }
        var d2 = a3.props;
        if (c2 === "input")
          d2 = l2({ type: void 0 }, d2, { defaultChecked: void 0, defaultValue: void 0, value: d2.value != null ? d2.value : d2.defaultValue, checked: d2.checked != null ? d2.checked : d2.defaultChecked });
        else if (c2 === "textarea") {
          var g2 = d2.value;
          if (g2 == null) {
            g2 = d2.defaultValue;
            var e2 = d2.children;
            if (e2 != null) {
              if (g2 != null)
                throw Error(p(92));
              if (Array.isArray(e2)) {
                if (!(1 >= e2.length))
                  throw Error(p(93));
                e2 = e2[0];
              }
              g2 = "" + e2;
            }
            g2 == null && (g2 = "");
          }
          d2 = l2({}, d2, { value: void 0, children: "" + g2 });
        } else if (c2 === "select")
          this.currentSelectValue = d2.value != null ? d2.value : d2.defaultValue, d2 = l2({}, d2, { value: void 0 });
        else if (c2 === "option") {
          e2 = this.currentSelectValue;
          var L2 = Xa(d2.children);
          if (e2 != null) {
            var G2 = d2.value != null ? d2.value + "" : L2;
            g2 = false;
            if (Array.isArray(e2))
              for (var C2 = 0; C2 < e2.length; C2++) {
                if ("" + e2[C2] === G2) {
                  g2 = true;
                  break;
                }
              }
            else
              g2 = "" + e2 === G2;
            d2 = l2({ selected: void 0, children: void 0 }, d2, { selected: g2, children: L2 });
          }
        }
        if (g2 = d2) {
          if (Oa[c2] && (g2.children != null || g2.dangerouslySetInnerHTML != null))
            throw Error(p(137, c2));
          if (g2.dangerouslySetInnerHTML != null) {
            if (g2.children != null)
              throw Error(p(60));
            if (!(typeof g2.dangerouslySetInnerHTML === "object" && "__html" in g2.dangerouslySetInnerHTML))
              throw Error(p(61));
          }
          if (g2.style != null && typeof g2.style !== "object")
            throw Error(p(62));
        }
        g2 = d2;
        e2 = this.makeStaticMarkup;
        L2 = this.stack.length === 1;
        G2 = "<" + a3.type;
        b:
          if (c2.indexOf("-") === -1)
            C2 = typeof g2.is === "string";
          else
            switch (c2) {
              case "annotation-xml":
              case "color-profile":
              case "font-face":
              case "font-face-src":
              case "font-face-uri":
              case "font-face-format":
              case "font-face-name":
              case "missing-glyph":
                C2 = false;
                break b;
              default:
                C2 = true;
            }
        for (w2 in g2)
          if (Ya.call(g2, w2)) {
            var n2 = g2[w2];
            if (n2 != null) {
              if (w2 === "style") {
                var k2 = void 0, v4 = "", H2 = "";
                for (k2 in n2)
                  if (n2.hasOwnProperty(k2)) {
                    var x2 = k2.indexOf("--") === 0, y2 = n2[k2];
                    if (y2 != null) {
                      if (x2)
                        var A2 = k2;
                      else if (A2 = k2, Wa.hasOwnProperty(A2))
                        A2 = Wa[A2];
                      else {
                        var cb = A2.replace(Qa, "-$1").toLowerCase().replace(Ra, "-ms-");
                        A2 = Wa[A2] = cb;
                      }
                      v4 += H2 + A2 + ":";
                      H2 = k2;
                      x2 = y2 == null || typeof y2 === "boolean" || y2 === "" ? "" : x2 || typeof y2 !== "number" || y2 === 0 || Y2.hasOwnProperty(H2) && Y2[H2] ? ("" + y2).trim() : y2 + "px";
                      v4 += x2;
                      H2 = ";";
                    }
                  }
                n2 = v4 || null;
              }
              k2 = null;
              C2 ? Za.hasOwnProperty(w2) || (k2 = w2, k2 = sa(k2) && n2 != null ? k2 + '="' + (O2(n2) + '"') : "") : k2 = ya(w2, n2);
              k2 && (G2 += " " + k2);
            }
          }
        e2 || L2 && (G2 += ' data-reactroot=""');
        var w2 = G2;
        g2 = "";
        Na.hasOwnProperty(c2) ? w2 += "/>" : (w2 += ">", g2 = "</" + a3.type + ">");
        a: {
          e2 = d2.dangerouslySetInnerHTML;
          if (e2 != null) {
            if (e2.__html != null) {
              e2 = e2.__html;
              break a;
            }
          } else if (e2 = d2.children, typeof e2 === "string" || typeof e2 === "number") {
            e2 = O2(e2);
            break a;
          }
          e2 = null;
        }
        e2 != null ? (d2 = [], Ta.hasOwnProperty(c2) && e2.charAt(0) === "\n" && (w2 += "\n"), w2 += e2) : d2 = Z2(d2.children);
        a3 = a3.type;
        f = f == null || f === "http://www.w3.org/1999/xhtml" ? Ma(a3) : f === "http://www.w3.org/2000/svg" && a3 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : f;
        this.stack.push({ domNamespace: f, type: c2, children: d2, childIndex: 0, context: b3, footer: g2 });
        this.previousWasTextNode = false;
        return w2;
      };
      return a2;
    }();
    exports2.renderToNodeStream = function() {
      throw Error(p(207));
    };
    exports2.renderToStaticMarkup = function(a2, b2) {
      a2 = new bb(a2, true, b2);
      try {
        return a2.read(Infinity);
      } finally {
        a2.destroy();
      }
    };
    exports2.renderToStaticNodeStream = function() {
      throw Error(p(208));
    };
    exports2.renderToString = function(a2, b2) {
      a2 = new bb(a2, false, b2);
      try {
        return a2.read(Infinity);
      } finally {
        a2.destroy();
      }
    };
    exports2.version = "17.0.2";
  }
});

// ../../node_modules/react-dom/server.browser.js
var require_server_browser = __commonJS({
  "../../node_modules/react-dom/server.browser.js"(exports2, module2) {
    "use strict";
    if (true) {
      module2.exports = require_react_dom_server_browser_production_min();
    } else {
      module2.exports = null;
    }
  }
});

// ../../node_modules/react-is/cjs/react-is.production.min.js
var require_react_is_production_min = __commonJS({
  "../../node_modules/react-is/cjs/react-is.production.min.js"(exports2) {
    "use strict";
    var b2 = 60103;
    var c2 = 60106;
    var d2 = 60107;
    var e2 = 60108;
    var f = 60114;
    var g2 = 60109;
    var h2 = 60110;
    var k2 = 60112;
    var l2 = 60113;
    var m2 = 60120;
    var n2 = 60115;
    var p = 60116;
    var q2 = 60121;
    var r2 = 60122;
    var u2 = 60117;
    var v4 = 60129;
    var w2 = 60131;
    if (typeof Symbol === "function" && Symbol.for) {
      x2 = Symbol.for;
      b2 = x2("react.element");
      c2 = x2("react.portal");
      d2 = x2("react.fragment");
      e2 = x2("react.strict_mode");
      f = x2("react.profiler");
      g2 = x2("react.provider");
      h2 = x2("react.context");
      k2 = x2("react.forward_ref");
      l2 = x2("react.suspense");
      m2 = x2("react.suspense_list");
      n2 = x2("react.memo");
      p = x2("react.lazy");
      q2 = x2("react.block");
      r2 = x2("react.server.block");
      u2 = x2("react.fundamental");
      v4 = x2("react.debug_trace_mode");
      w2 = x2("react.legacy_hidden");
    }
    var x2;
    function y2(a2) {
      if (typeof a2 === "object" && a2 !== null) {
        var t2 = a2.$$typeof;
        switch (t2) {
          case b2:
            switch (a2 = a2.type, a2) {
              case d2:
              case f:
              case e2:
              case l2:
              case m2:
                return a2;
              default:
                switch (a2 = a2 && a2.$$typeof, a2) {
                  case h2:
                  case k2:
                  case p:
                  case n2:
                  case g2:
                    return a2;
                  default:
                    return t2;
                }
            }
          case c2:
            return t2;
        }
      }
    }
    var z2 = g2;
    var A2 = b2;
    var B2 = k2;
    var C2 = d2;
    var D = p;
    var E2 = n2;
    var F2 = c2;
    var G2 = f;
    var H2 = e2;
    var I2 = l2;
    exports2.ContextConsumer = h2;
    exports2.ContextProvider = z2;
    exports2.Element = A2;
    exports2.ForwardRef = B2;
    exports2.Fragment = C2;
    exports2.Lazy = D;
    exports2.Memo = E2;
    exports2.Portal = F2;
    exports2.Profiler = G2;
    exports2.StrictMode = H2;
    exports2.Suspense = I2;
    exports2.isAsyncMode = function() {
      return false;
    };
    exports2.isConcurrentMode = function() {
      return false;
    };
    exports2.isContextConsumer = function(a2) {
      return y2(a2) === h2;
    };
    exports2.isContextProvider = function(a2) {
      return y2(a2) === g2;
    };
    exports2.isElement = function(a2) {
      return typeof a2 === "object" && a2 !== null && a2.$$typeof === b2;
    };
    exports2.isForwardRef = function(a2) {
      return y2(a2) === k2;
    };
    exports2.isFragment = function(a2) {
      return y2(a2) === d2;
    };
    exports2.isLazy = function(a2) {
      return y2(a2) === p;
    };
    exports2.isMemo = function(a2) {
      return y2(a2) === n2;
    };
    exports2.isPortal = function(a2) {
      return y2(a2) === c2;
    };
    exports2.isProfiler = function(a2) {
      return y2(a2) === f;
    };
    exports2.isStrictMode = function(a2) {
      return y2(a2) === e2;
    };
    exports2.isSuspense = function(a2) {
      return y2(a2) === l2;
    };
    exports2.isValidElementType = function(a2) {
      return typeof a2 === "string" || typeof a2 === "function" || a2 === d2 || a2 === f || a2 === v4 || a2 === e2 || a2 === l2 || a2 === m2 || a2 === w2 || typeof a2 === "object" && a2 !== null && (a2.$$typeof === p || a2.$$typeof === n2 || a2.$$typeof === g2 || a2.$$typeof === h2 || a2.$$typeof === k2 || a2.$$typeof === u2 || a2.$$typeof === q2 || a2[0] === r2) ? true : false;
    };
    exports2.typeOf = y2;
  }
});

// ../../node_modules/react-is/index.js
var require_react_is = __commonJS({
  "../../node_modules/react-is/index.js"(exports2, module2) {
    "use strict";
    if (true) {
      module2.exports = require_react_is_production_min();
    } else {
      module2.exports = null;
    }
  }
});

// ../../node_modules/shallowequal/index.js
var require_shallowequal = __commonJS({
  "../../node_modules/shallowequal/index.js"(exports2, module2) {
    module2.exports = function shallowEqual(objA, objB, compare, compareContext) {
      var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
      if (ret !== void 0) {
        return !!ret;
      }
      if (objA === objB) {
        return true;
      }
      if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
      }
      var keysA = Object.keys(objA);
      var keysB = Object.keys(objB);
      if (keysA.length !== keysB.length) {
        return false;
      }
      var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
      for (var idx = 0; idx < keysA.length; idx++) {
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
          return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) {
          return false;
        }
      }
      return true;
    };
  }
});

// ../../node_modules/@emotion/stylis/dist/stylis.browser.esm.js
function stylis_min(W2) {
  function M2(d2, c2, e2, h2, a2) {
    for (var m2 = 0, b2 = 0, v4 = 0, n2 = 0, q2, g2, x2 = 0, K2 = 0, k2, u2 = k2 = q2 = 0, l2 = 0, r2 = 0, I2 = 0, t2 = 0, B3 = e2.length, J2 = B3 - 1, y2, f = "", p = "", F3 = "", G3 = "", C2; l2 < B3; ) {
      g2 = e2.charCodeAt(l2);
      l2 === J2 && b2 + n2 + v4 + m2 !== 0 && (b2 !== 0 && (g2 = b2 === 47 ? 10 : 47), n2 = v4 = m2 = 0, B3++, J2++);
      if (b2 + n2 + v4 + m2 === 0) {
        if (l2 === J2 && (0 < r2 && (f = f.replace(N2, "")), 0 < f.trim().length)) {
          switch (g2) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f += e2.charAt(l2);
          }
          g2 = 59;
        }
        switch (g2) {
          case 123:
            f = f.trim();
            q2 = f.charCodeAt(0);
            k2 = 1;
            for (t2 = ++l2; l2 < B3; ) {
              switch (g2 = e2.charCodeAt(l2)) {
                case 123:
                  k2++;
                  break;
                case 125:
                  k2--;
                  break;
                case 47:
                  switch (g2 = e2.charCodeAt(l2 + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u2 = l2 + 1; u2 < J2; ++u2) {
                          switch (e2.charCodeAt(u2)) {
                            case 47:
                              if (g2 === 42 && e2.charCodeAt(u2 - 1) === 42 && l2 + 2 !== u2) {
                                l2 = u2 + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (g2 === 47) {
                                l2 = u2 + 1;
                                break a;
                              }
                          }
                        }
                        l2 = u2;
                      }
                  }
                  break;
                case 91:
                  g2++;
                case 40:
                  g2++;
                case 34:
                case 39:
                  for (; l2++ < J2 && e2.charCodeAt(l2) !== g2; ) {
                  }
              }
              if (k2 === 0)
                break;
              l2++;
            }
            k2 = e2.substring(t2, l2);
            q2 === 0 && (q2 = (f = f.replace(ca, "").trim()).charCodeAt(0));
            switch (q2) {
              case 64:
                0 < r2 && (f = f.replace(N2, ""));
                g2 = f.charCodeAt(1);
                switch (g2) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r2 = c2;
                    break;
                  default:
                    r2 = O2;
                }
                k2 = M2(c2, r2, k2, g2, a2 + 1);
                t2 = k2.length;
                0 < A2 && (r2 = X2(O2, f, I2), C2 = H2(3, k2, r2, c2, D, z2, t2, g2, a2, h2), f = r2.join(""), C2 !== void 0 && (t2 = (k2 = C2.trim()).length) === 0 && (g2 = 0, k2 = ""));
                if (0 < t2)
                  switch (g2) {
                    case 115:
                      f = f.replace(da, ea);
                    case 100:
                    case 109:
                    case 45:
                      k2 = f + "{" + k2 + "}";
                      break;
                    case 107:
                      f = f.replace(fa, "$1 $2");
                      k2 = f + "{" + k2 + "}";
                      k2 = w2 === 1 || w2 === 2 && L2("@" + k2, 3) ? "@-webkit-" + k2 + "@" + k2 : "@" + k2;
                      break;
                    default:
                      k2 = f + k2, h2 === 112 && (k2 = (p += k2, ""));
                  }
                else
                  k2 = "";
                break;
              default:
                k2 = M2(c2, X2(c2, f, I2), k2, h2, a2 + 1);
            }
            F3 += k2;
            k2 = I2 = r2 = u2 = q2 = 0;
            f = "";
            g2 = e2.charCodeAt(++l2);
            break;
          case 125:
          case 59:
            f = (0 < r2 ? f.replace(N2, "") : f).trim();
            if (1 < (t2 = f.length))
              switch (u2 === 0 && (q2 = f.charCodeAt(0), q2 === 45 || 96 < q2 && 123 > q2) && (t2 = (f = f.replace(" ", ":")).length), 0 < A2 && (C2 = H2(1, f, c2, d2, D, z2, p.length, h2, a2, h2)) !== void 0 && (t2 = (f = C2.trim()).length) === 0 && (f = "\0\0"), q2 = f.charCodeAt(0), g2 = f.charCodeAt(1), q2) {
                case 0:
                  break;
                case 64:
                  if (g2 === 105 || g2 === 99) {
                    G3 += f + e2.charAt(l2);
                    break;
                  }
                default:
                  f.charCodeAt(t2 - 1) !== 58 && (p += P2(f, q2, g2, f.charCodeAt(2)));
              }
            I2 = r2 = u2 = q2 = 0;
            f = "";
            g2 = e2.charCodeAt(++l2);
        }
      }
      switch (g2) {
        case 13:
        case 10:
          b2 === 47 ? b2 = 0 : 1 + q2 === 0 && h2 !== 107 && 0 < f.length && (r2 = 1, f += "\0");
          0 < A2 * Y2 && H2(0, f, c2, d2, D, z2, p.length, h2, a2, h2);
          z2 = 1;
          D++;
          break;
        case 59:
        case 125:
          if (b2 + n2 + v4 + m2 === 0) {
            z2++;
            break;
          }
        default:
          z2++;
          y2 = e2.charAt(l2);
          switch (g2) {
            case 9:
            case 32:
              if (n2 + m2 + b2 === 0)
                switch (x2) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    y2 = "";
                    break;
                  default:
                    g2 !== 32 && (y2 = " ");
                }
              break;
            case 0:
              y2 = "\\0";
              break;
            case 12:
              y2 = "\\f";
              break;
            case 11:
              y2 = "\\v";
              break;
            case 38:
              n2 + b2 + m2 === 0 && (r2 = I2 = 1, y2 = "\f" + y2);
              break;
            case 108:
              if (n2 + b2 + m2 + E2 === 0 && 0 < u2)
                switch (l2 - u2) {
                  case 2:
                    x2 === 112 && e2.charCodeAt(l2 - 3) === 58 && (E2 = x2);
                  case 8:
                    K2 === 111 && (E2 = K2);
                }
              break;
            case 58:
              n2 + b2 + m2 === 0 && (u2 = l2);
              break;
            case 44:
              b2 + v4 + n2 + m2 === 0 && (r2 = 1, y2 += "\r");
              break;
            case 34:
            case 39:
              b2 === 0 && (n2 = n2 === g2 ? 0 : n2 === 0 ? g2 : n2);
              break;
            case 91:
              n2 + b2 + v4 === 0 && m2++;
              break;
            case 93:
              n2 + b2 + v4 === 0 && m2--;
              break;
            case 41:
              n2 + b2 + m2 === 0 && v4--;
              break;
            case 40:
              if (n2 + b2 + m2 === 0) {
                if (q2 === 0)
                  switch (2 * x2 + 3 * K2) {
                    case 533:
                      break;
                    default:
                      q2 = 1;
                  }
                v4++;
              }
              break;
            case 64:
              b2 + v4 + n2 + m2 + u2 + k2 === 0 && (k2 = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n2 + m2 + v4))
                switch (b2) {
                  case 0:
                    switch (2 * g2 + 3 * e2.charCodeAt(l2 + 1)) {
                      case 235:
                        b2 = 47;
                        break;
                      case 220:
                        t2 = l2, b2 = 42;
                    }
                    break;
                  case 42:
                    g2 === 47 && x2 === 42 && t2 + 2 !== l2 && (e2.charCodeAt(t2 + 2) === 33 && (p += e2.substring(t2, l2 + 1)), y2 = "", b2 = 0);
                }
          }
          b2 === 0 && (f += y2);
      }
      K2 = x2;
      x2 = g2;
      l2++;
    }
    t2 = p.length;
    if (0 < t2) {
      r2 = c2;
      if (0 < A2 && (C2 = H2(2, p, r2, d2, D, z2, t2, h2, a2, h2), C2 !== void 0 && (p = C2).length === 0))
        return G3 + p + F3;
      p = r2.join(",") + "{" + p + "}";
      if (w2 * E2 !== 0) {
        w2 !== 2 || L2(p, 2) || (E2 = 0);
        switch (E2) {
          case 111:
            p = p.replace(ha, ":-moz-$1") + p;
            break;
          case 112:
            p = p.replace(Q2, "::-webkit-input-$1") + p.replace(Q2, "::-moz-$1") + p.replace(Q2, ":-ms-input-$1") + p;
        }
        E2 = 0;
      }
    }
    return G3 + p + F3;
  }
  function X2(d2, c2, e2) {
    var h2 = c2.trim().split(ia);
    c2 = h2;
    var a2 = h2.length, m2 = d2.length;
    switch (m2) {
      case 0:
      case 1:
        var b2 = 0;
        for (d2 = m2 === 0 ? "" : d2[0] + " "; b2 < a2; ++b2) {
          c2[b2] = Z2(d2, c2[b2], e2).trim();
        }
        break;
      default:
        var v4 = b2 = 0;
        for (c2 = []; b2 < a2; ++b2) {
          for (var n2 = 0; n2 < m2; ++n2) {
            c2[v4++] = Z2(d2[n2] + " ", h2[b2], e2).trim();
          }
        }
    }
    return c2;
  }
  function Z2(d2, c2, e2) {
    var h2 = c2.charCodeAt(0);
    33 > h2 && (h2 = (c2 = c2.trim()).charCodeAt(0));
    switch (h2) {
      case 38:
        return c2.replace(F2, "$1" + d2.trim());
      case 58:
        return d2.trim() + c2.replace(F2, "$1" + d2.trim());
      default:
        if (0 < 1 * e2 && 0 < c2.indexOf("\f"))
          return c2.replace(F2, (d2.charCodeAt(0) === 58 ? "" : "$1") + d2.trim());
    }
    return d2 + c2;
  }
  function P2(d2, c2, e2, h2) {
    var a2 = d2 + ";", m2 = 2 * c2 + 3 * e2 + 4 * h2;
    if (m2 === 944) {
      d2 = a2.indexOf(":", 9) + 1;
      var b2 = a2.substring(d2, a2.length - 1).trim();
      b2 = a2.substring(0, d2).trim() + b2 + ";";
      return w2 === 1 || w2 === 2 && L2(b2, 1) ? "-webkit-" + b2 + b2 : b2;
    }
    if (w2 === 0 || w2 === 2 && !L2(a2, 1))
      return a2;
    switch (m2) {
      case 1015:
        return a2.charCodeAt(10) === 97 ? "-webkit-" + a2 + a2 : a2;
      case 951:
        return a2.charCodeAt(3) === 116 ? "-webkit-" + a2 + a2 : a2;
      case 963:
        return a2.charCodeAt(5) === 110 ? "-webkit-" + a2 + a2 : a2;
      case 1009:
        if (a2.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + a2 + a2;
      case 978:
        return "-webkit-" + a2 + "-moz-" + a2 + a2;
      case 1019:
      case 983:
        return "-webkit-" + a2 + "-moz-" + a2 + "-ms-" + a2 + a2;
      case 883:
        if (a2.charCodeAt(8) === 45)
          return "-webkit-" + a2 + a2;
        if (0 < a2.indexOf("image-set(", 11))
          return a2.replace(ja, "$1-webkit-$2") + a2;
        break;
      case 932:
        if (a2.charCodeAt(4) === 45)
          switch (a2.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + a2.replace("-grow", "") + "-webkit-" + a2 + "-ms-" + a2.replace("grow", "positive") + a2;
            case 115:
              return "-webkit-" + a2 + "-ms-" + a2.replace("shrink", "negative") + a2;
            case 98:
              return "-webkit-" + a2 + "-ms-" + a2.replace("basis", "preferred-size") + a2;
          }
        return "-webkit-" + a2 + "-ms-" + a2 + a2;
      case 964:
        return "-webkit-" + a2 + "-ms-flex-" + a2 + a2;
      case 1023:
        if (a2.charCodeAt(8) !== 99)
          break;
        b2 = a2.substring(a2.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
        return "-webkit-box-pack" + b2 + "-webkit-" + a2 + "-ms-flex-pack" + b2 + a2;
      case 1005:
        return ka.test(a2) ? a2.replace(aa, ":-webkit-") + a2.replace(aa, ":-moz-") + a2 : a2;
      case 1e3:
        b2 = a2.substring(13).trim();
        c2 = b2.indexOf("-") + 1;
        switch (b2.charCodeAt(0) + b2.charCodeAt(c2)) {
          case 226:
            b2 = a2.replace(G2, "tb");
            break;
          case 232:
            b2 = a2.replace(G2, "tb-rl");
            break;
          case 220:
            b2 = a2.replace(G2, "lr");
            break;
          default:
            return a2;
        }
        return "-webkit-" + a2 + "-ms-" + b2 + a2;
      case 1017:
        if (a2.indexOf("sticky", 9) === -1)
          break;
      case 975:
        c2 = (a2 = d2).length - 10;
        b2 = (a2.charCodeAt(c2) === 33 ? a2.substring(0, c2) : a2).substring(d2.indexOf(":", 7) + 1).trim();
        switch (m2 = b2.charCodeAt(0) + (b2.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b2.charCodeAt(8))
              break;
          case 115:
            a2 = a2.replace(b2, "-webkit-" + b2) + ";" + a2;
            break;
          case 207:
          case 102:
            a2 = a2.replace(b2, "-webkit-" + (102 < m2 ? "inline-" : "") + "box") + ";" + a2.replace(b2, "-webkit-" + b2) + ";" + a2.replace(b2, "-ms-" + b2 + "box") + ";" + a2;
        }
        return a2 + ";";
      case 938:
        if (a2.charCodeAt(5) === 45)
          switch (a2.charCodeAt(6)) {
            case 105:
              return b2 = a2.replace("-items", ""), "-webkit-" + a2 + "-webkit-box-" + b2 + "-ms-flex-" + b2 + a2;
            case 115:
              return "-webkit-" + a2 + "-ms-flex-item-" + a2.replace(ba, "") + a2;
            default:
              return "-webkit-" + a2 + "-ms-flex-line-pack" + a2.replace("align-content", "").replace(ba, "") + a2;
          }
        break;
      case 973:
      case 989:
        if (a2.charCodeAt(3) !== 45 || a2.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (la.test(d2) === true)
          return (b2 = d2.substring(d2.indexOf(":") + 1)).charCodeAt(0) === 115 ? P2(d2.replace("stretch", "fill-available"), c2, e2, h2).replace(":fill-available", ":stretch") : a2.replace(b2, "-webkit-" + b2) + a2.replace(b2, "-moz-" + b2.replace("fill-", "")) + a2;
        break;
      case 962:
        if (a2 = "-webkit-" + a2 + (a2.charCodeAt(5) === 102 ? "-ms-" + a2 : "") + a2, e2 + h2 === 211 && a2.charCodeAt(13) === 105 && 0 < a2.indexOf("transform", 10))
          return a2.substring(0, a2.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") + a2;
    }
    return a2;
  }
  function L2(d2, c2) {
    var e2 = d2.indexOf(c2 === 1 ? ":" : "{"), h2 = d2.substring(0, c2 !== 3 ? e2 : 10);
    e2 = d2.substring(e2 + 1, d2.length - 1);
    return R(c2 !== 2 ? h2 : h2.replace(na, "$1"), e2, c2);
  }
  function ea(d2, c2) {
    var e2 = P2(c2, c2.charCodeAt(0), c2.charCodeAt(1), c2.charCodeAt(2));
    return e2 !== c2 + ";" ? e2.replace(oa, " or ($1)").substring(4) : "(" + c2 + ")";
  }
  function H2(d2, c2, e2, h2, a2, m2, b2, v4, n2, q2) {
    for (var g2 = 0, x2 = c2, w3; g2 < A2; ++g2) {
      switch (w3 = S2[g2].call(B2, d2, x2, e2, h2, a2, m2, b2, v4, n2, q2)) {
        case void 0:
        case false:
        case true:
        case null:
          break;
        default:
          x2 = w3;
      }
    }
    if (x2 !== c2)
      return x2;
  }
  function T2(d2) {
    switch (d2) {
      case void 0:
      case null:
        A2 = S2.length = 0;
        break;
      default:
        if (typeof d2 === "function")
          S2[A2++] = d2;
        else if (typeof d2 === "object")
          for (var c2 = 0, e2 = d2.length; c2 < e2; ++c2) {
            T2(d2[c2]);
          }
        else
          Y2 = !!d2 | 0;
    }
    return T2;
  }
  function U2(d2) {
    d2 = d2.prefix;
    d2 !== void 0 && (R = null, d2 ? typeof d2 !== "function" ? w2 = 1 : (w2 = 2, R = d2) : w2 = 0);
    return U2;
  }
  function B2(d2, c2) {
    var e2 = d2;
    33 > e2.charCodeAt(0) && (e2 = e2.trim());
    V2 = e2;
    e2 = [V2];
    if (0 < A2) {
      var h2 = H2(-1, c2, e2, e2, D, z2, 0, 0, 0, 0);
      h2 !== void 0 && typeof h2 === "string" && (c2 = h2);
    }
    var a2 = M2(O2, e2, c2, 0, 0);
    0 < A2 && (h2 = H2(-2, a2, e2, e2, D, z2, a2.length, 0, 0, 0), h2 !== void 0 && (a2 = h2));
    V2 = "";
    E2 = 0;
    z2 = D = 1;
    return a2;
  }
  var ca = /^\0+/g, N2 = /[\0\r\f]/g, aa = /: */g, ka = /zoo|gra/, ma = /([,: ])(transform)/g, ia = /,\r+?/g, F2 = /([\t\r\n ])*\f?&/g, fa = /@(k\w+)\s*(\S*)\s*/, Q2 = /::(place)/g, ha = /:(read-only)/g, G2 = /[svh]\w+-[tblr]{2}/, da = /\(\s*(.*)\s*\)/g, oa = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la = /stretch|:\s*\w+\-(?:conte|avail)/, ja = /([^-])(image-set\()/, z2 = 1, D = 1, E2 = 0, w2 = 1, O2 = [], S2 = [], A2 = 0, R = null, Y2 = 0, V2 = "";
  B2.use = T2;
  B2.set = U2;
  W2 !== void 0 && U2(W2);
  return B2;
}
var stylis_browser_esm_default;
var init_stylis_browser_esm = __esm({
  "../../node_modules/@emotion/stylis/dist/stylis.browser.esm.js"() {
    stylis_browser_esm_default = stylis_min;
  }
});

// ../../node_modules/@emotion/unitless/dist/unitless.browser.esm.js
var unitlessKeys, unitless_browser_esm_default;
var init_unitless_browser_esm = __esm({
  "../../node_modules/@emotion/unitless/dist/unitless.browser.esm.js"() {
    unitlessKeys = {
      animationIterationCount: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1
    };
    unitless_browser_esm_default = unitlessKeys;
  }
});

// ../../node_modules/@emotion/memoize/dist/emotion-memoize.cjs.prod.js
var require_emotion_memoize_cjs_prod = __commonJS({
  "../../node_modules/@emotion/memoize/dist/emotion-memoize.cjs.prod.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function memoize2(fn) {
      var cache = Object.create(null);
      return function(arg) {
        if (cache[arg] === void 0)
          cache[arg] = fn(arg);
        return cache[arg];
      };
    }
    exports2.default = memoize2;
  }
});

// ../../node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js
var require_emotion_memoize_cjs = __commonJS({
  "../../node_modules/@emotion/memoize/dist/emotion-memoize.cjs.js"(exports2, module2) {
    "use strict";
    if (true) {
      module2.exports = require_emotion_memoize_cjs_prod();
    } else {
      module2.exports = null;
    }
  }
});

// ../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.prod.js
var require_emotion_is_prop_valid_cjs_prod = __commonJS({
  "../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.prod.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var memoize2 = require_emotion_memoize_cjs();
    function _interopDefault(e2) {
      return e2 && e2.__esModule ? e2 : { "default": e2 };
    }
    var memoize__default = /* @__PURE__ */ _interopDefault(memoize2);
    var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    var isPropValid = /* @__PURE__ */ memoize__default["default"](function(prop) {
      return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
    });
    exports2.default = isPropValid;
  }
});

// ../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.js
var require_emotion_is_prop_valid_cjs = __commonJS({
  "../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.cjs.js"(exports2, module2) {
    "use strict";
    if (true) {
      module2.exports = require_emotion_is_prop_valid_cjs_prod();
    } else {
      module2.exports = null;
    }
  }
});

// ../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js
var require_react_is_production_min2 = __commonJS({
  "../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(exports2) {
    "use strict";
    var b2 = typeof Symbol === "function" && Symbol.for;
    var c2 = b2 ? Symbol.for("react.element") : 60103;
    var d2 = b2 ? Symbol.for("react.portal") : 60106;
    var e2 = b2 ? Symbol.for("react.fragment") : 60107;
    var f = b2 ? Symbol.for("react.strict_mode") : 60108;
    var g2 = b2 ? Symbol.for("react.profiler") : 60114;
    var h2 = b2 ? Symbol.for("react.provider") : 60109;
    var k2 = b2 ? Symbol.for("react.context") : 60110;
    var l2 = b2 ? Symbol.for("react.async_mode") : 60111;
    var m2 = b2 ? Symbol.for("react.concurrent_mode") : 60111;
    var n2 = b2 ? Symbol.for("react.forward_ref") : 60112;
    var p = b2 ? Symbol.for("react.suspense") : 60113;
    var q2 = b2 ? Symbol.for("react.suspense_list") : 60120;
    var r2 = b2 ? Symbol.for("react.memo") : 60115;
    var t2 = b2 ? Symbol.for("react.lazy") : 60116;
    var v4 = b2 ? Symbol.for("react.block") : 60121;
    var w2 = b2 ? Symbol.for("react.fundamental") : 60117;
    var x2 = b2 ? Symbol.for("react.responder") : 60118;
    var y2 = b2 ? Symbol.for("react.scope") : 60119;
    function z2(a2) {
      if (typeof a2 === "object" && a2 !== null) {
        var u2 = a2.$$typeof;
        switch (u2) {
          case c2:
            switch (a2 = a2.type, a2) {
              case l2:
              case m2:
              case e2:
              case g2:
              case f:
              case p:
                return a2;
              default:
                switch (a2 = a2 && a2.$$typeof, a2) {
                  case k2:
                  case n2:
                  case t2:
                  case r2:
                  case h2:
                    return a2;
                  default:
                    return u2;
                }
            }
          case d2:
            return u2;
        }
      }
    }
    function A2(a2) {
      return z2(a2) === m2;
    }
    exports2.AsyncMode = l2;
    exports2.ConcurrentMode = m2;
    exports2.ContextConsumer = k2;
    exports2.ContextProvider = h2;
    exports2.Element = c2;
    exports2.ForwardRef = n2;
    exports2.Fragment = e2;
    exports2.Lazy = t2;
    exports2.Memo = r2;
    exports2.Portal = d2;
    exports2.Profiler = g2;
    exports2.StrictMode = f;
    exports2.Suspense = p;
    exports2.isAsyncMode = function(a2) {
      return A2(a2) || z2(a2) === l2;
    };
    exports2.isConcurrentMode = A2;
    exports2.isContextConsumer = function(a2) {
      return z2(a2) === k2;
    };
    exports2.isContextProvider = function(a2) {
      return z2(a2) === h2;
    };
    exports2.isElement = function(a2) {
      return typeof a2 === "object" && a2 !== null && a2.$$typeof === c2;
    };
    exports2.isForwardRef = function(a2) {
      return z2(a2) === n2;
    };
    exports2.isFragment = function(a2) {
      return z2(a2) === e2;
    };
    exports2.isLazy = function(a2) {
      return z2(a2) === t2;
    };
    exports2.isMemo = function(a2) {
      return z2(a2) === r2;
    };
    exports2.isPortal = function(a2) {
      return z2(a2) === d2;
    };
    exports2.isProfiler = function(a2) {
      return z2(a2) === g2;
    };
    exports2.isStrictMode = function(a2) {
      return z2(a2) === f;
    };
    exports2.isSuspense = function(a2) {
      return z2(a2) === p;
    };
    exports2.isValidElementType = function(a2) {
      return typeof a2 === "string" || typeof a2 === "function" || a2 === e2 || a2 === m2 || a2 === g2 || a2 === f || a2 === p || a2 === q2 || typeof a2 === "object" && a2 !== null && (a2.$$typeof === t2 || a2.$$typeof === r2 || a2.$$typeof === h2 || a2.$$typeof === k2 || a2.$$typeof === n2 || a2.$$typeof === w2 || a2.$$typeof === x2 || a2.$$typeof === y2 || a2.$$typeof === v4);
    };
    exports2.typeOf = z2;
  }
});

// ../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js
var require_react_is2 = __commonJS({
  "../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(exports2, module2) {
    "use strict";
    if (true) {
      module2.exports = require_react_is_production_min2();
    } else {
      module2.exports = null;
    }
  }
});

// ../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports2, module2) {
    "use strict";
    var reactIs = require_react_is2();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys3 = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys3 = keys3.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i3 = 0; i3 < keys3.length; ++i3) {
          var key = keys3[i3];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e2) {
            }
          }
        }
      }
      return targetComponent;
    }
    module2.exports = hoistNonReactStatics;
  }
});

// ../../node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm_exports = {};
__export(styled_components_browser_esm_exports, {
  ServerStyleSheet: () => Je,
  StyleSheetConsumer: () => le,
  StyleSheetContext: () => ue,
  StyleSheetManager: () => ye,
  ThemeConsumer: () => Le,
  ThemeContext: () => Ge,
  ThemeProvider: () => Fe,
  __PRIVATE__: () => Ke,
  createGlobalStyle: () => We,
  css: () => Ce,
  default: () => styled_components_browser_esm_default,
  isStyledComponent: () => N,
  keyframes: () => Ue,
  useTheme: () => Ze,
  version: () => C,
  withTheme: () => Xe
});
function v() {
  return (v = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function b(e2) {
  return typeof e2 == "function";
}
function _(e2) {
  return e2.displayName || e2.name || "Component";
}
function N(e2) {
  return e2 && typeof e2.styledComponentId == "string";
}
function j(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  throw true ? new Error("An error occurred. See https://git.io/JUIaE#" + e2 + " for more information." + (n2.length > 0 ? " Args: " + n2.join(", ") : "")) : new Error(D.apply(void 0, [R[e2]].concat(n2)).trim());
}
function ee(e2) {
  var t2, n2 = "";
  for (t2 = Math.abs(e2); t2 > 52; t2 = t2 / 52 | 0)
    n2 = Q(t2 % 52) + n2;
  return (Q(t2 % 52) + n2).replace(K, "$1-$2");
}
function re(e2) {
  for (var t2 = 0; t2 < e2.length; t2 += 1) {
    var n2 = e2[t2];
    if (b(n2) && !N(n2))
      return false;
  }
  return true;
}
function ce(e2) {
  var t2, n2, r2, o2, s2 = e2 === void 0 ? E : e2, i3 = s2.options, a2 = i3 === void 0 ? E : i3, c2 = s2.plugins, u2 = c2 === void 0 ? w : c2, l2 = new stylis_browser_esm_default(a2), d2 = [], h2 = function(e3) {
    function t3(t4) {
      if (t4)
        try {
          e3(t4 + "}");
        } catch (e4) {
        }
    }
    return function(n3, r3, o3, s3, i4, a3, c3, u3, l3, d3) {
      switch (n3) {
        case 1:
          if (l3 === 0 && r3.charCodeAt(0) === 64)
            return e3(r3 + ";"), "";
          break;
        case 2:
          if (u3 === 0)
            return r3 + "/*|*/";
          break;
        case 3:
          switch (u3) {
            case 102:
            case 112:
              return e3(o3[0] + r3), "";
            default:
              return r3 + (d3 === 0 ? "/*|*/" : "");
          }
        case -2:
          r3.split("/*|*/}").forEach(t3);
      }
    };
  }(function(e3) {
    d2.push(e3);
  }), f = function(e3, r3, s3) {
    return r3 === 0 && ae.indexOf(s3[n2.length]) !== -1 || s3.match(o2) ? e3 : "." + t2;
  };
  function m2(e3, s3, i4, a3) {
    a3 === void 0 && (a3 = "&");
    var c3 = e3.replace(ie, ""), u3 = s3 && i4 ? i4 + " " + s3 + " { " + c3 + " }" : c3;
    return t2 = a3, n2 = s3, r2 = new RegExp("\\" + n2 + "\\b", "g"), o2 = new RegExp("(\\" + n2 + "\\b){2,}"), l2(i4 || !s3 ? "" : s3, u3);
  }
  return l2.use([].concat(u2, [function(e3, t3, o3) {
    e3 === 2 && o3.length && o3[0].lastIndexOf(n2) > 0 && (o3[0] = o3[0].replace(r2, f));
  }, h2, function(e3) {
    if (e3 === -2) {
      var t3 = d2;
      return d2 = [], t3;
    }
  }])), m2.hash = u2.length ? u2.reduce(function(e3, t3) {
    return t3.name || j(15), te(e3, t3.name);
  }, 5381).toString() : "", m2;
}
function fe() {
  return (0, import_react2.useContext)(ue) || he;
}
function me() {
  return (0, import_react2.useContext)(de) || pe;
}
function ye(e2) {
  var t2 = (0, import_react2.useState)(e2.stylisPlugins), n2 = t2[0], s2 = t2[1], c2 = fe(), u2 = (0, import_react2.useMemo)(function() {
    var t3 = c2;
    return e2.sheet ? t3 = e2.sheet : e2.target && (t3 = t3.reconstructWithOptions({ target: e2.target }, false)), e2.disableCSSOMInjection && (t3 = t3.reconstructWithOptions({ useCSSOMInjection: false })), t3;
  }, [e2.disableCSSOMInjection, e2.sheet, e2.target]), l2 = (0, import_react2.useMemo)(function() {
    return ce({ options: { prefix: !e2.disableVendorPrefixes }, plugins: n2 });
  }, [e2.disableVendorPrefixes, n2]);
  return (0, import_react2.useEffect)(function() {
    (0, import_shallowequal.default)(n2, e2.stylisPlugins) || s2(e2.stylisPlugins);
  }, [e2.stylisPlugins]), import_react2.default.createElement(ue.Provider, { value: u2 }, import_react2.default.createElement(de.Provider, { value: l2 }, false ? import_react2.default.Children.only(e2.children) : e2.children));
}
function be(e2) {
  return ge.test(e2) ? e2.replace(Se, Ee).replace(we, "-ms-") : e2;
}
function Ne(e2, n2, r2, o2) {
  if (Array.isArray(e2)) {
    for (var s2, i3 = [], a2 = 0, c2 = e2.length; a2 < c2; a2 += 1)
      (s2 = Ne(e2[a2], n2, r2, o2)) !== "" && (Array.isArray(s2) ? i3.push.apply(i3, s2) : i3.push(s2));
    return i3;
  }
  if (_e(e2))
    return "";
  if (N(e2))
    return "." + e2.styledComponentId;
  if (b(e2)) {
    if (typeof (l2 = e2) != "function" || l2.prototype && l2.prototype.isReactComponent || !n2)
      return e2;
    var u2 = e2(n2);
    return false, Ne(u2, n2, r2, o2);
  }
  var l2;
  return e2 instanceof ve ? r2 ? (e2.inject(r2, o2), e2.getName(o2)) : e2 : S(e2) ? function e3(t2, n3) {
    var r3, o3, s3 = [];
    for (var i4 in t2)
      t2.hasOwnProperty(i4) && !_e(t2[i4]) && (Array.isArray(t2[i4]) && t2[i4].isCss || b(t2[i4]) ? s3.push(be(i4) + ":", t2[i4], ";") : S(t2[i4]) ? s3.push.apply(s3, e3(t2[i4], i4)) : s3.push(be(i4) + ": " + (r3 = i4, (o3 = t2[i4]) == null || typeof o3 == "boolean" || o3 === "" ? "" : typeof o3 != "number" || o3 === 0 || r3 in unitless_browser_esm_default ? String(o3).trim() : o3 + "px") + ";"));
    return n3 ? [n3 + " {"].concat(s3, ["}"]) : s3;
  }(e2) : e2.toString();
}
function Ce(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  return b(e2) || S(e2) ? Ae(Ne(g(w, [e2].concat(n2)))) : n2.length === 0 && e2.length === 1 && typeof e2[0] == "string" ? e2 : Ae(Ne(g(e2, n2)));
}
function Te(e2) {
  return e2.replace(De, "-").replace(je, "");
}
function ke(e2) {
  return typeof e2 == "string" && true;
}
function ze(e2, t2, n2) {
  var r2 = e2[n2];
  Ve(t2) && Ve(r2) ? Me(r2, t2) : e2[n2] = t2;
}
function Me(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  for (var o2 = 0, s2 = n2; o2 < s2.length; o2++) {
    var i3 = s2[o2];
    if (Ve(i3))
      for (var a2 in i3)
        Be(a2) && ze(e2, i3[a2], a2);
  }
  return e2;
}
function Fe(e2) {
  var t2 = (0, import_react2.useContext)(Ge), n2 = (0, import_react2.useMemo)(function() {
    return function(e3, t3) {
      if (!e3)
        return j(14);
      if (b(e3)) {
        var n3 = e3(t3);
        return true ? n3 : j(7);
      }
      return Array.isArray(e3) || typeof e3 != "object" ? j(8) : t3 ? v({}, t3, {}, e3) : e3;
    }(e2.theme, t2);
  }, [e2.theme, t2]);
  return e2.children ? import_react2.default.createElement(Ge.Provider, { value: n2 }, e2.children) : null;
}
function qe(e2, t2, n2) {
  var o2 = N(e2), i3 = !ke(e2), a2 = t2.attrs, c2 = a2 === void 0 ? w : a2, d2 = t2.componentId, h2 = d2 === void 0 ? function(e3, t3) {
    var n3 = typeof e3 != "string" ? "sc" : Te(e3);
    Ye[n3] = (Ye[n3] || 0) + 1;
    var r2 = n3 + "-" + xe("5.3.5" + n3 + Ye[n3]);
    return t3 ? t3 + "-" + r2 : r2;
  }(t2.displayName, t2.parentComponentId) : d2, p = t2.displayName, f = p === void 0 ? function(e3) {
    return ke(e3) ? "styled." + e3 : "Styled(" + _(e3) + ")";
  }(e2) : p, g2 = t2.displayName && t2.componentId ? Te(t2.displayName) + "-" + t2.componentId : t2.componentId || h2, S2 = o2 && e2.attrs ? Array.prototype.concat(e2.attrs, c2).filter(Boolean) : c2, A2 = t2.shouldForwardProp;
  o2 && e2.shouldForwardProp && (A2 = t2.shouldForwardProp ? function(n3, r2, o3) {
    return e2.shouldForwardProp(n3, r2, o3) && t2.shouldForwardProp(n3, r2, o3);
  } : e2.shouldForwardProp);
  var C2, I2 = new se(n2, g2, o2 ? e2.componentStyle : void 0), P2 = I2.isStatic && c2.length === 0, O2 = function(e3, t3) {
    return function(e4, t4, n3, r2) {
      var o3 = e4.attrs, i4 = e4.componentStyle, a3 = e4.defaultProps, c3 = e4.foldedComponentIds, d3 = e4.shouldForwardProp, h3 = e4.styledComponentId, p2 = e4.target;
      false;
      var f2 = function(e5, t5, n4) {
        e5 === void 0 && (e5 = E);
        var r3 = v({}, t5, { theme: e5 }), o4 = {};
        return n4.forEach(function(e6) {
          var t6, n5, s2, i5 = e6;
          for (t6 in b(i5) && (i5 = i5(r3)), i5)
            r3[t6] = o4[t6] = t6 === "className" ? (n5 = o4[t6], s2 = i5[t6], n5 && s2 ? n5 + " " + s2 : n5 || s2) : i5[t6];
        }), [r3, o4];
      }(Re(t4, (0, import_react2.useContext)(Ge), a3) || E, t4, o3), y2 = f2[0], g3 = f2[1], S3 = function(e5, t5, n4, r3) {
        var o4 = fe(), s2 = me(), i5 = t5 ? e5.generateAndInjectStyles(E, o4, s2) : e5.generateAndInjectStyles(n4, o4, s2);
        return false, false, i5;
      }(i4, r2, y2, false ? e4.warnTooManyClasses : void 0), w2 = n3, _2 = g3.$as || t4.$as || g3.as || t4.as || p2, N2 = ke(_2), A3 = g3 !== t4 ? v({}, t4, {}, g3) : t4, C3 = {};
      for (var I3 in A3)
        I3[0] !== "$" && I3 !== "as" && (I3 === "forwardedAs" ? C3.as = A3[I3] : (d3 ? d3(I3, import_is_prop_valid.default, _2) : !N2 || (0, import_is_prop_valid.default)(I3)) && (C3[I3] = A3[I3]));
      return t4.style && g3.style !== t4.style && (C3.style = v({}, t4.style, {}, g3.style)), C3.className = Array.prototype.concat(c3, h3, S3 !== h3 ? S3 : null, t4.className, g3.className).filter(Boolean).join(" "), C3.ref = w2, (0, import_react2.createElement)(_2, C3);
    }(C2, e3, t3, P2);
  };
  return O2.displayName = f, (C2 = import_react2.default.forwardRef(O2)).attrs = S2, C2.componentStyle = I2, C2.displayName = f, C2.shouldForwardProp = A2, C2.foldedComponentIds = o2 ? Array.prototype.concat(e2.foldedComponentIds, e2.styledComponentId) : w, C2.styledComponentId = g2, C2.target = o2 ? e2.target : e2, C2.withComponent = function(e3) {
    var r2 = t2.componentId, o3 = function(e4, t3) {
      if (e4 == null)
        return {};
      var n3, r3, o4 = {}, s3 = Object.keys(e4);
      for (r3 = 0; r3 < s3.length; r3++)
        n3 = s3[r3], t3.indexOf(n3) >= 0 || (o4[n3] = e4[n3]);
      return o4;
    }(t2, ["componentId"]), s2 = r2 && r2 + "-" + (ke(e3) ? e3 : Te(_(e3)));
    return qe(e3, v({}, o3, { attrs: S2, componentId: s2 }), n2);
  }, Object.defineProperty(C2, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(t3) {
    this._foldedDefaultProps = o2 ? Me({}, e2.defaultProps, t3) : t3;
  } }), false, C2.toString = function() {
    return "." + C2.styledComponentId;
  }, i3 && (0, import_hoist_non_react_statics.default)(C2, e2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true, withComponent: true }), C2;
}
function We(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), o2 = 1; o2 < t2; o2++)
    n2[o2 - 1] = arguments[o2];
  var i3 = Ce.apply(void 0, [e2].concat(n2)), a2 = "sc-global-" + xe(JSON.stringify(i3)), u2 = new $e(i3, a2);
  function l2(e3) {
    var t3 = fe(), n3 = me(), o3 = (0, import_react2.useContext)(Ge), l3 = (0, import_react2.useRef)(t3.allocateGSInstance(a2)).current;
    return false, false, t3.server && h2(l3, e3, t3, o3, n3), (0, import_react2.useLayoutEffect)(function() {
      if (!t3.server)
        return h2(l3, e3, t3, o3, n3), function() {
          return u2.removeStyles(l3, t3);
        };
    }, [l3, e3, t3, o3, n3]), null;
  }
  function h2(e3, t3, n3, r2, o3) {
    if (u2.isStatic)
      u2.renderStyles(e3, O, n3, o3);
    else {
      var s2 = v({}, t3, { theme: Re(t3, r2, l2.defaultProps) });
      u2.renderStyles(e3, s2, n3, o3);
    }
  }
  return false, import_react2.default.memo(l2);
}
function Ue(e2) {
  false;
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  var o2 = Ce.apply(void 0, [e2].concat(n2)).join(""), s2 = xe(o2);
  return new ve(s2, o2);
}
var import_react_is, import_react2, import_shallowequal, import_is_prop_valid, import_hoist_non_react_statics, g, S, w, E, A, C, I, P, O, T, x, k, V, B, z, M, G, L, F, Y, q, H, $, W, U, J, X, Z, K, Q, te, ne, oe, se, ie, ae, ue, le, de, he, pe, ve, ge, Se, we, Ee, _e, Ae, Pe, Re, De, je, xe, Ve, Be, Ge, Le, Ye, He, $e, Je, Xe, Ze, Ke, styled_components_browser_esm_default;
var init_styled_components_browser_esm = __esm({
  "../../node_modules/styled-components/dist/styled-components.browser.esm.js"() {
    import_react_is = __toModule(require_react_is());
    import_react2 = __toModule(require_react());
    import_shallowequal = __toModule(require_shallowequal());
    init_stylis_browser_esm();
    init_unitless_browser_esm();
    import_is_prop_valid = __toModule(require_emotion_is_prop_valid_cjs());
    import_hoist_non_react_statics = __toModule(require_hoist_non_react_statics_cjs());
    g = function(e2, t2) {
      for (var n2 = [e2[0]], r2 = 0, o2 = t2.length; r2 < o2; r2 += 1)
        n2.push(t2[r2], e2[r2 + 1]);
      return n2;
    };
    S = function(t2) {
      return t2 !== null && typeof t2 == "object" && (t2.toString ? t2.toString() : Object.prototype.toString.call(t2)) === "[object Object]" && !(0, import_react_is.typeOf)(t2);
    };
    w = Object.freeze([]);
    E = Object.freeze({});
    A = typeof process != "undefined" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled";
    C = "5.3.5";
    I = typeof window != "undefined" && "HTMLElement" in window;
    P = Boolean(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process != "undefined" && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : false);
    O = {};
    T = function() {
      function e2(e3) {
        this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e3;
      }
      var t2 = e2.prototype;
      return t2.indexOfGroup = function(e3) {
        for (var t3 = 0, n2 = 0; n2 < e3; n2++)
          t3 += this.groupSizes[n2];
        return t3;
      }, t2.insertRules = function(e3, t3) {
        if (e3 >= this.groupSizes.length) {
          for (var n2 = this.groupSizes, r2 = n2.length, o2 = r2; e3 >= o2; )
            (o2 <<= 1) < 0 && j(16, "" + e3);
          this.groupSizes = new Uint32Array(o2), this.groupSizes.set(n2), this.length = o2;
          for (var s2 = r2; s2 < o2; s2++)
            this.groupSizes[s2] = 0;
        }
        for (var i3 = this.indexOfGroup(e3 + 1), a2 = 0, c2 = t3.length; a2 < c2; a2++)
          this.tag.insertRule(i3, t3[a2]) && (this.groupSizes[e3]++, i3++);
      }, t2.clearGroup = function(e3) {
        if (e3 < this.length) {
          var t3 = this.groupSizes[e3], n2 = this.indexOfGroup(e3), r2 = n2 + t3;
          this.groupSizes[e3] = 0;
          for (var o2 = n2; o2 < r2; o2++)
            this.tag.deleteRule(n2);
        }
      }, t2.getGroup = function(e3) {
        var t3 = "";
        if (e3 >= this.length || this.groupSizes[e3] === 0)
          return t3;
        for (var n2 = this.groupSizes[e3], r2 = this.indexOfGroup(e3), o2 = r2 + n2, s2 = r2; s2 < o2; s2++)
          t3 += this.tag.getRule(s2) + "/*!sc*/\n";
        return t3;
      }, e2;
    }();
    x = new Map();
    k = new Map();
    V = 1;
    B = function(e2) {
      if (x.has(e2))
        return x.get(e2);
      for (; k.has(V); )
        V++;
      var t2 = V++;
      return false, x.set(e2, t2), k.set(t2, e2), t2;
    };
    z = function(e2) {
      return k.get(e2);
    };
    M = function(e2, t2) {
      t2 >= V && (V = t2 + 1), x.set(e2, t2), k.set(t2, e2);
    };
    G = "style[" + A + '][data-styled-version="5.3.5"]';
    L = new RegExp("^" + A + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)');
    F = function(e2, t2, n2) {
      for (var r2, o2 = n2.split(","), s2 = 0, i3 = o2.length; s2 < i3; s2++)
        (r2 = o2[s2]) && e2.registerName(t2, r2);
    };
    Y = function(e2, t2) {
      for (var n2 = (t2.textContent || "").split("/*!sc*/\n"), r2 = [], o2 = 0, s2 = n2.length; o2 < s2; o2++) {
        var i3 = n2[o2].trim();
        if (i3) {
          var a2 = i3.match(L);
          if (a2) {
            var c2 = 0 | parseInt(a2[1], 10), u2 = a2[2];
            c2 !== 0 && (M(u2, c2), F(e2, u2, a2[3]), e2.getTag().insertRules(c2, r2)), r2.length = 0;
          } else
            r2.push(i3);
        }
      }
    };
    q = function() {
      return typeof window != "undefined" && window.__webpack_nonce__ !== void 0 ? window.__webpack_nonce__ : null;
    };
    H = function(e2) {
      var t2 = document.head, n2 = e2 || t2, r2 = document.createElement("style"), o2 = function(e3) {
        for (var t3 = e3.childNodes, n3 = t3.length; n3 >= 0; n3--) {
          var r3 = t3[n3];
          if (r3 && r3.nodeType === 1 && r3.hasAttribute(A))
            return r3;
        }
      }(n2), s2 = o2 !== void 0 ? o2.nextSibling : null;
      r2.setAttribute(A, "active"), r2.setAttribute("data-styled-version", "5.3.5");
      var i3 = q();
      return i3 && r2.setAttribute("nonce", i3), n2.insertBefore(r2, s2), r2;
    };
    $ = function() {
      function e2(e3) {
        var t3 = this.element = H(e3);
        t3.appendChild(document.createTextNode("")), this.sheet = function(e4) {
          if (e4.sheet)
            return e4.sheet;
          for (var t4 = document.styleSheets, n2 = 0, r2 = t4.length; n2 < r2; n2++) {
            var o2 = t4[n2];
            if (o2.ownerNode === e4)
              return o2;
          }
          j(17);
        }(t3), this.length = 0;
      }
      var t2 = e2.prototype;
      return t2.insertRule = function(e3, t3) {
        try {
          return this.sheet.insertRule(t3, e3), this.length++, true;
        } catch (e4) {
          return false;
        }
      }, t2.deleteRule = function(e3) {
        this.sheet.deleteRule(e3), this.length--;
      }, t2.getRule = function(e3) {
        var t3 = this.sheet.cssRules[e3];
        return t3 !== void 0 && typeof t3.cssText == "string" ? t3.cssText : "";
      }, e2;
    }();
    W = function() {
      function e2(e3) {
        var t3 = this.element = H(e3);
        this.nodes = t3.childNodes, this.length = 0;
      }
      var t2 = e2.prototype;
      return t2.insertRule = function(e3, t3) {
        if (e3 <= this.length && e3 >= 0) {
          var n2 = document.createTextNode(t3), r2 = this.nodes[e3];
          return this.element.insertBefore(n2, r2 || null), this.length++, true;
        }
        return false;
      }, t2.deleteRule = function(e3) {
        this.element.removeChild(this.nodes[e3]), this.length--;
      }, t2.getRule = function(e3) {
        return e3 < this.length ? this.nodes[e3].textContent : "";
      }, e2;
    }();
    U = function() {
      function e2(e3) {
        this.rules = [], this.length = 0;
      }
      var t2 = e2.prototype;
      return t2.insertRule = function(e3, t3) {
        return e3 <= this.length && (this.rules.splice(e3, 0, t3), this.length++, true);
      }, t2.deleteRule = function(e3) {
        this.rules.splice(e3, 1), this.length--;
      }, t2.getRule = function(e3) {
        return e3 < this.length ? this.rules[e3] : "";
      }, e2;
    }();
    J = I;
    X = { isServer: !I, useCSSOMInjection: !P };
    Z = function() {
      function e2(e3, t3, n2) {
        e3 === void 0 && (e3 = E), t3 === void 0 && (t3 = {}), this.options = v({}, X, {}, e3), this.gs = t3, this.names = new Map(n2), this.server = !!e3.isServer, !this.server && I && J && (J = false, function(e4) {
          for (var t4 = document.querySelectorAll(G), n3 = 0, r2 = t4.length; n3 < r2; n3++) {
            var o2 = t4[n3];
            o2 && o2.getAttribute(A) !== "active" && (Y(e4, o2), o2.parentNode && o2.parentNode.removeChild(o2));
          }
        }(this));
      }
      e2.registerId = function(e3) {
        return B(e3);
      };
      var t2 = e2.prototype;
      return t2.reconstructWithOptions = function(t3, n2) {
        return n2 === void 0 && (n2 = true), new e2(v({}, this.options, {}, t3), this.gs, n2 && this.names || void 0);
      }, t2.allocateGSInstance = function(e3) {
        return this.gs[e3] = (this.gs[e3] || 0) + 1;
      }, t2.getTag = function() {
        return this.tag || (this.tag = (n2 = (t3 = this.options).isServer, r2 = t3.useCSSOMInjection, o2 = t3.target, e3 = n2 ? new U(o2) : r2 ? new $(o2) : new W(o2), new T(e3)));
        var e3, t3, n2, r2, o2;
      }, t2.hasNameForId = function(e3, t3) {
        return this.names.has(e3) && this.names.get(e3).has(t3);
      }, t2.registerName = function(e3, t3) {
        if (B(e3), this.names.has(e3))
          this.names.get(e3).add(t3);
        else {
          var n2 = new Set();
          n2.add(t3), this.names.set(e3, n2);
        }
      }, t2.insertRules = function(e3, t3, n2) {
        this.registerName(e3, t3), this.getTag().insertRules(B(e3), n2);
      }, t2.clearNames = function(e3) {
        this.names.has(e3) && this.names.get(e3).clear();
      }, t2.clearRules = function(e3) {
        this.getTag().clearGroup(B(e3)), this.clearNames(e3);
      }, t2.clearTag = function() {
        this.tag = void 0;
      }, t2.toString = function() {
        return function(e3) {
          for (var t3 = e3.getTag(), n2 = t3.length, r2 = "", o2 = 0; o2 < n2; o2++) {
            var s2 = z(o2);
            if (s2 !== void 0) {
              var i3 = e3.names.get(s2), a2 = t3.getGroup(o2);
              if (i3 && a2 && i3.size) {
                var c2 = A + ".g" + o2 + '[id="' + s2 + '"]', u2 = "";
                i3 !== void 0 && i3.forEach(function(e4) {
                  e4.length > 0 && (u2 += e4 + ",");
                }), r2 += "" + a2 + c2 + '{content:"' + u2 + '"}/*!sc*/\n';
              }
            }
          }
          return r2;
        }(this);
      }, e2;
    }();
    K = /(a)(d)/gi;
    Q = function(e2) {
      return String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
    };
    te = function(e2, t2) {
      for (var n2 = t2.length; n2; )
        e2 = 33 * e2 ^ t2.charCodeAt(--n2);
      return e2;
    };
    ne = function(e2) {
      return te(5381, e2);
    };
    oe = ne("5.3.5");
    se = function() {
      function e2(e3, t2, n2) {
        this.rules = e3, this.staticRulesId = "", this.isStatic = (n2 === void 0 || n2.isStatic) && re(e3), this.componentId = t2, this.baseHash = te(oe, t2), this.baseStyle = n2, Z.registerId(t2);
      }
      return e2.prototype.generateAndInjectStyles = function(e3, t2, n2) {
        var r2 = this.componentId, o2 = [];
        if (this.baseStyle && o2.push(this.baseStyle.generateAndInjectStyles(e3, t2, n2)), this.isStatic && !n2.hash)
          if (this.staticRulesId && t2.hasNameForId(r2, this.staticRulesId))
            o2.push(this.staticRulesId);
          else {
            var s2 = Ne(this.rules, e3, t2, n2).join(""), i3 = ee(te(this.baseHash, s2) >>> 0);
            if (!t2.hasNameForId(r2, i3)) {
              var a2 = n2(s2, "." + i3, void 0, r2);
              t2.insertRules(r2, i3, a2);
            }
            o2.push(i3), this.staticRulesId = i3;
          }
        else {
          for (var c2 = this.rules.length, u2 = te(this.baseHash, n2.hash), l2 = "", d2 = 0; d2 < c2; d2++) {
            var h2 = this.rules[d2];
            if (typeof h2 == "string")
              l2 += h2, false;
            else if (h2) {
              var p = Ne(h2, e3, t2, n2), f = Array.isArray(p) ? p.join("") : p;
              u2 = te(u2, f + d2), l2 += f;
            }
          }
          if (l2) {
            var m2 = ee(u2 >>> 0);
            if (!t2.hasNameForId(r2, m2)) {
              var y2 = n2(l2, "." + m2, void 0, r2);
              t2.insertRules(r2, m2, y2);
            }
            o2.push(m2);
          }
        }
        return o2.join(" ");
      }, e2;
    }();
    ie = /^\s*\/\/.*$/gm;
    ae = [":", "[", ".", "#"];
    ue = import_react2.default.createContext();
    le = ue.Consumer;
    de = import_react2.default.createContext();
    he = (de.Consumer, new Z());
    pe = ce();
    ve = function() {
      function e2(e3, t2) {
        var n2 = this;
        this.inject = function(e4, t3) {
          t3 === void 0 && (t3 = pe);
          var r2 = n2.name + t3.hash;
          e4.hasNameForId(n2.id, r2) || e4.insertRules(n2.id, r2, t3(n2.rules, r2, "@keyframes"));
        }, this.toString = function() {
          return j(12, String(n2.name));
        }, this.name = e3, this.id = "sc-keyframes-" + e3, this.rules = t2;
      }
      return e2.prototype.getName = function(e3) {
        return e3 === void 0 && (e3 = pe), this.name + e3.hash;
      }, e2;
    }();
    ge = /([A-Z])/;
    Se = /([A-Z])/g;
    we = /^ms-/;
    Ee = function(e2) {
      return "-" + e2.toLowerCase();
    };
    _e = function(e2) {
      return e2 == null || e2 === false || e2 === "";
    };
    Ae = function(e2) {
      return Array.isArray(e2) && (e2.isCss = true), e2;
    };
    Pe = new Set();
    Re = function(e2, t2, n2) {
      return n2 === void 0 && (n2 = E), e2.theme !== n2.theme && e2.theme || t2 || n2.theme;
    };
    De = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
    je = /(^-|-$)/g;
    xe = function(e2) {
      return ee(ne(e2) >>> 0);
    };
    Ve = function(e2) {
      return typeof e2 == "function" || typeof e2 == "object" && e2 !== null && !Array.isArray(e2);
    };
    Be = function(e2) {
      return e2 !== "__proto__" && e2 !== "constructor" && e2 !== "prototype";
    };
    Ge = import_react2.default.createContext();
    Le = Ge.Consumer;
    Ye = {};
    He = function(e2) {
      return function e3(t2, r2, o2) {
        if (o2 === void 0 && (o2 = E), !(0, import_react_is.isValidElementType)(r2))
          return j(1, String(r2));
        var s2 = function() {
          return t2(r2, o2, Ce.apply(void 0, arguments));
        };
        return s2.withConfig = function(n2) {
          return e3(t2, r2, v({}, o2, {}, n2));
        }, s2.attrs = function(n2) {
          return e3(t2, r2, v({}, o2, { attrs: Array.prototype.concat(o2.attrs, n2).filter(Boolean) }));
        }, s2;
      }(qe, e2);
    };
    ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e2) {
      He[e2] = He(e2);
    });
    $e = function() {
      function e2(e3, t3) {
        this.rules = e3, this.componentId = t3, this.isStatic = re(e3), Z.registerId(this.componentId + 1);
      }
      var t2 = e2.prototype;
      return t2.createStyles = function(e3, t3, n2, r2) {
        var o2 = r2(Ne(this.rules, t3, n2, r2).join(""), ""), s2 = this.componentId + e3;
        n2.insertRules(s2, s2, o2);
      }, t2.removeStyles = function(e3, t3) {
        t3.clearRules(this.componentId + e3);
      }, t2.renderStyles = function(e3, t3, n2, r2) {
        e3 > 2 && Z.registerId(this.componentId + e3), this.removeStyles(e3, n2), this.createStyles(e3, t3, n2, r2);
      }, e2;
    }();
    Je = function() {
      function e2() {
        var e3 = this;
        this._emitSheetCSS = function() {
          var t3 = e3.instance.toString();
          if (!t3)
            return "";
          var n2 = q();
          return "<style " + [n2 && 'nonce="' + n2 + '"', A + '="true"', 'data-styled-version="5.3.5"'].filter(Boolean).join(" ") + ">" + t3 + "</style>";
        }, this.getStyleTags = function() {
          return e3.sealed ? j(2) : e3._emitSheetCSS();
        }, this.getStyleElement = function() {
          var t3;
          if (e3.sealed)
            return j(2);
          var n2 = ((t3 = {})[A] = "", t3["data-styled-version"] = "5.3.5", t3.dangerouslySetInnerHTML = { __html: e3.instance.toString() }, t3), o2 = q();
          return o2 && (n2.nonce = o2), [import_react2.default.createElement("style", v({}, n2, { key: "sc-0-0" }))];
        }, this.seal = function() {
          e3.sealed = true;
        }, this.instance = new Z({ isServer: true }), this.sealed = false;
      }
      var t2 = e2.prototype;
      return t2.collectStyles = function(e3) {
        return this.sealed ? j(2) : import_react2.default.createElement(ye, { sheet: this.instance }, e3);
      }, t2.interleaveWithNodeStream = function(e3) {
        return j(3);
      }, e2;
    }();
    Xe = function(e2) {
      var t2 = import_react2.default.forwardRef(function(t3, n2) {
        var o2 = (0, import_react2.useContext)(Ge), i3 = e2.defaultProps, a2 = Re(t3, o2, i3);
        return false, import_react2.default.createElement(e2, v({}, t3, { theme: a2, ref: n2 }));
      });
      return (0, import_hoist_non_react_statics.default)(t2, e2), t2.displayName = "WithTheme(" + _(e2) + ")", t2;
    };
    Ze = function() {
      return (0, import_react2.useContext)(Ge);
    };
    Ke = { StyleSheet: Z, masterSheet: he };
    styled_components_browser_esm_default = He;
  }
});

// ../../node_modules/react-dom/cjs/react-dom.production.min.js
var require_react_dom_production_min = __commonJS({
  "../../node_modules/react-dom/cjs/react-dom.production.min.js"(exports2) {
    "use strict";
    var aa = require_react();
    var m2 = require_object_assign();
    var r2 = require_scheduler();
    function y2(a2) {
      for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
        b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
      return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    if (!aa)
      throw Error(y2(227));
    var ba = new Set();
    var ca = {};
    function da(a2, b2) {
      ea(a2, b2);
      ea(a2 + "Capture", b2);
    }
    function ea(a2, b2) {
      ca[a2] = b2;
      for (a2 = 0; a2 < b2.length; a2++)
        ba.add(b2[a2]);
    }
    var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
    var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var ia = Object.prototype.hasOwnProperty;
    var ja = {};
    var ka = {};
    function la(a2) {
      if (ia.call(ka, a2))
        return true;
      if (ia.call(ja, a2))
        return false;
      if (ha.test(a2))
        return ka[a2] = true;
      ja[a2] = true;
      return false;
    }
    function ma(a2, b2, c2, d2) {
      if (c2 !== null && c2.type === 0)
        return false;
      switch (typeof b2) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d2)
            return false;
          if (c2 !== null)
            return !c2.acceptsBooleans;
          a2 = a2.toLowerCase().slice(0, 5);
          return a2 !== "data-" && a2 !== "aria-";
        default:
          return false;
      }
    }
    function na(a2, b2, c2, d2) {
      if (b2 === null || typeof b2 === "undefined" || ma(a2, b2, c2, d2))
        return true;
      if (d2)
        return false;
      if (c2 !== null)
        switch (c2.type) {
          case 3:
            return !b2;
          case 4:
            return b2 === false;
          case 5:
            return isNaN(b2);
          case 6:
            return isNaN(b2) || 1 > b2;
        }
      return false;
    }
    function B2(a2, b2, c2, d2, e2, f, g2) {
      this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
      this.attributeName = d2;
      this.attributeNamespace = e2;
      this.mustUseProperty = c2;
      this.propertyName = a2;
      this.type = b2;
      this.sanitizeURL = f;
      this.removeEmptyString = g2;
    }
    var D = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
      D[a2] = new B2(a2, 0, false, a2, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
      var b2 = a2[0];
      D[b2] = new B2(b2, 1, false, a2[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
      D[a2] = new B2(a2, 2, false, a2.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
      D[a2] = new B2(a2, 2, false, a2, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
      D[a2] = new B2(a2, 3, false, a2.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a2) {
      D[a2] = new B2(a2, 3, true, a2, null, false, false);
    });
    ["capture", "download"].forEach(function(a2) {
      D[a2] = new B2(a2, 4, false, a2, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a2) {
      D[a2] = new B2(a2, 6, false, a2, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a2) {
      D[a2] = new B2(a2, 5, false, a2.toLowerCase(), null, false, false);
    });
    var oa = /[\-:]([a-z])/g;
    function pa(a2) {
      return a2[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
      var b2 = a2.replace(oa, pa);
      D[b2] = new B2(b2, 1, false, a2, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
      var b2 = a2.replace(oa, pa);
      D[b2] = new B2(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
      var b2 = a2.replace(oa, pa);
      D[b2] = new B2(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a2) {
      D[a2] = new B2(a2, 1, false, a2.toLowerCase(), null, false, false);
    });
    D.xlinkHref = new B2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a2) {
      D[a2] = new B2(a2, 1, false, a2.toLowerCase(), null, true, true);
    });
    function qa(a2, b2, c2, d2) {
      var e2 = D.hasOwnProperty(b2) ? D[b2] : null;
      var f = e2 !== null ? e2.type === 0 : d2 ? false : !(2 < b2.length) || b2[0] !== "o" && b2[0] !== "O" || b2[1] !== "n" && b2[1] !== "N" ? false : true;
      f || (na(b2, c2, e2, d2) && (c2 = null), d2 || e2 === null ? la(b2) && (c2 === null ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = c2 === null ? e2.type === 3 ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, c2 === null ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = e2 === 3 || e2 === 4 && c2 === true ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2))));
    }
    var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    var sa = 60103;
    var ta = 60106;
    var ua = 60107;
    var wa = 60108;
    var xa = 60114;
    var ya = 60109;
    var za = 60110;
    var Aa = 60112;
    var Ba = 60113;
    var Ca = 60120;
    var Da = 60115;
    var Ea = 60116;
    var Fa = 60121;
    var Ga = 60128;
    var Ha = 60129;
    var Ia = 60130;
    var Ja = 60131;
    if (typeof Symbol === "function" && Symbol.for) {
      E2 = Symbol.for;
      sa = E2("react.element");
      ta = E2("react.portal");
      ua = E2("react.fragment");
      wa = E2("react.strict_mode");
      xa = E2("react.profiler");
      ya = E2("react.provider");
      za = E2("react.context");
      Aa = E2("react.forward_ref");
      Ba = E2("react.suspense");
      Ca = E2("react.suspense_list");
      Da = E2("react.memo");
      Ea = E2("react.lazy");
      Fa = E2("react.block");
      E2("react.scope");
      Ga = E2("react.opaque.id");
      Ha = E2("react.debug_trace_mode");
      Ia = E2("react.offscreen");
      Ja = E2("react.legacy_hidden");
    }
    var E2;
    var Ka = typeof Symbol === "function" && Symbol.iterator;
    function La(a2) {
      if (a2 === null || typeof a2 !== "object")
        return null;
      a2 = Ka && a2[Ka] || a2["@@iterator"];
      return typeof a2 === "function" ? a2 : null;
    }
    var Ma;
    function Na(a2) {
      if (Ma === void 0)
        try {
          throw Error();
        } catch (c2) {
          var b2 = c2.stack.trim().match(/\n( *(at )?)/);
          Ma = b2 && b2[1] || "";
        }
      return "\n" + Ma + a2;
    }
    var Oa = false;
    function Pa(a2, b2) {
      if (!a2 || Oa)
        return "";
      Oa = true;
      var c2 = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (b2)
          if (b2 = function() {
            throw Error();
          }, Object.defineProperty(b2.prototype, "props", { set: function() {
            throw Error();
          } }), typeof Reflect === "object" && Reflect.construct) {
            try {
              Reflect.construct(b2, []);
            } catch (k2) {
              var d2 = k2;
            }
            Reflect.construct(a2, [], b2);
          } else {
            try {
              b2.call();
            } catch (k2) {
              d2 = k2;
            }
            a2.call(b2.prototype);
          }
        else {
          try {
            throw Error();
          } catch (k2) {
            d2 = k2;
          }
          a2();
        }
      } catch (k2) {
        if (k2 && d2 && typeof k2.stack === "string") {
          for (var e2 = k2.stack.split("\n"), f = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f[h2]; )
            h2--;
          for (; 1 <= g2 && 0 <= h2; g2--, h2--)
            if (e2[g2] !== f[h2]) {
              if (g2 !== 1 || h2 !== 1) {
                do
                  if (g2--, h2--, 0 > h2 || e2[g2] !== f[h2])
                    return "\n" + e2[g2].replace(" at new ", " at ");
                while (1 <= g2 && 0 <= h2);
              }
              break;
            }
        }
      } finally {
        Oa = false, Error.prepareStackTrace = c2;
      }
      return (a2 = a2 ? a2.displayName || a2.name : "") ? Na(a2) : "";
    }
    function Qa(a2) {
      switch (a2.tag) {
        case 5:
          return Na(a2.type);
        case 16:
          return Na("Lazy");
        case 13:
          return Na("Suspense");
        case 19:
          return Na("SuspenseList");
        case 0:
        case 2:
        case 15:
          return a2 = Pa(a2.type, false), a2;
        case 11:
          return a2 = Pa(a2.type.render, false), a2;
        case 22:
          return a2 = Pa(a2.type._render, false), a2;
        case 1:
          return a2 = Pa(a2.type, true), a2;
        default:
          return "";
      }
    }
    function Ra(a2) {
      if (a2 == null)
        return null;
      if (typeof a2 === "function")
        return a2.displayName || a2.name || null;
      if (typeof a2 === "string")
        return a2;
      switch (a2) {
        case ua:
          return "Fragment";
        case ta:
          return "Portal";
        case xa:
          return "Profiler";
        case wa:
          return "StrictMode";
        case Ba:
          return "Suspense";
        case Ca:
          return "SuspenseList";
      }
      if (typeof a2 === "object")
        switch (a2.$$typeof) {
          case za:
            return (a2.displayName || "Context") + ".Consumer";
          case ya:
            return (a2._context.displayName || "Context") + ".Provider";
          case Aa:
            var b2 = a2.render;
            b2 = b2.displayName || b2.name || "";
            return a2.displayName || (b2 !== "" ? "ForwardRef(" + b2 + ")" : "ForwardRef");
          case Da:
            return Ra(a2.type);
          case Fa:
            return Ra(a2._render);
          case Ea:
            b2 = a2._payload;
            a2 = a2._init;
            try {
              return Ra(a2(b2));
            } catch (c2) {
            }
        }
      return null;
    }
    function Sa(a2) {
      switch (typeof a2) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return a2;
        default:
          return "";
      }
    }
    function Ta(a2) {
      var b2 = a2.type;
      return (a2 = a2.nodeName) && a2.toLowerCase() === "input" && (b2 === "checkbox" || b2 === "radio");
    }
    function Ua(a2) {
      var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
      if (!a2.hasOwnProperty(b2) && typeof c2 !== "undefined" && typeof c2.get === "function" && typeof c2.set === "function") {
        var e2 = c2.get, f = c2.set;
        Object.defineProperty(a2, b2, { configurable: true, get: function() {
          return e2.call(this);
        }, set: function(a3) {
          d2 = "" + a3;
          f.call(this, a3);
        } });
        Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
        return { getValue: function() {
          return d2;
        }, setValue: function(a3) {
          d2 = "" + a3;
        }, stopTracking: function() {
          a2._valueTracker = null;
          delete a2[b2];
        } };
      }
    }
    function Va(a2) {
      a2._valueTracker || (a2._valueTracker = Ua(a2));
    }
    function Wa(a2) {
      if (!a2)
        return false;
      var b2 = a2._valueTracker;
      if (!b2)
        return true;
      var c2 = b2.getValue();
      var d2 = "";
      a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
      a2 = d2;
      return a2 !== c2 ? (b2.setValue(a2), true) : false;
    }
    function Xa(a2) {
      a2 = a2 || (typeof document !== "undefined" ? document : void 0);
      if (typeof a2 === "undefined")
        return null;
      try {
        return a2.activeElement || a2.body;
      } catch (b2) {
        return a2.body;
      }
    }
    function Ya(a2, b2) {
      var c2 = b2.checked;
      return m2({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c2 != null ? c2 : a2._wrapperState.initialChecked });
    }
    function Za(a2, b2) {
      var c2 = b2.defaultValue == null ? "" : b2.defaultValue, d2 = b2.checked != null ? b2.checked : b2.defaultChecked;
      c2 = Sa(b2.value != null ? b2.value : c2);
      a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: b2.type === "checkbox" || b2.type === "radio" ? b2.checked != null : b2.value != null };
    }
    function $a(a2, b2) {
      b2 = b2.checked;
      b2 != null && qa(a2, "checked", b2, false);
    }
    function ab(a2, b2) {
      $a(a2, b2);
      var c2 = Sa(b2.value), d2 = b2.type;
      if (c2 != null)
        if (d2 === "number") {
          if (c2 === 0 && a2.value === "" || a2.value != c2)
            a2.value = "" + c2;
        } else
          a2.value !== "" + c2 && (a2.value = "" + c2);
      else if (d2 === "submit" || d2 === "reset") {
        a2.removeAttribute("value");
        return;
      }
      b2.hasOwnProperty("value") ? bb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && bb(a2, b2.type, Sa(b2.defaultValue));
      b2.checked == null && b2.defaultChecked != null && (a2.defaultChecked = !!b2.defaultChecked);
    }
    function cb(a2, b2, c2) {
      if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
        var d2 = b2.type;
        if (!(d2 !== "submit" && d2 !== "reset" || b2.value !== void 0 && b2.value !== null))
          return;
        b2 = "" + a2._wrapperState.initialValue;
        c2 || b2 === a2.value || (a2.value = b2);
        a2.defaultValue = b2;
      }
      c2 = a2.name;
      c2 !== "" && (a2.name = "");
      a2.defaultChecked = !!a2._wrapperState.initialChecked;
      c2 !== "" && (a2.name = c2);
    }
    function bb(a2, b2, c2) {
      if (b2 !== "number" || Xa(a2.ownerDocument) !== a2)
        c2 == null ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
    }
    function db(a2) {
      var b2 = "";
      aa.Children.forEach(a2, function(a3) {
        a3 != null && (b2 += a3);
      });
      return b2;
    }
    function eb(a2, b2) {
      a2 = m2({ children: void 0 }, b2);
      if (b2 = db(b2.children))
        a2.children = b2;
      return a2;
    }
    function fb(a2, b2, c2, d2) {
      a2 = a2.options;
      if (b2) {
        b2 = {};
        for (var e2 = 0; e2 < c2.length; e2++)
          b2["$" + c2[e2]] = true;
        for (c2 = 0; c2 < a2.length; c2++)
          e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
      } else {
        c2 = "" + Sa(c2);
        b2 = null;
        for (e2 = 0; e2 < a2.length; e2++) {
          if (a2[e2].value === c2) {
            a2[e2].selected = true;
            d2 && (a2[e2].defaultSelected = true);
            return;
          }
          b2 !== null || a2[e2].disabled || (b2 = a2[e2]);
        }
        b2 !== null && (b2.selected = true);
      }
    }
    function gb(a2, b2) {
      if (b2.dangerouslySetInnerHTML != null)
        throw Error(y2(91));
      return m2({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
    }
    function hb(a2, b2) {
      var c2 = b2.value;
      if (c2 == null) {
        c2 = b2.children;
        b2 = b2.defaultValue;
        if (c2 != null) {
          if (b2 != null)
            throw Error(y2(92));
          if (Array.isArray(c2)) {
            if (!(1 >= c2.length))
              throw Error(y2(93));
            c2 = c2[0];
          }
          b2 = c2;
        }
        b2 == null && (b2 = "");
        c2 = b2;
      }
      a2._wrapperState = { initialValue: Sa(c2) };
    }
    function ib(a2, b2) {
      var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
      c2 != null && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), b2.defaultValue == null && a2.defaultValue !== c2 && (a2.defaultValue = c2));
      d2 != null && (a2.defaultValue = "" + d2);
    }
    function jb(a2) {
      var b2 = a2.textContent;
      b2 === a2._wrapperState.initialValue && b2 !== "" && b2 !== null && (a2.value = b2);
    }
    var kb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
    function lb(a2) {
      switch (a2) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function mb(a2, b2) {
      return a2 == null || a2 === "http://www.w3.org/1999/xhtml" ? lb(b2) : a2 === "http://www.w3.org/2000/svg" && b2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a2;
    }
    var nb;
    var ob = function(a2) {
      return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
        MSApp.execUnsafeLocalFunction(function() {
          return a2(b2, c2, d2, e2);
        });
      } : a2;
    }(function(a2, b2) {
      if (a2.namespaceURI !== kb.svg || "innerHTML" in a2)
        a2.innerHTML = b2;
      else {
        nb = nb || document.createElement("div");
        nb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
        for (b2 = nb.firstChild; a2.firstChild; )
          a2.removeChild(a2.firstChild);
        for (; b2.firstChild; )
          a2.appendChild(b2.firstChild);
      }
    });
    function pb(a2, b2) {
      if (b2) {
        var c2 = a2.firstChild;
        if (c2 && c2 === a2.lastChild && c2.nodeType === 3) {
          c2.nodeValue = b2;
          return;
        }
      }
      a2.textContent = b2;
    }
    var qb = {
      animationIterationCount: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var rb = ["Webkit", "ms", "Moz", "O"];
    Object.keys(qb).forEach(function(a2) {
      rb.forEach(function(b2) {
        b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
        qb[b2] = qb[a2];
      });
    });
    function sb(a2, b2, c2) {
      return b2 == null || typeof b2 === "boolean" || b2 === "" ? "" : c2 || typeof b2 !== "number" || b2 === 0 || qb.hasOwnProperty(a2) && qb[a2] ? ("" + b2).trim() : b2 + "px";
    }
    function tb(a2, b2) {
      a2 = a2.style;
      for (var c2 in b2)
        if (b2.hasOwnProperty(c2)) {
          var d2 = c2.indexOf("--") === 0, e2 = sb(c2, b2[c2], d2);
          c2 === "float" && (c2 = "cssFloat");
          d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
        }
    }
    var ub = m2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function vb(a2, b2) {
      if (b2) {
        if (ub[a2] && (b2.children != null || b2.dangerouslySetInnerHTML != null))
          throw Error(y2(137, a2));
        if (b2.dangerouslySetInnerHTML != null) {
          if (b2.children != null)
            throw Error(y2(60));
          if (!(typeof b2.dangerouslySetInnerHTML === "object" && "__html" in b2.dangerouslySetInnerHTML))
            throw Error(y2(61));
        }
        if (b2.style != null && typeof b2.style !== "object")
          throw Error(y2(62));
      }
    }
    function wb(a2, b2) {
      if (a2.indexOf("-") === -1)
        return typeof b2.is === "string";
      switch (a2) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    function xb(a2) {
      a2 = a2.target || a2.srcElement || window;
      a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
      return a2.nodeType === 3 ? a2.parentNode : a2;
    }
    var yb = null;
    var zb = null;
    var Ab = null;
    function Bb(a2) {
      if (a2 = Cb(a2)) {
        if (typeof yb !== "function")
          throw Error(y2(280));
        var b2 = a2.stateNode;
        b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
      }
    }
    function Eb(a2) {
      zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
    }
    function Fb() {
      if (zb) {
        var a2 = zb, b2 = Ab;
        Ab = zb = null;
        Bb(a2);
        if (b2)
          for (a2 = 0; a2 < b2.length; a2++)
            Bb(b2[a2]);
      }
    }
    function Gb(a2, b2) {
      return a2(b2);
    }
    function Hb(a2, b2, c2, d2, e2) {
      return a2(b2, c2, d2, e2);
    }
    function Ib() {
    }
    var Jb = Gb;
    var Kb = false;
    var Lb = false;
    function Mb() {
      if (zb !== null || Ab !== null)
        Ib(), Fb();
    }
    function Nb(a2, b2, c2) {
      if (Lb)
        return a2(b2, c2);
      Lb = true;
      try {
        return Jb(a2, b2, c2);
      } finally {
        Lb = false, Mb();
      }
    }
    function Ob(a2, b2) {
      var c2 = a2.stateNode;
      if (c2 === null)
        return null;
      var d2 = Db(c2);
      if (d2 === null)
        return null;
      c2 = d2[b2];
      a:
        switch (b2) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d2 = !d2.disabled) || (a2 = a2.type, d2 = !(a2 === "button" || a2 === "input" || a2 === "select" || a2 === "textarea"));
            a2 = !d2;
            break a;
          default:
            a2 = false;
        }
      if (a2)
        return null;
      if (c2 && typeof c2 !== "function")
        throw Error(y2(231, b2, typeof c2));
      return c2;
    }
    var Pb = false;
    if (fa)
      try {
        Qb = {};
        Object.defineProperty(Qb, "passive", { get: function() {
          Pb = true;
        } });
        window.addEventListener("test", Qb, Qb);
        window.removeEventListener("test", Qb, Qb);
      } catch (a2) {
        Pb = false;
      }
    var Qb;
    function Rb(a2, b2, c2, d2, e2, f, g2, h2, k2) {
      var l2 = Array.prototype.slice.call(arguments, 3);
      try {
        b2.apply(c2, l2);
      } catch (n2) {
        this.onError(n2);
      }
    }
    var Sb = false;
    var Tb = null;
    var Ub = false;
    var Vb = null;
    var Wb = { onError: function(a2) {
      Sb = true;
      Tb = a2;
    } };
    function Xb(a2, b2, c2, d2, e2, f, g2, h2, k2) {
      Sb = false;
      Tb = null;
      Rb.apply(Wb, arguments);
    }
    function Yb(a2, b2, c2, d2, e2, f, g2, h2, k2) {
      Xb.apply(this, arguments);
      if (Sb) {
        if (Sb) {
          var l2 = Tb;
          Sb = false;
          Tb = null;
        } else
          throw Error(y2(198));
        Ub || (Ub = true, Vb = l2);
      }
    }
    function Zb(a2) {
      var b2 = a2, c2 = a2;
      if (a2.alternate)
        for (; b2.return; )
          b2 = b2.return;
      else {
        a2 = b2;
        do
          b2 = a2, (b2.flags & 1026) !== 0 && (c2 = b2.return), a2 = b2.return;
        while (a2);
      }
      return b2.tag === 3 ? c2 : null;
    }
    function $b(a2) {
      if (a2.tag === 13) {
        var b2 = a2.memoizedState;
        b2 === null && (a2 = a2.alternate, a2 !== null && (b2 = a2.memoizedState));
        if (b2 !== null)
          return b2.dehydrated;
      }
      return null;
    }
    function ac(a2) {
      if (Zb(a2) !== a2)
        throw Error(y2(188));
    }
    function bc(a2) {
      var b2 = a2.alternate;
      if (!b2) {
        b2 = Zb(a2);
        if (b2 === null)
          throw Error(y2(188));
        return b2 !== a2 ? null : a2;
      }
      for (var c2 = a2, d2 = b2; ; ) {
        var e2 = c2.return;
        if (e2 === null)
          break;
        var f = e2.alternate;
        if (f === null) {
          d2 = e2.return;
          if (d2 !== null) {
            c2 = d2;
            continue;
          }
          break;
        }
        if (e2.child === f.child) {
          for (f = e2.child; f; ) {
            if (f === c2)
              return ac(e2), a2;
            if (f === d2)
              return ac(e2), b2;
            f = f.sibling;
          }
          throw Error(y2(188));
        }
        if (c2.return !== d2.return)
          c2 = e2, d2 = f;
        else {
          for (var g2 = false, h2 = e2.child; h2; ) {
            if (h2 === c2) {
              g2 = true;
              c2 = e2;
              d2 = f;
              break;
            }
            if (h2 === d2) {
              g2 = true;
              d2 = e2;
              c2 = f;
              break;
            }
            h2 = h2.sibling;
          }
          if (!g2) {
            for (h2 = f.child; h2; ) {
              if (h2 === c2) {
                g2 = true;
                c2 = f;
                d2 = e2;
                break;
              }
              if (h2 === d2) {
                g2 = true;
                d2 = f;
                c2 = e2;
                break;
              }
              h2 = h2.sibling;
            }
            if (!g2)
              throw Error(y2(189));
          }
        }
        if (c2.alternate !== d2)
          throw Error(y2(190));
      }
      if (c2.tag !== 3)
        throw Error(y2(188));
      return c2.stateNode.current === c2 ? a2 : b2;
    }
    function cc(a2) {
      a2 = bc(a2);
      if (!a2)
        return null;
      for (var b2 = a2; ; ) {
        if (b2.tag === 5 || b2.tag === 6)
          return b2;
        if (b2.child)
          b2.child.return = b2, b2 = b2.child;
        else {
          if (b2 === a2)
            break;
          for (; !b2.sibling; ) {
            if (!b2.return || b2.return === a2)
              return null;
            b2 = b2.return;
          }
          b2.sibling.return = b2.return;
          b2 = b2.sibling;
        }
      }
      return null;
    }
    function dc(a2, b2) {
      for (var c2 = a2.alternate; b2 !== null; ) {
        if (b2 === a2 || b2 === c2)
          return true;
        b2 = b2.return;
      }
      return false;
    }
    var ec;
    var fc;
    var gc;
    var hc;
    var ic = false;
    var jc = [];
    var kc = null;
    var lc = null;
    var mc = null;
    var nc = new Map();
    var oc = new Map();
    var pc = [];
    var qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function rc(a2, b2, c2, d2, e2) {
      return { blockedOn: a2, domEventName: b2, eventSystemFlags: c2 | 16, nativeEvent: e2, targetContainers: [d2] };
    }
    function sc(a2, b2) {
      switch (a2) {
        case "focusin":
        case "focusout":
          kc = null;
          break;
        case "dragenter":
        case "dragleave":
          lc = null;
          break;
        case "mouseover":
        case "mouseout":
          mc = null;
          break;
        case "pointerover":
        case "pointerout":
          nc.delete(b2.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          oc.delete(b2.pointerId);
      }
    }
    function tc(a2, b2, c2, d2, e2, f) {
      if (a2 === null || a2.nativeEvent !== f)
        return a2 = rc(b2, c2, d2, e2, f), b2 !== null && (b2 = Cb(b2), b2 !== null && fc(b2)), a2;
      a2.eventSystemFlags |= d2;
      b2 = a2.targetContainers;
      e2 !== null && b2.indexOf(e2) === -1 && b2.push(e2);
      return a2;
    }
    function uc(a2, b2, c2, d2, e2) {
      switch (b2) {
        case "focusin":
          return kc = tc(kc, a2, b2, c2, d2, e2), true;
        case "dragenter":
          return lc = tc(lc, a2, b2, c2, d2, e2), true;
        case "mouseover":
          return mc = tc(mc, a2, b2, c2, d2, e2), true;
        case "pointerover":
          var f = e2.pointerId;
          nc.set(f, tc(nc.get(f) || null, a2, b2, c2, d2, e2));
          return true;
        case "gotpointercapture":
          return f = e2.pointerId, oc.set(f, tc(oc.get(f) || null, a2, b2, c2, d2, e2)), true;
      }
      return false;
    }
    function vc(a2) {
      var b2 = wc(a2.target);
      if (b2 !== null) {
        var c2 = Zb(b2);
        if (c2 !== null) {
          if (b2 = c2.tag, b2 === 13) {
            if (b2 = $b(c2), b2 !== null) {
              a2.blockedOn = b2;
              hc(a2.lanePriority, function() {
                r2.unstable_runWithPriority(a2.priority, function() {
                  gc(c2);
                });
              });
              return;
            }
          } else if (b2 === 3 && c2.stateNode.hydrate) {
            a2.blockedOn = c2.tag === 3 ? c2.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a2.blockedOn = null;
    }
    function xc(a2) {
      if (a2.blockedOn !== null)
        return false;
      for (var b2 = a2.targetContainers; 0 < b2.length; ) {
        var c2 = yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
        if (c2 !== null)
          return b2 = Cb(c2), b2 !== null && fc(b2), a2.blockedOn = c2, false;
        b2.shift();
      }
      return true;
    }
    function zc(a2, b2, c2) {
      xc(a2) && c2.delete(b2);
    }
    function Ac() {
      for (ic = false; 0 < jc.length; ) {
        var a2 = jc[0];
        if (a2.blockedOn !== null) {
          a2 = Cb(a2.blockedOn);
          a2 !== null && ec(a2);
          break;
        }
        for (var b2 = a2.targetContainers; 0 < b2.length; ) {
          var c2 = yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
          if (c2 !== null) {
            a2.blockedOn = c2;
            break;
          }
          b2.shift();
        }
        a2.blockedOn === null && jc.shift();
      }
      kc !== null && xc(kc) && (kc = null);
      lc !== null && xc(lc) && (lc = null);
      mc !== null && xc(mc) && (mc = null);
      nc.forEach(zc);
      oc.forEach(zc);
    }
    function Bc(a2, b2) {
      a2.blockedOn === b2 && (a2.blockedOn = null, ic || (ic = true, r2.unstable_scheduleCallback(r2.unstable_NormalPriority, Ac)));
    }
    function Cc(a2) {
      function b2(b3) {
        return Bc(b3, a2);
      }
      if (0 < jc.length) {
        Bc(jc[0], a2);
        for (var c2 = 1; c2 < jc.length; c2++) {
          var d2 = jc[c2];
          d2.blockedOn === a2 && (d2.blockedOn = null);
        }
      }
      kc !== null && Bc(kc, a2);
      lc !== null && Bc(lc, a2);
      mc !== null && Bc(mc, a2);
      nc.forEach(b2);
      oc.forEach(b2);
      for (c2 = 0; c2 < pc.length; c2++)
        d2 = pc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
      for (; 0 < pc.length && (c2 = pc[0], c2.blockedOn === null); )
        vc(c2), c2.blockedOn === null && pc.shift();
    }
    function Dc(a2, b2) {
      var c2 = {};
      c2[a2.toLowerCase()] = b2.toLowerCase();
      c2["Webkit" + a2] = "webkit" + b2;
      c2["Moz" + a2] = "moz" + b2;
      return c2;
    }
    var Ec = { animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd") };
    var Fc = {};
    var Gc = {};
    fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
    function Hc(a2) {
      if (Fc[a2])
        return Fc[a2];
      if (!Ec[a2])
        return a2;
      var b2 = Ec[a2], c2;
      for (c2 in b2)
        if (b2.hasOwnProperty(c2) && c2 in Gc)
          return Fc[a2] = b2[c2];
      return a2;
    }
    var Ic = Hc("animationend");
    var Jc = Hc("animationiteration");
    var Kc = Hc("animationstart");
    var Lc = Hc("transitionend");
    var Mc = new Map();
    var Nc = new Map();
    var Oc = [
      "abort",
      "abort",
      Ic,
      "animationEnd",
      Jc,
      "animationIteration",
      Kc,
      "animationStart",
      "canplay",
      "canPlay",
      "canplaythrough",
      "canPlayThrough",
      "durationchange",
      "durationChange",
      "emptied",
      "emptied",
      "encrypted",
      "encrypted",
      "ended",
      "ended",
      "error",
      "error",
      "gotpointercapture",
      "gotPointerCapture",
      "load",
      "load",
      "loadeddata",
      "loadedData",
      "loadedmetadata",
      "loadedMetadata",
      "loadstart",
      "loadStart",
      "lostpointercapture",
      "lostPointerCapture",
      "playing",
      "playing",
      "progress",
      "progress",
      "seeking",
      "seeking",
      "stalled",
      "stalled",
      "suspend",
      "suspend",
      "timeupdate",
      "timeUpdate",
      Lc,
      "transitionEnd",
      "waiting",
      "waiting"
    ];
    function Pc(a2, b2) {
      for (var c2 = 0; c2 < a2.length; c2 += 2) {
        var d2 = a2[c2], e2 = a2[c2 + 1];
        e2 = "on" + (e2[0].toUpperCase() + e2.slice(1));
        Nc.set(d2, b2);
        Mc.set(d2, e2);
        da(e2, [d2]);
      }
    }
    var Qc = r2.unstable_now;
    Qc();
    var F2 = 8;
    function Rc(a2) {
      if ((1 & a2) !== 0)
        return F2 = 15, 1;
      if ((2 & a2) !== 0)
        return F2 = 14, 2;
      if ((4 & a2) !== 0)
        return F2 = 13, 4;
      var b2 = 24 & a2;
      if (b2 !== 0)
        return F2 = 12, b2;
      if ((a2 & 32) !== 0)
        return F2 = 11, 32;
      b2 = 192 & a2;
      if (b2 !== 0)
        return F2 = 10, b2;
      if ((a2 & 256) !== 0)
        return F2 = 9, 256;
      b2 = 3584 & a2;
      if (b2 !== 0)
        return F2 = 8, b2;
      if ((a2 & 4096) !== 0)
        return F2 = 7, 4096;
      b2 = 4186112 & a2;
      if (b2 !== 0)
        return F2 = 6, b2;
      b2 = 62914560 & a2;
      if (b2 !== 0)
        return F2 = 5, b2;
      if (a2 & 67108864)
        return F2 = 4, 67108864;
      if ((a2 & 134217728) !== 0)
        return F2 = 3, 134217728;
      b2 = 805306368 & a2;
      if (b2 !== 0)
        return F2 = 2, b2;
      if ((1073741824 & a2) !== 0)
        return F2 = 1, 1073741824;
      F2 = 8;
      return a2;
    }
    function Sc(a2) {
      switch (a2) {
        case 99:
          return 15;
        case 98:
          return 10;
        case 97:
        case 96:
          return 8;
        case 95:
          return 2;
        default:
          return 0;
      }
    }
    function Tc(a2) {
      switch (a2) {
        case 15:
        case 14:
          return 99;
        case 13:
        case 12:
        case 11:
        case 10:
          return 98;
        case 9:
        case 8:
        case 7:
        case 6:
        case 4:
        case 5:
          return 97;
        case 3:
        case 2:
        case 1:
          return 95;
        case 0:
          return 90;
        default:
          throw Error(y2(358, a2));
      }
    }
    function Uc(a2, b2) {
      var c2 = a2.pendingLanes;
      if (c2 === 0)
        return F2 = 0;
      var d2 = 0, e2 = 0, f = a2.expiredLanes, g2 = a2.suspendedLanes, h2 = a2.pingedLanes;
      if (f !== 0)
        d2 = f, e2 = F2 = 15;
      else if (f = c2 & 134217727, f !== 0) {
        var k2 = f & ~g2;
        k2 !== 0 ? (d2 = Rc(k2), e2 = F2) : (h2 &= f, h2 !== 0 && (d2 = Rc(h2), e2 = F2));
      } else
        f = c2 & ~g2, f !== 0 ? (d2 = Rc(f), e2 = F2) : h2 !== 0 && (d2 = Rc(h2), e2 = F2);
      if (d2 === 0)
        return 0;
      d2 = 31 - Vc(d2);
      d2 = c2 & ((0 > d2 ? 0 : 1 << d2) << 1) - 1;
      if (b2 !== 0 && b2 !== d2 && (b2 & g2) === 0) {
        Rc(b2);
        if (e2 <= F2)
          return b2;
        F2 = e2;
      }
      b2 = a2.entangledLanes;
      if (b2 !== 0)
        for (a2 = a2.entanglements, b2 &= d2; 0 < b2; )
          c2 = 31 - Vc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
      return d2;
    }
    function Wc(a2) {
      a2 = a2.pendingLanes & -1073741825;
      return a2 !== 0 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
    }
    function Xc(a2, b2) {
      switch (a2) {
        case 15:
          return 1;
        case 14:
          return 2;
        case 12:
          return a2 = Yc(24 & ~b2), a2 === 0 ? Xc(10, b2) : a2;
        case 10:
          return a2 = Yc(192 & ~b2), a2 === 0 ? Xc(8, b2) : a2;
        case 8:
          return a2 = Yc(3584 & ~b2), a2 === 0 && (a2 = Yc(4186112 & ~b2), a2 === 0 && (a2 = 512)), a2;
        case 2:
          return b2 = Yc(805306368 & ~b2), b2 === 0 && (b2 = 268435456), b2;
      }
      throw Error(y2(358, a2));
    }
    function Yc(a2) {
      return a2 & -a2;
    }
    function Zc(a2) {
      for (var b2 = [], c2 = 0; 31 > c2; c2++)
        b2.push(a2);
      return b2;
    }
    function $c(a2, b2, c2) {
      a2.pendingLanes |= b2;
      var d2 = b2 - 1;
      a2.suspendedLanes &= d2;
      a2.pingedLanes &= d2;
      a2 = a2.eventTimes;
      b2 = 31 - Vc(b2);
      a2[b2] = c2;
    }
    var Vc = Math.clz32 ? Math.clz32 : ad;
    var bd = Math.log;
    var cd = Math.LN2;
    function ad(a2) {
      return a2 === 0 ? 32 : 31 - (bd(a2) / cd | 0) | 0;
    }
    var dd = r2.unstable_UserBlockingPriority;
    var ed = r2.unstable_runWithPriority;
    var fd = true;
    function gd(a2, b2, c2, d2) {
      Kb || Ib();
      var e2 = hd, f = Kb;
      Kb = true;
      try {
        Hb(e2, a2, b2, c2, d2);
      } finally {
        (Kb = f) || Mb();
      }
    }
    function id(a2, b2, c2, d2) {
      ed(dd, hd.bind(null, a2, b2, c2, d2));
    }
    function hd(a2, b2, c2, d2) {
      if (fd) {
        var e2;
        if ((e2 = (b2 & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a2))
          a2 = rc(null, a2, b2, c2, d2), jc.push(a2);
        else {
          var f = yc(a2, b2, c2, d2);
          if (f === null)
            e2 && sc(a2, d2);
          else {
            if (e2) {
              if (-1 < qc.indexOf(a2)) {
                a2 = rc(f, a2, b2, c2, d2);
                jc.push(a2);
                return;
              }
              if (uc(f, a2, b2, c2, d2))
                return;
              sc(a2, d2);
            }
            jd(a2, b2, d2, null, c2);
          }
        }
      }
    }
    function yc(a2, b2, c2, d2) {
      var e2 = xb(d2);
      e2 = wc(e2);
      if (e2 !== null) {
        var f = Zb(e2);
        if (f === null)
          e2 = null;
        else {
          var g2 = f.tag;
          if (g2 === 13) {
            e2 = $b(f);
            if (e2 !== null)
              return e2;
            e2 = null;
          } else if (g2 === 3) {
            if (f.stateNode.hydrate)
              return f.tag === 3 ? f.stateNode.containerInfo : null;
            e2 = null;
          } else
            f !== e2 && (e2 = null);
        }
      }
      jd(a2, b2, d2, e2, c2);
      return null;
    }
    var kd = null;
    var ld = null;
    var md = null;
    function nd() {
      if (md)
        return md;
      var a2, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f = e2.length;
      for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++)
        ;
      var g2 = c2 - a2;
      for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f - d2]; d2++)
        ;
      return md = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
    }
    function od(a2) {
      var b2 = a2.keyCode;
      "charCode" in a2 ? (a2 = a2.charCode, a2 === 0 && b2 === 13 && (a2 = 13)) : a2 = b2;
      a2 === 10 && (a2 = 13);
      return 32 <= a2 || a2 === 13 ? a2 : 0;
    }
    function pd() {
      return true;
    }
    function qd() {
      return false;
    }
    function rd(a2) {
      function b2(b3, d2, e2, f, g2) {
        this._reactName = b3;
        this._targetInst = e2;
        this.type = d2;
        this.nativeEvent = f;
        this.target = g2;
        this.currentTarget = null;
        for (var c2 in a2)
          a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f) : f[c2]);
        this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === false) ? pd : qd;
        this.isPropagationStopped = qd;
        return this;
      }
      m2(b2.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a3 = this.nativeEvent;
        a3 && (a3.preventDefault ? a3.preventDefault() : typeof a3.returnValue !== "unknown" && (a3.returnValue = false), this.isDefaultPrevented = pd);
      }, stopPropagation: function() {
        var a3 = this.nativeEvent;
        a3 && (a3.stopPropagation ? a3.stopPropagation() : typeof a3.cancelBubble !== "unknown" && (a3.cancelBubble = true), this.isPropagationStopped = pd);
      }, persist: function() {
      }, isPersistent: pd });
      return b2;
    }
    var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
      return a2.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 };
    var td = rd(sd);
    var ud = m2({}, sd, { view: 0, detail: 0 });
    var vd = rd(ud);
    var wd;
    var xd;
    var yd;
    var Ad = m2({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
      return a2.relatedTarget === void 0 ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
    }, movementX: function(a2) {
      if ("movementX" in a2)
        return a2.movementX;
      a2 !== yd && (yd && a2.type === "mousemove" ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
      return wd;
    }, movementY: function(a2) {
      return "movementY" in a2 ? a2.movementY : xd;
    } });
    var Bd = rd(Ad);
    var Cd = m2({}, Ad, { dataTransfer: 0 });
    var Dd = rd(Cd);
    var Ed = m2({}, ud, { relatedTarget: 0 });
    var Fd = rd(Ed);
    var Gd = m2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
    var Hd = rd(Gd);
    var Id = m2({}, sd, { clipboardData: function(a2) {
      return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
    } });
    var Jd = rd(Id);
    var Kd = m2({}, sd, { data: 0 });
    var Ld = rd(Kd);
    var Md = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    };
    var Nd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Pd(a2) {
      var b2 = this.nativeEvent;
      return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
    }
    function zd() {
      return Pd;
    }
    var Qd = m2({}, ud, { key: function(a2) {
      if (a2.key) {
        var b2 = Md[a2.key] || a2.key;
        if (b2 !== "Unidentified")
          return b2;
      }
      return a2.type === "keypress" ? (a2 = od(a2), a2 === 13 ? "Enter" : String.fromCharCode(a2)) : a2.type === "keydown" || a2.type === "keyup" ? Nd[a2.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
      return a2.type === "keypress" ? od(a2) : 0;
    }, keyCode: function(a2) {
      return a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
    }, which: function(a2) {
      return a2.type === "keypress" ? od(a2) : a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
    } });
    var Rd = rd(Qd);
    var Sd = m2({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
    var Td = rd(Sd);
    var Ud = m2({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
    var Vd = rd(Ud);
    var Wd = m2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
    var Xd = rd(Wd);
    var Yd = m2({}, Ad, {
      deltaX: function(a2) {
        return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
      },
      deltaY: function(a2) {
        return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    });
    var Zd = rd(Yd);
    var $d = [9, 13, 27, 32];
    var ae2 = fa && "CompositionEvent" in window;
    var be2 = null;
    fa && "documentMode" in document && (be2 = document.documentMode);
    var ce2 = fa && "TextEvent" in window && !be2;
    var de2 = fa && (!ae2 || be2 && 8 < be2 && 11 >= be2);
    var ee2 = String.fromCharCode(32);
    var fe2 = false;
    function ge2(a2, b2) {
      switch (a2) {
        case "keyup":
          return $d.indexOf(b2.keyCode) !== -1;
        case "keydown":
          return b2.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function he2(a2) {
      a2 = a2.detail;
      return typeof a2 === "object" && "data" in a2 ? a2.data : null;
    }
    var ie2 = false;
    function je2(a2, b2) {
      switch (a2) {
        case "compositionend":
          return he2(b2);
        case "keypress":
          if (b2.which !== 32)
            return null;
          fe2 = true;
          return ee2;
        case "textInput":
          return a2 = b2.data, a2 === ee2 && fe2 ? null : a2;
        default:
          return null;
      }
    }
    function ke2(a2, b2) {
      if (ie2)
        return a2 === "compositionend" || !ae2 && ge2(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie2 = false, a2) : null;
      switch (a2) {
        case "paste":
          return null;
        case "keypress":
          if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
            if (b2.char && 1 < b2.char.length)
              return b2.char;
            if (b2.which)
              return String.fromCharCode(b2.which);
          }
          return null;
        case "compositionend":
          return de2 && b2.locale !== "ko" ? null : b2.data;
        default:
          return null;
      }
    }
    var le2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function me2(a2) {
      var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
      return b2 === "input" ? !!le2[a2.type] : b2 === "textarea" ? true : false;
    }
    function ne2(a2, b2, c2, d2) {
      Eb(d2);
      b2 = oe2(b2, "onChange");
      0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
    }
    var pe2 = null;
    var qe2 = null;
    function re2(a2) {
      se2(a2, 0);
    }
    function te2(a2) {
      var b2 = ue2(a2);
      if (Wa(b2))
        return a2;
    }
    function ve2(a2, b2) {
      if (a2 === "change")
        return b2;
    }
    var we2 = false;
    if (fa) {
      if (fa) {
        ye2 = "oninput" in document;
        if (!ye2) {
          ze2 = document.createElement("div");
          ze2.setAttribute("oninput", "return;");
          ye2 = typeof ze2.oninput === "function";
        }
        xe2 = ye2;
      } else
        xe2 = false;
      we2 = xe2 && (!document.documentMode || 9 < document.documentMode);
    }
    var xe2;
    var ye2;
    var ze2;
    function Ae2() {
      pe2 && (pe2.detachEvent("onpropertychange", Be2), qe2 = pe2 = null);
    }
    function Be2(a2) {
      if (a2.propertyName === "value" && te2(qe2)) {
        var b2 = [];
        ne2(b2, qe2, a2, xb(a2));
        a2 = re2;
        if (Kb)
          a2(b2);
        else {
          Kb = true;
          try {
            Gb(a2, b2);
          } finally {
            Kb = false, Mb();
          }
        }
      }
    }
    function Ce2(a2, b2, c2) {
      a2 === "focusin" ? (Ae2(), pe2 = b2, qe2 = c2, pe2.attachEvent("onpropertychange", Be2)) : a2 === "focusout" && Ae2();
    }
    function De2(a2) {
      if (a2 === "selectionchange" || a2 === "keyup" || a2 === "keydown")
        return te2(qe2);
    }
    function Ee2(a2, b2) {
      if (a2 === "click")
        return te2(b2);
    }
    function Fe2(a2, b2) {
      if (a2 === "input" || a2 === "change")
        return te2(b2);
    }
    function Ge2(a2, b2) {
      return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
    }
    var He2 = typeof Object.is === "function" ? Object.is : Ge2;
    var Ie = Object.prototype.hasOwnProperty;
    function Je2(a2, b2) {
      if (He2(a2, b2))
        return true;
      if (typeof a2 !== "object" || a2 === null || typeof b2 !== "object" || b2 === null)
        return false;
      var c2 = Object.keys(a2), d2 = Object.keys(b2);
      if (c2.length !== d2.length)
        return false;
      for (d2 = 0; d2 < c2.length; d2++)
        if (!Ie.call(b2, c2[d2]) || !He2(a2[c2[d2]], b2[c2[d2]]))
          return false;
      return true;
    }
    function Ke2(a2) {
      for (; a2 && a2.firstChild; )
        a2 = a2.firstChild;
      return a2;
    }
    function Le2(a2, b2) {
      var c2 = Ke2(a2);
      a2 = 0;
      for (var d2; c2; ) {
        if (c2.nodeType === 3) {
          d2 = a2 + c2.textContent.length;
          if (a2 <= b2 && d2 >= b2)
            return { node: c2, offset: b2 - a2 };
          a2 = d2;
        }
        a: {
          for (; c2; ) {
            if (c2.nextSibling) {
              c2 = c2.nextSibling;
              break a;
            }
            c2 = c2.parentNode;
          }
          c2 = void 0;
        }
        c2 = Ke2(c2);
      }
    }
    function Me2(a2, b2) {
      return a2 && b2 ? a2 === b2 ? true : a2 && a2.nodeType === 3 ? false : b2 && b2.nodeType === 3 ? Me2(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
    }
    function Ne2() {
      for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
        try {
          var c2 = typeof b2.contentWindow.location.href === "string";
        } catch (d2) {
          c2 = false;
        }
        if (c2)
          a2 = b2.contentWindow;
        else
          break;
        b2 = Xa(a2.document);
      }
      return b2;
    }
    function Oe(a2) {
      var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
      return b2 && (b2 === "input" && (a2.type === "text" || a2.type === "search" || a2.type === "tel" || a2.type === "url" || a2.type === "password") || b2 === "textarea" || a2.contentEditable === "true");
    }
    var Pe2 = fa && "documentMode" in document && 11 >= document.documentMode;
    var Qe = null;
    var Re2 = null;
    var Se2 = null;
    var Te2 = false;
    function Ue2(a2, b2, c2) {
      var d2 = c2.window === c2 ? c2.document : c2.nodeType === 9 ? c2 : c2.ownerDocument;
      Te2 || Qe == null || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Oe(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se2 && Je2(Se2, d2) || (Se2 = d2, d2 = oe2(Re2, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Qe)));
    }
    Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
    Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
    Pc(Oc, 2);
    for (var Ve2 = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We2 = 0; We2 < Ve2.length; We2++)
      Nc.set(Ve2[We2], 0);
    ea("onMouseEnter", ["mouseout", "mouseover"]);
    ea("onMouseLeave", ["mouseout", "mouseover"]);
    ea("onPointerEnter", ["pointerout", "pointerover"]);
    ea("onPointerLeave", ["pointerout", "pointerover"]);
    da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Xe2 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
    var Ye2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe2));
    function Ze2(a2, b2, c2) {
      var d2 = a2.type || "unknown-event";
      a2.currentTarget = c2;
      Yb(d2, b2, void 0, a2);
      a2.currentTarget = null;
    }
    function se2(a2, b2) {
      b2 = (b2 & 4) !== 0;
      for (var c2 = 0; c2 < a2.length; c2++) {
        var d2 = a2[c2], e2 = d2.event;
        d2 = d2.listeners;
        a: {
          var f = void 0;
          if (b2)
            for (var g2 = d2.length - 1; 0 <= g2; g2--) {
              var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k2 !== f && e2.isPropagationStopped())
                break a;
              Ze2(e2, h2, l2);
              f = k2;
            }
          else
            for (g2 = 0; g2 < d2.length; g2++) {
              h2 = d2[g2];
              k2 = h2.instance;
              l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k2 !== f && e2.isPropagationStopped())
                break a;
              Ze2(e2, h2, l2);
              f = k2;
            }
        }
      }
      if (Ub)
        throw a2 = Vb, Ub = false, Vb = null, a2;
    }
    function G2(a2, b2) {
      var c2 = $e2(b2), d2 = a2 + "__bubble";
      c2.has(d2) || (af(b2, a2, 2, false), c2.add(d2));
    }
    var bf = "_reactListening" + Math.random().toString(36).slice(2);
    function cf(a2) {
      a2[bf] || (a2[bf] = true, ba.forEach(function(b2) {
        Ye2.has(b2) || df(b2, false, a2, null);
        df(b2, true, a2, null);
      }));
    }
    function df(a2, b2, c2, d2) {
      var e2 = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f = c2;
      a2 === "selectionchange" && c2.nodeType !== 9 && (f = c2.ownerDocument);
      if (d2 !== null && !b2 && Ye2.has(a2)) {
        if (a2 !== "scroll")
          return;
        e2 |= 2;
        f = d2;
      }
      var g2 = $e2(f), h2 = a2 + "__" + (b2 ? "capture" : "bubble");
      g2.has(h2) || (b2 && (e2 |= 4), af(f, a2, e2, b2), g2.add(h2));
    }
    function af(a2, b2, c2, d2) {
      var e2 = Nc.get(b2);
      switch (e2 === void 0 ? 2 : e2) {
        case 0:
          e2 = gd;
          break;
        case 1:
          e2 = id;
          break;
        default:
          e2 = hd;
      }
      c2 = e2.bind(null, b2, c2, a2);
      e2 = void 0;
      !Pb || b2 !== "touchstart" && b2 !== "touchmove" && b2 !== "wheel" || (e2 = true);
      d2 ? e2 !== void 0 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : e2 !== void 0 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
    }
    function jd(a2, b2, c2, d2, e2) {
      var f = d2;
      if ((b2 & 1) === 0 && (b2 & 2) === 0 && d2 !== null)
        a:
          for (; ; ) {
            if (d2 === null)
              return;
            var g2 = d2.tag;
            if (g2 === 3 || g2 === 4) {
              var h2 = d2.stateNode.containerInfo;
              if (h2 === e2 || h2.nodeType === 8 && h2.parentNode === e2)
                break;
              if (g2 === 4)
                for (g2 = d2.return; g2 !== null; ) {
                  var k2 = g2.tag;
                  if (k2 === 3 || k2 === 4) {
                    if (k2 = g2.stateNode.containerInfo, k2 === e2 || k2.nodeType === 8 && k2.parentNode === e2)
                      return;
                  }
                  g2 = g2.return;
                }
              for (; h2 !== null; ) {
                g2 = wc(h2);
                if (g2 === null)
                  return;
                k2 = g2.tag;
                if (k2 === 5 || k2 === 6) {
                  d2 = f = g2;
                  continue a;
                }
                h2 = h2.parentNode;
              }
            }
            d2 = d2.return;
          }
      Nb(function() {
        var d3 = f, e3 = xb(c2), g3 = [];
        a: {
          var h3 = Mc.get(a2);
          if (h3 !== void 0) {
            var k3 = td, x2 = a2;
            switch (a2) {
              case "keypress":
                if (od(c2) === 0)
                  break a;
              case "keydown":
              case "keyup":
                k3 = Rd;
                break;
              case "focusin":
                x2 = "focus";
                k3 = Fd;
                break;
              case "focusout":
                x2 = "blur";
                k3 = Fd;
                break;
              case "beforeblur":
              case "afterblur":
                k3 = Fd;
                break;
              case "click":
                if (c2.button === 2)
                  break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k3 = Bd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k3 = Dd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k3 = Vd;
                break;
              case Ic:
              case Jc:
              case Kc:
                k3 = Hd;
                break;
              case Lc:
                k3 = Xd;
                break;
              case "scroll":
                k3 = vd;
                break;
              case "wheel":
                k3 = Zd;
                break;
              case "copy":
              case "cut":
              case "paste":
                k3 = Jd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k3 = Td;
            }
            var w2 = (b2 & 4) !== 0, z2 = !w2 && a2 === "scroll", u2 = w2 ? h3 !== null ? h3 + "Capture" : null : h3;
            w2 = [];
            for (var t2 = d3, q2; t2 !== null; ) {
              q2 = t2;
              var v4 = q2.stateNode;
              q2.tag === 5 && v4 !== null && (q2 = v4, u2 !== null && (v4 = Ob(t2, u2), v4 != null && w2.push(ef(t2, v4, q2))));
              if (z2)
                break;
              t2 = t2.return;
            }
            0 < w2.length && (h3 = new k3(h3, x2, null, c2, e3), g3.push({ event: h3, listeners: w2 }));
          }
        }
        if ((b2 & 7) === 0) {
          a: {
            h3 = a2 === "mouseover" || a2 === "pointerover";
            k3 = a2 === "mouseout" || a2 === "pointerout";
            if (h3 && (b2 & 16) === 0 && (x2 = c2.relatedTarget || c2.fromElement) && (wc(x2) || x2[ff]))
              break a;
            if (k3 || h3) {
              h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
              if (k3) {
                if (x2 = c2.relatedTarget || c2.toElement, k3 = d3, x2 = x2 ? wc(x2) : null, x2 !== null && (z2 = Zb(x2), x2 !== z2 || x2.tag !== 5 && x2.tag !== 6))
                  x2 = null;
              } else
                k3 = null, x2 = d3;
              if (k3 !== x2) {
                w2 = Bd;
                v4 = "onMouseLeave";
                u2 = "onMouseEnter";
                t2 = "mouse";
                if (a2 === "pointerout" || a2 === "pointerover")
                  w2 = Td, v4 = "onPointerLeave", u2 = "onPointerEnter", t2 = "pointer";
                z2 = k3 == null ? h3 : ue2(k3);
                q2 = x2 == null ? h3 : ue2(x2);
                h3 = new w2(v4, t2 + "leave", k3, c2, e3);
                h3.target = z2;
                h3.relatedTarget = q2;
                v4 = null;
                wc(e3) === d3 && (w2 = new w2(u2, t2 + "enter", x2, c2, e3), w2.target = q2, w2.relatedTarget = z2, v4 = w2);
                z2 = v4;
                if (k3 && x2)
                  b: {
                    w2 = k3;
                    u2 = x2;
                    t2 = 0;
                    for (q2 = w2; q2; q2 = gf(q2))
                      t2++;
                    q2 = 0;
                    for (v4 = u2; v4; v4 = gf(v4))
                      q2++;
                    for (; 0 < t2 - q2; )
                      w2 = gf(w2), t2--;
                    for (; 0 < q2 - t2; )
                      u2 = gf(u2), q2--;
                    for (; t2--; ) {
                      if (w2 === u2 || u2 !== null && w2 === u2.alternate)
                        break b;
                      w2 = gf(w2);
                      u2 = gf(u2);
                    }
                    w2 = null;
                  }
                else
                  w2 = null;
                k3 !== null && hf(g3, h3, k3, w2, false);
                x2 !== null && z2 !== null && hf(g3, z2, x2, w2, true);
              }
            }
          }
          a: {
            h3 = d3 ? ue2(d3) : window;
            k3 = h3.nodeName && h3.nodeName.toLowerCase();
            if (k3 === "select" || k3 === "input" && h3.type === "file")
              var J2 = ve2;
            else if (me2(h3))
              if (we2)
                J2 = Fe2;
              else {
                J2 = De2;
                var K2 = Ce2;
              }
            else
              (k3 = h3.nodeName) && k3.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (J2 = Ee2);
            if (J2 && (J2 = J2(a2, d3))) {
              ne2(g3, J2, c2, e3);
              break a;
            }
            K2 && K2(a2, h3, d3);
            a2 === "focusout" && (K2 = h3._wrapperState) && K2.controlled && h3.type === "number" && bb(h3, "number", h3.value);
          }
          K2 = d3 ? ue2(d3) : window;
          switch (a2) {
            case "focusin":
              if (me2(K2) || K2.contentEditable === "true")
                Qe = K2, Re2 = d3, Se2 = null;
              break;
            case "focusout":
              Se2 = Re2 = Qe = null;
              break;
            case "mousedown":
              Te2 = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Te2 = false;
              Ue2(g3, c2, e3);
              break;
            case "selectionchange":
              if (Pe2)
                break;
            case "keydown":
            case "keyup":
              Ue2(g3, c2, e3);
          }
          var Q2;
          if (ae2)
            b: {
              switch (a2) {
                case "compositionstart":
                  var L2 = "onCompositionStart";
                  break b;
                case "compositionend":
                  L2 = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  L2 = "onCompositionUpdate";
                  break b;
              }
              L2 = void 0;
            }
          else
            ie2 ? ge2(a2, c2) && (L2 = "onCompositionEnd") : a2 === "keydown" && c2.keyCode === 229 && (L2 = "onCompositionStart");
          L2 && (de2 && c2.locale !== "ko" && (ie2 || L2 !== "onCompositionStart" ? L2 === "onCompositionEnd" && ie2 && (Q2 = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie2 = true)), K2 = oe2(d3, L2), 0 < K2.length && (L2 = new Ld(L2, a2, null, c2, e3), g3.push({ event: L2, listeners: K2 }), Q2 ? L2.data = Q2 : (Q2 = he2(c2), Q2 !== null && (L2.data = Q2))));
          if (Q2 = ce2 ? je2(a2, c2) : ke2(a2, c2))
            d3 = oe2(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = Q2);
        }
        se2(g3, b2);
      });
    }
    function ef(a2, b2, c2) {
      return { instance: a2, listener: b2, currentTarget: c2 };
    }
    function oe2(a2, b2) {
      for (var c2 = b2 + "Capture", d2 = []; a2 !== null; ) {
        var e2 = a2, f = e2.stateNode;
        e2.tag === 5 && f !== null && (e2 = f, f = Ob(a2, c2), f != null && d2.unshift(ef(a2, f, e2)), f = Ob(a2, b2), f != null && d2.push(ef(a2, f, e2)));
        a2 = a2.return;
      }
      return d2;
    }
    function gf(a2) {
      if (a2 === null)
        return null;
      do
        a2 = a2.return;
      while (a2 && a2.tag !== 5);
      return a2 ? a2 : null;
    }
    function hf(a2, b2, c2, d2, e2) {
      for (var f = b2._reactName, g2 = []; c2 !== null && c2 !== d2; ) {
        var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
        if (k2 !== null && k2 === d2)
          break;
        h2.tag === 5 && l2 !== null && (h2 = l2, e2 ? (k2 = Ob(c2, f), k2 != null && g2.unshift(ef(c2, k2, h2))) : e2 || (k2 = Ob(c2, f), k2 != null && g2.push(ef(c2, k2, h2))));
        c2 = c2.return;
      }
      g2.length !== 0 && a2.push({ event: b2, listeners: g2 });
    }
    function jf() {
    }
    var kf = null;
    var lf = null;
    function mf(a2, b2) {
      switch (a2) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!b2.autoFocus;
      }
      return false;
    }
    function nf(a2, b2) {
      return a2 === "textarea" || a2 === "option" || a2 === "noscript" || typeof b2.children === "string" || typeof b2.children === "number" || typeof b2.dangerouslySetInnerHTML === "object" && b2.dangerouslySetInnerHTML !== null && b2.dangerouslySetInnerHTML.__html != null;
    }
    var of = typeof setTimeout === "function" ? setTimeout : void 0;
    var pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
    function qf(a2) {
      a2.nodeType === 1 ? a2.textContent = "" : a2.nodeType === 9 && (a2 = a2.body, a2 != null && (a2.textContent = ""));
    }
    function rf(a2) {
      for (; a2 != null; a2 = a2.nextSibling) {
        var b2 = a2.nodeType;
        if (b2 === 1 || b2 === 3)
          break;
      }
      return a2;
    }
    function sf(a2) {
      a2 = a2.previousSibling;
      for (var b2 = 0; a2; ) {
        if (a2.nodeType === 8) {
          var c2 = a2.data;
          if (c2 === "$" || c2 === "$!" || c2 === "$?") {
            if (b2 === 0)
              return a2;
            b2--;
          } else
            c2 === "/$" && b2++;
        }
        a2 = a2.previousSibling;
      }
      return null;
    }
    var tf = 0;
    function uf(a2) {
      return { $$typeof: Ga, toString: a2, valueOf: a2 };
    }
    var vf = Math.random().toString(36).slice(2);
    var wf = "__reactFiber$" + vf;
    var xf = "__reactProps$" + vf;
    var ff = "__reactContainer$" + vf;
    var yf = "__reactEvents$" + vf;
    function wc(a2) {
      var b2 = a2[wf];
      if (b2)
        return b2;
      for (var c2 = a2.parentNode; c2; ) {
        if (b2 = c2[ff] || c2[wf]) {
          c2 = b2.alternate;
          if (b2.child !== null || c2 !== null && c2.child !== null)
            for (a2 = sf(a2); a2 !== null; ) {
              if (c2 = a2[wf])
                return c2;
              a2 = sf(a2);
            }
          return b2;
        }
        a2 = c2;
        c2 = a2.parentNode;
      }
      return null;
    }
    function Cb(a2) {
      a2 = a2[wf] || a2[ff];
      return !a2 || a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 13 && a2.tag !== 3 ? null : a2;
    }
    function ue2(a2) {
      if (a2.tag === 5 || a2.tag === 6)
        return a2.stateNode;
      throw Error(y2(33));
    }
    function Db(a2) {
      return a2[xf] || null;
    }
    function $e2(a2) {
      var b2 = a2[yf];
      b2 === void 0 && (b2 = a2[yf] = new Set());
      return b2;
    }
    var zf = [];
    var Af = -1;
    function Bf(a2) {
      return { current: a2 };
    }
    function H2(a2) {
      0 > Af || (a2.current = zf[Af], zf[Af] = null, Af--);
    }
    function I2(a2, b2) {
      Af++;
      zf[Af] = a2.current;
      a2.current = b2;
    }
    var Cf = {};
    var M2 = Bf(Cf);
    var N2 = Bf(false);
    var Df = Cf;
    function Ef(a2, b2) {
      var c2 = a2.type.contextTypes;
      if (!c2)
        return Cf;
      var d2 = a2.stateNode;
      if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
        return d2.__reactInternalMemoizedMaskedChildContext;
      var e2 = {}, f;
      for (f in c2)
        e2[f] = b2[f];
      d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
      return e2;
    }
    function Ff(a2) {
      a2 = a2.childContextTypes;
      return a2 !== null && a2 !== void 0;
    }
    function Gf() {
      H2(N2);
      H2(M2);
    }
    function Hf(a2, b2, c2) {
      if (M2.current !== Cf)
        throw Error(y2(168));
      I2(M2, b2);
      I2(N2, c2);
    }
    function If(a2, b2, c2) {
      var d2 = a2.stateNode;
      a2 = b2.childContextTypes;
      if (typeof d2.getChildContext !== "function")
        return c2;
      d2 = d2.getChildContext();
      for (var e2 in d2)
        if (!(e2 in a2))
          throw Error(y2(108, Ra(b2) || "Unknown", e2));
      return m2({}, c2, d2);
    }
    function Jf(a2) {
      a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Cf;
      Df = M2.current;
      I2(M2, a2);
      I2(N2, N2.current);
      return true;
    }
    function Kf(a2, b2, c2) {
      var d2 = a2.stateNode;
      if (!d2)
        throw Error(y2(169));
      c2 ? (a2 = If(a2, b2, Df), d2.__reactInternalMemoizedMergedChildContext = a2, H2(N2), H2(M2), I2(M2, a2)) : H2(N2);
      I2(N2, c2);
    }
    var Lf = null;
    var Mf = null;
    var Nf = r2.unstable_runWithPriority;
    var Of = r2.unstable_scheduleCallback;
    var Pf = r2.unstable_cancelCallback;
    var Qf = r2.unstable_shouldYield;
    var Rf = r2.unstable_requestPaint;
    var Sf = r2.unstable_now;
    var Tf = r2.unstable_getCurrentPriorityLevel;
    var Uf = r2.unstable_ImmediatePriority;
    var Vf = r2.unstable_UserBlockingPriority;
    var Wf = r2.unstable_NormalPriority;
    var Xf = r2.unstable_LowPriority;
    var Yf = r2.unstable_IdlePriority;
    var Zf = {};
    var $f = Rf !== void 0 ? Rf : function() {
    };
    var ag = null;
    var bg = null;
    var cg = false;
    var dg = Sf();
    var O2 = 1e4 > dg ? Sf : function() {
      return Sf() - dg;
    };
    function eg() {
      switch (Tf()) {
        case Uf:
          return 99;
        case Vf:
          return 98;
        case Wf:
          return 97;
        case Xf:
          return 96;
        case Yf:
          return 95;
        default:
          throw Error(y2(332));
      }
    }
    function fg(a2) {
      switch (a2) {
        case 99:
          return Uf;
        case 98:
          return Vf;
        case 97:
          return Wf;
        case 96:
          return Xf;
        case 95:
          return Yf;
        default:
          throw Error(y2(332));
      }
    }
    function gg(a2, b2) {
      a2 = fg(a2);
      return Nf(a2, b2);
    }
    function hg(a2, b2, c2) {
      a2 = fg(a2);
      return Of(a2, b2, c2);
    }
    function ig() {
      if (bg !== null) {
        var a2 = bg;
        bg = null;
        Pf(a2);
      }
      jg();
    }
    function jg() {
      if (!cg && ag !== null) {
        cg = true;
        var a2 = 0;
        try {
          var b2 = ag;
          gg(99, function() {
            for (; a2 < b2.length; a2++) {
              var c2 = b2[a2];
              do
                c2 = c2(true);
              while (c2 !== null);
            }
          });
          ag = null;
        } catch (c2) {
          throw ag !== null && (ag = ag.slice(a2 + 1)), Of(Uf, ig), c2;
        } finally {
          cg = false;
        }
      }
    }
    var kg = ra.ReactCurrentBatchConfig;
    function lg(a2, b2) {
      if (a2 && a2.defaultProps) {
        b2 = m2({}, b2);
        a2 = a2.defaultProps;
        for (var c2 in a2)
          b2[c2] === void 0 && (b2[c2] = a2[c2]);
        return b2;
      }
      return b2;
    }
    var mg = Bf(null);
    var ng = null;
    var og = null;
    var pg = null;
    function qg() {
      pg = og = ng = null;
    }
    function rg(a2) {
      var b2 = mg.current;
      H2(mg);
      a2.type._context._currentValue = b2;
    }
    function sg(a2, b2) {
      for (; a2 !== null; ) {
        var c2 = a2.alternate;
        if ((a2.childLanes & b2) === b2)
          if (c2 === null || (c2.childLanes & b2) === b2)
            break;
          else
            c2.childLanes |= b2;
        else
          a2.childLanes |= b2, c2 !== null && (c2.childLanes |= b2);
        a2 = a2.return;
      }
    }
    function tg(a2, b2) {
      ng = a2;
      pg = og = null;
      a2 = a2.dependencies;
      a2 !== null && a2.firstContext !== null && ((a2.lanes & b2) !== 0 && (ug = true), a2.firstContext = null);
    }
    function vg(a2, b2) {
      if (pg !== a2 && b2 !== false && b2 !== 0) {
        if (typeof b2 !== "number" || b2 === 1073741823)
          pg = a2, b2 = 1073741823;
        b2 = { context: a2, observedBits: b2, next: null };
        if (og === null) {
          if (ng === null)
            throw Error(y2(308));
          og = b2;
          ng.dependencies = { lanes: 0, firstContext: b2, responders: null };
        } else
          og = og.next = b2;
      }
      return a2._currentValue;
    }
    var wg = false;
    function xg(a2) {
      a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
    }
    function yg(a2, b2) {
      a2 = a2.updateQueue;
      b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
    }
    function zg(a2, b2) {
      return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
    }
    function Ag(a2, b2) {
      a2 = a2.updateQueue;
      if (a2 !== null) {
        a2 = a2.shared;
        var c2 = a2.pending;
        c2 === null ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
        a2.pending = b2;
      }
    }
    function Bg(a2, b2) {
      var c2 = a2.updateQueue, d2 = a2.alternate;
      if (d2 !== null && (d2 = d2.updateQueue, c2 === d2)) {
        var e2 = null, f = null;
        c2 = c2.firstBaseUpdate;
        if (c2 !== null) {
          do {
            var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
            f === null ? e2 = f = g2 : f = f.next = g2;
            c2 = c2.next;
          } while (c2 !== null);
          f === null ? e2 = f = b2 : f = f.next = b2;
        } else
          e2 = f = b2;
        c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f, shared: d2.shared, effects: d2.effects };
        a2.updateQueue = c2;
        return;
      }
      a2 = c2.lastBaseUpdate;
      a2 === null ? c2.firstBaseUpdate = b2 : a2.next = b2;
      c2.lastBaseUpdate = b2;
    }
    function Cg(a2, b2, c2, d2) {
      var e2 = a2.updateQueue;
      wg = false;
      var f = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
      if (h2 !== null) {
        e2.shared.pending = null;
        var k2 = h2, l2 = k2.next;
        k2.next = null;
        g2 === null ? f = l2 : g2.next = l2;
        g2 = k2;
        var n2 = a2.alternate;
        if (n2 !== null) {
          n2 = n2.updateQueue;
          var A2 = n2.lastBaseUpdate;
          A2 !== g2 && (A2 === null ? n2.firstBaseUpdate = l2 : A2.next = l2, n2.lastBaseUpdate = k2);
        }
      }
      if (f !== null) {
        A2 = e2.baseState;
        g2 = 0;
        n2 = l2 = k2 = null;
        do {
          h2 = f.lane;
          var p = f.eventTime;
          if ((d2 & h2) === h2) {
            n2 !== null && (n2 = n2.next = {
              eventTime: p,
              lane: 0,
              tag: f.tag,
              payload: f.payload,
              callback: f.callback,
              next: null
            });
            a: {
              var C2 = a2, x2 = f;
              h2 = b2;
              p = c2;
              switch (x2.tag) {
                case 1:
                  C2 = x2.payload;
                  if (typeof C2 === "function") {
                    A2 = C2.call(p, A2, h2);
                    break a;
                  }
                  A2 = C2;
                  break a;
                case 3:
                  C2.flags = C2.flags & -4097 | 64;
                case 0:
                  C2 = x2.payload;
                  h2 = typeof C2 === "function" ? C2.call(p, A2, h2) : C2;
                  if (h2 === null || h2 === void 0)
                    break a;
                  A2 = m2({}, A2, h2);
                  break a;
                case 2:
                  wg = true;
              }
            }
            f.callback !== null && (a2.flags |= 32, h2 = e2.effects, h2 === null ? e2.effects = [f] : h2.push(f));
          } else
            p = { eventTime: p, lane: h2, tag: f.tag, payload: f.payload, callback: f.callback, next: null }, n2 === null ? (l2 = n2 = p, k2 = A2) : n2 = n2.next = p, g2 |= h2;
          f = f.next;
          if (f === null)
            if (h2 = e2.shared.pending, h2 === null)
              break;
            else
              f = h2.next, h2.next = null, e2.lastBaseUpdate = h2, e2.shared.pending = null;
        } while (1);
        n2 === null && (k2 = A2);
        e2.baseState = k2;
        e2.firstBaseUpdate = l2;
        e2.lastBaseUpdate = n2;
        Dg |= g2;
        a2.lanes = g2;
        a2.memoizedState = A2;
      }
    }
    function Eg(a2, b2, c2) {
      a2 = b2.effects;
      b2.effects = null;
      if (a2 !== null)
        for (b2 = 0; b2 < a2.length; b2++) {
          var d2 = a2[b2], e2 = d2.callback;
          if (e2 !== null) {
            d2.callback = null;
            d2 = c2;
            if (typeof e2 !== "function")
              throw Error(y2(191, e2));
            e2.call(d2);
          }
        }
    }
    var Fg = new aa.Component().refs;
    function Gg(a2, b2, c2, d2) {
      b2 = a2.memoizedState;
      c2 = c2(d2, b2);
      c2 = c2 === null || c2 === void 0 ? b2 : m2({}, b2, c2);
      a2.memoizedState = c2;
      a2.lanes === 0 && (a2.updateQueue.baseState = c2);
    }
    var Kg = { isMounted: function(a2) {
      return (a2 = a2._reactInternals) ? Zb(a2) === a2 : false;
    }, enqueueSetState: function(a2, b2, c2) {
      a2 = a2._reactInternals;
      var d2 = Hg(), e2 = Ig(a2), f = zg(d2, e2);
      f.payload = b2;
      c2 !== void 0 && c2 !== null && (f.callback = c2);
      Ag(a2, f);
      Jg(a2, e2, d2);
    }, enqueueReplaceState: function(a2, b2, c2) {
      a2 = a2._reactInternals;
      var d2 = Hg(), e2 = Ig(a2), f = zg(d2, e2);
      f.tag = 1;
      f.payload = b2;
      c2 !== void 0 && c2 !== null && (f.callback = c2);
      Ag(a2, f);
      Jg(a2, e2, d2);
    }, enqueueForceUpdate: function(a2, b2) {
      a2 = a2._reactInternals;
      var c2 = Hg(), d2 = Ig(a2), e2 = zg(c2, d2);
      e2.tag = 2;
      b2 !== void 0 && b2 !== null && (e2.callback = b2);
      Ag(a2, e2);
      Jg(a2, d2, c2);
    } };
    function Lg(a2, b2, c2, d2, e2, f, g2) {
      a2 = a2.stateNode;
      return typeof a2.shouldComponentUpdate === "function" ? a2.shouldComponentUpdate(d2, f, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Je2(c2, d2) || !Je2(e2, f) : true;
    }
    function Mg(a2, b2, c2) {
      var d2 = false, e2 = Cf;
      var f = b2.contextType;
      typeof f === "object" && f !== null ? f = vg(f) : (e2 = Ff(b2) ? Df : M2.current, d2 = b2.contextTypes, f = (d2 = d2 !== null && d2 !== void 0) ? Ef(a2, e2) : Cf);
      b2 = new b2(c2, f);
      a2.memoizedState = b2.state !== null && b2.state !== void 0 ? b2.state : null;
      b2.updater = Kg;
      a2.stateNode = b2;
      b2._reactInternals = a2;
      d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f);
      return b2;
    }
    function Ng(a2, b2, c2, d2) {
      a2 = b2.state;
      typeof b2.componentWillReceiveProps === "function" && b2.componentWillReceiveProps(c2, d2);
      typeof b2.UNSAFE_componentWillReceiveProps === "function" && b2.UNSAFE_componentWillReceiveProps(c2, d2);
      b2.state !== a2 && Kg.enqueueReplaceState(b2, b2.state, null);
    }
    function Og(a2, b2, c2, d2) {
      var e2 = a2.stateNode;
      e2.props = c2;
      e2.state = a2.memoizedState;
      e2.refs = Fg;
      xg(a2);
      var f = b2.contextType;
      typeof f === "object" && f !== null ? e2.context = vg(f) : (f = Ff(b2) ? Df : M2.current, e2.context = Ef(a2, f));
      Cg(a2, c2, e2, d2);
      e2.state = a2.memoizedState;
      f = b2.getDerivedStateFromProps;
      typeof f === "function" && (Gg(a2, b2, f, c2), e2.state = a2.memoizedState);
      typeof b2.getDerivedStateFromProps === "function" || typeof e2.getSnapshotBeforeUpdate === "function" || typeof e2.UNSAFE_componentWillMount !== "function" && typeof e2.componentWillMount !== "function" || (b2 = e2.state, typeof e2.componentWillMount === "function" && e2.componentWillMount(), typeof e2.UNSAFE_componentWillMount === "function" && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Kg.enqueueReplaceState(e2, e2.state, null), Cg(a2, c2, e2, d2), e2.state = a2.memoizedState);
      typeof e2.componentDidMount === "function" && (a2.flags |= 4);
    }
    var Pg = Array.isArray;
    function Qg(a2, b2, c2) {
      a2 = c2.ref;
      if (a2 !== null && typeof a2 !== "function" && typeof a2 !== "object") {
        if (c2._owner) {
          c2 = c2._owner;
          if (c2) {
            if (c2.tag !== 1)
              throw Error(y2(309));
            var d2 = c2.stateNode;
          }
          if (!d2)
            throw Error(y2(147, a2));
          var e2 = "" + a2;
          if (b2 !== null && b2.ref !== null && typeof b2.ref === "function" && b2.ref._stringRef === e2)
            return b2.ref;
          b2 = function(a3) {
            var b3 = d2.refs;
            b3 === Fg && (b3 = d2.refs = {});
            a3 === null ? delete b3[e2] : b3[e2] = a3;
          };
          b2._stringRef = e2;
          return b2;
        }
        if (typeof a2 !== "string")
          throw Error(y2(284));
        if (!c2._owner)
          throw Error(y2(290, a2));
      }
      return a2;
    }
    function Rg(a2, b2) {
      if (a2.type !== "textarea")
        throw Error(y2(31, Object.prototype.toString.call(b2) === "[object Object]" ? "object with keys {" + Object.keys(b2).join(", ") + "}" : b2));
    }
    function Sg(a2) {
      function b2(b3, c3) {
        if (a2) {
          var d3 = b3.lastEffect;
          d3 !== null ? (d3.nextEffect = c3, b3.lastEffect = c3) : b3.firstEffect = b3.lastEffect = c3;
          c3.nextEffect = null;
          c3.flags = 8;
        }
      }
      function c2(c3, d3) {
        if (!a2)
          return null;
        for (; d3 !== null; )
          b2(c3, d3), d3 = d3.sibling;
        return null;
      }
      function d2(a3, b3) {
        for (a3 = new Map(); b3 !== null; )
          b3.key !== null ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
        return a3;
      }
      function e2(a3, b3) {
        a3 = Tg(a3, b3);
        a3.index = 0;
        a3.sibling = null;
        return a3;
      }
      function f(b3, c3, d3) {
        b3.index = d3;
        if (!a2)
          return c3;
        d3 = b3.alternate;
        if (d3 !== null)
          return d3 = d3.index, d3 < c3 ? (b3.flags = 2, c3) : d3;
        b3.flags = 2;
        return c3;
      }
      function g2(b3) {
        a2 && b3.alternate === null && (b3.flags = 2);
        return b3;
      }
      function h2(a3, b3, c3, d3) {
        if (b3 === null || b3.tag !== 6)
          return b3 = Ug(c3, a3.mode, d3), b3.return = a3, b3;
        b3 = e2(b3, c3);
        b3.return = a3;
        return b3;
      }
      function k2(a3, b3, c3, d3) {
        if (b3 !== null && b3.elementType === c3.type)
          return d3 = e2(b3, c3.props), d3.ref = Qg(a3, b3, c3), d3.return = a3, d3;
        d3 = Vg(c3.type, c3.key, c3.props, null, a3.mode, d3);
        d3.ref = Qg(a3, b3, c3);
        d3.return = a3;
        return d3;
      }
      function l2(a3, b3, c3, d3) {
        if (b3 === null || b3.tag !== 4 || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
          return b3 = Wg(c3, a3.mode, d3), b3.return = a3, b3;
        b3 = e2(b3, c3.children || []);
        b3.return = a3;
        return b3;
      }
      function n2(a3, b3, c3, d3, f2) {
        if (b3 === null || b3.tag !== 7)
          return b3 = Xg(c3, a3.mode, d3, f2), b3.return = a3, b3;
        b3 = e2(b3, c3);
        b3.return = a3;
        return b3;
      }
      function A2(a3, b3, c3) {
        if (typeof b3 === "string" || typeof b3 === "number")
          return b3 = Ug("" + b3, a3.mode, c3), b3.return = a3, b3;
        if (typeof b3 === "object" && b3 !== null) {
          switch (b3.$$typeof) {
            case sa:
              return c3 = Vg(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = Qg(a3, null, b3), c3.return = a3, c3;
            case ta:
              return b3 = Wg(b3, a3.mode, c3), b3.return = a3, b3;
          }
          if (Pg(b3) || La(b3))
            return b3 = Xg(b3, a3.mode, c3, null), b3.return = a3, b3;
          Rg(a3, b3);
        }
        return null;
      }
      function p(a3, b3, c3, d3) {
        var e3 = b3 !== null ? b3.key : null;
        if (typeof c3 === "string" || typeof c3 === "number")
          return e3 !== null ? null : h2(a3, b3, "" + c3, d3);
        if (typeof c3 === "object" && c3 !== null) {
          switch (c3.$$typeof) {
            case sa:
              return c3.key === e3 ? c3.type === ua ? n2(a3, b3, c3.props.children, d3, e3) : k2(a3, b3, c3, d3) : null;
            case ta:
              return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
          }
          if (Pg(c3) || La(c3))
            return e3 !== null ? null : n2(a3, b3, c3, d3, null);
          Rg(a3, c3);
        }
        return null;
      }
      function C2(a3, b3, c3, d3, e3) {
        if (typeof d3 === "string" || typeof d3 === "number")
          return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
        if (typeof d3 === "object" && d3 !== null) {
          switch (d3.$$typeof) {
            case sa:
              return a3 = a3.get(d3.key === null ? c3 : d3.key) || null, d3.type === ua ? n2(b3, a3, d3.props.children, e3, d3.key) : k2(b3, a3, d3, e3);
            case ta:
              return a3 = a3.get(d3.key === null ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
          }
          if (Pg(d3) || La(d3))
            return a3 = a3.get(c3) || null, n2(b3, a3, d3, e3, null);
          Rg(b3, d3);
        }
        return null;
      }
      function x2(e3, g3, h3, k3) {
        for (var l3 = null, t2 = null, u2 = g3, z2 = g3 = 0, q2 = null; u2 !== null && z2 < h3.length; z2++) {
          u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
          var n3 = p(e3, u2, h3[z2], k3);
          if (n3 === null) {
            u2 === null && (u2 = q2);
            break;
          }
          a2 && u2 && n3.alternate === null && b2(e3, u2);
          g3 = f(n3, g3, z2);
          t2 === null ? l3 = n3 : t2.sibling = n3;
          t2 = n3;
          u2 = q2;
        }
        if (z2 === h3.length)
          return c2(e3, u2), l3;
        if (u2 === null) {
          for (; z2 < h3.length; z2++)
            u2 = A2(e3, h3[z2], k3), u2 !== null && (g3 = f(u2, g3, z2), t2 === null ? l3 = u2 : t2.sibling = u2, t2 = u2);
          return l3;
        }
        for (u2 = d2(e3, u2); z2 < h3.length; z2++)
          q2 = C2(u2, e3, z2, h3[z2], k3), q2 !== null && (a2 && q2.alternate !== null && u2.delete(q2.key === null ? z2 : q2.key), g3 = f(q2, g3, z2), t2 === null ? l3 = q2 : t2.sibling = q2, t2 = q2);
        a2 && u2.forEach(function(a3) {
          return b2(e3, a3);
        });
        return l3;
      }
      function w2(e3, g3, h3, k3) {
        var l3 = La(h3);
        if (typeof l3 !== "function")
          throw Error(y2(150));
        h3 = l3.call(h3);
        if (h3 == null)
          throw Error(y2(151));
        for (var t2 = l3 = null, u2 = g3, z2 = g3 = 0, q2 = null, n3 = h3.next(); u2 !== null && !n3.done; z2++, n3 = h3.next()) {
          u2.index > z2 ? (q2 = u2, u2 = null) : q2 = u2.sibling;
          var w3 = p(e3, u2, n3.value, k3);
          if (w3 === null) {
            u2 === null && (u2 = q2);
            break;
          }
          a2 && u2 && w3.alternate === null && b2(e3, u2);
          g3 = f(w3, g3, z2);
          t2 === null ? l3 = w3 : t2.sibling = w3;
          t2 = w3;
          u2 = q2;
        }
        if (n3.done)
          return c2(e3, u2), l3;
        if (u2 === null) {
          for (; !n3.done; z2++, n3 = h3.next())
            n3 = A2(e3, n3.value, k3), n3 !== null && (g3 = f(n3, g3, z2), t2 === null ? l3 = n3 : t2.sibling = n3, t2 = n3);
          return l3;
        }
        for (u2 = d2(e3, u2); !n3.done; z2++, n3 = h3.next())
          n3 = C2(u2, e3, z2, n3.value, k3), n3 !== null && (a2 && n3.alternate !== null && u2.delete(n3.key === null ? z2 : n3.key), g3 = f(n3, g3, z2), t2 === null ? l3 = n3 : t2.sibling = n3, t2 = n3);
        a2 && u2.forEach(function(a3) {
          return b2(e3, a3);
        });
        return l3;
      }
      return function(a3, d3, f2, h3) {
        var k3 = typeof f2 === "object" && f2 !== null && f2.type === ua && f2.key === null;
        k3 && (f2 = f2.props.children);
        var l3 = typeof f2 === "object" && f2 !== null;
        if (l3)
          switch (f2.$$typeof) {
            case sa:
              a: {
                l3 = f2.key;
                for (k3 = d3; k3 !== null; ) {
                  if (k3.key === l3) {
                    switch (k3.tag) {
                      case 7:
                        if (f2.type === ua) {
                          c2(a3, k3.sibling);
                          d3 = e2(k3, f2.props.children);
                          d3.return = a3;
                          a3 = d3;
                          break a;
                        }
                        break;
                      default:
                        if (k3.elementType === f2.type) {
                          c2(a3, k3.sibling);
                          d3 = e2(k3, f2.props);
                          d3.ref = Qg(a3, k3, f2);
                          d3.return = a3;
                          a3 = d3;
                          break a;
                        }
                    }
                    c2(a3, k3);
                    break;
                  } else
                    b2(a3, k3);
                  k3 = k3.sibling;
                }
                f2.type === ua ? (d3 = Xg(f2.props.children, a3.mode, h3, f2.key), d3.return = a3, a3 = d3) : (h3 = Vg(f2.type, f2.key, f2.props, null, a3.mode, h3), h3.ref = Qg(a3, d3, f2), h3.return = a3, a3 = h3);
              }
              return g2(a3);
            case ta:
              a: {
                for (k3 = f2.key; d3 !== null; ) {
                  if (d3.key === k3)
                    if (d3.tag === 4 && d3.stateNode.containerInfo === f2.containerInfo && d3.stateNode.implementation === f2.implementation) {
                      c2(a3, d3.sibling);
                      d3 = e2(d3, f2.children || []);
                      d3.return = a3;
                      a3 = d3;
                      break a;
                    } else {
                      c2(a3, d3);
                      break;
                    }
                  else
                    b2(a3, d3);
                  d3 = d3.sibling;
                }
                d3 = Wg(f2, a3.mode, h3);
                d3.return = a3;
                a3 = d3;
              }
              return g2(a3);
          }
        if (typeof f2 === "string" || typeof f2 === "number")
          return f2 = "" + f2, d3 !== null && d3.tag === 6 ? (c2(a3, d3.sibling), d3 = e2(d3, f2), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = Ug(f2, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3);
        if (Pg(f2))
          return x2(a3, d3, f2, h3);
        if (La(f2))
          return w2(a3, d3, f2, h3);
        l3 && Rg(a3, f2);
        if (typeof f2 === "undefined" && !k3)
          switch (a3.tag) {
            case 1:
            case 22:
            case 0:
            case 11:
            case 15:
              throw Error(y2(152, Ra(a3.type) || "Component"));
          }
        return c2(a3, d3);
      };
    }
    var Yg = Sg(true);
    var Zg = Sg(false);
    var $g = {};
    var ah = Bf($g);
    var bh = Bf($g);
    var ch = Bf($g);
    function dh(a2) {
      if (a2 === $g)
        throw Error(y2(174));
      return a2;
    }
    function eh(a2, b2) {
      I2(ch, b2);
      I2(bh, a2);
      I2(ah, $g);
      a2 = b2.nodeType;
      switch (a2) {
        case 9:
        case 11:
          b2 = (b2 = b2.documentElement) ? b2.namespaceURI : mb(null, "");
          break;
        default:
          a2 = a2 === 8 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = mb(b2, a2);
      }
      H2(ah);
      I2(ah, b2);
    }
    function fh() {
      H2(ah);
      H2(bh);
      H2(ch);
    }
    function gh(a2) {
      dh(ch.current);
      var b2 = dh(ah.current);
      var c2 = mb(b2, a2.type);
      b2 !== c2 && (I2(bh, a2), I2(ah, c2));
    }
    function hh(a2) {
      bh.current === a2 && (H2(ah), H2(bh));
    }
    var P2 = Bf(0);
    function ih(a2) {
      for (var b2 = a2; b2 !== null; ) {
        if (b2.tag === 13) {
          var c2 = b2.memoizedState;
          if (c2 !== null && (c2 = c2.dehydrated, c2 === null || c2.data === "$?" || c2.data === "$!"))
            return b2;
        } else if (b2.tag === 19 && b2.memoizedProps.revealOrder !== void 0) {
          if ((b2.flags & 64) !== 0)
            return b2;
        } else if (b2.child !== null) {
          b2.child.return = b2;
          b2 = b2.child;
          continue;
        }
        if (b2 === a2)
          break;
        for (; b2.sibling === null; ) {
          if (b2.return === null || b2.return === a2)
            return null;
          b2 = b2.return;
        }
        b2.sibling.return = b2.return;
        b2 = b2.sibling;
      }
      return null;
    }
    var jh = null;
    var kh = null;
    var lh = false;
    function mh(a2, b2) {
      var c2 = nh(5, null, null, 0);
      c2.elementType = "DELETED";
      c2.type = "DELETED";
      c2.stateNode = b2;
      c2.return = a2;
      c2.flags = 8;
      a2.lastEffect !== null ? (a2.lastEffect.nextEffect = c2, a2.lastEffect = c2) : a2.firstEffect = a2.lastEffect = c2;
    }
    function oh(a2, b2) {
      switch (a2.tag) {
        case 5:
          var c2 = a2.type;
          b2 = b2.nodeType !== 1 || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
          return b2 !== null ? (a2.stateNode = b2, true) : false;
        case 6:
          return b2 = a2.pendingProps === "" || b2.nodeType !== 3 ? null : b2, b2 !== null ? (a2.stateNode = b2, true) : false;
        case 13:
          return false;
        default:
          return false;
      }
    }
    function ph(a2) {
      if (lh) {
        var b2 = kh;
        if (b2) {
          var c2 = b2;
          if (!oh(a2, b2)) {
            b2 = rf(c2.nextSibling);
            if (!b2 || !oh(a2, b2)) {
              a2.flags = a2.flags & -1025 | 2;
              lh = false;
              jh = a2;
              return;
            }
            mh(jh, c2);
          }
          jh = a2;
          kh = rf(b2.firstChild);
        } else
          a2.flags = a2.flags & -1025 | 2, lh = false, jh = a2;
      }
    }
    function qh(a2) {
      for (a2 = a2.return; a2 !== null && a2.tag !== 5 && a2.tag !== 3 && a2.tag !== 13; )
        a2 = a2.return;
      jh = a2;
    }
    function rh(a2) {
      if (a2 !== jh)
        return false;
      if (!lh)
        return qh(a2), lh = true, false;
      var b2 = a2.type;
      if (a2.tag !== 5 || b2 !== "head" && b2 !== "body" && !nf(b2, a2.memoizedProps))
        for (b2 = kh; b2; )
          mh(a2, b2), b2 = rf(b2.nextSibling);
      qh(a2);
      if (a2.tag === 13) {
        a2 = a2.memoizedState;
        a2 = a2 !== null ? a2.dehydrated : null;
        if (!a2)
          throw Error(y2(317));
        a: {
          a2 = a2.nextSibling;
          for (b2 = 0; a2; ) {
            if (a2.nodeType === 8) {
              var c2 = a2.data;
              if (c2 === "/$") {
                if (b2 === 0) {
                  kh = rf(a2.nextSibling);
                  break a;
                }
                b2--;
              } else
                c2 !== "$" && c2 !== "$!" && c2 !== "$?" || b2++;
            }
            a2 = a2.nextSibling;
          }
          kh = null;
        }
      } else
        kh = jh ? rf(a2.stateNode.nextSibling) : null;
      return true;
    }
    function sh() {
      kh = jh = null;
      lh = false;
    }
    var th = [];
    function uh() {
      for (var a2 = 0; a2 < th.length; a2++)
        th[a2]._workInProgressVersionPrimary = null;
      th.length = 0;
    }
    var vh = ra.ReactCurrentDispatcher;
    var wh = ra.ReactCurrentBatchConfig;
    var xh = 0;
    var R = null;
    var S2 = null;
    var T2 = null;
    var yh = false;
    var zh = false;
    function Ah() {
      throw Error(y2(321));
    }
    function Bh(a2, b2) {
      if (b2 === null)
        return false;
      for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++)
        if (!He2(a2[c2], b2[c2]))
          return false;
      return true;
    }
    function Ch(a2, b2, c2, d2, e2, f) {
      xh = f;
      R = b2;
      b2.memoizedState = null;
      b2.updateQueue = null;
      b2.lanes = 0;
      vh.current = a2 === null || a2.memoizedState === null ? Dh : Eh;
      a2 = c2(d2, e2);
      if (zh) {
        f = 0;
        do {
          zh = false;
          if (!(25 > f))
            throw Error(y2(301));
          f += 1;
          T2 = S2 = null;
          b2.updateQueue = null;
          vh.current = Fh;
          a2 = c2(d2, e2);
        } while (zh);
      }
      vh.current = Gh;
      b2 = S2 !== null && S2.next !== null;
      xh = 0;
      T2 = S2 = R = null;
      yh = false;
      if (b2)
        throw Error(y2(300));
      return a2;
    }
    function Hh() {
      var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      T2 === null ? R.memoizedState = T2 = a2 : T2 = T2.next = a2;
      return T2;
    }
    function Ih() {
      if (S2 === null) {
        var a2 = R.alternate;
        a2 = a2 !== null ? a2.memoizedState : null;
      } else
        a2 = S2.next;
      var b2 = T2 === null ? R.memoizedState : T2.next;
      if (b2 !== null)
        T2 = b2, S2 = a2;
      else {
        if (a2 === null)
          throw Error(y2(310));
        S2 = a2;
        a2 = { memoizedState: S2.memoizedState, baseState: S2.baseState, baseQueue: S2.baseQueue, queue: S2.queue, next: null };
        T2 === null ? R.memoizedState = T2 = a2 : T2 = T2.next = a2;
      }
      return T2;
    }
    function Jh(a2, b2) {
      return typeof b2 === "function" ? b2(a2) : b2;
    }
    function Kh(a2) {
      var b2 = Ih(), c2 = b2.queue;
      if (c2 === null)
        throw Error(y2(311));
      c2.lastRenderedReducer = a2;
      var d2 = S2, e2 = d2.baseQueue, f = c2.pending;
      if (f !== null) {
        if (e2 !== null) {
          var g2 = e2.next;
          e2.next = f.next;
          f.next = g2;
        }
        d2.baseQueue = e2 = f;
        c2.pending = null;
      }
      if (e2 !== null) {
        e2 = e2.next;
        d2 = d2.baseState;
        var h2 = g2 = f = null, k2 = e2;
        do {
          var l2 = k2.lane;
          if ((xh & l2) === l2)
            h2 !== null && (h2 = h2.next = { lane: 0, action: k2.action, eagerReducer: k2.eagerReducer, eagerState: k2.eagerState, next: null }), d2 = k2.eagerReducer === a2 ? k2.eagerState : a2(d2, k2.action);
          else {
            var n2 = {
              lane: l2,
              action: k2.action,
              eagerReducer: k2.eagerReducer,
              eagerState: k2.eagerState,
              next: null
            };
            h2 === null ? (g2 = h2 = n2, f = d2) : h2 = h2.next = n2;
            R.lanes |= l2;
            Dg |= l2;
          }
          k2 = k2.next;
        } while (k2 !== null && k2 !== e2);
        h2 === null ? f = d2 : h2.next = g2;
        He2(d2, b2.memoizedState) || (ug = true);
        b2.memoizedState = d2;
        b2.baseState = f;
        b2.baseQueue = h2;
        c2.lastRenderedState = d2;
      }
      return [b2.memoizedState, c2.dispatch];
    }
    function Lh(a2) {
      var b2 = Ih(), c2 = b2.queue;
      if (c2 === null)
        throw Error(y2(311));
      c2.lastRenderedReducer = a2;
      var d2 = c2.dispatch, e2 = c2.pending, f = b2.memoizedState;
      if (e2 !== null) {
        c2.pending = null;
        var g2 = e2 = e2.next;
        do
          f = a2(f, g2.action), g2 = g2.next;
        while (g2 !== e2);
        He2(f, b2.memoizedState) || (ug = true);
        b2.memoizedState = f;
        b2.baseQueue === null && (b2.baseState = f);
        c2.lastRenderedState = f;
      }
      return [f, d2];
    }
    function Mh(a2, b2, c2) {
      var d2 = b2._getVersion;
      d2 = d2(b2._source);
      var e2 = b2._workInProgressVersionPrimary;
      if (e2 !== null)
        a2 = e2 === d2;
      else if (a2 = a2.mutableReadLanes, a2 = (xh & a2) === a2)
        b2._workInProgressVersionPrimary = d2, th.push(b2);
      if (a2)
        return c2(b2._source);
      th.push(b2);
      throw Error(y2(350));
    }
    function Nh(a2, b2, c2, d2) {
      var e2 = U2;
      if (e2 === null)
        throw Error(y2(349));
      var f = b2._getVersion, g2 = f(b2._source), h2 = vh.current, k2 = h2.useState(function() {
        return Mh(e2, b2, c2);
      }), l2 = k2[1], n2 = k2[0];
      k2 = T2;
      var A2 = a2.memoizedState, p = A2.refs, C2 = p.getSnapshot, x2 = A2.source;
      A2 = A2.subscribe;
      var w2 = R;
      a2.memoizedState = { refs: p, source: b2, subscribe: d2 };
      h2.useEffect(function() {
        p.getSnapshot = c2;
        p.setSnapshot = l2;
        var a3 = f(b2._source);
        if (!He2(g2, a3)) {
          a3 = c2(b2._source);
          He2(n2, a3) || (l2(a3), a3 = Ig(w2), e2.mutableReadLanes |= a3 & e2.pendingLanes);
          a3 = e2.mutableReadLanes;
          e2.entangledLanes |= a3;
          for (var d3 = e2.entanglements, h3 = a3; 0 < h3; ) {
            var k3 = 31 - Vc(h3), v4 = 1 << k3;
            d3[k3] |= a3;
            h3 &= ~v4;
          }
        }
      }, [c2, b2, d2]);
      h2.useEffect(function() {
        return d2(b2._source, function() {
          var a3 = p.getSnapshot, c3 = p.setSnapshot;
          try {
            c3(a3(b2._source));
            var d3 = Ig(w2);
            e2.mutableReadLanes |= d3 & e2.pendingLanes;
          } catch (q2) {
            c3(function() {
              throw q2;
            });
          }
        });
      }, [b2, d2]);
      He2(C2, c2) && He2(x2, b2) && He2(A2, d2) || (a2 = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n2 }, a2.dispatch = l2 = Oh.bind(null, R, a2), k2.queue = a2, k2.baseQueue = null, n2 = Mh(e2, b2, c2), k2.memoizedState = k2.baseState = n2);
      return n2;
    }
    function Ph(a2, b2, c2) {
      var d2 = Ih();
      return Nh(d2, a2, b2, c2);
    }
    function Qh(a2) {
      var b2 = Hh();
      typeof a2 === "function" && (a2 = a2());
      b2.memoizedState = b2.baseState = a2;
      a2 = b2.queue = { pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a2 };
      a2 = a2.dispatch = Oh.bind(null, R, a2);
      return [b2.memoizedState, a2];
    }
    function Rh(a2, b2, c2, d2) {
      a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
      b2 = R.updateQueue;
      b2 === null ? (b2 = { lastEffect: null }, R.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, c2 === null ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
      return a2;
    }
    function Sh(a2) {
      var b2 = Hh();
      a2 = { current: a2 };
      return b2.memoizedState = a2;
    }
    function Th() {
      return Ih().memoizedState;
    }
    function Uh(a2, b2, c2, d2) {
      var e2 = Hh();
      R.flags |= a2;
      e2.memoizedState = Rh(1 | b2, c2, void 0, d2 === void 0 ? null : d2);
    }
    function Vh(a2, b2, c2, d2) {
      var e2 = Ih();
      d2 = d2 === void 0 ? null : d2;
      var f = void 0;
      if (S2 !== null) {
        var g2 = S2.memoizedState;
        f = g2.destroy;
        if (d2 !== null && Bh(d2, g2.deps)) {
          Rh(b2, c2, f, d2);
          return;
        }
      }
      R.flags |= a2;
      e2.memoizedState = Rh(1 | b2, c2, f, d2);
    }
    function Wh(a2, b2) {
      return Uh(516, 4, a2, b2);
    }
    function Xh(a2, b2) {
      return Vh(516, 4, a2, b2);
    }
    function Yh(a2, b2) {
      return Vh(4, 2, a2, b2);
    }
    function Zh(a2, b2) {
      if (typeof b2 === "function")
        return a2 = a2(), b2(a2), function() {
          b2(null);
        };
      if (b2 !== null && b2 !== void 0)
        return a2 = a2(), b2.current = a2, function() {
          b2.current = null;
        };
    }
    function $h(a2, b2, c2) {
      c2 = c2 !== null && c2 !== void 0 ? c2.concat([a2]) : null;
      return Vh(4, 2, Zh.bind(null, b2, a2), c2);
    }
    function ai() {
    }
    function bi(a2, b2) {
      var c2 = Ih();
      b2 = b2 === void 0 ? null : b2;
      var d2 = c2.memoizedState;
      if (d2 !== null && b2 !== null && Bh(b2, d2[1]))
        return d2[0];
      c2.memoizedState = [a2, b2];
      return a2;
    }
    function ci(a2, b2) {
      var c2 = Ih();
      b2 = b2 === void 0 ? null : b2;
      var d2 = c2.memoizedState;
      if (d2 !== null && b2 !== null && Bh(b2, d2[1]))
        return d2[0];
      a2 = a2();
      c2.memoizedState = [a2, b2];
      return a2;
    }
    function di(a2, b2) {
      var c2 = eg();
      gg(98 > c2 ? 98 : c2, function() {
        a2(true);
      });
      gg(97 < c2 ? 97 : c2, function() {
        var c3 = wh.transition;
        wh.transition = 1;
        try {
          a2(false), b2();
        } finally {
          wh.transition = c3;
        }
      });
    }
    function Oh(a2, b2, c2) {
      var d2 = Hg(), e2 = Ig(a2), f = { lane: e2, action: c2, eagerReducer: null, eagerState: null, next: null }, g2 = b2.pending;
      g2 === null ? f.next = f : (f.next = g2.next, g2.next = f);
      b2.pending = f;
      g2 = a2.alternate;
      if (a2 === R || g2 !== null && g2 === R)
        zh = yh = true;
      else {
        if (a2.lanes === 0 && (g2 === null || g2.lanes === 0) && (g2 = b2.lastRenderedReducer, g2 !== null))
          try {
            var h2 = b2.lastRenderedState, k2 = g2(h2, c2);
            f.eagerReducer = g2;
            f.eagerState = k2;
            if (He2(k2, h2))
              return;
          } catch (l2) {
          } finally {
          }
        Jg(a2, e2, d2);
      }
    }
    var Gh = { readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false };
    var Dh = { readContext: vg, useCallback: function(a2, b2) {
      Hh().memoizedState = [a2, b2 === void 0 ? null : b2];
      return a2;
    }, useContext: vg, useEffect: Wh, useImperativeHandle: function(a2, b2, c2) {
      c2 = c2 !== null && c2 !== void 0 ? c2.concat([a2]) : null;
      return Uh(4, 2, Zh.bind(null, b2, a2), c2);
    }, useLayoutEffect: function(a2, b2) {
      return Uh(4, 2, a2, b2);
    }, useMemo: function(a2, b2) {
      var c2 = Hh();
      b2 = b2 === void 0 ? null : b2;
      a2 = a2();
      c2.memoizedState = [a2, b2];
      return a2;
    }, useReducer: function(a2, b2, c2) {
      var d2 = Hh();
      b2 = c2 !== void 0 ? c2(b2) : b2;
      d2.memoizedState = d2.baseState = b2;
      a2 = d2.queue = { pending: null, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
      a2 = a2.dispatch = Oh.bind(null, R, a2);
      return [d2.memoizedState, a2];
    }, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a2) {
      var b2 = Qh(a2), c2 = b2[0], d2 = b2[1];
      Wh(function() {
        var b3 = wh.transition;
        wh.transition = 1;
        try {
          d2(a2);
        } finally {
          wh.transition = b3;
        }
      }, [a2]);
      return c2;
    }, useTransition: function() {
      var a2 = Qh(false), b2 = a2[0];
      a2 = di.bind(null, a2[1]);
      Sh(a2);
      return [a2, b2];
    }, useMutableSource: function(a2, b2, c2) {
      var d2 = Hh();
      d2.memoizedState = { refs: { getSnapshot: b2, setSnapshot: null }, source: a2, subscribe: c2 };
      return Nh(d2, a2, b2, c2);
    }, useOpaqueIdentifier: function() {
      if (lh) {
        var a2 = false, b2 = uf(function() {
          a2 || (a2 = true, c2("r:" + (tf++).toString(36)));
          throw Error(y2(355));
        }), c2 = Qh(b2)[1];
        (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
          c2("r:" + (tf++).toString(36));
        }, void 0, null));
        return b2;
      }
      b2 = "r:" + (tf++).toString(36);
      Qh(b2);
      return b2;
    }, unstable_isNewReconciler: false };
    var Eh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
      return Kh(Jh);
    }, useDebugValue: ai, useDeferredValue: function(a2) {
      var b2 = Kh(Jh), c2 = b2[0], d2 = b2[1];
      Xh(function() {
        var b3 = wh.transition;
        wh.transition = 1;
        try {
          d2(a2);
        } finally {
          wh.transition = b3;
        }
      }, [a2]);
      return c2;
    }, useTransition: function() {
      var a2 = Kh(Jh)[0];
      return [
        Th().current,
        a2
      ];
    }, useMutableSource: Ph, useOpaqueIdentifier: function() {
      return Kh(Jh)[0];
    }, unstable_isNewReconciler: false };
    var Fh = { readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
      return Lh(Jh);
    }, useDebugValue: ai, useDeferredValue: function(a2) {
      var b2 = Lh(Jh), c2 = b2[0], d2 = b2[1];
      Xh(function() {
        var b3 = wh.transition;
        wh.transition = 1;
        try {
          d2(a2);
        } finally {
          wh.transition = b3;
        }
      }, [a2]);
      return c2;
    }, useTransition: function() {
      var a2 = Lh(Jh)[0];
      return [
        Th().current,
        a2
      ];
    }, useMutableSource: Ph, useOpaqueIdentifier: function() {
      return Lh(Jh)[0];
    }, unstable_isNewReconciler: false };
    var ei = ra.ReactCurrentOwner;
    var ug = false;
    function fi(a2, b2, c2, d2) {
      b2.child = a2 === null ? Zg(b2, null, c2, d2) : Yg(b2, a2.child, c2, d2);
    }
    function gi(a2, b2, c2, d2, e2) {
      c2 = c2.render;
      var f = b2.ref;
      tg(b2, e2);
      d2 = Ch(a2, b2, c2, d2, f, e2);
      if (a2 !== null && !ug)
        return b2.updateQueue = a2.updateQueue, b2.flags &= -517, a2.lanes &= ~e2, hi(a2, b2, e2);
      b2.flags |= 1;
      fi(a2, b2, d2, e2);
      return b2.child;
    }
    function ii(a2, b2, c2, d2, e2, f) {
      if (a2 === null) {
        var g2 = c2.type;
        if (typeof g2 === "function" && !ji(g2) && g2.defaultProps === void 0 && c2.compare === null && c2.defaultProps === void 0)
          return b2.tag = 15, b2.type = g2, ki(a2, b2, g2, d2, e2, f);
        a2 = Vg(c2.type, null, d2, b2, b2.mode, f);
        a2.ref = b2.ref;
        a2.return = b2;
        return b2.child = a2;
      }
      g2 = a2.child;
      if ((e2 & f) === 0 && (e2 = g2.memoizedProps, c2 = c2.compare, c2 = c2 !== null ? c2 : Je2, c2(e2, d2) && a2.ref === b2.ref))
        return hi(a2, b2, f);
      b2.flags |= 1;
      a2 = Tg(g2, d2);
      a2.ref = b2.ref;
      a2.return = b2;
      return b2.child = a2;
    }
    function ki(a2, b2, c2, d2, e2, f) {
      if (a2 !== null && Je2(a2.memoizedProps, d2) && a2.ref === b2.ref)
        if (ug = false, (f & e2) !== 0)
          (a2.flags & 16384) !== 0 && (ug = true);
        else
          return b2.lanes = a2.lanes, hi(a2, b2, f);
      return li(a2, b2, c2, d2, f);
    }
    function mi(a2, b2, c2) {
      var d2 = b2.pendingProps, e2 = d2.children, f = a2 !== null ? a2.memoizedState : null;
      if (d2.mode === "hidden" || d2.mode === "unstable-defer-without-hiding")
        if ((b2.mode & 4) === 0)
          b2.memoizedState = { baseLanes: 0 }, ni(b2, c2);
        else if ((c2 & 1073741824) !== 0)
          b2.memoizedState = { baseLanes: 0 }, ni(b2, f !== null ? f.baseLanes : c2);
        else
          return a2 = f !== null ? f.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2 }, ni(b2, a2), null;
      else
        f !== null ? (d2 = f.baseLanes | c2, b2.memoizedState = null) : d2 = c2, ni(b2, d2);
      fi(a2, b2, e2, c2);
      return b2.child;
    }
    function oi(a2, b2) {
      var c2 = b2.ref;
      if (a2 === null && c2 !== null || a2 !== null && a2.ref !== c2)
        b2.flags |= 128;
    }
    function li(a2, b2, c2, d2, e2) {
      var f = Ff(c2) ? Df : M2.current;
      f = Ef(b2, f);
      tg(b2, e2);
      c2 = Ch(a2, b2, c2, d2, f, e2);
      if (a2 !== null && !ug)
        return b2.updateQueue = a2.updateQueue, b2.flags &= -517, a2.lanes &= ~e2, hi(a2, b2, e2);
      b2.flags |= 1;
      fi(a2, b2, c2, e2);
      return b2.child;
    }
    function pi(a2, b2, c2, d2, e2) {
      if (Ff(c2)) {
        var f = true;
        Jf(b2);
      } else
        f = false;
      tg(b2, e2);
      if (b2.stateNode === null)
        a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), Mg(b2, c2, d2), Og(b2, c2, d2, e2), d2 = true;
      else if (a2 === null) {
        var g2 = b2.stateNode, h2 = b2.memoizedProps;
        g2.props = h2;
        var k2 = g2.context, l2 = c2.contextType;
        typeof l2 === "object" && l2 !== null ? l2 = vg(l2) : (l2 = Ff(c2) ? Df : M2.current, l2 = Ef(b2, l2));
        var n2 = c2.getDerivedStateFromProps, A2 = typeof n2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function";
        A2 || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== d2 || k2 !== l2) && Ng(b2, g2, d2, l2);
        wg = false;
        var p = b2.memoizedState;
        g2.state = p;
        Cg(b2, d2, g2, e2);
        k2 = b2.memoizedState;
        h2 !== d2 || p !== k2 || N2.current || wg ? (typeof n2 === "function" && (Gg(b2, c2, n2, d2), k2 = b2.memoizedState), (h2 = wg || Lg(b2, c2, h2, d2, p, k2, l2)) ? (A2 || typeof g2.UNSAFE_componentWillMount !== "function" && typeof g2.componentWillMount !== "function" || (typeof g2.componentWillMount === "function" && g2.componentWillMount(), typeof g2.UNSAFE_componentWillMount === "function" && g2.UNSAFE_componentWillMount()), typeof g2.componentDidMount === "function" && (b2.flags |= 4)) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4), d2 = false);
      } else {
        g2 = b2.stateNode;
        yg(a2, b2);
        h2 = b2.memoizedProps;
        l2 = b2.type === b2.elementType ? h2 : lg(b2.type, h2);
        g2.props = l2;
        A2 = b2.pendingProps;
        p = g2.context;
        k2 = c2.contextType;
        typeof k2 === "object" && k2 !== null ? k2 = vg(k2) : (k2 = Ff(c2) ? Df : M2.current, k2 = Ef(b2, k2));
        var C2 = c2.getDerivedStateFromProps;
        (n2 = typeof C2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function") || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== A2 || p !== k2) && Ng(b2, g2, d2, k2);
        wg = false;
        p = b2.memoizedState;
        g2.state = p;
        Cg(b2, d2, g2, e2);
        var x2 = b2.memoizedState;
        h2 !== A2 || p !== x2 || N2.current || wg ? (typeof C2 === "function" && (Gg(b2, c2, C2, d2), x2 = b2.memoizedState), (l2 = wg || Lg(b2, c2, l2, d2, p, x2, k2)) ? (n2 || typeof g2.UNSAFE_componentWillUpdate !== "function" && typeof g2.componentWillUpdate !== "function" || (typeof g2.componentWillUpdate === "function" && g2.componentWillUpdate(d2, x2, k2), typeof g2.UNSAFE_componentWillUpdate === "function" && g2.UNSAFE_componentWillUpdate(d2, x2, k2)), typeof g2.componentDidUpdate === "function" && (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate === "function" && (b2.flags |= 256)) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && p === a2.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && p === a2.memoizedState || (b2.flags |= 256), b2.memoizedProps = d2, b2.memoizedState = x2), g2.props = d2, g2.state = x2, g2.context = k2, d2 = l2) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && p === a2.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && p === a2.memoizedState || (b2.flags |= 256), d2 = false);
      }
      return qi(a2, b2, c2, d2, f, e2);
    }
    function qi(a2, b2, c2, d2, e2, f) {
      oi(a2, b2);
      var g2 = (b2.flags & 64) !== 0;
      if (!d2 && !g2)
        return e2 && Kf(b2, c2, false), hi(a2, b2, f);
      d2 = b2.stateNode;
      ei.current = b2;
      var h2 = g2 && typeof c2.getDerivedStateFromError !== "function" ? null : d2.render();
      b2.flags |= 1;
      a2 !== null && g2 ? (b2.child = Yg(b2, a2.child, null, f), b2.child = Yg(b2, null, h2, f)) : fi(a2, b2, h2, f);
      b2.memoizedState = d2.state;
      e2 && Kf(b2, c2, true);
      return b2.child;
    }
    function ri(a2) {
      var b2 = a2.stateNode;
      b2.pendingContext ? Hf(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && Hf(a2, b2.context, false);
      eh(a2, b2.containerInfo);
    }
    var si = { dehydrated: null, retryLane: 0 };
    function ti(a2, b2, c2) {
      var d2 = b2.pendingProps, e2 = P2.current, f = false, g2;
      (g2 = (b2.flags & 64) !== 0) || (g2 = a2 !== null && a2.memoizedState === null ? false : (e2 & 2) !== 0);
      g2 ? (f = true, b2.flags &= -65) : a2 !== null && a2.memoizedState === null || d2.fallback === void 0 || d2.unstable_avoidThisFallback === true || (e2 |= 1);
      I2(P2, e2 & 1);
      if (a2 === null) {
        d2.fallback !== void 0 && ph(b2);
        a2 = d2.children;
        e2 = d2.fallback;
        if (f)
          return a2 = ui(b2, a2, e2, c2), b2.child.memoizedState = { baseLanes: c2 }, b2.memoizedState = si, a2;
        if (typeof d2.unstable_expectedLoadTime === "number")
          return a2 = ui(b2, a2, e2, c2), b2.child.memoizedState = { baseLanes: c2 }, b2.memoizedState = si, b2.lanes = 33554432, a2;
        c2 = vi({ mode: "visible", children: a2 }, b2.mode, c2, null);
        c2.return = b2;
        return b2.child = c2;
      }
      if (a2.memoizedState !== null) {
        if (f)
          return d2 = wi(a2, b2, d2.children, d2.fallback, c2), f = b2.child, e2 = a2.child.memoizedState, f.memoizedState = e2 === null ? { baseLanes: c2 } : { baseLanes: e2.baseLanes | c2 }, f.childLanes = a2.childLanes & ~c2, b2.memoizedState = si, d2;
        c2 = xi(a2, b2, d2.children, c2);
        b2.memoizedState = null;
        return c2;
      }
      if (f)
        return d2 = wi(a2, b2, d2.children, d2.fallback, c2), f = b2.child, e2 = a2.child.memoizedState, f.memoizedState = e2 === null ? { baseLanes: c2 } : { baseLanes: e2.baseLanes | c2 }, f.childLanes = a2.childLanes & ~c2, b2.memoizedState = si, d2;
      c2 = xi(a2, b2, d2.children, c2);
      b2.memoizedState = null;
      return c2;
    }
    function ui(a2, b2, c2, d2) {
      var e2 = a2.mode, f = a2.child;
      b2 = { mode: "hidden", children: b2 };
      (e2 & 2) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = b2) : f = vi(b2, e2, 0, null);
      c2 = Xg(c2, e2, d2, null);
      f.return = a2;
      c2.return = a2;
      f.sibling = c2;
      a2.child = f;
      return c2;
    }
    function xi(a2, b2, c2, d2) {
      var e2 = a2.child;
      a2 = e2.sibling;
      c2 = Tg(e2, { mode: "visible", children: c2 });
      (b2.mode & 2) === 0 && (c2.lanes = d2);
      c2.return = b2;
      c2.sibling = null;
      a2 !== null && (a2.nextEffect = null, a2.flags = 8, b2.firstEffect = b2.lastEffect = a2);
      return b2.child = c2;
    }
    function wi(a2, b2, c2, d2, e2) {
      var f = b2.mode, g2 = a2.child;
      a2 = g2.sibling;
      var h2 = { mode: "hidden", children: c2 };
      (f & 2) === 0 && b2.child !== g2 ? (c2 = b2.child, c2.childLanes = 0, c2.pendingProps = h2, g2 = c2.lastEffect, g2 !== null ? (b2.firstEffect = c2.firstEffect, b2.lastEffect = g2, g2.nextEffect = null) : b2.firstEffect = b2.lastEffect = null) : c2 = Tg(g2, h2);
      a2 !== null ? d2 = Tg(a2, d2) : (d2 = Xg(d2, f, e2, null), d2.flags |= 2);
      d2.return = b2;
      c2.return = b2;
      c2.sibling = d2;
      b2.child = c2;
      return d2;
    }
    function yi(a2, b2) {
      a2.lanes |= b2;
      var c2 = a2.alternate;
      c2 !== null && (c2.lanes |= b2);
      sg(a2.return, b2);
    }
    function zi(a2, b2, c2, d2, e2, f) {
      var g2 = a2.memoizedState;
      g2 === null ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2, lastEffect: f } : (g2.isBackwards = b2, g2.rendering = null, g2.renderingStartTime = 0, g2.last = d2, g2.tail = c2, g2.tailMode = e2, g2.lastEffect = f);
    }
    function Ai(a2, b2, c2) {
      var d2 = b2.pendingProps, e2 = d2.revealOrder, f = d2.tail;
      fi(a2, b2, d2.children, c2);
      d2 = P2.current;
      if ((d2 & 2) !== 0)
        d2 = d2 & 1 | 2, b2.flags |= 64;
      else {
        if (a2 !== null && (a2.flags & 64) !== 0)
          a:
            for (a2 = b2.child; a2 !== null; ) {
              if (a2.tag === 13)
                a2.memoizedState !== null && yi(a2, c2);
              else if (a2.tag === 19)
                yi(a2, c2);
              else if (a2.child !== null) {
                a2.child.return = a2;
                a2 = a2.child;
                continue;
              }
              if (a2 === b2)
                break a;
              for (; a2.sibling === null; ) {
                if (a2.return === null || a2.return === b2)
                  break a;
                a2 = a2.return;
              }
              a2.sibling.return = a2.return;
              a2 = a2.sibling;
            }
        d2 &= 1;
      }
      I2(P2, d2);
      if ((b2.mode & 2) === 0)
        b2.memoizedState = null;
      else
        switch (e2) {
          case "forwards":
            c2 = b2.child;
            for (e2 = null; c2 !== null; )
              a2 = c2.alternate, a2 !== null && ih(a2) === null && (e2 = c2), c2 = c2.sibling;
            c2 = e2;
            c2 === null ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
            zi(b2, false, e2, c2, f, b2.lastEffect);
            break;
          case "backwards":
            c2 = null;
            e2 = b2.child;
            for (b2.child = null; e2 !== null; ) {
              a2 = e2.alternate;
              if (a2 !== null && ih(a2) === null) {
                b2.child = e2;
                break;
              }
              a2 = e2.sibling;
              e2.sibling = c2;
              c2 = e2;
              e2 = a2;
            }
            zi(b2, true, c2, null, f, b2.lastEffect);
            break;
          case "together":
            zi(b2, false, null, null, void 0, b2.lastEffect);
            break;
          default:
            b2.memoizedState = null;
        }
      return b2.child;
    }
    function hi(a2, b2, c2) {
      a2 !== null && (b2.dependencies = a2.dependencies);
      Dg |= b2.lanes;
      if ((c2 & b2.childLanes) !== 0) {
        if (a2 !== null && b2.child !== a2.child)
          throw Error(y2(153));
        if (b2.child !== null) {
          a2 = b2.child;
          c2 = Tg(a2, a2.pendingProps);
          b2.child = c2;
          for (c2.return = b2; a2.sibling !== null; )
            a2 = a2.sibling, c2 = c2.sibling = Tg(a2, a2.pendingProps), c2.return = b2;
          c2.sibling = null;
        }
        return b2.child;
      }
      return null;
    }
    var Bi;
    var Ci;
    var Di;
    var Ei;
    Bi = function(a2, b2) {
      for (var c2 = b2.child; c2 !== null; ) {
        if (c2.tag === 5 || c2.tag === 6)
          a2.appendChild(c2.stateNode);
        else if (c2.tag !== 4 && c2.child !== null) {
          c2.child.return = c2;
          c2 = c2.child;
          continue;
        }
        if (c2 === b2)
          break;
        for (; c2.sibling === null; ) {
          if (c2.return === null || c2.return === b2)
            return;
          c2 = c2.return;
        }
        c2.sibling.return = c2.return;
        c2 = c2.sibling;
      }
    };
    Ci = function() {
    };
    Di = function(a2, b2, c2, d2) {
      var e2 = a2.memoizedProps;
      if (e2 !== d2) {
        a2 = b2.stateNode;
        dh(ah.current);
        var f = null;
        switch (c2) {
          case "input":
            e2 = Ya(a2, e2);
            d2 = Ya(a2, d2);
            f = [];
            break;
          case "option":
            e2 = eb(a2, e2);
            d2 = eb(a2, d2);
            f = [];
            break;
          case "select":
            e2 = m2({}, e2, { value: void 0 });
            d2 = m2({}, d2, { value: void 0 });
            f = [];
            break;
          case "textarea":
            e2 = gb(a2, e2);
            d2 = gb(a2, d2);
            f = [];
            break;
          default:
            typeof e2.onClick !== "function" && typeof d2.onClick === "function" && (a2.onclick = jf);
        }
        vb(c2, d2);
        var g2;
        c2 = null;
        for (l2 in e2)
          if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && e2[l2] != null)
            if (l2 === "style") {
              var h2 = e2[l2];
              for (g2 in h2)
                h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
            } else
              l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ca.hasOwnProperty(l2) ? f || (f = []) : (f = f || []).push(l2, null));
        for (l2 in d2) {
          var k2 = d2[l2];
          h2 = e2 != null ? e2[l2] : void 0;
          if (d2.hasOwnProperty(l2) && k2 !== h2 && (k2 != null || h2 != null))
            if (l2 === "style")
              if (h2) {
                for (g2 in h2)
                  !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
                for (g2 in k2)
                  k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
              } else
                c2 || (f || (f = []), f.push(l2, c2)), c2 = k2;
            else
              l2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, k2 != null && h2 !== k2 && (f = f || []).push(l2, k2)) : l2 === "children" ? typeof k2 !== "string" && typeof k2 !== "number" || (f = f || []).push(l2, "" + k2) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ca.hasOwnProperty(l2) ? (k2 != null && l2 === "onScroll" && G2("scroll", a2), f || h2 === k2 || (f = [])) : typeof k2 === "object" && k2 !== null && k2.$$typeof === Ga ? k2.toString() : (f = f || []).push(l2, k2));
        }
        c2 && (f = f || []).push("style", c2);
        var l2 = f;
        if (b2.updateQueue = l2)
          b2.flags |= 4;
      }
    };
    Ei = function(a2, b2, c2, d2) {
      c2 !== d2 && (b2.flags |= 4);
    };
    function Fi(a2, b2) {
      if (!lh)
        switch (a2.tailMode) {
          case "hidden":
            b2 = a2.tail;
            for (var c2 = null; b2 !== null; )
              b2.alternate !== null && (c2 = b2), b2 = b2.sibling;
            c2 === null ? a2.tail = null : c2.sibling = null;
            break;
          case "collapsed":
            c2 = a2.tail;
            for (var d2 = null; c2 !== null; )
              c2.alternate !== null && (d2 = c2), c2 = c2.sibling;
            d2 === null ? b2 || a2.tail === null ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
        }
    }
    function Gi(a2, b2, c2) {
      var d2 = b2.pendingProps;
      switch (b2.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return null;
        case 1:
          return Ff(b2.type) && Gf(), null;
        case 3:
          fh();
          H2(N2);
          H2(M2);
          uh();
          d2 = b2.stateNode;
          d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
          if (a2 === null || a2.child === null)
            rh(b2) ? b2.flags |= 4 : d2.hydrate || (b2.flags |= 256);
          Ci(b2);
          return null;
        case 5:
          hh(b2);
          var e2 = dh(ch.current);
          c2 = b2.type;
          if (a2 !== null && b2.stateNode != null)
            Di(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 128);
          else {
            if (!d2) {
              if (b2.stateNode === null)
                throw Error(y2(166));
              return null;
            }
            a2 = dh(ah.current);
            if (rh(b2)) {
              d2 = b2.stateNode;
              c2 = b2.type;
              var f = b2.memoizedProps;
              d2[wf] = b2;
              d2[xf] = f;
              switch (c2) {
                case "dialog":
                  G2("cancel", d2);
                  G2("close", d2);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  G2("load", d2);
                  break;
                case "video":
                case "audio":
                  for (a2 = 0; a2 < Xe2.length; a2++)
                    G2(Xe2[a2], d2);
                  break;
                case "source":
                  G2("error", d2);
                  break;
                case "img":
                case "image":
                case "link":
                  G2("error", d2);
                  G2("load", d2);
                  break;
                case "details":
                  G2("toggle", d2);
                  break;
                case "input":
                  Za(d2, f);
                  G2("invalid", d2);
                  break;
                case "select":
                  d2._wrapperState = { wasMultiple: !!f.multiple };
                  G2("invalid", d2);
                  break;
                case "textarea":
                  hb(d2, f), G2("invalid", d2);
              }
              vb(c2, f);
              a2 = null;
              for (var g2 in f)
                f.hasOwnProperty(g2) && (e2 = f[g2], g2 === "children" ? typeof e2 === "string" ? d2.textContent !== e2 && (a2 = ["children", e2]) : typeof e2 === "number" && d2.textContent !== "" + e2 && (a2 = ["children", "" + e2]) : ca.hasOwnProperty(g2) && e2 != null && g2 === "onScroll" && G2("scroll", d2));
              switch (c2) {
                case "input":
                  Va(d2);
                  cb(d2, f, true);
                  break;
                case "textarea":
                  Va(d2);
                  jb(d2);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof f.onClick === "function" && (d2.onclick = jf);
              }
              d2 = a2;
              b2.updateQueue = d2;
              d2 !== null && (b2.flags |= 4);
            } else {
              g2 = e2.nodeType === 9 ? e2 : e2.ownerDocument;
              a2 === kb.html && (a2 = lb(c2));
              a2 === kb.html ? c2 === "script" ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : typeof d2.is === "string" ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), c2 === "select" && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
              a2[wf] = b2;
              a2[xf] = d2;
              Bi(a2, b2, false, false);
              b2.stateNode = a2;
              g2 = wb(c2, d2);
              switch (c2) {
                case "dialog":
                  G2("cancel", a2);
                  G2("close", a2);
                  e2 = d2;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  G2("load", a2);
                  e2 = d2;
                  break;
                case "video":
                case "audio":
                  for (e2 = 0; e2 < Xe2.length; e2++)
                    G2(Xe2[e2], a2);
                  e2 = d2;
                  break;
                case "source":
                  G2("error", a2);
                  e2 = d2;
                  break;
                case "img":
                case "image":
                case "link":
                  G2("error", a2);
                  G2("load", a2);
                  e2 = d2;
                  break;
                case "details":
                  G2("toggle", a2);
                  e2 = d2;
                  break;
                case "input":
                  Za(a2, d2);
                  e2 = Ya(a2, d2);
                  G2("invalid", a2);
                  break;
                case "option":
                  e2 = eb(a2, d2);
                  break;
                case "select":
                  a2._wrapperState = { wasMultiple: !!d2.multiple };
                  e2 = m2({}, d2, { value: void 0 });
                  G2("invalid", a2);
                  break;
                case "textarea":
                  hb(a2, d2);
                  e2 = gb(a2, d2);
                  G2("invalid", a2);
                  break;
                default:
                  e2 = d2;
              }
              vb(c2, e2);
              var h2 = e2;
              for (f in h2)
                if (h2.hasOwnProperty(f)) {
                  var k2 = h2[f];
                  f === "style" ? tb(a2, k2) : f === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, k2 != null && ob(a2, k2)) : f === "children" ? typeof k2 === "string" ? (c2 !== "textarea" || k2 !== "") && pb(a2, k2) : typeof k2 === "number" && pb(a2, "" + k2) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (ca.hasOwnProperty(f) ? k2 != null && f === "onScroll" && G2("scroll", a2) : k2 != null && qa(a2, f, k2, g2));
                }
              switch (c2) {
                case "input":
                  Va(a2);
                  cb(a2, d2, false);
                  break;
                case "textarea":
                  Va(a2);
                  jb(a2);
                  break;
                case "option":
                  d2.value != null && a2.setAttribute("value", "" + Sa(d2.value));
                  break;
                case "select":
                  a2.multiple = !!d2.multiple;
                  f = d2.value;
                  f != null ? fb(a2, !!d2.multiple, f, false) : d2.defaultValue != null && fb(a2, !!d2.multiple, d2.defaultValue, true);
                  break;
                default:
                  typeof e2.onClick === "function" && (a2.onclick = jf);
              }
              mf(c2, d2) && (b2.flags |= 4);
            }
            b2.ref !== null && (b2.flags |= 128);
          }
          return null;
        case 6:
          if (a2 && b2.stateNode != null)
            Ei(a2, b2, a2.memoizedProps, d2);
          else {
            if (typeof d2 !== "string" && b2.stateNode === null)
              throw Error(y2(166));
            c2 = dh(ch.current);
            dh(ah.current);
            rh(b2) ? (d2 = b2.stateNode, c2 = b2.memoizedProps, d2[wf] = b2, d2.nodeValue !== c2 && (b2.flags |= 4)) : (d2 = (c2.nodeType === 9 ? c2 : c2.ownerDocument).createTextNode(d2), d2[wf] = b2, b2.stateNode = d2);
          }
          return null;
        case 13:
          H2(P2);
          d2 = b2.memoizedState;
          if ((b2.flags & 64) !== 0)
            return b2.lanes = c2, b2;
          d2 = d2 !== null;
          c2 = false;
          a2 === null ? b2.memoizedProps.fallback !== void 0 && rh(b2) : c2 = a2.memoizedState !== null;
          if (d2 && !c2 && (b2.mode & 2) !== 0)
            if (a2 === null && b2.memoizedProps.unstable_avoidThisFallback !== true || (P2.current & 1) !== 0)
              V2 === 0 && (V2 = 3);
            else {
              if (V2 === 0 || V2 === 3)
                V2 = 4;
              U2 === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U2, W2);
            }
          if (d2 || c2)
            b2.flags |= 4;
          return null;
        case 4:
          return fh(), Ci(b2), a2 === null && cf(b2.stateNode.containerInfo), null;
        case 10:
          return rg(b2), null;
        case 17:
          return Ff(b2.type) && Gf(), null;
        case 19:
          H2(P2);
          d2 = b2.memoizedState;
          if (d2 === null)
            return null;
          f = (b2.flags & 64) !== 0;
          g2 = d2.rendering;
          if (g2 === null)
            if (f)
              Fi(d2, false);
            else {
              if (V2 !== 0 || a2 !== null && (a2.flags & 64) !== 0)
                for (a2 = b2.child; a2 !== null; ) {
                  g2 = ih(a2);
                  if (g2 !== null) {
                    b2.flags |= 64;
                    Fi(d2, false);
                    f = g2.updateQueue;
                    f !== null && (b2.updateQueue = f, b2.flags |= 4);
                    d2.lastEffect === null && (b2.firstEffect = null);
                    b2.lastEffect = d2.lastEffect;
                    d2 = c2;
                    for (c2 = b2.child; c2 !== null; )
                      f = c2, a2 = d2, f.flags &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g2 = f.alternate, g2 === null ? (f.childLanes = 0, f.lanes = a2, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g2.childLanes, f.lanes = g2.lanes, f.child = g2.child, f.memoizedProps = g2.memoizedProps, f.memoizedState = g2.memoizedState, f.updateQueue = g2.updateQueue, f.type = g2.type, a2 = g2.dependencies, f.dependencies = a2 === null ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
                    I2(P2, P2.current & 1 | 2);
                    return b2.child;
                  }
                  a2 = a2.sibling;
                }
              d2.tail !== null && O2() > Ji && (b2.flags |= 64, f = true, Fi(d2, false), b2.lanes = 33554432);
            }
          else {
            if (!f)
              if (a2 = ih(g2), a2 !== null) {
                if (b2.flags |= 64, f = true, c2 = a2.updateQueue, c2 !== null && (b2.updateQueue = c2, b2.flags |= 4), Fi(d2, true), d2.tail === null && d2.tailMode === "hidden" && !g2.alternate && !lh)
                  return b2 = b2.lastEffect = d2.lastEffect, b2 !== null && (b2.nextEffect = null), null;
              } else
                2 * O2() - d2.renderingStartTime > Ji && c2 !== 1073741824 && (b2.flags |= 64, f = true, Fi(d2, false), b2.lanes = 33554432);
            d2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = d2.last, c2 !== null ? c2.sibling = g2 : b2.child = g2, d2.last = g2);
          }
          return d2.tail !== null ? (c2 = d2.tail, d2.rendering = c2, d2.tail = c2.sibling, d2.lastEffect = b2.lastEffect, d2.renderingStartTime = O2(), c2.sibling = null, b2 = P2.current, I2(P2, f ? b2 & 1 | 2 : b2 & 1), c2) : null;
        case 23:
        case 24:
          return Ki(), a2 !== null && a2.memoizedState !== null !== (b2.memoizedState !== null) && d2.mode !== "unstable-defer-without-hiding" && (b2.flags |= 4), null;
      }
      throw Error(y2(156, b2.tag));
    }
    function Li(a2) {
      switch (a2.tag) {
        case 1:
          Ff(a2.type) && Gf();
          var b2 = a2.flags;
          return b2 & 4096 ? (a2.flags = b2 & -4097 | 64, a2) : null;
        case 3:
          fh();
          H2(N2);
          H2(M2);
          uh();
          b2 = a2.flags;
          if ((b2 & 64) !== 0)
            throw Error(y2(285));
          a2.flags = b2 & -4097 | 64;
          return a2;
        case 5:
          return hh(a2), null;
        case 13:
          return H2(P2), b2 = a2.flags, b2 & 4096 ? (a2.flags = b2 & -4097 | 64, a2) : null;
        case 19:
          return H2(P2), null;
        case 4:
          return fh(), null;
        case 10:
          return rg(a2), null;
        case 23:
        case 24:
          return Ki(), null;
        default:
          return null;
      }
    }
    function Mi(a2, b2) {
      try {
        var c2 = "", d2 = b2;
        do
          c2 += Qa(d2), d2 = d2.return;
        while (d2);
        var e2 = c2;
      } catch (f) {
        e2 = "\nError generating stack: " + f.message + "\n" + f.stack;
      }
      return { value: a2, source: b2, stack: e2 };
    }
    function Ni(a2, b2) {
      try {
        console.error(b2.value);
      } catch (c2) {
        setTimeout(function() {
          throw c2;
        });
      }
    }
    var Oi = typeof WeakMap === "function" ? WeakMap : Map;
    function Pi(a2, b2, c2) {
      c2 = zg(-1, c2);
      c2.tag = 3;
      c2.payload = { element: null };
      var d2 = b2.value;
      c2.callback = function() {
        Qi || (Qi = true, Ri = d2);
        Ni(a2, b2);
      };
      return c2;
    }
    function Si(a2, b2, c2) {
      c2 = zg(-1, c2);
      c2.tag = 3;
      var d2 = a2.type.getDerivedStateFromError;
      if (typeof d2 === "function") {
        var e2 = b2.value;
        c2.payload = function() {
          Ni(a2, b2);
          return d2(e2);
        };
      }
      var f = a2.stateNode;
      f !== null && typeof f.componentDidCatch === "function" && (c2.callback = function() {
        typeof d2 !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a2, b2));
        var c3 = b2.stack;
        this.componentDidCatch(b2.value, { componentStack: c3 !== null ? c3 : "" });
      });
      return c2;
    }
    var Ui = typeof WeakSet === "function" ? WeakSet : Set;
    function Vi(a2) {
      var b2 = a2.ref;
      if (b2 !== null)
        if (typeof b2 === "function")
          try {
            b2(null);
          } catch (c2) {
            Wi(a2, c2);
          }
        else
          b2.current = null;
    }
    function Xi(a2, b2) {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return;
        case 1:
          if (b2.flags & 256 && a2 !== null) {
            var c2 = a2.memoizedProps, d2 = a2.memoizedState;
            a2 = b2.stateNode;
            b2 = a2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? c2 : lg(b2.type, c2), d2);
            a2.__reactInternalSnapshotBeforeUpdate = b2;
          }
          return;
        case 3:
          b2.flags & 256 && qf(b2.stateNode.containerInfo);
          return;
        case 5:
        case 6:
        case 4:
        case 17:
          return;
      }
      throw Error(y2(163));
    }
    function Yi(a2, b2, c2) {
      switch (c2.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          b2 = c2.updateQueue;
          b2 = b2 !== null ? b2.lastEffect : null;
          if (b2 !== null) {
            a2 = b2 = b2.next;
            do {
              if ((a2.tag & 3) === 3) {
                var d2 = a2.create;
                a2.destroy = d2();
              }
              a2 = a2.next;
            } while (a2 !== b2);
          }
          b2 = c2.updateQueue;
          b2 = b2 !== null ? b2.lastEffect : null;
          if (b2 !== null) {
            a2 = b2 = b2.next;
            do {
              var e2 = a2;
              d2 = e2.next;
              e2 = e2.tag;
              (e2 & 4) !== 0 && (e2 & 1) !== 0 && (Zi(c2, a2), $i(c2, a2));
              a2 = d2;
            } while (a2 !== b2);
          }
          return;
        case 1:
          a2 = c2.stateNode;
          c2.flags & 4 && (b2 === null ? a2.componentDidMount() : (d2 = c2.elementType === c2.type ? b2.memoizedProps : lg(c2.type, b2.memoizedProps), a2.componentDidUpdate(d2, b2.memoizedState, a2.__reactInternalSnapshotBeforeUpdate)));
          b2 = c2.updateQueue;
          b2 !== null && Eg(c2, b2, a2);
          return;
        case 3:
          b2 = c2.updateQueue;
          if (b2 !== null) {
            a2 = null;
            if (c2.child !== null)
              switch (c2.child.tag) {
                case 5:
                  a2 = c2.child.stateNode;
                  break;
                case 1:
                  a2 = c2.child.stateNode;
              }
            Eg(c2, b2, a2);
          }
          return;
        case 5:
          a2 = c2.stateNode;
          b2 === null && c2.flags & 4 && mf(c2.type, c2.memoizedProps) && a2.focus();
          return;
        case 6:
          return;
        case 4:
          return;
        case 12:
          return;
        case 13:
          c2.memoizedState === null && (c2 = c2.alternate, c2 !== null && (c2 = c2.memoizedState, c2 !== null && (c2 = c2.dehydrated, c2 !== null && Cc(c2))));
          return;
        case 19:
        case 17:
        case 20:
        case 21:
        case 23:
        case 24:
          return;
      }
      throw Error(y2(163));
    }
    function aj(a2, b2) {
      for (var c2 = a2; ; ) {
        if (c2.tag === 5) {
          var d2 = c2.stateNode;
          if (b2)
            d2 = d2.style, typeof d2.setProperty === "function" ? d2.setProperty("display", "none", "important") : d2.display = "none";
          else {
            d2 = c2.stateNode;
            var e2 = c2.memoizedProps.style;
            e2 = e2 !== void 0 && e2 !== null && e2.hasOwnProperty("display") ? e2.display : null;
            d2.style.display = sb("display", e2);
          }
        } else if (c2.tag === 6)
          c2.stateNode.nodeValue = b2 ? "" : c2.memoizedProps;
        else if ((c2.tag !== 23 && c2.tag !== 24 || c2.memoizedState === null || c2 === a2) && c2.child !== null) {
          c2.child.return = c2;
          c2 = c2.child;
          continue;
        }
        if (c2 === a2)
          break;
        for (; c2.sibling === null; ) {
          if (c2.return === null || c2.return === a2)
            return;
          c2 = c2.return;
        }
        c2.sibling.return = c2.return;
        c2 = c2.sibling;
      }
    }
    function bj(a2, b2) {
      if (Mf && typeof Mf.onCommitFiberUnmount === "function")
        try {
          Mf.onCommitFiberUnmount(Lf, b2);
        } catch (f) {
        }
      switch (b2.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          a2 = b2.updateQueue;
          if (a2 !== null && (a2 = a2.lastEffect, a2 !== null)) {
            var c2 = a2 = a2.next;
            do {
              var d2 = c2, e2 = d2.destroy;
              d2 = d2.tag;
              if (e2 !== void 0)
                if ((d2 & 4) !== 0)
                  Zi(b2, c2);
                else {
                  d2 = b2;
                  try {
                    e2();
                  } catch (f) {
                    Wi(d2, f);
                  }
                }
              c2 = c2.next;
            } while (c2 !== a2);
          }
          break;
        case 1:
          Vi(b2);
          a2 = b2.stateNode;
          if (typeof a2.componentWillUnmount === "function")
            try {
              a2.props = b2.memoizedProps, a2.state = b2.memoizedState, a2.componentWillUnmount();
            } catch (f) {
              Wi(b2, f);
            }
          break;
        case 5:
          Vi(b2);
          break;
        case 4:
          cj(a2, b2);
      }
    }
    function dj(a2) {
      a2.alternate = null;
      a2.child = null;
      a2.dependencies = null;
      a2.firstEffect = null;
      a2.lastEffect = null;
      a2.memoizedProps = null;
      a2.memoizedState = null;
      a2.pendingProps = null;
      a2.return = null;
      a2.updateQueue = null;
    }
    function ej(a2) {
      return a2.tag === 5 || a2.tag === 3 || a2.tag === 4;
    }
    function fj(a2) {
      a: {
        for (var b2 = a2.return; b2 !== null; ) {
          if (ej(b2))
            break a;
          b2 = b2.return;
        }
        throw Error(y2(160));
      }
      var c2 = b2;
      b2 = c2.stateNode;
      switch (c2.tag) {
        case 5:
          var d2 = false;
          break;
        case 3:
          b2 = b2.containerInfo;
          d2 = true;
          break;
        case 4:
          b2 = b2.containerInfo;
          d2 = true;
          break;
        default:
          throw Error(y2(161));
      }
      c2.flags & 16 && (pb(b2, ""), c2.flags &= -17);
      a:
        b:
          for (c2 = a2; ; ) {
            for (; c2.sibling === null; ) {
              if (c2.return === null || ej(c2.return)) {
                c2 = null;
                break a;
              }
              c2 = c2.return;
            }
            c2.sibling.return = c2.return;
            for (c2 = c2.sibling; c2.tag !== 5 && c2.tag !== 6 && c2.tag !== 18; ) {
              if (c2.flags & 2)
                continue b;
              if (c2.child === null || c2.tag === 4)
                continue b;
              else
                c2.child.return = c2, c2 = c2.child;
            }
            if (!(c2.flags & 2)) {
              c2 = c2.stateNode;
              break a;
            }
          }
      d2 ? gj(a2, c2, b2) : hj(a2, c2, b2);
    }
    function gj(a2, b2, c2) {
      var d2 = a2.tag, e2 = d2 === 5 || d2 === 6;
      if (e2)
        a2 = e2 ? a2.stateNode : a2.stateNode.instance, b2 ? c2.nodeType === 8 ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (c2.nodeType === 8 ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, c2 !== null && c2 !== void 0 || b2.onclick !== null || (b2.onclick = jf));
      else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
        for (gj(a2, b2, c2), a2 = a2.sibling; a2 !== null; )
          gj(a2, b2, c2), a2 = a2.sibling;
    }
    function hj(a2, b2, c2) {
      var d2 = a2.tag, e2 = d2 === 5 || d2 === 6;
      if (e2)
        a2 = e2 ? a2.stateNode : a2.stateNode.instance, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
      else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
        for (hj(a2, b2, c2), a2 = a2.sibling; a2 !== null; )
          hj(a2, b2, c2), a2 = a2.sibling;
    }
    function cj(a2, b2) {
      for (var c2 = b2, d2 = false, e2, f; ; ) {
        if (!d2) {
          d2 = c2.return;
          a:
            for (; ; ) {
              if (d2 === null)
                throw Error(y2(160));
              e2 = d2.stateNode;
              switch (d2.tag) {
                case 5:
                  f = false;
                  break a;
                case 3:
                  e2 = e2.containerInfo;
                  f = true;
                  break a;
                case 4:
                  e2 = e2.containerInfo;
                  f = true;
                  break a;
              }
              d2 = d2.return;
            }
          d2 = true;
        }
        if (c2.tag === 5 || c2.tag === 6) {
          a:
            for (var g2 = a2, h2 = c2, k2 = h2; ; )
              if (bj(g2, k2), k2.child !== null && k2.tag !== 4)
                k2.child.return = k2, k2 = k2.child;
              else {
                if (k2 === h2)
                  break a;
                for (; k2.sibling === null; ) {
                  if (k2.return === null || k2.return === h2)
                    break a;
                  k2 = k2.return;
                }
                k2.sibling.return = k2.return;
                k2 = k2.sibling;
              }
          f ? (g2 = e2, h2 = c2.stateNode, g2.nodeType === 8 ? g2.parentNode.removeChild(h2) : g2.removeChild(h2)) : e2.removeChild(c2.stateNode);
        } else if (c2.tag === 4) {
          if (c2.child !== null) {
            e2 = c2.stateNode.containerInfo;
            f = true;
            c2.child.return = c2;
            c2 = c2.child;
            continue;
          }
        } else if (bj(a2, c2), c2.child !== null) {
          c2.child.return = c2;
          c2 = c2.child;
          continue;
        }
        if (c2 === b2)
          break;
        for (; c2.sibling === null; ) {
          if (c2.return === null || c2.return === b2)
            return;
          c2 = c2.return;
          c2.tag === 4 && (d2 = false);
        }
        c2.sibling.return = c2.return;
        c2 = c2.sibling;
      }
    }
    function ij(a2, b2) {
      switch (b2.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          var c2 = b2.updateQueue;
          c2 = c2 !== null ? c2.lastEffect : null;
          if (c2 !== null) {
            var d2 = c2 = c2.next;
            do
              (d2.tag & 3) === 3 && (a2 = d2.destroy, d2.destroy = void 0, a2 !== void 0 && a2()), d2 = d2.next;
            while (d2 !== c2);
          }
          return;
        case 1:
          return;
        case 5:
          c2 = b2.stateNode;
          if (c2 != null) {
            d2 = b2.memoizedProps;
            var e2 = a2 !== null ? a2.memoizedProps : d2;
            a2 = b2.type;
            var f = b2.updateQueue;
            b2.updateQueue = null;
            if (f !== null) {
              c2[xf] = d2;
              a2 === "input" && d2.type === "radio" && d2.name != null && $a(c2, d2);
              wb(a2, e2);
              b2 = wb(a2, d2);
              for (e2 = 0; e2 < f.length; e2 += 2) {
                var g2 = f[e2], h2 = f[e2 + 1];
                g2 === "style" ? tb(c2, h2) : g2 === "dangerouslySetInnerHTML" ? ob(c2, h2) : g2 === "children" ? pb(c2, h2) : qa(c2, g2, h2, b2);
              }
              switch (a2) {
                case "input":
                  ab(c2, d2);
                  break;
                case "textarea":
                  ib(c2, d2);
                  break;
                case "select":
                  a2 = c2._wrapperState.wasMultiple, c2._wrapperState.wasMultiple = !!d2.multiple, f = d2.value, f != null ? fb(c2, !!d2.multiple, f, false) : a2 !== !!d2.multiple && (d2.defaultValue != null ? fb(c2, !!d2.multiple, d2.defaultValue, true) : fb(c2, !!d2.multiple, d2.multiple ? [] : "", false));
              }
            }
          }
          return;
        case 6:
          if (b2.stateNode === null)
            throw Error(y2(162));
          b2.stateNode.nodeValue = b2.memoizedProps;
          return;
        case 3:
          c2 = b2.stateNode;
          c2.hydrate && (c2.hydrate = false, Cc(c2.containerInfo));
          return;
        case 12:
          return;
        case 13:
          b2.memoizedState !== null && (jj = O2(), aj(b2.child, true));
          kj(b2);
          return;
        case 19:
          kj(b2);
          return;
        case 17:
          return;
        case 23:
        case 24:
          aj(b2, b2.memoizedState !== null);
          return;
      }
      throw Error(y2(163));
    }
    function kj(a2) {
      var b2 = a2.updateQueue;
      if (b2 !== null) {
        a2.updateQueue = null;
        var c2 = a2.stateNode;
        c2 === null && (c2 = a2.stateNode = new Ui());
        b2.forEach(function(b3) {
          var d2 = lj.bind(null, a2, b3);
          c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
        });
      }
    }
    function mj(a2, b2) {
      return a2 !== null && (a2 = a2.memoizedState, a2 === null || a2.dehydrated !== null) ? (b2 = b2.memoizedState, b2 !== null && b2.dehydrated === null) : false;
    }
    var nj = Math.ceil;
    var oj = ra.ReactCurrentDispatcher;
    var pj = ra.ReactCurrentOwner;
    var X2 = 0;
    var U2 = null;
    var Y2 = null;
    var W2 = 0;
    var qj = 0;
    var rj = Bf(0);
    var V2 = 0;
    var sj = null;
    var tj = 0;
    var Dg = 0;
    var Hi = 0;
    var uj = 0;
    var vj = null;
    var jj = 0;
    var Ji = Infinity;
    function wj() {
      Ji = O2() + 500;
    }
    var Z2 = null;
    var Qi = false;
    var Ri = null;
    var Ti = null;
    var xj = false;
    var yj = null;
    var zj = 90;
    var Aj = [];
    var Bj = [];
    var Cj = null;
    var Dj = 0;
    var Ej = null;
    var Fj = -1;
    var Gj = 0;
    var Hj = 0;
    var Ij = null;
    var Jj = false;
    function Hg() {
      return (X2 & 48) !== 0 ? O2() : Fj !== -1 ? Fj : Fj = O2();
    }
    function Ig(a2) {
      a2 = a2.mode;
      if ((a2 & 2) === 0)
        return 1;
      if ((a2 & 4) === 0)
        return eg() === 99 ? 1 : 2;
      Gj === 0 && (Gj = tj);
      if (kg.transition !== 0) {
        Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
        a2 = Gj;
        var b2 = 4186112 & ~Hj;
        b2 &= -b2;
        b2 === 0 && (a2 = 4186112 & ~a2, b2 = a2 & -a2, b2 === 0 && (b2 = 8192));
        return b2;
      }
      a2 = eg();
      (X2 & 4) !== 0 && a2 === 98 ? a2 = Xc(12, Gj) : (a2 = Sc(a2), a2 = Xc(a2, Gj));
      return a2;
    }
    function Jg(a2, b2, c2) {
      if (50 < Dj)
        throw Dj = 0, Ej = null, Error(y2(185));
      a2 = Kj(a2, b2);
      if (a2 === null)
        return null;
      $c(a2, b2, c2);
      a2 === U2 && (Hi |= b2, V2 === 4 && Ii(a2, W2));
      var d2 = eg();
      b2 === 1 ? (X2 & 8) !== 0 && (X2 & 48) === 0 ? Lj(a2) : (Mj(a2, c2), X2 === 0 && (wj(), ig())) : ((X2 & 4) === 0 || d2 !== 98 && d2 !== 99 || (Cj === null ? Cj = new Set([a2]) : Cj.add(a2)), Mj(a2, c2));
      vj = a2;
    }
    function Kj(a2, b2) {
      a2.lanes |= b2;
      var c2 = a2.alternate;
      c2 !== null && (c2.lanes |= b2);
      c2 = a2;
      for (a2 = a2.return; a2 !== null; )
        a2.childLanes |= b2, c2 = a2.alternate, c2 !== null && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
      return c2.tag === 3 ? c2.stateNode : null;
    }
    function Mj(a2, b2) {
      for (var c2 = a2.callbackNode, d2 = a2.suspendedLanes, e2 = a2.pingedLanes, f = a2.expirationTimes, g2 = a2.pendingLanes; 0 < g2; ) {
        var h2 = 31 - Vc(g2), k2 = 1 << h2, l2 = f[h2];
        if (l2 === -1) {
          if ((k2 & d2) === 0 || (k2 & e2) !== 0) {
            l2 = b2;
            Rc(k2);
            var n2 = F2;
            f[h2] = 10 <= n2 ? l2 + 250 : 6 <= n2 ? l2 + 5e3 : -1;
          }
        } else
          l2 <= b2 && (a2.expiredLanes |= k2);
        g2 &= ~k2;
      }
      d2 = Uc(a2, a2 === U2 ? W2 : 0);
      b2 = F2;
      if (d2 === 0)
        c2 !== null && (c2 !== Zf && Pf(c2), a2.callbackNode = null, a2.callbackPriority = 0);
      else {
        if (c2 !== null) {
          if (a2.callbackPriority === b2)
            return;
          c2 !== Zf && Pf(c2);
        }
        b2 === 15 ? (c2 = Lj.bind(null, a2), ag === null ? (ag = [c2], bg = Of(Uf, jg)) : ag.push(c2), c2 = Zf) : b2 === 14 ? c2 = hg(99, Lj.bind(null, a2)) : (c2 = Tc(b2), c2 = hg(c2, Nj.bind(null, a2)));
        a2.callbackPriority = b2;
        a2.callbackNode = c2;
      }
    }
    function Nj(a2) {
      Fj = -1;
      Hj = Gj = 0;
      if ((X2 & 48) !== 0)
        throw Error(y2(327));
      var b2 = a2.callbackNode;
      if (Oj() && a2.callbackNode !== b2)
        return null;
      var c2 = Uc(a2, a2 === U2 ? W2 : 0);
      if (c2 === 0)
        return null;
      var d2 = c2;
      var e2 = X2;
      X2 |= 16;
      var f = Pj();
      if (U2 !== a2 || W2 !== d2)
        wj(), Qj(a2, d2);
      do
        try {
          Rj();
          break;
        } catch (h2) {
          Sj(a2, h2);
        }
      while (1);
      qg();
      oj.current = f;
      X2 = e2;
      Y2 !== null ? d2 = 0 : (U2 = null, W2 = 0, d2 = V2);
      if ((tj & Hi) !== 0)
        Qj(a2, 0);
      else if (d2 !== 0) {
        d2 === 2 && (X2 |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), c2 = Wc(a2), c2 !== 0 && (d2 = Tj(a2, c2)));
        if (d2 === 1)
          throw b2 = sj, Qj(a2, 0), Ii(a2, c2), Mj(a2, O2()), b2;
        a2.finishedWork = a2.current.alternate;
        a2.finishedLanes = c2;
        switch (d2) {
          case 0:
          case 1:
            throw Error(y2(345));
          case 2:
            Uj(a2);
            break;
          case 3:
            Ii(a2, c2);
            if ((c2 & 62914560) === c2 && (d2 = jj + 500 - O2(), 10 < d2)) {
              if (Uc(a2, 0) !== 0)
                break;
              e2 = a2.suspendedLanes;
              if ((e2 & c2) !== c2) {
                Hg();
                a2.pingedLanes |= a2.suspendedLanes & e2;
                break;
              }
              a2.timeoutHandle = of(Uj.bind(null, a2), d2);
              break;
            }
            Uj(a2);
            break;
          case 4:
            Ii(a2, c2);
            if ((c2 & 4186112) === c2)
              break;
            d2 = a2.eventTimes;
            for (e2 = -1; 0 < c2; ) {
              var g2 = 31 - Vc(c2);
              f = 1 << g2;
              g2 = d2[g2];
              g2 > e2 && (e2 = g2);
              c2 &= ~f;
            }
            c2 = e2;
            c2 = O2() - c2;
            c2 = (120 > c2 ? 120 : 480 > c2 ? 480 : 1080 > c2 ? 1080 : 1920 > c2 ? 1920 : 3e3 > c2 ? 3e3 : 4320 > c2 ? 4320 : 1960 * nj(c2 / 1960)) - c2;
            if (10 < c2) {
              a2.timeoutHandle = of(Uj.bind(null, a2), c2);
              break;
            }
            Uj(a2);
            break;
          case 5:
            Uj(a2);
            break;
          default:
            throw Error(y2(329));
        }
      }
      Mj(a2, O2());
      return a2.callbackNode === b2 ? Nj.bind(null, a2) : null;
    }
    function Ii(a2, b2) {
      b2 &= ~uj;
      b2 &= ~Hi;
      a2.suspendedLanes |= b2;
      a2.pingedLanes &= ~b2;
      for (a2 = a2.expirationTimes; 0 < b2; ) {
        var c2 = 31 - Vc(b2), d2 = 1 << c2;
        a2[c2] = -1;
        b2 &= ~d2;
      }
    }
    function Lj(a2) {
      if ((X2 & 48) !== 0)
        throw Error(y2(327));
      Oj();
      if (a2 === U2 && (a2.expiredLanes & W2) !== 0) {
        var b2 = W2;
        var c2 = Tj(a2, b2);
        (tj & Hi) !== 0 && (b2 = Uc(a2, b2), c2 = Tj(a2, b2));
      } else
        b2 = Uc(a2, 0), c2 = Tj(a2, b2);
      a2.tag !== 0 && c2 === 2 && (X2 |= 64, a2.hydrate && (a2.hydrate = false, qf(a2.containerInfo)), b2 = Wc(a2), b2 !== 0 && (c2 = Tj(a2, b2)));
      if (c2 === 1)
        throw c2 = sj, Qj(a2, 0), Ii(a2, b2), Mj(a2, O2()), c2;
      a2.finishedWork = a2.current.alternate;
      a2.finishedLanes = b2;
      Uj(a2);
      Mj(a2, O2());
      return null;
    }
    function Vj() {
      if (Cj !== null) {
        var a2 = Cj;
        Cj = null;
        a2.forEach(function(a3) {
          a3.expiredLanes |= 24 & a3.pendingLanes;
          Mj(a3, O2());
        });
      }
      ig();
    }
    function Wj(a2, b2) {
      var c2 = X2;
      X2 |= 1;
      try {
        return a2(b2);
      } finally {
        X2 = c2, X2 === 0 && (wj(), ig());
      }
    }
    function Xj(a2, b2) {
      var c2 = X2;
      X2 &= -2;
      X2 |= 8;
      try {
        return a2(b2);
      } finally {
        X2 = c2, X2 === 0 && (wj(), ig());
      }
    }
    function ni(a2, b2) {
      I2(rj, qj);
      qj |= b2;
      tj |= b2;
    }
    function Ki() {
      qj = rj.current;
      H2(rj);
    }
    function Qj(a2, b2) {
      a2.finishedWork = null;
      a2.finishedLanes = 0;
      var c2 = a2.timeoutHandle;
      c2 !== -1 && (a2.timeoutHandle = -1, pf(c2));
      if (Y2 !== null)
        for (c2 = Y2.return; c2 !== null; ) {
          var d2 = c2;
          switch (d2.tag) {
            case 1:
              d2 = d2.type.childContextTypes;
              d2 !== null && d2 !== void 0 && Gf();
              break;
            case 3:
              fh();
              H2(N2);
              H2(M2);
              uh();
              break;
            case 5:
              hh(d2);
              break;
            case 4:
              fh();
              break;
            case 13:
              H2(P2);
              break;
            case 19:
              H2(P2);
              break;
            case 10:
              rg(d2);
              break;
            case 23:
            case 24:
              Ki();
          }
          c2 = c2.return;
        }
      U2 = a2;
      Y2 = Tg(a2.current, null);
      W2 = qj = tj = b2;
      V2 = 0;
      sj = null;
      uj = Hi = Dg = 0;
    }
    function Sj(a2, b2) {
      do {
        var c2 = Y2;
        try {
          qg();
          vh.current = Gh;
          if (yh) {
            for (var d2 = R.memoizedState; d2 !== null; ) {
              var e2 = d2.queue;
              e2 !== null && (e2.pending = null);
              d2 = d2.next;
            }
            yh = false;
          }
          xh = 0;
          T2 = S2 = R = null;
          zh = false;
          pj.current = null;
          if (c2 === null || c2.return === null) {
            V2 = 1;
            sj = b2;
            Y2 = null;
            break;
          }
          a: {
            var f = a2, g2 = c2.return, h2 = c2, k2 = b2;
            b2 = W2;
            h2.flags |= 2048;
            h2.firstEffect = h2.lastEffect = null;
            if (k2 !== null && typeof k2 === "object" && typeof k2.then === "function") {
              var l2 = k2;
              if ((h2.mode & 2) === 0) {
                var n2 = h2.alternate;
                n2 ? (h2.updateQueue = n2.updateQueue, h2.memoizedState = n2.memoizedState, h2.lanes = n2.lanes) : (h2.updateQueue = null, h2.memoizedState = null);
              }
              var A2 = (P2.current & 1) !== 0, p = g2;
              do {
                var C2;
                if (C2 = p.tag === 13) {
                  var x2 = p.memoizedState;
                  if (x2 !== null)
                    C2 = x2.dehydrated !== null ? true : false;
                  else {
                    var w2 = p.memoizedProps;
                    C2 = w2.fallback === void 0 ? false : w2.unstable_avoidThisFallback !== true ? true : A2 ? false : true;
                  }
                }
                if (C2) {
                  var z2 = p.updateQueue;
                  if (z2 === null) {
                    var u2 = new Set();
                    u2.add(l2);
                    p.updateQueue = u2;
                  } else
                    z2.add(l2);
                  if ((p.mode & 2) === 0) {
                    p.flags |= 64;
                    h2.flags |= 16384;
                    h2.flags &= -2981;
                    if (h2.tag === 1)
                      if (h2.alternate === null)
                        h2.tag = 17;
                      else {
                        var t2 = zg(-1, 1);
                        t2.tag = 2;
                        Ag(h2, t2);
                      }
                    h2.lanes |= 1;
                    break a;
                  }
                  k2 = void 0;
                  h2 = b2;
                  var q2 = f.pingCache;
                  q2 === null ? (q2 = f.pingCache = new Oi(), k2 = new Set(), q2.set(l2, k2)) : (k2 = q2.get(l2), k2 === void 0 && (k2 = new Set(), q2.set(l2, k2)));
                  if (!k2.has(h2)) {
                    k2.add(h2);
                    var v4 = Yj.bind(null, f, l2, h2);
                    l2.then(v4, v4);
                  }
                  p.flags |= 4096;
                  p.lanes = b2;
                  break a;
                }
                p = p.return;
              } while (p !== null);
              k2 = Error((Ra(h2.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
            }
            V2 !== 5 && (V2 = 2);
            k2 = Mi(k2, h2);
            p = g2;
            do {
              switch (p.tag) {
                case 3:
                  f = k2;
                  p.flags |= 4096;
                  b2 &= -b2;
                  p.lanes |= b2;
                  var J2 = Pi(p, f, b2);
                  Bg(p, J2);
                  break a;
                case 1:
                  f = k2;
                  var K2 = p.type, Q2 = p.stateNode;
                  if ((p.flags & 64) === 0 && (typeof K2.getDerivedStateFromError === "function" || Q2 !== null && typeof Q2.componentDidCatch === "function" && (Ti === null || !Ti.has(Q2)))) {
                    p.flags |= 4096;
                    b2 &= -b2;
                    p.lanes |= b2;
                    var L2 = Si(p, f, b2);
                    Bg(p, L2);
                    break a;
                  }
              }
              p = p.return;
            } while (p !== null);
          }
          Zj(c2);
        } catch (va) {
          b2 = va;
          Y2 === c2 && c2 !== null && (Y2 = c2 = c2.return);
          continue;
        }
        break;
      } while (1);
    }
    function Pj() {
      var a2 = oj.current;
      oj.current = Gh;
      return a2 === null ? Gh : a2;
    }
    function Tj(a2, b2) {
      var c2 = X2;
      X2 |= 16;
      var d2 = Pj();
      U2 === a2 && W2 === b2 || Qj(a2, b2);
      do
        try {
          ak();
          break;
        } catch (e2) {
          Sj(a2, e2);
        }
      while (1);
      qg();
      X2 = c2;
      oj.current = d2;
      if (Y2 !== null)
        throw Error(y2(261));
      U2 = null;
      W2 = 0;
      return V2;
    }
    function ak() {
      for (; Y2 !== null; )
        bk(Y2);
    }
    function Rj() {
      for (; Y2 !== null && !Qf(); )
        bk(Y2);
    }
    function bk(a2) {
      var b2 = ck(a2.alternate, a2, qj);
      a2.memoizedProps = a2.pendingProps;
      b2 === null ? Zj(a2) : Y2 = b2;
      pj.current = null;
    }
    function Zj(a2) {
      var b2 = a2;
      do {
        var c2 = b2.alternate;
        a2 = b2.return;
        if ((b2.flags & 2048) === 0) {
          c2 = Gi(c2, b2, qj);
          if (c2 !== null) {
            Y2 = c2;
            return;
          }
          c2 = b2;
          if (c2.tag !== 24 && c2.tag !== 23 || c2.memoizedState === null || (qj & 1073741824) !== 0 || (c2.mode & 4) === 0) {
            for (var d2 = 0, e2 = c2.child; e2 !== null; )
              d2 |= e2.lanes | e2.childLanes, e2 = e2.sibling;
            c2.childLanes = d2;
          }
          a2 !== null && (a2.flags & 2048) === 0 && (a2.firstEffect === null && (a2.firstEffect = b2.firstEffect), b2.lastEffect !== null && (a2.lastEffect !== null && (a2.lastEffect.nextEffect = b2.firstEffect), a2.lastEffect = b2.lastEffect), 1 < b2.flags && (a2.lastEffect !== null ? a2.lastEffect.nextEffect = b2 : a2.firstEffect = b2, a2.lastEffect = b2));
        } else {
          c2 = Li(b2);
          if (c2 !== null) {
            c2.flags &= 2047;
            Y2 = c2;
            return;
          }
          a2 !== null && (a2.firstEffect = a2.lastEffect = null, a2.flags |= 2048);
        }
        b2 = b2.sibling;
        if (b2 !== null) {
          Y2 = b2;
          return;
        }
        Y2 = b2 = a2;
      } while (b2 !== null);
      V2 === 0 && (V2 = 5);
    }
    function Uj(a2) {
      var b2 = eg();
      gg(99, dk.bind(null, a2, b2));
      return null;
    }
    function dk(a2, b2) {
      do
        Oj();
      while (yj !== null);
      if ((X2 & 48) !== 0)
        throw Error(y2(327));
      var c2 = a2.finishedWork;
      if (c2 === null)
        return null;
      a2.finishedWork = null;
      a2.finishedLanes = 0;
      if (c2 === a2.current)
        throw Error(y2(177));
      a2.callbackNode = null;
      var d2 = c2.lanes | c2.childLanes, e2 = d2, f = a2.pendingLanes & ~e2;
      a2.pendingLanes = e2;
      a2.suspendedLanes = 0;
      a2.pingedLanes = 0;
      a2.expiredLanes &= e2;
      a2.mutableReadLanes &= e2;
      a2.entangledLanes &= e2;
      e2 = a2.entanglements;
      for (var g2 = a2.eventTimes, h2 = a2.expirationTimes; 0 < f; ) {
        var k2 = 31 - Vc(f), l2 = 1 << k2;
        e2[k2] = 0;
        g2[k2] = -1;
        h2[k2] = -1;
        f &= ~l2;
      }
      Cj !== null && (d2 & 24) === 0 && Cj.has(a2) && Cj.delete(a2);
      a2 === U2 && (Y2 = U2 = null, W2 = 0);
      1 < c2.flags ? c2.lastEffect !== null ? (c2.lastEffect.nextEffect = c2, d2 = c2.firstEffect) : d2 = c2 : d2 = c2.firstEffect;
      if (d2 !== null) {
        e2 = X2;
        X2 |= 32;
        pj.current = null;
        kf = fd;
        g2 = Ne2();
        if (Oe(g2)) {
          if ("selectionStart" in g2)
            h2 = { start: g2.selectionStart, end: g2.selectionEnd };
          else
            a:
              if (h2 = (h2 = g2.ownerDocument) && h2.defaultView || window, (l2 = h2.getSelection && h2.getSelection()) && l2.rangeCount !== 0) {
                h2 = l2.anchorNode;
                f = l2.anchorOffset;
                k2 = l2.focusNode;
                l2 = l2.focusOffset;
                try {
                  h2.nodeType, k2.nodeType;
                } catch (va) {
                  h2 = null;
                  break a;
                }
                var n2 = 0, A2 = -1, p = -1, C2 = 0, x2 = 0, w2 = g2, z2 = null;
                b:
                  for (; ; ) {
                    for (var u2; ; ) {
                      w2 !== h2 || f !== 0 && w2.nodeType !== 3 || (A2 = n2 + f);
                      w2 !== k2 || l2 !== 0 && w2.nodeType !== 3 || (p = n2 + l2);
                      w2.nodeType === 3 && (n2 += w2.nodeValue.length);
                      if ((u2 = w2.firstChild) === null)
                        break;
                      z2 = w2;
                      w2 = u2;
                    }
                    for (; ; ) {
                      if (w2 === g2)
                        break b;
                      z2 === h2 && ++C2 === f && (A2 = n2);
                      z2 === k2 && ++x2 === l2 && (p = n2);
                      if ((u2 = w2.nextSibling) !== null)
                        break;
                      w2 = z2;
                      z2 = w2.parentNode;
                    }
                    w2 = u2;
                  }
                h2 = A2 === -1 || p === -1 ? null : { start: A2, end: p };
              } else
                h2 = null;
          h2 = h2 || { start: 0, end: 0 };
        } else
          h2 = null;
        lf = { focusedElem: g2, selectionRange: h2 };
        fd = false;
        Ij = null;
        Jj = false;
        Z2 = d2;
        do
          try {
            ek();
          } catch (va) {
            if (Z2 === null)
              throw Error(y2(330));
            Wi(Z2, va);
            Z2 = Z2.nextEffect;
          }
        while (Z2 !== null);
        Ij = null;
        Z2 = d2;
        do
          try {
            for (g2 = a2; Z2 !== null; ) {
              var t2 = Z2.flags;
              t2 & 16 && pb(Z2.stateNode, "");
              if (t2 & 128) {
                var q2 = Z2.alternate;
                if (q2 !== null) {
                  var v4 = q2.ref;
                  v4 !== null && (typeof v4 === "function" ? v4(null) : v4.current = null);
                }
              }
              switch (t2 & 1038) {
                case 2:
                  fj(Z2);
                  Z2.flags &= -3;
                  break;
                case 6:
                  fj(Z2);
                  Z2.flags &= -3;
                  ij(Z2.alternate, Z2);
                  break;
                case 1024:
                  Z2.flags &= -1025;
                  break;
                case 1028:
                  Z2.flags &= -1025;
                  ij(Z2.alternate, Z2);
                  break;
                case 4:
                  ij(Z2.alternate, Z2);
                  break;
                case 8:
                  h2 = Z2;
                  cj(g2, h2);
                  var J2 = h2.alternate;
                  dj(h2);
                  J2 !== null && dj(J2);
              }
              Z2 = Z2.nextEffect;
            }
          } catch (va) {
            if (Z2 === null)
              throw Error(y2(330));
            Wi(Z2, va);
            Z2 = Z2.nextEffect;
          }
        while (Z2 !== null);
        v4 = lf;
        q2 = Ne2();
        t2 = v4.focusedElem;
        g2 = v4.selectionRange;
        if (q2 !== t2 && t2 && t2.ownerDocument && Me2(t2.ownerDocument.documentElement, t2)) {
          g2 !== null && Oe(t2) && (q2 = g2.start, v4 = g2.end, v4 === void 0 && (v4 = q2), "selectionStart" in t2 ? (t2.selectionStart = q2, t2.selectionEnd = Math.min(v4, t2.value.length)) : (v4 = (q2 = t2.ownerDocument || document) && q2.defaultView || window, v4.getSelection && (v4 = v4.getSelection(), h2 = t2.textContent.length, J2 = Math.min(g2.start, h2), g2 = g2.end === void 0 ? J2 : Math.min(g2.end, h2), !v4.extend && J2 > g2 && (h2 = g2, g2 = J2, J2 = h2), h2 = Le2(t2, J2), f = Le2(t2, g2), h2 && f && (v4.rangeCount !== 1 || v4.anchorNode !== h2.node || v4.anchorOffset !== h2.offset || v4.focusNode !== f.node || v4.focusOffset !== f.offset) && (q2 = q2.createRange(), q2.setStart(h2.node, h2.offset), v4.removeAllRanges(), J2 > g2 ? (v4.addRange(q2), v4.extend(f.node, f.offset)) : (q2.setEnd(f.node, f.offset), v4.addRange(q2))))));
          q2 = [];
          for (v4 = t2; v4 = v4.parentNode; )
            v4.nodeType === 1 && q2.push({ element: v4, left: v4.scrollLeft, top: v4.scrollTop });
          typeof t2.focus === "function" && t2.focus();
          for (t2 = 0; t2 < q2.length; t2++)
            v4 = q2[t2], v4.element.scrollLeft = v4.left, v4.element.scrollTop = v4.top;
        }
        fd = !!kf;
        lf = kf = null;
        a2.current = c2;
        Z2 = d2;
        do
          try {
            for (t2 = a2; Z2 !== null; ) {
              var K2 = Z2.flags;
              K2 & 36 && Yi(t2, Z2.alternate, Z2);
              if (K2 & 128) {
                q2 = void 0;
                var Q2 = Z2.ref;
                if (Q2 !== null) {
                  var L2 = Z2.stateNode;
                  switch (Z2.tag) {
                    case 5:
                      q2 = L2;
                      break;
                    default:
                      q2 = L2;
                  }
                  typeof Q2 === "function" ? Q2(q2) : Q2.current = q2;
                }
              }
              Z2 = Z2.nextEffect;
            }
          } catch (va) {
            if (Z2 === null)
              throw Error(y2(330));
            Wi(Z2, va);
            Z2 = Z2.nextEffect;
          }
        while (Z2 !== null);
        Z2 = null;
        $f();
        X2 = e2;
      } else
        a2.current = c2;
      if (xj)
        xj = false, yj = a2, zj = b2;
      else
        for (Z2 = d2; Z2 !== null; )
          b2 = Z2.nextEffect, Z2.nextEffect = null, Z2.flags & 8 && (K2 = Z2, K2.sibling = null, K2.stateNode = null), Z2 = b2;
      d2 = a2.pendingLanes;
      d2 === 0 && (Ti = null);
      d2 === 1 ? a2 === Ej ? Dj++ : (Dj = 0, Ej = a2) : Dj = 0;
      c2 = c2.stateNode;
      if (Mf && typeof Mf.onCommitFiberRoot === "function")
        try {
          Mf.onCommitFiberRoot(Lf, c2, void 0, (c2.current.flags & 64) === 64);
        } catch (va) {
        }
      Mj(a2, O2());
      if (Qi)
        throw Qi = false, a2 = Ri, Ri = null, a2;
      if ((X2 & 8) !== 0)
        return null;
      ig();
      return null;
    }
    function ek() {
      for (; Z2 !== null; ) {
        var a2 = Z2.alternate;
        Jj || Ij === null || ((Z2.flags & 8) !== 0 ? dc(Z2, Ij) && (Jj = true) : Z2.tag === 13 && mj(a2, Z2) && dc(Z2, Ij) && (Jj = true));
        var b2 = Z2.flags;
        (b2 & 256) !== 0 && Xi(a2, Z2);
        (b2 & 512) === 0 || xj || (xj = true, hg(97, function() {
          Oj();
          return null;
        }));
        Z2 = Z2.nextEffect;
      }
    }
    function Oj() {
      if (zj !== 90) {
        var a2 = 97 < zj ? 97 : zj;
        zj = 90;
        return gg(a2, fk);
      }
      return false;
    }
    function $i(a2, b2) {
      Aj.push(b2, a2);
      xj || (xj = true, hg(97, function() {
        Oj();
        return null;
      }));
    }
    function Zi(a2, b2) {
      Bj.push(b2, a2);
      xj || (xj = true, hg(97, function() {
        Oj();
        return null;
      }));
    }
    function fk() {
      if (yj === null)
        return false;
      var a2 = yj;
      yj = null;
      if ((X2 & 48) !== 0)
        throw Error(y2(331));
      var b2 = X2;
      X2 |= 32;
      var c2 = Bj;
      Bj = [];
      for (var d2 = 0; d2 < c2.length; d2 += 2) {
        var e2 = c2[d2], f = c2[d2 + 1], g2 = e2.destroy;
        e2.destroy = void 0;
        if (typeof g2 === "function")
          try {
            g2();
          } catch (k2) {
            if (f === null)
              throw Error(y2(330));
            Wi(f, k2);
          }
      }
      c2 = Aj;
      Aj = [];
      for (d2 = 0; d2 < c2.length; d2 += 2) {
        e2 = c2[d2];
        f = c2[d2 + 1];
        try {
          var h2 = e2.create;
          e2.destroy = h2();
        } catch (k2) {
          if (f === null)
            throw Error(y2(330));
          Wi(f, k2);
        }
      }
      for (h2 = a2.current.firstEffect; h2 !== null; )
        a2 = h2.nextEffect, h2.nextEffect = null, h2.flags & 8 && (h2.sibling = null, h2.stateNode = null), h2 = a2;
      X2 = b2;
      ig();
      return true;
    }
    function gk(a2, b2, c2) {
      b2 = Mi(c2, b2);
      b2 = Pi(a2, b2, 1);
      Ag(a2, b2);
      b2 = Hg();
      a2 = Kj(a2, 1);
      a2 !== null && ($c(a2, 1, b2), Mj(a2, b2));
    }
    function Wi(a2, b2) {
      if (a2.tag === 3)
        gk(a2, a2, b2);
      else
        for (var c2 = a2.return; c2 !== null; ) {
          if (c2.tag === 3) {
            gk(c2, a2, b2);
            break;
          } else if (c2.tag === 1) {
            var d2 = c2.stateNode;
            if (typeof c2.type.getDerivedStateFromError === "function" || typeof d2.componentDidCatch === "function" && (Ti === null || !Ti.has(d2))) {
              a2 = Mi(b2, a2);
              var e2 = Si(c2, a2, 1);
              Ag(c2, e2);
              e2 = Hg();
              c2 = Kj(c2, 1);
              if (c2 !== null)
                $c(c2, 1, e2), Mj(c2, e2);
              else if (typeof d2.componentDidCatch === "function" && (Ti === null || !Ti.has(d2)))
                try {
                  d2.componentDidCatch(b2, a2);
                } catch (f) {
                }
              break;
            }
          }
          c2 = c2.return;
        }
    }
    function Yj(a2, b2, c2) {
      var d2 = a2.pingCache;
      d2 !== null && d2.delete(b2);
      b2 = Hg();
      a2.pingedLanes |= a2.suspendedLanes & c2;
      U2 === a2 && (W2 & c2) === c2 && (V2 === 4 || V2 === 3 && (W2 & 62914560) === W2 && 500 > O2() - jj ? Qj(a2, 0) : uj |= c2);
      Mj(a2, b2);
    }
    function lj(a2, b2) {
      var c2 = a2.stateNode;
      c2 !== null && c2.delete(b2);
      b2 = 0;
      b2 === 0 && (b2 = a2.mode, (b2 & 2) === 0 ? b2 = 1 : (b2 & 4) === 0 ? b2 = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b2 = Yc(62914560 & ~Gj), b2 === 0 && (b2 = 4194304)));
      c2 = Hg();
      a2 = Kj(a2, b2);
      a2 !== null && ($c(a2, b2, c2), Mj(a2, c2));
    }
    var ck;
    ck = function(a2, b2, c2) {
      var d2 = b2.lanes;
      if (a2 !== null)
        if (a2.memoizedProps !== b2.pendingProps || N2.current)
          ug = true;
        else if ((c2 & d2) !== 0)
          ug = (a2.flags & 16384) !== 0 ? true : false;
        else {
          ug = false;
          switch (b2.tag) {
            case 3:
              ri(b2);
              sh();
              break;
            case 5:
              gh(b2);
              break;
            case 1:
              Ff(b2.type) && Jf(b2);
              break;
            case 4:
              eh(b2, b2.stateNode.containerInfo);
              break;
            case 10:
              d2 = b2.memoizedProps.value;
              var e2 = b2.type._context;
              I2(mg, e2._currentValue);
              e2._currentValue = d2;
              break;
            case 13:
              if (b2.memoizedState !== null) {
                if ((c2 & b2.child.childLanes) !== 0)
                  return ti(a2, b2, c2);
                I2(P2, P2.current & 1);
                b2 = hi(a2, b2, c2);
                return b2 !== null ? b2.sibling : null;
              }
              I2(P2, P2.current & 1);
              break;
            case 19:
              d2 = (c2 & b2.childLanes) !== 0;
              if ((a2.flags & 64) !== 0) {
                if (d2)
                  return Ai(a2, b2, c2);
                b2.flags |= 64;
              }
              e2 = b2.memoizedState;
              e2 !== null && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
              I2(P2, P2.current);
              if (d2)
                break;
              else
                return null;
            case 23:
            case 24:
              return b2.lanes = 0, mi(a2, b2, c2);
          }
          return hi(a2, b2, c2);
        }
      else
        ug = false;
      b2.lanes = 0;
      switch (b2.tag) {
        case 2:
          d2 = b2.type;
          a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
          a2 = b2.pendingProps;
          e2 = Ef(b2, M2.current);
          tg(b2, c2);
          e2 = Ch(null, b2, d2, a2, e2, c2);
          b2.flags |= 1;
          if (typeof e2 === "object" && e2 !== null && typeof e2.render === "function" && e2.$$typeof === void 0) {
            b2.tag = 1;
            b2.memoizedState = null;
            b2.updateQueue = null;
            if (Ff(d2)) {
              var f = true;
              Jf(b2);
            } else
              f = false;
            b2.memoizedState = e2.state !== null && e2.state !== void 0 ? e2.state : null;
            xg(b2);
            var g2 = d2.getDerivedStateFromProps;
            typeof g2 === "function" && Gg(b2, d2, g2, a2);
            e2.updater = Kg;
            b2.stateNode = e2;
            e2._reactInternals = b2;
            Og(b2, d2, a2, c2);
            b2 = qi(null, b2, d2, true, f, c2);
          } else
            b2.tag = 0, fi(null, b2, e2, c2), b2 = b2.child;
          return b2;
        case 16:
          e2 = b2.elementType;
          a: {
            a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
            a2 = b2.pendingProps;
            f = e2._init;
            e2 = f(e2._payload);
            b2.type = e2;
            f = b2.tag = hk(e2);
            a2 = lg(e2, a2);
            switch (f) {
              case 0:
                b2 = li(null, b2, e2, a2, c2);
                break a;
              case 1:
                b2 = pi(null, b2, e2, a2, c2);
                break a;
              case 11:
                b2 = gi(null, b2, e2, a2, c2);
                break a;
              case 14:
                b2 = ii(null, b2, e2, lg(e2.type, a2), d2, c2);
                break a;
            }
            throw Error(y2(306, e2, ""));
          }
          return b2;
        case 0:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), li(a2, b2, d2, e2, c2);
        case 1:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), pi(a2, b2, d2, e2, c2);
        case 3:
          ri(b2);
          d2 = b2.updateQueue;
          if (a2 === null || d2 === null)
            throw Error(y2(282));
          d2 = b2.pendingProps;
          e2 = b2.memoizedState;
          e2 = e2 !== null ? e2.element : null;
          yg(a2, b2);
          Cg(b2, d2, null, c2);
          d2 = b2.memoizedState.element;
          if (d2 === e2)
            sh(), b2 = hi(a2, b2, c2);
          else {
            e2 = b2.stateNode;
            if (f = e2.hydrate)
              kh = rf(b2.stateNode.containerInfo.firstChild), jh = b2, f = lh = true;
            if (f) {
              a2 = e2.mutableSourceEagerHydrationData;
              if (a2 != null)
                for (e2 = 0; e2 < a2.length; e2 += 2)
                  f = a2[e2], f._workInProgressVersionPrimary = a2[e2 + 1], th.push(f);
              c2 = Zg(b2, null, d2, c2);
              for (b2.child = c2; c2; )
                c2.flags = c2.flags & -3 | 1024, c2 = c2.sibling;
            } else
              fi(a2, b2, d2, c2), sh();
            b2 = b2.child;
          }
          return b2;
        case 5:
          return gh(b2), a2 === null && ph(b2), d2 = b2.type, e2 = b2.pendingProps, f = a2 !== null ? a2.memoizedProps : null, g2 = e2.children, nf(d2, e2) ? g2 = null : f !== null && nf(d2, f) && (b2.flags |= 16), oi(a2, b2), fi(a2, b2, g2, c2), b2.child;
        case 6:
          return a2 === null && ph(b2), null;
        case 13:
          return ti(a2, b2, c2);
        case 4:
          return eh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, a2 === null ? b2.child = Yg(b2, null, d2, c2) : fi(a2, b2, d2, c2), b2.child;
        case 11:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), gi(a2, b2, d2, e2, c2);
        case 7:
          return fi(a2, b2, b2.pendingProps, c2), b2.child;
        case 8:
          return fi(a2, b2, b2.pendingProps.children, c2), b2.child;
        case 12:
          return fi(a2, b2, b2.pendingProps.children, c2), b2.child;
        case 10:
          a: {
            d2 = b2.type._context;
            e2 = b2.pendingProps;
            g2 = b2.memoizedProps;
            f = e2.value;
            var h2 = b2.type._context;
            I2(mg, h2._currentValue);
            h2._currentValue = f;
            if (g2 !== null)
              if (h2 = g2.value, f = He2(h2, f) ? 0 : (typeof d2._calculateChangedBits === "function" ? d2._calculateChangedBits(h2, f) : 1073741823) | 0, f === 0) {
                if (g2.children === e2.children && !N2.current) {
                  b2 = hi(a2, b2, c2);
                  break a;
                }
              } else
                for (h2 = b2.child, h2 !== null && (h2.return = b2); h2 !== null; ) {
                  var k2 = h2.dependencies;
                  if (k2 !== null) {
                    g2 = h2.child;
                    for (var l2 = k2.firstContext; l2 !== null; ) {
                      if (l2.context === d2 && (l2.observedBits & f) !== 0) {
                        h2.tag === 1 && (l2 = zg(-1, c2 & -c2), l2.tag = 2, Ag(h2, l2));
                        h2.lanes |= c2;
                        l2 = h2.alternate;
                        l2 !== null && (l2.lanes |= c2);
                        sg(h2.return, c2);
                        k2.lanes |= c2;
                        break;
                      }
                      l2 = l2.next;
                    }
                  } else
                    g2 = h2.tag === 10 ? h2.type === b2.type ? null : h2.child : h2.child;
                  if (g2 !== null)
                    g2.return = h2;
                  else
                    for (g2 = h2; g2 !== null; ) {
                      if (g2 === b2) {
                        g2 = null;
                        break;
                      }
                      h2 = g2.sibling;
                      if (h2 !== null) {
                        h2.return = g2.return;
                        g2 = h2;
                        break;
                      }
                      g2 = g2.return;
                    }
                  h2 = g2;
                }
            fi(a2, b2, e2.children, c2);
            b2 = b2.child;
          }
          return b2;
        case 9:
          return e2 = b2.type, f = b2.pendingProps, d2 = f.children, tg(b2, c2), e2 = vg(e2, f.unstable_observedBits), d2 = d2(e2), b2.flags |= 1, fi(a2, b2, d2, c2), b2.child;
        case 14:
          return e2 = b2.type, f = lg(e2, b2.pendingProps), f = lg(e2.type, f), ii(a2, b2, e2, f, d2, c2);
        case 15:
          return ki(a2, b2, b2.type, b2.pendingProps, d2, c2);
        case 17:
          return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : lg(d2, e2), a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), b2.tag = 1, Ff(d2) ? (a2 = true, Jf(b2)) : a2 = false, tg(b2, c2), Mg(b2, d2, e2), Og(b2, d2, e2, c2), qi(null, b2, d2, true, a2, c2);
        case 19:
          return Ai(a2, b2, c2);
        case 23:
          return mi(a2, b2, c2);
        case 24:
          return mi(a2, b2, c2);
      }
      throw Error(y2(156, b2.tag));
    };
    function ik(a2, b2, c2, d2) {
      this.tag = a2;
      this.key = c2;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b2;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d2;
      this.flags = 0;
      this.lastEffect = this.firstEffect = this.nextEffect = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function nh(a2, b2, c2, d2) {
      return new ik(a2, b2, c2, d2);
    }
    function ji(a2) {
      a2 = a2.prototype;
      return !(!a2 || !a2.isReactComponent);
    }
    function hk(a2) {
      if (typeof a2 === "function")
        return ji(a2) ? 1 : 0;
      if (a2 !== void 0 && a2 !== null) {
        a2 = a2.$$typeof;
        if (a2 === Aa)
          return 11;
        if (a2 === Da)
          return 14;
      }
      return 2;
    }
    function Tg(a2, b2) {
      var c2 = a2.alternate;
      c2 === null ? (c2 = nh(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.nextEffect = null, c2.firstEffect = null, c2.lastEffect = null);
      c2.childLanes = a2.childLanes;
      c2.lanes = a2.lanes;
      c2.child = a2.child;
      c2.memoizedProps = a2.memoizedProps;
      c2.memoizedState = a2.memoizedState;
      c2.updateQueue = a2.updateQueue;
      b2 = a2.dependencies;
      c2.dependencies = b2 === null ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
      c2.sibling = a2.sibling;
      c2.index = a2.index;
      c2.ref = a2.ref;
      return c2;
    }
    function Vg(a2, b2, c2, d2, e2, f) {
      var g2 = 2;
      d2 = a2;
      if (typeof a2 === "function")
        ji(a2) && (g2 = 1);
      else if (typeof a2 === "string")
        g2 = 5;
      else
        a:
          switch (a2) {
            case ua:
              return Xg(c2.children, e2, f, b2);
            case Ha:
              g2 = 8;
              e2 |= 16;
              break;
            case wa:
              g2 = 8;
              e2 |= 1;
              break;
            case xa:
              return a2 = nh(12, c2, b2, e2 | 8), a2.elementType = xa, a2.type = xa, a2.lanes = f, a2;
            case Ba:
              return a2 = nh(13, c2, b2, e2), a2.type = Ba, a2.elementType = Ba, a2.lanes = f, a2;
            case Ca:
              return a2 = nh(19, c2, b2, e2), a2.elementType = Ca, a2.lanes = f, a2;
            case Ia:
              return vi(c2, e2, f, b2);
            case Ja:
              return a2 = nh(24, c2, b2, e2), a2.elementType = Ja, a2.lanes = f, a2;
            default:
              if (typeof a2 === "object" && a2 !== null)
                switch (a2.$$typeof) {
                  case ya:
                    g2 = 10;
                    break a;
                  case za:
                    g2 = 9;
                    break a;
                  case Aa:
                    g2 = 11;
                    break a;
                  case Da:
                    g2 = 14;
                    break a;
                  case Ea:
                    g2 = 16;
                    d2 = null;
                    break a;
                  case Fa:
                    g2 = 22;
                    break a;
                }
              throw Error(y2(130, a2 == null ? a2 : typeof a2, ""));
          }
      b2 = nh(g2, c2, b2, e2);
      b2.elementType = a2;
      b2.type = d2;
      b2.lanes = f;
      return b2;
    }
    function Xg(a2, b2, c2, d2) {
      a2 = nh(7, a2, d2, b2);
      a2.lanes = c2;
      return a2;
    }
    function vi(a2, b2, c2, d2) {
      a2 = nh(23, a2, d2, b2);
      a2.elementType = Ia;
      a2.lanes = c2;
      return a2;
    }
    function Ug(a2, b2, c2) {
      a2 = nh(6, a2, null, b2);
      a2.lanes = c2;
      return a2;
    }
    function Wg(a2, b2, c2) {
      b2 = nh(4, a2.children !== null ? a2.children : [], a2.key, b2);
      b2.lanes = c2;
      b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
      return b2;
    }
    function jk(a2, b2, c2) {
      this.tag = b2;
      this.containerInfo = a2;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.pendingContext = this.context = null;
      this.hydrate = c2;
      this.callbackNode = null;
      this.callbackPriority = 0;
      this.eventTimes = Zc(0);
      this.expirationTimes = Zc(-1);
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = Zc(0);
      this.mutableSourceEagerHydrationData = null;
    }
    function kk(a2, b2, c2) {
      var d2 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: ta, key: d2 == null ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
    }
    function lk(a2, b2, c2, d2) {
      var e2 = b2.current, f = Hg(), g2 = Ig(e2);
      a:
        if (c2) {
          c2 = c2._reactInternals;
          b: {
            if (Zb(c2) !== c2 || c2.tag !== 1)
              throw Error(y2(170));
            var h2 = c2;
            do {
              switch (h2.tag) {
                case 3:
                  h2 = h2.stateNode.context;
                  break b;
                case 1:
                  if (Ff(h2.type)) {
                    h2 = h2.stateNode.__reactInternalMemoizedMergedChildContext;
                    break b;
                  }
              }
              h2 = h2.return;
            } while (h2 !== null);
            throw Error(y2(171));
          }
          if (c2.tag === 1) {
            var k2 = c2.type;
            if (Ff(k2)) {
              c2 = If(c2, k2, h2);
              break a;
            }
          }
          c2 = h2;
        } else
          c2 = Cf;
      b2.context === null ? b2.context = c2 : b2.pendingContext = c2;
      b2 = zg(f, g2);
      b2.payload = { element: a2 };
      d2 = d2 === void 0 ? null : d2;
      d2 !== null && (b2.callback = d2);
      Ag(e2, b2);
      Jg(e2, g2, f);
      return g2;
    }
    function mk(a2) {
      a2 = a2.current;
      if (!a2.child)
        return null;
      switch (a2.child.tag) {
        case 5:
          return a2.child.stateNode;
        default:
          return a2.child.stateNode;
      }
    }
    function nk(a2, b2) {
      a2 = a2.memoizedState;
      if (a2 !== null && a2.dehydrated !== null) {
        var c2 = a2.retryLane;
        a2.retryLane = c2 !== 0 && c2 < b2 ? c2 : b2;
      }
    }
    function ok(a2, b2) {
      nk(a2, b2);
      (a2 = a2.alternate) && nk(a2, b2);
    }
    function pk() {
      return null;
    }
    function qk(a2, b2, c2) {
      var d2 = c2 != null && c2.hydrationOptions != null && c2.hydrationOptions.mutableSources || null;
      c2 = new jk(a2, b2, c2 != null && c2.hydrate === true);
      b2 = nh(3, null, null, b2 === 2 ? 7 : b2 === 1 ? 3 : 0);
      c2.current = b2;
      b2.stateNode = c2;
      xg(b2);
      a2[ff] = c2.current;
      cf(a2.nodeType === 8 ? a2.parentNode : a2);
      if (d2)
        for (a2 = 0; a2 < d2.length; a2++) {
          b2 = d2[a2];
          var e2 = b2._getVersion;
          e2 = e2(b2._source);
          c2.mutableSourceEagerHydrationData == null ? c2.mutableSourceEagerHydrationData = [b2, e2] : c2.mutableSourceEagerHydrationData.push(b2, e2);
        }
      this._internalRoot = c2;
    }
    qk.prototype.render = function(a2) {
      lk(a2, this._internalRoot, null, null);
    };
    qk.prototype.unmount = function() {
      var a2 = this._internalRoot, b2 = a2.containerInfo;
      lk(null, a2, null, function() {
        b2[ff] = null;
      });
    };
    function rk(a2) {
      return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11 && (a2.nodeType !== 8 || a2.nodeValue !== " react-mount-point-unstable "));
    }
    function sk(a2, b2) {
      b2 || (b2 = a2 ? a2.nodeType === 9 ? a2.documentElement : a2.firstChild : null, b2 = !(!b2 || b2.nodeType !== 1 || !b2.hasAttribute("data-reactroot")));
      if (!b2)
        for (var c2; c2 = a2.lastChild; )
          a2.removeChild(c2);
      return new qk(a2, 0, b2 ? { hydrate: true } : void 0);
    }
    function tk(a2, b2, c2, d2, e2) {
      var f = c2._reactRootContainer;
      if (f) {
        var g2 = f._internalRoot;
        if (typeof e2 === "function") {
          var h2 = e2;
          e2 = function() {
            var a3 = mk(g2);
            h2.call(a3);
          };
        }
        lk(b2, g2, a2, e2);
      } else {
        f = c2._reactRootContainer = sk(c2, d2);
        g2 = f._internalRoot;
        if (typeof e2 === "function") {
          var k2 = e2;
          e2 = function() {
            var a3 = mk(g2);
            k2.call(a3);
          };
        }
        Xj(function() {
          lk(b2, g2, a2, e2);
        });
      }
      return mk(g2);
    }
    ec = function(a2) {
      if (a2.tag === 13) {
        var b2 = Hg();
        Jg(a2, 4, b2);
        ok(a2, 4);
      }
    };
    fc = function(a2) {
      if (a2.tag === 13) {
        var b2 = Hg();
        Jg(a2, 67108864, b2);
        ok(a2, 67108864);
      }
    };
    gc = function(a2) {
      if (a2.tag === 13) {
        var b2 = Hg(), c2 = Ig(a2);
        Jg(a2, c2, b2);
        ok(a2, c2);
      }
    };
    hc = function(a2, b2) {
      return b2();
    };
    yb = function(a2, b2, c2) {
      switch (b2) {
        case "input":
          ab(a2, c2);
          b2 = c2.name;
          if (c2.type === "radio" && b2 != null) {
            for (c2 = a2; c2.parentNode; )
              c2 = c2.parentNode;
            c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
            for (b2 = 0; b2 < c2.length; b2++) {
              var d2 = c2[b2];
              if (d2 !== a2 && d2.form === a2.form) {
                var e2 = Db(d2);
                if (!e2)
                  throw Error(y2(90));
                Wa(d2);
                ab(d2, e2);
              }
            }
          }
          break;
        case "textarea":
          ib(a2, c2);
          break;
        case "select":
          b2 = c2.value, b2 != null && fb(a2, !!c2.multiple, b2, false);
      }
    };
    Gb = Wj;
    Hb = function(a2, b2, c2, d2, e2) {
      var f = X2;
      X2 |= 4;
      try {
        return gg(98, a2.bind(null, b2, c2, d2, e2));
      } finally {
        X2 = f, X2 === 0 && (wj(), ig());
      }
    };
    Ib = function() {
      (X2 & 49) === 0 && (Vj(), Oj());
    };
    Jb = function(a2, b2) {
      var c2 = X2;
      X2 |= 2;
      try {
        return a2(b2);
      } finally {
        X2 = c2, X2 === 0 && (wj(), ig());
      }
    };
    function uk(a2, b2) {
      var c2 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!rk(b2))
        throw Error(y2(200));
      return kk(a2, b2, null, c2);
    }
    var vk = { Events: [Cb, ue2, Db, Eb, Fb, Oj, { current: false }] };
    var wk = { findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" };
    var xk = { bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
      a2 = cc(a2);
      return a2 === null ? null : a2.stateNode;
    }, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
      yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!yk.isDisabled && yk.supportsFiber)
        try {
          Lf = yk.inject(xk), Mf = yk;
        } catch (a2) {
        }
    }
    var yk;
    exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
    exports2.createPortal = uk;
    exports2.findDOMNode = function(a2) {
      if (a2 == null)
        return null;
      if (a2.nodeType === 1)
        return a2;
      var b2 = a2._reactInternals;
      if (b2 === void 0) {
        if (typeof a2.render === "function")
          throw Error(y2(188));
        throw Error(y2(268, Object.keys(a2)));
      }
      a2 = cc(b2);
      a2 = a2 === null ? null : a2.stateNode;
      return a2;
    };
    exports2.flushSync = function(a2, b2) {
      var c2 = X2;
      if ((c2 & 48) !== 0)
        return a2(b2);
      X2 |= 1;
      try {
        if (a2)
          return gg(99, a2.bind(null, b2));
      } finally {
        X2 = c2, ig();
      }
    };
    exports2.hydrate = function(a2, b2, c2) {
      if (!rk(b2))
        throw Error(y2(200));
      return tk(null, a2, b2, true, c2);
    };
    exports2.render = function(a2, b2, c2) {
      if (!rk(b2))
        throw Error(y2(200));
      return tk(null, a2, b2, false, c2);
    };
    exports2.unmountComponentAtNode = function(a2) {
      if (!rk(a2))
        throw Error(y2(40));
      return a2._reactRootContainer ? (Xj(function() {
        tk(null, null, a2, false, function() {
          a2._reactRootContainer = null;
          a2[ff] = null;
        });
      }), true) : false;
    };
    exports2.unstable_batchedUpdates = Wj;
    exports2.unstable_createPortal = function(a2, b2) {
      return uk(a2, b2, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
    };
    exports2.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
      if (!rk(c2))
        throw Error(y2(200));
      if (a2 == null || a2._reactInternals === void 0)
        throw Error(y2(38));
      return tk(a2, b2, c2, false, d2);
    };
    exports2.version = "17.0.2";
  }
});

// ../../node_modules/react-dom/index.js
var require_react_dom = __commonJS({
  "../../node_modules/react-dom/index.js"(exports2, module2) {
    "use strict";
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      if (false) {
        throw new Error("^_^");
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    if (true) {
      checkDCE();
      module2.exports = require_react_dom_production_min();
    } else {
      module2.exports = null;
    }
  }
});

// ../../node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "../../node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports2, module2) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module2.exports = ReactPropTypesSecret;
  }
});

// ../../node_modules/prop-types/factoryWithThrowingShims.js
var require_factoryWithThrowingShims = __commonJS({
  "../../node_modules/prop-types/factoryWithThrowingShims.js"(exports2, module2) {
    "use strict";
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    function emptyFunction() {
    }
    function emptyFunctionWithReset() {
    }
    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    module2.exports = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          return;
        }
        var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        err.name = "Invariant Violation";
        throw err;
      }
      ;
      shim.isRequired = shim;
      function getShim() {
        return shim;
      }
      ;
      var ReactPropTypes = {
        array: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// ../../node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "../../node_modules/prop-types/index.js"(exports2, module2) {
    if (false) {
      ReactIs = null;
      throwOnDirectAccess = true;
      module2.exports = null(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module2.exports = require_factoryWithThrowingShims()();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// ../../node_modules/react-shadow/styled-components.js
var require_styled_components = __commonJS({
  "../../node_modules/react-shadow/styled-components.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var e2 = require_react();
    var t2 = require_server_browser();
    var r2 = (init_styled_components_browser_esm(), styled_components_browser_esm_exports);
    var n2 = require_react_dom();
    var o2 = require_prop_types();
    function a2(e3) {
      return e3 && typeof e3 == "object" && "default" in e3 ? e3 : { default: e3 };
    }
    var u2 = a2(e2);
    var l2 = a2(o2);
    var c2 = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
    function i3(e3, t3) {
      return e3(t3 = { exports: {} }, t3.exports), t3.exports;
    }
    var s2 = i3(function(e3) {
      !function(t3) {
        var r3 = function(e4, t4, n4) {
          if (!c3(t4) || s3(t4) || f2(t4) || d3(t4) || l3(t4))
            return t4;
          var o4, a4 = 0, u4 = 0;
          if (i4(t4))
            for (o4 = [], u4 = t4.length; a4 < u4; a4++)
              o4.push(r3(e4, t4[a4], n4));
          else
            for (var p3 in o4 = {}, t4)
              Object.prototype.hasOwnProperty.call(t4, p3) && (o4[e4(p3, n4)] = r3(e4, t4[p3], n4));
          return o4;
        }, n3 = function(e4) {
          return p2(e4) ? e4 : (e4 = e4.replace(/[\-_\s]+(.)?/g, function(e5, t4) {
            return t4 ? t4.toUpperCase() : "";
          })).substr(0, 1).toLowerCase() + e4.substr(1);
        }, o3 = function(e4) {
          var t4 = n3(e4);
          return t4.substr(0, 1).toUpperCase() + t4.substr(1);
        }, a3 = function(e4, t4) {
          return function(e5, t5) {
            var r4 = (t5 = t5 || {}).separator || "_", n4 = t5.split || /(?=[A-Z])/;
            return e5.split(n4).join(r4);
          }(e4, t4).toLowerCase();
        }, u3 = Object.prototype.toString, l3 = function(e4) {
          return typeof e4 == "function";
        }, c3 = function(e4) {
          return e4 === Object(e4);
        }, i4 = function(e4) {
          return u3.call(e4) == "[object Array]";
        }, s3 = function(e4) {
          return u3.call(e4) == "[object Date]";
        }, f2 = function(e4) {
          return u3.call(e4) == "[object RegExp]";
        }, d3 = function(e4) {
          return u3.call(e4) == "[object Boolean]";
        }, p2 = function(e4) {
          return (e4 -= 0) == e4;
        }, y3 = function(e4, t4) {
          var r4 = t4 && "process" in t4 ? t4.process : t4;
          return typeof r4 != "function" ? e4 : function(t5, n4) {
            return r4(t5, e4, n4);
          };
        }, h3 = { camelize: n3, decamelize: a3, pascalize: o3, depascalize: a3, camelizeKeys: function(e4, t4) {
          return r3(y3(n3, t4), e4);
        }, decamelizeKeys: function(e4, t4) {
          return r3(y3(a3, t4), e4, t4);
        }, pascalizeKeys: function(e4, t4) {
          return r3(y3(o3, t4), e4);
        }, depascalizeKeys: function() {
          return this.decamelizeKeys.apply(this, arguments);
        } };
        e3.exports ? e3.exports = h3 : t3.humps = h3;
      }(c2);
    }).decamelize;
    var f = i3(function(e3) {
      function t3() {
        return e3.exports = t3 = Object.assign || function(e4) {
          for (var t4 = 1; t4 < arguments.length; t4++) {
            var r3 = arguments[t4];
            for (var n3 in r3)
              Object.prototype.hasOwnProperty.call(r3, n3) && (e4[n3] = r3[n3]);
          }
          return e4;
        }, t3.apply(this, arguments);
      }
      e3.exports = t3;
    });
    var d2 = function(e3) {
      if (Array.isArray(e3))
        return e3;
    };
    var p = function(e3, t3) {
      if (typeof Symbol != "undefined" && Symbol.iterator in Object(e3)) {
        var r3 = [], n3 = true, o3 = false, a3 = void 0;
        try {
          for (var u3, l3 = e3[Symbol.iterator](); !(n3 = (u3 = l3.next()).done) && (r3.push(u3.value), !t3 || r3.length !== t3); n3 = true)
            ;
        } catch (e4) {
          o3 = true, a3 = e4;
        } finally {
          try {
            n3 || l3.return == null || l3.return();
          } finally {
            if (o3)
              throw a3;
          }
        }
        return r3;
      }
    };
    var y2 = function(e3, t3) {
      (t3 == null || t3 > e3.length) && (t3 = e3.length);
      for (var r3 = 0, n3 = new Array(t3); r3 < t3; r3++)
        n3[r3] = e3[r3];
      return n3;
    };
    var h2 = function(e3, t3) {
      if (e3) {
        if (typeof e3 == "string")
          return y2(e3, t3);
        var r3 = Object.prototype.toString.call(e3).slice(8, -1);
        return r3 === "Object" && e3.constructor && (r3 = e3.constructor.name), r3 === "Map" || r3 === "Set" ? Array.from(e3) : r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? y2(e3, t3) : void 0;
      }
    };
    var v4 = function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    };
    var m2 = function(e3, t3) {
      return d2(e3) || p(e3, t3) || h2(e3, t3) || v4();
    };
    var g2 = function(e3, t3) {
      if (e3 == null)
        return {};
      var r3, n3, o3 = {}, a3 = Object.keys(e3);
      for (n3 = 0; n3 < a3.length; n3++)
        r3 = a3[n3], t3.indexOf(r3) >= 0 || (o3[r3] = e3[r3]);
      return o3;
    };
    var b2 = function(e3, t3) {
      if (e3 == null)
        return {};
      var r3, n3, o3 = g2(e3, t3);
      if (Object.getOwnPropertySymbols) {
        var a3 = Object.getOwnPropertySymbols(e3);
        for (n3 = 0; n3 < a3.length; n3++)
          r3 = a3[n3], t3.indexOf(r3) >= 0 || Object.prototype.propertyIsEnumerable.call(e3, r3) && (o3[r3] = e3[r3]);
      }
      return o3;
    };
    var S2 = e2.createContext(null);
    function w2(e3) {
      var t3 = e3.root, r3 = e3.children;
      return n2.createPortal(r3, t3);
    }
    function O2(t3) {
      var r3 = e2.forwardRef(function(r4, n3) {
        var o3, a3, l3 = r4.mode, c3 = r4.delegatesFocus, i4 = r4.styleSheets, s3 = r4.ssr, d3 = r4.children, p2 = b2(r4, ["mode", "delegatesFocus", "styleSheets", "ssr", "children"]), y3 = (o3 = n3, a3 = e2.useRef(o3 && o3.current), e2.useEffect(function() {
          o3 && (o3.current = a3.current);
        }, [o3]), a3), h3 = e2.useState(null), v5 = m2(h3, 2), g3 = v5[0], O3 = v5[1], j3 = "node_".concat(l3).concat(c3);
        return e2.useEffect(function() {
          if (y3.current)
            try {
              if (typeof n3 == "function" && n3(y3.current), s3) {
                var e3 = y3.current.shadowRoot;
                return void O3(e3);
              }
              var t4 = y3.current.attachShadow({ mode: l3, delegatesFocus: c3 });
              i4.length > 0 && (t4.adoptedStyleSheets = i4), O3(t4);
            } catch (e4) {
              !function(e5) {
                var t5 = e5.error, r5 = e5.styleSheets, n4 = e5.root;
                switch (t5.name) {
                  case "NotSupportedError":
                    r5.length > 0 && (n4.adoptedStyleSheets = r5);
                    break;
                  default:
                    throw t5;
                }
              }({ error: e4, styleSheets: i4, root: g3 });
            }
        }, [n3, y3, i4]), u2.default.createElement(u2.default.Fragment, null, u2.default.createElement(t3.tag, f({ key: j3, ref: y3 }, p2), (g3 || s3) && u2.default.createElement(S2.Provider, { value: g3 }, s3 ? u2.default.createElement("template", { shadowroot: "open" }, t3.render({ root: g3, ssr: s3, children: d3 })) : u2.default.createElement(w2, { root: g3 }, t3.render({ root: g3, ssr: s3, children: d3 })))));
      });
      return r3.propTypes = { mode: l2.default.oneOf(["open", "closed"]), delegatesFocus: l2.default.bool, styleSheets: l2.default.arrayOf(l2.default.instanceOf(globalThis.CSSStyleSheet)), ssr: l2.default.bool, children: l2.default.node }, r3.defaultProps = { mode: "open", delegatesFocus: false, styleSheets: [], ssr: false, children: null }, r3;
    }
    w2.propTypes = { root: l2.default.object.isRequired, children: l2.default.node }, w2.defaultProps = { children: null };
    var j2 = new Map();
    function E2() {
      var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "core", r3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(e4) {
        return e4.children;
      };
      return new Proxy(e3, { get: function(e4, n3) {
        var o3 = s2(n3, { separator: "-" }), a3 = "".concat(t3, "-").concat(o3);
        return j2.has(a3) || j2.set(a3, O2({ tag: o3, render: r3 })), j2.get(a3);
      } });
    }
    function x2(e3) {
      var n3 = new r2.ServerStyleSheet();
      return t2.renderToString(u2.default.createElement(r2.StyleSheetManager, { sheet: n3.instance }, u2.default.createElement(u2.default.Fragment, null, e3))), n3.getStyleElement();
    }
    E2();
    var z2 = E2({}, "styled-components", function(e3) {
      var t3 = e3.root, n3 = e3.ssr, o3 = e3.children;
      return n3 ? u2.default.createElement(u2.default.Fragment, null, x2(o3), o3) : u2.default.createElement(r2.StyleSheetManager, { target: t3 }, u2.default.createElement(u2.default.Fragment, null, o3));
    });
    exports2.default = z2, exports2.getStyleSheets = x2;
  }
});

// ../../node_modules/queue-microtask/index.js
var require_queue_microtask = __commonJS({
  "../../node_modules/queue-microtask/index.js"(exports2, module2) {
    var promise;
    module2.exports = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : global) : (cb) => (promise || (promise = Promise.resolve())).then(cb).catch((err) => setTimeout(() => {
      throw err;
    }, 0));
  }
});

// src/extension/index.ts
__export(exports, {
  default: () => extension_default
});

// src/extension/components/SnapshotEditor.tsx
var import_react20 = __toModule(require_react());
var import_react21 = __toModule(require_react());

// ../../node_modules/@react-three/fiber/dist/react-three-fiber.esm.js
var THREE = __toModule(require("three"));
var React = __toModule(require_react());
var import_zustand = __toModule(require_zustand());
var import_shallow = __toModule(require_shallow());
var import_react_reconciler = __toModule(require_react_reconciler());
var import_scheduler = __toModule(require_scheduler());

// ../../node_modules/use-asset/dist/index.js
var import_fast_deep_equal = __toModule(require_fast_deep_equal());
var globalCache = [];
function handleAsset(fn, cache, args, lifespan = 0, preload = false) {
  for (const entry2 of cache) {
    if ((0, import_fast_deep_equal.default)(args, entry2.args)) {
      if (preload)
        return;
      if (entry2.error)
        throw entry2.error;
      if (entry2.response)
        return entry2.response;
      throw entry2.promise;
    }
  }
  const entry = {
    args,
    promise: fn(...args).then((response) => entry.response = response != null ? response : true).catch((e2) => entry.error = e2 != null ? e2 : "unknown error").then(() => {
      if (lifespan > 0) {
        setTimeout(() => {
          const index = cache.indexOf(entry);
          if (index !== -1)
            cache.splice(index, 1);
        }, lifespan);
      }
    })
  };
  cache.push(entry);
  if (!preload)
    throw entry.promise;
}
function clear(cache, ...args) {
  if (args === void 0 || args.length === 0)
    cache.splice(0, cache.length);
  else {
    const entry = cache.find((entry2) => (0, import_fast_deep_equal.default)(args, entry2.args));
    if (entry) {
      const index = cache.indexOf(entry);
      if (index !== -1)
        cache.splice(index, 1);
    }
  }
}
function useAsset(fn, ...args) {
  return handleAsset(fn, globalCache, args, useAsset.lifespan);
}
useAsset.lifespan = 0;
useAsset.clear = (...args) => clear(globalCache, ...args);
useAsset.preload = (fn, ...args) => void handleAsset(fn, globalCache, args, useAsset.lifespan, true);
useAsset.peek = (...args) => {
  var _globalCache$find;
  return (_globalCache$find = globalCache.find((entry) => (0, import_fast_deep_equal.default)(args, entry.args))) == null ? void 0 : _globalCache$find.response;
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

// ../../node_modules/react-use-measure/dist/web.js
var import_react = __toModule(require_react());
var import_debounce = __toModule(require_debounce());
function useMeasure({
  debounce: debounce$1,
  scroll,
  polyfill
} = {
  debounce: 0,
  scroll: false
}) {
  const ResizeObserver = polyfill || (typeof window === "undefined" ? class ResizeObserver {
  } : window.ResizeObserver);
  if (!ResizeObserver) {
    throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  }
  const [bounds, set] = (0, import_react.useState)({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    bottom: 0,
    right: 0,
    x: 0,
    y: 0
  });
  const state = (0, import_react.useRef)({
    element: null,
    scrollContainers: null,
    resizeObserver: null,
    lastBounds: bounds
  });
  const scrollDebounce = debounce$1 ? typeof debounce$1 === "number" ? debounce$1 : debounce$1.scroll : null;
  const resizeDebounce = debounce$1 ? typeof debounce$1 === "number" ? debounce$1 : debounce$1.resize : null;
  const mounted = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    mounted.current = true;
    return () => void (mounted.current = false);
  });
  const [forceRefresh, resizeChange, scrollChange] = (0, import_react.useMemo)(() => {
    const callback = () => {
      if (!state.current.element)
        return;
      const {
        left,
        top,
        width,
        height,
        bottom,
        right,
        x: x2,
        y: y2
      } = state.current.element.getBoundingClientRect();
      const size = {
        left,
        top,
        width,
        height,
        bottom,
        right,
        x: x2,
        y: y2
      };
      Object.freeze(size);
      if (mounted.current && !areBoundsEqual(state.current.lastBounds, size))
        set(state.current.lastBounds = size);
    };
    return [callback, resizeDebounce ? (0, import_debounce.debounce)(callback, resizeDebounce) : callback, scrollDebounce ? (0, import_debounce.debounce)(callback, scrollDebounce) : callback];
  }, [set, scrollDebounce, resizeDebounce]);
  function removeListeners() {
    if (state.current.scrollContainers) {
      state.current.scrollContainers.forEach((element) => element.removeEventListener("scroll", scrollChange, true));
      state.current.scrollContainers = null;
    }
    if (state.current.resizeObserver) {
      state.current.resizeObserver.disconnect();
      state.current.resizeObserver = null;
    }
  }
  function addListeners() {
    if (!state.current.element)
      return;
    state.current.resizeObserver = new ResizeObserver(scrollChange);
    state.current.resizeObserver.observe(state.current.element);
    if (scroll && state.current.scrollContainers) {
      state.current.scrollContainers.forEach((scrollContainer) => scrollContainer.addEventListener("scroll", scrollChange, {
        capture: true,
        passive: true
      }));
    }
  }
  const ref = (node) => {
    if (!node || node === state.current.element)
      return;
    removeListeners();
    state.current.element = node;
    state.current.scrollContainers = findScrollContainers(node);
    addListeners();
  };
  useOnWindowScroll(scrollChange, Boolean(scroll));
  useOnWindowResize(resizeChange);
  (0, import_react.useEffect)(() => {
    removeListeners();
    addListeners();
  }, [scroll, scrollChange, resizeChange]);
  (0, import_react.useEffect)(() => removeListeners, []);
  return [ref, bounds, forceRefresh];
}
function useOnWindowResize(onWindowResize) {
  (0, import_react.useEffect)(() => {
    const cb = onWindowResize;
    window.addEventListener("resize", cb);
    return () => void window.removeEventListener("resize", cb);
  }, [onWindowResize]);
}
function useOnWindowScroll(onScroll, enabled) {
  (0, import_react.useEffect)(() => {
    if (enabled) {
      const cb = onScroll;
      window.addEventListener("scroll", cb, {
        capture: true,
        passive: true
      });
      return () => void window.removeEventListener("scroll", cb, true);
    }
  }, [onScroll, enabled]);
}
function findScrollContainers(element) {
  const result = [];
  if (!element || element === document.body)
    return result;
  const {
    overflow,
    overflowX,
    overflowY
  } = window.getComputedStyle(element);
  if ([overflow, overflowX, overflowY].some((prop) => prop === "auto" || prop === "scroll"))
    result.push(element);
  return [...result, ...findScrollContainers(element.parentElement)];
}
var keys = ["x", "y", "top", "bottom", "left", "right", "width", "height"];
var areBoundsEqual = (a2, b2) => keys.every((key) => a2[key] === b2[key]);
var web_default = useMeasure;

// ../../node_modules/@react-three/fiber/dist/react-three-fiber.esm.js
var is = {
  obj: (a2) => a2 === Object(a2) && !is.arr(a2) && typeof a2 !== "function",
  fun: (a2) => typeof a2 === "function",
  str: (a2) => typeof a2 === "string",
  num: (a2) => typeof a2 === "number",
  und: (a2) => a2 === void 0,
  arr: (a2) => Array.isArray(a2),
  equ(a2, b2) {
    if (typeof a2 !== typeof b2 || !!a2 !== !!b2)
      return false;
    if (is.str(a2) || is.num(a2) || is.obj(a2))
      return a2 === b2;
    if (is.arr(a2) && a2 == b2)
      return true;
    let i3;
    for (i3 in a2)
      if (!(i3 in b2))
        return false;
    for (i3 in b2)
      if (a2[i3] !== b2[i3])
        return false;
    return is.und(i3) ? a2 === b2 : true;
  }
};
function makeId(event) {
  return (event.eventObject || event.object).uuid + "/" + event.index;
}
function removeInteractivity(store, object) {
  const {
    internal
  } = store.getState();
  internal.interaction = internal.interaction.filter((o2) => o2 !== object);
  internal.initialHits = internal.initialHits.filter((o2) => o2 !== object);
  internal.hovered.forEach((value, key) => {
    if (value.eventObject === object || value.object === object) {
      internal.hovered.delete(key);
    }
  });
}
function createEvents(store) {
  const temp = new THREE.Vector3();
  function prepareRay(event) {
    var _raycaster$computeOff;
    const state = store.getState();
    const {
      raycaster,
      mouse,
      camera,
      size
    } = state;
    const {
      offsetX,
      offsetY
    } = (_raycaster$computeOff = raycaster.computeOffsets == null ? void 0 : raycaster.computeOffsets(event, state)) != null ? _raycaster$computeOff : event;
    const {
      width,
      height
    } = size;
    mouse.set(offsetX / width * 2 - 1, -(offsetY / height) * 2 + 1);
    raycaster.setFromCamera(mouse, camera);
  }
  function calculateDistance(event) {
    const {
      internal
    } = store.getState();
    const dx = event.offsetX - internal.initialClick[0];
    const dy = event.offsetY - internal.initialClick[1];
    return Math.round(Math.sqrt(dx * dx + dy * dy));
  }
  function filterPointerEvents(objects) {
    return objects.filter((obj) => ["Move", "Over", "Enter", "Out", "Leave"].some((name) => {
      var _r3f$handlers;
      return (_r3f$handlers = obj.__r3f.handlers) == null ? void 0 : _r3f$handlers["onPointer" + name];
    }));
  }
  function intersect(filter) {
    const state = store.getState();
    const {
      raycaster,
      internal
    } = state;
    if (!raycaster.enabled)
      return [];
    const seen = new Set();
    const intersections = [];
    const eventsObjects = filter ? filter(internal.interaction) : internal.interaction;
    let intersects = raycaster.intersectObjects(eventsObjects, true).filter((item) => {
      const id = makeId(item);
      if (seen.has(id))
        return false;
      seen.add(id);
      return true;
    });
    if (raycaster.filter)
      intersects = raycaster.filter(intersects, state);
    for (const intersect2 of intersects) {
      let eventObject = intersect2.object;
      while (eventObject) {
        var _r3f;
        const handlers = (_r3f = eventObject.__r3f) == null ? void 0 : _r3f.handlers;
        if (handlers)
          intersections.push(__spreadProps(__spreadValues({}, intersect2), {
            eventObject
          }));
        eventObject = eventObject.parent;
      }
    }
    return intersections;
  }
  function patchIntersects(intersections, event) {
    const {
      internal
    } = store.getState();
    if ("pointerId" in event && internal.capturedMap.has(event.pointerId)) {
      intersections.push(...internal.capturedMap.get(event.pointerId).values());
    }
    return intersections;
  }
  function handleIntersects(intersections, event, callback) {
    const {
      raycaster,
      mouse,
      camera,
      internal
    } = store.getState();
    if (intersections.length) {
      const unprojectedPoint = temp.set(mouse.x, mouse.y, 0).unproject(camera);
      const delta = event.type === "click" ? calculateDistance(event) : 0;
      const releasePointerCapture = (id) => event.target.releasePointerCapture(id);
      const localState = {
        stopped: false
      };
      for (const hit of intersections) {
        const hasPointerCapture = (id) => {
          var _internal$capturedMap, _internal$capturedMap2;
          return (_internal$capturedMap = (_internal$capturedMap2 = internal.capturedMap.get(id)) == null ? void 0 : _internal$capturedMap2.has(hit.eventObject)) != null ? _internal$capturedMap : false;
        };
        const setPointerCapture = (id) => {
          if (internal.capturedMap.has(id)) {
            internal.capturedMap.get(id).set(hit.eventObject, hit);
          } else {
            internal.capturedMap.set(id, new Map([[hit.eventObject, hit]]));
          }
          event.target.setPointerCapture(id);
        };
        let extractEventProps = {};
        for (let prop in Object.getPrototypeOf(event)) {
          let property2 = event[prop];
          if (typeof property2 !== "function")
            extractEventProps[prop] = property2;
        }
        let raycastEvent = __spreadProps(__spreadValues(__spreadValues({}, hit), extractEventProps), {
          spaceX: mouse.x,
          spaceY: mouse.y,
          intersections,
          stopped: localState.stopped,
          delta,
          unprojectedPoint,
          ray: raycaster.ray,
          camera,
          stopPropagation: () => {
            const capturesForPointer = "pointerId" in event && internal.capturedMap.get(event.pointerId);
            if (!capturesForPointer || capturesForPointer.has(hit.eventObject)) {
              raycastEvent.stopped = localState.stopped = true;
              if (internal.hovered.size && Array.from(internal.hovered.values()).find((i3) => i3.eventObject === hit.eventObject)) {
                const higher = intersections.slice(0, intersections.indexOf(hit));
                cancelPointer([...higher, hit]);
              }
            }
          },
          target: {
            hasPointerCapture,
            setPointerCapture,
            releasePointerCapture
          },
          currentTarget: {
            hasPointerCapture,
            setPointerCapture,
            releasePointerCapture
          },
          sourceEvent: event,
          nativeEvent: event
        });
        callback(raycastEvent);
        if (localState.stopped === true)
          break;
      }
    }
    return intersections;
  }
  function cancelPointer(hits) {
    const {
      internal
    } = store.getState();
    Array.from(internal.hovered.values()).forEach((hoveredObj) => {
      if (!hits.length || !hits.find((hit) => hit.object === hoveredObj.object && hit.index === hoveredObj.index)) {
        const eventObject = hoveredObj.eventObject;
        const handlers = eventObject.__r3f.handlers;
        internal.hovered.delete(makeId(hoveredObj));
        if (handlers) {
          const data = __spreadProps(__spreadValues({}, hoveredObj), {
            intersections: hits || []
          });
          handlers.onPointerOut == null ? void 0 : handlers.onPointerOut(data);
          handlers.onPointerLeave == null ? void 0 : handlers.onPointerLeave(data);
        }
      }
    });
  }
  const handlePointer = (name) => {
    switch (name) {
      case "onPointerLeave":
      case "onPointerCancel":
        return () => cancelPointer([]);
      case "onLostPointerCapture":
        return (event) => {
          if ("pointerId" in event) {
            store.getState().internal.capturedMap.delete(event.pointerId);
          }
          cancelPointer([]);
        };
    }
    return (event) => {
      const {
        onPointerMissed,
        internal
      } = store.getState();
      prepareRay(event);
      const isPointerMove = name === "onPointerMove";
      const filter = isPointerMove ? filterPointerEvents : void 0;
      const hits = patchIntersects(intersect(filter), event);
      if (isPointerMove)
        cancelPointer(hits);
      handleIntersects(hits, event, (data) => {
        const eventObject = data.eventObject;
        const handlers = eventObject.__r3f.handlers;
        if (!handlers)
          return;
        if (isPointerMove) {
          if (handlers.onPointerOver || handlers.onPointerEnter || handlers.onPointerOut || handlers.onPointerLeave) {
            const id = makeId(data);
            const hoveredItem = internal.hovered.get(id);
            if (!hoveredItem) {
              internal.hovered.set(id, data);
              handlers.onPointerOver == null ? void 0 : handlers.onPointerOver(data);
              handlers.onPointerEnter == null ? void 0 : handlers.onPointerEnter(data);
            } else if (hoveredItem.stopped) {
              data.stopPropagation();
            }
          }
          handlers.onPointerMove == null ? void 0 : handlers.onPointerMove(data);
        } else {
          const handler = handlers == null ? void 0 : handlers[name];
          if (handler) {
            if (name !== "onClick" && name !== "onContextMenu" && name !== "onDoubleClick" || internal.initialHits.includes(eventObject)) {
              handler(data);
              pointerMissed(event, internal.interaction.filter((object) => object !== eventObject));
            }
          }
        }
      });
      if (name === "onPointerDown") {
        internal.initialClick = [event.offsetX, event.offsetY];
        internal.initialHits = hits.map((hit) => hit.eventObject);
      }
      if ((name === "onClick" || name === "onContextMenu" || name === "onDoubleClick") && !hits.length) {
        if (calculateDistance(event) <= 2) {
          pointerMissed(event, internal.interaction);
          if (onPointerMissed)
            onPointerMissed(event);
        }
      }
    };
  };
  function pointerMissed(event, objects) {
    objects.forEach((object) => {
      var _r3f$handlers2;
      return (_r3f$handlers2 = object.__r3f.handlers) == null ? void 0 : _r3f$handlers2.onPointerMissed == null ? void 0 : _r3f$handlers2.onPointerMissed(event);
    });
  }
  return {
    handlePointer
  };
}
var isStore = (def) => def && !!def.getState;
var getContainer = (container, child) => {
  var _container$__r3f$root, _container$__r3f;
  return {
    root: isStore(container) ? container : (_container$__r3f$root = (_container$__r3f = container.__r3f) == null ? void 0 : _container$__r3f.root) != null ? _container$__r3f$root : child.__r3f.root,
    container: isStore(container) ? container.getState().scene : container
  };
};
var DEFAULT = "__default";
var EMPTY = {};
var FILTER = ["children", "key", "ref"];
var catalogue = {};
function prepare(object, state) {
  const instance = object;
  if (state != null && state.instance || !instance.__r3f) {
    instance.__r3f = __spreadValues({
      root: null,
      memoizedProps: {},
      objects: []
    }, state);
  }
  return object;
}
function createRenderer(roots2) {
  function applyProps2(instance, newProps, oldProps = {}, accumulative = false) {
    var _instance$__r3f, _root$getState, _instance$__r3f2;
    const localState = (_instance$__r3f = instance == null ? void 0 : instance.__r3f) != null ? _instance$__r3f : {};
    const root3 = localState.root;
    const rootState = (_root$getState = root3 == null ? void 0 : root3.getState == null ? void 0 : root3.getState()) != null ? _root$getState : {};
    const sameProps = [];
    const handlers = [];
    const newMemoizedProps = {};
    let i3 = 0;
    Object.entries(newProps).forEach(([key, entry]) => {
      if (FILTER.indexOf(key) === -1) {
        newMemoizedProps[key] = entry;
      }
    });
    if (localState.memoizedProps && localState.memoizedProps.args) {
      newMemoizedProps.args = localState.memoizedProps.args;
    }
    if (localState.memoizedProps && localState.memoizedProps.attach) {
      newMemoizedProps.attach = localState.memoizedProps.attach;
    }
    if (instance.__r3f) {
      instance.__r3f.memoizedProps = newMemoizedProps;
    }
    let objectKeys = Object.keys(newProps);
    for (i3 = 0; i3 < objectKeys.length; i3++) {
      if (is.equ(newProps[objectKeys[i3]], oldProps[objectKeys[i3]])) {
        sameProps.push(objectKeys[i3]);
      }
      if (is.fun(newProps[objectKeys[i3]]) && /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(objectKeys[i3])) {
        handlers.push(objectKeys[i3]);
      }
    }
    const leftOvers = [];
    if (accumulative) {
      objectKeys = Object.keys(oldProps);
      for (i3 = 0; i3 < objectKeys.length; i3++) {
        if (!newProps.hasOwnProperty(objectKeys[i3])) {
          leftOvers.push(objectKeys[i3]);
        }
      }
    }
    const toFilter = [...sameProps, ...FILTER];
    if ((_instance$__r3f2 = instance.__r3f) != null && _instance$__r3f2.instance)
      toFilter.push("object");
    const filteredProps = __spreadValues({}, newProps);
    objectKeys = Object.keys(filteredProps);
    for (i3 = 0; i3 < objectKeys.length; i3++) {
      if (toFilter.indexOf(objectKeys[i3]) > -1) {
        delete filteredProps[objectKeys[i3]];
      }
    }
    const filteredPropsEntries = Object.entries(filteredProps);
    for (i3 = 0; i3 < leftOvers.length; i3++) {
      if (leftOvers[i3] !== "children") {
        filteredPropsEntries.unshift([leftOvers[i3], DEFAULT + "remove"]);
      }
    }
    if (filteredPropsEntries.length > 0) {
      filteredPropsEntries.forEach(([key, value]) => {
        if (!handlers.includes(key)) {
          let currentInstance = instance;
          let targetProp = currentInstance[key];
          if (key.includes("-")) {
            const entries = key.split("-");
            targetProp = entries.reduce((acc, key2) => acc[key2], instance);
            if (!(targetProp && targetProp.set)) {
              const [name, ...reverseEntries] = entries.reverse();
              currentInstance = reverseEntries.reverse().reduce((acc, key2) => acc[key2], instance);
              key = name;
            }
          }
          if (value === DEFAULT + "remove") {
            if (targetProp && targetProp.constructor) {
              value = new targetProp.constructor(newMemoizedProps.args);
            } else if (currentInstance.constructor) {
              const defaultClassCall = new currentInstance.constructor(currentInstance.__r3f.memoizedProps.args);
              value = defaultClassCall[targetProp];
              if (defaultClassCall.dispose) {
                defaultClassCall.dispose();
              }
            } else {
              value = 0;
            }
          }
          if (targetProp && targetProp.set && (targetProp.copy || targetProp instanceof THREE.Layers)) {
            if (Array.isArray(value)) {
              if (targetProp.fromArray) {
                targetProp.fromArray(value);
              } else {
                targetProp.set(...value);
              }
            } else if (targetProp.copy && value && value.constructor && targetProp.constructor.name === value.constructor.name) {
              targetProp.copy(value);
            } else if (value !== void 0) {
              const isColor = targetProp instanceof THREE.Color;
              if (!isColor && targetProp.setScalar)
                targetProp.setScalar(value);
              else if (targetProp instanceof THREE.Layers && value instanceof THREE.Layers)
                targetProp.mask = value.mask;
              else
                targetProp.set(value);
              if (!rootState.linear && isColor)
                targetProp.convertSRGBToLinear();
            }
          } else {
            currentInstance[key] = value;
            if (!rootState.linear && currentInstance[key] instanceof THREE.Texture)
              currentInstance[key].encoding = THREE.sRGBEncoding;
          }
          invalidateInstance(instance);
        }
      });
      if (accumulative && root3 && instance.raycast && localState.handlers) {
        localState.handlers = void 0;
        const index = rootState.internal.interaction.indexOf(instance);
        if (index > -1)
          rootState.internal.interaction.splice(index, 1);
      }
      if (handlers.length) {
        if (accumulative && root3 && instance.raycast) {
          rootState.internal.interaction.push(instance);
        }
        localState.handlers = handlers.reduce((acc, key) => __spreadProps(__spreadValues({}, acc), {
          [key]: newProps[key]
        }), {});
      }
      if (instance.parent)
        updateInstance(instance);
    }
  }
  function invalidateInstance(instance) {
    var _instance$__r3f3, _instance$__r3f3$root;
    const state = (_instance$__r3f3 = instance.__r3f) == null ? void 0 : (_instance$__r3f3$root = _instance$__r3f3.root) == null ? void 0 : _instance$__r3f3$root.getState == null ? void 0 : _instance$__r3f3$root.getState();
    if (state && state.internal.frames === 0)
      state.invalidate();
  }
  function updateInstance(instance) {
    instance.onUpdate == null ? void 0 : instance.onUpdate(instance);
  }
  function createInstance(type, _a, root3, hostContext, internalInstanceHandle) {
    var _b = _a, {
      args = []
    } = _b, props = __objRest(_b, [
      "args"
    ]);
    let name = `${type[0].toUpperCase()}${type.slice(1)}`;
    let instance;
    if (!isStore(root3) && internalInstanceHandle) {
      const fn = (node) => {
        if (!node.return)
          return node.stateNode && node.stateNode.containerInfo;
        else
          return fn(node.return);
      };
      root3 = fn(internalInstanceHandle);
    }
    if (!root3 || !isStore(root3))
      throw `No valid root for ${name}!`;
    if (type === "primitive") {
      if (props.object === void 0)
        throw `Primitives without 'object' are invalid!`;
      const object = props.object;
      instance = prepare(object, {
        root: root3,
        instance: true
      });
    } else {
      const target = catalogue[name] || THREE[name];
      if (!target)
        throw `${name} is not part of the THREE namespace! Did you forget to extend? See: https://github.com/pmndrs/react-three-fiber/blob/master/markdown/api.md#using-3rd-party-objects-declaratively`;
      const isArgsArr = is.arr(args);
      instance = prepare(isArgsArr ? new target(...args) : new target(args), {
        root: root3,
        memoizedProps: {
          args: isArgsArr && args.length === 0 ? null : args
        }
      });
    }
    if (!("attachFns" in props)) {
      if (name.endsWith("Geometry")) {
        props = __spreadValues({
          attach: "geometry"
        }, props);
      } else if (name.endsWith("Material")) {
        props = __spreadValues({
          attach: "material"
        }, props);
      }
    }
    applyProps2(instance, props, {});
    return instance;
  }
  function appendChild(parentInstance, child) {
    let addedAsChild = false;
    if (child) {
      if (child.attachArray) {
        if (!is.arr(parentInstance[child.attachArray]))
          parentInstance[child.attachArray] = [];
        parentInstance[child.attachArray].push(child);
      } else if (child.attachObject) {
        if (!is.obj(parentInstance[child.attachObject[0]]))
          parentInstance[child.attachObject[0]] = {};
        parentInstance[child.attachObject[0]][child.attachObject[1]] = child;
      } else if (child.attach && !is.fun(child.attach)) {
        parentInstance[child.attach] = child;
      } else if (is.arr(child.attachFns)) {
        const [attachFn] = child.attachFns;
        if (is.str(attachFn) && is.fun(parentInstance[attachFn])) {
          parentInstance[attachFn](child);
        } else if (is.fun(attachFn)) {
          attachFn(child, parentInstance);
        }
      } else if (child.isObject3D) {
        parentInstance.add(child);
        addedAsChild = true;
      }
      if (!addedAsChild) {
        parentInstance.__r3f.objects.push(child);
        child.parent = parentInstance;
      }
      updateInstance(child);
      invalidateInstance(child);
    }
  }
  function insertBefore(parentInstance, child, beforeChild) {
    let added = false;
    if (child) {
      if (child.attachArray) {
        const array = parentInstance[child.attachArray];
        if (!is.arr(array))
          parentInstance[child.attachArray] = [];
        array.splice(array.indexOf(beforeChild), 0, child);
      } else if (child.attachObject || child.attach && !is.fun(child.attach)) {
        return appendChild(parentInstance, child);
      } else if (child.isObject3D) {
        child.parent = parentInstance;
        child.dispatchEvent({
          type: "added"
        });
        const restSiblings = parentInstance.children.filter((sibling) => sibling !== child);
        const index = restSiblings.indexOf(beforeChild);
        parentInstance.children = [...restSiblings.slice(0, index), child, ...restSiblings.slice(index)];
        added = true;
      }
      if (!added) {
        parentInstance.__r3f.objects.push(child);
        child.parent = parentInstance;
      }
      updateInstance(child);
      invalidateInstance(child);
    }
  }
  function removeRecursive(array, parent, dispose2 = false) {
    if (array)
      [...array].forEach((child) => removeChild(parent, child, dispose2));
  }
  function removeChild(parentInstance, child, dispose2) {
    if (child) {
      var _child$__r3f2;
      if (parentInstance.__r3f.objects) {
        const oldLength = parentInstance.__r3f.objects.length;
        parentInstance.__r3f.objects = parentInstance.__r3f.objects.filter((x2) => x2 !== child);
        const newLength = parentInstance.__r3f.objects.length;
        if (newLength < oldLength) {
          child.parent = null;
        }
      }
      if (child.attachArray) {
        parentInstance[child.attachArray] = parentInstance[child.attachArray].filter((x2) => x2 !== child);
      } else if (child.attachObject) {
        delete parentInstance[child.attachObject[0]][child.attachObject[1]];
      } else if (child.attach && !is.fun(child.attach)) {
        parentInstance[child.attach] = null;
      } else if (is.arr(child.attachFns)) {
        const [, detachFn] = child.attachFns;
        if (is.str(detachFn) && is.fun(parentInstance[detachFn])) {
          parentInstance[detachFn](child);
        } else if (is.fun(detachFn)) {
          detachFn(child, parentInstance);
        }
      } else if (child.isObject3D) {
        var _child$__r3f;
        parentInstance.remove(child);
        if ((_child$__r3f = child.__r3f) != null && _child$__r3f.root) {
          removeInteractivity(child.__r3f.root, child);
        }
      }
      const isInstance = (_child$__r3f2 = child.__r3f) == null ? void 0 : _child$__r3f2.instance;
      const shouldDispose = dispose2 === void 0 ? child.dispose !== null && !isInstance : dispose2;
      if (!isInstance) {
        var _child$__r3f3;
        removeRecursive((_child$__r3f3 = child.__r3f) == null ? void 0 : _child$__r3f3.objects, child, shouldDispose);
        removeRecursive(child.children, child, shouldDispose);
      }
      if (child.__r3f) {
        delete child.__r3f.root;
        delete child.__r3f.objects;
        delete child.__r3f.handlers;
        delete child.__r3f.memoizedProps;
        if (!isInstance)
          delete child.__r3f;
      }
      if (shouldDispose && child.dispose && child.type !== "Scene") {
        (0, import_scheduler.unstable_runWithPriority)(import_scheduler.unstable_IdlePriority, () => child.dispose());
      }
      invalidateInstance(parentInstance);
    }
  }
  function switchInstance(instance, type, newProps, fiber) {
    const parent = instance.parent;
    if (!parent)
      return;
    const newInstance = createInstance(type, newProps, instance.__r3f.root);
    if (instance.children) {
      instance.children.forEach((child) => appendChild(newInstance, child));
      instance.children = [];
    }
    instance.__r3f.objects.forEach((child) => appendChild(newInstance, child));
    instance.__r3f.objects = [];
    removeChild(parent, instance);
    appendChild(parent, newInstance);
    [fiber, fiber.alternate].forEach((fiber2) => {
      if (fiber2 !== null) {
        fiber2.stateNode = newInstance;
        if (fiber2.ref) {
          if (typeof fiber2.ref === "function")
            fiber2.ref(newInstance);
          else
            fiber2.ref.current = newInstance;
        }
      }
    });
  }
  const reconciler2 = (0, import_react_reconciler.default)({
    now: import_scheduler.unstable_now,
    createInstance,
    removeChild,
    appendChild,
    appendInitialChild: appendChild,
    insertBefore,
    warnsIfNotActing: true,
    supportsMutation: true,
    isPrimaryRenderer: false,
    scheduleTimeout: is.fun(setTimeout) ? setTimeout : void 0,
    cancelTimeout: is.fun(clearTimeout) ? clearTimeout : void 0,
    setTimeout: is.fun(setTimeout) ? setTimeout : void 0,
    clearTimeout: is.fun(clearTimeout) ? clearTimeout : void 0,
    noTimeout: -1,
    appendChildToContainer: (parentInstance, child) => {
      const {
        container,
        root: root3
      } = getContainer(parentInstance, child);
      container.__r3f.root = root3;
      appendChild(container, child);
    },
    removeChildFromContainer: (parentInstance, child) => {
      const {
        container
      } = getContainer(parentInstance, child);
      removeChild(container, child);
    },
    insertInContainerBefore: (parentInstance, child, beforeChild) => {
      const {
        container
      } = getContainer(parentInstance, child);
      insertBefore(container, child, beforeChild);
    },
    commitUpdate(instance, updatePayload, type, oldProps, newProps, fiber) {
      if (instance.__r3f.instance && newProps.object && newProps.object !== instance) {
        switchInstance(instance, type, newProps, fiber);
      } else {
        const _a = newProps, {
          args: argsNew = []
        } = _a, restNew = __objRest(_a, [
          "args"
        ]);
        const _b = oldProps, {
          args: argsOld = []
        } = _b, restOld = __objRest(_b, [
          "args"
        ]);
        const hasNewArgs = argsNew.some((value, index) => is.obj(value) ? Object.entries(value).some(([key, val3]) => val3 !== argsOld[index][key]) : value !== argsOld[index]);
        if (hasNewArgs) {
          switchInstance(instance, type, newProps, fiber);
        } else {
          applyProps2(instance, restNew, restOld, true);
        }
      }
    },
    hideInstance(instance) {
      if (instance.isObject3D) {
        instance.visible = false;
        invalidateInstance(instance);
      }
    },
    unhideInstance(instance, props) {
      if (instance.isObject3D && props.visible == null || props.visible) {
        instance.visible = true;
        invalidateInstance(instance);
      }
    },
    hideTextInstance() {
      throw new Error("Text is not allowed in the R3F tree.");
    },
    getPublicInstance(instance) {
      return instance;
    },
    getRootHostContext(rootContainer) {
      return EMPTY;
    },
    getChildHostContext(parentHostContext) {
      return EMPTY;
    },
    createTextInstance() {
    },
    finalizeInitialChildren(instance) {
      return !!instance.__r3f.handlers;
    },
    commitMount(instance) {
      if (instance.raycast && instance.__r3f.handlers)
        instance.__r3f.root.getState().internal.interaction.push(instance);
    },
    prepareUpdate() {
      return EMPTY;
    },
    shouldDeprioritizeSubtree() {
      return false;
    },
    prepareForCommit() {
      return null;
    },
    preparePortalMount(...args) {
    },
    resetAfterCommit() {
    },
    shouldSetTextContent() {
      return false;
    },
    clearContainer() {
      return false;
    }
  });
  return {
    reconciler: reconciler2,
    applyProps: applyProps2
  };
}
var isRenderer = (def) => def && !!def.render;
var isOrthographicCamera = (def) => def && def.isOrthographicCamera;
var context = /* @__PURE__ */ React.createContext(null);
var createStore = (applyProps2, invalidate2, advance2, props) => {
  const {
    gl,
    size,
    shadows = false,
    linear = false,
    flat = false,
    vr = false,
    orthographic = false,
    frameloop = "always",
    dpr = 1,
    performance: performance2,
    clock = new THREE.Clock(),
    raycaster: raycastOptions,
    camera: cameraOptions,
    onPointerMissed
  } = props;
  if (shadows) {
    gl.shadowMap.enabled = true;
    if (typeof shadows === "object")
      Object.assign(gl.shadowMap, shadows);
    else
      gl.shadowMap.type = THREE.PCFSoftShadowMap;
  }
  if (!linear) {
    if (!flat)
      gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.outputEncoding = THREE.sRGBEncoding;
  }
  if (frameloop === "never") {
    clock.stop();
    clock.elapsedTime = 0;
  }
  const rootState = (0, import_zustand.default)((set, get2) => {
    const raycaster = new THREE.Raycaster();
    const _a = raycastOptions || {}, {
      params
    } = _a, options = __objRest(_a, [
      "params"
    ]);
    applyProps2(raycaster, __spreadProps(__spreadValues({
      enabled: true
    }, options), {
      params: __spreadValues(__spreadValues({}, raycaster.params), params)
    }), {});
    const isCamera = cameraOptions instanceof THREE.Camera;
    const camera = isCamera ? cameraOptions : orthographic ? new THREE.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3) : new THREE.PerspectiveCamera(75, 0, 0.1, 1e3);
    if (!isCamera) {
      camera.position.z = 5;
      if (cameraOptions)
        applyProps2(camera, cameraOptions, {});
      camera.lookAt(0, 0, 0);
    }
    function setDpr(dpr2) {
      return Array.isArray(dpr2) ? Math.min(Math.max(dpr2[0], window.devicePixelRatio), dpr2[1]) : dpr2;
    }
    const initialDpr = setDpr(dpr);
    const position = new THREE.Vector3();
    const defaultTarget = new THREE.Vector3();
    function getCurrentViewport(camera2 = get2().camera, target = defaultTarget, size2 = get2().size) {
      const {
        width,
        height
      } = size2;
      const aspect = width / height;
      const distance = camera2.getWorldPosition(position).distanceTo(target);
      if (isOrthographicCamera(camera2)) {
        return {
          width: width / camera2.zoom,
          height: height / camera2.zoom,
          factor: 1,
          distance,
          aspect
        };
      } else {
        const fov = camera2.fov * Math.PI / 180;
        const h2 = 2 * Math.tan(fov / 2) * distance;
        const w2 = h2 * (width / height);
        return {
          width: w2,
          height: h2,
          factor: width / w2,
          distance,
          aspect
        };
      }
    }
    let performanceTimeout = void 0;
    const setPerformanceCurrent = (current) => set((state2) => ({
      performance: __spreadProps(__spreadValues({}, state2.performance), {
        current
      })
    }));
    return {
      gl,
      set,
      get: get2,
      invalidate: () => invalidate2(get2()),
      advance: (timestamp, runGlobalEffects) => advance2(timestamp, runGlobalEffects, get2()),
      linear,
      flat,
      scene: prepare(new THREE.Scene()),
      camera,
      controls: null,
      raycaster,
      clock,
      mouse: new THREE.Vector2(),
      vr,
      frameloop,
      onPointerMissed,
      performance: __spreadProps(__spreadValues({
        current: 1,
        min: 0.5,
        max: 1,
        debounce: 200
      }, performance2), {
        regress: () => {
          const state2 = get2();
          if (performanceTimeout)
            clearTimeout(performanceTimeout);
          if (state2.performance.current !== state2.performance.min)
            setPerformanceCurrent(state2.performance.min);
          performanceTimeout = setTimeout(() => setPerformanceCurrent(get2().performance.max), state2.performance.debounce);
        }
      }),
      size: {
        width: 0,
        height: 0
      },
      viewport: {
        initialDpr,
        dpr: initialDpr,
        width: 0,
        height: 0,
        aspect: 0,
        distance: 0,
        factor: 0,
        getCurrentViewport
      },
      setSize: (width, height) => {
        const size2 = {
          width,
          height
        };
        set((state2) => ({
          size: size2,
          viewport: __spreadValues(__spreadValues({}, state2.viewport), getCurrentViewport(camera, defaultTarget, size2))
        }));
      },
      setDpr: (dpr2) => set((state2) => ({
        viewport: __spreadProps(__spreadValues({}, state2.viewport), {
          dpr: setDpr(dpr2)
        })
      })),
      events: {
        connected: false
      },
      internal: {
        active: false,
        priority: 0,
        frames: 0,
        lastProps: props,
        interaction: [],
        hovered: new Map(),
        subscribers: [],
        initialClick: [0, 0],
        initialHits: [],
        capturedMap: new Map(),
        subscribe: (ref, priority = 0) => {
          set(({
            internal
          }) => ({
            internal: __spreadProps(__spreadValues({}, internal), {
              priority: internal.priority + (priority > 0 ? 1 : 0),
              subscribers: [...internal.subscribers, {
                ref,
                priority
              }].sort((a2, b2) => a2.priority - b2.priority)
            })
          }));
          return () => {
            set(({
              internal
            }) => ({
              internal: __spreadProps(__spreadValues({}, internal), {
                priority: internal.priority - (priority > 0 ? 1 : 0),
                subscribers: internal.subscribers.filter((s2) => s2.ref !== ref)
              })
            }));
          };
        }
      }
    };
  });
  rootState.subscribe(() => {
    const {
      camera,
      size: size2,
      viewport,
      internal
    } = rootState.getState();
    if (!(internal.lastProps.camera instanceof THREE.Camera)) {
      if (isOrthographicCamera(camera)) {
        camera.left = size2.width / -2;
        camera.right = size2.width / 2;
        camera.top = size2.height / 2;
        camera.bottom = size2.height / -2;
      } else {
        camera.aspect = size2.width / size2.height;
      }
      camera.updateProjectionMatrix();
      camera.updateMatrixWorld();
    }
    gl.setPixelRatio(viewport.dpr);
    gl.setSize(size2.width, size2.height);
  }, (state2) => [state2.viewport.dpr, state2.size], import_shallow.default);
  const state = rootState.getState();
  if (size)
    state.setSize(size.width, size.height);
  rootState.subscribe((state2) => invalidate2(state2));
  return rootState;
};
var i;
var globalEffects = [];
var globalAfterEffects = [];
var globalTailEffects = [];
function run(effects, timestamp) {
  for (i = 0; i < effects.length; i++)
    effects[i](timestamp);
}
function render$1(timestamp, state) {
  let delta = state.clock.getDelta();
  if (state.frameloop === "never" && typeof timestamp === "number") {
    delta = timestamp - state.clock.elapsedTime;
    state.clock.oldTime = state.clock.elapsedTime;
    state.clock.elapsedTime = timestamp;
  }
  for (i = 0; i < state.internal.subscribers.length; i++)
    state.internal.subscribers[i].ref.current(state, delta);
  if (!state.internal.priority && state.gl.render)
    state.gl.render(state.scene, state.camera);
  state.internal.frames = Math.max(0, state.internal.frames - 1);
  return state.frameloop === "always" ? 1 : state.internal.frames;
}
function createLoop(roots2) {
  let running = false;
  let repeat;
  function loop(timestamp) {
    running = true;
    repeat = 0;
    run(globalEffects, timestamp);
    roots2.forEach((root3) => {
      const state = root3.store.getState();
      if (state.internal.active && (state.frameloop === "always" || state.internal.frames > 0))
        repeat += render$1(timestamp, state);
    });
    run(globalAfterEffects, timestamp);
    if (repeat > 0)
      return requestAnimationFrame(loop);
    else
      run(globalTailEffects, timestamp);
    running = false;
  }
  function invalidate2(state) {
    if (!state)
      return roots2.forEach((root3) => invalidate2(root3.store.getState()));
    if (state.vr || !state.internal.active || state.frameloop === "never")
      return;
    state.internal.frames = Math.min(60, state.internal.frames + 1);
    if (!running) {
      running = true;
      requestAnimationFrame(loop);
    }
  }
  function advance2(timestamp, runGlobalEffects = true, state) {
    if (runGlobalEffects)
      run(globalEffects, timestamp);
    if (!state)
      roots2.forEach((root3) => render$1(timestamp, root3.store.getState()));
    else
      render$1(timestamp, state);
    if (runGlobalEffects)
      run(globalAfterEffects, timestamp);
  }
  return {
    loop,
    invalidate: invalidate2,
    advance: advance2
  };
}
function createPointerEvents(store) {
  const {
    handlePointer
  } = createEvents(store);
  const names = {
    onClick: ["click", false],
    onContextMenu: ["contextmenu", false],
    onDoubleClick: ["dblclick", false],
    onWheel: ["wheel", true],
    onPointerDown: ["pointerdown", true],
    onPointerUp: ["pointerup", true],
    onPointerLeave: ["pointerleave", true],
    onPointerMove: ["pointermove", true],
    onPointerCancel: ["pointercancel", true],
    onLostPointerCapture: ["lostpointercapture", true]
  };
  return {
    connected: false,
    handlers: Object.keys(names).reduce((acc, key) => __spreadProps(__spreadValues({}, acc), {
      [key]: handlePointer(key)
    }), {}),
    connect: (target) => {
      var _events$handlers;
      const {
        set,
        events
      } = store.getState();
      events.disconnect == null ? void 0 : events.disconnect();
      set((state) => ({
        events: __spreadProps(__spreadValues({}, state.events), {
          connected: target
        })
      }));
      Object.entries((_events$handlers = events == null ? void 0 : events.handlers) != null ? _events$handlers : []).forEach(([name, event]) => {
        const [eventName, passive] = names[name];
        target.addEventListener(eventName, event, {
          passive
        });
      });
    },
    disconnect: () => {
      const {
        set,
        events
      } = store.getState();
      if (events.connected) {
        var _events$handlers2;
        Object.entries((_events$handlers2 = events.handlers) != null ? _events$handlers2 : []).forEach(([name, event]) => {
          if (events && events.connected instanceof HTMLElement) {
            const [eventName] = names[name];
            events.connected.removeEventListener(eventName, event);
          }
        });
        set((state) => ({
          events: __spreadProps(__spreadValues({}, state.events), {
            connected: false
          })
        }));
      }
    }
  };
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;
function Block({
  set
}) {
  useIsomorphicLayoutEffect(() => {
    set(new Promise(() => null));
    return () => set(false);
  }, []);
  return null;
}
var ErrorBoundary = class extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      error: false
    };
  }
  componentDidCatch(error) {
    this.props.set(error);
  }
  render() {
    return this.state.error ? null : this.props.children;
  }
};
ErrorBoundary.getDerivedStateFromError = () => ({
  error: true
});
var Canvas = /* @__PURE__ */ React.forwardRef(function Canvas2(_a, forwardedRef) {
  var _b = _a, {
    children,
    fallback,
    tabIndex,
    resize,
    id,
    style,
    className,
    events
  } = _b, props = __objRest(_b, [
    "children",
    "fallback",
    "tabIndex",
    "resize",
    "id",
    "style",
    "className",
    "events"
  ]);
  const [containerRef, size] = web_default(__spreadValues({
    scroll: true,
    debounce: {
      scroll: 50,
      resize: 0
    }
  }, resize));
  const canvasRef = React.useRef(null);
  const [block, setBlock] = React.useState(false);
  const [error, setError] = React.useState(false);
  if (block)
    throw block;
  if (error)
    throw error;
  useIsomorphicLayoutEffect(() => {
    if (size.width > 0 && size.height > 0) {
      render(/* @__PURE__ */ React.createElement(ErrorBoundary, {
        set: setError
      }, /* @__PURE__ */ React.createElement(React.Suspense, {
        fallback: /* @__PURE__ */ React.createElement(Block, {
          set: setBlock
        })
      }, children)), canvasRef.current, __spreadProps(__spreadValues({}, props), {
        size,
        events: events || createPointerEvents
      }));
    }
  }, [size, children]);
  useIsomorphicLayoutEffect(() => {
    const container = canvasRef.current;
    return () => unmountComponentAtNode(container);
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    ref: containerRef,
    id,
    className,
    tabIndex,
    style: __spreadValues({
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden"
    }, style)
  }, /* @__PURE__ */ React.createElement("canvas", {
    ref: react_merge_refs_esm_default([canvasRef, forwardedRef]),
    style: {
      display: "block"
    }
  }, fallback));
});
function useThree(selector = (state) => state, equalityFn) {
  const useStore = React.useContext(context);
  if (!useStore)
    throw `R3F hooks can only be used within the Canvas component!`;
  return useStore(selector, equalityFn);
}
function useFrame(callback, renderPriority = 0) {
  const {
    subscribe
  } = React.useContext(context).getState().internal;
  const ref = React.useRef(callback);
  React.useLayoutEffect(() => void (ref.current = callback), [callback]);
  React.useLayoutEffect(() => {
    const unsubscribe = subscribe(ref, renderPriority);
    return () => unsubscribe();
  }, [renderPriority, subscribe]);
  return null;
}
function buildGraph(object) {
  const data = {
    nodes: {},
    materials: {}
  };
  if (object) {
    object.traverse((obj) => {
      if (obj.name) {
        data.nodes[obj.name] = obj;
      }
      if (obj.material && !data.materials[obj.material.name]) {
        data.materials[obj.material.name] = obj.material;
      }
    });
  }
  return data;
}
function loadingFn(extensions, onProgress) {
  return function(Proto, ...input) {
    const loader = new Proto();
    if (extensions)
      extensions(loader);
    return Promise.all(input.map((input2) => new Promise((res, reject) => loader.load(input2, (data) => {
      if (data.scene)
        Object.assign(data, buildGraph(data.scene));
      res(data);
    }, onProgress, (error) => reject(`Could not load ${input2}: ${error.message}`)))));
  };
}
function useLoader(Proto, input, extensions, onProgress) {
  const keys3 = Array.isArray(input) ? input : [input];
  const results = useAsset(loadingFn(extensions, onProgress), Proto, ...keys3);
  return Array.isArray(input) ? results : results[0];
}
useLoader.preload = function(Proto, input, extensions) {
  const keys3 = Array.isArray(input) ? input : [input];
  return useAsset.preload(loadingFn(extensions), Proto, ...keys3);
};
useLoader.clear = function(Proto, input) {
  const keys3 = Array.isArray(input) ? input : [input];
  return useAsset.clear(Proto, ...keys3);
};
var roots = new Map();
var modes = ["legacy", "blocking", "concurrent"];
var {
  invalidate,
  advance
} = createLoop(roots);
var {
  reconciler,
  applyProps
} = createRenderer();
var createRendererInstance = (gl, canvas) => isRenderer(gl) ? gl : new THREE.WebGLRenderer(__spreadValues({
  powerPreference: "high-performance",
  canvas,
  antialias: true,
  alpha: true
}, gl));
function render(element, canvas, _a = {}) {
  var _b = _a, {
    gl,
    size,
    mode = modes[1],
    events,
    onCreated
  } = _b, props = __objRest(_b, [
    "gl",
    "size",
    "mode",
    "events",
    "onCreated"
  ]);
  var _store;
  if (!size) {
    var _canvas$parentElement, _canvas$parentElement2, _canvas$parentElement3, _canvas$parentElement4;
    size = {
      width: (_canvas$parentElement = (_canvas$parentElement2 = canvas.parentElement) == null ? void 0 : _canvas$parentElement2.clientWidth) != null ? _canvas$parentElement : 0,
      height: (_canvas$parentElement3 = (_canvas$parentElement4 = canvas.parentElement) == null ? void 0 : _canvas$parentElement4.clientHeight) != null ? _canvas$parentElement3 : 0
    };
  }
  let root3 = roots.get(canvas);
  let fiber = root3 == null ? void 0 : root3.fiber;
  let store = root3 == null ? void 0 : root3.store;
  let state = (_store = store) == null ? void 0 : _store.getState();
  if (fiber && state) {
    const lastProps = state.internal.lastProps;
    if (props.dpr !== void 0 && !is.equ(lastProps.dpr, props.dpr))
      state.setDpr(props.dpr);
    if (!is.equ(lastProps.size, size))
      state.setSize(size.width, size.height);
    const linearChanged = props.linear !== lastProps.linear;
    if (linearChanged) {
      unmountComponentAtNode(canvas);
      fiber = void 0;
    }
  }
  if (!fiber) {
    const glRenderer = createRendererInstance(gl, canvas);
    if (props.vr) {
      glRenderer.xr.enabled = true;
      glRenderer.setAnimationLoop((timestamp) => advance(timestamp, true));
    }
    store = createStore(applyProps, invalidate, advance, __spreadValues({
      gl: glRenderer,
      size
    }, props));
    const state2 = store.getState();
    fiber = reconciler.createContainer(store, modes.indexOf(mode), false, null);
    roots.set(canvas, {
      fiber,
      store
    });
    if (events)
      state2.set({
        events: events(store)
      });
  }
  if (store && fiber) {
    reconciler.updateContainer(/* @__PURE__ */ React.createElement(Provider, {
      store,
      element,
      onCreated,
      target: canvas
    }), fiber, null, () => void 0);
    return store;
  } else {
    throw "Error creating root!";
  }
}
function Provider({
  store,
  element,
  onCreated,
  target
}) {
  React.useEffect(() => {
    const state = store.getState();
    state.set((state2) => ({
      internal: __spreadProps(__spreadValues({}, state2.internal), {
        active: true
      })
    }));
    state.events.connect == null ? void 0 : state.events.connect(target);
    if (onCreated)
      onCreated(state);
  }, []);
  return /* @__PURE__ */ React.createElement(context.Provider, {
    value: store
  }, element);
}
function unmountComponentAtNode(canvas, callback) {
  const root3 = roots.get(canvas);
  const fiber = root3 == null ? void 0 : root3.fiber;
  if (fiber) {
    const state = root3 == null ? void 0 : root3.store.getState();
    if (state)
      state.internal.active = false;
    reconciler.updateContainer(null, fiber, null, () => {
      if (state) {
        setTimeout(() => {
          var _state$gl, _state$gl$renderLists, _state$gl2;
          state.events.disconnect == null ? void 0 : state.events.disconnect();
          (_state$gl = state.gl) == null ? void 0 : (_state$gl$renderLists = _state$gl.renderLists) == null ? void 0 : _state$gl$renderLists.dispose == null ? void 0 : _state$gl$renderLists.dispose();
          (_state$gl2 = state.gl) == null ? void 0 : _state$gl2.forceContextLoss == null ? void 0 : _state$gl2.forceContextLoss();
          dispose(state);
          roots.delete(canvas);
          if (callback)
            callback(canvas);
        }, 500);
      }
    });
  }
}
function dispose(obj) {
  if (obj.dispose && obj.type !== "Scene")
    obj.dispose();
  for (const p in obj) {
    var _dispose, _ref;
    (_dispose = (_ref = p).dispose) == null ? void 0 : _dispose.call(_ref);
    delete obj[p];
  }
}
var act = reconciler.act;
var hasSymbol = is.fun(Symbol) && Symbol.for;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
function createPortal(children, container, implementation, key = null) {
  return {
    $$typeof: REACT_PORTAL_TYPE,
    key: key == null ? null : "" + key,
    children,
    containerInfo: prepare(container),
    implementation
  };
}
reconciler.injectIntoDevTools({
  bundleType: true ? 0 : 1,
  rendererPackageName: "@react-three/fiber",
  version: "17.0.2"
});

// src/extension/components/SnapshotEditor.tsx
var import_r3f3 = __toModule(require("@theatre/r3f"));
var import_shallow5 = __toModule(require_shallow());
var import_styled_components2 = __toModule(require_styled_components());

// src/extension/components/ProxyManager.tsx
var import_react12 = __toModule(require_react());

// src/extension/components/EditableProxy.tsx
var import_react9 = __toModule(require_react());

// ../../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i3 = 1; i3 < arguments.length; i3++) {
      var source = arguments[i3];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/@react-three/drei/web/Html.js
var React2 = __toModule(require_react());
var ReactDOM = __toModule(require_react_dom());
var import_three = __toModule(require("three"));
var v1 = new import_three.Vector3();
var v2 = new import_three.Vector3();
var v3 = new import_three.Vector3();
function defaultCalculatePosition(el, camera, size) {
  const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
  objectPos.project(camera);
  const widthHalf = size.width / 2;
  const heightHalf = size.height / 2;
  return [objectPos.x * widthHalf + widthHalf, -(objectPos.y * heightHalf) + heightHalf];
}
function isObjectBehindCamera(el, camera) {
  const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
  const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
  const deltaCamObj = objectPos.sub(cameraPos);
  const camDir = camera.getWorldDirection(v3);
  return deltaCamObj.angleTo(camDir) > Math.PI / 2;
}
function isObjectVisible(el, camera, raycaster, occlude) {
  const elPos = v1.setFromMatrixPosition(el.matrixWorld);
  const screenPos = elPos.clone();
  screenPos.project(camera);
  raycaster.setFromCamera(screenPos, camera);
  const intersects = raycaster.intersectObjects(occlude, true);
  if (intersects.length) {
    const intersectionDistance = intersects[0].distance;
    const pointDistance = elPos.distanceTo(raycaster.ray.origin);
    return pointDistance < intersectionDistance;
  } else {
    return true;
  }
}
function objectScale(el, camera) {
  if (camera instanceof import_three.OrthographicCamera) {
    return camera.zoom;
  } else if (camera instanceof import_three.PerspectiveCamera) {
    const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
    const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
    const vFOV = camera.fov * Math.PI / 180;
    const dist = objectPos.distanceTo(cameraPos);
    const scaleFOV = 2 * Math.tan(vFOV / 2) * dist;
    return 1 / scaleFOV;
  } else {
    return 1;
  }
}
function objectZIndex(el, camera, zIndexRange) {
  if (camera instanceof import_three.PerspectiveCamera || camera instanceof import_three.OrthographicCamera) {
    const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
    const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
    const dist = objectPos.distanceTo(cameraPos);
    const A2 = (zIndexRange[1] - zIndexRange[0]) / (camera.far - camera.near);
    const B2 = zIndexRange[1] - A2 * camera.far;
    return Math.round(A2 * dist + B2);
  }
  return void 0;
}
var epsilon = (value) => Math.abs(value) < 1e-10 ? 0 : value;
function getCSSMatrix(matrix, multipliers, prepend = "") {
  let matrix3d = "matrix3d(";
  for (let i3 = 0; i3 !== 16; i3++) {
    matrix3d += epsilon(multipliers[i3] * matrix.elements[i3]) + (i3 !== 15 ? "," : ")");
  }
  return prepend + matrix3d;
}
var getCameraCSSMatrix = ((multipliers) => {
  return (matrix) => getCSSMatrix(matrix, multipliers);
})([1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1]);
var getObjectCSSMatrix = ((scaleMultipliers) => {
  return (matrix, factor) => getCSSMatrix(matrix, scaleMultipliers(factor), "translate(-50%,-50%)");
})((f) => [1 / f, 1 / f, 1 / f, 1, -1 / f, -1 / f, -1 / f, -1, 1 / f, 1 / f, 1 / f, 1, 1, 1, 1, 1]);
var Html = /* @__PURE__ */ React2.forwardRef((_a, ref) => {
  var _b = _a, {
    children,
    eps = 1e-3,
    style,
    className,
    prepend,
    center,
    fullscreen,
    portal,
    distanceFactor,
    sprite = false,
    transform = false,
    occlude,
    onOcclude,
    zIndexRange = [16777271, 0],
    calculatePosition = defaultCalculatePosition,
    as = "div"
  } = _b, props = __objRest(_b, [
    "children",
    "eps",
    "style",
    "className",
    "prepend",
    "center",
    "fullscreen",
    "portal",
    "distanceFactor",
    "sprite",
    "transform",
    "occlude",
    "onOcclude",
    "zIndexRange",
    "calculatePosition",
    "as"
  ]);
  var _portal$current;
  const gl = useThree(({
    gl: gl2
  }) => gl2);
  const camera = useThree(({
    camera: camera2
  }) => camera2);
  const scene = useThree(({
    scene: scene2
  }) => scene2);
  const size = useThree(({
    size: size2
  }) => size2);
  const raycaster = useThree(({
    raycaster: raycaster2
  }) => raycaster2);
  const [el] = React2.useState(() => document.createElement(as));
  const group = React2.useRef(null);
  const oldZoom = React2.useRef(0);
  const oldPosition = React2.useRef([0, 0]);
  const transformOuterRef = React2.useRef(null);
  const transformInnerRef = React2.useRef(null);
  const target = (_portal$current = portal == null ? void 0 : portal.current) !== null && _portal$current !== void 0 ? _portal$current : gl.domElement.parentNode;
  React2.useEffect(() => {
    if (group.current) {
      scene.updateMatrixWorld();
      if (transform) {
        el.style.cssText = `position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;`;
      } else {
        const vec = calculatePosition(group.current, camera, size);
        el.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${vec[0]}px,${vec[1]}px,0);transform-origin:0 0;`;
      }
      if (target) {
        if (prepend)
          target.prepend(el);
        else
          target.appendChild(el);
      }
      return () => {
        if (target)
          target.removeChild(el);
        ReactDOM.unmountComponentAtNode(el);
      };
    }
  }, [target, transform]);
  const styles = React2.useMemo(() => {
    if (transform) {
      return {
        position: "absolute",
        top: 0,
        left: 0,
        width: size.width,
        height: size.height,
        transformStyle: "preserve-3d",
        pointerEvents: "none"
      };
    } else {
      return __spreadValues(__spreadValues({
        position: "absolute",
        transform: center ? "translate3d(-50%,-50%,0)" : "none"
      }, fullscreen && {
        top: -size.height / 2,
        left: -size.width / 2,
        width: size.width,
        height: size.height
      }), style);
    }
  }, [style, center, fullscreen, size, transform]);
  const transformInnerStyles = React2.useMemo(() => ({
    position: "absolute",
    pointerEvents: "auto"
  }), []);
  React2.useLayoutEffect(() => {
    if (transform) {
      ReactDOM.render(/* @__PURE__ */ React2.createElement("div", {
        ref: transformOuterRef,
        style: styles
      }, /* @__PURE__ */ React2.createElement("div", {
        ref: transformInnerRef,
        style: transformInnerStyles
      }, /* @__PURE__ */ React2.createElement("div", {
        ref,
        className,
        style,
        children
      }))), el);
    } else {
      ReactDOM.render(/* @__PURE__ */ React2.createElement("div", {
        ref,
        style: styles,
        className,
        children
      }), el);
    }
  });
  const visible = React2.useRef(true);
  useFrame(() => {
    if (group.current) {
      camera.updateMatrixWorld();
      group.current.updateWorldMatrix(true, false);
      const vec = transform ? oldPosition.current : calculatePosition(group.current, camera, size);
      if (transform || Math.abs(oldZoom.current - camera.zoom) > eps || Math.abs(oldPosition.current[0] - vec[0]) > eps || Math.abs(oldPosition.current[1] - vec[1]) > eps) {
        const isBehindCamera = isObjectBehindCamera(group.current, camera);
        let raytraceTarget = false;
        if (typeof occlude === "boolean") {
          if (occlude === true) {
            raytraceTarget = [scene];
          }
        } else if (Array.isArray(occlude)) {
          raytraceTarget = occlude.map((item) => item.current);
        }
        const previouslyVisible = visible.current;
        if (raytraceTarget) {
          const isvisible = isObjectVisible(group.current, camera, raycaster, raytraceTarget);
          visible.current = isvisible && !isBehindCamera;
        } else {
          visible.current = !isBehindCamera;
        }
        if (previouslyVisible !== visible.current) {
          if (onOcclude)
            onOcclude(!visible.current);
          else
            el.style.display = visible.current ? "block" : "none";
        }
        el.style.zIndex = `${objectZIndex(group.current, camera, zIndexRange)}`;
        if (transform) {
          const [widthHalf, heightHalf] = [size.width / 2, size.height / 2];
          const fov = camera.projectionMatrix.elements[5] * heightHalf;
          const {
            isOrthographicCamera: isOrthographicCamera2,
            top,
            left,
            bottom,
            right
          } = camera;
          const cameraMatrix = getCameraCSSMatrix(camera.matrixWorldInverse);
          const cameraTransform = isOrthographicCamera2 ? `scale(${fov})translate(${epsilon(-(right + left) / 2)}px,${epsilon((top + bottom) / 2)}px)` : `translateZ(${fov}px)`;
          let matrix = group.current.matrixWorld;
          if (sprite) {
            matrix = camera.matrixWorldInverse.clone().transpose().copyPosition(matrix).scale(group.current.scale);
            matrix.elements[3] = matrix.elements[7] = matrix.elements[11] = 0;
            matrix.elements[15] = 1;
          }
          el.style.width = size.width + "px";
          el.style.height = size.height + "px";
          el.style.perspective = isOrthographicCamera2 ? "" : `${fov}px`;
          if (transformOuterRef.current && transformInnerRef.current) {
            transformOuterRef.current.style.transform = `${cameraTransform}${cameraMatrix}translate(${widthHalf}px,${heightHalf}px)`;
            transformInnerRef.current.style.transform = getObjectCSSMatrix(matrix, 1 / ((distanceFactor || 10) / 400));
          }
        } else {
          const scale = distanceFactor === void 0 ? 1 : objectScale(group.current, camera) * distanceFactor;
          el.style.transform = `translate3d(${vec[0]}px,${vec[1]}px,0) scale(${scale})`;
        }
        oldPosition.current = vec;
        oldZoom.current = camera.zoom;
      }
    }
  });
  return /* @__PURE__ */ React2.createElement("group", _extends({}, props, {
    ref: group
  }));
});

// node_modules/@react-three/drei/core/shapes.js
var React3 = __toModule(require_react());
function create2(type) {
  const El = type + "BufferGeometry";
  return /* @__PURE__ */ React3.forwardRef((_a, ref) => {
    var _b = _a, {
      args,
      children
    } = _b, props = __objRest(_b, [
      "args",
      "children"
    ]);
    return /* @__PURE__ */ React3.createElement("mesh", _extends({
      ref
    }, props), /* @__PURE__ */ React3.createElement(El, {
      attach: "geometry",
      args
    }), children);
  });
}
var Box = create2("box");
var Circle = create2("circle");
var Cone = create2("cone");
var Cylinder = create2("cylinder");
var Sphere = create2("sphere");
var Plane = create2("plane");
var Tube = create2("tube");
var Torus = create2("torus");
var TorusKnot = create2("torusKnot");
var Tetrahedron = create2("tetrahedron");
var Ring = create2("ring");
var Polyhedron = create2("polyhedron");
var Icosahedron = create2("icosahedron");
var Octahedron = create2("octahedron");
var Dodecahedron = create2("dodecahedron");
var Extrude = create2("extrude");
var Lathe = create2("lathe");
var Parametric = create2("parametric");

// node_modules/three-stdlib/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// node_modules/three-stdlib/controls/TransformControls.js
var import_three2 = __toModule(require("three"));
var TransformControls = class extends import_three2.Object3D {
  constructor(camera, domElement) {
    super();
    _defineProperty(this, "isTransformControls", true);
    _defineProperty(this, "visible", false);
    _defineProperty(this, "domElement", void 0);
    _defineProperty(this, "raycaster", new import_three2.Raycaster());
    _defineProperty(this, "gizmo", void 0);
    _defineProperty(this, "plane", void 0);
    _defineProperty(this, "tempVector", new import_three2.Vector3());
    _defineProperty(this, "tempVector2", new import_three2.Vector3());
    _defineProperty(this, "tempQuaternion", new import_three2.Quaternion());
    _defineProperty(this, "unit", {
      X: new import_three2.Vector3(1, 0, 0),
      Y: new import_three2.Vector3(0, 1, 0),
      Z: new import_three2.Vector3(0, 0, 1)
    });
    _defineProperty(this, "pointStart", new import_three2.Vector3());
    _defineProperty(this, "pointEnd", new import_three2.Vector3());
    _defineProperty(this, "offset", new import_three2.Vector3());
    _defineProperty(this, "rotationAxis", new import_three2.Vector3());
    _defineProperty(this, "startNorm", new import_three2.Vector3());
    _defineProperty(this, "endNorm", new import_three2.Vector3());
    _defineProperty(this, "rotationAngle", 0);
    _defineProperty(this, "cameraPosition", new import_three2.Vector3());
    _defineProperty(this, "cameraQuaternion", new import_three2.Quaternion());
    _defineProperty(this, "cameraScale", new import_three2.Vector3());
    _defineProperty(this, "parentPosition", new import_three2.Vector3());
    _defineProperty(this, "parentQuaternion", new import_three2.Quaternion());
    _defineProperty(this, "parentQuaternionInv", new import_three2.Quaternion());
    _defineProperty(this, "parentScale", new import_three2.Vector3());
    _defineProperty(this, "worldPositionStart", new import_three2.Vector3());
    _defineProperty(this, "worldQuaternionStart", new import_three2.Quaternion());
    _defineProperty(this, "worldScaleStart", new import_three2.Vector3());
    _defineProperty(this, "worldPosition", new import_three2.Vector3());
    _defineProperty(this, "worldQuaternion", new import_three2.Quaternion());
    _defineProperty(this, "worldQuaternionInv", new import_three2.Quaternion());
    _defineProperty(this, "worldScale", new import_three2.Vector3());
    _defineProperty(this, "eye", new import_three2.Vector3());
    _defineProperty(this, "positionStart", new import_three2.Vector3());
    _defineProperty(this, "quaternionStart", new import_three2.Quaternion());
    _defineProperty(this, "scaleStart", new import_three2.Vector3());
    _defineProperty(this, "camera", void 0);
    _defineProperty(this, "object", void 0);
    _defineProperty(this, "enabled", true);
    _defineProperty(this, "axis", null);
    _defineProperty(this, "mode", "translate");
    _defineProperty(this, "translationSnap", null);
    _defineProperty(this, "rotationSnap", null);
    _defineProperty(this, "scaleSnap", null);
    _defineProperty(this, "space", "world");
    _defineProperty(this, "size", 1);
    _defineProperty(this, "dragging", false);
    _defineProperty(this, "showX", true);
    _defineProperty(this, "showY", true);
    _defineProperty(this, "showZ", true);
    _defineProperty(this, "changeEvent", {
      type: "change"
    });
    _defineProperty(this, "mouseDownEvent", {
      type: "mouseDown"
    });
    _defineProperty(this, "mouseUpEvent", {
      type: "mouseUp",
      mode: this.mode
    });
    _defineProperty(this, "objectChangeEvent", {
      type: "objectChange"
    });
    _defineProperty(this, "intersectObjectWithRay", (object, raycaster, includeInvisible) => {
      const allIntersections = raycaster.intersectObject(object, true);
      for (let i3 = 0; i3 < allIntersections.length; i3++) {
        if (allIntersections[i3].object.visible || includeInvisible) {
          return allIntersections[i3];
        }
      }
      return false;
    });
    _defineProperty(this, "attach", (object) => {
      this.object = object;
      this.visible = true;
      return this;
    });
    _defineProperty(this, "detach", () => {
      this.object = void 0;
      this.visible = false;
      this.axis = null;
      return this;
    });
    _defineProperty(this, "updateMatrixWorld", () => {
      if (this.object !== void 0) {
        this.object.updateMatrixWorld();
        if (this.object.parent === null) {
          console.error("TransformControls: The attached 3D object must be a part of the scene graph.");
        } else {
          this.object.parent.matrixWorld.decompose(this.parentPosition, this.parentQuaternion, this.parentScale);
        }
        this.object.matrixWorld.decompose(this.worldPosition, this.worldQuaternion, this.worldScale);
        this.parentQuaternionInv.copy(this.parentQuaternion).invert();
        this.worldQuaternionInv.copy(this.worldQuaternion).invert();
      }
      this.camera.updateMatrixWorld();
      this.camera.matrixWorld.decompose(this.cameraPosition, this.cameraQuaternion, this.cameraScale);
      this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize();
      super.updateMatrixWorld();
    });
    _defineProperty(this, "pointerHover", (pointer) => {
      if (this.object === void 0 || this.dragging === true)
        return;
      this.raycaster.setFromCamera(pointer, this.camera);
      const intersect = this.intersectObjectWithRay(this.gizmo.picker[this.mode], this.raycaster);
      if (intersect) {
        this.axis = intersect.object.name;
      } else {
        this.axis = null;
      }
    });
    _defineProperty(this, "pointerDown", (pointer) => {
      if (this.object === void 0 || this.dragging === true || pointer.button !== 0)
        return;
      if (this.axis !== null) {
        this.raycaster.setFromCamera(pointer, this.camera);
        const planeIntersect = this.intersectObjectWithRay(this.plane, this.raycaster, true);
        if (planeIntersect) {
          let space = this.space;
          if (this.mode === "scale") {
            space = "local";
          } else if (this.axis === "E" || this.axis === "XYZE" || this.axis === "XYZ") {
            space = "world";
          }
          if (space === "local" && this.mode === "rotate") {
            const snap = this.rotationSnap;
            if (this.axis === "X" && snap)
              this.object.rotation.x = Math.round(this.object.rotation.x / snap) * snap;
            if (this.axis === "Y" && snap)
              this.object.rotation.y = Math.round(this.object.rotation.y / snap) * snap;
            if (this.axis === "Z" && snap)
              this.object.rotation.z = Math.round(this.object.rotation.z / snap) * snap;
          }
          this.object.updateMatrixWorld();
          if (this.object.parent) {
            this.object.parent.updateMatrixWorld();
          }
          this.positionStart.copy(this.object.position);
          this.quaternionStart.copy(this.object.quaternion);
          this.scaleStart.copy(this.object.scale);
          this.object.matrixWorld.decompose(this.worldPositionStart, this.worldQuaternionStart, this.worldScaleStart);
          this.pointStart.copy(planeIntersect.point).sub(this.worldPositionStart);
        }
        this.dragging = true;
        this.mouseDownEvent.type = this.mode;
        this.dispatchEvent(this.mouseDownEvent);
      }
    });
    _defineProperty(this, "pointerMove", (pointer) => {
      const axis = this.axis;
      const mode = this.mode;
      const object = this.object;
      let space = this.space;
      if (mode === "scale") {
        space = "local";
      } else if (axis === "E" || axis === "XYZE" || axis === "XYZ") {
        space = "world";
      }
      if (object === void 0 || axis === null || this.dragging === false || pointer.button !== -1)
        return;
      this.raycaster.setFromCamera(pointer, this.camera);
      const planeIntersect = this.intersectObjectWithRay(this.plane, this.raycaster, true);
      if (!planeIntersect)
        return;
      this.pointEnd.copy(planeIntersect.point).sub(this.worldPositionStart);
      if (mode === "translate") {
        this.offset.copy(this.pointEnd).sub(this.pointStart);
        if (space === "local" && axis !== "XYZ") {
          this.offset.applyQuaternion(this.worldQuaternionInv);
        }
        if (axis.indexOf("X") === -1)
          this.offset.x = 0;
        if (axis.indexOf("Y") === -1)
          this.offset.y = 0;
        if (axis.indexOf("Z") === -1)
          this.offset.z = 0;
        if (space === "local" && axis !== "XYZ") {
          this.offset.applyQuaternion(this.quaternionStart).divide(this.parentScale);
        } else {
          this.offset.applyQuaternion(this.parentQuaternionInv).divide(this.parentScale);
        }
        object.position.copy(this.offset).add(this.positionStart);
        if (this.translationSnap) {
          if (space === "local") {
            object.position.applyQuaternion(this.tempQuaternion.copy(this.quaternionStart).invert());
            if (axis.search("X") !== -1) {
              object.position.x = Math.round(object.position.x / this.translationSnap) * this.translationSnap;
            }
            if (axis.search("Y") !== -1) {
              object.position.y = Math.round(object.position.y / this.translationSnap) * this.translationSnap;
            }
            if (axis.search("Z") !== -1) {
              object.position.z = Math.round(object.position.z / this.translationSnap) * this.translationSnap;
            }
            object.position.applyQuaternion(this.quaternionStart);
          }
          if (space === "world") {
            if (object.parent) {
              object.position.add(this.tempVector.setFromMatrixPosition(object.parent.matrixWorld));
            }
            if (axis.search("X") !== -1) {
              object.position.x = Math.round(object.position.x / this.translationSnap) * this.translationSnap;
            }
            if (axis.search("Y") !== -1) {
              object.position.y = Math.round(object.position.y / this.translationSnap) * this.translationSnap;
            }
            if (axis.search("Z") !== -1) {
              object.position.z = Math.round(object.position.z / this.translationSnap) * this.translationSnap;
            }
            if (object.parent) {
              object.position.sub(this.tempVector.setFromMatrixPosition(object.parent.matrixWorld));
            }
          }
        }
      } else if (mode === "scale") {
        if (axis.search("XYZ") !== -1) {
          let d2 = this.pointEnd.length() / this.pointStart.length();
          if (this.pointEnd.dot(this.pointStart) < 0)
            d2 *= -1;
          this.tempVector2.set(d2, d2, d2);
        } else {
          this.tempVector.copy(this.pointStart);
          this.tempVector2.copy(this.pointEnd);
          this.tempVector.applyQuaternion(this.worldQuaternionInv);
          this.tempVector2.applyQuaternion(this.worldQuaternionInv);
          this.tempVector2.divide(this.tempVector);
          if (axis.search("X") === -1) {
            this.tempVector2.x = 1;
          }
          if (axis.search("Y") === -1) {
            this.tempVector2.y = 1;
          }
          if (axis.search("Z") === -1) {
            this.tempVector2.z = 1;
          }
        }
        object.scale.copy(this.scaleStart).multiply(this.tempVector2);
        if (this.scaleSnap && this.object) {
          if (axis.search("X") !== -1) {
            this.object.scale.x = Math.round(object.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap;
          }
          if (axis.search("Y") !== -1) {
            object.scale.y = Math.round(object.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap;
          }
          if (axis.search("Z") !== -1) {
            object.scale.z = Math.round(object.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap;
          }
        }
      } else if (mode === "rotate") {
        this.offset.copy(this.pointEnd).sub(this.pointStart);
        const ROTATION_SPEED = 20 / this.worldPosition.distanceTo(this.tempVector.setFromMatrixPosition(this.camera.matrixWorld));
        if (axis === "E") {
          this.rotationAxis.copy(this.eye);
          this.rotationAngle = this.pointEnd.angleTo(this.pointStart);
          this.startNorm.copy(this.pointStart).normalize();
          this.endNorm.copy(this.pointEnd).normalize();
          this.rotationAngle *= this.endNorm.cross(this.startNorm).dot(this.eye) < 0 ? 1 : -1;
        } else if (axis === "XYZE") {
          this.rotationAxis.copy(this.offset).cross(this.eye).normalize();
          this.rotationAngle = this.offset.dot(this.tempVector.copy(this.rotationAxis).cross(this.eye)) * ROTATION_SPEED;
        } else if (axis === "X" || axis === "Y" || axis === "Z") {
          this.rotationAxis.copy(this.unit[axis]);
          this.tempVector.copy(this.unit[axis]);
          if (space === "local") {
            this.tempVector.applyQuaternion(this.worldQuaternion);
          }
          this.rotationAngle = this.offset.dot(this.tempVector.cross(this.eye).normalize()) * ROTATION_SPEED;
        }
        if (this.rotationSnap) {
          this.rotationAngle = Math.round(this.rotationAngle / this.rotationSnap) * this.rotationSnap;
        }
        if (space === "local" && axis !== "E" && axis !== "XYZE") {
          object.quaternion.copy(this.quaternionStart);
          object.quaternion.multiply(this.tempQuaternion.setFromAxisAngle(this.rotationAxis, this.rotationAngle)).normalize();
        } else {
          this.rotationAxis.applyQuaternion(this.parentQuaternionInv);
          object.quaternion.copy(this.tempQuaternion.setFromAxisAngle(this.rotationAxis, this.rotationAngle));
          object.quaternion.multiply(this.quaternionStart).normalize();
        }
      }
      this.dispatchEvent(this.changeEvent);
      this.dispatchEvent(this.objectChangeEvent);
    });
    _defineProperty(this, "pointerUp", (pointer) => {
      if (pointer.button !== 0)
        return;
      if (this.dragging && this.axis !== null) {
        this.mouseUpEvent.mode = this.mode;
        this.dispatchEvent(this.mouseUpEvent);
      }
      this.dragging = false;
      this.axis = null;
    });
    _defineProperty(this, "getPointer", (event) => {
      var _this$domElement$owne;
      if (this.domElement && (_this$domElement$owne = this.domElement.ownerDocument) !== null && _this$domElement$owne !== void 0 && _this$domElement$owne.pointerLockElement) {
        return {
          x: 0,
          y: 0,
          button: event.button
        };
      } else {
        var _this$domElement;
        const pointer = event.changedTouches ? event.changedTouches[0] : event;
        const rect = (_this$domElement = this.domElement) === null || _this$domElement === void 0 ? void 0 : _this$domElement.getBoundingClientRect();
        return {
          x: (pointer.clientX - rect.left) / rect.width * 2 - 1,
          y: -(pointer.clientY - rect.top) / rect.height * 2 + 1,
          button: event.button
        };
      }
    });
    _defineProperty(this, "onPointerHover", (event) => {
      if (!this.enabled)
        return;
      switch (event.pointerType) {
        case "mouse":
        case "pen":
          this.pointerHover(this.getPointer(event));
          break;
      }
    });
    _defineProperty(this, "onPointerDown", (event) => {
      var _this$domElement$owne2;
      if (!this.enabled)
        return;
      this.domElement.style.touchAction = "none";
      (_this$domElement$owne2 = this.domElement.ownerDocument) === null || _this$domElement$owne2 === void 0 ? void 0 : _this$domElement$owne2.addEventListener("pointermove", this.onPointerMove);
      this.pointerHover(this.getPointer(event));
      this.pointerDown(this.getPointer(event));
    });
    _defineProperty(this, "onPointerMove", (event) => {
      if (!this.enabled)
        return;
      this.pointerMove(this.getPointer(event));
    });
    _defineProperty(this, "onPointerUp", (event) => {
      var _this$domElement$owne3;
      if (!this.enabled)
        return;
      this.domElement.style.touchAction = "";
      (_this$domElement$owne3 = this.domElement.ownerDocument) === null || _this$domElement$owne3 === void 0 ? void 0 : _this$domElement$owne3.removeEventListener("pointermove", this.onPointerMove);
      this.pointerUp(this.getPointer(event));
    });
    _defineProperty(this, "getMode", () => this.mode);
    _defineProperty(this, "setMode", (mode) => {
      this.mode = mode;
    });
    _defineProperty(this, "setTranslationSnap", (translationSnap) => {
      this.translationSnap = translationSnap;
    });
    _defineProperty(this, "setRotationSnap", (rotationSnap) => {
      this.rotationSnap = rotationSnap;
    });
    _defineProperty(this, "setScaleSnap", (scaleSnap) => {
      this.scaleSnap = scaleSnap;
    });
    _defineProperty(this, "setSize", (size) => {
      this.size = size;
    });
    _defineProperty(this, "setSpace", (space) => {
      this.space = space;
    });
    _defineProperty(this, "update", () => {
      console.warn("THREE.TransformControls: update function has no more functionality and therefore has been deprecated.");
    });
    _defineProperty(this, "dispose", () => {
      var _this$domElement$owne4, _this$domElement$owne5;
      this.domElement.removeEventListener("pointerdown", this.onPointerDown);
      this.domElement.removeEventListener("pointermove", this.onPointerHover);
      (_this$domElement$owne4 = this.domElement.ownerDocument) === null || _this$domElement$owne4 === void 0 ? void 0 : _this$domElement$owne4.removeEventListener("pointermove", this.onPointerMove);
      (_this$domElement$owne5 = this.domElement.ownerDocument) === null || _this$domElement$owne5 === void 0 ? void 0 : _this$domElement$owne5.removeEventListener("pointerup", this.onPointerUp);
      this.traverse((child) => {
        const mesh = child;
        if (mesh.geometry) {
          mesh.geometry.dispose();
        }
        if (mesh.material) {
          mesh.material.dispose();
        }
      });
    });
    if (domElement === void 0) {
      console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.');
      this.domElement = document;
    }
    this.domElement = domElement;
    this.camera = camera;
    this.gizmo = new TransformControlsGizmo();
    this.add(this.gizmo);
    this.plane = new TransformControlsPlane();
    this.add(this.plane);
    const defineProperty = (propName, defaultValue) => {
      let propValue = defaultValue;
      Object.defineProperty(this, propName, {
        get: function() {
          return propValue !== void 0 ? propValue : defaultValue;
        },
        set: function(value) {
          if (propValue !== value) {
            propValue = value;
            this.plane[propName] = value;
            this.gizmo[propName] = value;
            this.dispatchEvent({
              type: propName + "-changed",
              value
            });
            this.dispatchEvent(this.changeEvent);
          }
        }
      });
      this[propName] = defaultValue;
      this.plane[propName] = defaultValue;
      this.gizmo[propName] = defaultValue;
    };
    defineProperty("camera", this.camera);
    defineProperty("object", this.object);
    defineProperty("enabled", this.enabled);
    defineProperty("axis", this.axis);
    defineProperty("mode", this.mode);
    defineProperty("translationSnap", this.translationSnap);
    defineProperty("rotationSnap", this.rotationSnap);
    defineProperty("scaleSnap", this.scaleSnap);
    defineProperty("space", this.space);
    defineProperty("size", this.size);
    defineProperty("dragging", this.dragging);
    defineProperty("showX", this.showX);
    defineProperty("showY", this.showY);
    defineProperty("showZ", this.showZ);
    defineProperty("worldPosition", this.worldPosition);
    defineProperty("worldPositionStart", this.worldPositionStart);
    defineProperty("worldQuaternion", this.worldQuaternion);
    defineProperty("worldQuaternionStart", this.worldQuaternionStart);
    defineProperty("cameraPosition", this.cameraPosition);
    defineProperty("cameraQuaternion", this.cameraQuaternion);
    defineProperty("pointStart", this.pointStart);
    defineProperty("pointEnd", this.pointEnd);
    defineProperty("rotationAxis", this.rotationAxis);
    defineProperty("rotationAngle", this.rotationAngle);
    defineProperty("eye", this.eye);
    {
      domElement.addEventListener("pointerdown", this.onPointerDown);
      domElement.addEventListener("pointermove", this.onPointerHover);
      this.domElement.ownerDocument.addEventListener("pointerup", this.onPointerUp);
    }
  }
};
var TransformControlsGizmo = class extends import_three2.Object3D {
  constructor() {
    super();
    _defineProperty(this, "isTransformControlsGizmo", true);
    _defineProperty(this, "type", "TransformControlsGizmo");
    _defineProperty(this, "tempVector", new import_three2.Vector3(0, 0, 0));
    _defineProperty(this, "tempEuler", new import_three2.Euler());
    _defineProperty(this, "alignVector", new import_three2.Vector3(0, 1, 0));
    _defineProperty(this, "zeroVector", new import_three2.Vector3(0, 0, 0));
    _defineProperty(this, "lookAtMatrix", new import_three2.Matrix4());
    _defineProperty(this, "tempQuaternion", new import_three2.Quaternion());
    _defineProperty(this, "tempQuaternion2", new import_three2.Quaternion());
    _defineProperty(this, "identityQuaternion", new import_three2.Quaternion());
    _defineProperty(this, "unitX", new import_three2.Vector3(1, 0, 0));
    _defineProperty(this, "unitY", new import_three2.Vector3(0, 1, 0));
    _defineProperty(this, "unitZ", new import_three2.Vector3(0, 0, 1));
    _defineProperty(this, "gizmo", void 0);
    _defineProperty(this, "picker", void 0);
    _defineProperty(this, "helper", void 0);
    _defineProperty(this, "rotationAxis", new import_three2.Vector3());
    _defineProperty(this, "cameraPosition", new import_three2.Vector3());
    _defineProperty(this, "worldPositionStart", new import_three2.Vector3());
    _defineProperty(this, "worldQuaternionStart", new import_three2.Quaternion());
    _defineProperty(this, "worldPosition", new import_three2.Vector3());
    _defineProperty(this, "worldQuaternion", new import_three2.Quaternion());
    _defineProperty(this, "eye", new import_three2.Vector3());
    _defineProperty(this, "camera", null);
    _defineProperty(this, "enabled", true);
    _defineProperty(this, "axis", null);
    _defineProperty(this, "mode", "translate");
    _defineProperty(this, "space", "world");
    _defineProperty(this, "size", 1);
    _defineProperty(this, "dragging", false);
    _defineProperty(this, "showX", true);
    _defineProperty(this, "showY", true);
    _defineProperty(this, "showZ", true);
    _defineProperty(this, "updateMatrixWorld", () => {
      let space = this.space;
      if (this.mode === "scale") {
        space = "local";
      }
      const quaternion = space === "local" ? this.worldQuaternion : this.identityQuaternion;
      this.gizmo["translate"].visible = this.mode === "translate";
      this.gizmo["rotate"].visible = this.mode === "rotate";
      this.gizmo["scale"].visible = this.mode === "scale";
      this.helper["translate"].visible = this.mode === "translate";
      this.helper["rotate"].visible = this.mode === "rotate";
      this.helper["scale"].visible = this.mode === "scale";
      let handles = [];
      handles = handles.concat(this.picker[this.mode].children);
      handles = handles.concat(this.gizmo[this.mode].children);
      handles = handles.concat(this.helper[this.mode].children);
      for (let i3 = 0; i3 < handles.length; i3++) {
        const handle = handles[i3];
        handle.visible = true;
        handle.rotation.set(0, 0, 0);
        handle.position.copy(this.worldPosition);
        let factor;
        if (this.camera.isOrthographicCamera) {
          factor = (this.camera.top - this.camera.bottom) / this.camera.zoom;
        } else {
          factor = this.worldPosition.distanceTo(this.cameraPosition) * Math.min(1.9 * Math.tan(Math.PI * this.camera.fov / 360) / this.camera.zoom, 7);
        }
        handle.scale.set(1, 1, 1).multiplyScalar(factor * this.size / 7);
        if (handle.tag === "helper") {
          handle.visible = false;
          if (handle.name === "AXIS") {
            handle.position.copy(this.worldPositionStart);
            handle.visible = !!this.axis;
            if (this.axis === "X") {
              this.tempQuaternion.setFromEuler(this.tempEuler.set(0, 0, 0));
              handle.quaternion.copy(quaternion).multiply(this.tempQuaternion);
              if (Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(quaternion).dot(this.eye)) > 0.9) {
                handle.visible = false;
              }
            }
            if (this.axis === "Y") {
              this.tempQuaternion.setFromEuler(this.tempEuler.set(0, 0, Math.PI / 2));
              handle.quaternion.copy(quaternion).multiply(this.tempQuaternion);
              if (Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(quaternion).dot(this.eye)) > 0.9) {
                handle.visible = false;
              }
            }
            if (this.axis === "Z") {
              this.tempQuaternion.setFromEuler(this.tempEuler.set(0, Math.PI / 2, 0));
              handle.quaternion.copy(quaternion).multiply(this.tempQuaternion);
              if (Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(quaternion).dot(this.eye)) > 0.9) {
                handle.visible = false;
              }
            }
            if (this.axis === "XYZE") {
              this.tempQuaternion.setFromEuler(this.tempEuler.set(0, Math.PI / 2, 0));
              this.alignVector.copy(this.rotationAxis);
              handle.quaternion.setFromRotationMatrix(this.lookAtMatrix.lookAt(this.zeroVector, this.alignVector, this.unitY));
              handle.quaternion.multiply(this.tempQuaternion);
              handle.visible = this.dragging;
            }
            if (this.axis === "E") {
              handle.visible = false;
            }
          } else if (handle.name === "START") {
            handle.position.copy(this.worldPositionStart);
            handle.visible = this.dragging;
          } else if (handle.name === "END") {
            handle.position.copy(this.worldPosition);
            handle.visible = this.dragging;
          } else if (handle.name === "DELTA") {
            handle.position.copy(this.worldPositionStart);
            handle.quaternion.copy(this.worldQuaternionStart);
            this.tempVector.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1);
            this.tempVector.applyQuaternion(this.worldQuaternionStart.clone().invert());
            handle.scale.copy(this.tempVector);
            handle.visible = this.dragging;
          } else {
            handle.quaternion.copy(quaternion);
            if (this.dragging) {
              handle.position.copy(this.worldPositionStart);
            } else {
              handle.position.copy(this.worldPosition);
            }
            if (this.axis) {
              handle.visible = this.axis.search(handle.name) !== -1;
            }
          }
          continue;
        }
        handle.quaternion.copy(quaternion);
        if (this.mode === "translate" || this.mode === "scale") {
          const AXIS_HIDE_TRESHOLD = 0.99;
          const PLANE_HIDE_TRESHOLD = 0.2;
          const AXIS_FLIP_TRESHOLD = 0;
          if (handle.name === "X" || handle.name === "XYZX") {
            if (Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(quaternion).dot(this.eye)) > AXIS_HIDE_TRESHOLD) {
              handle.scale.set(1e-10, 1e-10, 1e-10);
              handle.visible = false;
            }
          }
          if (handle.name === "Y" || handle.name === "XYZY") {
            if (Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(quaternion).dot(this.eye)) > AXIS_HIDE_TRESHOLD) {
              handle.scale.set(1e-10, 1e-10, 1e-10);
              handle.visible = false;
            }
          }
          if (handle.name === "Z" || handle.name === "XYZZ") {
            if (Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(quaternion).dot(this.eye)) > AXIS_HIDE_TRESHOLD) {
              handle.scale.set(1e-10, 1e-10, 1e-10);
              handle.visible = false;
            }
          }
          if (handle.name === "XY") {
            if (Math.abs(this.alignVector.copy(this.unitZ).applyQuaternion(quaternion).dot(this.eye)) < PLANE_HIDE_TRESHOLD) {
              handle.scale.set(1e-10, 1e-10, 1e-10);
              handle.visible = false;
            }
          }
          if (handle.name === "YZ") {
            if (Math.abs(this.alignVector.copy(this.unitX).applyQuaternion(quaternion).dot(this.eye)) < PLANE_HIDE_TRESHOLD) {
              handle.scale.set(1e-10, 1e-10, 1e-10);
              handle.visible = false;
            }
          }
          if (handle.name === "XZ") {
            if (Math.abs(this.alignVector.copy(this.unitY).applyQuaternion(quaternion).dot(this.eye)) < PLANE_HIDE_TRESHOLD) {
              handle.scale.set(1e-10, 1e-10, 1e-10);
              handle.visible = false;
            }
          }
          if (handle.name.search("X") !== -1) {
            if (this.alignVector.copy(this.unitX).applyQuaternion(quaternion).dot(this.eye) < AXIS_FLIP_TRESHOLD) {
              if (handle.tag === "fwd") {
                handle.visible = false;
              } else {
                handle.scale.x *= -1;
              }
            } else if (handle.tag === "bwd") {
              handle.visible = false;
            }
          }
          if (handle.name.search("Y") !== -1) {
            if (this.alignVector.copy(this.unitY).applyQuaternion(quaternion).dot(this.eye) < AXIS_FLIP_TRESHOLD) {
              if (handle.tag === "fwd") {
                handle.visible = false;
              } else {
                handle.scale.y *= -1;
              }
            } else if (handle.tag === "bwd") {
              handle.visible = false;
            }
          }
          if (handle.name.search("Z") !== -1) {
            if (this.alignVector.copy(this.unitZ).applyQuaternion(quaternion).dot(this.eye) < AXIS_FLIP_TRESHOLD) {
              if (handle.tag === "fwd") {
                handle.visible = false;
              } else {
                handle.scale.z *= -1;
              }
            } else if (handle.tag === "bwd") {
              handle.visible = false;
            }
          }
        } else if (this.mode === "rotate") {
          this.tempQuaternion2.copy(quaternion);
          this.alignVector.copy(this.eye).applyQuaternion(this.tempQuaternion.copy(quaternion).invert());
          if (handle.name.search("E") !== -1) {
            handle.quaternion.setFromRotationMatrix(this.lookAtMatrix.lookAt(this.eye, this.zeroVector, this.unitY));
          }
          if (handle.name === "X") {
            this.tempQuaternion.setFromAxisAngle(this.unitX, Math.atan2(-this.alignVector.y, this.alignVector.z));
            this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2, this.tempQuaternion);
            handle.quaternion.copy(this.tempQuaternion);
          }
          if (handle.name === "Y") {
            this.tempQuaternion.setFromAxisAngle(this.unitY, Math.atan2(this.alignVector.x, this.alignVector.z));
            this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2, this.tempQuaternion);
            handle.quaternion.copy(this.tempQuaternion);
          }
          if (handle.name === "Z") {
            this.tempQuaternion.setFromAxisAngle(this.unitZ, Math.atan2(this.alignVector.y, this.alignVector.x));
            this.tempQuaternion.multiplyQuaternions(this.tempQuaternion2, this.tempQuaternion);
            handle.quaternion.copy(this.tempQuaternion);
          }
        }
        handle.visible = handle.visible && (handle.name.indexOf("X") === -1 || this.showX);
        handle.visible = handle.visible && (handle.name.indexOf("Y") === -1 || this.showY);
        handle.visible = handle.visible && (handle.name.indexOf("Z") === -1 || this.showZ);
        handle.visible = handle.visible && (handle.name.indexOf("E") === -1 || this.showX && this.showY && this.showZ);
        handle.material.tempOpacity = handle.material.tempOpacity || handle.material.opacity;
        handle.material.tempColor = handle.material.tempColor || handle.material.color.clone();
        handle.material.color.copy(handle.material.tempColor);
        handle.material.opacity = handle.material.tempOpacity;
        if (!this.enabled) {
          handle.material.opacity *= 0.5;
          handle.material.color.lerp(new import_three2.Color(1, 1, 1), 0.5);
        } else if (this.axis) {
          if (handle.name === this.axis) {
            handle.material.opacity = 1;
            handle.material.color.lerp(new import_three2.Color(1, 1, 1), 0.5);
          } else if (this.axis.split("").some(function(a2) {
            return handle.name === a2;
          })) {
            handle.material.opacity = 1;
            handle.material.color.lerp(new import_three2.Color(1, 1, 1), 0.5);
          } else {
            handle.material.opacity *= 0.25;
            handle.material.color.lerp(new import_three2.Color(1, 1, 1), 0.5);
          }
        }
      }
      super.updateMatrixWorld();
    });
    const gizmoMaterial = new import_three2.MeshBasicMaterial({
      depthTest: false,
      depthWrite: false,
      transparent: true,
      side: import_three2.DoubleSide,
      fog: false,
      toneMapped: false
    });
    const gizmoLineMaterial = new import_three2.LineBasicMaterial({
      depthTest: false,
      depthWrite: false,
      transparent: true,
      linewidth: 1,
      fog: false,
      toneMapped: false
    });
    const matInvisible = gizmoMaterial.clone();
    matInvisible.opacity = 0.15;
    const matHelper = gizmoMaterial.clone();
    matHelper.opacity = 0.33;
    const matRed = gizmoMaterial.clone();
    matRed.color.set(16711680);
    const matGreen = gizmoMaterial.clone();
    matGreen.color.set(65280);
    const matBlue = gizmoMaterial.clone();
    matBlue.color.set(255);
    const matWhiteTransparent = gizmoMaterial.clone();
    matWhiteTransparent.opacity = 0.25;
    const matYellowTransparent = matWhiteTransparent.clone();
    matYellowTransparent.color.set(16776960);
    const matCyanTransparent = matWhiteTransparent.clone();
    matCyanTransparent.color.set(65535);
    const matMagentaTransparent = matWhiteTransparent.clone();
    matMagentaTransparent.color.set(16711935);
    const matYellow = gizmoMaterial.clone();
    matYellow.color.set(16776960);
    const matLineRed = gizmoLineMaterial.clone();
    matLineRed.color.set(16711680);
    const matLineGreen = gizmoLineMaterial.clone();
    matLineGreen.color.set(65280);
    const matLineBlue = gizmoLineMaterial.clone();
    matLineBlue.color.set(255);
    const matLineCyan = gizmoLineMaterial.clone();
    matLineCyan.color.set(65535);
    const matLineMagenta = gizmoLineMaterial.clone();
    matLineMagenta.color.set(16711935);
    const matLineYellow = gizmoLineMaterial.clone();
    matLineYellow.color.set(16776960);
    const matLineGray = gizmoLineMaterial.clone();
    matLineGray.color.set(7895160);
    const matLineYellowTransparent = matLineYellow.clone();
    matLineYellowTransparent.opacity = 0.25;
    const arrowGeometry = new import_three2.CylinderGeometry(0, 0.05, 0.2, 12, 1, false);
    const scaleHandleGeometry = new import_three2.BoxGeometry(0.125, 0.125, 0.125);
    const lineGeometry = new import_three2.BufferGeometry();
    lineGeometry.setAttribute("position", new import_three2.Float32BufferAttribute([0, 0, 0, 1, 0, 0], 3));
    const CircleGeometry = (radius, arc) => {
      const geometry = new import_three2.BufferGeometry();
      const vertices = [];
      for (let i3 = 0; i3 <= 64 * arc; ++i3) {
        vertices.push(0, Math.cos(i3 / 32 * Math.PI) * radius, Math.sin(i3 / 32 * Math.PI) * radius);
      }
      geometry.setAttribute("position", new import_three2.Float32BufferAttribute(vertices, 3));
      return geometry;
    };
    const TranslateHelperGeometry = () => {
      const geometry = new import_three2.BufferGeometry();
      geometry.setAttribute("position", new import_three2.Float32BufferAttribute([0, 0, 0, 1, 1, 1], 3));
      return geometry;
    };
    const gizmoTranslate = {
      X: [[new import_three2.Mesh(arrowGeometry, matRed), [1, 0, 0], [0, 0, -Math.PI / 2], null, "fwd"], [new import_three2.Mesh(arrowGeometry, matRed), [1, 0, 0], [0, 0, Math.PI / 2], null, "bwd"], [new import_three2.Line(lineGeometry, matLineRed)]],
      Y: [[new import_three2.Mesh(arrowGeometry, matGreen), [0, 1, 0], null, null, "fwd"], [new import_three2.Mesh(arrowGeometry, matGreen), [0, 1, 0], [Math.PI, 0, 0], null, "bwd"], [new import_three2.Line(lineGeometry, matLineGreen), null, [0, 0, Math.PI / 2]]],
      Z: [[new import_three2.Mesh(arrowGeometry, matBlue), [0, 0, 1], [Math.PI / 2, 0, 0], null, "fwd"], [new import_three2.Mesh(arrowGeometry, matBlue), [0, 0, 1], [-Math.PI / 2, 0, 0], null, "bwd"], [new import_three2.Line(lineGeometry, matLineBlue), null, [0, -Math.PI / 2, 0]]],
      XYZ: [[new import_three2.Mesh(new import_three2.OctahedronGeometry(0.1, 0), matWhiteTransparent.clone()), [0, 0, 0], [0, 0, 0]]],
      XY: [[new import_three2.Mesh(new import_three2.PlaneGeometry(0.295, 0.295), matYellowTransparent.clone()), [0.15, 0.15, 0]], [new import_three2.Line(lineGeometry, matLineYellow), [0.18, 0.3, 0], null, [0.125, 1, 1]], [new import_three2.Line(lineGeometry, matLineYellow), [0.3, 0.18, 0], [0, 0, Math.PI / 2], [0.125, 1, 1]]],
      YZ: [[new import_three2.Mesh(new import_three2.PlaneGeometry(0.295, 0.295), matCyanTransparent.clone()), [0, 0.15, 0.15], [0, Math.PI / 2, 0]], [new import_three2.Line(lineGeometry, matLineCyan), [0, 0.18, 0.3], [0, 0, Math.PI / 2], [0.125, 1, 1]], [new import_three2.Line(lineGeometry, matLineCyan), [0, 0.3, 0.18], [0, -Math.PI / 2, 0], [0.125, 1, 1]]],
      XZ: [[new import_three2.Mesh(new import_three2.PlaneGeometry(0.295, 0.295), matMagentaTransparent.clone()), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]], [new import_three2.Line(lineGeometry, matLineMagenta), [0.18, 0, 0.3], null, [0.125, 1, 1]], [new import_three2.Line(lineGeometry, matLineMagenta), [0.3, 0, 0.18], [0, -Math.PI / 2, 0], [0.125, 1, 1]]]
    };
    const pickerTranslate = {
      X: [[new import_three2.Mesh(new import_three2.CylinderGeometry(0.2, 0, 1, 4, 1, false), matInvisible), [0.6, 0, 0], [0, 0, -Math.PI / 2]]],
      Y: [[new import_three2.Mesh(new import_three2.CylinderGeometry(0.2, 0, 1, 4, 1, false), matInvisible), [0, 0.6, 0]]],
      Z: [[new import_three2.Mesh(new import_three2.CylinderGeometry(0.2, 0, 1, 4, 1, false), matInvisible), [0, 0, 0.6], [Math.PI / 2, 0, 0]]],
      XYZ: [[new import_three2.Mesh(new import_three2.OctahedronGeometry(0.2, 0), matInvisible)]],
      XY: [[new import_three2.Mesh(new import_three2.PlaneGeometry(0.4, 0.4), matInvisible), [0.2, 0.2, 0]]],
      YZ: [[new import_three2.Mesh(new import_three2.PlaneGeometry(0.4, 0.4), matInvisible), [0, 0.2, 0.2], [0, Math.PI / 2, 0]]],
      XZ: [[new import_three2.Mesh(new import_three2.PlaneGeometry(0.4, 0.4), matInvisible), [0.2, 0, 0.2], [-Math.PI / 2, 0, 0]]]
    };
    const helperTranslate = {
      START: [[new import_three2.Mesh(new import_three2.OctahedronGeometry(0.01, 2), matHelper), null, null, null, "helper"]],
      END: [[new import_three2.Mesh(new import_three2.OctahedronGeometry(0.01, 2), matHelper), null, null, null, "helper"]],
      DELTA: [[new import_three2.Line(TranslateHelperGeometry(), matHelper), null, null, null, "helper"]],
      X: [[new import_three2.Line(lineGeometry, matHelper.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]],
      Y: [[new import_three2.Line(lineGeometry, matHelper.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]],
      Z: [[new import_three2.Line(lineGeometry, matHelper.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]]
    };
    const gizmoRotate = {
      X: [[new import_three2.Line(CircleGeometry(1, 0.5), matLineRed)], [new import_three2.Mesh(new import_three2.OctahedronGeometry(0.04, 0), matRed), [0, 0, 0.99], null, [1, 3, 1]]],
      Y: [[new import_three2.Line(CircleGeometry(1, 0.5), matLineGreen), null, [0, 0, -Math.PI / 2]], [new import_three2.Mesh(new import_three2.OctahedronGeometry(0.04, 0), matGreen), [0, 0, 0.99], null, [3, 1, 1]]],
      Z: [[new import_three2.Line(CircleGeometry(1, 0.5), matLineBlue), null, [0, Math.PI / 2, 0]], [new import_three2.Mesh(new import_three2.OctahedronGeometry(0.04, 0), matBlue), [0.99, 0, 0], null, [1, 3, 1]]],
      E: [[new import_three2.Line(CircleGeometry(1.25, 1), matLineYellowTransparent), null, [0, Math.PI / 2, 0]], [new import_three2.Mesh(new import_three2.CylinderGeometry(0.03, 0, 0.15, 4, 1, false), matLineYellowTransparent), [1.17, 0, 0], [0, 0, -Math.PI / 2], [1, 1, 1e-3]], [new import_three2.Mesh(new import_three2.CylinderGeometry(0.03, 0, 0.15, 4, 1, false), matLineYellowTransparent), [-1.17, 0, 0], [0, 0, Math.PI / 2], [1, 1, 1e-3]], [new import_three2.Mesh(new import_three2.CylinderGeometry(0.03, 0, 0.15, 4, 1, false), matLineYellowTransparent), [0, -1.17, 0], [Math.PI, 0, 0], [1, 1, 1e-3]], [new import_three2.Mesh(new import_three2.CylinderGeometry(0.03, 0, 0.15, 4, 1, false), matLineYellowTransparent), [0, 1.17, 0], [0, 0, 0], [1, 1, 1e-3]]],
      XYZE: [[new import_three2.Line(CircleGeometry(1, 1), matLineGray), null, [0, Math.PI / 2, 0]]]
    };
    const helperRotate = {
      AXIS: [[new import_three2.Line(lineGeometry, matHelper.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]]
    };
    const pickerRotate = {
      X: [[new import_three2.Mesh(new import_three2.TorusGeometry(1, 0.1, 4, 24), matInvisible), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]],
      Y: [[new import_three2.Mesh(new import_three2.TorusGeometry(1, 0.1, 4, 24), matInvisible), [0, 0, 0], [Math.PI / 2, 0, 0]]],
      Z: [[new import_three2.Mesh(new import_three2.TorusGeometry(1, 0.1, 4, 24), matInvisible), [0, 0, 0], [0, 0, -Math.PI / 2]]],
      E: [[new import_three2.Mesh(new import_three2.TorusGeometry(1.25, 0.1, 2, 24), matInvisible)]],
      XYZE: [[new import_three2.Mesh(new import_three2.SphereGeometry(0.7, 10, 8), matInvisible)]]
    };
    const gizmoScale = {
      X: [[new import_three2.Mesh(scaleHandleGeometry, matRed), [0.8, 0, 0], [0, 0, -Math.PI / 2]], [new import_three2.Line(lineGeometry, matLineRed), null, null, [0.8, 1, 1]]],
      Y: [[new import_three2.Mesh(scaleHandleGeometry, matGreen), [0, 0.8, 0]], [new import_three2.Line(lineGeometry, matLineGreen), null, [0, 0, Math.PI / 2], [0.8, 1, 1]]],
      Z: [[new import_three2.Mesh(scaleHandleGeometry, matBlue), [0, 0, 0.8], [Math.PI / 2, 0, 0]], [new import_three2.Line(lineGeometry, matLineBlue), null, [0, -Math.PI / 2, 0], [0.8, 1, 1]]],
      XY: [[new import_three2.Mesh(scaleHandleGeometry, matYellowTransparent), [0.85, 0.85, 0], null, [2, 2, 0.2]], [new import_three2.Line(lineGeometry, matLineYellow), [0.855, 0.98, 0], null, [0.125, 1, 1]], [new import_three2.Line(lineGeometry, matLineYellow), [0.98, 0.855, 0], [0, 0, Math.PI / 2], [0.125, 1, 1]]],
      YZ: [[new import_three2.Mesh(scaleHandleGeometry, matCyanTransparent), [0, 0.85, 0.85], null, [0.2, 2, 2]], [new import_three2.Line(lineGeometry, matLineCyan), [0, 0.855, 0.98], [0, 0, Math.PI / 2], [0.125, 1, 1]], [new import_three2.Line(lineGeometry, matLineCyan), [0, 0.98, 0.855], [0, -Math.PI / 2, 0], [0.125, 1, 1]]],
      XZ: [[new import_three2.Mesh(scaleHandleGeometry, matMagentaTransparent), [0.85, 0, 0.85], null, [2, 0.2, 2]], [new import_three2.Line(lineGeometry, matLineMagenta), [0.855, 0, 0.98], null, [0.125, 1, 1]], [new import_three2.Line(lineGeometry, matLineMagenta), [0.98, 0, 0.855], [0, -Math.PI / 2, 0], [0.125, 1, 1]]],
      XYZX: [[new import_three2.Mesh(new import_three2.BoxGeometry(0.125, 0.125, 0.125), matWhiteTransparent.clone()), [1.1, 0, 0]]],
      XYZY: [[new import_three2.Mesh(new import_three2.BoxGeometry(0.125, 0.125, 0.125), matWhiteTransparent.clone()), [0, 1.1, 0]]],
      XYZZ: [[new import_three2.Mesh(new import_three2.BoxGeometry(0.125, 0.125, 0.125), matWhiteTransparent.clone()), [0, 0, 1.1]]]
    };
    const pickerScale = {
      X: [[new import_three2.Mesh(new import_three2.CylinderGeometry(0.2, 0, 0.8, 4, 1, false), matInvisible), [0.5, 0, 0], [0, 0, -Math.PI / 2]]],
      Y: [[new import_three2.Mesh(new import_three2.CylinderGeometry(0.2, 0, 0.8, 4, 1, false), matInvisible), [0, 0.5, 0]]],
      Z: [[new import_three2.Mesh(new import_three2.CylinderGeometry(0.2, 0, 0.8, 4, 1, false), matInvisible), [0, 0, 0.5], [Math.PI / 2, 0, 0]]],
      XY: [[new import_three2.Mesh(scaleHandleGeometry, matInvisible), [0.85, 0.85, 0], null, [3, 3, 0.2]]],
      YZ: [[new import_three2.Mesh(scaleHandleGeometry, matInvisible), [0, 0.85, 0.85], null, [0.2, 3, 3]]],
      XZ: [[new import_three2.Mesh(scaleHandleGeometry, matInvisible), [0.85, 0, 0.85], null, [3, 0.2, 3]]],
      XYZX: [[new import_three2.Mesh(new import_three2.BoxGeometry(0.2, 0.2, 0.2), matInvisible), [1.1, 0, 0]]],
      XYZY: [[new import_three2.Mesh(new import_three2.BoxGeometry(0.2, 0.2, 0.2), matInvisible), [0, 1.1, 0]]],
      XYZZ: [[new import_three2.Mesh(new import_three2.BoxGeometry(0.2, 0.2, 0.2), matInvisible), [0, 0, 1.1]]]
    };
    const helperScale = {
      X: [[new import_three2.Line(lineGeometry, matHelper.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]],
      Y: [[new import_three2.Line(lineGeometry, matHelper.clone()), [0, -1e3, 0], [0, 0, Math.PI / 2], [1e6, 1, 1], "helper"]],
      Z: [[new import_three2.Line(lineGeometry, matHelper.clone()), [0, 0, -1e3], [0, -Math.PI / 2, 0], [1e6, 1, 1], "helper"]]
    };
    const setupGizmo = (gizmoMap) => {
      const gizmo = new import_three2.Object3D();
      for (let name in gizmoMap) {
        for (let i3 = gizmoMap[name].length; i3--; ) {
          const object = gizmoMap[name][i3][0].clone();
          const position = gizmoMap[name][i3][1];
          const rotation = gizmoMap[name][i3][2];
          const scale = gizmoMap[name][i3][3];
          const tag = gizmoMap[name][i3][4];
          object.name = name;
          object.tag = tag;
          if (position) {
            object.position.set(position[0], position[1], position[2]);
          }
          if (rotation) {
            object.rotation.set(rotation[0], rotation[1], rotation[2]);
          }
          if (scale) {
            object.scale.set(scale[0], scale[1], scale[2]);
          }
          object.updateMatrix();
          const tempGeometry = object.geometry.clone();
          tempGeometry.applyMatrix4(object.matrix);
          object.geometry = tempGeometry;
          object.renderOrder = Infinity;
          object.position.set(0, 0, 0);
          object.rotation.set(0, 0, 0);
          object.scale.set(1, 1, 1);
          gizmo.add(object);
        }
      }
      return gizmo;
    };
    this.gizmo = {};
    this.picker = {};
    this.helper = {};
    this.add(this.gizmo["translate"] = setupGizmo(gizmoTranslate));
    this.add(this.gizmo["rotate"] = setupGizmo(gizmoRotate));
    this.add(this.gizmo["scale"] = setupGizmo(gizmoScale));
    this.add(this.picker["translate"] = setupGizmo(pickerTranslate));
    this.add(this.picker["rotate"] = setupGizmo(pickerRotate));
    this.add(this.picker["scale"] = setupGizmo(pickerScale));
    this.add(this.helper["translate"] = setupGizmo(helperTranslate));
    this.add(this.helper["rotate"] = setupGizmo(helperRotate));
    this.add(this.helper["scale"] = setupGizmo(helperScale));
    this.picker["translate"].visible = false;
    this.picker["rotate"].visible = false;
    this.picker["scale"].visible = false;
  }
};
var TransformControlsPlane = class extends import_three2.Mesh {
  constructor() {
    super(new import_three2.PlaneGeometry(1e5, 1e5, 2, 2), new import_three2.MeshBasicMaterial({
      visible: false,
      wireframe: true,
      side: import_three2.DoubleSide,
      transparent: true,
      opacity: 0.1,
      toneMapped: false
    }));
    _defineProperty(this, "isTransformControlsPlane", true);
    _defineProperty(this, "type", "TransformControlsPlane");
    _defineProperty(this, "unitX", new import_three2.Vector3(1, 0, 0));
    _defineProperty(this, "unitY", new import_three2.Vector3(0, 1, 0));
    _defineProperty(this, "unitZ", new import_three2.Vector3(0, 0, 1));
    _defineProperty(this, "tempVector", new import_three2.Vector3());
    _defineProperty(this, "dirVector", new import_three2.Vector3());
    _defineProperty(this, "alignVector", new import_three2.Vector3());
    _defineProperty(this, "tempMatrix", new import_three2.Matrix4());
    _defineProperty(this, "identityQuaternion", new import_three2.Quaternion());
    _defineProperty(this, "cameraQuaternion", new import_three2.Quaternion());
    _defineProperty(this, "worldPosition", new import_three2.Vector3());
    _defineProperty(this, "worldQuaternion", new import_three2.Quaternion());
    _defineProperty(this, "eye", new import_three2.Vector3());
    _defineProperty(this, "axis", null);
    _defineProperty(this, "mode", "translate");
    _defineProperty(this, "space", "world");
    _defineProperty(this, "updateMatrixWorld", () => {
      let space = this.space;
      this.position.copy(this.worldPosition);
      if (this.mode === "scale")
        space = "local";
      this.unitX.set(1, 0, 0).applyQuaternion(space === "local" ? this.worldQuaternion : this.identityQuaternion);
      this.unitY.set(0, 1, 0).applyQuaternion(space === "local" ? this.worldQuaternion : this.identityQuaternion);
      this.unitZ.set(0, 0, 1).applyQuaternion(space === "local" ? this.worldQuaternion : this.identityQuaternion);
      this.alignVector.copy(this.unitY);
      switch (this.mode) {
        case "translate":
        case "scale":
          switch (this.axis) {
            case "X":
              this.alignVector.copy(this.eye).cross(this.unitX);
              this.dirVector.copy(this.unitX).cross(this.alignVector);
              break;
            case "Y":
              this.alignVector.copy(this.eye).cross(this.unitY);
              this.dirVector.copy(this.unitY).cross(this.alignVector);
              break;
            case "Z":
              this.alignVector.copy(this.eye).cross(this.unitZ);
              this.dirVector.copy(this.unitZ).cross(this.alignVector);
              break;
            case "XY":
              this.dirVector.copy(this.unitZ);
              break;
            case "YZ":
              this.dirVector.copy(this.unitX);
              break;
            case "XZ":
              this.alignVector.copy(this.unitZ);
              this.dirVector.copy(this.unitY);
              break;
            case "XYZ":
            case "E":
              this.dirVector.set(0, 0, 0);
              break;
          }
          break;
        case "rotate":
        default:
          this.dirVector.set(0, 0, 0);
      }
      if (this.dirVector.length() === 0) {
        this.quaternion.copy(this.cameraQuaternion);
      } else {
        this.tempMatrix.lookAt(this.tempVector.set(0, 0, 0), this.dirVector, this.alignVector);
        this.quaternion.setFromRotationMatrix(this.tempMatrix);
      }
      super.updateMatrixWorld();
    });
  }
};

// node_modules/@react-three/drei/core/PerspectiveCamera.js
var React4 = __toModule(require_react());
var PerspectiveCamera2 = /* @__PURE__ */ React4.forwardRef((_a, ref) => {
  var _b = _a, {
    makeDefault,
    manual
  } = _b, props = __objRest(_b, [
    "makeDefault",
    "manual"
  ]);
  const set = useThree(({
    set: set2
  }) => set2);
  const camera = useThree(({
    camera: camera2
  }) => camera2);
  const size = useThree(({
    size: size2
  }) => size2);
  const cameraRef = React4.useRef();
  React4.useLayoutEffect(() => {
    const {
      current: cam
    } = cameraRef;
    if (cam && !manual) {
      cam.aspect = size.width / size.height;
      cam.updateProjectionMatrix();
    }
  }, [size, props]);
  React4.useLayoutEffect(() => {
    if (makeDefault && cameraRef.current) {
      const oldCam = camera;
      set(() => ({
        camera: cameraRef.current
      }));
      return () => set(() => ({
        camera: oldCam
      }));
    }
  }, [camera, cameraRef, makeDefault, set]);
  return /* @__PURE__ */ React4.createElement("perspectiveCamera", _extends({
    ref: react_merge_refs_esm_default([cameraRef, ref])
  }, props));
});

// src/extension/components/EditableProxy.tsx
var import_shallow2 = __toModule(require_shallow());
var import_studio3 = __toModule(require("@theatre/studio"));

// src/extension/components/useSelected.tsx
var import_react3 = __toModule(require_react());
var import_r3f = __toModule(require("@theatre/r3f"));
var import_studio = __toModule(require("@theatre/studio"));
function useSelected() {
  const [state, set] = (0, import_react3.useState)(void 0);
  const stateRef = (0, import_react3.useRef)(state);
  stateRef.current = state;
  (0, import_react3.useLayoutEffect)(() => {
    const setFromStudio = (selection) => {
      const item = selection.find((s2) => s2.type === "Theatre_SheetObject_PublicAPI" && import_r3f.__private_allRegisteredObjects.has(s2));
      if (!item) {
        set(void 0);
      } else {
        set((0, import_r3f.__private_makeStoreKey)(item.address));
      }
    };
    setFromStudio(import_studio.default.selection);
    return import_studio.default.onSelectionChange(setFromStudio);
  }, []);
  return state;
}

// ../react/src/index.ts
var import_dataverse = __toModule(require("@theatre/dataverse"));
var import_dataverse2 = __toModule(require("@theatre/dataverse"));

// ../../node_modules/lodash-es/_freeGlobal.js
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// ../../node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// ../../node_modules/lodash-es/_Symbol.js
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;

// ../../node_modules/lodash-es/_getRawTag.js
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

// ../../node_modules/lodash-es/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// ../../node_modules/lodash-es/_baseGetTag.js
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

// ../../node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// ../../node_modules/lodash-es/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
var isSymbol_default = isSymbol;

// ../../node_modules/lodash-es/_arrayMap.js
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var arrayMap_default = arrayMap;

// ../../node_modules/lodash-es/isArray.js
var isArray = Array.isArray;
var isArray_default = isArray;

// ../../node_modules/lodash-es/_baseToString.js
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

// ../../node_modules/lodash-es/_trimmedEndIndex.js
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var trimmedEndIndex_default = trimmedEndIndex;

// ../../node_modules/lodash-es/_baseTrim.js
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex_default(string) + 1).replace(reTrimStart, "") : string;
}
var baseTrim_default = baseTrim;

// ../../node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

// ../../node_modules/lodash-es/toNumber.js
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

// ../../node_modules/lodash-es/toFinite.js
var INFINITY2 = 1 / 0;
var MAX_INTEGER = 17976931348623157e292;
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_default(value);
  if (value === INFINITY2 || value === -INFINITY2) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
var toFinite_default = toFinite;

// ../../node_modules/lodash-es/toInteger.js
function toInteger(value) {
  var result = toFinite_default(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
var toInteger_default = toInteger;

// ../../node_modules/lodash-es/identity.js
function identity(value) {
  return value;
}
var identity_default = identity;

// ../../node_modules/lodash-es/isFunction.js
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

// ../../node_modules/lodash-es/_coreJsData.js
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;

// ../../node_modules/lodash-es/_isMasked.js
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;

// ../../node_modules/lodash-es/_toSource.js
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

// ../../node_modules/lodash-es/_baseIsNative.js
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

// ../../node_modules/lodash-es/_getValue.js
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default = getValue;

// ../../node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;

// ../../node_modules/lodash-es/_WeakMap.js
var WeakMap2 = getNative_default(root_default, "WeakMap");
var WeakMap_default = WeakMap2;

// ../../node_modules/lodash-es/_baseFindIndex.js
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
var baseFindIndex_default = baseFindIndex;

// ../../node_modules/lodash-es/_isIndex.js
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var isIndex_default = isIndex;

// ../../node_modules/lodash-es/eq.js
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default = eq;

// ../../node_modules/lodash-es/isLength.js
var MAX_SAFE_INTEGER2 = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
}
var isLength_default = isLength;

// ../../node_modules/lodash-es/isArrayLike.js
function isArrayLike(value) {
  return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default = isArrayLike;

// ../../node_modules/lodash-es/_isPrototype.js
var objectProto4 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto4;
  return value === proto;
}
var isPrototype_default = isPrototype;

// ../../node_modules/lodash-es/_baseTimes.js
function baseTimes(n2, iteratee) {
  var index = -1, result = Array(n2);
  while (++index < n2) {
    result[index] = iteratee(index);
  }
  return result;
}
var baseTimes_default = baseTimes;

// ../../node_modules/lodash-es/_baseIsArguments.js
var argsTag = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
}
var baseIsArguments_default = baseIsArguments;

// ../../node_modules/lodash-es/isArguments.js
var objectProto5 = Object.prototype;
var hasOwnProperty3 = objectProto5.hasOwnProperty;
var propertyIsEnumerable = objectProto5.propertyIsEnumerable;
var isArguments = baseIsArguments_default(function() {
  return arguments;
}()) ? baseIsArguments_default : function(value) {
  return isObjectLike_default(value) && hasOwnProperty3.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_default = isArguments;

// ../../node_modules/lodash-es/stubFalse.js
function stubFalse() {
  return false;
}
var stubFalse_default = stubFalse;

// ../../node_modules/lodash-es/isBuffer.js
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer2 = moduleExports ? root_default.Buffer : void 0;
var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse_default;
var isBuffer_default = isBuffer;

// ../../node_modules/lodash-es/_baseIsTypedArray.js
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

// ../../node_modules/lodash-es/_baseUnary.js
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var baseUnary_default = baseUnary;

// ../../node_modules/lodash-es/_nodeUtil.js
var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
var freeProcess = moduleExports2 && freeGlobal_default.process;
var nodeUtil = function() {
  try {
    var types3 = freeModule2 && freeModule2.require && freeModule2.require("util").types;
    if (types3) {
      return types3;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e2) {
  }
}();
var nodeUtil_default = nodeUtil;

// ../../node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
var isTypedArray_default = isTypedArray;

// ../../node_modules/lodash-es/_arrayLikeKeys.js
var objectProto6 = Object.prototype;
var hasOwnProperty4 = objectProto6.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty4.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex_default(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var arrayLikeKeys_default = arrayLikeKeys;

// ../../node_modules/lodash-es/_overArg.js
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var overArg_default = overArg;

// ../../node_modules/lodash-es/_nativeKeys.js
var nativeKeys = overArg_default(Object.keys, Object);
var nativeKeys_default = nativeKeys;

// ../../node_modules/lodash-es/_baseKeys.js
var objectProto7 = Object.prototype;
var hasOwnProperty5 = objectProto7.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype_default(object)) {
    return nativeKeys_default(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty5.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var baseKeys_default = baseKeys;

// ../../node_modules/lodash-es/keys.js
function keys2(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
}
var keys_default = keys2;

// ../../node_modules/lodash-es/_isKey.js
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

// ../../node_modules/lodash-es/_nativeCreate.js
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;

// ../../node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;

// ../../node_modules/lodash-es/_hashDelete.js
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var hashDelete_default = hashDelete;

// ../../node_modules/lodash-es/_hashGet.js
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto8 = Object.prototype;
var hasOwnProperty6 = objectProto8.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty6.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;

// ../../node_modules/lodash-es/_hashHas.js
var objectProto9 = Object.prototype;
var hasOwnProperty7 = objectProto9.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty7.call(data, key);
}
var hashHas_default = hashHas;

// ../../node_modules/lodash-es/_hashSet.js
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var hashSet_default = hashSet;

// ../../node_modules/lodash-es/_Hash.js
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

// ../../node_modules/lodash-es/_listCacheClear.js
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;

// ../../node_modules/lodash-es/_assocIndexOf.js
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

// ../../node_modules/lodash-es/_listCacheDelete.js
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

// ../../node_modules/lodash-es/_listCacheGet.js
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;

// ../../node_modules/lodash-es/_listCacheHas.js
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;

// ../../node_modules/lodash-es/_listCacheSet.js
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

// ../../node_modules/lodash-es/_ListCache.js
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

// ../../node_modules/lodash-es/_Map.js
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;

// ../../node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;

// ../../node_modules/lodash-es/_isKeyable.js
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default = isKeyable;

// ../../node_modules/lodash-es/_getMapData.js
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;

// ../../node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var mapCacheDelete_default = mapCacheDelete;

// ../../node_modules/lodash-es/_mapCacheGet.js
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;

// ../../node_modules/lodash-es/_mapCacheHas.js
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;

// ../../node_modules/lodash-es/_mapCacheSet.js
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;

// ../../node_modules/lodash-es/_MapCache.js
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

// ../../node_modules/lodash-es/memoize.js
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache_default)();
  return memoized;
}
memoize.Cache = MapCache_default;
var memoize_default = memoize;

// ../../node_modules/lodash-es/_memoizeCapped.js
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize_default(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var memoizeCapped_default = memoizeCapped;

// ../../node_modules/lodash-es/_stringToPath.js
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped_default(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var stringToPath_default = stringToPath;

// ../../node_modules/lodash-es/toString.js
function toString(value) {
  return value == null ? "" : baseToString_default(value);
}
var toString_default = toString;

// ../../node_modules/lodash-es/_castPath.js
function castPath(value, object) {
  if (isArray_default(value)) {
    return value;
  }
  return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
}
var castPath_default = castPath;

// ../../node_modules/lodash-es/_toKey.js
var INFINITY3 = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol_default(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY3 ? "-0" : result;
}
var toKey_default = toKey;

// ../../node_modules/lodash-es/_baseGet.js
function baseGet(object, path) {
  path = castPath_default(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey_default(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var baseGet_default = baseGet;

// ../../node_modules/lodash-es/get.js
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet_default(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_default = get;

// ../../node_modules/lodash-es/_arrayPush.js
function arrayPush(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var arrayPush_default = arrayPush;

// ../../node_modules/lodash-es/_stackClear.js
function stackClear() {
  this.__data__ = new ListCache_default();
  this.size = 0;
}
var stackClear_default = stackClear;

// ../../node_modules/lodash-es/_stackDelete.js
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var stackDelete_default = stackDelete;

// ../../node_modules/lodash-es/_stackGet.js
function stackGet(key) {
  return this.__data__.get(key);
}
var stackGet_default = stackGet;

// ../../node_modules/lodash-es/_stackHas.js
function stackHas(key) {
  return this.__data__.has(key);
}
var stackHas_default = stackHas;

// ../../node_modules/lodash-es/_stackSet.js
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

// ../../node_modules/lodash-es/_Stack.js
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

// ../../node_modules/lodash-es/_arrayFilter.js
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

// ../../node_modules/lodash-es/stubArray.js
function stubArray() {
  return [];
}
var stubArray_default = stubArray;

// ../../node_modules/lodash-es/_getSymbols.js
var objectProto10 = Object.prototype;
var propertyIsEnumerable2 = objectProto10.propertyIsEnumerable;
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

// ../../node_modules/lodash-es/_baseGetAllKeys.js
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_default(object) ? result : arrayPush_default(result, symbolsFunc(object));
}
var baseGetAllKeys_default = baseGetAllKeys;

// ../../node_modules/lodash-es/_getAllKeys.js
function getAllKeys(object) {
  return baseGetAllKeys_default(object, keys_default, getSymbols_default);
}
var getAllKeys_default = getAllKeys;

// ../../node_modules/lodash-es/_DataView.js
var DataView = getNative_default(root_default, "DataView");
var DataView_default = DataView;

// ../../node_modules/lodash-es/_Promise.js
var Promise2 = getNative_default(root_default, "Promise");
var Promise_default = Promise2;

// ../../node_modules/lodash-es/_Set.js
var Set2 = getNative_default(root_default, "Set");
var Set_default = Set2;

// ../../node_modules/lodash-es/_getTag.js
var mapTag2 = "[object Map]";
var objectTag2 = "[object Object]";
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
    var result = baseGetTag_default(value), Ctor = result == objectTag2 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
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

// ../../node_modules/lodash-es/_Uint8Array.js
var Uint8Array2 = root_default.Uint8Array;
var Uint8Array_default = Uint8Array2;

// ../../node_modules/lodash-es/_setCacheAdd.js
var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED3);
  return this;
}
var setCacheAdd_default = setCacheAdd;

// ../../node_modules/lodash-es/_setCacheHas.js
function setCacheHas(value) {
  return this.__data__.has(value);
}
var setCacheHas_default = setCacheHas;

// ../../node_modules/lodash-es/_SetCache.js
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

// ../../node_modules/lodash-es/_arraySome.js
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

// ../../node_modules/lodash-es/_cacheHas.js
function cacheHas(cache, key) {
  return cache.has(key);
}
var cacheHas_default = cacheHas;

// ../../node_modules/lodash-es/_equalArrays.js
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

// ../../node_modules/lodash-es/_mapToArray.js
function mapToArray(map) {
  var index = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
var mapToArray_default = mapToArray;

// ../../node_modules/lodash-es/_setToArray.js
function setToArray(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var setToArray_default = setToArray;

// ../../node_modules/lodash-es/_equalByTag.js
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

// ../../node_modules/lodash-es/_equalObjects.js
var COMPARE_PARTIAL_FLAG3 = 1;
var objectProto11 = Object.prototype;
var hasOwnProperty8 = objectProto11.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG3, objProps = getAllKeys_default(object), objLength = objProps.length, othProps = getAllKeys_default(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty8.call(other, key))) {
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

// ../../node_modules/lodash-es/_baseIsEqualDeep.js
var COMPARE_PARTIAL_FLAG4 = 1;
var argsTag3 = "[object Arguments]";
var arrayTag2 = "[object Array]";
var objectTag3 = "[object Object]";
var objectProto12 = Object.prototype;
var hasOwnProperty9 = objectProto12.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_default(object), othIsArr = isArray_default(other), objTag = objIsArr ? arrayTag2 : getTag_default(object), othTag = othIsArr ? arrayTag2 : getTag_default(other);
  objTag = objTag == argsTag3 ? objectTag3 : objTag;
  othTag = othTag == argsTag3 ? objectTag3 : othTag;
  var objIsObj = objTag == objectTag3, othIsObj = othTag == objectTag3, isSameTag = objTag == othTag;
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
    var objIsWrapped = objIsObj && hasOwnProperty9.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty9.call(other, "__wrapped__");
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

// ../../node_modules/lodash-es/_baseIsEqual.js
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

// ../../node_modules/lodash-es/_baseIsMatch.js
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

// ../../node_modules/lodash-es/_isStrictComparable.js
function isStrictComparable(value) {
  return value === value && !isObject_default(value);
}
var isStrictComparable_default = isStrictComparable;

// ../../node_modules/lodash-es/_getMatchData.js
function getMatchData(object) {
  var result = keys_default(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable_default(value)];
  }
  return result;
}
var getMatchData_default = getMatchData;

// ../../node_modules/lodash-es/_matchesStrictComparable.js
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var matchesStrictComparable_default = matchesStrictComparable;

// ../../node_modules/lodash-es/_baseMatches.js
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

// ../../node_modules/lodash-es/_baseHasIn.js
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
var baseHasIn_default = baseHasIn;

// ../../node_modules/lodash-es/_hasPath.js
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

// ../../node_modules/lodash-es/hasIn.js
function hasIn(object, path) {
  return object != null && hasPath_default(object, path, baseHasIn_default);
}
var hasIn_default = hasIn;

// ../../node_modules/lodash-es/_baseMatchesProperty.js
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

// ../../node_modules/lodash-es/_baseProperty.js
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var baseProperty_default = baseProperty;

// ../../node_modules/lodash-es/_basePropertyDeep.js
function basePropertyDeep(path) {
  return function(object) {
    return baseGet_default(object, path);
  };
}
var basePropertyDeep_default = basePropertyDeep;

// ../../node_modules/lodash-es/property.js
function property(path) {
  return isKey_default(path) ? baseProperty_default(toKey_default(path)) : basePropertyDeep_default(path);
}
var property_default = property;

// ../../node_modules/lodash-es/_baseIteratee.js
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

// ../../node_modules/lodash-es/findIndex.js
var nativeMax = Math.max;
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger_default(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex_default(array, baseIteratee_default(predicate, 3), index);
}
var findIndex_default = findIndex;

// ../react/src/index.ts
var import_queue_microtask = __toModule(require_queue_microtask());
var import_react4 = __toModule(require_react());
var import_react_dom = __toModule(require_react_dom());
var TRACE = false;
function useForceUpdate(debugLabel) {
  const [, setTick] = (0, import_react4.useState)(0);
  const update = (0, import_react4.useCallback)(() => {
    setTick((tick) => tick + 1);
  }, []);
  return update;
}
function usePrism(fn, deps, debugLabel) {
  const fnAsCallback = (0, import_react4.useCallback)(fn, deps);
  const boxRef = (0, import_react4.useRef)(null);
  if (!boxRef.current) {
    boxRef.current = new import_dataverse.Box(fnAsCallback);
  } else {
    boxRef.current.set(fnAsCallback);
  }
  const derivation = (0, import_react4.useMemo)(() => (0, import_dataverse2.prism)(() => {
    const fn2 = boxRef.current.derivation.getValue();
    return fn2();
  }), []);
  return useDerivation(derivation, debugLabel);
}
var useVal = (p, debugLabel) => {
  return usePrism(() => (0, import_dataverse2.val)(p), [p], debugLabel);
};
var lastOrder = 0;
var queue = [];
var setOfQueuedItems = new Set();
var microtaskIsQueued = false;
var pushToQueue = (item) => {
  _pushToQueue(item);
  queueIfNeeded();
};
var _pushToQueue = (item) => {
  if (setOfQueuedItems.has(item))
    return;
  setOfQueuedItems.add(item);
  if (queue.length === 0) {
    queue.push(item);
  } else {
    const index = findIndex_default(queue, (existingItem) => existingItem.order >= item.order);
    if (index === -1) {
      queue.push(item);
    } else {
      const right = queue[index];
      if (right.order > item.order) {
        queue.splice(index, 0, item);
      }
    }
  }
};
var removeFromQueue = (item) => {
  if (!setOfQueuedItems.has(item))
    return;
  setOfQueuedItems.delete(item);
  const index = findIndex_default(queue, (o2) => o2 === item);
  queue.splice(index, 1);
};
function queueIfNeeded() {
  if (microtaskIsQueued)
    return;
  microtaskIsQueued = true;
  (0, import_queue_microtask.default)(() => {
    (0, import_react_dom.unstable_batchedUpdates)(function runQueue() {
      var _a, _b;
      while (queue.length > 0) {
        const item = queue.shift();
        setOfQueuedItems.delete(item);
        let newValue;
        if (TRACE) {
          (_a = item.debug) == null ? void 0 : _a.history.push(`queue reached`);
        }
        try {
          newValue = item.der.getValue();
        } catch (error) {
          if (TRACE) {
            (_b = item.debug) == null ? void 0 : _b.history.push(`queue: der.getValue() errored`);
          }
          console.error("A `der.getValue()` in `useDerivation(der)` threw an error. This may be a zombie child issue, so we're gonna try to get its value again in a normal react render phase.If you see the same error again, then you either have an error in your prism code, or the deps array in `usePrism(fn, deps)` is missing a dependency and causing the prism to read stale values.");
          console.error(error);
          item.runUpdate();
          continue;
        }
        if (newValue !== item.lastValue) {
          item.lastValue = newValue;
          item.runUpdate();
        }
      }
    }, 1);
    microtaskIsQueued = false;
  });
}
function useDerivation(der, debugLabel) {
  var _a;
  const _forceUpdate = useForceUpdate(debugLabel);
  const ref = (0, import_react4.useRef)(void 0);
  if (!ref.current) {
    lastOrder++;
    ref.current = {
      order: lastOrder,
      runUpdate: () => {
        if (!ref.current.unmounted) {
          _forceUpdate();
        }
      },
      der,
      lastValue: void 0,
      unmounted: false,
      queueUpdate: () => {
        var _a2;
        if (TRACE) {
          (_a2 = ref.current.debug) == null ? void 0 : _a2.history.push(`queueUpdate()`);
        }
        pushToQueue(ref.current);
      },
      untap: der.changesWithoutValues().tap(() => {
        if (TRACE) {
          ref.current.debug.history.push(`changesWithoutValues(cb)`);
        }
        ref.current.queueUpdate();
      })
    };
    if (TRACE) {
      ref.current.debug = {
        label: debugLabel,
        traceOfFirstTimeRender: new Error(),
        history: []
      };
    }
  }
  if (false) {
    if (der !== ref.current.der) {
      console.error("Argument `der` in `useDerivation(der)` should not change between renders.");
    }
  }
  (0, import_react4.useLayoutEffect)(() => {
    return function onUnmount() {
      ref.current.unmounted = true;
      ref.current.untap();
      removeFromQueue(ref.current);
    };
  }, []);
  removeFromQueue(ref.current);
  const newValue = ref.current.der.getValue();
  ref.current.lastValue = newValue;
  if (TRACE) {
    (_a = ref.current.debug) == null ? void 0 : _a.history.push(`rendered`);
  }
  return newValue;
}

// src/extension/editorStuff.ts
var import_core = __toModule(require("@theatre/core"));
var import_studio2 = __toModule(require("@theatre/studio"));
var sheet = void 0;
var sheetObject = void 0;
var editorSheetObjectConfig = {
  viewport: import_core.types.compound({
    showAxes: import_core.types.boolean(true, { label: "Axes" }),
    showGrid: import_core.types.boolean(true, { label: "Grid" }),
    showOverlayIcons: import_core.types.boolean(false, { label: "Overlay Icons" }),
    shading: import_core.types.stringLiteral("rendered", {
      flat: "Flat",
      rendered: "Rendered",
      solid: "Solid",
      wireframe: "Wireframe"
    }, { as: "menu", label: "Shading" }),
    referenceWindow: import_core.types.stringLiteral("minimized", {
      maximized: "Maximized",
      minimized: "Minimized",
      hidden: "Hidden"
    }, { as: "menu", label: "Reference Window" }),
    lighting: import_core.types.stringLiteral("physical", {
      physical: "Physical",
      legacy: "Legacy"
    }, { as: "menu", label: "Lighting" })
  }, { label: "Viewport Config" }),
  transformControls: import_core.types.compound({
    mode: import_core.types.stringLiteral("translate", {
      translate: "Translate",
      rotate: "Rotate",
      scale: "Scale"
    }, { as: "switch", label: "Mode" }),
    space: import_core.types.stringLiteral("world", {
      local: "Local",
      world: "World"
    }, { as: "switch", label: "Space" })
  }, { label: "Transform Controls" })
};
function getEditorSheet() {
  if (!sheet) {
    sheet = import_studio2.default.getStudioProject().sheet("R3F UI");
  }
  return sheet;
}
function getEditorSheetObject() {
  if (!sheetObject) {
    sheetObject = getEditorSheet().object("Editor", editorSheetObjectConfig) || null;
  }
  return sheetObject;
}

// ../../node_modules/react-icons/lib/esm/iconBase.js
var import_react6 = __toModule(require_react());

// ../../node_modules/react-icons/lib/esm/iconContext.js
var import_react5 = __toModule(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react5.default.createContext && import_react5.default.createContext(DefaultContext);

// ../../node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t2) {
    for (var s2, i3 = 1, n2 = arguments.length; i3 < n2; i3++) {
      s2 = arguments[i3];
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s2, e2) {
  var t2 = {};
  for (var p in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i3 = 0, p = Object.getOwnPropertySymbols(s2); i3 < p.length; i3++) {
      if (e2.indexOf(p[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i3]))
        t2[p[i3]] = s2[p[i3]];
    }
  return t2;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i3) {
    return import_react6.default.createElement(node.tag, __assign({
      key: i3
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react6.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react6.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react6.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react6.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// ../../node_modules/react-icons/bs/index.esm.js
function BsFillCollectionFill(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 16 16", "fill": "currentColor" }, "child": [{ "tag": "rect", "attr": { "width": "16", "height": "10", "rx": "1.5", "transform": "matrix(1 0 0 -1 0 14.5)" } }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 3a.5.5 0 00.5.5h11a.5.5 0 000-1h-11A.5.5 0 002 3zm2-2a.5.5 0 00.5.5h7a.5.5 0 000-1h-7A.5.5 0 004 1z", "clipRule": "evenodd" } }] })(props);
}
function BsCameraVideoFill(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 16 16", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "d": "M2.667 3h6.666C10.253 3 11 3.746 11 4.667v6.666c0 .92-.746 1.667-1.667 1.667H2.667C1.747 13 1 12.254 1 11.333V4.667C1 3.747 1.746 3 2.667 3z" } }, { "tag": "path", "attr": { "d": "M7.404 8.697l6.363 3.692c.54.313 1.233-.066 1.233-.697V4.308c0-.63-.693-1.01-1.233-.696L7.404 7.304a.802.802 0 000 1.393z" } }] })(props);
}
function BsCloudFill(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 16 16", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3.5 13a3.5 3.5 0 11.59-6.95 5.002 5.002 0 119.804 1.98A2.5 2.5 0 0113.5 13h-10z", "clipRule": "evenodd" } }] })(props);
}

// ../../node_modules/react-icons/gi/index.esm.js
function GiCube(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 24.585L51.47 118.989 256 213.394l204.53-94.405zM38.998 133.054v258.353L247 487.415V229.063zm434.004 0L265 229.062v258.353l208.002-96.008z" } }] })(props);
}
function GiLightBulb(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M247 18.656c-80.965 0-146.875 65.02-146.875 145.625 0 45.63 15.758 67 33.313 94.845 11.706 18.57 23.767 39.91 30.53 70.563h165.095c6.728-31.387 18.91-53.12 30.718-71.875 17.58-27.92 33.314-48.912 33.314-93.532 0-80.66-65.127-145.624-146.094-145.624zm-99.78 127.906L170.437 167 210 201.813l31.188-34.125 6.78-7.438 6.907 7.344 30.75 32.72 39.97-33.47 22.686-19-7.655 28.594L304.75 310.28l-18.063-4.842 28.22-105.25-24.032 20.125-6.78 5.656-6.033-6.44-29.906-31.78-30.562 33.438-6.188 6.78-6.875-6.062-23.25-20.437 27.94 104.218-18.064 4.812-35.937-134.063-8-29.875zm22.593 201.813V389.5L315 348.375H169.812zm153.593 17.063l-153.594 43.53v29.438l153.594-43.5v-29.47zm0 48.875L203.97 448.156h119.436v-33.844zm-132.562 52.53v20.533h113.282v-20.53h-113.28z" } }] })(props);
}
function GiLightProjector(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M18 17v18h38v78.3c-.75.7-1.47 1.5-2.16 2.3-6.52 7.5-9.72 14.5-10.08 19.8l47.46 84.5c1.03-1.9 2.15-3.9 3.39-5.6 8.29-12.2 21.49-23.8 37.89-33.2 16.5-9.1 33.3-14.3 48-15.1 2.2-.1 4.4-.1 6.6 0l-47.4-84.47c-3-1.54-7.1-2.5-12.3-2.53h-2.3c-2.3.11-4.9.4-7.5.88-10.7 1.91-23.15 6.66-34.61 13.1-3.08 1.73-6.09 3.59-8.99 5.53V35h45v26.5c1.8-.22 3.5-.39 5.3-.49 4.4-.25 8.6-.07 12.7.67V35h55V17H18zm165.4 166.9c-.6.1-1.3.1-2 .1-11.1.6-25.7 4.8-40.1 12.9-14.3 8.1-25.5 18.4-31.8 27.5-6.2 9.2-6.8 16-4.8 19.5 1.9 3.5 8 6.5 19.1 6 11.1-.5 25.7-4.8 40.1-12.9 14.3-8.1 25.6-18.3 31.8-27.5 6.2-9.2 6.8-16 4.9-19.5-1.9-3.3-7.4-6.1-17.2-6.1zm36.2 12.2c-.5 7.9-4 16.1-9 23.5-8.3 12.2-21.4 23.8-37.9 33.1s-33.3 14.4-48 15.2c-10.3.5-20.2-1.2-27.61-6.3L49.48 491.4H492.8V353.8L219.6 196.1z" } }] })(props);
}

// ../../node_modules/react-icons/bi/index.esm.js
function BiSun(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19H12.998V22H10.998zM10.998 2H12.998V5H10.998zM1.998 11H4.998V13H1.998zM18.998 11H21.998V13H18.998z" } }, { "tag": "path", "attr": { "transform": "rotate(-45.017 5.986 18.01)", "d": "M4.487 17.01H7.487V19.01H4.487z" } }, { "tag": "path", "attr": { "transform": "rotate(-45.001 18.008 5.99)", "d": "M16.508 4.99H19.509V6.99H16.508z" } }, { "tag": "path", "attr": { "transform": "rotate(-134.983 5.988 5.99)", "d": "M4.487 4.99H7.487V6.99H4.487z" } }, { "tag": "path", "attr": { "transform": "rotate(134.999 18.008 18.01)", "d": "M17.008 16.51H19.008V19.511000000000003H17.008z" } }] })(props);
}

// src/extension/icons.tsx
var import_react7 = __toModule(require_react());
var icons = {
  collection: /* @__PURE__ */ import_react7.default.createElement(BsFillCollectionFill, null),
  cube: /* @__PURE__ */ import_react7.default.createElement(GiCube, null),
  lightBulb: /* @__PURE__ */ import_react7.default.createElement(GiLightBulb, null),
  spotLight: /* @__PURE__ */ import_react7.default.createElement(GiLightProjector, null),
  sun: /* @__PURE__ */ import_react7.default.createElement(BiSun, null),
  camera: /* @__PURE__ */ import_react7.default.createElement(BsCameraVideoFill, null),
  cloud: /* @__PURE__ */ import_react7.default.createElement(BsCloudFill, null)
};
var icons_default = icons;

// src/extension/components/DragDetector.tsx
var import_react8 = __toModule(require_react());
var dragDetectorContext = (0, import_react8.createContext)(false);
var DragDetectorProvider = ({
  children
}) => {
  const mouseDownRef = (0, import_react8.useRef)(false);
  const [dragging, setDragging] = (0, import_react8.useState)(false);
  (0, import_react8.useEffect)(() => {
    document.addEventListener("mousedown", () => mouseDownRef.current = true);
    document.addEventListener("mousemove", () => {
      if (mouseDownRef.current) {
        setDragging(true);
      }
    });
    document.addEventListener("mouseup", () => {
      mouseDownRef.current = false;
      setDragging(false);
    });
  }, []);
  return /* @__PURE__ */ import_react8.default.createElement(dragDetectorContext.Provider, {
    value: dragging
  }, children);
};
var useDragDetector = () => (0, import_react8.useContext)(dragDetectorContext);

// src/extension/useExtensionStore.ts
var import_r3f2 = __toModule(require("@theatre/r3f"));
var import_zustand2 = __toModule(require_zustand());
var useExtensionStore = (0, import_zustand2.default)(import_r3f2.____private_editorStore);
var useExtensionStore_default = useExtensionStore;

// src/extension/components/EditableProxy.tsx
var EditableProxy = ({ storeKey, object }) => {
  var _a;
  const editorObject = getEditorSheetObject();
  const [setSnapshotProxyObject, editables] = useExtensionStore_default((state) => [state.setSnapshotProxyObject, state.editables], import_shallow2.default);
  const dragging = useDragDetector();
  const editable = editables[storeKey];
  const selected = useSelected();
  const showOverlayIcons = (_a = useVal(editorObject == null ? void 0 : editorObject.props.viewport.showOverlayIcons)) != null ? _a : false;
  (0, import_react9.useEffect)(() => {
    setSnapshotProxyObject(object, storeKey);
    return () => setSnapshotProxyObject(null, storeKey);
  }, [storeKey, object, setSnapshotProxyObject]);
  (0, import_react9.useLayoutEffect)(() => {
    const originalVisibility = object.visible;
    if (editable == null ? void 0 : editable.visibleOnlyInEditor) {
      object.visible = true;
    }
    return () => {
      object.visible = originalVisibility;
    };
  }, [editable == null ? void 0 : editable.visibleOnlyInEditor, object.visible]);
  const [hovered, setHovered] = (0, import_react9.useState)(false);
  const scene = useThree((state) => state.scene);
  const helper = (0, import_react9.useMemo)(() => {
    var _a2, _b;
    return (_b = editable == null ? void 0 : (_a2 = editable.objectConfig).createHelper) == null ? void 0 : _b.call(_a2, object);
  }, [object]);
  (0, import_react9.useEffect)(() => {
    if (helper == void 0) {
      return;
    }
    if (selected === storeKey || hovered) {
      scene.add(helper);
      invalidate();
    }
    return () => {
      scene.remove(helper);
      invalidate();
    };
  }, [selected, hovered, helper, scene]);
  useFrame(() => {
    if (helper == void 0) {
      return;
    }
    if (helper.update) {
      helper.update();
    }
  });
  (0, import_react9.useEffect)(() => {
    if (dragging) {
      setHovered(false);
    }
  }, [dragging]);
  (0, import_react9.useEffect)(() => {
    if (!editable)
      return;
    const sheetObject2 = editable.sheetObject;
    const objectConfig = editable.objectConfig;
    const setFromTheatre = (newValues) => {
      var _a2;
      Object.entries(objectConfig.props).forEach(([key, value]) => {
        return value.apply(newValues[key], object);
      });
      (_a2 = objectConfig.updateObject) == null ? void 0 : _a2.call(objectConfig, object);
      invalidate();
    };
    setFromTheatre(sheetObject2.value);
    const untap = sheetObject2.onValuesChange(setFromTheatre);
    return () => {
      untap();
    };
  }, [editable]);
  if (!editable)
    return null;
  return /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement("group", {
    onClick: (e2) => {
      if (e2.delta < 2) {
        e2.stopPropagation();
        const theatreObject = useExtensionStore_default.getState().editables[storeKey].sheetObject;
        if (!theatreObject) {
          console.log("no Theatre.js object for", storeKey);
        } else {
          import_studio3.default.setSelection([theatreObject]);
        }
      }
    },
    onPointerOver: !dragging ? (e2) => {
      e2.stopPropagation();
      setHovered(true);
    } : void 0,
    onPointerOut: !dragging ? (e2) => {
      e2.stopPropagation();
      setHovered(false);
    } : void 0
  }, /* @__PURE__ */ import_react9.default.createElement("primitive", {
    object
  }, (showOverlayIcons || editable.objectConfig.dimensionless && selected !== storeKey) && /* @__PURE__ */ import_react9.default.createElement(Html, {
    center: true,
    style: {
      pointerEvents: "none",
      transform: "scale(2)",
      opacity: hovered ? 0.3 : 1
    }
  }, /* @__PURE__ */ import_react9.default.createElement("div", null, icons_default[editable.objectConfig.icon])), editable.objectConfig.dimensionless && /* @__PURE__ */ import_react9.default.createElement(Sphere, {
    args: [2, 4, 2],
    onClick: (e2) => {
      if (e2.delta < 2) {
        e2.stopPropagation();
        const theatreObject = useExtensionStore_default.getState().editables[storeKey].sheetObject;
        if (!theatreObject) {
          console.log("no Theatre.js object for", storeKey);
        } else {
          import_studio3.default.setSelection([theatreObject]);
        }
      }
    },
    userData: { helper: true }
  }, /* @__PURE__ */ import_react9.default.createElement("meshBasicMaterial", {
    visible: false
  })))));
};
var EditableProxy_default = EditableProxy;

// src/extension/components/TransformControls.tsx
var import_react11 = __toModule(require_react());
var TransformControls2 = (0, import_react11.forwardRef)((_a, ref) => {
  var _b = _a, {
    children,
    object,
    orbitControlsRef,
    onObjectChange,
    onDraggingChange
  } = _b, props = __objRest(_b, [
    "children",
    "object",
    "orbitControlsRef",
    "onObjectChange",
    "onDraggingChange"
  ]);
  const { camera, gl, invalidate: invalidate2 } = useThree();
  const controls = (0, import_react11.useMemo)(() => new TransformControls(camera, gl.domElement), [camera, gl.domElement]);
  (0, import_react11.useLayoutEffect)(() => {
    controls.attach(object);
    return () => void controls.detach();
  }, [object, controls]);
  (0, import_react11.useEffect)(() => {
    var _a2;
    (_a2 = controls == null ? void 0 : controls.addEventListener) == null ? void 0 : _a2.call(controls, "change", invalidate2);
    return () => {
      var _a3;
      return (_a3 = controls == null ? void 0 : controls.removeEventListener) == null ? void 0 : _a3.call(controls, "change", invalidate2);
    };
  }, [controls, invalidate2]);
  (0, import_react11.useEffect)(() => {
    const callback = (event) => {
      if (orbitControlsRef && orbitControlsRef.current) {
        orbitControlsRef.current.enabled = !event.value;
      }
    };
    if (controls) {
      controls.addEventListener("dragging-changed", callback);
    }
    return () => {
      controls.removeEventListener("dragging-changed", callback);
    };
  }, [controls, orbitControlsRef]);
  (0, import_react11.useEffect)(() => {
    if (onObjectChange) {
      controls.addEventListener("objectChange", onObjectChange);
    }
    return () => {
      if (onObjectChange) {
        controls.removeEventListener("objectChange", onObjectChange);
      }
    };
  }, [onObjectChange, controls]);
  (0, import_react11.useEffect)(() => {
    if (onDraggingChange) {
      controls.addEventListener("dragging-changed", onDraggingChange);
    }
    return () => {
      if (onDraggingChange) {
        controls.removeEventListener("dragging-changed", onDraggingChange);
      }
    };
  }, [controls, onDraggingChange]);
  return /* @__PURE__ */ import_react11.default.createElement("primitive", __spreadValues({
    dispose: null,
    object: controls,
    ref
  }, props));
});
var TransformControls_default = TransformControls2;

// src/extension/components/ProxyManager.tsx
var import_shallow3 = __toModule(require_shallow());
var import_three3 = __toModule(require("three"));
var import_studio4 = __toModule(require("@theatre/studio"));
var ProxyManager = ({ orbitControlsRef }) => {
  var _a, _b, _c;
  const isBeingEdited = (0, import_react12.useRef)(false);
  const editorObject = getEditorSheetObject();
  const [sceneSnapshot, editables] = useExtensionStore_default((state) => [state.sceneSnapshot, state.editables], import_shallow3.default);
  const transformControlsMode = (_a = useVal(editorObject == null ? void 0 : editorObject.props.transformControls.mode)) != null ? _a : "translate";
  const transformControlsSpace = (_b = useVal(editorObject == null ? void 0 : editorObject.props.transformControls.space)) != null ? _b : "world";
  const viewportShading = (_c = useVal(editorObject == null ? void 0 : editorObject.props.viewport.shading)) != null ? _c : "rendered";
  const sceneProxy = (0, import_react12.useMemo)(() => sceneSnapshot == null ? void 0 : sceneSnapshot.clone(), [sceneSnapshot]);
  const [editableProxies, setEditableProxies] = (0, import_react12.useState)({});
  (0, import_react12.useLayoutEffect)(() => {
    if (!sceneProxy) {
      return;
    }
    const editableProxies2 = {};
    sceneProxy.traverse((object) => {
      if (object.userData.__editable) {
        const theatreKey = object.userData.__storeKey;
        if (editableProxies2[theatreKey] || !editables[theatreKey]) {
          object.parent.remove(object);
        } else {
          editableProxies2[theatreKey] = {
            portal: createPortal(/* @__PURE__ */ import_react12.default.createElement(EditableProxy_default, {
              storeKey: theatreKey,
              object
            }), object.parent),
            object,
            editable: editables[theatreKey]
          };
        }
      }
    });
    setEditableProxies(editableProxies2);
  }, [orbitControlsRef, sceneProxy]);
  const selected = useSelected();
  const editableProxyOfSelected = selected && editableProxies[selected];
  const editable = selected ? editables[selected] : void 0;
  const [renderMaterials, setRenderMaterials] = (0, import_react12.useState)({});
  (0, import_react12.useLayoutEffect)(() => {
    if (!sceneProxy) {
      return;
    }
    const renderMaterials2 = {};
    sceneProxy.traverse((object) => {
      const mesh = object;
      if (mesh.isMesh && !mesh.userData.helper) {
        renderMaterials2[mesh.id] = mesh.material;
      }
    });
    setRenderMaterials(renderMaterials2);
    return () => {
    };
  }, [sceneProxy]);
  (0, import_react12.useLayoutEffect)(() => {
    if (!sceneProxy) {
      return;
    }
    sceneProxy.traverse((object) => {
      const mesh = object;
      if (mesh.isMesh && !mesh.userData.helper) {
        let material;
        switch (viewportShading) {
          case "wireframe":
            mesh.material = new import_three3.MeshBasicMaterial({
              wireframe: true,
              color: "black"
            });
            break;
          case "flat":
            if (!renderMaterials[mesh.id]) {
              return;
            }
            material = new import_three3.MeshBasicMaterial();
            if (renderMaterials[mesh.id].hasOwnProperty("color")) {
              material.color = renderMaterials[mesh.id].color;
            }
            if (renderMaterials[mesh.id].hasOwnProperty("map")) {
              material.map = renderMaterials[mesh.id].map;
            }
            if (renderMaterials[mesh.id].hasOwnProperty("vertexColors")) {
              material.vertexColors = renderMaterials[mesh.id].vertexColors;
            }
            mesh.material = material;
            break;
          case "solid":
            if (!renderMaterials[mesh.id]) {
              return;
            }
            material = new import_three3.MeshPhongMaterial();
            if (renderMaterials[mesh.id].hasOwnProperty("color")) {
              material.color = renderMaterials[mesh.id].color;
            }
            if (renderMaterials[mesh.id].hasOwnProperty("map")) {
              material.map = renderMaterials[mesh.id].map;
            }
            if (renderMaterials[mesh.id].hasOwnProperty("vertexColors")) {
              material.vertexColors = renderMaterials[mesh.id].vertexColors;
            }
            mesh.material = material;
            break;
          case "rendered":
            mesh.material = renderMaterials[mesh.id];
        }
      }
    });
  }, [viewportShading, renderMaterials, sceneProxy]);
  const scrub = (0, import_react12.useRef)(void 0);
  if (!sceneProxy) {
    return null;
  }
  return /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, /* @__PURE__ */ import_react12.default.createElement("primitive", {
    object: sceneProxy
  }), selected && editableProxyOfSelected && editable && editable.objectConfig.useTransformControls && /* @__PURE__ */ import_react12.default.createElement(TransformControls_default, {
    mode: transformControlsMode,
    space: transformControlsSpace,
    orbitControlsRef,
    object: editableProxyOfSelected.object,
    onObjectChange: () => {
      const sheetObject2 = editableProxyOfSelected.editable.sheetObject;
      const obj = editableProxyOfSelected.object;
      scrub.current.capture(({ set }) => {
        if (transformControlsMode === "translate") {
          set(sheetObject2.props.position, __spreadProps(__spreadValues({}, sheetObject2.value.position), {
            x: obj.position.x,
            y: obj.position.y,
            z: obj.position.z
          }));
        }
        if (transformControlsMode === "rotate") {
          set(sheetObject2.props.rotation, __spreadProps(__spreadValues({}, sheetObject2.value.rotation), {
            x: obj.rotation.x,
            y: obj.rotation.y,
            z: obj.rotation.z
          }));
        }
        if (transformControlsMode === "scale") {
          set(sheetObject2.props.scale, {
            x: obj.scale.x,
            y: obj.scale.y,
            z: obj.scale.z
          });
        }
      });
    },
    onDraggingChange: (event) => {
      if (event.value) {
        scrub.current = import_studio4.default.scrub();
      } else {
        scrub.current.commit();
      }
      return isBeingEdited.current = event.value;
    }
  }), Object.values(editableProxies).map((editableProxy) => editableProxy.portal));
};
var ProxyManager_default = ProxyManager;

// src/extension/components/SnapshotEditor.tsx
var import_studio6 = __toModule(require("@theatre/studio"));
init_styled_components_browser_esm();

// src/extension/components/OrbitControls/index.tsx
var React12 = __toModule(require_react());
var import_react14 = __toModule(require_react());

// src/extension/components/OrbitControls/OrbitControlsImpl.ts
var import_three4 = __toModule(require("three"));
var moduloWrapAround = (offset, capacity) => (offset % capacity + capacity) % capacity;
var OrbitControlsImpl = class extends import_three4.EventDispatcher {
  constructor(object, domElement) {
    super();
    __publicField(this, "object");
    __publicField(this, "domElement");
    __publicField(this, "enabled", true);
    __publicField(this, "target", new import_three4.Vector3());
    __publicField(this, "minDistance", 0);
    __publicField(this, "maxDistance", Infinity);
    __publicField(this, "minZoom", 0);
    __publicField(this, "maxZoom", Infinity);
    __publicField(this, "minPolarAngle", 0);
    __publicField(this, "maxPolarAngle", Math.PI);
    __publicField(this, "minAzimuthAngle", -Infinity);
    __publicField(this, "maxAzimuthAngle", Infinity);
    __publicField(this, "enableDamping", false);
    __publicField(this, "dampingFactor", 0.05);
    __publicField(this, "enableZoom", true);
    __publicField(this, "zoomSpeed", 1);
    __publicField(this, "enableRotate", true);
    __publicField(this, "rotateSpeed", 1);
    __publicField(this, "enablePan", true);
    __publicField(this, "panSpeed", 1);
    __publicField(this, "screenSpacePanning", true);
    __publicField(this, "keyPanSpeed", 7);
    __publicField(this, "autoRotate", false);
    __publicField(this, "autoRotateSpeed", 2);
    __publicField(this, "reverseOrbit", false);
    __publicField(this, "keys", {
      LEFT: "ArrowLeft",
      UP: "ArrowUp",
      RIGHT: "ArrowRight",
      BOTTOM: "ArrowDown"
    });
    __publicField(this, "mouseButtons", {
      LEFT: import_three4.MOUSE.ROTATE,
      MIDDLE: import_three4.MOUSE.DOLLY,
      RIGHT: import_three4.MOUSE.PAN
    });
    __publicField(this, "touches", { ONE: import_three4.TOUCH.ROTATE, TWO: import_three4.TOUCH.DOLLY_PAN });
    __publicField(this, "target0");
    __publicField(this, "position0");
    __publicField(this, "zoom0");
    __publicField(this, "_domElementKeyEvents", null);
    __publicField(this, "getPolarAngle");
    __publicField(this, "getAzimuthalAngle");
    __publicField(this, "setPolarAngle");
    __publicField(this, "setAzimuthalAngle");
    __publicField(this, "getDistance");
    __publicField(this, "listenToKeyEvents");
    __publicField(this, "saveState");
    __publicField(this, "reset");
    __publicField(this, "update");
    __publicField(this, "connect");
    __publicField(this, "dispose");
    this.object = object;
    this.domElement = domElement;
    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.zoom0 = this.object instanceof import_three4.PerspectiveCamera ? this.object.zoom : 1;
    this.getPolarAngle = () => spherical.phi;
    this.getAzimuthalAngle = () => spherical.theta;
    this.setPolarAngle = (value) => {
      let phi = moduloWrapAround(value, 2 * Math.PI);
      let currentPhi = spherical.phi;
      if (currentPhi < 0)
        currentPhi += 2 * Math.PI;
      if (phi < 0)
        phi += 2 * Math.PI;
      let phiDist = Math.abs(phi - currentPhi);
      if (2 * Math.PI - phiDist < phiDist) {
        if (phi < currentPhi) {
          phi += 2 * Math.PI;
        } else {
          currentPhi += 2 * Math.PI;
        }
      }
      sphericalDelta.phi = phi - currentPhi;
      scope.update();
    };
    this.setAzimuthalAngle = (value) => {
      let theta = moduloWrapAround(value, 2 * Math.PI);
      let currentTheta = spherical.theta;
      if (currentTheta < 0)
        currentTheta += 2 * Math.PI;
      if (theta < 0)
        theta += 2 * Math.PI;
      let thetaDist = Math.abs(theta - currentTheta);
      if (2 * Math.PI - thetaDist < thetaDist) {
        if (theta < currentTheta) {
          theta += 2 * Math.PI;
        } else {
          currentTheta += 2 * Math.PI;
        }
      }
      sphericalDelta.theta = theta - currentTheta;
      scope.update();
    };
    this.getDistance = () => scope.object.position.distanceTo(scope.target);
    this.listenToKeyEvents = (domElement2) => {
      domElement2.addEventListener("keydown", onKeyDown);
      this._domElementKeyEvents = domElement2;
    };
    this.saveState = () => {
      scope.target0.copy(scope.target);
      scope.position0.copy(scope.object.position);
      scope.zoom0 = scope.object instanceof import_three4.PerspectiveCamera ? scope.object.zoom : 1;
    };
    this.reset = () => {
      scope.target.copy(scope.target0);
      scope.object.position.copy(scope.position0);
      if (scope.object instanceof import_three4.PerspectiveCamera) {
        scope.object.zoom = scope.zoom0;
        scope.object.updateProjectionMatrix();
      }
      scope.dispatchEvent(changeEvent);
      scope.update();
      state = STATE.NONE;
    };
    this.update = (() => {
      const offset = new import_three4.Vector3();
      const quat = new import_three4.Quaternion().setFromUnitVectors(object.up, new import_three4.Vector3(0, 1, 0));
      const quatInverse = quat.clone().invert();
      const lastPosition = new import_three4.Vector3();
      const lastQuaternion = new import_three4.Quaternion();
      const twoPI = 2 * Math.PI;
      return function update() {
        const position = scope.object.position;
        offset.copy(position).sub(scope.target);
        offset.applyQuaternion(quat);
        spherical.setFromVector3(offset);
        if (scope.autoRotate && state === STATE.NONE) {
          rotateLeft(getAutoRotationAngle());
        }
        if (scope.enableDamping) {
          spherical.theta += sphericalDelta.theta * scope.dampingFactor;
          spherical.phi += sphericalDelta.phi * scope.dampingFactor;
        } else {
          spherical.theta += sphericalDelta.theta;
          spherical.phi += sphericalDelta.phi;
        }
        let min = scope.minAzimuthAngle;
        let max = scope.maxAzimuthAngle;
        if (isFinite(min) && isFinite(max)) {
          if (min < -Math.PI)
            min += twoPI;
          else if (min > Math.PI)
            min -= twoPI;
          if (max < -Math.PI)
            max += twoPI;
          else if (max > Math.PI)
            max -= twoPI;
          if (min <= max) {
            spherical.theta = Math.max(min, Math.min(max, spherical.theta));
          } else {
            spherical.theta = spherical.theta > (min + max) / 2 ? Math.max(min, spherical.theta) : Math.min(max, spherical.theta);
          }
        }
        spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
        spherical.makeSafe();
        spherical.radius *= scale;
        spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));
        if (scope.enableDamping === true) {
          scope.target.addScaledVector(panOffset, scope.dampingFactor);
        } else {
          scope.target.add(panOffset);
        }
        offset.setFromSpherical(spherical);
        offset.applyQuaternion(quatInverse);
        position.copy(scope.target).add(offset);
        scope.object.lookAt(scope.target);
        if (scope.enableDamping === true) {
          sphericalDelta.theta *= 1 - scope.dampingFactor;
          sphericalDelta.phi *= 1 - scope.dampingFactor;
          panOffset.multiplyScalar(1 - scope.dampingFactor);
        } else {
          sphericalDelta.set(0, 0, 0);
          panOffset.set(0, 0, 0);
        }
        scale = 1;
        if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
          scope.dispatchEvent(changeEvent);
          lastPosition.copy(scope.object.position);
          lastQuaternion.copy(scope.object.quaternion);
          zoomChanged = false;
          return true;
        }
        return false;
      };
    })();
    this.connect = (domElement2) => {
      if (domElement2 === document) {
        console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.');
      }
      scope.domElement = domElement2;
      scope.domElement.style.touchAction = "none";
      scope.domElement.addEventListener("contextmenu", onContextMenu);
      scope.domElement.addEventListener("pointerdown", onPointerDown);
      scope.domElement.addEventListener("pointercancel", onPointerCancel);
      scope.domElement.addEventListener("wheel", onMouseWheel);
    };
    this.dispose = () => {
      var _a, _b, _c, _d, _e2, _f;
      (_a = scope.domElement) == null ? void 0 : _a.removeEventListener("contextmenu", onContextMenu);
      (_b = scope.domElement) == null ? void 0 : _b.removeEventListener("pointerdown", onPointerDown);
      (_c = scope.domElement) == null ? void 0 : _c.removeEventListener("pointercancel", onPointerCancel);
      (_d = scope.domElement) == null ? void 0 : _d.removeEventListener("wheel", onMouseWheel);
      (_e2 = scope.domElement) == null ? void 0 : _e2.ownerDocument.removeEventListener("pointermove", onPointerMove);
      (_f = scope.domElement) == null ? void 0 : _f.ownerDocument.removeEventListener("pointerup", onPointerUp);
      if (scope._domElementKeyEvents !== null) {
        scope._domElementKeyEvents.removeEventListener("keydown", onKeyDown);
      }
    };
    const scope = this;
    const changeEvent = { type: "change" };
    const startEvent = { type: "start" };
    const endEvent = { type: "end" };
    const STATE = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let state = STATE.NONE;
    const EPS = 1e-6;
    const spherical = new import_three4.Spherical();
    const sphericalDelta = new import_three4.Spherical();
    let scale = 1;
    const panOffset = new import_three4.Vector3();
    let zoomChanged = false;
    const rotateStart = new import_three4.Vector2();
    const rotateEnd = new import_three4.Vector2();
    const rotateDelta = new import_three4.Vector2();
    const panStart = new import_three4.Vector2();
    const panEnd = new import_three4.Vector2();
    const panDelta = new import_three4.Vector2();
    const dollyStart = new import_three4.Vector2();
    const dollyEnd = new import_three4.Vector2();
    const dollyDelta = new import_three4.Vector2();
    const pointers = [];
    const pointerPositions = {};
    function getAutoRotationAngle() {
      return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
    }
    function getZoomScale() {
      return Math.pow(0.95, scope.zoomSpeed);
    }
    function rotateLeft(angle) {
      if (scope.reverseOrbit) {
        sphericalDelta.theta += angle;
      } else {
        sphericalDelta.theta -= angle;
      }
    }
    function rotateUp(angle) {
      if (scope.reverseOrbit) {
        sphericalDelta.phi += angle;
      } else {
        sphericalDelta.phi -= angle;
      }
    }
    const panLeft = (() => {
      const v4 = new import_three4.Vector3();
      return function panLeft2(distance, objectMatrix) {
        v4.setFromMatrixColumn(objectMatrix, 0);
        v4.multiplyScalar(-distance);
        panOffset.add(v4);
      };
    })();
    const panUp = (() => {
      const v4 = new import_three4.Vector3();
      return function panUp2(distance, objectMatrix) {
        if (scope.screenSpacePanning === true) {
          v4.setFromMatrixColumn(objectMatrix, 1);
        } else {
          v4.setFromMatrixColumn(objectMatrix, 0);
          v4.crossVectors(scope.object.up, v4);
        }
        v4.multiplyScalar(distance);
        panOffset.add(v4);
      };
    })();
    const pan = (() => {
      const offset = new import_three4.Vector3();
      return function pan2(deltaX, deltaY) {
        const element = scope.domElement;
        if (element && scope.object instanceof import_three4.PerspectiveCamera && scope.object.isPerspectiveCamera) {
          const position = scope.object.position;
          offset.copy(position).sub(scope.target);
          let targetDistance = offset.length();
          targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180);
          panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
          panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
        } else if (element && scope.object instanceof import_three4.OrthographicCamera && scope.object.isOrthographicCamera) {
          panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
          panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
        } else {
          console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.");
          scope.enablePan = false;
        }
      };
    })();
    function dollyOut(dollyScale) {
      if (scope.object instanceof import_three4.PerspectiveCamera && scope.object.isPerspectiveCamera) {
        scale /= dollyScale;
      } else if (scope.object instanceof import_three4.OrthographicCamera && scope.object.isOrthographicCamera) {
        scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
        scope.object.updateProjectionMatrix();
        zoomChanged = true;
      } else {
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
        scope.enableZoom = false;
      }
    }
    function dollyIn(dollyScale) {
      if (scope.object instanceof import_three4.PerspectiveCamera && scope.object.isPerspectiveCamera) {
        scale *= dollyScale;
      } else if (scope.object instanceof import_three4.OrthographicCamera && scope.object.isOrthographicCamera) {
        scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
        scope.object.updateProjectionMatrix();
        zoomChanged = true;
      } else {
        console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.");
        scope.enableZoom = false;
      }
    }
    function handleMouseDownRotate(event) {
      rotateStart.set(event.clientX, event.clientY);
    }
    function handleMouseDownDolly(event) {
      dollyStart.set(event.clientX, event.clientY);
    }
    function handleMouseDownPan(event) {
      panStart.set(event.clientX, event.clientY);
    }
    function handleMouseMoveRotate(event) {
      rotateEnd.set(event.clientX, event.clientY);
      rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
      const element = scope.domElement;
      if (element) {
        rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
        rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
      }
      rotateStart.copy(rotateEnd);
      scope.update();
    }
    function handleMouseMoveDolly(event) {
      dollyEnd.set(event.clientX, event.clientY);
      dollyDelta.subVectors(dollyEnd, dollyStart);
      if (dollyDelta.y > 0) {
        dollyOut(getZoomScale());
      } else if (dollyDelta.y < 0) {
        dollyIn(getZoomScale());
      }
      dollyStart.copy(dollyEnd);
      scope.update();
    }
    function handleMouseMovePan(event) {
      panEnd.set(event.clientX, event.clientY);
      panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
      pan(panDelta.x, panDelta.y);
      panStart.copy(panEnd);
      scope.update();
    }
    function handleMouseWheel(event) {
      if (event.deltaY < 0) {
        dollyIn(getZoomScale());
      } else if (event.deltaY > 0) {
        dollyOut(getZoomScale());
      }
      scope.update();
    }
    function handleKeyDown(event) {
      let needsUpdate = false;
      switch (event.code) {
        case scope.keys.UP:
          pan(0, scope.keyPanSpeed);
          needsUpdate = true;
          break;
        case scope.keys.BOTTOM:
          pan(0, -scope.keyPanSpeed);
          needsUpdate = true;
          break;
        case scope.keys.LEFT:
          pan(scope.keyPanSpeed, 0);
          needsUpdate = true;
          break;
        case scope.keys.RIGHT:
          pan(-scope.keyPanSpeed, 0);
          needsUpdate = true;
          break;
      }
      if (needsUpdate) {
        event.preventDefault();
        scope.update();
      }
    }
    function handleTouchStartRotate() {
      if (pointers.length == 1) {
        rotateStart.set(pointers[0].pageX, pointers[0].pageY);
      } else {
        const x2 = 0.5 * (pointers[0].pageX + pointers[1].pageX);
        const y2 = 0.5 * (pointers[0].pageY + pointers[1].pageY);
        rotateStart.set(x2, y2);
      }
    }
    function handleTouchStartPan() {
      if (pointers.length == 1) {
        panStart.set(pointers[0].pageX, pointers[0].pageY);
      } else {
        const x2 = 0.5 * (pointers[0].pageX + pointers[1].pageX);
        const y2 = 0.5 * (pointers[0].pageY + pointers[1].pageY);
        panStart.set(x2, y2);
      }
    }
    function handleTouchStartDolly() {
      const dx = pointers[0].pageX - pointers[1].pageX;
      const dy = pointers[0].pageY - pointers[1].pageY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      dollyStart.set(0, distance);
    }
    function handleTouchStartDollyPan() {
      if (scope.enableZoom)
        handleTouchStartDolly();
      if (scope.enablePan)
        handleTouchStartPan();
    }
    function handleTouchStartDollyRotate() {
      if (scope.enableZoom)
        handleTouchStartDolly();
      if (scope.enableRotate)
        handleTouchStartRotate();
    }
    function handleTouchMoveRotate(event) {
      if (pointers.length == 1) {
        rotateEnd.set(event.pageX, event.pageY);
      } else {
        const position = getSecondPointerPosition(event);
        const x2 = 0.5 * (event.pageX + position.x);
        const y2 = 0.5 * (event.pageY + position.y);
        rotateEnd.set(x2, y2);
      }
      rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
      const element = scope.domElement;
      if (element) {
        rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight);
        rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
      }
      rotateStart.copy(rotateEnd);
    }
    function handleTouchMovePan(event) {
      if (pointers.length == 1) {
        panEnd.set(event.pageX, event.pageY);
      } else {
        const position = getSecondPointerPosition(event);
        const x2 = 0.5 * (event.pageX + position.x);
        const y2 = 0.5 * (event.pageY + position.y);
        panEnd.set(x2, y2);
      }
      panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
      pan(panDelta.x, panDelta.y);
      panStart.copy(panEnd);
    }
    function handleTouchMoveDolly(event) {
      const position = getSecondPointerPosition(event);
      const dx = event.pageX - position.x;
      const dy = event.pageY - position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      dollyEnd.set(0, distance);
      dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
      dollyOut(dollyDelta.y);
      dollyStart.copy(dollyEnd);
    }
    function handleTouchMoveDollyPan(event) {
      if (scope.enableZoom)
        handleTouchMoveDolly(event);
      if (scope.enablePan)
        handleTouchMovePan(event);
    }
    function handleTouchMoveDollyRotate(event) {
      if (scope.enableZoom)
        handleTouchMoveDolly(event);
      if (scope.enableRotate)
        handleTouchMoveRotate(event);
    }
    function onPointerDown(event) {
      var _a, _b;
      if (scope.enabled === false)
        return;
      if (pointers.length === 0) {
        (_a = scope.domElement) == null ? void 0 : _a.ownerDocument.addEventListener("pointermove", onPointerMove);
        (_b = scope.domElement) == null ? void 0 : _b.ownerDocument.addEventListener("pointerup", onPointerUp);
      }
      addPointer(event);
      if (event.pointerType === "touch") {
        onTouchStart(event);
      } else {
        onMouseDown(event);
      }
    }
    function onPointerMove(event) {
      if (scope.enabled === false)
        return;
      if (event.pointerType === "touch") {
        onTouchMove(event);
      } else {
        onMouseMove(event);
      }
    }
    function onPointerUp(event) {
      var _a, _b, _c;
      removePointer(event);
      if (pointers.length === 0) {
        (_a = scope.domElement) == null ? void 0 : _a.releasePointerCapture(event.pointerId);
        (_b = scope.domElement) == null ? void 0 : _b.ownerDocument.removeEventListener("pointermove", onPointerMove);
        (_c = scope.domElement) == null ? void 0 : _c.ownerDocument.removeEventListener("pointerup", onPointerUp);
      }
      scope.dispatchEvent(endEvent);
      state = STATE.NONE;
    }
    function onPointerCancel(event) {
      removePointer(event);
    }
    function onMouseDown(event) {
      let mouseAction;
      switch (event.button) {
        case 0:
          mouseAction = scope.mouseButtons.LEFT;
          break;
        case 1:
          mouseAction = scope.mouseButtons.MIDDLE;
          break;
        case 2:
          mouseAction = scope.mouseButtons.RIGHT;
          break;
        default:
          mouseAction = -1;
      }
      switch (mouseAction) {
        case import_three4.MOUSE.DOLLY:
          if (scope.enableZoom === false)
            return;
          handleMouseDownDolly(event);
          state = STATE.DOLLY;
          break;
        case import_three4.MOUSE.ROTATE:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (scope.enablePan === false)
              return;
            handleMouseDownPan(event);
            state = STATE.PAN;
          } else if (event.altKey) {
            if (scope.enableRotate === false)
              return;
            handleMouseDownRotate(event);
            state = STATE.ROTATE;
          }
          break;
        case import_three4.MOUSE.PAN:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (scope.enableRotate === false)
              return;
            handleMouseDownRotate(event);
            state = STATE.ROTATE;
          } else {
            if (scope.enablePan === false)
              return;
            handleMouseDownPan(event);
            state = STATE.PAN;
          }
          break;
        default:
          state = STATE.NONE;
      }
      if (state !== STATE.NONE) {
        scope.dispatchEvent(startEvent);
      }
    }
    function onMouseMove(event) {
      if (scope.enabled === false)
        return;
      switch (state) {
        case STATE.ROTATE:
          if (scope.enableRotate === false)
            return;
          handleMouseMoveRotate(event);
          break;
        case STATE.DOLLY:
          if (scope.enableZoom === false)
            return;
          handleMouseMoveDolly(event);
          break;
        case STATE.PAN:
          if (scope.enablePan === false)
            return;
          handleMouseMovePan(event);
          break;
      }
    }
    function onMouseWheel(event) {
      if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) {
        return;
      }
      event.preventDefault();
      scope.dispatchEvent(startEvent);
      handleMouseWheel(event);
      scope.dispatchEvent(endEvent);
    }
    function onKeyDown(event) {
      if (scope.enabled === false || scope.enablePan === false)
        return;
      handleKeyDown(event);
    }
    function onTouchStart(event) {
      trackPointer(event);
      switch (pointers.length) {
        case 1:
          switch (scope.touches.ONE) {
            case import_three4.TOUCH.ROTATE:
              if (scope.enableRotate === false)
                return;
              handleTouchStartRotate();
              state = STATE.TOUCH_ROTATE;
              break;
            case import_three4.TOUCH.PAN:
              if (scope.enablePan === false)
                return;
              handleTouchStartPan();
              state = STATE.TOUCH_PAN;
              break;
            default:
              state = STATE.NONE;
          }
          break;
        case 2:
          switch (scope.touches.TWO) {
            case import_three4.TOUCH.DOLLY_PAN:
              if (scope.enableZoom === false && scope.enablePan === false)
                return;
              handleTouchStartDollyPan();
              state = STATE.TOUCH_DOLLY_PAN;
              break;
            case import_three4.TOUCH.DOLLY_ROTATE:
              if (scope.enableZoom === false && scope.enableRotate === false)
                return;
              handleTouchStartDollyRotate();
              state = STATE.TOUCH_DOLLY_ROTATE;
              break;
            default:
              state = STATE.NONE;
          }
          break;
        default:
          state = STATE.NONE;
      }
      if (state !== STATE.NONE) {
        scope.dispatchEvent(startEvent);
      }
    }
    function onTouchMove(event) {
      trackPointer(event);
      switch (state) {
        case STATE.TOUCH_ROTATE:
          if (scope.enableRotate === false)
            return;
          handleTouchMoveRotate(event);
          scope.update();
          break;
        case STATE.TOUCH_PAN:
          if (scope.enablePan === false)
            return;
          handleTouchMovePan(event);
          scope.update();
          break;
        case STATE.TOUCH_DOLLY_PAN:
          if (scope.enableZoom === false && scope.enablePan === false)
            return;
          handleTouchMoveDollyPan(event);
          scope.update();
          break;
        case STATE.TOUCH_DOLLY_ROTATE:
          if (scope.enableZoom === false && scope.enableRotate === false)
            return;
          handleTouchMoveDollyRotate(event);
          scope.update();
          break;
        default:
          state = STATE.NONE;
      }
    }
    function onContextMenu(event) {
      if (scope.enabled === false)
        return;
      event.preventDefault();
    }
    function addPointer(event) {
      pointers.push(event);
    }
    function removePointer(event) {
      delete pointerPositions[event.pointerId];
      for (let i3 = 0; i3 < pointers.length; i3++) {
        if (pointers[i3].pointerId == event.pointerId) {
          pointers.splice(i3, 1);
          return;
        }
      }
    }
    function trackPointer(event) {
      let position = pointerPositions[event.pointerId];
      if (position === void 0) {
        position = new import_three4.Vector2();
        pointerPositions[event.pointerId] = position;
      }
      position.set(event.pageX, event.pageY);
    }
    function getSecondPointerPosition(event) {
      const pointer = event.pointerId === pointers[0].pointerId ? pointers[1] : pointers[0];
      return pointerPositions[pointer.pointerId];
    }
    if (domElement !== void 0)
      this.connect(domElement);
    this.update();
  }
};

// src/extension/components/OrbitControls/index.tsx
var OrbitControls = (0, import_react14.forwardRef)((_a, ref) => {
  var _b = _a, {
    makeDefault,
    camera,
    regress,
    domElement,
    enableDamping = true,
    onChange,
    onStart,
    onEnd
  } = _b, restProps = __objRest(_b, [
    "makeDefault",
    "camera",
    "regress",
    "domElement",
    "enableDamping",
    "onChange",
    "onStart",
    "onEnd"
  ]);
  const invalidate2 = useThree(({ invalidate: invalidate3 }) => invalidate3);
  const defaultCamera = useThree(({ camera: camera2 }) => camera2);
  const gl = useThree(({ gl: gl2 }) => gl2);
  const events = useThree(({ events: events2 }) => events2);
  const set = useThree(({ set: set2 }) => set2);
  const get2 = useThree(({ get: get3 }) => get3);
  const performance2 = useThree(({ performance: performance3 }) => performance3);
  const explCamera = camera || defaultCamera;
  const explDomElement = domElement || (typeof events.connected !== "boolean" ? events.connected : gl.domElement);
  const controls = (0, import_react14.useMemo)(() => new OrbitControlsImpl(explCamera), [explCamera]);
  useFrame(() => {
    if (controls.enabled)
      controls.update();
  });
  (0, import_react14.useEffect)(() => {
    const callback = (e2) => {
      invalidate2();
      if (regress)
        performance2.regress();
      if (onChange)
        onChange(e2);
    };
    controls.connect(explDomElement);
    controls.addEventListener("change", callback);
    if (onStart)
      controls.addEventListener("start", onStart);
    if (onEnd)
      controls.addEventListener("end", onEnd);
    return () => {
      controls.removeEventListener("change", callback);
      if (onStart)
        controls.removeEventListener("start", onStart);
      if (onEnd)
        controls.removeEventListener("end", onEnd);
      controls.dispose();
    };
  }, [
    explDomElement,
    onChange,
    onStart,
    onEnd,
    regress,
    controls,
    invalidate2
  ]);
  (0, import_react14.useEffect)(() => {
    if (makeDefault) {
      const old = get2().controls;
      set({ controls });
      return () => set({ controls: old });
    }
  }, [makeDefault, controls]);
  return /* @__PURE__ */ React12.createElement("primitive", __spreadValues({
    ref,
    object: controls,
    enableDamping
  }, restProps));
});

// src/extension/components/useSnapshotEditorCamera.tsx
var import_react16 = __toModule(require_react());
var import_react17 = __toModule(require_react());

// src/extension/components/useRefAndState.ts
var import_react15 = __toModule(require_react());
function useRefAndState(initialValue) {
  const ref = (0, import_react15.useMemo)(() => {
    let current = initialValue;
    return {
      get current() {
        return current;
      },
      set current(v4) {
        current = v4;
        setState(v4);
      }
    };
  }, []);
  const [state, setState] = (0, import_react15.useState)(() => initialValue);
  return [ref, state];
}

// src/extension/components/useSnapshotEditorCamera.tsx
var import_studio5 = __toModule(require("@theatre/studio"));
var import_core2 = __toModule(require("@theatre/core"));
var camConf = {
  transform: {
    position: {
      x: import_core2.types.number(10),
      y: import_core2.types.number(10),
      z: import_core2.types.number(0)
    },
    target: {
      x: import_core2.types.number(0),
      y: import_core2.types.number(0),
      z: import_core2.types.number(0)
    }
  },
  lens: {
    zoom: import_core2.types.number(1, { range: [1e-4, 10] }),
    fov: import_core2.types.number(50, { range: [1, 1e3] }),
    near: import_core2.types.number(0.1, { range: [0, Infinity] }),
    far: import_core2.types.number(2e3, { range: [0, Infinity] }),
    focus: import_core2.types.number(10, { range: [0, Infinity] }),
    filmGauge: import_core2.types.number(35, { range: [0, Infinity] }),
    filmOffset: import_core2.types.number(0, { range: [0, Infinity] })
  }
};
function useSnapshotEditorCamera(snapshotEditorSheet, paneId) {
  const [orbitControlsRef, orbitControls] = useRefAndState(null);
  const [camRef, cam] = useRefAndState(void 0);
  const objRef = (0, import_react16.useRef)(null);
  (0, import_react16.useLayoutEffect)(() => {
    if (!objRef.current) {
      objRef.current = snapshotEditorSheet.object(`Editor Camera ${paneId}`, camConf);
    }
  }, [paneId]);
  usePassValuesFromTheatreToCamera(cam, orbitControls, objRef);
  usePassValuesFromOrbitControlsToTheatre(cam, orbitControls, objRef);
  const node = /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, /* @__PURE__ */ import_react17.default.createElement(PerspectiveCamera2, {
    makeDefault: true,
    ref: camRef,
    position: [0, 102, 0]
  }), /* @__PURE__ */ import_react17.default.createElement(OrbitControls, {
    makeDefault: true,
    ref: orbitControlsRef,
    camera: cam,
    enableDamping: false
  }));
  return [node, orbitControlsRef];
}
var COMMIT_DEBOUNCE_MS = 200;
function usePassValuesFromOrbitControlsToTheatre(cam, orbitControls, objRef) {
  (0, import_react16.useLayoutEffect)(() => {
    if (!cam || orbitControls == null)
      return;
    let currentScrub;
    const scheduleCommit = () => {
      var _a;
      if (currentScrub) {
        clearTimeout((_a = currentScrub.scheduledCommit) == null ? void 0 : _a.timer);
        const reference = currentScrub;
        currentScrub.scheduledCommit = {
          timer: setTimeout(() => {
            if (reference === currentScrub) {
              currentScrub.scrub.commit();
              currentScrub = void 0;
            }
          }, COMMIT_DEBOUNCE_MS)
        };
      }
    };
    const onStart = () => {
      var _a;
      if (currentScrub) {
        clearTimeout((_a = currentScrub.scheduledCommit) == null ? void 0 : _a.timer);
      } else {
        currentScrub = {
          scrub: import_studio5.default.scrub()
        };
      }
    };
    const onEnd = () => {
      scheduleCommit();
    };
    const onChange = () => {
      if (!currentScrub)
        return;
      const p = cam.position;
      const position = { x: p.x, y: p.y, z: p.z };
      const t2 = orbitControls.target;
      const target = { x: t2.x, y: t2.y, z: t2.z };
      const transform = {
        position,
        target
      };
      currentScrub.scrub.capture(({ set }) => {
        set(objRef.current.props.transform, transform);
      });
    };
    orbitControls.addEventListener("start", onStart);
    orbitControls.addEventListener("end", onEnd);
    orbitControls.addEventListener("change", onChange);
    return () => {
      orbitControls.removeEventListener("start", onStart);
      orbitControls.removeEventListener("end", onEnd);
      orbitControls.removeEventListener("change", onChange);
      if (currentScrub) {
        currentScrub.scrub.discard();
        currentScrub = void 0;
      }
    };
  }, [cam, orbitControls]);
}
function usePassValuesFromTheatreToCamera(cam, orbitControls, objRef) {
  const invalidate2 = useThree(({ invalidate: invalidate3 }) => invalidate3);
  (0, import_react16.useLayoutEffect)(() => {
    if (!cam || orbitControls === null)
      return;
    const obj = objRef.current;
    const setFromTheatre = (props) => {
      const { position, target } = props.transform;
      cam.zoom = props.lens.zoom;
      cam.fov = props.lens.fov;
      cam.near = props.lens.near;
      cam.far = props.lens.far;
      cam.focus = props.lens.focus;
      cam.filmGauge = props.lens.filmGauge;
      cam.filmOffset = props.lens.filmOffset;
      cam.position.set(position.x, position.y, position.z);
      cam.updateProjectionMatrix();
      orbitControls.target.set(target.x, target.y, target.z);
      orbitControls.update();
      invalidate2();
    };
    const unsub = obj.onValuesChange(setFromTheatre);
    setFromTheatre(obj.value);
    return unsub;
  }, [cam, orbitControls, objRef, invalidate2]);
}

// src/extension/InfiniteGridHelper/index.ts
var import_three5 = __toModule(require("three"));
var InfiniteGridHelper = class extends import_three5.Mesh {
  constructor({
    divisions = 10,
    scale = 0.1,
    color = new import_three5.Color("white"),
    distance = 8e3,
    subgridOpacity = 0.05,
    gridOpacity = 0.15
  } = {}) {
    const geometry = new import_three5.PlaneGeometry(2, 2, 1, 1);
    const material = new import_three5.ShaderMaterial({
      glslVersion: import_three5.GLSL3,
      side: import_three5.DoubleSide,
      uniforms: {
        uScale: {
          value: scale
        },
        uDivisions: {
          value: divisions
        },
        uColor: {
          value: color
        },
        uDistance: {
          value: distance
        },
        uSubgridOpacity: {
          value: subgridOpacity
        },
        uGridOpacity: {
          value: gridOpacity
        }
      },
      transparent: true,
      vertexShader: `
          out vec3 worldPosition;
          uniform float uDistance;

          void main() {
              // Scale the plane by the drawing distance
              worldPosition = position.xzy * uDistance;
              worldPosition.xz += cameraPosition.xz;

              gl_Position = projectionMatrix * modelViewMatrix * vec4(worldPosition, 1.0);
          }
      `,
      fragmentShader: `
          out vec4 fragColor;
          in vec3 worldPosition;

          uniform float uDivisions;
          uniform float uScale;
          uniform vec3 uColor;
          uniform float uDistance;
          uniform float uSubgridOpacity;
          uniform float uGridOpacity;

          float getGrid(float gapSize) {
              vec2 worldPositionByDivision = worldPosition.xz / gapSize;

              // Inverted, 0 where line, >1 where there's no line
              // We use the worldPosition (which in this case we use similarly to UVs) differential to control the anti-aliasing
              // We need to do the -0.5)-0.5 trick because the result fades out from 0 to 1, and we want both
              // worldPositionByDivision == 0.3 and worldPositionByDivision == 0.7 to result in the same fade, i.e. 0.3,
              // otherwise only one side of the line will be anti-aliased
              vec2 grid = abs(fract(worldPositionByDivision-0.5)-0.5) / fwidth(worldPositionByDivision) / 2.0;
              float gridLine = min(grid.x, grid.y);

              // Uninvert and clamp
              return 1.0 - min(gridLine, 1.0);
          }

          void main() {
              float cameraDistanceToGridPlane = distance(cameraPosition.y, worldPosition.y);
              float cameraDistanceToFragmentOnGridPlane = distance(cameraPosition.xz, worldPosition.xz);

              // The size of the grid and subgrid are powers of each other and they are determined based on camera distance.
              // The current grid will become the next subgrid when it becomes too small, and its next power becomes the new grid.
              float subGridPower = pow(uDivisions, floor(log(cameraDistanceToGridPlane) / log(uDivisions)));
              float gridPower = subGridPower * uDivisions;

              // If we want to fade both the grid and its subgrid, we need to displays 3 different opacities, with the next grid being the third
              float nextGridPower = gridPower * uDivisions;

              // 1 where grid, 0 where no grid
              float subgrid = getGrid(subGridPower * uScale);
              float grid = getGrid(gridPower * uScale);
              float nextGrid = getGrid(nextGridPower * uScale);

              // Where we are between the introduction of the current grid power and when we switch to the next grid power
              float stepPercentage = (cameraDistanceToGridPlane - subGridPower)/(gridPower - subGridPower);

              // The last x percentage of the current step over which we want to fade
              float fadeRange = 0.3;

              // We calculate the fade percentage from the step percentage and the fade range
              float fadePercentage = max(stepPercentage - 1.0 + fadeRange, 0.0) / fadeRange;

              // Set base opacity based on how close we are to the drawing distance, with a cubic falloff
              float baseOpacity = subgrid * pow(1.0 - min(cameraDistanceToFragmentOnGridPlane / uDistance, 1.0), 3.0);

              // Shade the subgrid
              fragColor = vec4(uColor.rgb, (baseOpacity - fadePercentage) * uSubgridOpacity);

              // Somewhat arbitrary additional fade coefficient to counter anti-aliasing popping when switching between grid powers
              float fadeCoefficient = 0.5;

              // Shade the grid
              fragColor.a = mix(fragColor.a, baseOpacity * uGridOpacity - fadePercentage * (uGridOpacity - uSubgridOpacity) * fadeCoefficient, grid);

              // Shade the next grid
              fragColor.a = mix(fragColor.a, baseOpacity * uGridOpacity, nextGrid);

              if (fragColor.a <= 0.0) discard;
          }
      `,
      extensions: {
        derivatives: true
      }
    });
    super(geometry, material);
    this.frustumCulled = false;
  }
};

// src/extension/components/ReferenceWindow/ReferenceWindow.tsx
var import_react18 = __toModule(require_react());
var import_react19 = __toModule(require_react());
var import_shallow4 = __toModule(require_shallow());
init_styled_components_browser_esm();

// ../../node_modules/react-icons/ti/index.esm.js
function TiWarningOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "version": "1.2", "baseProfile": "tiny", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M12 5.511c.561 0 1.119.354 1.544 1.062l5.912 9.854c.851 1.415.194 2.573-1.456 2.573h-12c-1.65 0-2.307-1.159-1.456-2.573l5.912-9.854c.425-.708.983-1.062 1.544-1.062m0-2c-1.296 0-2.482.74-3.259 2.031l-5.912 9.856c-.786 1.309-.872 2.705-.235 3.83s1.879 1.772 3.406 1.772h12c1.527 0 2.77-.646 3.406-1.771s.551-2.521-.235-3.83l-5.912-9.854c-.777-1.294-1.963-2.034-3.259-2.034z" } }, { "tag": "circle", "attr": { "cx": "12", "cy": "16", "r": "1.3" } }, { "tag": "path", "attr": { "d": "M13.5 10c0-.83-.671-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .199.041.389.111.562.554 1.376 1.389 3.438 1.389 3.438l1.391-3.438c.068-.173.109-.363.109-.562z" } }] })(props);
}

// src/extension/components/ReferenceWindow/noise-transparent.png
var noise_transparent_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQBAMAAABykSv/AAAAFVBMVEUDAwPv7+/Dw8M3Nzd5eXmdnZ1YWFh6HLOtAAAAB3RSTlMSEhISEhISn+TpXAAAKwlJREFUeNq0mclaQjkQhf9UJVkXg64jKOsAwjogsA4KroMK7/8I/fWgrbZTT49wq27O+c8pUIMOa4dR6TrxOoDdgX6JJFaHp8fHUeEyu3ryrE4kHgoFNd9NZSZxSbw19HAFtzgBIFTl3iVAWbCroF5vPAl0SkGRfMOl6bXojcLlrXPKLefSfJhdGjDLMXYvmjwA89hzy+hDvOAenJZOdl2zLEgr80rfHcZAUBHdPMFScass17BDzCApzpeE0Lr3pYjjBCVUqCDXuVkChafmzi0/Mg9YJYqGkswec3GUSa9iA2CYfGw78+IqhC7R74xt2yN4S+wa6+1F6HNVCIrlSjICqoBI8lZXpk+3Ny20CR36rAtOoaG3l1mJDRUwomlCTemzBRktwMrUIR0ZEMItjZ7P/two+yvaBqOgyIZaUE+KVINTEpEgaFYXqk7pNZMQDFiyqbjY1zjDnh4w9j7Y8yRPsPhkkiq5dHdfT5Jo3NNsFyAApQvXIrNMMRH6ddzjDgjg7kvBZSb5akltfk9TBFCh+HTMeql1IXpAWgC/G44h+Rs6MZ24TCktwxmiBMjLjQgS3FK7wCKPKSUZ2ajQiOSDjp4y44FeEfAlnSAnHByYwJjsSjAYPBnOxwwcDgsRyKV7GeJiyExYhUzk+ujv8prp3opDIIC3jcvmY7KEO5tRR4Ltig+xEHNw5cKjsoERYRqoi/BIjSVc5Anm1IhQaWmiR3r3q7Chzv2KXOSau9Nlni+jBSbV/C3rtiCKz4Gu1BQeoWZjv5Y2R3feCVyFgmZoQDFJfUfNu1ZPsTJobPPcO0o3hQbRh0mOlaPcaugRPQBRgiNmD15JCJB85RqpJpQE9Twq3sON4eBoNIc3dn9d//HD9dc367/6av2K372byPRHE9EPJpLdoVIoLvrgb50eI8eaH8nMFMdiCyHDBuFhpq5VUeOcdOOcK0vVtMw5YJh10IIT7x0RUOou3Y12zIAbx1WMaEp1OPach610oKUx4BAHzoiVeyge8EGbR6Y9DgXqXeiAkhLUg2uutK6hj7VVl1CQGT0oLCSbNPYJI4drnHHynVKgGwrEBUAcuCouJsw2CphjjhIr2SUcJi74SpVMYgzOfDVHwCVLZZIIK3MrmuA355vT5Am54SzyFy3vS/Ey273X8tNvWh5CvODuWcvPnrV8WunLw7gM6PjskimbPomSfIRwkLukdNtWZZSyMnZ97kgd4WAhswDnyZkog248HwFuRfFuWx0xgADtOKe2PMzOHIUcXQeZEyYj2Ycic8jEDZ2DxqytugAt5Z04F6ce83oxw0kCmVA2YUFJZ8A20dZbwnmoJBZC2OD3XdsW2UHNTgPioJIzkAYsgl8wX1/OudfkzBW/A8tEmA1uyM4yhsEgA4dqenGHv+5CrP5GWvPkc4D7fIfUixBZLLPH95DSqOA7JVUnQUktQKrUcFuj00NhUdj3yETPEgKxdUM5TjTqA+KBOuySY0yEmnWSGZXA+SaEAGgjJdfcILi+2HJRNYONQ7hfm0ie1uCu0zD1fSYiloLzKQTLlidzQWl+NKk1BbkgdcHO7jgNe5BIBh04EhqeApQ65xt5Ni5skKj7FHH5hsWB8OuH+ubwkBm14CEXoQUH8UBNqSamZNszzW7uSHUL+BSPYIeSH5OLm+TwtSyAmlO6PhW8Zfo3DAuhcOFAyNhKyCm6qydPstjw7CEAw5vohOd/CuDRx1RbqpAWfQlYqlkiFQkE9nuazfv4PmGbFUrxCSonl3bxLuV2nUgFgoyT0h5gr0yHyBPVPbVaKzBHhHO6qXbKhb/sMgWnVvdPW9JQZ9TeUiau3EDjIlBtSdqqaBw2I0eW7SoIdWAiQ5xb5/gwzsiLUvGDPzPD5pM/M573LSXUu0GpT92mNflyB03v63ruq862HiNBhYVvPUd5cAKdWoO05GRFqU/wSO2LFfJlQxp3rYZru8+BFbc9TQ4bQyMQRdO8uslT2bWgbVXVMyxhjkPxqTtGD+ApS07k0cD3CaRCVwgOm+pYYxr3URwgAbzB9OLWdWqjk3IC0OgcpdqZbUp1PkF68DwozZLzwsA1Cxo2IbYjMiL0tBXzbsA90Mr9kCOxXqW8zZQCoC1V45ECJQdIIKzRwsCRvEBwrWV4EZXtz0Xl4dXq/GtR+WN1qfM3Vrf52erC0xerG+XA/F+Buf+/wHyUlY7icCBDIF45JmeZm0WCNas8ihR1DfCPIUOOLB+f35FLOLf/9R195/jjvzi+/IeOzx+On3/u+JjDrK4JDJFP4uLiJS4eT89x8fGjuOj/iIsPb+Pi9HVcLM9x0UCn+SUufogYYXb1CWK8j4s8L56/lci+XPzxz8UrhMeQGYjV5vtDCovMZST8NT5MnuPD7Ojv2qv44N/Fh77/PT7cF+9f4gNjFgOvNa0SxwuYdyshYQmAPTm0LkD2FtZALte5CDDNHjLDkGXBtKTrnAnrZJZDcm1EGe63gA5ph8E5owTaDrmfWq0PFhrYtevR2TolMfI6w5Xz8zNJzm7oOrI/FMELpcG9XQnZjYLlwVHJap0SsjhLscMd3uBjBlMUXxwQjVtQCEUBAGq4fpIwh0HbztjczrtyU7tyLDvwlXahleZzKMblfa7Ekj3Dpn5WoPaM/NB1Ss8yXJSyBKCPLORAl0QiRPUQ5DJnANGARy0R6uR6XxxdjSNW0NIRSHEFPXTodilEljWSSUBOnmW8Y1Jm3tLcGFFhvZwawio7e4hNliI+bSsJKuovW6qk2k/jBL6n5r041BEgQtNok6cbtFsnlcpK/k5bYN+3BX8+q8u/Re7zqpfucKhfk/viLbl3/yD35Rty7/9B7vUjcm9vyf30yV+zhZLlc79sBT8GI26JGAtCiy6UBBW8S2hJozu8IyW31k4OGahwdvQwRIfy27bX/2DbF5WUf7rtb60vfWx9+w+s7/wL61v/poDlRQHrW+vjtQKevbW+9wp49aEC8jG/61t+5xW/lz/4/fIdvz98we/+CDb+k99DrT/n99VX/P6SCflqxP1vTaZ8bzLf08XtByMef9VRtQ86Kn5ej6iXd/VIfFuP5Mm39Uh9VY9EfVuP7D+uRx76goW4R63IpllbccTRBboUf4+zGnP3jRaXaqracT1fOaOh6GlaS+5Lvr9gCK62tPwX5J9g2rl1nfQd+S9fkX95T/7lNfnf/UH+NGalWELqDqYQQTk/w+OxVuo62by2uNeIorVh/szgDnyjxmHN54E0xjXx2azvU574oVIdzjnjGiyVYjSghbAMk2PRCj5bqK0xkSBTK67t7cKIohYvSnLUY2XsuTy56EusmEvgkmfd6AQeXXJc6g61c+Gqw4sDtJ91Nx86QPmBA8w/dYAXbtB/wQ08T62+TG3269Rm/3Rq+YupXcpwKlgBwuOaFsMQR6Qh1qXiIwaQb0h3w4Z1D1B9QKB0r5xcifdYpzWf7aTZsTH2qkhTfhY7WwHgOXZ+Y6Ol4Mf5jY2Wj2w0fGyjvX9io5gjTy0/aKeQMSBVWICOz1KnG3FdFQByM/PBua1/CtgSJKYSU1YnWEl/qwv3HoD5p114+ksX3vtrFy6vunB+tan6bFM/q5l4sSn9wKa+ry7lubo8va0uF8j31eU0v20Zrv9oGbDx6QbtpvdIqp8iqXt3wKq/Iunq0wNW+PqApX2Nk5cDlv/JAYuXA9brxuFTra9/S+vTj1ueVv/y3MK/pNbhHZ6XU4h+fBz68hTy3uuP773+4e95Pb96/fAX4s1mOW0YjKJXv2uXAmtRqNeCBNYKSbtWgWRtHML7P0LHBGNAlmRBOl12ppNFCJ/vPfe4mUISnvUIXxM3lHsr2GP7NVk2oTylgu2dChb5e0en/bt/2L9fkzcTUm5tfDOx4eb1TQ6b5rXyPHe7XlmuNKMUWevi+HhxZcuUxVEFF8fj4EyvF0fbsjjiiEuYi0v4JS7hbbjEVLhk9QSArRtcIttxCT5xyQemJs/7n7hkUOMSecIlsxqXlB5cYhgDih8jtS0LAH3DYQb4xLvvoc2It2xGqiHzQx/eVWd49+Ea78oD3p1d4F0/mecHvLuryLx1yPx8ZyYFqn/Rqt0+x9rt5s5264LdeLutq1eU7+Xn+szHe4CHPlJZfoE+szmcj1cMK3Djm1xrfcY9HxN6Oh/2MraDSgtQfLwIAq2n2Tf9C8RKQGPxPueMmLEoq0OCgaT8gKGxJHmGhwwwXChZMFqqJwNLOYhSsBlhnvg2S41vQ098o258A8Bb6Cxr+/RmoeKsDnSWfcodAjYXYbmDvsPyr5M7sIB+3gCCTMH4SGWaTBlA+5wrACAGkyzPiKKggC20Aezo+ViBtIXBlAKvcv1rc6gjZcENZKfPWXk/Zx78nO3Z57w8PkAGt2dp6WTpo1ZkE7ySFK0ItVYk2rQizCsmrCsm7OUQPYdDrF0OMU3gEKnZVFfZlEQWyHOUwIIowS3F4u5SLNtLce+qFJuqFNOWUlycSrEzr/jtLFHPK61f4IXA+kkEvsB5/AvMqGwJ4A/dAnhcl6z3r5l7772gvk+30+reS01cTGNPoN7GQP2wO6jXsg8Iof9kgKYUEDLL0Zekmq/mUqAHaGBsiYYEz8YEbxArEDCsDb5BFk99DhC1AbDLAGCpBlBZCUJ4oQGCjB3aChh6QEaguq+Wu33wKc1ryRX05o1n9E83HnK18diLjWd/VagzihTLa1FbXtrw3wWFnIDjuEIatW9dIVnSCklPsXoCs179CcRqfblCwmESiToVb5FWlCOtJERjc2U+rGvzIRKNa4ygjqfaeE513oHa2RBGMF0xgtuzdzW1C3wNED+lc+8pTRddZUTrDO4WIsQyHBi9MudXbt+IhFEYnTRiqwZGF3eP2H1dAIExfNn157hj+CH4wBt8xqcBBlXwKarg8+My+EjV24aDD7sMPo0bdT+ktl+x9T7Glv32rRcP0IPVSBKM+EAAEpoKgBiGBTEgWMj+bAzU2FlRCSCzgNSmFKz6z7SL4MkbwZPfJHiKsOAJ72/gDrCmbncbrM9tMJE3IXxD7OBe2yfH/DyOaqdPpsVRGruhsADFrm5yvU5Nbpxh4W9yzeDS1uSSBhd61thNhQL9Lx8ESLvykXbjJ+0BnzJ+M7YQxvOIjKNo3GACLo7uv3VMwP/o/ie7gwrid5Mj30I50qqdP0em49kiD+VIZOvvHB/YKa0XEFAbs4YA0w8oPGf5kdjIWV4KSSlAE717fp93r9UzLFE/Kd40BCMQG5uzxiN4iXgEmkGmewTzC49gfuER0FsW8UR1Lz2tKCetxHWRH44uEk8rOO+Psn5Jsgxarw3lxYHyNtbr2jsSTSLWq9v6iUN5wyORXiTNNNYL8GTLTJPwYhgNvxdoogCvQ8V927unSQLbY8V9ubHi8taK25ymcbzi1ssRNUNk7G4dKeXB+c/CNv4Sd/bqacNQGP4s25rdNmRWcWBWSprZBZLZCZRZ/DT3fwl9AiixfWwdH5y0U6YMgC0dfT+vBp1EbrpPIglzEmGiYGIJFjRbQWthvz62FoaeFp9Mx2iWP9KW3k5c/1fryx9FvDlLIN87yh9FwZc/NsQdpL2d4tzb2S3iO7NFGU8iPJhkk2Rwp30QtHqmkswau7uPmtUze6ye7fMMyDqqZyXyrUS7TE7a5XS4dolBRUevT7hP0SdEO3VtvaWjoKuut34UfDyvt+O+6+2sst7et623v5tOfdxYb2mxYZofnfq9LzagGjL2JUGa3nKBkHFOQ8Z8eitpWWH49JbrXmGEz+pusM4+Z9pBZE7aMnOSd8OrZqjuaYaOFxoAYGpm6JKaoYeaGWo0YKEDpjdjhgaO0F+xukRe+NJiV9uQXe1ZBIzbpcUS7cpLtMAlM1EZudA7WnTPRNNT+WhP0jS+fJQ0ykfmnKYxtTTN/D1Nc4UMtgRm+IIsQQz3JUPusBq7SblG7iwslsgAbJFmgAXWsMe/QIrVY2FWDmqafiuTP/nW3PyMzHSdFsADtMp+QmOBdQT1sE+BQ4xCdT3GWuTpP8f52dOfVx9jPpezCeVy6M57IDtv2wnUBpPsZf0EGpe2dgI1LSdQP+0KarfGm94d0+6Um3apTDT5ACclVN9huiXuAqRM34ATzmvOc9RT0oRys95BUtdivkBWGomrQdLhpZFMFWmB28gZ1IUgNUgIQrFLtUCf/0gAAwAV0BT7t4szrymmnKaYEE2RKoRypxmvU4KrTQkuoKZwmTkbzswp2iG+b4/cwiOnbjymhFFT8PlJgf7R+33DMXEVx4RjR+F1KL71bd89bfvS+Cq/4aYoRpPzhmsArTcu1bH63L33jXX1UKkKHIKsK+erAv+TGvbQWOJDwRYufqobwZZdn4E76xAm1xVh0r9KfPwU5/hpfIX38wUuOl9smzkex6VtWR3Wf1w0Pq5+/7jX5OOi0MbqqCP2zuup9wI9lQ9EDgBtQegR8xCg8qjEpJk19odXYpRXYsZAdvUKAcq6IUAF8q2Nj0oMqkrMdVCJES8Om8GD+ZiGbWMStpWGquseoqp4iIrnh5UCfph0v5d7iOyOdtsr+3ZNdjQ2+8ZnAF46y2SUK9nTgkorFtSu1YJah5LCY+SywIy8sSwDqYyq3E1SHCBBUiJhcr2jgrDa+kmYcwDM8yl3rB9fWh3rbX+Zcklkyg4J5FQoOkkgAnt1SOF41MxWOyZb7QvHCgpYvBaORypJuwrHMEBVMS5Ioo31f0YB/4f3dtcCFIAOowBARVt55faf0QJ33bTAIY2OYPGazwElldnoWgUrgT96zEZdRpDl5Cg5WMHEskCElbQh8KGIzw9aAg0b2qEIKlQAiyYMaNm+N9+Tnt4J8mHN96i/O4vAu7YXWLBSH9XFGxolnyfVlmWRKld2qrm26aM2+ca3nQCer3UAT+IBPB6gqesATSMA8PQEaOZJ4Pe9nIzoAoEELsnHht3vpFwvDEy2Li9hfL9QxrcQkUB1D/kGRvsZ/Esl72fIyZQ1oUeMh2e0/AFCjxhGeNLh1l6HI9Q9RocbIYMbqMOBPWrPe3hgAKCHy8r8GN/Yw8Y9MIqRoMCEN5Jqn03ABJ7XeUfVvnjbBBbvm4DvEy15S6/nDAWGySbc8tOyeBIw2QRb/k19yyeTd9/WrxpBxW2tX9d6mcDS4nYSk81WRrtzkm8WYcqf67u0lHKbMAaS3pzTiLsm4WylrQAk51xGWs1Uq3crrWhYab9DmerdhVaa6ckyN55l7mXM4/IVdyqFZcDCN1ULnyRR+DKHqh3idlF+eRJlpIG+X1FCvqJA5k6Aey/xrZK545RedOaYEKrdUMgun4uRYxxW/B0dfHXx/BNdwcZuBGSx2y4mFkDhAEDBOCBKAbhEG9OEy8dvcPlJN1x+eYTL38vh8iMKl88rcHl1hMuXv45weQsRovpS0W59z+z2QmjyLCWinVD50B6G5JFzrPLx5JFzNGUvR85RVyjyrlBzb30UHKcFYefNBarWXlDa3lgEYAVMjfdfMiV50fPfYaBXQeM/U0qlUZC5VzHSU2qkQ4B/nciSPDFJ8pQ/T0me6OlrMZ5ZEyUAsLkrNdyzhYHTwPfIpEDhIgDQiVXp7QuiaJohRXFUmKNxmY1LU5ZRdK2xiLSbIUNLkYbBZzyxnGsa3I4/PbgN4pe353Ed5V5wtH60JW0OtaQNB7dLWk2mdrjdwPs/5GlGhstrKmlGiXx8sr5HvPXtByIISggbKC7YPTR4sfMPEoL3ZoC5PoFJHwYAXRzfp3Z9AgV00UI1lj37qoU5ENmA6avO+FJYECdIA9BRMZ2OPE6wnsfCaeZ99hdLyKrmM4Lr4GfeWQf5yJCZV4QZRzz/pCupkuOVVF29oBemFyRIo+DINAKpNYZiOMUALhlRKK4PLQpFB4+fv0+LECtpxp6XGn3kLxZIjQkb+ds1Uz13IakRiabpXS85yK9P+0zJgZyna8kp9MwwJcIMk6EZJl6Z0F3KxJxXJlDabzzAvgPFrj6IOhfh65c26lzUlYyY+mREqjyKvWa8/GgxXg7iy1XlPoSmnYK/zJ1Lc9NAEITbep2VgDkLnOS8eThn8TwLHHJWTJL//xMoOTFImtXMth4UV4qiQGx2dma6+ytZXgX4ISwLS+QbxYrhmu1eGsUwEi0fGfmgkmjtq/kLQaI9bGpxnCq09RQE1HWqd/9uri+J7u9WCcA1EdV5HfbdlZJIDu31eOulgbpK8CnLUx4d7KKmJzzTbt7BYJdKuHn9D2UUd6Mmmt+Ts7WOy4zauEyX9zB/m6Mw1w0Kc1NEt+FgX4jVOnyX4/TVOvyrdSdX6y5ktX7V9/2HLZbRXiwXhMHDeu3ZHmF7M3OHN6vCEYoTDYoyVnHCsMUKdYRIIQZEZqyNGPCnFZz5pb5bQur7sT/0UpQr/0LIUfOp82dephrxApm7OfwwpRJK2DKxeSSWKNlxiSLko0RUEZU1Di3Pz6Z3psRicTslH96OlyYafKH32x8kCDmv96vnJxmFyi5PrDJWx4WQXRLsYiG7ZBU3mKtTYDWdvIAnU/NO5piDpLauoGrNQa4jxHHbQXbazEFUXUF2mNnV2swOGgRpG9vBwctvvKR3ffV93d14JaiVXbCduFay/a9afSLzVOviqRB/W8mI5yf72VeyMbJj5RA9LcOniKgr5IIcNsgygTqP8o9VBdTxH1lK+fZVlnK4msuyJ0v5lSRFNSxL+dmTpdR9Wcqzp4lzG6wUWYrRxKWowA1KeFMuPSjhT0HSnAJoQSq7bGNMVP+R1+zDiek1Az7VfYfrleJwTV9ugP+Nl18AHORDJtPHDWUPdoEpsUoJoi4ZjrItx6WcoXFyPNITY5tROd5vgM4lOFe/w7+jDG9MYXqfIH51vDFxRX3ne/0737LcDd7Hxads1tH9wnbKb65FT1PlQJUwQQuBmgJfHMGZYAVqIumYsZnz2VxHIJUJS+WTaIlTQMgP91rHueGZMbdax1k2HScUQ4hsT3VX4EVbFSXZi8uqokDAfEcuTOtJ8748cN4nZlNiFUcwpZcT+Nox2vB93k9L7aPzEb44BGbctRgz45Kd/anaeShcbx/DHXEUda7dZTsVR4EQze/lI4FHEZxtE4+S25xt20SKJE08S4TqtorPIoJTLCOPZalcVMv92tsKy4Xobf9aLhKmt528oPwasKAs4LLX4K5qiCggM/DkTshPFHi4NP87r5SdEMsRBFzWbxK/Nk2iU1Eq73A5HqWyDWgS6YwFWP6AmxJuIp6r2FN4LnfEc1HPwBBn0WZBZ1Hx4iyq+3v4w8kQe3gVsrNt80zddjLPNPEqy9YngTxT5xpl2Ztu5s4uIHMnMDLnyYtMuPMgE/TT8UA2CXkorgI8WdXWFxs4wCgskTalpvogsn0mRSPc+6zm4xdfMm/kmOLX0aJeSm9nCE8hmZenwFkZxurkCmP8Kxg31vg3msa4QWsML54qcgyfVeKpkoW7Q2+YO7zQtFTSHYpJxrmao8Xsb+7UwtiJ4av8PcXJQE+h3CLE6JbfDdb90W2zG4zee91wuXDDxQc33NVfN1wFmz8ijZXfibkVuLnVh/Hno509knIxnwsy9XmMBCa2s81ormBGc3WuQqLeKe2sConS1a3REgszVaMdmWvTIfsMctts3LZ2bp+X+pkopt2Zgv9AOSZ/ydkg6imBe7swAmEl1pZQQAgXTMIJzXa9sdiuWypkAkdTZHIwRXb/JjGhSqPjLq5TVB+juUjdW5hXYtG/EkWeiYDT8qpCa3Jbm6pCiPSiJQRuyciEhTtiPUeELUt8wIpLEbBi6ZSwZXvY7zP8bZeTgGd9vk7ROcyn/sMs6rs8zBB1m1+pteGOat3ebZi6reJuHkSW4jFqQh07P089JHLsPLcCXNFcUoKpZAatgMhJtUPTHv+oAkC4BScRiKjCe84XXnELdQ5Y2T9gtRKOqa8cQ6EgGLlyhLxcjs2DhHc9mpcLn/wl45uvKP19/opx77Gc9tzkbCaWk93zJmrPe3mLFeL6SxUnVKA03KREEPt9e9MdR0tZ3qUcRyOZ0YQeDZnQryMZ6nYQXxMgVWcEJhwTBHW4Yd4JtCDghle+V21kBloIr4Wp8oMShElwQwtF6UVqptw4zdToLepJ4ODmhsVAvyUw0G2+RoiiphQRq6Sixu6a3cScIWBBPUyhEatk2qgp2LhU/G8+RTs4Rfs590CTYs6yZV7rGp+q4Qea+GEG0cQypflULc12EgBvjTPYQulhqf4QDi6oCe+FtlRfsaHPxmO21B+z5cTHbCpmN0qgVWt2I6dIIL4q42jhrf7PXqv/Zc/qfzpk9QchEUZGR7/LKG2535T3fCTueTtP7l/4ionTycNej60WhG/Fs7h88i4uSzbFirvrc+6uhyuV1krBeyuhymJuQ5Nx2Pv77QpIbelDMoP0gTY0lm0Yb8DSEhyGx/W6pqxnZtooGJ6FzUxzKZjeMAqmowFqpVkguTKMoDSV2IgdvCwvLt4qGFgFP5F3MuH2fzPhztr4iZ2dEmJEtmz8isj4z4deHz+0EBEqkS2KiFCtzNvhyoznFZ9Vw5+wWJywqAjIqiGg0eBw5HYgKLGF808J+NjL22b3hdGsrG9KDpJMHrdzkJwWGHqmBIaWLz+5SigbYaISuUN6KBtvomp0a6mmW7OgrXLb82UxNYeKYsijITVHeng1iAEBu1aPibV6t4C6poBSa3X/2PHhUECRQdbngv3j094fX1L1GSK+EXfIGpHt+eldINjS9aakkRZRYUd1tuSR1wPoi1+2PDIccpy15JEJOEElnQ1d81Bum0Euodwd4Lhk98tE8XMqUfz6wO4/Zll52f1C+Zb7fAsnlmMTqQiSdUPsmqTNrmlm+N7Q4ygMwZ2o7BoVzPLLF6CynL9cBpjcKSLFWIgUCyRNZP/7qijLdmR/ctl8L4eLlwCRqjq9qs5cCY/WiL8UidBZyhpwLiIS2qGz67Y1QIkZIyRPT3JYdU4NqyzJk83VkXt71II5uODkejYEH1C3A62zWdh5nL4lFhHPtr5FRjxDzZ4NTEJIjqlhJiW04iihCN+EAcjgohRYlTFuVtUramwDeHK/Xblvdv6t6zoTud/qdU3mXREZ9Vg77Dy0hEAIW4+W8En8vIrm6ExhAkSCgyWFgV/FCvWFg4Xmf6ENfEsk8O0pjTvAt0wHvu27/wt7pWgqpACx+H7jo5ldHRffESJUhyOfr5zLLxDV+e5Ngic8Fs7dIkVxV+6QInbXqNc/3mcrvE/WKX0glSB67kAmzaeoPQdyVhM+ytP7WVzivA4JkqW/+6nRNJyXpvHuYj041opGoQ7OSaoqfJRtKkF5FYIa2bzM/DZhHyd9nfmt9Zlfkl9/2B8/DkPqVdY1En9drFIC/0OTT0XXDSoO4FOMOiwO4F7VYU5PGJZMawXcMvt24alnrHQzWqLw3EcJRP+IOSenVszxvheqE12An01i77BSpUwsiOJOIFl6cLU5/39hSPZ9CgC4JcJOcrGWFO6gcdn35WCCpdVFvB8sRaDynxfwonRouxAGC81ztqA2JRHsS06b0tQ5fn8r9TcXujQW85hIFP0NpLZSMoWvCWCu4MPRwFzeVF3DAe1A3kj5e7+1uHakGTwb8fd2yuwSoWFwCIkB4x88UodY+vUp6aPx4CkBAIyLwwkXh3g9pJJP8GjyCbYBfIJhxCkG9jyMa5efetjCe+naNcBWICc98t+czvZv/uBxMgXDvLCI204WA16oSOakYViNv4tJNX5K6Eq+BmPHIqz7e6vSMwEGYU25XawRlxpK/vWjWI01KwYpKmKsGLyoqEkGsgZB0WEQ5AYHQWV7EJR4iITKIEhZJPEzMZg5AoVI71Fi8fKAPrjs+hFLupL5++DT+xl2CPL8v5/REIcADTGIV/bxBWoR5vdGAGUR3pMRVIERW+Nn/9aYQ1PLRbIMwPvQLJJDA/BsHUM6W2j6+sRXDyK5EUTdDQtLEQGf9bCwSc+47+IZR6RW0qT6SvWYo9ATjdKp4YuE1FCEL8q8wmFrBVCL629J0NhiJwCs+kp5oX4aVl8Vhmab9dxIzTZCVYmxb/G2VVSJElOe2jDujEjk+NgdCFbGG+OJe2NMp/1U46RUsDJufjd3LmtNQ1EUXrmOo0DHkUvHKVLGoSLjFMRxKNj3fwQ/aFOT7JN9OWnUR1Da03PWXvv/N2R9UM0FW/LAzBOCRCRcsFSPRAQ39e3OGxe9UOVVF6oYC2GhvhBWtAl76JJf7FDGlMwOIgJlNKmW4KdasjbYatJg23TvIpHzLpIPlNouz3cwXqHUlnZLbdjDeHEaHEptYFfuvRVUzMr9lQUzt7jVNLhekFRECcsMNGkVWl5imH0MNL8dBpousf2GLDFwYvvetLfpAUGorNeKyvolt9g+7bQoPnxpMfmSKmXk07FRPp6RDxalxf1tMlPDjU7y7Cgt9kAliztMw4EO8elnPu40HAK+4RA3DQeyuGPrvhUA4BHrv9oqyXe6SvIyjDfy47KiB/rucQlBi73w1WIXjBa7vnw/A22LXEuEbKkDhD4kmoqKxv1kIlXIiylrf/dTFpSmndqFYeOblmjVtL6A3/h2c02wv6n+IgRbJbybEmzt8G4DjiwdMvxgkgkSjR6uCd5OEmaYyGV5COugyv4ktg9tUhZD8ep8EqPdO2vM/e6NNQz3zgr2mkY21iw/Wd+Y3ln7mgZ/JfFFyojr/IVqa7+tOpDZzrT9eDsfo1aZza/g4RH7ZPeIsbDiowwZjnrlEev+q+kG3zRlNEEfa1oXGEwZLybNmUGv4poM7Xoq17qcbbQsn21sHh6yoHtvfMDntHbcG73XiJPOoUyb0vRQLnv3RjRl4KCcX5zuDuWz3juCz8eTHfF/t4pfOJkHkrUluDUxD0pv9JCrHj5pYPDktzhUSHUSgSs/nl8SN2hIAlHmax3Wp70aMBP76bFnhPOuNcMWjn2o+SDtFVqJwUbNwqv7fp9WmP1d+UT4ZPb7wOEEWtidQLlJttfYCdTiUM1YbUjQStd9qaZs6yVojWRBa456vf+M1MrPCOPDsWUlm0NW8ubOSiISfgtZCZpBPJqsxL3RHS4vMwCEUqZjv9HkhT5rHrS/oHE3fU7cIA4+fcYIM+u/qURV7koUDNtCwSFcp6+2E1fQGApBo5UQxFUvcczawkzIDu5dsk0t9XwprOBxi0t2XEjU53m89yJP5F7keN4W1KiomFyaxA+C/dLkH+ew9XP/nLoeOHvjlTanZs7ey8PZW/4ZPMLxWLuxPNZyKZnbOpO5yFIKoskcRb4fKY87dxbH75s8rjIT2+2rNzLHW65VVGoGiEyo8RX44T9y/b9a8KNk4U9/LSlleKrMB6Npa8JfS54e71RpKyYmyMp3M/KfwE3F7genYhh39daiypnn2Zmya/SLR5X7WzusTnW7teOJlJQZFgWGm82Jn2OLAVicErof49gyViVoaGBXxEQCRGW8ImYtQ1T8GiI+0WcouHY342pdwEkUhDXmQbIoyrSKVlEU1ajC5P3TkuNrVKTB83lWZ2F2V1VElaq2uieN1Z1VpfoXi+H+90a6utaZ0gp6fahrrZ2GlJzUtbADbnXrWklT16pIXauAUtIgza4/91uWZHZNtOT6kClXIByg/vq9dMaMa5Wh6ULFMJLhnVv5VoRWiSBhSVxU+SeTfeThSMSeEJKNu4WkRlOw9c0XvxjyxTQk+SJnUTPV9uHH1Khd/z3jZOXP4/qf8FkFubauggSuV9/9oEku4TOVyCX6wqiBi5lN628a7poIaRUE7n35n3+zWPfWbG3ljsBiGaYrTVjM1JamtR+vWluLZT5+axFL0l+RoVJyEnoqTA3nR/8QwxcdO/rjxOVfzccp3ah7mhi889Vxmlf9Ox/V45NlMj98u0GPv94JAvLusBzxOCWYjQDORys3g9EKaLSSEAJ4F8BbNQDe9kTOrdmetTTbZWsit7zVT+RWRLMtxALroVgATtlyotQ++7f3Ux9cV8hcLUDPgpXvD1qlg3CQHzRNlppI636wt2TmzupiTTQZmupiWM5nDDJPf/RvwM+mP/Oz6br7TdjKARmUAVlpFs57Rcf2zTTvectWiyqXu9KG92ZNUAle6ubEB5Xg7vycaYkDZebo/Ny41nnWQ8SByrrOQ+VUVRZCp5uK9GpBoQ3kH+zxdGSQX9sJOFWJhlOVE3Ihx6miPYcm59ZsKoCkPd6VIjOwM9s/+csBUIn5I5uJG2hOSEYl+tSqMT61PIPBL3IvCUgjpC6Q0snfEHThmOX358nK77LcCNreK1FQcb3XTN17TY822mMCMWPD/A5J7QWk++7ZMC/a8RXoUSooKXsQ2MLEOC57jOPynXFccYzj+KMy9tarjFGKltI3qKIFrRkMm/EgTMhBKBFc9SXv/2COza5OSWejvUxl14yc9zUj5YAcqfiACl0coEIhQuDpHSp0hTESoK1z49bdZIo8mkyPmIVlHKoQCsBSVsdFRB1nhrRsXC/52grejoeHBGAYWXzaKnIpdLKl1CVbuq2i03DzUp7jU1wEeSNbqjnZErmoWoS/P5qLqiD8fbMS5O3eNiQm/sr0If0LDemrrULI5bt67f9GKfZ0dQNLV3b6VyXcm4P0zW3B9IeGzblj8blQLn2/2/TATJvavd93u9J/t2l6hR1kglZ+7RoN+8TDM+WMnWO7FhbIvRlRGH7TqOvuEbOP4/eHCQv0tYoa193hT0Sj9rt21P4buFRXQB0a1NQAAAAASUVORK5CYII=";

// src/extension/components/ReferenceWindow/ReferenceWindow.tsx
var Container = styled_components_browser_esm_default.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  cursor: pointer;
  overflow: hidden;
  border-radius: ${({ minimized }) => minimized ? "2px" : "4px"};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 6px rgba(0, 0, 0, 0.15);
`;
var Canvas3 = styled_components_browser_esm_default.canvas`
  display: block;
  width: ${({ width, height }) => width > height ? "auto" : "100%"};
  height: ${({ width, height }) => height > width ? "auto" : "100%"};
`;
var staticAnimation = Ue`
  0% { transform: translate(0,0) }
  10% { transform: translate(-5%,-5%) }
  20% { transform: translate(-10%,5%) }
  30% { transform: translate(5%,-10%) }
  40% { transform: translate(-5%,15%) }
  50% { transform: translate(-10%,5%) }
  60% { transform: translate(15%,0) }
  70% { transform: translate(0,10%) }
  80% { transform: translate(-15%,0) }
  90% { transform: translate(10%,5%) }
  100% { transform: translate(5%,0) }
`;
var Static = styled_components_browser_esm_default.div`
  position: relative;
  display: flex;
  width: 200px;
  height: 120px;
  padding: 18px;

  ::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: #2f2f2f url(${noise_transparent_default}) repeat 0 0;
    animation: ${staticAnimation} 0.2s infinite;
  }
`;
var Warning = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  text-align: center;
  opacity: 0.8;
`;
var ReferenceWindow = ({
  maxHeight,
  maxWidth,
  minimized,
  onToggleMinified
}) => {
  var _a, _b;
  const canvasRef = (0, import_react19.useRef)(null);
  const [gl] = useExtensionStore_default((state) => [state.gl], import_shallow4.default);
  const [ref, { width: origWidth, height: origHeight }] = web_default();
  const preserveDrawingBuffer = (_b = (_a = gl == null ? void 0 : gl.getContextAttributes()) == null ? void 0 : _a.preserveDrawingBuffer) != null ? _b : false;
  (0, import_react19.useLayoutEffect)(() => {
    if (gl) {
      ref(gl == null ? void 0 : gl.domElement);
    }
  }, [gl, ref]);
  const [width, height] = (0, import_react18.useMemo)(() => {
    if (!gl)
      return [0, 0];
    const aspectRatio = origWidth / (origHeight || Number.EPSILON) || Number.EPSILON;
    const width2 = Math.min(aspectRatio * maxHeight, maxWidth);
    const height2 = width2 / aspectRatio;
    return [width2, height2];
  }, [gl, maxWidth, maxHeight, origWidth, origHeight]);
  (0, import_react19.useEffect)(() => {
    let animationHandle;
    const draw = (gl2) => () => {
      animationHandle = requestAnimationFrame(draw(gl2));
      if (!gl2.domElement || !preserveDrawingBuffer) {
        cancelAnimationFrame(animationHandle);
        return;
      }
      const ctx = canvasRef.current.getContext("2d");
      ctx.imageSmoothingQuality = "high";
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(gl2.domElement, 0, 0, width, height);
    };
    if (gl) {
      draw(gl)();
    }
    return () => {
      cancelAnimationFrame(animationHandle);
    };
  }, [gl, width, height, preserveDrawingBuffer]);
  return /* @__PURE__ */ import_react19.default.createElement(Container, {
    minimized,
    onClick: onToggleMinified,
    style: {
      width: minimized ? 32 : preserveDrawingBuffer ? `${width}px` : "auto",
      height: minimized ? 32 : preserveDrawingBuffer ? `${height}px` : "auto"
    }
  }, preserveDrawingBuffer ? /* @__PURE__ */ import_react19.default.createElement(Canvas3, {
    ref: canvasRef,
    width,
    height
  }) : /* @__PURE__ */ import_react19.default.createElement(Static, null, /* @__PURE__ */ import_react19.default.createElement(Warning, null, /* @__PURE__ */ import_react19.default.createElement(TiWarningOutline, {
    size: "3em"
  }), /* @__PURE__ */ import_react19.default.createElement("code", null, "Please set ", /* @__PURE__ */ import_react19.default.createElement("pre", null, `gl={{ preserveDrawingBuffer: true }}`), " on the r3f Canvas for the reference window to work."))));
};
var ReferenceWindow_default = ReferenceWindow;

// src/extension/components/SnapshotEditor.tsx
var GlobalStyle = We`
  :host {
    contain: strict;
    all: initial;
    color: white;
    font: 11px -apple-system, BlinkMacSystemFont, Segoe WPC, Segoe Editor,
      HelveticaNeue-Light, Ubuntu, Droid Sans, sans-serif;
  }

  * {
    padding: 0;
    margin: 0;
    font: inherit;
    vertical-align: baseline;
    list-style: none;
  }
`;
var EditorScene = ({
  snapshotEditorSheet,
  paneId
}) => {
  var _a, _b, _c;
  const [gl, scene, camera] = useThree((store) => [store.gl, store.scene, store.camera], import_shallow5.default);
  const [editorCamera, orbitControlsRef] = useSnapshotEditorCamera(snapshotEditorSheet, paneId);
  const editorObject = getEditorSheetObject();
  const viewportLighting = (_a = useVal(editorObject == null ? void 0 : editorObject.props.viewport.lighting)) != null ? _a : "physical";
  (0, import_react20.useEffect)(() => {
    if (gl && scene && camera) {
      gl.physicallyCorrectLights = viewportLighting === "physical";
      gl.compile(scene, camera);
    }
  }, [gl, viewportLighting, scene, camera]);
  const helpersRoot = useExtensionStore_default((state) => state.helpersRoot, import_shallow5.default);
  const showGrid = (_b = useVal(editorObject == null ? void 0 : editorObject.props.viewport.showGrid)) != null ? _b : true;
  const showAxes = (_c = useVal(editorObject == null ? void 0 : editorObject.props.viewport.showAxes)) != null ? _c : true;
  const grid = (0, import_react20.useMemo)(() => new InfiniteGridHelper(), []);
  return /* @__PURE__ */ import_react21.default.createElement(DragDetectorProvider, null, showGrid && /* @__PURE__ */ import_react21.default.createElement("primitive", {
    object: grid
  }), showAxes && /* @__PURE__ */ import_react21.default.createElement("axesHelper", {
    args: [500]
  }), editorCamera, /* @__PURE__ */ import_react21.default.createElement("primitive", {
    object: helpersRoot
  }), /* @__PURE__ */ import_react21.default.createElement(ProxyManager_default, {
    orbitControlsRef
  }), /* @__PURE__ */ import_react21.default.createElement("color", {
    attach: "background",
    args: [0.24, 0.24, 0.24]
  }));
};
var Wrapper = styled_components_browser_esm_default.div`
  tab-size: 4;
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  margin: 0;
  // box-shadow:0px 2px 10px #0000002b;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;
var CanvasWrapper = styled_components_browser_esm_default.div`
  position: relative;
  z-index: 0;
  height: 100%;
  // overflow: hidden;
`;
var Overlay = styled_components_browser_esm_default.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
`;
var Tools = styled_components_browser_esm_default.div`
  position: absolute;
  left: 12px;
  top: 12px;
  pointer-events: auto;
`;
var ReferenceWindowContainer = styled_components_browser_esm_default.div`
  position: absolute;
  right: 12px;
  top: 12px;
  justify-content: center;
`;
var WaitForSceneInitMessage = styled_components_browser_esm_default.div`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  width: 300px;
  top: 12px;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(14px);
  background: rgba(40, 43, 47, 0.8);

  @supports not (backdrop-filter: blur()) {
    background-color: rgba(40, 43, 47, 0.95);
  }
`;
var SnapshotEditor = (props) => {
  var _a, _b;
  const snapshotEditorSheet = getEditorSheet();
  const paneId = props.paneId;
  const editorObject = getEditorSheetObject();
  const [ref, bounds] = web_default();
  const [sceneSnapshot, createSnapshot] = useExtensionStore_default((state) => [state.sceneSnapshot, state.createSnapshot], import_shallow5.default);
  (0, import_react20.useLayoutEffect)(() => {
    createSnapshot();
  }, []);
  const onPointerMissed = (0, import_react20.useCallback)(() => {
    const obj = import_studio6.default.selection.find((sheetOrObject) => import_r3f3.__private_allRegisteredObjects.has(sheetOrObject));
    if (obj) {
      import_studio6.default.setSelection([obj.sheet]);
    }
  }, []);
  const [toolsContainer, setToolsContainer] = (0, import_react20.useState)();
  (0, import_react20.useEffect)(() => {
    if (!toolsContainer)
      return;
    return import_studio6.default.ui.renderToolset("snapshot-editor", toolsContainer);
  }, [toolsContainer]);
  if (!editorObject)
    return /* @__PURE__ */ import_react21.default.createElement(import_react21.default.Fragment, null);
  const referenceWindowVisibility = (_b = useVal((_a = getEditorSheetObject()) == null ? void 0 : _a.props.viewport.referenceWindow)) != null ? _b : "minimized";
  return /* @__PURE__ */ import_react21.default.createElement(import_styled_components2.default.div, {
    style: { overflow: "hidden" }
  }, /* @__PURE__ */ import_react21.default.createElement(ye, {
    disableVendorPrefixes: true
  }, /* @__PURE__ */ import_react21.default.createElement(import_react21.default.Fragment, null, /* @__PURE__ */ import_react21.default.createElement(GlobalStyle, null), /* @__PURE__ */ import_react21.default.createElement(Wrapper, null, /* @__PURE__ */ import_react21.default.createElement(Overlay, null, /* @__PURE__ */ import_react21.default.createElement(Tools, {
    ref: setToolsContainer
  }), referenceWindowVisibility !== "hidden" && /* @__PURE__ */ import_react21.default.createElement(ReferenceWindowContainer, null, /* @__PURE__ */ import_react21.default.createElement(ReferenceWindow_default, {
    maxHeight: Math.min(bounds.height * 0.3, 150),
    maxWidth: Math.min(bounds.width * 0.3, 250),
    minimized: referenceWindowVisibility === "minimized",
    onToggleMinified: () => {
      import_studio6.default.transaction(({ set }) => {
        set(getEditorSheetObject().props.viewport.referenceWindow, referenceWindowVisibility === "minimized" ? "maximized" : "minimized");
      });
    }
  })), !sceneSnapshot && /* @__PURE__ */ import_react21.default.createElement(WaitForSceneInitMessage, null, "The scene hasn't been initialized yet. It will appear in the editor as soon as it is.")), /* @__PURE__ */ import_react21.default.createElement(CanvasWrapper, {
    ref
  }, /* @__PURE__ */ import_react21.default.createElement(Canvas, {
    onCreated: ({ gl }) => {
      gl.setClearColor("white");
    },
    shadows: true,
    dpr: [1, 2],
    frameloop: "demand",
    onPointerMissed
  }, /* @__PURE__ */ import_react21.default.createElement(EditorScene, {
    snapshotEditorSheet,
    paneId
  })))))));
};
var SnapshotEditor_default = SnapshotEditor;

// src/extension/index.ts
var import_dataverse3 = __toModule(require("@theatre/dataverse"));
var import_react_dom2 = __toModule(require_react_dom());
var import_react23 = __toModule(require_react());
var io5CameraOutline = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Camera</title><path d="M350.54 148.68l-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 00-32 32v192a32 32 0 0032 32h352a32 32 0 0032-32V192a32 32 0 00-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="256" cy="272" r="80" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M124 158v-22h-24v22"/></svg>`;
var gameIconMove = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 34.47l-90.51 90.51h67.883v108.393H124.98V165.49L34.47 256l90.51 90.51v-67.883h108.393V387.02H165.49L256 477.53l90.51-90.51h-67.883V278.627H387.02v67.883L477.53 256l-90.51-90.51v67.883H278.627V124.98h67.883L256 34.47z"/></svg>`;
var gameIconClockwiseRotation = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M263.09 50c-11.882-.007-23.875 1.018-35.857 3.13C142.026 68.156 75.156 135.026 60.13 220.233 45.108 305.44 85.075 391.15 160.005 434.41c32.782 18.927 69.254 27.996 105.463 27.553 46.555-.57 92.675-16.865 129.957-48.15l-30.855-36.768c-50.95 42.75-122.968 49.05-180.566 15.797-57.597-33.254-88.152-98.777-76.603-164.274 11.55-65.497 62.672-116.62 128.17-128.168 51.656-9.108 103.323 7.98 139.17 43.862L327 192h128V64l-46.34 46.342C370.242 71.962 317.83 50.03 263.09 50z"/></svg>`;
var gameIconResize = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M29 30l1 90h36V66h26V30H29zm99 0v36h72V30h-72zm108 0v36h72V30h-72zm108 0v36h72V30h-72zm102 0v78h36V30h-36zm-206 80v36h100.543l-118 118H30v218h218V289.457l118-118V272h36V110H240zm206 34v72h36v-72h-36zM30 156v72h36v-72H30zm416 96v72h36v-72h-36zm0 108v72h36v-72h-36zm-166 86v36h72v-36h-72zm108 0v36h72v-36h-72z"/></svg>`;
var boxIconsGlobe = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z"></path></svg>`;
var boxIconsCube = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z"></path></svg>`;
var gameIconsCube = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 24.585L51.47 118.989 256 213.394l204.53-94.405zM38.998 133.054v258.353L247 487.415V229.063zm434.004 0L265 229.062v258.353l208.002-96.008z"></path></svg>`;
var fontAwesomeCube = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z"></path></svg>`;
var gameIconsIceCube = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M238.406 26.844c-9.653.12-18.926 2.69-30.437 7.062l-157.282 57c-20.984 7.65-21.587 11.834-22.344 33.28L20.937 358.22c-1.207 27.514-.654 33.187 23.25 43.56L229.97 483.19c19.34 8.29 31.906 7.655 45.186 3.218l181.938-56.53c21.95-7.295 25.04-9.627 25.875-36.845l7.686-250.155c.662-17.37-5.667-24.695-18.78-29.625L271.062 34.375c-12.977-5.344-23.003-7.653-32.657-7.53zm.813 24.875c23.637-.053 45.564 8.434 87.874 24.874 95.545 37.123 131.71 53.8 69.687 77.937-74.002 28.802-128.175 45.115-172.28 25.814L113.47 131.75c-34.57-15.127-44.69-27.46 17.843-50.094 55.64-20.14 82.742-29.882 107.906-29.937zm44.718 43.75c-38.284.402-55.285 21.205-56.813 38.936-.873 10.132 2.95 19.6 12.406 26.25 9.456 6.65 25.355 10.56 48.97 5.938 35.817-7.01 61.536-15.056 77.5-22.844 7.982-3.894 13.464-7.737 16.5-10.844 3.036-3.107 3.453-4.942 3.438-6-.016-1.057-.44-2.675-3.313-5.406-2.873-2.73-8.03-6.04-15.22-9.156-14.378-6.233-36.757-11.877-65.717-15.72-6.355-.842-12.28-1.213-17.75-1.155zM59.25 134c10.372-.29 29.217 7.2 63.906 22.656 140.925 62.786 140.52 65.876 130.97 200.656-7.783 109.81-8.797 109.85-128.47 59.282-73.15-30.91-86.806-40.853-85.187-88.97l5.468-162.937c.674-20.034 1.557-30.358 13.312-30.687zm381.938 30.906c29.172-.384 29.1 28.075 26.75 105.25-4.118 135.132-9.05 140.184-120.375 173.72-70.42 21.21-81.49 25.614-78.97-12.032l11-164.156c3.217-48.034 7.588-51.508 94.813-83.907 31.323-11.633 52.534-18.686 66.78-18.874zm-20.438 40.688c-.332-.002-.674.015-1 .03-5.22.263-10.226 2.77-14.188 8.407-3.96 5.638-6.81 14.71-5.687 27.907 1.448 17.033-4.507 38.11-15.156 56.938-10.65 18.827-26.502 35.91-47.814 38.813-29.127 3.968-42.41 23.58-43.5 42.062-.545 9.24 2.108 18.03 7.688 24.594s14.088 11.335 27.187 12.03c41.146 2.185 71.336-10.766 91.595-39.155 20.26-28.39 30.396-73.76 25.875-136.595-1.876-26.076-14.708-34.977-25-35.03zm-246.25 8.844c-.644 0-1.218.063-1.72.187-2.003.494-3.685 1.53-5.655 4.813-1.913 3.186-3.688 8.618-4.406 16.343l-.064.657c-1.388 16.732-8.098 28.602-17.844 35.063-9.745 6.46-20.794 7.808-31.125 9.094-10.33 1.286-20.177 2.39-28.156 5.75-7.977 3.36-14.36 8.38-19.468 19.78-7.2 16.076-7.143 28.027-3.124 38.563 4.018 10.537 12.688 20.106 24.687 28.75 23.998 17.29 60.27 29.956 88.906 41.844 11.386 4.727 20.496 6.484 27.282 6.126 6.787-.358 11.278-2.423 15.375-6.562 8.195-8.28 14.057-27.692 15-57.344 2.024-63.623-18.84-110.284-38.656-130.875-8.668-9.008-16.52-12.193-21.03-12.188zm184.22 6.812c-.95-.003-1.927.035-2.97.094-35.464 1.99-48.477 12.867-52.5 24.062-4.023 11.196.826 27.07 10.844 39.78 11.488 14.58 20.59 15.736 30.437 12.283 9.848-3.455 20.542-14.108 27.376-26.908s9.512-27.397 7.188-36.28c-1.163-4.443-3.144-7.422-6.47-9.626-2.908-1.928-7.274-3.388-13.905-3.406z"></path></svg>`;
var r3fExtension = {
  id: "@theatre/r3f",
  toolbars: {
    global(set, studio7) {
      const calc = (0, import_dataverse3.prism)(() => {
        const editorObject = getEditorSheetObject();
        return [
          {
            type: "Icon",
            title: "Create Snapshot",
            svgSource: io5CameraOutline,
            onClick: () => {
              studio7.createPane("snapshot");
            }
          }
        ];
      });
      return calc.tapImmediate(import_dataverse3.Ticker.raf, () => {
        set(calc.getValue());
      });
    },
    "snapshot-editor": (set, studio7) => {
      const { createSnapshot } = useExtensionStore_default.getState();
      const calc = (0, import_dataverse3.prism)(() => {
        var _a, _b, _c;
        const editorObject = getEditorSheetObject();
        const transformControlsMode = (_a = (0, import_dataverse3.val)(editorObject == null ? void 0 : editorObject.props.transformControls.mode)) != null ? _a : "translate";
        const transformControlsSpace = (_b = (0, import_dataverse3.val)(editorObject == null ? void 0 : editorObject.props.transformControls.space)) != null ? _b : "world";
        const viewportShading = (_c = (0, import_dataverse3.val)(editorObject == null ? void 0 : editorObject.props.viewport.shading)) != null ? _c : "rendered";
        return [
          {
            type: "Icon",
            onClick: createSnapshot,
            title: "Refresh Snapshot",
            svgSource: `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`
          },
          {
            type: "Switch",
            value: transformControlsMode,
            onChange: (value) => studio7.transaction(({ set: set2 }) => set2(editorObject.props.transformControls.mode, value)),
            options: [
              {
                value: "translate",
                label: "Tool: Translate",
                svgSource: gameIconMove
              },
              {
                value: "rotate",
                label: "Tool: Rotate",
                svgSource: gameIconClockwiseRotation
              },
              {
                value: "scale",
                label: "Tool: Scale",
                svgSource: gameIconResize
              }
            ]
          },
          {
            type: "Switch",
            value: transformControlsSpace,
            onChange: (space) => studio7.transaction(({ set: set2 }) => {
              set2(editorObject.props.transformControls.space, space);
            }),
            options: [
              {
                value: "world",
                label: "Space: World",
                svgSource: boxIconsGlobe
              },
              {
                value: "local",
                label: "Space: Local",
                svgSource: boxIconsCube
              }
            ]
          },
          {
            type: "Switch",
            value: viewportShading,
            onChange: (shading) => studio7.transaction(({ set: set2 }) => {
              set2(editorObject.props.viewport.shading, shading);
            }),
            options: [
              {
                value: "wireframe",
                label: "Display: Wireframe",
                svgSource: boxIconsCube
              },
              {
                value: "flat",
                label: "Display: Flat",
                svgSource: gameIconsCube
              },
              {
                value: "solid",
                label: "Display: Solid",
                svgSource: fontAwesomeCube
              },
              {
                value: "rendered",
                label: "Display: Rendered",
                svgSource: gameIconsIceCube
              }
            ]
          }
        ];
      });
      return calc.tapImmediate(import_dataverse3.Ticker.raf, () => {
        set(calc.getValue());
      });
    }
  },
  panes: [
    {
      class: "snapshot",
      mount: ({ paneId, node }) => {
        import_react_dom2.default.render(import_react23.default.createElement(SnapshotEditor_default, { paneId }), node);
        function unmount() {
          import_react_dom2.default.unmountComponentAtNode(node);
        }
        return unmount;
      }
    }
  ]
};
var extension_default = r3fExtension;
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v0.26.2
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=index.js.map
