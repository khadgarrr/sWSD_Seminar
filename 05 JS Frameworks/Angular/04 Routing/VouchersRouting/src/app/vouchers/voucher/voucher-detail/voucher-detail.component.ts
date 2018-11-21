import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VoucherDetail } from '../../../shared/index';

@Component({
  selector: 'app-voucher-detail',
  templateUrl: './voucher-detail.component.html',
  styleUrls: ['./voucher-detail.component.css']
})
export class VoucherDetailComponent implements OnInit {
  @Input() detail : VoucherDetail;
  @Output() detailSaved : EventEmitter<VoucherDetail> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {

  }

  saveDetail(d: VoucherDetail){
    this.detailSaved.emit(d);
  }

}
