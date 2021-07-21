module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/services.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Meta.js":
/*!****************************!*\
  !*** ./components/Meta.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\ameer\\Documents\\website\\Winners-Daily.github.io\\components\\Meta.js";


const Meta = ({
  title,
  keywords,
  description
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "keywords",
      content: keywords
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "description",
      content: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      charSet: "utf-8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "icon",
      href: "/WD.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

Meta.defaultProps = {
  title: 'The Winners Daily',
  keywords: 'architecture',
  description: 'Get the latest architecture news'
};
/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/services.module.css */ "./styles/services.module.css");
/* harmony import */ var _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_services_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.js");

var _jsxFileName = "C:\\Users\\ameer\\Documents\\website\\Winners-Daily.github.io\\pages\\services.js";



const services = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Meta__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Services"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sec,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Services"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.row,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textBox,
        style: {
          backgroundColor: 'white'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.p2,
          children: ["Model Imagery.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, undefined), "Wait, is it handmade?"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textBox,
        style: {
          backgroundColor: 'gainsboro'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.postImg,
          src: "/services/post.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.row,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textBoxSpecial,
        style: {
          backgroundColor: 'white'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.postImg,
          src: "/services/post3.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.col,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textBox,
          style: {
            backgroundColor: 'white'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.p2,
            children: "Are you a winner, but no render was asked?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textBox,
          style: {
            backgroundColor: '#FAFAFA'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.p,
            style: {
              margin: 30
            },
            children: "You ever got that feeling when sitting in your office, waiting for inspiration to fall from grace for the next competition. Maybe a picture on the wall might help\u2026a sunset in the Caribbean\u2026 a snowy hilltop by the Alps\u2026 or a carefully crafted model of your last winning competition! Why not send us your digital 3D model and go buy a hammer and some nails?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.row,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textBox,
        style: {
          backgroundColor: 'white'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.p2,
          children: ["Communication.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, undefined), "You win, we share."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textBox,
        style: {
          backgroundColor: 'gainsboro'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.postImg,
          src: "/services/post2.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.row,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textBox,
        style: {
          backgroundColor: '#FAFAFA'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.p,
          style: {
            margin: 30
          },
          children: "In WinnersDaily we only drink champagne, winning needs to be celebrated wherever whenever. We know your work is worth thousands of likes, that\u2019s why we make sure you get the acknowledgment and public recognition."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textBox,
        style: {
          backgroundColor: 'white'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.p2,
          children: "Let us cheer for your project."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.sec,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.h1,
        children: "Something awesome is in the work."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.p,
        style: {
          marginBottom: 40
        },
        children: "Be the first to get notified when the app is launched. Enter you best email to request an early invitation!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        action: "https://instagram.us17.list-manage.com/subscribe/post?u=db0809168e74731fc30782715&id=6b2cf448c5",
        method: "post",
        id: "mc-embedded-subscribe-form",
        name: "mc-embedded-subscribe-form",
        style: {
          width: '100%'
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.col,
          style: {
            width: '100 %'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputRow,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lable,
              for: "mce-FNAME",
              children: "First Name  "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              placeholder: "  Name",
              name: "FNAME",
              id: "mce-FNAME",
              className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputBox
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputRow,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.lable,
              for: "mce-EMAIL",
              children: "Email Address "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "email",
              placeholder: "  Email",
              name: "EMAIL",
              id: "mce-EMAIL",
              className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputBox,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "submit",
          value: "Subscribe",
          name: "subscribe",
          id: "mc-embedded-subscribe",
          className: _styles_services_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btn
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (services);
/**
 * 
 * 
<form action="https://instagram.us17.list-manage.com/subscribe/post?u=db0809168e74731fc30782715&amp;id=6b2cf448c5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<h2>Subscribe</h2>
<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
<div class="mc-field-group">
	<label for="mce-FNAME">First Name </label>
	<input type="text" value="" name="FNAME" class="" id="mce-FNAME">
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_db0809168e74731fc30782715_6b2cf448c5" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
 */

/***/ }),

/***/ "./styles/services.module.css":
/*!************************************!*\
  !*** ./styles/services.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "services_main__Zx1NY",
	"sec": "services_sec__2MoCi",
	"p": "services_p__2YDV5",
	"row": "services_row__3tPy6",
	"textBox": "services_textBox__3pNQ4",
	"textBoxSpecial": "services_textBoxSpecial__1RaWO",
	"postImg": "services_postImg__3p2Xi",
	"p2": "services_p2__Ndjml",
	"inputBox": "services_inputBox__2j5k-",
	"input": "services_input__2ziH-",
	"lable": "services_lable__Go4pX",
	"inputRow": "services_inputRow__2BDFh",
	"h1": "services_h1__1bnSz",
	"col": "services_col__3i6Yy",
	"btn": "services_btn__3rpdz"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZXRhLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9zZXJ2aWNlcy5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIk1ldGEiLCJ0aXRsZSIsImtleXdvcmRzIiwiZGVzY3JpcHRpb24iLCJkZWZhdWx0UHJvcHMiLCJzZXJ2aWNlcyIsInNlcnZpY2VTdHlsZXMiLCJtYWluIiwic2VjIiwicm93IiwidGV4dEJveCIsImJhY2tncm91bmRDb2xvciIsInAyIiwicG9zdEltZyIsInRleHRCb3hTcGVjaWFsIiwiY29sIiwicCIsIm1hcmdpbiIsImgxIiwibWFyZ2luQm90dG9tIiwid2lkdGgiLCJpbnB1dFJvdyIsImxhYmxlIiwiaW5wdXRCb3giLCJidG4iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJ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LFdBQTFEO0FBQXNFLHVCQUFTLEVBQUVoQixrRUFBYSxDQUFDaUIsUUFBL0Y7QUFBeUcsc0JBQVE7QUFBakg7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBZVE7QUFBTyxjQUFJLEVBQUMsUUFBWjtBQUFxQixlQUFLLEVBQUMsV0FBM0I7QUFBdUMsY0FBSSxFQUFDLFdBQTVDO0FBQXdELFlBQUUsRUFBQyx1QkFBM0Q7QUFBbUYsbUJBQVMsRUFBRWpCLGtFQUFhLENBQUNrQjtBQUE1RztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBMEdILENBM0dEOztBQTZHZW5CLHVFQUFmO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7Ozs7QUMzSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqQkEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvc2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3NlcnZpY2VzLmpzXCIpO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBNZXRhID0gKHsgdGl0bGUsIGtleXdvcmRzLCBkZXNjcmlwdGlvbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICA8bWV0YSBuYW1lPSdrZXl3b3JkcycgY29udGVudD17a2V5d29yZHN9IC8+XG4gICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL1dELnBuZycgLz5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gIClcbn1cblxuTWV0YS5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiAnVGhlIFdpbm5lcnMgRGFpbHknLFxuICBrZXl3b3JkczogJ2FyY2hpdGVjdHVyZScsXG4gIGRlc2NyaXB0aW9uOiAnR2V0IHRoZSBsYXRlc3QgYXJjaGl0ZWN0dXJlIG5ld3MnLFxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXRhXG4iLCJpbXBvcnQgc2VydmljZVN0eWxlcyBmcm9tICcuLi9zdHlsZXMvc2VydmljZXMubW9kdWxlLmNzcydcclxuaW1wb3J0IE1ldGEgZnJvbSAnLi4vY29tcG9uZW50cy9NZXRhJ1xyXG5cclxuY29uc3Qgc2VydmljZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzZXJ2aWNlU3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICA8TWV0YSB0aXRsZT0nU2VydmljZXMnIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzZXJ2aWNlU3R5bGVzLnNlY30+XHJcbiAgICAgICAgICAgICAgICA8aDE+U2VydmljZXM8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzZXJ2aWNlU3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2VydmljZVN0eWxlcy50ZXh0Qm94fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzZXJ2aWNlU3R5bGVzLnAyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTW9kZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgSW1hZ2VyeS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2FpdCwgaXMgaXQgaGFuZG1hZGU/XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2VydmljZVN0eWxlcy50ZXh0Qm94fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdnYWluc2Jvcm8nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzZXJ2aWNlU3R5bGVzLnBvc3RJbWd9IHNyYz1cIi9zZXJ2aWNlcy9wb3N0LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2VydmljZVN0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NlcnZpY2VTdHlsZXMudGV4dEJveFNwZWNpYWx9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzZXJ2aWNlU3R5bGVzLnBvc3RJbWd9IHNyYz1cIi9zZXJ2aWNlcy9wb3N0My5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2VydmljZVN0eWxlcy5jb2x9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2VydmljZVN0eWxlcy50ZXh0Qm94fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c2VydmljZVN0eWxlcy5wMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcmUgeW91IGEgd2lubmVyLCBidXQgbm8gcmVuZGVyIHdhcyBhc2tlZD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NlcnZpY2VTdHlsZXMudGV4dEJveH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI0ZBRkFGQScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c2VydmljZVN0eWxlcy5wfSBzdHlsZT17e21hcmdpbjozMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGV2ZXIgZ290IHRoYXQgZmVlbGluZyB3aGVuIHNpdHRpbmcgaW4geW91ciBvZmZpY2UsIHdhaXRpbmcgZm9yIGluc3BpcmF0aW9uIHRvIGZhbGwgZnJvbSBncmFjZSBmb3IgdGhlIG5leHQgY29tcGV0aXRpb24uIE1heWJlIGEgcGljdHVyZSBvbiB0aGUgd2FsbCBtaWdodCBoZWxw4oCmYSBzdW5zZXQgaW4gdGhlIENhcmliYmVhbuKApiBhIHNub3d5IGhpbGx0b3AgYnkgdGhlIEFscHPigKYgb3IgYSBjYXJlZnVsbHkgY3JhZnRlZCBtb2RlbCBvZiB5b3VyIGxhc3Qgd2lubmluZyBjb21wZXRpdGlvbiFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoeSBub3Qgc2VuZCB1cyB5b3VyIGRpZ2l0YWwgM0QgbW9kZWwgYW5kIGdvIGJ1eSBhIGhhbW1lciBhbmQgc29tZSBuYWlscz9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzZXJ2aWNlU3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2VydmljZVN0eWxlcy50ZXh0Qm94fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzZXJ2aWNlU3R5bGVzLnAyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29tbXVuaWNhdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgWW91IHdpbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2Ugc2hhcmUuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2VydmljZVN0eWxlcy50ZXh0Qm94fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdnYWluc2Jvcm8nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzZXJ2aWNlU3R5bGVzLnBvc3RJbWd9IHNyYz1cIi9zZXJ2aWNlcy9wb3N0Mi5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NlcnZpY2VTdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzZXJ2aWNlU3R5bGVzLnRleHRCb3h9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNGQUZBRkEnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c2VydmljZVN0eWxlcy5wfSBzdHlsZT17eyBtYXJnaW46IDMwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbiBXaW5uZXJzRGFpbHkgd2Ugb25seSBkcmluayBjaGFtcGFnbmUsIHdpbm5pbmcgbmVlZHMgdG8gYmUgY2VsZWJyYXRlZCB3aGVyZXZlciB3aGVuZXZlci4gV2Uga25vdyB5b3VyIHdvcmsgaXMgd29ydGggdGhvdXNhbmRzIG9mIGxpa2VzLCB0aGF04oCZcyB3aHkgd2UgbWFrZSBzdXJlIHlvdSBnZXQgdGhlIGFja25vd2xlZGdtZW50IGFuZCBwdWJsaWMgcmVjb2duaXRpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2VydmljZVN0eWxlcy50ZXh0Qm94fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzZXJ2aWNlU3R5bGVzLnAyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTGV0IHVzIGNoZWVyIGZvciB5b3VyIHByb2plY3QuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzZXJ2aWNlU3R5bGVzLnNlY30+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzZXJ2aWNlU3R5bGVzLmgxfSA+U29tZXRoaW5nIGF3ZXNvbWVcclxuICAgICAgICAgICAgICAgICAgICBpcyBpbiB0aGUgd29yay48L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzZXJ2aWNlU3R5bGVzLnB9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQmUgdGhlIGZpcnN0IHRvIGdldCBub3RpZmllZCB3aGVuIHRoZSBhcHAgaXMgbGF1bmNoZWQuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEVudGVyIHlvdSBiZXN0IGVtYWlsIHRvIHJlcXVlc3QgYW4gZWFybHkgaW52aXRhdGlvbiFcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJodHRwczovL2luc3RhZ3JhbS51czE3Lmxpc3QtbWFuYWdlLmNvbS9zdWJzY3JpYmUvcG9zdD91PWRiMDgwOTE2OGU3NDczMWZjMzA3ODI3MTUmYW1wO2lkPTZiMmNmNDQ4YzVcIiBcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCIgaWQ9XCJtYy1lbWJlZGRlZC1zdWJzY3JpYmUtZm9ybVwiIG5hbWU9XCJtYy1lbWJlZGRlZC1zdWJzY3JpYmUtZm9ybVwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NlcnZpY2VTdHlsZXMuY29sfSBzdHlsZT17eyB3aWR0aDogJzEwMCAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2VydmljZVN0eWxlcy5pbnB1dFJvd30+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c2VydmljZVN0eWxlcy5sYWJsZX0gZm9yPVwibWNlLUZOQU1FXCI+Rmlyc3QgTmFtZSAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiICBOYW1lXCIgbmFtZT1cIkZOQU1FXCIgaWQ9XCJtY2UtRk5BTUVcIiBjbGFzc05hbWU9e3NlcnZpY2VTdHlsZXMuaW5wdXRCb3h9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NlcnZpY2VTdHlsZXMuaW5wdXRSb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c2VydmljZVN0eWxlcy5sYWJsZX0gZm9yPVwibWNlLUVNQUlMXCIgPkVtYWlsIEFkZHJlc3MgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIiAgRW1haWxcIiBuYW1lPVwiRU1BSUxcIiBpZD1cIm1jZS1FTUFJTFwiIGNsYXNzTmFtZT17c2VydmljZVN0eWxlcy5pbnB1dEJveH0gcmVxdWlyZWQgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1YnNjcmliZVwiIG5hbWU9XCJzdWJzY3JpYmVcIiBpZD1cIm1jLWVtYmVkZGVkLXN1YnNjcmliZVwiIGNsYXNzTmFtZT17c2VydmljZVN0eWxlcy5idG59Lz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXJ2aWNlcztcclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqIFxyXG48Zm9ybSBhY3Rpb249XCJodHRwczovL2luc3RhZ3JhbS51czE3Lmxpc3QtbWFuYWdlLmNvbS9zdWJzY3JpYmUvcG9zdD91PWRiMDgwOTE2OGU3NDczMWZjMzA3ODI3MTUmYW1wO2lkPTZiMmNmNDQ4YzVcIiBtZXRob2Q9XCJwb3N0XCIgaWQ9XCJtYy1lbWJlZGRlZC1zdWJzY3JpYmUtZm9ybVwiIG5hbWU9XCJtYy1lbWJlZGRlZC1zdWJzY3JpYmUtZm9ybVwiIGNsYXNzPVwidmFsaWRhdGVcIiB0YXJnZXQ9XCJfYmxhbmtcIiBub3ZhbGlkYXRlPlxyXG4gICAgPGRpdiBpZD1cIm1jX2VtYmVkX3NpZ251cF9zY3JvbGxcIj5cclxuXHQ8aDI+U3Vic2NyaWJlPC9oMj5cclxuPGRpdiBjbGFzcz1cImluZGljYXRlcy1yZXF1aXJlZFwiPjxzcGFuIGNsYXNzPVwiYXN0ZXJpc2tcIj4qPC9zcGFuPiBpbmRpY2F0ZXMgcmVxdWlyZWQ8L2Rpdj5cclxuPGRpdiBjbGFzcz1cIm1jLWZpZWxkLWdyb3VwXCI+XHJcblx0PGxhYmVsIGZvcj1cIm1jZS1FTUFJTFwiPkVtYWlsIEFkZHJlc3MgIDxzcGFuIGNsYXNzPVwiYXN0ZXJpc2tcIj4qPC9zcGFuPlxyXG48L2xhYmVsPlxyXG5cdDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2YWx1ZT1cIlwiIG5hbWU9XCJFTUFJTFwiIGNsYXNzPVwicmVxdWlyZWQgZW1haWxcIiBpZD1cIm1jZS1FTUFJTFwiPlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cIm1jLWZpZWxkLWdyb3VwXCI+XHJcblx0PGxhYmVsIGZvcj1cIm1jZS1GTkFNRVwiPkZpcnN0IE5hbWUgPC9sYWJlbD5cclxuXHQ8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIG5hbWU9XCJGTkFNRVwiIGNsYXNzPVwiXCIgaWQ9XCJtY2UtRk5BTUVcIj5cclxuPC9kaXY+XHJcblx0PGRpdiBpZD1cIm1jZS1yZXNwb25zZXNcIiBjbGFzcz1cImNsZWFyXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwicmVzcG9uc2VcIiBpZD1cIm1jZS1lcnJvci1yZXNwb25zZVwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwicmVzcG9uc2VcIiBpZD1cIm1jZS1zdWNjZXNzLXJlc3BvbnNlXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj48L2Rpdj5cclxuXHQ8L2Rpdj4gICAgPCEtLSByZWFsIHBlb3BsZSBzaG91bGQgbm90IGZpbGwgdGhpcyBpbiBhbmQgZXhwZWN0IGdvb2QgdGhpbmdzIC0gZG8gbm90IHJlbW92ZSB0aGlzIG9yIHJpc2sgZm9ybSBib3Qgc2lnbnVwcy0tPlxyXG4gICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogLTUwMDBweDtcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYl9kYjA4MDkxNjhlNzQ3MzFmYzMwNzgyNzE1XzZiMmNmNDQ4YzVcIiB0YWJpbmRleD1cIi0xXCIgdmFsdWU9XCJcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbGVhclwiPjxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJzY3JpYmVcIiBuYW1lPVwic3Vic2NyaWJlXCIgaWQ9XCJtYy1lbWJlZGRlZC1zdWJzY3JpYmVcIiBjbGFzcz1cImJ1dHRvblwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZm9ybT5cclxuICovIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcInNlcnZpY2VzX21haW5fX1p4MU5ZXCIsXG5cdFwic2VjXCI6IFwic2VydmljZXNfc2VjX18yTW9DaVwiLFxuXHRcInBcIjogXCJzZXJ2aWNlc19wX18yWURWNVwiLFxuXHRcInJvd1wiOiBcInNlcnZpY2VzX3Jvd19fM3RQeTZcIixcblx0XCJ0ZXh0Qm94XCI6IFwic2VydmljZXNfdGV4dEJveF9fM3BOUTRcIixcblx0XCJ0ZXh0Qm94U3BlY2lhbFwiOiBcInNlcnZpY2VzX3RleHRCb3hTcGVjaWFsX18xUmFXT1wiLFxuXHRcInBvc3RJbWdcIjogXCJzZXJ2aWNlc19wb3N0SW1nX18zcDJYaVwiLFxuXHRcInAyXCI6IFwic2VydmljZXNfcDJfX05kam1sXCIsXG5cdFwiaW5wdXRCb3hcIjogXCJzZXJ2aWNlc19pbnB1dEJveF9fMmo1ay1cIixcblx0XCJpbnB1dFwiOiBcInNlcnZpY2VzX2lucHV0X18yemlILVwiLFxuXHRcImxhYmxlXCI6IFwic2VydmljZXNfbGFibGVfX0dvNHBYXCIsXG5cdFwiaW5wdXRSb3dcIjogXCJzZXJ2aWNlc19pbnB1dFJvd19fMkJERmhcIixcblx0XCJoMVwiOiBcInNlcnZpY2VzX2gxX18xYm5TelwiLFxuXHRcImNvbFwiOiBcInNlcnZpY2VzX2NvbF9fM2k2WXlcIixcblx0XCJidG5cIjogXCJzZXJ2aWNlc19idG5fXzNycGR6XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=