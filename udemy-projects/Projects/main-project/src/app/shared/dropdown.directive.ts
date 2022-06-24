import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // bind to class property of an element, an array of classes
  // it won't be attached initially since it's false
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    // on click (method call) true changes to false, false to true
    // this.isOpen equals to what it's NOT
    this.isOpen = !this.isOpen;
  }
}
