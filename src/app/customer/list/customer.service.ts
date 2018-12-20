import { Customer } from './customer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

constructor(private httpClient: HttpClient) { }

getList() {
  return this.httpClient.get('http://localhost:8080/cust/customers');
}

update(customer: Customer) {
  return this.httpClient.put('http://localhost:8080/cust/update', customer);
}

create(customer: Customer) {
  return this.httpClient.post('http://localhost:8080/cust/customer', customer);
}

delete(custnumber) {
  return this.httpClient.delete('http://localhost:8080/cust/customer/' + custnumber).subscribe(response => {
    location.href = 'customerlist';
  }, (err) => {
    alert('Error ' + JSON.stringify(err));
  });
}

}
