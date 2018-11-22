import { Pipe, PipeTransform, ElementRef } from '@angular/core';

@Pipe({
  name: 'checked'
})
export class CheckPipe implements PipeTransform {

  transform(checked: boolean): any {
    let result : string = !checked ? `<div style="text-align: center;"><img src="/assets/images/check.png"></div>`: ""
    return result;
  }

}
