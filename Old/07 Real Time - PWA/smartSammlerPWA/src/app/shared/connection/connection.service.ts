import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/map";
import "rxjs/add/observable/merge";

@Injectable({
  providedIn: "root"
})
export class ConnectionService {
  constructor() {
    this.isOnline = this.createOnline$();
  }

  public isOnline: Observable<boolean>;

  createOnline$() {
    //merge several events into one
    return Observable.merge(
      //use .map() to transform the returned Event type into a true/false value
      Observable.fromEvent(window, "offline").map(() => false),
      Observable.fromEvent(window, "online").map(() => true),
      //start the stream with the current online status
      Observable.create(sub => {
        sub.next(navigator.onLine);
        sub.complete(); //this one only emits once, so now we end it
      })
    );
  }
}
