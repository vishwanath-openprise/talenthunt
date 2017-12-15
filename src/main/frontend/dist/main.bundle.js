webpackJsonp([1,4],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminDashboardComponent = (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    return AdminDashboardComponent;
}());
AdminDashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
        template: __webpack_require__(372),
        styles: [__webpack_require__(365)]
    }),
    __metadata("design:paramtypes", [])
], AdminDashboardComponent);

//# sourceMappingURL=admin_dashboard.component.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminLoginComponent = (function () {
    function AdminLoginComponent() {
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
    };
    return AdminLoginComponent;
}());
AdminLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
        template: __webpack_require__(373),
        styles: [__webpack_require__(366)]
    }),
    __metadata("design:paramtypes", [])
], AdminLoginComponent);

//# sourceMappingURL=admin_login.component.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(http) {
        this.http = http;
        this.availableTests = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getHeroes()
            .then(function (heroes) { return _this.availableTests = heroes; });
    };
    DashboardComponent.prototype.getStatusClass = function (status) {
        switch (status) {
            case 'PLANNED':
                return 'planned-status';
            case 'REGISTRATION':
                return 'active-status';
            case 'COMPLETED':
                return 'completed-status';
            case 'INACTIVE':
                return 'disbale-status';
            case 'IN_PROGRESS':
                return 'progress-status';
        }
    };
    DashboardComponent.prototype.getHeroes = function () {
        return this.http.get("test/all")
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(375),
        styles: [__webpack_require__(368)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InstructionsComponent = (function () {
    function InstructionsComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    InstructionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['id']; //contains the test id.
        });
    };
    return InstructionsComponent;
}());
InstructionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
        selector: 'app-instructions',
        template: __webpack_require__(376),
        styles: [__webpack_require__(369)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], InstructionsComponent);

var _a;
//# sourceMappingURL=instructions.component.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('/talenthunt/login_old', 'username=' + this.userName + '&password=' + this.password, { headers: headers })
            .subscribe(function (result) {
            console.log("result", result);
        }, function (error) {
            if (error.status == 404) {
                _this.router.navigate(['dashboard']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(377),
        styles: [__webpack_require__(157)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__(378),
        styles: [__webpack_require__(370)]
    }),
    __metadata("design:paramtypes", [])
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterationComponent = (function () {
    function RegisterationComponent() {
    }
    RegisterationComponent.prototype.ngOnInit = function () {
    };
    return RegisterationComponent;
}());
RegisterationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
        selector: 'app-registeration',
        template: __webpack_require__(379),
        styles: [__webpack_require__(157)]
    }),
    __metadata("design:paramtypes", [])
], RegisterationComponent);

//# sourceMappingURL=registeration.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(134);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TestComponent = (function () {
    function TestComponent(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
    }
    TestComponent.prototype.ngOnInit = function () {
        // need to import (import 'rxjs/add/operator/toPromise';)
        // this.getQuestion()
        //   .then(questions => this.questions = questions);
        var _this = this;
        //   this._testEndsAt = 1;
        //   var seconds = 60;
        //   var minutes = this._testEndsAt;
        //   const timer = Observable.interval(1000).map((x) => {
        //   }).subscribe((x) => {
        //       seconds = this.checkSecond(seconds - 1);
        //       if(seconds == 59) {minutes = minutes-1};
        //       if(minutes == 0 && seconds == 0) {
        //         timer.unsubscribe();
        //         this.openSnackBar();
        //       };
        //       this._countDown = minutes + " Min : " + seconds + " Sec";
        //   });   
        this.getQuestion().subscribe(function (data) {
            _this.questions = data;
            // to display count down timer
            _this._testEndsAt = 1;
            var seconds = 60;
            var minutes = _this._testEndsAt;
            var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(1000).map(function (x) {
            }).subscribe(function (x) {
                seconds = _this.checkSecond(seconds - 1);
                if (seconds == 59) {
                    minutes = minutes - 1;
                }
                ;
                if (minutes == 0 && seconds == 0) {
                    timer.unsubscribe();
                    _this.openSnackBar();
                }
                ;
                _this._countDown = minutes + " Min : " + seconds + " Sec";
            });
            // console.log(this.questions);
        });
    };
    TestComponent.prototype.openSnackBar = function () {
        this.snackBar.open("Your time is up", "Close", {
            duration: 5000,
        });
    };
    TestComponent.prototype.checkSecond = function (sec) {
        if (sec < 10 && sec >= 0) {
            sec = "0" + sec;
        }
        ; // add zero in front of numbers < 10
        if (sec < 0) {
            sec = "59";
        }
        ;
        return sec;
    };
    // getQuestion(): Promise<Questions[]> {
    //   return this.http.get('./assets/questions.json')
    //          .toPromise()
    //          .then(response => response.json()) ;
    // }
    TestComponent.prototype.getQuestion = function () {
        return this.http.get('./assets/questions.json')
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__(380),
        styles: [__webpack_require__(371)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatSnackBar */]) === "function" && _b || Object])
], TestComponent);

var _a, _b;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, "/*\nlogin and registration styles\n*/\n\n.middle-box{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100%;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.middle-box>div{\n    max-width: 440px;\n}\n\n\n[type='password']{\n    height: auto;\n    box-shadow: initial;\n    margin: 0;\n}\n[type='password']:focus{\n    background: 0 0;\n    box-shadow: initial;\n    border: 0;\n}\n.mat-input-container{\n    width: 100%;\n}\n.mat-card{\n    background-color: rgba(255,255,255,0.65);\n}\n/*.logo{\n    background: url('../../assets/images/Openprise_Logo.png') no-repeat;\n    background-size: 100%;\n    height: 60px;\n}*/\n.op-logo{\n    margin-bottom: 15px;\n}\n.mat-raised-button.mat-primary{\n    font-size: 1em;\n    padding: 3px;\n    font-weight: bold;\n}\n.small-icons{\n    position: absolute;\n    top: 0;\n    right: 0;\n    font-size: 26px;\n    color: #3f51b5;\n}\n\n.mat-icon-button{\n    width: auto;\n    font-size: 17px;\n    color: #3f51b5;\n    height: 35px;\n    margin-top: 10px;\n}\n\na{\n    font-size: 1.3em;\n}\n\n.card-title{\n    color: #686868;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 273;


/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(309);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(374),
        styles: [__webpack_require__(367)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__registeration_registeration_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__instructions_instructions_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_main_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__test_test_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__admin_login_admin_login_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_admin_dashboard_admin_dashboard_component__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Modules required for material design












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__registeration_registeration_component__["a" /* RegisterationComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__instructions_instructions_component__["a" /* InstructionsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_13__test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_14__admin_login_admin_login_component__["a" /* AdminLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__admin_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatSnackBarModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registeration_registeration_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__instructions_instructions_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__test_test_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_login_admin_login_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_admin_dashboard_admin_dashboard_component__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__registeration_registeration_component__["a" /* RegisterationComponent */] },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_6__main_main_component__["a" /* MainComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'instructions/:id', component: __WEBPACK_IMPORTED_MODULE_5__instructions_instructions_component__["a" /* InstructionsComponent */] },
            { path: 'test/:id', component: __WEBPACK_IMPORTED_MODULE_7__test_test_component__["a" /* TestComponent */] }
        ]
    },
    { path: 'administrators', component: __WEBPACK_IMPORTED_MODULE_8__admin_login_admin_login_component__["a" /* AdminLoginComponent */] },
    {
        path: 'admindashboard',
        component: __WEBPACK_IMPORTED_MODULE_6__main_main_component__["a" /* MainComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_9__admin_admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */] }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, ".admin-login-img {\n    background: url(" + __webpack_require__(649) + ") no-repeat center center fixed;\n    background-size: cover;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n  }\n\n  [type='password']{\n    height: auto;\n    box-shadow: initial;\n    margin: 0;\n}\n[type='password']:focus{\n    background: 0 0;\n    box-shadow: initial;\n    border: 0;\n}\n.mat-input-container{\n    width: 100%;\n}\n.small-icons{\n    position: absolute;\n    top: 0;\n    right: 0;\n    font-size: 26px;\n    color: #ffffff;\n}\n.admin-form{\n    padding: 20px 0;\n    border-top: 3px solid #ffffff;\n    border-bottom: 3px solid #ffffff;\n}\nhr{\n    margin: 5px 0;\n}\n.mat-input-element{\n    color: #ffffff;\n    font-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, ".mat-card{\n    padding: 0px !important;\n}\n\n.card-title{\n    font-family: 'Raleway', sans-serif;\n    font-weight: 400;\n    color: #fff;\n}\n\n.mat-card-content{\n    font-family: 'Roboto Condensed', sans-serif;\n    color: #fff;\n}\n\nh2{\n  font-family: 'Raleway', sans-serif !important;\n  font-weight: 400;\n}\n\n.zoom-in:hover {\n    -webkit-animation-duration: 300ms;\n    animation-duration: 300ms;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    animation-name: fadeInUp;\n    -webkit-animation-name: fadeInUp;\n    position: relative;\n    z-index: 1;\n}\n\n@-webkit-keyframes fadeInUp {\n    0% {\n         -webkit-transform: translateY(0);\n        transform: translateY(0);       \n\n    }\n\n    100% {\n        -webkit-transform: translateY(-10px);\n        transform: translateY(-10px);\n        box-shadow: 5px 20px 20px 4px #F2F2F2;\n    }\n}\n\n@keyframes fadeInUp {\n    0% {\n        -webkit-transform: translateY(0);\n        transform: translateY(0);\n    }\n\n    100% {\n        -webkit-transform: translateY(-10px);\n        transform: translateY(-10px);\n        box-shadow: 5px 20px 20px 4px #F2F2F2;\n    }\n}\n\n.top-bar-right ul li a{\n    color: #393939;\n    letter-spacing: 2px;\n    font-weight: 800;\n    font-size: 12px;\n}\n\n.active-status{\n    background-color: #20a8d8;\n}\n\n.disbale-status{\n    background-color: #f86c6b;\n}\n\n.completed-status{\n    background-color: #52BE80;\n}\n\n.planned-status{\n    background-color: #B2BABB;\n}\n\n.progress-status{\n    background-color: #f8cb00;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, ".top-bar, .top-bar ul{\n    background-color: #fff;\n}\n.top-bar{\n    border-bottom: 4px solid #e7e7e7;\n}\n.row-content{\n    margin-top: 100px;\n}\n\n.menu a{\n    padding: 0;\n}\n\n.menu .menu-text{\n    padding: 0.9rem 1rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, "\n.mat-card::after{\n    clear:both;\n    content:\" \";\n    display:block;\n}\n.radio-group {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.radio-button {\n  margin: 5px;\n}\n\n.selected-value {\n  margin: 15px 0;\n}\n\n.dyn-timer{\n  background: #3f51b5;\n  color: white;\n  padding: 10px;\n  opacity: 0.8;\n  position: relative;\n  bottom: 40px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n    <mat-tab label=\"Existing tests\">\n        <div style=\"padding: 20px;\">\n          <mat-form-field>\n              <mat-select placeholder=\"Select\">\n                <mat-option value=\"option\">Test1</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n    </mat-tab>\n    <mat-tab label=\"Add test\">Content 1</mat-tab>\n    <mat-tab label=\"Results\">Content 2</mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ 373:
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-login-img\">\n    <div style=\"display: flex; align-items: center;height: 100%;justify-content: left; margin: 0 30px;\" class=\"animated fadeInLeft\">\n        <div class=\"medium-7 small-12 large-3\" style=\"min-width: 300px; max-width: 450px;\">\n           <!-- <div class=\"logo\"></div> -->\n            <h4 style=\"text-align: right; color: #ffff; font-weight: bold;\">ADMIN LOGIN</h4>\n            <hr/>\n            <form class=\"admin-form\">\n                <mat-input-container>\n                    <input matInput placeholder=\"Email\" autofocus>\n                    <i class=\"material-icons small-icons\">person</i>\n                </mat-input-container>\n                <mat-input-container>\n                    <input matInput placeholder=\"Password\" type=\"Password\">\n                    <i class=\"material-icons small-icons\">lock</i>\n                </mat-input-container>\n                <button mat-raised-button routerLink=\"/admindashboard\" style=\"font-weight: bold;\">Login\n                </button>\n            </form>\n            <hr/>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 374:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 375:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <h2>Available tests</h2>\n</div>\n<div class=\"separator-div\"></div>\n<div class=\"large-12 small-12 medium-12 animated fadeInLeft\" style=\"margin-top: 15px;\">\n  <div *ngFor=\"let test of availableTests\" class=\"medium-5 small-12 large-3 float-left zoom-in\" style=\"min-width: 350px; margin: 15px;\">  \n        <mat-card [ngClass]=\"getStatusClass(test.status)\">\n          <div style=\"padding: 0.75rem 1.25rem;\" class=\"clear-both\">\n            <div class=\"card-title large-12 small-12 medium-12 clear-both\">\n                <div class=\"small-6 medium-6 large-6 float-left\">\n                  <h4>{{test.test.name}}</h4>\n                </div>\n                <div class=\"small-6 medium-6 large-6 float-left\" style=\"padding: 5px;\">\n                    <strong class=\"float-right\">\n                        {{test.status}}\n                    </strong>\n                </div>\n            </div>\n            <mat-card-content>\n              <p>{{test.test.description}}</p>\n              <p>No of questions: {{test.noOfQuestions}}</p>\n            </mat-card-content>\n            <button class=\"float-right\" mat-raised-button [routerLink]=\"['instructions', test.id]\">START</button>\n          </div>\n      </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <h2>Instructions</h2>\n</div>\n<div class=\"separator-div\"></div>\n<div class=\"large-12 small-12 medium-12 animated fadeInLeft\" style=\"margin-top: 15px;\">\n    <mat-card class=\"light-border\">\n      <mat-card-content>\n        <p>This online test should be strictly used for Openprise Technologies Pvt Ltd.</p>\n        <p>To qualify you must correctly answer at least 25 questions out of 40.</p>\n        <p>No Internet usage allowed for this part of the test.  You must deposit your phones with us.</p>\n        <p>No negative marking and no penalty for guessing.</p>\n        <p>Do NOT copy from Others</p>\n        <p>Please answer based on your understanding, DO NOT discuss with others, DO NOT seek clarifications from anyone.</p>\n      </mat-card-content>\n    </mat-card>\n      <div class=\"flex-container align-center\" style=\"margin-top: 25px;\">\n          <button mat-raised-button color=\"primary\" [routerLink]=\"['/dashboard/test', userId]\">START TEST</button>\n      </div>\n</div>"

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-img\">\n    <div class=\"animated fadeInLeft middle-box\">\n        <div class=\"medium-12 small-12 large-12\">\n           <!-- <div class=\"logo\"></div> -->\n            <img src=\"./assets/images/Openprise_Logo.png\" class=\"op-logo\">\n            <mat-card>\n                <h2 class=\"text-center card-title\">Sign in</h2>\n                <form (ngSubmit) = \"onSubmit()\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Mobile\" name=\"userName\" [(ngModel)]=\"userName\" autofocus>\n                        <i class=\"material-icons small-icons\">person</i>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input matInput placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\" type=\"Password\">\n                        <i class=\"material-icons small-icons\">lock</i>\n                    </mat-form-field>\n                    <button mat-raised-button\n                        color=\"primary\" style=\"width: 100%\">Sign in\n                    </button>\n                    <div class=\"clear-both\">\n                        <button type=\"submit\" class=\"float-right color-blue\" mat-button>Create account</button>\n                    </div>\n                </form>\n            </mat-card>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

module.exports = "<div class=\"top-bar\">\n  <div class=\"row\">\n\t\t<div class=\"top-bar-left\">\n\t\t\t<ul class=\"menu\">\n\t\t\t\t<img src=\"./assets/images/openprise.png\" style=\"width: 250px;\">\n\t\t\t</ul>\n\t\t</div>\t  \n\t\t<div class=\"top-bar-right\">\n\t\t\t<ul class=\"menu\">\n\t\t\t\t<li class=\"menu-text\"><a href=\"logout\">Logout</a></li>\n\t\t\t</ul>\n\t\t</div>\n\n   </div> \n</div>\n<div class=\"row row-content\">\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 379:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-img\">\n    <div class=\"animated fadeInLeft middle-box\">\n        <div class=\"medium-12 small-12 large-12\">    \n            <img src=\"./assets/images/Openprise_Logo.png\" class=\"op-logo\">\n            <mat-card>\n                <h2 class=\"text-center card-title\">\n                    <a routerLink=\"/login\" title=\"Back to login\"><i class=\"material-icons\">arrow_back</i></a>\n                    Register\n                </h2>\n                <form>\n                    <mat-form-field>\n                        <input matInput placeholder=\"Full name\" autofocus>\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input matInput placeholder=\"Mobile\">\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input matInput placeholder=\"Email\">\n                    </mat-form-field>                                        \n                    <mat-form-field>\n                        <input matInput placeholder=\"Password\" type=\"Password\">\n                    </mat-form-field>\n                    <mat-form-field>\n                        <input matInput placeholder=\"Confirm password\" type=\"Password\">\n                    </mat-form-field>\n                    <button mat-raised-button routerLink=\"\"\n                        color=\"primary\" style=\"width: 100%\">Register\n                    </button>\n                </form>\n            </mat-card>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 380:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <h2>Test 1</h2> \n</div>\n<div class=\"separator-div\"></div>\n<div class=\"float-right dyn-timer\" *ngIf=\"_countDown\">\n  <h4 style=\"margin-bottom: 0px;\">{{_countDown}}</h4>\n</div>\n<div class=\"large-12 small-12 medium-12 animated fadeInLeft\" style=\"margin-top: 15px;\">\n    <mat-card class=\"light-border\">\n        <h4> Question: {{questions?.questionNumber}} </h4>\n        <mat-card-content>\n          <p>{{questions?.question}}</p>\n\n          <mat-radio-group class=\"radio-group\" [(ngModel)]=\"answer\">\n              <mat-radio-button class=\"radio-button\" *ngFor= \"let choice of questions?.choices\" [value]=\"choice\">\n                {{choice}}\n              </mat-radio-button>\n          </mat-radio-group>\n\n        </mat-card-content>\n        <div class=\"float-right\">\n          <button mat-raised-button color=\"primary\" [disabled]=\"_countDown == '0 Min : 00 Sec'\">Next</button>\n        </div>\n    </mat-card>\n</div>"

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "secure.b78c8e53c5bf8333d0a7.jpg";

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(274);


/***/ })

},[651]);
//# sourceMappingURL=main.bundle.js.map