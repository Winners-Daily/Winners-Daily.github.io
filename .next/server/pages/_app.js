(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8876:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Meta; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/Meta.js




const Meta = ({
  title,
  keywords,
  description
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "keywords",
      content: keywords
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      charSet: "utf-8"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "icon",
      href: "/WD.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("title", {
      children: title
    })]
  });
};

Meta.defaultProps = {
  title: 'The Winners Daily',
  keywords: 'architecture',
  description: 'Get the latest architecture news'
};
/* harmony default export */ var components_Meta = (Meta);

/***/ }),

/***/ 5516:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./styles/Nav.module.css
var Nav_module = __webpack_require__(8955);
var Nav_module_default = /*#__PURE__*/__webpack_require__.n(Nav_module);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
;// CONCATENATED MODULE: ./components/FullMenu.js






const FullMenu = () => {
  const router = (0,router_namespaceObject.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    className: (Nav_module_default()).nav,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        className: router.pathname == "/about" ? (Nav_module_default()).active : (Nav_module_default()).notActive,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/about",
          children: "About"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: router.pathname == "/community" ? (Nav_module_default()).active : (Nav_module_default()).notActive,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/community",
          children: "Community"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: router.pathname == "/" ? (Nav_module_default()).active : (Nav_module_default()).notActive,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/WD.png",
            alt: "Vercel",
            className: (Nav_module_default()).logoCenter
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: router.pathname == "/mediaKit" ? (Nav_module_default()).active : (Nav_module_default()).notActive,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/mediaKit",
          children: "Media Kit"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: router.pathname == "/services" ? (Nav_module_default()).active : (Nav_module_default()).notActive,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/services",
          children: "Services"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Nav_module_default()).insta,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "https://www.instagram.com/winnersdaily/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/instagram.png",
              alt: "Vercel",
              className: (Nav_module_default()).logo
            })
          })
        })
      })]
    })
  });
};

/* harmony default export */ var components_FullMenu = (FullMenu);
// EXTERNAL MODULE: ./styles/NavHam.module.css
var NavHam_module = __webpack_require__(5606);
var NavHam_module_default = /*#__PURE__*/__webpack_require__.n(NavHam_module);
;// CONCATENATED MODULE: external "hamburger-react"
var external_hamburger_react_namespaceObject = require("hamburger-react");;
var external_hamburger_react_default = /*#__PURE__*/__webpack_require__.n(external_hamburger_react_namespaceObject);
;// CONCATENATED MODULE: ./components/HamburgerMenu.js








const HamburgerMenu = () => {
  const {
    0: isOpen,
    1: setOpen
  } = (0,external_react_.useState)(false);

  function Open() {
    console.log(isOpen);
    setOpen(!isOpen);
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (NavHam_module_default()).MainDev,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        className: (NavHam_module_default()).nav,
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/WD.png",
            alt: "Vercel",
            className: (NavHam_module_default()).logo
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((external_hamburger_react_default()), {
          toggled: isOpen,
          toggle: Open,
          className: (NavHam_module_default()).Ham
        })]
      }), isOpen && /*#__PURE__*/jsx_runtime_.jsx("nav", {
        className: (NavHam_module_default()).Hamnav,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "https://www.instagram.com/winnersdaily/",
              children: "Instagram"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/about",
              children: "About"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/community",
              children: "Community"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/mediaKit",
              children: "Media Kit"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/services",
              children: "Services"
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ var components_HamburgerMenu = (HamburgerMenu);
;// CONCATENATED MODULE: ./components/Nav.js





const useMediaQuery = width => {
  const {
    0: targetReached,
    1: setTargetReached
  } = (0,external_react_.useState)(false);
  const updateTarget = (0,external_react_.useCallback)(e => {
    e.matches ? setTargetReached(true) : setTargetReached(false);
  }, []);
  (0,external_react_.useEffect)(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget); // Check on mount (callback is not called until a change occurs)

    if (media.matches) setTargetReached(true);
    return () => media.removeListener(updateTarget);
  }, []);
  return targetReached;
};

const Navbar = () => {
  const isBreakpoint = useMediaQuery(768);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: isBreakpoint ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(components_HamburgerMenu, {})
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(components_FullMenu, {})
    })
  });
};

/* harmony default export */ var Nav = (Navbar);
// EXTERNAL MODULE: ./styles/footer.module.css
var footer_module = __webpack_require__(4001);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./components/Footer.js




const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (footer_module_default()).foot,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (footer_module_default()).email,
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/mail.png",
        alt: "Vercel",
        className: (footer_module_default()).icon
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: (footer_module_default()).sub,
        href: "https://instagram.us17.list-manage.com/subscribe?u=db0809168e74731fc30782715&id=6b2cf448c5",
        children: " Subscribe"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "\xA9 2020 - 2021 thewinnersdaily.com. All Rights Reserved. "
    })]
  });
};

/* harmony default export */ var components_Footer = (Footer);
// EXTERNAL MODULE: ./components/Meta.js + 1 modules
var Meta = __webpack_require__(8876);
// EXTERNAL MODULE: ./styles/Layout.module.css
var Layout_module = __webpack_require__(296);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./lib/ga/index.js
// log the pageview with their URL
const pageview = url => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url
  });
}; // log specific events happening.

const ga_event = ({
  action,
  params
}) => {
  window.gtag('event', action, params);
};
;// CONCATENATED MODULE: ./components/Layout.js











const Layout = ({
  children
}) => {
  const router = (0,router_namespaceObject.useRouter)();
  (0,external_react_.useEffect)(() => {
    const handleRouteChange = url => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Meta/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(Nav, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Layout_module_default()).container,
      children: /*#__PURE__*/jsx_runtime_.jsx("main", {
        className: (Layout_module_default()).main,
        children: children
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
  });
};

/* harmony default export */ var components_Layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(components_Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 296:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Layout_container__1SPwL",
	"main": "Layout_main__cgm7e"
};


/***/ }),

/***/ 8955:
/***/ (function(module) {

// Exports
module.exports = {
	"nav": "Nav_nav__3Zjf-",
	"logo": "Nav_logo__11byI",
	"logoCenter": "Nav_logoCenter__2IwcZ",
	"insta": "Nav_insta__2gDi_",
	"active": "Nav_active__23I2d",
	"notActive": "Nav_notActive__1BQBc"
};


/***/ }),

/***/ 5606:
/***/ (function(module) {

// Exports
module.exports = {
	"nav": "NavHam_nav__1eWrr",
	"logo": "NavHam_logo__3IN-O",
	"Ham": "NavHam_Ham__2fTJh",
	"Hamnav": "NavHam_Hamnav__ZNVo5",
	"MainDev": "NavHam_MainDev__3oStf"
};


/***/ }),

/***/ 4001:
/***/ (function(module) {

// Exports
module.exports = {
	"foot": "footer_foot__36n03",
	"icon": "footer_icon__1Y5vr",
	"email": "footer_email__1hD80",
	"sub": "footer_sub__3EKhQ"
};


/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(5516); });
module.exports = __webpack_exports__;

})();