import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AccountDetailComponent } from "./accounts/account-detail/account-detail.component";
import { AccountsListComponent } from "./accounts/accounts-list.component";
import { DemosComponent } from "./demos/demos.component";
import { RouteGuard } from "./route.guard.service";
import { EditorComponent } from "./shared/editor/editor.component";
import { UploadComponent } from "./shared/upload/upload.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { VoucherComponent } from "./vouchers/voucher/voucher.component";
import { VouchersListComponent } from "./vouchers/vouchers-list.component";
import { WinAuthComponent } from "./demos/winauth/winauth.component";
import { JwtComponent } from "./demos/jwt/jwt.component";
import { FacebookAuthComponent } from "./demos/fbauth/fbauth.component";
import { FirebaseComponent } from "./demos/firebase/firebase.component";

const appRoutes: Routes = [
  {
    path: "",
    component: DemosComponent,
    data: { title: "Demos" },
    children: [
      { path: "winauth", component: WinAuthComponent },
      { path: "firebase", component: FirebaseComponent },
      { path: "jwt", component: JwtComponent },
      { path: "fbauth", component: FacebookAuthComponent }
    ]
  },
  {
    path: "vouchers",
    data: { title: "Vouchers" },
    component: VouchersListComponent
  },
  {
    path: "vouchers/:id",
    component: VoucherComponent
  },
  {
    path: "accounts",
    component: AccountsListComponent,
    data: { title: "Accounts" }
  },
  {
    path: "accounts/:id",
    component: AccountDetailComponent
  },
  {
    path: "statistics",
    component: StatisticsComponent,
    data: { title: "Statistics" }
  },
  {
    path: "admin",
    loadChildren: "./admin/admin.module#AdminModule",
    data: { title: "Admin" },
    canActivate: [RouteGuard]
  },
  { path: "showeditor", component: EditorComponent, outlet: "sidebarOutlet" },
  { path: "upload", component: UploadComponent, outlet: "sidebarOutlet" },
  { path: "**", component: DemosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
