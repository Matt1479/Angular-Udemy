import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // create arrays to hold evens or odds
  evenNumsArr: Array<number> = [];
  oddNumsArr: Array<number> = [];

  onIntervalInit(num: number) {
    if (num % 2 === 0) {
      this.evenNumsArr.push(num);
    } else {
      this.oddNumsArr.push(num);
    }
  }
}
