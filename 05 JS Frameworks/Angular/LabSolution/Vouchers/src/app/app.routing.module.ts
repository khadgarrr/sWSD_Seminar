import { TwoWayPersonComponent } from "./demos/two-way-person/two-way-person.component";
import { FormsBuilderComponent } from "./demos/forms-builder/forms-builder.component";
import { ReativeValidationComponent } from "./demos/reative-validation/reative-validation.component";
import { TemplateValidationComponent } from "./demos/template-validation/template-validation.component";
import { ReativeFormsComponent } from "./demos/reative-forms/reative-forms.component";
import { TemplateDrivenComponent } from "./demos/template-driven/template-driven.component";
import { DemosComponent } from "./demos/demos.component";
import { VouchersListComponent } from "./vouchers/vouchers-list.component";
import { VoucherComponent } from "./vouchers/voucher/voucher.component";
import { AccountsListComponent } from "./accounts/accounts-list.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule, ViewChild } from "@angular/core";
import { AdminComponent } from "./admin/admin.component";
import { RouteGuard } from "./route.guard.service";
import { AccountDetailComponent } from "./accounts/account-detail/account-detail.component";

const appRoutes: Routes = [
  {
    path: "",
    component: DemosComponent,
    children: [
      { path: "templatedriven", component: TemplateDrivenComponent },
      { path: "reactiveforms", component: ReativeFormsComponent },
      { path: "formsbuilder", component: FormsBuilderComponent },
      { path: "templatevalidation", component: TemplateValidationComponent },
      { path: "reactivevalidation", component: ReativeValidationComponent },
      { path: "twoway", component: TwoWayPersonComponent }
    ]
  },
  {
    path: "vouchers",
    component: VouchersListComponent
  },
  {
    path: "vouchers/:id",
    component: VoucherComponent
  },
  {
    path: "accounts",
    component: AccountsListComponent
  },
  {
    path: "accounts/:id",
    component: AccountDetailComponent
  },
  {
    path: "admin",
    component: AdminComponent,
    data: { title: "The protected Admin Page" },
    canActivate: [RouteGuard]
  },
  { path: "**", component: DemosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
