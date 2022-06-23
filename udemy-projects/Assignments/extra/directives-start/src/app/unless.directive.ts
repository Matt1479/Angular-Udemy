import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  // setter of a property
  // the setter gets executed whenever the property changes
  // it changes whenever it changes outside of this directive,
  // so whenever the condition changes or some parameter of this condition
  // make sure that our property name is the same as the directive name (the selector)
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // createEmbeddedView creates a view in this viewContainer and the view is our templateRef
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // if the condition is true, then we're removing the element from the DOM
      // so it is reversed *ngIf
      this.vcRef.clear();
    }
  }

  // specifying the place in the DOM where it should be rendered:

  // first argument - templateRef - what should we render - gives us access to the template

  // second argument - viewContainerRef - where should we render it
  // vcRef marks the place where we should render this directive in the document
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
  // remember to add this directive to appModule
}
