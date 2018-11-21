import { Observable } from 'rxjs/Rx';
import { Person } from '../../shared';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reative-validation',
  templateUrl: './reative-validation.component.html',
  styleUrls: ['./reative-validation.component.css']
})
export class ReativeValidationComponent implements OnInit {

  personForm: FormGroup;
  personName: FormControl;
  personAge: FormControl;
  personGender: FormControl;

  person : Person = {name: "Heinz", gender: "male", age: 12, mail: "derschoeneheinz@xyz.at"};
  
  constructor() { }

  ngOnInit() {

    this.personName = new FormControl(this.person.name, 
      [Validators.required, 
      Validators.minLength(4), 
      this.validateNotHugo],     
      this.validateNamesExist);
    
    this.personAge = new FormControl(this.person.age, 
      Validators.min(120));
    
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
  }

  validateName(){
    return this.personName.valid || this.personName.untouched
  }

  validateNotHugo(control: FormControl): {[s: string]: boolean}{
    if(control.value === "Hugo"){
      return {'hugoNotAllowed': true}
    }
    return null;
  }

  validateNamesExist(control: FormControl): Promise<any> | Observable<any>{
    
    //Mocking Http Call to service to check weather user exists
    const result = new Promise<any>((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value === "Alexander"){
          resolve({'UserExists': true});
        }
        else{
          resolve(null);
        }
      }, 1500)
    })
    return result;
  }

  validateForm(form){
    form.updateValueAndValidity();
    form.controls['pName'].updateValueAndValidity();
  }
}
