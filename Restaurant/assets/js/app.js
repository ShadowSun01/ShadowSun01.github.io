/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("console.log('file 1');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/burger-menu.js":
/*!**************************************!*\
  !*** ./src/assets/js/burger-menu.js ***!
  \**************************************/
/***/ (function() {

eval("const body = document.body;\r\nconst burger = document.querySelector('.header__burger');\r\nconst header = document.querySelector('.header');\r\nconst burgerMenu = document.querySelector('.nav-mobile');\r\nconst page = document.querySelector('.page');\r\n\r\nburger.addEventListener('click', (event) => {\r\n    if (body.classList.contains('show-sidebar')) {\r\n        removeSideBar();\r\n    } else {\r\n        showSideBar()\r\n    }\r\n});\r\n\r\npage.addEventListener('click', (event) =>{\r\n    stopEvent(burgerMenu);\r\n    stopEvent(header);\r\n\r\n    if(body.classList.contains('show-sidebar')){\r\n        removeSideBar()\r\n    }\r\n\r\n})\r\n\r\n\r\nfunction showSideBar() {\r\n    body.classList.add('show-sidebar')\r\n}\r\n\r\nfunction removeSideBar() {\r\n    body.classList.remove('show-sidebar')\r\n}\r\n\r\nfunction stopEvent(variable){\r\n    variable.addEventListener('click', (event) => {\r\n        event.stopPropagation()\r\n    })\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/burger-menu.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/***/ (function() {

eval("$(document).ready(function () {\r\n    $('.reviews__inner').slick({\r\n        infinite: true,\r\n        dots: true,\r\n        arrows: false,\r\n    });\r\n})\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/burger-menu.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/slider.js"]();
/******/ 	
/******/ })()
;