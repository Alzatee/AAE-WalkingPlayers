import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from '@firebase/app-compat';
import { timer } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private _router: Router,
  ) { }

  async registerEmail(email: string, password: string): Promise<any> {
    try {
      return await this.afAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Registro',
        text: 'Error durante el registro, por favor inténtelo más tarde.',
        confirmButtonText: 'Entendido'
      });
      return null;
    }
  }

  async loginWithEmail(email: string, password: string): Promise<any> {
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      if (error instanceof Error) {
        //Get error
        const errorMessage = error.message.split(/[()]+/).filter(function (e) { return e; })[1];
        //Set error messages
        switch (errorMessage) {
          case 'auth/user-not-found':
            Swal.fire({
              icon: 'error',
              title: 'Autentificación',
              text: 'Este correo no ha sido registrado por un administrador',
              confirmButtonText: 'Entendido'
            });
            break;
          case 'auth/wrong-password':
            Swal.fire({
              icon: 'error',
              title: 'Autentificación',
              text: 'La contraseña es incorrecta',
              confirmButtonText: 'Entendido'
            });
            break;
          case 'auth/too-many-requests':
            Swal.fire({
              icon: 'error',
              title: 'Autentificación',
              text: 'El acceso a esta cuenta se ha deshabilitado temporalmente debido a muchos intentos fallidos de inicio de sesión. Puede intentarlo más tarde o contactar con el administrador',
              confirmButtonText: 'Entendido'
            });
            break;
          default:
            break;
        }
      }
      return null;
    }
  }

  // async loginWithGoogle(): Promise<any> {
  //   try {
  //     return await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  //   } catch (error) {
  //     console.log('%c Error en login con Google', 'color: #ed5565', error);
  //     return null;
  //   }
  // }

  getLoggedOnUser() {
    //Obtener usuario logueado
    return this.afAuth.authState;
  }

  logout() {
    this._router.navigate(['/home']);
    this.afAuth.signOut();
    timer(500).subscribe(() => {
      Swal.fire({
        icon: 'success',
        html: `<p>Sesión cerrada</p>`,
        showConfirmButton: false,
        timer: 2000,
      });
    });
  }

}
