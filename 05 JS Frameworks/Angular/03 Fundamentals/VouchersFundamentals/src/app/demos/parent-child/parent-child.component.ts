import { Component, OnInit } from '@angular/core';
import { PersonService } from '../persons/person.service';
import { Person } from '../persons/person';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  persons : Person[];
  constructor(private ps: PersonService) { }

  ngOnInit() {
    this.ps.getPersons().then(data=>{
      this.persons = data;
    })
  }

}
