import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  async registerEmail(email: string, password: string): Promise<any> {
    try {
      return await this.afAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('Error en el registro de Email', error);
      return null;
    }
  }

  async loginWithEmail(email: string, password: string): Promise<any> {
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      // console.log('Error en login con Email', error);
      if (error instanceof Error) {
        //Get error
        const errorMessage = error.message.split(/[()]+/).filter(function (e) { return e; })[1];
        //Set error messages
        switch (errorMessage) {
          case 'auth/user-not-found':
            Swal.fire({
              icon: 'error',
              title: 'Autentificación',
              text: 'Este correo no ha sido registrado por un administrador'
            });
            break;
          case 'auth/wrong-password':
            Swal.fire({
              icon: 'error',
              title: 'Autentificación',
              text: 'La contraseña es incorrecta'
            });
            break;
          case 'auth/too-many-requests':
            Swal.fire({
              icon: 'error',
              title: 'Autentificación',
              text: 'El acceso a esta cuenta se ha deshabilitado temporalmente debido a muchos intentos fallidos de inicio de sesión. Puede intentarlo más tarde o contactar con el administrador'
            });
            break;
          default:
            break;
        }
      }
      return null;
    }
  }

  async loginWithGoogle(): Promise<any> {
    try {
      return await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {
      console.log('Error en login con Google', error);
      return null;
    }
  }

  getLoggedOnUser() {
    //Obtener usuario logueado
    return this.afAuth.authState;
  }

  logout() {
    this.afAuth.signOut();
    Swal.fire({
      icon: 'success',
      html: `<p>Sesión cerrada</p>`,
      showConfirmButton: false,
      timer: 1500
    });
  }

}
