import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as Rx from "rx-dom";
import { Subscription } from "rxjs";
import { ConnectionService } from "../../shared/connection/connection.service";
import { BLANK_MARKER } from "../../shared/consts";
import { Direction, Marker, markerType } from "../../shared/model";
import { ScreenService } from "../../shared/screen/screen.service";
import { MarkerService } from "../marker.service";

@Component({
  selector: "app-marker-item",
  templateUrl: "./marker-item.component.html",
  styleUrls: ["./marker-item.component.scss"]
})
export class MarkerItemComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private ms: MarkerService,
    private cs: ConnectionService,
    private screen: ScreenService
  ) {}

  marker: Marker = null;
  imgHeight: number;

  online: boolean;
  mq: string;

  editMode: boolean = false;
  showDirection: boolean = false;
  showWeather: boolean = false;

  direction: Direction = {
    origin: { lat: 0, lng: 0 },
    destination: { lat: 0, lng: 0 }
  };

  geoSubs: Subscription = null;
  screenSubs: Subscription = null;
  conSubs: Subscription = null;

  ngOnInit() {
    this.getMarker();
    this.subscribeScreen();
    this.subscriptConnetionState();
  }

  ngOnDestroy(): void {
    if (this.geoSubs != null) this.geoSubs.unsubscribe();
    if (this.screenSubs != null) this.screenSubs.unsubscribe();
    if (this.conSubs != null) this.conSubs.unsubscribe();
  }

  private subscribeScreen() {
    this.conSubs = this.screenSubs = this.screen.MQ.subscribe((mq: string) => {
      this.imgHeight = mq == "xs" ? 100 : 250;
    });
  }

  private subscriptConnetionState() {
    this.cs.isOnline.subscribe(online => {
      this.online = online;
    });
  }

  getMarkerType(type: number): string {
    return markerType[type];
  }

  //Edit Mode

  toggleEdit(showSnack: boolean = false) {
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
    this.geoSubs = source.subscribe((data: any) => {
      this.direction.origin.lat = data.coords.latitude;
      this.direction.origin.lng = data.coords.longitude;
      this.showDirection = true;
    });
  }

  //Camera

  takePicture() {
    console.log("take pic");
  }
}
