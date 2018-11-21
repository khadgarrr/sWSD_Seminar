import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Http } from "@angular/http";
import { VouchersService } from "../../vouchers/voucher.service";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { MediaItem } from "../media-item";
import * as moment from "moment";
import { Voucher } from "../../shared/index";

@Component({
  selector: "app-observable-crud",
  templateUrl: "./observable-crud.component.html",
  styleUrls: ["./observable-crud.component.scss"]
})
export class ObservableCrudComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private http: Http,
    private vs: VouchersService
  ) {  }

  result: any;
  resultB: any;
  resultC: any;

  ngOnInit() {}

  getVouchers() {
    this.httpClient
      .get<Voucher[]>("http://localhost:5000/api/vouchers")
      .subscribe(
        data => {this.result = data;},
        err => console.log(err),
        () => {console.log("call complete")});
  }

  getVoucher() {
    this.httpClient
      .get<Voucher>("http://localhost:5000/api/vouchers/2")
      .subscribe(data => {
        this.result = data;
      });
  }

  insertVoucher() {
    var voucher = { Text: "Inserted by Angular", Date: new Date() };
    console.log("Voucher to insert: ", voucher);
    this.httpClient
      .post<Voucher>("http://localhost:5000/api/vouchers", voucher)
      .subscribe(data => {
        if (data == null) this.result = "Voucher inserted";
      });
  }

  updateVoucher() {
    var voucher: Voucher;

    this.httpClient
      .get("http://localhost:5000/api/vouchers/2")
      .subscribe(data => {
        let voucher: Voucher = <Voucher>data;
        voucher.Text = "Updated by Angular";
        console.log("Voucher to update: ", voucher);
        this.httpClient
          .put<Voucher>("http://localhost:5000/api/vouchers", voucher)
          .subscribe(data => {
            this.result = "voucher updated";
          });
      });
  }

  deleteVoucher() {
    var id = 1002;
    var url = "http://localhost:5000/api/vouchers/" + id;
    this.httpClient.delete(url).subscribe(data => {
      this.result = `voucher with id ${id} deleted`;
      console.log(this.result);
    });
  }

  getSum() {
    this.http
      .get("http://localhost:5000/api/vouchers/getsum/true")
      .subscribe(response => {
        this.resultB = response;
        console.log("getSum()", this.resultB);
      });
  }

  getVM() {
    this.httpClient
      .get("http://localhost:5000/api/vouchers/getvm/1")
      .subscribe(data => {
        this.resultB = data;
      });
  }

  doSave() {
    let voucher = {
      ID: 2,
      Text: "BP Tankstelle",
      Date: "2017-06-27T14:30:04.8849651",
      Amount: 65,
      Paid: false,
      Expense: true,
      Remark: true
    };

    console.log("Saving voucher ", voucher);
    this.httpClient
      .post("http://localhost:5000/api/vouchers/save", voucher)
      .subscribe(data => {
        response => (this.resultB = `Voucher with id ${response} was saved`);
      });
  }
}
