import { VoucherDetailsListComponent } from './vouchers/voucher/voucher-details-list/voucher-details-list.component';
import { VoucherDetailComponent } from './vouchers/voucher/voucher-detail/voucher-detail.component';
import { MatchHeightDirective } from './shared/match-height/match-height.directive';
import { NavbarComponent } from 'app/shared';
import { FormsModule } from '@angular/forms';
import { VouchersService } from './vouchers/voucher.service';
import { DemosComponent } from './demos/demos.component';
import { VoucherComponent } from './vouchers/voucher/voucher.component';
import { AppRoutingModule } from './app.routing.module';
import { Logger } from 'codelyzer/util/logger';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { VouchersListComponent } from './vouchers/vouchers-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountsComponent } from './accounts/accounts.component';
import { RoutingBasicsComponent } from './demos/routing-basics/routing-basics.component';
import { DemoSectionComponent } from './demos/demo-section/demo-section.component';
import { ChildRoutesComponent } from './demos/child-routes/child-routes.component';
import { RouteGardsComponent } from './demos/route-gards/route-gards.component';
import { PersonsComponent } from './demos/persons/persons.component';
import { AdminComponent } from './admin/admin.component';
import { RouteGuard } from 'app/route.guard.service';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe)


@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    AdminComponent,
    VouchersListComponent,
    VoucherComponent,
    VoucherDetailComponent,
    VoucherDetailsListComponent,
    PageNotFoundComponent,
    AccountsComponent,
    RoutingBasicsComponent,
    DemoSectionComponent,
    ChildRoutesComponent,
    RouteGardsComponent,
    PersonsComponent,
    NavbarComponent,
    MatchHeightDirective
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,    
    RouterModule,    
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "de-DE"},
    VouchersService,    
    RouteGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
