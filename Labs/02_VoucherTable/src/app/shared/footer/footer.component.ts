import { Component, OnInit } from "@angular/core";
import { VoucherService } from "../../vouchers/voucher.service";
import { Voucher } from "../model";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  voucherSum: number = 0;

  constructor(private voucherService: VoucherService) {}

  ngOnInit() {
    this.voucherService.getVouchers().subscribe(
      (data: Voucher[]) =>
        // Beispiel for - of loop
        //   for (let voucher of data) {
        //     this.voucherSum += voucher.Amount;
        //   }
        // }

        // Beispiel zum reduce Syntax
        (this.voucherSum = data
          .map(item => item.Amount)
          .reduce((sum, current) => {
            console.log(sum, current);
            return sum + current;
          }))
    );
  }
}
