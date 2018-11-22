import { Component, OnInit } from "@angular/core";
import { BalanceAccount, DataStoreService } from "../../shared/index";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { AccountsService } from "../account.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { EventBusService } from "../../shared/event-bus/event-bus.service";
import {
  ACCOUNT_CANCEL,
  ACCOUNT_SAVE
} from "../../shared/event-bus/action.types";
import { IconSave, IconCancel } from "../../shared/table/cmd.type";


@Component({
  selector: "app-account-detail",
  templateUrl: "./account-detail.component.html",
  styleUrls: ["./account-detail.component.css"]
})
export class AccountDetailComponent implements OnInit {
  constructor(
    private service: AccountsService,
    private store: DataStoreService,
    private eb: EventBusService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  acctForm: FormGroup;

  account: BalanceAccount = {
    ID: 0,
    Name: "",
    Expense: false,
    ActivatedOn: new Date(),
    Deprecated: false
  };

  ngOnInit() {
    this.getAcct();
    this.initForm();
    this.initEventBus();
  }

  initEventBus() {
    this.eb.setCmds([
      { title: "Save Account", action: ACCOUNT_SAVE, icon: IconSave },
      { title: "Cancle", action: ACCOUNT_CANCEL, icon: IconCancel }
    ]);

    this.eb.Panel.subscribe((action: string) => {
      switch (action) {
        case ACCOUNT_CANCEL:
          this.router.navigate(["/accounts/"]);
          break;
        case ACCOUNT_SAVE:
          this.store.saveAccount(<BalanceAccount>this.acctForm.value);
          break;
        default:
          console.log("invalid cmd in account details");
          break;
      }
    });
  }

  getAcct() {
    let id = this.route.snapshot.params["id"];
    this.store.Accounts.map(acct => acct.filter(a => a.ID == id)).subscribe(
      item => (this.account = item[0])
    );
  }

  initForm() {
    this.acctForm = this.fb.group({
      ID: [this.account.ID],
      Name: [this.account.Name],
      Expense: [this.account.Expense]
    });
  }
}
