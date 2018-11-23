import { Error } from "tslint/lib/error";
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export class AuthInterceptor implements HttpInterceptor {
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${environment.token}` }
    });
    console.log("Auth-Interceptor added Bearer Token for request", cloned);
    return next.handle(cloned);
  }
}
