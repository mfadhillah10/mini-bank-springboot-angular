import { CustomerService } from './../list/customer.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../list/customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  @Input()
  customer: Customer;
  @Output()
  result = new EventEmitter();

  customerFormGroup: FormGroup;

  constructor(private customerService: CustomerService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customerFormGroup = this.formBuilder.group({
      custnumber: [''],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthdate: ['', Validators.required],
      username: [''],
      password: [''],
      phonenumber: ['', Validators.required],
      phonetype: ['', Validators.required]
    });
    this.update();
  }

  update() {
    this.setDataForm(this.customer);
  }

  setDataForm(customer) {
    if (customer) {
      this.customerFormGroup.controls['custnumber'].setValue(this.customer.custnumber);
      this.customerFormGroup.controls['firstname'].setValue(this.customer.firstname);
      this.customerFormGroup.controls['lastname'].setValue(this.customer.lastname);
      this.customerFormGroup.controls['birthdate'].setValue(this.customer.birthdate);
      this.customerFormGroup.controls['username'].setValue(this.customer.username);
      this.customerFormGroup.controls['password'].setValue(this.customer.password);
      this.customerFormGroup.controls['phonenumber'].setValue(this.customer.phonenumber);
      this.customerFormGroup.controls['phonetype'].setValue(this.customer.phonetype);
    }
  }

  insertData() {
    this.customerService.create(this.customer).subscribe(
      (response) => {
        console.log(JSON.stringify(response));
        this.result.emit(true);
      }, (err) => {
        alert('Error: ' + JSON.stringify(err));
      }
    );
  }

  submitData() {
    // tslint:disable-next-line:prefer-const
    let customer: Customer = new Customer();
    customer.custnumber = this.customerFormGroup.controls['custnumber'].value;
    customer.firstname = this.customerFormGroup.controls['firstname'].value;
    customer.lastname = this.customerFormGroup.controls['lastname'].value;
    customer.birthdate = this.customerFormGroup.controls['birthdate'].value;
    customer.username = this.customerFormGroup.controls['username'].value;
    customer.password = this.customerFormGroup.controls['password'].value;
    customer.phonenumber = this.customerFormGroup.controls['phonenumber'].value;
    customer.phonetype = this.customerFormGroup.controls['phonetype'].value;

    this.customerService.create(customer).subscribe(
      (response) => {
        console.log(JSON.stringify(response));
        this.result.emit(true);
      }, (err) => {
        alert('Error: ' + JSON.stringify(err));
      }
    );
  }

  cancel() {
    this.result.emit(true);
  }
}
