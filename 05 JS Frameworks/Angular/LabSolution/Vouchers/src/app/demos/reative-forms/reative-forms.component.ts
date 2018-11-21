import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Person } from "../../shared/index";

@Component({
  selector: 'app-reative-forms',
  templateUrl: './reative-forms.component.html',
  styleUrls: ['./reative-forms.component.css']
})
export class ReativeFormsComponent implements OnInit {

  personForm: FormGroup;
  personName: FormControl;
  personAge: FormControl;
  personGender: FormControl;

  person : Person = {name: "Heinz", gender: "male", age: 12, mail: "derschoeneheinz@xyz.at"};
  
  constructor() { }

  ngOnInit() {
    this.personName = new FormControl(this.person.name,);
    this.personAge = new FormControl(this.person.age);
    this.personGender = new FormControl(this.person.gender);

    this.personForm = new FormGroup({
      pName: this.personName,
      pAge: this.personAge,
      pGender: this.personGender
    })
  }

  savePerson(formValues){
    console.log('saving person with values: ');
    console.log(formValues);
    //does not work because of curren structure of person obj
    //let person: Person = <Person>formValues; 
  }
}
