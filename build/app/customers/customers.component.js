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
var customer_service_1 = require("../customer/customer.service");
var CustomersComponent = (function () {
    function CustomersComponent(_customerService) {
        this._customerService = _customerService;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Observable to array
        this._customerService.getCustomers_RxObservable()
            .subscribe(
        // it worked
        function (customers) { return _this.customers = customers; }, 
        // failed
        function (err) { console.log(err); });
        // This is Ward's preference
        // Straight up Promise to array
        // this._customerService.getCustomers()
        // .then((customers) => this.customers = customers)
        // .catch((err) => { 
        //     console.log(err); // don't do this, show the user a nice message
        // });
        // Promise version
        // customers: Promise<any[]>;
        // <li *ngFor="let c of customers | async">
        // this.customers = this._customerService.getCustomers()
        // .catch((err) => { 
        //     console.log(err); // don't do this, show the user a nice message
        // });
        // Rx Observable version
        // import { Observable } from 'rxjs/Rx';
        // customers: Observable<any[]>;        
        // <li *ngFor="let c of customers | async">
        // this.customers = this._customerService.getCustomers_RxObservable()
        // .catch((err) => { 
        //     console.log(err); // don't do this, show the user a nice message
        //     return Observable.of([true]); // now we eat it, but only if the message has been communicated to the user
        // });
    };
    return CustomersComponent;
}());
CustomersComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-customers',
        templateUrl: 'customers.component.html',
        providers: [customer_service_1.CustomerService]
    }),
    __metadata("design:paramtypes", [customer_service_1.CustomerService])
], CustomersComponent);
exports.CustomersComponent = CustomersComponent;
//# sourceMappingURL=customers.component.js.map