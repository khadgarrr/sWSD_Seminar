import { Component, OnInit } from "@angular/core";
import { Router, Route } from "@angular/router";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  rootRoutes: Route[];
  currentUser: firebase.User;

  constructor(private router: Router, private as: AuthService) {}

  ngOnInit() {
    this.rootRoutes = this.router.config.filter(
      item =>
        item.path.includes("/") == false &&
        item.path.includes("*") == false &&
        item.outlet == null
    );
    this.as.User.subscribe(user => (this.currentUser = user));
  }
}
