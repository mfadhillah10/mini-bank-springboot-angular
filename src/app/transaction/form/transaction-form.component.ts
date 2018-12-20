import { Account } from './../../account/list/account';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../list/transaction';
import { TransactionService } from '../list/transaction.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {

  @Input()
  transaction: Transaction;
  @Output()
  result = new EventEmitter();
  account: Object;
  trxFormGroup: FormGroup;

  constructor(private transactionService: TransactionService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.update();
  }

  createForm() {
    this.trxFormGroup = this.formBuilder.group({
      id: ['', Validators.required],
      type: ['', Validators.required],
      amount: ['', Validators.required],
      amountSign: ['', Validators.required],
      accountNumber: ['', Validators.required]
    });
    this.getAcc();
  }

  getAcc() {
    this.transactionService.getListAcc().subscribe((response) => {
      this.account = response;
      console.log(this.account);
    }, (err) => {
      console.log(err);
    });
  }

  update() {
    this.setDataForm(this.transaction);
  }

  setDataForm(transaction) {
    if (transaction) {
      this.trxFormGroup.controls['id'].setValue(this.transaction.id);
      this.trxFormGroup.controls['type'].setValue(this.transaction.type);
      this.trxFormGroup.controls['amount'].setValue(this.transaction.amount);
      this.trxFormGroup.controls['amountSign'].setValue(this.transaction.amountSign);
      // this.trxFormGroup.controls['account'].setValue(this.transaction.account.accountNumber);
    }
  }

  addTransaction() {
    const transaction = new Transaction();
    transaction.id = this.trxFormGroup.controls['id'].value;
    transaction.type = this.trxFormGroup.controls['type'].value;
    transaction.amount = this.trxFormGroup.controls['amount'].value;
    transaction.amountSign = this.trxFormGroup.controls['amountSign'].value;

    const account = new Account();
    account.accountNumber = this.trxFormGroup.controls['accountNumber'].value;
    transaction.account = account;
    console.log(transaction);
    this.transactionService.create(transaction).subscribe(
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
