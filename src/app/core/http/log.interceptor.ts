import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class LogInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log(`Requesting to ${req.url}`);

    if (req.params.toString()) {
      console.log(`With params ${req.params.toString()}`);
    }

    if (req.body) {
      console.log(`With boy ${req.body}`);
    }

    return next.handle(req).do((response: HttpResponse<any>) => {
      if (response.body) {
        console.log(`Response ${JSON.stringify(response.body)}`);
      }
    });
  }

}
