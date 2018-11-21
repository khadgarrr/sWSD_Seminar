
import { Person } from '../persons/persons.component';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() person: Person;
  @Input() edit: boolean;
  @Output() savePerson : EventEmitter<Person> = new EventEmitter()

  constructor() { 
    
  }

  ngOnInit() {
    console.log(this.person)
  }

  doSave(){
    this.savePerson.emit(this.person)
  }

  doDelete(){
    console.log(`deleting ${this.person.name}`);
  }

}
