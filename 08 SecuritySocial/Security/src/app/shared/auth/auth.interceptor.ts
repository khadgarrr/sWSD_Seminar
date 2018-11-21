import { Observable } from "rxjs/Rx";
import { Error } from "tslint/lib/error";
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { AuthService } from "./auth.service";
import { environment } from "../../../environments/environment";

export class AuthInterceptor implements HttpInterceptor {
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${environment.token}` }
    });
    console.log("Vouchers-Interceptor added Bearer Token for request", cloned);
    return next.handle(cloned);
  }
}
