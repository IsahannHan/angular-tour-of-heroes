import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PowersRoutingModule } from './powers-routing.module';
import { PowersComponent } from './powers.component';


@NgModule({
  declarations: [PowersComponent],
  imports: [
    CommonModule,
    PowersRoutingModule
  ]
})
export class PowersModule { }
