(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["spa-host-spa-host-module"],{

/***/ "./src/app/spa-host/spa-host.component.ts":
/*!************************************************!*\
  !*** ./src/app/spa-host/spa-host.component.ts ***!
  \************************************************/
/*! exports provided: SpaHostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaHostComponent", function() { return SpaHostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_single_spa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/single-spa.service */ "./src/services/single-spa.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = ["appContainer"];
class SpaHostComponent {
    constructor(singleSpaService, route) {
        this.singleSpaService = singleSpaService;
        this.route = route;
    }
    ngOnInit() {
        this.appName = this.route.snapshot.data.app;
        this.mount().subscribe();
    }
    mount() {
        return this.singleSpaService.mount(this.appName, this.appContainerRef.nativeElement);
    }
    unmount() {
        return this.singleSpaService.unmount(this.appName);
    }
}
SpaHostComponent.ɵfac = function SpaHostComponent_Factory(t) { return new (t || SpaHostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_single_spa_service__WEBPACK_IMPORTED_MODULE_1__["SingleSpaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SpaHostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpaHostComponent, selectors: [["app-spa-host"]], viewQuery: function SpaHostComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.appContainerRef = _t.first);
    } }, decls: 2, vars: 0, consts: [["appContainer", ""]], template: function SpaHostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", null, 0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpaHostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spa-host',
                template: '<div #appContainer></div>',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _services_single_spa_service__WEBPACK_IMPORTED_MODULE_1__["SingleSpaService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { appContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['appContainer', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/spa-host/spa-host.module.ts":
/*!*********************************************!*\
  !*** ./src/app/spa-host/spa-host.module.ts ***!
  \*********************************************/
/*! exports provided: SpaHostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaHostModule", function() { return SpaHostModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _spa_unmount_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spa-unmount.guard */ "./src/app/spa-host/spa-unmount.guard.ts");
/* harmony import */ var _spa_host_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spa-host.component */ "./src/app/spa-host/spa-host.component.ts");







const routes = [
    {
        path: '',
        canDeactivate: [_spa_unmount_guard__WEBPACK_IMPORTED_MODULE_3__["SpaUnmountGuard"]],
        component: _spa_host_component__WEBPACK_IMPORTED_MODULE_4__["SpaHostComponent"],
    },
];
class SpaHostModule {
}
SpaHostModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SpaHostModule });
SpaHostModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function SpaHostModule_Factory(t) { return new (t || SpaHostModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SpaHostModule, { declarations: [_spa_host_component__WEBPACK_IMPORTED_MODULE_4__["SpaHostComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SpaHostModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_spa_host_component__WEBPACK_IMPORTED_MODULE_4__["SpaHostComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/spa-host/spa-unmount.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/spa-host/spa-unmount.guard.ts ***!
  \***********************************************/
/*! exports provided: SpaUnmountGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaUnmountGuard", function() { return SpaUnmountGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



class SpaUnmountGuard {
    canDeactivate(component, currentRoute, currentState, nextState) {
        const currentApp = component.appName;
        const nextApp = this.extractAppDataFromRouteTree(nextState.root);
        if (currentApp === nextApp) {
            return true;
        }
        return component.unmount().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(_ => true));
    }
    extractAppDataFromRouteTree(routeFragment) {
        if (routeFragment.data && routeFragment.data.app) {
            return routeFragment.data.app;
        }
        if (!routeFragment.children.length) {
            return null;
        }
        return routeFragment.children.map(r => this.extractAppDataFromRouteTree(r)).find(r => r !== null);
    }
}
SpaUnmountGuard.ɵfac = function SpaUnmountGuard_Factory(t) { return new (t || SpaUnmountGuard)(); };
SpaUnmountGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpaUnmountGuard, factory: SpaUnmountGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpaUnmountGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "./src/services/single-spa.service.ts":
/*!********************************************!*\
  !*** ./src/services/single-spa.service.ts ***!
  \********************************************/
/*! exports provided: SingleSpaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleSpaService", function() { return SingleSpaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! single-spa */ "./node_modules/single-spa/lib/esm/single-spa.min.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





class SingleSpaService {
    constructor() {
        this.loadedParcels = {};
    }
    mount(appName, domElement) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(System.import(appName)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((app) => {
            this.loadedParcels[appName] = Object(single_spa__WEBPACK_IMPORTED_MODULE_1__["mountRootParcel"])(app, {
                domElement
            });
        }));
    }
    unmount(appName) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.loadedParcels[appName].unmount()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => delete this.loadedParcels[appName]));
    }
}
SingleSpaService.ɵfac = function SingleSpaService_Factory(t) { return new (t || SingleSpaService)(); };
SingleSpaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SingleSpaService, factory: SingleSpaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleSpaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=spa-host-spa-host-module-es2015.js.map