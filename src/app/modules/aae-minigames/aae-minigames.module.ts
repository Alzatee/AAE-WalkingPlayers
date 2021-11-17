import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AAEMiniGamesRoutingModule } from './aae-minigames-routing.module';
import { AaeBlockNinjaComponent } from './aae-block-ninja/aae-block-ninja.component';


@NgModule({
  declarations: [
     AaeBlockNinjaComponent
  ],
  imports: [
    SharedModule,
    AAEMiniGamesRoutingModule
  ]
})
export class AAEMiniGamesModule { }
