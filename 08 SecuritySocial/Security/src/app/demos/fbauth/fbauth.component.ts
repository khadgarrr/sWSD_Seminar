import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-fbauth",
  templateUrl: "./fbauth.component.html",
  styleUrls: ["./fbauth.component.scss"]
})
export class FacebookAuthComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  useFBAuth() {
    this.httpClient
      .get("http://localhost:5000/api/authapi/usefbauth/")
      .subscribe(data => console.log(data));
  }
}
