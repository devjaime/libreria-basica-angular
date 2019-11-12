import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HolaModule } from 'projects/hola/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HolaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
