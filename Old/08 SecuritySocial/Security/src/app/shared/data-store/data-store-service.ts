import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs";
import { map, filter, skip, count } from "rxjs/operators";

import { lateVoucher } from "./late-voucher";
import { VouchersService } from "../../vouchers/voucher.service";
import { Voucher, BalanceAccount } from "..";
import { AccountsService } from "../../accounts/account.service";

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

  initVouchers() {
    this.vs.getVouchers().subscribe(data => {
      this.vouchersArray = data;
      this.vouchers.next(this.vouchersArray);
    });
  }

  addLateVoucher() {
    setTimeout(() => {
      this.vouchersArray.push(<Voucher>lateVoucher);
      this.vouchers.next(this.vouchersArray);
    }, 8000);
  }

  getAllVouchers(): Observable<Voucher[]> {
    return this.vouchers;
  }

  getVoucherById(id: number): Observable<Voucher> {
    return this.vouchers.pipe(map(m => m.find(mi => mi.ID == id)));
  }

  insertVoucher(v: Voucher): any {
    throw new Error("Method not implemented.");
  }
  updateVoucher(v: Voucher): any {
    throw new Error("Method not implemented.");
  }

  deleteVoucher(id: number) {
    this.vs.deleteVoucher(id);
    this.initVouchers();
  }

  //Accounts
  private accountsArray: BalanceAccount[] = [];
  private accounts: BehaviorSubject<BalanceAccount[]> = new BehaviorSubject(
    this.accountsArray
  );

  initAccounts() {
    this.as.getAccounts().subscribe(data => {
      this.accountsArray = data;
      this.accounts.next(this.accountsArray);
    });
  }

  getAllAccounts(): Observable<BalanceAccount[]> {
    return this.accounts;
  }

  getAccountById(id: number): Observable<BalanceAccount> {
    return this.accounts.pipe(map(m => m.find(mi => mi.ID == id)));
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
