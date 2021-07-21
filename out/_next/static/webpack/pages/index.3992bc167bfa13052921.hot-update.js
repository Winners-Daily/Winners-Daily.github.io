webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/home.module.css */ "./styles/home.module.css");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_image_fade_in__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-image-fade-in */ "./node_modules/react-image-fade-in/dist/index.es.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\ameer\\Documents\\website\\web_site\\pages\\index.js";




function Home() {
  var _this = this;

  var arr = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(Array(25));

  var i = 2;
  var j = 1;
  var i_offset = 2;
  var odd = false;
  var id = 0;
  var first = 25;
  var width = 14;
  var name = "";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper,
      children: arr.map(function (_) {
        if (i > width) {
          first -= 63;

          if (odd) {
            i = i_offset;
          } else {
            i = i_offset + 1;
            i_offset += 2;
            width -= 1;
          }

          j++;
          odd = !odd;
        }

        i += 2;
        name = "/grid/pic" + (id + 1) + ".png";
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          id: id++,
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.box,
          style: {
            gridColumn: i,
            gridRow: j,
            marginTop: first,
            animationDelay: 100 * j + i * 10 + "ms"
          },
          src: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 19
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.box, _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo),
      style: {
        animationDelay: 800 + "ms"
      },
      src: "/home/logo.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "A map to discover treasures."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.p1,
        children: "Our goal is to deliver architectural competition data in a visually engaging manner. Whether you are an architect or designer, renderer, or just architecture curious, WinnersDaily offers the tool to stay updated on the slightest architecture competition movements."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textBox,
        style: {
          backgroundColor: 'gainsboro'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.p2,
          children: "Stories and collections that inform, help and inspire. Updated daily."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textBox,
        style: {
          backgroundColor: 'white'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.postImg,
          src: "/home/post1.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textBox,
        style: {
          backgroundColor: 'white'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.postImg,
          src: "/home/post2.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textBox,
        style: {
          backgroundColor: 'gainsboro'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.p2,
          style: {
            width: 170
          },
          children: "Curated by experts. Hand\u2011picked for you."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textBox,
        style: {
          backgroundColor: 'gainsboro'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.p2,
          style: {
            width: 170
          },
          children: "Every week, dedicated experts review over 100 projects."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textBox,
        style: {
          backgroundColor: 'white'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.postImg,
          src: "/home/post3.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textBox,
        style: {
          backgroundColor: 'white'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.postImg,
          src: "/home/post4.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textBox,
        style: {
          backgroundColor: 'gainsboro'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.p2,
          children: "Get the details on every post."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textBox,
        style: {
          backgroundColor: 'gainsboro',
          cursor: 'pointer',
          position: 'relative',
          zIndex: 2
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.p2,
          style: {
            width: 170
          },
          children: "\u2018Honey come with me, I\u2019m gonna show you WD\u2019."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "https://www.instagram.com/winnersdaily/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            style: {
              width: 100,
              height: 100,
              cursor: 'pointer'
            },
            src: "/home/instagramLight.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 64
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textBox,
        style: {
          backgroundColor: 'white'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.postImg,
          src: "/home/post5.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textBox,
        style: {
          backgroundColor: 'white'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.p2,
          style: {
            width: 170
          },
          children: "Submit your project to WinnersDaily"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textBox,
        style: {
          backgroundColor: 'gainsboro'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://instagram.us17.list-manage.com/subscribe?u=db0809168e74731fc30782715&id=6b2cf448c5",
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.p2,
          style: {
            width: 170
          },
          children: "Get the weekly winners on your inbox!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImFyciIsIkFycmF5IiwiaSIsImoiLCJpX29mZnNldCIsIm9kZCIsImlkIiwiZmlyc3QiLCJ3aWR0aCIsIm5hbWUiLCJob21lU3R5bGVzIiwibWFpbiIsIndyYXBwZXIiLCJtYXAiLCJfIiwiYm94IiwiZ3JpZENvbHVtbiIsImdyaWRSb3ciLCJtYXJnaW5Ub3AiLCJhbmltYXRpb25EZWxheSIsImxvZ28iLCJjb250ZW50IiwicDEiLCJyb3ciLCJ0ZXh0Qm94IiwiYmFja2dyb3VuZENvbG9yIiwicDIiLCJwb3N0SW1nIiwiY3Vyc29yIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM3QixNQUFNQyxHQUFHLEdBQUcsNkZBQUlDLEtBQUssQ0FBQyxFQUFELENBQVosQ0FBVDs7QUFDQSxNQUFJQyxDQUFDLEdBQUcsQ0FBUjtBQUNBLE1BQUlDLENBQUMsR0FBRyxDQUFSO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLENBQWY7QUFDQSxNQUFJQyxHQUFHLEdBQUcsS0FBVjtBQUNBLE1BQUlDLEVBQUUsR0FBRyxDQUFUO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxNQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBLE1BQUlDLElBQUksR0FBRyxFQUFYO0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDhEQUFVLENBQUNDLElBQTNCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVELDhEQUFVLENBQUNFLE9BQTNCO0FBQUEsZ0JBRUlaLEdBQUcsQ0FBQ2EsR0FBSixDQUFRLFVBQUFDLENBQUMsRUFBRztBQUNOLFlBQUlaLENBQUMsR0FBR00sS0FBUixFQUFjO0FBQ1pELGVBQUssSUFBSSxFQUFUOztBQUNBLGNBQUlG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RWYsOERBQVUsQ0FBQ2lCLE9BQTNCO0FBQW9DLGFBQUcsRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdGRixlQTJHRTtBQUFLLGVBQVMsRUFBRWpCLDhEQUFVLENBQUNhLEdBQTNCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFYiw4REFBVSxDQUFDYyxPQUEzQjtBQUFvQyxhQUFLLEVBQUU7QUFBRUMseUJBQWUsRUFBRTtBQUFuQixTQUEzQztBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBRWYsOERBQVUsQ0FBQ2dCLEVBQXpCO0FBQTZCLGVBQUssRUFBRTtBQUFFbEIsaUJBQUssRUFBRTtBQUFULFdBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUU7QUFBSyxpQkFBUyxFQUFFRSw4REFBVSxDQUFDYyxPQUEzQjtBQUFvQyxhQUFLLEVBQUU7QUFBRUMseUJBQWUsRUFBRTtBQUFuQixTQUEzQztBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLDRGQUFSO0FBQXFHLG1CQUFTLEVBQUVmLDhEQUFVLENBQUNnQixFQUEzSDtBQUErSCxlQUFLLEVBQUU7QUFBRWxCLGlCQUFLLEVBQUU7QUFBVCxXQUF0STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzR0YsZUF5SEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpIRixlQTBIRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0hEO0tBM0l1QlQsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zOTkyYmMxNjdiZmExMzA1MjkyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhvbWVTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgSW1hZ2VGYWRlSW4gZnJvbSBcInJlYWN0LWltYWdlLWZhZGUtaW5cIjtcbmltcG9ydCB7IENlbnRlciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBhcnIgPSBbLi4uQXJyYXkoMjUpXTtcbiAgdmFyIGkgPSAyO1xuICB2YXIgaiA9IDE7XG4gIHZhciBpX29mZnNldCA9IDI7XG4gIHZhciBvZGQgPSBmYWxzZTtcbiAgdmFyIGlkID0gMDtcbiAgdmFyIGZpcnN0ID0gMjU7XG4gIHZhciB3aWR0aCA9IDE0O1xuICB2YXIgbmFtZSA9IFwiXCI7XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLm1haW59PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2hvbWVTdHlsZXMud3JhcHBlcn0+XG4gICAgICAgIHtcbiAgICAgICAgICBhcnIubWFwKF8gPT57XG4gICAgICAgICAgICAgICAgaWYgKGkgPiB3aWR0aCl7XG4gICAgICAgICAgICAgICAgICBmaXJzdCAtPSA2MztcbiAgICAgICAgICAgICAgICAgIGlmIChvZGQpe1xuICAgICAgICAgICAgICAgICAgICBpID0gaV9vZmZzZXQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IGlfb2Zmc2V0ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgaV9vZmZzZXQgKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGggLT0gMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgIG9kZCA9ICFvZGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkgKz0gMjtcbiAgICAgICAgICAgICAgICBuYW1lID0gXCIvZ3JpZC9waWNcIiArIChpZCsxKSArIFwiLnBuZ1wiO1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9e2lkKyt9IGNsYXNzTmFtZT17aG9tZVN0eWxlcy5ib3h9IHN0eWxlPXt7IGdyaWRDb2x1bW46IGksIGdyaWRSb3c6IGosIG1hcmdpblRvcDogZmlyc3QsIGFuaW1hdGlvbkRlbGF5OiAxMDAgKiBqICsgaSoxMCArXCJtc1wiICB9fSBzcmM9e25hbWV9IC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8aW1nIGNsYXNzTmFtZT17aG9tZVN0eWxlcy5ib3gsIGhvbWVTdHlsZXMubG9nb30gc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6IDgwMCAgKyBcIm1zXCIgfX0gc3JjPVwiL2hvbWUvbG9nby5wbmdcIiAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aG9tZVN0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICA8aDI+QSBtYXAgdG8gZGlzY292ZXIgdHJlYXN1cmVzLjwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17aG9tZVN0eWxlcy5wMX0gPk91ciBnb2FsIGlzIHRvIGRlbGl2ZXIgYXJjaGl0ZWN0dXJhbCBjb21wZXRpdGlvbiBkYXRhIGluIGEgXG4gICAgICAgICAgICB2aXN1YWxseSBlbmdhZ2luZyBtYW5uZXIuXG4gICAgICAgICAgICBXaGV0aGVyIHlvdSBhcmUgYW4gYXJjaGl0ZWN0IG9yIGRlc2lnbmVyLCByZW5kZXJlciwgb3IganVzdCBhcmNoaXRlY3R1cmUgY3VyaW91cywgXG4gICAgICAgICAgICBXaW5uZXJzRGFpbHkgb2ZmZXJzIHRoZSB0b29sIHRvIHN0YXkgdXBkYXRlZCBvbiB0aGUgXG4gICAgICAgICAgICBzbGlnaHRlc3QgYXJjaGl0ZWN0dXJlIGNvbXBldGl0aW9uIG1vdmVtZW50cy48L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2hvbWVTdHlsZXMucm93fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hvbWVTdHlsZXMudGV4dEJveH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnZ2FpbnNib3JvJyB9fT4gXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtob21lU3R5bGVzLnAyfT5cbiAgICAgICAgICAgIFN0b3JpZXMgYW5kIGNvbGxlY3Rpb25zIHRoYXQgaW5mb3JtLCBoZWxwIGFuZCBpbnNwaXJlLiBVcGRhdGVkIGRhaWx5LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLnRleHRCb3h9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17aG9tZVN0eWxlcy5wb3N0SW1nfSBzcmM9XCIvaG9tZS9wb3N0MS5wbmdcIiAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2hvbWVTdHlsZXMucm93fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hvbWVTdHlsZXMudGV4dEJveH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19ID5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17aG9tZVN0eWxlcy5wb3N0SW1nfSBzcmM9XCIvaG9tZS9wb3N0Mi5wbmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hvbWVTdHlsZXMudGV4dEJveH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnZ2FpbnNib3JvJyB9fSA+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtob21lU3R5bGVzLnAyfSBzdHlsZT17eyB3aWR0aDogMTcwfX0+XG4gICAgICAgICAgICBDdXJhdGVkIGJ5XG4gICAgICAgICAgICBleHBlcnRzLlxuICAgICAgICAgICAgSGFuZOKAkXBpY2tlZFxuICAgICAgICAgICAgZm9yIHlvdS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2hvbWVTdHlsZXMucm93fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hvbWVTdHlsZXMudGV4dEJveH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnZ2FpbnNib3JvJyB9fSA+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtob21lU3R5bGVzLnAyfSBzdHlsZT17eyB3aWR0aDogMTcwIH19PlxuICAgICAgICAgICAgRXZlcnkgd2VlayxcbiAgICAgICAgICAgIGRlZGljYXRlZFxuICAgICAgICAgICAgZXhwZXJ0cyByZXZpZXdcbiAgICAgICAgICAgIG92ZXIgMTAwXG4gICAgICAgICAgICBwcm9qZWN0cy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aG9tZVN0eWxlcy50ZXh0Qm94fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0gPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtob21lU3R5bGVzLnBvc3RJbWd9IHNyYz1cIi9ob21lL3Bvc3QzLnBuZ1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2hvbWVTdHlsZXMucm93fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hvbWVTdHlsZXMudGV4dEJveH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19ID5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17aG9tZVN0eWxlcy5wb3N0SW1nfSBzcmM9XCIvaG9tZS9wb3N0NC5wbmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hvbWVTdHlsZXMudGV4dEJveH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnZ2FpbnNib3JvJyB9fSA+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtob21lU3R5bGVzLnAyfSA+XG4gICAgICAgICAgICBHZXQgdGhlIGRldGFpbHNcbiAgICAgICAgICAgIG9uIGV2ZXJ5IHBvc3QuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLnJvd30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLnRleHRCb3h9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2dhaW5zYm9ybycsIGN1cnNvcjogJ3BvaW50ZXInLCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgekluZGV4OiAyIH19ID5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2hvbWVTdHlsZXMucDJ9IHN0eWxlPXt7IHdpZHRoOiAxNzAgfX0+XG4gICAgICAgICAgICDigJhIb25leSBjb21lIHdpdGggbWUsXG4gICAgICAgICAgICBJ4oCZbSBnb25uYSBzaG93IHlvdSBXROKAmS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPExpbmsgaHJlZj0naHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS93aW5uZXJzZGFpbHkvJz48aW1nIHN0eWxlPXt7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwICwgY3Vyc29yOiAncG9pbnRlcid9fSBzcmM9XCIvaG9tZS9pbnN0YWdyYW1MaWdodC5wbmdcIiAvPjwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLnRleHRCb3h9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fSA+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e2hvbWVTdHlsZXMucG9zdEltZ30gc3JjPVwiL2hvbWUvcG9zdDUucG5nXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aG9tZVN0eWxlcy5yb3d9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aG9tZVN0eWxlcy50ZXh0Qm94fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0gPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17aG9tZVN0eWxlcy5wMn0gc3R5bGU9e3sgd2lkdGg6IDE3MCB9fT5cbiAgICAgICAgICAgIFN1Ym1pdCB5b3VyIHByb2plY3QgdG8gV2lubmVyc0RhaWx5XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hvbWVTdHlsZXMudGV4dEJveH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnZ2FpbnNib3JvJyB9fSA+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaW5zdGFncmFtLnVzMTcubGlzdC1tYW5hZ2UuY29tL3N1YnNjcmliZT91PWRiMDgwOTE2OGU3NDczMWZjMzA3ODI3MTUmaWQ9NmIyY2Y0NDhjNVwiIGNsYXNzTmFtZT17aG9tZVN0eWxlcy5wMn0gc3R5bGU9e3sgd2lkdGg6IDE3MCB9fT5cbiAgICAgICAgICAgIEdldCB0aGUgd2Vla2x5IHdpbm5lcnMgb24geW91ciBpbmJveCFcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxici8+XG4gICAgICA8YnIgLz5cbiAgICA8L2Rpdj5cblxuICApXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=