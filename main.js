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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHeader\": () => (/* binding */ loadHeader)\n/* harmony export */ });\nconst loadHeader = () => {\n  const headerContainer = document.querySelector('header');\n\n  const leftElementsContainer = document.createElement('div');\n\n  const logo = document.createElement('img');\n  const tabLinks = document.createElement('ul');\n\n  const homeLinkListItem = document.createElement('li');\n  const menuLinkListItem = document.createElement('li');\n  const contactLinkListItem = document.createElement('li');\n\n  const homeLink = document.createElement('a');\n  const menuLink = document.createElement('a');\n  const contactLink = document.createElement('a');\n\n  const rightElementsContainer = document.createElement('div');\n  const orderNowButton = document.createElement('button');\n  const searchIcon = document.createElement('img');\n  const cartIcon = document.createElement('img');\n\n  leftElementsContainer.classList.add('header-left-elements');\n  rightElementsContainer.classList.add('header-right-elements');\n  logo.classList.add('header-logo');\n  tabLinks.classList.add('tab-links');\n  homeLink.classList.add('selected-tab');\n  searchIcon.classList.add('header-icon')\n  cartIcon.classList.add('header-icon')\n  orderNowButton.classList.add('order-now-button');\n  searchIcon.setAttribute('src', '../src/components/search.svg');\n  cartIcon.setAttribute('src', '../src/components/shopping-cart.svg');\n\n  logo.setAttribute('src', '../src/components/logo.png');\n\n  homeLink.textContent = 'home';\n  menuLink.textContent = 'menu';\n  contactLink.textContent = 'contact';\n  orderNowButton.textContent = 'order now';\n\n  homeLinkListItem.append(homeLink);\n  menuLinkListItem.append(menuLink);\n  contactLinkListItem.append(contactLink);\n  tabLinks.append(homeLinkListItem, menuLinkListItem, contactLinkListItem);\n  leftElementsContainer.append(logo, tabLinks);\n  rightElementsContainer.append(searchIcon, cartIcon, orderNowButton);\n\n  headerContainer.append(leftElementsContainer, rightElementsContainer);\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHomePage\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\nconst loadHomePage = () => {\n  const contentDiv = document.querySelector('#content');\n\n  const heroContainer = document.createElement('div');\n  const heroTextContainer = document.createElement('div');\n  const heroImage = document.createElement('img');\n  const headline = document.createElement('h1');\n  const heroParagraph = document.createElement('p');\n  const heroButton = document.createElement('button');\n  const arrowRightIcon = document.createElement('img');\n\n  heroContainer.classList.add('hero');\n  heroTextContainer.classList.add('hero-text');\n  heroImage.classList.add('hero-image');\n  headline.classList.add('headline');\n  heroButton.classList.add('order-now-button');\n\n  headline.textContent = 'Eat your salads just how you like them!';\n  heroParagraph.textContent =\n    \"Looking for an eco-friendly restaurant that quickly delivers fresh and healthy salads? We've got you!\";\n  heroButton.textContent = 'Order Now';\n\n  arrowRightIcon.setAttribute('src', '../src/components/arrow-right.svg');\n  heroImage.setAttribute('src', '../src/components/hero-image.png');\n\n  heroTextContainer.append(headline, heroParagraph, heroButton);\n  heroContainer.append(heroTextContainer, heroImage);\n  heroButton.append(arrowRightIcon);\n  contentDiv.append(heroContainer);\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nconst emptyContentDiv = () => {\n  const contentDiv = document.querySelector('#content');\n  while (contentDiv.firstChild) {\n    contentDiv.removeChild(contentDiv.lastChild);\n  }\n};\n\nconst loadPage = (tabName) =>\n  ({\n    home: _home_js__WEBPACK_IMPORTED_MODULE_1__.loadHomePage,\n    menu: _menu_js__WEBPACK_IMPORTED_MODULE_2__.loadMenuPage,\n    contact: _contact_js__WEBPACK_IMPORTED_MODULE_3__.loadContactPage,\n  }[tabName]?.());\n\nconst removeSelectedTabClass = () => {\n  const headerTabLinks = document.querySelectorAll('.tab-links li a');\n  for (const link of headerTabLinks) link.classList.remove('selected-tab');\n};\n\nconst switchTab = () => {\n  const headerTabLinks = document.querySelectorAll('.tab-links li a');\n  for (const link of headerTabLinks) {\n    link.addEventListener('click', () => {\n      emptyContentDiv();\n      loadPage(link.textContent);\n      removeSelectedTabClass();\n      link.classList.add('selected-tab');\n    });\n  }\n};\n\n(0,_header_js__WEBPACK_IMPORTED_MODULE_0__.loadHeader)();\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();\nswitchTab();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenuPage\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nlet menu = [];\n\nconst Salad = function (name, image, ingredients, price) {\n  this.name = name;\n  this.image = image;\n  this.ingredients = ingredients;\n  this.price = price;\n};\n\nconst addSaladToMenu = (name, image, ingredients, price) => {\n  const newSalad = new Salad(name, image, ingredients, price);\n  menu = [...menu, newSalad];\n};\n\naddSaladToMenu(\n  'Salad 1',\n  '../src/components/salads/salad1.png',\n  'Sliced strawberry and vegetables',\n  '8.90'\n);\n\naddSaladToMenu(\n  'Salad 2',\n  '../src/components/salads/salad2.png',\n  'Lettuce, cucumber, chicken, tomatos, broccoli',\n  '10.90'\n);\n\naddSaladToMenu(\n  'Salad 3',\n  '../src/components/salads/salad3.png',\n  'Kiwi, strawberries, blueberries, mango',\n  '7.90'\n);\n\naddSaladToMenu(\n  'Salad 4',\n  '../src/components/salads/salad4.png',\n  'Carrots, lettuce, chicken, mushrooms',\n  '10.90'\n);\n\naddSaladToMenu(\n  'Salad 5',\n  '../src/components/salads/salad5.png',\n  'Egg, chicken, tomatoes, lettuce, onion',\n  '7.90'\n);\n\naddSaladToMenu(\n  'Salad 6',\n  '../src/components/salads/salad6.png',\n  'Spinach, cucumber, chicken, red cabbage',\n  '8.90'\n);\n\nconst loadMenuPage = () => {\n  const contentDiv = document.querySelector('#content');\n  const menuContainer = document.createElement('div');\n  const menuHeading = document.createElement('h1');\n  const saladGrid = document.createElement('div');\n\n  menuHeading.textContent = 'Our Menu';\n  menuContainer.classList.add('menu');\n  saladGrid.classList.add('salad-grid');\n\n  for (const salad of menu) {\n    const saladCard = document.createElement('div');\n\n    const saladImage = document.createElement('img');\n    const saladName = document.createElement('h3');\n    const saladIngredients = document.createElement('p');\n    const saladPrice = document.createElement('p');\n    const addToCartButton = document.createElement('button');\n    const plusIcon = document.createElement('img');\n\n    saladCard.classList.add('salad-card');\n    saladImage.classList.add('salad-card-image');\n    saladName.classList.add('salad-card-name');\n    saladIngredients.classList.add('salad-card-ingredients');\n    saladPrice.classList.add('salad-card-price');\n    addToCartButton.classList.add('salad-card-add-to-cart');\n    plusIcon.classList.add('salad-card-plus-icon');\n\n    saladImage.setAttribute('src', salad.image);\n    saladName.textContent = salad.name;\n    saladIngredients.textContent = salad.ingredients;\n    saladPrice.textContent = `€${salad.price}`;\n    plusIcon.setAttribute('src', '../src/components/plus.svg');\n    addToCartButton.append(plusIcon);\n\n    saladCard.append(\n      saladImage,\n      saladName,\n      saladIngredients,\n      saladPrice,\n      addToCartButton\n    );\n    saladGrid.append(saladCard);\n  }\n\n  menuContainer.append(menuHeading, saladGrid);\n  contentDiv.append(menuContainer);\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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