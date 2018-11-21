import { CSSBindingComponent } from './demos/cssbinding/binding.component';
import { UsingBootstrapComponent } from './demos/using-bootstrap/using-bootstrap.component';
import { UsingMaterialComponent } from './demos/using-material/using-material.component';
import { UsingThirdpartyComponent } from './demos/using-thirdparty/using-thirdparty.component';
import { DemosComponent } from './demos/demos.component';
import { VouchersListComponent } from './vouchers/vouchers-list.component';
import { VoucherComponent } from './vouchers/voucher/voucher.component';
import { AccountsComponent } from './accounts/accounts.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, ViewChild } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { RouteGuard } from './route.guard.service';
import { FlexboxComponent } from './demos/flexbox/flexbox.component';
import { MaterialTableComponent } from './demos/material-table/material-table.component';

const appRoutes: Routes = [
    { path: '',
      component: DemosComponent,
      children: [
        { path: 'cssbasics', component: CSSBindingComponent },
        { path: 'bootstrap', component: UsingBootstrapComponent },
        { path: 'material', component: UsingMaterialComponent },
        { path: 'material-table', component: MaterialTableComponent },
        { path: 'flexbox', component: FlexboxComponent },
        { path: 'thirdparty', component: UsingThirdpartyComponent }
      ]
    },
    { path: 'vouchers',
      component: VouchersListComponent
    },
    { path: 'vouchers/:id',
      component: VoucherComponent
    },
    { path: 'accounts',
      component: AccountsComponent,
      data: { title: 'Accounts' }
    },
    {
      path: 'admin',
      component: AdminComponent ,
      data: { title: 'The protected Admin Page' },
      canActivate: [RouteGuard]
    }
  ];

@NgModule({
 imports: [RouterModule.forRoot(appRoutes, { enableTracing: false})],
 exports: [RouterModule]
})
export class AppRoutingModule {

}
