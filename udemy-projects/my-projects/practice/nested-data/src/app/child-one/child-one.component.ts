import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css'],
})
export class ChildOneComponent implements OnInit {
  @Output() sendDataC1 = new EventEmitter<ElementRef>();
  @Input() childOneProp!: string;

  constructor() {}

  ngOnInit(): void {}

  getData(data: ElementRef) {
    console.log('childOne got data from childTwo: ' + data);
    this.sendDataC1.emit(data);
    console.log(
      'ChildOneComponent got data from RootComponent: ' + this.childOneProp
    );
  }
}
