import { DemosComponent } from './demos/demos.component';
import { PersonsComponent } from './demos/persons/persons.component';
import { ChildRoutesComponent } from './demos/child-routes/child-routes.component';
import { RouteGardsComponent } from './demos/route-gards/route-gards.component';
import { RoutingBasicsComponent } from './demos/routing-basics/routing-basics.component';
import { VoucherComponent } from './vouchers/voucher/voucher.component';
import { RouteGuard } from './route.guard.service';
import { VouchersListComponent } from './vouchers/vouchers-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AccountsComponent } from 'app/accounts/accounts.component';
import { AdminComponent } from 'app/admin/admin.component';

const appRoutes: Routes = [
  { path: '',
    component: DemosComponent,
    children: [
      { path: 'routingbasics', component: RoutingBasicsComponent },
      { path: 'childroutes', component: ChildRoutesComponent },
      { path: 'routegards', component: RouteGardsComponent }      
    ]
    },    
    { path: 'vouchers',
      component: VouchersListComponent
    },
    { path: 'vouchers/:id',
      component: VoucherComponent 
    },
    { path: 'accounts',
      component: AccountsComponent 
    },
    {
      path: 'admin',
      component: AdminComponent ,
      data: { title: 'The protected Admin Page' },
      canActivate: [RouteGuard]
    },
    {
      path: 'wotschers',
      redirectTo: 'vouchers',
      pathMatch: 'full'
    }
  ];

@NgModule({
 imports: [RouterModule.forRoot(appRoutes, { enableTracing: false})],
 exports: [RouterModule]
})
export class AppRoutingModule{

}