import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {

  constructor(private ps : PersonService) { }

  persons: Person [];
  current: Person;   

  ngOnInit() {
    this.ps.getPersons().then(data=>{
      this.persons = data;
      this.current = this.persons[0];
    })    
  }

  selectPerson(p:Person){
    this.current = p;
  }

  sendtoService(p:Person){
    console.log("saving to service");
    console.log(p);
  }
}