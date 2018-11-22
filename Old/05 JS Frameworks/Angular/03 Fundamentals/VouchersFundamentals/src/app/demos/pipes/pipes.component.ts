import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  person = {id: 1, name: "Alex", age: 47, imgUrl: "", salery: 2000, dateOfBirth: new Date(1970, 3, 2,15, 0) }; // 2.4.70

  persons = [
    {name: "Heinz", gender: "male"}, 
    {name: "Brunhilde", gender: "female"},
    {name: "Susi", gender: "female"}];

  constructor() { }

  ngOnInit() {
  }

}
