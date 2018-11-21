import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-firebase",
  templateUrl: "./firebase.component.html",
  styleUrls: ["./firebase.component.scss"]
})
export class FirebaseComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  resp: any;

  callWS() {
    this.resp = null;
    this.httpClient
      .get("http://localhost:5000/api/secure")
      .subscribe(
        data => (this.resp = data),
        () => (this.resp = "401 - You are not authenticated")
      );
  }
}
