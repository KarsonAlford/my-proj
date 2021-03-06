"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var CustomerService = (function () {
    function CustomerService(_http) {
        this._http = _http;
    }
    // This is Ward's preference
    CustomerService.prototype.getCustomers = function () {
        return this._http.get('https://jsonplaceholder.typicode.com/users')
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(function (err) {
            console.log(err); // todo again, customize me please
            return Promise.reject(err);
        });
    };
    CustomerService.prototype.getCustomers_RxObservable = function () {
        return this._http.get('https://jsonplaceholder.typicode.com/users')
            .map(function (response) { return response.json(); })
            .catch(this._handleError);
    };
    CustomerService.prototype._handleError = function (err) {
        console.log(err); // todo log this somewhere and format the message
        return Rx_1.Observable.throw(err); // our opportunity to customize the error
    };
    return CustomerService;
}());
CustomerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map