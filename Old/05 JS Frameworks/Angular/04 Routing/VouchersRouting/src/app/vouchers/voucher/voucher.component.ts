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

  voucher: Voucher;
  currentDetail: VoucherDetail;

  id: number;
  readonly: true;
  fragments: string;

  constructor(private vs: VouchersService, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {


    //this.readRoutesObs();    
  }

  readRouts(){
    this.vs.getVoucher(this.route.snapshot.params['id']).then(data => {
      this.voucher = data;
      if (this.voucher.Details != null)
      {
        this.currentDetail = this.voucher.Details[0];
      }
    });

    //Accessing Query Params
    this.readonly = this.route.snapshot.queryParams['readonly'];
    console.log(`Page is readonly: ${this.readonly}` )

    //Accessing Fragments
    this.fragments = this.route.snapshot.fragment;
    if(this.fragments!=undefined) {
      console.log(`Section to navigate to: ${this.fragments}` )
    }
  }

  readRoutesObs(){
    this.route.params.subscribe(params =>{
      this.id = params['id'];
      this.vs.getVoucher(this.id).then(data => {
        this.voucher = data;
        if (this.voucher.Details != null)
        {
          this.currentDetail = this.voucher.Details[0];
        }
      });
  })

  this.route.queryParams.subscribe(qps=>{
    this.readonly = qps['readonly'];
    console.log(`Page is readonly: ${this.readonly}` )
    })  

  this.route.fragment.subscribe(fg=>console.log(fg))  
  }
}
