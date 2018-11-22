import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Skill } from "./model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SkillsService {
  constructor(private httpClient: HttpClient) {}

  getSkills(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>("/assets/skills.json");
  }
}
