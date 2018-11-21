import { VouchersService } from '../../vouchers/voucher.service';
import { Voucher } from '../../shared/model/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.css']
})
export class CustomPipesComponent implements OnInit {

  vouchers: Voucher[];

  voucherFilter: string;
  
  constructor(private vs: VouchersService) {
  }

  ngOnInit() {
    this.vs.getVouchers().then(data => this.vouchers = data)
  }

  showVoucher(id: number){
    console.log(`navigating to voucher with id ${id} - covered later in more detail`);
  }
}
