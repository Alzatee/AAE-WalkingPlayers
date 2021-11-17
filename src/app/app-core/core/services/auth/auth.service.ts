import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from '@firebase/app-compat';

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
    }
  }

  async loginWithEmail(email: string, password: string): Promise<any> {
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log('Error en login con Email', error);
    }
  }

  async loginWithGoogle(): Promise<any> {
    try {
      return await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {
      console.log('Error en login con Google', error);
    }
  }

  getLoggedOnUser() {
    //Obtener usuario logueado
    return this.afAuth.authState;
  }

  logout() {
    this.afAuth.signOut();
  }

}
