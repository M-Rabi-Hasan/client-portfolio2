"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./src/pages/contact.jsx":
/*!*******************************!*\
  !*** ./src/pages/contact.jsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n// src/pages/contact.jsx\n\nvar _s = $RefreshSig$();\n\n\nconst Contact = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: '',\n        email: '',\n        message: ''\n    });\n    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleChange = (e)=>{\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setIsSubmitting(true);\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post('/api/contact', formData);\n            alert('Message sent successfully!');\n            setFormData({\n                name: '',\n                email: '',\n                message: ''\n            });\n        } catch (error) {\n            alert('There was an error sending your message.');\n        } finally{\n            setIsSubmitting(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-x-hidden text-neutral-300 antialiased   selection:bg-cyan-300 selection:text-cyan-900\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 -z-10 h-full w-full \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute top-0 z-[-2] h-screen w-screen bg-neutral-950   bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),   rgba(255,255,255,0))]\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-12 py-20 flex justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-bold mb-4\",\n                                children: \"Contact Us\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"For questions, technical assistance, or collaboration opportunities via the contact information provided.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mr-40\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"space-y-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-sm font-medium\",\n                                            children: \"Name\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 11\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            name: \"name\",\n                                            value: formData.name,\n                                            onChange: handleChange,\n                                            required: true,\n                                            className: \"w-full px-12 py-3 border border-gray-300 rounded\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-sm font-medium\",\n                                            children: \"Email\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 11\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            name: \"email\",\n                                            value: formData.email,\n                                            onChange: handleChange,\n                                            required: true,\n                                            className: \"w-full px-12 py-3 border border-gray-300 rounded\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-sm font-medium\",\n                                            children: \"Message\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 11\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                            name: \"message\",\n                                            value: formData.message,\n                                            onChange: handleChange,\n                                            required: true,\n                                            className: \"w-full px-12 py-10 border border-gray-300 rounded\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    disabled: isSubmitting,\n                                    className: \"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700\",\n                                    children: isSubmitting ? 'Sending...' : 'Send Message'\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Contact, \"G15wqdHt+MsoAKwVxqNVUTniAuk=\");\n_c = Contact;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29udGFjdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsd0JBQXdCOzs7QUFDUztBQUNQO0FBRTFCLE1BQU1FLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO1FBQUVLLE1BQU07UUFBSUMsT0FBTztRQUFJQyxTQUFTO0lBQUc7SUFDNUUsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1QsK0NBQVFBLENBQUM7SUFFakQsTUFBTVUsZUFBZSxDQUFDQztRQUNwQlAsWUFBWTtZQUFFLEdBQUdELFFBQVE7WUFBRSxDQUFDUSxFQUFFQyxNQUFNLENBQUNQLElBQUksQ0FBQyxFQUFFTSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7UUFBQztJQUM3RDtJQUVBLE1BQU1DLGVBQWUsT0FBT0g7UUFDMUJBLEVBQUVJLGNBQWM7UUFDaEJOLGdCQUFnQjtRQUVoQixJQUFJO1lBQ0YsTUFBTVIsa0RBQVUsQ0FBQyxnQkFBZ0JFO1lBQ2pDYyxNQUFNO1lBQ05iLFlBQVk7Z0JBQUVDLE1BQU07Z0JBQUlDLE9BQU87Z0JBQUlDLFNBQVM7WUFBRztRQUNqRCxFQUFFLE9BQU9XLE9BQU87WUFDZEQsTUFBTTtRQUNSLFNBQVU7WUFDUlIsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1U7UUFBSUMsV0FBVTs7MEJBR1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUViLDRFQUFDRDtvQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7MEJBTXJCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUdELFdBQVU7MENBQTBCOzs7Ozs7MENBQ3hDLDhEQUFDRTswQ0FBRTs7Ozs7Ozs7Ozs7O2tDQUVMLDhEQUFDSDt3QkFBSUMsV0FBVTtrQ0FDZiw0RUFBQ0c7NEJBQUtDLFVBQVVWOzRCQUFjTSxXQUFVOzs4Q0FDdEMsOERBQUNEOztzREFDQyw4REFBQ007NENBQU1MLFdBQVU7c0RBQTRCOzs7Ozs7c0RBQzdDLDhEQUFDTTs0Q0FDQ0MsTUFBSzs0Q0FDTHRCLE1BQUs7NENBQ0xRLE9BQU9WLFNBQVNFLElBQUk7NENBQ3BCdUIsVUFBVWxCOzRDQUNWbUIsUUFBUTs0Q0FDUlQsV0FBVTs7Ozs7Ozs7Ozs7OzhDQUdkLDhEQUFDRDs7c0RBQ0MsOERBQUNNOzRDQUFNTCxXQUFVO3NEQUE0Qjs7Ozs7O3NEQUM3Qyw4REFBQ007NENBQ0NDLE1BQUs7NENBQ0x0QixNQUFLOzRDQUNMUSxPQUFPVixTQUFTRyxLQUFLOzRDQUNyQnNCLFVBQVVsQjs0Q0FDVm1CLFFBQVE7NENBQ1JULFdBQVU7Ozs7Ozs7Ozs7Ozs4Q0FHZCw4REFBQ0Q7O3NEQUNDLDhEQUFDTTs0Q0FBTUwsV0FBVTtzREFBNEI7Ozs7OztzREFDN0MsOERBQUNVOzRDQUNDekIsTUFBSzs0Q0FDTFEsT0FBT1YsU0FBU0ksT0FBTzs0Q0FDdkJxQixVQUFVbEI7NENBQ1ZtQixRQUFROzRDQUNSVCxXQUFVOzs7Ozs7Ozs7Ozs7OENBR2QsOERBQUNXO29DQUNDSixNQUFLO29DQUNMSyxVQUFVeEI7b0NBQ1ZZLFdBQVU7OENBRVRaLGVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPekM7R0F0Rk1OO0tBQUFBO0FBd0ZOLGlFQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jb250YWN0LmpzeD9iY2RjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9wYWdlcy9jb250YWN0LmpzeFxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7IG5hbWU6ICcnLCBlbWFpbDogJycsIG1lc3NhZ2U6ICcnIH0pO1xyXG4gIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJc1N1Ym1pdHRpbmcodHJ1ZSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9jb250YWN0JywgZm9ybURhdGEpO1xyXG4gICAgICBhbGVydCgnTWVzc2FnZSBzZW50IHN1Y2Nlc3NmdWxseSEnKTtcclxuICAgICAgc2V0Rm9ybURhdGEoeyBuYW1lOiAnJywgZW1haWw6ICcnLCBtZXNzYWdlOiAnJyB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KCdUaGVyZSB3YXMgYW4gZXJyb3Igc2VuZGluZyB5b3VyIG1lc3NhZ2UuJyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRJc1N1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtaGlkZGVuIHRleHQtbmV1dHJhbC0zMDAgYW50aWFsaWFzZWRcclxuICAgICBzZWxlY3Rpb246YmctY3lhbi0zMDAgc2VsZWN0aW9uOnRleHQtY3lhbi05MDBcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCAtei0xMCBoLWZ1bGwgdy1mdWxsIFwiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHotWy0yXSBoLXNjcmVlbiB3LXNjcmVlbiBiZy1uZXV0cmFsLTk1MFxyXG4gICAgICAgICAgYmctW3JhZGlhbC1ncmFkaWVudChlbGxpcHNlXzgwJV84MCVfYXRfNTAlXy0yMCUscmdiYSgxMjAsMTE5LDE5OCwwLjMpLFxyXG4gICAgICAgICAgcmdiYSgyNTUsMjU1LDI1NSwwKSldXCI+IFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTEyIHB5LTIwIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPScnPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPkNvbnRhY3QgVXM8L2gxPlxyXG4gICAgICAgIDxwPkZvciBxdWVzdGlvbnMsIHRlY2huaWNhbCBhc3Npc3RhbmNlLCBvciBjb2xsYWJvcmF0aW9uIG9wcG9ydHVuaXRpZXMgdmlhIHRoZSBjb250YWN0IGluZm9ybWF0aW9uIHByb3ZpZGVkLjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtci00MCc+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTEyIHB5LTMgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTEyIHB5LTMgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+TWVzc2FnZTwvbGFiZWw+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubWVzc2FnZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTEyIHB5LTEwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgaG92ZXI6YmctYmx1ZS03MDBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpc1N1Ym1pdHRpbmcgPyAnU2VuZGluZy4uLicgOiAnU2VuZCBNZXNzYWdlJ31cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwiQ29udGFjdCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJuYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwiaXNTdWJtaXR0aW5nIiwic2V0SXNTdWJtaXR0aW5nIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiYWxlcnQiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInRleHRhcmVhIiwiYnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/contact.jsx\n"));

/***/ })

});