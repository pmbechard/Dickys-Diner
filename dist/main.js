/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContactPage\": () => (/* binding */ renderContactPage)\n/* harmony export */ });\n/* harmony import */ var _img_twitter_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/twitter.svg */ \"./src/img/twitter.svg\");\n/* harmony import */ var _img_twitter_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_twitter_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_facebook_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/facebook.svg */ \"./src/img/facebook.svg\");\n/* harmony import */ var _img_facebook_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_facebook_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_instagram_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/instagram.svg */ \"./src/img/instagram.svg\");\n/* harmony import */ var _img_instagram_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_instagram_svg__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction renderContactPage() {\n    const contactButton = document.getElementById('contact');\n    contactButton.classList.add('disabled-button');\n\n    const content = document.getElementById('content');\n    content.innerHTML = '';\n    const title = document.createElement('h2');\n    title.textContent = 'Contact';\n\n    const map = document.createElement('div');\n    map.innerHTML = '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62751.05445586421!2d103.27405865952318!3d10.583793589852403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3107eede3706b249%3A0xf4bc7be5df0f6e74!2sKoh%20Rong%20Sanloem!5e0!3m2!1sen!2sca!4v1651996516696!5m2!1sen!2sca\" width=\"400\" height=\"300\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>';\n    map.style.margin =  '20px';\n    map.style.border =  '2px solid #222';\n\n    const twitterLink = new Image();\n    twitterLink.src = (_img_twitter_svg__WEBPACK_IMPORTED_MODULE_0___default());\n    const facebookLink = new Image();\n    facebookLink.src = (_img_facebook_svg__WEBPACK_IMPORTED_MODULE_1___default());\n    const instagramLink = new Image();\n    instagramLink.src = (_img_instagram_svg__WEBPACK_IMPORTED_MODULE_2___default());\n\n    const linkArea = document.createElement('div');\n    linkArea.style.display = 'flex';\n    linkArea.style.justifyContent = 'center';\n    linkArea.style.alignItems = 'center';\n    linkArea.style.gap = '20px';\n    linkArea.style.cursor = 'pointer';\n    linkArea.appendChild(twitterLink);\n    linkArea.appendChild(facebookLink);\n    linkArea.appendChild(instagramLink);\n\n    content.appendChild(title);\n    content.appendChild(map);\n    content.appendChild(linkArea);\n}\n\n\n\n//# sourceURL=webpack://dickys-diner/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHomePage\": () => (/* binding */ renderHomePage)\n/* harmony export */ });\n/* harmony import */ var _img_dicky_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/dicky.png */ \"./src/img/dicky.png\");\n/* harmony import */ var _img_dicky_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_img_dicky_png__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nfunction renderHomePage() {\n    const homeButton = document.getElementById('home');\n    homeButton.classList.add('disabled-button');\n\n    const content = document.getElementById('content');\n    content.innerHTML = '';\n    content.style.display = 'flex';\n    content.style.flexDirection = 'column';\n    content.style.justifyContent = 'center';\n    content.style.alignItems = 'center';\n    content.style.height = '100%';\n\n    const title = document.createElement('h2');\n    title.innerHTML = 'Est. 2021 by world-renowned chef, Dicky Béxian\\'rde';\n    title.style.textAlign = 'center';\n\n    const description = document.createElement('p');\n    description.innerHTML = 'Here, we serve the best home-cooked meals for puppies big and small. <br>It\\'s ri<i>dick</i>ulously good!';\n    description.style.textAlign = 'center';\n    description.style.padding = '20px';\n    description.style.lineHeight = '30px';\n\n    const dicky = new Image();\n    dicky.src = (_img_dicky_png__WEBPACK_IMPORTED_MODULE_0___default());\n    dicky.style.height = '200px';\n    dicky.style.borderRadius = '10%';\n    dicky.style.boxShadow = '1px 1px 1px #222';\n\n    const tagline = document.createElement('p');\n    tagline.textContent = '\"No one leaves with a downward tail at Dicky\\'s Diner!\"';\n    tagline.style.padding = '20px';\n    tagline.style.fontFamily = 'TitleFont';\n\n\n    content.appendChild(title);\n    content.appendChild(description);\n    content.appendChild(dicky);\n    content.appendChild(tagline);\n}\n\n\n\n//# sourceURL=webpack://dickys-diner/./src/home.js?");

/***/ }),

/***/ "./src/img/cottage_FILL1_wght400_GRAD0_opsz48.png":
/*!********************************************************!*\
  !*** ./src/img/cottage_FILL1_wght400_GRAD0_opsz48.png ***!
  \********************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://dickys-diner/./src/img/cottage_FILL1_wght400_GRAD0_opsz48.png?");

/***/ }),

/***/ "./src/img/dicky.png":
/*!***************************!*\
  !*** ./src/img/dicky.png ***!
  \***************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://dickys-diner/./src/img/dicky.png?");

/***/ }),

/***/ "./src/img/facebook.svg":
/*!******************************!*\
  !*** ./src/img/facebook.svg ***!
  \******************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" stroke=\\\"#aaa\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" class=\\\"feather feather-facebook\\\"><path d=\\\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\\\"></path></svg>\");\n\n//# sourceURL=webpack://dickys-diner/./src/img/facebook.svg?");

/***/ }),

/***/ "./src/img/instagram.svg":
/*!*******************************!*\
  !*** ./src/img/instagram.svg ***!
  \*******************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" stroke=\\\"#aaa\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" class=\\\"feather feather-instagram\\\"><rect x=\\\"2\\\" y=\\\"2\\\" width=\\\"20\\\" height=\\\"20\\\" rx=\\\"5\\\" ry=\\\"5\\\"></rect><path d=\\\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\\\"></path><line x1=\\\"17.5\\\" y1=\\\"6.5\\\" x2=\\\"17.51\\\" y2=\\\"6.5\\\"></line></svg>\");\n\n//# sourceURL=webpack://dickys-diner/./src/img/instagram.svg?");

/***/ }),

/***/ "./src/img/pin_drop_FILL1_wght400_GRAD0_opsz48.png":
/*!*********************************************************!*\
  !*** ./src/img/pin_drop_FILL1_wght400_GRAD0_opsz48.png ***!
  \*********************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://dickys-diner/./src/img/pin_drop_FILL1_wght400_GRAD0_opsz48.png?");

/***/ }),

/***/ "./src/img/restaurant_menu_FILL1_wght400_GRAD0_opsz48.png":
/*!****************************************************************!*\
  !*** ./src/img/restaurant_menu_FILL1_wght400_GRAD0_opsz48.png ***!
  \****************************************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://dickys-diner/./src/img/restaurant_menu_FILL1_wght400_GRAD0_opsz48.png?");

/***/ }),

/***/ "./src/img/twitter.svg":
/*!*****************************!*\
  !*** ./src/img/twitter.svg ***!
  \*****************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" stroke=\\\"#aaa\\\" stroke-width=\\\"2\\\" stroke-linecap=\\\"round\\\" stroke-linejoin=\\\"round\\\" class=\\\"feather feather-twitter\\\"><path d=\\\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\\\"></path></svg>\");\n\n//# sourceURL=webpack://dickys-diner/./src/img/twitter.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _img_cottage_FILL1_wght400_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/cottage_FILL1_wght400_GRAD0_opsz48.png */ \"./src/img/cottage_FILL1_wght400_GRAD0_opsz48.png\");\n/* harmony import */ var _img_cottage_FILL1_wght400_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_cottage_FILL1_wght400_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _img_restaurant_menu_FILL1_wght400_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/restaurant_menu_FILL1_wght400_GRAD0_opsz48.png */ \"./src/img/restaurant_menu_FILL1_wght400_GRAD0_opsz48.png\");\n/* harmony import */ var _img_restaurant_menu_FILL1_wght400_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_restaurant_menu_FILL1_wght400_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _img_pin_drop_FILL1_wght400_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/pin_drop_FILL1_wght400_GRAD0_opsz48.png */ \"./src/img/pin_drop_FILL1_wght400_GRAD0_opsz48.png\");\n/* harmony import */ var _img_pin_drop_FILL1_wght400_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_pin_drop_FILL1_wght400_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\n\nconst initialDisplay = (renderFunc=_home__WEBPACK_IMPORTED_MODULE_0__.renderHomePage) => {\n    const buttons = document.querySelectorAll('header li');\n    buttons.forEach( (button) => button.classList.remove('disabled-button'));\n    renderFunc();\n};\n\ninitialDisplay();\n\n\n// STATIC ELEMENTS\nconst home = document.getElementById('home');\nconst homeIcon = new Image();\nhomeIcon.src = (_img_cottage_FILL1_wght400_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_3___default());\nhomeIcon.style.height = '30px';\nhome.appendChild(homeIcon);\nhome.onclick = () => initialDisplay(_home__WEBPACK_IMPORTED_MODULE_0__.renderHomePage);\n\nconst menu = document.getElementById('menu');\nconst menuIcon = new Image();\nmenuIcon.src = (_img_restaurant_menu_FILL1_wght400_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_4___default());\nmenuIcon.style.height = '30px';\nmenu.appendChild(menuIcon);\nmenu.onclick = () => initialDisplay(_menu__WEBPACK_IMPORTED_MODULE_1__.renderMenuPage);\n\nconst contact = document.getElementById('contact');\nconst contactIcon = new Image();\ncontactIcon.src = (_img_pin_drop_FILL1_wght400_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_5___default());\ncontactIcon.style.height = '30px';\ncontact.appendChild(contactIcon);\ncontact.onclick = () => initialDisplay(_contact__WEBPACK_IMPORTED_MODULE_2__.renderContactPage);\n\nconst footerLink = document.querySelector('small');\nfooterLink.onclick = () => window.open('https://github.com/pmbechard/Dickys-Diner', '_blank');\n\n//# sourceURL=webpack://dickys-diner/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenuPage\": () => (/* binding */ renderMenuPage)\n/* harmony export */ });\nfunction renderMenuPage() {\n    const menuButton = document.getElementById('menu');\n    menuButton.classList.add('disabled-button');\n\n\n    const content = document.getElementById('content');\n    content.innerHTML = '';\n    const title = document.createElement('h2');\n    title.textContent = 'Menu';\n    \n\n    content.appendChild(title);\n}\n\n\n\n\n\n//# sourceURL=webpack://dickys-diner/./src/menu.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> * {\\n|     margin: 0;\\n|     padding: 0;\");\n\n//# sourceURL=webpack://dickys-diner/./src/style.css?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;