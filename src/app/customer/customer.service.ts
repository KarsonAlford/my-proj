import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

@Injectable()
export class CustomerService {
    constructor(private _http: Http) { }

    getCustomers() {
        return this._http.get('app/customer/customers.json')
            .map((response: Response) => response.json());
    }
}