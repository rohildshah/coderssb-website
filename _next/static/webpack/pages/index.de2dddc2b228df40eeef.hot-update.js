webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Website_Layout/Navbar.js":
/*!*********************************************!*\
  !*** ./components/Website_Layout/Navbar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return navbar; });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/navbar.css */ \"./css/navbar.css\");\n/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_navbar_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_Dropdown_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css/Dropdown.css */ \"./css/Dropdown.css\");\n/* harmony import */ var _css_Dropdown_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_Dropdown_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/rohil/GitHub-Repositories/rohildshah-coderssb-website/components/Website_Layout/Navbar.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nfunction navbar(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      loggedIn = _useState[0],\n      setLoggedIn = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      username = _useState2[0],\n      setUsername = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      profileImgUrl = _useState3[0],\n      setProfileImgUrl = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      showNav = _useState4[0],\n      setShowNav = _useState4[1];\n\n  var navbarStyle = {\n    width: \"100%\",\n    backgroundColor: \"#5ac0ca\",\n    height: \"3rem\",\n    display: \"flex\",\n    justifyContent: \"space-between\",\n    alignItems: \"center\"\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (props.googleUserObject && props.googleUserObject.profileObj) {\n      setLoggedIn(true);\n      setProfileImgUrl(props.googleUserObject.profileObj.imageUrl);\n    }\n  }, [props.googleUserObject]);\n\n  var responseGoogle = function responseGoogle(googleUser) {\n    props.setGoogleUserObject(googleUser);\n  };\n\n  function handleDropDownMenuItem() {\n    __jsx(\"a\", {\n      className: \"tab\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 5\n      }\n    }, \"Peorja\");\n  }\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"navbar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    className: \"w3-image logo\",\n    src: \"logo.png\",\n    alt: \"Header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"w3-hide-small\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/Officers\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"tab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, \"Our Team\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/Resources\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"tab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, \"Useful Resources\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/ProjectSeries\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"tab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, \"Project Series\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/Calendar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    className: \"tab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 17\n    }\n  }, \"Calendar\")), loggedIn ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/UserProfile\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    className: \"profile\",\n    src: profileImgUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 15\n    }\n  })) : __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_1__[\"GoogleLogin\"], {\n    render: function render(renderProps) {\n      return __jsx(\"button\", {\n        className: \"login\",\n        onClick: renderProps.onClick,\n        disabled: renderProps.disabled,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 17\n        }\n      }, \"Login\");\n    },\n    clientId: process.env.GOOGLE_CLIENT_ID,\n    buttonText: \"Login\",\n    onSuccess: responseGoogle,\n    onFailure: responseGoogle,\n    cookiePolicy: \"single_host_origin\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  })), __jsx(\"button\", {\n    \"class\": \"w3-button w3-xlarge w3-hide-medium w3-hide-large\",\n    onClick: function onClick() {\n      setShowNav(!showNav);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 9\n    }\n  }, \"\\u2630\")), __jsx(\"div\", {\n    style: {\n      position: \"absolute\",\n      top: \"0\",\n      right: \"0\",\n      height: \"100%\",\n      display: showNav ? \"block\" : \"none\",\n      zIndex: \"10\"\n    },\n    className: \"w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-right w3-animate-left\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    \"class\": \"w3-bar-item w3-button w3-hide-large\",\n    onClick: function onClick() {\n      return setShowNav(!showNav);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }, \"\\xD7\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/Officers\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"tab w3-bar-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 11\n    }\n  }, \"Our Team\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/Resources\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"tab w3-bar-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 11\n    }\n  }, \"Useful Resources\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/ProjectSeries\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"tab w3-bar-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 11\n    }\n  }, \"Project Series\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/Calendar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"tab w3-bar-item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 11\n    }\n  }, \"Calendar\"))));\n}\n\n_s(navbar, \"ySC5JU491gvvcZgv6t04OmPzSJ4=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XZWJzaXRlX0xheW91dC9OYXZiYXIuanM/OTY1MyJdLCJuYW1lcyI6WyJuYXZiYXIiLCJwcm9wcyIsInVzZVN0YXRlIiwibG9nZ2VkSW4iLCJzZXRMb2dnZWRJbiIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwcm9maWxlSW1nVXJsIiwic2V0UHJvZmlsZUltZ1VybCIsInNob3dOYXYiLCJzZXRTaG93TmF2IiwibmF2YmFyU3R5bGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ1c2VFZmZlY3QiLCJnb29nbGVVc2VyT2JqZWN0IiwicHJvZmlsZU9iaiIsImltYWdlVXJsIiwicmVzcG9uc2VHb29nbGUiLCJnb29nbGVVc2VyIiwic2V0R29vZ2xlVXNlck9iamVjdCIsImhhbmRsZURyb3BEb3duTWVudUl0ZW0iLCJyZW5kZXJQcm9wcyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsInpJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtFQUFBOztFQUFBOztFQUNwQyxnQkFBZ0NDLHNEQUFRLENBQUMsS0FBRCxDQUF4QztFQUFBLElBQU9DLFFBQVA7RUFBQSxJQUFpQkMsV0FBakI7O0VBQ0EsaUJBQWdDRixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7RUFBQSxJQUFPRyxRQUFQO0VBQUEsSUFBaUJDLFdBQWpCOztFQUNBLGlCQUEwQ0osc0RBQVEsQ0FBQyxFQUFELENBQWxEO0VBQUEsSUFBT0ssYUFBUDtFQUFBLElBQXNCQyxnQkFBdEI7O0VBQ0EsaUJBQThCTixzREFBUSxDQUFDLEtBQUQsQ0FB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O01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxjQURGLENBYkYsRUFnQkUsTUFBQyxnREFBRDtJQUFNLElBQUksRUFBQyxZQUFYO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUFHLFNBQVMsRUFBQyxpQkFBYjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHNCQURGLENBaEJGLEVBbUJFLE1BQUMsZ0RBQUQ7SUFBTSxJQUFJLEVBQUMsZ0JBQVg7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFO0lBQUcsU0FBUyxFQUFDLGlCQUFiO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsb0JBREYsQ0FuQkYsRUFzQkUsTUFBQyxnREFBRDtJQUFNLElBQUksRUFBQyxXQUFYO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUFHLFNBQVMsRUFBQyxpQkFBYjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGNBREYsQ0F0QkYsQ0FyRUYsQ0FERjtBQWtHRDs7R0FoSXVCVCxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XZWJzaXRlX0xheW91dC9OYXZiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBHb29nbGVMb2dpbiB9IGZyb20gXCJyZWFjdC1nb29nbGUtbG9naW5cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi8uLi9jc3MvbmF2YmFyLmNzc1wiO1xuaW1wb3J0IFwiLi4vLi4vY3NzL0Ryb3Bkb3duLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZiYXIocHJvcHMpIHtcbiAgY29uc3QgW2xvZ2dlZEluLCBzZXRMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwcm9maWxlSW1nVXJsLCBzZXRQcm9maWxlSW1nVXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2hvd05hdiwgc2V0U2hvd05hdl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgbGV0IG5hdmJhclN0eWxlID0ge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzVhYzBjYVwiLFxuICAgIGhlaWdodDogXCIzcmVtXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5nb29nbGVVc2VyT2JqZWN0ICYmIHByb3BzLmdvb2dsZVVzZXJPYmplY3QucHJvZmlsZU9iaikge1xuICAgICAgc2V0TG9nZ2VkSW4odHJ1ZSk7XG4gICAgICBzZXRQcm9maWxlSW1nVXJsKHByb3BzLmdvb2dsZVVzZXJPYmplY3QucHJvZmlsZU9iai5pbWFnZVVybCk7XG4gICAgfVxuICB9LCBbcHJvcHMuZ29vZ2xlVXNlck9iamVjdF0pO1xuXG4gIGNvbnN0IHJlc3BvbnNlR29vZ2xlID0gZ29vZ2xlVXNlciA9PiB7XG4gICAgcHJvcHMuc2V0R29vZ2xlVXNlck9iamVjdChnb29nbGVVc2VyKTtcbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVEcm9wRG93bk1lbnVJdGVtKCkge1xuICAgIDxhIGNsYXNzTmFtZT1cInRhYlwiPlBlb3JqYTwvYT47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidzMtaW1hZ2UgbG9nb1wiIHNyYz1cImxvZ28ucG5nXCIgYWx0PVwiSGVhZGVyXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtaGlkZS1zbWFsbFwiPlxuICAgICAgICAgIHsvKiBVbmNvbW1lbnQgdG8gYWRkIGRyb3Bkb3duIChkZWxldGUgZHVwbGljYXRlIGxpbmsgYmVsb3cpICovfVxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3BidG5cIj5BYm91dDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvT2ZmaWNlcnNcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZEcm9wRG93blwiPk91ciBUZWFtPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9PZmZpY2Vyc1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFiXCI+T3VyIFRlYW08L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvUmVzb3VyY2VzXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWJcIj5Vc2VmdWwgUmVzb3VyY2VzPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9NZXJjaGFuZGlzZVwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFiXCI+TWVyY2hhbmRpc2U8L2E+XG4gICAgICAgICAgPC9MaW5rPiAqL31cbiAgICAgICAgICA8TGluayBocmVmPVwiL1Byb2plY3RTZXJpZXNcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYlwiPlByb2plY3QgU2VyaWVzPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB7LyogVW5jb21tZW50IHRvIGFkZCBkcm9wZG93biAoZGVsZXRlIGR1cGxpY2F0ZSBsaW5rIGJlbG93KSAqL31cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wYnRuXCI+RXZlbnRzPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9DYWxlbmRhclwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdkRyb3BEb3duXCI+Q2FsZW5kYXI8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICA8TGluayBocmVmPVwiL0NhbGVuZGFyXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFiXCI+Q2FsZW5kYXI8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIHtsb2dnZWRJbiA/IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvVXNlclByb2ZpbGVcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9maWxlXCIgc3JjPXtwcm9maWxlSW1nVXJsfSAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8R29vZ2xlTG9naW5cbiAgICAgICAgICAgICAgcmVuZGVyPXtyZW5kZXJQcm9wcyA9PiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9naW5cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVuZGVyUHJvcHMub25DbGlja31cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZW5kZXJQcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBjbGllbnRJZD17cHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRH1cbiAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIkxvZ2luXCJcbiAgICAgICAgICAgICAgb25TdWNjZXNzPXtyZXNwb25zZUdvb2dsZX1cbiAgICAgICAgICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUdvb2dsZX1cbiAgICAgICAgICAgICAgY29va2llUG9saWN5PXtcInNpbmdsZV9ob3N0X29yaWdpblwifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInczLWJ1dHRvbiB3My14bGFyZ2UgdzMtaGlkZS1tZWRpdW0gdzMtaGlkZS1sYXJnZVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dOYXYoIXNob3dOYXYpfX0+XG4gICAgICAgICAgICAmIzk3NzY7XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7LyogPHAgc3R5bGU9e3t3aWR0aDogXCIxMDB2d1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JheVwiLCBhbGlnblNlbGY6ICdmbGV4LWVuZCd9fT5sb2dvdXQ8L3A+ICovfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB0b3A6IFwiMFwiLFxuICAgICAgICAgIHJpZ2h0OiBcIjBcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgIGRpc3BsYXk6IHNob3dOYXYgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixcbiAgICAgICAgICB6SW5kZXg6IFwiMTBcIixcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwidzMtc2lkZWJhciB3My1iYXItYmxvY2sgdzMtY29sbGFwc2UgdzMtY2FyZCB3My1hbmltYXRlLXJpZ2h0IHczLWFuaW1hdGUtbGVmdFwiXG4gICAgICA+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ3My1iYXItaXRlbSB3My1idXR0b24gdzMtaGlkZS1sYXJnZVwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dOYXYoIXNob3dOYXYpfT4mdGltZXM7PC9idXR0b24+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvT2ZmaWNlcnNcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWIgdzMtYmFyLWl0ZW1cIj5PdXIgVGVhbTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL1Jlc291cmNlc1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYiB3My1iYXItaXRlbVwiPlVzZWZ1bCBSZXNvdXJjZXM8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9Qcm9qZWN0U2VyaWVzXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFiIHczLWJhci1pdGVtXCI+UHJvamVjdCBTZXJpZXM8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9DYWxlbmRhclwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYiB3My1iYXItaXRlbVwiPkNhbGVuZGFyPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Website_Layout/Navbar.js\n");

/***/ })

})