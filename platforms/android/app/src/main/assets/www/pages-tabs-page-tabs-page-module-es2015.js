(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-page-tabs-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>About</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"about-header\">\r\n        <img src=\"assets/img/ionic-logo-white.svg\" alt=\"ionic logo\">\r\n    </div>\r\n    <div class=\"about-info\">\r\n        <h4 class=\"ion-text-center\" style=\"color:dodgerblue\">Just Schedule!</h4>\r\n\r\n        <p class=\"ion-padding-start ion-padding-end\">\r\n            This app is build as a part of Mini Project by :\r\n            <ion-list lines=\"none\">\r\n                <ion-item>\r\n                    <ion-label>Shridhar Jidge</ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>Chetan Arekar</ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label>Prajwal Arage</ion-label>\r\n                </ion-item>\r\n            </ion-list>\r\n        </p>\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Map</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div #mapCanvas class=\"map-canvas\"></div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-filter/schedule-filter.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-filter/schedule-filter.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button *ngIf=\"ios\" (click)=\"dismiss()\">Cancel</ion-button>\r\n      <ion-button *ngIf=\"!ios\" (click)=\"selectAll(false)\">Reset</ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>\r\n      Filter Sessions\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"applyFilters()\" strong>Done</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen>\r\n\r\n  <ion-list [lines]=\"ios ? 'inset' : 'full'\">\r\n    <ion-list-header>Tracks</ion-list-header>\r\n\r\n    <ion-item *ngFor=\"let track of tracks\" [attr.track]=\"track.name | lowercase\">\r\n      <ion-icon *ngIf=\"ios\" slot=\"start\" [name]=\"track.icon\" color=\"medium\"></ion-icon>\r\n      <ion-label>{{track.name}}</ion-label>\r\n      <ion-checkbox [(ngModel)]=\"track.isChecked\"></ion-checkbox>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n</ion-content>\r\n\r\n<ion-footer translucent *ngIf=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"selectAll(false)\">Deselect All</ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"selectAll(true)\">Select All</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule/schedule.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule/schedule.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Just Schedule</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-header no-padding>\r\n    <ion-toolbar>\r\n        <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"updateSchedule()\">\r\n            <ion-segment-button value=\"all\">\r\n                All\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"favorites\">\r\n                Completed\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <!-- <ion-list #scheduleList [hidden]=\"shownSessions === 0\">\r\n        <ion-item-group *ngFor=\"let group of groups\" [hidden]=\"group.hide\">\r\n            <ion-item-divider sticky>\r\n                <ion-label>\r\n                    {{group.time}}\r\n                </ion-label>\r\n            </ion-item-divider>\r\n\r\n            <ion-item-sliding *ngFor=\"let session of group.sessions\" #slidingItem [attr.track]=\"session.tracks[0] | lowercase\" [hidden]=\"session.hide\">\r\n                <ion-item routerLink=\"/app/tabs/schedule/session/{{session.id}}\">\r\n                    <ion-label>\r\n                        <h3>{{session.name}}</h3>\r\n                    </ion-label>\r\n                     \r\n                </ion-item>\r\n\r\n                <ion-item-options>\r\n                    <ion-item-option color=\"favorite\" (click)=\"addFavorite(slidingItem, session)\" *ngIf=\"segment === 'all'\">\r\n                        Favorite\r\n                    </ion-item-option>\r\n                    <ion-item-option color=\"danger\" (click)=\"removeFavorite(slidingItem, session, 'Remove Favorite')\" *ngIf=\"segment === 'favorites'\">\r\n                        Remove\r\n                    </ion-item-option>\r\n                </ion-item-options>\r\n            </ion-item-sliding>\r\n        </ion-item-group> -->\r\n\r\n        <ion-item-sliding *ngFor=\"let task of tasks\" #slidingItem >\r\n           \r\n            <ion-item routerLink=\"/app/tabs/schedule/session/{{1}}\">\r\n                    \r\n                <ion-label color= 'dark'>\r\n                    <h2>{{task.title}}</h2>\r\n                </ion-label>\r\n                \r\n            </ion-item>\r\n            <ion-item-options>\r\n                <ion-item-option color=\"favorite\" (click)=\"addFavorite(slidingItem, session)\" *ngIf=\"segment === 'all'\">\r\n                    Completed\r\n                </ion-item-option>\r\n                <ion-item-option color=\"danger\" (click)=\"removeFavorite(slidingItem, session, 'Remove Favorite')\" *ngIf=\"segment === 'favorites'\">\r\n                    Remove\r\n                </ion-item-option>\r\n            </ion-item-options>\r\n        </ion-item-sliding>\r\n    \r\n    <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" #fab>\r\n        <ion-fab-button>\r\n            <ion-icon size=\"large\" name=\"add\"></ion-icon>\r\n        </ion-fab-button>\r\n\r\n        <ion-fab-list side=\"top\">\r\n            <ion-fab-button (click)=\"onFabClick()\">\r\n                <ion-icon color=\"primary\" name=\"briefcase\"></ion-icon>\r\n            </ion-fab-button>\r\n\r\n        </ion-fab-list>\r\n    </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-detail/session-detail.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-detail/session-detail.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button [defaultHref]=\"defaultHref\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n\r\n            <ion-button (click)=\"shareSession()\">\r\n                <ion-icon slot=\"icon-only\" name=\"share\"></ion-icon>\r\n            </ion-button>\r\n\r\n            <ion-button (click)=\"deleteSession()\">\r\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n            </ion-button>\r\n\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n        <div *ngIf=\"session\" class=\"ion-padding\">\r\n                <h1>{{session.name}}</h1>\r\n                <!-- <span *ngFor=\"let track of session?.tracks\" [class]=\"'session-track-'+track.toLowerCase()\">{{track}}</span> -->\r\n                <p>{{session.description}}</p>\r\n                <ion-text color=\"medium\">\r\n                  {{session.timeStart}}\r\n                  <br /> {{session.location}}\r\n                </ion-text>\r\n        </div>\r\n    <ion-list>\r\n        <ion-item (click)=\"sessionClick('add to calendar')\" button>\r\n            <ion-label color=\"primary\">Add to Calendar</ion-label>\r\n        </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\r\n        <ion-fab-button color=\"success\">\r\n            <ion-icon size=\"large\" name=\"checkmark-circle-outline\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-detail/speaker-detail.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-detail/speaker-detail.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-list/speaker-list.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-list/speaker-list.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\r\n</ion-tabs>");

/***/ }),

/***/ "./src/app/pages/about-popover/about-popover.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/about-popover/about-popover.ts ***!
  \******************************************************/
/*! exports provided: PopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPage", function() { return PopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let PopoverPage = class PopoverPage {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    support() {
        // this.app.getRootNavs()[0].push('/support');
        this.popoverCtrl.dismiss();
    }
    close(url) {
        window.open(url, '_blank');
        this.popoverCtrl.dismiss();
    }
};
PopoverPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
PopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
    <ion-list>
      <ion-item button (click)="close('https://ionicframework.com/getting-started')">
        <ion-label>Learn Ionic</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://ionicframework.com/docs/')">
        <ion-label>Documentation</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://showcase.ionicframework.com')">
        <ion-label>Showcase</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://github.com/ionic-team/ionic')">
        <ion-label>GitHub Repo</ion-label>
      </ion-item>
      <ion-item button (click)="support()">
        <ion-label>Support</ion-label>
      </ion-item>
    </ion-list>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], PopoverPage);



/***/ }),

/***/ "./src/app/pages/about/about-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function() { return AboutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ "./src/app/pages/about/about.ts");




const routes = [
    {
        path: '',
        component: _about__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AboutPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about */ "./src/app/pages/about/about.ts");
/* harmony import */ var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../about-popover/about-popover */ "./src/app/pages/about-popover/about-popover.ts");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/pages/about/about-routing.module.ts");








let AboutModule = class AboutModule {
};
AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_7__["AboutPageRoutingModule"]
        ],
        declarations: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"], _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
        entryComponents: [_about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
        bootstrap: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]],
    })
], AboutModule);



/***/ }),

/***/ "./src/app/pages/about/about.scss":
/*!****************************************!*\
  !*** ./src/app/pages/about/about.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".about-header {\n  background-color: #222;\n  padding: 16px;\n  width: 100%;\n  height: 30%;\n  text-align: center;\n}\n\n.about-header img {\n  max-height: 100%;\n}\n\n.about-info p {\n  color: var(--ion-color-dark);\n  text-align: left;\n}\n\n.about-info ion-icon {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px;\n}\n\n.ios .about-info {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvRTpcXEp1c3RTY2hlZHVsZVxcSnVzdFNjaGVkdWxlL3NyY1xcYXBwXFxwYWdlc1xcYWJvdXRcXGFib3V0LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWJvdXQtaGVhZGVyIGltZyB7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmFib3V0LWluZm8gcCB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uYWJvdXQtaW5mbyBpb24taWNvbiB7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDMycHg7XHJcbn1cclxuXHJcbi5pb3MgLmFib3V0LWluZm8ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iLCIuYWJvdXQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hYm91dC1oZWFkZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLmFib3V0LWluZm8gcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5hYm91dC1pbmZvIGlvbi1pY29uIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDMycHg7XG59XG5cbi5pb3MgLmFib3V0LWluZm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/about/about.ts":
/*!**************************************!*\
  !*** ./src/app/pages/about/about.ts ***!
  \**************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about-popover/about-popover */ "./src/app/pages/about-popover/about-popover.ts");




let AboutPage = class AboutPage {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.conferenceDate = '2047-05-17';
    }
    presentPopover(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_3__["PopoverPage"],
                event
            });
            yield popover.present();
        });
    }
};
AboutPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.scss */ "./src/app/pages/about/about.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], AboutPage);



/***/ }),

/***/ "./src/app/pages/map/map-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/map/map-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function() { return MapPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ "./src/app/pages/map/map.ts");




const routes = [
    {
        path: '',
        component: _map__WEBPACK_IMPORTED_MODULE_3__["MapPage"]
    }
];
let MapPageRoutingModule = class MapPageRoutingModule {
};
MapPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MapPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/map/map.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ "./src/app/pages/map/map.ts");
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-routing.module */ "./src/app/pages/map/map-routing.module.ts");






let MapModule = class MapModule {
};
MapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _map_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapPageRoutingModule"]
        ],
        declarations: [
            _map__WEBPACK_IMPORTED_MODULE_4__["MapPage"],
        ]
    })
], MapModule);



/***/ }),

/***/ "./src/app/pages/map/map.scss":
/*!************************************!*\
  !*** ./src/app/pages/map/map.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map-canvas {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: transparent;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n}\n\n.show-map {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwL0U6XFxKdXN0U2NoZWR1bGVcXEp1c3RTY2hlZHVsZS9zcmNcXGFwcFxccGFnZXNcXG1hcFxcbWFwLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hcC9tYXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFFQSw2QkFBQTtFQUVBLFVBQUE7RUFDQSxpQ0FBQTtBQ0ZGOztBREtBO0VBQ0UsVUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFwL21hcC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC1jYW52YXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XHJcbn1cclxuXHJcbi5zaG93LW1hcCB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4iLCIubWFwLWNhbnZhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbjtcbn1cblxuLnNob3ctbWFwIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/map/map.ts":
/*!**********************************!*\
  !*** ./src/app/pages/map/map.ts ***!
  \**********************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let MapPage = class MapPage {
    constructor(doc, platform) {
        this.doc = doc;
        this.platform = platform;
    }
};
MapPage.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapCanvas', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MapPage.prototype, "mapElement", void 0);
MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.scss */ "./src/app/pages/map/map.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], MapPage);



/***/ }),

/***/ "./src/app/pages/pages.service.ts":
/*!****************************************!*\
  !*** ./src/app/pages/pages.service.ts ***!
  \****************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let TaskService = class TaskService {
    /* public finishedTaskChanged = new Subject<Task[]>();
   
     private _finishedTasks: Task[] = [];
     private _tasks: Task[] = [
       new Task(
         'first task',
         new Date(),
         'some Details'
       ),
       new Task(
         'Second task',
         new Date(),
         'other Details'
       ),
       new Task(
         'third task',
         new Date(),
         'some Details'
       ),
       new Task(
         'fourth task',
         new Date(),
         'other Details'
       ),
       new Task(
         'fifth task',
         new Date(),
         'some Details'
       ),
       new Task(
         'sixth task',
         new Date(),
         'other Details'
       ),
     ];
   
   */
    constructor(db) {
        this.db = db;
        this.taskscollection = this.db.collection('tasks');
        this.Tasks = this.taskscollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    gettasks() {
        // return [...this._tasks];
        return this.Tasks;
    }
    /* getfinishedTasks(): Observable<task> {
      // return [...this._finishedTasks];
   
     }*/
    getTask(id) {
        return this.taskscollection.doc(id).valueChanges();
    }
    addTask(task) {
        // this._tasks.push(task);
        // this.taskChanged.next([...this._tasks]);
        return this.taskscollection.add(JSON.parse(JSON.stringify(task)));
    }
    deleteTask(id) {
        return this.taskscollection.doc(id).delete();
        /* this._tasks.splice(index, 1);
        this.taskChanged.next([...this._tasks]);*/
    }
    /* onFinishTask(index: number) {
   
   
        this._finishedTasks.push(this._tasks[index]);
       this.finishedTaskChanged.next([...this._finishedTasks]);
       this.deleteTask(index);
     }
   
     deleteFinishedTask(index: number) {
       this._finishedTasks.splice(index, 1);
       this.finishedTaskChanged.next([...this._finishedTasks]);
     }
   */
    updateTask(id, task) {
        return this.taskscollection.doc(id).update(task);
        /*  console.log(this._tasks[index]);
          const newTask: Task = new Task(task.title, task.date, task.details);
          this._tasks[index] = newTask;
          console.log(this._tasks[index]);
          this.taskChanged.next([...this._tasks]);
          */
    }
};
TaskService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], TaskService);



/***/ }),

/***/ "./src/app/pages/schedule-filter/schedule-filter.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/schedule-filter/schedule-filter.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".md ion-toolbar ion-button {\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n.md ion-checkbox {\n  --background-checked: transparent;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  --checkmark-color: var(--ion-color-primary);\n}\n.md ion-list {\n  background: inherit;\n}\n.ios ion-list-header {\n  height: 50px;\n  font-size: 22px;\n  letter-spacing: 0;\n  text-transform: capitalize;\n}\n.ios ion-label {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUtZmlsdGVyL0U6XFxKdXN0U2NoZWR1bGVcXEp1c3RTY2hlZHVsZS9zcmNcXGFwcFxccGFnZXNcXHNjaGVkdWxlLWZpbHRlclxcc2NoZWR1bGUtZmlsdGVyLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NjaGVkdWxlLWZpbHRlci9zY2hlZHVsZS1maWx0ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREdFO0VBQ0UsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkNBQUE7QUNESjtBRElFO0VBQ0UsbUJBQUE7QUNGSjtBRFNFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FDTko7QURTRTtFQUNFLCtCQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zY2hlZHVsZS1maWx0ZXIvc2NoZWR1bGUtZmlsdGVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWQge1xyXG4gIGlvbi10b29sYmFyIGlvbi1idXR0b24ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICB9XHJcblxyXG4gIGlvbi1jaGVja2JveCB7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAgIC0tY2hlY2ttYXJrLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG5cclxuICBpb24tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG5cclxuLmlvcyB7XHJcbiAgLy8gVE9ETyB0aGlzIG5lZWRzIHRvIGJlIGFkZGVkIHRvIElvbmljOlxyXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljL3B1bGwvMTY1NzRcclxuICBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcblxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxufSIsIi5tZCBpb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm1kIGlvbi1jaGVja2JveCB7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1jaGVja21hcmstY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5tZCBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5pb3MgaW9uLWxpc3QtaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5pb3MgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/schedule-filter/schedule-filter.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/schedule-filter/schedule-filter.ts ***!
  \**********************************************************/
/*! exports provided: ScheduleFilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleFilterPage", function() { return ScheduleFilterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");




let ScheduleFilterPage = class ScheduleFilterPage {
    constructor(confData, config, modalCtrl, navParams) {
        this.confData = confData;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.tracks = [];
    }
    ionViewWillEnter() {
        this.ios = this.config.get('mode') === `ios`;
    }
    // TODO use the ionViewDidEnter event
    ngAfterViewInit() {
        // passed in array of track names that should be excluded (unchecked)
        const excludedTrackNames = this.navParams.get('excludedTracks');
        this.confData.getTracks().subscribe((tracks) => {
            tracks.forEach(track => {
                this.tracks.push({
                    name: track.name,
                    icon: track.icon,
                    isChecked: (excludedTrackNames.indexOf(track.name) === -1)
                });
            });
        });
    }
    selectAll(check) {
        // set all to checked or unchecked
        this.tracks.forEach(track => {
            track.isChecked = check;
        });
    }
    applyFilters() {
        // Pass back a new array of track names to exclude
        const excludedTrackNames = this.tracks.filter(c => !c.isChecked).map(c => c.name);
        this.dismiss(excludedTrackNames);
    }
    dismiss(data) {
        // using the injected ModalController this page
        // can "dismiss" itself and pass back data
        this.modalCtrl.dismiss(data);
    }
};
ScheduleFilterPage.ctorParameters = () => [
    { type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
ScheduleFilterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-schedule-filter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./schedule-filter.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-filter/schedule-filter.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./schedule-filter.scss */ "./src/app/pages/schedule-filter/schedule-filter.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
], ScheduleFilterPage);



/***/ }),

/***/ "./src/app/pages/schedule/schedule-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/schedule/schedule-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SchedulePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageRoutingModule", function() { return SchedulePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule */ "./src/app/pages/schedule/schedule.ts");




const routes = [
    {
        path: '',
        component: _schedule__WEBPACK_IMPORTED_MODULE_3__["SchedulePage"]
    }
];
let SchedulePageRoutingModule = class SchedulePageRoutingModule {
};
SchedulePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SchedulePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/schedule/schedule.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/schedule/schedule.module.ts ***!
  \***************************************************/
/*! exports provided: ScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleModule", function() { return ScheduleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedule */ "./src/app/pages/schedule/schedule.ts");
/* harmony import */ var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../schedule-filter/schedule-filter */ "./src/app/pages/schedule-filter/schedule-filter.ts");
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schedule-routing.module */ "./src/app/pages/schedule/schedule-routing.module.ts");








let ScheduleModule = class ScheduleModule {
};
ScheduleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _schedule_routing_module__WEBPACK_IMPORTED_MODULE_7__["SchedulePageRoutingModule"]
        ],
        declarations: [
            _schedule__WEBPACK_IMPORTED_MODULE_5__["SchedulePage"],
            _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__["ScheduleFilterPage"]
        ],
        entryComponents: [
            _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__["ScheduleFilterPage"]
        ]
    })
], ScheduleModule);



/***/ }),

/***/ "./src/app/pages/schedule/schedule.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/schedule/schedule.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item-sliding[track=ionic] ion-label {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 10px;\n}\n\nion-item-sliding[track=angular] ion-label {\n  border-left: 2px solid #ac282b;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=communication] ion-label {\n  border-left: 2px solid #8e8d93;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=tooling] ion-label {\n  border-left: 2px solid #fe4c52;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=services] ion-label {\n  border-left: 2px solid #fd8b2d;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=design] ion-label {\n  border-left: 2px solid #fed035;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=workshop] ion-label {\n  border-left: 2px solid #69bb7b;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=food] ion-label {\n  border-left: 2px solid #3bc7c4;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=documentation] ion-label {\n  border-left: 2px solid #b16be3;\n  padding-left: 10px;\n}\n\nion-item-sliding[track=navigation] ion-label {\n  border-left: 2px solid #6600cc;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUvRTpcXEp1c3RTY2hlZHVsZVxcSnVzdFNjaGVkdWxlL3NyY1xcYXBwXFxwYWdlc1xcc2NoZWR1bGVcXHNjaGVkdWxlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NjaGVkdWxlL3NjaGVkdWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0U7RUFDRSwrQ0FBQTtFQUNBLGtCQUFBO0FDYko7O0FEV0U7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDUko7O0FETUU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDSEo7O0FEQ0U7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FESkU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDT0o7O0FEVEU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDWUo7O0FEZEU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDaUJKOztBRG5CRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUNzQko7O0FEeEJFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQzJCSjs7QUQ3QkU7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0FDZ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2NoZWR1bGUvc2NoZWR1bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjYXRlZ29yaWVzOiAoXHJcbiAgaW9uaWM6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSxcclxuICBhbmd1bGFyOiAjYWMyODJiLFxyXG4gIGNvbW11bmljYXRpb246ICM4ZThkOTMsXHJcbiAgdG9vbGluZzogI2ZlNGM1MixcclxuICBzZXJ2aWNlczogI2ZkOGIyZCxcclxuICBkZXNpZ246ICNmZWQwMzUsXHJcbiAgd29ya3Nob3A6ICM2OWJiN2IsXHJcbiAgZm9vZDogIzNiYzdjNCxcclxuICBkb2N1bWVudGF0aW9uOiAjYjE2YmUzLFxyXG4gIG5hdmlnYXRpb246ICM2NjAwY2NcclxuKTtcclxuXHJcbkBlYWNoICR0cmFjaywgJHZhbHVlIGluIG1hcC1yZW1vdmUoJGNhdGVnb3JpZXMpIHtcclxuICBpb24taXRlbS1zbGlkaW5nW3RyYWNrPScjeyR0cmFja30nXSBpb24tbGFiZWwge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkdmFsdWU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiIsImlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9aW9uaWNdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9YW5ndWxhcl0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjYWMyODJiO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9Y29tbXVuaWNhdGlvbl0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjOGU4ZDkzO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9dG9vbGluZ10gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmU0YzUyO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9c2VydmljZXNdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZkOGIyZDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPWRlc2lnbl0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZmVkMDM1O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9d29ya3Nob3BdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzY5YmI3YjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPWZvb2RdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzNiYzdjNDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPWRvY3VtZW50YXRpb25dIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2IxNmJlMztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPW5hdmlnYXRpb25dIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzY2MDBjYztcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/schedule/schedule.ts":
/*!********************************************!*\
  !*** ./src/app/pages/schedule/schedule.ts ***!
  \********************************************/
/*! exports provided: SchedulePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePage", function() { return SchedulePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../schedule-filter/schedule-filter */ "./src/app/pages/schedule-filter/schedule-filter.ts");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages.service */ "./src/app/pages/pages.service.ts");








let SchedulePage = class SchedulePage {
    constructor(alertCtrl, confData, loadingCtrl, modalCtrl, router, toastCtrl, user, config, taskService) {
        this.alertCtrl = alertCtrl;
        this.confData = confData;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.user = user;
        this.config = config;
        this.taskService = taskService;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
    }
    ngOnInit() {
        this.updateSchedule();
        this.taskService.gettasks().subscribe(data => {
            this.tasks = data;
            this.id = this.tasks.length;
        });
        this.ios = this.config.get('mode') === 'ios';
    }
    updateSchedule() {
        if (this.scheduleList) {
            this.scheduleList.closeSlidingItems();
        }
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data) => {
            this.shownSessions = data.shownSessions;
            this.groups = data.groups;
        });
    }
    presentFilter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_4__["ScheduleFilterPage"],
                componentProps: { excludedTracks: this.excludeTracks }
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data) {
                this.excludeTracks = data;
                this.updateSchedule();
            }
        });
    }
    onFabClick() {
        this.router.navigate(['./', 'app', 'tabs', 'schedule', 'new']);
    }
    addFavorite(slidingItem, sessionData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.user.hasFavorite(sessionData.name)) {
                // woops, they already favorited it! What shall we do!?
                // prompt them to remove it
                this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
            }
            else {
                // remember this session as a user favorite
                this.user.addFavorite(sessionData.name);
                // create an alert instance
                const alert = yield this.alertCtrl.create({
                    header: 'Favorite Added',
                    buttons: [{
                            text: 'OK',
                            handler: () => {
                                // close the sliding item
                                slidingItem.close();
                            }
                        }]
                });
                // now present the alert on top of all other content
                yield alert.present();
            }
        });
    }
    removeFavorite(slidingItem, sessionData, title) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                message: 'Would you like to remove this session from your favorites?',
                buttons: [
                    {
                        text: 'Cancel',
                        handler: () => {
                            // they clicked the cancel button, do not remove the session
                            // close the sliding item and hide the option buttons
                            slidingItem.close();
                        }
                    },
                    {
                        text: 'Remove',
                        handler: () => {
                            // they want to remove this session from their favorites
                            this.user.removeFavorite(sessionData.name);
                            this.updateSchedule();
                            // close the sliding item and hide the option buttons
                            slidingItem.close();
                        }
                    }
                ]
            });
            // now present the alert on top of all other content
            yield alert.present();
        });
    }
};
SchedulePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__["ConferenceData"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"] },
    { type: _pages_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scheduleList', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"])
], SchedulePage.prototype, "scheduleList", void 0);
SchedulePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-schedule',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./schedule.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule/schedule.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./schedule.scss */ "./src/app/pages/schedule/schedule.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__["ConferenceData"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"],
        _pages_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"]])
], SchedulePage);



/***/ }),

/***/ "./src/app/pages/session-detail/session-detail-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SessionDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDetailPageRoutingModule", function() { return SessionDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _session_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-detail */ "./src/app/pages/session-detail/session-detail.ts");




const routes = [
    {
        path: '',
        component: _session_detail__WEBPACK_IMPORTED_MODULE_3__["SessionDetailPage"]
    }
];
let SessionDetailPageRoutingModule = class SessionDetailPageRoutingModule {
};
SessionDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SessionDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/session-detail/session-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: SessionDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDetailModule", function() { return SessionDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _session_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session-detail */ "./src/app/pages/session-detail/session-detail.ts");
/* harmony import */ var _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session-detail-routing.module */ "./src/app/pages/session-detail/session-detail-routing.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let SessionDetailModule = class SessionDetailModule {
};
SessionDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["SessionDetailPageRoutingModule"]
        ],
        declarations: [
            _session_detail__WEBPACK_IMPORTED_MODULE_3__["SessionDetailPage"],
        ]
    })
], SessionDetailModule);



/***/ }),

/***/ "./src/app/pages/session-detail/session-detail.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".session-track-ionic {\n  color: var(--ion-color-primary);\n}\n\n.session-track-angular {\n  color: var(--ion-color-angular);\n}\n\n.session-track-communication {\n  color: var(--ion-color-communication);\n}\n\n.session-track-tooling {\n  color: var(--ion-color-tooling);\n}\n\n.session-track-services {\n  color: var(--ion-color-services);\n}\n\n.session-track-design {\n  color: var(--ion-color-design);\n}\n\n.session-track-workshop {\n  color: var(--ion-color-workshop);\n}\n\n.session-track-food {\n  color: var(--ion-color-food);\n}\n\n.session-track-documentation {\n  color: var(--ion-color-documentation);\n}\n\n.session-track-navigation {\n  color: var(--ion-color-navigation);\n}\n\n.show-favorite {\n  position: relative;\n}\n\n.icon-heart-empty,\n.icon-heart {\n  --border-radius: 50%;\n  --padding-start: 0;\n  --padding-end: 0;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  width: 48px;\n  height: 48px;\n  font-size: 16px;\n  transition: transform 300ms ease;\n}\n\n.icon-heart-empty {\n  transform: scale(1);\n}\n\n.icon-heart {\n  transform: scale(0);\n}\n\n.show-favorite .icon-heart {\n  transform: scale(1);\n}\n\n.show-favorite .icon-heart-empty {\n  transform: scale(0);\n}\n\nh1 {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1kZXRhaWwvRTpcXEp1c3RTY2hlZHVsZVxcSnVzdFNjaGVkdWxlL3NyY1xcYXBwXFxwYWdlc1xcc2Vzc2lvbi1kZXRhaWxcXHNlc3Npb24tZGV0YWlsLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Nlc3Npb24tZGV0YWlsL3Nlc3Npb24tZGV0YWlsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNFLHFDQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7QUNDRjs7QURFQTtFQUNFLHFDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQ0FBQTtBQ0NGOztBREtBO0VBQ0Usa0JBQUE7QUNGRjs7QURLQTs7RUFFRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUVBLFFBQUE7RUFDQSxVQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBRUEsZ0NBQUE7QUNQRjs7QURVQTtFQUNFLG1CQUFBO0FDUEY7O0FEVUE7RUFDRSxtQkFBQTtBQ1BGOztBRFVBO0VBQ0UsbUJBQUE7QUNQRjs7QURVQTtFQUNFLG1CQUFBO0FDUEY7O0FEVUE7RUFDRSxTQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXNzaW9uLWRldGFpbC9zZXNzaW9uLWRldGFpbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlc3Npb24tdHJhY2staW9uaWMge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5zZXNzaW9uLXRyYWNrLWFuZ3VsYXIge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYW5ndWxhcik7XHJcbn1cclxuXHJcbi5zZXNzaW9uLXRyYWNrLWNvbW11bmljYXRpb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29tbXVuaWNhdGlvbik7XHJcbn1cclxuXHJcbi5zZXNzaW9uLXRyYWNrLXRvb2xpbmcge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdG9vbGluZyk7XHJcbn1cclxuXHJcbi5zZXNzaW9uLXRyYWNrLXNlcnZpY2VzIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlcnZpY2VzKTtcclxufVxyXG5cclxuLnNlc3Npb24tdHJhY2stZGVzaWduIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRlc2lnbik7XHJcbn1cclxuXHJcbi5zZXNzaW9uLXRyYWNrLXdvcmtzaG9wIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdvcmtzaG9wKTtcclxufVxyXG5cclxuLnNlc3Npb24tdHJhY2stZm9vZCB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1mb29kKTtcclxufVxyXG5cclxuLnNlc3Npb24tdHJhY2stZG9jdW1lbnRhdGlvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kb2N1bWVudGF0aW9uKTtcclxufVxyXG5cclxuLnNlc3Npb24tdHJhY2stbmF2aWdhdGlvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1uYXZpZ2F0aW9uKTtcclxufVxyXG5cclxuLy8gRmF2b3JpdGUgSWNvblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLnNob3ctZmF2b3JpdGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmljb24taGVhcnQtZW1wdHksXHJcbi5pY29uLWhlYXJ0IHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1wYWRkaW5nLWVuZDogMDtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICB0b3A6IDVweDtcclxuICByaWdodDogNXB4O1xyXG5cclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcblxyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XHJcbn1cclxuXHJcbi5pY29uLWhlYXJ0LWVtcHR5IHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcblxyXG4uaWNvbi1oZWFydCB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxufVxyXG5cclxuLnNob3ctZmF2b3JpdGUgLmljb24taGVhcnQge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcbi5zaG93LWZhdm9yaXRlIC5pY29uLWhlYXJ0LWVtcHR5IHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59IiwiLnNlc3Npb24tdHJhY2staW9uaWMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1hbmd1bGFyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1hbmd1bGFyKTtcbn1cblxuLnNlc3Npb24tdHJhY2stY29tbXVuaWNhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29tbXVuaWNhdGlvbik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLXRvb2xpbmcge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRvb2xpbmcpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1zZXJ2aWNlcyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2VydmljZXMpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1kZXNpZ24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRlc2lnbik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLXdvcmtzaG9wIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13b3Jrc2hvcCk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWZvb2Qge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWZvb2QpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1kb2N1bWVudGF0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kb2N1bWVudGF0aW9uKTtcbn1cblxuLnNlc3Npb24tdHJhY2stbmF2aWdhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbmF2aWdhdGlvbik7XG59XG5cbi5zaG93LWZhdm9yaXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaWNvbi1oZWFydC1lbXB0eSxcbi5pY29uLWhlYXJ0IHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcbn1cblxuLmljb24taGVhcnQtZW1wdHkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uaWNvbi1oZWFydCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbi5zaG93LWZhdm9yaXRlIC5pY29uLWhlYXJ0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnNob3ctZmF2b3JpdGUgLmljb24taGVhcnQtZW1wdHkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/session-detail/session-detail.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.ts ***!
  \********************************************************/
/*! exports provided: SessionDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDetailPage", function() { return SessionDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages.service */ "./src/app/pages/pages.service.ts");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/user-data */ "./src/app/providers/user-data.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







let SessionDetailPage = class SessionDetailPage {
    constructor(dataProvider, userProvider, route, taskService, config) {
        this.dataProvider = dataProvider;
        this.userProvider = userProvider;
        this.route = route;
        this.taskService = taskService;
        this.config = config;
        this.isFavorite = false;
        this.defaultHref = '';
    }
    ngOnInit() {
        this.taskService.gettasks().subscribe(data => {
            this.tasks = data;
        });
        this.ios = this.config.get('mode') === 'ios';
    }
    ionViewWillEnter() {
        this.dataProvider.load().subscribe((data) => {
            if (data && data.schedule && data.schedule[0] && data.schedule[0].groups) {
                const sessionId = this.route.snapshot.paramMap.get('sessionId');
                for (const group of data.schedule[0].groups) {
                    if (group && group.sessions) {
                        for (const session of group.sessions) {
                            if (session && session.id === sessionId) {
                                this.session = session;
                                this.isFavorite = this.userProvider.hasFavorite(this.session.name);
                                break;
                            }
                        }
                    }
                }
            }
        });
    }
    ionViewDidEnter() {
        this.defaultHref = `/app/tabs/schedule`;
    }
    sessionClick(item) {
        console.log('Clicked', item);
    }
    toggleFavorite() {
        if (this.userProvider.hasFavorite(this.session.name)) {
            this.userProvider.removeFavorite(this.session.name);
            this.isFavorite = false;
        }
        else {
            this.userProvider.addFavorite(this.session.name);
            this.isFavorite = true;
        }
    }
    shareSession() {
        console.log('Clicked share session');
    }
    deleteSession() {
    }
};
SessionDetailPage.ctorParameters = () => [
    { type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _pages_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Config"] }
];
SessionDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-session-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./session-detail.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-detail/session-detail.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./session-detail.scss */ "./src/app/pages/session-detail/session-detail.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"],
        _providers_user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _pages_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Config"]])
], SessionDetailPage);



/***/ }),

/***/ "./src/app/pages/speaker-detail/speaker-detail-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SpeakerDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerDetailPageRoutingModule", function() { return SpeakerDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _speaker_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speaker-detail */ "./src/app/pages/speaker-detail/speaker-detail.ts");




const routes = [
    {
        path: '',
        component: _speaker_detail__WEBPACK_IMPORTED_MODULE_3__["SpeakerDetailPage"]
    }
];
let SpeakerDetailPageRoutingModule = class SpeakerDetailPageRoutingModule {
};
SpeakerDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SpeakerDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/speaker-detail/speaker-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: SpeakerDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerDetailModule", function() { return SpeakerDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _speaker_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speaker-detail */ "./src/app/pages/speaker-detail/speaker-detail.ts");
/* harmony import */ var _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./speaker-detail-routing.module */ "./src/app/pages/speaker-detail/speaker-detail-routing.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let SpeakerDetailModule = class SpeakerDetailModule {
};
SpeakerDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["SpeakerDetailPageRoutingModule"]
        ],
        declarations: [
            _speaker_detail__WEBPACK_IMPORTED_MODULE_3__["SpeakerDetailPage"],
        ]
    })
], SpeakerDetailModule);



/***/ }),

/***/ "./src/app/pages/speaker-detail/speaker-detail.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".speaker-detail img {\n  max-width: 140px;\n  border-radius: 50%;\n}\n\n.speaker-detail p {\n  color: #60646b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3BlYWtlci1kZXRhaWwvRTpcXEp1c3RTY2hlZHVsZVxcSnVzdFNjaGVkdWxlL3NyY1xcYXBwXFxwYWdlc1xcc3BlYWtlci1kZXRhaWxcXHNwZWFrZXItZGV0YWlsLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NwZWFrZXItZGV0YWlsL3NwZWFrZXItZGV0YWlsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zcGVha2VyLWRldGFpbC9zcGVha2VyLWRldGFpbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwZWFrZXItZGV0YWlsIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5zcGVha2VyLWRldGFpbCBwIHtcclxuICBjb2xvcjogIzYwNjQ2YjtcclxufVxyXG4iLCIuc3BlYWtlci1kZXRhaWwgaW1nIHtcbiAgbWF4LXdpZHRoOiAxNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc3BlYWtlci1kZXRhaWwgcCB7XG4gIGNvbG9yOiAjNjA2NDZiO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/speaker-detail/speaker-detail.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail.ts ***!
  \********************************************************/
/*! exports provided: SpeakerDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerDetailPage", function() { return SpeakerDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");




let SpeakerDetailPage = class SpeakerDetailPage {
    constructor(dataProvider, router, route) {
        this.dataProvider = dataProvider;
        this.router = router;
        this.route = route;
    }
    ionViewWillEnter() {
        this.dataProvider.load().subscribe((data) => {
            const speakerId = this.route.snapshot.paramMap.get('speakerId');
            if (data && data.speakers) {
                for (const speaker of data.speakers) {
                    if (speaker && speaker.id === speakerId) {
                        this.speaker = speaker;
                        break;
                    }
                }
            }
        });
    }
};
SpeakerDetailPage.ctorParameters = () => [
    { type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SpeakerDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-speaker-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./speaker-detail.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-detail/speaker-detail.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./speaker-detail.scss */ "./src/app/pages/speaker-detail/speaker-detail.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], SpeakerDetailPage);



/***/ }),

/***/ "./src/app/pages/speaker-list/speaker-list-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SpeakerListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerListPageRoutingModule", function() { return SpeakerListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _speaker_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speaker-list */ "./src/app/pages/speaker-list/speaker-list.ts");




const routes = [
    {
        path: '',
        component: _speaker_list__WEBPACK_IMPORTED_MODULE_3__["SpeakerListPage"]
    }
];
let SpeakerListPageRoutingModule = class SpeakerListPageRoutingModule {
};
SpeakerListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SpeakerListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/speaker-list/speaker-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list.module.ts ***!
  \***********************************************************/
/*! exports provided: SpeakerListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerListModule", function() { return SpeakerListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _speaker_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./speaker-list */ "./src/app/pages/speaker-list/speaker-list.ts");
/* harmony import */ var _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./speaker-list-routing.module */ "./src/app/pages/speaker-list/speaker-list-routing.module.ts");






let SpeakerListModule = class SpeakerListModule {
};
SpeakerListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpeakerListPageRoutingModule"]
        ],
        declarations: [_speaker_list__WEBPACK_IMPORTED_MODULE_4__["SpeakerListPage"]],
    })
], SpeakerListModule);



/***/ }),

/***/ "./src/app/pages/speaker-list/speaker-list.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scroll {\n  background: #ededed;\n}\n\n.speaker-card {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.speaker-card ion-card-header {\n  padding: 0;\n}\n\n.speaker-card ion-card-header .item {\n  padding: 4px 16px;\n}\n\n.speaker-card ion-card-content {\n  flex: 1 1 auto;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3BlYWtlci1saXN0L0U6XFxKdXN0U2NoZWR1bGVcXEp1c3RTY2hlZHVsZS9zcmNcXGFwcFxccGFnZXNcXHNwZWFrZXItbGlzdFxcc3BlYWtlci1saXN0LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NwZWFrZXItbGlzdC9zcGVha2VyLWxpc3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUVBLFVBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwZWFrZXItbGlzdC9zcGVha2VyLWxpc3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwge1xyXG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XHJcbn1cclxuXHJcbi5zcGVha2VyLWNhcmQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zcGVha2VyLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc3BlYWtlci1jYXJkIGlvbi1jYXJkLWhlYWRlciAuaXRlbSB7XHJcbiAgcGFkZGluZzogNHB4IDE2cHg7XHJcbn1cclxuXHJcbi5zcGVha2VyLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcblxyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuIiwiLnNjcm9sbCB7XG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG59XG5cbi5zcGVha2VyLWNhcmQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zcGVha2VyLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNwZWFrZXItY2FyZCBpb24tY2FyZC1oZWFkZXIgLml0ZW0ge1xuICBwYWRkaW5nOiA0cHggMTZweDtcbn1cblxuLnNwZWFrZXItY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgZmxleDogMSAxIGF1dG87XG4gIHBhZGRpbmc6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/speaker-list/speaker-list.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list.ts ***!
  \****************************************************/
/*! exports provided: SpeakerListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerListPage", function() { return SpeakerListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/conference-data */ "./src/app/providers/conference-data.ts");






let SpeakerListPage = class SpeakerListPage {
    constructor(actionSheetCtrl, confData, inAppBrowser, router) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.confData = confData;
        this.inAppBrowser = inAppBrowser;
        this.router = router;
        this.speakers = [];
    }
    goToSpeakerTwitter(speaker) {
        this.inAppBrowser.create(`https://twitter.com/${speaker.twitter}`, '_blank');
    }
    openSpeakerShare(speaker) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Share ' + speaker.name,
                buttons: [
                    {
                        text: 'Copy Link',
                        handler: () => {
                            console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
                            if (window['cordova'] &&
                                window['cordova'].plugins.clipboard) {
                                window['cordova'].plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
                            }
                        }
                    },
                    {
                        text: 'Share via ...'
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    openContact(speaker) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const mode = 'ios'; // this.config.get('mode');
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Contact ' + speaker.name,
                buttons: [
                    {
                        text: `Email ( ${speaker.email} )`,
                        icon: mode !== 'ios' ? 'mail' : null,
                        handler: () => {
                            window.open('mailto:' + speaker.email);
                        }
                    },
                    {
                        text: `Call ( ${speaker.phone} )`,
                        icon: mode !== 'ios' ? 'call' : null,
                        handler: () => {
                            window.open('tel:' + speaker.phone);
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
};
SpeakerListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__["ConferenceData"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SpeakerListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-speaker-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./speaker-list.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-list/speaker-list.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./speaker-list.scss */ "./src/app/pages/speaker-list/speaker-list.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__["ConferenceData"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SpeakerListPage);



/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-page */ "./src/app/pages/tabs-page/tabs-page.ts");
/* harmony import */ var _schedule_schedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../schedule/schedule */ "./src/app/pages/schedule/schedule.ts");





const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'schedule',
                children: [
                    {
                        path: '',
                        component: _schedule_schedule__WEBPACK_IMPORTED_MODULE_4__["SchedulePage"],
                    },
                    {
                        path: 'session/:sessionId',
                        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../session-detail/session-detail.module */ "./src/app/pages/session-detail/session-detail.module.ts")).then(m => m.SessionDetailModule)
                    },
                    {
                        path: 'new',
                        loadChildren: () => __webpack_require__.e(/*! import() | new-new-module */ "new-new-module").then(__webpack_require__.bind(null, /*! ../new/new.module */ "./src/app/pages/new/new.module.ts")).then(m => m.NewPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/app/tabs/schedule',
                pathMatch: 'full'
            },
            {
                path: 'about',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../about/about.module */ "./src/app/pages/about/about.module.ts")).then(m => m.AboutModule)
            }
        ]
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.module.ts ***!
  \*****************************************************/
/*! exports provided: TabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs-page */ "./src/app/pages/tabs-page/tabs-page.ts");
/* harmony import */ var _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-page-routing.module */ "./src/app/pages/tabs-page/tabs-page-routing.module.ts");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../about/about.module */ "./src/app/pages/about/about.module.ts");
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../map/map.module */ "./src/app/pages/map/map.module.ts");
/* harmony import */ var _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../schedule/schedule.module */ "./src/app/pages/schedule/schedule.module.ts");
/* harmony import */ var _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../session-detail/session-detail.module */ "./src/app/pages/session-detail/session-detail.module.ts");
/* harmony import */ var _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../speaker-detail/speaker-detail.module */ "./src/app/pages/speaker-detail/speaker-detail.module.ts");
/* harmony import */ var _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../speaker-list/speaker-list.module */ "./src/app/pages/speaker-list/speaker-list.module.ts");












let TabsModule = class TabsModule {
};
TabsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _about_about_module__WEBPACK_IMPORTED_MODULE_6__["AboutModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _map_map_module__WEBPACK_IMPORTED_MODULE_7__["MapModule"],
            _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_8__["ScheduleModule"],
            _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_9__["SessionDetailModule"],
            _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_10__["SpeakerDetailModule"],
            _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_11__["SpeakerListModule"],
            _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [
            _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"],
        ]
    })
], TabsModule);



/***/ }),

/***/ "./src/app/pages/tabs-page/tabs-page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.ts ***!
  \**********************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsPage = class TabsPage {
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs-page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html")).default
    })
], TabsPage);



/***/ }),

/***/ "./src/app/providers/conference-data.ts":
/*!**********************************************!*\
  !*** ./src/app/providers/conference-data.ts ***!
  \**********************************************/
/*! exports provided: ConferenceData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConferenceData", function() { return ConferenceData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-data */ "./src/app/providers/user-data.ts");






let ConferenceData = class ConferenceData {
    constructor(http, user) {
        this.http = http;
        this.user = user;
    }
    load() {
        if (this.data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.data);
        }
        else {
            return this.http
                .get('assets/data/data.json')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.processData, this));
        }
    }
    processData(data) {
        this.data = data;
        return this.data;
    }
    getTimeline(dayIndex, queryText = '', excludeTracks = [], segment = 'all') {
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            const day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            const queryWords = queryText.split(' ').filter(w => !!w.trim().length);
            day.groups.forEach((group) => {
                group.hide = true;
                group.sessions.forEach((session) => {
                    // check if this session should show or not
                    this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day.shownSessions++;
                    }
                });
            });
            return day;
        }));
    }
    filterSession(session, queryWords, excludeTracks, segment) {
        let matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach((queryWord) => {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        let matchesTracks = false;
        session.tracks.forEach((trackName) => {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        // if the segment is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        let matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    }
    getTracks() {
        return this.load().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            return data.tracks.sort();
        }));
    }
};
ConferenceData.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"] }
];
ConferenceData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_data__WEBPACK_IMPORTED_MODULE_5__["UserData"]])
], ConferenceData);



/***/ })

}]);
//# sourceMappingURL=pages-tabs-page-tabs-page-module-es2015.js.map