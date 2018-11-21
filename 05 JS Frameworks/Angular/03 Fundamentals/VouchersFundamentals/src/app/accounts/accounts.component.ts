import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';
import { BalanceAccount } from '../shared';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(private as: AccountsService) { }

  accounts: BalanceAccount[]

  ngOnInit() {
    this.as.getAccounts().then(data=>this.accounts = data)
  }

}
