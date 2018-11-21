import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MediaChange, ObservableMedia } from "@angular/flex-layout";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Subscription } from "rxjs/Subscription";
import { Marker } from "../shared/model";
import { environment } from "../../environments/environment";

@Injectable()
export class MarkerService {
  constructor(
    private router: Router,
    private obsMedia: ObservableMedia,
    private httpClient: HttpClient
  ) {
    this.subscribeScreen();
    this.updateMarkersFromServer();
  }

  //Marker Data initialization & operations
  private arrMarkers: Marker[] = [];
  private markers: BehaviorSubject<Marker[]> = new BehaviorSubject(
    this.arrMarkers
  );

  private updateMarkersFromServer() {
    this.httpClient
      .get<Marker[]>(`${environment.apiURL}markers`)
      .subscribe(data => {
        this.arrMarkers = data;
        this.markers.next(this.arrMarkers);
      });
  }

  resetMarkers() {
    this.updateMarkersFromServer();
    this.router.navigateByUrl(`/`);
  }

  getMarkers(): Observable<Marker[]> {
    return this.markers;
  }

  getMarker(id: number): Observable<Marker> {
    return this.markers.pipe(map(m => m.find((m: Marker) => m.id == id)));
  }

  saveMarker(m: Marker): void {
    if (m.id == undefined) {
      this.addMarker(m);
    } else {
      this.updateMarker(m);
    }
    this.saveMarkerRemote(m).subscribe(() =>
      this.markers.next(this.arrMarkers)
    );
  }

  private updateMarker(m: Marker): void {
    let old = this.arrMarkers.find(m => m.id == m.id);
    var idx = this.arrMarkers.indexOf(old);
    this.arrMarkers.splice(idx, 1, m);
  }

  private addMarker(m: Marker): void {
    this.arrMarkers.push(m);
  }

  private saveMarkerRemote(m: Marker): Observable<Marker> {
    return this.httpClient.post<Marker>(`${environment.apiURL}markers`, m);
  }

  removeMarker(m: Marker): void {
    var idx = this.arrMarkers.indexOf(m);
    if (idx !== -1) {
      this.arrMarkers.splice(idx, 1);
    }
    this.removeMarkerRemote(m).subscribe(() =>
      this.markers.next(this.arrMarkers)
    );
  }

  private removeMarkerRemote(m: Marker): Observable<any> {
    return this.httpClient.delete(`${environment.apiURL}markers/${m.id}`);
  }

  //Responsive Screen Service - in larger projects outsourced to it's own service

  private watcher: Subscription;
  ScreenGtSmall: boolean;
  private currentMQ: string;

  private subscribeScreen() {
    this.watcher = this.obsMedia.subscribe((change: MediaChange) => {
      this.currentMQ = change.mqAlias;
      switch (this.currentMQ) {
        case "xs":
          this.ScreenGtSmall = false;
          break;
        case "sm":
          this.ScreenGtSmall = false;
          break;
        default:
          this.ScreenGtSmall = true;
          break;
      }
    });
  }

  //Responsive Routing

  showMarker(id: number): void {
    if (this.ScreenGtSmall) {
      this.router.navigate(["", { outlets: { sidebar: ["showmarker", id] } }]);
    } else {
      this.router.navigate(["", { outlets: { sidebar: null } }]);
      this.router.navigateByUrl(`/markers/${id}`);
    }
  }
}
