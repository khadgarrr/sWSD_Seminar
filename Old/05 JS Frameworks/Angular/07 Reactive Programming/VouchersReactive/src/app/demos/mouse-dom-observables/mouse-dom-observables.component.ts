import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { MediaItem } from "../media-item";
import { MediaService } from "../observables/media.service";
import "rxjs/add/observable/fromEvent";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-mouse-dom-observables",
  templateUrl: "./mouse-dom-observables.component.html",
  styleUrls: ["./mouse-dom-observables.component.scss"]
})
export class MouseDomObservablesComponent implements OnInit {
  media: Observable<MediaItem[]>;
  playing: Observable<MediaItem[]>;
  upcoming: Observable<MediaItem[]>;

  mouseSubs: Subscription;
  buttonClickSubs: Subscription;

  result: any;

  constructor(private mediaService: MediaService) {}

  ngOnInit() {}

  useMouse() {
    let mouse = Observable.fromEvent(document, "mousemove");

    this.mouseSubs = mouse
      .map((evt: MouseEvent) => {
        return { X: evt.clientX, Y: evt.clientY };
      })
      .subscribe(data => console.log("Mouse Moved @: ", data));
  }

  unsubscribeMouseEvt() {
    this.mouseSubs.unsubscribe();
    console.log("unsubscribed from Mouse Event");
  }

  handleClick() {
    let buttonClick = Observable.fromEvent(
      document.getElementById("mybutton"),
      "click"
    );
    this.buttonClickSubs = buttonClick.subscribe(evt =>
      console.log("Button Clicked")
    );
  }

  useDOM() {
    let err = Observable.fromEvent(document, "error");
    err.subscribe(data => console.log("error happened", err));
  }

  showDashboardDetails() {
    this.media = this.mediaService.getMediaStream();
    this.media = this.mediaService.getObservableUsingBehaviorSubj();
    let dt = new Date();

    this.playing = this.media.map(mis =>
      mis.filter(mi => mi.startTime < new Date())
    );
    this.upcoming = this.media.map(mis =>
      mis.filter(mi => mi.startTime >= new Date())
    );
  }

  showDetail(item: MediaItem) {
    item != null
      ? console.log("hovering over: ", item)
      : console.log("hovering out");
  }
}
