import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: ` <p class="success-alert">Success message</p> `,
  styles: [
    `
      .success-alert {
        padding: 20px;
        background-color: palegreen;
        border: 1px solid darkolivegreen;
      }
    `,
  ],
})
export class SuccessAlertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
