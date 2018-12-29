import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

constructor(private http: HttpClient) { }

getList(account?) {
  let params: String = '';
  if (account) {
    params = '?accountNumber=' + account;
  }
  // return this.http.get('http://localhost:8080/trx/transactions' + params);
  return this.http.get('http://localhost:7000/api/transactions' + params);
}

getListAcc() {
  // return this.http.get('http://localhost:8080/acc/accounts');
  return this.http.get('http://localhost:7000/api/accounts');
}

getListCus() {
  // return this.http.get('http://localhost:8080/cust/customers');
  return this.http.get('http://localhost:7000/api/customers');
}

create(transaction: Transaction) {
  // return this.http.post('http://localhost:8080/trx/transaction', transaction);
  return this.http.post('http://localhost:7000/api/transaction', transaction);
}

update(transaction: Transaction) {
  // return this.http.put('http://localhost:8080/trx/transaction', transaction);
  return this.http.put('http://localhost:7000/api/transaction', transaction);
}

del(id) {
  // return this.http.delete('http://localhost:8080/trx/delete/' + id);
  return this.http.delete('http://localhost:7000/api/transaction/' + id);
}

}
