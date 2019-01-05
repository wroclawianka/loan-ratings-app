webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n    <app-header></app-header>\r\n    <div class=\"content container\">\r\n        <h1 class=\"title\">Marketplace</h1>\r\n        <app-calculations></app-calculations>\r\n        <app-mock-component></app-mock-component>\r\n    </div>\r\n    <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-container {\n  background: #f2f2f2;\n  position: relative;\n  padding-bottom: 80px; }\n\n.title {\n  font-size: 3.5em; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Loan Ratings';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/styles/styles.scss"), __webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_marketplace_marketplace_service__ = __webpack_require__("./src/app/services/marketplace/marketplace.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_header_header_component__ = __webpack_require__("./src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_mock_component_mock_component_component__ = __webpack_require__("./src/app/components/mock-component/mock-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_calculations_calculations_component__ = __webpack_require__("./src/app/components/calculations/calculations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_calculations_select_rating_select_rating_component__ = __webpack_require__("./src/app/components/calculations/select-rating/select-rating.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_calculations_show_results_show_results_component__ = __webpack_require__("./src/app/components/calculations/show-results/show-results.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_calculations_calculations_component__["a" /* CalculationsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_calculations_select_rating_select_rating_component__["a" /* SelectRatingComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_calculations_show_results_show_results_component__["a" /* ShowResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_mock_component_mock_component_component__["a" /* MockComponentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_marketplace_marketplace_service__["a" /* MarketplaceService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/calculations/calculations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calculations\">\r\n  <app-select-rating [ratings]=\"ratings\" (ratingEvent)=\"(productionMode)?getLoansMock($event):getLoansAmount($event)\"></app-select-rating>\r\n  <div class=\"results\">\r\n    <app-show-results *ngIf=\"results\" [results]=\"results\"></app-show-results>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/calculations/calculations.component.scss":
/***/ (function(module, exports) {

module.exports = ".calculations {\n  display: -ms-grid;\n  display: grid;\n  grid-gap: 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .calculations .results {\n    min-height: 50px; }\n"

/***/ }),

/***/ "./src/app/components/calculations/calculations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_marketplace_marketplace_service__ = __webpack_require__("./src/app/services/marketplace/marketplace.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_loans__ = __webpack_require__("./src/app/components/calculations/mock-loans.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalculationsComponent = /** @class */ (function () {
    function CalculationsComponent(marketplaceService) {
        this.marketplaceService = marketplaceService;
        this.ratings = [
            { value: "AAAAA", label: "A**" },
            { value: "AAAA", label: "A*" },
            { value: "AAA", label: "A++" },
            { value: "AA", label: "A+" },
            { value: "A", label: "A" },
            { value: "B", label: "B" },
            { value: "C", label: "C" },
            { value: "D", label: "D" }
        ];
        this.productionMode = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production;
    }
    CalculationsComponent.prototype.getLoans = function (rating, loansAmount) {
        var _this = this;
        this.marketplaceService
            .getLoans(rating.value, ["amount"], loansAmount)
            .subscribe(function (loans) {
            return _this.assignAverage(loans);
        });
    };
    CalculationsComponent.prototype.getLoansAmount = function (rating) {
        var _this = this;
        this.marketplaceService
            .getLoansAmount()
            .subscribe(function (response) {
            return _this.getLoans(rating, response.headers.get('X-Total'));
        });
    };
    CalculationsComponent.prototype.getLoansMock = function (rating) {
        var loans = __WEBPACK_IMPORTED_MODULE_2__mock_loans__["a" /* LOANS */].filter(function (loan) { return (loan.rating == rating.value); });
        this.assignAverage(loans);
    };
    CalculationsComponent.prototype.calculateAverage = function (loans) {
        var loansSum = 0;
        loans.forEach(function (loan) { return loansSum += loan.amount; });
        return loansSum / loans.length;
    };
    CalculationsComponent.prototype.assignAverage = function (loans) {
        this.results = {
            average: this.calculateAverage(loans)
        };
    };
    CalculationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-calculations',
            template: __webpack_require__("./src/app/components/calculations/calculations.component.html"),
            styles: [__webpack_require__("./src/app/components/calculations/calculations.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_marketplace_marketplace_service__["a" /* MarketplaceService */]])
    ], CalculationsComponent);
    return CalculationsComponent;
}());



/***/ }),

/***/ "./src/app/components/calculations/mock-loans.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOANS; });
var LOANS = [,
    { rating: "AAAAA", amount: 231115.00 },
    { rating: "AAAA", amount: 194796.00 },
    { rating: "AAA", amount: 173018.00 },
    { rating: "AA", amount: 144075.00 },
    { rating: "A", amount: 119929.00 },
    { rating: "B", amount: 104374.00 },
    { rating: "C", amount: 85246.00 },
    { rating: "D", amount: 60721.00 },
];


/***/ }),

/***/ "./src/app/components/calculations/results.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Results; });
var Results = /** @class */ (function () {
    function Results() {
    }
    return Results;
}());



/***/ }),

/***/ "./src/app/components/calculations/select-rating/select-rating.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"select-rating\">\r\n    <div class=\"rating-buttons btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n        <button \r\n        *ngFor=\"let rating of ratings\" \r\n        type=\"button\" \r\n        class=\"btn-rating btn btn-secondary btn-lg\"\r\n        (click)=selectRating(rating)>\r\n        {{ rating.label }}\r\n    </button>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/calculations/select-rating/select-rating.component.scss":
/***/ (function(module, exports) {

module.exports = ".select-rating {\n  text-align: center;\n  padding-top: 10px;\n  display: inline-block; }\n  .select-rating button:focus {\n    outline: 0;\n    color: #ffffff;\n    background-color: #666666; }\n"

/***/ }),

/***/ "./src/app/components/calculations/select-rating/select-rating.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectRatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectRatingComponent = /** @class */ (function () {
    function SelectRatingComponent() {
        this.ratingEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    SelectRatingComponent.prototype.ngOnInit = function () {
    };
    SelectRatingComponent.prototype.selectRating = function (rating) {
        this.ratingEvent.emit(rating);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], SelectRatingComponent.prototype, "ratings", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], SelectRatingComponent.prototype, "ratingEvent", void 0);
    SelectRatingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-select-rating',
            template: __webpack_require__("./src/app/components/calculations/select-rating/select-rating.component.html"),
            styles: [__webpack_require__("./src/app/components/calculations/select-rating/select-rating.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectRatingComponent);
    return SelectRatingComponent;
}());



/***/ }),

/***/ "./src/app/components/calculations/show-results/show-results.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"results\">\r\n    <p class=\"result__label\">Average loan:</p>\r\n    <p class=\"result__amount\">{{ results.average.toFixed(2) }} CZK</p>\r\n</div>"

/***/ }),

/***/ "./src/app/components/calculations/show-results/show-results.component.scss":
/***/ (function(module, exports) {

module.exports = ".results {\n  min-height: 50px;\n  font-size: 1.3em;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[2];\n      grid-template-columns: repeat(2, 1fr); }\n  .results .result__label {\n    text-align: left; }\n  .results .result__amount {\n    text-align: right;\n    font-weight: 745; }\n"

/***/ }),

/***/ "./src/app/components/calculations/show-results/show-results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__results_model__ = __webpack_require__("./src/app/components/calculations/results.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowResultsComponent = /** @class */ (function () {
    function ShowResultsComponent() {
    }
    ShowResultsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__results_model__["a" /* Results */])
    ], ShowResultsComponent.prototype, "results", void 0);
    ShowResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-show-results',
            template: __webpack_require__("./src/app/components/calculations/show-results/show-results.component.html"),
            styles: [__webpack_require__("./src/app/components/calculations/show-results/show-results.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShowResultsComponent);
    return ShowResultsComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"container\">\r\n      <span class=\"text-muted\">\r\n          All Rights Reserved | Design and code by <a href=\"https://wroclawianka.github.io/portfolio/\">Dorota Zelga</a>\r\n          | <a href=\"https://github.com/wroclawianka/loan-ratings-app\">Repository</a>\r\n      </span>\r\n    </div>\r\n  </footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  background: #ffffff;\n  border-top: #cccccc 1px solid; }\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a href=\"#\" class=\"navbar-brand\">\r\n                <i class=\"fas fa-ruler\"></i> Loan Rating App\r\n            </a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <ul class=\"nav navbar-nav\">\r\n                    <li><a href=\"https://wroclawianka.github.io/portfolio/\">About Me</a></li>\r\n                    <li><a href=\"https://github.com/wroclawianka/loan-ratings-app\">Repository</a></li>\r\n                </ul>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background: #ffffff;\n  border-bottom: #cccccc 1px solid; }\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/mock-component/mock-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"items\">\r\n    <div class=\"item\">\r\n        <img class=\"item__image\" src=\"https://source.unsplash.com/random/300x300?startup\">\r\n        <div class=\"item__details\">\r\n            <h2>Praesent vel augue euismod</h2>\r\n            <p class=\"item__desc content\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"item\">\r\n        <img class=\"item__image\" src=\"https://source.unsplash.com/random/300x300?healthcare\">\r\n        <div class=\"item__details\">\r\n            <h2>Nulla non lobortis lacus</h2>\r\n            <p class=\"item__desc content\">Vestibulum cursus sed ipsum venenatis auctor. Nulla dignissim dolor elit, ac suscipit arcu pretium ut. </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"item\">\r\n        <img class=\"item__image\" src=\"https://source.unsplash.com/random/300x300?home\">\r\n        <div class=\"item__details\">\r\n            <h2>Ipsum sed sint doloremque</h2>\r\n            <p class=\"item__desc content\">Nullam commodo at ipsum non pretium. In hac habitasse platea dictumst.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"item\">\r\n        <img class=\"item__image\" src=\"https://source.unsplash.com/random/300x300?education\">\r\n        <div class=\"item__details\">\r\n            <h2>Vivamus vulputate arcu mollis ultrices </h2>\r\n            <p class=\"item__desc content\">Suspendisse libero nunc, facilisis eget nunc ultrices, consectetur sagittis dui. Integer posuere tortor justo.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"item\">\r\n        <img class=\"item__image\" src=\"https://source.unsplash.com/random/300x300?renovation\">\r\n        <div class=\"item__details\">\r\n            <h2>Fusce facilisis arcu eu risus </h2>\r\n            <p class=\"item__desc content\">Nullam eget massa laoreet, viverra urna nec, congue purus. Donec sapien eros, pretium vel velit et, facilisis suscipit mauris. </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"item\">\r\n        <img class=\"item__image\" src=\"https://source.unsplash.com/random/300x300?investment\">\r\n        <div class=\"item__details\">\r\n            <h2>Nullam eget massa laoreet</h2>\r\n            <p class=\"item__desc content\">Morbi id ultricies lectus. Mauris metus nisl, lacinia sit amet porttitor id, gravida vel diam.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"item\">\r\n            <img class=\"item__image\" src=\"https://source.unsplash.com/random/300x300?oldbuildings\">\r\n            <div class=\"item__details\">\r\n                <h2>Suspendisse libero nunc</h2>\r\n                <p class=\"item__desc content\">Facilisis eget nunc ultrices, consectetur sagittis dui. Integer posuere tortor justo, vivamus vulputate arcu mollis ultrices</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"item\">\r\n            <img class=\"item__image\" src=\"https://source.unsplash.com/random/300x300?furnitures\">\r\n            <div class=\"item__details\">\r\n                <h2>Nullam eget massa laoreet</h2>\r\n                <p class=\"item__desc content\">Fusce facilisis arcu eu risus, viverra urna nec, congue purus. Donec sapien eros, pretium vel velit et, facilisis suscipit mauris. </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"item\">\r\n            <img class=\"item__image\" src=\"https://source.unsplash.com/random/300x300?oldcar\">\r\n            <div class=\"item__details\">\r\n                <h2>Morbi id ultricies lectus</h2>\r\n                <p class=\"item__desc content\">Mauris metus nisl, lacinia sit amet porttitor id, gravida vel diam.</p>\r\n            </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/mock-component/mock-component.component.scss":
/***/ (function(module, exports) {

module.exports = ".items {\n  display: -ms-grid;\n  display: grid;\n  grid-gap: 20px;\n  -ms-grid-columns: (350px)[auto-fit];\n      grid-template-columns: repeat(auto-fit, 350px);\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  .items .item {\n    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n    background: #ffffff;\n    padding: 30px;\n    display: -ms-grid;\n    display: grid;\n    grid-gap: 10px;\n    -ms-grid-row-align: center;\n        align-self: center;\n    height: 100%; }\n  .items .item .item__image {\n      width: 100%; }\n  .items .item .item__desc {\n      text-align: justify; }\n"

/***/ }),

/***/ "./src/app/components/mock-component/mock-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MockComponentComponent = /** @class */ (function () {
    function MockComponentComponent() {
    }
    MockComponentComponent.prototype.ngOnInit = function () {
    };
    MockComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-mock-component',
            template: __webpack_require__("./src/app/components/mock-component/mock-component.component.html"),
            styles: [__webpack_require__("./src/styles/styles.scss"), __webpack_require__("./src/app/components/mock-component/mock-component.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MockComponentComponent);
    return MockComponentComponent;
}());



/***/ }),

/***/ "./src/app/services/marketplace/marketplace.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketplaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MarketplaceService = /** @class */ (function () {
    function MarketplaceService(http) {
        this.http = http;
        this.apiRoot = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiEndpoint;
        this.loansUrl = this.apiRoot + "loans/";
        this.marketplaceUrl = this.loansUrl + "marketplace";
    }
    MarketplaceService.prototype.getLoans = function (rating, fields, loansAmount) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('rating__in', "[\"" + rating + "\"]")
            .set('fields', "" + fields.join(","));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set("X-Page", "0")
            .set("X-Size", loansAmount);
        var options = {
            params: params,
            headers: headers
        };
        return this.http.get(this.marketplaceUrl, options)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    MarketplaceService.prototype.getLoansAmount = function () {
        return this.http.get(this.marketplaceUrl, { observe: 'response' })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    MarketplaceService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Unexpected error. Please try again later.');
    };
    ;
    MarketplaceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MarketplaceService);
    return MarketplaceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiEndpoint: ""
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/styles/styles.scss":
/***/ (function(module, exports) {

module.exports = "p.content {\n  font-family: 'Roboto', sans-serif;\n  src: url(\"https://fonts.googleapis.com/css?family=Roboto\"); }\n\nh1,\nh2,\nh3,\nh4 {\n  text-align: center;\n  font-family: 'Work Sans', sans-serif;\n  src: url(\"https://fonts.googleapis.com/css?family=Work+Sans\"); }\n"

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map