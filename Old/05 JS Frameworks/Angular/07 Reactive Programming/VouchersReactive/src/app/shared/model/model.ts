import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';

export class VoucherDetail {
    
    constructor(){
        this.Text = "";
        this.Account = new BalanceAccount();
    }

    ID: number;
    VoucherID: number;
    AccountID: number;
    Account: BalanceAccount;
    Text: string;
    Amount: number;
    Comment: string;
    TempId?: any;
}

export class BalanceAccount {
    
    constructor(){
        this.Name = "";        
    }

    ID: number;
    Name: string;
    Expense: boolean;
    VoucherDetails: VoucherDetail[];
}

export class Voucher {

    constructor(){
        this.Text = "";        
        this.Date = new Date().toDateString();
        // this.Details = new Array<VoucherDetail>();
    }    

    ID: number;
    Text: string;
    Date: string;
    Amount: number;
    Paid: boolean;
    Expense: boolean;
    Remark?: boolean;
    Readonly?: boolean;
    Details?: VoucherDetail[];
}    

