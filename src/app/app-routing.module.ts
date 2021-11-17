import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/inicio/inicio.module').then(
        (module) => module.InicioModule
      ),
    // canActivate: 
  },
  {
    path: 'sanctions',
    loadChildren: () =>
      import('./modules/sanctions/sanctions.module').then(
        (module) => module.SanctionsModule
      ),
    // canActivate: 
  },
  {
    path: 'mini-games',
    loadChildren: () =>
      import('./modules/aae-minigames/aae-minigames.module').then(
        (module) => module.AAEMiniGamesModule
      ),
    // canActivate: 
  },
  { path: '', redirectTo: '', pathMatch: 'full' },//Auto redirect
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' } //404 component
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
