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

/***/ "./src/Circle.ts":
/*!***********************!*\
  !*** ./src/Circle.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Circle = void 0;\nvar helpers_1 = __webpack_require__(/*! ./utils/helpers */ \"./src/utils/helpers.ts\");\nvar Circle = /** @class */ (function () {\n    function Circle(x, y, canvas) {\n        this.x = x;\n        this.y = y;\n        this.radius = 20;\n        this.dy = 0;\n        this.gravity = 9.8;\n        this.damping = 0.7;\n        this.color = (0, helpers_1.getRandomColor)();\n        this.canvas = canvas;\n    }\n    Circle.prototype.update = function (deltaTime) {\n        this.dy += this.gravity * deltaTime;\n        this.y += this.dy;\n        // Bounce off the bottom\n        if (this.y + this.radius > this.canvas.height) {\n            this.y = this.canvas.height - this.radius;\n            this.dy = -this.dy * this.damping;\n        }\n        // Stop the circle when it's bouncing very low\n        if (Math.abs(this.dy) < 0.01) {\n            this.dy = 0;\n        }\n    };\n    Circle.prototype.draw = function (ctx) {\n        ctx.save();\n        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';\n        ctx.shadowBlur = 10;\n        ctx.shadowOffsetX = 5;\n        ctx.shadowOffsetY = 5;\n        ctx.beginPath();\n        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n        ctx.fillStyle = this.color;\n        ctx.fill();\n        ctx.closePath();\n        ctx.restore();\n    };\n    return Circle;\n}());\nexports.Circle = Circle;\n\n\n//# sourceURL=webpack://bouncing-ballz/./src/Circle.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar Circle_1 = __webpack_require__(/*! ./Circle */ \"./src/Circle.ts\");\nvar canvas = document.getElementById('canvas');\nvar ctx = canvas.getContext('2d');\nvar resetButton = document.createElement('button');\nvar circleCountText = document.createElement('p');\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nvar lastTime = 0;\nvar circles = [];\nfunction tick(currentTime) {\n    var deltaTime = (currentTime - lastTime) / 1000;\n    update(deltaTime);\n    draw();\n    lastTime = currentTime;\n    requestAnimationFrame(tick);\n}\nrequestAnimationFrame(tick);\ncanvas.addEventListener('click', function (event) {\n    if (circles.length < 15) {\n        var rect = canvas.getBoundingClientRect();\n        var x = event.clientX - rect.left;\n        var y = event.clientY - rect.top;\n        circles.push(new Circle_1.Circle(x, y, canvas));\n        updateCircleCount();\n    }\n    else {\n        drawText('You have reached the maximum circle count. Reset for start again.');\n    }\n});\nresetButton.textContent = 'Reset';\nresetButton.style.position = 'absolute';\nresetButton.style.top = '20px';\nresetButton.style.left = '20px';\nresetButton.style.padding = '10px';\nresetButton.style.fontSize = '16px';\nresetButton.style.backgroundColor = '#007bff';\nresetButton.style.color = 'white';\nresetButton.style.border = 'none';\nresetButton.style.borderRadius = '5px';\ndocument.body.appendChild(resetButton);\nresetButton.addEventListener('click', function () {\n    circles = [];\n    updateCircleCount();\n});\ncircleCountText.textContent = 'Circles: 0';\ncircleCountText.style.position = 'absolute';\ncircleCountText.style.top = '20px';\ncircleCountText.style.left = '100px';\ncircleCountText.style.fontSize = '16px';\ndocument.body.appendChild(circleCountText);\nfunction update(deltaTime) {\n    circles.forEach(function (circle) { return circle.update(deltaTime); });\n}\nfunction updateCircleCount() {\n    circleCountText.textContent = \"Circles: \".concat(circles.length);\n}\nfunction draw() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    circles.forEach(function (circle) { return circle.draw(ctx); });\n    var message = circles.length < 15 ? 'Click anywhere on the screen to spawn circles!' : 'You have reached the maximum circle count. Reset to start again.';\n    drawText(message);\n}\nfunction drawText(text) {\n    var textWidth = ctx.measureText(text).width;\n    var x = (canvas.width - textWidth) / 2;\n    var y = 40;\n    ctx.fillStyle = 'red';\n    ctx.font = '20px Arial';\n    ctx.textAlign = 'center';\n    ctx.textBaseline = 'middle';\n    ctx.fillText(text, x, y);\n}\n\n\n//# sourceURL=webpack://bouncing-ballz/./src/main.ts?");

/***/ }),

/***/ "./src/utils/helpers.ts":
/*!******************************!*\
  !*** ./src/utils/helpers.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getRandomColor = void 0;\nvar getRandomColor = function () {\n    var letters = '0123456789ABCDEF';\n    var color = '#';\n    for (var i = 0; i < 6; i++) {\n        color += letters[Math.floor(Math.random() * 16)];\n    }\n    return color;\n};\nexports.getRandomColor = getRandomColor;\n\n\n//# sourceURL=webpack://bouncing-ballz/./src/utils/helpers.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;