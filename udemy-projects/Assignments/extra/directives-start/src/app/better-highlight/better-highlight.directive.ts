import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  // @Input('appBetterHighlight') highlightColor: string = 'blue';
  // binding a style.styleName to (any DOM) element with @HostBinding()
  @HostBinding('style.backgroundColor') backgroundColor: string =
    this.defaultColor;

  // injecting element's reference in constructor & getting the renderer to change DOM elements
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  // @HostListener('DOMEventSelector') methodName(eventData: Event)
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.eleRef.nativeElement,
      'background-color',
      'blue'
    );
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.eleRef.nativeElement,
      'background-color',
      'transparent'
    );
    this.backgroundColor = this.defaultColor;
  }
}
