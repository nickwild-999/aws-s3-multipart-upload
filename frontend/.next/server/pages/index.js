module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/nickwild/Programming/2. Nicci Topping/serverless/aws-s3-multipart-upload2/frontend/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      fileSelected: null,\n      uploadId: '',\n      fileName: '',\n      backendUrl: 'http://localhost:4001',\n      uploadPC: 0,\n      progressArray: [],\n      uploadProgress: 0\n    };\n  }\n\n  async fileHandler(event) {\n    try {\n      let fileSelected = event.target.files[0];\n      let fileName = fileSelected.name;\n      this.setState({\n        fileSelected\n      });\n      this.setState({\n        fileName\n      });\n    } catch (err) {\n      console.error(err, err.message);\n    }\n  }\n\n  async startUpload(event) {\n    try {\n      event.preventDefault();\n      const params = {\n        fileName: this.state.fileName,\n        fileType: this.state.fileSelected.type\n      }; // console.log(\"fs\", this.state.fileSelected)\n      // console.log(\"params:\",params)\n\n      console.log(this.state.progressArray);\n      let resp = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${this.state.backendUrl}/start-upload`, {\n        params\n      });\n      let {\n        uploadId\n      } = resp.data;\n      this.setState({\n        uploadId\n      });\n      this.uploadMultipartFile();\n    } catch (err) {\n      console.log(err);\n    }\n  }\n\n  async uploadMultipartFile() {\n    try {\n      // console.log('Inside uploadMultipartFile')\n      const fileSize = this.state.fileSelected.size;\n      const CHUNK_SIZE = 10000000; // <5MB\n\n      const CHUNKS_COUNT = Math.floor(fileSize / CHUNK_SIZE) + 1;\n      let promisesArray = [];\n      let start, end, blob;\n\n      for (let index = 1; index < CHUNKS_COUNT + 1; index++) {\n        start = (index - 1) * CHUNK_SIZE;\n        end = index * CHUNK_SIZE;\n        blob = index < CHUNKS_COUNT ? this.state.fileSelected.slice(start, end) : this.state.fileSelected.slice(start);\n        console.log(blob.size); // Get presigned URL for each part\n\n        let getUploadUrlResp = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${this.state.backendUrl}/get-upload-url`, {\n          params: {\n            fileName: this.state.fileName,\n            partNumber: index,\n            uploadId: this.state.uploadId\n          }\n        }); //upload progress handler\n\n        const uploadProgressHandler = async (progressEvent, blob, index) => {\n          if (progressEvent.loaded >= progressEvent.total) return;\n          const currentProgress = Math.round(progressEvent.loaded * 100 / progressEvent.total);\n          this.setState(progressArray => {\n            this.state.progressArray[index - 1] = currentProgress;\n          });\n          const sum = this.state.progressArray.reduce((acc, curr) => acc + curr);\n          this.setState({\n            uploadProgress: Math.round(sum / CHUNKS_COUNT)\n          });\n          console.log(this.state.progressArray);\n          console.log(this.state.uploadProgress);\n        };\n\n        let {\n          presignedUrl\n        } = getUploadUrlResp.data; // console.log('   Presigned URL ' + index + ': ' + presignedUrl + ' filetype ' + this.state.fileSelected.type)\n        // Send part aws server\n\n        let uploadResp = axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(presignedUrl, blob, {\n          onUploadProgress: e => uploadProgressHandler(e, CHUNKS_COUNT, index),\n          headers: {\n            'Content-Type': this.state.fileSelected.type\n          }\n        });\n        promisesArray.push(uploadResp);\n      }\n\n      let resolvedArray = await Promise.all(promisesArray);\n      console.log(resolvedArray, ' resolvedArray');\n      let uploadPartsArray = [];\n      resolvedArray.forEach((resolvedPromise, index) => {\n        uploadPartsArray.push({\n          ETag: resolvedPromise.headers.etag,\n          PartNumber: index + 1\n        });\n      });\n      console.log(uploadPartsArray);\n      console.log(\"uploadId:\", this.state.uploadId);\n      console.log(this.state.fileName); // CompleteMultipartUpload in the backend server\n\n      let completeUploadResp = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${this.state.backendUrl}/complete-upload`, {\n        params: {\n          fileName: this.state.fileName,\n          parts: uploadPartsArray,\n          uploadId: this.state.uploadId\n        }\n      });\n      console.log(completeUploadResp.data, \"complete upload response\");\n    } catch (err) {\n      console.log(err);\n    }\n  }\n\n  render() {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 7\n      }\n    }, __jsx(\"form\", {\n      onSubmit: this.startUpload.bind(this),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 9\n      }\n    }, __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 11\n      }\n    }, __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 13\n      }\n    }, \"Upload Dataset:\"), __jsx(\"input\", {\n      type: \"file\",\n      id: \"file\",\n      onChange: this.fileHandler.bind(this),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 13\n      }\n    }), __jsx(\"button\", {\n      type: \"submit\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 13\n      }\n    }, \"Upload\"), __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 13\n      }\n    }, this.state.uploadProgress, \"% uploaded\"))));\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZmlsZVNlbGVjdGVkIiwidXBsb2FkSWQiLCJmaWxlTmFtZSIsImJhY2tlbmRVcmwiLCJ1cGxvYWRQQyIsInByb2dyZXNzQXJyYXkiLCJ1cGxvYWRQcm9ncmVzcyIsImZpbGVIYW5kbGVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsIm5hbWUiLCJzZXRTdGF0ZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJzdGFydFVwbG9hZCIsInByZXZlbnREZWZhdWx0IiwicGFyYW1zIiwiZmlsZVR5cGUiLCJ0eXBlIiwibG9nIiwicmVzcCIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsInVwbG9hZE11bHRpcGFydEZpbGUiLCJmaWxlU2l6ZSIsInNpemUiLCJDSFVOS19TSVpFIiwiQ0hVTktTX0NPVU5UIiwiTWF0aCIsImZsb29yIiwicHJvbWlzZXNBcnJheSIsInN0YXJ0IiwiZW5kIiwiYmxvYiIsImluZGV4Iiwic2xpY2UiLCJnZXRVcGxvYWRVcmxSZXNwIiwicGFydE51bWJlciIsInVwbG9hZFByb2dyZXNzSGFuZGxlciIsInByb2dyZXNzRXZlbnQiLCJsb2FkZWQiLCJ0b3RhbCIsImN1cnJlbnRQcm9ncmVzcyIsInJvdW5kIiwic3VtIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInByZXNpZ25lZFVybCIsInVwbG9hZFJlc3AiLCJwdXQiLCJvblVwbG9hZFByb2dyZXNzIiwiZSIsImhlYWRlcnMiLCJwdXNoIiwicmVzb2x2ZWRBcnJheSIsIlByb21pc2UiLCJhbGwiLCJ1cGxvYWRQYXJ0c0FycmF5IiwiZm9yRWFjaCIsInJlc29sdmVkUHJvbWlzZSIsIkVUYWciLCJldGFnIiwiUGFydE51bWJlciIsImNvbXBsZXRlVXBsb2FkUmVzcCIsInBvc3QiLCJwYXJ0cyIsInJlbmRlciIs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TyxjQUFqQixlQU5GLENBREYsQ0FERixDQURGO0FBY0Q7O0FBaEowQyIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpbGVTZWxlY3RlZDogbnVsbCxcbiAgICAgIHVwbG9hZElkOiAnJyxcbiAgICAgIGZpbGVOYW1lOiAnJyxcbiAgICAgIGJhY2tlbmRVcmw6ICdodHRwOi8vbG9jYWxob3N0OjQwMDEnLFxuICAgICAgdXBsb2FkUEM6MCxcbiAgICAgIHByb2dyZXNzQXJyYXk6W10sXG4gICAgICB1cGxvYWRQcm9ncmVzczowXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZmlsZUhhbmRsZXIoZXZlbnQpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGZpbGVTZWxlY3RlZCA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgICAgbGV0IGZpbGVOYW1lID0gZmlsZVNlbGVjdGVkLm5hbWVcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlU2VsZWN0ZWQgfSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlTmFtZSB9KVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIsIGVyci5tZXNzYWdlKSBcbiAgICB9XG4gIH1cbiAgXG4gIGFzeW5jIHN0YXJ0VXBsb2FkKGV2ZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgZmlsZU5hbWU6IHRoaXMuc3RhdGUuZmlsZU5hbWUsXG4gICAgICAgIGZpbGVUeXBlOiB0aGlzLnN0YXRlLmZpbGVTZWxlY3RlZC50eXBlXG4gICAgICB9O1xuICAgICAgLy8gY29uc29sZS5sb2coXCJmc1wiLCB0aGlzLnN0YXRlLmZpbGVTZWxlY3RlZClcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicGFyYW1zOlwiLHBhcmFtcylcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucHJvZ3Jlc3NBcnJheSlcblxuICAgICAgbGV0IHJlc3AgPSBhd2FpdCBheGlvcy5nZXQoYCR7dGhpcy5zdGF0ZS5iYWNrZW5kVXJsfS9zdGFydC11cGxvYWRgLCB7IHBhcmFtcyB9KVxuICAgICAgbGV0IHsgdXBsb2FkSWQgfSA9IHJlc3AuZGF0YVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVwbG9hZElkIH0pXG4gICAgICB0aGlzLnVwbG9hZE11bHRpcGFydEZpbGUoKVxuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgdXBsb2FkTXVsdGlwYXJ0RmlsZSgpIHtcbiAgICB0cnkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ0luc2lkZSB1cGxvYWRNdWx0aXBhcnRGaWxlJylcbiAgICAgIGNvbnN0IGZpbGVTaXplID0gdGhpcy5zdGF0ZS5maWxlU2VsZWN0ZWQuc2l6ZVxuICAgICAgY29uc3QgQ0hVTktfU0laRSA9IDEwMDAwMDAwIC8vIDw1TUJcbiAgICAgIGNvbnN0IENIVU5LU19DT1VOVCA9IE1hdGguZmxvb3IoZmlsZVNpemUgLyBDSFVOS19TSVpFKSArIDFcblxuICAgICAgbGV0IHByb21pc2VzQXJyYXkgPSBbXVxuICAgICAgbGV0IHN0YXJ0LCBlbmQsIGJsb2JcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IENIVU5LU19DT1VOVCArIDE7IGluZGV4KyspIHtcbiAgICAgICAgc3RhcnQgPSAoaW5kZXggLSAxKSAqIENIVU5LX1NJWkVcbiAgICAgICAgZW5kID0gKGluZGV4KSAqIENIVU5LX1NJWkVcbiAgICAgICAgYmxvYiA9IChpbmRleCA8IENIVU5LU19DT1VOVCkgPyB0aGlzLnN0YXRlLmZpbGVTZWxlY3RlZC5zbGljZShzdGFydCwgZW5kKSA6IHRoaXMuc3RhdGUuZmlsZVNlbGVjdGVkLnNsaWNlKHN0YXJ0KVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGJsb2Iuc2l6ZSlcbiAgICAgICAgLy8gR2V0IHByZXNpZ25lZCBVUkwgZm9yIGVhY2ggcGFydFxuICAgICAgICBsZXQgZ2V0VXBsb2FkVXJsUmVzcCA9IGF3YWl0IGF4aW9zLmdldChgJHt0aGlzLnN0YXRlLmJhY2tlbmRVcmx9L2dldC11cGxvYWQtdXJsYCwge1xuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgZmlsZU5hbWU6IHRoaXMuc3RhdGUuZmlsZU5hbWUsXG4gICAgICAgICAgICBwYXJ0TnVtYmVyOiBpbmRleCxcbiAgICAgICAgICAgIHVwbG9hZElkOiB0aGlzLnN0YXRlLnVwbG9hZElkXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgLy91cGxvYWQgcHJvZ3Jlc3MgaGFuZGxlclxuICAgIGNvbnN0IHVwbG9hZFByb2dyZXNzSGFuZGxlcj1hc3luYyhwcm9ncmVzc0V2ZW50LCBibG9iLCBpbmRleCkgPT57XG4gICAgICBpZiAocHJvZ3Jlc3NFdmVudC5sb2FkZWQgPj0gcHJvZ3Jlc3NFdmVudC50b3RhbCkgcmV0dXJuO1xuICAgICAgY29uc3QgY3VycmVudFByb2dyZXNzID0gTWF0aC5yb3VuZCgocHJvZ3Jlc3NFdmVudC5sb2FkZWQgKiAxMDApIC8gcHJvZ3Jlc3NFdmVudC50b3RhbCk7ICBcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJvZ3Jlc3NBcnJheSA9Pnt0aGlzLnN0YXRlLnByb2dyZXNzQXJyYXlbaW5kZXgtMV0gPSBjdXJyZW50UHJvZ3Jlc3N9KTtcbiAgICAgICAgY29uc3Qgc3VtID0gdGhpcy5zdGF0ZS5wcm9ncmVzc0FycmF5LnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXBsb2FkUHJvZ3Jlc3M6TWF0aC5yb3VuZChzdW0gLyBDSFVOS1NfQ09VTlQpfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucHJvZ3Jlc3NBcnJheSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS51cGxvYWRQcm9ncmVzcylcbiAgICB9XG4gICAgICAgIGxldCB7IHByZXNpZ25lZFVybCB9ID0gZ2V0VXBsb2FkVXJsUmVzcC5kYXRhXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCcgICBQcmVzaWduZWQgVVJMICcgKyBpbmRleCArICc6ICcgKyBwcmVzaWduZWRVcmwgKyAnIGZpbGV0eXBlICcgKyB0aGlzLnN0YXRlLmZpbGVTZWxlY3RlZC50eXBlKVxuICAgICAgICBcbiAgICAgICAgLy8gU2VuZCBwYXJ0IGF3cyBzZXJ2ZXJcbiAgICAgICAgbGV0IHVwbG9hZFJlc3AgPSBheGlvcy5wdXQocHJlc2lnbmVkVXJsLCBibG9iLCB7XG4gICAgICAgICAgb25VcGxvYWRQcm9ncmVzczogKGUpID0+IHVwbG9hZFByb2dyZXNzSGFuZGxlcihlLCBDSFVOS1NfQ09VTlQsIGluZGV4KSxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogdGhpcy5zdGF0ZS5maWxlU2VsZWN0ZWQudHlwZVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBwcm9taXNlc0FycmF5LnB1c2godXBsb2FkUmVzcClcbiAgICAgICAgXG4gICAgICB9XG5cbiAgICAgIGxldCByZXNvbHZlZEFycmF5ID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXNBcnJheSlcbiAgICAgIGNvbnNvbGUubG9nKHJlc29sdmVkQXJyYXksICcgcmVzb2x2ZWRBcnJheScpXG5cbiAgICAgIGxldCB1cGxvYWRQYXJ0c0FycmF5ID0gW11cbiAgICAgIHJlc29sdmVkQXJyYXkuZm9yRWFjaCgocmVzb2x2ZWRQcm9taXNlLCBpbmRleCkgPT4ge1xuICAgICAgICB1cGxvYWRQYXJ0c0FycmF5LnB1c2goe1xuICAgICAgICAgIEVUYWc6IHJlc29sdmVkUHJvbWlzZS5oZWFkZXJzLmV0YWcsXG4gICAgICAgICAgUGFydE51bWJlcjogaW5kZXggKyAxXG4gICAgICAgIH0pXG5cbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyh1cGxvYWRQYXJ0c0FycmF5KVxuICAgICAgY29uc29sZS5sb2coXCJ1cGxvYWRJZDpcIiwgdGhpcy5zdGF0ZS51cGxvYWRJZClcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZmlsZU5hbWUpXG5cblxuICAgICAgLy8gQ29tcGxldGVNdWx0aXBhcnRVcGxvYWQgaW4gdGhlIGJhY2tlbmQgc2VydmVyXG4gICAgICBsZXQgY29tcGxldGVVcGxvYWRSZXNwID0gYXdhaXQgYXhpb3MucG9zdChgJHt0aGlzLnN0YXRlLmJhY2tlbmRVcmx9L2NvbXBsZXRlLXVwbG9hZGAsIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgZmlsZU5hbWU6IHRoaXMuc3RhdGUuZmlsZU5hbWUsXG4gICAgICAgICAgcGFydHM6IHVwbG9hZFBhcnRzQXJyYXksXG4gICAgICAgICAgdXBsb2FkSWQ6IHRoaXMuc3RhdGUudXBsb2FkSWRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgIFxuICAgICAgY29uc29sZS5sb2coY29tcGxldGVVcGxvYWRSZXNwLmRhdGEsIFwiY29tcGxldGUgdXBsb2FkIHJlc3BvbnNlXCIpXG5cblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc3RhcnRVcGxvYWQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPlVwbG9hZCBEYXRhc2V0OjwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdmaWxlJyBpZD0nZmlsZScgb25DaGFuZ2U9e3RoaXMuZmlsZUhhbmRsZXIuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5cbiAgICAgICAgICAgICAgVXBsb2FkXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXY+e3RoaXMuc3RhdGUudXBsb2FkUHJvZ3Jlc3N9JSB1cGxvYWRlZDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });