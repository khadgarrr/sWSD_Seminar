import { Injectable } from "@angular/core";
import { SuperHero } from "../model";
import { from, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  private heroList: SuperHero[];

  constructor() {
    // new Observable<SuperHero[]>(observer => {
    //   setTimeout(() => {
    //     observer.next([
    //       {
    //         id: 1,
    //         name: "Superman",
    //         strength: 5,
    //         pet: "dog",
    //         powerSkill: "flying"
    //       },
    //       {
    //         id: 2,
    //         name: "DJ-Ötzi",
    //         strength: 4,
    //         pet: "cat",
    //         powerSkill: "beer drinking"
    //       }
    //     ] as SuperHero[]);
    //   }, 1000);
    // });

    this.heroList = [
      {
        id: 1,
        name: "Superman",
        strength: 5,
        pet: "dog",
        powerSkill: "flying"
      },
      {
        id: 2,
        name: "DJ-Ötzi",
        strength: 4,
        pet: "cat",
        powerSkill: "beer drinking"
      }
    ];
  }

  getHeroList(): SuperHero[] {
    return this.heroList;
  }

  getHero(id: number): SuperHero {
    return this.heroList.find(hero => hero.id === id);
  }

  saveHero(hero: SuperHero) {
    if (this.heroList.indexOf(hero) < 0) {
      this.heroList.push(hero);
    }
  }

  dropHero(id: number) {
    this.heroList = this.heroList.filter(hero => {
      return hero.id != id;
    });
  }
}
