import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { AuthService } from "../services/auth.service";

export const AuthInterceptor = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
    ): Observable<HttpEvent<unknown>> => {

    const authService: AuthService = inject(AuthService);

    if (localStorage.getItem('access_token')) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        });
    }

    return next(req).pipe(
        catchError((error) => {
            const codes = [401, 403];

            if (codes.includes( error.status )) authService.logout();

            return throwError(() => error);
        })
    );
  
};
