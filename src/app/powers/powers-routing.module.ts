import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PowersComponent } from './powers.component';
import { PowerDetailComponent } from './power-detail/power-detail.component';

const routes: Routes = [
  {
    path: 'powers',
    component: PowersComponent
  },
  {
    path: 'powerdetail/:id',
    component: PowerDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PowersRoutingModule { }
