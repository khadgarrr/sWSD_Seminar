
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Voucher } from "../shared/index";

@Injectable()
export class VouchersService {
    constructor(private http: HttpClient) { }

    vouchers = null;

    getVouchers() : Promise<any> {
        return this.http.get('/assets/vouchers.json').toPromise();          
    }
    
    getVoucher(id: number) : Promise<any> {
        return new Promise<Voucher>((resolve, reject)=>{
            this.http.get('/assets/vouchers.json').toPromise()
            .then((data: Voucher[])=>{
                var v = data.filter((item)=>{
                    return item.ID == id;
                 })
                 resolve(v[0]);
            })
            .catch(err=>reject(err));
        })
    }
}