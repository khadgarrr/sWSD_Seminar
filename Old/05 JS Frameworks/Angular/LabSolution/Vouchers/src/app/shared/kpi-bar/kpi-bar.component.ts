import { Component, OnInit } from '@angular/core';

import { Voucher, DataStoreService } from '../index';

@Component({
  selector: 'app-kpi-bar',
  templateUrl: './kpi-bar.component.html',
  styleUrls: ['./kpi-bar.component.scss']
})
export class KpiBarComponent implements OnInit {

  runningSum: number = 0;
  vouchers: Voucher[];

  constructor(private dataStore: DataStoreService) { }

  ngOnInit() {
    this.dataStore.Vouchers.subscribe((vouchers: Voucher[]) => {
      this.runningSum = 0;      
      vouchers.forEach(item=>{
        console.log(`Adding ${item.Amount}€ from voucher with text '${item.Text}' to current Total ${this.runningSum} - New Total: ${item.Amount + this.runningSum}`)
        this.runningSum += item.Amount;        
      })
    })
  }

}
