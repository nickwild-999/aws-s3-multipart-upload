webpackHotUpdate_N_E("pages/index-as-function",{

/***/ "./pages/index-as-function.js":
/*!************************************!*\
  !*** ./pages/index-as-function.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/nickwild/Programming/2. Nicci Topping/serverless/aws-s3-multipart-upload2/frontend/pages/index-as-function.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      fileSelected = _useState[0],\n      setfileSelected = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      uploadId = _useState2[0],\n      setuploadId = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      Fred = _useState3[0],\n      setFred = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      fileName = _useState4[0],\n      setfileName = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      fileType = _useState5[0],\n      setfileType = _useState5[1]; // const [uploadPC, setuploadPC]=useState()\n\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('http://localhost:4000'),\n      backendUrl = _useState6[0],\n      setbackendUrl = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      progressArray = _useState7[0],\n      setProgressArray = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      uploadProgress = _useState8[0],\n      setUploadProgress = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (Fred) uploadMultipartFile();\n  }, [Fred]);\n\n  var fileHandler = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var _fileSelected, _fileName, _fileType;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              try {\n                _fileSelected = document.getElementById('myfile').files[0];\n                _fileName = _fileSelected.name;\n                _fileType = _fileSelected.type;\n                setfileSelected(_fileSelected);\n                setfileName(_fileName);\n                setfileType(_fileType); // console.log(fileSelected)\n              } catch (err) {\n                console.error(err, err.message);\n              }\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fileHandler(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var startUpload = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {\n      var params, resp, _uploadId;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              e.preventDefault();\n              params = {\n                fileName: fileName,\n                fileType: fileSelected.type\n              };\n              _context2.next = 5;\n              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"\".concat(backendUrl, \"/start-upload\"), {\n                params: params\n              });\n\n            case 5:\n              resp = _context2.sent;\n              _uploadId = resp.data.uploadId;\n              setFred(_uploadId);\n              _context2.next = 13;\n              break;\n\n            case 10:\n              _context2.prev = 10;\n              _context2.t0 = _context2[\"catch\"](0);\n              console.log(\"startupload \", _context2.t0);\n\n            case 13:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 10]]);\n    }));\n\n    return function startUpload(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var uploadMultipartFile = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context6) {\n        while (1) {\n          switch (_context6.prev = _context6.next) {\n            case 0:\n              _context6.prev = 0;\n              return _context6.delegateYield( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {\n                var fileSize, CHUNK_SIZE, CHUNKS_COUNT, promisesArray, start, end, blob, _loop, index, resolvedArray, uploadPartsArray, completeUploadResp;\n\n                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context5) {\n                  while (1) {\n                    switch (_context5.prev = _context5.next) {\n                      case 0:\n                        console.log(\"I am Fred:\", Fred);\n                        fileSize = fileSelected.size;\n                        CHUNK_SIZE = 10000000; // 10MB\n\n                        CHUNKS_COUNT = Math.floor(fileSize / CHUNK_SIZE) + 1;\n                        promisesArray = [];\n                        _loop = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _loop(index) {\n                          var getUploadUrlResp, uploadProgressHandler, presignedUrl, uploadResp;\n                          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _loop$(_context4) {\n                            while (1) {\n                              switch (_context4.prev = _context4.next) {\n                                case 0:\n                                  start = (index - 1) * CHUNK_SIZE;\n                                  end = index * CHUNK_SIZE;\n                                  blob = index < CHUNKS_COUNT ? fileSelected.slice(start, end) : fileSelected.slice(start); // Get presigned URL for each part\n\n                                  _context4.next = 5;\n                                  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"\".concat(backendUrl, \"/get-upload-url\"), {\n                                    params: {\n                                      fileName: fileName,\n                                      partNumber: index,\n                                      uploadId: Fred\n                                    }\n                                  });\n\n                                case 5:\n                                  getUploadUrlResp = _context4.sent;\n\n                                  uploadProgressHandler = /*#__PURE__*/function () {\n                                    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(progressEvent, blob, index) {\n                                      var currentProgress;\n                                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n                                        while (1) {\n                                          switch (_context3.prev = _context3.next) {\n                                            case 0:\n                                              if (!(progressEvent.loaded >= progressEvent.total)) {\n                                                _context3.next = 2;\n                                                break;\n                                              }\n\n                                              return _context3.abrupt(\"return\");\n\n                                            case 2:\n                                              currentProgress = Math.round(progressEvent.loaded * 100 / progressEvent.total);\n                                              setProgressArray(function (progressArray) {\n                                                progressArray[index - 1] = currentProgress;\n                                                var sum = progressArray.reduce(function (acc, curr) {\n                                                  return acc + curr;\n                                                });\n                                                setUploadProgress(Math.round(sum / CHUNKS_COUNT));\n                                                return progressArray;\n                                              });\n                                              console.log(progressArray);\n\n                                            case 5:\n                                            case \"end\":\n                                              return _context3.stop();\n                                          }\n                                        }\n                                      }, _callee3);\n                                    }));\n\n                                    return function uploadProgressHandler(_x3, _x4, _x5) {\n                                      return _ref4.apply(this, arguments);\n                                    };\n                                  }();\n\n                                  presignedUrl = getUploadUrlResp.data.presignedUrl;\n                                  console.log('   Presigned URL ' + index + ': ' + presignedUrl + ' filetype ' + fileSelected.type); // Send part aws server\n\n                                  uploadResp = axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(presignedUrl, blob, {\n                                    onUploadProgress: function onUploadProgress(e) {\n                                      return uploadProgressHandler(e, CHUNKS_COUNT, index);\n                                    },\n                                    headers: {\n                                      'Content-Type': fileSelected.type\n                                    }\n                                  });\n                                  promisesArray.push(uploadResp);\n\n                                case 11:\n                                case \"end\":\n                                  return _context4.stop();\n                              }\n                            }\n                          }, _loop);\n                        });\n                        index = 1;\n\n                      case 7:\n                        if (!(index < CHUNKS_COUNT + 1)) {\n                          _context5.next = 12;\n                          break;\n                        }\n\n                        return _context5.delegateYield(_loop(index), \"t0\", 9);\n\n                      case 9:\n                        index++;\n                        _context5.next = 7;\n                        break;\n\n                      case 12:\n                        _context5.next = 14;\n                        return Promise.all(promisesArray);\n\n                      case 14:\n                        resolvedArray = _context5.sent;\n                        console.log(resolvedArray, ' resolvedArray');\n                        uploadPartsArray = [];\n                        resolvedArray.forEach(function (resolvedPromise, index) {\n                          uploadPartsArray.push({\n                            ETag: resolvedPromise.headers.etag,\n                            PartNumber: index + 1\n                          });\n                        });\n                        console.log({\n                          uploadPartsArray: uploadPartsArray\n                        });\n                        console.log(\"I am Fred:\", Fred);\n                        console.log({\n                          fileName: fileName\n                        }); // CompleteMultipartUpload in the backend server\n\n                        _context5.next = 23;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(\"\".concat(backendUrl, \"/complete-upload\"), {\n                          params: {\n                            fileName: fileName,\n                            parts: uploadPartsArray,\n                            uploadId: Fred\n                          }\n                        });\n\n                      case 23:\n                        completeUploadResp = _context5.sent;\n                        console.log(completeUploadResp.data, \"complete upload response\");\n\n                      case 25:\n                      case \"end\":\n                        return _context5.stop();\n                    }\n                  }\n                }, _callee4);\n              })(), \"t0\", 2);\n\n            case 2:\n              _context6.next = 7;\n              break;\n\n            case 4:\n              _context6.prev = 4;\n              _context6.t1 = _context6[\"catch\"](0);\n              console.log(_context6.t1);\n\n            case 7:\n            case \"end\":\n              return _context6.stop();\n          }\n        }\n      }, _callee5, null, [[0, 4]]);\n    }));\n\n    return function uploadMultipartFile() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    onSubmit: startUpload,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 13\n    }\n  }, \"Upload Dataset:\"), __jsx(\"input\", {\n    type: \"file\",\n    id: \"myfile\",\n    onChange: fileHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 13\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 13\n    }\n  }, \"Upload\"), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 13\n    }\n  }, uploadProgress, \"% uploaded\"))));\n};\n\n_s(Index, \"YhuM/Qh8OaumCnsHNGs/EbD9J/Y=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgtYXMtZnVuY3Rpb24uanM/ZGU4ZiJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwiZmlsZVNlbGVjdGVkIiwic2V0ZmlsZVNlbGVjdGVkIiwidXBsb2FkSWQiLCJzZXR1cGxvYWRJZCIsIkZyZWQiLCJzZXRGcmVkIiwiZmlsZU5hbWUiLCJzZXRmaWxlTmFtZSIsImZpbGVUeXBlIiwic2V0ZmlsZVR5cGUiLCJiYWNrZW5kVXJsIiwic2V0YmFja2VuZFVybCIsInByb2dyZXNzQXJyYXkiLCJzZXRQcm9ncmVzc0FycmF5IiwidXBsb2FkUHJvZ3Jlc3MiLCJzZXRVcGxvYWRQcm9ncmVzcyIsInVzZUVmZmVjdCIsInVwbG9hZE11bHRpcGFydEZpbGUiLCJmaWxlSGFuZGxlciIsImUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmlsZXMiLCJuYW1lIiwidHlwZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJzdGFydFVwbG9hZCIsInByZXZlbnREZWZhdWx0IiwicGFyYW1zIiwiYXhpb3MiLCJnZXQiLCJyZXNwIiwiZGF0YSIsImxvZyIsImZpbGVTaXplIiwic2l6ZSIsIkNIVU5LX1NJWkUiLCJDSFVOS1NfQ09VTlQiLCJNYXRoIiwiZmxvb3IiLCJwcm9taXNlc0FycmF5IiwiaW5kZXgiLCJzdGFydCIsImVuZCIsImJsb2IiLCJzbGljZSIsInBhcnROdW1iZXIiLCJnZXRVcGxvYWRVcmxSZXNwIiwidXBsb2FkUHJvZ3Jlc3NIYW5kbGVyIiwicHJvZ3Jlc3NFdmVudCIsImxvYWRlZCIsInRvdGFsIiwiY3VycmVudFByb2dyZXNzIiwicm91bmQiLCJzdW0iLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwicHJlc2lnbmVkVXJsIiwidXBsb2FkUmVzcCIsInB1dCIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJoZWFkZXJzIiwicHVzaCIsIlByb21pc2UiLCJhbGwiLCJyZXNvbHZlZEFycmF5IiwidXBsb2FkUGFydHNBcnJheSIsImZvckVhY2giLCJyZXNvbHZlZFByb21pc2UiLCJFVGFnIiwiZXRhZyIsIlBhcnROdW1iZXIiLCJwb3N0IiwicGFydHMiLCJjb21wbGV0ZVVwbG9hZFJlc3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBQyxTQUFOQSxLQUFNLEdBQU07QUFBQTs7QUFBQSxrQkFDcUJDLHNEQUFRLENBQUMsSUFBRCxDQUQ3QjtBQUFBLE1BQ1ZDLFlBRFU7QUFBQSxNQUNJQyxlQURKOztBQUFBLG1CQUVjRixzREFBUSxDQUFDLEVBQUQsQ0FGdEI7QUFBQSxNQUVURyxRQUZTO0FBQUEsTUFFQ0MsV0FGRDs7QUFBQSxtQkFHTUosc0RBQVEsQ0FBQyxFQUFELENBSGQ7QUFBQSxNQUdUSyxJQUhTO0FBQUEsTUFHSEMsT0FIRzs7QUFBQSxtQkFJY04sc0RBQVEsQ0FBQyxFQUFELENBSnRCO0FBQUEsTUFJVE8sUUFKUztBQUFBLE1BSUNDLFdBSkQ7O0FBQUEsbUJBS2NSLHNEQUFRLENBQUMsRUFBRCxDQUx0QjtBQUFBLE1BS1RTLFFBTFM7QUFBQSxNQUtDQyxXQUxELGtCQU1oQjs7O0FBTmdCLG1CQU9rQlYsc0RBQVEsQ0FBQyx1QkFBRCxDQVAxQjtBQUFBLE1BT1RXLFVBUFM7QUFBQSxNQU9HQyxhQVBIOztBQUFBLG1CQVF3Qlosc0RBQVEsQ0FBQyxFQUFELENBUmhDO0FBQUEsTUFRVGEsYUFSUztBQUFBLE1BUU1DLGdCQVJOOztBQUFBLG1CQVMwQmQsc0RBQVEsQ0FBQyxDQUFELENBVGxDO0FBQUEsTUFTVGUsY0FUUztBQUFBLE1BU09DLGlCQVRQOztBQVdoQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSVosSUFBSixFQUNBYSxtQkFBbUI7QUFDcEIsR0FIUSxFQUdOLENBQUNiLElBQUQsQ0FITSxDQUFUOztBQUtBLE1BQU1jLFdBQVc7QUFBQSxnTUFBQyxpQkFBTUMsQ0FBTjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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YWdlcy9pbmRleC1hcy1mdW5jdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY29uc3QgSW5kZXg9KCkgPT4ge1xuIGNvbnN0IFtmaWxlU2VsZWN0ZWQsIHNldGZpbGVTZWxlY3RlZF09dXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3VwbG9hZElkLCBzZXR1cGxvYWRJZF09dXNlU3RhdGUoJycpXG4gIGNvbnN0IFtGcmVkLCBzZXRGcmVkXT11c2VTdGF0ZSgnJylcbiAgY29uc3QgW2ZpbGVOYW1lLCBzZXRmaWxlTmFtZV09dXNlU3RhdGUoJycpXG4gIGNvbnN0IFtmaWxlVHlwZSwgc2V0ZmlsZVR5cGVdPXVzZVN0YXRlKCcnKVxuICAvLyBjb25zdCBbdXBsb2FkUEMsIHNldHVwbG9hZFBDXT11c2VTdGF0ZSgpXG4gIGNvbnN0IFtiYWNrZW5kVXJsLCBzZXRiYWNrZW5kVXJsXT11c2VTdGF0ZSgnaHR0cDovL2xvY2FsaG9zdDo0MDAwJylcbiAgY29uc3QgW3Byb2dyZXNzQXJyYXksIHNldFByb2dyZXNzQXJyYXldPXVzZVN0YXRlKFtdKVxuICBjb25zdCBbdXBsb2FkUHJvZ3Jlc3MsIHNldFVwbG9hZFByb2dyZXNzXT11c2VTdGF0ZSgwKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKEZyZWQpIFxuICAgIHVwbG9hZE11bHRpcGFydEZpbGUoKVxuICB9LCBbRnJlZF0pO1xuICBcbiAgY29uc3QgZmlsZUhhbmRsZXI9YXN5bmMoZSkgPT57XG4gICAgdHJ5IHtcbiAgICAgIGxldCBmaWxlU2VsZWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlmaWxlJykuZmlsZXNbMF1cbiAgICAgIGxldCBmaWxlTmFtZSA9IGZpbGVTZWxlY3RlZC5uYW1lXG4gICAgICBsZXQgZmlsZVR5cGUgPSBmaWxlU2VsZWN0ZWQudHlwZVxuICAgICAgc2V0ZmlsZVNlbGVjdGVkKGZpbGVTZWxlY3RlZClcbiAgICAgIHNldGZpbGVOYW1lKGZpbGVOYW1lKVxuICAgICAgc2V0ZmlsZVR5cGUoZmlsZVR5cGUpXG4gICAgICAvLyBjb25zb2xlLmxvZyhmaWxlU2VsZWN0ZWQpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVyciwgZXJyLm1lc3NhZ2UpIFxuICAgIH1cbiAgfVxuXG4gICBjb25zdCBzdGFydFVwbG9hZD1hc3luYyhlKSA9PntcbiAgICB0cnkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgZmlsZU5hbWU6IGZpbGVOYW1lLFxuICAgICAgICBmaWxlVHlwZTogZmlsZVNlbGVjdGVkLnR5cGVcbiAgICAgIH07XG4gICAgICBcbiAgICAgIGxldCByZXNwID0gYXdhaXQgYXhpb3MuZ2V0KGAke2JhY2tlbmRVcmx9L3N0YXJ0LXVwbG9hZGAsIHsgcGFyYW1zIH0pXG4gICAgICBjb25zdCB7IHVwbG9hZElkIH0gPSByZXNwLmRhdGFcbiAgICAgIHNldEZyZWQodXBsb2FkSWQpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInN0YXJ0dXBsb2FkIFwiLGVycilcbiAgICB9XG4gIH1cblxuICAgY29uc3QgdXBsb2FkTXVsdGlwYXJ0RmlsZT1hc3luYygpID0+eyAgICBcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coXCJJIGFtIEZyZWQ6XCIsRnJlZClcbiAgICAgIGNvbnN0IGZpbGVTaXplID0gZmlsZVNlbGVjdGVkLnNpemVcbiAgICAgIGNvbnN0IENIVU5LX1NJWkUgPSAxMDAwMDAwMCAvLyAxME1CXG4gICAgICBjb25zdCBDSFVOS1NfQ09VTlQgPSBNYXRoLmZsb29yKGZpbGVTaXplIC8gQ0hVTktfU0laRSkgKyAxXG4gICAgICBsZXQgcHJvbWlzZXNBcnJheSA9IFtdXG4gICAgICBsZXQgc3RhcnQsIGVuZCwgYmxvYlxuICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IENIVU5LU19DT1VOVCArIDE7IGluZGV4KyspIHtcbiAgICAgICAgc3RhcnQgPSAoaW5kZXggLSAxKSAqIENIVU5LX1NJWkVcbiAgICAgICAgZW5kID0gKGluZGV4KSAqIENIVU5LX1NJWkVcbiAgICAgICAgYmxvYiA9IChpbmRleCA8IENIVU5LU19DT1VOVCkgPyBmaWxlU2VsZWN0ZWQuc2xpY2Uoc3RhcnQsIGVuZCkgOiBmaWxlU2VsZWN0ZWQuc2xpY2Uoc3RhcnQpXG5cbiAgICAgICAgLy8gR2V0IHByZXNpZ25lZCBVUkwgZm9yIGVhY2ggcGFydFxuICAgICAgICBsZXQgZ2V0VXBsb2FkVXJsUmVzcCA9IGF3YWl0IGF4aW9zLmdldChgJHtiYWNrZW5kVXJsfS9nZXQtdXBsb2FkLXVybGAsIHtcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBmaWxlTmFtZSxcbiAgICAgICAgICAgIHBhcnROdW1iZXI6IGluZGV4LFxuICAgICAgICAgICAgdXBsb2FkSWQ6IEZyZWQsXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cblxuXG4gICAgICAgIGNvbnN0IHVwbG9hZFByb2dyZXNzSGFuZGxlcj1hc3luYyhwcm9ncmVzc0V2ZW50LCBibG9iLCBpbmRleCk9PiB7XG4gICAgICAgICAgaWYgKHByb2dyZXNzRXZlbnQubG9hZGVkID49IHByb2dyZXNzRXZlbnQudG90YWwpIHJldHVybjtcbiAgXG4gICAgICAgICAgY29uc3QgY3VycmVudFByb2dyZXNzID0gTWF0aC5yb3VuZCgocHJvZ3Jlc3NFdmVudC5sb2FkZWQgKiAxMDApIC8gcHJvZ3Jlc3NFdmVudC50b3RhbCk7XG4gICAgICAgICAgc2V0UHJvZ3Jlc3NBcnJheSgocHJvZ3Jlc3NBcnJheSkgPT4ge1xuICAgICAgICAgICAgICBwcm9ncmVzc0FycmF5W2luZGV4LTFdID0gY3VycmVudFByb2dyZXNzO1xuICAgICAgICAgICAgICBjb25zdCBzdW0gPSBwcm9ncmVzc0FycmF5LnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyKTtcbiAgICAgICAgICAgICAgc2V0VXBsb2FkUHJvZ3Jlc3MoTWF0aC5yb3VuZChzdW0gLyBDSFVOS1NfQ09VTlQpKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHJldHVybiBwcm9ncmVzc0FycmF5O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHByb2dyZXNzQXJyYXkpXG4gICAgICB9XG5cblxuXG4gICAgICAgIGxldCB7IHByZXNpZ25lZFVybCB9ID0gZ2V0VXBsb2FkVXJsUmVzcC5kYXRhXG4gICAgICAgIGNvbnNvbGUubG9nKCcgICBQcmVzaWduZWQgVVJMICcgKyBpbmRleCArICc6ICcgKyBwcmVzaWduZWRVcmwgKyAnIGZpbGV0eXBlICcgKyBmaWxlU2VsZWN0ZWQudHlwZSlcblxuICAgICAgICAvLyBTZW5kIHBhcnQgYXdzIHNlcnZlclxuICAgICAgICBsZXQgdXBsb2FkUmVzcCA9IGF4aW9zLnB1dChwcmVzaWduZWRVcmwsIGJsb2IsIHtcbiAgICAgICAgICBvblVwbG9hZFByb2dyZXNzOiAoZSkgPT4gdXBsb2FkUHJvZ3Jlc3NIYW5kbGVyKGUsIENIVU5LU19DT1VOVCwgaW5kZXgpLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiBmaWxlU2VsZWN0ZWQudHlwZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcHJvbWlzZXNBcnJheS5wdXNoKHVwbG9hZFJlc3ApXG4gICAgICB9XG5cblxuICAgICAgbGV0IHJlc29sdmVkQXJyYXkgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlc0FycmF5KVxuICAgICAgY29uc29sZS5sb2cocmVzb2x2ZWRBcnJheSwgJyByZXNvbHZlZEFycmF5JylcblxuICAgICAgbGV0IHVwbG9hZFBhcnRzQXJyYXkgPSBbXVxuICAgICAgcmVzb2x2ZWRBcnJheS5mb3JFYWNoKChyZXNvbHZlZFByb21pc2UsIGluZGV4KSA9PiB7XG4gICAgICAgIHVwbG9hZFBhcnRzQXJyYXkucHVzaCh7XG4gICAgICAgICAgRVRhZzogcmVzb2x2ZWRQcm9taXNlLmhlYWRlcnMuZXRhZyxcbiAgICAgICAgICBQYXJ0TnVtYmVyOiBpbmRleCArIDFcbiAgICAgICAgfSlcblxuICAgICAgfSlcblxuICAgICAgY29uc29sZS5sb2coe3VwbG9hZFBhcnRzQXJyYXl9KVxuICAgICAgY29uc29sZS5sb2coXCJJIGFtIEZyZWQ6XCIsIEZyZWQpXG4gICAgICBjb25zb2xlLmxvZyh7ZmlsZU5hbWV9KVxuXG4gICAgICAvLyBDb21wbGV0ZU11bHRpcGFydFVwbG9hZCBpbiB0aGUgYmFja2VuZCBzZXJ2ZXJcbiAgICAgIGxldCBjb21wbGV0ZVVwbG9hZFJlc3AgPSBhd2FpdCBheGlvcy5wb3N0KGAke2JhY2tlbmRVcmx9L2NvbXBsZXRlLXVwbG9hZGAsIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgZmlsZU5hbWU6IGZpbGVOYW1lLFxuICAgICAgICAgIHBhcnRzOiB1cGxvYWRQYXJ0c0FycmF5LFxuICAgICAgICAgIHVwbG9hZElkOiBGcmVkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhjb21wbGV0ZVVwbG9hZFJlc3AuZGF0YSwgXCJjb21wbGV0ZSB1cGxvYWQgcmVzcG9uc2VcIilcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbiAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3RhcnRVcGxvYWR9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5VcGxvYWQgRGF0YXNldDo8L3A+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nZmlsZScgaWQ9J215ZmlsZScgb25DaGFuZ2U9e2ZpbGVIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlxuICAgICAgICAgICAgICBVcGxvYWRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdj57dXBsb2FkUHJvZ3Jlc3N9JSB1cGxvYWRlZDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index-as-function.js\n");

/***/ })

})