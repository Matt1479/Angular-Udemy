import { Component, OnInit } from '@angular/core';
import {
  AsyncValidatorFn,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  // declare the form
  signupForm!: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  // initialize the form before the template is rendered
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      // create a nested form group
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        ),
      }),
      gender: new FormControl('male'),
      // create hobbies prop which holds an array of Form controls
      hobbies: new FormArray([]),
    });

    // you can call this on individual form control
    // this.signupForm.valueChanges.subscribe((value) => console.log(value));
    this.signupForm.statusChanges.subscribe((value) => console.log(value));

    // this.signupForm.setValue({
    //   userData: {
    //     username: 'Mark',
    //     email: 'mark@test.com',
    //   },
    //   gender: 'male',
    //   hobbies: [],
    // });

    this.signupForm.patchValue({
      userData: {
        username: 'Mark',
      },
      gender: 'male',
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  // getControls() {
  //   return (<FormArray>this.signupForm.get('hobbies')).controls;
  // }

  // alternative:
  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // Validator has to have an argument of type FormControl
  forbiddenNames(control: FormControl): {
    // validator has to return something, which is
    // any key of type string, the value has to be a boolean
    [s: string]: boolean;
  } {
    // if forbiddenUsernames contains a certain element
    // the element is the value of our control we pass/check
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    // if validation is successfull, you have to return nothing or null
    return null as any;
    // null === form control is valid

    // e.g. this function would return: {nameIsForbidden: true}
  }

  forbiddenEmails(control: any) {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
