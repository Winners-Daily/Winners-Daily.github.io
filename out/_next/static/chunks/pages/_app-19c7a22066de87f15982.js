(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),a=n(6860),o=n(379),i=n(8206);e.exports=function(e){return r(e)||a(e)||o(e)||i()}},5019:function(e,t,n){"use strict";var r=n(5893),a=n(9008),o=function(e){var t=e.title,n=e.keywords,o=e.description;return(0,r.jsxs)(a.default,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"keywords",content:n}),(0,r.jsx)("meta",{name:"description",content:o}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("title",{children:t})]})};o.defaultProps={title:"The Winners Daily",keywords:"architecture",description:"Get the latest architecture news"},t.Z=o},2167:function(e,t,n){"use strict";var r=n(3038),a=n(862);t.default=void 0;var o=a(n(7294)),i=n(9414),s=n(4651),c=n(7426),u={};function l(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=(0,s.useRouter)(),f=o.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],s=n[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):s||o}}),[a,e.href,e.as]),d=f.href,p=f.as,h=e.children,m=e.replace,v=e.shallow,g=e.scroll,y=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var b=(t=o.Children.only(h))&&"object"===typeof t&&t.ref,_=(0,c.useIntersection)({rootMargin:"200px"}),x=r(_,2),j=x[0],w=x[1],O=o.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);(0,o.useEffect)((function(){var e=w&&n&&(0,i.isLocalURL)(d),t="undefined"!==typeof y?y:a&&a.locale,r=u[d+"%"+p+(t?"%"+t:"")];e&&!r&&l(a,d,p,{locale:t})}),[p,d,w,y,n,a]);var M={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:c,scroll:s}))}(e,a,d,p,m,v,g,y)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(a,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof y?y:a&&a.locale,k=a&&a.isLocaleDomain&&(0,i.getDomainLocale)(p,N,a&&a.locales,a&&a.domainLocales);M.href=k||(0,i.addBasePath)((0,i.addLocale)(p,N,a&&a.defaultLocale))}return o.default.cloneElement(t,M)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=(0,a.useRef)(),u=(0,a.useState)(!1),l=r(u,2),f=l[0],d=l[1],p=(0,a.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){if(!i&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=n(7294),o=n(3447),i="undefined"!==typeof IntersectionObserver;var s=new Map},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},o=n(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},2775:function(e,t,n){"use strict";var r=n(9713);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(o=n(3244))&&o.__esModule?o:{default:o},c=n(3398),u=n(1165),l=n(6393);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=h.length;c<u;c++){var l=h[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var f=a.props[l],d=r[l]||new Set;"name"===l&&i||!d.has(f)?(d.add(f),r[l]=d):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:o})}))}var v=function(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)};t.default=v},3244:function(e,t,n){"use strict";var r=n(319),a=n(4575),o=n(3913),i=(n(1506),n(2205)),s=n(8585),c=n(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),f=function(e){i(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},6292:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return C}});var a=n(5893),o=n(7294),i=n(1664),s=n(3711),c=n.n(s),u=n(1163),l=function(){var e=(0,u.useRouter)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("nav",{className:c().nav,children:[(0,a.jsxs)("div",{className:c().nav_link_container,children:[(0,a.jsx)("span",{className:"/about"==e.pathname?c().active:c().notActive,children:(0,a.jsx)(i.default,{href:"/about",children:"About"})}),(0,a.jsx)("span",{className:"/community"==e.pathname?c().active:c().notActive,children:(0,a.jsx)(i.default,{href:"/community",children:"Community"})})]}),(0,a.jsx)("div",{className:c().nav_main,children:(0,a.jsx)(i.default,{href:"/",children:(0,a.jsx)("img",{src:"/WD.png",alt:"Vercel",className:c().logoCenter})})}),(0,a.jsxs)("div",{className:c().nav_link_container,children:[(0,a.jsx)("span",{className:"/mediaKit"==e.pathname?c().active:c().notActive,children:(0,a.jsx)(i.default,{href:"/mediaKit",children:"Media Kit"})}),(0,a.jsx)("span",{className:"/services"==e.pathname?c().active:c().notActive,children:(0,a.jsx)(i.default,{href:"/services",children:"Services"})})]}),(0,a.jsx)("div",{className:c().insta,children:(0,a.jsx)("a",{href:"https:www.instagram.com/winnersdaily/",target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)("img",{src:"/instagram.png",alt:"Vercel",className:c().logo})})})]})})},f=n(4784),d=n.n(f);const p=({color:e="currentColor",direction:t="left",distance:n="md",duration:r=.4,easing:a="cubic-bezier(0, 0, 0, 1)",hideOutline:i=!0,label:s,lines:c=3,onToggle:u,render:l,rounded:f=!1,size:d=32,toggle:p,toggled:h})=>{const[m,v]=(0,o.useState)(!1),g=Math.max(12,Math.min(48,d)),y=Math.round((48-g)/2),b=g/12,_=Math.round(b),x=g/(c*(("lg"===n?.25:"sm"===n?.75:.5)+(3===c?1:1.25))),j=Math.round(x),w=_*c+j*(c-1),O=Math.round((48-w)/2),M=parseFloat((g/(3===c?"lg"===n?4.0425:"sm"===n?5.1625:4.6325:"lg"===n?6.7875:"sm"===n?8.4875:7.6675)-(b-_+(x-j))/(3===c?1:2)/(4/3)).toFixed(2)),N=Math.max(0,r),k={cursor:"pointer",height:"48px",position:"relative",transition:`${N}s ${a}`,userSelect:"none",width:"48px"},C={background:e,height:`${_}px`,left:`${y}px`,position:"absolute"};i&&(k.outline="none"),f&&(C.borderRadius="9em");const E=p||v,S=void 0!==h?h:m;return l({barHeight:_,barStyles:C,burgerStyles:k,easing:a,handler:()=>{E(!S),"function"===typeof u&&u(!S)},isLeft:"left"===t,isToggled:S,label:s,margin:j,move:M,time:N,topOffset:O,width:g})};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=e=>o.createElement(p,h({},e,{render:e=>o.createElement("div",{className:"hamburger-react","aria-label":e.label,onClick:e.handler,onKeyUp:t=>"Enter"===t.key&&e.handler(),role:"button",style:{...e.burgerStyles,transform:""+(e.isToggled?`rotate(${90*(e.isLeft?-1:1)}deg)`:"none")},tabIndex:0},o.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none")}}),o.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?"scaleX(0)":"none")}}),o.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+2*e.barHeight+2*e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:""+(e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${-1*e.move}px)`:"none")}}))})),v=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1];return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:d().MainDev,children:[(0,a.jsxs)("nav",{className:d().nav,children:[(0,a.jsx)(i.default,{href:"/",children:(0,a.jsx)("img",{src:"/WD.png",alt:"Vercel",className:d().logo})}),(0,a.jsx)(m,{toggled:t,toggle:function(){return n(!t)},className:d().Ham})]}),t&&(0,a.jsx)("nav",{className:d().Hamnav,children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"https://www.instagram.com/winnersdaily/",children:"Instagram"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/about",children:"About"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/community",children:"Community"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/mediaKit",children:"Media Kit"})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/services",children:"Services"})})]})})]})})},g=function(){var e=function(e){var t=(0,o.useState)(!1),n=t[0],r=t[1],a=(0,o.useCallback)((function(e){e.matches?r(!0):r(!1)}),[]);return(0,o.useEffect)((function(){var t=window.matchMedia("(max-width: ".concat(e,"px)"));return t.addListener(a),t.matches&&r(!0),function(){return t.removeListener(a)}}),[]),n}(768);return(0,a.jsx)("div",{children:e?(0,a.jsx)("div",{children:(0,a.jsx)(v,{})}):(0,a.jsx)("div",{children:(0,a.jsx)(l,{})})})},y=n(3713),b=n.n(y);function _(){return(0,a.jsxs)("div",{className:b().foot,children:[(0,a.jsxs)("div",{className:b().email,children:[(0,a.jsx)("img",{src:"/mail.png",alt:"Vercel",className:(b().icon,b().align)}),(0,a.jsx)("a",{className:(b().sub,b().align),href:"https://instagram.us17.list-manage.com/subscribe?u=db0809168e74731fc30782715&id=6b2cf448c5",children:" Subscribe"})]}),(0,a.jsx)("p",{className:b().align,children:"\xa9 2020 - 2021 thewinnersdaily.com. All Rights Reserved. "})]})}var x=n(5019),j=n(6276),w=n.n(j),O=n(4155),M=function(e){var t=e.children,n=(0,u.useRouter)();return(0,o.useEffect)((function(){var e=function(e){!function(e){window.gtag("config",O.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,{page_path:e})}(e)};return n.events.on("routeChangeComplete",e),function(){n.events.off("routeChangeComplete",e)}}),[n.events]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Z,{}),(0,a.jsx)(g,{}),(0,a.jsx)("div",{className:w().container,children:(0,a.jsx)("main",{className:w().main,children:t})}),(0,a.jsx)(_,{})]})};n(2702);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e){var t=e.Component,n=e.pageProps;return(0,a.jsx)(M,{children:(0,a.jsx)(t,k({},n))})}},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6292)}])},6276:function(e){e.exports={container:"Layout_container__1SPwL",main:"Layout_main__cgm7e"}},3711:function(e){e.exports={nav:"Nav_nav__3Zjf-",nav_main:"Nav_nav_main__2YSuu",nav_link_container:"Nav_nav_link_container__2q3Eg",insta:"Nav_insta__2gDi_",logo:"Nav_logo__11byI",logoCenter:"Nav_logoCenter__2IwcZ",active:"Nav_active__23I2d",notActive:"Nav_notActive__1BQBc"}},4784:function(e){e.exports={nav:"NavHam_nav__1eWrr",logo:"NavHam_logo__3IN-O",Ham:"NavHam_Ham__2fTJh",Hamnav:"NavHam_Hamnav__ZNVo5",MainDev:"NavHam_MainDev__3oStf"}},3713:function(e){e.exports={foot:"footer_foot__36n03",icon:"footer_icon__1Y5vr",email:"footer_email__1hD80",align:"footer_align__UxgXV",sub:"footer_sub__3EKhQ"}},2702:function(){},9008:function(e,t,n){e.exports=n(2775)},1664:function(e,t,n){e.exports=n(2167)},1163:function(e,t,n){e.exports=n(4651)},4155:function(e){var t,n,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var s,c=[],u=!1,l=-1;function f(){u&&s&&(u=!1,s.length?c=s.concat(c):l=-1,c.length&&d())}function d(){if(!u){var e=i(f);u=!0;for(var t=c.length;t;){for(s=c,c=[];++l<t;)s&&s[l].run();l=-1,t=c.length}s=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||u||i(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var n=e.O();_N_E=n}]);