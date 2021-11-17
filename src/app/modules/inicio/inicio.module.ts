import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { InicioRoutingModule } from './inicio-routing.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    SharedModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
