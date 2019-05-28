import { NgModule } from '@angular/core';
import {
  MatCheckboxModule,
  MatTableModule,
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
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
    MatIconModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
