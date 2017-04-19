import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomersComponent } from "./customers/customers.component"
import { CustomerComponent } from "./customer/customer.component"

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule 
  ],
  declarations: [ 
    AppComponent,
    CustomersComponent,
    CustomerComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
}
