import { TransactionListComponent } from './transaction/list/transaction-list.component';
import { TransactionFormComponent } from './transaction/form/transaction-form.component';
import { AccountListComponent } from './account/list/account-list.component';
import { AccountFormComponent } from './account/form/account-form.component';
import { CustomerFormComponent } from './customer/form/customer-form.component';
import { CustomerListComponent } from './customer/list/customer-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'customerlist',
    component: CustomerListComponent
  },
  {
    path: 'customerform',
    component: CustomerFormComponent
  },
  {
    path: 'accountlist',
    component: AccountListComponent
  },
  {
    path: 'accountform',
    component: AccountFormComponent
  },
  {
    path: 'transactionform',
    component: TransactionFormComponent
  },
  {
    path: 'transactionlist',
    component: TransactionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
