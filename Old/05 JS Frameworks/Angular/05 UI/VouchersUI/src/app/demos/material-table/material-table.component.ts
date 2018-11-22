import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Voucher } from '../../shared/index';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {

  vouchers: Voucher[];
  dataSource: MatTableDataSource<Voucher>;
  displayedColumns = ['ID', 'Text', 'Date', 'Amount'];

  constructor(private http:Http) {  }

  ngOnInit() {
    this.http.get('./assets/vouchers.json').toPromise().then(data => {
      this.vouchers = data.json();
      console.log(this.vouchers)
      this.dataSource = new MatTableDataSource(data.json());
    })    
  }  


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
