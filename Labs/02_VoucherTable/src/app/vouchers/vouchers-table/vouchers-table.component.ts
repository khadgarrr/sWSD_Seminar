import { Component, OnInit } from "@angular/core";
import { VoucherService } from "../voucher.service";
import { Voucher } from "../../shared/model";

@Component({
  selector: "app-vouchers-table",
  templateUrl: "./vouchers-table.component.html",
  styleUrls: ["./vouchers-table.component.scss"]
})
export class VouchersTableComponent implements OnInit {
  vouchers: Voucher[];

  constructor(private voucherService: VoucherService) {}

  ngOnInit() {
    this.voucherService
      .getVouchers()
      .subscribe(
        (data: Voucher[]) => (this.vouchers = data),
        error => console.log(error),
        () => console.log("complete")
      );
  }
}
