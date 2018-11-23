import { Component, OnInit } from "@angular/core";

import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}

  login = {
    email: "",
    pwd: ""
  };

  logIn() {
    if (!this.login.email || !this.login.pwd) {
      console.log("Error !", "You must enter email and password");
    } else {
      this.auth.logOn(this.login.email, this.login.pwd).then(returned => {
        console.log("Logon", "you are now logged on");
      });
    }
  }

  logOut() {
    this.auth.logOff();
  }
}
