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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/nickwild/Programming/2. Nicci Topping/serverless/aws-s3-multipart-upload2/frontend/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      fileSelected: null,\n      uploadId: '',\n      fileName: '',\n      backendUrl: 'http://localhost:4000',\n      uploadPC: 0,\n      progressArray: [],\n      uploadProgress: 0\n    };\n  }\n\n  async fileHandler(event) {\n    try {\n      let fileSelected = event.target.files[0];\n      let fileName = fileSelected.name;\n      this.setState({\n        fileSelected\n      });\n      this.setState({\n        fileName\n      });\n    } catch (err) {\n      console.error(err, err.message);\n    }\n  }\n\n  async startUpload(event) {\n    try {\n      event.preventDefault();\n      const params = {\n        fileName: this.state.fileName,\n        fileType: this.state.fileSelected.type\n      }; // console.log(\"fs\", this.state.fileSelected)\n      // console.log(\"params:\",params)\n\n      console.log(this.state.progressArray);\n      let resp = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${this.state.backendUrl}/start-upload`, {\n        params\n      });\n      let {\n        uploadId\n      } = resp.data;\n      this.setState({\n        uploadId\n      });\n      this.uploadMultipartFile();\n    } catch (err) {\n      console.log(err);\n    }\n  }\n\n  async uploadMultipartFile() {\n    try {\n      // console.log('Inside uploadMultipartFile')\n      const fileSize = this.state.fileSelected.size;\n      const CHUNK_SIZE = 4900000; // <5MB\n\n      const CHUNKS_COUNT = Math.floor(fileSize / CHUNK_SIZE) + 1;\n      let promisesArray = [];\n      let start, end, blob;\n\n      for (let index = 1; index < CHUNKS_COUNT + 1; index++) {\n        start = (index - 1) * CHUNK_SIZE;\n        end = index * CHUNK_SIZE;\n        blob = index < CHUNKS_COUNT ? this.state.fileSelected.slice(start, end) : this.state.fileSelected.slice(start);\n        console.log(blob.size); // Get presigned URL for each part\n\n        let getUploadUrlResp = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${this.state.backendUrl}/get-upload-url`, {\n          params: {\n            fileName: this.state.fileName,\n            partNumber: index,\n            uploadId: this.state.uploadId\n          }\n        }); //new\n\n        const uploadProgressHandler = async (progressEvent, blob, index) => {\n          if (progressEvent.loaded >= progressEvent.total) return;\n          const currentProgress = Math.round(progressEvent.loaded * 100 / progressEvent.total);\n          this.setState(progressArray => {\n            this.state.progressArray[index - 1] = currentProgress;\n          });\n          const sum = this.state.progressArray.reduce((acc, curr) => acc + curr);\n          this.setState({\n            uploadProgress: Math.round(sum / CHUNKS_COUNT)\n          });\n          console.log(this.state.progressArray);\n          console.log(this.state.uploadProgress);\n        };\n\n        let {\n          presignedUrl\n        } = getUploadUrlResp.data; // console.log('   Presigned URL ' + index + ': ' + presignedUrl + ' filetype ' + this.state.fileSelected.type)\n        // Send part aws server\n\n        let uploadResp = axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(presignedUrl, blob, {\n          onUploadProgress: e => uploadProgressHandler(e, CHUNKS_COUNT, index),\n          headers: {\n            'Content-Type': this.state.fileSelected.type\n          }\n        });\n        promisesArray.push(uploadResp);\n      }\n\n      let resolvedArray = await Promise.all(promisesArray);\n      console.log(resolvedArray, ' resolvedArray');\n      let uploadPartsArray = [];\n      resolvedArray.forEach((resolvedPromise, index) => {\n        uploadPartsArray.push({\n          ETag: resolvedPromise.headers.etag,\n          PartNumber: index + 1\n        });\n      });\n      console.log(uploadPartsArray); // CompleteMultipartUpload in the backend server\n\n      let completeUploadResp = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${this.state.backendUrl}/complete-upload`, {\n        params: {\n          fileName: this.state.fileName,\n          parts: uploadPartsArray,\n          uploadId: this.state.uploadId\n        }\n      });\n      console.log(completeUploadResp.data, \"complete upload response\");\n    } catch (err) {\n      console.log(err);\n    }\n  }\n\n  render() {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 7\n      }\n    }, __jsx(\"form\", {\n      onSubmit: this.startUpload.bind(this),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 9\n      }\n    }, __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 11\n      }\n    }, __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 13\n      }\n    }, \"Upload Dataset:\"), __jsx(\"input\", {\n      type: \"file\",\n      id: \"file\",\n      onChange: this.fileHandler.bind(this),\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 13\n      }\n    }), __jsx(\"button\", {\n      type: \"submit\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 13\n      }\n    }, \"Upload\"), __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 144,\n        columnNumber: 13\n      }\n    }, this.state.uploadProgress, \"% uploaded\"))));\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZmlsZVNlbGVjdGVkIiwidXBsb2FkSWQiLCJmaWxlTmFtZSIsImJhY2tlbmRVcmwiLCJ1cGxvYWRQQyIsInByb2dyZXNzQXJyYXkiLCJ1cGxvYWRQcm9ncmVzcyIsImZpbGVIYW5kbGVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsIm5hbWUiLCJzZXRTdGF0ZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJzdGFydFVwbG9hZCIsInByZXZlbnREZWZhdWx0IiwicGFyYW1zIiwiZmlsZVR5cGUiLCJ0eXBlIiwibG9nIiwicmVzcCIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsInVwbG9hZE11bHRpcGFydEZpbGUiLCJmaWxlU2l6ZSIsInNpemUiLCJDSFVOS19TSVpFIiwiQ0hVTktTX0NPVU5UIiwiTWF0aCIsImZsb29yIiwicHJvbWlzZXNBcnJheSIsInN0YXJ0IiwiZW5kIiwiYmxvYiIsImluZGV4Iiwic2xpY2UiLCJnZXRVcGxvYWRVcmxSZXNwIiwicGFydE51bWJlciIsInVwbG9hZFByb2dyZXNzSGFuZGxlciIsInByb2dyZXNzRXZlbnQiLCJsb2FkZWQiLCJ0b3RhbCIsImN1cnJlbnRQcm9ncmVzcyIsInJvdW5kIiwic3VtIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInByZXNpZ25lZFVybCIsInVwbG9hZFJlc3AiLCJwdXQiLCJvblVwbG9hZFByb2dyZXNzIiwiZSIsImhlYWRlcnMiLCJwdXNoIiwicmVzb2x2ZWRBcnJheSIsIlByb21pc2UiLCJhbGwiLCJ1cGxvYWRQYXJ0c0FycmF5IiwiZm9yRWFjaCIsInJlc29sdmVkUHJvbWlzZSIsIkVUYWciLCJldGFnIiwiUGFydE51bWJlciIsImNvbXBsZXRlVXBsb2FkUmVzcCIsInBvc3QiLCJwYXJ0cyIsInJlbmRlciIs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QUU7QUFDTmpCLGtCQUFRLEVBQUUsS0FBS0gsS0FBTCxDQUFXRyxRQURmO0FBRU5vRSxlQUFLLEVBQUVSLGdCQUZEO0FBR043RCxrQkFBUSxFQUFFLEtBQUtGLEtBQUwsQ0FBV0U7QUFIZjtBQUQ0RSxPQUF2RCxDQUEvQjtBQVFBYSxhQUFPLENBQUNRLEdBQVIsQ0FBWThDLGtCQUFrQixDQUFDMUMsSUFBL0IsRUFBcUMsMEJBQXJDO0FBR0QsS0E5RUQsQ0E4RUUsT0FBT2IsR0FBUCxFQUFZO0FBQ1pDLGFBQU8sQ0FBQ1EsR0FBUixDQUFZVCxHQUFaO0FBQ0Q7QUFDRjs7QUFFRDBELFFBQU0sR0FBRztBQUNQLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sY0FBUSxFQUFFLEtBQUt0RCxXQUFMLENBQWlCdUQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUU7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFFLEVBQUMsTUFBdEI7QUFBNkIsY0FBUSxFQUFFLEtBQUtqRSxXQUFMLENBQWlCaUUsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0U7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNLEtBQUt6RSxLQUFMLENBQVdPLGNBQWpCLGVBTkYsQ0FERixDQURGLENBREY7QUFjRDs7QUFqSjBDIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlsZVNlbGVjdGVkOiBudWxsLFxuICAgICAgdXBsb2FkSWQ6ICcnLFxuICAgICAgZmlsZU5hbWU6ICcnLFxuICAgICAgYmFja2VuZFVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCcsXG4gICAgICB1cGxvYWRQQzowLFxuICAgICAgcHJvZ3Jlc3NBcnJheTpbXSxcbiAgICAgIHVwbG9hZFByb2dyZXNzOjBcbiAgICB9XG4gIH1cblxuICBhc3luYyBmaWxlSGFuZGxlcihldmVudCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZmlsZVNlbGVjdGVkID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgICBsZXQgZmlsZU5hbWUgPSBmaWxlU2VsZWN0ZWQubmFtZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGVTZWxlY3RlZCB9KVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGVOYW1lIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVyciwgZXJyLm1lc3NhZ2UpIFxuICAgIH1cbiAgfVxuICBcbiAgYXN5bmMgc3RhcnRVcGxvYWQoZXZlbnQpIHtcbiAgICB0cnkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBmaWxlTmFtZTogdGhpcy5zdGF0ZS5maWxlTmFtZSxcbiAgICAgICAgZmlsZVR5cGU6IHRoaXMuc3RhdGUuZmlsZVNlbGVjdGVkLnR5cGVcbiAgICAgIH07XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImZzXCIsIHRoaXMuc3RhdGUuZmlsZVNlbGVjdGVkKVxuICAgICAgLy8gY29uc29sZS5sb2coXCJwYXJhbXM6XCIscGFyYW1zKVxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5wcm9ncmVzc0FycmF5KVxuXG4gICAgICBsZXQgcmVzcCA9IGF3YWl0IGF4aW9zLmdldChgJHt0aGlzLnN0YXRlLmJhY2tlbmRVcmx9L3N0YXJ0LXVwbG9hZGAsIHsgcGFyYW1zIH0pXG4gICAgICBsZXQgeyB1cGxvYWRJZCB9ID0gcmVzcC5kYXRhXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXBsb2FkSWQgfSlcbiAgICAgIHRoaXMudXBsb2FkTXVsdGlwYXJ0RmlsZSgpXG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG4gIH1cblxuICBhc3luYyB1cGxvYWRNdWx0aXBhcnRGaWxlKCkge1xuICAgIHRyeSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnSW5zaWRlIHVwbG9hZE11bHRpcGFydEZpbGUnKVxuICAgICAgY29uc3QgZmlsZVNpemUgPSB0aGlzLnN0YXRlLmZpbGVTZWxlY3RlZC5zaXplXG4gICAgICBjb25zdCBDSFVOS19TSVpFID0gNDkwMDAwMCAvLyA8NU1CXG4gICAgICBjb25zdCBDSFVOS1NfQ09VTlQgPSBNYXRoLmZsb29yKGZpbGVTaXplIC8gQ0hVTktfU0laRSkgKyAxXG5cbiAgICAgIFxuICAgICAgXG4gICAgIFxuICAgICAgbGV0IHByb21pc2VzQXJyYXkgPSBbXVxuICAgICAgbGV0IHN0YXJ0LCBlbmQsIGJsb2JcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IENIVU5LU19DT1VOVCArIDE7IGluZGV4KyspIHtcbiAgICAgICAgc3RhcnQgPSAoaW5kZXggLSAxKSAqIENIVU5LX1NJWkVcbiAgICAgICAgZW5kID0gKGluZGV4KSAqIENIVU5LX1NJWkVcbiAgICAgICAgYmxvYiA9IChpbmRleCA8IENIVU5LU19DT1VOVCkgPyB0aGlzLnN0YXRlLmZpbGVTZWxlY3RlZC5zbGljZShzdGFydCwgZW5kKSA6IHRoaXMuc3RhdGUuZmlsZVNlbGVjdGVkLnNsaWNlKHN0YXJ0KVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGJsb2Iuc2l6ZSlcbiAgICAgICAgLy8gR2V0IHByZXNpZ25lZCBVUkwgZm9yIGVhY2ggcGFydFxuICAgICAgICBsZXQgZ2V0VXBsb2FkVXJsUmVzcCA9IGF3YWl0IGF4aW9zLmdldChgJHt0aGlzLnN0YXRlLmJhY2tlbmRVcmx9L2dldC11cGxvYWQtdXJsYCwge1xuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgZmlsZU5hbWU6IHRoaXMuc3RhdGUuZmlsZU5hbWUsXG4gICAgICAgICAgICBwYXJ0TnVtYmVyOiBpbmRleCxcbiAgICAgICAgICAgIHVwbG9hZElkOiB0aGlzLnN0YXRlLnVwbG9hZElkXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgLy9uZXdcbiAgICBjb25zdCB1cGxvYWRQcm9ncmVzc0hhbmRsZXI9YXN5bmMocHJvZ3Jlc3NFdmVudCwgYmxvYiwgaW5kZXgpID0+e1xuICAgICAgaWYgKHByb2dyZXNzRXZlbnQubG9hZGVkID49IHByb2dyZXNzRXZlbnQudG90YWwpIHJldHVybjtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcm9ncmVzcyA9IE1hdGgucm91bmQoKHByb2dyZXNzRXZlbnQubG9hZGVkICogMTAwKSAvIHByb2dyZXNzRXZlbnQudG90YWwpOyAgXG4gICAgICB0aGlzLnNldFN0YXRlKHByb2dyZXNzQXJyYXkgPT57dGhpcy5zdGF0ZS5wcm9ncmVzc0FycmF5W2luZGV4LTFdID0gY3VycmVudFByb2dyZXNzfSk7XG4gICAgICAgIGNvbnN0IHN1bSA9IHRoaXMuc3RhdGUucHJvZ3Jlc3NBcnJheS5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgY3Vycik7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3VwbG9hZFByb2dyZXNzOk1hdGgucm91bmQoc3VtIC8gQ0hVTktTX0NPVU5UKX0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnByb2dyZXNzQXJyYXkpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudXBsb2FkUHJvZ3Jlc3MpXG4gICAgfVxuICAgICAgICBsZXQgeyBwcmVzaWduZWRVcmwgfSA9IGdldFVwbG9hZFVybFJlc3AuZGF0YVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnICAgUHJlc2lnbmVkIFVSTCAnICsgaW5kZXggKyAnOiAnICsgcHJlc2lnbmVkVXJsICsgJyBmaWxldHlwZSAnICsgdGhpcy5zdGF0ZS5maWxlU2VsZWN0ZWQudHlwZSlcbiAgICAgICAgXG4gICAgICAgIC8vIFNlbmQgcGFydCBhd3Mgc2VydmVyXG4gICAgICAgIGxldCB1cGxvYWRSZXNwID0gYXhpb3MucHV0KHByZXNpZ25lZFVybCwgYmxvYiwge1xuICAgICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IChlKSA9PiB1cGxvYWRQcm9ncmVzc0hhbmRsZXIoZSwgQ0hVTktTX0NPVU5ULCBpbmRleCksXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IHRoaXMuc3RhdGUuZmlsZVNlbGVjdGVkLnR5cGVcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgcHJvbWlzZXNBcnJheS5wdXNoKHVwbG9hZFJlc3ApXG4gICAgICAgIFxuICAgICAgfVxuXG4gICAgICBsZXQgcmVzb2x2ZWRBcnJheSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzQXJyYXkpXG4gICAgICBjb25zb2xlLmxvZyhyZXNvbHZlZEFycmF5LCAnIHJlc29sdmVkQXJyYXknKVxuXG4gICAgICBsZXQgdXBsb2FkUGFydHNBcnJheSA9IFtdXG4gICAgICByZXNvbHZlZEFycmF5LmZvckVhY2goKHJlc29sdmVkUHJvbWlzZSwgaW5kZXgpID0+IHtcbiAgICAgICAgdXBsb2FkUGFydHNBcnJheS5wdXNoKHtcbiAgICAgICAgICBFVGFnOiByZXNvbHZlZFByb21pc2UuaGVhZGVycy5ldGFnLFxuICAgICAgICAgIFBhcnROdW1iZXI6IGluZGV4ICsgMVxuICAgICAgICB9KVxuXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2codXBsb2FkUGFydHNBcnJheSlcblxuXG4gICAgICAvLyBDb21wbGV0ZU11bHRpcGFydFVwbG9hZCBpbiB0aGUgYmFja2VuZCBzZXJ2ZXJcbiAgICAgIGxldCBjb21wbGV0ZVVwbG9hZFJlc3AgPSBhd2FpdCBheGlvcy5wb3N0KGAke3RoaXMuc3RhdGUuYmFja2VuZFVybH0vY29tcGxldGUtdXBsb2FkYCwge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBmaWxlTmFtZTogdGhpcy5zdGF0ZS5maWxlTmFtZSxcbiAgICAgICAgICBwYXJ0czogdXBsb2FkUGFydHNBcnJheSxcbiAgICAgICAgICB1cGxvYWRJZDogdGhpcy5zdGF0ZS51cGxvYWRJZFxuICAgICAgICB9XG4gICAgICB9KVxuICAgXG4gICAgICBjb25zb2xlLmxvZyhjb21wbGV0ZVVwbG9hZFJlc3AuZGF0YSwgXCJjb21wbGV0ZSB1cGxvYWQgcmVzcG9uc2VcIilcblxuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zdGFydFVwbG9hZC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+VXBsb2FkIERhdGFzZXQ6PC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2ZpbGUnIGlkPSdmaWxlJyBvbkNoYW5nZT17dGhpcy5maWxlSGFuZGxlci5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlxuICAgICAgICAgICAgICBVcGxvYWRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdj57dGhpcy5zdGF0ZS51cGxvYWRQcm9ncmVzc30lIHVwbG9hZGVkPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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