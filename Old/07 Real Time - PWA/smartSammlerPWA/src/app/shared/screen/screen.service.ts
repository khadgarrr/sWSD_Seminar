import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ObservableMedia, MediaChange } from "@angular/flex-layout";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ScreenService {
  constructor(private media: ObservableMedia) {
    this.media.subscribe((change: MediaChange) => {
      this.mq.next(change.mediaQuery);
    });
  }

  private mq: BehaviorSubject<string> = new BehaviorSubject("md");
  public MQ: Observable<string> = this.mq.asObservable();
}
