import { NgModule } from '@angular/core';
import {
  MatCheckboxModule,
  MatTableModule,
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatIconModule
} from '@angular/material'

@NgModule({
  exports: [
    MatCheckboxModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule
  ]
})
export class MaterialModule { }
