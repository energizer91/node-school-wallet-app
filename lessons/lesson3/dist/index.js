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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_css__);


//eslint-disable-next-line no-console
console.log(`Hello, ${'Yamoney Node.js School'} lol`);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ReferenceError: window is not defined\n    at /Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/style-loader/index.js!/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/css-loader/index.js!/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/postcss-loader/lib/index.js!/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/src/styles.css:217:9\n    at /Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/style-loader/index.js!/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/css-loader/index.js!/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/postcss-loader/lib/index.js!/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/src/styles.css:206:46\n    at module.exports.module.exports (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/style-loader/index.js!/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/css-loader/index.js!/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/postcss-loader/lib/index.js!/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/src/styles.css:251:46)\n    at Object.<anonymous> (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/style-loader/index.js!/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/css-loader/index.js!/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/postcss-loader/lib/index.js!/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/src/styles.css:82:36)\n    at __webpack_require__ (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/style-loader/index.js!/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/css-loader/index.js!/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/postcss-loader/lib/index.js!/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/src/styles.css:21:30)\n    at /Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/style-loader/index.js!/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/css-loader/index.js!/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/postcss-loader/lib/index.js!/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/src/styles.css:64:18\n    at Object.<anonymous> (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/style-loader/index.js!/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/css-loader/index.js!/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/postcss-loader/lib/index.js!/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/src/styles.css:67:10)\n    at Module._compile (module.js:570:32)\n    at Object.exec (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/webpack/lib/NormalModule.js:129:12)\n    at /Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/extract-text-webpack-plugin/dist/loader.js:127:26\n    at compile (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/webpack/lib/Compiler.js:304:11)\n    at applyPluginsAsync.err (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/webpack/lib/Compiler.js:514:14)\n    at next (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/tapable/lib/Tapable.js:202:11)\n    at Compiler.<anonymous> (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/extract-text-webpack-plugin/dist/loader.js:108:7)\n    at next (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/tapable/lib/Tapable.js:204:14)\n    at Compiler.<anonymous> (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/webpack/lib/CachePlugin.js:78:5)\n    at Compiler.applyPluginsAsyncSeries (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/tapable/lib/Tapable.js:206:13)\n    at compilation.seal.err (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/webpack/lib/Compiler.js:511:11)\n    at Compilation.applyPluginsAsyncSeries (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/tapable/lib/Tapable.js:195:46)\n    at self.applyPluginsAsync.err (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/webpack/lib/Compilation.js:671:19)\n    at Compilation.applyPluginsAsyncSeries (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/tapable/lib/Tapable.js:195:46)\n    at self.applyPluginsAsync.err (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/webpack/lib/Compilation.js:662:11)\n    at Compilation.applyPluginsAsyncSeries (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/tapable/lib/Tapable.js:195:46)\n    at self.applyPluginsAsync.err (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/webpack/lib/Compilation.js:657:10)\n    at Compilation.applyPluginsAsyncSeries (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/tapable/lib/Tapable.js:195:46)\n    at sealPart2 (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/webpack/lib/Compilation.js:653:9)\n    at Compilation.applyPluginsAsyncSeries (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/tapable/lib/Tapable.js:195:46)\n    at Compilation.seal (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/webpack/lib/Compilation.js:596:8)\n    at applyPluginsParallel.err (/Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/webpack/lib/Compiler.js:508:17)\n    at /Users/energizer/IdeaProjects/node-school-wallet-app/lessons/lesson3/node_modules/tapable/lib/Tapable.js:289:11");

/***/ })
/******/ ]);