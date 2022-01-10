import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  walkingPlayersInformationMinecraft(): any {
    return this.http.get<any>(`https://api.mcsrvstat.us/2/mc.walkingplayers.net`);
  }

  //Respaldo por si falla el servicio principal
  walkingPlayersInformationMinecraftDummie(): any {
    return this.http.get<any>(`./assets/dummies-services/walking-player-minecraft-info.json`);
  }
}
