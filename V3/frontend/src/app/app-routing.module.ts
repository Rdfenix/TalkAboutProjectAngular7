import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'create-post', loadChildren: './create-post/create-post.module#CreatePostModule' },
  { path: 'login', loadChildren: './login/login.module#LoginRoutingModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterRoutingModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
