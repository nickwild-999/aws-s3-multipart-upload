webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/nickwild/Programming/2. Nicci Topping/serverless/aws-s3-multipart-upload2/frontend/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Index = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Index, _Component);\n\n  var _super = _createSuper(Index);\n\n  function Index(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, Index);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      fileSelected: null,\n      uploadId: '',\n      fileName: '',\n      backendUrl: 'http://localhost:4001',\n      uploadPC: 0,\n      progressArray: [],\n      uploadProgress: 0\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Index, [{\n    key: \"fileHandler\",\n    value: function () {\n      var _fileHandler = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {\n        var fileSelected, fileName;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                try {\n                  fileSelected = event.target.files[0];\n                  fileName = fileSelected.name;\n                  this.setState({\n                    fileSelected: fileSelected\n                  });\n                  this.setState({\n                    fileName: fileName\n                  });\n                } catch (err) {\n                  console.error(err, err.message);\n                }\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function fileHandler(_x) {\n        return _fileHandler.apply(this, arguments);\n      }\n\n      return fileHandler;\n    }()\n  }, {\n    key: \"startUpload\",\n    value: function () {\n      var _startUpload = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {\n        var params, resp, uploadId;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.prev = 0;\n                event.preventDefault();\n                params = {\n                  fileName: this.state.fileName,\n                  fileType: this.state.fileSelected.type\n                }; // console.log(\"fs\", this.state.fileSelected)\n                // console.log(\"params:\",params)\n\n                console.log(this.state.progressArray);\n                _context2.next = 6;\n                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(\"\".concat(this.state.backendUrl, \"/start-upload\"), {\n                  params: params\n                });\n\n              case 6:\n                resp = _context2.sent;\n                uploadId = resp.data.uploadId;\n                this.setState({\n                  uploadId: uploadId\n                });\n                this.uploadMultipartFile();\n                _context2.next = 15;\n                break;\n\n              case 12:\n                _context2.prev = 12;\n                _context2.t0 = _context2[\"catch\"](0);\n                console.log(_context2.t0);\n\n              case 15:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this, [[0, 12]]);\n      }));\n\n      function startUpload(_x2) {\n        return _startUpload.apply(this, arguments);\n      }\n\n      return startUpload;\n    }()\n  }, {\n    key: \"uploadMultipartFile\",\n    value: function () {\n      var _uploadMultipartFile = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {\n        var _this2 = this;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context6) {\n          while (1) {\n            switch (_context6.prev = _context6.next) {\n              case 0:\n                _context6.prev = 0;\n                return _context6.delegateYield( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {\n                  var fileSize, CHUNK_SIZE, CHUNKS_COUNT, promisesArray, start, end, blob, _loop, index, resolvedArray, uploadPartsArray, completeUploadResp;\n\n                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context5) {\n                    while (1) {\n                      switch (_context5.prev = _context5.next) {\n                        case 0:\n                          // console.log('Inside uploadMultipartFile')\n                          fileSize = _this2.state.fileSelected.size;\n                          CHUNK_SIZE = 10000000; // <5MB\n\n                          CHUNKS_COUNT = Math.floor(fileSize / CHUNK_SIZE) + 1;\n                          promisesArray = [];\n                          _loop = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _loop(index) {\n                            var getUploadUrlResp, uploadProgressHandler, presignedUrl, uploadResp;\n                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _loop$(_context4) {\n                              while (1) {\n                                switch (_context4.prev = _context4.next) {\n                                  case 0:\n                                    start = (index - 1) * CHUNK_SIZE;\n                                    end = index * CHUNK_SIZE;\n                                    blob = index < CHUNKS_COUNT ? _this2.state.fileSelected.slice(start, end) : _this2.state.fileSelected.slice(start);\n                                    console.log(blob.size); // Get presigned URL for each part\n\n                                    _context4.next = 6;\n                                    return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(\"\".concat(_this2.state.backendUrl, \"/get-upload-url\"), {\n                                      params: {\n                                        fileName: _this2.state.fileName,\n                                        partNumber: index,\n                                        uploadId: _this2.state.uploadId\n                                      }\n                                    });\n\n                                  case 6:\n                                    getUploadUrlResp = _context4.sent;\n\n                                    //new\n                                    uploadProgressHandler = /*#__PURE__*/function () {\n                                      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(progressEvent, blob, index) {\n                                        var currentProgress, sum;\n                                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n                                          while (1) {\n                                            switch (_context3.prev = _context3.next) {\n                                              case 0:\n                                                if (!(progressEvent.loaded >= progressEvent.total)) {\n                                                  _context3.next = 2;\n                                                  break;\n                                                }\n\n                                                return _context3.abrupt(\"return\");\n\n                                              case 2:\n                                                currentProgress = Math.round(progressEvent.loaded * 100 / progressEvent.total);\n\n                                                _this2.setState(function (progressArray) {\n                                                  _this2.state.progressArray[index - 1] = currentProgress;\n                                                });\n\n                                                sum = _this2.state.progressArray.reduce(function (acc, curr) {\n                                                  return acc + curr;\n                                                });\n\n                                                _this2.setState({\n                                                  uploadProgress: Math.round(sum / CHUNKS_COUNT)\n                                                });\n\n                                                console.log(_this2.state.progressArray);\n                                                console.log(_this2.state.uploadProgress);\n\n                                              case 8:\n                                              case \"end\":\n                                                return _context3.stop();\n                                            }\n                                          }\n                                        }, _callee3);\n                                      }));\n\n                                      return function uploadProgressHandler(_x3, _x4, _x5) {\n                                        return _ref.apply(this, arguments);\n                                      };\n                                    }();\n\n                                    presignedUrl = getUploadUrlResp.data.presignedUrl; // console.log('   Presigned URL ' + index + ': ' + presignedUrl + ' filetype ' + this.state.fileSelected.type)\n                                    // Send part aws server\n\n                                    uploadResp = axios__WEBPACK_IMPORTED_MODULE_8___default.a.put(presignedUrl, blob, {\n                                      onUploadProgress: function onUploadProgress(e) {\n                                        return uploadProgressHandler(e, CHUNKS_COUNT, index);\n                                      },\n                                      headers: {\n                                        'Content-Type': _this2.state.fileSelected.type\n                                      }\n                                    });\n                                    promisesArray.push(uploadResp);\n\n                                  case 11:\n                                  case \"end\":\n                                    return _context4.stop();\n                                }\n                              }\n                            }, _loop);\n                          });\n                          index = 1;\n\n                        case 6:\n                          if (!(index < CHUNKS_COUNT + 1)) {\n                            _context5.next = 11;\n                            break;\n                          }\n\n                          return _context5.delegateYield(_loop(index), \"t0\", 8);\n\n                        case 8:\n                          index++;\n                          _context5.next = 6;\n                          break;\n\n                        case 11:\n                          _context5.next = 13;\n                          return Promise.all(promisesArray);\n\n                        case 13:\n                          resolvedArray = _context5.sent;\n                          console.log(resolvedArray, ' resolvedArray');\n                          uploadPartsArray = [];\n                          resolvedArray.forEach(function (resolvedPromise, index) {\n                            uploadPartsArray.push({\n                              ETag: resolvedPromise.headers.etag,\n                              PartNumber: index + 1\n                            });\n                          });\n                          console.log(uploadPartsArray);\n                          console.log(\"uploadId:\", _this2.state.uploadId);\n                          console.log(_this2.state.fileName); // CompleteMultipartUpload in the backend server\n\n                          _context5.next = 22;\n                          return axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(\"\".concat(_this2.state.backendUrl, \"/complete-upload\"), {\n                            params: {\n                              fileName: _this2.state.fileName,\n                              parts: uploadPartsArray,\n                              uploadId: _this2.state.uploadId\n                            }\n                          });\n\n                        case 22:\n                          completeUploadResp = _context5.sent;\n                          console.log(completeUploadResp.data, \"complete upload response\");\n\n                        case 24:\n                        case \"end\":\n                          return _context5.stop();\n                      }\n                    }\n                  }, _callee4);\n                })(), \"t0\", 2);\n\n              case 2:\n                _context6.next = 7;\n                break;\n\n              case 4:\n                _context6.prev = 4;\n                _context6.t1 = _context6[\"catch\"](0);\n                console.log(_context6.t1);\n\n              case 7:\n              case \"end\":\n                return _context6.stop();\n            }\n          }\n        }, _callee5, null, [[0, 4]]);\n      }));\n\n      function uploadMultipartFile() {\n        return _uploadMultipartFile.apply(this, arguments);\n      }\n\n      return uploadMultipartFile;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 135,\n          columnNumber: 7\n        }\n      }, __jsx(\"form\", {\n        onSubmit: this.startUpload.bind(this),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 136,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 11\n        }\n      }, __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 13\n        }\n      }, \"Upload Dataset:\"), __jsx(\"input\", {\n        type: \"file\",\n        id: \"file\",\n        onChange: this.fileHandler.bind(this),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 139,\n          columnNumber: 13\n        }\n      }), __jsx(\"button\", {\n        type: \"submit\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 140,\n          columnNumber: 13\n        }\n      }, \"Upload\"), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 13\n        }\n      }, this.state.uploadProgress, \"% uploaded\"))));\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwic3RhdGUiLCJmaWxlU2VsZWN0ZWQiLCJ1cGxvYWRJZCIsImZpbGVOYW1lIiwiYmFja2VuZFVybCIsInVwbG9hZFBDIiwicHJvZ3Jlc3NBcnJheSIsInVwbG9hZFByb2dyZXNzIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsIm5hbWUiLCJzZXRTdGF0ZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmFtcyIsImZpbGVUeXBlIiwidHlwZSIsImxvZyIsImF4aW9zIiwiZ2V0IiwicmVzcCIsImRhdGEiLCJ1cGxvYWRNdWx0aXBhcnRGaWxlIiwiZmlsZVNpemUiLCJzaXplIiwiQ0hVTktfU0laRSIsIkNIVU5LU19DT1VOVCIsIk1hdGgiLCJmbG9vciIsInByb21pc2VzQXJyYXkiLCJpbmRleCIsInN0YXJ0IiwiZW5kIiwiYmxvYiIsInNsaWNlIiwicGFydE51bWJlciIsImdldFVwbG9hZFVybFJlc3AiLCJ1cGxvYWRQcm9ncmVzc0hhbmRsZXIiLCJwcm9ncmVzc0V2ZW50IiwibG9hZGVkIiwidG90YWwiLCJjdXJyZW50UHJvZ3Jlc3MiLCJyb3VuZCIsInN1bSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJwcmVzaWduZWRVcmwiLCJ1cGxvYWRSZXNwIiwicHV0Iiwib25VcGxvYWRQcm9ncmVzcyIsImUiLCJoZWFkZXJzIiwicHVzaCIsIlByb21pc2UiLCJhbGwiLCJyZXNvbHZlZEFycmF5IiwidXBsb2FkUGFydHNBcnJheSIsImZvckVhY2giLCJyZXNvbHZlZFByb21pc2UiLCJFVGFnIiwiZXRhZyIsIlBhcnROdW1iZXIiLCJwb3N0IiwicGFydHMiLCJjb21wbGV0ZVVwbG9hZFJlc3AiLCJzdGFydFVwbG9hZCIsImJpbmQiLCJmaWxlSGFuZGxlciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6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cGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlsZVNlbGVjdGVkOiBudWxsLFxuICAgICAgdXBsb2FkSWQ6ICcnLFxuICAgICAgZmlsZU5hbWU6ICcnLFxuICAgICAgYmFja2VuZFVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMScsXG4gICAgICB1cGxvYWRQQzowLFxuICAgICAgcHJvZ3Jlc3NBcnJheTpbXSxcbiAgICAgIHVwbG9hZFByb2dyZXNzOjBcbiAgICB9XG4gIH1cblxuICBhc3luYyBmaWxlSGFuZGxlcihldmVudCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZmlsZVNlbGVjdGVkID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgICBsZXQgZmlsZU5hbWUgPSBmaWxlU2VsZWN0ZWQubmFtZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGVTZWxlY3RlZCB9KVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGVOYW1lIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVyciwgZXJyLm1lc3NhZ2UpIFxuICAgIH1cbiAgfVxuICBcbiAgYXN5bmMgc3RhcnRVcGxvYWQoZXZlbnQpIHtcbiAgICB0cnkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBmaWxlTmFtZTogdGhpcy5zdGF0ZS5maWxlTmFtZSxcbiAgICAgICAgZmlsZVR5cGU6IHRoaXMuc3RhdGUuZmlsZVNlbGVjdGVkLnR5cGVcbiAgICAgIH07XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImZzXCIsIHRoaXMuc3RhdGUuZmlsZVNlbGVjdGVkKVxuICAgICAgLy8gY29uc29sZS5sb2coXCJwYXJhbXM6XCIscGFyYW1zKVxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5wcm9ncmVzc0FycmF5KVxuXG4gICAgICBsZXQgcmVzcCA9IGF3YWl0IGF4aW9zLmdldChgJHt0aGlzLnN0YXRlLmJhY2tlbmRVcmx9L3N0YXJ0LXVwbG9hZGAsIHsgcGFyYW1zIH0pXG4gICAgICBsZXQgeyB1cGxvYWRJZCB9ID0gcmVzcC5kYXRhXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXBsb2FkSWQgfSlcbiAgICAgIHRoaXMudXBsb2FkTXVsdGlwYXJ0RmlsZSgpXG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG4gIH1cblxuICBhc3luYyB1cGxvYWRNdWx0aXBhcnRGaWxlKCkge1xuICAgIHRyeSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnSW5zaWRlIHVwbG9hZE11bHRpcGFydEZpbGUnKVxuICAgICAgY29uc3QgZmlsZVNpemUgPSB0aGlzLnN0YXRlLmZpbGVTZWxlY3RlZC5zaXplXG4gICAgICBjb25zdCBDSFVOS19TSVpFID0gMTAwMDAwMDAgLy8gPDVNQlxuICAgICAgY29uc3QgQ0hVTktTX0NPVU5UID0gTWF0aC5mbG9vcihmaWxlU2l6ZSAvIENIVU5LX1NJWkUpICsgMVxuXG4gICAgICBsZXQgcHJvbWlzZXNBcnJheSA9IFtdXG4gICAgICBsZXQgc3RhcnQsIGVuZCwgYmxvYlxuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgQ0hVTktTX0NPVU5UICsgMTsgaW5kZXgrKykge1xuICAgICAgICBzdGFydCA9IChpbmRleCAtIDEpICogQ0hVTktfU0laRVxuICAgICAgICBlbmQgPSAoaW5kZXgpICogQ0hVTktfU0laRVxuICAgICAgICBibG9iID0gKGluZGV4IDwgQ0hVTktTX0NPVU5UKSA/IHRoaXMuc3RhdGUuZmlsZVNlbGVjdGVkLnNsaWNlKHN0YXJ0LCBlbmQpIDogdGhpcy5zdGF0ZS5maWxlU2VsZWN0ZWQuc2xpY2Uoc3RhcnQpXG5cbiAgICAgICAgY29uc29sZS5sb2coYmxvYi5zaXplKVxuICAgICAgICAvLyBHZXQgcHJlc2lnbmVkIFVSTCBmb3IgZWFjaCBwYXJ0XG4gICAgICAgIGxldCBnZXRVcGxvYWRVcmxSZXNwID0gYXdhaXQgYXhpb3MuZ2V0KGAke3RoaXMuc3RhdGUuYmFja2VuZFVybH0vZ2V0LXVwbG9hZC11cmxgLCB7XG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogdGhpcy5zdGF0ZS5maWxlTmFtZSxcbiAgICAgICAgICAgIHBhcnROdW1iZXI6IGluZGV4LFxuICAgICAgICAgICAgdXBsb2FkSWQ6IHRoaXMuc3RhdGUudXBsb2FkSWRcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAvL25ld1xuICAgIGNvbnN0IHVwbG9hZFByb2dyZXNzSGFuZGxlcj1hc3luYyhwcm9ncmVzc0V2ZW50LCBibG9iLCBpbmRleCkgPT57XG4gICAgICBpZiAocHJvZ3Jlc3NFdmVudC5sb2FkZWQgPj0gcHJvZ3Jlc3NFdmVudC50b3RhbCkgcmV0dXJuO1xuICAgICAgY29uc3QgY3VycmVudFByb2dyZXNzID0gTWF0aC5yb3VuZCgocHJvZ3Jlc3NFdmVudC5sb2FkZWQgKiAxMDApIC8gcHJvZ3Jlc3NFdmVudC50b3RhbCk7ICBcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJvZ3Jlc3NBcnJheSA9Pnt0aGlzLnN0YXRlLnByb2dyZXNzQXJyYXlbaW5kZXgtMV0gPSBjdXJyZW50UHJvZ3Jlc3N9KTtcbiAgICAgICAgY29uc3Qgc3VtID0gdGhpcy5zdGF0ZS5wcm9ncmVzc0FycmF5LnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXBsb2FkUHJvZ3Jlc3M6TWF0aC5yb3VuZChzdW0gLyBDSFVOS1NfQ09VTlQpfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucHJvZ3Jlc3NBcnJheSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS51cGxvYWRQcm9ncmVzcylcbiAgICB9XG4gICAgICAgIGxldCB7IHByZXNpZ25lZFVybCB9ID0gZ2V0VXBsb2FkVXJsUmVzcC5kYXRhXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCcgICBQcmVzaWduZWQgVVJMICcgKyBpbmRleCArICc6ICcgKyBwcmVzaWduZWRVcmwgKyAnIGZpbGV0eXBlICcgKyB0aGlzLnN0YXRlLmZpbGVTZWxlY3RlZC50eXBlKVxuICAgICAgICBcbiAgICAgICAgLy8gU2VuZCBwYXJ0IGF3cyBzZXJ2ZXJcbiAgICAgICAgbGV0IHVwbG9hZFJlc3AgPSBheGlvcy5wdXQocHJlc2lnbmVkVXJsLCBibG9iLCB7XG4gICAgICAgICAgb25VcGxvYWRQcm9ncmVzczogKGUpID0+IHVwbG9hZFByb2dyZXNzSGFuZGxlcihlLCBDSFVOS1NfQ09VTlQsIGluZGV4KSxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogdGhpcy5zdGF0ZS5maWxlU2VsZWN0ZWQudHlwZVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBwcm9taXNlc0FycmF5LnB1c2godXBsb2FkUmVzcClcbiAgICAgICAgXG4gICAgICB9XG5cbiAgICAgIGxldCByZXNvbHZlZEFycmF5ID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXNBcnJheSlcbiAgICAgIGNvbnNvbGUubG9nKHJlc29sdmVkQXJyYXksICcgcmVzb2x2ZWRBcnJheScpXG5cbiAgICAgIGxldCB1cGxvYWRQYXJ0c0FycmF5ID0gW11cbiAgICAgIHJlc29sdmVkQXJyYXkuZm9yRWFjaCgocmVzb2x2ZWRQcm9taXNlLCBpbmRleCkgPT4ge1xuICAgICAgICB1cGxvYWRQYXJ0c0FycmF5LnB1c2goe1xuICAgICAgICAgIEVUYWc6IHJlc29sdmVkUHJvbWlzZS5oZWFkZXJzLmV0YWcsXG4gICAgICAgICAgUGFydE51bWJlcjogaW5kZXggKyAxXG4gICAgICAgIH0pXG5cbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyh1cGxvYWRQYXJ0c0FycmF5KVxuICAgICAgY29uc29sZS5sb2coXCJ1cGxvYWRJZDpcIiwgdGhpcy5zdGF0ZS51cGxvYWRJZClcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZmlsZU5hbWUpXG5cblxuICAgICAgLy8gQ29tcGxldGVNdWx0aXBhcnRVcGxvYWQgaW4gdGhlIGJhY2tlbmQgc2VydmVyXG4gICAgICBsZXQgY29tcGxldGVVcGxvYWRSZXNwID0gYXdhaXQgYXhpb3MucG9zdChgJHt0aGlzLnN0YXRlLmJhY2tlbmRVcmx9L2NvbXBsZXRlLXVwbG9hZGAsIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgZmlsZU5hbWU6IHRoaXMuc3RhdGUuZmlsZU5hbWUsXG4gICAgICAgICAgcGFydHM6IHVwbG9hZFBhcnRzQXJyYXksXG4gICAgICAgICAgdXBsb2FkSWQ6IHRoaXMuc3RhdGUudXBsb2FkSWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgIFxuICAgICAgY29uc29sZS5sb2coY29tcGxldGVVcGxvYWRSZXNwLmRhdGEsIFwiY29tcGxldGUgdXBsb2FkIHJlc3BvbnNlXCIpXG5cblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc3RhcnRVcGxvYWQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPlVwbG9hZCBEYXRhc2V0OjwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdmaWxlJyBpZD0nZmlsZScgb25DaGFuZ2U9e3RoaXMuZmlsZUhhbmRsZXIuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5cbiAgICAgICAgICAgICAgVXBsb2FkXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXY+e3RoaXMuc3RhdGUudXBsb2FkUHJvZ3Jlc3N9JSB1cGxvYWRlZDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})