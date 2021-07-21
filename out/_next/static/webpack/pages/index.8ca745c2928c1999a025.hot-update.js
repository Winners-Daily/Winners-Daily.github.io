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
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Image, {
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
        columnNumber: 9
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
          lineNumber: 61,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
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
          lineNumber: 66,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
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
          lineNumber: 72,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
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
          children: "Curated by professionals. Hand\u2011picked for you."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
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
          lineNumber: 87,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
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
          lineNumber: 96,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
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
          lineNumber: 103,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
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
          lineNumber: 106,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
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
          lineNumber: 116,
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
            lineNumber: 120,
            columnNumber: 64
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
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
          lineNumber: 123,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.row,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.textBox,
        style: {
          backgroundColor: 'white'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://wdailycontact.typeform.com/to/ldHTBair",
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.p2,
          style: {
            width: 170
          },
          children: "Submit your project to WinnersDaily"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
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
          lineNumber: 135,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImFyciIsIkFycmF5IiwiaSIsImoiLCJpX29mZnNldCIsIm9kZCIsImlkIiwiZmlyc3QiLCJ3aWR0aCIsIm5hbWUiLCJob21lU3R5bGVzIiwibWFpbiIsIndyYXBwZXIiLCJtYXAiLCJfIiwiYm94IiwiZ3JpZENvbHVtbiIsImdyaWRSb3ciLCJtYXJnaW5Ub3AiLCJhbmltYXRpb25EZWxheSIsImxvZ28iLCJjb250ZW50IiwicDEiLCJyb3ciLCJ0ZXh0Qm94IiwiYmFja2dyb3VuZENvbG9yIiwicDIiLCJwb3N0SW1nIiwiY3Vyc29yIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM3QixNQUFNQyxHQUFHLEdBQUcsNkZBQUlDLEtBQUssQ0FBQyxFQUFELENBQVosQ0FBVDs7QUFDQSxNQUFJQyxDQUFDLEdBQUcsQ0FBUjtBQUNBLE1BQUlDLENBQUMsR0FBRyxDQUFSO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLENBQWY7QUFDQSxNQUFJQyxHQUFHLEdBQUcsS0FBVjtBQUNBLE1BQUlDLEVBQUUsR0FBRyxDQUFUO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxNQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBLE1BQUlDLElBQUksR0FBRyxFQUFYO0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDhEQUFVLENBQUNDLElBQTNCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVELDhEQUFVLENBQUNFLE9BQTNCO0FBQUEsZ0JBRUlaLEdBQUcsQ0FBQ2EsR0FBSixDQUFRLFVBQUFDLENBQUMsRUFBRztBQUNOLFlBQUlaLENBQUMsR0FBR00sS0FBUixFQUFjO0FBQ1pELGVBQUssSUFBSSxFQUFUOztBQUNBLGNBQUlG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aG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBob21lU3R5bGVzIGZyb20gJy4uL3N0eWxlcy9ob21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEltYWdlRmFkZUluIGZyb20gXCJyZWFjdC1pbWFnZS1mYWRlLWluXCI7XG5pbXBvcnQgeyBDZW50ZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgYXJyID0gWy4uLkFycmF5KDI1KV07XG4gIHZhciBpID0gMjtcbiAgdmFyIGogPSAxO1xuICB2YXIgaV9vZmZzZXQgPSAyO1xuICB2YXIgb2RkID0gZmFsc2U7XG4gIHZhciBpZCA9IDA7XG4gIHZhciBmaXJzdCA9IDI1O1xuICB2YXIgd2lkdGggPSAxNDtcbiAgdmFyIG5hbWUgPSBcIlwiO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17aG9tZVN0eWxlcy5tYWlufT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICB7XG4gICAgICAgICAgYXJyLm1hcChfID0+e1xuICAgICAgICAgICAgICAgIGlmIChpID4gd2lkdGgpe1xuICAgICAgICAgICAgICAgICAgZmlyc3QgLT0gNjM7XG4gICAgICAgICAgICAgICAgICBpZiAob2RkKXtcbiAgICAgICAgICAgICAgICAgICAgaSA9IGlfb2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGkgPSBpX29mZnNldCArIDE7XG4gICAgICAgICAgICAgICAgICAgIGlfb2Zmc2V0ICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoIC09IDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICBvZGQgPSAhb2RkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpICs9IDI7XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiL2dyaWQvcGljXCIgKyAoaWQrMSkgKyBcIi5wbmdcIjtcbiAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICA8SW1hZ2UgaWQ9e2lkKyt9IGNsYXNzTmFtZT17aG9tZVN0eWxlcy5ib3h9IHN0eWxlPXt7IGdyaWRDb2x1bW46IGksIGdyaWRSb3c6IGosIG1hcmdpblRvcDogZmlyc3QsIGFuaW1hdGlvbkRlbGF5OiAxMDAgKiBqICsgaSoxMCArXCJtc1wiICB9fSBzcmM9e25hbWV9IC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8aW1nIGNsYXNzTmFtZT17aG9tZVN0eWxlcy5ib3gsIGhvbWVTdHlsZXMubG9nb30gc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6IDgwMCAgKyBcIm1zXCIgfX0gc3JjPVwiL2hvbWUvbG9nby5wbmdcIiAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aG9tZVN0eWxlcy5jb250ZW50fT5cbiAgICAgICAgPGgyPkEgbWFwIHRvIGRpc2NvdmVyIHRyZWFzdXJlcy48L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9e2hvbWVTdHlsZXMucDF9ID5cbiAgICAgICAgICBPdXIgZ29hbCBpcyB0byBkZWxpdmVyIGFyY2hpdGVjdHVyYWwgY29tcGV0aXRpb24gZGF0YSBpbiBhIHZpc3VhbGx5IFxuICAgICAgICAgIGVuZ2FnaW5nIG1hbm5lci4gV2hldGhlciB5b3UgYXJlIGFuIGFyY2hpdGVjdCBvciBkZXNpZ25lciwgcmVuZGVyZXIsXG4gICAgICAgICAgIG9yIGp1c3QgYXJjaGl0ZWN0dXJlIGN1cmlvdXMsIFdpbm5lcnNEYWlseSBvZmZlcnMgdGhlIHRvb2wgdG8gc3RheSBcbiAgICAgICAgICAgdXBkYXRlZCBvbiB0aGUgc2xpZ2h0ZXN0IGFyY2hpdGVjdHVyZSBjb21wZXRpdGlvbiBtb3ZlbWVudHMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aG9tZVN0eWxlcy5yb3d9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aG9tZVN0eWxlcy50ZXh0Qm94fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdnYWluc2Jvcm8nIH19PiBcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2hvbWVTdHlsZXMucDJ9PlxuICAgICAgICAgICAgU3RvcmllcyBhbmQgY29sbGVjdGlvbnMgdGhhdCBpbmZvcm0sIGhlbHAgYW5kIGluc3BpcmUuIFVwZGF0ZWQgZGFpbHkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hvbWVTdHlsZXMudGV4dEJveH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtob21lU3R5bGVzLnBvc3RJbWd9IHNyYz1cIi9ob21lL3Bvc3QxLnBuZ1wiICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aG9tZVN0eWxlcy5yb3d9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aG9tZVN0eWxlcy50ZXh0Qm94fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0gPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtob21lU3R5bGVzLnBvc3RJbWd9IHNyYz1cIi9ob21lL3Bvc3QyLnBuZ1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aG9tZVN0eWxlcy50ZXh0Qm94fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdnYWluc2Jvcm8nIH19ID5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2hvbWVTdHlsZXMucDJ9IHN0eWxlPXt7IHdpZHRoOiAxNzB9fT5cbiAgICAgICAgICAgIEN1cmF0ZWQgYnlcbiAgICAgICAgICAgIHByb2Zlc3Npb25hbHMuXG4gICAgICAgICAgICBIYW5k4oCRcGlja2VkXG4gICAgICAgICAgICBmb3IgeW91LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aG9tZVN0eWxlcy5yb3d9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aG9tZVN0eWxlcy50ZXh0Qm94fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdnYWluc2Jvcm8nIH19ID5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2hvbWVTdHlsZXMucDJ9IHN0eWxlPXt7IHdpZHRoOiAxNzAgfX0+XG4gICAgICAgICAgICBFdmVyeSB3ZWVrLFxuICAgICAgICAgICAgZGVkaWNhdGVkXG4gICAgICAgICAgICBleHBlcnRzIHJldmlld1xuICAgICAgICAgICAgb3ZlciAxMDBcbiAgICAgICAgICAgIHByb2plY3RzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLnRleHRCb3h9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fSA+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e2hvbWVTdHlsZXMucG9zdEltZ30gc3JjPVwiL2hvbWUvcG9zdDMucG5nXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aG9tZVN0eWxlcy5yb3d9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aG9tZVN0eWxlcy50ZXh0Qm94fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0gPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtob21lU3R5bGVzLnBvc3RJbWd9IHNyYz1cIi9ob21lL3Bvc3Q0LnBuZ1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aG9tZVN0eWxlcy50ZXh0Qm94fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdnYWluc2Jvcm8nIH19ID5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2hvbWVTdHlsZXMucDJ9ID5cbiAgICAgICAgICAgIEdldCB0aGUgZGV0YWlsc1xuICAgICAgICAgICAgb24gZXZlcnkgcG9zdC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2hvbWVTdHlsZXMucm93fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hvbWVTdHlsZXMudGV4dEJveH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnZ2FpbnNib3JvJywgY3Vyc29yOiAncG9pbnRlcicsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCB6SW5kZXg6IDIgfX0gPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17aG9tZVN0eWxlcy5wMn0gc3R5bGU9e3sgd2lkdGg6IDE3MCB9fT5cbiAgICAgICAgICAgIOKAmEhvbmV5IGNvbWUgd2l0aCBtZSxcbiAgICAgICAgICAgIEnigJltIGdvbm5hIHNob3cgeW91IFdE4oCZLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8TGluayBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3dpbm5lcnNkYWlseS8nPjxpbWcgc3R5bGU9e3sgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgLCBjdXJzb3I6ICdwb2ludGVyJ319IHNyYz1cIi9ob21lL2luc3RhZ3JhbUxpZ2h0LnBuZ1wiIC8+PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hvbWVTdHlsZXMudGV4dEJveH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19ID5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17aG9tZVN0eWxlcy5wb3N0SW1nfSBzcmM9XCIvaG9tZS9wb3N0NS5wbmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLnJvd30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLnRleHRCb3h9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fSA+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd2RhaWx5Y29udGFjdC50eXBlZm9ybS5jb20vdG8vbGRIVEJhaXJcIiBjbGFzc05hbWU9e2hvbWVTdHlsZXMucDJ9IHN0eWxlPXt7IHdpZHRoOiAxNzAgfX0+XG4gICAgICAgICAgICBTdWJtaXQgeW91ciBwcm9qZWN0IHRvIFdpbm5lcnNEYWlseVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLnRleHRCb3h9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2dhaW5zYm9ybycgfX0gPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS51czE3Lmxpc3QtbWFuYWdlLmNvbS9zdWJzY3JpYmU/dT1kYjA4MDkxNjhlNzQ3MzFmYzMwNzgyNzE1JmlkPTZiMmNmNDQ4YzVcIiBjbGFzc05hbWU9e2hvbWVTdHlsZXMucDJ9IHN0eWxlPXt7IHdpZHRoOiAxNzAgfX0+XG4gICAgICAgICAgICBHZXQgdGhlIHdlZWtseSB3aW5uZXJzIG9uIHlvdXIgaW5ib3ghXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8YnIvPlxuICAgICAgPGJyIC8+XG4gICAgPC9kaXY+XG5cbiAgKVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9