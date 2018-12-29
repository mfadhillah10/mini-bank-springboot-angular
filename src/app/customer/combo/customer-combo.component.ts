import { CustomerService } from './../list/customer.service';
import { Customer } from './../list/customer';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-combo',
  templateUrl: './customer-combo.component.html',
  styleUrls: ['./customer-combo.component.css']
})
export class CustomerComboComponent implements OnInit {


  listCustomer: Customer[] = [];

  @Output()
  customer = new EventEmitter<Customer>();

  @Input()
  selectedCustomer: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    console.log('init combo customer');
    this.loadData();
  }

  onChange(index) {
    console.log('Selected: ' + index ? JSON.stringify(index) : '');
    if (this.listCustomer && this.listCustomer.length > 0) {
      this.customer.emit(this.listCustomer[index]);
    }
  }

  loadData() {
    this.customerService.getList().subscribe(
      (response) => {
        console.log(JSON.stringify(response['values']));
        Object.assign(this.listCustomer, response['values']);
      }, (err) => {
        alert('Error ' + JSON.stringify(err));
      }
    );
  }
}
