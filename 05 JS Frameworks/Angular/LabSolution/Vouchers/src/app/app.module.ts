import { HttpModule } from '@angular/http';
import { ControlMessagesComponent } from './demos/control-messages.component';
import { AccountsListComponent } from './accounts/accounts-list.component';
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
import { ReativeFormsComponent } from './demos/reative-forms/reative-forms.component';
import { TemplateValidationComponent } from './demos/template-validation/template-validation.component';
import { ReativeValidationComponent } from './demos/reative-validation/reative-validation.component';
import { FormsBuilderComponent } from './demos/forms-builder/forms-builder.component';
import { TwoWayPersonComponent } from './demos/two-way-person/two-way-person.component';
import { PersonsComponent } from './demos/two-way-person/persons/persons.component';
import { PersonComponent } from './demos/two-way-person/person/person.component';
import { NavbarComponent, MatchHeightDirective, DataStoreService } from './shared/index';
import { VoucherDetailComponent } from './vouchers/voucher/voucher-detail/voucher-detail.component';
import { VoucherDetailsListComponent } from './vouchers/voucher/voucher-details-list/voucher-details-list.component';
import { RouteGuard } from './route.guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { AdminComponent } from './admin/admin.component';
import { AccountsService } from './accounts/account.service';
import { AccountDetailComponent } from './accounts/account-detail/account-detail.component';
import { SidePanelComponent } from './shared/side-panel/side-panel.component';
import { CheckPipe } from './shared/table/check.pipe';
import { EventBusService } from './shared/event-bus/event-bus.service';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { VouchersSharedModule } from './shared/shared.module';
import { KpiBarComponent } from './shared/kpi-bar/kpi-bar.component';

registerLocaleData(localeDe)

@NgModule({
  declarations: [
    AppComponent,
    VouchersListComponent,
    AdminComponent,
    AccountsListComponent,
    AccountDetailComponent,
    VoucherComponent,
    VoucherDetailComponent,
    VoucherDetailsListComponent,
    DemosComponent, 
    TemplateDrivenComponent,
    ReativeFormsComponent,
    TemplateValidationComponent,
    ReativeValidationComponent,    
    ControlMessagesComponent,
    FormsBuilderComponent,
    TwoWayPersonComponent,
    PersonsComponent,
    PersonComponent,
    NavbarComponent,
    SidePanelComponent,
    KpiBarComponent,
    CheckPipe
  ],
  imports: [    
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    VouchersSharedModule,
    [BrowserAnimationsModule],
    BsDatepickerModule.forRoot() 
  ],
  providers: [
    DataStoreService,
    EventBusService,
    VouchersService,
    AccountsService,
    {provide: LOCALE_ID, useValue: "de-DE"},
    RouteGuard    
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
