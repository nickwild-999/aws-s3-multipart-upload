webpackHotUpdate_N_E("pages/index-as-function",{

/***/ "./pages/index-as-function.js":
/*!************************************!*\
  !*** ./pages/index-as-function.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/nickwild/Programming/2. Nicci Topping/serverless/aws-s3-multipart-upload2/frontend/pages/index-as-function.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      fileSelected = _useState[0],\n      setfileSelected = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      uploadId = _useState2[0],\n      setuploadId = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      Fred = _useState3[0],\n      setFred = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      fileName = _useState4[0],\n      setfileName = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      fileType = _useState5[0],\n      setfileType = _useState5[1]; // const [uploadPC, setuploadPC]=useState()\n\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])('http://localhost:4000'),\n      backendUrl = _useState6[0],\n      setbackendUrl = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      progressArray = _useState7[0],\n      setprogressArray = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      uploadProgress = _useState8[0],\n      setuploadProgress = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (Fred) uploadMultipartFile();\n  }, [Fred]);\n\n  var fileHandler = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var _fileSelected, _fileName, _fileType;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              try {\n                _fileSelected = document.getElementById('myfile').files[0];\n                _fileName = _fileSelected.name;\n                _fileType = _fileSelected.type;\n                setfileSelected(_fileSelected);\n                setfileName(_fileName);\n                setfileType(_fileType); // console.log(fileSelected)\n              } catch (err) {\n                console.error(err, err.message);\n              }\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fileHandler(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var startUpload = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {\n      var params, resp, _uploadId;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              e.preventDefault();\n              params = {\n                fileName: fileName,\n                fileType: fileSelected.type\n              };\n              _context2.next = 5;\n              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"\".concat(backendUrl, \"/start-upload\"), {\n                params: params\n              });\n\n            case 5:\n              resp = _context2.sent;\n              _uploadId = resp.data.uploadId;\n              setFred(_uploadId);\n              _context2.next = 13;\n              break;\n\n            case 10:\n              _context2.prev = 10;\n              _context2.t0 = _context2[\"catch\"](0);\n              console.log(\"startupload \", _context2.t0);\n\n            case 13:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 10]]);\n    }));\n\n    return function startUpload(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var uploadMultipartFile = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n      var fileSize, CHUNK_SIZE, CHUNKS_COUNT, promisesArray, start, end, blob, index, getUploadUrlResp, presignedUrl, uploadResp, resolvedArray, uploadPartsArray, completeUploadResp;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.prev = 0;\n              console.log(\"I am Fred:\", Fred);\n              fileSize = fileSelected.size;\n              CHUNK_SIZE = 4900000; // 5MB\n\n              CHUNKS_COUNT = Math.floor(fileSize / CHUNK_SIZE) + 1;\n              promisesArray = [];\n              index = 1;\n\n            case 7:\n              if (!(index < CHUNKS_COUNT + 1)) {\n                _context3.next = 21;\n                break;\n              }\n\n              start = (index - 1) * CHUNK_SIZE;\n              end = index * CHUNK_SIZE;\n              blob = index < CHUNKS_COUNT ? fileSelected.slice(start, end) : fileSelected.slice(start); // Get presigned URL for each part\n\n              _context3.next = 13;\n              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"\".concat(backendUrl, \"/get-upload-url\"), {\n                params: {\n                  fileName: fileName,\n                  partNumber: index,\n                  uploadId: Fred\n                }\n              });\n\n            case 13:\n              getUploadUrlResp = _context3.sent;\n              presignedUrl = getUploadUrlResp.data.presignedUrl;\n              console.log('   Presigned URL ' + index + ': ' + presignedUrl + ' filetype ' + fileSelected.type); // Send part aws server\n\n              uploadResp = axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(presignedUrl, blob, {\n                headers: {\n                  'Content-Type': fileSelected.type\n                }\n              });\n              promisesArray.push(uploadResp);\n\n            case 18:\n              index++;\n              _context3.next = 7;\n              break;\n\n            case 21:\n              _context3.next = 23;\n              return Promise.all(promisesArray);\n\n            case 23:\n              resolvedArray = _context3.sent;\n              console.log(resolvedArray, ' resolvedAr');\n              uploadPartsArray = [];\n              resolvedArray.forEach(function (resolvedPromise, index) {\n                uploadPartsArray.push({\n                  ETag: resolvedPromise.headers.etag,\n                  PartNumber: index + 1\n                });\n              });\n              console.log(uploadPartsArray);\n              console.log(\"I am Fred:\", Fred);\n              console.log({\n                fileName: fileName\n              }); // CompleteMultipartUpload in the backend server\n\n              _context3.next = 32;\n              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(\"\".concat(backendUrl, \"/complete-upload\"), {\n                params: {\n                  fileName: fileName,\n                  parts: uploadPartsArray,\n                  uploadId: Fred\n                }\n              });\n\n            case 32:\n              completeUploadResp = _context3.sent;\n              console.log(completeUploadResp.data, \"complete upload response\");\n              _context3.next = 39;\n              break;\n\n            case 36:\n              _context3.prev = 36;\n              _context3.t0 = _context3[\"catch\"](0);\n              console.log(_context3.t0);\n\n            case 39:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[0, 36]]);\n    }));\n\n    return function uploadMultipartFile() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    onSubmit: startUpload,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 13\n    }\n  }, \"Upload Dataset:\"), __jsx(\"input\", {\n    type: \"file\",\n    id: \"myfile\",\n    onChange: fileHandler,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 13\n    }\n  }), __jsx(\"button\", {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 13\n    }\n  }, \"Upload\"))));\n};\n\n_s(Index, \"cwsfzGmVF9iSzjE+q6zIlTMXLpA=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgtYXMtZnVuY3Rpb24uanM/ZGU4ZiJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwiZmlsZVNlbGVjdGVkIiwic2V0ZmlsZVNlbGVjdGVkIiwidXBsb2FkSWQiLCJzZXR1cGxvYWRJZCIsIkZyZWQiLCJzZXRGcmVkIiwiZmlsZU5hbWUiLCJzZXRmaWxlTmFtZSIsImZpbGVUeXBlIiwic2V0ZmlsZVR5cGUiLCJiYWNrZW5kVXJsIiwic2V0YmFja2VuZFVybCIsInByb2dyZXNzQXJyYXkiLCJzZXRwcm9ncmVzc0FycmF5IiwidXBsb2FkUHJvZ3Jlc3MiLCJzZXR1cGxvYWRQcm9ncmVzcyIsInVzZUVmZmVjdCIsInVwbG9hZE11bHRpcGFydEZpbGUiLCJmaWxlSGFuZGxlciIsImUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmlsZXMiLCJuYW1lIiwidHlwZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJzdGFydFVwbG9hZCIsInByZXZlbnREZWZhdWx0IiwicGFyYW1zIiwiYXhpb3MiLCJnZXQiLCJyZXNwIiwiZGF0YSIsImxvZyIsImZpbGVTaXplIiwic2l6ZSIsIkNIVU5LX1NJWkUiLCJDSFVOS1NfQ09VTlQiLCJNYXRoIiwiZmxvb3IiLCJwcm9taXNlc0FycmF5IiwiaW5kZXgiLCJzdGFydCIsImVuZCIsImJsb2IiLCJzbGljZSIsInBhcnROdW1iZXIiLCJnZXRVcGxvYWRVcmxSZXNwIiwicHJlc2lnbmVkVXJsIiwidXBsb2FkUmVzcCIsInB1dCIsImhlYWRlcnMiLCJwdXNoIiwiUHJvbWlzZSIsImFsbCIsInJlc29sdmVkQXJyYXkiLCJ1cGxvYWRQYXJ0c0FycmF5IiwiZm9yRWFjaCIsInJlc29sdmVkUHJvbWlzZSIsIkVUYWciLCJldGFnIiwiUGFydE51bWJlciIsInBvc3QiLCJwYXJ0cyIsImNvbXBsZXRlVXBsb2FkUmVzcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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QixDQUFDaEMsSUFBL0IsRUFBcUMsMEJBQXJDO0FBMUR1QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQTZEdkJULHFCQUFPLENBQUNVLEdBQVI7O0FBN0R1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFEOztBQUFBLG9CQUFuQm5CLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxLQUF6Qjs7QUFpRUMsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxZQUFRLEVBQUVZLFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixFQUVFO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBRSxFQUFDLFFBQXRCO0FBQStCLFlBQVEsRUFBRVgsV0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsQ0FERixDQURGLENBREY7QUFhSCxDQTdIRDs7R0FBTXBCLEs7O0tBQUFBLEs7QUErSFNBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgtYXMtZnVuY3Rpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IEluZGV4PSgpID0+IHtcbiBjb25zdCBbZmlsZVNlbGVjdGVkLCBzZXRmaWxlU2VsZWN0ZWRdPXVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFt1cGxvYWRJZCwgc2V0dXBsb2FkSWRdPXVzZVN0YXRlKCcnKVxuICBjb25zdCBbRnJlZCwgc2V0RnJlZF09dXNlU3RhdGUoJycpXG4gIGNvbnN0IFtmaWxlTmFtZSwgc2V0ZmlsZU5hbWVdPXVzZVN0YXRlKCcnKVxuICBjb25zdCBbZmlsZVR5cGUsIHNldGZpbGVUeXBlXT11c2VTdGF0ZSgnJylcbiAgLy8gY29uc3QgW3VwbG9hZFBDLCBzZXR1cGxvYWRQQ109dXNlU3RhdGUoKVxuICBjb25zdCBbYmFja2VuZFVybCwgc2V0YmFja2VuZFVybF09dXNlU3RhdGUoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCcpXG4gIGNvbnN0IFtwcm9ncmVzc0FycmF5LCBzZXRwcm9ncmVzc0FycmF5XT11c2VTdGF0ZShbXSlcbiAgY29uc3QgW3VwbG9hZFByb2dyZXNzLCBzZXR1cGxvYWRQcm9ncmVzc109dXNlU3RhdGUoMClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChGcmVkKSBcbiAgICB1cGxvYWRNdWx0aXBhcnRGaWxlKClcbiAgfSwgW0ZyZWRdKTtcbiAgXG4gIGNvbnN0IGZpbGVIYW5kbGVyPWFzeW5jKGUpID0+e1xuICAgIHRyeSB7XG4gICAgICBsZXQgZmlsZVNlbGVjdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215ZmlsZScpLmZpbGVzWzBdXG4gICAgICBsZXQgZmlsZU5hbWUgPSBmaWxlU2VsZWN0ZWQubmFtZVxuICAgICAgbGV0IGZpbGVUeXBlID0gZmlsZVNlbGVjdGVkLnR5cGVcbiAgICAgIHNldGZpbGVTZWxlY3RlZChmaWxlU2VsZWN0ZWQpXG4gICAgICBzZXRmaWxlTmFtZShmaWxlTmFtZSlcbiAgICAgIHNldGZpbGVUeXBlKGZpbGVUeXBlKVxuICAgICAgLy8gY29uc29sZS5sb2coZmlsZVNlbGVjdGVkKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIsIGVyci5tZXNzYWdlKSBcbiAgICB9XG4gIH1cblxuICAgY29uc3Qgc3RhcnRVcGxvYWQ9YXN5bmMoZSkgPT57XG4gICAgdHJ5IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgXG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIGZpbGVOYW1lOiBmaWxlTmFtZSxcbiAgICAgICAgZmlsZVR5cGU6IGZpbGVTZWxlY3RlZC50eXBlXG4gICAgICB9O1xuICAgICAgXG4gICAgICBsZXQgcmVzcCA9IGF3YWl0IGF4aW9zLmdldChgJHtiYWNrZW5kVXJsfS9zdGFydC11cGxvYWRgLCB7IHBhcmFtcyB9KVxuICAgICAgY29uc3QgeyB1cGxvYWRJZCB9ID0gcmVzcC5kYXRhXG4gICAgICBzZXRGcmVkKHVwbG9hZElkKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coXCJzdGFydHVwbG9hZCBcIixlcnIpXG4gICAgfVxuICB9XG5cbiAgIGNvbnN0IHVwbG9hZE11bHRpcGFydEZpbGU9YXN5bmMoKSA9PnsgICAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiSSBhbSBGcmVkOlwiLEZyZWQpXG4gICAgICBjb25zdCBmaWxlU2l6ZSA9IGZpbGVTZWxlY3RlZC5zaXplXG4gICAgICBjb25zdCBDSFVOS19TSVpFID0gNDkwMDAwMCAvLyA1TUJcbiAgICAgIGNvbnN0IENIVU5LU19DT1VOVCA9IE1hdGguZmxvb3IoZmlsZVNpemUgLyBDSFVOS19TSVpFKSArIDFcbiAgICAgIGxldCBwcm9taXNlc0FycmF5ID0gW11cbiAgICAgIGxldCBzdGFydCwgZW5kLCBibG9iXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgQ0hVTktTX0NPVU5UICsgMTsgaW5kZXgrKykge1xuICAgICAgICBzdGFydCA9IChpbmRleCAtIDEpICogQ0hVTktfU0laRVxuICAgICAgICBlbmQgPSAoaW5kZXgpICogQ0hVTktfU0laRVxuICAgICAgICBibG9iID0gKGluZGV4IDwgQ0hVTktTX0NPVU5UKSA/IGZpbGVTZWxlY3RlZC5zbGljZShzdGFydCwgZW5kKSA6IGZpbGVTZWxlY3RlZC5zbGljZShzdGFydClcblxuICAgICAgICAvLyBHZXQgcHJlc2lnbmVkIFVSTCBmb3IgZWFjaCBwYXJ0XG4gICAgICAgIGxldCBnZXRVcGxvYWRVcmxSZXNwID0gYXdhaXQgYXhpb3MuZ2V0KGAke2JhY2tlbmRVcmx9L2dldC11cGxvYWQtdXJsYCwge1xuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgZmlsZU5hbWU6IGZpbGVOYW1lLFxuICAgICAgICAgICAgcGFydE51bWJlcjogaW5kZXgsXG4gICAgICAgICAgICB1cGxvYWRJZDogRnJlZCxcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGxldCB7IHByZXNpZ25lZFVybCB9ID0gZ2V0VXBsb2FkVXJsUmVzcC5kYXRhXG4gICAgICAgIGNvbnNvbGUubG9nKCcgICBQcmVzaWduZWQgVVJMICcgKyBpbmRleCArICc6ICcgKyBwcmVzaWduZWRVcmwgKyAnIGZpbGV0eXBlICcgKyBmaWxlU2VsZWN0ZWQudHlwZSlcblxuICAgICAgICAvLyBTZW5kIHBhcnQgYXdzIHNlcnZlclxuICAgICAgICBsZXQgdXBsb2FkUmVzcCA9IGF4aW9zLnB1dChwcmVzaWduZWRVcmwsIGJsb2IsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogZmlsZVNlbGVjdGVkLnR5cGVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHByb21pc2VzQXJyYXkucHVzaCh1cGxvYWRSZXNwKVxuICAgICAgfVxuXG5cbiAgICAgIGxldCByZXNvbHZlZEFycmF5ID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXNBcnJheSlcbiAgICAgIGNvbnNvbGUubG9nKHJlc29sdmVkQXJyYXksICcgcmVzb2x2ZWRBcicpXG5cbiAgICAgIGxldCB1cGxvYWRQYXJ0c0FycmF5ID0gW11cbiAgICAgIHJlc29sdmVkQXJyYXkuZm9yRWFjaCgocmVzb2x2ZWRQcm9taXNlLCBpbmRleCkgPT4ge1xuICAgICAgICB1cGxvYWRQYXJ0c0FycmF5LnB1c2goe1xuICAgICAgICAgIEVUYWc6IHJlc29sdmVkUHJvbWlzZS5oZWFkZXJzLmV0YWcsXG4gICAgICAgICAgUGFydE51bWJlcjogaW5kZXggKyAxXG4gICAgICAgIH0pXG5cbiAgICAgIH0pXG5cbiAgICAgIGNvbnNvbGUubG9nKHVwbG9hZFBhcnRzQXJyYXkpXG4gICAgICBjb25zb2xlLmxvZyhcIkkgYW0gRnJlZDpcIiwgRnJlZClcbiAgICAgIGNvbnNvbGUubG9nKHtmaWxlTmFtZX0pXG5cbiAgICAgIC8vIENvbXBsZXRlTXVsdGlwYXJ0VXBsb2FkIGluIHRoZSBiYWNrZW5kIHNlcnZlclxuICAgICAgbGV0IGNvbXBsZXRlVXBsb2FkUmVzcCA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YmFja2VuZFVybH0vY29tcGxldGUtdXBsb2FkYCwge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBmaWxlTmFtZTogZmlsZU5hbWUsXG4gICAgICAgICAgcGFydHM6IHVwbG9hZFBhcnRzQXJyYXksXG4gICAgICAgICAgdXBsb2FkSWQ6IEZyZWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKGNvbXBsZXRlVXBsb2FkUmVzcC5kYXRhLCBcImNvbXBsZXRlIHVwbG9hZCByZXNwb25zZVwiKVxuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxuICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdGFydFVwbG9hZH0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPlVwbG9hZCBEYXRhc2V0OjwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdmaWxlJyBpZD0nbXlmaWxlJyBvbkNoYW5nZT17ZmlsZUhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+XG4gICAgICAgICAgICAgIFVwbG9hZFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index-as-function.js\n");

/***/ })

})