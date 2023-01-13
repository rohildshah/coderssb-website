webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Website_Layout/Navbar.js":
/*!*********************************************!*\
  !*** ./components/Website_Layout/Navbar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return navbar; });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/navbar.css */ \"./css/navbar.css\");\n/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_navbar_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_Dropdown_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css/Dropdown.css */ \"./css/Dropdown.css\");\n/* harmony import */ var _css_Dropdown_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_Dropdown_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/rohil/GitHub-Repositories/rohildshah-coderssb-website/components/Website_Layout/Navbar.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nfunction navbar(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      loggedIn = _useState[0],\n      setLoggedIn = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      username = _useState2[0],\n      setUsername = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      profileImgUrl = _useState3[0],\n      setProfileImgUrl = _useState3[1];\n\n  var navbarStyle = {\n    width: \"100%\",\n    backgroundColor: \"#5ac0ca\",\n    height: \"3rem\",\n    display: \"flex\",\n    justifyContent: \"space-between\",\n    alignItems: \"center\"\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (props.googleUserObject && props.googleUserObject.profileObj) {\n      setLoggedIn(true);\n      setProfileImgUrl(props.googleUserObject.profileObj.imageUrl);\n    }\n  }, [props.googleUserObject]);\n\n  var responseGoogle = function responseGoogle(googleUser) {\n    props.setGoogleUserObject(googleUser);\n  };\n\n  function handleDropDownMenuItem() {\n    __jsx(\"a\", {\n      className: \"tab\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 5\n      }\n    }, \"Peorja\");\n  }\n\n  return __jsx(\"div\", {\n    className: \"navbar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    className: \"w3-image logo\",\n    src: \"logo.png\",\n    alt: \"Header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"dropdown\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    className: \"dropbtn\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, \"About\"), __jsx(\"div\", {\n    className: \"dropdown-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/Officers\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"navDropDown\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 15\n    }\n  }, \"Our Team\")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/Resources\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"tab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, \"Useful Resources\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/ProjectSeries\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"tab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, \"Project Series\")), __jsx(\"div\", {\n    className: \"dropdown\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    className: \"dropbtn\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 11\n    }\n  }, \"Events\"), __jsx(\"div\", {\n    className: \"dropdown-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/Calendar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    className: \"navDropDown\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 15\n    }\n  }, \"Calendar\")))), loggedIn ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/UserProfile\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    className: \"profile\",\n    src: profileImgUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  })) : __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_1__[\"GoogleLogin\"], {\n    render: function render(renderProps) {\n      return __jsx(\"button\", {\n        className: \"login\",\n        onClick: renderProps.onClick,\n        disabled: renderProps.disabled,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 15\n        }\n      }, \"Login\");\n    },\n    clientId: process.env.GOOGLE_CLIENT_ID,\n    buttonText: \"Login\",\n    onSuccess: responseGoogle,\n    onFailure: responseGoogle,\n    cookiePolicy: \"single_host_origin\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  })));\n}\n\n_s(navbar, \"u9W/drXr7FAhZi5RpXEe95H82LE=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XZWJzaXRlX0xheW91dC9OYXZiYXIuanM/OTY1MyJdLCJuYW1lcyI6WyJuYXZiYXIiLCJwcm9wcyIsInVzZVN0YXRlIiwibG9nZ2VkSW4iLCJzZXRMb2dnZWRJbiIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwcm9maWxlSW1nVXJsIiwic2V0UHJvZmlsZUltZ1VybCIsIm5hdmJhclN0eWxlIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwidXNlRWZmZWN0IiwiZ29vZ2xlVXNlck9iamVjdCIsInByb2ZpbGVPYmoiLCJpbWFnZVVybCIsInJlc3BvbnNlR29vZ2xlIiwiZ29vZ2xlVXNlciIsInNldEdvb2dsZVVzZXJPYmplY3QiLCJoYW5kbGVEcm9wRG93bk1lbnVJdGVtIiwicmVuZGVyUHJvcHMiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtFQUFBOztFQUFBOztFQUNwQyxnQkFBZ0NDLHNEQUFRLENBQUMsS0FBRCxDQUF4QztFQUFBLElBQU9DLFFBQVA7RUFBQSxJQUFpQkMsV0FBakI7O0VBQ0EsaUJBQWdDRixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7RUFBQSxJQUFPRyxRQUFQO0VBQUEsSUFBaUJDLFdBQWpCOztFQUNBLGlCQUEwQ0osc0RBQVEsQ0FBQyxFQUFELENBQWxEO0VBQUEsSUFBT0ssYUFBUDtFQUFBLElBQXNCQyxnQkFBdEI7O0VBRUEsSUFBSUMsV0FBVyxHQUFHO0lBQ2hCQyxLQUFLLEVBQUUsTUFEUztJQUVoQkMsZUFBZSxFQUFFLFNBRkQ7SUFHaEJDLE1BQU0sRUFBRSxNQUhRO0lB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RUFBQyxjQUFYO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUFLLFNBQVMsRUFBQyxTQUFmO0lBQXlCLEdBQUcsRUFBRUksYUFBOUI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURGLENBRE8sR0FLUCxNQUFDLDhEQUFEO0lBQ0UsTUFBTSxFQUFFLGdCQUFBaUIsV0FBVztNQUFBLE9BQ2pCO1FBQ0UsU0FBUyxFQUFDLE9BRFo7UUFFRSxPQUFPLEVBQUVBLFdBQVcsQ0FBQ0MsT0FGdkI7UUFHRSxRQUFRLEVBQUVELFdBQVcsQ0FBQ0UsUUFIeEI7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxXQURpQjtJQUFBLENBRHJCO0lBVUUsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBVnhCO0lBV0UsVUFBVSxFQUFDLE9BWGI7SUFZRSxTQUFTLEVBQUVULGNBWmI7SUFhRSxTQUFTLEVBQUVBLGNBYmI7SUFjRSxZQUFZLEVBQUUsb0JBZGhCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUEvQkosQ0FKRixDQURGO0FBeUREOztHQXRGdUJwQixNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XZWJzaXRlX0xheW91dC9OYXZiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBHb29nbGVMb2dpbiB9IGZyb20gXCJyZWFjdC1nb29nbGUtbG9naW5cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi8uLi9jc3MvbmF2YmFyLmNzc1wiO1xuaW1wb3J0IFwiLi4vLi4vY3NzL0Ryb3Bkb3duLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZiYXIocHJvcHMpIHtcbiAgY29uc3QgW2xvZ2dlZEluLCBzZXRMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwcm9maWxlSW1nVXJsLCBzZXRQcm9maWxlSW1nVXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGxldCBuYXZiYXJTdHlsZSA9IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM1YWMwY2FcIixcbiAgICBoZWlnaHQ6IFwiM3JlbVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvcHMuZ29vZ2xlVXNlck9iamVjdCAmJiBwcm9wcy5nb29nbGVVc2VyT2JqZWN0LnByb2ZpbGVPYmopIHtcbiAgICAgIHNldExvZ2dlZEluKHRydWUpO1xuICAgICAgc2V0UHJvZmlsZUltZ1VybChwcm9wcy5nb29nbGVVc2VyT2JqZWN0LnByb2ZpbGVPYmouaW1hZ2VVcmwpO1xuICAgIH1cbiAgfSwgW3Byb3BzLmdvb2dsZVVzZXJPYmplY3RdKTtcblxuICBjb25zdCByZXNwb25zZUdvb2dsZSA9IGdvb2dsZVVzZXIgPT4ge1xuICAgIHByb3BzLnNldEdvb2dsZVVzZXJPYmplY3QoZ29vZ2xlVXNlcik7XG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlRHJvcERvd25NZW51SXRlbSgpIHtcbiAgICA8YSBjbGFzc05hbWU9XCJ0YWJcIj5QZW9yamE8L2E+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3My1pbWFnZSBsb2dvXCIgc3JjPVwibG9nby5wbmdcIiBhbHQ9XCJIZWFkZXJcIiAvPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGJ0blwiPkFib3V0PC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL09mZmljZXJzXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdkRyb3BEb3duXCI+T3VyIFRlYW08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL1Jlc291cmNlc1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYlwiPlVzZWZ1bCBSZXNvdXJjZXM8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvTWVyY2hhbmRpc2VcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWJcIj5NZXJjaGFuZGlzZTwvYT5cbiAgICAgICAgPC9MaW5rPiAqL31cbiAgICAgICAgPExpbmsgaHJlZj1cIi9Qcm9qZWN0U2VyaWVzXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFiXCI+UHJvamVjdCBTZXJpZXM8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGJ0blwiPkV2ZW50czwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9DYWxlbmRhclwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZEcm9wRG93blwiPkNhbGVuZGFyPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2xvZ2dlZEluID8gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvVXNlclByb2ZpbGVcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvZmlsZVwiIHNyYz17cHJvZmlsZUltZ1VybH0gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEdvb2dsZUxvZ2luXG4gICAgICAgICAgICByZW5kZXI9e3JlbmRlclByb3BzID0+IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ2luXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZW5kZXJQcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZW5kZXJQcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIGNsaWVudElkPXtwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEfVxuICAgICAgICAgICAgYnV0dG9uVGV4dD1cIkxvZ2luXCJcbiAgICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XG4gICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlR29vZ2xlfVxuICAgICAgICAgICAgY29va2llUG9saWN5PXtcInNpbmdsZV9ob3N0X29yaWdpblwifVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8cCBzdHlsZT17e3dpZHRoOiBcIjEwMHZ3XCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIGJhY2tncm91bmRDb2xvcjogXCJncmF5XCIsIGFsaWduU2VsZjogJ2ZsZXgtZW5kJ319PmxvZ291dDwvcD4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Website_Layout/Navbar.js\n");

/***/ })

})