import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '../material/material.module';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [HomeComponent, CardComponent, PostComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
  ]
})
export class HomeModule { }
