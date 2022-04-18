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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./main.js */ \"./src/js/main.js\");\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function ReadMore() {\n  document.getElementById(\"read-more-section\").style.visibility = \"visible\";\n  document.getElementById(\"read-more-btn\").remove();\n}\n\nfunction MainApp() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/React.createElement(\"header\", null, /*#__PURE__*/React.createElement(\"h1\", null, \"I Can Haz Cheeseburger?\")), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"layout\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"col main\"\n  }, /*#__PURE__*/React.createElement(\"p\", null, \"A lolcat is an image macro of one or more cats. The image's text is often idiosyncratic and grammatically incorrect, and is known as lolspeak.\"), /*#__PURE__*/React.createElement(\"p\", null, \"Lolcat is a composite of two words, \\\"lol\\\" and \\\"cat\\\". \\\"Lol\\\" stands for \\\"Laugh out Loud\\\" or \\\"Laughing out Loud\\\"; hence, lolcats are intended to be funny and to include jokes. Lolcats images comprise a photo of a cat with a large caption characteristically set in a heavy sans serif font such as Impact or Arial Black. The image is, on occasion, digitally edited for effect.\"), /*#__PURE__*/React.createElement(\"p\", null, \"The caption generally acts as a speech balloon encompassing a comment from the cat, or as a description of the depicted scene. The caption is intentionally written with deviations from standard English spelling and grammar, featuring \\\"strangely-conjugated verbs, but a tendency to converge to a new set of rules in spelling and grammar\\\". The text parodies the grammar-poor patois stereotypically attributed to Internet slang. Frequently, lolcat captions take the form of phrasal templates. Some phrases have a known source, usually a well-known Internet meme, such as All your base are belong to us or Do not want, while others don't. The language of lolcats has also been likened to baby talk, however it draws on a variety of linguistic resources, not just the imitation of baby talk.\"), /*#__PURE__*/React.createElement(\"p\", null, /*#__PURE__*/React.createElement(\"a\", {\n    id: \"read-more-btn\",\n    href: \"#\",\n    onClick: ReadMore\n  }, \"Read more...\")), /*#__PURE__*/React.createElement(\"div\", {\n    id: \"read-more-section\",\n    style: {\n      visibility: \"collapse\"\n    }\n  }, /*#__PURE__*/React.createElement(\"p\", null, \"Common themes include jokes of the form \\\"Im in ur [noun], [verb]-ing ur [related noun].\\\" Many lolcat images capture cats performing characteristically human actions or appearing to use modern technology, such as computers.\"), /*#__PURE__*/React.createElement(\"p\", null, \"There are several well-known lolcat images and single-word captions that have spawned many variations and imitations, including \\\"Ceiling Cat\\\". Others include Fail (a cat with a slice of processed cheese on its face) and \\\"I Can Has Cheezburger\\\" (a portrait of a blue British Shorthair). Another popular format is \\\"[Adjective] cat is [adjective/noun].\\\"\")), /*#__PURE__*/React.createElement(\"p\", null, \"Source: \", /*#__PURE__*/React.createElement(\"a\", {\n    href: \"https://en.wikipedia.org/wiki/Lolcat\"\n  }, \"Wikipedia\"))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"col sidebar\"\n  }, /*#__PURE__*/React.createElement(\"p\", null, /*#__PURE__*/React.createElement(\"strong\", null, \"Navigation\")), /*#__PURE__*/React.createElement(\"ul\", null, /*#__PURE__*/React.createElement(\"li\", null, \"Home\"), /*#__PURE__*/React.createElement(\"li\", null, /*#__PURE__*/React.createElement(\"a\", {\n    href: \"./photos.html\"\n  }, \"Photo Gallery\")), /*#__PURE__*/React.createElement(\"li\", null, /*#__PURE__*/React.createElement(\"a\", {\n    href: \"http://icanhas.cheezburger.com\"\n  }, \"icanhas.cheezburger.com\"))))), /*#__PURE__*/React.createElement(\"footer\", null, \"\\xA9 2020 Ceiling Cat\"));\n}\n\nReactDOM.render( /*#__PURE__*/React.createElement(MainApp, null), document.getElementById(\"root\"));\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });