import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-operations',
  templateUrl: './customer-operations.component.html',
  styleUrls: ['./customer-operations.component.css']
})
export class CustomerOperationsComponent implements OnInit {

  @Output() customerCreated = new EventEmitter<any>();
  @Input() customer: any;

  constructor(private customerService: CustomerService) {
    this.clearCustomerInfo();
  }

  ngOnInit() {
    
  }

  private clearCustomerInfo = function () {
    // Create an empty customer object
    this.customer = {
      id: undefined,
      name: '',
      emailId: '',
      phoneNo: ''
    };
  };

  public addOrUpdateCustomerRecord = function (event) {
    this.customerCreated.emit(this.customer);
    this.clearCustomerInfo();
  };

}
