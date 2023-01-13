webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Website_Layout/Navbar.js":
/*!*********************************************!*\
  !*** ./components/Website_Layout/Navbar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return navbar; });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/navbar.css */ \"./css/navbar.css\");\n/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_navbar_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_Dropdown_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css/Dropdown.css */ \"./css/Dropdown.css\");\n/* harmony import */ var _css_Dropdown_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_Dropdown_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/rohil/GitHub-Repositories/rohildshah-coderssb-website/components/Website_Layout/Navbar.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nfunction navbar(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      loggedIn = _useState[0],\n      setLoggedIn = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      username = _useState2[0],\n      setUsername = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      profileImgUrl = _useState3[0],\n      setProfileImgUrl = _useState3[1];\n\n  var navbarStyle = {\n    width: \"100%\",\n    backgroundColor: \"#5ac0ca\",\n    height: \"3rem\",\n    display: \"flex\",\n    justifyContent: \"space-between\",\n    alignItems: \"center\"\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (props.googleUserObject && props.googleUserObject.profileObj) {\n      setLoggedIn(true);\n      setProfileImgUrl(props.googleUserObject.profileObj.imageUrl);\n    }\n  }, [props.googleUserObject]);\n\n  var responseGoogle = function responseGoogle(googleUser) {\n    props.setGoogleUserObject(googleUser);\n  };\n\n  function handleDropDownMenuItem() {\n    __jsx(\"a\", {\n      className: \"tab\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 5\n      }\n    }, \"Peorja\");\n  } // function w3_close() {\n  //   document.getElementById(\"mySidebar\").style.display = \"none\";\n  // }\n\n\n  return __jsx(\"div\", {\n    className: \"navbar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    className: \"w3-image logo\",\n    src: \"logo.png\",\n    alt: \"Header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/Officers\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"tab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, \"Our Team\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/Resources\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"tab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, \"Useful Resources\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/ProjectSeries\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"tab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, \"Project Series\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/Calendar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"tab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 15\n    }\n  }, \"Calendar\")), loggedIn ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/UserProfile\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    className: \"profile\",\n    src: profileImgUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  })) : __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_1__[\"GoogleLogin\"], {\n    render: function render(renderProps) {\n      return __jsx(\"button\", {\n        className: \"login\",\n        onClick: renderProps.onClick,\n        disabled: renderProps.disabled,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 15\n        }\n      }, \"Login\");\n    },\n    clientId: process.env.GOOGLE_CLIENT_ID,\n    buttonText: \"Login\",\n    onSuccess: responseGoogle,\n    onFailure: responseGoogle,\n    cookiePolicy: \"single_host_origin\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  })), __jsx(\"button\", {\n    \"class\": \"w3-button  w3-right w3-hide-large\",\n    onclick: \"w3_open()\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }\n  }, \"\\u2630\"));\n}\n\n_s(navbar, \"u9W/drXr7FAhZi5RpXEe95H82LE=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XZWJzaXRlX0xheW91dC9OYXZiYXIuanM/OTY1MyJdLCJuYW1lcyI6WyJuYXZiYXIiLCJwcm9wcyIsInVzZVN0YXRlIiwibG9nZ2VkSW4iLCJzZXRMb2dnZWRJbiIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwcm9maWxlSW1nVXJsIiwic2V0UHJvZmlsZUltZ1VybCIsIm5hdmJhclN0eWxlIiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwidXNlRWZmZWN0IiwiZ29vZ2xlVXNlck9iamVjdCIsInByb2ZpbGVPYmoiLCJpbWFnZVVybCIsInJlc3BvbnNlR29vZ2xlIiwiZ29vZ2xlVXNlciIsInNldEdvb2dsZVVzZXJPYmplY3QiLCJoYW5kbGVEcm9wRG93bk1lbnVJdGVtIiwicmVuZGVyUHJvcHMiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtFQUFBOztFQUFBOztFQUNwQyxnQkFBZ0NDLHNEQUFRLENBQUMsS0FBRCxDQUF4QztFQUFBLElBQU9DLFFBQVA7RUFBQSxJQUFpQkMsV0FBakI7O0VBQ0EsaUJBQWdDRixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7RUFBQSxJQUFPRyxRQUFQO0VBQUEsSUFBaUJDLFdBQWpCOztFQUNBLGlCQUEwQ0osc0RBQVEsQ0FBQyxFQUFELENBQWxEO0VBQUEsSUFBT0ssYUFBUDtFQUFBLElBQXNCQyxnQkFBdEI7O0VBRUEsSUFBSUMsV0FBVyxHQUFHO0lBQ2hCQyxLQUFLLEVBQUUsTUFEUztJQUVoQkMsZUFBZSxFQUFFLFNBRkQ7SUFHaEJDLE1BQU0sRUFBRSxNQUhRO0lB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QyxnQkFWeEI7SUFXRSxVQUFVLEVBQUMsT0FYYjtJQVlFLFNBQVMsRUFBRVQsY0FaYjtJQWFFLFNBQVMsRUFBRUEsY0FiYjtJQWNFLFlBQVksRUFBRSxvQkFkaEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQXZDSixDQUpGLEVBNkRFO0lBQVEsU0FBTSxtQ0FBZDtJQUNFLE9BQU8sRUFBQyxXQURWO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsWUE3REYsQ0FERjtBQXFFRDs7R0F0R3VCcEIsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvV2Vic2l0ZV9MYXlvdXQvTmF2YmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgR29vZ2xlTG9naW4gfSBmcm9tIFwicmVhY3QtZ29vZ2xlLWxvZ2luXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vLi4vY3NzL25hdmJhci5jc3NcIjtcbmltcG9ydCBcIi4uLy4uL2Nzcy9Ecm9wZG93bi5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2YmFyKHByb3BzKSB7XG4gIGNvbnN0IFtsb2dnZWRJbiwgc2V0TG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcHJvZmlsZUltZ1VybCwgc2V0UHJvZmlsZUltZ1VybF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBsZXQgbmF2YmFyU3R5bGUgPSB7XG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjNWFjMGNhXCIsXG4gICAgaGVpZ2h0OiBcIjNyZW1cIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLmdvb2dsZVVzZXJPYmplY3QgJiYgcHJvcHMuZ29vZ2xlVXNlck9iamVjdC5wcm9maWxlT2JqKSB7XG4gICAgICBzZXRMb2dnZWRJbih0cnVlKTtcbiAgICAgIHNldFByb2ZpbGVJbWdVcmwocHJvcHMuZ29vZ2xlVXNlck9iamVjdC5wcm9maWxlT2JqLmltYWdlVXJsKTtcbiAgICB9XG4gIH0sIFtwcm9wcy5nb29nbGVVc2VyT2JqZWN0XSk7XG5cbiAgY29uc3QgcmVzcG9uc2VHb29nbGUgPSBnb29nbGVVc2VyID0+IHtcbiAgICBwcm9wcy5zZXRHb29nbGVVc2VyT2JqZWN0KGdvb2dsZVVzZXIpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGhhbmRsZURyb3BEb3duTWVudUl0ZW0oKSB7XG4gICAgPGEgY2xhc3NOYW1lPVwidGFiXCI+UGVvcmphPC9hPjtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHczX2Nsb3NlKCkge1xuICAvLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlTaWRlYmFyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgLy8gfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidzMtaW1hZ2UgbG9nb1wiIHNyYz1cImxvZ28ucG5nXCIgYWx0PVwiSGVhZGVyXCIgLz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXY+XG4gICAgICAgIHsvKiBVbmNvbW1lbnQgdG8gYWRkIGRyb3Bkb3duIChkZWxldGUgZHVwbGljYXRlIGxpbmsgYmVsb3cpICovfVxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGJ0blwiPkFib3V0PC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL09mZmljZXJzXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdkRyb3BEb3duXCI+T3VyIFRlYW08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPExpbmsgaHJlZj1cIi9PZmZpY2Vyc1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYlwiPk91ciBUZWFtPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvUmVzb3VyY2VzXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFiXCI+VXNlZnVsIFJlc291cmNlczwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9NZXJjaGFuZGlzZVwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYlwiPk1lcmNoYW5kaXNlPC9hPlxuICAgICAgICA8L0xpbms+ICovfVxuICAgICAgICA8TGluayBocmVmPVwiL1Byb2plY3RTZXJpZXNcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWJcIj5Qcm9qZWN0IFNlcmllczwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICB7LyogVW5jb21tZW50IHRvIGFkZCBkcm9wZG93biAoZGVsZXRlIGR1cGxpY2F0ZSBsaW5rIGJlbG93KSAqL31cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3BidG5cIj5FdmVudHM8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQ2FsZW5kYXJcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2RHJvcERvd25cIj5DYWxlbmRhcjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8TGluayBocmVmPVwiL0NhbGVuZGFyXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYlwiPkNhbGVuZGFyPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIHtsb2dnZWRJbiA/IChcbiAgICAgICAgICA8TGluayBocmVmPVwiL1VzZXJQcm9maWxlXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2ZpbGVcIiBzcmM9e3Byb2ZpbGVJbWdVcmx9IC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxHb29nbGVMb2dpblxuICAgICAgICAgICAgcmVuZGVyPXtyZW5kZXJQcm9wcyA9PiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dpblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17cmVuZGVyUHJvcHMub25DbGlja31cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cmVuZGVyUHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBjbGllbnRJZD17cHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRH1cbiAgICAgICAgICAgIGJ1dHRvblRleHQ9XCJMb2dpblwiXG4gICAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlR29vZ2xlfVxuICAgICAgICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUdvb2dsZX1cbiAgICAgICAgICAgIGNvb2tpZVBvbGljeT17XCJzaW5nbGVfaG9zdF9vcmlnaW5cIn1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwidzMtYnV0dG9uICB3My1yaWdodCB3My1oaWRlLWxhcmdlXCJcbiAgICAgICAgb25jbGljaz1cInczX29wZW4oKVwiPlxuICAgICAgICAgICYjOTc3NjtcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgey8qIDxwIHN0eWxlPXt7d2lkdGg6IFwiMTAwdndcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgYmFja2dyb3VuZENvbG9yOiBcImdyYXlcIiwgYWxpZ25TZWxmOiAnZmxleC1lbmQnfX0+bG9nb3V0PC9wPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Website_Layout/Navbar.js\n");

/***/ })

})