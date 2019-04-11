import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardComponent } from './card/card.component';
import { PostComponent } from './post/post.component';
import { MaterialModule } from '../material/material.module';
import { CommentComponent } from './post/comment/comment.component';

@NgModule({
  declarations: [HomeComponent, CardComponent, PostComponent, CommentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  entryComponents: [CommentComponent]
})
export class HomeModule { }
