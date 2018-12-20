import { Customer } from './../../customer/list/customer';
import { Injectable } from '@angular/core';
import { Account } from './account';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class AccountService {

constructor(private http: HttpClient) { }

getList(customer) {
  let params: String  = '';
  if (customer) {
    params = '?customer=' + customer;
  }
  return this.http.get('http://localhost:8080/acc/list' + params);
}

getListCus() {
  return this.http.get('http://localhost:8080/cust/customers');
}

update(account: Account) {
  return this.http.put('http://localhost:8080/acc/account', account);
}

create(account: Account) {
  return this.http.post('http://localhost:8080/acc/account', account);
}

del(id) {
  return this.http.delete('http://localhost:8080/acc/delete/' + id);
}
}

