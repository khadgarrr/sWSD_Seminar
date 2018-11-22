import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MarkerService } from "../marker.service";
import { Marker, markerType, Direction } from "../../shared/model";
import { BLANK_MARKER } from "../../shared/consts";
import * as Rx from "rx-dom";
import { Subscription } from "rxjs";
import {
  SafeHtml,
  SafeUrl,
  SafeStyle,
  DomSanitizer
} from "@angular/platform-browser";

@Component({
  selector: "app-marker-item",
  templateUrl: "./marker-item.component.html",
  styleUrls: ["./marker-item.component.scss"]
})
export class MarkerItemComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private ms: MarkerService,
    private sanitization: DomSanitizer
  ) {}

  marker: Marker = null;
  safeImg: SafeStyle = null;

  editMode: boolean = false;
  showDirection: boolean = false;
  showWeather: boolean = false;

  geoSubsr: Subscription = null;

  direction: Direction = {
    origin: { lat: 0, lng: 0 },
    destination: { lat: 0, lng: 0 }
  };

  ngOnInit() {
    this.getMarker();
  }

  getMarkerType(type: number): string {
    return markerType[type];
  }

  //Edit Mode

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  //Marker CRUD

  getMarker() {
    this.route.params.subscribe(params => {
      let id = params["id"] == null ? 1000 : +params["id"];
      this.ms.getMarker(id).subscribe((m: Marker) => {
        if (m != null) {
          this.marker = { ...m };
        } else {
          this.marker = this.getNewMarker();
          this.editMode = true;
        }
        this.safeImg = this.sanitization.bypassSecurityTrustStyle(
          `url(${this.marker.imgURL})`
        );
        this.checkCoords(this.marker);
        this.setMarkerAsDestination();
      });
    });
  }

  getNewMarker(): Marker {
    let marker: Marker = new Marker();
    marker.imgURL = BLANK_MARKER;
    marker.type = 0;
    this.getCurrentLocation().then(p => {
      this.copyCoordsToMarker(marker, p.coords.latitude, p.coords.longitude);
    });
    return marker;
  }

  saveMarker() {
    this.ms.saveMarker(this.marker);
    this.toggleEdit();
  }

  //Marker GPS

  checkCoords(m: Marker) {
    if (this.marker.lat != undefined && this.marker.lng != undefined) {
      this.marker.hasCoords = true;
    }
  }

  setMarkerAsDestination() {
    if (this.marker != undefined) {
      this.direction.destination.lat = this.marker.lat;
      this.direction.destination.lng = this.marker.lng;
    }
  }

  copyCoordsToMarker(marker: Marker, lat: number, lng: number) {
    marker.lat = lat;
    marker.lng = lng;
    marker.hasCoords = true;
  }

  getCurrentLocation(): Promise<Position> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          resolve(position);
        },
        () => {
          reject("We could not get your location");
        }
      );
    });
  }

  setMarkerLocation() {
    this.getCurrentLocation()
      .then((p: Position) => {
        this.copyCoordsToMarker(
          this.marker,
          p.coords.latitude,
          p.coords.longitude
        );
      })
      .catch(err => console.log(err));
  }

  watchDirection() {
    var source = Rx.DOM.geolocation.watchPosition();
    this.geoSubsr = source.subscribe((data: any) => {
      this.direction.origin.lat = data.coords.latitude;
      this.direction.origin.lng = data.coords.longitude;
      this.showDirection = true;
    });
  }

  //Camera

  takePicture() {
    console.log("Taking picture ...");
  }
}
