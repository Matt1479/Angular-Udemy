import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  // decorating with @Output() decorator to make it listenable from outside
  // you only need to expose this event since you can access event data through it
  @Output() intervalInit = new EventEmitter<number>();
  // interval variable that holds the interval method
  interval!: any;
  num: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onStart() {
    // use arrow functions to be able to use this keyword w/o binding it
    this.interval = setInterval(() => {
      this.intervalInit.emit(this.num);
      this.num++;
    }, 1000);
  }

  onPause() {
    clearInterval(this.interval);
  }
}
