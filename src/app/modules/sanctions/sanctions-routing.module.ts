import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BansComponent } from './bans/bans.component';
import { KicksComponent } from './kicks/kicks.component';
import { MutesComponent } from './mutes/mutes.component';
import { WarningsComponent } from './warnings/warnings.component';

const routes: Routes = [
    {
        path: 'bans',
        component: BansComponent
    },
    {
        path: 'mutes',
        component: MutesComponent
    },
    {
        path: 'warnings',
        component: WarningsComponent
    },
    {
        path: 'kicks',
        component: KicksComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SanctionsRoutingModule { }
