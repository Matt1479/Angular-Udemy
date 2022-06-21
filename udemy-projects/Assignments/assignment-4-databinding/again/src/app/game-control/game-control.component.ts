import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() intervalInit = new EventEmitter<number>();
  intervalHolder!: any;
  num: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onStart() {
    this.intervalHolder = setInterval(() => {
      this.intervalInit.emit(this.num);
      this.num++;
    }, 1000);
  }

  onPause() {
    clearInterval(this.intervalHolder);
  }
}
