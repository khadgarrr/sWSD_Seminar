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

import { environment } from "../environments/environment";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { MarkerItemComponent } from "./markers/marker-item/marker-item.component";
import { MarkerListComponent } from "./markers/marker-list/marker-list.component";
import { MarkerService } from "./markers/marker.service";
import { MaterialModule } from "./material.module";
import { FooterBarComponent } from "./shared/footer-bar/footer-bar.component";
import { IntroComponent } from "./shared/intro/intro.component";
import { NavBarComponent } from "./shared/nav-bar/nav-bar.component";
import { PageNotFoundComponent } from "./shared/page-not-found/page-not-found.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { ServiceWorkerModule, SwUpdate, SwPush } from "@angular/service-worker";
import { SettingsComponent } from "./settings/settings.component";
import { MatSnackBar } from "@angular/material";

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
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    }),
    AgmDirectionModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [{ provide: LOCALE_ID, useValue: "de-DE" }, MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private update: SwUpdate,
    private push: SwPush,
    private snackbar: MatSnackBar
  ) {
    // this.handleUpdate(update, snackbar);
    // this.handlePush(push, snackbar);
  }

  private handlePush(push: SwPush, snackbar: MatSnackBar) {
    const key = "";
    push
      .requestSubscription({ serverPublicKey: key })
      .then(PushSubscription => {
        console.log(PushSubscription.toJSON());
      });
    push.messages.subscribe(msg => {
      snackbar.open(JSON.stringify(msg), "Push Notification", {
        duration: 3000
      });
    });
  }

  private handleUpdate(update: SwUpdate, snackbar: MatSnackBar) {
    update.available.subscribe(update => {
      const snack = snackbar.open("Update available", "Info", {
        duration: 3000
      });
      snack.onAction().subscribe(() => {
        window.location.reload();
      });
    });
  }
}
