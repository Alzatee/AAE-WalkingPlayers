import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CInformationWP } from '@core/class/information-wp';
import { IInformationWP } from '@core/interfaces/information-wp.interface';

@Injectable({
  providedIn: 'root'
})
export class FireStorageFunctionsService {

  constructor(private angularFireDB: AngularFirestore) { }

  updateInformationWP(dataWP: IInformationWP, docID: string) {
    //El post es lo mismo solo que no especifica id documento para no actualizar, se manda .doc() sin nada
    this.angularFireDB.collection('InformationWP').doc(docID).set({
      termsAndConditions: dataWP.termsAndConditions,
      aboutUs: dataWP.aboutUs
    }).then(response => {
      console.log(response);
      alert('Se actualizó la data');
    }).catch((error) => {
      console.log(error);
    })
  }

  getInformationWP() {
    let responseDataWP: any;
    const responseC = this.angularFireDB.collection('InformationWP').get().toPromise();
    return responseC.then(response => {
      const dataWP: any = response?.docs;
      for (let objet of dataWP) {
        let response = new CInformationWP();
        response.idDocument = objet.id;
        response.termsAndConditions = objet.data().termsAndConditions;
        response.aboutUs = objet.data().aboutUs;
        responseDataWP = response;
      }
      return responseDataWP;

    }).catch((error) => {
      console.log(error);
    })
  }

}
