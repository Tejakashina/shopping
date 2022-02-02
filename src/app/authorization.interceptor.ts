import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterService } from './register.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private auth:RegisterService) {}

  intercept(request: HttpRequest<any>, handler: HttpHandler): any {
    const modifiedRequest=request.clone({
      headers:request.headers.append(
        'authorization',
        `Bearer ${this.auth.getToken()}`
      )

    });
    return handler.handle(modifiedRequest);
  }
}
