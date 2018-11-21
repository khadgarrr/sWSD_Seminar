import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons: Person [] =  [
    {name: "Heinz", gender: "male", age: 12}, 
    {name: "Brunhilde", gender: "female", age: 22},
    {name: "Susi", gender: "female", age: 45}];

  current: Person;  

  constructor() { }

  ngOnInit() {
    this.current = this.persons[0];
  }

  selectPerson(p:Person){
    this.current = p;
  }

  sendtoService(p:Person){
    console.log("saving to service");
    console.log(p);
  }
}

export class Person {
  name: string;
  gender: string;
  age: number;
}