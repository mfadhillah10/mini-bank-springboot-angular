import { Account } from './../../account/list/account';
export class Transaction {
  id: number;
  type: string;
  amount: number;
  amountSign: string;
  account: Account;
}
