import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ConfigPageComponent } from './config-page/config-page.component';

import { AuthGuard } from '@core/guard/auth.guard';

const routes: Routes = [
    {
        path: 'login',
        component: AdminLoginComponent
    },
    {
        path: 'register',
        component: AdminRegisterComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profile',
        component: AdminProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'config-page',
        component: ConfigPageComponent,
        canActivate: [AuthGuard]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
