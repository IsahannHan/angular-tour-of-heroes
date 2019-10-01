import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(mod => mod.HeroesModule)
  },
  {
    path: 'powers',
    loadChildren: () => import('./powers/powers.module').then(mod => mod.PowersModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
