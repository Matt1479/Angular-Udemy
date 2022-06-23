import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css'],
})
export class ChildThreeComponent implements OnInit {
  @ViewChild('inputRef') inputData!: ElementRef;
  @Output() sendDataC3 = new EventEmitter<ElementRef>();

  constructor() {}

  ngOnInit(): void {}

  getData() {
    console.log(
      'childThree generated data: ' + this.inputData.nativeElement.value
    );
    this.sendDataC3.emit(this.inputData.nativeElement.value);
  }
}
