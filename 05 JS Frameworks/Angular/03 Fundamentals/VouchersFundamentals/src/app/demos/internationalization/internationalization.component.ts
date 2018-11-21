import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internationalization',
  templateUrl: './internationalization.component.html',
  styleUrls: ['./internationalization.component.css']
})
export class InternationalizationComponent implements OnInit {

  person = {id: 1, name: "Alex", age: 47, imgUrl: "", salery: 2000, dateOfBirth: new Date(1970, 3, 2, 15, 0) }; // 2.4.70

  val = '{provide: LOCALE_ID, useValue: "de-DE"}';

  constructor() { }

  ngOnInit() {
  }

}
