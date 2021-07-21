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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Counter.js":
/*!*******************************!*\
  !*** ./components/Counter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ "react-intersection-observer");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_counter_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/counter.module.css */ "./styles/counter.module.css");
/* harmony import */ var _styles_counter_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_counter_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\ameer\\Documents\\website\\Winners-Daily.github.io\\components\\Counter.js";

 //styling



const Count = props => {
  // label of counter
  // number to increment to
  // duration of count in seconds
  const label = props.lable;
  const number = props.number;
  const duration = props.duration; // number displayed by component

  const {
    0: count,
    1: setCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("0");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let start = 0; // first three numbers from props

    const end = parseInt(number.substring(0, 3)); // if zero, return

    if (start === end) return; // find duration per increment

    let totalMilSecDur = parseInt(duration);
    let incrementTime = totalMilSecDur / end * 1000; // timer increments start counter 
    // then updates count
    // ends if start reaches end

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime); // dependency array
  }, [number, duration]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "Count",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__["InView"], {
      as: "div",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          style: {
            font: "800 40px system-ui"
          },
          children: count
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Count);

/***/ }),

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

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.js");
/* harmony import */ var _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/about.module.css */ "./styles/about.module.css");
/* harmony import */ var _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_about_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Counter */ "./components/Counter.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intersection-observer */ "react-intersection-observer");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\ameer\\Documents\\website\\Winners-Daily.github.io\\pages\\about.js";





const about = () => {
  function resetCounter(entry) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Counter__WEBPACK_IMPORTED_MODULE_3__["default"], {
      number: '2020',
      duration: 5
    }, 1, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 14
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Meta__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "About"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        style: {
          marginBottom: 0
        },
        children: "Have a seat !"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        children: "Let us tell you our story"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.p3,
        children: "Starting off in the summer of 2020, as a group of architects based in Barcelona who are connected through pastimes like art-photography and vibrating jazz evenings. What started as a hobby for collecting competition winners from around the globe in order to inspire our very own work. With enough love, dedication and a dose of coffee in between we turned our avocation into something we call WinnersDaily."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/about/topImage.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sec2,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: "What exactly is WinnersDaily?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.p3,
            style: {
              fontSize: 'medium'
            },
            children: "WinnersDaily is an online data base of information related to architectural competitions. We provide a frame and canvas for every project to display its beauty on the screens of thousands of new viewers. We value the work of architects and renderers who break the wall between reality and idea in order to show a hint of the future. WinnersDaily is a virtual currency for architectural competitions, a platform where acknowledged winners from all over the world come together to form a community, a showcase to gasp side by side with those whose work is subtly recognized. Without any doubt, we provide to those who thirst for inspiration to win and become a new reference in the field. So welcome! We encourage the diffusion of your hard work."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Winners\u2019 Map"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        style: {
          fontSize: 'small'
        },
        children: "Publishing since 2020 from all over the globe."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/about/map.png",
        style: {
          width: '50%',
          height: 'auto'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableCol,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableRow,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableCol,
            style: {
              width: 80
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                marginBottom: 2
              },
              children: "Constitution"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__["InView"], {
              children: ({
                inView,
                ref,
                entry
              }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                ref: ref,
                children: inView && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Counter__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  number: '2020',
                  duration: 2.5
                }, 1, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 34
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableCol,
            style: {
              width: 80
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                marginBottom: 2
              },
              children: "Offices"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__["InView"], {
              children: ({
                inView,
                ref,
                entry
              }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                ref: ref,
                children: inView && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Counter__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  number: '342',
                  duration: 1.5
                }, 1, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 32
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableRow,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableCol,
            style: {
              width: 80
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                marginBottom: 2
              },
              children: "Projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__["InView"], {
              children: ({
                inView,
                ref,
                entry
              }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                ref: ref,
                children: inView && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Counter__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  number: '439',
                  duration: 2
                }, 1, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 32
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.tableCol,
            style: {
              width: 80
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              style: {
                marginBottom: 2
              },
              children: "Countries"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__["InView"], {
              children: ({
                inView,
                ref,
                entry
              }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                ref: ref,
                children: inView && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Counter__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  number: '65',
                  duration: 1
                }, 1, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 32
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sec2,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Media Press Kit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.p3,
        children: "Download our logo or icon and use it on your website or advertising."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.line,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/about/mediaKit1.png",
            className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgKit
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/about/mediaKit2.png",
            className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgKit
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.line,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/about/mediaKit3.png",
            className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgKit
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/about/mediaKit4.png",
            className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgKit
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/WinnersDaily_Press_Kit_All.zip",
          download: "winnersdaily_media_kit",
          className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.p3,
          style: {
            margin: 20
          },
          children: "Download all logos & icons"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sec3,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Get closer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.line,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/about/pen.png",
            className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgSmall
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.p3S,
            children: ["We\u2019re continuously looking for talent. If you want to become a contributor to our blog, please write to us at ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "contact@thewinnersdaily.com"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 127
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.line,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/about/question.png",
            className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgSmall
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.p3S,
            children: ["Should you have any questions, proposals, or require any further assistance regarding WINNERSDAILY, please do not hesitate to contact us at ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "contact@thewinnersdaily.com"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 155
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.line,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/about/textBox.png",
            className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.imgSmall
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.p3S,
            children: ["We are open to partnerships and other collaborations. We would love to hear from you at ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "contact@thewinnersdaily.com"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 103
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.sec2,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "The whole web is made by us"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_about_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.p3,
        children: "We are proud of the diverse backgrounds our team comes from, having international members within different specialties, from architects and engineers to business analysts. It\u2019s our believe that diversity is a key factor for creativity in our workspace."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (about);

/***/ }),

/***/ "./styles/about.module.css":
/*!*********************************!*\
  !*** ./styles/about.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "about_main__hrkLZ",
	"content": "about_content__c2QZF",
	"topBoxes": "about_topBoxes__2_etM",
	"btn": "about_btn__3NKCo",
	"box": "about_box__1_aiM",
	"p2": "about_p2__11Acu",
	"tableCol": "about_tableCol__2mGsI",
	"tableRow": "about_tableRow__2FWK7",
	"sec2": "about_sec2__290E_",
	"p3": "about_p3__1zM-H",
	"p4": "about_p4__1fx4I",
	"sec3": "about_sec3__plhMb",
	"imgKit": "about_imgKit__2kmO0",
	"line": "about_line__1P3rX",
	"p3S": "about_p3S__39g5m",
	"wrapper": "about_wrapper__bHfXe",
	"wrapper2": "about_wrapper2__2MeWs",
	"imgSmall": "about_imgSmall__CuoVp",
	"counter": "about_counter__Nwpjq",
	"counter2": "about_counter2__3_WNl",
	"counter3": "about_counter3__5J24n",
	"counter4": "about_counter4__8E6bp"
};


/***/ }),

/***/ "./styles/counter.module.css":
/*!***********************************!*\
  !*** ./styles/counter.module.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Count": "counter_Count__6rmEs"
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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-intersection-observer":
/*!**********************************************!*\
  !*** external "react-intersection-observer" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intersection-observer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db3VudGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvYWJvdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvY291bnRlci5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ291bnQiLCJwcm9wcyIsImxhYmVsIiwibGFibGUiLCJudW1iZXIiLCJkdXJhdGlvbiIsImNvdW50Iiwic2V0Q291bnQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0YXJ0IiwiZW5kIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJ0b3RhbE1pbFNlY0R1ciIsImluY3JlbWVudFRpbWUiLCJ0aW1lciIsInNldEludGVydmFsIiwiU3RyaW5nIiwiY2xlYXJJbnRlcnZhbCIsImZvbnQiLCJNZXRhIiwidGl0bGUiLCJrZXl3b3JkcyIsImRlc2NyaXB0aW9uIiwiZGVmYXVsdFByb3BzIiwiYWJvdXQiLCJyZXNldENvdW50ZXIiLCJlbnRyeSIsImFib3V0U3R5bGVzIiwibWFpbiIsImNvbnRlbnQiLCJtYXJnaW5Cb3R0b20iLCJwMyIsInNlYzIiLCJmb250U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwidGFibGVDb2wiLCJ0YWJsZVJvdyIsImluVmlldyIsInJlZiIsIndyYXBwZXIyIiwibGluZSIsImltZ0tpdCIsImJ0biIsIm1hcmdpbiIsInNlYzMiLCJ3cmFwcGVy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QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXFLRCxDQTdLRDs7QUErS2VQLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDckxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hYm91dC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJblZpZXcgfSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xyXG5cclxuLy9zdHlsaW5nXHJcbmltcG9ydCAnLi4vc3R5bGVzL2NvdW50ZXIubW9kdWxlLmNzcyc7XHJcblxyXG5cclxuY29uc3QgQ291bnQgPSBwcm9wcyA9PiB7XHJcbiAgICAvLyBsYWJlbCBvZiBjb3VudGVyXHJcbiAgICAvLyBudW1iZXIgdG8gaW5jcmVtZW50IHRvXHJcbiAgICAvLyBkdXJhdGlvbiBvZiBjb3VudCBpbiBzZWNvbmRzXHJcbiAgICBjb25zdCBsYWJlbCA9IHByb3BzLmxhYmxlXHJcbiAgICBjb25zdCBudW1iZXIgPSBwcm9wcy5udW1iZXJcclxuICAgIGNvbnN0IGR1cmF0aW9uICA9IHByb3BzLmR1cmF0aW9uXHJcblxyXG4gICAgLy8gbnVtYmVyIGRpc3BsYXllZCBieSBjb21wb25lbnRcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoXCIwXCIpXHJcbiAgICBcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgc3RhcnQgPSAwO1xyXG4gICAgICAgIC8vIGZpcnN0IHRocmVlIG51bWJlcnMgZnJvbSBwcm9wc1xyXG4gICAgICAgIGNvbnN0IGVuZCA9IHBhcnNlSW50KG51bWJlci5zdWJzdHJpbmcoMCwgMykpXHJcbiAgICAgICAgLy8gaWYgemVybywgcmV0dXJuXHJcbiAgICAgICAgaWYgKHN0YXJ0ID09PSBlbmQpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gZmluZCBkdXJhdGlvbiBwZXIgaW5jcmVtZW50XHJcbiAgICAgICAgbGV0IHRvdGFsTWlsU2VjRHVyID0gcGFyc2VJbnQoZHVyYXRpb24pO1xyXG4gICAgICAgIGxldCBpbmNyZW1lbnRUaW1lID0gKHRvdGFsTWlsU2VjRHVyIC8gZW5kKSAqIDEwMDA7XHJcblxyXG4gICAgICAgIC8vIHRpbWVyIGluY3JlbWVudHMgc3RhcnQgY291bnRlciBcclxuICAgICAgICAvLyB0aGVuIHVwZGF0ZXMgY291bnRcclxuICAgICAgICAvLyBlbmRzIGlmIHN0YXJ0IHJlYWNoZXMgZW5kXHJcbiAgICAgICAgbGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBzdGFydCArPSAxO1xyXG4gICAgICAgICAgICBzZXRDb3VudChTdHJpbmcoc3RhcnQpICsgbnVtYmVyLnN1YnN0cmluZygzKSlcclxuICAgICAgICAgICAgaWYgKHN0YXJ0ID09PSBlbmQpIGNsZWFySW50ZXJ2YWwodGltZXIpXHJcbiAgICAgICAgfSwgaW5jcmVtZW50VGltZSk7XHJcblxyXG4gICAgICAgIC8vIGRlcGVuZGVuY3kgYXJyYXlcclxuICAgIH0sIFtudW1iZXIsIGR1cmF0aW9uXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvdW50XCI+XHJcbiAgICAgICAgICAgIDxJblZpZXcgYXM9XCJkaXZcIj4gICAgXHJcbiAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgc3R5bGU9e3sgZm9udDogXCI4MDAgNDBweCBzeXN0ZW0tdWlcIiB9fT57Y291bnR9PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9JblZpZXc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudDsiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IE1ldGEgPSAoeyB0aXRsZSwga2V5d29yZHMsIGRlc2NyaXB0aW9uIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MScgLz5cbiAgICAgIDxtZXRhIG5hbWU9J2tleXdvcmRzJyBjb250ZW50PXtrZXl3b3Jkc30gLz5cbiAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvV0QucG5nJyAvPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgKVxufVxuXG5NZXRhLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6ICdUaGUgV2lubmVycyBEYWlseScsXG4gIGtleXdvcmRzOiAnYXJjaGl0ZWN0dXJlJyxcbiAgZGVzY3JpcHRpb246ICdHZXQgdGhlIGxhdGVzdCBhcmNoaXRlY3R1cmUgbmV3cycsXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1ldGFcbiIsImltcG9ydCBNZXRhIGZyb20gJy4uL2NvbXBvbmVudHMvTWV0YSdcbmltcG9ydCBhYm91dFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvYWJvdXQubW9kdWxlLmNzcydcbmltcG9ydCBDb3VudCBmcm9tICcuLi9jb21wb25lbnRzL0NvdW50ZXInXG5pbXBvcnQgeyBJblZpZXcgfSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xuXG5cbmNvbnN0IGFib3V0ID0gKCkgPT4ge1xuXG4gIGZ1bmN0aW9uIHJlc2V0Q291bnRlcihlbnRyeSl7XG4gICAgXG4gICAgICByZXR1cm4gPENvdW50IGtleT17MX0gbnVtYmVyPXsnMjAyMCd9IGR1cmF0aW9uPXs1fSAvPlxuICAgIFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YWJvdXRTdHlsZXMubWFpbn0+XG4gICAgICA8TWV0YSB0aXRsZT0nQWJvdXQnIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5jb250ZW50fT5cbiAgICAgICAgPGgxIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAwfX0+SGF2ZSBhIHNlYXQgITwvaDE+XG4gICAgICAgIDxoND5MZXQgdXMgdGVsbCB5b3Ugb3VyIHN0b3J5PC9oND5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5wM30gPlxuICAgICAgICAgIFN0YXJ0aW5nIG9mZiBpbiB0aGUgc3VtbWVyIG9mIDIwMjAsIGFzIGEgZ3JvdXAgb2YgYXJjaGl0ZWN0cyBiYXNlZCBpbiBCYXJjZWxvbmEgXG4gICAgICAgICAgd2hvIGFyZSBjb25uZWN0ZWQgdGhyb3VnaCBwYXN0aW1lcyBsaWtlIGFydC1waG90b2dyYXBoeSBhbmQgdmlicmF0aW5nIGphenogZXZlbmluZ3MuIFxuICAgICAgICAgIFdoYXQgc3RhcnRlZCBhcyBhIGhvYmJ5IGZvciBjb2xsZWN0aW5nIGNvbXBldGl0aW9uIHdpbm5lcnMgZnJvbSBhcm91bmQgdGhlIGdsb2JlIGluIG9yZGVyIFxuICAgICAgICAgIHRvIGluc3BpcmUgb3VyIHZlcnkgb3duIHdvcmsuIFdpdGggZW5vdWdoIGxvdmUsIGRlZGljYXRpb24gYW5kIGEgZG9zZSBvZiBjb2ZmZWUgaW4gYmV0d2VlblxuICAgICAgICAgIHdlIHR1cm5lZCBvdXIgYXZvY2F0aW9uIGludG8gc29tZXRoaW5nIHdlIGNhbGwgV2lubmVyc0RhaWx5LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxpbWcgc3JjPVwiL2Fib3V0L3RvcEltYWdlLnBuZ1wiIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Fib3V0U3R5bGVzLnNlYzJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGgyPldoYXQgZXhhY3RseSBpcyBXaW5uZXJzRGFpbHk/PC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YWJvdXRTdHlsZXMucDN9IHN0eWxlPXt7IGZvbnRTaXplOidtZWRpdW0nfX0+XG4gICAgICAgICAgICAgIFdpbm5lcnNEYWlseSBpcyBhbiBvbmxpbmUgZGF0YSBiYXNlIG9mIGluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gYXJjaGl0ZWN0dXJhbCBjb21wZXRpdGlvbnMuIFxuICAgICAgICAgICAgICBXZSBwcm92aWRlIGEgZnJhbWUgYW5kIGNhbnZhcyBmb3IgZXZlcnkgcHJvamVjdCB0byBkaXNwbGF5IGl0cyBiZWF1dHkgb24gdGhlIHNjcmVlbnMgb2YgXG4gICAgICAgICAgICAgIHRob3VzYW5kcyBvZiBuZXcgdmlld2Vycy4gV2UgdmFsdWUgdGhlIHdvcmsgb2YgYXJjaGl0ZWN0cyBhbmQgcmVuZGVyZXJzIHdobyBicmVhayB0aGUgXG4gICAgICAgICAgICAgIHdhbGwgYmV0d2VlbiByZWFsaXR5IGFuZCBpZGVhIGluIG9yZGVyIHRvIHNob3cgYSBoaW50IG9mIHRoZSBmdXR1cmUuIFdpbm5lcnNEYWlseSBpcyBcbiAgICAgICAgICAgICAgYSB2aXJ0dWFsIGN1cnJlbmN5IGZvciBhcmNoaXRlY3R1cmFsIGNvbXBldGl0aW9ucywgYSBwbGF0Zm9ybSB3aGVyZSBhY2tub3dsZWRnZWQgXG4gICAgICAgICAgICAgIHdpbm5lcnMgZnJvbSBhbGwgb3ZlciB0aGUgd29ybGQgY29tZSB0b2dldGhlciB0byBmb3JtIGEgY29tbXVuaXR5LCBhIHNob3djYXNlIHRvIFxuICAgICAgICAgICAgICBnYXNwIHNpZGUgYnkgc2lkZSB3aXRoIHRob3NlIHdob3NlIHdvcmsgaXMgc3VidGx5IHJlY29nbml6ZWQuIFdpdGhvdXQgYW55IGRvdWJ0LCBcbiAgICAgICAgICAgICAgd2UgcHJvdmlkZSB0byB0aG9zZSB3aG8gdGhpcnN0IGZvciBpbnNwaXJhdGlvbiB0byB3aW4gYW5kIGJlY29tZSBhIG5ldyByZWZlcmVuY2UgXG4gICAgICAgICAgICAgIGluIHRoZSBmaWVsZC4gU28gd2VsY29tZSEgV2UgZW5jb3VyYWdlIHRoZSBkaWZmdXNpb24gb2YgeW91ciBoYXJkIHdvcmsuXG5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YWJvdXRTdHlsZXMuY29udGVudH0+XG4gICAgICAgIDxoMj5XaW5uZXJz4oCZIE1hcDwvaDI+XG4gICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6J3NtYWxsJ319PlB1Ymxpc2hpbmcgc2luY2UgMjAyMCBmcm9tIGFsbCBvdmVyIHRoZSBnbG9iZS48L3A+XG5cbiAgICAgICAgPGltZyBzcmM9XCIvYWJvdXQvbWFwLnBuZ1wiICBzdHlsZT17e3dpZHRoOiAnNTAlJywgaGVpZ2h0OiAnYXV0byd9fS8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthYm91dFN0eWxlcy50YWJsZUNvbH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Fib3V0U3R5bGVzLnRhYmxlUm93fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthYm91dFN0eWxlcy50YWJsZUNvbH0gc3R5bGU9e3sgd2lkdGg6IDgwIH19PlxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIgfX0+Q29uc3RpdHV0aW9uPC9wPlxuICAgICAgICAgICAgICA8SW5WaWV3PlxuICAgICAgICAgICAgICAgIHsoeyBpblZpZXcsIHJlZiwgZW50cnkgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e3JlZn0+XG4gICAgICAgICAgICAgICAgICAgICAge2luVmlldyAmJiA8Q291bnQga2V5PXsxfSBudW1iZXI9eycyMDIwJ30gZHVyYXRpb249ezIuNX0gLz59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9JblZpZXc+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWJvdXRTdHlsZXMudGFibGVDb2x9IHN0eWxlPXt7IHdpZHRoOiA4MCB9fT5cbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyIH19Pk9mZmljZXM8L3A+XG4gICAgICAgICAgICAgIDxJblZpZXc+XG4gICAgICAgICAgICAgICAgeyh7IGluVmlldywgcmVmLCBlbnRyeSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17cmVmfT5cbiAgICAgICAgICAgICAgICAgICAge2luVmlldyAmJiA8Q291bnQga2V5PXsxfSBudW1iZXI9eyczNDInfSBkdXJhdGlvbj17MS41fSAvPn1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvSW5WaWV3PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Fib3V0U3R5bGVzLnRhYmxlUm93fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthYm91dFN0eWxlcy50YWJsZUNvbH0gc3R5bGU9e3sgd2lkdGg6IDgwIH19PlxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIgfX0+UHJvamVjdHM8L3A+XG4gICAgICAgICAgICAgIDxJblZpZXc+XG4gICAgICAgICAgICAgICAgeyh7IGluVmlldywgcmVmLCBlbnRyeSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17cmVmfT5cbiAgICAgICAgICAgICAgICAgICAge2luVmlldyAmJiA8Q291bnQga2V5PXsxfSBudW1iZXI9eyc0MzknfSBkdXJhdGlvbj17Mn0gLz59XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0luVmlldz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthYm91dFN0eWxlcy50YWJsZUNvbH0gc3R5bGU9e3sgd2lkdGg6IDgwIH19PlxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIgfX0+Q291bnRyaWVzPC9wPlxuICAgICAgICAgICAgICA8SW5WaWV3PlxuICAgICAgICAgICAgICAgIHsoeyBpblZpZXcsIHJlZiwgZW50cnkgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e3JlZn0+XG4gICAgICAgICAgICAgICAgICAgIHtpblZpZXcgJiYgPENvdW50IGtleT17MX0gbnVtYmVyPXsnNjUnfSBkdXJhdGlvbj17MX0gLz59XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0luVmlldz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YWJvdXRTdHlsZXMuc2VjMn0+XG4gICAgICAgIDxoMj5NZWRpYSBQcmVzcyBLaXQ8L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9e2Fib3V0U3R5bGVzLnAzfSA+XG4gICAgICAgICAgRG93bmxvYWQgb3VyIGxvZ28gb3IgaWNvbiBhbmQgdXNlIGl0IG9uIHlvdXIgd2Vic2l0ZSBvciBhZHZlcnRpc2luZy5cblxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthYm91dFN0eWxlcy53cmFwcGVyMn0gPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Fib3V0U3R5bGVzLmxpbmV9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hYm91dC9tZWRpYUtpdDEucG5nXCIgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5pbWdLaXR9IC8+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9hYm91dC9tZWRpYUtpdDIucG5nXCIgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5pbWdLaXR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Fib3V0U3R5bGVzLmxpbmV9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvYWJvdXQvbWVkaWFLaXQzLnBuZ1wiIGNsYXNzTmFtZT17YWJvdXRTdHlsZXMuaW1nS2l0fS8+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9hYm91dC9tZWRpYUtpdDQucG5nXCIgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5pbWdLaXR9Lz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YWJvdXRTdHlsZXMuYnRufT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvV2lubmVyc0RhaWx5X1ByZXNzX0tpdF9BbGwuemlwXCIgZG93bmxvYWQ9XCJ3aW5uZXJzZGFpbHlfbWVkaWFfa2l0XCIgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5wM30gc3R5bGU9e3ttYXJnaW46IDIwfX0+XG4gICAgICAgICAgICAgIERvd25sb2FkIGFsbCBsb2dvcyAmIGljb25zXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxiciAvPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5zZWMzfT5cbiAgICAgICAgPGgyPkdldCBjbG9zZXI8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWJvdXRTdHlsZXMud3JhcHBlcn0+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWJvdXRTdHlsZXMubGluZX0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9hYm91dC9wZW4ucG5nXCIgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5pbWdTbWFsbH0gLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YWJvdXRTdHlsZXMucDNTfSA+XG4gICAgICAgICAgICAgICAgV2XigJlyZSBjb250aW51b3VzbHkgbG9va2luZyBmb3IgdGFsZW50LiBJZiB5b3Ugd2FudCB0byBiZWNvbWUgYSBjb250cmlidXRvciB0byBvdXIgYmxvZywgcGxlYXNlIHdyaXRlIHRvIHVzIGF0IDxiPmNvbnRhY3RAdGhld2lubmVyc2RhaWx5LmNvbTwvYj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5saW5lfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fib3V0L3F1ZXN0aW9uLnBuZ1wiIGNsYXNzTmFtZT17YWJvdXRTdHlsZXMuaW1nU21hbGx9IC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Fib3V0U3R5bGVzLnAzU30gPlxuICAgICAgICAgICAgICBTaG91bGQgeW91IGhhdmUgYW55IHF1ZXN0aW9ucywgcHJvcG9zYWxzLCBvciByZXF1aXJlIGFueSBmdXJ0aGVyIGFzc2lzdGFuY2UgcmVnYXJkaW5nIFdJTk5FUlNEQUlMWSwgcGxlYXNlIGRvIG5vdCBoZXNpdGF0ZSB0byBjb250YWN0IHVzIGF0IDxiPmNvbnRhY3RAdGhld2lubmVyc2RhaWx5LmNvbTwvYj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5saW5lfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fib3V0L3RleHRCb3gucG5nXCIgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5pbWdTbWFsbH0gLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YWJvdXRTdHlsZXMucDNTfSA+XG4gICAgICAgICAgICAgIFdlIGFyZSBvcGVuIHRvIHBhcnRuZXJzaGlwcyBhbmQgb3RoZXIgY29sbGFib3JhdGlvbnMuIFdlIHdvdWxkIGxvdmUgdG8gaGVhciBmcm9tIHlvdSBhdCA8Yj5jb250YWN0QHRoZXdpbm5lcnNkYWlseS5jb208L2I+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxiciAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5zZWMyfT5cbiAgICAgICAgPGgyPlRoZSB3aG9sZSB3ZWIgaXMgbWFkZSBieSB1czwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17YWJvdXRTdHlsZXMucDN9ID5cbiAgICAgICAgICBXZSBhcmUgcHJvdWQgb2YgdGhlIGRpdmVyc2UgYmFja2dyb3VuZHMgb3VyIHRlYW0gY29tZXMgZnJvbSwgaGF2aW5nIGludGVybmF0aW9uYWwgbWVtYmVycyB3aXRoaW4gZGlmZmVyZW50IHNwZWNpYWx0aWVzLCBmcm9tIGFyY2hpdGVjdHMgYW5kIGVuZ2luZWVycyB0byBidXNpbmVzcyBhbmFseXN0cy4gSXTigJlzIG91ciBiZWxpZXZlIHRoYXQgZGl2ZXJzaXR5IGlzIGEga2V5IGZhY3RvciBmb3IgY3JlYXRpdml0eSBpbiBvdXIgd29ya3NwYWNlLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxiciAvPlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiYWJvdXRfbWFpbl9faHJrTFpcIixcblx0XCJjb250ZW50XCI6IFwiYWJvdXRfY29udGVudF9fYzJRWkZcIixcblx0XCJ0b3BCb3hlc1wiOiBcImFib3V0X3RvcEJveGVzX18yX2V0TVwiLFxuXHRcImJ0blwiOiBcImFib3V0X2J0bl9fM05LQ29cIixcblx0XCJib3hcIjogXCJhYm91dF9ib3hfXzFfYWlNXCIsXG5cdFwicDJcIjogXCJhYm91dF9wMl9fMTFBY3VcIixcblx0XCJ0YWJsZUNvbFwiOiBcImFib3V0X3RhYmxlQ29sX18ybUdzSVwiLFxuXHRcInRhYmxlUm93XCI6IFwiYWJvdXRfdGFibGVSb3dfXzJGV0s3XCIsXG5cdFwic2VjMlwiOiBcImFib3V0X3NlYzJfXzI5MEVfXCIsXG5cdFwicDNcIjogXCJhYm91dF9wM19fMXpNLUhcIixcblx0XCJwNFwiOiBcImFib3V0X3A0X18xZng0SVwiLFxuXHRcInNlYzNcIjogXCJhYm91dF9zZWMzX19wbGhNYlwiLFxuXHRcImltZ0tpdFwiOiBcImFib3V0X2ltZ0tpdF9fMmttTzBcIixcblx0XCJsaW5lXCI6IFwiYWJvdXRfbGluZV9fMVAzclhcIixcblx0XCJwM1NcIjogXCJhYm91dF9wM1NfXzM5ZzVtXCIsXG5cdFwid3JhcHBlclwiOiBcImFib3V0X3dyYXBwZXJfX2JIZlhlXCIsXG5cdFwid3JhcHBlcjJcIjogXCJhYm91dF93cmFwcGVyMl9fMk1lV3NcIixcblx0XCJpbWdTbWFsbFwiOiBcImFib3V0X2ltZ1NtYWxsX19DdW9WcFwiLFxuXHRcImNvdW50ZXJcIjogXCJhYm91dF9jb3VudGVyX19Od3BqcVwiLFxuXHRcImNvdW50ZXIyXCI6IFwiYWJvdXRfY291bnRlcjJfXzNfV05sXCIsXG5cdFwiY291bnRlcjNcIjogXCJhYm91dF9jb3VudGVyM19fNUoyNG5cIixcblx0XCJjb3VudGVyNFwiOiBcImFib3V0X2NvdW50ZXI0X184RTZicFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQ291bnRcIjogXCJjb3VudGVyX0NvdW50X182cm1Fc1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==