import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkExpercienceComponent } from './work-expercience/work-expercience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExpercienceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
