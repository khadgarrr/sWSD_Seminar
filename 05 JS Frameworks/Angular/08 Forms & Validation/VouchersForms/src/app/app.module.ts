import { HttpModule } from '@angular/http';
import { ControlMessagesComponent } from './demos/control-messages.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DemosComponent } from './demos/demos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoucherComponent } from './vouchers/voucher/voucher.component';
import { VouchersListComponent } from './vouchers/vouchers-list.component';
import { VouchersService } from './vouchers/voucher.service';
import { TemplateDrivenComponent } from './demos/template-driven/template-driven.component';
import { ReactiveFormsComponent } from './demos/reactive-forms/reactive-forms.component';
import { TemplateValidationComponent } from './demos/template-validation/template-validation.component';
import { ReactiveValidationComponent } from './demos/reactive-validation/reactive-validation.component';
import { FormsBuilderComponent } from './demos/forms-builder/forms-builder.component';
import { TwoWayPersonComponent } from './demos/two-way-person/two-way-person.component';
import { PersonsComponent } from './demos/two-way-person/persons/persons.component';
import { PersonComponent } from './demos/two-way-person/person/person.component';
import { NavbarComponent, MatchHeightDirective } from './shared/index';
import { VoucherDetailComponent } from './vouchers/voucher/voucher-detail/voucher-detail.component';
import { VoucherDetailsListComponent } from './vouchers/voucher/voucher-details-list/voucher-details-list.component';
import { RouteGuard } from './route.guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { UnidirectionalVouchersComponent } from './demos/unidirectional-vouchers/unidirectional-vouchers.component';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe)

@NgModule({
  declarations: [
    AppComponent,
    VouchersListComponent,
    AdminComponent,
    AccountsComponent,
    VoucherComponent,
    VoucherDetailComponent,
    VoucherDetailsListComponent,
    DemosComponent, 
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    TemplateValidationComponent,
    ReactiveValidationComponent,    
    ControlMessagesComponent,
    FormsBuilderComponent,
    TwoWayPersonComponent,
    PersonsComponent,
    PersonComponent,
    NavbarComponent,
    MatchHeightDirective,
    UnidirectionalVouchersComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    [BrowserAnimationsModule],
    BsDatepickerModule.forRoot() 
  ],
  providers: [
    VouchersService,
    {provide: LOCALE_ID, useValue: "de-DE"},
    RouteGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
