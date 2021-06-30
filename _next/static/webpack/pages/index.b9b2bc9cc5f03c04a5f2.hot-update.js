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
  var imgs = [];
  arr.map(function (_) {
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
    imgs.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
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
      lineNumber: 35,
      columnNumber: 7
    }, _this));
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.box, _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo),
      style: {
        animationDelay: 800 + "ms"
      },
      src: "/home/logo.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "A map to discover treasures."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.p1,
        children: "Our goal is to deliver architectural competition data in a visually engaging manner. Whether you are an architect or designer, renderer, or just architecture curious, WinnersDaily offers the tool to stay updated on the slightest architecture competition movements."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
          lineNumber: 63,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
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
          lineNumber: 68,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
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
          lineNumber: 74,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
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
          lineNumber: 77,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
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
          lineNumber: 89,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
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
          lineNumber: 98,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
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
          lineNumber: 105,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
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
          lineNumber: 108,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
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
          lineNumber: 118,
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
            lineNumber: 122,
            columnNumber: 64
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
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
          lineNumber: 125,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
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
          lineNumber: 132,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
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
          lineNumber: 137,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImFyciIsIkFycmF5IiwiaSIsImoiLCJpX29mZnNldCIsIm9kZCIsImlkIiwiZmlyc3QiLCJ3aWR0aCIsIm5hbWUiLCJpbWdzIiwibWFwIiwiXyIsInB1c2giLCJob21lU3R5bGVzIiwiYm94IiwiZ3JpZENvbHVtbiIsImdyaWRSb3ciLCJtYXJnaW5Ub3AiLCJhbmltYXRpb25EZWxheSIsIm1haW4iLCJ3cmFwcGVyIiwibG9nbyIsImNvbnRlbnQiLCJwMSIsInJvdyIsInRleHRCb3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJwMiIsInBvc3RJbWciLCJjdXJzb3IiLCJwb3NpdGlvbiIsInpJbmRleCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1DLEdBQUcsR0FBRyw2RkFBSUMsS0FBSyxDQUFDLEVBQUQsQ0FBWixDQUFUOztBQUNBLE1BQUlDLENBQUMsR0FBRyxDQUFSO0FBQ0EsTUFBSUMsQ0FBQyxHQUFHLENBQVI7QUFDQSxNQUFJQyxRQUFRLEdBQUcsQ0FBZjtBQUNBLE1BQUlDLEdBQUcsR0FBRyxLQUFWO0FBQ0EsTUFBSUMsRUFBRSxHQUFHLENBQVQ7QUFDQSxNQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBLE1BQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLEVBQVg7QUFDQSxNQUFJQyxJQUFJLEdBQUcsRUFBWDtBQUNBVixLQUFHLENBQUNXLEdBQUosQ0FBUSxVQUFBQyxDQUFDLEVBQUk7QUFDWCxRQUFJVixDQUFDLEdBQUdNLEtBQVIsRUFBZTtBQUNiRCxXQUFLLElBQUksRUFBVDs7QUFDQSxVQUFJRixHQUFKLEVBQVM7QUFDUEgsU0FBQyxHQUFHRSxRQUFKO0FBQ0QsT0FGRCxNQUdLO0FBQ0hGLFNB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MDRhNWYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaG9tZVN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCBJbWFnZUZhZGVJbiBmcm9tIFwicmVhY3QtaW1hZ2UtZmFkZS1pblwiO1xuaW1wb3J0IHsgQ2VudGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGFyciA9IFsuLi5BcnJheSgyNSldO1xuICB2YXIgaSA9IDI7XG4gIHZhciBqID0gMTtcbiAgdmFyIGlfb2Zmc2V0ID0gMjtcbiAgdmFyIG9kZCA9IGZhbHNlO1xuICB2YXIgaWQgPSAwO1xuICB2YXIgZmlyc3QgPSAyNTtcbiAgdmFyIHdpZHRoID0gMTQ7XG4gIHZhciBuYW1lID0gXCJcIjtcbiAgdmFyIGltZ3MgPSBbXTtcbiAgYXJyLm1hcChfID0+IHtcbiAgICBpZiAoaSA+IHdpZHRoKSB7XG4gICAgICBmaXJzdCAtPSA2MztcbiAgICAgIGlmIChvZGQpIHtcbiAgICAgICAgaSA9IGlfb2Zmc2V0O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGkgPSBpX29mZnNldCArIDE7XG4gICAgICAgIGlfb2Zmc2V0ICs9IDI7XG4gICAgICAgIHdpZHRoIC09IDE7XG4gICAgICB9XG4gICAgICBqKys7XG4gICAgICBvZGQgPSAhb2RkO1xuICAgIH1cbiAgICBpICs9IDI7XG4gICAgbmFtZSA9IFwiL2dyaWQvcGljXCIgKyAoaWQgKyAxKSArIFwiLnBuZ1wiO1xuICAgIGltZ3MucHVzaChcbiAgICAgIDxpbWcgaWQ9e2lkKyt9IGNsYXNzTmFtZT17aG9tZVN0eWxlcy5ib3h9IHN0eWxlPXt7IGdyaWRDb2x1bW46IGksIGdyaWRSb3c6IGosIG1hcmdpblRvcDogZmlyc3QsIGFuaW1hdGlvbkRlbGF5OiAxMDAgKiBqICsgaSAqIDEwICsgXCJtc1wiIH19IHNyYz17bmFtZX0gLz5cbiAgICApXG4gIH1cbiAgKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17aG9tZVN0eWxlcy5tYWlufT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICB7XG5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtob21lU3R5bGVzLmJveCwgaG9tZVN0eWxlcy5sb2dvfSBzdHlsZT17eyBhbmltYXRpb25EZWxheTogODAwICArIFwibXNcIiB9fSBzcmM9XCIvaG9tZS9sb2dvLnBuZ1wiIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICA8aDI+QSBtYXAgdG8gZGlzY292ZXIgdHJlYXN1cmVzLjwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17aG9tZVN0eWxlcy5wMX0gPlxuICAgICAgICAgIE91ciBnb2FsIGlzIHRvIGRlbGl2ZXIgYXJjaGl0ZWN0dXJhbCBjb21wZXRpdGlvbiBkYXRhIGluIGEgdmlzdWFsbHkgXG4gICAgICAgICAgZW5nYWdpbmcgbWFubmVyLiBXaGV0aGVyIHlvdSBhcmUgYW4gYXJjaGl0ZWN0IG9yIGRlc2lnbmVyLCByZW5kZXJlcixcbiAgICAgICAgICAgb3IganVzdCBhcmNoaXRlY3R1cmUgY3VyaW91cywgV2lubmVyc0RhaWx5IG9mZmVycyB0aGUgdG9vbCB0byBzdGF5IFxuICAgICAgICAgICB1cGRhdGVkIG9uIHRoZSBzbGlnaHRlc3QgYXJjaGl0ZWN0dXJlIGNvbXBldGl0aW9uIG1vdmVtZW50cy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLnJvd30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLnRleHRCb3h9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2dhaW5zYm9ybycgfX0+IFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17aG9tZVN0eWxlcy5wMn0+XG4gICAgICAgICAgICBTdG9yaWVzIGFuZCBjb2xsZWN0aW9ucyB0aGF0IGluZm9ybSwgaGVscCBhbmQgaW5zcGlyZS4gVXBkYXRlZCBkYWlseS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aG9tZVN0eWxlcy50ZXh0Qm94fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e2hvbWVTdHlsZXMucG9zdEltZ30gc3JjPVwiL2hvbWUvcG9zdDEucG5nXCIgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLnJvd30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLnRleHRCb3h9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fSA+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e2hvbWVTdHlsZXMucG9zdEltZ30gc3JjPVwiL2hvbWUvcG9zdDIucG5nXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLnRleHRCb3h9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2dhaW5zYm9ybycgfX0gPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17aG9tZVN0eWxlcy5wMn0gc3R5bGU9e3sgd2lkdGg6IDE3MH19PlxuICAgICAgICAgICAgQ3VyYXRlZCBieVxuICAgICAgICAgICAgcHJvZmVzc2lvbmFscy5cbiAgICAgICAgICAgIEhhbmTigJFwaWNrZWRcbiAgICAgICAgICAgIGZvciB5b3UuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLnJvd30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLnRleHRCb3h9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2dhaW5zYm9ybycgfX0gPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17aG9tZVN0eWxlcy5wMn0gc3R5bGU9e3sgd2lkdGg6IDE3MCB9fT5cbiAgICAgICAgICAgIEV2ZXJ5IHdlZWssXG4gICAgICAgICAgICBkZWRpY2F0ZWRcbiAgICAgICAgICAgIGV4cGVydHMgcmV2aWV3XG4gICAgICAgICAgICBvdmVyIDEwMFxuICAgICAgICAgICAgcHJvamVjdHMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hvbWVTdHlsZXMudGV4dEJveH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19ID5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17aG9tZVN0eWxlcy5wb3N0SW1nfSBzcmM9XCIvaG9tZS9wb3N0My5wbmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLnJvd30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLnRleHRCb3h9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fSA+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e2hvbWVTdHlsZXMucG9zdEltZ30gc3JjPVwiL2hvbWUvcG9zdDQucG5nXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtob21lU3R5bGVzLnRleHRCb3h9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2dhaW5zYm9ybycgfX0gPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17aG9tZVN0eWxlcy5wMn0gPlxuICAgICAgICAgICAgR2V0IHRoZSBkZXRhaWxzXG4gICAgICAgICAgICBvbiBldmVyeSBwb3N0LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aG9tZVN0eWxlcy5yb3d9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aG9tZVN0eWxlcy50ZXh0Qm94fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdnYWluc2Jvcm8nLCBjdXJzb3I6ICdwb2ludGVyJywgcG9zaXRpb246ICdyZWxhdGl2ZScsIHpJbmRleDogMiB9fSA+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtob21lU3R5bGVzLnAyfSBzdHlsZT17eyB3aWR0aDogMTcwIH19PlxuICAgICAgICAgICAg4oCYSG9uZXkgY29tZSB3aXRoIG1lLFxuICAgICAgICAgICAgSeKAmW0gZ29ubmEgc2hvdyB5b3UgV0TigJkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxMaW5rIGhyZWY9J2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vd2lubmVyc2RhaWx5Lyc+PGltZyBzdHlsZT17eyB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCAsIGN1cnNvcjogJ3BvaW50ZXInfX0gc3JjPVwiL2hvbWUvaW5zdGFncmFtTGlnaHQucG5nXCIgLz48L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aG9tZVN0eWxlcy50ZXh0Qm94fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0gPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtob21lU3R5bGVzLnBvc3RJbWd9IHNyYz1cIi9ob21lL3Bvc3Q1LnBuZ1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2hvbWVTdHlsZXMucm93fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hvbWVTdHlsZXMudGV4dEJveH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19ID5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93ZGFpbHljb250YWN0LnR5cGVmb3JtLmNvbS90by9sZEhUQmFpclwiIGNsYXNzTmFtZT17aG9tZVN0eWxlcy5wMn0gc3R5bGU9e3sgd2lkdGg6IDE3MCB9fT5cbiAgICAgICAgICAgIFN1Ym1pdCB5b3VyIHByb2plY3QgdG8gV2lubmVyc0RhaWx5XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hvbWVTdHlsZXMudGV4dEJveH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnZ2FpbnNib3JvJyB9fSA+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaW5zdGFncmFtLnVzMTcubGlzdC1tYW5hZ2UuY29tL3N1YnNjcmliZT91PWRiMDgwOTE2OGU3NDczMWZjMzA3ODI3MTUmaWQ9NmIyY2Y0NDhjNVwiIGNsYXNzTmFtZT17aG9tZVN0eWxlcy5wMn0gc3R5bGU9e3sgd2lkdGg6IDE3MCB9fT5cbiAgICAgICAgICAgIEdldCB0aGUgd2Vla2x5IHdpbm5lcnMgb24geW91ciBpbmJveCFcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxici8+XG4gICAgICA8YnIgLz5cbiAgICA8L2Rpdj5cblxuICApXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=