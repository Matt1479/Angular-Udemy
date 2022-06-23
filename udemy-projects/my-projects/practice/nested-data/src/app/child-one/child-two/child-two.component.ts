import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css'],
})
export class ChildTwoComponent implements OnInit {
  // dataC!: ElementRef;
  @Output() sendDataC2 = new EventEmitter<ElementRef>();

  constructor() {}

  ngOnInit(): void {}

  getData(data: ElementRef) {
    console.log('childTwo got data from childThree: ' + data);
    // this.dataC = data;

    this.sendDataC2.emit(data);
  }
}
