import { ExpressionsComponent } from './demos/expressions/expressions.component';
import { InternationalizationComponent } from './demos/internationalization/internationalization.component';
import { CustomPipesComponent } from './demos/custom-pipes/custom-pipes.component';
import { CustomDirectivesComponent } from './demos/custom-directives/custom-directives.component';
import { ContentProjectionComponent } from './demos/content-projection/content-projection.component';
import { StructDirectivesComponent } from './demos/struct-directives/struct-directives.component';
import { DirectivesComponent } from './demos/directives/directives.component';
import { PipesComponent } from './demos/pipes/pipes.component';
import { BindingComponent } from './demos/binding/binding.component';
import { TemplateComponent } from './demos/template/template.component';
import { InlineComponent } from './demos/inline/inline.component';
import { DemosComponent } from './demos/demos.component';
import { VouchersListComponent } from './vouchers/vouchers-list.component';
import { VoucherComponent } from './vouchers/voucher/voucher.component';
import { AccountsComponent } from './accounts/accounts.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, ViewChild } from '@angular/core';
import { RepeaterComponent } from './demos/repeater/repeater.component';
import { ParentChildComponent } from './demos/parent-child/parent-child.component';

const appRoutes: Routes = [
    { path: '',
      component: DemosComponent,
      children: [
        { path: 'inline', component: InlineComponent },
        { path: 'template', component: TemplateComponent },
        { path: 'pipes', component: PipesComponent },       
        { path: 'directives', component: DirectivesComponent },
        { path: 'structdirectives', component: StructDirectivesComponent },
        { path: 'binding', component: BindingComponent },
        { path: 'repeater', component: RepeaterComponent },
        { path: 'parentchild', component: ParentChildComponent },
        { path: 'projection', component: ContentProjectionComponent },
        { path: 'customdirectives', component: CustomDirectivesComponent },
        { path: 'custompipes', component: CustomPipesComponent },
        { path: 'international', component: InternationalizationComponent },       
        { path: 'expressions', component: ExpressionsComponent }
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
    }
  ];

@NgModule({
 imports: [RouterModule.forRoot(appRoutes, { enableTracing: false})],
 exports: [RouterModule]
})
export class AppRoutingModule {

}
