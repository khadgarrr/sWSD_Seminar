import { Component, OnInit } from "@angular/core";
import { MarkerService } from "../markers/marker.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  constructor(private ms: MarkerService) {}

  ngOnInit() {}

  reset() {
    this.ms.resetMarkers();
  }
}
