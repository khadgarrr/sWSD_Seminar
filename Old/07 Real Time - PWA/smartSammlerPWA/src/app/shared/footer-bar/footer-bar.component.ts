import { Component, OnInit } from "@angular/core";
import { MarkerService } from "../../markers/marker.service";
import { Marker } from "../model";

@Component({
  selector: "app-footer-bar",
  templateUrl: "./footer-bar.component.html",
  styleUrls: ["./footer-bar.component.scss"]
})
export class FooterBarComponent implements OnInit {
  constructor(private ms: MarkerService) {}

  ngOnInit() {}

  addMarker() {
    this.ms.showMarker(0);
  }
}
