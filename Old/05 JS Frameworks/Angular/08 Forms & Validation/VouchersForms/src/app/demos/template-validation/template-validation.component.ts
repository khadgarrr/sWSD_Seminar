import { Person } from '../../shared';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template-validation',
  templateUrl: './template-validation.component.html',
  styleUrls: ['./template-validation.component.css']
})
export class TemplateValidationComponent implements OnInit {
  @ViewChild('personForm') form: NgForm;

  person : Person = {name: "Heinz", gender: "male", age: 12, mail: "derschoeneheinz@xyz.at"};
    
    constructor() { }
  
    ngOnInit() {
      // this.form.valueChanges.subscribe(data => console.log('Form values changed', data));
      // this.form.statusChanges.subscribe(data => console.log('Form status changed', data));
      // this.form.errors.subscribe(data => console.log('Form errors:', data));
    }  

    savePerson(personForm):void {
      console.log('saving person with values: ');
      
      console.log("Current personForm: ")
      console.log(personForm);
      
      console.log("Current personForm using ViewChild: ")
      console.log(this.form);
      console.log(this.form.controls["personName"].value)
    }
}
