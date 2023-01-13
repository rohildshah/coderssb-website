webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Website_Layout/Navbar.js":
/*!*********************************************!*\
  !*** ./components/Website_Layout/Navbar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return navbar; });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/navbar.css */ \"./css/navbar.css\");\n/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_navbar_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_Dropdown_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css/Dropdown.css */ \"./css/Dropdown.css\");\n/* harmony import */ var _css_Dropdown_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_Dropdown_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/rohil/GitHub-Repositories/rohildshah-coderssb-website/components/Website_Layout/Navbar.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nfunction navbar(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      loggedIn = _useState[0],\n      setLoggedIn = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      username = _useState2[0],\n      setUsername = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      profileImgUrl = _useState3[0],\n      setProfileImgUrl = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      showNav = _useState4[0],\n      setShowNav = _useState4[1];\n\n  var navbarStyle = {\n    width: \"100%\",\n    backgroundColor: \"#5ac0ca\",\n    height: \"3rem\",\n    display: \"flex\",\n    justifyContent: \"space-between\",\n    alignItems: \"center\"\n  };\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (props.googleUserObject && props.googleUserObject.profileObj) {\n      setLoggedIn(true);\n      setProfileImgUrl(props.googleUserObject.profileObj.imageUrl);\n    }\n  }, [props.googleUserObject]);\n\n  var responseGoogle = function responseGoogle(googleUser) {\n    props.setGoogleUserObject(googleUser);\n  };\n\n  function handleDropDownMenuItem() {\n    __jsx(\"a\", {\n      className: \"tab\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 5\n      }\n    }, \"Peorja\");\n  }\n\n  return __jsx(\"div\", {\n    className: \"navbar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    className: \"w3-image logo\",\n    src: \"logo.png\",\n    alt: \"Header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"w3-hide-small\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/Officers\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"tab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, \"Our Team\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/Resources\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"tab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, \"Useful Resources\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/ProjectSeries\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"tab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, \"Project Series\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/Calendar\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: \"tab\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 15\n    }\n  }, \"Calendar\")), loggedIn ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    href: \"/UserProfile\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    className: \"profile\",\n    src: profileImgUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  })) : __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_1__[\"GoogleLogin\"], {\n    render: function render(renderProps) {\n      return __jsx(\"button\", {\n        className: \"login\",\n        onClick: renderProps.onClick,\n        disabled: renderProps.disabled,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 15\n        }\n      }, \"Login\");\n    },\n    clientId: process.env.GOOGLE_CLIENT_ID,\n    buttonText: \"Login\",\n    onSuccess: responseGoogle,\n    onFailure: responseGoogle,\n    cookiePolicy: \"single_host_origin\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    style: {\n      right: \"0\",\n      display: showNav ? \"block\" : \"none\",\n      zIndex: \"10\"\n    },\n    className: \"w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }\n  }), __jsx(\"button\", {\n    \"class\": \"w3-button w3-xlarge w3-hide-medium w3-hide-large\",\n    onClick: function onClick() {\n      setShowNav(!showNav);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 7\n    }\n  }, \"\\u2630\"));\n}\n\n_s(navbar, \"ySC5JU491gvvcZgv6t04OmPzSJ4=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XZWJzaXRlX0xheW91dC9OYXZiYXIuanM/OTY1MyJdLCJuYW1lcyI6WyJuYXZiYXIiLCJwcm9wcyIsInVzZVN0YXRlIiwibG9nZ2VkSW4iLCJzZXRMb2dnZWRJbiIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwcm9maWxlSW1nVXJsIiwic2V0UHJvZmlsZUltZ1VybCIsInNob3dOYXYiLCJzZXRTaG93TmF2IiwibmF2YmFyU3R5bGUiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ1c2VFZmZlY3QiLCJnb29nbGVVc2VyT2JqZWN0IiwicHJvZmlsZU9iaiIsImltYWdlVXJsIiwicmVzcG9uc2VHb29nbGUiLCJnb29nbGVVc2VyIiwic2V0R29vZ2xlVXNlck9iamVjdCIsImhhbmRsZURyb3BEb3duTWVudUl0ZW0iLCJyZW5kZXJQcm9wcyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwicmlnaHQiLCJ6SW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7RUFBQTs7RUFBQTs7RUFDcEMsZ0JBQWdDQyxzREFBUSxDQUFDLEtBQUQsQ0FBeEM7RUFBQSxJQUFPQyxRQUFQO0VBQUEsSUFBaUJDLFdBQWpCOztFQUNBLGlCQUFnQ0Ysc0RBQVEsQ0FBQyxFQUFELENBQXhDO0VBQUEsSUFBT0csUUFBUDtFQUFBLElBQWlCQyxXQUFqQjs7RUFDQSxpQkFBMENKLHNEQUFRLENBQUMsRUFBRCxDQUFsRDtFQUFBLElBQU9LLGFBQVA7RUFBQSxJQUFzQkMsZ0JBQXRCOztFQUNBLGlCQUE4Qk4sc0RBQVEsQ0FBQyxLQUFELENBQXRDO0VBQUEsSUFBT08sT0FB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RCxXQUFXLENBQUNFLFFBSHhCO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsV0FEaUI7SUFBQSxDQURyQjtJQVVFLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdCQVZ4QjtJQVdFLFVBQVUsRUFBQyxPQVhiO0lBWUUsU0FBUyxFQUFFVCxjQVpiO0lBYUUsU0FBUyxFQUFFQSxjQWJiO0lBY0UsWUFBWSxFQUFFLG9CQWRoQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBdkNKLENBTEYsRUE4REU7SUFDRSxLQUFLLEVBQUU7TUFDTFUsS0FBSyxFQUFFLEdBREY7TUFFTGpCLE9BQU8sRUFBRU4sT0FBTyxHQUFHLE9BQUgsR0FBYSxNQUZ4QjtNQUdMd0IsTUFBTSxFQUFFO0lBSEgsQ0FEVDtJQU1FLFNBQVMsRUFBQyw4REFOWjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBOURGLEVBNEVFO0lBQVEsU0FBTSxrREFBZDtJQUNFLE9BQU8sRUFBRSxtQkFBTTtNQUFDdkIsVUFBVSxDQUFDLENBQUNELE9BQUYsQ0FBVjtJQUFxQixDQUR2QztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLFlBNUVGLENBREY7QUFvRkQ7O0dBbEh1QlQsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvV2Vic2l0ZV9MYXlvdXQvTmF2YmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgR29vZ2xlTG9naW4gfSBmcm9tIFwicmVhY3QtZ29vZ2xlLWxvZ2luXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vLi4vY3NzL25hdmJhci5jc3NcIjtcbmltcG9ydCBcIi4uLy4uL2Nzcy9Ecm9wZG93bi5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2YmFyKHByb3BzKSB7XG4gIGNvbnN0IFtsb2dnZWRJbiwgc2V0TG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcHJvZmlsZUltZ1VybCwgc2V0UHJvZmlsZUltZ1VybF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Nob3dOYXYsIHNldFNob3dOYXZdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGxldCBuYXZiYXJTdHlsZSA9IHtcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiM1YWMwY2FcIixcbiAgICBoZWlnaHQ6IFwiM3JlbVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvcHMuZ29vZ2xlVXNlck9iamVjdCAmJiBwcm9wcy5nb29nbGVVc2VyT2JqZWN0LnByb2ZpbGVPYmopIHtcbiAgICAgIHNldExvZ2dlZEluKHRydWUpO1xuICAgICAgc2V0UHJvZmlsZUltZ1VybChwcm9wcy5nb29nbGVVc2VyT2JqZWN0LnByb2ZpbGVPYmouaW1hZ2VVcmwpO1xuICAgIH1cbiAgfSwgW3Byb3BzLmdvb2dsZVVzZXJPYmplY3RdKTtcblxuICBjb25zdCByZXNwb25zZUdvb2dsZSA9IGdvb2dsZVVzZXIgPT4ge1xuICAgIHByb3BzLnNldEdvb2dsZVVzZXJPYmplY3QoZ29vZ2xlVXNlcik7XG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlRHJvcERvd25NZW51SXRlbSgpIHtcbiAgICA8YSBjbGFzc05hbWU9XCJ0YWJcIj5QZW9yamE8L2E+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3My1pbWFnZSBsb2dvXCIgc3JjPVwibG9nby5wbmdcIiBhbHQ9XCJIZWFkZXJcIiAvPlxuICAgICAgPC9MaW5rPlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInczLWhpZGUtc21hbGxcIj5cbiAgICAgICAgey8qIFVuY29tbWVudCB0byBhZGQgZHJvcGRvd24gKGRlbGV0ZSBkdXBsaWNhdGUgbGluayBiZWxvdykgKi99XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wYnRuXCI+QWJvdXQ8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvT2ZmaWNlcnNcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2RHJvcERvd25cIj5PdXIgVGVhbTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8TGluayBocmVmPVwiL09mZmljZXJzXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFiXCI+T3VyIFRlYW08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9SZXNvdXJjZXNcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWJcIj5Vc2VmdWwgUmVzb3VyY2VzPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIHsvKiA8TGluayBocmVmPVwiL01lcmNoYW5kaXNlXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFiXCI+TWVyY2hhbmRpc2U8L2E+XG4gICAgICAgIDwvTGluaz4gKi99XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvUHJvamVjdFNlcmllc1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYlwiPlByb2plY3QgU2VyaWVzPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIHsvKiBVbmNvbW1lbnQgdG8gYWRkIGRyb3Bkb3duIChkZWxldGUgZHVwbGljYXRlIGxpbmsgYmVsb3cpICovfVxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGJ0blwiPkV2ZW50czwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9DYWxlbmRhclwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZEcm9wRG93blwiPkNhbGVuZGFyPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvQ2FsZW5kYXJcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFiXCI+Q2FsZW5kYXI8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAge2xvZ2dlZEluID8gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvVXNlclByb2ZpbGVcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvZmlsZVwiIHNyYz17cHJvZmlsZUltZ1VybH0gLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEdvb2dsZUxvZ2luXG4gICAgICAgICAgICByZW5kZXI9e3JlbmRlclByb3BzID0+IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ2luXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZW5kZXJQcm9wcy5vbkNsaWNrfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZW5kZXJQcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIGNsaWVudElkPXtwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lEfVxuICAgICAgICAgICAgYnV0dG9uVGV4dD1cIkxvZ2luXCJcbiAgICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XG4gICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlR29vZ2xlfVxuICAgICAgICAgICAgY29va2llUG9saWN5PXtcInNpbmdsZV9ob3N0X29yaWdpblwifVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICByaWdodDogXCIwXCIsXG4gICAgICAgICAgZGlzcGxheTogc2hvd05hdiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLFxuICAgICAgICAgIHpJbmRleDogXCIxMFwiLFxuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9XCJ3My1zaWRlYmFyIHczLWJhci1ibG9jayB3My1jb2xsYXBzZSB3My1jYXJkIHczLWFuaW1hdGUtcmlnaHRcIlxuICAgICAgPlxuICAgICAgICB7LyogPGJ1dHRvbiBjbGFzcz1cInczLWJhci1pdGVtIHczLWJ1dHRvbiB3My1oaWRlLWxhcmdlXCJcbiAgICAgICAgb25jbGljaz1cInczX2Nsb3NlKClcIj5DbG9zZSAmdGltZXM7PC9idXR0b24+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ3My1iYXItaXRlbSB3My1idXR0b25cIj5MaW5rIDE8L2E+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ3My1iYXItaXRlbSB3My1idXR0b25cIj5MaW5rIDI8L2E+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJ3My1iYXItaXRlbSB3My1idXR0b25cIj5MaW5rIDM8L2E+ICovfVxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwidzMtYnV0dG9uIHczLXhsYXJnZSB3My1oaWRlLW1lZGl1bSB3My1oaWRlLWxhcmdlXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFNob3dOYXYoIXNob3dOYXYpfX0+XG4gICAgICAgICAgJiM5Nzc2O1xuICAgICAgPC9idXR0b24+XG4gICAgICB7LyogPHAgc3R5bGU9e3t3aWR0aDogXCIxMDB2d1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JheVwiLCBhbGlnblNlbGY6ICdmbGV4LWVuZCd9fT5sb2dvdXQ8L3A+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Website_Layout/Navbar.js\n");

/***/ })

})