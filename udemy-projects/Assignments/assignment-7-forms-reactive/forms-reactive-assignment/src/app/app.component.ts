import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MyCustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  statuses = ['stable', 'critical', 'finished'];

  constructor(private formBuilder: FormBuilder) {}

  projectForm = this.formBuilder.group({
    // name: [
    //   '',
    //   [Validators.required, MyCustomValidators.forbiddenName],
    //   MyCustomValidators.forbiddenNameAsync,
    // ],
    name: ['', [Validators.required], MyCustomValidators.forbiddenNameAsync],
    email: ['', [Validators.required, Validators.email]],
    // status: this.formBuilder.array(['Stable', 'Critical', 'Finished']),
    status: ['critical'],
  });

  ngOnInit(): void {
    this.projectForm.statusChanges.subscribe((status) => {
      console.log(status);
    });

    this.projectForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }
}
