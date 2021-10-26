"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/apollo/query-result.js":
/*!*******************************************!*\
  !*** ./components/apollo/query-result.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/licinfo/DEV/danielaCapponi.github.io/components/apollo/query-result.js\";\n\n\n\nconst Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n`;\n\nconst QueryResult = ({\n  loading,\n  error,\n  data,\n  children\n}) => {\n  if (error) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: \"Error\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  if (loading) {\n    /*#__PURE__*/\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: \"cargando\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }, undefined);\n    /*   return <LoaderImg />; */\n\n  }\n\n  if (!data) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          children: \"No se obtuvo ning\\xFAn resultado.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false);\n  }\n\n  if (data) {\n    return children;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QueryResult);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Fwb2xsby9xdWVyeS1yZXN1bHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUVBLE1BQU1DLFNBQVMsR0FBR0QsOERBQVc7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsQ0FKQTs7QUFNQSxNQUFNRyxXQUFXLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxPQUFGO0FBQVdDLEVBQUFBLEtBQVg7QUFBa0JDLEVBQUFBLElBQWxCO0FBQXdCQyxFQUFBQTtBQUF4QixDQUFELEtBQXdDO0FBQzFELE1BQUlGLEtBQUosRUFBVztBQUVULHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0Q7O0FBQ0QsTUFBSUQsT0FBSixFQUFhO0FBQ1g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUNEOztBQUNELE1BQUksQ0FBQ0UsSUFBTCxFQUFXO0FBQ1Qsd0JBQ0U7QUFBQSw2QkFDRSw4REFBQyxTQUFEO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYscUJBREY7QUFPRDs7QUFDRCxNQUFJQSxJQUFKLEVBQVU7QUFDUixXQUFPQyxRQUFQO0FBQ0Q7QUFDRixDQXJCRDs7QUF1QkEsaUVBQWVKLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQtdHJpbGF0ZXJhLy4vY29tcG9uZW50cy9hcG9sbG8vcXVlcnktcmVzdWx0LmpzPzAwZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFF1ZXJ5UmVzdWx0ID0gKHsgbG9hZGluZywgZXJyb3IsIGRhdGEsIGNoaWxkcmVuIH0pID0+IHtcbiAgaWYgKGVycm9yKSB7XG5cbiAgICByZXR1cm4gPHA+RXJyb3I8L3A+XG4gIH1cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICA8cD5jYXJnYW5kbzwvcD5cbiAgICAvKiAgIHJldHVybiA8TG9hZGVySW1nIC8+OyAqL1xuICB9XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxwPk5vIHNlIG9idHV2byBuaW5nw7puIHJlc3VsdGFkby48L3A+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuICBpZiAoZGF0YSkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVlcnlSZXN1bHQ7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiQ29udGFpbmVyIiwiZGl2IiwiUXVlcnlSZXN1bHQiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/apollo/query-result.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _query_result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/query-result */ \"./components/apollo/query-result.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/licinfo/DEV/danielaCapponi.github.io/pages/index.js\";\n\n\n/* import HomePage from \"@/components/Pages/Home/HomePage\"; */\n\n\n/* import { HOMEITEMS } from \"@/queries/pages/getHomeItems\"; */\n\n\nconst StyledMain = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().main)`\n  min-height: 100vh;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: ${({\n  theme\n}) => theme.background};\n`;\nfunction Home() {\n  /*   const { loading, error, data } = useQuery(HOMEITEMS);\n   */\n  const loading = true;\n  const error = null;\n  const data = null;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(StyledMain, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_query_result__WEBPACK_IMPORTED_MODULE_2__.default, {\n      error: error,\n      loading: loading,\n      data: data,\n      children: \"Hola\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTs7O0FBRUEsTUFBTUksVUFBVSxHQUFHRiwrREFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsQ0FBQztBQUFFSSxFQUFBQTtBQUFGLENBQUQsS0FBZUEsS0FBSyxDQUFDQyxVQUFXO0FBQ3RELENBUkE7QUFVZSxTQUFTQyxJQUFULEdBQWdCO0FBQzdCO0FBQ0Y7QUFDRSxRQUFNQyxPQUFPLEdBQUcsSUFBaEI7QUFDQSxRQUFNQyxLQUFLLEdBQUcsSUFBZDtBQUNBLFFBQU1DLElBQUksR0FBRyxJQUFiO0FBRUEsc0JBQ0UsOERBQUMsVUFBRDtBQUFBLDJCQUNFLDhEQUFDLGtEQUFEO0FBQWEsV0FBSyxFQUFFRCxLQUFwQjtBQUEyQixhQUFPLEVBQUVELE9BQXBDO0FBQTZDLFVBQUksRUFBRUUsSUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC10cmlsYXRlcmEvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5LCBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG4vKiBpbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIkAvY29tcG9uZW50cy9QYWdlcy9Ib21lL0hvbWVQYWdlXCI7ICovXG5pbXBvcnQgUXVlcnlSZXN1bHQgZnJvbSBcIkAvcXVlcnktcmVzdWx0XCI7XG5cbi8qIGltcG9ydCB7IEhPTUVJVEVNUyB9IGZyb20gXCJAL3F1ZXJpZXMvcGFnZXMvZ2V0SG9tZUl0ZW1zXCI7ICovXG5cbmNvbnN0IFN0eWxlZE1haW4gPSBzdHlsZWQubWFpbmBcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmR9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLyogICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShIT01FSVRFTVMpO1xuICAgKi9cbiAgY29uc3QgbG9hZGluZyA9IHRydWVcbiAgY29uc3QgZXJyb3IgPSBudWxsXG4gIGNvbnN0IGRhdGEgPSBudWxsXG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkTWFpbj5cbiAgICAgIDxRdWVyeVJlc3VsdCBlcnJvcj17ZXJyb3J9IGxvYWRpbmc9e2xvYWRpbmd9IGRhdGE9e2RhdGF9PlxuICAgICAgICBIb2xhXG4gICAgICAgIHsvKiA8SG9tZVBhZ2UgaW5mbz17ZGF0YX0gLz4gKi99XG4gICAgICA8L1F1ZXJ5UmVzdWx0PlxuICAgIDwvU3R5bGVkTWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsImdxbCIsInN0eWxlZCIsIlF1ZXJ5UmVzdWx0IiwiU3R5bGVkTWFpbiIsIm1haW4iLCJ0aGVtZSIsImJhY2tncm91bmQiLCJIb21lIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();