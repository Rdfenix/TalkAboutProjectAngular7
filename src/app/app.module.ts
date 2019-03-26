import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { HeaderComponent } from './header/header.component';
import { BottomComponent } from './bottom/bottom.component';
import { NavComponent } from './header/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BottomComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
