import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    //Guardía: detecta si el usuario ya está autentificado o no.
    const user = await this.afAuth.currentUser;
    const isAuthenticated = user ? true : false;

    if (!isAuthenticated) {
      console.log('No tiene acceso a esta página, requiere de autentificación');
      alert('No estás logueado/autorizado para entrar a este módulo!');
    }

    return isAuthenticated;

  }

}
