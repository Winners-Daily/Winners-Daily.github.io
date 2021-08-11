(function() {
var exports = {};
exports.id = "pages/mediaKit";
exports.ids = ["pages/mediaKit"];
exports.modules = {

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

/***/ "./pages/mediaKit.js":
/*!***************************!*\
  !*** ./pages/mediaKit.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.js");

var _jsxFileName = "C:\\Users\\ameer\\Documents\\website\\Winners-Daily.github.io\\pages\\mediaKit.js";


const mediaKit = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Meta__WEBPACK_IMPORTED_MODULE_1__.default, {
      title: "MediaKit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "/mediaKit/mediaKit.png",
      style: {
        width: '45%'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (mediaKit);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/mediaKit.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWNyYXNoLWNvdXJzZS8uL2NvbXBvbmVudHMvTWV0YS5qcyIsIndlYnBhY2s6Ly9uZXh0LWNyYXNoLWNvdXJzZS8uL3BhZ2VzL21lZGlhS2l0LmpzIiwid2VicGFjazovL25leHQtY3Jhc2gtY291cnNlL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbmV4dC1jcmFzaC1jb3Vyc2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJNZXRhIiwidGl0bGUiLCJrZXl3b3JkcyIsImRlc2NyaXB0aW9uIiwiZGVmYXVsdFByb3BzIiwibWVkaWFLaXQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNDLFVBQVQ7QUFBbUJDO0FBQW5CLENBQUQsS0FBc0M7QUFDL0Msc0JBQ0ksOERBQUMsa0RBQUQ7QUFBQSw0QkFDSTtBQUFNLFVBQUksRUFBQyxVQUFYO0FBQXlCLGFBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUF5QixhQUFPLEVBQUVEO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFNLFVBQUksRUFBQyxhQUFYO0FBQXlCLGFBQU8sRUFBRUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQUlJO0FBQU0sYUFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQUtJO0FBQU0sU0FBRyxFQUFDLE1BQVY7QUFBaUIsVUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEosZUFNSTtBQUFBLGdCQUFRRjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFVSCxDQVhEOztBQWFBRCxJQUFJLENBQUNJLFlBQUwsR0FBb0I7QUFDaEJILE9BQUssRUFBRSxtQkFEUztBQUVoQkMsVUFBUSxFQUFFLGNBRk07QUFHaEJDLGFBQVcsRUFBRTtBQUhHLENBQXBCO0FBTUEsK0RBQWVILElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7O0FBRUEsTUFBTUssUUFBUSxHQUFHLE1BQU07QUFDbkIsc0JBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBQ0MsYUFBTyxFQUFFLE1BQVY7QUFBa0JDLG9CQUFjLEVBQUU7QUFBbEMsS0FBWjtBQUFBLDRCQUNJLDhEQUFDLHFEQUFEO0FBQU0sV0FBSyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUssU0FBRyxFQUFDLHdCQUFUO0FBQWtDLFdBQUssRUFBRTtBQUFDQyxhQUFLLEVBQUU7QUFBUjtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBT0gsQ0FSRDs7QUFVQSwrREFBZUgsUUFBZixFOzs7Ozs7Ozs7OztBQ1pBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL21lZGlhS2l0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IE1ldGEgPSAoeyB0aXRsZSwga2V5d29yZHMsIGRlc2NyaXB0aW9uIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyAgICBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MScgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0na2V5d29yZHMnICAgIGNvbnRlbnQ9e2tleXdvcmRzfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cclxuICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgIClcclxufVxyXG5cclxuTWV0YS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgICB0aXRsZTogJ1RoZSBXaW5uZXJzIERhaWx5JyxcclxuICAgIGtleXdvcmRzOiAnYXJjaGl0ZWN0dXJlJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnR2V0IHRoZSBsYXRlc3QgYXJjaGl0ZWN0dXJlIG5ld3MnLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXRhXHJcbiIsImltcG9ydCBNZXRhIGZyb20gJy4uL2NvbXBvbmVudHMvTWV0YSdcclxuXHJcbmNvbnN0IG1lZGlhS2l0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICA8TWV0YSB0aXRsZT0nTWVkaWFLaXQnIC8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL21lZGlhS2l0L21lZGlhS2l0LnBuZ1wiIHN0eWxlPXt7d2lkdGg6ICc0NSUnfX0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lZGlhS2l0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9