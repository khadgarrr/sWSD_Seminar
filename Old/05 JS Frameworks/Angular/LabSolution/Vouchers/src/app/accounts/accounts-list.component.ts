import { AccountsService } from "./account.service";
import { Router, ActivatedRoute } from "@angular/router";
import { BalanceAccount } from "../shared/model/model";
import { Component, OnInit } from "@angular/core";
import { DataStoreService } from "../shared/index";
import { EventBusService } from "../shared/event-bus/event-bus.service";
import { ACCOUNT_ADD } from "../shared/event-bus/action.types";
import { IconAdd } from "../shared/table/cmd.type";

@Component({
  selector: "app-accounts-list",
  templateUrl: "./accounts-list.component.html",
  styleUrls: ["./accounts-list.component.css"]
})
export class AccountsListComponent implements OnInit {
  accounts: BalanceAccount[];

  constructor(
    private router: Router,
    private service: AccountsService,
    private store: DataStoreService,
    private ebus: EventBusService
  ) {}

  ngOnInit() {
    this.store.Accounts.subscribe(data => (this.accounts = data));
    this.ebus.setCmds([{ title: "Add Account", action: ACCOUNT_ADD, icon: IconAdd }]);
  }

  showAccount(id: number) {
    this.router.navigate(["/accounts/" + id]);
  }

  deleteAcccount(acct: BalanceAccount) {
    this.service.deleteAccount(acct);
    this.router.navigate(["/accounts/"]);
  }

  addAccount() {
    console.log("adding account");
    //this.router.navigate(['/accounts/' + 0]);
  }
}
