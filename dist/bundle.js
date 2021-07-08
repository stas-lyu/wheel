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

/***/ "./src/scss/base.scss":
/*!****************************!*\
  !*** ./src/scss/base.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://wheel/./src/scss/base.scss?");

/***/ }),

/***/ "./src/scss/wheel.scss":
/*!*****************************!*\
  !*** ./src/scss/wheel.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://wheel/./src/scss/wheel.scss?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_wheel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/wheel.js */ \"./src/js/wheel.js\");\n/* harmony import */ var _js_wheel_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_wheel_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/base.scss */ \"./src/scss/base.scss\");\n/* harmony import */ var _scss_wheel_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/wheel.scss */ \"./src/scss/wheel.scss\");\n\n\n\n\n\n//# sourceURL=webpack://wheel/./src/app.js?");

/***/ }),

/***/ "./src/js/wheel.js":
/*!*************************!*\
  !*** ./src/js/wheel.js ***!
  \*************************/
/***/ (() => {

eval("const modal = document.getElementById('modal-one');\n\nconst sectors = [\n    {color:\"#f82\", label:\"1\"},\n    {color:\"#0bf\", label:\"2\"},\n    {color:\"#fb0\", label:\"3\"},\n    {color:\"#0fb\", label:\"4\"},\n    {color:\"#b0f\", label:\"5\"},\n    {color:\"#f0b\", label:\"6\"},\n];\n\nconst rand = (m, M) => Math.random() * (M - m) + m;\nconst tot = sectors.length;\nconst EL_spin = document.querySelector(\"#spin\");\nconst EL_spinModal = document.querySelector('#spinModal');\nconst ctx = document.querySelector(\"#wheel\").getContext('2d');\nconst dia = ctx.canvas.width;\nconst rad = dia / 2;\nconst PI = Math.PI;\nconst TAU = 2 * PI;\nconst arc = TAU / sectors.length;\n\nconst friction = 0.991; // 0.995=soft, 0.99=mid, 0.98=hard\nlet angVel = 0; // Angular velocity\nlet ang = 0; // Angle in radians\n\nconst getIndex = () => Math.floor(tot - ang / TAU * tot) % tot;\n\nfunction drawSector(sector, i) {\n    const ang = arc * i;\n    ctx.save();\n    // COLOR\n    ctx.beginPath();\n    ctx.fillStyle = sector.color;\n    ctx.moveTo(rad, rad);\n    ctx.arc(rad, rad, rad, ang, ang + arc);\n    ctx.lineTo(rad, rad);\n    ctx.fill();\n    // TEXT\n    ctx.translate(rad, rad);\n    ctx.rotate(ang + arc / 2);\n    ctx.textAlign = \"right\";\n    ctx.fillStyle = \"#fff\";\n    ctx.font = \"bold 30px sans-serif\";\n    ctx.fillText(sector.label, rad - 10, 10);\n    //\n    ctx.restore();\n}\n\nfunction rotate() {\n    const sector = sectors[getIndex()];\n    ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;\n    EL_spin.textContent = !angVel ? \"SPIN\" : sector.label;\n    EL_spin.style.background = sector.color;\n}\n\nfunction frame() {\n    if (!angVel) return;\n    angVel *= friction; // Decrement velocity by friction\n    if (angVel < 0.002) angVel = 0; // Bring to stop\n    ang += angVel; // Update angle\n    ang %= TAU; // Normalize angle\n    rotate();\n}\n\nfunction engine() {\n    frame();\n    requestAnimationFrame(engine)\n}\n\nfunction popup(element) {\n    element.classList.add('open');\n    const exits = element.querySelectorAll('.modal-exit');\n    exits.forEach(function(exit) {\n        exit.addEventListener('click', function(event) {\n            event.preventDefault();\n            element.classList.remove('open');\n        });\n    });\n}\n\n// INIT\nsectors.forEach(drawSector);\nrotate(); // Initial rotation\nengine(); // Start engine\nEL_spin.addEventListener(\"click\", () => {\n    if (!angVel) angVel = rand(0.25, 0.35);\n    setTimeout(()=> {\n        popup(modal);\n    },10000)\n});\n\nEL_spinModal.addEventListener(\"click\", () => {\n    modal.classList.remove('open')\n    if (!angVel) angVel = rand(0.25, 0.35);\n\n});\n\n\n//# sourceURL=webpack://wheel/./src/js/wheel.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;