/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".button {\\n    background-color: #4CAF50;\\n    border: none;\\n    color: white;\\n    padding: 15px 32px;\\n    text-align: center;\\n    text-decoration: none;\\n    display: inline-block;\\n    font-size: 16px;\\n    margin: 4px 2px;\\n    cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/ow-lite/index.js":
/*!***************************************!*\
  !*** ./node_modules/ow-lite/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst symbols = __webpack_require__(/*! ./lib/symbols */ \"./node_modules/ow-lite/lib/symbols.js\")\nconst number = __webpack_require__(/*! ./lib/number */ \"./node_modules/ow-lite/lib/number.js\")\nconst string = __webpack_require__(/*! ./lib/string */ \"./node_modules/ow-lite/lib/string.js\")\nconst object = __webpack_require__(/*! ./lib/object */ \"./node_modules/ow-lite/lib/object.js\")\n\nconst typePredicates = {\n  number,\n  string,\n  object\n}\n\nconst createOw = ({\n  validators = [],\n  predicates = typePredicates,\n  type = null\n} = { }) => {\n  const ow = new Proxy(function () { }, {\n    get: (obj, key) => {\n      if (key === symbols.validate) {\n        return (value, label = 'argument') => {\n          if (!type) {\n            return new Error('missing required type specifier')\n          }\n\n          for (let i = 0; i < validators.length; ++i) {\n            const validator = validators[i]\n            const result = validator.fn(value)\n\n            if (!result) {\n              if (i === 0) {\n                throw new Error(`Expected ${label} \\`${value}\\` to be of type \\`${type}\\`, but received type \\`${typeof value}\\``)\n              } else {\n                throw new Error(`Expected ${type} \\`${label}\\` \\`${value}\\` failed predicate \\`${validator.key}\\``)\n              }\n            }\n          }\n        }\n      }\n\n      const predicate = predicates[key]\n\n      if (predicate) {\n        if (typeof predicate === 'function') {\n          validators.push({\n            key,\n            fn: predicate\n          })\n\n          return ow\n        } else {\n          return createOw({\n            type: key,\n            validators: [\n              {\n                key,\n                fn: predicate.validator\n              }\n            ],\n            predicates: predicate.predicates\n          })\n        }\n      } else {\n        const fn = predicates[symbols.func] && predicates[symbols.func][key]\n\n        if (fn) {\n          return new Proxy(function () { }, {\n            get: () => {\n              throw new Error(`invalid use of functional predicate \"${key}\"`)\n            },\n\n            apply: (obj, thisArg, args) => {\n              validators.push({\n                key,\n                fn: fn(...args)\n              })\n\n              return ow\n            }\n          })\n        } else {\n          if (key === 'default' || key === '__esModule') {\n            return ow\n          }\n\n          return ow\n          // throw new Error(`unrecognized predicate \"${key}\"`)\n        }\n      }\n    },\n\n    apply: (obj, thisArg, args) => {\n      if (args.length !== 2 && args.length !== 3) {\n        throw new Error('invalid number of arguments to \"ow\"')\n      } else {\n        args[1][symbols.validate](args[0], args[2])\n      }\n    }\n  })\n\n  return ow\n}\n\nmodule.exports = createOw()\n\n\n//# sourceURL=webpack:///./node_modules/ow-lite/index.js?");

/***/ }),

/***/ "./node_modules/ow-lite/lib/number.js":
/*!********************************************!*\
  !*** ./node_modules/ow-lite/lib/number.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst { func } = __webpack_require__(/*! ./symbols */ \"./node_modules/ow-lite/lib/symbols.js\")\n\nconst numberPredicates = {\n  positive: (value) => (value > 0),\n  negative: (value) => (value < 0),\n  nonNegative: (value) => (value >= 0),\n  integer: (value) => (value === (value | 0)),\n\n  [func]: {\n    is: (fn) => fn,\n    eq: (v) => (value) => (value === v),\n    gt: (v) => (value) => (value > v),\n    gte: (v) => (value) => (value >= v),\n    lt: (v) => (value) => (value < v),\n    lte: (v) => (value) => (value <= v)\n  }\n}\n\nmodule.exports = {\n  predicates: numberPredicates,\n  validator: (value) => {\n    return typeof value === 'number'\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/ow-lite/lib/number.js?");

/***/ }),

/***/ "./node_modules/ow-lite/lib/object.js":
/*!********************************************!*\
  !*** ./node_modules/ow-lite/lib/object.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst { func } = __webpack_require__(/*! ./symbols */ \"./node_modules/ow-lite/lib/symbols.js\")\n\nconst objectPredicates = {\n  plain: (value) => {\n    if (typeof value !== 'object') return false\n\n    const proto = Object.getPrototypeOf(value)\n    return proto === null || proto === Object.getPrototypeOf({})\n  },\n  empty: (value) => Object.keys(value).length === 0,\n  nonEmpty: (value) => Object.keys(value).length > 0,\n\n  [func]: {\n    is: (fn) => fn,\n    instanceOf: (v) => (value) => (value instanceof v)\n  }\n}\n\nmodule.exports = {\n  predicates: objectPredicates,\n  validator: (value) => {\n    return typeof value === 'object'\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/ow-lite/lib/object.js?");

/***/ }),

/***/ "./node_modules/ow-lite/lib/string.js":
/*!********************************************!*\
  !*** ./node_modules/ow-lite/lib/string.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst { func } = __webpack_require__(/*! ./symbols */ \"./node_modules/ow-lite/lib/symbols.js\")\n\nconst stringPredicates = {\n  empty: (value) => (value === ''),\n  nonEmpty: (value) => (value !== ''),\n\n  [func]: {\n    is: (fn) => fn,\n    eq: (v) => (value) => (value === v),\n    length: (v) => (value) => (value.length === v),\n    minLength: (v) => (value) => (value.length >= v),\n    maxLength: (v) => (value) => (value.length <= v),\n    matches: (v) => (value) => v.test(value),\n    startsWith: (v) => (value) => value.startsWith(v),\n    endsWith: (v) => (value) => value.endsWith(v)\n  }\n}\n\nmodule.exports = {\n  predicates: stringPredicates,\n  validator: (value) => {\n    return typeof value === 'string'\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/ow-lite/lib/string.js?");

/***/ }),

/***/ "./node_modules/ow-lite/lib/symbols.js":
/*!*********************************************!*\
  !*** ./node_modules/ow-lite/lib/symbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.func = Symbol('func')\nexports.validate = Symbol('validate')\n\n\n//# sourceURL=webpack:///./node_modules/ow-lite/lib/symbols.js?");

/***/ }),

/***/ "./node_modules/random/dist/distributions/bates.js":
/*!*********************************************************!*\
  !*** ./node_modules/random/dist/distributions/bates.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _owLite = __webpack_require__(/*! ow-lite */ \"./node_modules/ow-lite/index.js\");\n\nvar _owLite2 = _interopRequireDefault(_owLite);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (random) {\n  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n\n  (0, _owLite2.default)(n, _owLite2.default.number.integer.positive);\n  var irwinHall = random.irwinHall(n);\n\n  return function () {\n    return irwinHall() / n;\n  };\n};\n//# sourceMappingURL=bates.js.map\n\n//# sourceURL=webpack:///./node_modules/random/dist/distributions/bates.js?");

/***/ }),

/***/ "./node_modules/random/dist/distributions/bernoulli.js":
/*!*************************************************************!*\
  !*** ./node_modules/random/dist/distributions/bernoulli.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _owLite = __webpack_require__(/*! ow-lite */ \"./node_modules/ow-lite/index.js\");\n\nvar _owLite2 = _interopRequireDefault(_owLite);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (random) {\n  var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;\n\n  (0, _owLite2.default)(p, _owLite2.default.number.gte(0).lt(1));\n\n  return function () {\n    return random.next() + p | 0;\n  };\n};\n//# sourceMappingURL=bernoulli.js.map\n\n//# sourceURL=webpack:///./node_modules/random/dist/distributions/bernoulli.js?");

/***/ }),

/***/ "./node_modules/random/dist/distributions/binomial.js":
/*!************************************************************!*\
  !*** ./node_modules/random/dist/distributions/binomial.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _owLite = __webpack_require__(/*! ow-lite */ \"./node_modules/ow-lite/index.js\");\n\nvar _owLite2 = _interopRequireDefault(_owLite);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (random) {\n  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  var p = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;\n\n  (0, _owLite2.default)(n, _owLite2.default.number.positive.integer);\n  (0, _owLite2.default)(p, _owLite2.default.number.gte(0).lte(1));\n\n  return function () {\n    var i = 0;\n    var x = 0;\n\n    while (i++ < n) {\n      x += random.next() < p;\n    }\n\n    return x;\n  };\n};\n//# sourceMappingURL=binomial.js.map\n\n//# sourceURL=webpack:///./node_modules/random/dist/distributions/binomial.js?");

/***/ }),

/***/ "./node_modules/random/dist/distributions/exponential.js":
/*!***************************************************************!*\
  !*** ./node_modules/random/dist/distributions/exponential.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _owLite = __webpack_require__(/*! ow-lite */ \"./node_modules/ow-lite/index.js\");\n\nvar _owLite2 = _interopRequireDefault(_owLite);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (random) {\n  var lambda = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n\n  (0, _owLite2.default)(lambda, _owLite2.default.number.positive);\n\n  return function () {\n    return -Math.log(1 - random.next()) / lambda;\n  };\n};\n//# sourceMappingURL=exponential.js.map\n\n//# sourceURL=webpack:///./node_modules/random/dist/distributions/exponential.js?");

/***/ }),

/***/ "./node_modules/random/dist/distributions/geometric.js":
/*!*************************************************************!*\
  !*** ./node_modules/random/dist/distributions/geometric.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _owLite = __webpack_require__(/*! ow-lite */ \"./node_modules/ow-lite/index.js\");\n\nvar _owLite2 = _interopRequireDefault(_owLite);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (random) {\n  var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;\n\n  (0, _owLite2.default)(p, _owLite2.default.number.gt(0).lte(1));\n  var invLogP = 1.0 / Math.log(1.0 - p);\n\n  return function () {\n    return 1 + Math.log(random.next()) * invLogP | 0;\n  };\n};\n//# sourceMappingURL=geometric.js.map\n\n//# sourceURL=webpack:///./node_modules/random/dist/distributions/geometric.js?");

/***/ }),

/***/ "./node_modules/random/dist/distributions/irwin-hall.js":
/*!**************************************************************!*\
  !*** ./node_modules/random/dist/distributions/irwin-hall.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _owLite = __webpack_require__(/*! ow-lite */ \"./node_modules/ow-lite/index.js\");\n\nvar _owLite2 = _interopRequireDefault(_owLite);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (random) {\n  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n\n  (0, _owLite2.default)(n, _owLite2.default.number.integer.gte(0));\n\n  return function () {\n    var sum = 0;\n    for (var i = 0; i < n; ++i) {\n      sum += random.next();\n    }\n\n    return sum;\n  };\n};\n//# sourceMappingURL=irwin-hall.js.map\n\n//# sourceURL=webpack:///./node_modules/random/dist/distributions/irwin-hall.js?");

/***/ }),

/***/ "./node_modules/random/dist/distributions/log-normal.js":
/*!**************************************************************!*\
  !*** ./node_modules/random/dist/distributions/log-normal.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (random) {\n  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    args[_key - 1] = arguments[_key];\n  }\n\n  var normal = random.normal.apply(random, args);\n\n  return function () {\n    return Math.exp(normal());\n  };\n};\n//# sourceMappingURL=log-normal.js.map\n\n//# sourceURL=webpack:///./node_modules/random/dist/distributions/log-normal.js?");

/***/ }),

/***/ "./node_modules/random/dist/distributions/normal.js":
/*!**********************************************************!*\
  !*** ./node_modules/random/dist/distributions/normal.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _owLite = __webpack_require__(/*! ow-lite */ \"./node_modules/ow-lite/index.js\");\n\nvar _owLite2 = _interopRequireDefault(_owLite);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (random) {\n  var mu = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var sigma = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;\n\n  (0, _owLite2.default)(mu, _owLite2.default.number);\n  (0, _owLite2.default)(sigma, _owLite2.default.number);\n\n  return function () {\n    var x = void 0,\n        y = void 0,\n        r = void 0;\n\n    do {\n      x = random.next() * 2 - 1;\n      y = random.next() * 2 - 1;\n      r = x * x + y * y;\n    } while (!r || r > 1);\n\n    return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);\n  };\n};\n//# sourceMappingURL=normal.js.map\n\n//# sourceURL=webpack:///./node_modules/random/dist/distributions/normal.js?");

/***/ }),

/***/ "./node_modules/random/dist/distributions/pareto.js":
/*!**********************************************************!*\
  !*** ./node_modules/random/dist/distributions/pareto.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _owLite = __webpack_require__(/*! ow-lite */ \"./node_modules/ow-lite/index.js\");\n\nvar _owLite2 = _interopRequireDefault(_owLite);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (random) {\n  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n\n  (0, _owLite2.default)(alpha, _owLite2.default.number.gte(0));\n  var invAlpha = 1.0 / alpha;\n\n  return function () {\n    return 1.0 / Math.pow(1.0 - random.next(), invAlpha);\n  };\n};\n//# sourceMappingURL=pareto.js.map\n\n//# sourceURL=webpack:///./node_modules/random/dist/distributions/pareto.js?");

/***/ }),

/***/ "./node_modules/random/dist/distributions/poisson.js":
/*!***********************************************************!*\
  !*** ./node_modules/random/dist/distributions/poisson.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _owLite = __webpack_require__(/*! ow-lite */ \"./node_modules/ow-lite/index.js\");\n\nvar _owLite2 = _interopRequireDefault(_owLite);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar logFactorialTable = [0.0, 0.0, 0.69314718055994529, 1.7917594692280550, 3.1780538303479458, 4.7874917427820458, 6.5792512120101012, 8.5251613610654147, 10.604602902745251, 12.801827480081469];\n\nvar logFactorial = function logFactorial(k) {\n  return logFactorialTable[k];\n};\n\nvar logSqrt2PI = 0.91893853320467267;\n\nexports.default = function (random) {\n  var lambda = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n\n  (0, _owLite2.default)(lambda, _owLite2.default.number.positive);\n\n  if (lambda < 10) {\n    // inversion method\n    var expMean = Math.exp(-lambda);\n\n    return function () {\n      var p = expMean;\n      var x = 0;\n      var u = random.next();\n\n      while (u > p) {\n        u = u - p;\n        p = lambda * p / ++x;\n      }\n\n      return x;\n    };\n  } else {\n    // generative method\n    var smu = Math.sqrt(lambda);\n    var b = 0.931 + 2.53 * smu;\n    var a = -0.059 + 0.02483 * b;\n    var invAlpha = 1.1239 + 1.1328 / (b - 3.4);\n    var vR = 0.9277 - 3.6224 / (b - 2);\n\n    return function () {\n      while (true) {\n        var u = void 0;\n        var v = random.next();\n\n        if (v <= 0.86 * vR) {\n          u = v / vR - 0.43;\n          return Math.floor((2 * a / (0.5 - Math.abs(u)) + b) * u + lambda + 0.445);\n        }\n\n        if (v >= vR) {\n          u = random.next() - 0.5;\n        } else {\n          u = v / vR - 0.93;\n          u = (u < 0 ? -0.5 : 0.5) - u;\n          v = random.next() * vR;\n        }\n\n        var us = 0.5 - Math.abs(u);\n        if (us < 0.013 && v > us) {\n          continue;\n        }\n\n        var k = Math.floor((2 * a / us + b) * u + lambda + 0.445) | 0;\n        v = v * invAlpha / (a / (us * us) + b);\n\n        if (k >= 10) {\n          var t = (k + 0.5) * Math.log(lambda / k) - lambda - logSqrt2PI + k - (1 / 12.0 - (1 / 360.0 - 1 / (1260.0 * k * k)) / (k * k)) / k;\n\n          if (Math.log(v * smu) <= t) {\n            return k;\n          }\n        } else if (k >= 0) {\n          if (Math.log(v) <= k * Math.log(lambda) - lambda - logFactorial(k)) {\n            return k;\n          }\n        }\n      }\n    };\n  }\n};\n//# sourceMappingURL=poisson.js.map\n\n//# sourceURL=webpack:///./node_modules/random/dist/distributions/poisson.js?");

/***/ }),

/***/ "./node_modules/random/dist/distributions/uniform-boolean.js":
/*!*******************************************************************!*\
  !*** ./node_modules/random/dist/distributions/uniform-boolean.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (random) {\n  return function () {\n    return random.next() >= 0.5;\n  };\n};\n//# sourceMappingURL=uniform-boolean.js.map\n\n//# sourceURL=webpack:///./node_modules/random/dist/distributions/uniform-boolean.js?");

/***/ }),

/***/ "./node_modules/random/dist/distributions/uniform-int.js":
/*!***************************************************************!*\
  !*** ./node_modules/random/dist/distributions/uniform-int.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _owLite = __webpack_require__(/*! ow-lite */ \"./node_modules/ow-lite/index.js\");\n\nvar _owLite2 = _interopRequireDefault(_owLite);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (random, min, max) {\n  if (max === undefined) {\n    max = min === undefined ? 1 : min;\n    min = 0;\n  }\n\n  (0, _owLite2.default)(min, _owLite2.default.number.integer);\n  (0, _owLite2.default)(max, _owLite2.default.number.integer);\n\n  return function () {\n    return random.next() * (max - min + 1) + min | 0;\n  };\n};\n//# sourceMappingURL=uniform-int.js.map\n\n//# sourceURL=webpack:///./node_modules/random/dist/distributions/uniform-int.js?");

/***/ }),

/***/ "./node_modules/random/dist/distributions/uniform.js":
/*!***********************************************************!*\
  !*** ./node_modules/random/dist/distributions/uniform.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _owLite = __webpack_require__(/*! ow-lite */ \"./node_modules/ow-lite/index.js\");\n\nvar _owLite2 = _interopRequireDefault(_owLite);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (random, min, max) {\n  if (max === undefined) {\n    max = min === undefined ? 1 : min;\n    min = 0;\n  }\n\n  (0, _owLite2.default)(min, _owLite2.default.number);\n  (0, _owLite2.default)(max, _owLite2.default.number);\n\n  return function () {\n    return random.next() * (max - min) + min;\n  };\n};\n//# sourceMappingURL=uniform.js.map\n\n//# sourceURL=webpack:///./node_modules/random/dist/distributions/uniform.js?");

/***/ }),

/***/ "./node_modules/random/dist/generators/function.js":
/*!*********************************************************!*\
  !*** ./node_modules/random/dist/generators/function.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _owLite = __webpack_require__(/*! ow-lite */ \"./node_modules/ow-lite/index.js\");\n\nvar _owLite2 = _interopRequireDefault(_owLite);\n\nvar _rng = __webpack_require__(/*! ../rng */ \"./node_modules/random/dist/rng.js\");\n\nvar _rng2 = _interopRequireDefault(_rng);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar RNGFunction = function (_RNG) {\n  _inherits(RNGFunction, _RNG);\n\n  function RNGFunction(thunk, opts) {\n    _classCallCheck(this, RNGFunction);\n\n    var _this = _possibleConstructorReturn(this, (RNGFunction.__proto__ || Object.getPrototypeOf(RNGFunction)).call(this));\n\n    _this.seed(thunk, opts);\n    return _this;\n  }\n\n  _createClass(RNGFunction, [{\n    key: 'next',\n    value: function next() {\n      return this._rng();\n    }\n  }, {\n    key: 'seed',\n    value: function seed(thunk) {\n      (0, _owLite2.default)(thunk, _owLite2.default.function);\n      this._rng = thunk;\n    }\n  }, {\n    key: 'clone',\n    value: function clone() {\n      for (var _len = arguments.length, opts = Array(_len), _key = 0; _key < _len; _key++) {\n        opts[_key] = arguments[_key];\n      }\n\n      return new (Function.prototype.bind.apply(RNGFunction, [null].concat([this._rng], opts)))();\n    }\n  }, {\n    key: 'name',\n    get: function get() {\n      return 'function';\n    }\n  }]);\n\n  return RNGFunction;\n}(_rng2.default);\n\nexports.default = RNGFunction;\n//# sourceMappingURL=function.js.map\n\n//# sourceURL=webpack:///./node_modules/random/dist/generators/function.js?");

/***/ }),

/***/ "./node_modules/random/dist/random.js":
/*!********************************************!*\
  !*** ./node_modules/random/dist/random.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.RNGFactory = exports.RNG = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _owLite = __webpack_require__(/*! ow-lite */ \"./node_modules/ow-lite/index.js\");\n\nvar _owLite2 = _interopRequireDefault(_owLite);\n\nvar _rng = __webpack_require__(/*! ./rng */ \"./node_modules/random/dist/rng.js\");\n\nvar _rng2 = _interopRequireDefault(_rng);\n\nvar _rngFactory = __webpack_require__(/*! ./rng-factory */ \"./node_modules/random/dist/rng-factory.js\");\n\nvar _rngFactory2 = _interopRequireDefault(_rngFactory);\n\nvar _uniform2 = __webpack_require__(/*! ./distributions/uniform */ \"./node_modules/random/dist/distributions/uniform.js\");\n\nvar _uniform3 = _interopRequireDefault(_uniform2);\n\nvar _uniformInt2 = __webpack_require__(/*! ./distributions/uniform-int */ \"./node_modules/random/dist/distributions/uniform-int.js\");\n\nvar _uniformInt3 = _interopRequireDefault(_uniformInt2);\n\nvar _uniformBoolean2 = __webpack_require__(/*! ./distributions/uniform-boolean */ \"./node_modules/random/dist/distributions/uniform-boolean.js\");\n\nvar _uniformBoolean3 = _interopRequireDefault(_uniformBoolean2);\n\nvar _normal2 = __webpack_require__(/*! ./distributions/normal */ \"./node_modules/random/dist/distributions/normal.js\");\n\nvar _normal3 = _interopRequireDefault(_normal2);\n\nvar _logNormal2 = __webpack_require__(/*! ./distributions/log-normal */ \"./node_modules/random/dist/distributions/log-normal.js\");\n\nvar _logNormal3 = _interopRequireDefault(_logNormal2);\n\nvar _bernoulli2 = __webpack_require__(/*! ./distributions/bernoulli */ \"./node_modules/random/dist/distributions/bernoulli.js\");\n\nvar _bernoulli3 = _interopRequireDefault(_bernoulli2);\n\nvar _binomial2 = __webpack_require__(/*! ./distributions/binomial */ \"./node_modules/random/dist/distributions/binomial.js\");\n\nvar _binomial3 = _interopRequireDefault(_binomial2);\n\nvar _geometric2 = __webpack_require__(/*! ./distributions/geometric */ \"./node_modules/random/dist/distributions/geometric.js\");\n\nvar _geometric3 = _interopRequireDefault(_geometric2);\n\nvar _poisson2 = __webpack_require__(/*! ./distributions/poisson */ \"./node_modules/random/dist/distributions/poisson.js\");\n\nvar _poisson3 = _interopRequireDefault(_poisson2);\n\nvar _exponential2 = __webpack_require__(/*! ./distributions/exponential */ \"./node_modules/random/dist/distributions/exponential.js\");\n\nvar _exponential3 = _interopRequireDefault(_exponential2);\n\nvar _irwinHall2 = __webpack_require__(/*! ./distributions/irwin-hall */ \"./node_modules/random/dist/distributions/irwin-hall.js\");\n\nvar _irwinHall3 = _interopRequireDefault(_irwinHall2);\n\nvar _bates2 = __webpack_require__(/*! ./distributions/bates */ \"./node_modules/random/dist/distributions/bates.js\");\n\nvar _bates3 = _interopRequireDefault(_bates2);\n\nvar _pareto2 = __webpack_require__(/*! ./distributions/pareto */ \"./node_modules/random/dist/distributions/pareto.js\");\n\nvar _pareto3 = _interopRequireDefault(_pareto2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nexports.RNG = _rng2.default;\nexports.RNGFactory = _rngFactory2.default;\n\n/**\n * Seedable random number generator supporting many common distributions.\n *\n * Defaults to Math.random as its underlying pseudorandom number generator.\n *\n * @name Random\n * @class\n *\n * @param {RNG|function} [rng=Math.random] - Underlying pseudorandom number generator.\n */\n\nvar Random = function () {\n  function Random(rng) {\n    _classCallCheck(this, Random);\n\n    if (rng) (0, _owLite2.default)(rng, _owLite2.default.object.instanceOf(_rng2.default));\n\n    this._cache = {};\n    this.use(rng);\n  }\n\n  /**\n   * @member {RNG} Underlying pseudo-random number generator\n   */\n\n\n  _createClass(Random, [{\n    key: 'clone',\n\n\n    /**\n     * Creates a new `Random` instance, optionally specifying parameters to\n     * set a new seed.\n     *\n     * @see RNG.clone\n     *\n     * @param {string} [seed] - Optional seed for new RNG.\n     * @param {object} [opts] - Optional config for new RNG options.\n     * @return {Random}\n     */\n    value: function clone() {\n      if (arguments.length) {\n        return new Random(_rngFactory2.default.apply(undefined, arguments));\n      } else {\n        return new Random(this.rng.clone());\n      }\n    }\n\n    /**\n     * Sets the underlying pseudorandom number generator used via\n     * either an instance of `seedrandom`, a custom instance of RNG\n     * (for PRNG plugins), or a string specifying the PRNG to use\n     * along with an optional `seed` and `opts` to initialize the\n     * RNG.\n     *\n     * @example\n     * const random = require('random')\n     *\n     * random.use('example_seedrandom_string')\n     * // or\n     * random.use(seedrandom('kittens'))\n     * // or\n     * random.use(Math.random)\n     *\n     * @param {...*} args\n     */\n\n  }, {\n    key: 'use',\n    value: function use() {\n      this._rng = _rngFactory2.default.apply(undefined, arguments);\n    }\n\n    /**\n     * Patches `Math.random` with this Random instance's PRNG.\n     */\n\n  }, {\n    key: 'patch',\n    value: function patch() {\n      if (this._patch) {\n        throw new Error('Math.random already patched');\n      }\n\n      this._patch = Math.random;\n      Math.random = this.uniform();\n    }\n\n    /**\n     * Restores a previously patched `Math.random` to its original value.\n     */\n\n  }, {\n    key: 'unpatch',\n    value: function unpatch() {\n      if (this._patch) {\n        Math.random = this._patch;\n        delete this._patch;\n      }\n    }\n\n    // --------------------------------------------------------------------------\n    // Uniform utility functions\n    // --------------------------------------------------------------------------\n\n    /**\n     * Convenience wrapper around `this.rng.next()`\n     *\n     * Returns a floating point number in [0, 1).\n     *\n     * @return {number}\n     */\n\n  }, {\n    key: 'next',\n    value: function next() {\n      return this._rng.next();\n    }\n\n    /**\n     * Samples a uniform random floating point number, optionally specifying\n     * lower and upper bounds.\n     *\n     * Convence wrapper around `random.uniform()`\n     *\n     * @param {number} [min=0] - Lower bound (float, inclusive)\n     * @param {number} [max=1] - Upper bound (float, exclusive)\n     * @return {number}\n     */\n\n  }, {\n    key: 'float',\n    value: function float(min, max) {\n      return this.uniform(min, max)();\n    }\n\n    /**\n     * Samples a uniform random integer, optionally specifying lower and upper\n     * bounds.\n     *\n     * Convence wrapper around `random.uniformInt()`\n     *\n     * @param {number} [min=0] - Lower bound (integer, inclusive)\n     * @param {number} [max=1] - Upper bound (integer, inclusive)\n     * @return {number}\n     */\n\n  }, {\n    key: 'int',\n    value: function int(min, max) {\n      return this.uniformInt(min, max)();\n    }\n\n    /**\n     * Samples a uniform random integer, optionally specifying lower and upper\n     * bounds.\n     *\n     * Convence wrapper around `random.uniformInt()`\n     *\n     * @alias `random.int`\n     *\n     * @param {number} [min=0] - Lower bound (integer, inclusive)\n     * @param {number} [max=1] - Upper bound (integer, inclusive)\n     * @return {number}\n     */\n\n  }, {\n    key: 'integer',\n    value: function integer(min, max) {\n      return this.uniformInt(min, max)();\n    }\n\n    /**\n     * Samples a uniform random boolean value.\n     *\n     * Convence wrapper around `random.uniformBoolean()`\n     *\n     * @alias `random.boolean`\n     *\n     * @return {boolean}\n     */\n\n  }, {\n    key: 'bool',\n    value: function bool() {\n      return this.uniformBoolean()();\n    }\n\n    /**\n     * Samples a uniform random boolean value.\n     *\n     * Convence wrapper around `random.uniformBoolean()`\n     *\n     * @return {boolean}\n     */\n\n  }, {\n    key: 'boolean',\n    value: function boolean() {\n      return this.uniformBoolean()();\n    }\n\n    // --------------------------------------------------------------------------\n    // Uniform distributions\n    // --------------------------------------------------------------------------\n\n    /**\n     * Generates a [Continuous uniform distribution](https://en.wikipedia.org/wiki/Uniform_distribution_(continuous)).\n     *\n     * @param {number} [min=0] - Lower bound (float, inclusive)\n     * @param {number} [max=1] - Upper bound (float, exclusive)\n     * @return {function}\n     */\n\n  }, {\n    key: 'uniform',\n    value: function uniform(min, max) {\n      return this._memoize('uniform', _uniform3.default, min, max);\n    }\n\n    /**\n     * Generates a [Discrete uniform distribution](https://en.wikipedia.org/wiki/Discrete_uniform_distribution).\n     *\n     * @param {number} [min=0] - Lower bound (integer, inclusive)\n     * @param {number} [max=1] - Upper bound (integer, inclusive)\n     * @return {function}\n     */\n\n  }, {\n    key: 'uniformInt',\n    value: function uniformInt(min, max) {\n      return this._memoize('uniformInt', _uniformInt3.default, min, max);\n    }\n\n    /**\n     * Generates a [Discrete uniform distribution](https://en.wikipedia.org/wiki/Discrete_uniform_distribution),\n     * with two possible outcomes, `true` or `false.\n     *\n     * This method is analogous to flipping a coin.\n     *\n     * @return {function}\n     */\n\n  }, {\n    key: 'uniformBoolean',\n    value: function uniformBoolean() {\n      return this._memoize('uniformBoolean', _uniformBoolean3.default);\n    }\n\n    // --------------------------------------------------------------------------\n    // Normal distributions\n    // --------------------------------------------------------------------------\n\n    /**\n     * Generates a [Normal distribution](https://en.wikipedia.org/wiki/Normal_distribution).\n     *\n     * @param {number} [mu=0] - Mean\n     * @param {number} [sigma=1] - Standard deviation\n     * @return {function}\n     */\n\n  }, {\n    key: 'normal',\n    value: function normal(mu, sigma) {\n      return (0, _normal3.default)(this, mu, sigma);\n    }\n\n    /**\n     * Generates a [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).\n     *\n     * @param {number} [mu=0] - Mean of underlying normal distribution\n     * @param {number} [sigma=1] - Standard deviation of underlying normal distribution\n     * @return {function}\n     */\n\n  }, {\n    key: 'logNormal',\n    value: function logNormal(mu, sigma) {\n      return (0, _logNormal3.default)(this, mu, sigma);\n    }\n\n    // --------------------------------------------------------------------------\n    // Bernoulli distributions\n    // --------------------------------------------------------------------------\n\n    /**\n     * Generates a [Bernoulli distribution](https://en.wikipedia.org/wiki/Bernoulli_distribution).\n     *\n     * @param {number} [p=0.5] - Success probability of each trial.\n     * @return {function}\n     */\n\n  }, {\n    key: 'bernoulli',\n    value: function bernoulli(p) {\n      return (0, _bernoulli3.default)(this, p);\n    }\n\n    /**\n     * Generates a [Binomial distribution](https://en.wikipedia.org/wiki/Binomial_distribution).\n     *\n     * @param {number} [n=1] - Number of trials.\n     * @param {number} [p=0.5] - Success probability of each trial.\n     * @return {function}\n     */\n\n  }, {\n    key: 'binomial',\n    value: function binomial(n, p) {\n      return (0, _binomial3.default)(this, n, p);\n    }\n\n    /**\n     * Generates a [Geometric distribution](https://en.wikipedia.org/wiki/Geometric_distribution).\n     *\n     * @param {number} [p=0.5] - Success probability of each trial.\n     * @return {function}\n     */\n\n  }, {\n    key: 'geometric',\n    value: function geometric(p) {\n      return (0, _geometric3.default)(this, p);\n    }\n\n    // --------------------------------------------------------------------------\n    // Poisson distributions\n    // --------------------------------------------------------------------------\n\n    /**\n     * Generates a [Poisson distribution](https://en.wikipedia.org/wiki/Poisson_distribution).\n     *\n     * @param {number} [lambda=1] - Mean (lambda > 0)\n     * @return {function}\n     */\n\n  }, {\n    key: 'poisson',\n    value: function poisson(lambda) {\n      return (0, _poisson3.default)(this, lambda);\n    }\n\n    /**\n     * Generates an [Exponential distribution](https://en.wikipedia.org/wiki/Exponential_distribution).\n     *\n     * @param {number} [lambda=1] - Inverse mean (lambda > 0)\n     * @return {function}\n     */\n\n  }, {\n    key: 'exponential',\n    value: function exponential(lambda) {\n      return (0, _exponential3.default)(this, lambda);\n    }\n\n    // --------------------------------------------------------------------------\n    // Misc distributions\n    // --------------------------------------------------------------------------\n\n    /**\n     * Generates an [Irwin Hall distribution](https://en.wikipedia.org/wiki/Irwin%E2%80%93Hall_distribution).\n     *\n     * @param {number} [n=1] - Number of uniform samples to sum (n >= 0)\n     * @return {function}\n     */\n\n  }, {\n    key: 'irwinHall',\n    value: function irwinHall(n) {\n      return (0, _irwinHall3.default)(this, n);\n    }\n\n    /**\n     * Generates a [Bates distribution](https://en.wikipedia.org/wiki/Bates_distribution).\n     *\n     * @param {number} [n=1] - Number of uniform samples to average (n >= 1)\n     * @return {function}\n     */\n\n  }, {\n    key: 'bates',\n    value: function bates(n) {\n      return (0, _bates3.default)(this, n);\n    }\n\n    /**\n     * Generates a [Pareto distribution](https://en.wikipedia.org/wiki/Pareto_distribution).\n     *\n     * @param {number} [alpha=1] - Alpha\n     * @return {function}\n     */\n\n  }, {\n    key: 'pareto',\n    value: function pareto(alpha) {\n      return (0, _pareto3.default)(this, alpha);\n    }\n\n    // --------------------------------------------------------------------------\n    // Internal\n    // --------------------------------------------------------------------------\n\n    /**\n     * Memoizes distributions to ensure they're only created when necessary.\n     *\n     * Returns a thunk which that returns independent, identically distributed\n     * samples from the specified distribution.\n     *\n     * @private\n     *\n     * @param {string} label - Name of distribution\n     * @param {function} getter - Function which generates a new distribution\n     * @param {...*} args - Distribution-specific arguments\n     *\n     * @return {function}\n     */\n\n  }, {\n    key: '_memoize',\n    value: function _memoize(label, getter) {\n      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n        args[_key - 2] = arguments[_key];\n      }\n\n      var key = '' + args.join(';');\n      var value = this._cache[label];\n\n      if (value === undefined || value.key !== key) {\n        value = { key: key, distribution: getter.apply(undefined, [this].concat(args)) };\n        this._cache[label] = value;\n      }\n\n      return value.distribution;\n    }\n  }, {\n    key: 'rng',\n    get: function get() {\n      return this._rng;\n    }\n  }]);\n\n  return Random;\n}();\n\n// defaults to Math.random as its RNG\n\n\nexports.default = new Random();\n//# sourceMappingURL=random.js.map\n\n//# sourceURL=webpack:///./node_modules/random/dist/random.js?");

/***/ }),

/***/ "./node_modules/random/dist/rng-factory.js":
/*!*************************************************!*\
  !*** ./node_modules/random/dist/rng-factory.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _seedrandom = __webpack_require__(/*! seedrandom */ \"./node_modules/seedrandom/index.js\");\n\nvar _seedrandom2 = _interopRequireDefault(_seedrandom);\n\nvar _rng = __webpack_require__(/*! ./rng */ \"./node_modules/random/dist/rng.js\");\n\nvar _rng2 = _interopRequireDefault(_rng);\n\nvar _function = __webpack_require__(/*! ./generators/function */ \"./node_modules/random/dist/generators/function.js\");\n\nvar _function2 = _interopRequireDefault(_function);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nexports.default = function () {\n  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  var _args$ = args[0],\n      arg0 = _args$ === undefined ? 'default' : _args$,\n      rest = args.slice(1);\n\n\n  switch (typeof arg0 === 'undefined' ? 'undefined' : _typeof(arg0)) {\n    case 'object':\n      if (arg0 instanceof _rng2.default) {\n        return arg0;\n      }\n      break;\n\n    case 'function':\n      return new _function2.default(arg0);\n\n    case 'string':\n    case 'number':\n      return new _function2.default(_seedrandom2.default.apply(undefined, _toConsumableArray(rest)));\n  }\n\n  throw new Error('invalid RNG \"' + arg0 + '\"');\n};\n//# sourceMappingURL=rng-factory.js.map\n\n//# sourceURL=webpack:///./node_modules/random/dist/rng-factory.js?");

/***/ }),

/***/ "./node_modules/random/dist/rng.js":
/*!*****************************************!*\
  !*** ./node_modules/random/dist/rng.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar RNG = function () {\n  function RNG() {\n    _classCallCheck(this, RNG);\n  }\n\n  _createClass(RNG, [{\n    key: 'next',\n    value: function next() {\n      throw new Error('RNG.next must be overridden');\n    }\n  }, {\n    key: 'seed',\n    value: function seed(_seed, opts) {\n      throw new Error('RNG.seed must be overridden');\n    }\n  }, {\n    key: 'clone',\n    value: function clone(seed, opts) {\n      throw new Error('RNG.clone must be overridden');\n    }\n  }, {\n    key: '_seed',\n    value: function _seed(seed, opts) {\n      // TODO: add entropy and stuff\n\n      if (seed === (seed | 0)) {\n        return seed;\n      } else {\n        var strSeed = '' + seed;\n        var s = 0;\n\n        for (var k = 0; k < strSeed.length; ++k) {\n          s ^= strSeed.charCodeAt(k) | 0;\n        }\n\n        return s;\n      }\n    }\n  }, {\n    key: 'name',\n    get: function get() {\n      throw new Error('RNG.name must be overridden');\n    }\n  }]);\n\n  return RNG;\n}();\n\nexports.default = RNG;\n//# sourceMappingURL=rng.js.map\n\n//# sourceURL=webpack:///./node_modules/random/dist/rng.js?");

/***/ }),

/***/ "./node_modules/random/index.js":
/*!**************************************!*\
  !*** ./node_modules/random/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./dist/random */ \"./node_modules/random/dist/random.js\").default\n\n\n//# sourceURL=webpack:///./node_modules/random/index.js?");

/***/ }),

/***/ "./node_modules/seedrandom/index.js":
/*!******************************************!*\
  !*** ./node_modules/seedrandom/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A library of seedable RNGs implemented in Javascript.\n//\n// Usage:\n//\n// var seedrandom = require('seedrandom');\n// var random = seedrandom(1); // or any seed.\n// var x = random();       // 0 <= x < 1.  Every bit is random.\n// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.\n\n// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.\n// Period: ~2^116\n// Reported to pass all BigCrush tests.\nvar alea = __webpack_require__(/*! ./lib/alea */ \"./node_modules/seedrandom/lib/alea.js\");\n\n// xor128, a pure xor-shift generator by George Marsaglia.\n// Period: 2^128-1.\n// Reported to fail: MatrixRank and LinearComp.\nvar xor128 = __webpack_require__(/*! ./lib/xor128 */ \"./node_modules/seedrandom/lib/xor128.js\");\n\n// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.\n// Period: 2^192-2^32\n// Reported to fail: CollisionOver, SimpPoker, and LinearComp.\nvar xorwow = __webpack_require__(/*! ./lib/xorwow */ \"./node_modules/seedrandom/lib/xorwow.js\");\n\n// xorshift7, by François Panneton and Pierre L'ecuyer, takes\n// a different approach: it adds robustness by allowing more shifts\n// than Marsaglia's original three.  It is a 7-shift generator\n// with 256 bits, that passes BigCrush with no systmatic failures.\n// Period 2^256-1.\n// No systematic BigCrush failures reported.\nvar xorshift7 = __webpack_require__(/*! ./lib/xorshift7 */ \"./node_modules/seedrandom/lib/xorshift7.js\");\n\n// xor4096, by Richard Brent, is a 4096-bit xor-shift with a\n// very long period that also adds a Weyl generator. It also passes\n// BigCrush with no systematic failures.  Its long period may\n// be useful if you have many generators and need to avoid\n// collisions.\n// Period: 2^4128-2^32.\n// No systematic BigCrush failures reported.\nvar xor4096 = __webpack_require__(/*! ./lib/xor4096 */ \"./node_modules/seedrandom/lib/xor4096.js\");\n\n// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random\n// number generator derived from ChaCha, a modern stream cipher.\n// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf\n// Period: ~2^127\n// No systematic BigCrush failures reported.\nvar tychei = __webpack_require__(/*! ./lib/tychei */ \"./node_modules/seedrandom/lib/tychei.js\");\n\n// The original ARC4-based prng included in this library.\n// Period: ~2^1600\nvar sr = __webpack_require__(/*! ./seedrandom */ \"./node_modules/seedrandom/seedrandom.js\");\n\nsr.alea = alea;\nsr.xor128 = xor128;\nsr.xorwow = xorwow;\nsr.xorshift7 = xorshift7;\nsr.xor4096 = xor4096;\nsr.tychei = tychei;\n\nmodule.exports = sr;\n\n\n//# sourceURL=webpack:///./node_modules/seedrandom/index.js?");

/***/ }),

/***/ "./node_modules/seedrandom/lib/alea.js":
/*!*********************************************!*\
  !*** ./node_modules/seedrandom/lib/alea.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010\n// http://baagoe.com/en/RandomMusings/javascript/\n// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror\n// Original work is under MIT license -\n\n// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>\n//\n// Permission is hereby granted, free of charge, to any person obtaining a copy\n// of this software and associated documentation files (the \"Software\"), to deal\n// in the Software without restriction, including without limitation the rights\n// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n// copies of the Software, and to permit persons to whom the Software is\n// furnished to do so, subject to the following conditions:\n//\n// The above copyright notice and this permission notice shall be included in\n// all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n// THE SOFTWARE.\n\n\n\n(function(global, module, define) {\n\nfunction Alea(seed) {\n  var me = this, mash = Mash();\n\n  me.next = function() {\n    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32\n    me.s0 = me.s1;\n    me.s1 = me.s2;\n    return me.s2 = t - (me.c = t | 0);\n  };\n\n  // Apply the seeding algorithm from Baagoe.\n  me.c = 1;\n  me.s0 = mash(' ');\n  me.s1 = mash(' ');\n  me.s2 = mash(' ');\n  me.s0 -= mash(seed);\n  if (me.s0 < 0) { me.s0 += 1; }\n  me.s1 -= mash(seed);\n  if (me.s1 < 0) { me.s1 += 1; }\n  me.s2 -= mash(seed);\n  if (me.s2 < 0) { me.s2 += 1; }\n  mash = null;\n}\n\nfunction copy(f, t) {\n  t.c = f.c;\n  t.s0 = f.s0;\n  t.s1 = f.s1;\n  t.s2 = f.s2;\n  return t;\n}\n\nfunction impl(seed, opts) {\n  var xg = new Alea(seed),\n      state = opts && opts.state,\n      prng = xg.next;\n  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; }\n  prng.double = function() {\n    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53\n  };\n  prng.quick = prng;\n  if (state) {\n    if (typeof(state) == 'object') copy(state, xg);\n    prng.state = function() { return copy(xg, {}); }\n  }\n  return prng;\n}\n\nfunction Mash() {\n  var n = 0xefc8249d;\n\n  var mash = function(data) {\n    data = String(data);\n    for (var i = 0; i < data.length; i++) {\n      n += data.charCodeAt(i);\n      var h = 0.02519603282416938 * n;\n      n = h >>> 0;\n      h -= n;\n      h *= n;\n      n = h >>> 0;\n      h -= n;\n      n += h * 0x100000000; // 2^32\n    }\n    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32\n  };\n\n  return mash;\n}\n\n\nif (module && module.exports) {\n  module.exports = impl;\n} else if (__webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\") && __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {\n  this.alea = impl;\n}\n\n})(\n  this,\n   true && module,    // present in node.js\n  __webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\")   // present with an AMD loader\n);\n\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/seedrandom/lib/alea.js?");

/***/ }),

/***/ "./node_modules/seedrandom/lib/tychei.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/tychei.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the \"Tyche-i\" prng algorithm by\n// Samuel Neves and Filipe Araujo.\n// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf\n\n(function(global, module, define) {\n\nfunction XorGen(seed) {\n  var me = this, strseed = '';\n\n  // Set up generator function.\n  me.next = function() {\n    var b = me.b, c = me.c, d = me.d, a = me.a;\n    b = (b << 25) ^ (b >>> 7) ^ c;\n    c = (c - d) | 0;\n    d = (d << 24) ^ (d >>> 8) ^ a;\n    a = (a - b) | 0;\n    me.b = b = (b << 20) ^ (b >>> 12) ^ c;\n    me.c = c = (c - d) | 0;\n    me.d = (d << 16) ^ (c >>> 16) ^ a;\n    return me.a = (a - b) | 0;\n  };\n\n  /* The following is non-inverted tyche, which has better internal\n   * bit diffusion, but which is about 25% slower than tyche-i in JS.\n  me.next = function() {\n    var a = me.a, b = me.b, c = me.c, d = me.d;\n    a = (me.a + me.b | 0) >>> 0;\n    d = me.d ^ a; d = d << 16 ^ d >>> 16;\n    c = me.c + d | 0;\n    b = me.b ^ c; b = b << 12 ^ d >>> 20;\n    me.a = a = a + b | 0;\n    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;\n    me.c = c = c + d | 0;\n    b = b ^ c;\n    return me.b = (b << 7 ^ b >>> 25);\n  }\n  */\n\n  me.a = 0;\n  me.b = 0;\n  me.c = 2654435769 | 0;\n  me.d = 1367130551;\n\n  if (seed === Math.floor(seed)) {\n    // Integer seed.\n    me.a = (seed / 0x100000000) | 0;\n    me.b = seed | 0;\n  } else {\n    // String seed.\n    strseed += seed;\n  }\n\n  // Mix in string seed, then discard an initial batch of 64 values.\n  for (var k = 0; k < strseed.length + 20; k++) {\n    me.b ^= strseed.charCodeAt(k) | 0;\n    me.next();\n  }\n}\n\nfunction copy(f, t) {\n  t.a = f.a;\n  t.b = f.b;\n  t.c = f.c;\n  t.d = f.d;\n  return t;\n};\n\nfunction impl(seed, opts) {\n  var xg = new XorGen(seed),\n      state = opts && opts.state,\n      prng = function() { return (xg.next() >>> 0) / 0x100000000; };\n  prng.double = function() {\n    do {\n      var top = xg.next() >>> 11,\n          bot = (xg.next() >>> 0) / 0x100000000,\n          result = (top + bot) / (1 << 21);\n    } while (result === 0);\n    return result;\n  };\n  prng.int32 = xg.next;\n  prng.quick = prng;\n  if (state) {\n    if (typeof(state) == 'object') copy(state, xg);\n    prng.state = function() { return copy(xg, {}); }\n  }\n  return prng;\n}\n\nif (module && module.exports) {\n  module.exports = impl;\n} else if (__webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\") && __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {\n  this.tychei = impl;\n}\n\n})(\n  this,\n   true && module,    // present in node.js\n  __webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\")   // present with an AMD loader\n);\n\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/seedrandom/lib/tychei.js?");

/***/ }),

/***/ "./node_modules/seedrandom/lib/xor128.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xor128.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the \"xor128\" prng algorithm by\n// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper\n\n(function(global, module, define) {\n\nfunction XorGen(seed) {\n  var me = this, strseed = '';\n\n  me.x = 0;\n  me.y = 0;\n  me.z = 0;\n  me.w = 0;\n\n  // Set up generator function.\n  me.next = function() {\n    var t = me.x ^ (me.x << 11);\n    me.x = me.y;\n    me.y = me.z;\n    me.z = me.w;\n    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);\n  };\n\n  if (seed === (seed | 0)) {\n    // Integer seed.\n    me.x = seed;\n  } else {\n    // String seed.\n    strseed += seed;\n  }\n\n  // Mix in string seed, then discard an initial batch of 64 values.\n  for (var k = 0; k < strseed.length + 64; k++) {\n    me.x ^= strseed.charCodeAt(k) | 0;\n    me.next();\n  }\n}\n\nfunction copy(f, t) {\n  t.x = f.x;\n  t.y = f.y;\n  t.z = f.z;\n  t.w = f.w;\n  return t;\n}\n\nfunction impl(seed, opts) {\n  var xg = new XorGen(seed),\n      state = opts && opts.state,\n      prng = function() { return (xg.next() >>> 0) / 0x100000000; };\n  prng.double = function() {\n    do {\n      var top = xg.next() >>> 11,\n          bot = (xg.next() >>> 0) / 0x100000000,\n          result = (top + bot) / (1 << 21);\n    } while (result === 0);\n    return result;\n  };\n  prng.int32 = xg.next;\n  prng.quick = prng;\n  if (state) {\n    if (typeof(state) == 'object') copy(state, xg);\n    prng.state = function() { return copy(xg, {}); }\n  }\n  return prng;\n}\n\nif (module && module.exports) {\n  module.exports = impl;\n} else if (__webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\") && __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {\n  this.xor128 = impl;\n}\n\n})(\n  this,\n   true && module,    // present in node.js\n  __webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\")   // present with an AMD loader\n);\n\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/seedrandom/lib/xor128.js?");

/***/ }),

/***/ "./node_modules/seedrandom/lib/xor4096.js":
/*!************************************************!*\
  !*** ./node_modules/seedrandom/lib/xor4096.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.\n//\n// This fast non-cryptographic random number generator is designed for\n// use in Monte-Carlo algorithms. It combines a long-period xorshift\n// generator with a Weyl generator, and it passes all common batteries\n// of stasticial tests for randomness while consuming only a few nanoseconds\n// for each prng generated.  For background on the generator, see Brent's\n// paper: \"Some long-period random number generators using shifts and xors.\"\n// http://arxiv.org/pdf/1004.3115v1.pdf\n//\n// Usage:\n//\n// var xor4096 = require('xor4096');\n// random = xor4096(1);                        // Seed with int32 or string.\n// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.\n// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.\n//\n// For nonzero numeric keys, this impelementation provides a sequence\n// identical to that by Brent's xorgens 3 implementaion in C.  This\n// implementation also provides for initalizing the generator with\n// string seeds, or for saving and restoring the state of the generator.\n//\n// On Chrome, this prng benchmarks about 2.1 times slower than\n// Javascript's built-in Math.random().\n\n(function(global, module, define) {\n\nfunction XorGen(seed) {\n  var me = this;\n\n  // Set up generator function.\n  me.next = function() {\n    var w = me.w,\n        X = me.X, i = me.i, t, v;\n    // Update Weyl generator.\n    me.w = w = (w + 0x61c88647) | 0;\n    // Update xor generator.\n    v = X[(i + 34) & 127];\n    t = X[i = ((i + 1) & 127)];\n    v ^= v << 13;\n    t ^= t << 17;\n    v ^= v >>> 15;\n    t ^= t >>> 12;\n    // Update Xor generator array state.\n    v = X[i] = v ^ t;\n    me.i = i;\n    // Result is the combination.\n    return (v + (w ^ (w >>> 16))) | 0;\n  };\n\n  function init(me, seed) {\n    var t, v, i, j, w, X = [], limit = 128;\n    if (seed === (seed | 0)) {\n      // Numeric seeds initialize v, which is used to generates X.\n      v = seed;\n      seed = null;\n    } else {\n      // String seeds are mixed into v and X one character at a time.\n      seed = seed + '\\0';\n      v = 0;\n      limit = Math.max(limit, seed.length);\n    }\n    // Initialize circular array and weyl value.\n    for (i = 0, j = -32; j < limit; ++j) {\n      // Put the unicode characters into the array, and shuffle them.\n      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);\n      // After 32 shuffles, take v as the starting w value.\n      if (j === 0) w = v;\n      v ^= v << 10;\n      v ^= v >>> 15;\n      v ^= v << 4;\n      v ^= v >>> 13;\n      if (j >= 0) {\n        w = (w + 0x61c88647) | 0;     // Weyl.\n        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.\n        i = (0 == t) ? i + 1 : 0;     // Count zeroes.\n      }\n    }\n    // We have detected all zeroes; make the key nonzero.\n    if (i >= 128) {\n      X[(seed && seed.length || 0) & 127] = -1;\n    }\n    // Run the generator 512 times to further mix the state before using it.\n    // Factoring this as a function slows the main generator, so it is just\n    // unrolled here.  The weyl generator is not advanced while warming up.\n    i = 127;\n    for (j = 4 * 128; j > 0; --j) {\n      v = X[(i + 34) & 127];\n      t = X[i = ((i + 1) & 127)];\n      v ^= v << 13;\n      t ^= t << 17;\n      v ^= v >>> 15;\n      t ^= t >>> 12;\n      X[i] = v ^ t;\n    }\n    // Storing state as object members is faster than using closure variables.\n    me.w = w;\n    me.X = X;\n    me.i = i;\n  }\n\n  init(me, seed);\n}\n\nfunction copy(f, t) {\n  t.i = f.i;\n  t.w = f.w;\n  t.X = f.X.slice();\n  return t;\n};\n\nfunction impl(seed, opts) {\n  if (seed == null) seed = +(new Date);\n  var xg = new XorGen(seed),\n      state = opts && opts.state,\n      prng = function() { return (xg.next() >>> 0) / 0x100000000; };\n  prng.double = function() {\n    do {\n      var top = xg.next() >>> 11,\n          bot = (xg.next() >>> 0) / 0x100000000,\n          result = (top + bot) / (1 << 21);\n    } while (result === 0);\n    return result;\n  };\n  prng.int32 = xg.next;\n  prng.quick = prng;\n  if (state) {\n    if (state.X) copy(state, xg);\n    prng.state = function() { return copy(xg, {}); }\n  }\n  return prng;\n}\n\nif (module && module.exports) {\n  module.exports = impl;\n} else if (__webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\") && __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {\n  this.xor4096 = impl;\n}\n\n})(\n  this,                                     // window object or global\n   true && module,    // present in node.js\n  __webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\")   // present with an AMD loader\n);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/seedrandom/lib/xor4096.js?");

/***/ }),

/***/ "./node_modules/seedrandom/lib/xorshift7.js":
/*!**************************************************!*\
  !*** ./node_modules/seedrandom/lib/xorshift7.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the \"xorshift7\" algorithm by\n// François Panneton and Pierre L'ecuyer:\n// \"On the Xorgshift Random Number Generators\"\n// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf\n\n(function(global, module, define) {\n\nfunction XorGen(seed) {\n  var me = this;\n\n  // Set up generator function.\n  me.next = function() {\n    // Update xor generator.\n    var X = me.x, i = me.i, t, v, w;\n    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);\n    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);\n    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);\n    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);\n    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);\n    X[i] = v;\n    me.i = (i + 1) & 7;\n    return v;\n  };\n\n  function init(me, seed) {\n    var j, w, X = [];\n\n    if (seed === (seed | 0)) {\n      // Seed state array using a 32-bit integer.\n      w = X[0] = seed;\n    } else {\n      // Seed state using a string.\n      seed = '' + seed;\n      for (j = 0; j < seed.length; ++j) {\n        X[j & 7] = (X[j & 7] << 15) ^\n            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);\n      }\n    }\n    // Enforce an array length of 8, not all zeroes.\n    while (X.length < 8) X.push(0);\n    for (j = 0; j < 8 && X[j] === 0; ++j);\n    if (j == 8) w = X[7] = -1; else w = X[j];\n\n    me.x = X;\n    me.i = 0;\n\n    // Discard an initial 256 values.\n    for (j = 256; j > 0; --j) {\n      me.next();\n    }\n  }\n\n  init(me, seed);\n}\n\nfunction copy(f, t) {\n  t.x = f.x.slice();\n  t.i = f.i;\n  return t;\n}\n\nfunction impl(seed, opts) {\n  if (seed == null) seed = +(new Date);\n  var xg = new XorGen(seed),\n      state = opts && opts.state,\n      prng = function() { return (xg.next() >>> 0) / 0x100000000; };\n  prng.double = function() {\n    do {\n      var top = xg.next() >>> 11,\n          bot = (xg.next() >>> 0) / 0x100000000,\n          result = (top + bot) / (1 << 21);\n    } while (result === 0);\n    return result;\n  };\n  prng.int32 = xg.next;\n  prng.quick = prng;\n  if (state) {\n    if (state.x) copy(state, xg);\n    prng.state = function() { return copy(xg, {}); }\n  }\n  return prng;\n}\n\nif (module && module.exports) {\n  module.exports = impl;\n} else if (__webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\") && __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {\n  this.xorshift7 = impl;\n}\n\n})(\n  this,\n   true && module,    // present in node.js\n  __webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\")   // present with an AMD loader\n);\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/seedrandom/lib/xorshift7.js?");

/***/ }),

/***/ "./node_modules/seedrandom/lib/xorwow.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/lib/xorwow.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;// A Javascript implementaion of the \"xorwow\" prng algorithm by\n// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper\n\n(function(global, module, define) {\n\nfunction XorGen(seed) {\n  var me = this, strseed = '';\n\n  // Set up generator function.\n  me.next = function() {\n    var t = (me.x ^ (me.x >>> 2));\n    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;\n    return (me.d = (me.d + 362437 | 0)) +\n       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;\n  };\n\n  me.x = 0;\n  me.y = 0;\n  me.z = 0;\n  me.w = 0;\n  me.v = 0;\n\n  if (seed === (seed | 0)) {\n    // Integer seed.\n    me.x = seed;\n  } else {\n    // String seed.\n    strseed += seed;\n  }\n\n  // Mix in string seed, then discard an initial batch of 64 values.\n  for (var k = 0; k < strseed.length + 64; k++) {\n    me.x ^= strseed.charCodeAt(k) | 0;\n    if (k == strseed.length) {\n      me.d = me.x << 10 ^ me.x >>> 4;\n    }\n    me.next();\n  }\n}\n\nfunction copy(f, t) {\n  t.x = f.x;\n  t.y = f.y;\n  t.z = f.z;\n  t.w = f.w;\n  t.v = f.v;\n  t.d = f.d;\n  return t;\n}\n\nfunction impl(seed, opts) {\n  var xg = new XorGen(seed),\n      state = opts && opts.state,\n      prng = function() { return (xg.next() >>> 0) / 0x100000000; };\n  prng.double = function() {\n    do {\n      var top = xg.next() >>> 11,\n          bot = (xg.next() >>> 0) / 0x100000000,\n          result = (top + bot) / (1 << 21);\n    } while (result === 0);\n    return result;\n  };\n  prng.int32 = xg.next;\n  prng.quick = prng;\n  if (state) {\n    if (typeof(state) == 'object') copy(state, xg);\n    prng.state = function() { return copy(xg, {}); }\n  }\n  return prng;\n}\n\nif (module && module.exports) {\n  module.exports = impl;\n} else if (__webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\") && __webpack_require__(/*! !webpack amd options */ \"./node_modules/webpack/buildin/amd-options.js\")) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return impl; }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {\n  this.xorwow = impl;\n}\n\n})(\n  this,\n   true && module,    // present in node.js\n  __webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\")   // present with an AMD loader\n);\n\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/seedrandom/lib/xorwow.js?");

/***/ }),

/***/ "./node_modules/seedrandom/seedrandom.js":
/*!***********************************************!*\
  !*** ./node_modules/seedrandom/seedrandom.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/*\nCopyright 2019 David Bau.\n\nPermission is hereby granted, free of charge, to any person obtaining\na copy of this software and associated documentation files (the\n\"Software\"), to deal in the Software without restriction, including\nwithout limitation the rights to use, copy, modify, merge, publish,\ndistribute, sublicense, and/or sell copies of the Software, and to\npermit persons to whom the Software is furnished to do so, subject to\nthe following conditions:\n\nThe above copyright notice and this permission notice shall be\nincluded in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.\nIN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY\nCLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,\nTORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE\nSOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n*/\n\n(function (global, pool, math) {\n//\n// The following constants are related to IEEE 754 limits.\n//\n\nvar width = 256,        // each RC4 output is 0 <= x < 256\n    chunks = 6,         // at least six RC4 outputs for each double\n    digits = 52,        // there are 52 significant digits in a double\n    rngname = 'random', // rngname: name for Math.random and Math.seedrandom\n    startdenom = math.pow(width, chunks),\n    significance = math.pow(2, digits),\n    overflow = significance * 2,\n    mask = width - 1,\n    nodecrypto;         // node.js crypto module, initialized at the bottom.\n\n//\n// seedrandom()\n// This is the seedrandom function described above.\n//\nfunction seedrandom(seed, options, callback) {\n  var key = [];\n  options = (options == true) ? { entropy: true } : (options || {});\n\n  // Flatten the seed string or build one from local entropy if needed.\n  var shortseed = mixkey(flatten(\n    options.entropy ? [seed, tostring(pool)] :\n    (seed == null) ? autoseed() : seed, 3), key);\n\n  // Use the seed to initialize an ARC4 generator.\n  var arc4 = new ARC4(key);\n\n  // This function returns a random double in [0, 1) that contains\n  // randomness in every bit of the mantissa of the IEEE 754 value.\n  var prng = function() {\n    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48\n        d = startdenom,                 //   and denominator d = 2 ^ 48.\n        x = 0;                          //   and no 'extra last byte'.\n    while (n < significance) {          // Fill up all significant digits by\n      n = (n + x) * width;              //   shifting numerator and\n      d *= width;                       //   denominator and generating a\n      x = arc4.g(1);                    //   new least-significant-byte.\n    }\n    while (n >= overflow) {             // To avoid rounding up, before adding\n      n /= 2;                           //   last byte, shift everything\n      d /= 2;                           //   right using integer math until\n      x >>>= 1;                         //   we have exactly the desired bits.\n    }\n    return (n + x) / d;                 // Form the number within [0, 1).\n  };\n\n  prng.int32 = function() { return arc4.g(4) | 0; }\n  prng.quick = function() { return arc4.g(4) / 0x100000000; }\n  prng.double = prng;\n\n  // Mix the randomness into accumulated entropy.\n  mixkey(tostring(arc4.S), pool);\n\n  // Calling convention: what to return as a function of prng, seed, is_math.\n  return (options.pass || callback ||\n      function(prng, seed, is_math_call, state) {\n        if (state) {\n          // Load the arc4 state from the given state if it has an S array.\n          if (state.S) { copy(state, arc4); }\n          // Only provide the .state method if requested via options.state.\n          prng.state = function() { return copy(arc4, {}); }\n        }\n\n        // If called as a method of Math (Math.seedrandom()), mutate\n        // Math.random because that is how seedrandom.js has worked since v1.0.\n        if (is_math_call) { math[rngname] = prng; return seed; }\n\n        // Otherwise, it is a newer calling convention, so return the\n        // prng directly.\n        else return prng;\n      })(\n  prng,\n  shortseed,\n  'global' in options ? options.global : (this == math),\n  options.state);\n}\n\n//\n// ARC4\n//\n// An ARC4 implementation.  The constructor takes a key in the form of\n// an array of at most (width) integers that should be 0 <= x < (width).\n//\n// The g(count) method returns a pseudorandom integer that concatenates\n// the next (count) outputs from ARC4.  Its return value is a number x\n// that is in the range 0 <= x < (width ^ count).\n//\nfunction ARC4(key) {\n  var t, keylen = key.length,\n      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];\n\n  // The empty key [] is treated as [0].\n  if (!keylen) { key = [keylen++]; }\n\n  // Set up S using the standard key scheduling algorithm.\n  while (i < width) {\n    s[i] = i++;\n  }\n  for (i = 0; i < width; i++) {\n    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];\n    s[j] = t;\n  }\n\n  // The \"g\" method returns the next (count) outputs as one number.\n  (me.g = function(count) {\n    // Using instance members instead of closure state nearly doubles speed.\n    var t, r = 0,\n        i = me.i, j = me.j, s = me.S;\n    while (count--) {\n      t = s[i = mask & (i + 1)];\n      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];\n    }\n    me.i = i; me.j = j;\n    return r;\n    // For robust unpredictability, the function call below automatically\n    // discards an initial batch of values.  This is called RC4-drop[256].\n    // See http://google.com/search?q=rsa+fluhrer+response&btnI\n  })(width);\n}\n\n//\n// copy()\n// Copies internal state of ARC4 to or from a plain object.\n//\nfunction copy(f, t) {\n  t.i = f.i;\n  t.j = f.j;\n  t.S = f.S.slice();\n  return t;\n};\n\n//\n// flatten()\n// Converts an object tree to nested arrays of strings.\n//\nfunction flatten(obj, depth) {\n  var result = [], typ = (typeof obj), prop;\n  if (depth && typ == 'object') {\n    for (prop in obj) {\n      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}\n    }\n  }\n  return (result.length ? result : typ == 'string' ? obj : obj + '\\0');\n}\n\n//\n// mixkey()\n// Mixes a string seed into a key that is an array of integers, and\n// returns a shortened string seed that is equivalent to the result key.\n//\nfunction mixkey(seed, key) {\n  var stringseed = seed + '', smear, j = 0;\n  while (j < stringseed.length) {\n    key[mask & j] =\n      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));\n  }\n  return tostring(key);\n}\n\n//\n// autoseed()\n// Returns an object for autoseeding, using window.crypto and Node crypto\n// module if available.\n//\nfunction autoseed() {\n  try {\n    var out;\n    if (nodecrypto && (out = nodecrypto.randomBytes)) {\n      // The use of 'out' to remember randomBytes makes tight minified code.\n      out = out(width);\n    } else {\n      out = new Uint8Array(width);\n      (global.crypto || global.msCrypto).getRandomValues(out);\n    }\n    return tostring(out);\n  } catch (e) {\n    var browser = global.navigator,\n        plugins = browser && browser.plugins;\n    return [+new Date, global, plugins, global.screen, tostring(pool)];\n  }\n}\n\n//\n// tostring()\n// Converts an array of charcodes to a string\n//\nfunction tostring(a) {\n  return String.fromCharCode.apply(0, a);\n}\n\n//\n// When seedrandom.js is loaded, we immediately mix a few bits\n// from the built-in RNG into the entropy pool.  Because we do\n// not want to interfere with deterministic PRNG state later,\n// seedrandom will not call math.random on its own again after\n// initialization.\n//\nmixkey(math.random(), pool);\n\n//\n// Nodejs and AMD support: export the implementation as a module using\n// either convention.\n//\nif ( true && module.exports) {\n  module.exports = seedrandom;\n  // When in node.js, try using crypto package for autoseeding.\n  try {\n    nodecrypto = __webpack_require__(/*! crypto */ 0);\n  } catch (ex) {}\n} else if (true) {\n  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return seedrandom; }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n} else {}\n\n\n// End anonymous scope, and pass initial values.\n})(\n  // global: `self` in browsers (including strict mode and web workers),\n  // otherwise `this` in Node and other environments\n  (typeof self !== 'undefined') ? self : this,\n  [],     // pool: entropy pool starts empty\n  Math    // math: package containing random, pow, and seedrandom\n);\n\n\n//# sourceURL=webpack:///./node_modules/seedrandom/seedrandom.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function() {\n\tthrow new Error(\"define cannot be used indirect\");\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/amd-define.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */\nmodule.exports = __webpack_amd_options__;\n\n/* WEBPACK VAR INJECTION */}.call(this, {}))\n\n//# sourceURL=webpack:///(webpack)/buildin/amd-options.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/css/main.css?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _finder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finder */ \"./src/js/finder.js\");\n/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languages */ \"./src/js/languages.js\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n_finder__WEBPACK_IMPORTED_MODULE_0__[\"randomButton\"].addEventListener('click', changeLanguage);\n\nfunction changeLanguage() {\n  const randomIndex = Math.floor(Math.random() * (_languages__WEBPACK_IMPORTED_MODULE_1__[\"languages\"].length))\n  _finder__WEBPACK_IMPORTED_MODULE_0__[\"hello\"].innerHTML = _languages__WEBPACK_IMPORTED_MODULE_1__[\"languages\"][randomIndex]\n}\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/finder.js":
/*!**************************!*\
  !*** ./src/js/finder.js ***!
  \**************************/
/*! exports provided: randomButton, hello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomButton\", function() { return randomButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hello\", function() { return hello; });\nconst randomButton = document.querySelector('#random-button');\nconst hello = document.querySelector('#hello');\n\n\n//# sourceURL=webpack:///./src/js/finder.js?");

/***/ }),

/***/ "./src/js/languages.js":
/*!*****************************!*\
  !*** ./src/js/languages.js ***!
  \*****************************/
/*! exports provided: languages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"languages\", function() { return languages; });\n/* harmony import */ var random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! random */ \"./node_modules/random/index.js\");\n/* harmony import */ var random__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(random__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst languages =  [\n    'French: Bonjour' + random__WEBPACK_IMPORTED_MODULE_0___default.a.int(0, 100),\n    'Spanish: Hola' + random__WEBPACK_IMPORTED_MODULE_0___default.a.int(0, 100),\n    'German: Guten Tag' + random__WEBPACK_IMPORTED_MODULE_0___default.a.int(0, 100),\n    'Italian: Salve' + random__WEBPACK_IMPORTED_MODULE_0___default.a.int(0, 100),\n    'Mongolian: Sainuu' + random__WEBPACK_IMPORTED_MODULE_0___default.a.int(0, 100)\n]\n\n//# sourceURL=webpack:///./src/js/languages.js?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?");

/***/ })

/******/ });