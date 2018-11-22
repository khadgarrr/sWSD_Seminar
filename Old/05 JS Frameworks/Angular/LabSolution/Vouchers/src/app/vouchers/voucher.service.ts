import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Voucher } from "../shared/index";
import { Observable } from "rxjs/Observable";
import { environment } from '../../environments/environment';

@Injectable()
export class VouchersService {
  constructor(private httpClient: HttpClient) {}

  getVouchers(): Observable<Voucher[]> {
    return this.httpClient.get<Voucher[]>( environment.apiUrl + "api/vouchers");
  }

  getVoucher(id: number): Observable<any> {
    return this.httpClient.get<any>(
      environment.apiUrl + "api/vouchers/getvm/" + id
    );
  }

  insertVoucher(voucher: Voucher): void {
    this.httpClient
      .post<Voucher>(environment.apiUrl + "api/vouchers", voucher)
      .subscribe(
        () => console.log(`voucher with id ${voucher.ID} inserted`),
        err => console.log(err)
      );
  }

  updateVoucher(voucher: Voucher): Observable<any> {
    return this.httpClient.put<Voucher>(
      environment.apiUrl + "api/vouchers",
      voucher
    );
  }

  deleteVoucher(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + "api/vouchers/" + id);
  }
}
