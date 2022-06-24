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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContactPage\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nconst loadContactPage = () => {\n  const contentDiv = document.querySelector('#content');\n  contentDiv.textContent = 'Contact';\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHeader\": () => (/* binding */ loadHeader)\n/* harmony export */ });\nconst loadHeader = () => {\n  const headerContainer = document.querySelector('header');\n  const tabLinks = document.createElement('ul');\n\n  const homeLinkListItem = document.createElement('li');\n  const menuLinkListItem = document.createElement('li');\n  const contactLinkListItem = document.createElement('li');\n\n  const homeLink = document.createElement('a');\n  const menuLink = document.createElement('a');\n  const contactLink = document.createElement('a');\n\n  tabLinks.classList.add('tab-links');\n\n  homeLink.setAttribute('href', '#');\n  menuLink.setAttribute('href', '#');\n  contactLink.setAttribute('href', '#');\n\n  homeLink.textContent = 'Home';\n  menuLink.textContent = 'Menu';\n  contactLink.textContent = 'Contact';\n\n  homeLinkListItem.append(homeLink);\n  menuLinkListItem.append(menuLink);\n  contactLinkListItem.append(contactLink);\n\n  tabLinks.append(\n    homeLinkListItem,\n    menuLinkListItem,\n    contactLinkListItem\n  );\n  headerContainer.append(tabLinks);\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHomePage\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\nconst loadHomePage = () => {\n  const contentDiv = document.querySelector('#content');\n\n  const heroContainer = document.createElement('div');\n  const heroTextContainer = document.createElement('div');\n  const heroImage = document.createElement('img');\n  const headline = document.createElement('h1');\n  const heroParagraph = document.createElement('p');\n\n  heroContainer.classList.add('hero');\n  heroTextContainer.classList.add('hero-text');\n  heroImage.classList.add('hero-image');\n  headline.classList.add('headline');\n\n  headline.textContent = 'Enjoy delicious and healthy food.';\n  heroParagraph.textContent =\n    ' We provide the most delicious food based on high quality ingredients that are maintained by high tech machines and cooked by our experts.';\n\n  heroImage.setAttribute('src', '../src/components/image1.jpg');\n\n  heroTextContainer.append(headline, heroParagraph);\n  heroContainer.append(heroTextContainer, heroImage);\n  contentDiv.append(heroContainer);\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nconst emptyContentDiv = () => {\n  const contentDiv = document.querySelector('#content');\n  while (contentDiv.firstChild) {\n    contentDiv.removeChild(contentDiv.lastChild);\n  }\n};\n\nconst changeTabContent = (tabName) =>\n  ({\n    Home: _home_js__WEBPACK_IMPORTED_MODULE_1__.loadHomePage,\n    Menu: _menu_js__WEBPACK_IMPORTED_MODULE_2__.loadMenuPage,\n    Contact: _contact_js__WEBPACK_IMPORTED_MODULE_3__.loadContactPage,\n  }[tabName]?.());\n\nconst switchTab = () => {\n  const headerTabLinks = document.querySelectorAll('.tab-links li a');\n  for (const link of headerTabLinks) {\n    link.addEventListener('click', () => {\n      emptyContentDiv();\n      changeTabContent(link.textContent);\n    });\n  }\n};\n\n(0,_header_js__WEBPACK_IMPORTED_MODULE_0__.loadHeader)();\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();\nswitchTab();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenuPage\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nconst loadMenuPage = () => {\n  const contentDiv = document.querySelector('#content');\n  contentDiv.textContent = 'Menu';\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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