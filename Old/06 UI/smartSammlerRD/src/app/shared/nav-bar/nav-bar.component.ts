import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";
import { MarkerService } from "../../markers/marker.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
  constructor(private ms: MarkerService) {}

  appName = environment.appName;
  links = [{ Title: "Marker List", Link: "markers" }];

  ngOnInit() {}

  addMarker() {
    this.ms.showMarker(0);
  }
}
