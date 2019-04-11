import { NgModule } from '@angular/core';
import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [],
  exports: [
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ]
})
export class MaterialModule { }
