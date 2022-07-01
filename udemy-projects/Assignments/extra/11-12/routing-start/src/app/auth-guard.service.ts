import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  // canActivate can run Asynchronously (Observable or Promise), or Synchronously
  canActivate(
    // we get this data from Angular
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // check if the user is logged in or not
    return this.authService.isAuthenticated().then(
      // then I get a boolean
      (authenticated: boolean | unknown) => {
        if (authenticated) {
          return true;
        } else {
          return this.router.navigate(['/']);
          // return false;
        }
      }
    );
  }

  // canActivateChild's configuration is basically the same
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
