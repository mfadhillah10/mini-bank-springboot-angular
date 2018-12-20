
import { AccountService } from './account/list/account.service';
import { AccountFormComponent } from './account/form/account-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test2Component } from './test/test2.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './test/customer.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CustomerFormComponent } from './customer/form/customer-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerListComponent } from './customer/list/customer-list.component';
import { CustomerService } from './customer/list/customer.service';
import { TestPipePipe } from './customer/test-pipe.pipe';
import { AccountListComponent } from './account/list/account-list.component';
import { TransactionFormComponent } from './transaction/form/transaction-form.component';
import { TransactionListComponent } from './transaction/list/transaction-list.component';
import { TransactionService } from './transaction/list/transaction.service';
import { CustomerComboComponent } from './customer/combo/customer-combo.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    Test2Component,
    ParentComponent,
    ChildComponent,
    CustomerFormComponent,
    CustomerListComponent,
    TestPipePipe,
    AccountListComponent,
    AccountFormComponent,
    TransactionFormComponent,
    TransactionListComponent,
    CustomerComboComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CustomerService, AccountService, TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
