import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Marker, markerType } from "../../shared/model";
import { MarkerService } from "../marker.service";

@Component({
  selector: "app-marker-list",
  templateUrl: "./marker-list.component.html",
  styleUrls: ["./marker-list.component.scss"]
})
export class MarkerListComponent implements OnInit {
  constructor(private ms: MarkerService, private router: Router) {}

  markers: Marker[] = null;

  ngOnInit() {
    this.ms.getMarkers().subscribe(data => (this.markers = data));
  }

  getMarkerType(type: number): string {
    return markerType[type];
  }

  showMarker(m: Marker) {
    this.ms.showMarker(m.id);
  }

  deleteMarker(m: Marker) {
    this.ms.removeMarker(m);
  }
}
