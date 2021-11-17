import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ConfigPageComponent } from './config-page/config-page.component';


@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminRegisterComponent,
    AdminProfileComponent,
    ConfigPageComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminLoginModule { }
