import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class HeroesModule { }
