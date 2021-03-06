import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { HeaderComponent } from './header/header.component';
import { BottomComponent } from './bottom/bottom.component';
import { NavComponent } from './header/nav/nav.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { CommentaryComponent } from './commentary/commentary.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './service/auth.guard';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BottomComponent,
    NavComponent,
    CardComponent,
    HomeComponent,
    CommentaryComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3100,
      positionClass: 'toast-top-center',
      preventDuplicates: true
    })
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
