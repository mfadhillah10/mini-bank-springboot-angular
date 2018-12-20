import { Customer } from './../../customer/list/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from './account.service';
import { AccountFormComponent } from './../form/account-form.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Account } from './account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit, AfterViewInit {
  @ViewChild('formAccount')
  formAccount: AccountFormComponent;
  listAccount: Account[] = [];
  // tslint:disable-next-line:no-inferrable-types
  showDetail: boolean = false;
  selectedAccount: Account = new Account();

  constructor(private accountService: AccountService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  Tampil() {
    return this.showDetail = true;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const customer: String = params['customer'];
      this.loadData(customer);
    });
  }

  ngAfterViewInit(): void {

  }

  selectAccount(account: Account) {
    // tslint:disable-next-line:prefer-const
    let copyAccount = new Account();
    copyAccount.accountNumber = account.accountNumber;
    copyAccount.openDate = account.openDate;
    copyAccount.balance = account.balance;
    copyAccount.customer = account.customer;
    this.selectedAccount = copyAccount;
    this.showDetail = true;
    if (this.formAccount) {
      this.formAccount.update();
    }
  }

  loadData(customer?) {
    this.accountService.getList(customer).subscribe(response => {
      console.log(JSON.stringify(response));
      this.listAccount = [];
      Object.assign(this.listAccount, response);
    }, err => {
      alert('Error ' + JSON.stringify(err));
    });
  }

  prosesResult(result) {
    if (result) {
      this.showDetail = false;
      this.loadData();
    }
  }

  viewTransaction(account: Account) {
    this.router.navigate([
      '/transactionlist',
      {account: account.accountNumber}
    ]);
  }

  del(id) {
    this.accountService.del(id).subscribe((response) => {
      if (confirm('Delete this record?')) {
        location.reload();
        Object.assign(this.listAccount, response);
      }
    }, (err) => {
      alert('Error: ' + JSON.stringify(err));
    });
  }
}
