import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  // walkingPlayersInformationMinecraft(): any {
  //   return this.http.get<any>(`https://api.mcsrvstat.us/2/mc.walkingplayers.net`);
  // }

  //Temporal dummi antes de desplegar cambiar al original, se dejará consumir en el dominio walkingplayers.net
  walkingPlayersInformationMinecraft(): any {
    return this.http.get<any>(`./assets/dummies-services/walking-player-minecraft-info.json`);
  }
}
