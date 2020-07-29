(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./components/Contact.tsx":
/*!********************************!*\
  !*** ./components/Contact.tsx ***!
  \********************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons */ "./components/Icons.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Marten\\Documents\\Web\\p\\components\\Contact.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Contact = function Contact() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "w-full my-4 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, "Full-stack Web Development student at Chas Academy 2019-21."), __jsx("div", {
    className: "flex items-center justify-center inline w-full mt-3 mb-2 md:w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["Gmail"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, "marten.frisk@gmail.com")), __jsx("div", {
    className: "flex items-center justify-center inline-block w-full my-2 md:w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }
  }, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["Github"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }), __jsx("a", {
    href: "https://github.com/martenfrisk",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "border-b-2 border-dashed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, "martenfrisk")), __jsx("div", {
    className: "flex items-center justify-center inline-block w-full my-2 md:w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }
  }, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["Pin"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, "Stockholm, Sweden")), __jsx("div", {
    className: "flex items-center justify-center inline-block w-full my-2 md:w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }
  }, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["Linkedin"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }), __jsx("a", {
    href: "https://linkedin.com/in/martenfrisk/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "border-b-2 border-dashed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, "/in/martenfrisk")));
};
_c = Contact;

var _c;

$RefreshReg$(_c, "Contact");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/***/ }),

/***/ "./components/Icons.tsx":
/*!******************************!*\
  !*** ./components/Icons.tsx ***!
  \******************************/
/*! exports provided: Gem, Gmail, Github, Pin, Linkedin, ExtLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gem", function() { return Gem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gmail", function() { return Gmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Github", function() { return Github; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pin", function() { return Pin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Linkedin", function() { return Linkedin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtLink", function() { return ExtLink; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\Marten\\Documents\\Web\\p\\components\\Icons.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var GemSize = "h-4 w-4 inline-block";
var SocialIcons = "h-5 w-5 mr-2 inline-block"; // All icons from flaticon.com

var Gem = function Gem(color, repeat) {
  if (color === 'gray') {
    return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(repeat)).map(function (e, i) {
      return __jsx("div", {
        key: i,
        className: GemSize,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 2
        }
      }, __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 2
        }
      }, __jsx("path", {
        fill: "#aeaeae",
        d: "M89.4 415V97L256 0l166.6 97v318L256 512z",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 3
        }
      }), __jsx("path", {
        fill: "#989898",
        d: "M256 0l166.6 97v318L256 512z",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 3
        }
      }), __jsx("path", {
        fill: "#c5c5c5",
        d: "M256 192.7L89.4 97 256 0zM256 319.3L89.4 415 256 512z",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 3
        }
      }), __jsx("path", {
        fill: "#aeaeae",
        d: "M256 192.7L422.6 97 256 0zM256 319.3L422.6 415 256 512z",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 5
        }
      }), __jsx("path", {
        fill: "#e3e9ed",
        d: "M256 418.7l86-50V143.3l-86-50-86 50v225.4z",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 3
        }
      }), __jsx("path", {
        fill: "#c5c5c5",
        d: "M256 93.3v325.4l86-50V143.3z",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 3
        }
      })));
    });
  } else if (color === 'green') {
    return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(repeat)).map(function (e, i) {
      return __jsx("div", {
        key: i,
        className: GemSize,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 2
        }
      }, __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 1
        }
      }, __jsx("defs", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 3
        }
      }), __jsx("path", {
        fill: "#62b400",
        d: "M89.4 415V97L256 0l166.6 97v318L256 512z",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 3
        }
      }), __jsx("path", {
        fill: "#4c8c00",
        d: "M256 0l166.6 97v318L256 512z",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 3
        }
      }), __jsx("path", {
        fill: "#92e200",
        d: "M256 192.7L89.4 97 256 0zM256 319.3L89.4 415 256 512z",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 3
        }
      }), __jsx("g", {
        fill: "#62b400",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 3
        }
      }, __jsx("path", {
        d: "M256 192.7L422.6 97 256 0zM256 319.3L422.6 415 256 512z",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 5
        }
      })), __jsx("path", {
        fill: "#c6ea4b",
        d: "M256 418.7l86-50V143.3l-86-50-86 50v225.4z",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 3
        }
      }), __jsx("path", {
        fill: "#92e200",
        d: "M256 93.3v325.4l86-50V143.3z",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 3
        }
      })));
    });
  }
};
_c = Gem;
var Gmail = function Gmail() {
  return __jsx("div", {
    className: SocialIcons,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 3
    }
  }), __jsx("path", {
    fill: "#eceff1",
    d: "M64 64h384v384H64z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 3
    }
  }), __jsx("path", {
    fill: "#cfd8dc",
    d: "M256 296.4L448 448V148.7z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 3
    }
  }), __jsx("path", {
    fill: "#f44336",
    d: "M464 64h-16L256 215.6 64 64H48a48 48 0 00-48 48v288a48 48 0 0048 48h16V148.7l192 147.7 192-147.8V448h16a48 48 0 0048-48V112a48 48 0 00-48-48z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 3
    }
  })));
};
_c2 = Gmail;
var Github = function Github() {
  return __jsx("div", {
    className: SocialIcons,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 511.1 511.1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 3
    }
  }), __jsx("path", {
    fill: "#455a64",
    d: "M255.5 2.5A256 256 0 00200 508.3a10.7 10.7 0 0013-10.4v-58c0-6-4.8-10.7-10.7-10.7h-21.4c-26.6 0-44.8-25.2-60.7-47.5l-4.9-6.8c7.2 4 14 8.6 20.5 13.6 12 11.2 27.5 18 43.8 19.2a29.4 29.4 0 0033.3-31.8v-7.5c0-4.8-3.1-9-7.7-10.2-59.2-16.8-99-61.1-99-110.3.5-26.7 11.4-52 30.5-70.7 3-3.1 3.9-7.9 2-11.9a59.7 59.7 0 013.1-54.4 105 105 0 0139.1 27.5c3 3.4 7.7 4.7 11.9 3.2 40.6-14.7 85-14.7 125.7 0 4.2 1.5 8.9.2 11.8-3.2a105 105 0 0139-27.5 59.7 59.7 0 013.2 54.4c-1.9 4-1 8.7 2 11.9 19 18.6 30 44 30.4 70.7 0 51.6-44.1 97.9-107.3 112.5a10.7 10.7 0 00-7 15.3c6 13.5 8.6 28.2 7.7 42.8V498a10.7 10.7 0 0013 10.4A256 256 0 00255.4 2.5z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 3
    }
  })));
};
_c3 = Github;
var Pin = function Pin() {
  return __jsx("div", {
    className: SocialIcons,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 3
    }
  }), __jsx("path", {
    fill: "#fb5252",
    d: "M256 0C150.1 0 64 86.1 64 192c0 133 173.3 308 180.7 315.3a16 16 0 0022.6 0C274.7 500 448 325.1 448 192 448 86.1 361.9 0 256 0z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 3
    }
  }), __jsx("circle", {
    cx: "256",
    cy: "192",
    r: "96",
    fill: "#fff",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 3
    }
  })));
};
_c4 = Pin;
var Linkedin = function Linkedin() {
  return __jsx("div", {
    className: SocialIcons,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 3
    }
  }), __jsx("g", {
    fill: "#2196f3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 3
    }
  }, __jsx("circle", {
    cx: "64",
    cy: "64",
    r: "64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M10.7 170.7h106.6c6 0 10.7 4.7 10.7 10.6v320c0 6-4.8 10.7-10.7 10.7H10.7c-6 0-10.7-4.8-10.7-10.7v-320c0-5.9 4.8-10.6 10.7-10.6zM435.2 156c-46.7-13.3-97-5-136.8 22.7-1.2-4.7-5.5-8-10.4-8H181.3c-5.9 0-10.6 4.7-10.6 10.6v320c0 6 4.7 10.7 10.6 10.7H288c5.9 0 10.7-4.8 10.7-10.7v-230a56 56 0 0157.6-11.8 50.2 50.2 0 0127.7 49.8v192c0 6 4.8 10.7 10.7 10.7h106.6c6 0 10.7-4.8 10.7-10.7V288c-1.2-87.7-42.5-120.2-76.8-132z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }))));
};
_c5 = Linkedin;
var ExtLink = function ExtLink() {
  return __jsx("div", {
    className: "w-4 h-4 ml-1 align-baseline inline-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx("defs", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 3
    }
  }), __jsx("path", {
    d: "M20 12h-1a.5.5 0 00-.4.5v6H5.5v-13h6A.5.5 0 0012 5v-.9a.5.5 0 00-.5-.5h-6a2 2 0 00-2 1.9v13a2 2 0 002 2h13a2 2 0 002-2v-6a.5.5 0 00-.6-.5z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 3
    }
  }), __jsx("path", {
    d: "M16.4 6.2l-5.2 5.2a.5.5 0 000 .7l.7.8a.5.5 0 00.7 0l5.3-5.3 1.8 1.8a.4.4 0 00.7-.2V4a.4.4 0 00-.4-.4h-5.2a.4.4 0 00-.2.7z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 3
    }
  })));
};
_c6 = ExtLink;

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Gem");
$RefreshReg$(_c2, "Gmail");
$RefreshReg$(_c3, "Github");
$RefreshReg$(_c4, "Pin");
$RefreshReg$(_c5, "Linkedin");
$RefreshReg$(_c6, "ExtLink");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/***/ }),

/***/ "./components/Projects.tsx":
/*!*********************************!*\
  !*** ./components/Projects.tsx ***!
  \*********************************/
/*! exports provided: Projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projects", function() { return Projects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons */ "./components/Icons.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Marten\\Documents\\Web\\p\\components\\Projects.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Projects = function Projects() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "w-full text-xl text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, "Projects"), __jsx("div", {
    className: "flex flex-wrap items-stretch my-4 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "w-full text-justify md:w-2/3 md:pr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/seekerslounge/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "Seekers' Lounge", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 23
    }
  }))), "Instant search engine with 45k+ lines from the \"Teachers's Lounge\" podcast. Powered by AWS ElasticSearch and built with React."), __jsx("div", {
    className: "flex self-end justify-center w-full h-auto md:w-1/3 md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/screen-teacher-thumb.png",
    alt: "Seekers' Lounge screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  }))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap items-stretch my-4 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "w-full text-justify md:w-2/3 md:pr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dhammapada/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "Dhammapada Reader", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 8
    }
  }))), "Lightweight and distraction-free site for reading the Dhammapada. Built with React."), __jsx("div", {
    className: "flex justify-center w-full h-auto md:w-1/3 md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/screen-dhamma-thumb.png",
    alt: "Dhammapada Reader screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 6
    }
  }))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap items-stretch my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "flex flex-wrap w-full text-justify",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full text-lg font-semibold cursor-pointer md:w-1/3 hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/FootballLines/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "Football Lines", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 22
    }
  }))), __jsx("div", {
    className: "w-full md:w-2/3 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 6
    }
  }, "View historical table placements of Swedish football teams. Built with React.")), __jsx("div", {
    className: "flex justify-center w-full h-auto mt-2 cursor-pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/screen-football-thumb.png",
    alt: "Football Lines screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 6
    }
  }))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap items-stretch my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "w-full text-justify md:w-2/3 md:pr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/KoreanDynastyGenerator/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, "Korean Dynasty Generator", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 8
    }
  }))), "Generate a fully staffed, randomized medieval Korean bureaucracy. Built with React."), __jsx("div", {
    className: "flex justify-center w-full h-auto md:w-1/3 md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/screen-dynasty-thumb.png",
    alt: "Korean Dynasty Generator screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 6
    }
  }))), __jsx("hr", {
    className: "w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap items-stretch my-4 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "flex flex-wrap w-full my-2 text-justify",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full font-semibold cursor-pointer w-fulltext-lg md:w-1/3 hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 6
    }
  }, "Fan art"), __jsx("div", {
    className: "w-full md:w-2/3 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 6
    }
  }, "Fan art for The Teachers' Lounge podcast made using Adobe Photoshop.")), __jsx("div", {
    className: "flex justify-center w-full h-auto mt-2 cursor-pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/teachers-faces-thumb.jpg",
    alt: "Teachers' Lounge fan art",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 6
    }
  }))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "w-full mt-8 text-xl text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 4
    }
  }, "One-day projects"), __jsx("div", {
    className: "flex flex-wrap items-stretch my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "w-full text-justify md:w-2/3 md:pr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui/#/calculator",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, "TI-108 Calculator", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 8
    }
  }))), "Calculator based on Texas Instruments TI-108. Made using only CSS and JavaScript."), __jsx("div", {
    className: "flex justify-center w-full h-auto md:w-1/3 md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/screen-calc-thumb.png",
    alt: "TI-108 Calculator screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 6
    }
  }))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "flex flex-wrap items-stretch w-1/2 my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full mb-4 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui01/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 8
    }
  }, "Newsletter", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  })))), __jsx("div", {
    className: "flex justify-center w-full h-auto md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/screen-newsletter-thumb.png",
    alt: "Newsletter screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }))), __jsx("div", {
    className: "flex flex-wrap items-stretch w-1/2 my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full mb-4 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui03/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 8
    }
  }, "Landing page", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  })))), __jsx("div", {
    className: "flex justify-center w-full h-auto md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/screen-landing.png",
    alt: "Landing page screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  })))));
};
_c = Projects;

var _c;

$RefreshReg$(_c, "Projects");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/***/ }),

/***/ "./components/Skills.tsx":
/*!*******************************!*\
  !*** ./components/Skills.tsx ***!
  \*******************************/
/*! exports provided: Skills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skills", function() { return Skills; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons */ "./components/Icons.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Marten\\Documents\\Web\\p\\components\\Skills.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Skills = function Skills() {
  return __jsx("div", {
    className: "flex flex-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "w-full text-xl text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }
  }, "Skills"), __jsx("div", {
    className: "mx-6 mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "inline-block w-1/2 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 6
    }
  }, "React/JavaScript"), __jsx("div", {
    className: "inline-block w-1/2 text-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }
  }, Object(_Icons__WEBPACK_IMPORTED_MODULE_1__["Gem"])('green', 4)), __jsx("div", {
    className: "inline-block w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }
  }, "HTML/CSS"), __jsx("div", {
    className: "inline-block w-1/2 text-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, Object(_Icons__WEBPACK_IMPORTED_MODULE_1__["Gem"])('green', 4)), __jsx("div", {
    className: "inline-block w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 6
    }
  }, "Photoshop"), __jsx("div", {
    className: "inline-block w-1/2 text-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }, Object(_Icons__WEBPACK_IMPORTED_MODULE_1__["Gem"])('green', 3), Object(_Icons__WEBPACK_IMPORTED_MODULE_1__["Gem"])('gray', 1)), __jsx("div", {
    className: "inline-block w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 6
    }
  }, "Angular & Vue"), __jsx("div", {
    className: "inline-block w-1/2 text-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 6
    }
  }, Object(_Icons__WEBPACK_IMPORTED_MODULE_1__["Gem"])('green', 2), Object(_Icons__WEBPACK_IMPORTED_MODULE_1__["Gem"])('gray', 2)), __jsx("div", {
    className: "inline-block w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 6
    }
  }, "AWS & PHP"), __jsx("div", {
    className: "inline-block w-1/2 text-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 6
    }
  }, Object(_Icons__WEBPACK_IMPORTED_MODULE_1__["Gem"])('green', 1), Object(_Icons__WEBPACK_IMPORTED_MODULE_1__["Gem"])('gray', 3))), __jsx("div", {
    className: "w-full mt-2 text-xl text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }
  }, "Languages"), __jsx("div", {
    className: "flex flex-wrap w-full mx-6 mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "inline-block w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 6
    }
  }, "English/Swedish"), __jsx("div", {
    className: "inline-block w-1/2 text-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }
  }, Object(_Icons__WEBPACK_IMPORTED_MODULE_1__["Gem"])('green', 4)), __jsx("div", {
    className: "inline-block w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }, "Korean"), __jsx("div", {
    className: "inline-block w-1/2 text-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }, Object(_Icons__WEBPACK_IMPORTED_MODULE_1__["Gem"])('green', 3), Object(_Icons__WEBPACK_IMPORTED_MODULE_1__["Gem"])('gray', 1))));
};
_c = Skills;

var _c;

$RefreshReg$(_c, "Skills");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CMarten%5CDocuments%5CWeb%5Cp%5Cpages%5Cindex.tsx!./":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CMarten%5CDocuments%5CWeb%5Cp%5Cpages%5Cindex.tsx ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = _react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = _react["default"].createContext(null);

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return _react["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = (0, _sideEffect["default"])();
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/

function Head(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_ampContext.AmpStateContext.Consumer, null, function (ampState) {
    return /*#__PURE__*/_react["default"].createElement(_headManagerContext.HeadManagerContext.Consumer, null, function (updateHead) {
      return /*#__PURE__*/_react["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: (0, _amp.isInAmpMode)(ampState)
      }, children);
    });
  });
}

_c = Head;
Head.rewind = Effect.rewind;
var _default = Head;
exports["default"] = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = function _default() {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react$Component) {
    _inherits(_class, _react$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances["delete"](this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(_react.Component);
};

exports["default"] = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5030f387d328e4415785 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Skills */ "./components/Skills.tsx");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact.tsx");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Projects */ "./components/Projects.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Marten\\Documents\\Web\\p\\pages\\index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 2
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, "M\xE5rten Frisk's portfolio"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/svg+xml",
    href: "/favicon.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "absolute top-0 left-auto z-20 flex items-center justify-center w-screen h-screen text-blue-700 underline bg-white bg-opacity-75 border-b-2 border-gray-700 cursor-pointer blurry",
    onClick: function onClick() {
      return window.location.assign('https://martenfrisk.github.io/');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "w-auto px-10 text-2xl text-center md:text-6xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 6
    }
  }, "This page has moved to ", __jsx("a", {
    href: "https://martenfrisk.github.io/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 30
    }
  }, "martenfrisk.github.io"), "."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 6
    }
  }, "Click anywhere to go there."))), __jsx("div", {
    className: "my-4 md:mb-20 text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }
  }, "M\xE5rten Frisk"), __jsx("div", {
    className: "container pt-48 mx-auto md:pt-64",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "flex flex-wrap items-center justify-center w-4/5 px-4 py-4 mx-auto my-4 bg-white shadow-lg lg:w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_3__["Contact"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 6
    }
  })), __jsx("div", {
    className: "w-4/5 px-4 py-4 mx-auto my-4 bg-white shadow-lg lg:w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(_components_Skills__WEBPACK_IMPORTED_MODULE_2__["Skills"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 6
    }
  })), __jsx("div", {
    className: "w-4/5 px-4 py-4 mx-auto my-4 bg-white shadow-lg lg:w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_4__["Projects"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }
  })))));
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/***/ }),

/***/ 1:
/*!********************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5CMarten%5CDocuments%5CWeb%5Cp%5Cpages%5Cindex.tsx ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5CMarten%5CDocuments%5CWeb%5Cp%5Cpages%5Cindex.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CMarten%5CDocuments%5CWeb%5Cp%5Cpages%5Cindex.tsx!./");


/***/ }),

/***/ "dll-reference dll_5030f387d328e4415785":
/*!*******************************************!*\
  !*** external "dll_5030f387d328e4415785" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5030f387d328e4415785;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhY3QudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSWNvbnMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvamVjdHMudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2tpbGxzLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvYW1wLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9hbXAudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvc2lkZS1lZmZlY3QudHN4Iiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1XCIiXSwibmFtZXMiOlsiQ29udGFjdCIsIkdlbVNpemUiLCJTb2NpYWxJY29ucyIsIkdlbSIsImNvbG9yIiwicmVwZWF0IiwiQXJyYXkiLCJtYXAiLCJlIiwiaSIsIkdtYWlsIiwiR2l0aHViIiwiUGluIiwiTGlua2VkaW4iLCJFeHRMaW5rIiwiUHJvamVjdHMiLCJTa2lsbHMiLCJBbXBTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImFtcEZpcnN0IiwiaHlicmlkIiwiaGFzUXVlcnkiLCJpc0luQW1wTW9kZSIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsImluQW1wTW9kZSIsImhlYWQiLCJjaGlsZCIsImxpc3QiLCJmcmFnbWVudExpc3QiLCJNRVRBVFlQRVMiLCJrZXlzIiwidGFncyIsIm1ldGFUeXBlcyIsIm1ldGFDYXRlZ29yaWVzIiwiaCIsInVuaXF1ZSIsImtleSIsImxlbiIsIm1ldGF0eXBlIiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwiaGVhZEVsZW1lbnRzIiwiaGVhZEVsZW1lbnRDaGlsZHJlbiIsImhlYWRFbGVtZW50IiwiZGVmYXVsdEhlYWQiLCJwcm9wcyIsImMiLCJFZmZlY3QiLCJhbXBTdGF0ZSIsInVwZGF0ZUhlYWQiLCJIZWFkIiwiaXNTZXJ2ZXIiLCJtb3VudGVkSW5zdGFuY2VzIiwic3RhdGUiLCJjb21wb25lbnQiLCJyZWNvcmRlZFN0YXRlIiwiY29uc3RydWN0b3IiLCJlbWl0Q2hhbmdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsIkNvbXBvbmVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDNUIsU0FDQyxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtRUFERCxFQUVDO0FBQUssYUFBUyxFQUFDLG1FQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRkQsQ0FGRCxFQU1DO0FBQUssYUFBUyxFQUFDLG9FQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDO0FBQUcsUUFBSSxFQUFDLGdDQUFSO0FBQXlDLFVBQU0sRUFBQyxRQUFoRDtBQUF5RCxPQUFHLEVBQUMscUJBQTdEO0FBQW1GLGFBQVMsRUFBQywwQkFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQUpELEVBT0M7QUFBSyxhQUFTLEVBQUMsMERBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBUEQsQ0FiRCxDQU5ELENBRGM7QUFBQSxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBLDBDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgR21haWwsIEdpdGh1YiwgUGluLCBMaW5rZWRpbiB9IGZyb20gJy4vSWNvbnMnXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBteS00IHRleHQtY2VudGVyXCI+RnVsbC1zdGFjayBXZWIgRGV2ZWxvcG1lbnQgc3R1ZGVudCBhdCBDaGFzIEFjYWRlbXkgMjAxOS0yMS48L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBpbmxpbmUgdy1mdWxsIG10LTMgbWItMiBtZDp3LTEvMlwiPlxyXG5cdFx0XHRcdDxHbWFpbCAvPlxyXG5cdFx0XHRcdDxkaXY+bWFydGVuLmZyaXNrQGdtYWlsLmNvbTwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBpbmxpbmUtYmxvY2sgdy1mdWxsIG15LTIgbWQ6dy0xLzJcIj5cclxuXHRcdFx0XHQ8R2l0aHViIC8+XHJcblx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tYXJ0ZW5mcmlza1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJib3JkZXItYi0yIGJvcmRlci1kYXNoZWRcIj5cclxuXHRcdFx0XHRcdG1hcnRlbmZyaXNrXHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBpbmxpbmUtYmxvY2sgdy1mdWxsIG15LTIgbWQ6dy0xLzJcIj5cclxuXHRcdFx0XHQ8UGluIC8+XHJcblx0XHRcdFx0PGRpdj5TdG9ja2hvbG0sIFN3ZWRlbjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBpbmxpbmUtYmxvY2sgdy1mdWxsIG15LTIgbWQ6dy0xLzJcIj5cclxuXHRcdFx0XHQ8TGlua2VkaW4gLz5cclxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vbWFydGVuZnJpc2svXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cImJvcmRlci1iLTIgYm9yZGVyLWRhc2hlZFwiPlxyXG5cdFx0XHRcdFx0L2luL21hcnRlbmZyaXNrXHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEdlbVNpemUgPSBgaC00IHctNCBpbmxpbmUtYmxvY2tgXHJcbmNvbnN0IFNvY2lhbEljb25zID0gYGgtNSB3LTUgbXItMiBpbmxpbmUtYmxvY2tgXHJcblxyXG4vLyBBbGwgaWNvbnMgZnJvbSBmbGF0aWNvbi5jb21cclxuZXhwb3J0IGNvbnN0IEdlbSA9IChjb2xvcjogc3RyaW5nLCByZXBlYXQ6IG51bWJlcikgPT4ge1xyXG5cdGlmIChjb2xvciA9PT0gJ2dyYXknKSB7XHJcblx0cmV0dXJuIChcdFsuLi5BcnJheShyZXBlYXQpXS5tYXAoKGUsIGkpID0+XHJcblx0PGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17R2VtU2l6ZX0gPlxyXG5cclxuXHQ8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj5cclxuICA8cGF0aCBmaWxsPVwiI2FlYWVhZVwiIGQ9XCJNODkuNCA0MTVWOTdMMjU2IDBsMTY2LjYgOTd2MzE4TDI1NiA1MTJ6XCIgLz5cclxuICA8cGF0aCBmaWxsPVwiIzk4OTg5OFwiIGQ9XCJNMjU2IDBsMTY2LjYgOTd2MzE4TDI1NiA1MTJ6XCIgLz5cclxuICA8cGF0aCBmaWxsPVwiI2M1YzVjNVwiIGQ9XCJNMjU2IDE5Mi43TDg5LjQgOTcgMjU2IDB6TTI1NiAzMTkuM0w4OS40IDQxNSAyNTYgNTEyelwiIC8+XHJcbiAgICA8cGF0aCBmaWxsPVwiI2FlYWVhZVwiIGQ9XCJNMjU2IDE5Mi43TDQyMi42IDk3IDI1NiAwek0yNTYgMzE5LjNMNDIyLjYgNDE1IDI1NiA1MTJ6XCIgLz5cclxuICA8cGF0aCBmaWxsPVwiI2UzZTllZFwiIGQ9XCJNMjU2IDQxOC43bDg2LTUwVjE0My4zbC04Ni01MC04NiA1MHYyMjUuNHpcIiAvPlxyXG4gIDxwYXRoIGZpbGw9XCIjYzVjNWM1XCIgZD1cIk0yNTYgOTMuM3YzMjUuNGw4Ni01MFYxNDMuM3pcIiAvPlxyXG48L3N2Zz5cclxuXHQ8L2Rpdj5cclxuXHRcdCkpXHJcblx0fSBlbHNlIGlmIChjb2xvciA9PT0gJ2dyZWVuJykge1xyXG5cdHJldHVybiAoXHRbLi4uQXJyYXkocmVwZWF0KV0ubWFwKChlLCBpKSA9PlxyXG5cdDxkaXYga2V5PXtpfSBjbGFzc05hbWU9e0dlbVNpemV9ICAgPlxyXG5cclxuPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+XHJcbiAgPGRlZnMvPlxyXG4gIDxwYXRoIGZpbGw9XCIjNjJiNDAwXCIgZD1cIk04OS40IDQxNVY5N0wyNTYgMGwxNjYuNiA5N3YzMThMMjU2IDUxMnpcIi8+XHJcbiAgPHBhdGggZmlsbD1cIiM0YzhjMDBcIiBkPVwiTTI1NiAwbDE2Ni42IDk3djMxOEwyNTYgNTEyelwiLz5cclxuICA8cGF0aCBmaWxsPVwiIzkyZTIwMFwiIGQ9XCJNMjU2IDE5Mi43TDg5LjQgOTcgMjU2IDB6TTI1NiAzMTkuM0w4OS40IDQxNSAyNTYgNTEyelwiLz5cclxuICA8ZyBmaWxsPVwiIzYyYjQwMFwiPlxyXG4gICAgPHBhdGggZD1cIk0yNTYgMTkyLjdMNDIyLjYgOTcgMjU2IDB6TTI1NiAzMTkuM0w0MjIuNiA0MTUgMjU2IDUxMnpcIi8+XHJcbiAgPC9nPlxyXG4gIDxwYXRoIGZpbGw9XCIjYzZlYTRiXCIgZD1cIk0yNTYgNDE4LjdsODYtNTBWMTQzLjNsLTg2LTUwLTg2IDUwdjIyNS40elwiLz5cclxuICA8cGF0aCBmaWxsPVwiIzkyZTIwMFwiIGQ9XCJNMjU2IDkzLjN2MzI1LjRsODYtNTBWMTQzLjN6XCIvPlxyXG48L3N2Zz5cclxuPC9kaXY+XHJcblx0XHQpXHQpIFxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdtYWlsID0gKCkgPT4ge1xyXG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e1NvY2lhbEljb25zfT5cclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPlxyXG4gIDxkZWZzLz5cclxuICA8cGF0aCBmaWxsPVwiI2VjZWZmMVwiIGQ9XCJNNjQgNjRoMzg0djM4NEg2NHpcIi8+XHJcbiAgPHBhdGggZmlsbD1cIiNjZmQ4ZGNcIiBkPVwiTTI1NiAyOTYuNEw0NDggNDQ4VjE0OC43elwiLz5cclxuICA8cGF0aCBmaWxsPVwiI2Y0NDMzNlwiIGQ9XCJNNDY0IDY0aC0xNkwyNTYgMjE1LjYgNjQgNjRINDhhNDggNDggMCAwMC00OCA0OHYyODhhNDggNDggMCAwMDQ4IDQ4aDE2VjE0OC43bDE5MiAxNDcuNyAxOTItMTQ3LjhWNDQ4aDE2YTQ4IDQ4IDAgMDA0OC00OFYxMTJhNDggNDggMCAwMC00OC00OHpcIi8+XHJcbjwvc3ZnPjwvZGl2PilcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdpdGh1YiA9ICgpID0+IHtcclxuICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtTb2NpYWxJY29uc30+XHJcbiAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTExLjEgNTExLjFcIj5cclxuICA8ZGVmcy8+XHJcbiAgPHBhdGggZmlsbD1cIiM0NTVhNjRcIiBkPVwiTTI1NS41IDIuNUEyNTYgMjU2IDAgMDAyMDAgNTA4LjNhMTAuNyAxMC43IDAgMDAxMy0xMC40di01OGMwLTYtNC44LTEwLjctMTAuNy0xMC43aC0yMS40Yy0yNi42IDAtNDQuOC0yNS4yLTYwLjctNDcuNWwtNC45LTYuOGM3LjIgNCAxNCA4LjYgMjAuNSAxMy42IDEyIDExLjIgMjcuNSAxOCA0My44IDE5LjJhMjkuNCAyOS40IDAgMDAzMy4zLTMxLjh2LTcuNWMwLTQuOC0zLjEtOS03LjctMTAuMi01OS4yLTE2LjgtOTktNjEuMS05OS0xMTAuMy41LTI2LjcgMTEuNC01MiAzMC41LTcwLjcgMy0zLjEgMy45LTcuOSAyLTExLjlhNTkuNyA1OS43IDAgMDEzLjEtNTQuNCAxMDUgMTA1IDAgMDEzOS4xIDI3LjVjMyAzLjQgNy43IDQuNyAxMS45IDMuMiA0MC42LTE0LjcgODUtMTQuNyAxMjUuNyAwIDQuMiAxLjUgOC45LjIgMTEuOC0zLjJhMTA1IDEwNSAwIDAxMzktMjcuNSA1OS43IDU5LjcgMCAwMTMuMiA1NC40Yy0xLjkgNC0xIDguNyAyIDExLjkgMTkgMTguNiAzMCA0NCAzMC40IDcwLjcgMCA1MS42LTQ0LjEgOTcuOS0xMDcuMyAxMTIuNWExMC43IDEwLjcgMCAwMC03IDE1LjNjNiAxMy41IDguNiAyOC4yIDcuNyA0Mi44VjQ5OGExMC43IDEwLjcgMCAwMDEzIDEwLjRBMjU2IDI1NiAwIDAwMjU1LjQgMi41elwiLz5cclxuPC9zdmc+XHJcbiAgPC9kaXY+KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUGluID0gKCkgPT4ge1xyXG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWU9e1NvY2lhbEljb25zfT5cclxuICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPlxyXG4gIDxkZWZzLz5cclxuICA8cGF0aCBmaWxsPVwiI2ZiNTI1MlwiIGQ9XCJNMjU2IDBDMTUwLjEgMCA2NCA4Ni4xIDY0IDE5MmMwIDEzMyAxNzMuMyAzMDggMTgwLjcgMzE1LjNhMTYgMTYgMCAwMDIyLjYgMEMyNzQuNyA1MDAgNDQ4IDMyNS4xIDQ0OCAxOTIgNDQ4IDg2LjEgMzYxLjkgMCAyNTYgMHpcIiAvPlxyXG4gIDxjaXJjbGUgY3g9XCIyNTZcIiBjeT1cIjE5MlwiIHI9XCI5NlwiIGZpbGw9XCIjZmZmXCIgLz5cclxuPC9zdmc+XHJcbiAgPC9kaXY+KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTGlua2VkaW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17U29jaWFsSWNvbnN9PlxyXG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+XHJcbiAgPGRlZnMvPlxyXG4gIDxnIGZpbGw9XCIjMjE5NmYzXCI+XHJcbiAgICA8Y2lyY2xlIGN4PVwiNjRcIiBjeT1cIjY0XCIgcj1cIjY0XCIvPlxyXG4gICAgPHBhdGggZD1cIk0xMC43IDE3MC43aDEwNi42YzYgMCAxMC43IDQuNyAxMC43IDEwLjZ2MzIwYzAgNi00LjggMTAuNy0xMC43IDEwLjdIMTAuN2MtNiAwLTEwLjctNC44LTEwLjctMTAuN3YtMzIwYzAtNS45IDQuOC0xMC42IDEwLjctMTAuNnpNNDM1LjIgMTU2Yy00Ni43LTEzLjMtOTctNS0xMzYuOCAyMi43LTEuMi00LjctNS41LTgtMTAuNC04SDE4MS4zYy01LjkgMC0xMC42IDQuNy0xMC42IDEwLjZ2MzIwYzAgNiA0LjcgMTAuNyAxMC42IDEwLjdIMjg4YzUuOSAwIDEwLjctNC44IDEwLjctMTAuN3YtMjMwYTU2IDU2IDAgMDE1Ny42LTExLjggNTAuMiA1MC4yIDAgMDEyNy43IDQ5Ljh2MTkyYzAgNiA0LjggMTAuNyAxMC43IDEwLjdoMTA2LjZjNiAwIDEwLjctNC44IDEwLjctMTAuN1YyODhjLTEuMi04Ny43LTQyLjUtMTIwLjItNzYuOC0xMzJ6XCIvPlxyXG4gIDwvZz5cclxuPC9zdmc+XHJcbiAgPC9kaXY+KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRXh0TGluayA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQgaC00IG1sLTEgYWxpZ24tYmFzZWxpbmUgaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgPGRlZnMvPlxyXG4gIDxwYXRoIGQ9XCJNMjAgMTJoLTFhLjUuNSAwIDAwLS40LjV2Nkg1LjV2LTEzaDZBLjUuNSAwIDAwMTIgNXYtLjlhLjUuNSAwIDAwLS41LS41aC02YTIgMiAwIDAwLTIgMS45djEzYTIgMiAwIDAwMiAyaDEzYTIgMiAwIDAwMi0ydi02YS41LjUgMCAwMC0uNi0uNXpcIi8+XHJcbiAgPHBhdGggZD1cIk0xNi40IDYuMmwtNS4yIDUuMmEuNS41IDAgMDAwIC43bC43LjhhLjUuNSAwIDAwLjcgMGw1LjMtNS4zIDEuOCAxLjhhLjQuNCAwIDAwLjctLjJWNGEuNC40IDAgMDAtLjQtLjRoLTUuMmEuNC40IDAgMDAtLjIuN3pcIi8+XHJcbjwvc3ZnPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBFeHRMaW5rIH0gZnJvbSAnLi9JY29ucydcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC14bCB0ZXh0LWNlbnRlclwiPlByb2plY3RzPC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2ggbXktNCBqdXN0aWZ5LWV2ZW5seVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtanVzdGlmeSBtZDp3LTIvMyBtZDpwci00XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmVcIj5cclxuXHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vc2Vla2Vyc2xvdW5nZS9cIlxyXG5cdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXHJcblx0XHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRTZWVrZXJzJyBMb3VuZ2U8RXh0TGluayAvPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdEluc3RhbnQgc2VhcmNoIGVuZ2luZSB3aXRoIDQ1aysgbGluZXMgZnJvbSB0aGUgXCJUZWFjaGVycydzIExvdW5nZVwiIHBvZGNhc3QuIFBvd2VyZWQgYnkgQVdTXHJcblx0XHRcdFx0XHRFbGFzdGljU2VhcmNoIGFuZCBidWlsdCB3aXRoIFJlYWN0LlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzZWxmLWVuZCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1hdXRvIG1kOnctMS8zIG1kOmp1c3RpZnktZW5kXCI+XHJcblx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdHNyYz1cIi9zY3JlZW4tdGVhY2hlci10aHVtYi5wbmdcIiBcclxuXHRcdFx0XHRcdFx0YWx0PVwiU2Vla2VycycgTG91bmdlIHNjcmVlbnNob3RcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIG10LTIgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbWQgc2hhZG93LWxnIG1kOnNlbGYtZW5kIG1kOm10LTBcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxociAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2ggbXktNCBqdXN0aWZ5LWV2ZW5seVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtanVzdGlmeSBtZDp3LTIvMyBtZDpwci00XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmVcIj5cclxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL2RoYW1tYXBhZGEvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdERoYW1tYXBhZGEgUmVhZGVyXHJcblx0XHRcdFx0XHRcdFx0PEV4dExpbmsgLz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRMaWdodHdlaWdodCBhbmQgZGlzdHJhY3Rpb24tZnJlZSBzaXRlIGZvciByZWFkaW5nIHRoZSBEaGFtbWFwYWRhLiBCdWlsdCB3aXRoIFJlYWN0LlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1hdXRvIG1kOnctMS8zIG1kOmp1c3RpZnktZW5kXCI+XHJcblx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdHNyYz1cIi9zY3JlZW4tZGhhbW1hLXRodW1iLnBuZ1wiXHJcblx0XHRcdFx0XHRcdGFsdD1cIkRoYW1tYXBhZGEgUmVhZGVyIHNjcmVlbnNob3RcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIG10LTIgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbWQgc2hhZG93LWxnIG1kOnNlbGYtZW5kIG1kOm10LTBcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8aHIgLz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCBteS02IGp1c3RpZnktZXZlbmx5XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCB3LWZ1bGwgdGV4dC1qdXN0aWZ5XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgbWQ6dy0xLzMgaG92ZXI6dW5kZXJsaW5lXCI+XHJcblx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL0Zvb3RiYWxsTGluZXMvXCJcclxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxyXG5cdFx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0Rm9vdGJhbGwgTGluZXM8RXh0TGluayAvPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMi8zIFwiPlxyXG5cdFx0XHRcdFx0XHRWaWV3IGhpc3RvcmljYWwgdGFibGUgcGxhY2VtZW50cyBvZiBTd2VkaXNoIGZvb3RiYWxsIHRlYW1zLiBCdWlsdCB3aXRoIFJlYWN0LlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gbXQtMiBjdXJzb3ItcG9pbnRlclwiPlxyXG5cdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRzcmM9XCIvc2NyZWVuLWZvb3RiYWxsLXRodW1iLnBuZ1wiXHJcblx0XHRcdFx0XHRcdGFsdD1cIkZvb3RiYWxsIExpbmVzIHNjcmVlbnNob3RcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIG10LTIgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbWQgc2hhZG93LWxnIG1kOnNlbGYtZW5kIG1kOm10LTBcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxociAvPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoIG15LTYganVzdGlmeS1ldmVubHlcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWp1c3RpZnkgbWQ6dy0yLzMgbWQ6cHItNFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dW5kZXJsaW5lXCI+XHJcblx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL0tvcmVhbkR5bmFzdHlHZW5lcmF0b3IvXCJcclxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxyXG5cdFx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0S29yZWFuIER5bmFzdHkgR2VuZXJhdG9yXHJcblx0XHRcdFx0XHRcdFx0PEV4dExpbmsgLz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRHZW5lcmF0ZSBhIGZ1bGx5IHN0YWZmZWQsIHJhbmRvbWl6ZWQgbWVkaWV2YWwgS29yZWFuIGJ1cmVhdWNyYWN5LiBCdWlsdCB3aXRoIFJlYWN0LlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1hdXRvIG1kOnctMS8zIG1kOmp1c3RpZnktZW5kXCI+XHJcblx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdHNyYz1cIi9zY3JlZW4tZHluYXN0eS10aHVtYi5wbmdcIlxyXG5cdFx0XHRcdFx0XHRhbHQ9XCJLb3JlYW4gRHluYXN0eSBHZW5lcmF0b3Igc2NyZWVuc2hvdFwiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gbXQtMiBib3JkZXItMiBib3JkZXItZ3JheS00MDAgcm91bmRlZC1tZCBzaGFkb3ctbGcgbWQ6c2VsZi1lbmQgbWQ6bXQtMFwiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxociBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2ggbXktNCBqdXN0aWZ5LWV2ZW5seVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgdy1mdWxsIG15LTIgdGV4dC1qdXN0aWZ5XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIHctZnVsbHRleHQtbGcgbWQ6dy0xLzMgaG92ZXI6dW5kZXJsaW5lXCI+XHJcblx0XHRcdFx0XHRcdEZhbiBhcnRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0yLzMgXCI+XHJcblx0XHRcdFx0XHRcdEZhbiBhcnQgZm9yIFRoZSBUZWFjaGVycycgTG91bmdlIHBvZGNhc3QgbWFkZSB1c2luZyBBZG9iZSBQaG90b3Nob3AuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtYXV0byBtdC0yIGN1cnNvci1wb2ludGVyXCI+XHJcblx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdHNyYz1cIi90ZWFjaGVycy1mYWNlcy10aHVtYi5qcGdcIlxyXG5cdFx0XHRcdFx0XHRhbHQ9XCJUZWFjaGVycycgTG91bmdlIGZhbiBhcnRcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIG10LTIgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbWQgc2hhZG93LWxnIG1kOnNlbGYtZW5kIG1kOm10LTBcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8aHIgLz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG10LTggdGV4dC14bCB0ZXh0LWNlbnRlclwiPk9uZS1kYXkgcHJvamVjdHM8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoIG15LTYganVzdGlmeS1ldmVubHlcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWp1c3RpZnkgbWQ6dy0yLzMgbWQ6cHItNFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dW5kZXJsaW5lXCI+XHJcblx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL2RhaWx5dWkvIy9jYWxjdWxhdG9yXCJcclxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxyXG5cdFx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0VEktMTA4IENhbGN1bGF0b3JcclxuXHRcdFx0XHRcdFx0XHQ8RXh0TGluayAvPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdENhbGN1bGF0b3IgYmFzZWQgb24gVGV4YXMgSW5zdHJ1bWVudHMgVEktMTA4LiBNYWRlIHVzaW5nIG9ubHkgQ1NTIGFuZCBKYXZhU2NyaXB0LlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1hdXRvIG1kOnctMS8zIG1kOmp1c3RpZnktZW5kXCI+XHJcblx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdHNyYz1cIi9zY3JlZW4tY2FsYy10aHVtYi5wbmdcIlxyXG5cdFx0XHRcdFx0XHRhbHQ9XCJUSS0xMDggQ2FsY3VsYXRvciBzY3JlZW5zaG90XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBtdC0yIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLW1kIHNoYWRvdy1sZyBtZDpzZWxmLWVuZCBtZDptdC0wXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8aHIgLz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCB3LWZ1bGxcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2ggdy0xLzIgbXktNiBqdXN0aWZ5LWV2ZW5seVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItNCB0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL2RhaWx5dWkwMS9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcclxuXHRcdFx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdE5ld3NsZXR0ZXJcclxuXHRcdFx0XHRcdFx0XHRcdDxFeHRMaW5rIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gbWQ6anVzdGlmeS1lbmRcIj5cclxuXHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdHNyYz1cIi9zY3JlZW4tbmV3c2xldHRlci10aHVtYi5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIk5ld3NsZXR0ZXIgc2NyZWVuc2hvdFwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBtdC0yIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLW1kIHNoYWRvdy1sZyBtZDpzZWxmLWVuZCBtZDptdC0wXCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCB3LTEvMiBteS02IGp1c3RpZnktZXZlbmx5XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYi00IHRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIGhvdmVyOnVuZGVybGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vZGFpbHl1aTAzL1wiXHJcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxyXG5cdFx0XHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0TGFuZGluZyBwYWdlXHJcblx0XHRcdFx0XHRcdFx0XHQ8RXh0TGluayAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1hdXRvIG1kOmp1c3RpZnktZW5kXCI+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCIvc2NyZWVuLWxhbmRpbmcucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRhbHQ9XCJMYW5kaW5nIHBhZ2Ugc2NyZWVuc2hvdFwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBtdC0yIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLW1kIHNoYWRvdy1sZyBtZDpzZWxmLWVuZCBtZDptdC0wXCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgR2VtIH0gZnJvbSAnLi9JY29ucydcclxuXHJcbmV4cG9ydCBjb25zdCBTa2lsbHMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC14bCB0ZXh0LWNlbnRlclwiPlNraWxsczwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm14LTYgbXQtMlwiPlxyXG5cdFx0XHQgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctMS8yIFwiPlJlYWN0L0phdmFTY3JpcHQ8L2Rpdj5cclxuICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LTEvMiB0ZXh0LXJpZ2h0XCI+e0dlbSgnZ3JlZW4nLCA0KX08L2Rpdj5cclxuICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LTEvMlwiPkhUTUwvQ1NTPC9kaXY+XHJcbiAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy0xLzIgdGV4dC1yaWdodFwiPntHZW0oJ2dyZWVuJywgNCl9PC9kaXY+XHJcbiAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy0xLzJcIj5QaG90b3Nob3A8L2Rpdj5cclxuICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LTEvMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgXHRcdFx0XHR7R2VtKCdncmVlbicsIDMpfVxyXG4gIFx0XHRcdFx0e0dlbSgnZ3JheScsIDEpfVxyXG4gIFx0XHRcdDwvZGl2PlxyXG4gIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctMS8yXCI+QW5ndWxhciAmIFZ1ZTwvZGl2PlxyXG4gIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctMS8yIHRleHQtcmlnaHRcIj5cclxuICBcdFx0XHRcdHtHZW0oJ2dyZWVuJywgMil9XHJcbiAgXHRcdFx0XHR7R2VtKCdncmF5JywgMil9XHJcbiAgXHRcdFx0PC9kaXY+XHJcbiAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy0xLzJcIj5BV1MgJiBQSFA8L2Rpdj5cclxuICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LTEvMiB0ZXh0LXJpZ2h0XCI+XHJcbiAgXHRcdFx0XHR7R2VtKCdncmVlbicsIDEpfVxyXG4gIFx0XHRcdFx0e0dlbSgnZ3JheScsIDMpfVxyXG4gIFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMiB0ZXh0LXhsIHRleHQtY2VudGVyXCI+TGFuZ3VhZ2VzPC9kaXY+XHJcblxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCB3LWZ1bGwgbXgtNiBtdC0yXCI+XHJcblx0XHQgIFx0PGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy0xLzJcIj5FbmdsaXNoL1N3ZWRpc2g8L2Rpdj5cclxuICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LTEvMiB0ZXh0LXJpZ2h0XCI+e0dlbSgnZ3JlZW4nLCA0KX08L2Rpdj5cclxuICBcclxuICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LTEvMlwiPktvcmVhbjwvZGl2PlxyXG4gIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctMS8yIHRleHQtcmlnaHRcIj5cclxuICBcdFx0XHRcdHtHZW0oJ2dyZWVuJywgMyl9XHJcbiAgXHRcdFx0XHR7R2VtKCdncmF5JywgMSl9XHJcbiAgXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXE1hcnRlblxcXFxEb2N1bWVudHNcXFxcV2ViXFxcXHBcXFxccGFnZXNcXFxcaW5kZXgudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBBbXBTdGF0ZUNvbnRleHQ6IFJlYWN0LkNvbnRleHQ8YW55PiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEFtcFN0YXRlQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdBbXBTdGF0ZUNvbnRleHQnXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBbXBTdGF0ZUNvbnRleHQgfSBmcm9tICcuL2FtcC1jb250ZXh0J1xuXG5leHBvcnQgZnVuY3Rpb24gaXNJbkFtcE1vZGUoe1xuICBhbXBGaXJzdCA9IGZhbHNlLFxuICBoeWJyaWQgPSBmYWxzZSxcbiAgaGFzUXVlcnkgPSBmYWxzZSxcbn0gPSB7fSk6IGJvb2xlYW4ge1xuICByZXR1cm4gYW1wRmlyc3QgfHwgKGh5YnJpZCAmJiBoYXNRdWVyeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFtcCgpOiBib29sZWFuIHtcbiAgLy8gRG9uJ3QgYXNzaWduIHRoZSBjb250ZXh0IHZhbHVlIHRvIGEgdmFyaWFibGUgdG8gc2F2ZSBieXRlc1xuICByZXR1cm4gaXNJbkFtcE1vZGUoUmVhY3QudXNlQ29udGV4dChBbXBTdGF0ZUNvbnRleHQpKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgSGVhZE1hbmFnZXJDb250ZXh0OiBSZWFjdC5Db250ZXh0PGFueT4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEhlYWRNYW5hZ2VyQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdIZWFkTWFuYWdlckNvbnRleHQnXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgd2l0aFNpZGVFZmZlY3QgZnJvbSAnLi9zaWRlLWVmZmVjdCdcbmltcG9ydCB7IEFtcFN0YXRlQ29udGV4dCB9IGZyb20gJy4vYW1wLWNvbnRleHQnXG5pbXBvcnQgeyBIZWFkTWFuYWdlckNvbnRleHQgfSBmcm9tICcuL2hlYWQtbWFuYWdlci1jb250ZXh0J1xuaW1wb3J0IHsgaXNJbkFtcE1vZGUgfSBmcm9tICcuL2FtcCdcblxudHlwZSBXaXRoSW5BbXBNb2RlID0ge1xuICBpbkFtcE1vZGU/OiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0SGVhZChpbkFtcE1vZGUgPSBmYWxzZSk6IEpTWC5FbGVtZW50W10ge1xuICBjb25zdCBoZWFkID0gWzxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XVxuICBpZiAoIWluQW1wTW9kZSkge1xuICAgIGhlYWQucHVzaCg8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz4pXG4gIH1cbiAgcmV0dXJuIGhlYWRcbn1cblxuZnVuY3Rpb24gb25seVJlYWN0RWxlbWVudChcbiAgbGlzdDogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICBjaGlsZDogUmVhY3QuUmVhY3RDaGlsZFxuKTogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+IHtcbiAgLy8gUmVhY3QgY2hpbGRyZW4gY2FuIGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIiBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIHRoZW0gZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBsaXN0XG4gIH1cbiAgLy8gQWRkcyBzdXBwb3J0IGZvciBSZWFjdC5GcmFnbWVudFxuICBpZiAoY2hpbGQudHlwZSA9PT0gUmVhY3QuRnJhZ21lbnQpIHtcbiAgICByZXR1cm4gbGlzdC5jb25jYXQoXG4gICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkLnByb3BzLmNoaWxkcmVuKS5yZWR1Y2UoXG4gICAgICAgIChcbiAgICAgICAgICBmcmFnbWVudExpc3Q6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgICAgICAgICBmcmFnbWVudENoaWxkOiBSZWFjdC5SZWFjdENoaWxkXG4gICAgICAgICk6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PiA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgICB0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ251bWJlcidcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBmcmFnbWVudExpc3RcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdC5jb25jYXQoZnJhZ21lbnRDaGlsZClcbiAgICAgICAgfSxcbiAgICAgICAgW11cbiAgICAgIClcbiAgICApXG4gIH1cbiAgcmV0dXJuIGxpc3QuY29uY2F0KGNoaWxkKVxufVxuXG5jb25zdCBNRVRBVFlQRVMgPSBbJ25hbWUnLCAnaHR0cEVxdWl2JywgJ2NoYXJTZXQnLCAnaXRlbVByb3AnXVxuXG4vKlxuIHJldHVybnMgYSBmdW5jdGlvbiBmb3IgZmlsdGVyaW5nIGhlYWQgY2hpbGQgZWxlbWVudHNcbiB3aGljaCBzaG91bGRuJ3QgYmUgZHVwbGljYXRlZCwgbGlrZSA8dGl0bGUvPlxuIEFsc28gYWRkcyBzdXBwb3J0IGZvciBkZWR1cGxpY2F0ZWQgYGtleWAgcHJvcGVydGllc1xuKi9cbmZ1bmN0aW9uIHVuaXF1ZSgpIHtcbiAgY29uc3Qga2V5cyA9IG5ldyBTZXQoKVxuICBjb25zdCB0YWdzID0gbmV3IFNldCgpXG4gIGNvbnN0IG1ldGFUeXBlcyA9IG5ldyBTZXQoKVxuICBjb25zdCBtZXRhQ2F0ZWdvcmllczogeyBbbWV0YXR5cGU6IHN0cmluZ106IFNldDxzdHJpbmc+IH0gPSB7fVxuXG4gIHJldHVybiAoaDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pID0+IHtcbiAgICBsZXQgdW5pcXVlID0gdHJ1ZVxuXG4gICAgaWYgKGgua2V5ICYmIHR5cGVvZiBoLmtleSAhPT0gJ251bWJlcicgJiYgaC5rZXkuaW5kZXhPZignJCcpID4gMCkge1xuICAgICAgY29uc3Qga2V5ID0gaC5rZXkuc2xpY2UoaC5rZXkuaW5kZXhPZignJCcpICsgMSlcbiAgICAgIGlmIChrZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgIHVuaXF1ZSA9IGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXlzLmFkZChrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxuICAgIHN3aXRjaCAoaC50eXBlKSB7XG4gICAgICBjYXNlICd0aXRsZSc6XG4gICAgICBjYXNlICdiYXNlJzpcbiAgICAgICAgaWYgKHRhZ3MuaGFzKGgudHlwZSkpIHtcbiAgICAgICAgICB1bmlxdWUgPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhZ3MuYWRkKGgudHlwZSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbWV0YSc6XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBNRVRBVFlQRVMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBtZXRhdHlwZSA9IE1FVEFUWVBFU1tpXVxuICAgICAgICAgIGlmICghaC5wcm9wcy5oYXNPd25Qcm9wZXJ0eShtZXRhdHlwZSkpIGNvbnRpbnVlXG5cbiAgICAgICAgICBpZiAobWV0YXR5cGUgPT09ICdjaGFyU2V0Jykge1xuICAgICAgICAgICAgaWYgKG1ldGFUeXBlcy5oYXMobWV0YXR5cGUpKSB7XG4gICAgICAgICAgICAgIHVuaXF1ZSA9IGZhbHNlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtZXRhVHlwZXMuYWRkKG1ldGF0eXBlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGgucHJvcHNbbWV0YXR5cGVdXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gbWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdIHx8IG5ldyBTZXQoKVxuICAgICAgICAgICAgaWYgKGNhdGVnb3JpZXMuaGFzKGNhdGVnb3J5KSkge1xuICAgICAgICAgICAgICB1bmlxdWUgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2F0ZWdvcmllcy5hZGQoY2F0ZWdvcnkpXG4gICAgICAgICAgICAgIG1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXSA9IGNhdGVnb3JpZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pcXVlXG4gIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGhlYWRFbGVtZW50cyBMaXN0IG9mIG11bHRpcGxlIDxIZWFkPiBpbnN0YW5jZXNcbiAqL1xuZnVuY3Rpb24gcmVkdWNlQ29tcG9uZW50cyhcbiAgaGVhZEVsZW1lbnRzOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gIHByb3BzOiBXaXRoSW5BbXBNb2RlXG4pIHtcbiAgcmV0dXJuIGhlYWRFbGVtZW50c1xuICAgIC5yZWR1Y2UoXG4gICAgICAobGlzdDogUmVhY3QuUmVhY3RDaGlsZFtdLCBoZWFkRWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pID0+IHtcbiAgICAgICAgY29uc3QgaGVhZEVsZW1lbnRDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoXG4gICAgICAgICAgaGVhZEVsZW1lbnQucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gbGlzdC5jb25jYXQoaGVhZEVsZW1lbnRDaGlsZHJlbilcbiAgICAgIH0sXG4gICAgICBbXVxuICAgIClcbiAgICAucmVkdWNlKG9ubHlSZWFjdEVsZW1lbnQsIFtdKVxuICAgIC5yZXZlcnNlKClcbiAgICAuY29uY2F0KGRlZmF1bHRIZWFkKHByb3BzLmluQW1wTW9kZSkpXG4gICAgLmZpbHRlcih1bmlxdWUoKSlcbiAgICAucmV2ZXJzZSgpXG4gICAgLm1hcCgoYzogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4sIGk6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gYy5rZXkgfHwgaVxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjLCB7IGtleSB9KVxuICAgIH0pXG59XG5cbmNvbnN0IEVmZmVjdCA9IHdpdGhTaWRlRWZmZWN0KClcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpbmplY3RzIGVsZW1lbnRzIHRvIGA8aGVhZD5gIG9mIHlvdXIgcGFnZS5cbiAqIFRvIGF2b2lkIGR1cGxpY2F0ZWQgYHRhZ3NgIGluIGA8aGVhZD5gIHlvdSBjYW4gdXNlIHRoZSBga2V5YCBwcm9wZXJ0eSwgd2hpY2ggd2lsbCBtYWtlIHN1cmUgZXZlcnkgdGFnIGlzIG9ubHkgcmVuZGVyZWQgb25jZS5cbiAqL1xuZnVuY3Rpb24gSGVhZCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPEFtcFN0YXRlQ29udGV4dC5Db25zdW1lcj5cbiAgICAgIHsoYW1wU3RhdGUpID0+IChcbiAgICAgICAgPEhlYWRNYW5hZ2VyQ29udGV4dC5Db25zdW1lcj5cbiAgICAgICAgICB7KHVwZGF0ZUhlYWQpID0+IChcbiAgICAgICAgICAgIDxFZmZlY3RcbiAgICAgICAgICAgICAgcmVkdWNlQ29tcG9uZW50c1RvU3RhdGU9e3JlZHVjZUNvbXBvbmVudHN9XG4gICAgICAgICAgICAgIGhhbmRsZVN0YXRlQ2hhbmdlPXt1cGRhdGVIZWFkfVxuICAgICAgICAgICAgICBpbkFtcE1vZGU9e2lzSW5BbXBNb2RlKGFtcFN0YXRlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9FZmZlY3Q+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9IZWFkTWFuYWdlckNvbnRleHQuQ29uc3VtZXI+XG4gICAgICApfVxuICAgIDwvQW1wU3RhdGVDb250ZXh0LkNvbnN1bWVyPlxuICApXG59XG5cbkhlYWQucmV3aW5kID0gRWZmZWN0LnJld2luZFxuXG5leHBvcnQgZGVmYXVsdCBIZWFkXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcblxudHlwZSBTdGF0ZSA9IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PiB8IHVuZGVmaW5lZFxuXG50eXBlIFNpZGVFZmZlY3RQcm9wcyA9IHtcbiAgcmVkdWNlQ29tcG9uZW50c1RvU3RhdGU6IDxUPihcbiAgICBjb21wb25lbnRzOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gICAgcHJvcHM6IFRcbiAgKSA9PiBTdGF0ZVxuICBoYW5kbGVTdGF0ZUNoYW5nZT86IChzdGF0ZTogU3RhdGUpID0+IHZvaWRcbiAgaW5BbXBNb2RlPzogYm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IG1vdW50ZWRJbnN0YW5jZXM6IFNldDxhbnk+ID0gbmV3IFNldCgpXG4gIGxldCBzdGF0ZTogU3RhdGVcblxuICBmdW5jdGlvbiBlbWl0Q2hhbmdlKGNvbXBvbmVudDogUmVhY3QuQ29tcG9uZW50PFNpZGVFZmZlY3RQcm9wcz4pOiB2b2lkIHtcbiAgICBzdGF0ZSA9IGNvbXBvbmVudC5wcm9wcy5yZWR1Y2VDb21wb25lbnRzVG9TdGF0ZShcbiAgICAgIFsuLi5tb3VudGVkSW5zdGFuY2VzXSxcbiAgICAgIGNvbXBvbmVudC5wcm9wc1xuICAgIClcbiAgICBpZiAoY29tcG9uZW50LnByb3BzLmhhbmRsZVN0YXRlQ2hhbmdlKSB7XG4gICAgICBjb21wb25lbnQucHJvcHMuaGFuZGxlU3RhdGVDaGFuZ2Uoc3RhdGUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50PFNpZGVFZmZlY3RQcm9wcz4ge1xuICAgIC8vIFVzZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyaW5nXG4gICAgc3RhdGljIHJld2luZCgpIHtcbiAgICAgIGNvbnN0IHJlY29yZGVkU3RhdGUgPSBzdGF0ZVxuICAgICAgc3RhdGUgPSB1bmRlZmluZWRcbiAgICAgIG1vdW50ZWRJbnN0YW5jZXMuY2xlYXIoKVxuICAgICAgcmV0dXJuIHJlY29yZGVkU3RhdGVcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICBzdXBlcihwcm9wcylcbiAgICAgIGlmIChpc1NlcnZlcikge1xuICAgICAgICBtb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKVxuICAgICAgICBlbWl0Q2hhbmdlKHRoaXMpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgbW91bnRlZEluc3RhbmNlcy5hZGQodGhpcylcbiAgICAgIGVtaXRDaGFuZ2UodGhpcylcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgZW1pdENoYW5nZSh0aGlzKVxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIG1vdW50ZWRJbnN0YW5jZXMuZGVsZXRlKHRoaXMpXG4gICAgICBlbWl0Q2hhbmdlKHRoaXMpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1ICovIFwiZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODVcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgU2tpbGxzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Ta2lsbHMnXHJcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3QnXHJcbmltcG9ydCB7IFByb2plY3RzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9qZWN0cydcclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG5cdDxkaXY+XHJcblx0XHQ8SGVhZD5cclxuXHRcdFx0PHRpdGxlPk3DpXJ0ZW4gRnJpc2sncyBwb3J0Zm9saW88L3RpdGxlPlxyXG5cdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcblx0XHRcdDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2Uvc3ZnK3htbFwiIGhyZWY9XCIvZmF2aWNvbi5zdmdcIiAvPlxyXG5cdFx0PC9IZWFkPlxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtYXV0byB6LTIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctc2NyZWVuIGgtc2NyZWVuIHRleHQtYmx1ZS03MDAgdW5kZXJsaW5lIGJnLXdoaXRlIGJnLW9wYWNpdHktNzUgYm9yZGVyLWItMiBib3JkZXItZ3JheS03MDAgY3Vyc29yLXBvaW50ZXIgYmx1cnJ5XCJcclxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uYXNzaWduKCdodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby8nKX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIHB4LTEwIHRleHQtMnhsIHRleHQtY2VudGVyIG1kOnRleHQtNnhsXCI+XHJcblx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0VGhpcyBwYWdlIGhhcyBtb3ZlZCB0byA8YSBocmVmPVwiaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vXCI+bWFydGVuZnJpc2suZ2l0aHViLmlvPC9hPi5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdDxwPkNsaWNrIGFueXdoZXJlIHRvIGdvIHRoZXJlLjwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXktNCBtZDptYi0yMCB0ZXh0XCI+TcOlcnRlbiBGcmlzazwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwdC00OCBteC1hdXRvIG1kOnB0LTY0XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy00LzUgcHgtNCBweS00IG14LWF1dG8gbXktNCBiZy13aGl0ZSBzaGFkb3ctbGcgbGc6dy0xLzJcIj5cclxuXHRcdFx0XHRcdDxDb250YWN0IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTQvNSBweC00IHB5LTQgbXgtYXV0byBteS00IGJnLXdoaXRlIHNoYWRvdy1sZyBsZzp3LTEvMlwiPlxyXG5cdFx0XHRcdFx0PFNraWxscyAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy00LzUgcHgtNCBweS00IG14LWF1dG8gbXktNCBiZy13aGl0ZSBzaGFkb3ctbGcgbGc6dy0xLzJcIj5cclxuXHRcdFx0XHRcdDxQcm9qZWN0cyAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG4pXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1OyJdLCJzb3VyY2VSb290IjoiIn0=