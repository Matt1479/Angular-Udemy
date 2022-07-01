import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  // require this method
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate>
{
  // CanDeactivate wraps our own interface

  // canDeactivate method will be called by router
  // once we try to leave a route
  canDeactivate(
    // 1: Component which we're currently on passed as an argument
    // which has the CanComponentDeactivate implemented
    // therefore a component which has canDeactivate method
    component: CanComponentDeactivate,

    // 2: the route we're currently on
    currentRoute: ActivatedRouteSnapshot,

    // 3: where we are right now
    currentState: RouterStateSnapshot,

    // 4: next state (optional) - where do you want to go (on leaving route)
    nextState?: RouterStateSnapshot
  ): // returns an Observable, a Promise or a boolean
  // just like the canActivate guard
  Observable<boolean> | Promise<boolean> | boolean {
    // call canDeactivate on the Component we're currently on
    // this is what I need to implement (this interface in this component)
    return component.canDeactivate();
  }
}
