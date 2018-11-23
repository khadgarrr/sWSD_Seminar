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
  err: any;

  callWS() {
    this.resp = null;
    this.httpClient.get("http://localhost:5000/api/skills").subscribe(
      data => {
        console.log("Skills received:", data);
        this.resp = data;
      },
      err => {
        console.log("Error fetching skills:", err);
        this.err = "401 - You are not authenticated";
      }
    );
  }
}
