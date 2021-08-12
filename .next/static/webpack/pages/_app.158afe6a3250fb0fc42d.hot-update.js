self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Layout.module.css */ "./styles/Layout.module.css");
/* harmony import */ var _styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_ga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/ga */ "./lib/ga/index.js");
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookie-consent */ "./node_modules/react-cookie-consent/build/index.js");
/* harmony import */ var react_cookie_consent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_cookie_consent__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\ameer\\Documents\\website\\Winners-Daily.github.io\\components\\Layout.js",
    _this = undefined,
    _s = $RefreshSig$();










var Layout = function Layout(_ref) {
  _s();

  var children = _ref.children;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var handleRouteChange = function handleRouteChange(url) {
      _lib_ga__WEBPACK_IMPORTED_MODULE_6__.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return function () {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Meta__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_cookie_consent__WEBPACK_IMPORTED_MODULE_7___default()), {
      enableDeclineButton: true,
      flipButtons: true,
      children: "Flipped buttons"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: (_styles_Layout_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Layout, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./node_modules/react-cookie-consent/build/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-cookie-consent/build/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*! For license information please see index.js.LICENSE.txt */
!(function () {
  var e = {
      808: function (e, t, n) {
        var o, r, i;
        void 0 ===
          (r =
            "function" ==
            typeof (o = i =
              function () {
                function e() {
                  for (var e = 0, t = {}; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n) t[o] = n[o];
                  }
                  return t;
                }
                function t(e) {
                  return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                }
                return (function n(o) {
                  function r() {}
                  function i(t, n, i) {
                    if ("undefined" != typeof document) {
                      "number" == typeof (i = e({ path: "/" }, r.defaults, i)).expires &&
                        (i.expires = new Date(1 * new Date() + 864e5 * i.expires)),
                        (i.expires = i.expires ? i.expires.toUTCString() : "");
                      try {
                        var c = JSON.stringify(n);
                        /^[\{\[]/.test(c) && (n = c);
                      } catch (e) {}
                      (n = o.write
                        ? o.write(n, t)
                        : encodeURIComponent(String(n)).replace(
                            /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                            decodeURIComponent
                          )),
                        (t = encodeURIComponent(String(t))
                          .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                          .replace(/[\(\)]/g, escape));
                      var l = "";
                      for (var a in i)
                        i[a] && ((l += "; " + a), !0 !== i[a] && (l += "=" + i[a].split(";")[0]));
                      return (document.cookie = t + "=" + n + l);
                    }
                  }
                  function c(e, n) {
                    if ("undefined" != typeof document) {
                      for (
                        var r = {}, i = document.cookie ? document.cookie.split("; ") : [], c = 0;
                        c < i.length;
                        c++
                      ) {
                        var l = i[c].split("="),
                          a = l.slice(1).join("=");
                        n || '"' !== a.charAt(0) || (a = a.slice(1, -1));
                        try {
                          var s = t(l[0]);
                          if (((a = (o.read || o)(a, s) || t(a)), n))
                            try {
                              a = JSON.parse(a);
                            } catch (e) {}
                          if (((r[s] = a), e === s)) break;
                        } catch (e) {}
                      }
                      return e ? r[e] : r;
                    }
                  }
                  return (
                    (r.set = i),
                    (r.get = function (e) {
                      return c(e, !1);
                    }),
                    (r.getJSON = function (e) {
                      return c(e, !0);
                    }),
                    (r.remove = function (t, n) {
                      i(t, "", e(n, { expires: -1 }));
                    }),
                    (r.defaults = {}),
                    (r.withConverter = n),
                    r
                  );
                })(function () {});
              })
              ? o.call(t, n, t, e)
              : o) || (e.exports = r),
          (e.exports = i());
      },
      703: function (e, t, n) {
        "use strict";
        var o = n(414);
        function r() {}
        function i() {}
        (i.resetWarningCache = r),
          (e.exports = function () {
            function e(e, t, n, r, i, c) {
              if (c !== o) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: i,
              resetWarningCache: r,
            };
            return (n.PropTypes = n), n;
          });
      },
      697: function (e, t, n) {
        e.exports = n(703)();
      },
      414: function (e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
    },
    t = {};
  function n(o) {
    var r = t[o];
    if (void 0 !== r) return r.exports;
    var i = (t[o] = { exports: {} });
    return e[o](i, i.exports, n), i.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var o in t)
        n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  var o = {};
  !(function () {
    "use strict";
    n.r(o),
      n.d(o, {
        Cookies: function () {
          return l();
        },
        OPTIONS: function () {
          return O;
        },
        SAME_SITE_OPTIONS: function () {
          return g;
        },
        default: function () {
          return w;
        },
        getCookieConsentValue: function () {
          return S;
        },
      });
    const e = __webpack_require__(/*! react */ "./node_modules/react/index.js");
    var t = n.n(e),
      r = n(697),
      i = n.n(r),
      c = n(808),
      l = n.n(c);
    function a(e) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var s = ["children"];
    function u() {
      return (u =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
          }
          return e;
        }).apply(this, arguments);
    }
    function p(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }
    function f(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? p(Object(n), !0).forEach(function (t) {
              h(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : p(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function d(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    function b(e, t) {
      return (b =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function y(e, t) {
      if (t && ("object" === a(t) || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError("Derived constructors may only return object or undefined");
      return v(e);
    }
    function v(e) {
      if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function m(e) {
      return (m = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function h(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var O = { TOP: "top", BOTTOM: "bottom", NONE: "none" },
      g = { STRICT: "strict", LAX: "lax", NONE: "none" },
      S = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
          t = l().get(e);
        return void 0 === t && (t = l().get(C(e))), t;
      },
      C = function (e) {
        return "".concat(e, "-legacy");
      },
      k = "CookieConsent",
      x = function (e) {
        var t = e.condition,
          n = e.wrapper,
          o = e.children;
        return t ? n(o) : o;
      },
      j = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && b(e, t);
        })(a, e);
        var n,
          o,
          r,
          i,
          c =
            ((r = a),
            (i = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = m(r);
              if (i) {
                var n = m(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return y(this, e);
            });
        function a(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, a),
            h(v((t = c.call(this, e))), "handleScroll", function () {
              var e = t.props.acceptOnScrollPercentage,
                n = document.documentElement,
                o = document.body,
                r = "scrollTop",
                i = "scrollHeight";
              ((n[r] || o[r]) / ((n[i] || o[i]) - n.clientHeight)) * 100 > e && t.accept(!0);
            }),
            h(v(t), "removeScrollListener", function () {
              t.props.acceptOnScroll && window.removeEventListener("scroll", t.handleScroll);
            }),
            (t.state = {
              visible: !1,
              style: {
                alignItems: "baseline",
                background: "#353535",
                color: "white",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                left: "0",
                position: "fixed",
                width: "100%",
                zIndex: "999",
              },
              buttonStyle: {
                background: "#ffd42d",
                border: "0",
                borderRadius: "0px",
                boxShadow: "none",
                color: "black",
                cursor: "pointer",
                flex: "0 0 auto",
                padding: "5px 10px",
                margin: "15px",
              },
              declineButtonStyle: {
                background: "#c12a2a",
                border: "0",
                borderRadius: "0px",
                boxShadow: "none",
                color: "#e5e5e5",
                cursor: "pointer",
                flex: "0 0 auto",
                padding: "5px 10px",
                margin: "15px",
              },
              contentStyle: { flex: "1 0 300px", margin: "15px" },
              overlayStyle: {
                position: "fixed",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                zIndex: "999",
                backgroundColor: "rgba(0,0,0,0.3)",
              },
            }),
            t
          );
        }
        return (
          (n = a),
          (o = [
            {
              key: "componentDidMount",
              value: function () {
                var e = this.props.debug;
                (void 0 === this.getCookieValue() || e) &&
                  (this.setState({ visible: !0 }),
                  this.props.acceptOnScroll &&
                    window.addEventListener("scroll", this.handleScroll, { passive: !0 }));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.removeScrollListener();
              },
            },
            {
              key: "accept",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                  t = this.props,
                  n = t.cookieName,
                  o = t.cookieValue,
                  r = t.hideOnAccept,
                  i = t.onAccept;
                this.setCookie(n, o),
                  i(null != e && e),
                  r && (this.setState({ visible: !1 }), this.removeScrollListener());
              },
            },
            {
              key: "decline",
              value: function () {
                var e = this.props,
                  t = e.cookieName,
                  n = e.declineCookieValue,
                  o = e.hideOnDecline,
                  r = e.onDecline;
                e.setDeclineCookie && this.setCookie(t, n),
                  r(),
                  o && this.setState({ visible: !1 });
              },
            },
            {
              key: "setCookie",
              value: function (e, t) {
                var n = this.props,
                  o = n.extraCookieOptions,
                  r = n.expires,
                  i = n.sameSite,
                  c = this.props.cookieSecurity;
                void 0 === c && (c = !location || "https:" === location.protocol);
                var a = f(f({ expires: r }, o), {}, { sameSite: i, secure: c });
                i === g.NONE && l().set(C(e), t, a), l().set(e, t, a);
              },
            },
            {
              key: "getCookieValue",
              value: function () {
                var e = this.props.cookieName;
                return S(e);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this;
                if (!this.state.visible) return null;
                var n = this.props,
                  o = n.location,
                  r = n.style,
                  i = n.buttonStyle,
                  c = n.declineButtonStyle,
                  l = n.contentStyle,
                  a = n.disableStyles,
                  s = n.buttonText,
                  p = n.declineButtonText,
                  d = n.containerClasses,
                  b = n.contentClasses,
                  y = n.buttonClasses,
                  v = n.buttonWrapperClasses,
                  m = n.declineButtonClasses,
                  h = n.buttonId,
                  g = n.declineButtonId,
                  S = n.disableButtonStyles,
                  C = n.enableDeclineButton,
                  k = n.flipButtons,
                  j = n.ButtonComponent,
                  w = n.overlay,
                  T = n.overlayClasses,
                  B = n.overlayStyle,
                  P = n.ariaAcceptLabel,
                  E = n.ariaDeclineLabel,
                  D = {},
                  I = {},
                  N = {},
                  _ = {},
                  R = {};
                switch (
                  (a
                    ? ((D = u({}, r)),
                      (I = u({}, i)),
                      (N = u({}, c)),
                      (_ = u({}, l)),
                      (R = u({}, B)))
                    : ((D = u({}, f(f({}, this.state.style), r))),
                      (_ = u({}, f(f({}, this.state.contentStyle), l))),
                      (R = u({}, f(f({}, this.state.overlayStyle), B))),
                      S
                        ? ((I = u({}, i)), (N = u({}, c)))
                        : ((I = u({}, f(f({}, this.state.buttonStyle), i))),
                          (N = u({}, f(f({}, this.state.declineButtonStyle), c))))),
                  o)
                ) {
                  case O.TOP:
                    D.top = "0";
                    break;
                  case O.BOTTOM:
                    D.bottom = "0";
                }
                var A = [];
                return (
                  C &&
                    A.push(
                      t().createElement(
                        j,
                        {
                          key: "declineButton",
                          style: N,
                          className: m,
                          id: g,
                          "aria-label": E,
                          onClick: function () {
                            e.decline();
                          },
                        },
                        p
                      )
                    ),
                  A.push(
                    t().createElement(
                      j,
                      {
                        key: "acceptButton",
                        style: I,
                        className: y,
                        id: h,
                        "aria-label": P,
                        onClick: function () {
                          e.accept();
                        },
                      },
                      s
                    )
                  ),
                  k && A.reverse(),
                  t().createElement(
                    x,
                    {
                      condition: w,
                      wrapper: function (e) {
                        return t().createElement("div", { style: R, className: T }, e);
                      },
                    },
                    t().createElement(
                      "div",
                      { className: "".concat(d), style: D },
                      t().createElement("div", { style: _, className: b }, this.props.children),
                      t().createElement(
                        "div",
                        { className: "".concat(v) },
                        A.map(function (e) {
                          return e;
                        })
                      )
                    )
                  )
                );
              },
            },
          ]) && d(n.prototype, o),
          a
        );
      })(e.Component);
    (j.propTypes = {
      location: i().oneOf(
        Object.keys(O).map(function (e) {
          return O[e];
        })
      ),
      sameSite: i().oneOf(
        Object.keys(g).map(function (e) {
          return g[e];
        })
      ),
      style: i().object,
      buttonStyle: i().object,
      declineButtonStyle: i().object,
      contentStyle: i().object,
      children: i().any,
      disableStyles: i().bool,
      hideOnAccept: i().bool,
      hideOnDecline: i().bool,
      onAccept: i().func,
      onDecline: i().func,
      buttonText: i().oneOfType([i().string, i().func, i().element]),
      declineButtonText: i().oneOfType([i().string, i().func, i().element]),
      cookieName: i().string,
      cookieValue: i().oneOfType([i().string, i().bool, i().number]),
      declineCookieValue: i().oneOfType([i().string, i().bool, i().number]),
      setDeclineCookie: i().bool,
      debug: i().bool,
      expires: i().number,
      containerClasses: i().string,
      contentClasses: i().string,
      buttonClasses: i().string,
      buttonWrapperClasses: i().string,
      declineButtonClasses: i().string,
      buttonId: i().string,
      declineButtonId: i().string,
      extraCookieOptions: i().object,
      disableButtonStyles: i().bool,
      enableDeclineButton: i().bool,
      flipButtons: i().bool,
      ButtonComponent: i().elementType,
      cookieSecurity: i().bool,
      overlay: i().bool,
      overlayClasses: i().string,
      overlayStyle: i().object,
      ariaAcceptLabel: i().string,
      ariaDeclineLabel: i().string,
      acceptOnScroll: i().bool,
      acceptOnScrollPercentage: i().number,
    }),
      (j.defaultProps = {
        disableStyles: !1,
        hideOnAccept: !0,
        hideOnDecline: !0,
        location: O.BOTTOM,
        onAccept: function () {},
        onDecline: function () {},
        cookieName: k,
        cookieValue: !0,
        declineCookieValue: !1,
        setDeclineCookie: !0,
        buttonText: "I understand",
        declineButtonText: "I decline",
        debug: !1,
        expires: 365,
        containerClasses: "CookieConsent",
        contentClasses: "",
        buttonClasses: "",
        buttonWrapperClasses: "",
        declineButtonClasses: "",
        buttonId: "rcc-confirm-button",
        declineButtonId: "rcc-decline-button",
        extraCookieOptions: {},
        disableButtonStyles: !1,
        enableDeclineButton: !1,
        flipButtons: !1,
        sameSite: g.LAX,
        ButtonComponent: function (e) {
          var n = e.children,
            o = (function (e, t) {
              if (null == e) return {};
              var n,
                o,
                r = (function (e, t) {
                  if (null == e) return {};
                  var n,
                    o,
                    r = {},
                    i = Object.keys(e);
                  for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                  (n = i[o]),
                    t.indexOf(n) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
              }
              return r;
            })(e, s);
          return t().createElement("button", o, n);
        },
        overlay: !1,
        overlayClasses: "",
        ariaAcceptLabel: "Accept cookies",
        ariaDeclineLabel: "Decline cookies",
        acceptOnScroll: !1,
        acceptOnScrollPercentage: 25,
      });
    const w = j;
  })(),
    (module.exports = o);
})();


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1jb29raWUtY29uc2VudC9idWlsZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwiZ2EiLCJldmVudHMiLCJvbiIsIm9mZiIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzdCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxHQUFELEVBQVM7QUFDL0JDLG1EQUFBLENBQVlELEdBQVo7QUFDSCxLQUZEOztBQUlBSixVQUFNLENBQUNNLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0NKLGlCQUF4QztBQUVBLFdBQU8sWUFBTTtBQUNUSCxZQUFNLENBQUNNLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixxQkFBbEIsRUFBeUNMLGlCQUF6QztBQUNILEtBRkQ7QUFHSCxHQVZRLEVBVU4sQ0FBQ0gsTUFBTSxDQUFDTSxNQUFSLENBVk0sQ0FBVDtBQWNBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUksOERBQUMseUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBR0ksOERBQUMsNkRBQUQ7QUFBZSx5QkFBbUIsTUFBbEM7QUFBbUMsaUJBQVcsTUFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xNThhZmU2YTMyNTBmYjBmYzQyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdiBmcm9tICcuL05hdic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xyXG5pbXBvcnQgTWV0YSBmcm9tICcuL01ldGEnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9MYXlvdXQubW9kdWxlLmNzcyc7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCAqIGFzIGdhIGZyb20gJy4uL2xpYi9nYSc7XHJcblxyXG5pbXBvcnQgQ29va2llQ29uc2VudCBmcm9tIFwicmVhY3QtY29va2llLWNvbnNlbnRcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiB7XHJcbiAgICAgICAgICAgIGdhLnBhZ2V2aWV3KHVybCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcm91dGVyLmV2ZW50c10pXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxNZXRhIC8+XHJcbiAgICAgICAgICAgIDxOYXYgLz5cclxuICAgICAgICAgICAgPENvb2tpZUNvbnNlbnQgZW5hYmxlRGVjbGluZUJ1dHRvbiBmbGlwQnV0dG9ucz5cclxuICAgICAgICAgICAgICAgIEZsaXBwZWQgYnV0dG9uc1xyXG4gICAgICAgICAgICA8L0Nvb2tpZUNvbnNlbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIiwiLyohIEZvciBsaWNlbnNlIGluZm9ybWF0aW9uIHBsZWFzZSBzZWUgaW5kZXguanMuTElDRU5TRS50eHQgKi9cbiEoZnVuY3Rpb24gKCkge1xuICB2YXIgZSA9IHtcbiAgICAgIDgwODogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgICAgdmFyIG8sIHIsIGk7XG4gICAgICAgIHZvaWQgMCA9PT1cbiAgICAgICAgICAociA9XG4gICAgICAgICAgICBcImZ1bmN0aW9uXCIgPT1cbiAgICAgICAgICAgIHR5cGVvZiAobyA9IGkgPVxuICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZSgpIHtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGUgPSAwLCB0ID0ge307IGUgPCBhcmd1bWVudHMubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBhcmd1bWVudHNbZV07XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG8gaW4gbikgdFtvXSA9IG5bb107XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdChlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZS5yZXBsYWNlKC8oJVswLTlBLVpdezJ9KSsvZywgZGVjb2RlVVJJQ29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChmdW5jdGlvbiBuKG8pIHtcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHIoKSB7fVxuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gaSh0LCBuLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIFwibnVtYmVyXCIgPT0gdHlwZW9mIChpID0gZSh7IHBhdGg6IFwiL1wiIH0sIHIuZGVmYXVsdHMsIGkpKS5leHBpcmVzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoaS5leHBpcmVzID0gbmV3IERhdGUoMSAqIG5ldyBEYXRlKCkgKyA4NjRlNSAqIGkuZXhwaXJlcykpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKGkuZXhwaXJlcyA9IGkuZXhwaXJlcyA/IGkuZXhwaXJlcy50b1VUQ1N0cmluZygpIDogXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gSlNPTi5zdHJpbmdpZnkobik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvXltcXHtcXFtdLy50ZXN0KGMpICYmIChuID0gYyk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgICAgICAgICAgICAobiA9IG8ud3JpdGVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gby53cml0ZShuLCB0KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKG4pKS5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZVVSSUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICApKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0ID0gZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyh0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyUoMjN8MjR8MjZ8MkJ8NUV8NjB8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1tcXChcXCldL2csIGVzY2FwZSkpO1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBsID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhIGluIGkpXG4gICAgICAgICAgICAgICAgICAgICAgICBpW2FdICYmICgobCArPSBcIjsgXCIgKyBhKSwgITAgIT09IGlbYV0gJiYgKGwgKz0gXCI9XCIgKyBpW2FdLnNwbGl0KFwiO1wiKVswXSkpO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoZG9jdW1lbnQuY29va2llID0gdCArIFwiPVwiICsgbiArIGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjKGUsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0ge30sIGkgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKSA6IFtdLCBjID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPCBpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMrK1xuICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGwgPSBpW2NdLnNwbGl0KFwiPVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYSA9IGwuc2xpY2UoMSkuam9pbihcIj1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBuIHx8ICdcIicgIT09IGEuY2hhckF0KDApIHx8IChhID0gYS5zbGljZSgxLCAtMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSB0KGxbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChhID0gKG8ucmVhZCB8fCBvKShhLCBzKSB8fCB0KGEpKSwgbikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBKU09OLnBhcnNlKGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoKHJbc10gPSBhKSwgZSA9PT0gcykpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUgPyByW2VdIDogcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgKHIuc2V0ID0gaSksXG4gICAgICAgICAgICAgICAgICAgIChyLmdldCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGMoZSwgITEpO1xuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgKHIuZ2V0SlNPTiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGMoZSwgITApO1xuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgKHIucmVtb3ZlID0gZnVuY3Rpb24gKHQsIG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICBpKHQsIFwiXCIsIGUobiwgeyBleHBpcmVzOiAtMSB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAoci5kZWZhdWx0cyA9IHt9KSxcbiAgICAgICAgICAgICAgICAgICAgKHIud2l0aENvbnZlcnRlciA9IG4pLFxuICAgICAgICAgICAgICAgICAgICByXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pKGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgPyBvLmNhbGwodCwgbiwgdCwgZSlcbiAgICAgICAgICAgICAgOiBvKSB8fCAoZS5leHBvcnRzID0gciksXG4gICAgICAgICAgKGUuZXhwb3J0cyA9IGkoKSk7XG4gICAgICB9LFxuICAgICAgNzAzOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgdmFyIG8gPSBuKDQxNCk7XG4gICAgICAgIGZ1bmN0aW9uIHIoKSB7fVxuICAgICAgICBmdW5jdGlvbiBpKCkge31cbiAgICAgICAgKGkucmVzZXRXYXJuaW5nQ2FjaGUgPSByKSxcbiAgICAgICAgICAoZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZShlLCB0LCBuLCByLCBpLCBjKSB7XG4gICAgICAgICAgICAgIGlmIChjICE9PSBvKSB7XG4gICAgICAgICAgICAgICAgdmFyIGwgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICBcIkNhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuIFVzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uIFJlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXNcIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhyb3cgKChsLm5hbWUgPSBcIkludmFyaWFudCBWaW9sYXRpb25cIiksIGwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiB0KCkge1xuICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUuaXNSZXF1aXJlZCA9IGU7XG4gICAgICAgICAgICB2YXIgbiA9IHtcbiAgICAgICAgICAgICAgYXJyYXk6IGUsXG4gICAgICAgICAgICAgIGJvb2w6IGUsXG4gICAgICAgICAgICAgIGZ1bmM6IGUsXG4gICAgICAgICAgICAgIG51bWJlcjogZSxcbiAgICAgICAgICAgICAgb2JqZWN0OiBlLFxuICAgICAgICAgICAgICBzdHJpbmc6IGUsXG4gICAgICAgICAgICAgIHN5bWJvbDogZSxcbiAgICAgICAgICAgICAgYW55OiBlLFxuICAgICAgICAgICAgICBhcnJheU9mOiB0LFxuICAgICAgICAgICAgICBlbGVtZW50OiBlLFxuICAgICAgICAgICAgICBlbGVtZW50VHlwZTogZSxcbiAgICAgICAgICAgICAgaW5zdGFuY2VPZjogdCxcbiAgICAgICAgICAgICAgbm9kZTogZSxcbiAgICAgICAgICAgICAgb2JqZWN0T2Y6IHQsXG4gICAgICAgICAgICAgIG9uZU9mOiB0LFxuICAgICAgICAgICAgICBvbmVPZlR5cGU6IHQsXG4gICAgICAgICAgICAgIHNoYXBlOiB0LFxuICAgICAgICAgICAgICBleGFjdDogdCxcbiAgICAgICAgICAgICAgY2hlY2tQcm9wVHlwZXM6IGksXG4gICAgICAgICAgICAgIHJlc2V0V2FybmluZ0NhY2hlOiByLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiAobi5Qcm9wVHlwZXMgPSBuKSwgbjtcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICA2OTc6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICAgIGUuZXhwb3J0cyA9IG4oNzAzKSgpO1xuICAgICAgfSxcbiAgICAgIDQxNDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGUuZXhwb3J0cyA9IFwiU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRURcIjtcbiAgICAgIH0sXG4gICAgfSxcbiAgICB0ID0ge307XG4gIGZ1bmN0aW9uIG4obykge1xuICAgIHZhciByID0gdFtvXTtcbiAgICBpZiAodm9pZCAwICE9PSByKSByZXR1cm4gci5leHBvcnRzO1xuICAgIHZhciBpID0gKHRbb10gPSB7IGV4cG9ydHM6IHt9IH0pO1xuICAgIHJldHVybiBlW29dKGksIGkuZXhwb3J0cywgbiksIGkuZXhwb3J0cztcbiAgfVxuICAobi5uID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgdCA9XG4gICAgICBlICYmIGUuX19lc01vZHVsZVxuICAgICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmRlZmF1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgIH07XG4gICAgcmV0dXJuIG4uZCh0LCB7IGE6IHQgfSksIHQ7XG4gIH0pLFxuICAgIChuLmQgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgZm9yICh2YXIgbyBpbiB0KVxuICAgICAgICBuLm8odCwgbykgJiYgIW4ubyhlLCBvKSAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgbywgeyBlbnVtZXJhYmxlOiAhMCwgZ2V0OiB0W29dIH0pO1xuICAgIH0pLFxuICAgIChuLm8gPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLCB0KTtcbiAgICB9KSxcbiAgICAobi5yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJlxuICAgICAgICBTeW1ib2wudG9TdHJpbmdUYWcgJiZcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogXCJNb2R1bGVcIiB9KSxcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9KTtcbiAgICB9KTtcbiAgdmFyIG8gPSB7fTtcbiAgIShmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgbi5yKG8pLFxuICAgICAgbi5kKG8sIHtcbiAgICAgICAgQ29va2llczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBsKCk7XG4gICAgICAgIH0sXG4gICAgICAgIE9QVElPTlM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTztcbiAgICAgICAgfSxcbiAgICAgICAgU0FNRV9TSVRFX09QVElPTlM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZztcbiAgICAgICAgfSxcbiAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICB9LFxuICAgICAgICBnZXRDb29raWVDb25zZW50VmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gUztcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIGNvbnN0IGUgPSByZXF1aXJlKFwicmVhY3RcIik7XG4gICAgdmFyIHQgPSBuLm4oZSksXG4gICAgICByID0gbig2OTcpLFxuICAgICAgaSA9IG4ubihyKSxcbiAgICAgIGMgPSBuKDgwOCksXG4gICAgICBsID0gbi5uKGMpO1xuICAgIGZ1bmN0aW9uIGEoZSkge1xuICAgICAgcmV0dXJuIChhID1cbiAgICAgICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yXG4gICAgICAgICAgPyBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gZSAmJlxuICAgICAgICAgICAgICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmXG4gICAgICAgICAgICAgICAgZS5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmXG4gICAgICAgICAgICAgICAgZSAhPT0gU3ltYm9sLnByb3RvdHlwZVxuICAgICAgICAgICAgICAgID8gXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgIDogdHlwZW9mIGU7XG4gICAgICAgICAgICB9KShlKTtcbiAgICB9XG4gICAgdmFyIHMgPSBbXCJjaGlsZHJlblwiXTtcbiAgICBmdW5jdGlvbiB1KCkge1xuICAgICAgcmV0dXJuICh1ID1cbiAgICAgICAgT2JqZWN0LmFzc2lnbiB8fFxuICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGZvciAodmFyIHQgPSAxOyB0IDwgYXJndW1lbnRzLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICB2YXIgbiA9IGFyZ3VtZW50c1t0XTtcbiAgICAgICAgICAgIGZvciAodmFyIG8gaW4gbikgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sIG8pICYmIChlW29dID0gbltvXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwKGUsIHQpIHtcbiAgICAgIHZhciBuID0gT2JqZWN0LmtleXMoZSk7XG4gICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICB2YXIgbyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7XG4gICAgICAgIHQgJiZcbiAgICAgICAgICAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCB0KS5lbnVtZXJhYmxlO1xuICAgICAgICAgIH0pKSxcbiAgICAgICAgICBuLnB1c2guYXBwbHkobiwgbyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZihlKSB7XG4gICAgICBmb3IgKHZhciB0ID0gMTsgdCA8IGFyZ3VtZW50cy5sZW5ndGg7IHQrKykge1xuICAgICAgICB2YXIgbiA9IG51bGwgIT0gYXJndW1lbnRzW3RdID8gYXJndW1lbnRzW3RdIDoge307XG4gICAgICAgIHQgJSAyXG4gICAgICAgICAgPyBwKE9iamVjdChuKSwgITApLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgaChlLCB0LCBuW3RdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yc1xuICAgICAgICAgID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobikpXG4gICAgICAgICAgOiBwKE9iamVjdChuKSkuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgdCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuLCB0KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkKGUsIHQpIHtcbiAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdC5sZW5ndGg7IG4rKykge1xuICAgICAgICB2YXIgbyA9IHRbbl07XG4gICAgICAgIChvLmVudW1lcmFibGUgPSBvLmVudW1lcmFibGUgfHwgITEpLFxuICAgICAgICAgIChvLmNvbmZpZ3VyYWJsZSA9ICEwKSxcbiAgICAgICAgICBcInZhbHVlXCIgaW4gbyAmJiAoby53cml0YWJsZSA9ICEwKSxcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgby5rZXksIG8pO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBiKGUsIHQpIHtcbiAgICAgIHJldHVybiAoYiA9XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIHJldHVybiAoZS5fX3Byb3RvX18gPSB0KSwgZTtcbiAgICAgICAgfSkoZSwgdCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHkoZSwgdCkge1xuICAgICAgaWYgKHQgJiYgKFwib2JqZWN0XCIgPT09IGEodCkgfHwgXCJmdW5jdGlvblwiID09IHR5cGVvZiB0KSkgcmV0dXJuIHQ7XG4gICAgICBpZiAodm9pZCAwICE9PSB0KVxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gICAgICByZXR1cm4gdihlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdihlKSB7XG4gICAgICBpZiAodm9pZCAwID09PSBlKVxuICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbShlKSB7XG4gICAgICByZXR1cm4gKG0gPSBPYmplY3Quc2V0UHJvdG90eXBlT2ZcbiAgICAgICAgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2ZcbiAgICAgICAgOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihlKTtcbiAgICAgICAgICB9KShlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaChlLCB0LCBuKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0IGluIGVcbiAgICAgICAgICA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCB0LCB7XG4gICAgICAgICAgICAgIHZhbHVlOiBuLFxuICAgICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgICAgICAgICAgd3JpdGFibGU6ICEwLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IChlW3RdID0gbiksXG4gICAgICAgIGVcbiAgICAgICk7XG4gICAgfVxuICAgIHZhciBPID0geyBUT1A6IFwidG9wXCIsIEJPVFRPTTogXCJib3R0b21cIiwgTk9ORTogXCJub25lXCIgfSxcbiAgICAgIGcgPSB7IFNUUklDVDogXCJzdHJpY3RcIiwgTEFYOiBcImxheFwiLCBOT05FOiBcIm5vbmVcIiB9LFxuICAgICAgUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiB2b2lkIDAgIT09IGFyZ3VtZW50c1swXSA/IGFyZ3VtZW50c1swXSA6IGssXG4gICAgICAgICAgdCA9IGwoKS5nZXQoZSk7XG4gICAgICAgIHJldHVybiB2b2lkIDAgPT09IHQgJiYgKHQgPSBsKCkuZ2V0KEMoZSkpKSwgdDtcbiAgICAgIH0sXG4gICAgICBDID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGUsIFwiLWxlZ2FjeVwiKTtcbiAgICAgIH0sXG4gICAgICBrID0gXCJDb29raWVDb25zZW50XCIsXG4gICAgICB4ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSBlLmNvbmRpdGlvbixcbiAgICAgICAgICBuID0gZS53cmFwcGVyLFxuICAgICAgICAgIG8gPSBlLmNoaWxkcmVuO1xuICAgICAgICByZXR1cm4gdCA/IG4obykgOiBvO1xuICAgICAgfSxcbiAgICAgIGogPSAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgIShmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHQgJiYgbnVsbCAhPT0gdClcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAoZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHQgJiYgdC5wcm90b3R5cGUsIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBlLCB3cml0YWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAgfSxcbiAgICAgICAgICB9KSksXG4gICAgICAgICAgICB0ICYmIGIoZSwgdCk7XG4gICAgICAgIH0pKGEsIGUpO1xuICAgICAgICB2YXIgbixcbiAgICAgICAgICBvLFxuICAgICAgICAgIHIsXG4gICAgICAgICAgaSxcbiAgICAgICAgICBjID1cbiAgICAgICAgICAgICgociA9IGEpLFxuICAgICAgICAgICAgKGkgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgUmVmbGVjdCB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgUHJveHkpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpLCAhMFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKCkpLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgZSxcbiAgICAgICAgICAgICAgICB0ID0gbShyKTtcbiAgICAgICAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IG0odGhpcykuY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgZSA9IFJlZmxlY3QuY29uc3RydWN0KHQsIGFyZ3VtZW50cywgbik7XG4gICAgICAgICAgICAgIH0gZWxzZSBlID0gdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICByZXR1cm4geSh0aGlzLCBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBmdW5jdGlvbiBhKGUpIHtcbiAgICAgICAgICB2YXIgdDtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiB0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIH0pKHRoaXMsIGEpLFxuICAgICAgICAgICAgaCh2KCh0ID0gYy5jYWxsKHRoaXMsIGUpKSksIFwiaGFuZGxlU2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIGUgPSB0LnByb3BzLmFjY2VwdE9uU2Nyb2xsUGVyY2VudGFnZSxcbiAgICAgICAgICAgICAgICBuID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICAgICAgICAgIG8gPSBkb2N1bWVudC5ib2R5LFxuICAgICAgICAgICAgICAgIHIgPSBcInNjcm9sbFRvcFwiLFxuICAgICAgICAgICAgICAgIGkgPSBcInNjcm9sbEhlaWdodFwiO1xuICAgICAgICAgICAgICAoKG5bcl0gfHwgb1tyXSkgLyAoKG5baV0gfHwgb1tpXSkgLSBuLmNsaWVudEhlaWdodCkpICogMTAwID4gZSAmJiB0LmFjY2VwdCghMCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGgodih0KSwgXCJyZW1vdmVTY3JvbGxMaXN0ZW5lclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHQucHJvcHMuYWNjZXB0T25TY3JvbGwgJiYgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdC5oYW5kbGVTY3JvbGwpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAodC5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgdmlzaWJsZTogITEsXG4gICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJiYXNlbGluZVwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzM1MzUzNVwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgICAgICBsZWZ0OiBcIjBcIixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICB6SW5kZXg6IFwiOTk5XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJ1dHRvblN0eWxlOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZmZkNDJkXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjBcIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMHB4XCIsXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgZmxleDogXCIwIDAgYXV0b1wiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNXB4IDEwcHhcIixcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTVweFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkZWNsaW5lQnV0dG9uU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiNjMTJhMmFcIixcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwcHhcIixcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNlNWU1ZTVcIixcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICAgIGZsZXg6IFwiMCAwIGF1dG9cIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjVweCAxMHB4XCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY29udGVudFN0eWxlOiB7IGZsZXg6IFwiMSAwIDMwMHB4XCIsIG1hcmdpbjogXCIxNXB4XCIgfSxcbiAgICAgICAgICAgICAgb3ZlcmxheVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICB6SW5kZXg6IFwiOTk5XCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMC4zKVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIChuID0gYSksXG4gICAgICAgICAgKG8gPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcy5wcm9wcy5kZWJ1ZztcbiAgICAgICAgICAgICAgICAodm9pZCAwID09PSB0aGlzLmdldENvb2tpZVZhbHVlKCkgfHwgZSkgJiZcbiAgICAgICAgICAgICAgICAgICh0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogITAgfSksXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFjY2VwdE9uU2Nyb2xsICYmXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6ICEwIH0pKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJhY2NlcHRcIixcbiAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIHZvaWQgMCAhPT0gYXJndW1lbnRzWzBdICYmIGFyZ3VtZW50c1swXSxcbiAgICAgICAgICAgICAgICAgIHQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgICAgbiA9IHQuY29va2llTmFtZSxcbiAgICAgICAgICAgICAgICAgIG8gPSB0LmNvb2tpZVZhbHVlLFxuICAgICAgICAgICAgICAgICAgciA9IHQuaGlkZU9uQWNjZXB0LFxuICAgICAgICAgICAgICAgICAgaSA9IHQub25BY2NlcHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDb29raWUobiwgbyksXG4gICAgICAgICAgICAgICAgICBpKG51bGwgIT0gZSAmJiBlKSxcbiAgICAgICAgICAgICAgICAgIHIgJiYgKHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiAhMSB9KSwgdGhpcy5yZW1vdmVTY3JvbGxMaXN0ZW5lcigpKTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJkZWNsaW5lXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgICAgdCA9IGUuY29va2llTmFtZSxcbiAgICAgICAgICAgICAgICAgIG4gPSBlLmRlY2xpbmVDb29raWVWYWx1ZSxcbiAgICAgICAgICAgICAgICAgIG8gPSBlLmhpZGVPbkRlY2xpbmUsXG4gICAgICAgICAgICAgICAgICByID0gZS5vbkRlY2xpbmU7XG4gICAgICAgICAgICAgICAgZS5zZXREZWNsaW5lQ29va2llICYmIHRoaXMuc2V0Q29va2llKHQsIG4pLFxuICAgICAgICAgICAgICAgICAgcigpLFxuICAgICAgICAgICAgICAgICAgbyAmJiB0aGlzLnNldFN0YXRlKHsgdmlzaWJsZTogITEgfSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwic2V0Q29va2llXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICAgIG8gPSBuLmV4dHJhQ29va2llT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgIHIgPSBuLmV4cGlyZXMsXG4gICAgICAgICAgICAgICAgICBpID0gbi5zYW1lU2l0ZSxcbiAgICAgICAgICAgICAgICAgIGMgPSB0aGlzLnByb3BzLmNvb2tpZVNlY3VyaXR5O1xuICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gYyAmJiAoYyA9ICFsb2NhdGlvbiB8fCBcImh0dHBzOlwiID09PSBsb2NhdGlvbi5wcm90b2NvbCk7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBmKGYoeyBleHBpcmVzOiByIH0sIG8pLCB7fSwgeyBzYW1lU2l0ZTogaSwgc2VjdXJlOiBjIH0pO1xuICAgICAgICAgICAgICAgIGkgPT09IGcuTk9ORSAmJiBsKCkuc2V0KEMoZSksIHQsIGEpLCBsKCkuc2V0KGUsIHQsIGEpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImdldENvb2tpZVZhbHVlXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLnByb3BzLmNvb2tpZU5hbWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFMoZSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS52aXNpYmxlKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgICBvID0gbi5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgIHIgPSBuLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgaSA9IG4uYnV0dG9uU3R5bGUsXG4gICAgICAgICAgICAgICAgICBjID0gbi5kZWNsaW5lQnV0dG9uU3R5bGUsXG4gICAgICAgICAgICAgICAgICBsID0gbi5jb250ZW50U3R5bGUsXG4gICAgICAgICAgICAgICAgICBhID0gbi5kaXNhYmxlU3R5bGVzLFxuICAgICAgICAgICAgICAgICAgcyA9IG4uYnV0dG9uVGV4dCxcbiAgICAgICAgICAgICAgICAgIHAgPSBuLmRlY2xpbmVCdXR0b25UZXh0LFxuICAgICAgICAgICAgICAgICAgZCA9IG4uY29udGFpbmVyQ2xhc3NlcyxcbiAgICAgICAgICAgICAgICAgIGIgPSBuLmNvbnRlbnRDbGFzc2VzLFxuICAgICAgICAgICAgICAgICAgeSA9IG4uYnV0dG9uQ2xhc3NlcyxcbiAgICAgICAgICAgICAgICAgIHYgPSBuLmJ1dHRvbldyYXBwZXJDbGFzc2VzLFxuICAgICAgICAgICAgICAgICAgbSA9IG4uZGVjbGluZUJ1dHRvbkNsYXNzZXMsXG4gICAgICAgICAgICAgICAgICBoID0gbi5idXR0b25JZCxcbiAgICAgICAgICAgICAgICAgIGcgPSBuLmRlY2xpbmVCdXR0b25JZCxcbiAgICAgICAgICAgICAgICAgIFMgPSBuLmRpc2FibGVCdXR0b25TdHlsZXMsXG4gICAgICAgICAgICAgICAgICBDID0gbi5lbmFibGVEZWNsaW5lQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgayA9IG4uZmxpcEJ1dHRvbnMsXG4gICAgICAgICAgICAgICAgICBqID0gbi5CdXR0b25Db21wb25lbnQsXG4gICAgICAgICAgICAgICAgICB3ID0gbi5vdmVybGF5LFxuICAgICAgICAgICAgICAgICAgVCA9IG4ub3ZlcmxheUNsYXNzZXMsXG4gICAgICAgICAgICAgICAgICBCID0gbi5vdmVybGF5U3R5bGUsXG4gICAgICAgICAgICAgICAgICBQID0gbi5hcmlhQWNjZXB0TGFiZWwsXG4gICAgICAgICAgICAgICAgICBFID0gbi5hcmlhRGVjbGluZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgRCA9IHt9LFxuICAgICAgICAgICAgICAgICAgSSA9IHt9LFxuICAgICAgICAgICAgICAgICAgTiA9IHt9LFxuICAgICAgICAgICAgICAgICAgXyA9IHt9LFxuICAgICAgICAgICAgICAgICAgUiA9IHt9O1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoXG4gICAgICAgICAgICAgICAgICAoYVxuICAgICAgICAgICAgICAgICAgICA/ICgoRCA9IHUoe30sIHIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAoSSA9IHUoe30sIGkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAoTiA9IHUoe30sIGMpKSxcbiAgICAgICAgICAgICAgICAgICAgICAoXyA9IHUoe30sIGwpKSxcbiAgICAgICAgICAgICAgICAgICAgICAoUiA9IHUoe30sIEIpKSlcbiAgICAgICAgICAgICAgICAgICAgOiAoKEQgPSB1KHt9LCBmKGYoe30sIHRoaXMuc3RhdGUuc3R5bGUpLCByKSkpLFxuICAgICAgICAgICAgICAgICAgICAgIChfID0gdSh7fSwgZihmKHt9LCB0aGlzLnN0YXRlLmNvbnRlbnRTdHlsZSksIGwpKSksXG4gICAgICAgICAgICAgICAgICAgICAgKFIgPSB1KHt9LCBmKGYoe30sIHRoaXMuc3RhdGUub3ZlcmxheVN0eWxlKSwgQikpKSxcbiAgICAgICAgICAgICAgICAgICAgICBTXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICgoSSA9IHUoe30sIGkpKSwgKE4gPSB1KHt9LCBjKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICgoSSA9IHUoe30sIGYoZih7fSwgdGhpcy5zdGF0ZS5idXR0b25TdHlsZSksIGkpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChOID0gdSh7fSwgZihmKHt9LCB0aGlzLnN0YXRlLmRlY2xpbmVCdXR0b25TdHlsZSksIGMpKSkpKSxcbiAgICAgICAgICAgICAgICAgIG8pXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIE8uVE9QOlxuICAgICAgICAgICAgICAgICAgICBELnRvcCA9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGNhc2UgTy5CT1RUT006XG4gICAgICAgICAgICAgICAgICAgIEQuYm90dG9tID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBBID0gW107XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIEMgJiZcbiAgICAgICAgICAgICAgICAgICAgQS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgIHQoKS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgaixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlY2xpbmVCdXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IE4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5kZWNsaW5lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcFxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIEEucHVzaChcbiAgICAgICAgICAgICAgICAgICAgdCgpLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgaixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYWNjZXB0QnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogSSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBoLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFAsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUuYWNjZXB0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgc1xuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgayAmJiBBLnJldmVyc2UoKSxcbiAgICAgICAgICAgICAgICAgIHQoKS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiB3LFxuICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCgpLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogUiwgY2xhc3NOYW1lOiBUIH0sIGUpO1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHQoKS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGQpLCBzdHlsZTogRCB9LFxuICAgICAgICAgICAgICAgICAgICAgIHQoKS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IF8sIGNsYXNzTmFtZTogYiB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKSxcbiAgICAgICAgICAgICAgICAgICAgICB0KCkuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogXCJcIi5jb25jYXQodikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIEEubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdKSAmJiBkKG4ucHJvdG90eXBlLCBvKSxcbiAgICAgICAgICBhXG4gICAgICAgICk7XG4gICAgICB9KShlLkNvbXBvbmVudCk7XG4gICAgKGoucHJvcFR5cGVzID0ge1xuICAgICAgbG9jYXRpb246IGkoKS5vbmVPZihcbiAgICAgICAgT2JqZWN0LmtleXMoTykubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIE9bZV07XG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgc2FtZVNpdGU6IGkoKS5vbmVPZihcbiAgICAgICAgT2JqZWN0LmtleXMoZykubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGdbZV07XG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgc3R5bGU6IGkoKS5vYmplY3QsXG4gICAgICBidXR0b25TdHlsZTogaSgpLm9iamVjdCxcbiAgICAgIGRlY2xpbmVCdXR0b25TdHlsZTogaSgpLm9iamVjdCxcbiAgICAgIGNvbnRlbnRTdHlsZTogaSgpLm9iamVjdCxcbiAgICAgIGNoaWxkcmVuOiBpKCkuYW55LFxuICAgICAgZGlzYWJsZVN0eWxlczogaSgpLmJvb2wsXG4gICAgICBoaWRlT25BY2NlcHQ6IGkoKS5ib29sLFxuICAgICAgaGlkZU9uRGVjbGluZTogaSgpLmJvb2wsXG4gICAgICBvbkFjY2VwdDogaSgpLmZ1bmMsXG4gICAgICBvbkRlY2xpbmU6IGkoKS5mdW5jLFxuICAgICAgYnV0dG9uVGV4dDogaSgpLm9uZU9mVHlwZShbaSgpLnN0cmluZywgaSgpLmZ1bmMsIGkoKS5lbGVtZW50XSksXG4gICAgICBkZWNsaW5lQnV0dG9uVGV4dDogaSgpLm9uZU9mVHlwZShbaSgpLnN0cmluZywgaSgpLmZ1bmMsIGkoKS5lbGVtZW50XSksXG4gICAgICBjb29raWVOYW1lOiBpKCkuc3RyaW5nLFxuICAgICAgY29va2llVmFsdWU6IGkoKS5vbmVPZlR5cGUoW2koKS5zdHJpbmcsIGkoKS5ib29sLCBpKCkubnVtYmVyXSksXG4gICAgICBkZWNsaW5lQ29va2llVmFsdWU6IGkoKS5vbmVPZlR5cGUoW2koKS5zdHJpbmcsIGkoKS5ib29sLCBpKCkubnVtYmVyXSksXG4gICAgICBzZXREZWNsaW5lQ29va2llOiBpKCkuYm9vbCxcbiAgICAgIGRlYnVnOiBpKCkuYm9vbCxcbiAgICAgIGV4cGlyZXM6IGkoKS5udW1iZXIsXG4gICAgICBjb250YWluZXJDbGFzc2VzOiBpKCkuc3RyaW5nLFxuICAgICAgY29udGVudENsYXNzZXM6IGkoKS5zdHJpbmcsXG4gICAgICBidXR0b25DbGFzc2VzOiBpKCkuc3RyaW5nLFxuICAgICAgYnV0dG9uV3JhcHBlckNsYXNzZXM6IGkoKS5zdHJpbmcsXG4gICAgICBkZWNsaW5lQnV0dG9uQ2xhc3NlczogaSgpLnN0cmluZyxcbiAgICAgIGJ1dHRvbklkOiBpKCkuc3RyaW5nLFxuICAgICAgZGVjbGluZUJ1dHRvbklkOiBpKCkuc3RyaW5nLFxuICAgICAgZXh0cmFDb29raWVPcHRpb25zOiBpKCkub2JqZWN0LFxuICAgICAgZGlzYWJsZUJ1dHRvblN0eWxlczogaSgpLmJvb2wsXG4gICAgICBlbmFibGVEZWNsaW5lQnV0dG9uOiBpKCkuYm9vbCxcbiAgICAgIGZsaXBCdXR0b25zOiBpKCkuYm9vbCxcbiAgICAgIEJ1dHRvbkNvbXBvbmVudDogaSgpLmVsZW1lbnRUeXBlLFxuICAgICAgY29va2llU2VjdXJpdHk6IGkoKS5ib29sLFxuICAgICAgb3ZlcmxheTogaSgpLmJvb2wsXG4gICAgICBvdmVybGF5Q2xhc3NlczogaSgpLnN0cmluZyxcbiAgICAgIG92ZXJsYXlTdHlsZTogaSgpLm9iamVjdCxcbiAgICAgIGFyaWFBY2NlcHRMYWJlbDogaSgpLnN0cmluZyxcbiAgICAgIGFyaWFEZWNsaW5lTGFiZWw6IGkoKS5zdHJpbmcsXG4gICAgICBhY2NlcHRPblNjcm9sbDogaSgpLmJvb2wsXG4gICAgICBhY2NlcHRPblNjcm9sbFBlcmNlbnRhZ2U6IGkoKS5udW1iZXIsXG4gICAgfSksXG4gICAgICAoai5kZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGRpc2FibGVTdHlsZXM6ICExLFxuICAgICAgICBoaWRlT25BY2NlcHQ6ICEwLFxuICAgICAgICBoaWRlT25EZWNsaW5lOiAhMCxcbiAgICAgICAgbG9jYXRpb246IE8uQk9UVE9NLFxuICAgICAgICBvbkFjY2VwdDogZnVuY3Rpb24gKCkge30sXG4gICAgICAgIG9uRGVjbGluZTogZnVuY3Rpb24gKCkge30sXG4gICAgICAgIGNvb2tpZU5hbWU6IGssXG4gICAgICAgIGNvb2tpZVZhbHVlOiAhMCxcbiAgICAgICAgZGVjbGluZUNvb2tpZVZhbHVlOiAhMSxcbiAgICAgICAgc2V0RGVjbGluZUNvb2tpZTogITAsXG4gICAgICAgIGJ1dHRvblRleHQ6IFwiSSB1bmRlcnN0YW5kXCIsXG4gICAgICAgIGRlY2xpbmVCdXR0b25UZXh0OiBcIkkgZGVjbGluZVwiLFxuICAgICAgICBkZWJ1ZzogITEsXG4gICAgICAgIGV4cGlyZXM6IDM2NSxcbiAgICAgICAgY29udGFpbmVyQ2xhc3NlczogXCJDb29raWVDb25zZW50XCIsXG4gICAgICAgIGNvbnRlbnRDbGFzc2VzOiBcIlwiLFxuICAgICAgICBidXR0b25DbGFzc2VzOiBcIlwiLFxuICAgICAgICBidXR0b25XcmFwcGVyQ2xhc3NlczogXCJcIixcbiAgICAgICAgZGVjbGluZUJ1dHRvbkNsYXNzZXM6IFwiXCIsXG4gICAgICAgIGJ1dHRvbklkOiBcInJjYy1jb25maXJtLWJ1dHRvblwiLFxuICAgICAgICBkZWNsaW5lQnV0dG9uSWQ6IFwicmNjLWRlY2xpbmUtYnV0dG9uXCIsXG4gICAgICAgIGV4dHJhQ29va2llT3B0aW9uczoge30sXG4gICAgICAgIGRpc2FibGVCdXR0b25TdHlsZXM6ICExLFxuICAgICAgICBlbmFibGVEZWNsaW5lQnV0dG9uOiAhMSxcbiAgICAgICAgZmxpcEJ1dHRvbnM6ICExLFxuICAgICAgICBzYW1lU2l0ZTogZy5MQVgsXG4gICAgICAgIEJ1dHRvbkNvbXBvbmVudDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgbiA9IGUuY2hpbGRyZW4sXG4gICAgICAgICAgICBvID0gKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgIGlmIChudWxsID09IGUpIHJldHVybiB7fTtcbiAgICAgICAgICAgICAgdmFyIG4sXG4gICAgICAgICAgICAgICAgbyxcbiAgICAgICAgICAgICAgICByID0gKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSBlKSByZXR1cm4ge307XG4gICAgICAgICAgICAgICAgICB2YXIgbixcbiAgICAgICAgICAgICAgICAgICAgbyxcbiAgICAgICAgICAgICAgICAgICAgciA9IHt9LFxuICAgICAgICAgICAgICAgICAgICBpID0gT2JqZWN0LmtleXMoZSk7XG4gICAgICAgICAgICAgICAgICBmb3IgKG8gPSAwOyBvIDwgaS5sZW5ndGg7IG8rKykgKG4gPSBpW29dKSwgdC5pbmRleE9mKG4pID49IDAgfHwgKHJbbl0gPSBlW25dKTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICAgICAgICAgIH0pKGUsIHQpO1xuICAgICAgICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICAgICAgICAgIHZhciBpID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtcbiAgICAgICAgICAgICAgICBmb3IgKG8gPSAwOyBvIDwgaS5sZW5ndGg7IG8rKylcbiAgICAgICAgICAgICAgICAgIChuID0gaVtvXSksXG4gICAgICAgICAgICAgICAgICAgIHQuaW5kZXhPZihuKSA+PSAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLCBuKSAmJiAocltuXSA9IGVbbl0pKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICAgIH0pKGUsIHMpO1xuICAgICAgICAgIHJldHVybiB0KCkuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBvLCBuKTtcbiAgICAgICAgfSxcbiAgICAgICAgb3ZlcmxheTogITEsXG4gICAgICAgIG92ZXJsYXlDbGFzc2VzOiBcIlwiLFxuICAgICAgICBhcmlhQWNjZXB0TGFiZWw6IFwiQWNjZXB0IGNvb2tpZXNcIixcbiAgICAgICAgYXJpYURlY2xpbmVMYWJlbDogXCJEZWNsaW5lIGNvb2tpZXNcIixcbiAgICAgICAgYWNjZXB0T25TY3JvbGw6ICExLFxuICAgICAgICBhY2NlcHRPblNjcm9sbFBlcmNlbnRhZ2U6IDI1LFxuICAgICAgfSk7XG4gICAgY29uc3QgdyA9IGo7XG4gIH0pKCksXG4gICAgKG1vZHVsZS5leHBvcnRzID0gbyk7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==