import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!/^(http|https):/i.test(request.url) && request.url !== "/authenticate" && request.url !== "/upload") {
      const token = localStorage.getItem('token');
      const modifiedRequest: HttpRequest<any> = request.clone(
        {
          headers: request.headers
            .set('Authorization', `Bearer ${token}`)
            .set('Content-Type', 'application/json'),
          url: environment.serverUrl + request.url
        }
      );
      return next.handle(modifiedRequest);
    } else if(!/^(http|https):/i.test(request.url) && request.url === "/authenticate") {
      const modifiedRequest: HttpRequest<any> = request.clone(
        {
          headers: request.headers
            .set('Content-Type', 'application/json'),
          url: "http://localhost:8080" + request.url
        }
      );
      return next.handle(modifiedRequest);
    } else if(!/^(http|https):/i.test(request.url) && request.url == "/upload") {
      console.log("interceptor called-------!")
      const token = localStorage.getItem('token');
      const modifiedRequest: HttpRequest<any> = request.clone(
        {
          headers: request.headers
          .set('Authorization', `Bearer ${token}`),
          url: environment.serverUrl + request.url
        }
      );

      return next.handle(modifiedRequest);
    }
    return next.handle(request);
  }
}
