import { Voucher } from '../../shared/model/model';
import { VouchersService } from '../../vouchers/voucher.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-using-bootstrap',
  templateUrl: './using-bootstrap.component.html',
  styleUrls: ['./using-bootstrap.component.css']
})
export class UsingBootstrapComponent implements OnInit {

  vouchers: Voucher[];
  constructor(private vs: VouchersService) { }

  ngOnInit() {
    this.vs.getVouchers().then(data => this.vouchers = data)

  }

  showVoucher(id: number){

  }

}
