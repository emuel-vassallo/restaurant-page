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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const contentParent = document.querySelector('#content');\n\n// Header\nconst header = document.createElement('header');\n\n// Unordered List\nconst headerLinks = document.createElement('ul');\n\n// List Items\nconst homeLinkListItem = document.createElement('li');\nconst menuLinkListItem = document.createElement('li');\nconst contactLinkListItem = document.createElement('li');\n\n// Hyperlinks\nconst homeLink = document.createElement('a');\nconst menuLink = document.createElement('a');\nconst contactLink = document.createElement('a');\n\nheaderLinks.classList.add('header-links');\n\nhomeLink.setAttribute('href', '#');\nmenuLink.setAttribute('href', '#');\ncontactLink.setAttribute('href', '#');\n\nhomeLink.textContent = 'Home';\nmenuLink.textContent = 'Menu';\ncontactLink.textContent = 'Contact';\n\nhomeLinkListItem.append(homeLink);\nmenuLinkListItem.append(menuLink);\ncontactLinkListItem.append(contactLink);\n\nheaderLinks.append(homeLinkListItem, menuLinkListItem, contactLinkListItem);\nheader.append(headerLinks);\n\ncontentParent.appendChild(header);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;