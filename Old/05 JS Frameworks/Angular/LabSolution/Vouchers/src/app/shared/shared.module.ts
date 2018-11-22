import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchHeightDirective } from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MatchHeightDirective],
  exports: [MatchHeightDirective]
})
export class VouchersSharedModule { }
