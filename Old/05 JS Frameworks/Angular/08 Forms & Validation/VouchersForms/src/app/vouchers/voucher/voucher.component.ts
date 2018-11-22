import { ActivatedRoute, Params, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { VouchersService } from "../voucher.service";
import { Voucher, VoucherDetail, BalanceAccount } from "../../shared/index";
import { FormBuilder } from "@angular/forms";

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
    private fb: FormBuilder
  ) {}

  ngOnInit() {
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

  saveDetail(detail : VoucherDetail) {
    
    if(detail.ID != 0){
      detail.Account = this.accounts.find(a=>a.ID==detail.AccountID);
    }
    else{
      if(this.voucher.Details == null){
        this.voucher.Details = new Array<VoucherDetail>();
      }
      this.voucher.Details.push(detail);
    }

  }
}
