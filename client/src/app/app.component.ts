import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CustomerService } from '../../src/app/customer.service'
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() recordDeleted = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  @Input() customerData: Array<any>;
  public currentCustomer: any;

  title = 'client';

  constructor(private customerService: CustomerService) {
    this.currentCustomer = this.setInitialValuesForCustomerData();
  }

  private setInitialValuesForCustomerData() {
    return {
      id: undefined,
      name: '',
      emailId: '',
      phoneNo: ''
    };
  }

  public createOrUpdateCustomer = function (customer: any) {
    let customerWithId;
    customerWithId = _.find(this.customerData, (el => el.id === customer.id));

    if (customerWithId) {
      const updateIndex = _.findIndex(this.customerData, { id: customerWithId.id });
      this.customerService.update(customer).subscribe(
        customerRecord => this.customerData.splice(updateIndex, 1, customer)
      );
    } else {
      this.customerService.add(customer).subscribe(
        customerRecord => this.customerData.push(customer)
      );
    }

    this.currentCustomer = this.setInitialValuesForCustomerData();
  };

  public deleteRecord(record) {
    this.recordDeleted.emit(record);
  }

  public editRecord(record) {
    const clonedRecord = Object.assign({}, record);
    this.editClicked.emit(clonedRecord);
  }

  public newRecord() {
    this.newClicked.emit();
  }
}
