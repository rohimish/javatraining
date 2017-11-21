webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css\" integrity=\"sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb\" crossorigin=\"anonymous\">\n<div style=\"text-align:center\" class=\"jumbotron p-3 mb-2 bg-inverse text-white\">\n  <h1>\n    Deloitte<span style=\"color: green\">.</span>\n  </h1>\n</div>\n<div class=\"row\">\n    <div class=\"offset-md-0 /*border border-primary*/ offset-lg-4 col-lg-4\"\n     style=\"text-align: center;margin-top: 180px\">\n        <button type=\"button\" class=\"btn btn btn-outline-success btn-lg\" data-toggle=\"modal\" data-target=\"#exampleModalLong\">\n            Login\n        </button>\n        <button type=\"button\" class=\"btn btn btn-outline-success btn-lg\" data-toggle=\"modal\" data-target=\"#registrationModal\">\n            Registration\n        </button>\n    </div>\n    <div class=\"modal fade\" id=\"exampleModalLong\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\n        <app-login></app-login>\n    </div>\n    <div class=\"modal fade\" id=\"registrationModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"registrationModalTitle\" aria-hidden=\"true\">\n        <app-registration></app-registration>\n    </div>\n</div>\n\n<router-outlet></router-outlet>\n<!--<app-login></app-login>-->\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(loginService) {
        this.title = 'Hello, Harry';
        this.firstname = 'jon';
        this.today = new Date();
        this.stocks = loginService.getLogin();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__date_formatter_pipe__ = __webpack_require__("../../../../../src/app/date-formatter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__date_formatter_pipe__["a" /* DateFormatterPipe */],
                __WEBPACK_IMPORTED_MODULE_10__registration_registration_component__["a" /* RegistrationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__login_service__["a" /* LoginService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");


var appRoutes = [{
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */]
    }];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/date-formatter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateFormatterPipe = (function () {
    function DateFormatterPipe() {
    }
    DateFormatterPipe.prototype.transform = function (value, args) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    DateFormatterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'dateFormatter'
        })
    ], DateFormatterPipe);
    return DateFormatterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.getLoginAPI = function (username, password) {
        return this.http.post("http://localhost:8080/FoundationMVC/login.htm", { name: username, password: password })
            .map(function (res) { return res.text(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server Error'); });
    };
    LoginService.prototype.getLogin = function () {
        return ['Apple', 'IBM'];
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Button trigger modal -->\n<!--<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModalLong\">\n  Launch demo modal\n</button>\n\n Modal -->\n<!--<div class=\"modal fade\" id=\"exampleModalLong\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">-->\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\" style=\"top:180px\">\n      <div class=\"modal-header row\" style=\"margin: 0px;\">\n        <h5 class=\"modal-title offset-sm-5\" id=\"exampleModalLongTitle\">Login</h5>\n        <button type=\"button\" class=\"close offset-sm-4\" data-dismiss=\"modal\" aria-label=\"Close\" style=\"margin: -15px 0px -15px auto;\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"collapse show\" id=\"collapseLogin\" action=\"login\" method=\"POST\" >\n            <div class=\"form-group row\">\n               <!-- <h4  class=\"col-lg-6 offset-lg-5\">Login</h4> -->\n            </div>\n            <div class=\"form-group row rounded-circle\">\n                <label for=\"username\" class=\"col-lg-3 offset-lg-1 col-form-label\">Username:</label>\n                <input type=\"text\" class=\"form-control col-lg-6\" name=\"username\" id=\"username\" [(ngModel)]=\"data.username\"/>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"pass\" class=\"col-lg-3 offset-lg-1 col-form-label\">Password:</label>\n                <input type=\"password\" class=\"form-control col-lg-6\" name=\"password\" id=\"pass\" [(ngModel)]=\"data.password\"/>\n            </div>\n            <input type=\"button\" (click)=\"login()\" class=\"btn-success form-control col-lg-3 offset-lg-4\" value=\"Login\"/>\n        </form>\n      </div>\n    </div>\n  </div>\n<!--</div>-->\n<!--<div class=\"row\">\n    <div class=\"col-lg-4\">\n        \n    </div>\n    <div class=\"col-lg-4\">\n        \n        <form action=\"register\" method=\"POST\">\n            <div class=\"form-group row\">\n                <h4  class=\"col-lg-6 offset-lg-2\">User Registration Form</h4>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"username\" class=\"col-lg-3 col-form-label\">Username:</label>\n                <input type=\"text\" class=\"form-control col-lg-6\" id=\"username\"/>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"fname\" class=\"col-lg-3 col-form-label\">First Name:</label>\n                <input type=\"text\" class=\"form-control col-lg-6\" id=\"fname\"/>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"lname\" class=\"col-lg-3 col-form-label\">Last Name:</label>\n                <input type=\"text\" class=\"form-control col-lg-6\" id=\"lname\"/>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"contact\" class=\"col-lg-3 col-form-label\">Contact Number:</label>\n                <input type=\"text\" class=\"form-control col-lg-6\" id=\"contact\"/>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"email\" class=\"col-lg-3 col-form-label\">Email address:</label>\n                <input type=\"email\" class=\"form-control col-lg-6\" id=\"email\"/>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"pass\" class=\"col-lg-3 col-form-label\">Password:</label>\n                <input type=\"password\" class=\"form-control col-lg-6\" id=\"pass\"/>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"repass\" class=\"col-lg-3 col-form-label\">Confirm Password:</label>\n                <input type=\"password\" class=\"form-control col-lg-6\" id=\"repass\"/>\n            </div>\n            <input type=\"button\" class=\"btn-primary form-control col-sm-2 col-sm-offset-2 col-lg-offset-2 \" value=\"Submit\"/>\n        </form>\n    </div>\n    <div class=\"col-lg-4\">\n        \n    </div>\n</div>\n<div> \n    \n</div>-->"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
        this.username = "Ruchi";
        this.data = { username: "", password: "" };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        alert(this.data.username + " " + this.data.password);
        this.loginService.getLoginAPI(this.data.username, this.data.password)
            .subscribe(function (result) { return console.log(result); }, function (error) { return console.log('Server Error'); });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\" style=\"top:140px\">\n      <div class=\"modal-header row\" style=\"margin: 0px;\">\n        <h5 class=\"modal-title offset-sm-3\" id=\"exampleModalLongTitle\">User Registration Form</h5>\n        <button type=\"button\" class=\"close offset-sm-4\" data-dismiss=\"modal\" aria-label=\"Close\" style=\"margin: -15px 0px -15px auto;\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"collapse show\" id=\"collapseRegistration\" action=\"register.htm\" method=\"POST\" >\n            <div class=\"form-group row\">\n                <label for=\"username\" class=\"col-lg-4 offset-lg-1 col-form-label\">Username:</label>\n                <input type=\"text\" class=\"form-control col-lg-6\" name=\"username\" id=\"username\"/>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"fname\" class=\"col-lg-4 offset-lg-1 col-form-label\">First Name:</label>\n                <input type=\"text\" class=\"form-control col-lg-6\" name=\"fname\" id=\"fname\"/>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"lname\" class=\"col-lg-4 offset-lg-1 col-form-label\">Last Name:</label>\n                <input type=\"text\" class=\"form-control col-lg-6\" name=\"lname\" id=\"lname\"/>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"contact\" class=\"col-lg-4 offset-lg-1 col-form-label\">Contact Number:</label>\n                <input type=\"text\" class=\"form-control col-lg-6\" name=\"contact\" id=\"contact\"/>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"email\" class=\"col-lg-4 offset-lg-1 col-form-label\">Email address:</label>\n                <input type=\"email\" class=\"form-control col-lg-6\" name=\"email\" id=\"email\"/>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"pass\" class=\"col-lg-4 offset-lg-1 col-form-label\">Password:</label>\n                <input type=\"password\" class=\"form-control col-lg-6\" name=\"pass\" id=\"pass\"/>\n            </div>\n            <div class=\"form-group row\">\n                <label for=\"repass\" class=\"col-lg-4 offset-lg-1 col-form-label\">Confirm Password:</label>\n                <input type=\"password\" class=\"form-control col-lg-6\" name=\"repass\" id=\"repass\"/>\n            </div>\n            <input type=\"Submit\" class=\"btn-success form-control col-lg-3 offset-lg-5\" value=\"Submit\"/>\n        </form>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistrationComponent = (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map