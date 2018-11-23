import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  constructor(public fbAuth: AngularFireAuth, public as: AuthService) {}

  ngOnInit() {}

  login = {
    displayName: "",
    email: "",
    pwd: "",
    pwd2: ""
  };

  registerUser() {
    if (this.login.pwd != this.login.pwd2) {
      console.log("Passwords", "Your passwords dont match");
      this.login.pwd = "";
      this.login.pwd2 = "";
    } else {
      if (this.login.displayName == "") {
        this.login.displayName = this.login.email;
      }

      this.as
        .createUser(this.login.email, this.login.pwd)
        .then((user: firebase.User) => {
          console.log(user.email, "Acct created - Please Login");
        });
    }
  }
}
