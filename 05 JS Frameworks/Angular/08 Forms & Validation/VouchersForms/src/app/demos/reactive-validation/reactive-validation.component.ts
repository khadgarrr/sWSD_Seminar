import { Observable } from "rxjs/Rx";
import { Person } from "../../shared";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ValidationErrors } from "@angular/forms/src/directives/validators";

@Component({
  selector: "app-reactive-validation",
  templateUrl: "./reactive-validation.component.html",
  styleUrls: ["./reactive-validation.component.css"]
})
export class ReactiveValidationComponent implements OnInit {
  personForm: FormGroup;
  person: Person = {
    name: "Heinz",
    gender: "male",
    age: 20,
    mail: "derschoeneheinz@xyz.at"
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.personForm = this.fb.group({
      name: [
        this.person.name,
        [
          Validators.required,
          Validators.minLength(4),
          this.validateNotHugo
        ],
        this.validateNamesExist.bind(this)
      ],
      age: [this.person.age, [Validators.min(18), Validators.max(99)]],
      gender: [this.person.gender]
    });

    this.personForm.valueChanges.subscribe(vals =>{
      console.log("changes happening @form: ", vals)
    })
  }

  savePerson(formValues) {
    console.log("saving person with values: ");
    console.log(formValues);
  }

  violatesMinLenght() {
    let result = false;
    let errs : ValidationErrors =  this.personForm.controls.name.errors ;

    if(errs!=null){
      console.log("Errors in Name field: ", errs)
      if(errs["minlength"]){
        result = true;
      }
    }
    return result;
  }

  validateNotHugo(control: FormControl): { [s: string]: boolean } {
    if (control.value === "Hugo") {
      return { hugoNotAllowed: true };
    }
    return null;
  }

  validateNamesExist(control: FormControl): Promise<any> | Observable<any> {
    //Mocking Http Call to service to check weather user exists
    const result = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "Alexander") {
          resolve({ UserExists: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return result;
  }

  validateForm(form) {
    form.updateValueAndValidity();
    form.controls["name"].updateValueAndValidity();
  }
}
