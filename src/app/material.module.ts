import {NgModule} from '@angular/core';

import {
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatIconModule,
  MatGridListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatSnackBarModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class MaterialModule {}
