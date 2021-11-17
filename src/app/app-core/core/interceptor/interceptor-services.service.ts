// Interceptor: https://medium.com/@insomniocode/angular-autenticaci%C3%B3n-usando-interceptors-a26c167270f4
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, timer } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { ModalLoadServicesService } from '@core/services/modal-load-services/modal-load-services.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorServicesService implements HttpInterceptor {

  constructor(public modalLoadServicesService: ModalLoadServicesService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request = req;

    timer(100).subscribe(() => { this.modalLoadServicesService.isLoading.next(true); });

    request = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cache-Control': 'private,no-cache,no-store,max-age=0,must-revalidate,pre-check=0,post-check=0',
        'Strict-Transport-Security': 'max-age=31536000',
        'X-Frame-Options': 'DENY', // https://www.webempresa.com/blog/cabecera-x-frame-options-mejorar-seguridad-web.html
      }
    });

    return next.handle(request).pipe(
      // Detección cuando finalice el consumo de los servicios.
      finalize(() => {
        timer(500).subscribe(() => { this.modalLoadServicesService.isLoading.next(false); });
      }),
      // Detección de errores.
      catchError((err: HttpErrorResponse) => {
        timer(500).subscribe(() => { this.modalLoadServicesService.isLoading.next(false); });
        return throwError(err);
      })
    );
  }
}