import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerService } from './customer.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomerOperationsComponent } from './customer-operations/customer-operations.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: CustomersComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerOperationsComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
