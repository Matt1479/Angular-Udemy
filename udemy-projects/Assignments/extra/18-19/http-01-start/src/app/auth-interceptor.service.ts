import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
  // intercept will run before the request is sent,
  // and right before the response to subscribe
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // change the request
    const modofiedRequest = req.clone({
      headers: req.headers.append('Auth', 'xyz'),

      // url: 'new-url',
      // params: x,
    });

    // return (modifiedRequest) next to let the request continue
    return next.handle(modofiedRequest);
  }
}
