import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: [
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './server-element.component.css',
  ],
  // encapsulation: ViewEncapsulation.Emulated, // default
  // encapsulation: ViewEncapsulation.None,
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element!: {
    type: string;
    name: string;
    content: string;
  };
  // @Input() - exposing properties to other components
  @Input() name!: string;
  // @ViewChild() - getting access to (content) DOM elements
  @ViewChild('heading', { static: true }) header!: ElementRef;
  // @ContentChild() - getting access to content of another component, which is projected with ng-content
  @ContentChild('paragraphElement', { static: true }) paragraph!: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges called!');
    // console.log(changes);
    // returns object: element, content, name, type, firstChange: bool, previousValue, etc
  }

  ngOnInit() {
    // console.log('ngOnInit called!');
    // console.log(this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    // console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    // console.log('ngAfterContentInit called!');
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy called!');
  }
}
