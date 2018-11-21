import { Voucher } from '../../shared/model/model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'VoucherFilter'
})
export class VoucherFilterPipe implements PipeTransform {

  transform(items: Voucher[], filter: string, field: string): Voucher[] {
    if(!items || !filter || !field){
      return items;
    }
    return items.filter(item=>item[field].toLowerCase().includes(filter.toLowerCase()))
  }
}
