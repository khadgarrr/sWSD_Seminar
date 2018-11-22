import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-jwt",
  templateUrl: "./jwt.component.html",
  styleUrls: ["./jwt.component.scss"]
})
export class JwtComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getJwtToken();
  }

  getJwtToken() {
    this.httpClient
      .get("http://localhost:5000/api/authapi/getsimplejwt/")
      .subscribe(data => console.log(data));
  }
}
