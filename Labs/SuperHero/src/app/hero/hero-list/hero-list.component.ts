import { Component, OnInit } from "@angular/core";
import { HeroService } from "../hero.service";
import { SuperHero } from "src/app/model";

@Component({
  selector: "app-hero-list",
  templateUrl: "./hero-list.component.html",
  styleUrls: ["./hero-list.component.scss"]
})
export class HeroListComponent implements OnInit {
  public heroList: SuperHero[];
  public currentHero: SuperHero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroList = this.heroService.getHeroList();
  }

  editHero(hero: SuperHero) {
    this.currentHero = hero;
  }
}
