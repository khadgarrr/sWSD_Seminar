import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-basics',
  templateUrl: './routing-basics.component.html',
  styleUrls: ['./routing-basics.component.css']
})
export class RoutingBasicsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  showVouchers() {
    this.router.navigate(['/vouchers'])
  }

  showVoucher(id:number){
    this.router.navigate(['/vouchers', id])
  }

  showVoucherParam(id:number){
    this.router.navigate(['/vouchers', id], {queryParams: {readonly: true}});
    // this.router.navigate(['/vouchers', id], {queryParams: {readonly: true}, fragment: 'loading'});
  }
}
