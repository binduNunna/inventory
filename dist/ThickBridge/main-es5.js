function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-inventory/add-inventory.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-inventory/add-inventory.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddInventoryAddInventoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container p-0\">\n  <h4>{{editData.view ? 'View Inventory' : 'Add Inventory'}}</h4>\n  <form #Form=\"ngForm\">\n\n    <!-- Image -->\n    <div action=\"upload.php\" method=\"post\" enctype=\"multipart/form-data\" class=\"uplod-img\">\n      <div for=\"fileToUpload\" class=\"img-wrap\">\n        <img class=\"image\" [src]=\"Logo? Logo :'assets/images/noImageAvailable.png'\">\n        <div>\n          <input type=\"file\" [disabled]=\"editData.view\" accept=\"image/*\" (change)=\"fileChangeEvent($event, template)\" id=\"userProfile\">\n          <i  class=\"fa fa-camera\" style=\"color: red;font-size: 25px\" (click)=\"openFile()\" aria-hidden=\"true\"></i>\n        </div>\n      </div>\n    </div>\n\n    <!-- Name -->\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" required [(ngModel)]=\"inventory.name\" name=\"name\"\n        #name=\"ngModel\" [disabled]=\"editData.view\">\n      <div class=\"error-block text-left\" *ngIf=\"((submitted || name.touched) && name.invalid)\">\n        Enter Name\n      </div>\n    </div>\n\n    <!-- Price -->\n    <div class=\"form-group\">\n      <label for=\"price\">Price</label>\n      <input type=\"text\" class=\"form-control\" id=\"price\" [(ngModel)]=\"inventory.price\" (keypress)=\"commonService.AllowNumbers($event)\"\n        name=\"price\" required #price=\"ngModel\" [disabled]=\"editData.view\">\n      <div class=\"error-block text-left\" *ngIf=\"((submitted || price.touched) && price.invalid)\">\n        Enter price\n      </div>\n    </div>\n\n    <!-- Description -->\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <textarea type=\"text\" class=\"form-control\" id=\"description\" [(ngModel)]=\"inventory.description\" name=\"description\"\n        required #description=\"ngModel\" [disabled]=\"editData.view\" rows=\"5\"></textarea>\n      <div class=\"error-block text-left\" *ngIf=\"((submitted || description.touched) && description.invalid)\">\n        Enter description\n      </div>\n    </div>\n    <button style=\"margin-left: 361px;\" type=\"button\" class=\"btn btn-primary mt-4\"\n      (click)=\"editData.view ? back() : addInventory(Form, inventory)\">{{editData.view ? 'Back To Listing' : 'Add Inventory'}}</button>\n  </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Loader -->\n<ngx-ui-loader></ngx-ui-loader>\n\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory-list/inventory-list.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory-list/inventory-list.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInventoryListInventoryListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container pb-0\">\n  <div *ngIf=\"!showAddForm\" class=\"row mb-5\">\n    <div class=\"col-md-7 p-0 \">\n      <h2>Inventory List</h2>\n    </div>\n    <div class=\"col-md-5 text-right p-0\">\n      <button class=\"btn btn-primary\"  (click)=\"openAddForm()\">Add Inventory</button>\n    </div>\n  </div>\n<!-- List of inventories -->\n  <div *ngIf=\"!showAddForm\">\n    <div *ngIf=\"inventoryArr.length > 0\">\n      <div class=\"row inventory-container\" *ngFor=\"let inventory of inventoryArr\">\n        <div class=\"col-md-12\">\n          <div class=\"row mb-4 border-bottom pb-4 align-items-center\">\n            <div class=\"col-md-2\" (click)=\"viewInventory(inventory)\">\n              <div action=\"upload.php\" method=\"post\" enctype=\"multipart/form-data\">\n                <img class=\"user-profile-img class\"\n                  [src]=\"inventory.image ? inventory.image : 'assets/images/noImageAvailable.png'\">\n              </div>\n            </div>\n            <div class=\"col-md-10 pl-0\">\n              <div class=\"row align-items-center\">\n                <div class=\"col-md-9\" (click)=\"viewInventory(inventory)\">\n                  <p class=\"mb-1\">Name: {{inventory.name}}</p>\n                  <p class=\"mb-0\">Price: {{inventory.price}}</p>\n                </div>\n                <div class=\"col-md-3 text-right\">\n                  <i class=\"fa fa-trash-o\" style=\"color: red;font-size: 30px\" (click)=\"deleteInventory(inventory)\"\n                    aria-hidden=\"true\"></i>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n   <div style=\"margin: 220px;\" *ngIf=\"!inventoryArr.length\">\n        <i style=\"font-size: 62px;\n        margin-left: 80px;\" class=\"fa fa-frown-o\" aria-hidden=\"true\"></i>\n        <p style=\"font-style: italic;\">No Inventories Available.To add an inventory please click on the above add button</p>\n   </div>\n  </div>\n</div>\n<!-- Add Inventory selector -->\n<app-add-inventory *ngIf=\"showAddForm\" [editData]=\"viewInventoryData\" (dataEvent)=\"receiveData($event)\">\n</app-add-inventory>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/add-inventory/add-inventory.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/add-inventory/add-inventory.component.ts ***!
    \**********************************************************/

  /*! exports provided: AddInventoryComponent */

  /***/
  function srcAppAddInventoryAddInventoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddInventoryComponent", function () {
      return AddInventoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/common.service */
    "./src/app/common/common.service.ts");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js"); // service
    // plugin


    var AddInventoryComponent = /*#__PURE__*/function () {
      function AddInventoryComponent(commonService, loader) {
        _classCallCheck(this, AddInventoryComponent);

        this.commonService = commonService;
        this.loader = loader;
        this.inventory = {};
        this.submitted = false;
        this.Logo = '';
        this.dataEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AddInventoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // used when view of inventory
          if (this.editData.view) {
            this.inventory = this.editData;
          }
        }
        /*****************************************************
                 @PURPOSE      : To add an inventory
                 @PARAMETERS   : {
                  form: Form, It is to know Form valid or not
                  user: Object, which need to be added to list
              }
        *****************************************************/

      }, {
        key: "addInventory",
        value: function addInventory(form, user) {
          var _this = this;

          this.submitted = true;

          if (form.valid) {
            user.image = this.Logo;
            this.commonService.swal({
              text: "Are you sure you wanna add this inventory?",
              type: 'question',
              showCancelButton: true,
              confirmButtonClass: 'btn btn-primary',
              cancelButtonClass: 'btn btn-info',
              cancelButtonText: 'No',
              confirmButtonText: 'Yes'
            }).then(function (result) {
              if (result.value) {
                // To start showing loader
                _this.loader.start();

                _this.commonService.callApi('inventory', user, 'post').then(function (success) {
                  // To stop showing loader
                  _this.loader.stop();

                  _this.commonService.popToast('success', 'Added Successfully');

                  _this.dataEvent.emit('in add');
                });
              }
            });
          }
        }
        /*******************************************************
                 @PURPOSE      : whcih takes back to listing
        ********************************************************/

      }, {
        key: "back",
        value: function back() {
          this.dataEvent.emit('in add');
        }
        /*****************************************************
                 @PURPOSE      : Open File
        *****************************************************/

      }, {
        key: "openFile",
        value: function openFile() {
          var element = document.getElementById('userProfile');
          element.click();
        }
        /*****************************************************
                 @PURPOSE      : File Change
                 @PARAMETERS   : event
        *****************************************************/

      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(event) {
          this.fileUrl = event.target.files[0];

          if (this.fileUrl) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(this.fileUrl);
          }
        }
      }, {
        key: "_handleReaderLoaded",
        value: function _handleReaderLoaded(readerEvt) {
          var binaryString = readerEvt.target.result;
          this.Logo = 'data:image/png;base64,' + btoa(binaryString);
        }
      }]);

      return AddInventoryComponent;
    }();

    AddInventoryComponent.ctorParameters = function () {
      return [{
        type: _common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AddInventoryComponent.prototype, "dataEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AddInventoryComponent.prototype, "editData", void 0);
    AddInventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-inventory',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-inventory.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-inventory/add-inventory.component.html"))["default"]
    })], AddInventoryComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _inventory_list_inventory_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inventory-list/inventory-list.component */
    "./src/app/inventory-list/inventory-list.component.ts");
    /* harmony import */


    var _add_inventory_add_inventory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-inventory/add-inventory.component */
    "./src/app/add-inventory/add-inventory.component.ts");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js"); // Components
    // Plugin


    var routes = [{
      path: '',
      redirectTo: 'inventory-list',
      pathMatch: 'full'
    }, {
      path: 'inventory-list',
      component: _inventory_list_inventory_list_component__WEBPACK_IMPORTED_MODULE_5__["InventoryListComponent"],
      pathMatch: 'full'
    }, {
      path: 'add-inventory',
      component: _add_inventory_add_inventory_component__WEBPACK_IMPORTED_MODULE_6__["AddInventoryComponent"],
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: 'inventory-list'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_inventory_list_inventory_list_component__WEBPACK_IMPORTED_MODULE_5__["InventoryListComponent"], _add_inventory_add_inventory_component__WEBPACK_IMPORTED_MODULE_6__["AddInventoryComponent"]],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _add_inventory_add_inventory_component__WEBPACK_IMPORTED_MODULE_6__["AddInventoryComponent"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ThinkBridge';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/common/common.service.ts":
  /*!******************************************!*\
    !*** ./src/app/common/common.service.ts ***!
    \******************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppCommonCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts"); // environment


    var CommonService = /*#__PURE__*/function () {
      function CommonService(http, route) {
        _classCallCheck(this, CommonService);

        this.http = http;
        this.route = route;
        this.swal = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiURL;
        this.router = route;
      }
      /**********************************************************
      @PURPOSE : Call api.
      /********************************************************/


      _createClass(CommonService, [{
        key: "callApi",
        value: function callApi(url, data, method) {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            if (method === 'get') {
              _this2.http.get(_this2.apiUrl + url, {
                params: data
              }).subscribe(function (data1) {
                resolve(data1);
              }, function (error) {});
            }

            if (method === 'post') {
              _this2.http.post(_this2.apiUrl + url, data).subscribe(function (data1) {
                resolve(data1);
              }, function (error) {});
            }

            if (method === 'delete') {
              _this2.http["delete"](_this2.apiUrl + url, {
                params: data
              }).subscribe(function (data1) {
                resolve(data1);
              }, function (error) {});
            }
          });
        }
        /****************************************
          @purpose : popToaster
        /***************************************/

      }, {
        key: "popToast",
        value: function popToast(type, title) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            position: 'center',
            type: type,
            text: title,
            showConfirmButton: false,
            timer: 2000,
            customClass: 'custom-toaster'
          });
        }
        /****************************************************************************
        @PURPOSE      : To allow numbers in input.
        @PARAMETERS   : $event
        @RETURN       : Boolen
        ****************************************************************************/

      }, {
        key: "AllowNumbers",
        value: function AllowNumbers(e) {
          // console.log(e.target.value, "e");
          if (!e.target.value.length && e.key <= 0) {
            return false;
          }

          var input;

          if (e.metaKey || e.ctrlKey) {
            return true;
          }

          if (e.which === 32) {
            return false;
          }

          if (e.which === 0) {
            return true;
          }

          if (e.which < 33) {
            return true;
          }

          if (e.which === 43 || e.which === 45) {
            return true;
          }

          if (e.which === 36 || e.which === 35) {
            return true;
          }

          if (e.which === 37 || e.which === 39) {
            return true;
          }

          input = e.key;
          return !!/[\d\s]/.test(input);
        }
      }]);

      return CommonService;
    }();

    CommonService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], CommonService);
    /***/
  },

  /***/
  "./src/app/inventory-list/inventory-list.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/inventory-list/inventory-list.component.ts ***!
    \************************************************************/

  /*! exports provided: InventoryListComponent */

  /***/
  function srcAppInventoryListInventoryListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryListComponent", function () {
      return InventoryListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common/common.service */
    "./src/app/common/common.service.ts");
    /* harmony import */


    var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-ui-loader */
    "./node_modules/ngx-ui-loader/fesm2015/ngx-ui-loader.js"); // service
    // plugin


    var InventoryListComponent = /*#__PURE__*/function () {
      function InventoryListComponent(http, commonService, loader) {
        _classCallCheck(this, InventoryListComponent);

        this.http = http;
        this.commonService = commonService;
        this.loader = loader;
        this.inventoryArr = [];
        this.showAddForm = false;
        this.viewInventoryData = {};
      }

      _createClass(InventoryListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // To get the inventoryList by default
          this.getInventoryList();
        }
        /*****************************************************
                 @PURPOSE      : To get the inventory list
        *****************************************************/

      }, {
        key: "getInventoryList",
        value: function getInventoryList() {
          var _this3 = this;

          this.loader.start();
          this.commonService.callApi('inventory', '', 'get').then(function (success) {
            _this3.inventoryArr = success;

            _this3.loader.stop();
          });
        }
        /*****************************************************
                 @PURPOSE      : To open add inventory form
        *****************************************************/

      }, {
        key: "openAddForm",
        value: function openAddForm() {
          this.showAddForm = true;
        }
        /********************************************************************************
                 @PURPOSE      : To receive added inventory from addInventory Component
                 @PARAMETERS   : event
        **********************************************************************************/

      }, {
        key: "receiveData",
        value: function receiveData(event) {
          this.showAddForm = false;
          this.getInventoryList();
        }
        /*****************************************************
                 @PURPOSE      : To delete an inventory
                 @PARAMETERS   : {
                  data: Object, which need to be deleted from list
              }
        *****************************************************/

      }, {
        key: "deleteInventory",
        value: function deleteInventory(data) {
          var _this4 = this;

          if (data) {
            this.commonService.swal({
              text: "Do you want to Delete this Inventory? ",
              type: 'question',
              showCancelButton: true,
              confirmButtonClass: 'btn btn-primary',
              cancelButtonClass: 'btn btn-info',
              cancelButtonText: 'No',
              confirmButtonText: 'Yes'
            }).then(function (result) {
              if (result.value) {
                // To start showing loader
                _this4.loader.start();

                _this4.commonService.callApi("inventory/".concat(data.id), '', 'delete').then(function (success) {
                  _this4.commonService.popToast('success', 'Deleted Successfully'); // To stop showing loader


                  _this4.loader.stop(); // call the list API


                  _this4.getInventoryList();
                });
              }
            });
          }
        }
        /*****************************************************
                 @PURPOSE      : To view an inventory
                 @PARAMETERS   : {
                  inventory: Object, which need to be viewed
              }
        *****************************************************/

      }, {
        key: "viewInventory",
        value: function viewInventory(inventory) {
          this.showAddForm = true;
          inventory.view = true;
          this.viewInventoryData = inventory;
        }
      }]);

      return InventoryListComponent;
    }();

    InventoryListComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"]
      }];
    };

    InventoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inventory-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inventory-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inventory-list/inventory-list.component.html"))["default"]
    })], InventoryListComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: true,
      apiURL: 'https://5f86d698c8a16a0016e6bd1f.mockapi.io/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/indianic/Desktop/inventory/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map