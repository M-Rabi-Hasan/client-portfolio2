"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects.jsx":
/*!*************************************!*\
  !*** ./src/components/Projects.jsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Image */ \"./node_modules/next/Image.js\");\n/* harmony import */ var next_Image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n // Ensure Link is imported\nconst Projects = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-b border-neutral-900 pb-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h2, {\n                whileInView: {\n                    opacity: 1,\n                    y: 0\n                },\n                initial: {\n                    opacity: 0,\n                    y: -100\n                },\n                transition: {\n                    duration: 0.5\n                },\n                className: \"my-20 text-center text-4xl\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\components\\\\Projects.jsx\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: _constants__WEBPACK_IMPORTED_MODULE_1__.PROJECTS.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-8 flex flex-wrap lg:justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                whileInView: {\n                                    opacity: 1,\n                                    x: 0\n                                },\n                                initial: {\n                                    opacity: 0,\n                                    x: -100\n                                },\n                                transition: {\n                                    duration: 1\n                                },\n                                className: \"w-full lg:w-1/4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: project.image,\n                                    width: 150,\n                                    height: 150,\n                                    alt: project.title,\n                                    className: \"mb-6 rounded\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\components\\\\Projects.jsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\components\\\\Projects.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                whileInView: {\n                                    opacity: 1,\n                                    x: 0\n                                },\n                                initial: {\n                                    opacity: 0,\n                                    x: 100\n                                },\n                                transition: {\n                                    duration: 1\n                                },\n                                className: \"w-full max-w-xl lg:w-3/4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                        className: \"mb-2 font-semibold\",\n                                        children: project.title\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\components\\\\Projects.jsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mb-4 text-neutral-400\",\n                                        children: project.description\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\components\\\\Projects.jsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    project.technologies.map((tech, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900\",\n                                            children: tech\n                                        }, index, false, {\n                                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\components\\\\Projects.jsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 21\n                                        }, undefined))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\components\\\\Projects.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\components\\\\Projects.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\components\\\\Projects.jsx\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\components\\\\Projects.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Projects;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSDtBQUNOLENBQUMsMEJBQTBCO0FBRzFELE1BQU1HLFdBQVc7SUFDZixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2YsOERBQUNKLGlEQUFNQSxDQUFDSyxFQUFFO2dCQUNWQyxhQUFhO29CQUFFQyxTQUFTO29CQUFHQyxHQUFHO2dCQUFFO2dCQUNoQ0MsU0FBUztvQkFBRUYsU0FBUztvQkFBR0MsR0FBRyxDQUFDO2dCQUFJO2dCQUMvQkUsWUFBWTtvQkFBRUMsVUFBVTtnQkFBRztnQkFDM0JQLFdBQVU7MEJBQTZCOzs7Ozs7MEJBQ3ZDLDhEQUFDRDswQkFDR0osZ0RBQVFBLENBQUNhLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdkIsOERBQUNYO3dCQUFnQkMsV0FBVTs7MENBQ3ZCLDhEQUFDSixpREFBTUEsQ0FBQ0csR0FBRztnQ0FDWEcsYUFBYTtvQ0FBRUMsU0FBUztvQ0FBR1EsR0FBRTtnQ0FBRTtnQ0FDL0JOLFNBQVM7b0NBQUVGLFNBQVM7b0NBQUdRLEdBQUcsQ0FBQztnQ0FBSTtnQ0FDL0JMLFlBQVk7b0NBQUVDLFVBQVU7Z0NBQUU7Z0NBQzFCUCxXQUFVOzBDQUNOLDRFQUFDWTtvQ0FDREMsS0FBS0osUUFBUUssS0FBSztvQ0FDbEJDLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JDLEtBQUtSLFFBQVFTLEtBQUs7b0NBQ2xCbEIsV0FBVTs7Ozs7Ozs7Ozs7MENBR2QsOERBQUNKLGlEQUFNQSxDQUFDRyxHQUFHO2dDQUNYRyxhQUFhO29DQUFFQyxTQUFTO29DQUFHUSxHQUFHO2dDQUFFO2dDQUNoQ04sU0FBUztvQ0FBRUYsU0FBUztvQ0FBR1EsR0FBRztnQ0FBSTtnQ0FDOUJMLFlBQVk7b0NBQUVDLFVBQVU7Z0NBQUU7Z0NBQzFCUCxXQUFVOztrREFDTiw4REFBQ21CO3dDQUFHbkIsV0FBVTtrREFBc0JTLFFBQVFTLEtBQUs7Ozs7OztrREFDakQsOERBQUNFO3dDQUFFcEIsV0FBVTtrREFBeUJTLFFBQVFZLFdBQVc7Ozs7OztvQ0FDeERaLFFBQVFhLFlBQVksQ0FBQ2QsR0FBRyxDQUFDLENBQUNlLE1BQU1iLHNCQUM3Qiw4REFBQ2M7NENBQWlCeEIsV0FBVTtzREFBNkV1QjsyQ0FBOUZiOzs7Ozs7Ozs7Ozs7dUJBdEJiQTs7Ozs7Ozs7Ozs7Ozs7OztBQTZCZjtLQXZDR1o7QUF5Q04saUVBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMuanN4P2NmNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUFJPSkVDVFMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xyXG5pbXBvcnQge21vdGlvbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L0ltYWdlXCI7IC8vIEVuc3VyZSBMaW5rIGlzIGltcG9ydGVkXHJcblxyXG5cclxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdib3JkZXItYiBib3JkZXItbmV1dHJhbC05MDAgcGItNCc+XHJcbiAgICA8bW90aW9uLmgyIFxyXG4gICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxyXG4gICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAtMTAwIH19XHJcbiAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjV9fVxyXG4gICAgY2xhc3NOYW1lPSdteS0yMCB0ZXh0LWNlbnRlciB0ZXh0LTR4bCc+UHJvamVjdHM8L21vdGlvbi5oMj4gIFxyXG4gICAgPGRpdj5cclxuICAgICAgIHtQUk9KRUNUUy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9J21iLTggZmxleCBmbGV4LXdyYXAgbGc6anVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdiBcclxuICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeDowIH19XHJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogLTEwMCB9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvNFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWFnZX0gXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTUwfSBcclxuICAgICAgICAgICAgICAgIGhlaWdodD17MTUwfSBcclxuICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdC50aXRsZX0gXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21iLTYgcm91bmRlZCcvPlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcblxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdiBcclxuICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxyXG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IDEwMCB9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy14bCBsZzp3LTMvNFwiPlxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT0nbWItMiBmb250LXNlbWlib2xkJz57cHJvamVjdC50aXRsZX08L2g2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtYi00IHRleHQtbmV1dHJhbC00MDAnPntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRlY2hub2xvZ2llcy5tYXAoKHRlY2gsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdtci0yIHJvdW5kZWQgYmctbmV1dHJhbC05MDAgcHgtMiBweS0xIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1wdXJwbGUtOTAwJz57dGVjaH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgKSl9XHJcbiAgICA8L2Rpdj4gIFxyXG4gICAgPC9kaXY+XHJcbiAgKX1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzIl0sIm5hbWVzIjpbIlBST0pFQ1RTIiwibW90aW9uIiwiSW1hZ2UiLCJQcm9qZWN0cyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwid2hpbGVJblZpZXciLCJvcGFjaXR5IiwieSIsImluaXRpYWwiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJtYXAiLCJwcm9qZWN0IiwiaW5kZXgiLCJ4IiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInRpdGxlIiwiaDYiLCJwIiwiZGVzY3JpcHRpb24iLCJ0ZWNobm9sb2dpZXMiLCJ0ZWNoIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Projects.jsx\n"));

/***/ })

});