import {NgModule} from '@angular/core';

import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule
  ]
})
export class MaterialModule {}
