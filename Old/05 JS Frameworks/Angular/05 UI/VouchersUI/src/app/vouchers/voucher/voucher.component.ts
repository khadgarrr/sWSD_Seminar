import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { VouchersService } from '../voucher.service';
import { Voucher, VoucherDetail } from '../../shared/index';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit {

  voucher: Voucher = null;
  currentDetail: VoucherDetail;

  constructor(private vs: VouchersService, private route: ActivatedRoute) {   }

  ngOnInit() {
    this.vs.getVoucher(this.route.snapshot.params['id']).then(data => {
      this.voucher = data;
      if (this.voucher.Details != null)
      {
        this.currentDetail = this.voucher.Details[0];
      }
    });

    //Accessing Query Params
    var readonly = this.route.snapshot.queryParams['readonly'];
    console.log(`Page is readonly: ${readonly}` )

    //Accessing Fragments
    var section = this.route.snapshot.fragment;
    if(section!=undefined) {
      console.log(`Section to navigate to: ${section}` )
    }
  }

  saveVoucher(){
    
  }

  selectDetail(detail){
    this.currentDetail = detail;
  }

  saveDetail(detail){
    if(this.voucher.Details.includes(detail)){
      
    }
    else{
      this.voucher.Details.push(detail)
    }
  }
}
