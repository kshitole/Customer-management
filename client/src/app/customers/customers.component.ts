import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  @Output() recordDeleted = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  @Input() selectedCustomer: any;
  public customerData: any;

  constructor(private customerService: CustomerService) {
    customerService.get().subscribe((data: any) => this.customerData = data);
    console.log("customerData: " + this.customerData);
  }

  ngOnInit() {
  }

  public editRecord(record) {
    const clonedRecord = Object.assign({}, record);
    this.editClicked.emit(clonedRecord);
  }

  public deleteRecord(record) {
    this.recordDeleted.emit(record);
  }

}
