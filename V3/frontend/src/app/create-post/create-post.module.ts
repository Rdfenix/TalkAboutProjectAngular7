import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePostRoutingModule } from './create-post-routing.module';
import { CreatePostComponent } from './create-post.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [CreatePostComponent],
  imports: [
    CommonModule,
    CreatePostRoutingModule,
    MaterialModule
  ]
})
export class CreatePostModule { }
