import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterEvent, NavigationEnd, Route } from "@angular/router";

@Component({
  selector: "vouchers-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  children: string[];
  isDemo: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.evalScreen();
  }

  evalScreen() {
    this.children = this.router.config[0].children.map((item: Route) => {
      return item.path;
    });
    this.router.events.subscribe((evt: RouterEvent) => {
      if (evt.url != undefined) {
        let isChildRoute =
          this.children.find(item => evt.url.includes(item)) != undefined;
        this.isDemo = evt.url == "/" || isChildRoute ? true : false;
      }
    });
  }

  setSideDivWidth() {
    return this.isDemo ? "flexSideHidden" : "panel flexSide";
  }

  setSpacer() {
    return this.isDemo ? "" : "flexSpacer";
  }

  setMainDivWidth() {
    return this.isDemo ? "flexMainBig" : "panel flexMain";
  }
}
