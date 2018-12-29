import { Customer } from './customer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

constructor(private httpClient: HttpClient) { }

getList() {
  return this.httpClient.get('http://localhost:7000/api/customers');
  // return this.httpClient.get('http://localhost:8080/cust/customers');
}

update(customer: Customer) {
  // return this.httpClient.put('http://localhost:8080/cust/customer', customer);
  return this.httpClient.put('http://localhost:7000/api/customer', customer);
}

create(customer: Customer) {
  // return this.httpClient.post('http://localhost:8080/cust/customer', customer);
  return this.httpClient.post('http://localhost:7000/api/customer', customer);
}

del(custnumber) {
  // return this.httpClient.delete('http://localhost:3000/customer' + custnumber);
  return this.httpClient.delete('http://localhost:7000/api/customer/' + custnumber);
}

}
