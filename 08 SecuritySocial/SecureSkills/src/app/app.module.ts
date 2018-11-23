import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";

import { RegisterComponent } from "./firebase/register/register.component";
import { LoginComponent } from "./firebase/login/login.component";
import { FirebaseComponent } from "./firebase/firebase.component";
import { MaterialModule } from "./material.module";
import { AuthService } from "./firebase/auth.service";
import { AuthInterceptor } from "./auth.interceptor";

export const firebaseConfig = {
  apiKey: "AIzaSyCNyYHU_Cx-vG-xufr4TNQWveqf_Zq2ObI",
  authDomain: "skills-f0d48.firebaseapp.com",
  databaseURL: "https://skills-f0d48.firebaseio.com",
  projectId: "skills-f0d48",
  storageBucket: "skills-f0d48.appspot.com",
  messagingSenderId: "284442445994"
};
// export const firebaseConfig = {
//     apiKey: "AIzaSyCNyYHU_Cx-vG-xufr4TNQWveqf_Zq2ObI",
//     authDomain: "skills-f0d48.firebaseapp.com",
//     databaseURL: "https://skills-f0d48.firebaseio.com",
//     projectId: "skills-f0d48",
//     storageBucket: "skills-f0d48.appspot.com",
//     messagingSenderId: "284442445994"
// };

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FirebaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
