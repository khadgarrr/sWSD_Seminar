
export class VoucherDetail {
    ID: number;
    VoucherID: number;
    AccountID: number;
    Account: BalanceAccount;
    Text: string;
    Amount: number;
    Comment: string;
}

export class BalanceAccount {
    ID?: number;
    Name: string;
    Expense: boolean;
    ActivatedOn: Date;
    Deprecated: boolean;
}

export class Voucher {
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
