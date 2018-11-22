import { TwoWayPersonComponent } from './demos/two-way-person/two-way-person.component';
import { FormsBuilderComponent } from './demos/forms-builder/forms-builder.component';
import { ReactiveValidationComponent } from './demos/reactive-validation/reactive-validation.component';
import { TemplateValidationComponent } from './demos/template-validation/template-validation.component';
import { ReactiveFormsComponent } from './demos/reactive-forms/reactive-forms.component';
import { TemplateDrivenComponent } from './demos/template-driven/template-driven.component';
import { DemosComponent } from './demos/demos.component';
import { VouchersListComponent } from './vouchers/vouchers-list.component';
import { VoucherComponent } from './vouchers/voucher/voucher.component';
import { AccountsComponent } from './accounts/accounts.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, ViewChild } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { RouteGuard } from './route.guard.service';
import { UnidirectionalVouchersComponent } from './demos/unidirectional-vouchers/unidirectional-vouchers.component';

const appRoutes: Routes = [
    { path: '',
      component: DemosComponent,
      children: [
        { path: 'templatedriven', component: TemplateDrivenComponent },
        { path: 'reactiveforms', component: ReactiveFormsComponent },
        { path: 'formsbuilder', component: FormsBuilderComponent },
        { path: 'templatevalidation', component: TemplateValidationComponent },
        { path: 'reactivevalidation', component: ReactiveValidationComponent },
        { path: 'twoway', component: TwoWayPersonComponent },
        { path: 'dataflow', component: UnidirectionalVouchersComponent }
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
