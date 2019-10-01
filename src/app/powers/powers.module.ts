import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PowersComponent } from './powers.component';
import { PowerDetailComponent } from './power-detail/power-detail.component';

import { MaterialModule } from '../material.module';

import { PowersRoutingModule } from './powers-routing.module';

@NgModule({
  declarations: [
    PowersComponent,
    PowerDetailComponent
  ],
  imports: [
    CommonModule,
    PowersRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ]
})
export class PowersModule { }
