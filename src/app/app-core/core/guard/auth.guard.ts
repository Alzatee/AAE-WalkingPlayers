import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import Swal from 'sweetalert2';
import firebase from '@firebase/app-compat';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {

    //Guardía: detecta si el usuario ya está autentificado o no.
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user: any) => {
        if (user) {
          resolve(true);
        } else {
          resolve(false);
          console.log('%c ¡Acceso denegado para el público!', 'color: #ed5565');
          this._router.navigate(['/home']);
          Swal.fire({
            icon: 'warning',
            title: 'Acceso denegado',
            text: 'No tienes la autorización para acceder a este módulo.',
            confirmButtonText: 'Entendido'
          });
        }
      });
    });

  }

}
