import { VouchersService } from './voucher.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Voucher } from '../shared/model/model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-vouchers-list',
  templateUrl: './vouchers-list.component.html',
  styleUrls: ['./vouchers-list.component.css']
})
export class VouchersListComponent implements OnInit {
  
  vouchers: Voucher[];
  
  constructor(private router: Router, private vs: VouchersService) {  }

  ngOnInit() {   
    this.vs.getVouchers().then(data => this.vouchers = data)
  }

  showVoucher(id: number){
    this.router.navigate(['/vouchers/' + id]);
  }
}
