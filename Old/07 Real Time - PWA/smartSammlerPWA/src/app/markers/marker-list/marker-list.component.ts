import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

import { Marker, markerType } from "../../shared/model";
import { MarkerService } from "../marker.service";
import { MatSnackBar } from "@angular/material";
import { ScreenService } from "../../shared/screen/screen.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-marker-list",
  templateUrl: "./marker-list.component.html",
  styleUrls: ["./marker-list.component.scss"]
})
export class MarkerListComponent implements OnInit, OnDestroy {
  constructor(
    private ms: MarkerService,
    private router: Router,
    private snackbar: MatSnackBar,
    private screen: ScreenService
  ) {}

  markers: Marker[] = null;

  online: boolean;
  mq: string;

  screenSubs: Subscription = null;

  ngOnInit() {
    this.getMarkers();
    this.subscribeScreen();
  }

  ngOnDestroy(): void {
    if (this.screenSubs != null) this.screenSubs.unsubscribe();
  }

  private getMarkers() {
    this.ms.getMarkers().subscribe(data => (this.markers = data));
  }

  private subscribeScreen() {
    this.screenSubs = this.screen.MQ.subscribe((change: string) => {
      this.mq = change;
    });
  }

  getMarkerType(type: number): string {
    return markerType[type];
  }

  showMarker(m: Marker) {
    this.ms.showMarker(m.id);
  }

  deleteMarker(m: Marker) {
    this.ms.removeMarker(m);
    this.snackbar.open("Marker deleted", "Info", {
      duration: 2000
    });
  }
}
