import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { VoucherDetail, Voucher } from '../../../shared/index';

@Component({
  selector: 'app-voucher-details-list',
  templateUrl: './voucher-details-list.component.html',
  styleUrls: ['./voucher-details-list.component.css']
})
export class VoucherDetailsListComponent implements OnInit {
  @Input() details : VoucherDetail[];
  @Output() detailSelected : EventEmitter<VoucherDetail> = new EventEmitter();
  @Output() detailDeleted : EventEmitter<VoucherDetail> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {  }
  
  selectDetail(d: VoucherDetail){
    this.detailSelected.emit(d);
  }

  deleteDetail(d: VoucherDetail){
    this.detailDeleted.emit(d);
  }

}