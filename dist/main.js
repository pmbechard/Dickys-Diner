/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Pacifico-Regular.ttf */ \"./src/fonts/Pacifico-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! img/pexels-yura-forrat-12012847.jpg */ \"./src/img/pexels-yura-forrat-12012847.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --showInfo: hidden;\\n    --itemDescription: 'description';\\n}\\n\\n* {\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\\n}\\n\\n@font-face {\\n    font-family: 'TitleFont';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\nbody {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    background-color: #222;\\n    background-position: top left;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n}\\n\\n.main-title {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n\\n    margin: 2vw 5vw;\\n    height: calc(25vh - 4vw);\\n    width: calc(100vw - 10vw);\\n    background-image: linear-gradient(rgba(45, 45, 45, 0.5), rgba(45, 45, 45, 0.9));\\n    border: 4px solid #222;\\n    border-radius: 8px;\\n}\\n\\nh1 {\\n    font-family: 'TitleFont';\\n    text-align: center;\\n    font-size: max(48px, 6vw);\\n    color: rgb(197, 123, 32);\\n    text-shadow: 1px 1px 1px #222;\\n    animation: candlelight 1s linear infinite;\\n}\\n\\n@keyframes candlelight {\\n    0% {\\n        color: rgb(197, 123, 32);\\n    }\\n    20% {\\n        color: rgb(194, 115, 19);    \\n    }\\n    40% {\\n        color: rgb(183, 104, 8); \\n    }\\n    60% {\\n        color: rgb(177, 113, 36); \\n    }\\n    80% {\\n        color: rgb(194, 115, 19);    \\n    }\\n\\n}\\n\\nul {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\nli {\\n    margin: 0 5vw;\\n    font-size: 18px;\\n    list-style: none;\\n    text-align: center;\\n\\n    background-color: rgba(143, 160, 183, 0.8);\\n    border: 1px solid #222;\\n    border-radius: 8px;\\n    padding: 4px;\\n    width: 150px;\\n}\\n\\nli:hover {\\n    background-color: rgba(197, 123, 32, 0.8);\\n}\\n\\nli:active {\\n    background-color: rgba(197, 123, 32, 0.9);\\n}\\n\\n.disabled-button {\\n    border: 1px solid rgba(197, 123, 32, 0.9);\\n    background-color:  rgba(143, 160, 183, 1);\\n}\\n\\n.disabled-button:hover {\\n    border: 1px solid rgba(197, 123, 32, 0.9);\\n    background-color:  rgba(143, 160, 183, 1);\\n}\\n\\n\\n\\nmain {\\n    height: 70vh;\\n    width: 100vw;\\n\\n    margin: 2vw 5vw;\\n    height: calc(65vh - 4vw);\\n    width: calc(100vw - 10vw);\\n    background-image: linear-gradient(rgba(45, 45, 45, 0.7), rgba(45, 45, 45, 0.9));\\n    color: #aaa;\\n    text-shadow: 1px 1px 1px #222;\\n    border: 4px solid #222;\\n    border-radius: 8px;\\n}\\n\\n.menu-item-container {\\n    transition: all 0.3s ease-in-out;\\n}\\n\\n.menu-item-container::before {\\n    content: var(--itemDescription);\\n    position: absolute;\\n    font-size: 24px;\\n    visibility: var(--showInfo);\\n    text-align: center;\\n}\\n\\nmain h2 {\\n    font-size: clamp(18px, 2.5vw, 24px);\\n}\\n\\nmain p {\\n    font-size: clamp(12px, 2vw, 18px);\\n}\\n\\n/* UGLY, UGLY, UGLY BAND-AID */\\n#item-1:hover {\\n    --itemDescription: \\\"stick du jour\\\";\\n}\\n\\n#item-2:hover {\\n    --itemDescription: \\\"freshly-worn sandals\\\";\\n}\\n\\n#item-3:hover {\\n    --itemDescription: \\\"dry chicken and rice house mix\\\";\\n}\\n\\n#item-4:hover {\\n    --itemDescription: \\\"organic kitty\\\";\\n}\\n\\n#item-5:hover {\\n    --itemDescription: \\\"locally-sourced chews\\\";\\n}\\n\\n#item-6:hover {\\n    --itemDescription: \\\"pupcakes\\\";\\n}\\n\\n.menu-item-container:hover {\\n    opacity: 0.9;\\n    transform: scale(1.5);\\n}\\n\\n\\n\\n\\n\\nfooter {\\n    position: absolute;\\n    bottom: 0px;\\n\\n    background-image: linear-gradient(rgba(45, 45, 45, 0.7), rgba(45, 45, 45, 0.9));\\n    color: #aaa;\\n    width: 100vw;\\n    padding: 5px 20px;\\n    text-align: center;\\n    font-size: clamp(12px, 1.5vw, 14px);\\n}\\n\\nsmall {\\n    transition: all 0.2s ease-in-out;\\n}\\n\\nsmall:hover {\\n    cursor: pointer;\\n    font-size: clamp(12.5px, 1.6vw, 14.1px);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dickys-diner/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://dickys-diner/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://dickys-diner/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dickys-diner/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://dickys-diner/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://dickys-diner/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://dickys-diner/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://dickys-diner/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://dickys-diner/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://dickys-diner/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://dickys-diner/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContactPage\": () => (/* binding */ renderContactPage)\n/* harmony export */ });\n/* harmony import */ var _img_twitter_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/twitter.svg */ \"./src/img/twitter.svg\");\n/* harmony import */ var _img_facebook_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/facebook.svg */ \"./src/img/facebook.svg\");\n/* harmony import */ var _img_instagram_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/instagram.svg */ \"./src/img/instagram.svg\");\n\n\n\n\nfunction renderContactPage() {\n    const contactButton = document.getElementById('contact');\n    contactButton.classList.add('disabled-button');\n\n    const content = document.getElementById('content');\n    content.innerHTML = '';\n    const title = document.createElement('h2');\n    title.textContent = 'Contact';\n\n    const map = document.createElement('div');\n    map.innerHTML = '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62751.05445586421!2d103.27405865952318!3d10.583793589852403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3107eede3706b249%3A0xf4bc7be5df0f6e74!2sKoh%20Rong%20Sanloem!5e0!3m2!1sen!2sca!4v1651996516696!5m2!1sen!2sca\" width=\"400\" height=\"300\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>';\n    map.style.margin =  '20px';\n    map.style.border =  '2px solid #222';\n\n    const twitterLink = new Image();\n    twitterLink.src = _img_twitter_svg__WEBPACK_IMPORTED_MODULE_0__;\n    const facebookLink = new Image();\n    facebookLink.src = _img_facebook_svg__WEBPACK_IMPORTED_MODULE_1__;\n    const instagramLink = new Image();\n    instagramLink.src = _img_instagram_svg__WEBPACK_IMPORTED_MODULE_2__;\n\n    const linkArea = document.createElement('div');\n    linkArea.style.display = 'flex';\n    linkArea.style.justifyContent = 'center';\n    linkArea.style.alignItems = 'center';\n    linkArea.style.gap = '20px';\n    linkArea.style.cursor = 'pointer';\n    linkArea.appendChild(twitterLink);\n    linkArea.appendChild(facebookLink);\n    linkArea.appendChild(instagramLink);\n\n    content.appendChild(title);\n    content.appendChild(map);\n    content.appendChild(linkArea);\n}\n\n\n\n//# sourceURL=webpack://dickys-diner/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHomePage\": () => (/* binding */ renderHomePage)\n/* harmony export */ });\n/* harmony import */ var _img_dicky_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/dicky.png */ \"./src/img/dicky.png\");\n\n\n\nfunction renderHomePage() {\n    const homeButton = document.getElementById('home');\n    homeButton.classList.add('disabled-button');\n\n    const content = document.getElementById('content');\n    content.innerHTML = '';\n    content.style.display = 'flex';\n    content.style.flexDirection = 'column';\n    content.style.justifyContent = 'center';\n    content.style.alignItems = 'center';\n    content.style.height = '100%';\n\n    const title = document.createElement('h2');\n    title.innerHTML = 'Est. 2021 by world-renowned chef, Dicky Béxian\\'rde';\n    title.style.textAlign = 'center';\n\n    const description = document.createElement('p');\n    description.innerHTML = 'Here, we serve the best home-cooked meals for puppies big and small. <br>It\\'s ri<i>dick</i>ulously good!';\n    description.style.textAlign = 'center';\n    description.style.padding = '20px';\n    description.style.lineHeight = 'max(14px, 3vw)';\n\n    const dicky = new Image();\n    dicky.src = _img_dicky_png__WEBPACK_IMPORTED_MODULE_0__;\n    dicky.style.height = '200px';\n    dicky.style.borderRadius = '10%';\n    dicky.style.boxShadow = '1px 1px 1px #222';\n\n    const tagline = document.createElement('p');\n    tagline.textContent = '\"No one leaves with a downward tail at Dicky\\'s Diner!\"';\n    tagline.style.padding = '20px';\n    tagline.style.fontFamily = 'TitleFont';\n    tagline.style.textAlign = 'center';\n\n\n    content.appendChild(title);\n    content.appendChild(description);\n    content.appendChild(dicky);\n    content.appendChild(tagline);\n}\n\n\n\n//# sourceURL=webpack://dickys-diner/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _img_cottage_FILL1_wght400_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/cottage_FILL1_wght400_GRAD0_opsz48.png */ \"./src/img/cottage_FILL1_wght400_GRAD0_opsz48.png\");\n/* harmony import */ var _img_restaurant_menu_FILL1_wght400_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/restaurant_menu_FILL1_wght400_GRAD0_opsz48.png */ \"./src/img/restaurant_menu_FILL1_wght400_GRAD0_opsz48.png\");\n/* harmony import */ var _img_pin_drop_FILL1_wght400_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/pin_drop_FILL1_wght400_GRAD0_opsz48.png */ \"./src/img/pin_drop_FILL1_wght400_GRAD0_opsz48.png\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n\n\n// Sets favicon\nconst faviconImg = new Image();\nfaviconImg.src = _img_restaurant_menu_FILL1_wght400_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_4__;\nconst linkFavicon = document.createElement('link');\nlinkFavicon.setAttribute('rel', 'shortcut icon');\nlinkFavicon.setAttribute('type', 'image/ico');\nlinkFavicon.setAttribute('href', _img_restaurant_menu_FILL1_wght400_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_4__);\ndocument.head.appendChild(linkFavicon);\n\n\nconst initialDisplay = (renderFunc=_home__WEBPACK_IMPORTED_MODULE_0__.renderHomePage) => {\n    const buttons = document.querySelectorAll('header li');\n    buttons.forEach( (button) => button.classList.remove('disabled-button'));\n    renderFunc();\n};\n\ninitialDisplay();\n\n\n// STATIC ELEMENTS\nconst home = document.getElementById('home');\nconst homeIcon = new Image();\nhomeIcon.src = _img_cottage_FILL1_wght400_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_3__;\nhomeIcon.style.height = '30px';\nhome.appendChild(homeIcon);\nhome.onclick = () => initialDisplay(_home__WEBPACK_IMPORTED_MODULE_0__.renderHomePage);\n\nconst menu = document.getElementById('menu');\nconst menuIcon = new Image();\nmenuIcon.src = _img_restaurant_menu_FILL1_wght400_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_4__;\nmenuIcon.style.height = '30px';\nmenu.appendChild(menuIcon);\nmenu.onclick = () => initialDisplay(_menu__WEBPACK_IMPORTED_MODULE_1__.renderMenuPage);\n\nconst contact = document.getElementById('contact');\nconst contactIcon = new Image();\ncontactIcon.src = _img_pin_drop_FILL1_wght400_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_5__;\ncontactIcon.style.height = '30px';\ncontact.appendChild(contactIcon);\ncontact.onclick = () => initialDisplay(_contact__WEBPACK_IMPORTED_MODULE_2__.renderContactPage);\n\nconst footerLink = document.querySelector('small');\nfooterLink.onclick = () => window.open('https://github.com/pmbechard/Dickys-Diner', '_blank');\n\n//# sourceURL=webpack://dickys-diner/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenuPage\": () => (/* binding */ renderMenuPage)\n/* harmony export */ });\n/* harmony import */ var _img_menu_jamie_street_uNNCs5kL70Q_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/menu/jamie-street-uNNCs5kL70Q-unsplash.jpg */ \"./src/img/menu/jamie-street-uNNCs5kL70Q-unsplash.jpg\");\n/* harmony import */ var _img_menu_kikikap_IZgx6GnODc0_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/menu/kikikap-IZgx6GnODc0-unsplash.jpg */ \"./src/img/menu/kikikap-IZgx6GnODc0-unsplash.jpg\");\n/* harmony import */ var _img_menu_mathew_coulton_zxqaAkkayP8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/menu/mathew-coulton-zxqaAkkayP8-unsplash.jpg */ \"./src/img/menu/mathew-coulton-zxqaAkkayP8-unsplash.jpg\");\n/* harmony import */ var _img_menu_max_baskakov_OzAeZPNsLXk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/menu/max-baskakov-OzAeZPNsLXk-unsplash.jpg */ \"./src/img/menu/max-baskakov-OzAeZPNsLXk-unsplash.jpg\");\n/* harmony import */ var _img_menu_r_r_medicinals_Vv50h13jis0_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/menu/r-r-medicinals-Vv50h13jis0-unsplash.jpg */ \"./src/img/menu/r-r-medicinals-Vv50h13jis0-unsplash.jpg\");\n/* harmony import */ var _img_menu_susan_q_yin_1O6_I_6STAU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/menu/susan-q-yin-1O6_I_6STAU-unsplash.jpg */ \"./src/img/menu/susan-q-yin-1O6_I_6STAU-unsplash.jpg\");\n\n\n\n\n\n\n\nfunction renderMenuPage() {\n    const menuButton = document.getElementById('menu');\n    menuButton.classList.add('disabled-button');\n\n\n    const content = document.getElementById('content');\n    content.innerHTML = '';\n    const title = document.createElement('h2');\n    title.textContent = 'Menu';\n\n    const menuItems = document.createElement('div');\n    menuItems.style.display = 'grid';\n    menuItems.style.gridTemplate = '1fr 1fr / 1fr 1fr 1fr';\n    menuItems.style.height = '80%';\n    menuItems.style.alignItems = 'center';\n    menuItems.style.gap = '20px';\n    const menuItem1 = new Image();\n    const menuItem2 = new Image();\n    const menuItem3 = new Image();\n    const menuItem4 = new Image();\n    const menuItem5 = new Image();\n    const menuItem6 = new Image();\n    menuItem1.src = _img_menu_jamie_street_uNNCs5kL70Q_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    menuItem2.src = _img_menu_kikikap_IZgx6GnODc0_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    menuItem3.src = _img_menu_mathew_coulton_zxqaAkkayP8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    menuItem4.src = _img_menu_max_baskakov_OzAeZPNsLXk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__;\n    menuItem5.src = _img_menu_r_r_medicinals_Vv50h13jis0_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__;\n    menuItem6.src = _img_menu_susan_q_yin_1O6_I_6STAU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_5__;\n    const allItems = [menuItem1, menuItem2, menuItem3, menuItem4, menuItem5, menuItem6];\n    let counter = 1;\n    const descriptions = ['Freshly fallen stick.', '', '', '', '', ''];\n    allItems.forEach((item) => {\n        const container = document.createElement('div');\n        container.style.display = 'flex';\n        container.style.justifyContent = 'center';\n        container.style.alignItems = 'center';\n        container.classList.add('menu-item-container');\n        container.id = `item-${counter++}`;\n        item.classList.add('menu-item');\n        item.style.height = '150px';\n        item.style.width = '200px';\n        item.style.objectFit = 'cover';\n        item.style.border = '2px solid #222';\n        item.style.boxShadow = '1px 1px 1px #222';\n        container.addEventListener('mouseover', () => {\n            // container.style.setProperty('--itemDescription', descriptions[String(container.id.charAt(String(container.id).length-1)-1)]);\n            container.style.setProperty('--showInfo', 'visible');\n            // console.log(descriptions[counter-2], descriptions[String(container.id.charAt(String(container.id).length-1)-1)]);\n            // document.querySelector(':root').style.setProperty('--itemDescription', 'stick');\n        });\n        container.addEventListener('mouseleave', () => container.style.setProperty('--showInfo', 'hidden'))\n        container.appendChild(item);\n        menuItems.appendChild(container);\n    });\n    menuItem4.style.objectPosition = 'top';\n    menuItem5.style.objectPosition = 'bottom';\n\n    content.appendChild(title);\n    content.appendChild(menuItems);\n}\n\n\n\n\n\n//# sourceURL=webpack://dickys-diner/./src/menu.js?");

/***/ }),

/***/ "./src/fonts/Pacifico-Regular.ttf":
/*!****************************************!*\
  !*** ./src/fonts/Pacifico-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c0d735fc04154e03a691.ttf\";\n\n//# sourceURL=webpack://dickys-diner/./src/fonts/Pacifico-Regular.ttf?");

/***/ }),

/***/ "./src/img/cottage_FILL1_wght400_GRAD0_opsz48.png":
/*!********************************************************!*\
  !*** ./src/img/cottage_FILL1_wght400_GRAD0_opsz48.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6d93f85a06bba8a9bda6.png\";\n\n//# sourceURL=webpack://dickys-diner/./src/img/cottage_FILL1_wght400_GRAD0_opsz48.png?");

/***/ }),

/***/ "./src/img/dicky.png":
/*!***************************!*\
  !*** ./src/img/dicky.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e07d163c70b73a61e8fd.png\";\n\n//# sourceURL=webpack://dickys-diner/./src/img/dicky.png?");

/***/ }),

/***/ "./src/img/facebook.svg":
/*!******************************!*\
  !*** ./src/img/facebook.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"92cbae04cc68a2e8cf92.svg\";\n\n//# sourceURL=webpack://dickys-diner/./src/img/facebook.svg?");

/***/ }),

/***/ "./src/img/instagram.svg":
/*!*******************************!*\
  !*** ./src/img/instagram.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8653ab112a062a52489d.svg\";\n\n//# sourceURL=webpack://dickys-diner/./src/img/instagram.svg?");

/***/ }),

/***/ "./src/img/menu/jamie-street-uNNCs5kL70Q-unsplash.jpg":
/*!************************************************************!*\
  !*** ./src/img/menu/jamie-street-uNNCs5kL70Q-unsplash.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9ef92dc34db600a5867b.jpg\";\n\n//# sourceURL=webpack://dickys-diner/./src/img/menu/jamie-street-uNNCs5kL70Q-unsplash.jpg?");

/***/ }),

/***/ "./src/img/menu/kikikap-IZgx6GnODc0-unsplash.jpg":
/*!*******************************************************!*\
  !*** ./src/img/menu/kikikap-IZgx6GnODc0-unsplash.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7562c2fd4f04aedc046e.jpg\";\n\n//# sourceURL=webpack://dickys-diner/./src/img/menu/kikikap-IZgx6GnODc0-unsplash.jpg?");

/***/ }),

/***/ "./src/img/menu/mathew-coulton-zxqaAkkayP8-unsplash.jpg":
/*!**************************************************************!*\
  !*** ./src/img/menu/mathew-coulton-zxqaAkkayP8-unsplash.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5bbe422420bae3e5ef83.jpg\";\n\n//# sourceURL=webpack://dickys-diner/./src/img/menu/mathew-coulton-zxqaAkkayP8-unsplash.jpg?");

/***/ }),

/***/ "./src/img/menu/max-baskakov-OzAeZPNsLXk-unsplash.jpg":
/*!************************************************************!*\
  !*** ./src/img/menu/max-baskakov-OzAeZPNsLXk-unsplash.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6af379f1163c162f232f.jpg\";\n\n//# sourceURL=webpack://dickys-diner/./src/img/menu/max-baskakov-OzAeZPNsLXk-unsplash.jpg?");

/***/ }),

/***/ "./src/img/menu/r-r-medicinals-Vv50h13jis0-unsplash.jpg":
/*!**************************************************************!*\
  !*** ./src/img/menu/r-r-medicinals-Vv50h13jis0-unsplash.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d37839d31ec0790d2c04.jpg\";\n\n//# sourceURL=webpack://dickys-diner/./src/img/menu/r-r-medicinals-Vv50h13jis0-unsplash.jpg?");

/***/ }),

/***/ "./src/img/menu/susan-q-yin-1O6_I_6STAU-unsplash.jpg":
/*!***********************************************************!*\
  !*** ./src/img/menu/susan-q-yin-1O6_I_6STAU-unsplash.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"32a2ada9e284a6bcca43.jpg\";\n\n//# sourceURL=webpack://dickys-diner/./src/img/menu/susan-q-yin-1O6_I_6STAU-unsplash.jpg?");

/***/ }),

/***/ "./src/img/pexels-yura-forrat-12012847.jpg":
/*!*************************************************!*\
  !*** ./src/img/pexels-yura-forrat-12012847.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"06c781262c1672edfad5.jpg\";\n\n//# sourceURL=webpack://dickys-diner/./src/img/pexels-yura-forrat-12012847.jpg?");

/***/ }),

/***/ "./src/img/pin_drop_FILL1_wght400_GRAD0_opsz48.png":
/*!*********************************************************!*\
  !*** ./src/img/pin_drop_FILL1_wght400_GRAD0_opsz48.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ea6073518d7dfdde4229.png\";\n\n//# sourceURL=webpack://dickys-diner/./src/img/pin_drop_FILL1_wght400_GRAD0_opsz48.png?");

/***/ }),

/***/ "./src/img/restaurant_menu_FILL1_wght400_GRAD0_opsz48.png":
/*!****************************************************************!*\
  !*** ./src/img/restaurant_menu_FILL1_wght400_GRAD0_opsz48.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"98c52aeb34c6a0b53062.png\";\n\n//# sourceURL=webpack://dickys-diner/./src/img/restaurant_menu_FILL1_wght400_GRAD0_opsz48.png?");

/***/ }),

/***/ "./src/img/twitter.svg":
/*!*****************************!*\
  !*** ./src/img/twitter.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6b4f14932bdba449ae71.svg\";\n\n//# sourceURL=webpack://dickys-diner/./src/img/twitter.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;