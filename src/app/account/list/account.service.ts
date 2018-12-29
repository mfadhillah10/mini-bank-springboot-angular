import { Customer } from './../../customer/list/customer';
import { Injectable } from '@angular/core';
import { Account } from './account';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class AccountService {

constructor(private http: HttpClient) { }

getList(customer?) {
  let params: String  = '';
  if (customer) {
    params = '?cust_number=' + customer;
  }
  // return this.http.get('http://localhost:8080/acc/accounts' + params);
  return this.http.get('http://localhost:7000/api/accounts' + params);
}

getById(account) {
  let params: String = '';
  if (account) {
    params = '?account=' + account;
  }
  return this.http.get('http://localhost:7000/api/account' + params);
}

getListCus() {
  // return this.http.get('http://localhost:8080/cust/customers');
  return this.http.get('http://localhost:7000/api/customers');
}

update(account: Account) {
  // return this.http.put('http://localhost:8080/acc/account', account);
  return this.http.put('http://localhost:7000/api/account', account);
}

create(account: Account) {
  // return this.http.post('http://localhost:8080/acc/account', account);
  return this.http.post('http://localhost:7000/api/account', account);
}

del(id) {
  // return this.http.delete('http://localhost:8080/acc/delete/' + id);
  return this.http.delete('http://localhost:7000/api/account/' + id);
}
}

