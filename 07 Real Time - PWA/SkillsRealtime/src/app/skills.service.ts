import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Skill } from "./model";
import { HttpClient } from "@angular/common/http";
import * as signalR from "@aspnet/signalr";

@Injectable({
  providedIn: "root"
})
export class SkillsService {
  private arrSkills: Skill[];
  private skills: BehaviorSubject<Skill[] | []>;
  private hubConnetion: signalR.HubConnection;

  constructor(private httpClient: HttpClient) {
    this.initSkills();
  }

  private initSkills() {
    this.skills = new BehaviorSubject([]);
    this.httpClient
      .get<Skill[]>("http://localhost:5000/api/skills")
      .subscribe(data => {
        this.arrSkills = data;
        this.skills.next(this.arrSkills);
        this.initSocketConnection();
      });
  }

  private initSocketConnection() {
    this.hubConnetion = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5000/skillhub")
      .build();

    this.hubConnetion.on("skillsChanged", (data: Skill[]) => {
      console.log("Data received from hub", data);
      this.arrSkills = data;
      this.skills.next(this.arrSkills);
    });

    this.hubConnetion.start();
  }

  getSkills(): Observable<Skill[]> {
    return this.skills;
  }
}
