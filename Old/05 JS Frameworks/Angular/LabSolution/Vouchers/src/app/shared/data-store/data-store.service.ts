import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs";
import { VouchersService } from "../../vouchers";
import { AccountsService } from "../../accounts/account.service";
import { Voucher, BalanceAccount } from "..";



@Injectable()
export class DataStoreService {
  constructor(private vs: VouchersService, private as: AccountsService) {
    this.initVouchers();
    this.initAccounts();
    this.addLateVoucher();
  }

  //Vouchers
  private vouchersArray: Voucher[] = [];
  private vouchers: BehaviorSubject<Voucher[]> = new BehaviorSubject(
    this.vouchersArray
  );
  public Vouchers: Observable<Voucher[]> = this.vouchers.asObservable();

  initVouchers() {
    this.vs.getVouchers().subscribe(data => {
      this.vouchersArray = data;
      this.vouchers.next(this.vouchersArray);
    });
  }

  addLateVoucher() {
    setTimeout(() => {
      let v: Voucher = {
        ID: 99,
        Text: "Late Voucher",
        Date: new Date().toString(),
        Amount: 1000,
        Paid: false,
        Expense: false,
        Remark: true,
        Details: [
          {
            ID: 4,
            VoucherID: 2,
            AccountID: 2,
            Account: null,
            Text: "Diesel",
            Amount: 45,
            Comment: null
          },
          {
            ID: 6,
            VoucherID: 2,
            AccountID: 2,
            Account: null,
            Text: "Reifenwechsel",
            Amount: 20,
            Comment: null
          }
        ]
      };
      this.vouchersArray.push(v);
      this.vouchers.next(this.vouchersArray);
    }, 10000);
  }

  //Accounts
  private accountsArray: BalanceAccount[] = [];
  private accounts: BehaviorSubject<BalanceAccount[]> = new BehaviorSubject(
    this.accountsArray
  );
  public Accounts: Observable<BalanceAccount[]> = this.accounts.asObservable();

  initAccounts() {
    this.as.getAccounts().subscribe(data => {
      this.accountsArray = data;
      this.accounts.next(this.accountsArray);
    });
  }

  saveAccount(account: BalanceAccount) {
    console.log(account);
    if (account.ID == 0) {
      this.as.insertAccount(account);
    } else {
      this.as.updateAccount(account);
    }
    this.initAccounts();
  }
}