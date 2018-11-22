import { Component, OnInit } from "@angular/core";
import { ObservableMedia, MediaChange } from "@angular/flex-layout";
import { MarkerService } from "./markers/marker.service";
import { MatSnackBar } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "app";
  ltSM = false;

  constructor(private ar: ActivatedRoute, private media: ObservableMedia) {}

  ngOnInit(): void {
    this.media.subscribe((change: MediaChange) => {
      this.ltSM = change.mqAlias == "sm" ? true : false;

      // if (change.mqAlias == "sm") {
      //   this.snackbar.open("responding to small", "Info", {
      //     duration: 2000
      //   });
      // } else {
      //   this.snackbar.open("responding to big", "Info", {
      //     duration: 2000
      //   });
      // }
    });
  }
}
