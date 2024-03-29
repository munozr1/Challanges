import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendModule } from 'src/libs/frontend/frontend.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrontendModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
