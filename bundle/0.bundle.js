(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/minesweeper_wasm.js":
/*!**********************************!*\
  !*** ../pkg/minesweeper_wasm.js ***!
  \**********************************/
/*! exports provided: State, Grid, __wbg_random_f1dabdd9f148bad5, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minesweeper_wasm_bg.wasm */ \"../pkg/minesweeper_wasm_bg.wasm\");\n/* harmony import */ var _minesweeper_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minesweeper_wasm_bg.js */ \"../pkg/minesweeper_wasm_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"State\", function() { return _minesweeper_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"State\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Grid\", function() { return _minesweeper_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_f1dabdd9f148bad5\", function() { return _minesweeper_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_random_f1dabdd9f148bad5\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _minesweeper_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/minesweeper_wasm.js?");

/***/ }),

/***/ "../pkg/minesweeper_wasm_bg.js":
/*!*************************************!*\
  !*** ../pkg/minesweeper_wasm_bg.js ***!
  \*************************************/
/*! exports provided: State, Grid, __wbg_random_f1dabdd9f148bad5, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"State\", function() { return State; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Grid\", function() { return Grid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_f1dabdd9f148bad5\", function() { return __wbg_random_f1dabdd9f148bad5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./minesweeper_wasm_bg.wasm */ \"../pkg/minesweeper_wasm_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }\n/**\n*/\nconst State = Object.freeze({ Running:0,\"0\":\"Running\",Won:1,\"1\":\"Won\",Lost:2,\"2\":\"Lost\", });\n/**\n*/\nclass Grid {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Grid.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_grid_free\"](ptr);\n    }\n    /**\n    * @param {number} width\n    * @param {number} height\n    * @param {number} number_of_mines\n    * @returns {Grid}\n    */\n    static new(width, height, number_of_mines) {\n        const ret = _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"grid_new\"](width, height, number_of_mines);\n        return Grid.__wrap(ret);\n    }\n    /**\n    */\n    plant_mines() {\n        _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"grid_plant_mines\"](this.ptr);\n    }\n    /**\n    */\n    set_mines_count() {\n        _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"grid_set_mines_count\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get_cells() {\n        const ret = _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"grid_get_cells\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    * @returns {number}\n    */\n    get_index(x, y) {\n        const ret = _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"grid_get_index\"](this.ptr, x, y);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} index\n    * @returns {number}\n    */\n    get_row_from_index(index) {\n        const ret = _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"grid_get_row_from_index\"](this.ptr, index);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} index\n    * @returns {number}\n    */\n    get_col_from_index(index) {\n        const ret = _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"grid_get_col_from_index\"](this.ptr, index);\n        return ret >>> 0;\n    }\n    /**\n    */\n    reset_grid() {\n        _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"grid_reset_grid\"](this.ptr);\n    }\n    /**\n    * @param {number} row\n    * @param {number} column\n    */\n    propagate_reveal_cell(row, column) {\n        _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"grid_propagate_reveal_cell\"](this.ptr, row, column);\n    }\n    /**\n    * @param {number} row\n    * @param {number} column\n    */\n    reveal_cell(row, column) {\n        _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"grid_reveal_cell\"](this.ptr, row, column);\n    }\n    /**\n    * @returns {number}\n    */\n    get_state() {\n        const ret = _minesweeper_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"grid_get_state\"](this.ptr);\n        return ret >>> 0;\n    }\n}\n\nconst __wbg_random_f1dabdd9f148bad5 = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../minesweeper-frontend/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/minesweeper_wasm_bg.js?");

/***/ }),

/***/ "../pkg/minesweeper_wasm_bg.wasm":
/*!***************************************!*\
  !*** ../pkg/minesweeper_wasm_bg.wasm ***!
  \***************************************/
/*! exports provided: memory, __wbg_grid_free, grid_new, grid_plant_mines, grid_set_mines_count, grid_get_cells, grid_get_index, grid_get_row_from_index, grid_get_col_from_index, grid_reset_grid, grid_propagate_reveal_cell, grid_reveal_cell, grid_get_state */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./minesweeper_wasm_bg.js */ \"../pkg/minesweeper_wasm_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/minesweeper_wasm_bg.wasm?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/components/app/index.js":
/*!*************************************!*\
  !*** ./src/components/app/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../grid */ \"./src/components/grid/index.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button */ \"./src/components/button/index.js\");\n/* harmony import */ var minesweeper_wasm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! minesweeper-wasm */ \"../pkg/minesweeper_wasm.js\");\n/* harmony import */ var minesweeper_wasm_minesweeper_wasm_bg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! minesweeper-wasm/minesweeper_wasm_bg */ \"../pkg/minesweeper_wasm_bg.wasm\");\n\n\n\n\nclass App {\n  constructor(elem, rows, cols, mines) {\n    if (!elem) return;\n    this.elem = elem;\n    this.rows = rows;\n    this.cols = cols;\n    this.mines = mines;\n    this.grid = minesweeper_wasm__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"].new(rows, cols, mines);\n    this.grid.plant_mines();\n    const cells_ptr = this.grid.get_cells();\n    this.cells = new Uint8Array(\n      minesweeper_wasm_minesweeper_wasm_bg__WEBPACK_IMPORTED_MODULE_3__[\"memory\"].buffer,\n      cells_ptr,\n      this.rows * this.cols\n    );\n    this.button = new _button__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, this.grid);\n    this.table = new _grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, this.grid, this.cells);\n  }\n  render() {\n    this.table.render();\n    this.button.render();\n  }\n\n  clean() {\n    this.table.destroy();\n    this.table = new _grid__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, this.grid, this.cells);\n    this.render();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/app/index.js?");

/***/ }),

/***/ "./src/components/button/index.js":
/*!****************************************!*\
  !*** ./src/components/button/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Button; });\n/* harmony import */ var minesweeper_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! minesweeper-wasm */ \"../pkg/minesweeper_wasm.js\");\n\n\nclass Button {\n  constructor(parentEl, grid) {\n    if (!parentEl) return;\n    this.parent_component = parentEl;\n    this.button = this.parent_component.elem.appendChild(\n      document.createElement(\"button\")\n    );\n    this.grid = grid;\n    this.add_interaction();\n  }\n  add_interaction() {\n    this.button.onclick = (ev) => {\n      this.grid.plant_mines();\n      this.parent_component.clean();\n      this.parent_component.render();\n    };\n  }\n\n  render() {\n    this.button.innerHTML = \"RESET\";\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/button/index.js?");

/***/ }),

/***/ "./src/components/grid/index.js":
/*!**************************************!*\
  !*** ./src/components/grid/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Field; });\nconst REVEALED_BIT = 0b01000000;\nconst MINE_BIT = 0b10000000;\nconst MINE_COUNT = 0b00011111;\nclass Field {\n  constructor(parentEl, grid, cells) {\n    if (!parentEl) return;\n    this.parent_component = parentEl;\n    this.table = this.parent_component.elem.appendChild(\n      document.createElement(\"table\")\n    );\n    this.grid = grid;\n    this.cells = cells;\n    this.rows = this.parent_component.rows;\n    for (var i = 0; i < this.parent_component.rows; i++) {\n      const row = this.table.insertRow(i);\n      for (var j = 0; j < this.parent_component.cols; j++) {\n        row.insertCell(j);\n      }\n    }\n    this.add_interaction();\n  }\n  add_interaction() {\n    this.table.onclick = (ev) => {\n      const cell = ev.target;\n      this.grid.propagate_reveal_cell(\n        cell.cellIndex,\n        cell.parentElement.rowIndex\n      );\n      this.parent_component.render();\n    };\n  }\n  choose_background(count) {\n    let greyscale = 255 - (count / 8) * 255;\n    return `rgb(${greyscale},${greyscale},${greyscale})`;\n  }\n\n  render() {\n    for (var i = 0, row; (row = this.table.rows[i]); i++) {\n      for (var j = 0, html_cell; (html_cell = row.cells[j]); j++) {\n        const cell = this.cells[i * this.rows + j];\n        if ((cell & MINE_BIT) >> 7 === 1 && (cell & REVEALED_BIT) >> 6 === 1) {\n          html_cell.style.background = \"red\";\n        } else if ((cell & REVEALED_BIT) >> 6 === 1) {\n          html_cell.innerHTML = cell & MINE_COUNT || \"\";\n          html_cell.style.background = this.choose_background(\n            cell & MINE_COUNT\n          );\n        }\n      }\n    }\n    if (this.grid.get_state() === 2) {\n      alert(\"You lose!\");\n    } else if (this.grid.get_state() === 1) {\n      alert(\"You win!\");\n    }\n  }\n\n  destroy() {\n    this.parent_component.elem.removeChild(this.table);\n  }\n}\n\n\n//# sourceURL=webpack:///./src/components/grid/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app */ \"./src/components/app/index.js\");\n/**\n * The entry point\n */\n\n\n\nwindow.addEventListener(\"load\", () => {\n  const app = new _components_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.getElementById(\"app\"), 20, 20, 10);\n  app.render();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

}]);