import { ActivatedRoute, Params, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { VouchersService } from "../voucher.service";
import {
  Voucher,
  VoucherDetail,
  BalanceAccount,
  DataStoreService
} from "../../shared/index";
import { FormBuilder } from "@angular/forms";
import { EventBusService } from "../../shared/event-bus/event-bus.service";
import { VOUCHER_SAVE, VOUCHER_ADD_DETAIL, VOUCHER_SAVE_DETAIL, VOUCHER_SHOW_LIST } from "../../shared/event-bus/action.types";
import { IconSave, IconAdd, IconCancel } from "../../shared/table/cmd.type";


@Component({
  selector: "app-voucher",
  templateUrl: "./voucher.component.html",
  styleUrls: ["./voucher.component.css"]
})
export class VoucherComponent implements OnInit {
  voucher: Voucher = {
    ID: 0,
    Text: "",
    Date: new Date().toString(),
    Amount: 0,
    Paid: false,
    Expense: false,
    Remark: false
  };
  accounts: BalanceAccount[];
  currentDetail: VoucherDetail;

  constructor(
    private vs: VouchersService,
    private route: ActivatedRoute,
    private router: Router,
    private store: DataStoreService,
    private ebus: EventBusService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
   this.loadData();
   this.setPanelCmds();
   this.ebus.Panel.subscribe((action: string ) => {
     console.log("receiving action from side panel: " + action)
     this.saveVoucher();
    });
  }

  loadData(){
    let id = this.route.snapshot.params["id"];

    if (id != 0) {
      this.vs.getVoucher(id).subscribe(data => {
        this.voucher = data.CurrentVoucher;
        this.accounts = data.Accounts;
        if (this.voucher.Details != null) {
          this.currentDetail = this.voucher.Details[0];
        }
      });
    }
  }

  setPanelCmds() {
    this.ebus.setCmds([
      { title: "Save Voucher", action: VOUCHER_SAVE , icon: IconSave},
      { title: "New Detail", action: VOUCHER_ADD_DETAIL , icon: IconAdd },
      { title: "Save Detail", action: VOUCHER_SAVE_DETAIL  , icon: IconSave},
      { title: "Cancel", action: VOUCHER_SHOW_LIST , icon: IconCancel}
    ]);
  }

  evalAction(action: string){
   
  }

  showVouchers(){

  }

  saveVoucher() {
    if (this.voucher.ID == 0) {
      this.vs.insertVoucher(this.voucher);
    } else {
      this.vs.updateVoucher(this.voucher);
    }
    this.router.navigate(["/vouchers/"]);
  }

  selectDetail(detail) {
    this.currentDetail = detail;
  }

  saveDetail(detail: VoucherDetail) {
    if (detail.ID != 0) {
      detail.Account = this.accounts.find(a => a.ID == detail.AccountID);
    } else {
      if (this.voucher.Details == null) {
        this.voucher.Details = new Array<VoucherDetail>();
      }
      this.voucher.Details.push(detail);
    }
  }
}
