webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Website_Layout/Navbar.js":
/*!*********************************************!*\
  !*** ./components/Website_Layout/Navbar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return navbar; });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/navbar.css */ \"./css/navbar.css\");\n/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_navbar_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_Dropdown_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css/Dropdown.css */ \"./css/Dropdown.css\");\n/* harmony import */ var _css_Dropdown_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_Dropdown_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/rohil/GitHub-Repositories/rohildshah-coderssb-website/components/Website_Layout/Navbar.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nfunction navbar(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      loggedIn = _useState[0],\n      setLoggedIn = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      username = _useState2[0],\n      setUsername = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      profileImgUrl = _useState3[0],\n      setProfileImgUrl = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      showNav = _useState4[0],\n      setShowNav = _useState4[1];\n\n  var navbarStyle = {\n    width: \"100%\",\n    backgroundColor: \"#5ac0ca\",\n    height: \"3rem\",\n    display: \"flex\",\n    justifyContent: \"space-between\",\n    alignItems: \"center\"\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (props.googleUserObject && props.googleUserObject.profileObj) {\n      setLoggedIn(true);\n      setProfileImgUrl(props.googleUserObject.profileObj.imageUrl);\n    }\n  }, [props.googleUserObject]);\n\n  var responseGoogle = function responseGoogle(googleUser) {\n    props.setGoogleUserObject(googleUser);\n  };\n\n  function handleDropDownMenuItem() {\n    __jsx(\"a\", {\n      className: \"tab\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 5\n      }\n    }, \"Peorja\");\n  }\n\n  return __jsx(\"div\", {\n    className: \"navbar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    className: \"w3-image logo\",\n    src: \"logo.png\",\n    alt: \"Header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"w3-hide-small\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/Officers\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"tab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, \"Our Team\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/Resources\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"tab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, \"Useful Resources\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/ProjectSeries\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"tab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, \"Project Series\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/Calendar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"tab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 15\n    }\n  }, \"Calendar\")), loggedIn ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/UserProfile\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    className: \"profile\",\n    src: profileImgUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  })) : __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_1__[\"GoogleLogin\"], {\n    render: function render(renderProps) {\n      return __jsx(\"button\", {\n        className: \"login\",\n        onClick: renderProps.onClick,\n        disabled: renderProps.disabled,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 15\n        }\n      }, \"Login\");\n    },\n    clientId: process.env.GOOGLE_CLIENT_ID,\n    buttonText: \"Login\",\n    onSuccess: responseGoogle,\n    onFailure: responseGoogle,\n    cookiePolicy: \"single_host_origin\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      right: \"0\",\n      display: showNav ? \"block\" : \"none\"\n    },\n    className: \"w3-sidebar w3-bar-block w3-collapse w3-animate-right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    \"class\": \"w3-bar-item w3-button w3-hide-large\",\n    onclick: \"w3_close()\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 9\n    }\n  }, \"Close \\xD7\"), __jsx(\"a\", {\n    href: \"#\",\n    \"class\": \"w3-bar-item w3-button\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 9\n    }\n  }, \"Link 1\"), __jsx(\"a\", {\n    href: \"#\",\n    \"class\": \"w3-bar-item w3-button\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }, \"Link 2\"), __jsx(\"a\", {\n    href: \"#\",\n    \"class\": \"w3-bar-item w3-button\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }\n  }, \"Link 3\")), __jsx(\"button\", {\n    \"class\": \"w3-button w3-xlarge w3-hide-medium w3-hide-large\",\n    onClick: function onClick() {\n      setShowNav(!showNav);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }\n  }, \"\\u2630\"));\n}\n\n_s(navbar, \"ySC5JU491gvvcZgv6t04OmPzSJ4=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XZWJzaXRlX0xheW91dC9OYXZiYXIuanM/OTY1MyJdLCJuYW1lcyI6WyJuYXZiYXIiLCJwcm9wcyIsInVzZVN0YXRlIiwibG9nZ2VkSW4iLCJzZXRMb2dnZWRJbiIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwcm9maWxlSW1nVXJsIiwic2V0UHJvZmlsZUltZ1VybCIsInNob3dOYXYiLCJzZXRTaG93TmF2IiwibmF2YmFyU3R5bGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ1c2VFZmZlY3QiLCJnb29nbGVVc2VyT2JqZWN0IiwicHJvZmlsZU9iaiIsImltYWdlVXJsIiwicmVzcG9uc2VHb29nbGUiLCJnb29nbGVVc2VyIiwic2V0R29vZ2xlVXNlck9iamVjdCIsImhhbmRsZURyb3BEb3duTWVudUl0ZW0iLCJyZW5kZXJQcm9wcyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwicmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7RUFBQTs7RUFBQTs7RUFDcEMsZ0JBQWdDQyxzREFBUSxDQUFDLEtBQUQsQ0FBeEM7RUFBQSxJQUFPQyxRQUFQO0VBQUEsSUFBaUJDLFdBQWpCOztFQUNBLGlCQUFnQ0Ysc0RBQVEsQ0FBQyxFQUFELENBQXhDO0VBQUEsSUFBT0csUUFBUDtFQUFBLElBQWlCQyxXQUFqQjs7RUFDQSxpQkFBMENKLHNEQUFRLENBQUMsRUFBRCxDQUFsRDtFQUFBLElBQU9LLGFBQVA7RUFBQSxJQUFzQkMsZ0JBQXRCOztFQUNBLGlCQUE4Qk4sc0RBQVEsQ0FBQyxLQUFELENBQXRDO0VBQUEsSUFBT08sT0FBUDtFQUFBLElB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eW91dC9OYXZiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBHb29nbGVMb2dpbiB9IGZyb20gXCJyZWFjdC1nb29nbGUtbG9naW5cIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi8uLi9jc3MvbmF2YmFyLmNzc1wiO1xuaW1wb3J0IFwiLi4vLi4vY3NzL0Ryb3Bkb3duLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZiYXIocHJvcHMpIHtcbiAgY29uc3QgW2xvZ2dlZEluLCBzZXRMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwcm9maWxlSW1nVXJsLCBzZXRQcm9maWxlSW1nVXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2hvd05hdiwgc2V0U2hvd05hdl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgbGV0IG5hdmJhclN0eWxlID0ge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzVhYzBjYVwiLFxuICAgIGhlaWdodDogXCIzcmVtXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5nb29nbGVVc2VyT2JqZWN0ICYmIHByb3BzLmdvb2dsZVVzZXJPYmplY3QucHJvZmlsZU9iaikge1xuICAgICAgc2V0TG9nZ2VkSW4odHJ1ZSk7XG4gICAgICBzZXRQcm9maWxlSW1nVXJsKHByb3BzLmdvb2dsZVVzZXJPYmplY3QucHJvZmlsZU9iai5pbWFnZVVybCk7XG4gICAgfVxuICB9LCBbcHJvcHMuZ29vZ2xlVXNlck9iamVjdF0pO1xuXG4gIGNvbnN0IHJlc3BvbnNlR29vZ2xlID0gZ29vZ2xlVXNlciA9PiB7XG4gICAgcHJvcHMuc2V0R29vZ2xlVXNlck9iamVjdChnb29nbGVVc2VyKTtcbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVEcm9wRG93bk1lbnVJdGVtKCkge1xuICAgIDxhIGNsYXNzTmFtZT1cInRhYlwiPlBlb3JqYTwvYT47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInczLWltYWdlIGxvZ29cIiBzcmM9XCJsb2dvLnBuZ1wiIGFsdD1cIkhlYWRlclwiIC8+XG4gICAgICA8L0xpbms+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidzMtaGlkZS1zbWFsbFwiPlxuICAgICAgICB7LyogVW5jb21tZW50IHRvIGFkZCBkcm9wZG93biAoZGVsZXRlIGR1cGxpY2F0ZSBsaW5rIGJlbG93KSAqL31cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3BidG5cIj5BYm91dDwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9PZmZpY2Vyc1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZEcm9wRG93blwiPk91ciBUZWFtPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvT2ZmaWNlcnNcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWJcIj5PdXIgVGVhbTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL1Jlc291cmNlc1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYlwiPlVzZWZ1bCBSZXNvdXJjZXM8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvTWVyY2hhbmRpc2VcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWJcIj5NZXJjaGFuZGlzZTwvYT5cbiAgICAgICAgPC9MaW5rPiAqL31cbiAgICAgICAgPExpbmsgaHJlZj1cIi9Qcm9qZWN0U2VyaWVzXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFiXCI+UHJvamVjdCBTZXJpZXM8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgey8qIFVuY29tbWVudCB0byBhZGQgZHJvcGRvd24gKGRlbGV0ZSBkdXBsaWNhdGUgbGluayBiZWxvdykgKi99XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wYnRuXCI+RXZlbnRzPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL0NhbGVuZGFyXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdkRyb3BEb3duXCI+Q2FsZW5kYXI8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPExpbmsgaHJlZj1cIi9DYWxlbmRhclwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWJcIj5DYWxlbmRhcjwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICB7bG9nZ2VkSW4gPyAoXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9Vc2VyUHJvZmlsZVwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9maWxlXCIgc3JjPXtwcm9maWxlSW1nVXJsfSAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8R29vZ2xlTG9naW5cbiAgICAgICAgICAgIHJlbmRlcj17cmVuZGVyUHJvcHMgPT4gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9naW5cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbmRlclByb3BzLm9uQ2xpY2t9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3JlbmRlclByb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgY2xpZW50SWQ9e3Byb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUR9XG4gICAgICAgICAgICBidXR0b25UZXh0PVwiTG9naW5cIlxuICAgICAgICAgICAgb25TdWNjZXNzPXtyZXNwb25zZUdvb2dsZX1cbiAgICAgICAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VHb29nbGV9XG4gICAgICAgICAgICBjb29raWVQb2xpY3k9e1wic2luZ2xlX2hvc3Rfb3JpZ2luXCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHJpZ2h0OiBcIjBcIixcbiAgICAgICAgICBkaXNwbGF5OiBzaG93TmF2ID8gXCJibG9ja1wiIDogXCJub25lXCJcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwidzMtc2lkZWJhciB3My1iYXItYmxvY2sgdzMtY29sbGFwc2UgdzMtYW5pbWF0ZS1yaWdodFwiXG4gICAgICA+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ3My1iYXItaXRlbSB3My1idXR0b24gdzMtaGlkZS1sYXJnZVwiXG4gICAgICAgIG9uY2xpY2s9XCJ3M19jbG9zZSgpXCI+Q2xvc2UgJnRpbWVzOzwvYnV0dG9uPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uXCI+TGluayAxPC9hPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uXCI+TGluayAyPC9hPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwidzMtYmFyLWl0ZW0gdzMtYnV0dG9uXCI+TGluayAzPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwidzMtYnV0dG9uIHczLXhsYXJnZSB3My1oaWRlLW1lZGl1bSB3My1oaWRlLWxhcmdlXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dOYXYoIXNob3dOYXYpfX0+XG4gICAgICAgICAgJiM5Nzc2O1xuICAgICAgPC9idXR0b24+XG4gICAgICB7LyogPHAgc3R5bGU9e3t3aWR0aDogXCIxMDB2d1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JheVwiLCBhbGlnblNlbGY6ICdmbGV4LWVuZCd9fT5sb2dvdXQ8L3A+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Website_Layout/Navbar.js\n");

/***/ })

})