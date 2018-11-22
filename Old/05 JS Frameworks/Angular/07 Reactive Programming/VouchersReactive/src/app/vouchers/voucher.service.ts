import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Voucher } from "../shared/index";
import { Observable } from "rxjs/Observable";

@Injectable()
export class VouchersService {
  constructor(private httpClient: HttpClient) {}

  getVouchers(): Observable<Voucher[]> {
    return this.httpClient.get<Voucher[]>("http://localhost:5000/api/vouchers");
  }

  getVoucher(id: number): Observable<any> {
    return this.httpClient.get<any>(
      "http://localhost:5000/api/vouchers/getvm/" + id
    );
  }

  insertVoucher(voucher: Voucher): void {
    this.httpClient
      .post<Voucher>("http://localhost:5000/api/vouchers", voucher)
      .subscribe(
        () => console.log(`voucher with id ${voucher.ID} inserted`),
        err => console.log(err)
      );
  }

  updateVoucher(voucher: Voucher): Observable<any> {
    return this.httpClient.put<Voucher>(
      "http://localhost:5000/api/vouchers",
      voucher
    );
  }

  deleteVoucher(id: number): Observable<any> {
    return this.httpClient.delete("http://localhost:5000/api/vouchers/" + id);
  }
}
