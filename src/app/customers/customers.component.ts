import { Component, OnInit } from '@angular/core';

import { CustomerService } from "../customer/customer.service"

@Component({
  moduleId: module.id,
  selector: 'app-customers',
  templateUrl: 'customers.component.html',
  providers: [CustomerService]
})

export class CustomersComponent implements OnInit { 
    customers: any[];

    constructor(private _customerService: CustomerService) {}

    ngOnInit() {
        // Observable to array
        this._customerService.getCustomers_RxObservable()
        .subscribe(
            // it worked
            (customers) => this.customers = customers,
            // failed
            (err) => { console.log(err); }
        );

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
    }
}