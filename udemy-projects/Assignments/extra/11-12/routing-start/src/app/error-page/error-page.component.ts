import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
})
export class ErrorPageComponent implements OnInit {
  errorMessage!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // get the data snapshot (if the data doesn't change while you're on this page)
    // this.errorMessage = this.route.snapshot.data['message'];

    // or in case this would change while you're on this page,
    // subscribe to listen & rect to changes
    this.route.data.subscribe((data: Data) => {
      this.errorMessage = data['message'];
    });
  }
}
