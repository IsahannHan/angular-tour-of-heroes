import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PowersComponent } from './powers.component';

const routes: Routes = [{ path: '', component: PowersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PowersRoutingModule { }
