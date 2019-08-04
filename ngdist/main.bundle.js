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

/***/ "../../../../../src/app/_directives/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "../../../../../src/app/_directives/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        var _this = this;
        this.alertService = alertService;
        // subscribe to alert messages
        this.subscription = alertService.getMessage().subscribe(function (message) { _this.message = message; });
    }
    AlertComponent.prototype.ngOnDestroy = function () {
        // unsubscribe on destroy to prevent memory leaks
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'alert',
            template: __webpack_require__("../../../../../src/app/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/_services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// 이서비스 당췌 왜 만들어 놨는지 ?
var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/apiRequest.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiRequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalconst__ = __webpack_require__("../../../../../src/app/globalconst.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Refby GitHub
 * Modify by cho.yong-beom on 2017-11-18.
 */




var ApiRequestService = (function () {
    function ApiRequestService(http, 
        //private userInfoService:UserInfoService,
        router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.baseApiPath = "";
        this.requestObserver = {
            next: function (datas) {
            },
            error: function (error) {
                console.log("api request error : " + error);
                if (error.status === 401) {
                    _this.router.navigate(['/logout']);
                }
                if (error.status === 403) {
                }
            },
            complete: function () { return (console.log("api request complete")); }
        };
    }
    Object.defineProperty(ApiRequestService.prototype, "setbaseApiPath", {
        set: function (apiPath) {
            this.baseApiPath = apiPath;
        },
        enumerable: true,
        configurable: true
    });
    ApiRequestService.prototype.appendAuthHeader = function () {
        console.log("setting auth header");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        //  let token = this.userInfoService.getStoredToken();
        var token = null;
        if (JSON.parse(localStorage.getItem('currentUser'))) {
            token = JSON.parse(localStorage.getItem('currentUser')).token;
        }
        if (token !== null) {
            headers.append("Authorization", token);
        }
        return headers;
    };
    ApiRequestService.prototype.refreshToken = function (observer, url, body) {
        var _this = this;
        this.setbaseApiPath = __WEBPACK_IMPORTED_MODULE_3__globalconst__["a" /* GlobalConst */].NODE_ENDPOINT;
        var requestOptions = this.getRequestOptions(__WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post, '/openapi/refreshToken', undefined, { test: "test" });
        console.log(requestOptions);
        this.setbaseApiPath = __WEBPACK_IMPORTED_MODULE_3__globalconst__["a" /* GlobalConst */].NODEAPI_ENDPOINT;
        this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](requestOptions))
            .map(function (data) {
            var user = data.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                //this.requestNew(url,body,observer);
            }
            else {
                _this.router.navigate(['/login']);
            }
            return data;
        }).subscribe(this.requestObserver);
    };
    ApiRequestService.prototype.getRequestOptions = function (requestMethod, url, urlParam, body) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            headers: this.appendAuthHeader(),
            method: requestMethod,
            url: this.baseApiPath + url
        });
        if (urlParam) {
            options = options.merge({ params: urlParam });
        }
        if (body) {
            options = options.merge({ body: JSON.stringify(body) });
        }
        return options;
    };
    ApiRequestService.prototype.get = function (url, urlParams) {
        var _this = this;
        var requestOptions = this.getRequestOptions(__WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get, url, urlParams);
        console.log(requestOptions);
        var rtnObsable = this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](requestOptions))
            .map(function (data) {
            _this.requestObserver.next(data);
            return data;
        });
        return rtnObsable;
    };
    /*getBinary(url:string, urlParams?:URLSearchParams):Observable<any>{
  
      let headers = new Headers({'Content-Type': 'binary/octet-stream'});
      let token:string =null;
      if(JSON.parse(localStorage.getItem('currentUser'))){
        token = JSON.parse(localStorage.getItem('currentUser')).token;
      }
  
      if (token !==null) {
        headers.append("Authorization", token);
      }
  
      let requestOptions = this.getRequestOptions(RequestMethod.Get, url, undefined, urlParams);
      requestOptions.headers = headers;
      let requestUrl = this.baseApiPath+url;
      /!*let bservable: Observable<Response> = Observable.create(function (observer:Observer<any>) {
        let formData: any = new FormData();
        let imgArr = "avatar";
        let xhr = new XMLHttpRequest();
        //formData.append(imgArr, avatarFile, avatarFile.name);
  
        xhr.open("GET", requestUrl, true);
        xhr.onreadystatechange = function () {
          if (xhr.readyState==2 && xhr.status == 200) {
            observer.next(xhr.response);p
            //observer.completed();
          } else {
            //observer.error(xhr.response);
          }
          /!*if (xhr.readyState == 4) {
          }*!/
        };
  
  
        let token:string =null;
        if(JSON.parse(localStorage.getItem('currentUser'))){
          token = JSON.parse(localStorage.getItem('currentUser')).token;
        }
  
        if (token !==null) {
          xhr.setRequestHeader('Authorization', token);
        }
        xhr.responseType = "blob";
        xhr.send(formData);
      });*!/
  
      let requestOptions = this.getRequestOptions(RequestMethod.Get, url, urlParams);
      //requestOptions.responseType = 2;
      let innerHttp = this.http;
  
      /!*innerHttp.get(url,requestOptions)
        .map((res: Response) => {
  
          if (res) {
  
            if (res.status === 201) {
              return [{ status: res.status, json: res }]
            }
            else if (res.status === 200) {
              alert("test2");
              var blob = new Blob([res._body], { type: 'text/bin' });
              var link=document.createElement('a');
              link.href=window.URL.createObjectURL(blob);
              link.download="any name + extension";
              link.click();
  
            }
          }
        })
  
        .toPromise()
  
        .then(result=>{
          alert("test");
            var blob = new Blob([result._body], { type: 'text/plain' })
            var link=document.createElement('a');
            link.href=window.URL.createObjectURL(blob);
            link.download="any name + extension";
            link.click();
  
          }
        )
        .catch(
          //observer.next(this.handleError)
        );
  *!/
      let observable: Observable<Response> = Observable.create(function (observer:Observer<any>) {
        innerHttp.get(url,requestOptions)
          .toPromise()
          .then(result=>{
            alert("test2");
            var blob = new Blob([result._body], { type: 'text/bin' });
            var link=document.createElement('a');
            link.href=window.URL.createObjectURL(blob);
            link.download="any name + extension";
            link.click();
             observer.next(result)
            }
          )
          .catch(
            observer.next(this.handleError)
          );
      }
  
      return observable = this.http.request(url,requestOptions)
        .map(data=> {
          console.log(data);
         //this.requestObserver.next(data);
          return new Blob([data], { type: "application/octet-stream"} );
        });
    }*/
    ApiRequestService.prototype.request = function (url, body) {
        var _this = this;
        var requestOptions = this.getRequestOptions(__WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post, url, undefined, body);
        //console.log(this.http.request(this.baseApiPath+url,requestOptions));
        var rtnObsable = this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](requestOptions))
            .map(function (data) {
            _this.requestObserver.next(data);
            // 위에서 재발급요청을 해도
            // 아래에 는 계속 진행됨으로 오류가 발생 중단하고 재발급 요청을 타도록 변경해야
            return data;
        });
        //rtnObsable.subscribe(this.requestObserver);
        return rtnObsable;
    };
    ApiRequestService.prototype.requestNew = function (url, body, observer) {
        var _this = this;
        var requestOptions = this.getRequestOptions(__WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post, url, undefined, body);
        //console.log(this.http.request(this.baseApiPath+url,requestOptions));
        var rtnObsable;
        console.log("cant add map");
        rtnObsable = this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](requestOptions)).map(function (data) {
            console.log("###################################rtnObsable");
            console.log(rtnObsable);
            _this.authCheck(data, rtnObsable, observer, url, body);
            //this.requestObserver.next(data);
            // 위에서 재발급요청을 해도
            // 아래에 는 계속 진행됨으로 오류가 발생 중단하고 재발급 요청을 타도록 변경해야
            return data;
        });
        rtnObsable.subscribe(this.requestObserver);
    };
    ApiRequestService.prototype.authCheck = function (data, observale, observer, url, body) {
        console.log("authCheck######################");
        console.log(data);
        console.log("api request : datas" + JSON.parse(data["_body"]));
        console.log(JSON.parse(data["_body"]).error.status);
        if (JSON.parse(data["_body"]).error && JSON.parse(data["_body"]).error.status == 403) {
            console.log("api request error : ");
            console.log(JSON.parse(data["_body"]).error);
            this.refreshToken(observer, url, body);
        }
        else {
            observale.subscribe(observer);
        }
    };
    ApiRequestService.prototype.put = function (url, body) {
        var requestOptions = this.getRequestOptions(__WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Put, url, undefined, body);
        var rtnObsable = this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](requestOptions));
        rtnObsable.subscribe(this.requestObserver);
        return rtnObsable;
    };
    ApiRequestService.prototype.delete = function (url) {
        var requestOptions = this.getRequestOptions(__WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Delete, url);
        var rtnObsable = this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](requestOptions));
        rtnObsable.subscribe(this.requestObserver);
        return rtnObsable;
    };
    ApiRequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], ApiRequestService);
    return ApiRequestService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apiRequest_service__ = __webpack_require__("../../../../../src/app/_services/apiRequest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globalconst__ = __webpack_require__("../../../../../src/app/globalconst.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthenticationService = (function () {
    function AuthenticationService(http, router, apirequestService) {
        this.http = http;
        this.router = router;
        this.apirequestService = apirequestService;
        //this.apirequestService.setbaseApiPath = GlobalConst.HEROAPI_ENDPOINT;
        this.apirequestService.setbaseApiPath = __WEBPACK_IMPORTED_MODULE_5__globalconst__["a" /* GlobalConst */].NODE_ENDPOINT;
    }
    //headers = new Headers({'Content-Type': 'application/json'});
    AuthenticationService.prototype.login = function (username, password) {
        //return this.apirequestService.request('/api/authenticate', { username: username, password: password })
        return this.apirequestService.request('/openapi/authenticate', { username: username, password: password })
            .map(function (response) {
            console.log(response);
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__apiRequest_service__["a" /* ApiRequestService */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/dynamicCdnJs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ScriptStore */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicScriptLoaderService; });
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

var ScriptStore = [
    { name: 'chartjs', src: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js' },
    { name: 'env', src: '../../../assets/js/env.js' }
];
var DynamicScriptLoaderService = (function () {
    function DynamicScriptLoaderService() {
        var _this = this;
        this.scripts = {};
        ScriptStore.forEach(function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    DynamicScriptLoaderService.prototype.load = function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    DynamicScriptLoaderService.prototype.loadScript = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.scripts[name].loaded) {
                //load script
                var script_1 = document.createElement('script');
                script_1.type = 'text/javascript';
                script_1.src = _this.scripts[name].src;
                if (script_1.readyState) {
                    script_1.onreadystatechange = function () {
                        if (script_1.readyState === "loaded" || script_1.readyState === "complete") {
                            script_1.onreadystatechange = null;
                            _this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else {
                    script_1.onload = function () {
                        _this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script_1.onerror = function (error) { return resolve({ script: name, loaded: false, status: 'Loaded' }); };
                document.getElementsByTagName('head')[0].appendChild(script_1);
            }
            else {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
        });
    };
    DynamicScriptLoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DynamicScriptLoaderService);
    return DynamicScriptLoaderService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__user_service__["a"]; });





/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globalconst__ = __webpack_require__("../../../../../src/app/globalconst.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get('/api/users', this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__globalconst__["a" /* GlobalConst */].NODE_ENDPOINT + '/openapi/register', user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    // private helper methods
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({ headers: headers });
        }
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__heroes_heroes_component__ = __webpack_require__("../../../../../src/app/heroes/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hero_detail_hero_detail_component__ = __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__todo_todo_component__ = __webpack_require__("../../../../../src/app/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__runstate_runstate_component__ = __webpack_require__("../../../../../src/app/runstate/runstate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__attach_attach_component__ = __webpack_require__("../../../../../src/app/attach/attach.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__filemng_filemng_component__ = __webpack_require__("../../../../../src/app/filemng/filemng.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__smart_playlist_smart_playlist_component__ = __webpack_require__("../../../../../src/app/smart-playlist/smart-playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utbattach_utbattach_component__ = __webpack_require__("../../../../../src/app/utbattach/utbattach.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    //{ path: '', redirectTo: '/filelist', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'runstate', component: __WEBPACK_IMPORTED_MODULE_9__runstate_runstate_component__["a" /* RunstateComponent */] },
    { path: 'detail/:heroStr', component: __WEBPACK_IMPORTED_MODULE_4__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */] },
    { path: 'addnew/:heroStr', component: __WEBPACK_IMPORTED_MODULE_4__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */] },
    { path: 'heroes', component: __WEBPACK_IMPORTED_MODULE_3__heroes_heroes_component__["a" /* HeroesComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */] },
    { path: 'observerlist', component: __WEBPACK_IMPORTED_MODULE_7__list_list_component__["a" /* ListComponent */] },
    { path: 'todolist', component: __WEBPACK_IMPORTED_MODULE_8__todo_todo_component__["a" /* TodoComponent */] },
    { path: 'chats', component: __WEBPACK_IMPORTED_MODULE_10__chat_chat_component__["a" /* ChatComponent */] },
    { path: 'attachfile', component: __WEBPACK_IMPORTED_MODULE_11__attach_attach_component__["a" /* AttachComponent */] },
    { path: 'attachUtbUrl', component: __WEBPACK_IMPORTED_MODULE_14__utbattach_utbattach_component__["a" /* UtbattachComponent */] },
    { path: 'filelist', component: __WEBPACK_IMPORTED_MODULE_12__filemng_filemng_component__["a" /* FilemngComponent */] },
    { path: 'smartplay', component: __WEBPACK_IMPORTED_MODULE_13__smart_playlist_smart_playlist_component__["a" /* SmartPlaylistComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-size: 1.2em;\n  color: #999;\n  color: #555;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.router-link-active {\n  color: #039be5;\n}\n.header-bar {\n  background-color: rgb(0,120,215);\n  height: 4px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<nav>\n  <a routerLink=\"/login\">Login</a>\n  <a (click)=\"logOut()\">LogOut</a>\n\n  <a routerLink=\"/filelist\">Search List</a>\n  <a routerLink=\"/attachUtbUrl\">Add Link </a>\n\n</nav>\n<h1>etc</h1>\n<nav>\n  <a routerLink=\"/dashboard\">Dashboard</a>\n  <a routerLink=\"/heroes\">Heroes</a>\n  <a routerLink=\"/observerlist\">Observer List</a>\n  <a routerLink=\"/attachfile\">FileAttach</a>\n  <a routerLink=\"/chats\">Chat</a>\n</nav>\n\n\n<router-outlet></router-outlet> <!--라우터 아웃랫이 먼가요..? -->\n<app-messages></app-messages>\n\n<!--<jaspero-confirmations [defaultSettings]=\"options\" ></jaspero-confirmations>-->\n<jaspero-confirmations ></jaspero-confirmations>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
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
    function AppComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.title = 'UTB Link Saver';
    }
    AppComponent.prototype.logOut = function () {
        this.authenticationService.logout();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jaspero_ng2_confirmations__ = __webpack_require__("../../../../@jaspero/ng2-confirmations/ng2-confirmations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__heroes_heroes_component__ = __webpack_require__("../../../../../src/app/heroes/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__hero_detail_hero_detail_component__ = __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__hero_search_hero_search_component__ = __webpack_require__("../../../../../src/app/hero-search/hero-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_apiRequest_service__ = __webpack_require__("../../../../../src/app/_services/apiRequest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__directives_alert_component__ = __webpack_require__("../../../../../src/app/_directives/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__item_item_component__ = __webpack_require__("../../../../../src/app/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__item_item_service__ = __webpack_require__("../../../../../src/app/item/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__todo_todo_component__ = __webpack_require__("../../../../../src/app/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__todo_todo_service__ = __webpack_require__("../../../../../src/app/todo/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__runstate_runstate_component__ = __webpack_require__("../../../../../src/app/runstate/runstate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angular_gauge__ = __webpack_require__("../../../../angular-gauge/esm5/angular-gauge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__attach_attach_component__ = __webpack_require__("../../../../../src/app/attach/attach.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__filemng_filemng_component__ = __webpack_require__("../../../../../src/app/filemng/filemng.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pipe_limit_to_pipe__ = __webpack_require__("../../../../../src/app/pipe/limit-to.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_videogular2_core__ = __webpack_require__("../../../../videogular2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_videogular2_controls__ = __webpack_require__("../../../../videogular2/controls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__smart_playlist_smart_playlist_component__ = __webpack_require__("../../../../../src/app/smart-playlist/smart-playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_videogular2_src_buffering_buffering__ = __webpack_require__("../../../../videogular2/src/buffering/buffering.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_videogular2_src_buffering_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43_videogular2_src_buffering_buffering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__utbattach_utbattach_component__ = __webpack_require__("../../../../../src/app/utbattach/utbattach.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__window_ref__ = __webpack_require__("../../../../../src/app/window.ref.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































//import {SchComponent} from './sch/sch.component';
//import {TempmngComponent} from './tempmng/tempmng.component';
//import {DailyschComponent} from './dailysch/dailysch.component'
/*angular movie*/







var firebaseAuth = {
    apiKey: "AIzaSyCVh5eTAp7HZhnak_uAoS-LvK3xHqXt9lM",
    authDomain: "ionic-chat-project-ace74.firebaseapp.com",
    databaseURL: "https://ionic-chat-project-ace74.firebaseio.com",
    projectId: "ionic-chat-project-ace74",
    storageBucket: "ionic-chat-project-ace74.appspot.com",
    messagingSenderId: "644376250918"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__heroes_heroes_component__["a" /* HeroesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_23__directives_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_24__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__hero_search_hero_search_component__["a" /* HeroSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_25__item_item_component__["a" /* ItemComponent */],
                __WEBPACK_IMPORTED_MODULE_16__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_28__todo_todo_component__["a" /* TodoComponent */],
                __WEBPACK_IMPORTED_MODULE_30__runstate_runstate_component__["a" /* RunstateComponent */],
                __WEBPACK_IMPORTED_MODULE_27__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_34__chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_37__attach_attach_component__["a" /* AttachComponent */],
                __WEBPACK_IMPORTED_MODULE_38__filemng_filemng_component__["a" /* FilemngComponent */],
                __WEBPACK_IMPORTED_MODULE_42__smart_playlist_smart_playlist_component__["a" /* SmartPlaylistComponent */],
                __WEBPACK_IMPORTED_MODULE_44__utbattach_utbattach_component__["a" /* UtbattachComponent */],
                __WEBPACK_IMPORTED_MODULE_39__pipe_limit_to_pipe__["a" /* LimitToPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_31_angular_gauge__["a" /* GaugeModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_33_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth),
                __WEBPACK_IMPORTED_MODULE_32_angularfire2_database_deprecated__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_40_videogular2_core__["VgCoreModule"],
                __WEBPACK_IMPORTED_MODULE_41_videogular2_controls__["VgControlsModule"],
                __WEBPACK_IMPORTED_MODULE_36_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_40_videogular2_core__["VgCoreModule"],
                __WEBPACK_IMPORTED_MODULE_41_videogular2_controls__["VgControlsModule"],
                __WEBPACK_IMPORTED_MODULE_43_videogular2_src_buffering_buffering__["VgBufferingModule"],
                __WEBPACK_IMPORTED_MODULE_3__jaspero_ng2_confirmations__["b" /* JasperoConfirmationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__hero_service__["a" /* HeroService */],
                __WEBPACK_IMPORTED_MODULE_13__message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_18__services_alert_service__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_19__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_21__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_22__services_apiRequest_service__["a" /* ApiRequestService */],
                __WEBPACK_IMPORTED_MODULE_26__item_item_service__["a" /* ItemService */],
                __WEBPACK_IMPORTED_MODULE_29__todo_todo_service__["a" /* TodoService */],
                __WEBPACK_IMPORTED_MODULE_35__chat_service__["a" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_45__window_ref__["a" /* WindowRef */],
                { provide: __WEBPACK_IMPORTED_MODULE_46__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_46__angular_common__["HashLocationStrategy"] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/attach/attach.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-file {\n  position: relative;\n  overflow: hidden;\n}\n.btn-file input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  filter: alpha(opacity=0);\n  opacity: 0;\n  outline: none;\n  background: white;\n  cursor: inherit;\n  display: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/attach/attach.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <table class=\"table\">\n        <thead>\n        <tr>\n          <th width=\"50%\">Name</th>\n          <th>Size</th>\n          <th>Progress</th>\n          <th>Status</th>\n          <th>Actions</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let item of uploader.queue\">\n          <td><strong>{{ item.file.name }}</strong></td>\n          <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\n          <td>\n            <div class=\"progress\" style=\"margin-bottom: 0;\">\n              <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n            </div>\n          </td>\n          <td class=\"text-center\">\n            <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n            <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n            <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n          </td>\n          <td nowrap>\n            <button type=\"button\" class=\"btn btn-success btn-xs\"\n                    (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n              <span class=\"glyphicon glyphicon-upload\"></span>\n            </button>\n\n            <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                    (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n              <span class=\"glyphicon glyphicon-stop\"></span>\n            </button>\n\n\n            <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                    (click)=\"item.remove()\">\n              <span class=\"glyphicon glyphicon-trash\"></span>\n            </button>\n          </td>\n        </tr>\n        </tbody>\n\n      </table>\n      <div>\n        Queue progress:\n        <div class=\"progress\" style=\"\">\n          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n        </div>\n      </div>\n\n      <div>\n        <label class=\"btn btn-primary btn-s\">\n          <span class=\"glyphicon glyphicon-plus\"></span> Add (+ {{ uploader?.queue?.length }})<input type=\"file\"  name=\"multiple\" ng2FileSelect [uploader]=\"uploader\" multiple  style=\"display: none;\"/>\n        </label>\n        <button type=\"button\" class=\"btn btn-success btn-s\"\n                (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n          <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n        </button>\n        <button type=\"button\" class=\"btn btn-warning btn-s\"\n                (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n          <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n        </button>\n        <button type=\"button\" class=\"btn btn-danger btn-s\"\n                (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n          <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/attach/attach.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttachComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_apiRequest_service__ = __webpack_require__("../../../../../src/app/_services/apiRequest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalconst__ = __webpack_require__("../../../../../src/app/globalconst.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AttachComponent = (function () {
    function AttachComponent(apirequestService) {
        var _this = this;
        this.apirequestService = apirequestService;
        //uploadUrl:string = "http://localhost:38080/api/fileUpload";
        this.uploadUrl = "";
        this.completefilelist = [];
        this.cancelfilelist = [];
        this.deleteObserver = {
            next: function (datas) { return (_this.deletedatas = datas); },
            error: function (error) { return (console.log(error)); },
            complete: function () { return (console.log('complete')); }
        };
        apirequestService.setbaseApiPath = __WEBPACK_IMPORTED_MODULE_3__globalconst__["a" /* GlobalConst */].NODEAPI_ENDPOINT;
        this.uploadUrl = __WEBPACK_IMPORTED_MODULE_3__globalconst__["a" /* GlobalConst */].NODEAPI_ENDPOINT + "/fileUpload";
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({
            url: this.uploadUrl
        });
        this.uploader.onAfterAddingFile = (function (item) {
            item.withCredentials = false;
            // 서버에 전송해야 함으로 오버라이드 개념으로 재정의 하고 기존에 호출하던 cancelItem 호출
            item.remove = function () {
                _this.apirequestService.delete("/fileUpload/" + item.file["file_id"]).subscribe(_this.deleteObserver);
                //this.uploader.removeFromQueue(item);
                //console.log(this.uploader.queue);
            };
            // 서버에 전송해야 함으로 오버라이드 개념으로 재정의 하고 기존에 호출하던 cancelItem 호출
            item.cancel = function () {
                _this.apirequestService.getRequestOptions("delete", _this.uploadUrl + "/" + item.file["file_id"]);
                //this.uploader.cancelItem(item);
                //console.log(this.uploader.queue);
            };
        });
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            item.file["file_id"] = JSON.parse(response)._id; // 완료된 파일id를 서버로 부터 리턴 받는다.
            _this.completefilelist.push(response);
            console.log(response);
        };
        this.uploader.onCancelItem = function (item, response, status, headers) {
            console.log("onCancelItem ");
            _this.cancelfilelist.push(response);
            console.log(response);
        };
        this.uploader.onCompleteAll = function () {
            console.log('complete');
            console.log(_this.uploader.queue);
        };
    }
    ;
    AttachComponent.prototype.ngOnInit = function () {
    };
    AttachComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-attach',
            template: __webpack_require__("../../../../../src/app/attach/attach.component.html"),
            styles: [__webpack_require__("../../../../../src/app/attach/attach.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_apiRequest_service__["a" /* ApiRequestService */]])
    ], AttachComponent);
    return AttachComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalconst__ = __webpack_require__("../../../../../src/app/globalconst.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChatService = (function () {
    function ChatService() {
        this.url = __WEBPACK_IMPORTED_MODULE_3__globalconst__["a" /* GlobalConst */].NODE_ENDPOINT;
    }
    ChatService.prototype.sendMsg = function (msg) {
        this.socket.emit('add-msg', msg);
        console.log("msg SENT");
    };
    ChatService.prototype.getMsgs = function () {
        var _this = this;
        var obsable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(_this.url);
            _this.socket.on('new-msg', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return obsable;
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let msg of msgs\">\n  {{msg.message}}\n</div>\n{{msgs}}\n<input [(ngModel)]=\"msg.message\"  /><button (click)=\"sendmsg()\">Send</button>\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = (function () {
    function ChatComponent(chatService) {
        this.chatService = chatService;
        this.username = '';
        this.msg = { message: "", date: new Date() };
        console.log("constructor");
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msgs = [];
        this.connection = this.chatService.getMsgs().subscribe(function (msg) {
            console.log(_this.msgs);
            _this.msgs.push(msg);
        });
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    ChatComponent.prototype.sendmsg = function () {
        console.log(this.msgs);
        this.msg.date = new Date();
        this.chatService.sendMsg(this.msg);
        console.log('ionViewDidLoad ChatPage');
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*='col-'] {\n  float: left;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\n[class*='col-'] {\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\n.grid {\n  margin: 0;\n  display: inline-block;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  background-color: rgb(0,120,215);\n  border-radius: 2px;\n}\nh4 {\n  position: relative;\n}\n.module:hover {\n  background-color: #EEE;\n  background-color: #CCC;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px;\n  }\n  .col-1-4 {\n    width: 50%;\n  }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Top Heroes</h3>\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let hero of heroes\" class=\"col-1-4\"\n     routerLink=\"/detail/{{hero.id}}\">\n    <div class=\"module hero\">\n      <h4>{{hero.name}}</h4>\n    </div>\n  </a>\n</div>\n<app-hero-search></app-hero-search>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mock_heroes__ = __webpack_require__("../../../../../src/app/mock-heroes.ts");
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
    function DashboardComponent(route, 
        //private heroService: HeroService,
        location) {
        this.route = route;
        this.location = location;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    DashboardComponent.prototype.getHeroes = function () {
        this.heroes = __WEBPACK_IMPORTED_MODULE_3__mock_heroes__["a" /* HEROES */];
        /*this.heroService.getHeroes()
          .subscribe(heroes => this.heroes = heroes.slice(1, 5));*/
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/filemng/filemng.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".video-load {\n  background-color: #ffffff;\n  height: 315px;\n  width: 100%;\n  z-index: 999;\n  position: fixed; }\n.loader {\n  background-size: 150px 150px;\n  background-repeat: no-repeat;\n  background-image: url('/assets/loader.gif');\n  width: 150px;\n  height: 150px;\n  display: table;\n  margin: 0 auto;\n  margin-top: 300px; }\n.dropdown-menu {\n  font-size: 12px;\n  width: calc(100% - 30px); }\n.dropdown-menu .active {\n  color: #000000;\n  background-color: rgba(0,0,0,0) }\n.modal {\n  background-color: rgba(0,0,0,0.6); }\n.modal-header {\n  display: none; }\n.modal-footer {\n  border: 0;\n  background-color: #000000; }\n.modal-content {\n  border: 0;\n  background-color: #000000; }\n\n/* youtube component styling */\n#youtube {\n  /*background-color: orange;*/\n  margin-top: 40px;\n  padding: 8px !important; }\n\n#youtube .card {\n  display: -webkit-inline-box;\n  width: 100%;\n  margin-bottom: 25px;\n  box-shadow: 0 2px 15px 0 rgba(0,0,0,0.1);\n  border: 0; }\n#youtube .card:hover {\n  box-shadow: 0 4px 17px 0 rgba(0,0,0,0.5);\n  border: 0; }\n#youtube .card-block {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  padding: 0; }\n#youtube .card-header {\n  display: none;\n  height: 40px;\n  background-size: 70px 40px;\n  background-position: 10px 0px;\n  background-repeat: no-repeat; }\n#youtube .card-header a {\n  display: none; }\n#youtube .img-container {\n  width: 120px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n\n  padding-left: 5px;\n}\n#youtube img {\n  width: 120px;\n  height: 90px; }\n#youtube .video-title {\n  padding: 8px;\n  color: black;\n  word-break:break-all;\n  font-size: 14px; }\n#youtube .video-size {\n  padding: 8px;\n  color:#206ca7;\n  font-size: 14px; }\n#youtube .video-date {\n  padding: 8px;\n  color: #206ca7;\n  font-size: 14px; }\n\n#youtube b {\n  font-size: 14px;\n  color: #2381C9;}\n#youtube .video-desc {\n  font-size: 12px;\n  display:-webkit-inline-box;\n  display:-ms-inline-flexbox;\n  display:inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n\n  padding: 5px 10px 5px 10px; }\n\n#youtube .video-control {\n  font-size: 12px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n\n  margin-left: auto;\n  padding: 5px 10px 5px 10px; }\n\n.modal-body {\n  padding: 0px;\n}\n\n\n\n\n.listprogress {\n  height: 5px;\n  margin-bottom: 5px;\n  overflow: hidden;\n  background-color: #f5f5f5;\n  border-radius: 1px;\n  box-shadow: inset 0 1px 2px rgba(0,0,0,.1);\n  display:block;\n  width:100%;\n  position: relative;\n}\n\n.card-body{\n  width: 100%;\n}\n\n.content-flex{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.glyphicon-remove{\n  color: orange;\n}\n\n\n.glyphicon-retweet{\n  color: mediumpurple;\n}\n\n.or-col-lg-4 {\n  padding-left: 3px !important;\n  padding-right: 3px !important;\n}\n.input-group.md-form.form-sm.form-1 input{\n  border: 1px solid #bdbdbd;\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n.input-group.md-form.form-sm.form-2 input {\n  border: 1px solid #bdbdbd;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.input-group.md-form.form-sm.form-2 input.red-border  {\n  border: 1px solid #ef9a9a;\n}\n.input-group.md-form.form-sm.form-2 input.lime-border  {\n  border: 1px solid #cddc39;\n}\n.input-group.md-form.form-sm.form-2 input.amber-border  {\n  border: 1px solid #ffca28;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/filemng/filemng.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!--<div id=\"youtube\" *ngIf=\"loader===false\">-->\n\n\n<div id=\"youtube\" >\n  <div class=\"row\">\n    <div class=\"input-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"search...\" [(ngModel)]=\"searchModel.searchString\" />\n      <div class=\"input-group-btn\">\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"search()\">\n          <span class=\"glyphicon glyphicon-search\"></span>\n        </button>\n\n        <button class=\"btn btn-primary \" >\n          <span class=\"align-middle glyphicon glyphicon-download-alt\" (click)=\"downlloadfiles()\" ></span>\n        </button>\n        <button class=\"btn btn-danger \" >\n          <span class=\"align-middle glyphicon glyphicon-trash \" (click)=\"removefiles()\"></span>\n        </button>\n        <button class=\"btn btn-warning \" >\n          <span class=\"align-middle glyphicon glyphicon-facetime-video\" (click)=\"encodefiles()\"></span>\n        </button>\n        <!--<button class=\"btn btn-info \" >\n          <span class=\"align-middle glyphicon glyphicon-headphones\" (click)=\"encodeMp3file()\"></span>\n        </button>-->\n        <button class=\"btn btn-primary \" >\n        <input type=\"checkbox\" class=\"align-middle form-check-input\" id=\"checkAll\" [(ngModel)]=\"searchModel.allChecked\" (ngModelChange)=\"checkAll(searchModel.allChecked)\">\n        </button>\n      </div>\n\n\n    </div>\n    <div class=\"col-lg-2 or-col-lg-2 col-md-3 mb-2 \">\n\n    </div>\n\n  </div>\n  <div class=\"row\">\n\n    <div class=\"col-lg-4 or-col-lg-4 col-md-6 mb-4 \" *ngFor=\"let fileitem of filelist; let i = index\">\n      <div class=\"card  card-cascade wider\" >\n        <div class=\"card-body\">\n\n          <div class=\"listprogress\" style=\"margin-bottom: 0;\">\n            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': fileitem.progress + '%' }\"></div>\n          </div>\n          <div class=\"content-flex\" >\n            <div class=\"img-container\">\n<!--              <a href=\"{{ thumnailUrlRoot}}/videos/{{fileitem.filepath}}\" >-->\n                <img src=\"{{ thumnailUrlRoot+'/'+ fileitem.filepath + '.png'}}\" (click)=\"linkloadfile(fileitem)\">\n<!--              </a>-->\n            </div>\n            <div class=\"video-desc\">\n\n              <p class=\"card-text mr-2 ml-2\">\n                <span class=\"video-title\">\n               {{ fileitem.originalname }}</span><br>\n                <!--<span><b>{{ fileitem.originalname | limitTo: 22 }}</b><br></span>-->\n\n\n              <button class=\"btn btn-primary btn-sm\" >\n                <i class=\"glyphicon glyphicon-download-alt\" (click)=\"downlloadfile(fileitem)\" ></i>\n              </button>\n              <button class=\"btn btn-danger btn-sm\" >\n                <i class=\"glyphicon glyphicon-trash\" (click)=\"removefile(fileitem)\"></i>\n              </button>\n              <button class=\"btn btn-warning btn-sm\" >\n                <i class=\"glyphicon glyphicon-facetime-video\" (click)=\"encodefile(fileitem)\"></i>\n              </button>\n              <button class=\"btn btn-info btn-sm\" >\n                <i class=\"glyphicon glyphicon-headphones\" (click)=\"encodeMp3file(fileitem)\"></i>\n              </button>\n              <button class=\"btn btn-primary btn-sm\" >\n                <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\" [(ngModel)]=\"fileitem.checked\" >\n              </button>\n\n            </div>\n\n          </div>\n          <div class=\"listprogress\" style=\"margin-bottom: 0;\">\n            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': fileitem.progress + '%' }\"></div>\n          </div>\n\n\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<!--<div class=\"loader\" *ngIf=\"loader===true\"></div>-->\n<!--<app-smart-playlist ></app-smart-playlist>-->\n"

/***/ }),

/***/ "../../../../../src/app/filemng/filemng.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilemngComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_apiRequest_service__ = __webpack_require__("../../../../../src/app/_services/apiRequest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globalconst__ = __webpack_require__("../../../../../src/app/globalconst.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jaspero_ng2_confirmations__ = __webpack_require__("../../../../@jaspero/ng2-confirmations/ng2-confirmations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__window_ref__ = __webpack_require__("../../../../../src/app/window.ref.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FilemngComponent = (function () {
    function FilemngComponent(apirequestService, _confirmation, angularWindow) {
        var _this = this;
        this.apirequestService = apirequestService;
        this._confirmation = _confirmation;
        this.angularWindow = angularWindow;
        this.searchModel = {
            allChecked: false,
            searchString: ""
        };
        this.filelist = [];
        this.connections = [];
        this.filelistObserver = {
            next: function (datas) {
                _this.filelist = JSON.parse(datas._body);
                console.log(_this.filelist);
                var cnt = 0;
                _this.filelist.forEach(function (item) {
                    if (item.encodests == 'P') {
                        cnt = cnt + 1;
                        console.log(cnt);
                        console.log(item);
                        //if(cnt<2){
                        var connection = _this.getMsgs(item._id).subscribe(function (percentage) {
                            console.log(percentage);
                            item.progress = percentage.toString();
                        });
                        _this.connections.push(connection);
                        // }
                        /**/
                    }
                });
            } //(this.filelist = datas)
            ,
            error: function (error) { return (console.log(error)); },
            complete: function () { return (console.log('complete')); }
        };
        this.fileremoveObserver = {
            next: function (datas) {
                var file_id = JSON.parse(datas._body);
                _this.removeItem(file_id);
            } //(this.filelist = datas)
            ,
            error: function (error) { return (console.log(error)); },
            complete: function () { return (console.log('complete')); }
        };
        this.fileaddObserver = {
            next: function (blob) {
            } //(this.filelist = datas)
            ,
            error: function (error) { return (console.log(error)); },
            complete: function () { return (console.log('complete')); }
        };
        this.filelinkloadObserver = {
            next: function (datas) {
                console.log(JSON.parse(datas._body).filepath);
                var fileitem = JSON.parse(datas._body);
                var fileExt = ".mp4";
                if (fileitem.filepath.indexOf("mp3") > 0) {
                    fileExt = ".mp3";
                }
                var name = fileitem.originalname + fileExt;
                console.log(name);
                if (name && name !== '') {
                    var link = document.createElement("a");
                    //link.href = GlobalConst.NODEAPI_ENDPOINT+"/videos/"+ fileitem.filepath;
                    link.href = __WEBPACK_IMPORTED_MODULE_2__globalconst__["a" /* GlobalConst */].NODEAPI_ENDPOINT + "/videos/" + fileitem.filepath;
                    link.target = "_blank";
                    //link.download = name;
                    console.log(link.href);
                    link.click();
                    //link.click();
                }
            } //(this.filelist = datas)
            ,
            error: function (error) { return (console.log(error)); },
            complete: function () { return (console.log('complete')); }
        };
        this.filedownloadObserver = {
            next: function (datas) {
                console.log(JSON.parse(datas._body).filepath);
                var fileitem = JSON.parse(datas._body);
                var fileExt = ".mp4";
                if (fileitem.filepath.indexOf("mp3") > 0) {
                    fileExt = ".mp3";
                }
                var name = fileitem.originalname + fileExt;
                console.log(name);
                if (name && name !== '') {
                    var link = document.createElement("a");
                    //link.href = GlobalConst.NODEAPI_ENDPOINT+"/videos/"+ fileitem.filepath;
                    link.href = __WEBPACK_IMPORTED_MODULE_2__globalconst__["a" /* GlobalConst */].NODEAPI_ENDPOINT + "/fileDownload/" + fileitem._id + "?token=" + fileitem.token;
                    link.target = "_blank";
                    //link.download = name;
                    console.log(link.href);
                    link.click();
                    //link.click();
                }
            } //(this.filelist = datas)
            ,
            error: function (error) { return (console.log(error)); },
            complete: function () { return (console.log('complete')); }
        };
        apirequestService.setbaseApiPath = __WEBPACK_IMPORTED_MODULE_2__globalconst__["a" /* GlobalConst */].NODEAPI_ENDPOINT;
        this.thumnailUrlRoot = __WEBPACK_IMPORTED_MODULE_2__globalconst__["a" /* GlobalConst */].NODEAPI_ENDPOINT;
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__(__WEBPACK_IMPORTED_MODULE_2__globalconst__["a" /* GlobalConst */].NODE_ENDPOINT);
        this.window = angularWindow.nativeWindow;
    }
    FilemngComponent.prototype.getMsgs = function (file_id) {
        var _this = this;
        console.log("socket listening" + file_id);
        var obsable = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('new-prog-msg' + file_id, function (data) {
                observer.next(data);
            });
            return function () {
                console.log("socket disconnect");
                _this.socket.disconnect();
            };
        });
        return obsable;
    };
    FilemngComponent.prototype.removeItem = function (file_id) {
        var index = this.filelist.findIndex(function (item) {
            return item._id === file_id;
        });
        if (index !== -1) {
            this.filelist.splice(index, 1);
            console.log("file remove compleit");
        }
    };
    FilemngComponent.prototype.removefile = function (fileitem) {
        var _this = this;
        var conset = {
            overlay: false,
            overlayClickToClose: true,
            showCloseButton: false
        };
        this._confirmation.create('Delete?', 'You should really just do it.', conset)
            .subscribe(function (ans) {
            if (ans.resolved) {
                _this.apirequestService.delete("/fileUpload/" + fileitem._id).subscribe(_this.fileremoveObserver);
            }
        });
    };
    FilemngComponent.prototype.removefiles = function () {
        var _this = this;
        var checkList = this.filelist.filter(function (fileItem) {
            return fileItem.checked == true;
        });
        checkList.forEach(function (fileItem) {
            _this.removefile(fileItem);
        });
    };
    FilemngComponent.prototype.downlloadfile = function (fileitem) {
        console.log(this.thumnailUrlRoot + "/videos/" + fileitem.filepath);
        this.apirequestService.get("/fileCheck/" + fileitem._id).subscribe(
        //  this.apirequestService.getPreCheck("/videos/"+fileitem.filepath).subscribe(
        this.filedownloadObserver);
    };
    FilemngComponent.prototype.linkloadfile = function (fileitem) {
        console.log(this.thumnailUrlRoot + "/videos/" + fileitem.filepath);
        this.apirequestService.get("/fileCheck/" + fileitem._id).subscribe(
        //  this.apirequestService.getPreCheck("/videos/"+fileitem.filepath).subscribe(
        this.filelinkloadObserver);
    };
    FilemngComponent.prototype.downlloadfiles = function () {
        var _this = this;
        var checkList = this.filelist.filter(function (fileItem) {
            return fileItem.checked == true;
        });
        checkList.forEach(function (fileItem) {
            _this.downlloadfile(fileItem);
        });
    };
    FilemngComponent.prototype.checkAll = function (allChecked) {
        console.log(allChecked);
        this.filelist.forEach(function (fileItem) {
            fileItem.checked = allChecked;
        });
    };
    FilemngComponent.prototype.search = function () {
        this.apirequestService.request("/fileList", this.searchModel).subscribe(this.filelistObserver);
    };
    FilemngComponent.prototype.encodeMp3file = function (fileitem) {
        this.apirequestService.request("/encodeMp3file/", fileitem).subscribe(this.fileaddObserver);
    };
    FilemngComponent.prototype.encodefile = function (fileitem) {
        this.apirequestService.request("/encodeVideo/", fileitem).subscribe(this.fileaddObserver);
    };
    FilemngComponent.prototype.encodefiles = function () {
        var _this = this;
        var checkList = this.filelist.filter(function (fileItem) {
            return fileItem.checked == true;
        });
        checkList.forEach(function (fileItem) {
            _this.encodefile(fileItem);
        });
    };
    FilemngComponent.prototype.ngOnInit = function () {
        console.log("test ngOninit");
        this.search();
    };
    FilemngComponent.prototype.ngOnDestroy = function () {
        this.connections.forEach(function (connection) {
            connection.unsubscribe();
        });
    };
    FilemngComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-filemng',
            template: __webpack_require__("../../../../../src/app/filemng/filemng.component.html"),
            styles: [__webpack_require__("../../../../../src/app/filemng/filemng.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_apiRequest_service__["a" /* ApiRequestService */], __WEBPACK_IMPORTED_MODULE_5__jaspero_ng2_confirmations__["a" /* ConfirmationService */], __WEBPACK_IMPORTED_MODULE_6__window_ref__["a" /* WindowRef */]])
    ], FilemngComponent);
    return FilemngComponent;
}());



/***/ }),

/***/ "../../../../../src/app/globalconst.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalConst; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dynamicCdnJs_service__ = __webpack_require__("../../../../../src/app/_services/dynamicCdnJs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_assets_js_importEnv_js__ = __webpack_require__("../../../../../src/assets/js/importEnv.js");
/**
 * Created by jcompia on 2018-01-25.
 */



var GlobalConst = (function () {
    function GlobalConst() {
    }
    Object.defineProperty(GlobalConst, "HEROAPI_ENDPOINT", {
        //private static apiUrl:string;
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + '/hero';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalConst, "NODEAPI_ENDPOINT", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl + '/api';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalConst, "NODE_ENDPOINT", {
        get: function () {
            this.dynamicScriptLoader.load('env').then(function (data) {
                __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl = __WEBPACK_IMPORTED_MODULE_2_assets_js_importEnv_js__["a" /* getApiUrl */]();
                console.log(__WEBPACK_IMPORTED_MODULE_2_assets_js_importEnv_js__["a" /* getApiUrl */]());
            }).catch(function (error) { return console.log(error); });
            return __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl;
        },
        enumerable: true,
        configurable: true
    });
    GlobalConst.dynamicScriptLoader = new __WEBPACK_IMPORTED_MODULE_1__services_dynamicCdnJs_service__["a" /* DynamicScriptLoaderService */]();
    return GlobalConst;
}());



/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label {\n  display: inline-block;\n  width: 3em;\n  margin: .5em 0;\n  color: #607D8B;\n  color: rgb(0,120,215);\n  font-weight: bold;\n}\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em;\n}\nbutton {\n  margin-top: 20px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer; cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hero\">\n  <h2>{{hero.name}} details!</h2>\n  <div>\n    <label>id: </label>\n\n      <input [disabled]=\"!hero.editable\" [(ngModel)]=\"hero.id\" placeholder=\"id\" />\n  </div>\n  <div>\n    <label>name: </label>\n    <input [disabled]=\"!hero.editable\" [(ngModel)]=\"hero.name\" placeholder=\"name\" />\n  </div>\n  <button (click)=\"goBack()\">Back</button>\n  <button (click)=\"save()\" *ngIf=\"hero.editable\">Save</button>\n\n  <button (click)=\"feedbacktoParent(feedbackText)\">FeedBacktoParent</button>\n  <input [(ngModel)]=\"feedbackText\" placeholder=\"name\" />\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/hero-detail/hero-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__heroes_hero__ = __webpack_require__("../../../../../src/app/heroes/hero.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeroDetailComponent = (function () {
    //@Output() sendObject = new EventEmitter<Object>();
    function HeroDetailComponent(route, heroService, location) {
        this.route = route;
        this.heroService = heroService;
        this.location = location;
        this.message = "Hola Mundo!";
        this.feedbackText = "send to parent ";
    }
    HeroDetailComponent.prototype.feedbacktoParent = function () {
        this.message = this.feedbackText;
        console.log(this.feedbackText);
        //this.sendObject.emit(this.feedbackText);
    };
    HeroDetailComponent.prototype.ngOnInit = function () {
        this.getHero();
    };
    HeroDetailComponent.prototype.getHero = function () {
        //const id = this.route.snapshot.paramMap.get('id');
        //this.heroService.getHero(id)
        //  .subscribe(hero => this.hero = hero);
        this.hero = JSON.parse(this.route.snapshot.paramMap.get('heroStr'));
        //console.log(this.routerStateSnapshot.url);
    };
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService.updateHero(this.hero)
            .subscribe(function () { return _this.goBack(); });
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__heroes_hero__["a" /* Hero */])
    ], HeroDetailComponent.prototype, "hero", void 0);
    HeroDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hero-detail',
            template: __webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hero-detail/hero-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__hero_service__["a" /* HeroService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hero-search/hero-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* HeroSearch private styles */\n.search-result li {\n  border-bottom: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  width:195px;\n  height: 16px;\n  padding: 5px;\n  background-color: white;\n  cursor: pointer;\n  list-style-type: none;\n}\n\n.search-result li:hover {\n  background-color: #607D8B;\n}\n\n.search-result li a {\n  color: #888;\n  display: block;\n  text-decoration: none;\n}\n\n.search-result li a:hover {\n  color: white;\n}\n.search-result li a:active {\n  color: white;\n}\n#search-box {\n  width: 200px;\n  height: 20px;\n}\n\n\nul.search-result {\n  margin-top: 0;\n  padding-left: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hero-search/hero-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <h4>Hero Search</h4>\n\n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n\n  <ul class=\"search-result\">\n    <li *ngFor=\"let hero of heroes$ | async\" >\n      <a routerLink=\"/detail/{{hero.id}}\">\n        {{hero.name}}\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/hero-search/hero-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HeroService } from '../hero.service';
var HeroSearchComponent = (function () {
    function HeroSearchComponent() {
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    // Push a search term into the observable stream.
    HeroSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    HeroSearchComponent.prototype.ngOnInit = function () {
        /*this.heroes$ = this.searchTerms.pipe(
          // wait 300ms after each keystroke before considering the term
          debounceTime(300),
    
          // ignore new term if same as previous term
          distinctUntilChanged(),
    
          // switch to new search observable each time the term changes
          //switchMap((term: string) => this.heroService.searchHeroes(term)),
        );*/
    };
    HeroSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hero-search',
            template: __webpack_require__("../../../../../src/app/hero-search/hero-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hero-search/hero-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroSearchComponent);
    return HeroSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hero.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_apiRequest_service__ = __webpack_require__("../../../../../src/app/_services/apiRequest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__globalconst__ = __webpack_require__("../../../../../src/app/globalconst.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var HeroService = (function () {
    function HeroService(http, apirequestService, messageService) {
        this.http = http;
        this.apirequestService = apirequestService;
        this.messageService = messageService;
        this.heroesUrl = 'http://localhost:8080/hero/getList'; // URL to web api
        this.apirequestService.setbaseApiPath = __WEBPACK_IMPORTED_MODULE_6__globalconst__["a" /* GlobalConst */].HEROAPI_ENDPOINT;
    }
    HeroService.prototype.getHeroes = function () {
        /* return this.http.post<Hero[]>(this.heroesUrl,{})
          .pipe(
            map(response => <Hero[]>response["rtnList"]),
            tap(response=> this.log(response)),
            catchError(this.handleError('getHeroes', []))
        );*/
        //console.log(this.apirequestService.post('/hero/getList',{}));
        return this.apirequestService.request('/hero/getList', {})
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["b" /* map */])(function (response) { return (JSON.parse(response["_body"]).rtnList); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (response) { return console.log(response); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('getHeroes', [])));
    };
    HeroService.prototype.updateHero = function (hero) {
        var _this = this;
        /*return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
          tap(_ => this.log(`updated hero id=${hero.id}`)),
          catchError(this.handleError<any>('updateHero'))
        );*/
        return this.apirequestService.request('/hero/reg', hero)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (hero) { return _this.log("added hero w/ id=" + hero.id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('updateHero')));
    };
    /** GET hero by id. Return `undefined` when id not found */
    HeroService.prototype.getHeroNo404 = function (id) {
        var _this = this;
        var url = this.heroesUrl + "/?id=" + id;
        return this.http.get(url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["b" /* map */])(function (heroes) { return heroes[0]; }), // returns a {0|1} element array
        Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " hero id=" + id);
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError("getHero id=" + id)));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HeroService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    /*getHeroes(): Hero[] {
      return HEROES;
    }*/
    HeroService.prototype.getHero = function (id) {
        var _this = this;
        // Todo: send the message _after_ fetching the hero
        //this.messageService.add(`HeroService: fetched hero id=${id}`);
        //return of(HEROES.filter(hero => hero.id === id));
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("fetched hero id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError("getHero id=" + id)));
    };
    /** DELETE: delete the hero from the server */
    HeroService.prototype.deleteHero = function (hero) {
        var _this = this;
        var id = typeof hero === 'number' ? hero : hero.id;
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("deleted hero id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('deleteHero')));
    };
    /* GET heroes whose name contains search term */
    HeroService.prototype.searchHeroes = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])([]);
        }
        return this.http.get("api/heroes/?name=" + term).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("found heroes matching \"" + term + "\""); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('searchHeroes', [])));
    };
    /** Log a HeroService message with the MessageService */
    HeroService.prototype.log = function (message) {
        this.messageService.add('HeroService: ' + message);
    };
    HeroService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])() // 인젝터블이 먼가요? 서비스에서 사용하는 데코레이터로 컴포넌트단에서는 VIEW 와 관련된부분을 담당하고 서비스에서는 비지니스 로직을 구현하는 형태이다.
        // 인텍터블을 통해 해당 서비스를 컴포넌트에서 호출만하여 사용가능하도록 한다.
        // 사용하고자 하는 컴포넌트에서는 생성자에서 DI 형태로 주입받아 사용가능.
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__services_apiRequest_service__["a" /* ApiRequestService */],
            __WEBPACK_IMPORTED_MODULE_3__message_service__["a" /* MessageService */]])
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "../../../../../src/app/heroes/hero.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hero; });
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());



/***/ }),

/***/ "../../../../../src/app/heroes/heroes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\n  background-color: #CFD8DC !important;\n  background-color: rgb(0,120,215) !important;\n  color: white;\n}\n.heroes {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .5em;\n // height: 1.6em;\n  border-radius: 4px;\n}\n.heroes li:hover {\n  color: #607D8B;\n  color: rgb(0,120,215);\n  background-color: #DDD;\n  left: .1em;\n}\n.heroes li.selected:hover {\n  /*background-color: #BBD8DC !important;*/\n  color: white;\n}\n.heroes .text {\n  position: relative;\n  top: -3px;\n}\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.4em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  background-color: rgb(0,120,215);\n  line-height: 1em;\n  //position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n  vertical-align: middle;\n}\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  //padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\n.error {color:red;}\nbutton.delete-button{\n  float:right;\n  background-color: gray !important;\n  background-color: rgb(216,59,1) !important;\n  color:white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/heroes/heroes.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>My Heroes</h2>\n<ul class=\"heroes\">\n  <li *ngFor=\"let hero of heroes\"\n      [class.selected]=\"hero === selectedHero\"\n      (click)=\"onSelect(hero)\">\n    <!--<a routerLink=\"/detail/{{hero.id}}\">-->\n      <span class=\"badge\" >{{hero.id}}</span> {{hero.name}}\n    <!--</a>-->\n    <button class=\"delete-button\" title=\"delete hero\"\n            (click)=\"delete(hero)\">x</button>\n  </li>\n</ul>\n\n<!--<div class=\"error\" *ngIf=\"error\">{{error}}</div>-->\n<button (click)=\"addHero()\">Add New Hero</button>\n\n<!--<button (click)=\"getHeros($event)\">Request api getHero</button>-->\n\n\n\n<div *ngIf=\"addingHero\">\n  <app-hero-detail (close)=\"close($event)\"></app-hero-detail>\n</div>\n\n\n<div *ngIf=\"selectedHero\">\n  <h2>\n    {{selectedHero.name | uppercase}} is my hero\n  </h2>\n  <button (click)=\"gotoDetail()\">View Details</button>\n</div>\n\n\n<app-hero-detail [hero]=\"selectedHero\"></app-hero-detail>\n{{message}}\n"

/***/ }),

/***/ "../../../../../src/app/heroes/heroes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero__ = __webpack_require__("../../../../../src/app/heroes/hero.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hero_service__ = __webpack_require__("../../../../../src/app/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeroesComponent = (function () {
    function HeroesComponent(router, heroService) {
        var _this = this;
        this.router = router;
        this.heroService = heroService;
        this.addingHero = false;
        this.herosObserver = {
            next: function (heroes) { return (_this.heroes = heroes); },
            error: function (error) { return (console.log(error)); },
            complete: function () { return (console.log('complete')); }
        };
        this.otherObserver = {
            next: function (heroes) { return (_this.selectedHero = heroes[0]); },
            error: function (error) { return (console.log(error)); },
            complete: function () { return (console.log('complete')); }
        };
    } // 컴포넌트초기화시 서비스를 생성자로 받는다.
    /*ngAfterViewInit() {
      console.log(this.child+"1234");
      this.message = this.child.message;
    }*/
    /*selectedHero: Hero;*/
    HeroesComponent.prototype.onSelect = function (hero) {
        hero.editable = false;
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.addHero = function () {
        var newHero = new __WEBPACK_IMPORTED_MODULE_1__hero__["a" /* Hero */]();
        newHero.editable = true;
        var heroStr = JSON.stringify(newHero);
        this.router.navigate(['addnew', heroStr]);
        //this.addingHero = true;
        //this.selectedHero = null;
    };
    /*
      getHeroes(): void {
        this.heroService.getHeroes()
          .subscribe(heroes => this.heroes = heroes);
      }*/
    HeroesComponent.prototype.save = function () {
        /*this.heroService.updateHero(this.hero)
          .subscribe(() => this.goBack());*/
    };
    HeroesComponent.prototype.add = function (name) {
        /* name = name.trim();
         if (!name) { return; }
         this.heroService.addHero({ name } as Hero)
           .subscribe(hero => {
             this.heroes.push(hero);
           });*/
    };
    HeroesComponent.prototype.delete = function (hero) {
        /*  this.heroes = this.heroes.filter(h => h !== hero);
          this.heroService.deleteHero(hero).subscribe();*/
    };
    HeroesComponent.prototype.gotoDetail = function () {
        //this.router.navigate(['/detail', this.selectedHero.id]);
        this.selectedHero.editable = false;
        var heroStr = JSON.stringify(this.selectedHero);
        this.router.navigate(['/detail', heroStr]);
    };
    HeroesComponent.prototype.ngOnInit = function () {
        //this.heroes = HEROES;
        this.getHerosOble = this.heroService.getHeroes();
        this.getHerosOble.subscribe(this.herosObserver);
        this.getHerosOble.subscribe(this.otherObserver);
    };
    HeroesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-heroes',
            template: __webpack_require__("../../../../../src/app/heroes/heroes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/heroes/heroes.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__hero_service__["a" /* HeroService */]])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h1>Hi {{currentUser.firstName}}!</h1>\n    <p>You're logged in with Angular 2!!</p>\n    <h3>All registered users:</h3>\n    <ul>\n        <li *ngFor=\"let user of users\">\n            {{user.username}} ({{user.firstName}} {{user.lastName}})\n            - <a (click)=\"deleteUser(user.id)\">Delete</a>\n        </li>\n    </ul>\n    <p><a [routerLink]=\"['/login']\">Logout</a></p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

//import { UserService } from '../_services/index';
var HomeComponent = (function () {
    function HomeComponent() {
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.loadAllUsers();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/item/item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/item/item.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <button (click)=\"toggle()\">{{item.title}}</button>\n  <p *ngIf=\"item.isVisible\">\n    {{item.description}}\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/item/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item__ = __webpack_require__("../../../../../src/app/item/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_service__ = __webpack_require__("../../../../../src/app/item/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemComponent = (function () {
    function ItemComponent(itemService) {
        this.itemService = itemService;
    }
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemSubscription = this.itemService.$visible.subscribe(function (item) {
            _this.item.isVisible = item.title === _this.item.title;
        });
    };
    ItemComponent.prototype.ngOnDestroy = function () {
        if (this.itemSubscription) {
            this.itemSubscription.unsubscribe();
        }
    };
    ItemComponent.prototype.toggle = function () {
        /*console.log(this.hs);
        this.hs.testprint();
        this.os.testprint();
        */ this.itemService.$visible.next(this.item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__item__["a" /* Item */])
    ], ItemComponent.prototype, "item", void 0);
    ItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-item',
            template: __webpack_require__("../../../../../src/app/item/item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/item/item.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__item_service__["a" /* ItemService */]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/item/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by jcompia on 2017-11-29.
 */


var ItemService = (function () {
    function ItemService() {
        this.$visible = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    ItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "../../../../../src/app/item/item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item() {
    }
    return Item;
}());



/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Accordion</h1>\n<app-item *ngFor=\"let item of list\" [item]=\"item\"></app-item>\n\n<div class=\"row\">\n\n  <div class=\"col-lg-4 or-col-lg-4 col-md-6 mb-4 \">\n    <div class=\"card  card-cascade wider\" >\n      <div class=\"card-body\">\n\n        <div class=\"content-flex\" >\n\n          <div class=\"video-control\">\n            observerbleCreate 기역없음..\n            <i class=\"glyphicon glyphicon-play\" (click)=\"observerbleCreateTest()\"></i>\n\n          </div>\n\n          <div class=\"video-control\">\n            observerbleInterval\n              <i class=\"glyphicon glyphicon-play\" (click)=\"observerbleIntercalTest()\"></i>\n              <i class=\"glyphicon glyphicon-stop\" (click)=\"observerbleIntercalTestStop()\"></i>\n          </div>\n\n          <div class=\"video-control\">\n            observerble subsriber Add\n            <i class=\"glyphicon glyphicon-play\" (click)=\"observeTest()\"></i>\n            <i class=\"glyphicon glyphicon-stop\" (click)=\"stopAllsubscribe()\"></i>\n            <i class=\"glyphicon glyphicon-plus\" (click)=\"addSubscribe()\"></i>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n<input type=\"text\" (keyup)=\"observerbleOnKeyUp($event)\" />\n\n<button (click)=\"changeValStatus()\">observerTestchangeValStatus</button>\n<button (click)=\"observerbleReduce()\">Obserable Test observerbleReduce</button>\n<button (click)=\"observerbleScan()\">Obserable Test observerbleScan</button>\n\n\n{{re}}\n\n\n"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//class HostService {}
var ListComponent = (function () {
    function ListComponent() {
        this.createEventObservable = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"]
            .create(
        //this.obsableTest_buttonEventTarget.onClick(
        function (obs) {
            obs.next('create auto sumVaule');
        }
        //)
        );
        /*.subscribe(
          this.btn_clickObserver
        );*/
        this.form_EventObservable = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"]
            .fromEvent(this.obsableTest_buttonEventTarget, 'click'); // 지정된 타겟 이벤트에 클릭이 발생되었다면 ?
        this.btn_ReduauceEventObserable = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"] //.fromEvent(event.target, 'click') // 지정된 타겟 이벤트에 클릭이 발생되었다면 ?
            .of(1, 2, 3, 4, 5)
            .reduce(function (total, current) { return total + current; }, 0);
        /*.subscribe(
          //(event)=>(console.log('keyboard'))
          this.btn_clickObserver
        );*/
        this.btn_ScanEventObserable = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"] //.fromEvent(event.target, 'click') // 지정된 타겟 이벤트에 클릭이 발생되었다면 ?
            .of(1, 2, 3, 4, 5)
            .scan(function (total, current) { return total + current; }, 0);
        /*.subscribe(
          //(event)=>(console.log('keyboard'))
          this.btn_clickObserver
        );*/
        this.btn_clickObserver = {
            next: function (value) { return ("im btn logger" + console.log(value)); },
            error: function (error) { return (console.log(error)); },
            complete: function () { return (console.log('complete')); }
        };
        this.logObserver = {
            next: function (value) { return (console.log(value)); },
            error: function (error) { return (console.log(error)); },
            complete: function () { return (console.log('complete')); }
        };
        this.list = [
            {
                title: 'Item 1',
                description: 'Description 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                isVisible: false
            },
            {
                title: 'Item 2',
                description: 'Description 2, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                isVisible: false
            },
            {
                title: 'Item 3',
                description: 'Description 3, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                isVisible: false
            }
        ];
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"](); // Obsable 가능한 서브젝트 생성
        this._ex1 = 0;
        this.ex1Re = 0;
        // ex2 ( RxJS )
        this.ex2St = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](0);
        this.ex2Re = 0;
    }
    ListComponent.prototype.ngOnInit = function () {
        console.log(this.list.length);
    };
    Object.defineProperty(ListComponent.prototype, "ex1", {
        get: function () { return this._ex1; },
        set: function (val) { this._ex1 = val; this.ex1Re = val * 10; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListComponent.prototype, "ex2", {
        get: function () { return this.ex2St.value; },
        set: function (val) { this.ex2St.next(val); },
        enumerable: true,
        configurable: true
    });
    ListComponent.prototype.ObsavleTest = function (event) {
        // 2 클릭이벤트에서 옵저버의 next 를 강제로 실행.
        this.btn_clickObserver.next("sumValue");
        if (this.obsableTest_buttonEventTarget == null) {
            console.log("first click and add click event lisener");
            this.obsableTest_buttonEventTarget = event.target; //타겟을 지정해준다. 여기까진 돔에 접근하여 타겟 이벤트를 받아 오기 싫어서 엥귤러에서 버튼 클릭시 이벤트를 넘기게 하였다. 그리고 클릭시 타겟만 지정한다.
            // 타겟에 대한 이벤트 설정은 바로 위에 정의되어있다.
            // 1 옵저버블은 폼이벤트 데이터를 제공한다. 제공된 데이터를 subscribe 에 구독자를 묶는다.
            // 3 옵저저블이 데이터를 제공할때 옵저버의 정의된 넥스트를 수행시킨다.
            this.form_EventObservable.subscribe(
            //(event)=>(console.log('btn clicked'))
            this.btn_clickObserver);
        }
    };
    ListComponent.prototype.observerbleOnKeyUp = function (event) {
        if (this.txt_OnKeyUpObserable == null) {
            this.txt_OnKeyUpObserable = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromEvent(event.target, 'keyup') // 지정된 타겟 이벤트에 클릭이 발생되었다면 ?
                .pluck('targt', 'value')
                .debounceTime(500)
                .distinctUntilChanged()
                .subscribe(
            //(event)=>(console.log('keyboard'))
            this.btn_clickObserver);
        }
    };
    ListComponent.prototype.observerbleReduce = function () {
        this.btn_ReduauceEventObserable
            .subscribe(
        //(event)=>(console.log('keyboard'))
        this.btn_clickObserver);
    };
    ListComponent.prototype.observerbleScan = function () {
        this.btn_ScanEventObserable.subscribe(
        //(event)=>(console.log('keyboard'))
        this.btn_clickObserver);
    };
    // 2 옵저블에 크레이트로 데이터 발생시 옵저버의 next 가 수행된다.
    ListComponent.prototype.observerbleCreateTest = function () {
        this.createEventObservable.subscribe(this.btn_clickObserver);
    };
    // 2 옵저블에 인터벌로 데이터 발생시 옵저버의 next 가 수행된다.
    ListComponent.prototype.observerbleIntercalTest = function () {
        // 구독을 취소 시키기 위해 변수를 갱신해야 한다.
        this.intervvalEventObservable =
            __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"]
                .interval(1000 // 1초마다 수행되고
            )
                .map(function (value) {
                return value * 2; // 두배로 가공하여
            })
                .throttleTime(2000) // 2초에 한번 구독시킨다
                .filter(function (value) {
                console.log(value);
                return value % 3 == 0; // 필터로 3으로 나눈 나머지가 0일때 만 베터 낸다
            }).subscribe(this.btn_clickObserver);
    };
    ListComponent.prototype.observerbleIntercalTestStop = function () {
        this.intervvalEventObservable.unsubscribe();
        //this.intervvalEventObservable = null;
        //this.btn_clickObserver;
    };
    ListComponent.prototype.addSubscribe = function () {
        this.subject
            .subscribe(this.btn_clickObserver);
    };
    ListComponent.prototype.observeTest = function () {
        var _this = this;
        this.addSubscribe();
        setInterval(function () { return _this.subject.next((new Date).getSeconds()); }, 1000); // 데이터 스트림을 생산시킨다. 1초마다 옵저버블의 next 메소드를 통해
    };
    ListComponent.prototype.stopAllsubscribe = function () {
        this.subject.unsubscribe(); // 중지이후 인터벌로 next 가 호출됨으로 빈 Subject 를 다시 생성해주는데 그 초기화 방법을 몰라서...
        //this.subject.complete();
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    };
    ListComponent.prototype.changeValStatus = function () {
        var _this = this;
        // ex1
        console.log('----- ex1 start -----');
        this.ex1 = 1;
        console.log(this.ex1, this.ex1Re);
        this.ex1 = 2;
        console.log(this.ex1, this.ex1Re);
        // ex2
        console.log('----- ex2 start-----');
        this.ex2St
            .do(function (_) { return _this.ex2Re = _ * 10; })
            .subscribe(function (d) { return console.log(d, _this.ex2, _this.ex2Re); }); // 구독기능을 중복적으로 추가  가능하다??
        //.subscribe(d => console.log("###"+d, this.ex2, this.ex2Re))// 구독기능을 중복적으로 추가  가능하다?? 오류난다
        this.ex2St
            .subscribe(function (d) { return console.log("##############" + d, _this.ex2, _this.ex2Re); }); // 구독이후 다른기능을 만들면?
        this.ex2 = 1; // 셋터 함수에서 값으로 넥스트 해주고 로그 찍는다.
        this.ex2 = 2; // 셋터 함수에서 값으로 넥스트 해주고 로그 찍는다.
        this.ex2 = 0; // 셋터 함수에서 값으로 넥스트 해주고 로그 찍는다.
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Login</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\"  name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_apiRequest_service__ = __webpack_require__("../../../../../src/app/_services/apiRequest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globalconst__ = __webpack_require__("../../../../../src/app/globalconst.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jaspero_ng2_confirmations__ = __webpack_require__("../../../../@jaspero/ng2-confirmations/ng2-confirmations.es5.js");
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
    function LoginComponent(route, router, apirequestService, authenticationService, _confirmation, messageService) {
        this.route = route;
        this.router = router;
        this.apirequestService = apirequestService;
        this.authenticationService = authenticationService;
        this._confirmation = _confirmation;
        this.messageService = messageService;
        this.model = {};
        this.loading = false;
        apirequestService.setbaseApiPath = __WEBPACK_IMPORTED_MODULE_5__globalconst__["a" /* GlobalConst */].NODE_ENDPOINT;
        //apirequestService.setbaseApiPath = GlobalConst.HEROAPI_ENDPOINT;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // reset login status
        console.log(localStorage.getItem("currentUser"));
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        if (localStorage.getItem("currentUser") != null) {
            this._confirmation.create('LogOut?', 'You should really LogOut and Login ')
                .subscribe(function (ans) {
                console.log(ans.resolved);
                if (ans.resolved) {
                    _this.authenticationService.logout();
                    // get return url from route parameters or default to '/'
                }
                else {
                    _this.router.navigate(["/"]);
                }
            });
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.messageService.add(error);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_apiRequest_service__["a" /* ApiRequestService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_6__jaspero_ng2_confirmations__["a" /* ConfirmationService */],
            __WEBPACK_IMPORTED_MODULE_3__message_service__["a" /* MessageService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages.length = 0;
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* MessagesComponent's private CSS styles */\nh2 {\n  color: red;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\nbody {\n  margin: 2em;\n}\nbody, input[text], button {\n  color: crimson;\n  font-family: Cambria, Georgia;\n}\n\nbutton.clear {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\nbutton.clear {\n  color: #888;\n  margin-bottom: 12px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n  <h2>Messages</h2>\n  <button class=\"clear\"\n          (click)=\"messageService.clear()\">clear</button>\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mock-heroes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HEROES; });
var HEROES = [
    { id: 11, name: 'Mr. Nice', editable: true },
    { id: 12, name: 'Narco', editable: true },
    { id: 13, name: 'Bombasto', editable: true },
    { id: 14, name: 'Celeritas', editable: true },
    { id: 15, name: 'Magneta', editable: true },
    { id: 16, name: 'RubberMan', editable: true },
    { id: 17, name: 'Dynama', editable: true },
    { id: 18, name: 'Dr IQ', editable: true },
    { id: 19, name: 'Magma', editable: true },
    { id: 20, name: 'Tornado', editable: true }
];


/***/ }),

/***/ "../../../../../src/app/pipe/limit-to.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LimitToPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LimitToPipe = (function () {
    function LimitToPipe() {
    }
    LimitToPipe.prototype.transform = function (value, args) {
        var limit = args ? parseInt(args, 10) : 10;
        var trail = '....';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    LimitToPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'limitTo'
        })
    ], LimitToPipe);
    return LimitToPipe;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Register</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"firstName\">First Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"lastName\">Last Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/register/register.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/runstate/runstate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/runstate/runstate.component.html":
/***/ (function(module, exports) {

module.exports = "<mwl-gauge\n  [max]=clearStepVal\n  [dialStartAngle]=\"-90\"\n  [dialEndAngle]=\"-90.001\"\n  [value]=currentModVal\n  [animated]=\"true\"\n  [animationDuration]=\"1\"\n>\n</mwl-gauge>\n"

/***/ }),

/***/ "../../../../../src/app/runstate/runstate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunstateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RunstateComponent = (function () {
    function RunstateComponent(db) {
        this.db = db;
        this.currentStepVal = 0;
        this.clearStepVal = 100;
        this.currentModVal = 0;
        this.index = 0;
    }
    RunstateComponent.prototype.ngOnInit = function () {
        this.getChatDataLoad();
    };
    RunstateComponent.prototype.getChatDataLoad = function () {
        var _this = this;
        this.s = this.db.list('/bleLog').subscribe(function (data) {
            _this.index++;
            console.log();
            _this.currentStepVal = data[data.length - 1].value; //this.index;
            _this.currentModVal = Number(_this.currentStepVal % _this.clearStepVal);
        });
    };
    RunstateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-runstate',
            template: __webpack_require__("../../../../../src/app/runstate/runstate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/runstate/runstate.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], RunstateComponent);
    return RunstateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/smart-playlist/smart-playlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n}\n\nul li {\n    padding: 10px;\n    cursor: pointer;\n}\n\nul li.selected {\n    background-color: #dddddd;\n}\n\nul li:hover {\n    background-color: #cce6ee;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/smart-playlist/smart-playlist.component.html":
/***/ (function(module, exports) {

module.exports = "\n<vg-player (onPlayerReady)=\"onPlayerReady($event)\">\n  <vg-controls>\n    <vg-play-pause></vg-play-pause>\n    <vg-playback-button></vg-playback-button>\n\n    <vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\n\n    <vg-scrub-bar>\n      <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n      <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n    </vg-scrub-bar>\n\n    <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\n\n    <vg-mute></vg-mute>\n    <vg-volume></vg-volume>\n\n    <vg-fullscreen></vg-fullscreen>\n  </vg-controls>\n\n  <video #media [vgMedia]=\"media\" id=\"singleVideo\" preload=\"auto\" crossorigin>\n    <source src=\"http://static.videogular.com/assets/videos/videogular.mp4\" type=\"video/mp4\">\n  </video>\n</vg-player>\n<ul>\n    <li *ngFor=\"let item of playlist; let $index = index\"\n        (click)=\"onClickPlaylistItem(item, $index)\"\n        [class.selected]=\"item === currentItem\">\n        {{ item.title }}\n    </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/smart-playlist/smart-playlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartPlaylistComponent; });
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

var SmartPlaylistComponent = (function () {
    function SmartPlaylistComponent() {
        this.playlist = [
            {
                title: 'Elephants Dream',
                src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
                type: 'video/mp4'
            }
        ];
        this.currentIndex = 0;
        this.currentItem = this.playlist[this.currentIndex];
    }
    SmartPlaylistComponent.prototype.onPlayerReady = function (api) {
        this.api = api;
        this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
        this.api.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
    };
    SmartPlaylistComponent.prototype.nextVideo = function () {
        this.currentIndex++;
        if (this.currentIndex === this.playlist.length) {
            this.currentIndex = 0;
        }
        this.currentItem = this.playlist[this.currentIndex];
    };
    SmartPlaylistComponent.prototype.playVideo = function () {
        this.api.play();
    };
    SmartPlaylistComponent.prototype.onClickPlaylistItem = function (item, index) {
        this.currentIndex = index;
        this.currentItem = item;
    };
    SmartPlaylistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-smart-playlist',
            template: __webpack_require__("../../../../../src/app/smart-playlist/smart-playlist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/smart-playlist/smart-playlist.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SmartPlaylistComponent);
    return SmartPlaylistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n  html, body {\n    position: relative;\n    height: 100%;\n  }\n  body {\n    background: #eee;\n    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    color:#000;\n    margin: 0;\n    padding: 0;\n  }\n  .swiper-container {\n    width: 100%;\n    height: 90%;\n  }\n  .swiper-slide {\n    text-align: center;\n    font-size: 18px;\n    background: #fff;\n    /* Center slide text vertically */\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    -webkit-justify-content: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    -webkit-align-items: center;\n    align-items: center;\n  }\n</style>\n"

/***/ }),

/***/ "../../../../../src/app/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_service__ = __webpack_require__("../../../../../src/app/todo/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoComponent = (function () {
    function TodoComponent(todoService) {
        this.todoService = todoService;
    }
    TodoComponent.prototype.ngOnInit = function () {
        this.todos = this.todoService.todos;
        this.singleTodo$ = this.todoService.todos.pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["b" /* map */])(function (todos) { return todos.find(function (item) { return item.id === '1'; }); }));
        this.todoService.loadAll();
        //this.todoService.load('1');
    };
    TodoComponent.prototype.create = function () {
        var todo = {};
        this.todoService.create(todo);
    };
    TodoComponent.prototype.deleteTodo = function (todoId) {
        this.todoService.remove(todoId);
    };
    TodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'todo-component',
            template: __webpack_require__("../../../../../src/app/todo/todo.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__todo_service__["a" /* TodoService */]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/todo/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        this.baseUrl = 'https://56e05c3213da80110013eba3.mockapi.io/api';
        this.dataStore = { todos: [] }; // 데이터 스토어에는 관제 가능한 투두 목록이 있다.
        this._todos = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]); // next 로 값을 변경할수 있는 비해비어 서브젝트
        this.todos = this._todos.asObservable(); //데이터 스토어의 스트림은 별도 변수에 전달 된다.
    }
    TodoService.prototype.loadAll = function () {
        var _this = this;
        this.http.get(this.baseUrl + "/todos").subscribe(function (data) {
            _this.dataStore.todos = data; // 결과 값은 데이터 소스에 담는다.
            _this._todos.next(Object.assign({}, _this.dataStore).todos); // 데이터 소스를 복제하여 별도 투두목에 담아서 비해베어 서브젝트에 넥스트 시킨다.
        }, function (error) { return console.log('Could not load todos.'); });
    };
    TodoService.prototype.load = function (id) {
        var _this = this;
        this.http.get(this.baseUrl + "/todos/" + id).subscribe(function (data) {
            var notFound = true;
            var todo = data;
            _this.dataStore.todos.forEach(function (item, index) {
                if (item.id === todo.id) {
                    _this.dataStore.todos[index] = data;
                    notFound = false;
                }
            });
            if (notFound) {
                _this.dataStore.todos.push(data);
            }
            _this._todos.next(Object.assign({}, _this.dataStore).todos);
        }, function (error) { return console.log('Could not load todo.'); });
    };
    TodoService.prototype.create = function (todo) {
        var _this = this;
        this.http.post(this.baseUrl + "/todos", JSON.stringify(todo)).subscribe(function (data) {
            _this.dataStore.todos.push(data);
            _this._todos.next(Object.assign({}, _this.dataStore).todos);
        }, function (error) { return console.log('Could not create todo.'); });
    };
    TodoService.prototype.update = function (todo) {
        var _this = this;
        this.http.put(this.baseUrl + "/todos/" + todo.id, JSON.stringify(todo)).subscribe(function (data) {
            _this.dataStore.todos.forEach(function (t, i) {
                var todo = data;
                if (t.id === todo.id) {
                    _this.dataStore.todos[i] = data;
                }
            });
            _this._todos.next(Object.assign({}, _this.dataStore).todos);
        }, function (error) { return console.log('Could not update todo.'); });
    };
    TodoService.prototype.remove = function (todoId) {
        var _this = this;
        this.http.delete(this.baseUrl + "/todos/" + todoId).subscribe(function (response) {
            _this.dataStore.todos.forEach(function (t, i) {
                if (t.id === todoId) {
                    _this.dataStore.todos.splice(i, 1);
                }
            });
            _this._todos.next(Object.assign({}, _this.dataStore).todos);
        }, function (error) { return console.log('Could not delete todo.'); });
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "../../../../../src/app/utbattach/utbattach.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table > tbody>tr>td {\n\n  padding: 4px;\n  line-height: 1.42857143;\n  vertical-align: middle;\n  border-top: 1px solid #ddd;\n  text-shadow: 0 0 black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utbattach/utbattach.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      <table class=\"table\">\n        <thead>\n        <tr>\n          <th width=\"70%\">Youtube Url</th>\n          <th>Size</th>\n          <th>Progress</th>\n          <th>Actions</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let item of uploader.queue\">\n          <td>\n          <input type=\"text\" class=\"\"  style=\"width: 100%;\" [(ngModel)]=\"item.utburl\"  name=\"firstName\" />\n\n          </td>\n          <td nowrap>{{ item.size/1024/1024 | number:'.2' }} MB</td>\n          <td>\n            <div class=\"progress\" style=\"margin-bottom: 0;\">\n              <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n            </div>\n          </td>\n          <!--<td class=\"text-center\">\n            <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n            <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n            <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n          </td>-->\n          <td nowrap>\n            <button type=\"button\" class=\"btn btn-success btn-xs\"\n                    (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n              <span class=\"glyphicon glyphicon-upload\"></span>\n            </button>\n\n            <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                    (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n              <span class=\"glyphicon glyphicon-stop\"></span>\n            </button>\n\n\n            <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                    (click)=\"item.remove()\">\n              <span class=\"glyphicon glyphicon-trash\"></span>\n            </button>\n          </td>\n        </tr>\n        </tbody>\n\n      </table>\n      <div>\n        Queue progress:\n        <div class=\"progress\" style=\"\">\n          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n        </div>\n      </div>\n\n      <div>\n        <button type=\"button\" class=\"btn btn-primary btn-xs\"\n                (click)=\"uploader.uploadAdd()\" >\n          <span class=\"glyphicon glyphicon-plus\"></span> Add (+ {{ uploader?.queue?.length }})\n        </button>\n        <button type=\"button\" class=\"btn btn-success btn-xs\"\n                (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n          <span class=\"glyphicon glyphicon-upload\"></span> Upload\n        </button>\n        <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n          <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n        </button>\n        <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n          <span class=\"glyphicon glyphicon-trash\"></span> Remove\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/utbattach/utbattach.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtbattachComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_apiRequest_service__ = __webpack_require__("../../../../../src/app/_services/apiRequest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globalconst__ = __webpack_require__("../../../../../src/app/globalconst.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UrlItem = (function () {
    function UrlItem() {
        var _this = this;
        this.progress = "0";
        this.name = "";
        this.utburl = "";
        this.size = 0;
        this.urluploadObserver = {
            next: function (datas) {
                console.log(datas._body);
                var file_id = JSON.parse(datas._body)._id;
                _this.getMsgs(file_id).subscribe(function (percentage) {
                    console.log(percentage);
                    _this.progress = percentage.toString();
                });
            },
            error: function (error) { return (console.log(error)); },
            complete: function () { return (console.log('complete')); }
        };
        this.createFileIdObserver = {
            next: function (datas) {
                console.log(datas._body);
                var file_id = JSON.parse(datas._body)._id;
                _this.getMsgs(file_id).subscribe(function (percentage) {
                    console.log(percentage);
                    _this.progress = percentage.toString();
                });
                _this.apirequestService.request('/utbupload', { utburl: _this.utburl, file_id: file_id }).subscribe(_this.urluploadObserver);
            },
            error: function (error) { return (console.log(error)); },
            complete: function () { return (console.log('complete')); }
        };
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__globalconst__["a" /* GlobalConst */].NODE_ENDPOINT;
    }
    UrlItem.prototype.getMsgs = function (file_id) {
        var obsable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            var socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__(__WEBPACK_IMPORTED_MODULE_3__globalconst__["a" /* GlobalConst */].NODE_ENDPOINT);
            socket.on('new-prog-msg' + file_id, function (data) {
                observer.next(data);
            });
            return function () {
                socket.disconnect();
            };
        });
        return obsable;
    };
    /*
    sendMsg(msg) {
      this.socket.emit('add-msg', msg);
      console.log("msg SENT");
    }*/
    UrlItem.prototype.upload = function () {
        this.apirequestService.request('/utbupload', { utburl: this.utburl }).subscribe(this.urluploadObserver);
        /*this.apirequestService.get('/createFileId').subscribe(
          this.createFileIdObserver
        );*/
    };
    return UrlItem;
}());
var UtbUrlUploader = (function () {
    function UtbUrlUploader() {
        this.queue = [];
    }
    UtbUrlUploader.prototype.uploadAdd = function () {
        var urlItem = new UrlItem();
        urlItem.apirequestService = this.apirequestService;
        console.log(urlItem);
        console.log(this.url);
        this.queue.push(urlItem);
    };
    ;
    UtbUrlUploader.prototype.getNotUploadedItems = function () {
        return this.queue;
    };
    ;
    UtbUrlUploader.prototype.uploadAll = function () {
        this.queue.forEach(function (item) {
            item.upload();
        });
    };
    UtbUrlUploader.prototype.cancelAll = function () {
    };
    UtbUrlUploader.prototype.clearQueue = function () {
    };
    return UtbUrlUploader;
}());
var UtbattachComponent = (function () {
    function UtbattachComponent(apirequestService) {
        this.apirequestService = apirequestService;
        apirequestService.setbaseApiPath = __WEBPACK_IMPORTED_MODULE_3__globalconst__["a" /* GlobalConst */].NODEAPI_ENDPOINT;
        this.uploader = new UtbUrlUploader();
        this.uploader.url = __WEBPACK_IMPORTED_MODULE_3__globalconst__["a" /* GlobalConst */].NODEAPI_ENDPOINT + "/utbupload";
        this.uploader.apirequestService = apirequestService;
    }
    ;
    UtbattachComponent.prototype.ngOnInit = function () {
    };
    UtbattachComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-utbattach',
            template: __webpack_require__("../../../../../src/app/utbattach/utbattach.component.html"),
            styles: [__webpack_require__("../../../../../src/app/utbattach/utbattach.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_apiRequest_service__["a" /* ApiRequestService */]])
    ], UtbattachComponent);
    return UtbattachComponent;
}());



/***/ }),

/***/ "../../../../../src/app/window.ref.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by yongbeom on 2018. 6. 2..
 */

function _window() {
    // return the native window obj
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], WindowRef);
    return WindowRef;
}());



/***/ }),

/***/ "../../../../../src/assets/js/importEnv.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getApiUrl; });
// module "my-module.js"
function getApiUrl() {
  return apiUrl;
}




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
    production: false,
    apiUrl: 'http://18.182.160.240:28000'
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map