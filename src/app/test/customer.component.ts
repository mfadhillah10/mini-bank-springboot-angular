import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerData: string = "Hello world";
  customerData2Ways = "customer";
  showTest2: boolean = false;
  @Input() temp: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  testAlert() {
    this.customerData = this.customerData2Ways;
    alert(this.customerData2Ways);
  }

  ok() {
    this.router.navigate(["/test2", { customerData: "Success" }]);
  }
}
