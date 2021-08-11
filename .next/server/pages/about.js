(function() {
var exports = {};
exports.id = "pages/about";
exports.ids = ["pages/about"];
exports.modules = {

/***/ "./components/Counter.js":
/*!*******************************!*\
  !*** ./components/Counter.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ "react-intersection-observer");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ameer\\Documents\\website\\Winners-Daily.github.io\\components\\Counter.js";

 //styling



const Count = props => {
  const label = props.lable; // label of counter

  const number = props.number; // number to increment to

  const duration = props.duration; // duration of count in seconds

  const {
    0: count,
    1: setCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"); // number displayed by component

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let start = 0;
    const end = parseInt(number.substring(0, 3)); // first three numbers from props
    // if zero, return

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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "Count",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.InView, {
      as: "div",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          style: {
            font: "800 40px system-ui"
          },
          children: count
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Count);

/***/ }),

/***/ "./components/Meta.js":
/*!****************************!*\
  !*** ./components/Meta.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "keywords",
      content: keywords
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "description",
      content: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      charSet: "utf-8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
      rel: "icon",
      href: "/favicon.ico"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.js");
/* harmony import */ var _styles_about_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/about.module.css */ "./styles/about.module.css");
/* harmony import */ var _styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Counter */ "./components/Counter.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ "react-intersection-observer");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\ameer\\Documents\\website\\Winners-Daily.github.io\\pages\\about.js";





const about = () => {
  const resetCounter = entry => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Counter__WEBPACK_IMPORTED_MODULE_2__.default, {
    number: '2020',
    duration: 5
  }, 1, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 35
  }, undefined);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_1__.default, {
      title: "About"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        style: {
          marginBottom: 0
        },
        children: "Have a seat !"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: "Let us tell you our story"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().p3),
        children: "Starting off in the summer of 2020, as a group of architects based in Barcelona who are connected through pastimes like art-photography and vibrating jazz evenings. What started as a hobby for collecting competition winners from around the globe in order to inspire our very own work. With enough love, dedication and a dose of coffee in between we turned our avocation into something we call WinnersDaily."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/about/topImage.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().sec2),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "What exactly is WinnersDaily?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().p3),
            style: {
              fontSize: 'medium'
            },
            children: "WinnersDaily is an online data base of information related to architectural competitions. We provide a frame and canvas for every project to display its beauty on the screens of thousands of new viewers. We value the work of architects and renderers who break the wall between reality and idea in order to show a hint of the future. WinnersDaily is a virtual currency for architectural competitions, a platform where acknowledged winners from all over the world come together to form a community, a showcase to gasp side by side with those whose work is subtly recognized. Without any doubt, we provide to those who thirst for inspiration to win and become a new reference in the field. So welcome! We encourage the diffusion of your hard work."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
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
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Winners\u2019 Map"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        style: {
          fontSize: 'small'
        },
        children: "Publishing since 2020 from all over the globe."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/about/map.png",
        style: {
          width: '50%',
          height: 'auto'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().tableCol),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().tableRow),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().tableCol),
            style: {
              width: 80
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              style: {
                marginBottom: 2
              },
              children: "Constitution"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 25
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.InView, {
              children: ({
                inView,
                ref,
                entry
              }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                ref: ref,
                children: inView && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Counter__WEBPACK_IMPORTED_MODULE_2__.default, {
                  number: '2020',
                  duration: 2.5
                }, 1, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 52
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().tableCol),
            style: {
              width: 80
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              style: {
                marginBottom: 2
              },
              children: "Offices"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.InView, {
              children: ({
                inView,
                ref,
                entry
              }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                ref: ref,
                children: inView && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Counter__WEBPACK_IMPORTED_MODULE_2__.default, {
                  number: '342',
                  duration: 1.5
                }, 1, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 52
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().tableRow),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().tableCol),
            style: {
              width: 80
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              style: {
                marginBottom: 2
              },
              children: "Projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.InView, {
              children: ({
                inView,
                ref,
                entry
              }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                ref: ref,
                children: inView && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Counter__WEBPACK_IMPORTED_MODULE_2__.default, {
                  number: '439',
                  duration: 2
                }, 1, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 52
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().tableCol),
            style: {
              width: 80
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              style: {
                marginBottom: 2
              },
              children: "Countries"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.InView, {
              children: ({
                inView,
                ref,
                entry
              }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                ref: ref,
                children: inView && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Counter__WEBPACK_IMPORTED_MODULE_2__.default, {
                  number: '65',
                  duration: 1
                }, 1, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 48
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().sec2),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Media Press Kit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().p3),
        children: "Download our logo or icon and use it on your website or advertising."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().container3),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrapper3),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/about/mediaKit1.png",
            className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().imgKit)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/about/mediaKit2.png",
            className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().imgKit)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/about/mediaKit3.png",
            className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().imgKit)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/about/mediaKit4.png",
            className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().imgKit)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().btn),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "/WinnersDaily_Press_Kit_All.zip",
          download: "winnersdaily_media_kit",
          className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().p3),
          style: {
            margin: 20
          },
          children: "Download all logos & icons"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().sec3),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Get closer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().line),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/about/pen.png",
            className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().imgSmall)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().p3S),
            children: ["We\u2019re continuously looking for talent. If you want to become a contributor to our blog, please write to us at ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: "contact@thewinnersdaily.com"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 139
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().line),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/about/question.png",
            className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().imgSmall)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().p3S),
            children: ["Should you have any questions, proposals, or require any further assistance regarding WINNERSDAILY, please do not hesitate to contact us at ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: "contact@thewinnersdaily.com"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 169
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().line),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/about/textBox.png",
            className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().imgSmall)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().p3S),
            children: ["We are open to partnerships and other collaborations. We would love to hear from you at ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: "contact@thewinnersdaily.com"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 117
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().sec2),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "The whole web is made by us"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_about_module_css__WEBPACK_IMPORTED_MODULE_4___default().p3),
        children: "We are proud of the diverse backgrounds our team comes from, having international members within different specialties, from architects and engineers to business analysts. It\u2019s our believe that diversity is a key factor for creativity in our workspace."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (about);

/***/ }),

/***/ "./styles/about.module.css":
/*!*********************************!*\
  !*** ./styles/about.module.css ***!
  \*********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"main": "about_main__hrkLZ",
	"content": "about_content__c2QZF",
	"container3": "about_container3__pPpho",
	"wrapper3": "about_wrapper3__2JMJp",
	"imgKit": "about_imgKit__2kmO0",
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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-intersection-observer":
/*!**********************************************!*\
  !*** external "react-intersection-observer" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-intersection-observer");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/about.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNyYXNoLWNvdXJzZS8uL2NvbXBvbmVudHMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9uZXh0LWNyYXNoLWNvdXJzZS8uL2NvbXBvbmVudHMvTWV0YS5qcyIsIndlYnBhY2s6Ly9uZXh0LWNyYXNoLWNvdXJzZS8uL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovL25leHQtY3Jhc2gtY291cnNlLy4vc3R5bGVzL2Fib3V0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbmV4dC1jcmFzaC1jb3Vyc2UvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9uZXh0LWNyYXNoLWNvdXJzZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dC1jcmFzaC1jb3Vyc2UvZXh0ZXJuYWwgXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIiIsIndlYnBhY2s6Ly9uZXh0LWNyYXNoLWNvdXJzZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNvdW50IiwicHJvcHMiLCJsYWJlbCIsImxhYmxlIiwibnVtYmVyIiwiZHVyYXRpb24iLCJjb3VudCIsInNldENvdW50IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdGFydCIsImVuZCIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwidG90YWxNaWxTZWNEdXIiLCJpbmNyZW1lbnRUaW1lIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsIlN0cmluZyIsImNsZWFySW50ZXJ2YWwiLCJmb250IiwiTWV0YSIsInRpdGxlIiwia2V5d29yZHMiLCJkZXNjcmlwdGlvbiIsImRlZmF1bHRQcm9wcyIsImFib3V0IiwicmVzZXRDb3VudGVyIiwiZW50cnkiLCJhYm91dFN0eWxlcyIsIm1hcmdpbkJvdHRvbSIsImZvbnRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJpblZpZXciLCJyZWYiLCJpbWdLaXQiLCJtYXJnaW4iLCJpbWdTbWFsbCJdLCJtYXBwaW5ncyI6Ijs7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QUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUF3SUgsQ0ExSUQ7O0FBNElBLCtEQUFlSCxLQUFmLEU7Ozs7Ozs7Ozs7QUNqSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxQkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcclxuXHJcbi8vc3R5bGluZ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9jb3VudGVyLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgQ291bnQgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCBsYWJlbCA9IHByb3BzLmxhYmxlOyAgICAgICAgICAvLyBsYWJlbCBvZiBjb3VudGVyXHJcbiAgICBjb25zdCBudW1iZXIgPSBwcm9wcy5udW1iZXI7ICAgICAgICAvLyBudW1iZXIgdG8gaW5jcmVtZW50IHRvXHJcbiAgICBjb25zdCBkdXJhdGlvbiAgPSBwcm9wcy5kdXJhdGlvbjsgICAvLyBkdXJhdGlvbiBvZiBjb3VudCBpbiBzZWNvbmRzXHJcblxyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShcIjBcIik7ICAgIC8vIG51bWJlciBkaXNwbGF5ZWQgYnkgY29tcG9uZW50XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsZXQgc3RhcnQgPSAwO1xyXG4gICAgICAgIGNvbnN0IGVuZCA9IHBhcnNlSW50KG51bWJlci5zdWJzdHJpbmcoMCwgMykpOyAgICAvLyBmaXJzdCB0aHJlZSBudW1iZXJzIGZyb20gcHJvcHNcclxuICAgICAgICBcclxuICAgICAgICAvLyBpZiB6ZXJvLCByZXR1cm5cclxuICAgICAgICBpZiAoc3RhcnQgPT09IGVuZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBmaW5kIGR1cmF0aW9uIHBlciBpbmNyZW1lbnRcclxuICAgICAgICBsZXQgdG90YWxNaWxTZWNEdXIgPSBwYXJzZUludChkdXJhdGlvbik7XHJcbiAgICAgICAgbGV0IGluY3JlbWVudFRpbWUgID0gKHRvdGFsTWlsU2VjRHVyIC8gZW5kKSAqIDEwMDA7XHJcblxyXG4gICAgICAgIC8vIHRpbWVyIGluY3JlbWVudHMgc3RhcnQgY291bnRlciBcclxuICAgICAgICAvLyB0aGVuIHVwZGF0ZXMgY291bnRcclxuICAgICAgICAvLyBlbmRzIGlmIHN0YXJ0IHJlYWNoZXMgZW5kXHJcbiAgICAgICAgbGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBzdGFydCArPSAxO1xyXG4gICAgICAgICAgICBzZXRDb3VudChTdHJpbmcoc3RhcnQpICsgbnVtYmVyLnN1YnN0cmluZygzKSk7XHJcbiAgICAgICAgICAgIGlmIChzdGFydCA9PT0gZW5kKSBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgICB9LCBpbmNyZW1lbnRUaW1lKTtcclxuXHJcbiAgICAgICAgLy8gZGVwZW5kZW5jeSBhcnJheVxyXG4gICAgfSwgW251bWJlciwgZHVyYXRpb25dKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ291bnRcIj5cclxuICAgICAgICAgICAgPEluVmlldyBhcz1cImRpdlwiPiAgICBcclxuICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICA8aSBzdHlsZT17eyBmb250OiBcIjgwMCA0MHB4IHN5c3RlbS11aVwiIH19Pntjb3VudH08L2k+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L0luVmlldz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdW50OyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5jb25zdCBNZXRhID0gKHsgdGl0bGUsIGtleXdvcmRzLCBkZXNjcmlwdGlvbiB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgICAgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEnIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J2tleXdvcmRzJyAgICBjb250ZW50PXtrZXl3b3Jkc30gLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XHJcbiAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICApXHJcbn1cclxuXHJcbk1ldGEuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgdGl0bGU6ICdUaGUgV2lubmVycyBEYWlseScsXHJcbiAgICBrZXl3b3JkczogJ2FyY2hpdGVjdHVyZScsXHJcbiAgICBkZXNjcmlwdGlvbjogJ0dldCB0aGUgbGF0ZXN0IGFyY2hpdGVjdHVyZSBuZXdzJyxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWV0YVxyXG4iLCJpbXBvcnQgTWV0YSBmcm9tICcuLi9jb21wb25lbnRzL01ldGEnO1xyXG5pbXBvcnQgYWJvdXRTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2Fib3V0Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQ291bnQgZnJvbSAnLi4vY29tcG9uZW50cy9Db3VudGVyJztcclxuaW1wb3J0IHsgSW5WaWV3IH0gZnJvbSAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcclxuXHJcbmNvbnN0IGFib3V0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzZXRDb3VudGVyID0gZW50cnkgPT4gPENvdW50IGtleT17MX0gbnVtYmVyPXsnMjAyMCd9IGR1cmF0aW9uPXs1fSAvPlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWJvdXRTdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgIDxNZXRhIHRpdGxlPSdBYm91dCcgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Fib3V0U3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAwfX0+SGF2ZSBhIHNlYXQgITwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDQ+TGV0IHVzIHRlbGwgeW91IG91ciBzdG9yeTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Fib3V0U3R5bGVzLnAzfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgU3RhcnRpbmcgb2ZmIGluIHRoZSBzdW1tZXIgb2YgMjAyMCwgYXMgYSBncm91cCBvZiBhcmNoaXRlY3RzIGJhc2VkIGluIEJhcmNlbG9uYSBcclxuICAgICAgICAgICAgICAgICAgICB3aG8gYXJlIGNvbm5lY3RlZCB0aHJvdWdoIHBhc3RpbWVzIGxpa2UgYXJ0LXBob3RvZ3JhcGh5IGFuZCB2aWJyYXRpbmcgamF6eiBldmVuaW5ncy4gXHJcbiAgICAgICAgICAgICAgICAgICAgV2hhdCBzdGFydGVkIGFzIGEgaG9iYnkgZm9yIGNvbGxlY3RpbmcgY29tcGV0aXRpb24gd2lubmVycyBmcm9tIGFyb3VuZCB0aGUgZ2xvYmUgaW4gb3JkZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgdG8gaW5zcGlyZSBvdXIgdmVyeSBvd24gd29yay4gV2l0aCBlbm91Z2ggbG92ZSwgZGVkaWNhdGlvbiBhbmQgYSBkb3NlIG9mIGNvZmZlZSBpbiBiZXR3ZWVuXHJcbiAgICAgICAgICAgICAgICAgICAgd2UgdHVybmVkIG91ciBhdm9jYXRpb24gaW50byBzb21ldGhpbmcgd2UgY2FsbCBXaW5uZXJzRGFpbHkuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hYm91dC90b3BJbWFnZS5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Fib3V0U3R5bGVzLnNlYzJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPldoYXQgZXhhY3RseSBpcyBXaW5uZXJzRGFpbHk/PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5wM30gc3R5bGU9e3sgZm9udFNpemU6J21lZGl1bSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpbm5lcnNEYWlseSBpcyBhbiBvbmxpbmUgZGF0YSBiYXNlIG9mIGluZm9ybWF0aW9uIHJlbGF0ZWQgdG8gYXJjaGl0ZWN0dXJhbCBjb21wZXRpdGlvbnMuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgcHJvdmlkZSBhIGZyYW1lIGFuZCBjYW52YXMgZm9yIGV2ZXJ5IHByb2plY3QgdG8gZGlzcGxheSBpdHMgYmVhdXR5IG9uIHRoZSBzY3JlZW5zIG9mIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRzIG9mIG5ldyB2aWV3ZXJzLiBXZSB2YWx1ZSB0aGUgd29yayBvZiBhcmNoaXRlY3RzIGFuZCByZW5kZXJlcnMgd2hvIGJyZWFrIHRoZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhbGwgYmV0d2VlbiByZWFsaXR5IGFuZCBpZGVhIGluIG9yZGVyIHRvIHNob3cgYSBoaW50IG9mIHRoZSBmdXR1cmUuIFdpbm5lcnNEYWlseSBpcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgdmlydHVhbCBjdXJyZW5jeSBmb3IgYXJjaGl0ZWN0dXJhbCBjb21wZXRpdGlvbnMsIGEgcGxhdGZvcm0gd2hlcmUgYWNrbm93bGVkZ2VkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lubmVycyBmcm9tIGFsbCBvdmVyIHRoZSB3b3JsZCBjb21lIHRvZ2V0aGVyIHRvIGZvcm0gYSBjb21tdW5pdHksIGEgc2hvd2Nhc2UgdG8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXNwIHNpZGUgYnkgc2lkZSB3aXRoIHRob3NlIHdob3NlIHdvcmsgaXMgc3VidGx5IHJlY29nbml6ZWQuIFdpdGhvdXQgYW55IGRvdWJ0LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlIHByb3ZpZGUgdG8gdGhvc2Ugd2hvIHRoaXJzdCBmb3IgaW5zcGlyYXRpb24gdG8gd2luIGFuZCBiZWNvbWUgYSBuZXcgcmVmZXJlbmNlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW4gdGhlIGZpZWxkLiBTbyB3ZWxjb21lISBXZSBlbmNvdXJhZ2UgdGhlIGRpZmZ1c2lvbiBvZiB5b3VyIGhhcmQgd29yay5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPiBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Fib3V0U3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGgyPldpbm5lcnPigJkgTWFwPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Zm9udFNpemU6J3NtYWxsJ319PlB1Ymxpc2hpbmcgc2luY2UgMjAyMCBmcm9tIGFsbCBvdmVyIHRoZSBnbG9iZS48L3A+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hYm91dC9tYXAucG5nXCIgIHN0eWxlPXt7d2lkdGg6ICc1MCUnLCBoZWlnaHQ6ICdhdXRvJ319Lz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthYm91dFN0eWxlcy50YWJsZUNvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Fib3V0U3R5bGVzLnRhYmxlUm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Fib3V0U3R5bGVzLnRhYmxlQ29sfSBzdHlsZT17eyB3aWR0aDogODAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMiB9fT5Db25zdGl0dXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBpblZpZXcsIHJlZiwgZW50cnkgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17cmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpblZpZXcgJiYgPENvdW50IGtleT17MX0gbnVtYmVyPXsnMjAyMCd9IGR1cmF0aW9uPXsyLjV9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JblZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWJvdXRTdHlsZXMudGFibGVDb2x9IHN0eWxlPXt7IHdpZHRoOiA4MCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMiB9fT5PZmZpY2VzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgaW5WaWV3LCByZWYsIGVudHJ5IH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e3JlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5WaWV3ICYmIDxDb3VudCBrZXk9ezF9IG51bWJlcj17JzM0Mid9IGR1cmF0aW9uPXsxLjV9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JblZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Fib3V0U3R5bGVzLnRhYmxlUm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Fib3V0U3R5bGVzLnRhYmxlQ29sfSBzdHlsZT17eyB3aWR0aDogODAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIgfX0+UHJvamVjdHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBpblZpZXcsIHJlZiwgZW50cnkgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17cmVmfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpblZpZXcgJiYgPENvdW50IGtleT17MX0gbnVtYmVyPXsnNDM5J30gZHVyYXRpb249ezJ9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JblZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWJvdXRTdHlsZXMudGFibGVDb2x9IHN0eWxlPXt7IHdpZHRoOiA4MCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMiB9fT5Db3VudHJpZXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5WaWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBpblZpZXcsIHJlZiwgZW50cnkgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5WaWV3ICYmIDxDb3VudCBrZXk9ezF9IG51bWJlcj17JzY1J30gZHVyYXRpb249ezF9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0luVmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5zZWMyfT5cclxuICAgICAgICAgICAgICAgIDxoMj5NZWRpYSBQcmVzcyBLaXQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5wM30gPlxyXG4gICAgICAgICAgICAgICAgICAgIERvd25sb2FkIG91ciBsb2dvIG9yIGljb24gYW5kIHVzZSBpdCBvbiB5b3VyIHdlYnNpdGUgb3IgYWR2ZXJ0aXNpbmcuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWJvdXRTdHlsZXMuY29udGFpbmVyM30gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthYm91dFN0eWxlcy53cmFwcGVyM30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fib3V0L21lZGlhS2l0MS5wbmdcIiBjbGFzc05hbWU9e2Fib3V0U3R5bGVzLmltZ0tpdH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYWJvdXQvbWVkaWFLaXQyLnBuZ1wiIGNsYXNzTmFtZT17YWJvdXRTdHlsZXMuaW1nS2l0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hYm91dC9tZWRpYUtpdDMucG5nXCIgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5pbWdLaXR9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYWJvdXQvbWVkaWFLaXQ0LnBuZ1wiIGNsYXNzTmFtZT17YWJvdXRTdHlsZXMuaW1nS2l0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YWJvdXRTdHlsZXMuYnRufT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1dpbm5lcnNEYWlseV9QcmVzc19LaXRfQWxsLnppcFwiIGRvd25sb2FkPVwid2lubmVyc2RhaWx5X21lZGlhX2tpdFwiIGNsYXNzTmFtZT17YWJvdXRTdHlsZXMucDN9IHN0eWxlPXt7bWFyZ2luOiAyMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEb3dubG9hZCBhbGwgbG9nb3MgJiBpY29uc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWJvdXRTdHlsZXMuc2VjM30+XHJcbiAgICAgICAgICAgICAgICA8aDI+R2V0IGNsb3NlcjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWJvdXRTdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Fib3V0U3R5bGVzLmxpbmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9hYm91dC9wZW4ucG5nXCIgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5pbWdTbWFsbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5wM1N9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdl4oCZcmUgY29udGludW91c2x5IGxvb2tpbmcgZm9yIHRhbGVudC4gSWYgeW91IHdhbnQgdG8gYmVjb21lIGEgY29udHJpYnV0b3IgdG8gb3VyIGJsb2csIHBsZWFzZSB3cml0ZSB0byB1cyBhdCA8Yj5jb250YWN0QHRoZXdpbm5lcnNkYWlseS5jb208L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YWJvdXRTdHlsZXMubGluZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fib3V0L3F1ZXN0aW9uLnBuZ1wiIGNsYXNzTmFtZT17YWJvdXRTdHlsZXMuaW1nU21hbGx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YWJvdXRTdHlsZXMucDNTfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG91bGQgeW91IGhhdmUgYW55IHF1ZXN0aW9ucywgcHJvcG9zYWxzLCBvciByZXF1aXJlIGFueSBmdXJ0aGVyIGFzc2lzdGFuY2UgcmVnYXJkaW5nIFdJTk5FUlNEQUlMWSwgcGxlYXNlIGRvIG5vdCBoZXNpdGF0ZSB0byBjb250YWN0IHVzIGF0IDxiPmNvbnRhY3RAdGhld2lubmVyc2RhaWx5LmNvbTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5saW5lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYWJvdXQvdGV4dEJveC5wbmdcIiBjbGFzc05hbWU9e2Fib3V0U3R5bGVzLmltZ1NtYWxsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Fib3V0U3R5bGVzLnAzU30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgYXJlIG9wZW4gdG8gcGFydG5lcnNoaXBzIGFuZCBvdGhlciBjb2xsYWJvcmF0aW9ucy4gV2Ugd291bGQgbG92ZSB0byBoZWFyIGZyb20geW91IGF0IDxiPmNvbnRhY3RAdGhld2lubmVyc2RhaWx5LmNvbTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5zZWMyfT5cclxuICAgICAgICAgICAgICAgIDxoMj5UaGUgd2hvbGUgd2ViIGlzIG1hZGUgYnkgdXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXthYm91dFN0eWxlcy5wM30gPlxyXG4gICAgICAgICAgICAgICAgICAgIFdlIGFyZSBwcm91ZCBvZiB0aGUgZGl2ZXJzZSBiYWNrZ3JvdW5kcyBvdXIgdGVhbSBjb21lcyBmcm9tLCBoYXZpbmcgaW50ZXJuYXRpb25hbCBtZW1iZXJzIHdpdGhpbiBkaWZmZXJlbnQgc3BlY2lhbHRpZXMsIGZyb20gYXJjaGl0ZWN0cyBhbmQgZW5naW5lZXJzIHRvIGJ1c2luZXNzIGFuYWx5c3RzLiBJdOKAmXMgb3VyIGJlbGlldmUgdGhhdCBkaXZlcnNpdHkgaXMgYSBrZXkgZmFjdG9yIGZvciBjcmVhdGl2aXR5IGluIG91ciB3b3Jrc3BhY2UuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFib3V0XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJhYm91dF9tYWluX19ocmtMWlwiLFxuXHRcImNvbnRlbnRcIjogXCJhYm91dF9jb250ZW50X19jMlFaRlwiLFxuXHRcImNvbnRhaW5lcjNcIjogXCJhYm91dF9jb250YWluZXIzX19wUHBob1wiLFxuXHRcIndyYXBwZXIzXCI6IFwiYWJvdXRfd3JhcHBlcjNfXzJKTUpwXCIsXG5cdFwiaW1nS2l0XCI6IFwiYWJvdXRfaW1nS2l0X18ya21PMFwiLFxuXHRcInRvcEJveGVzXCI6IFwiYWJvdXRfdG9wQm94ZXNfXzJfZXRNXCIsXG5cdFwiYnRuXCI6IFwiYWJvdXRfYnRuX18zTktDb1wiLFxuXHRcImJveFwiOiBcImFib3V0X2JveF9fMV9haU1cIixcblx0XCJwMlwiOiBcImFib3V0X3AyX18xMUFjdVwiLFxuXHRcInRhYmxlQ29sXCI6IFwiYWJvdXRfdGFibGVDb2xfXzJtR3NJXCIsXG5cdFwidGFibGVSb3dcIjogXCJhYm91dF90YWJsZVJvd19fMkZXSzdcIixcblx0XCJzZWMyXCI6IFwiYWJvdXRfc2VjMl9fMjkwRV9cIixcblx0XCJwM1wiOiBcImFib3V0X3AzX18xek0tSFwiLFxuXHRcInA0XCI6IFwiYWJvdXRfcDRfXzFmeDRJXCIsXG5cdFwic2VjM1wiOiBcImFib3V0X3NlYzNfX3BsaE1iXCIsXG5cdFwibGluZVwiOiBcImFib3V0X2xpbmVfXzFQM3JYXCIsXG5cdFwicDNTXCI6IFwiYWJvdXRfcDNTX18zOWc1bVwiLFxuXHRcIndyYXBwZXJcIjogXCJhYm91dF93cmFwcGVyX19iSGZYZVwiLFxuXHRcIndyYXBwZXIyXCI6IFwiYWJvdXRfd3JhcHBlcjJfXzJNZVdzXCIsXG5cdFwiaW1nU21hbGxcIjogXCJhYm91dF9pbWdTbWFsbF9fQ3VvVnBcIixcblx0XCJjb3VudGVyXCI6IFwiYWJvdXRfY291bnRlcl9fTndwanFcIixcblx0XCJjb3VudGVyMlwiOiBcImFib3V0X2NvdW50ZXIyX18zX1dObFwiLFxuXHRcImNvdW50ZXIzXCI6IFwiYWJvdXRfY291bnRlcjNfXzVKMjRuXCIsXG5cdFwiY291bnRlcjRcIjogXCJhYm91dF9jb3VudGVyNF9fOEU2YnBcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9