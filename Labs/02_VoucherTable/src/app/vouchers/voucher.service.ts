import { Injectable } from "@angular/core";
import { Voucher } from "../shared/model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class VoucherService {
  // vouchers : Voucher[];

  constructor(private httpClient: HttpClient) {}

  // private async loadVouchers() : void {
  //   try {

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  getVouchers(): Observable<Voucher[]> {
    let url: string = "/assets/vouchers.json";

    return this.httpClient.get<Voucher[]>(url);
  }
}
