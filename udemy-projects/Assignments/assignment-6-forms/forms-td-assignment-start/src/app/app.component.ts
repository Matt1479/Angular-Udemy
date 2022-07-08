import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') f!: NgForm;

  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSelectedSubscription = 'Advanced';

  formObject = {
    email: '',
    subscription: '',
    password: '',
  };
  submitted = false;

  onSubmit() {
    // console.log(this.form.value);
    this.submitted = true;

    this.formObject = {
      email: this.f.value.email,
      subscription: this.f.value.subscription,
      password: this.f.value.password,
    };

    this.f.reset();
  }
}
