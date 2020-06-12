(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Signup</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <div class=\"signup-logo\">\r\n        <img src=\"assets/img/appicon.svg\" alt=\"Ionic Logo\">\r\n    </div>\r\n\r\n    <form #signupForm=\"ngForm\" novalidate>\r\n        <ion-list padding>\r\n            <ion-item>\r\n                <ion-label position=\"floating\" color=\"dark\">Username</ion-label>\r\n                <ion-input [(ngModel)]=\"signup.username\" name=\"username\" type=\"text\" #username=\"ngModel\" required>\r\n                </ion-input>\r\n            </ion-item>\r\n            <ion-text color=\"danger\">\r\n                <p [hidden]=\"username.valid || submitted == false\" class=\"ion-padding-start\">\r\n                    Username is required\r\n                </p>\r\n            </ion-text>\r\n\r\n            <ion-item>\r\n                <ion-label position=\"floating\" color=\"dark\">Password</ion-label>\r\n                <ion-input [(ngModel)]=\"signup.password\" name=\"password\" type=\"password\" #password=\"ngModel\" required>\r\n                </ion-input>\r\n            </ion-item>\r\n            <ion-text color=\"danger\">\r\n                <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\r\n                    Password is required\r\n                </p>\r\n            </ion-text>\r\n        </ion-list>\r\n\r\n        <div class=\"ion-padding\">\r\n            <ion-button (click)=\"onSignup(signupForm)\" type=\"submit\" expand=\"block\">Create</ion-button>\r\n        </div>\r\n    </form>\r\n\r\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/pages/signup/signup-routing.module.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/pages/signup/signup-routing.module.ts ***!
          \*******************************************************/
        /*! exports provided: SignupPageRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () { return SignupPageRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup */ "./src/app/pages/signup/signup.ts");
            var routes = [
                {
                    path: '',
                    component: _signup__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
                }
            ];
            var SignupPageRoutingModule = /** @class */ (function () {
                function SignupPageRoutingModule() {
                }
                return SignupPageRoutingModule;
            }());
            SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], SignupPageRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/signup/signup.module.ts": 
        /*!***********************************************!*\
          !*** ./src/app/pages/signup/signup.module.ts ***!
          \***********************************************/
        /*! exports provided: SignUpModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpModule", function () { return SignUpModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup */ "./src/app/pages/signup/signup.ts");
            /* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/pages/signup/signup-routing.module.ts");
            var SignUpModule = /** @class */ (function () {
                function SignUpModule() {
                }
                return SignUpModule;
            }());
            SignUpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                        _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignupPageRoutingModule"]
                    ],
                    declarations: [
                        _signup__WEBPACK_IMPORTED_MODULE_5__["SignupPage"],
                    ]
                })
            ], SignUpModule);
            /***/ 
        }),
        /***/ "./src/app/pages/signup/signup.scss": 
        /*!******************************************!*\
          !*** ./src/app/pages/signup/signup.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".signup-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.signup-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0U6XFxKdXN0U2NoZWR1bGVcXEp1c3RTY2hlZHVsZS9zcmNcXGFwcFxccGFnZXNcXHNpZ251cFxcc2lnbnVwLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAtbG9nbyB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNpZ251cC1sb2dvIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuIiwiLnNpZ251cC1sb2dvIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2lnbnVwLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/signup/signup.ts": 
        /*!****************************************!*\
          !*** ./src/app/pages/signup/signup.ts ***!
          \****************************************/
        /*! exports provided: SignupPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function () { return SignupPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");
            var SignupPage = /** @class */ (function () {
                function SignupPage(router, userData) {
                    this.router = router;
                    this.userData = userData;
                    this.signup = { username: '', password: '' };
                    this.submitted = false;
                }
                SignupPage.prototype.onSignup = function (form) {
                    this.submitted = true;
                    if (form.valid) {
                        this.userData.signup(this.signup.username);
                        this.router.navigateByUrl('/app/tabs/schedule');
                    }
                };
                return SignupPage;
            }());
            SignupPage.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"] }
            ]; };
            SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'page-signup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.scss */ "./src/app/pages/signup/signup.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
                    _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"]])
            ], SignupPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-signup-signup-module-es2015.js.map
//# sourceMappingURL=pages-signup-signup-module-es5.js.map
//# sourceMappingURL=pages-signup-signup-module-es5.js.map