import { AgmCoreModule } from "@agm/core";
import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import localeDe from "@angular/common/locales/de";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { AgmDirectionModule } from "agm-direction";
import { Ng2Webstorage } from "ngx-webstorage";

import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AddMarkerComponent } from "./markers/add-marker/add-marker.component";
import { MarkerItemComponent } from "./markers/marker-item/marker-item.component";
import { MarkerListComponent } from "./markers/marker-list/marker-list.component";
import { MarkerService } from "./markers/marker.service";
import { MaterialModule } from "./material.module";
import { FooterBarComponent } from "./shared/footer-bar/footer-bar.component";
import { IntroComponent } from "./shared/intro/intro.component";
import { NavBarComponent } from "./shared/nav-bar/nav-bar.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { SettingsComponent } from "./settings/settings.component";

registerLocaleData(localeDe);

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "markers",
    component: MarkerListComponent
  },
  {
    path: "markers/:id",
    component: MarkerItemComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  },
  {
    path: "showmarker/:id",
    component: MarkerItemComponent,
    outlet: "sidebar"
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MarkerListComponent,
    MarkerItemComponent,
    NavBarComponent,
    FooterBarComponent,
    PageNotFoundComponent,
    SidebarComponent,
    AddMarkerComponent,
    IntroComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    Ng2Webstorage,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    }),
    AgmDirectionModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "de-DE" }, MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
