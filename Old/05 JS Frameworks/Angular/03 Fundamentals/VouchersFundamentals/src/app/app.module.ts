import { MatchHeightDirective } from './shared/match-height/match-height.directive';
import { AccountsComponent } from './accounts/accounts.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { BindingComponent } from './demos/binding/binding.component';
import { BrowserModule } from '@angular/platform-browser';
import { CustomDirectivesComponent } from './demos/custom-directives/custom-directives.component';
import { CustomPipesComponent } from './demos/custom-pipes/custom-pipes.component';
import { DemosComponent } from './demos/demos.component';
import { DirectivesComponent } from './demos/directives/directives.component';
import { ExpressionsComponent } from './demos/expressions/expressions.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './demos/custom-directives/highlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { InlineComponent } from './demos/inline/inline.component';
import { InternationalizationComponent } from './demos/internationalization/internationalization.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { PipesComponent } from './demos/pipes/pipes.component';
import { RouterModule, Routes } from '@angular/router';
import { StructDirectivesComponent } from './demos/struct-directives/struct-directives.component';
import { TemplateComponent } from './demos/template/template.component';
import { VoucherComponent } from './vouchers/voucher/voucher.component';
import { VoucherFilterPipe } from './demos/custom-pipes/voucher-filter.pipe';
import { VouchersListComponent } from './vouchers/vouchers-list.component';
import { VoucherDetailComponent } from './vouchers/voucher/voucher-detail/voucher-detail.component';
import { VoucherDetailsListComponent } from './vouchers/voucher/voucher-details-list/voucher-details-list.component';
import { VouchersService } from './vouchers/voucher.service';
import { UnderlineDirective } from "./demos/custom-directives/underline.directive";
import { ContentProjectionComponent } from './demos/content-projection/content-projection.component';
import { EmployeeComponent } from './demos/content-projection/employee/employee.component';
import { NavbarComponent } from './shared/index';
import { PersonsListComponent } from './demos/persons/persons-list/persons-list.component';
import { PersonEditComponent } from './demos/persons/person-edit/person-edit.component';
import { PersonService } from './demos/persons/person.service';
import { RepeaterComponent } from './demos/repeater/repeater.component';
import { ParentChildComponent } from './demos/parent-child/parent-child.component';
import { AccountsService } from './accounts/accounts.service';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe)


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    VouchersListComponent,
    AccountsComponent,
    VoucherComponent,
    VoucherDetailComponent,
    VoucherDetailsListComponent,
    DemosComponent,         
    InlineComponent, 
    BindingComponent, 
    TemplateComponent, 
    PipesComponent, 
    DirectivesComponent, 
    StructDirectivesComponent,  
    CustomDirectivesComponent, 
    CustomPipesComponent, 
    InternationalizationComponent, 
    ExpressionsComponent, 
    VoucherFilterPipe,
    UnderlineDirective,
    PersonsListComponent,
    PersonEditComponent,
    ContentProjectionComponent,
    EmployeeComponent,
    NavbarComponent,
    MatchHeightDirective,
    RepeaterComponent,
    ParentChildComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    VouchersService,
    AccountsService,
    PersonService,
    {provide: LOCALE_ID, useValue: "de-DE"}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
