import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CustomerService } from "../customer/customer.service"

@Component({
  moduleId: module.id,
  selector: 'app-customers',
  templateUrl: 'customers.component.html',
  providers: [CustomerService]
})

export class CustomersComponent implements OnInit { 
    customers: Observable<any[]>;

    constructor(private _customerService: CustomerService) {}

    ngOnInit() {
        this.customers = this._customerService.getCustomers();
    }
}