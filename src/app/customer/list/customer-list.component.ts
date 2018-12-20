import { CustomerFormComponent } from './../form/customer-form.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, AfterViewInit {
  @ViewChild('formCustomer')
  formCustomer: CustomerFormComponent;
  listCustomer: Customer[] = [];
  // tslint:disable-next-line:no-inferrable-types
  showDetail: boolean = false;
  selectedCustomer: Customer = new Customer();

  constructor(private customerService: CustomerService, private router: Router) { }

  Tampil() {
    return this.showDetail = true;
  }

  ngOnInit() {
    this.loadData();
  }
  ngAfterViewInit(): void {

  }

  selectCustomer(customer: Customer) {
    // tslint:disable-next-line:prefer-const
    let copyCustomer = new Customer();
    copyCustomer.custnumber = customer.custnumber;
    copyCustomer.firstname = customer.firstname;
    copyCustomer.lastname = customer.lastname;
    copyCustomer.birthdate = customer.birthdate;
    copyCustomer.username = customer.username;
    copyCustomer.password = customer.password;
    copyCustomer.phonenumber = customer.phonenumber;
    copyCustomer.phonetype = customer.phonetype;
    this.selectedCustomer = copyCustomer;
    this.showDetail = true;
    if (this.formCustomer) {
      this.formCustomer.update();
    }
  }

  loadData() {
    this.customerService.getList().subscribe((response) => {
        console.log(JSON.stringify(response));
        Object.assign(this.listCustomer, response);
    }, (err) => {
      alert('Error: ' + JSON.stringify(err));
    });

  }

  prosesResult(result) {
    if (result) {
      this.showDetail = false;
      this.loadData();
    }
  }

  viewAccount(customer: Customer) {
    this.router.navigate([
      '/accountlist',
      {customer: customer.custnumber}
    ]);
  }

  deleteCons(custnumber) {
    if (confirm('Are you sure you want to delete this record?')) {
      this.customerService.delete(custnumber);
    }
  }
}
