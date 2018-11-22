import { Injectable } from "@angular/core";
import { BalanceAccount } from "../shared";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AccountsService {
  constructor(private httpClient: HttpClient) {}

  getAccounts(): Promise<BalanceAccount[]> {
    return this.httpClient
      .get<BalanceAccount[]>("/assets/accounts.json")
      .toPromise();
  }
}
