import { Customer } from './../../customer/list/customer';
import { AccountService } from './../list/account.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Account } from './../list/account';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  @Input()
  account: Account;
  @Output()
  result = new EventEmitter();
  customer: Object;
  anForm: FormGroup;

  constructor(private accountService: AccountService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.update();
  }

  createForm() {
    this.anForm = this.formBuilder.group({
      accountNumber: ['', Validators.required],
      openDate: ['', Validators.required],
      balance: ['', Validators.required],
      custnumber: ['', Validators.required]
    });
    this.getCustomer();
  }

  getCustomer() {
    this.accountService.getListCus().subscribe((response) => {
      this.customer = response;
      console.log(this.customer);
    }, (err) => {
      console.log(err);
    });
  }

  update() {
    this.setDataForm(this.account);
  }

  setDataForm(account) {
    if (account) {
      this.anForm.controls['accountNumber'].setValue(this.account.accountNumber);
      this.anForm.controls['openDate'].setValue(this.account.openDate);
      this.anForm.controls['balance'].setValue(this.account.balance);
    }
  }

  addAccount() {
    const account = new Account();
    account.accountNumber = this.anForm.controls['accountNumber'].value;
    account.openDate = this.anForm.controls['openDate'].value;
    account.balance = this.anForm.controls['balance'].value;

    const customer = new Customer();
    customer.custnumber = this.anForm.controls['custnumber'].value;
    account.customer = customer;

    this.accountService.create(account).subscribe(
      (response) => {
        console.log(JSON.stringify(response));
        this.result.emit(true);
      }, (err) => {
        alert('Error ' + JSON.stringify(err));
      }
    );
  }

  cancel() {
    this.result.emit(true);
  }

}
