import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class CustomerService {
    constructor(private _http: Http) { }

    // This is Ward's preference
    getCustomers() {
        return this._http.get('\app/customer/customers.json')
            .map((response: Response) => response.json())
            .toPromise()
            .catch((err: any) => {
                console.log(err); // todo again, customize me please
                return Promise.reject(err);
            });
    }

    getCustomers_RxObservable() {
        return this._http.get('\app/customer/customers.json')
            .map((response: Response) => response.json())
            .catch(this._handleError);
    }

    _handleError(err: any) {
        console.log(err); // todo log this somewhere and format the message
        return Observable.throw(err); // our opportunity to customize the error
    }
}
