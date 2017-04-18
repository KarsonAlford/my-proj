import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {
    constructor() { }

    getCustomers() {
        return [
            { id: 1, name: 'David' },
            { id: 2, name: 'Dolph' },
            { id: 3, name: 'Canning' },
            { id: 4, name: 'Stewart' },
        ];
    }
}