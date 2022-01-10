import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SanctionsRoutingModule } from './sanctions-routing.module';
import { BansComponent } from './bans/bans.component';
import { MutesComponent } from './mutes/mutes.component';
import { WarningsComponent } from './warnings/warnings.component';
import { KicksComponent } from './kicks/kicks.component';
import { BackButtonComponent } from './shared/components/back-button/back-button.component';


@NgModule({
  declarations: [
    BansComponent,
    MutesComponent,
    WarningsComponent,
    KicksComponent,
    BackButtonComponent
  ],
  imports: [
    SharedModule,
    SanctionsRoutingModule
  ]
})
export class SanctionsModule { }
