import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfScrollModule } from './infinite-scroll/inf-scroll.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, InfScrollModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
