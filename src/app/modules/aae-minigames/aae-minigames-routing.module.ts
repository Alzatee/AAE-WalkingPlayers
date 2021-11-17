import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AaeBlockNinjaComponent } from './aae-block-ninja/aae-block-ninja.component';

const routes: Routes = [
    {
        path: 'alza-ninja',
        component: AaeBlockNinjaComponent
    },
    { path: '', redirectTo: 'alza-ninja', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AAEMiniGamesRoutingModule { }
