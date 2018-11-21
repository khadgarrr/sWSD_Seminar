import { Person } from '../../shared';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-builder',
  templateUrl: './forms-builder.component.html',
  styleUrls: ['./forms-builder.component.css']
})
export class FormsBuilderComponent implements OnInit {

  personForm: FormGroup;
  person : Person = {name: "Heinz", gender: "male", age: 12, mail: "derschoeneheinz@xyz.at"};
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.personForm = this.fb.group({
      personName: [this.person.name, Validators.required],
      personAge: [this.person.age],
      personGender: [this.person.gender]
    })
  }

  savePerson(formValues){
    console.log('saving person with values: ');
    console.log(formValues);
    //does not work because of current structure of person obj
    //let person: Person = <Person>formValues; 
  }
}
