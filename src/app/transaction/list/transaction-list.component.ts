import { ActivatedRoute, Router } from '@angular/router';
import { TransactionFormComponent } from './../form/transaction-form.component';
import { TransactionService } from './transaction.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Transaction } from './transaction';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit, AfterViewInit {
  @ViewChild('formTransaction')
  formTransaction: TransactionFormComponent;
  listTransaction: Transaction[] = [];
  // tslint:disable-next-line:no-inferrable-types
  showDetail: boolean = false;
  selectedTransaction: Transaction = new Transaction();

  constructor(private transactionService: TransactionService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  Tampil() {
    return this.showDetail = true;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const account: String = params['account'];
      this.loadData(account);
    });
  }
  ngAfterViewInit(): void {

  }

  selectTransaction(transaction: Transaction) {
    const copyTransaction = new Transaction();
    copyTransaction.id = transaction.id;
    copyTransaction.type = transaction.type;
    copyTransaction.amount = transaction.amount;
    copyTransaction.amountSign = transaction.amountSign;
    copyTransaction.account = transaction.account;
    this.selectedTransaction = copyTransaction;
    this.showDetail = true;
    if (this.formTransaction) {
      this.formTransaction.update();
    }
  }

  loadData(account?) {
    this.transactionService.getList(account).subscribe((response) => {
      console.log(JSON.stringify(response));
      this.listTransaction = [];
      Object.assign(this.listTransaction, response);
    }, (err) => {
      alert('Error ' + JSON.stringify(err));
    });
  }

  prosesResult(result) {
    if (result) {
      this.showDetail = false;
      this.loadData();
    }
  }

  del(id) {
    this.transactionService.del(id).subscribe((response) => {
      if (confirm('Delete this record?')) {
        location.reload();
        Object.assign(this.listTransaction, response);
      }
    }, (err) => {
      alert('Error ' + JSON.stringify(err));
    });
  }
}
