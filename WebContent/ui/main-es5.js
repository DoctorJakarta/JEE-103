function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    __webpack_exports__["default"] = "\n<a routerLink=\"/jee101/\" >JEE-101</a> &nbsp;&nbsp;&nbsp;&nbsp;\n<a routerLink=\"/jee102/\" >JEE-102</a> &nbsp;&nbsp;&nbsp;&nbsp;\n<a routerLink=\"/jee103/\" >JEE-103</a> &nbsp;&nbsp;&nbsp;&nbsp;\n\n<hr/>\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jee101/jee101.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/jee101/jee101.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsJee101Jee101ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>JEE-101 Tester</h1>\n<hr/>\n\n<button (click)=\"getGreeting()\">Get Greeting</button>\n<h2 *ngIf=\"greeting\">Got Greeting: {{greeting.title}} {{greeting.name}}</h2>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jee102/jee102.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/jee102/jee102.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsJee102Jee102ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>\n\tJEE-102: My Books\n</h1>\n<div *ngIf=book>\n\t<fieldset style='width: 100%'>\n\t\t<legend>Book Details ({{book.id}}):</legend>\n\t\t<form>\n\t\t\t<label>Title: </label>\n\t\t\t<input name=\"title\" [(ngModel)]=\"book.title\">\n\t\t\t<br />\n\t\t\t<label>Author: </label>\n\t\t\t<input name=\"author\" [(ngModel)]=\"book.author\">\n\t\t\t<br />\n\t\t\t<label>Year: </label>\n\t\t\t<input name=\"year\" [(ngModel)]=\"book.year\">\n\t\t\t<br />\n\t\t\t\n\t\t\t<button (click)=\"upsertBook()\">Save</button>\n\n\t\t</form>\n    </fieldset> \n</div>\n\n\n<fieldset *ngIf=books>\n\t<legend>Books: <button (click)=\"showAddBook()\">Add Book</button> </legend>\n    <table cellspacing=20>\n\t\t<tr>\n            <th></th>\n            <th>ID</th>\n            <th>Year</th>\n            <th>Author</th>\n            <th>Title</th>\n       </tr>\n\t\t<tr *ngFor='let b of books;'>\n            <td align=center>\n\t\t\t\t<button (click)=\"showEditBook(b.id)\">Edit</button>\n\t\t\t</td>\n\t\t\t<td align=right>{{b.id}}</td>\n            <td>{{b.year}}</td>\n\t\t\t<td>{{b.author}}</td>\n\t\t\t<td>{{b.title}}</td>\n             <td align=center>\n\t\t\t\t<button (click)=\"deleteBook(b.id)\">Delete</button>\n\t\t\t</td>\n       </tr>\n\t</table>\n</fieldset>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jee103/jee103.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/jee103/jee103.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsJee103Jee103ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "{{ currentUser ? 'Welcome ' + currentUser.username : ''}} \n<button routerLink=\"/login/\">{{ isLoggedIn() ? 'Logout' : 'Login' }}</button>\n\n<h1>\n\tJEE-103: My Books \n</h1>\n\n<div *ngIf=book>\n\t<fieldset style='width: 100%'>\n\t\t<legend>Book Details ({{book.id}}):</legend>\n\t\t<form>\n\t\t\t<label>Title: </label>\n\t\t\t<input name=\"title\" [(ngModel)]=\"book.title\">\n\t\t\t<br />\n\t\t\t<label>Author: </label>\n\t\t\t<input name=\"author\" [(ngModel)]=\"book.author\">\n\t\t\t<br />\n\t\t\t<label>Year: </label>\n\t\t\t<input name=\"year\" [(ngModel)]=\"book.year\">\n\t\t\t<br />\n\t\t\t\n\t\t\t<button (click)=\"upsertBook()\">Save</button>\n\n\t\t</form>\n    </fieldset> \n</div>\n\n\n<fieldset>\n\t<legend>Books: <button  *ngIf=\"isLoggedIn()\" (click)=\"showAddBook()\">Add Book</button></legend>\n \t{{ isLoggedIn() ? '' : 'Must Login to Add/Edit Books' }}\n   <table cellspacing=20>\n\t\t<tr>\n            <th></th>\n            <th>ID</th>\n            <th>Year</th>\n            <th>Author</th>\n            <th>Title</th>\n       </tr>\n\t\t<tr *ngFor='let b of books;'>\n            <td align=center>\n\t\t\t\t<button *ngIf=\"isLoggedIn()\" (click)=\"showEditBook(b.id)\">Edit</button>\n\t\t\t</td>\n\t\t\t<td align=right>{{b.id}}</td>\n            <td>{{b.year}}</td>\n\t\t\t<td>{{b.author}}</td>\n\t\t\t<td>{{b.title}}</td>\n             <td align=center>\n\t\t\t\t<button *ngIf=\"isLoggedIn()\" (click)=\"deleteBook(b.id)\">Delete</button>\n\t\t\t</td>\n       </tr>\n\t</table>\n</fieldset>\n\n\n\n<div *ngIf=user>\n\t<fieldset style='width: 100%'>\n\t\t<legend>User Details ({{user.id}}):</legend>\n\t\t<form>\n\t\t\t<label>UserID: </label>\n\t\t\t<input name=\"username\" [(ngModel)]=\"user.username\">\n\t\t\t<br />\n\t\t\t<label>Password: </label>\n\t\t\t<input name=\"password\" [(ngModel)]=\"user.password\">\n\t\t\t<br />\n\t\t\t<label>Role: </label>\n\t\t\t\t<select name=\"role\" [(ngModel)]=\"user.role\">\n\t\t\t\t\t<option *ngFor=\"let r of getUserRoleKeys()\" [value]='r' selected>{{userRoleNames.get(r)}}</option>\n\t\t\t\t\t<!-- <option [value]='USER_ROLE.PUBLIC' selected>PUBLIC</option> -->\n\t\t\t\t\t<!-- <option [value]='USER_ROLE.ADMIN'>ADMIN</option> -->\n\t\t\t\t</select>\n\t\t\t<br />\n\t\t\t\n\t\t\t<button (click)=\"upsertUser()\">Save</button>\n\n\t\t</form>\n    </fieldset> \n</div>\n\n<fieldset *ngIf=isAdmin>\n\t<legend>Users: \t\n\t<button *ngIf=\"isLoggedIn()\" (click)=\"showAddUser()\">Add User</button></legend>\n\t{{ isLoggedIn() ? '' : 'Must Login to View Users' }}\n    <table cellspacing=20>\n\t\t<tr>\n            <th></th>\n            <th>ID</th>\n            <th>UserId</th>\n            <th>Role</th>\n       </tr>\n\t\t<tr *ngFor='let u of users;'>\n            <td align=center>\n\t\t\t\t<button *ngIf=(loggedIn) (click)=\"showEditUser(u.id)\">Edit</button>\n\t\t\t</td>\n\t\t\t<td align=right>{{u.id}}</td>\n            <td>{{u.username}}</td>\n\t\t\t<td>{{u.role}}</td>\n             <td align=center>\n\t\t\t\t<button *ngIf=(loggedIn) (click)=\"deleteUser(u.id)\">Delete</button>\n\t\t\t</td>\n       </tr>\n\t</table>\n</fieldset>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\t<fieldset style='width: 100%'>\n\t\t<legend>Login Form</legend>\n\t\t<form>\n\t\t\t<label>UserID: </label>\n\t\t\t<input name=\"username\" type=text [(ngModel)]=\"user.username\">\n\t\t\t<br />\n\t\t\t<label>Password: </label>\n\t\t\t<input name=\"password\" type=password [(ngModel)]=\"user.password\">\n\t\t\t<button (click)=\"login()\">Login</button>\n\n\t\t</form>\n    </fieldset> \n";
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

      this.title = 'JEE-UI';
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.routes */
    "./src/app/app.routes.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_jee101_jee101_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/jee101/jee101.component */
    "./src/app/components/jee101/jee101.component.ts");
    /* harmony import */


    var _components_jee102_jee102_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/jee102/jee102.component */
    "./src/app/components/jee102/jee102.component.ts");
    /* harmony import */


    var _components_jee103_jee103_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/jee103/jee103.component */
    "./src/app/components/jee103/jee103.component.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_jee101_jee101_component__WEBPACK_IMPORTED_MODULE_8__["Jee101Component"], _components_jee102_jee102_component__WEBPACK_IMPORTED_MODULE_9__["Jee102Component"], _components_jee103_jee103_component__WEBPACK_IMPORTED_MODULE_10__["Jee103Component"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"], {
        useHash: true,
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__["PreloadAllModules"],
        onSameUrlNavigation: 'reload'
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
      providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/

  /*! exports provided: ROUTES */

  /***/
  function srcAppAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_jee101_jee101_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/jee101/jee101.component */
    "./src/app/components/jee101/jee101.component.ts");
    /* harmony import */


    var _components_jee102_jee102_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/jee102/jee102.component */
    "./src/app/components/jee102/jee102.component.ts");
    /* harmony import */


    var _components_jee103_jee103_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/jee103/jee103.component */
    "./src/app/components/jee103/jee103.component.ts");

    var ROUTES = [{
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    }, {
      path: '',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    }, {
      path: 'jee101',
      component: _components_jee101_jee101_component__WEBPACK_IMPORTED_MODULE_2__["Jee101Component"]
    }, {
      path: 'jee102',
      component: _components_jee102_jee102_component__WEBPACK_IMPORTED_MODULE_3__["Jee102Component"]
    }, {
      path: 'jee103',
      component: _components_jee103_jee103_component__WEBPACK_IMPORTED_MODULE_4__["Jee103Component"]
    }, {
      path: '**',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/components/jee101/jee101.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/jee101/jee101.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsJee101Jee101ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvamVlMTAxL2plZTEwMS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/jee101/jee101.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/jee101/jee101.component.ts ***!
    \*******************************************************/

  /*! exports provided: Jee101Component */

  /***/
  function srcAppComponentsJee101Jee101ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Jee101Component", function () {
      return Jee101Component;
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


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts"); // import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';


    var Jee101Component = /*#__PURE__*/function () {
      // tslint:disable-next-line:variable-name
      function Jee101Component(_apiService, route, router) {
        _classCallCheck(this, Jee101Component);

        this._apiService = _apiService;
        this.route = route;
        this.router = router;
      }

      _createClass(Jee101Component, [{
        key: "getGreeting",
        value: function getGreeting() {
          var _this = this;

          this._apiService.readGreeting101().subscribe(function (success) {
            _this.greeting = success;
          }, function (error) {
            alert('This greeting failed.');
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Jee101Component;
    }();

    Jee101Component.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    Jee101Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jee101',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jee101.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jee101/jee101.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jee101.component.css */
      "./src/app/components/jee101/jee101.component.css"))["default"]]
    })], Jee101Component);
    /***/
  },

  /***/
  "./src/app/components/jee102/jee102.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/jee102/jee102.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsJee102Jee102ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvamVlMTAyL2plZTEwMi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/jee102/jee102.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/jee102/jee102.component.ts ***!
    \*******************************************************/

  /*! exports provided: Jee102Component */

  /***/
  function srcAppComponentsJee102Jee102ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Jee102Component", function () {
      return Jee102Component;
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


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_model_book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/model/book */
    "./src/app/model/book.ts");

    var Jee102Component = /*#__PURE__*/function () {
      function Jee102Component(apiService) {
        _classCallCheck(this, Jee102Component);

        this.apiService = apiService;
        this.books = this.getBooks();
      } // newBook() { this.router.navigate(['book', PAGE_TYPE.NEW_BOOK]); }


      _createClass(Jee102Component, [{
        key: "getBooks",
        value: function getBooks() {
          var _this2 = this;

          this.apiService.readBooks102().subscribe(function (success) {
            _this2.books = success;
            console.log('Got Books: ' + _this2.books);
          }, function (error) {
            return _this2.apiService.handleError(error);
          });
        }
      }, {
        key: "showAddBook",
        value: function showAddBook() {
          this.book = new src_app_model_book__WEBPACK_IMPORTED_MODULE_3__["Book"]();
        }
      }, {
        key: "showEditBook",
        value: function showEditBook(id) {
          var _this3 = this;

          console.log('Showing edit bookID: ' + id);
          this.apiService.readBook102(id).subscribe(function (success) {
            _this3.book = success;
          }, function (error) {
            return _this3.apiService.handleError(error);
          });
        }
      }, {
        key: "upsertBook",
        value: function upsertBook() {
          var _this4 = this;

          var apiServieRequest;

          if (this.book.id) {
            apiServieRequest = this.apiService.updateBook102(this.book);
          } else {
            apiServieRequest = this.apiService.createBook102(this.book);
          }

          apiServieRequest.subscribe(function (success) {
            _this4.getBooks();

            _this4.book = null;
          }, function (error) {
            return _this4.apiService.handleError(error);
          });
        }
      }, {
        key: "deleteBook",
        value: function deleteBook(id) {
          var _this5 = this;

          if (confirm('Are you sure you want to delete the book?')) {
            this.apiService.deleteBook102(id).subscribe(function (success) {
              _this5.getBooks();
            }, function (error) {
              return _this5.apiService.handleError(error);
            });
          }
        }
      }]);

      return Jee102Component;
    }();

    Jee102Component.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    Jee102Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jee102',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jee102.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jee102/jee102.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jee102.component.css */
      "./src/app/components/jee102/jee102.component.css"))["default"]]
    })], Jee102Component);
    /***/
  },

  /***/
  "./src/app/components/jee103/jee103.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/jee103/jee103.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsJee103Jee103ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvamVlMTAzL2plZTEwMy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/jee103/jee103.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/jee103/jee103.component.ts ***!
    \*******************************************************/

  /*! exports provided: Jee103Component */

  /***/
  function srcAppComponentsJee103Jee103ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Jee103Component", function () {
      return Jee103Component;
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


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_model_book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/model/book */
    "./src/app/model/book.ts");
    /* harmony import */


    var src_app_model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/model/user */
    "./src/app/model/user.ts");

    var Jee103Component = /*#__PURE__*/function () {
      function Jee103Component(apiService) {
        _classCallCheck(this, Jee103Component);

        this.apiService = apiService;
        this.USER_ROLE = src_app_model_user__WEBPACK_IMPORTED_MODULE_4__["USER_ROLE"];
        this.userRoleNames = src_app_model_user__WEBPACK_IMPORTED_MODULE_4__["User"].getUserRoleNames();
        this.loggedIn = false;
        this.isAdmin = true;
        this.showLogin = false;
        this.books = this.getBooks();
        this.users = this.getUsers();
        this.currentUser = apiService.getCurrentUser();
      }

      _createClass(Jee103Component, [{
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return this.apiService.getCurrentUser() != null;
        }
      }, {
        key: "getUserRoleKeys",
        value: function getUserRoleKeys() {
          return Array.from(this.userRoleNames.keys());
        }
      }, {
        key: "getBooks",
        value: function getBooks() {
          var _this6 = this;

          this.apiService.readBooks103().subscribe(function (success) {
            _this6.books = success.body;

            _this6.apiService.updateJwt(success.headers);
          }, function (error) {
            return _this6.apiService.handleError(error);
          });
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this7 = this;

          this.apiService.readUsers103().subscribe(function (success) {
            _this7.users = success.body;

            _this7.apiService.updateJwt(success.headers);
          }, function (error) {
            return _this7.apiService.handleError(error);
          });
        }
      }, {
        key: "showAddBook",
        value: function showAddBook() {
          this.book = new src_app_model_book__WEBPACK_IMPORTED_MODULE_3__["Book"]();
        }
      }, {
        key: "showEditBook",
        value: function showEditBook(id) {
          var _this8 = this;

          console.log('Showing edit bookID: ' + id);
          this.apiService.readBook103(id).subscribe(function (success) {
            _this8.book = success.body;

            _this8.apiService.updateJwt(success.headers);
          }, function (error) {
            return _this8.apiService.handleError(error);
          });
        }
      }, {
        key: "showAddUser",
        value: function showAddUser() {
          this.user = new src_app_model_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
          this.user.role = src_app_model_user__WEBPACK_IMPORTED_MODULE_4__["USER_ROLE"].PUBLIC; // Set default option
        }
      }, {
        key: "showEditUser",
        value: function showEditUser(id) {
          var _this9 = this;

          console.log('Showing edit bookID: ' + id);
          this.apiService.readUser103(id).subscribe(function (success) {
            _this9.user = success.body;

            _this9.apiService.updateJwt(success.headers);
          }, function (error) {
            return _this9.apiService.handleError(error);
          });
        }
      }, {
        key: "upsertBook",
        value: function upsertBook() {
          var _this10 = this;

          var apiServiceRequest;

          if (this.book.id) {
            apiServiceRequest = this.apiService.updateBook103(this.book);
          } else {
            apiServiceRequest = this.apiService.createBook103(this.book);
          }

          apiServiceRequest.subscribe(function (success) {
            _this10.getBooks();

            _this10.book = null;
          }, function (error) {
            return _this10.apiService.handleError(error);
          });
        }
      }, {
        key: "deleteBook",
        value: function deleteBook(id) {
          var _this11 = this;

          if (confirm('Are you sure you want to delete the book?')) {
            this.apiService.deleteBook103(id).subscribe(function (success) {
              _this11.getBooks();
            }, function (error) {
              return _this11.apiService.handleError(error);
            });
          }
        }
      }, {
        key: "upsertUser",
        value: function upsertUser() {
          var _this12 = this;

          var apiServiceRequest;

          if (this.user.id) {
            apiServiceRequest = this.apiService.updateUser103(this.user);
          } else {
            apiServiceRequest = this.apiService.createUser103(this.user);
          }

          apiServiceRequest.subscribe(function (success) {
            _this12.getUsers();

            _this12.user = null;
          }, function (error) {
            return _this12.apiService.handleError(error);
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          var _this13 = this;

          if (confirm('Are you sure you want to delete the user?')) {
            this.apiService.deleteUser103(id).subscribe(function (success) {
              _this13.getUsers();
            }, function (error) {
              return _this13.apiService.handleError(error);
            });
          }
        }
      }]);

      return Jee103Component;
    }();

    Jee103Component.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    Jee103Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jee103',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jee103.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/jee103/jee103.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jee103.component.css */
      "./src/app/components/jee103/jee103.component.css"))["default"]]
    })], Jee103Component);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/model/user */
    "./src/app/model/user.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(apiService, router) {
        _classCallCheck(this, LoginComponent);

        this.apiService = apiService;
        this.router = router;
        this.apiService.terminateSession(); // The /login/ route automatically logs out the current User

        this.user = new src_app_model_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
      }

      _createClass(LoginComponent, [{
        key: "login",
        value: function login() {
          var _this14 = this;

          this.apiService.loginUser(this.user).subscribe(function (success) {
            // this.user = success.body;
            _this14.apiService.setCurrentUser(success.body);

            _this14.apiService.updateJwt(success.headers);

            _this14.router.navigate(['/jee103/']);
          }, function (error) {
            return _this14.apiService.handleError(error);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/model/book.ts":
  /*!*******************************!*\
    !*** ./src/app/model/book.ts ***!
    \*******************************/

  /*! exports provided: Book */

  /***/
  function srcAppModelBookTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Book", function () {
      return Book;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Book = function Book() {
      _classCallCheck(this, Book);
    };
    /***/

  },

  /***/
  "./src/app/model/user.ts":
  /*!*******************************!*\
    !*** ./src/app/model/user.ts ***!
    \*******************************/

  /*! exports provided: USER_ROLE, User */

  /***/
  function srcAppModelUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "USER_ROLE", function () {
      return USER_ROLE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var USER_ROLE;

    (function (USER_ROLE) {
      USER_ROLE["ADMIN"] = "ADMIN";
      USER_ROLE["PUBLIC"] = "PUBLIC";
    })(USER_ROLE || (USER_ROLE = {}));

    var UserRoleNames = new Map([// These are the option display names
    [USER_ROLE.ADMIN, 'Admin'], [USER_ROLE.PUBLIC, 'Public']]);

    var User = /*#__PURE__*/function () {
      function User() {
        _classCallCheck(this, User);
      }

      _createClass(User, null, [{
        key: "getUserRoleNames",
        value: function getUserRoleNames() {
          return UserRoleNames;
        }
      }]);

      return User;
    }();
    /***/

  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
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

    var KEY_JWT_ACCESS = 'jwt_access';
    var KEY_USER_ID = 'user_id';
    var KEY_USER_ROLE = 'user_role';
    var KEY_USERNAME = 'username';
    var service101;
    var service102;
    var service103;
    var headers102 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');

    var ApiService = /*#__PURE__*/function () {
      function ApiService(router, http) {
        _classCallCheck(this, ApiService);

        this.router = router;
        this.http = http;
        this.JWT_ACCESS_HEADER = 'Jwt-Access';
        this.TIMEOUT_HEADER = 'Timeout-Seconds';
        this.warnSecondsRemain = 60;
        this.expSecondsRemain = this.warnSecondsRemain;
        service101 = 'http://localhost:8080/JEE-101/api/v1.0/';
        service102 = 'http://localhost:8080/JEE-102/api/v1.0/';
        service103 = 'http://localhost:8080/JEE-103/api/v1.0/';
      } //
      // JEE-103 JWT Authentication services
      // Note: Tried to move this to a JwtService, but that caused a circular dependency that broke initialization
      //      ApiService called JwtService to get header
      //      JwtService called ApiService to refresh jwt when called by the js prompt
      //


      _createClass(ApiService, [{
        key: "setCurrentUser",
        value: function setCurrentUser(user) {
          this.user = user;
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          return this.user;
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          if (this.jwtAccess) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "getAuthzHeaders",
        value: function getAuthzHeaders() {
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]() // .set('Content-Type', 'POST')  // This was necessary for OPTIONS request with HttpClient for CORS to avoid 403
          .set('Authorization', 'Bearer ' + this.getJwtAccess()).set('Content-Type', 'application/json');
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.log('Got API error status: ' + error.status); // Do something like this.router.navigate(['/error']);
        }
      }, {
        key: "getJwtAccess",
        value: function getJwtAccess() {
          if (!this.jwtAccess) {
            this.jwtAccess = localStorage.getItem(KEY_JWT_ACCESS);
          }

          return this.jwtAccess;
        }
      }, {
        key: "setJwtAccess",
        value: function setJwtAccess(jwt) {
          //console.log('>>>>>>>>>> ApiService.setJwtAccess with: ' + jwt);
          this.jwtAccess = jwt;
          localStorage.setItem(KEY_JWT_ACCESS, jwt);
        }
      }, {
        key: "getSecondsRemaining",
        value: function getSecondsRemaining() {
          return this.expSecondsRemain;
        }
      }, {
        key: "updateJwt",
        value: function updateJwt(headers) {
          var _this15 = this;

          var expSeconds = null;
          var jwtAccess = null;

          if (headers != null) {
            expSeconds = headers.get(this.TIMEOUT_HEADER);
            jwtAccess = headers.get(this.JWT_ACCESS_HEADER);
          }

          this.setJwtAccess(jwtAccess); // console.log("Restarting Timer with expSeconds: " + expSeconds + " and jwtAccess: " + jwtAccess);

          clearInterval(this.interval);
          this.expSecondsRemain = 0; // Clear time remaining for rest interval

          this.interval = setInterval(function () {
            if (_this15.expSecondsRemain > 0) {
              _this15.expSecondsRemain--;
              if (_this15.expSecondsRemain % 10 === 0) console.log(_this15.getSecondsRemaining() + ' seconds remaining.');
            } else {
              _this15.expSecondsRemain = expSeconds;
            }

            if (_this15.expSecondsRemain === _this15.warnSecondsRemain) {
              var keepSession = confirm('Session timing out in ' + _this15.warnSecondsRemain + ' seconds.  Keep session alive?');

              if (keepSession === true) {
                console.log('Extending session...');

                _this15.continueSession();
              } else {
                console.log('Not extending session...');

                _this15.terminateSession();
              }
            }
          }, 1000);
        }
      }, {
        key: "continueSession",
        value: function continueSession() {
          var _this16 = this;

          this.refreshUser().subscribe(function (success) {
            _this16.updateJwt(success.headers);
          }, function (err) {
            return _this16.handleError(err);
          });
        }
      }, {
        key: "terminateSession",
        value: function terminateSession() {
          this.user = null;
          this.updateJwt(null);
        } //
        // JEE-101 Services
        //

      }, {
        key: "readGreeting101",
        value: function readGreeting101() {
          return this.http.get(service101 + 'hello');
        } //
        // JEE-102 Book Services
        //

      }, {
        key: "readBooks102",
        value: function readBooks102() {
          return this.http.get(service102 + 'book');
        }
      }, {
        key: "readBook102",
        value: function readBook102(id) {
          return this.http.get(service102 + 'book/' + id);
        }
      }, {
        key: "createBook102",
        value: function createBook102(book) {
          return this.http.post(service102 + 'book', JSON.stringify(book), {
            headers: headers102
          });
        }
      }, {
        key: "updateBook102",
        value: function updateBook102(book) {
          return this.http.put(service102 + 'book', JSON.stringify(book), {
            headers: headers102
          });
        }
      }, {
        key: "deleteBook102",
        value: function deleteBook102(id) {
          return this.http["delete"](service102 + 'book/' + id, {
            headers: headers102
          });
        } //
        // Login/Logout/Refresh Services
        //

      }, {
        key: "loginUser",
        value: function loginUser(user) {
          return this.http.post(service103 + 'auth/login', JSON.stringify(user), {
            observe: 'response',
            headers: this.getAuthzHeaders()
          });
        }
      }, {
        key: "refreshUser",
        value: function refreshUser() {
          return this.http.get(service103 + 'auth/refresh', {
            observe: 'response',
            headers: this.getAuthzHeaders()
          });
        } //
        // JEE-103 Authorized Book Services
        //         Services now 'observe' which requires pulling the success.body and success.headers
        //

      }, {
        key: "readBooks103",
        value: function readBooks103() {
          return this.http.get(service103 + 'book', {
            observe: 'response',
            headers: this.getAuthzHeaders()
          });
        }
      }, {
        key: "readBook103",
        value: function readBook103(id) {
          return this.http.get(service103 + 'book/' + id, {
            observe: 'response',
            headers: this.getAuthzHeaders()
          });
        }
      }, {
        key: "createBook103",
        value: function createBook103(book) {
          return this.http.post(service103 + 'authz/book', JSON.stringify(book), {
            observe: 'response',
            headers: this.getAuthzHeaders()
          });
        }
      }, {
        key: "updateBook103",
        value: function updateBook103(book) {
          return this.http.put(service103 + 'authz/book', JSON.stringify(book), {
            observe: 'response',
            headers: this.getAuthzHeaders()
          });
        }
      }, {
        key: "deleteBook103",
        value: function deleteBook103(id) {
          return this.http["delete"](service103 + 'authz/book/' + id, {
            observe: 'response',
            headers: this.getAuthzHeaders()
          });
        } //
        // JEE-103 Authorized User Services
        //

      }, {
        key: "readUsers103",
        value: function readUsers103() {
          return this.http.get(service103 + 'authz/user', {
            observe: 'response',
            headers: this.getAuthzHeaders()
          });
        }
      }, {
        key: "readUser103",
        value: function readUser103(id) {
          return this.http.get(service103 + 'authz/user/' + id, {
            observe: 'response',
            headers: this.getAuthzHeaders()
          });
        }
      }, {
        key: "createUser103",
        value: function createUser103(user) {
          return this.http.post(service103 + 'authz/user', JSON.stringify(user), {
            observe: 'response',
            headers: this.getAuthzHeaders()
          });
        }
      }, {
        key: "updateUser103",
        value: function updateUser103(user) {
          return this.http.put(service103 + 'authz/user', JSON.stringify(user), {
            observe: 'response',
            headers: this.getAuthzHeaders()
          });
        }
      }, {
        key: "deleteUser103",
        value: function deleteUser103(id) {
          return this.http["delete"](service103 + 'authz/user/' + id, {
            observe: 'response',
            headers: this.getAuthzHeaders()
          });
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], ApiService);
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
      production: false
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
    /*! D:\dev\repos\JakartaEE\JEE-UI\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map