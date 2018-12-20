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
    params = '?account=' + account;
  }
  return this.http.get('http://localhost:8080/trx/list' + params);
}

getListAcc() {
  return this.http.get('http://localhost:8080/acc/accounts');
}

getListCus() {
  return this.http.get('http://localhost:8080/cust/customers');
}

create(transaction: Transaction) {
  return this.http.post('http://localhost:8080/trx/transaction', transaction);
}

update(transaction: Transaction) {
  return this.http.put('http://localhost:8080/trx/transaction', transaction);
}

del(id) {
  return this.http.delete('http://localhost:8080/trx/delete/' + id);
}

}
