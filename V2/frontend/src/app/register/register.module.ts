import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ToastrModule.forRoot()
  ]
})
export class RegisterModule { }
