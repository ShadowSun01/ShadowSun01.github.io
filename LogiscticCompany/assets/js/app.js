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

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ }),

/***/ "./src/assets/js/form.js":
/*!*******************************!*\
  !*** ./src/assets/js/form.js ***!
  \*******************************/
/***/ (function() {

eval("const quiz__items = document.querySelectorAll('.quiz__item');\r\nconst radio__inputs = document.querySelectorAll('.quiz__input')\r\n\r\nfunction resetAttribute(elementList, attribute) {\r\n    elementList.forEach(element => {\r\n        element.removeAttribute(attribute);\r\n    })\r\n}\r\n\r\nfunction resetClass(elementList, className) {\r\n    elementList.forEach(element => {\r\n        element.classList.remove(className);\r\n    })\r\n}\r\n\r\nquiz__items.forEach((item) => {\r\n    item.addEventListener('click', (event) => {\r\n        const activeElementCount = document.querySelectorAll('.borderGreen').length;\r\n        if (activeElementCount == 0) {\r\n            item.classList.add('borderGreen');\r\n            item.querySelector('.quiz__input').setAttribute('checked', 'checked');\r\n        } else {\r\n            resetAttribute(radio__inputs, 'checked');\r\n            resetClass(quiz__items, 'borderGreen');\r\n            item.classList.add('borderGreen');\r\n            item.querySelector('.quiz__input').setAttribute('checked', 'checked');\r\n        }\r\n    })\r\n})\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/form.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/***/ (function() {

eval("\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	__webpack_modules__["./src/assets/js/form.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/slider.js"]();
/******/ 	
/******/ })()
;