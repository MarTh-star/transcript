import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultBarComponent } from './result-bar/result-bar.component';
import { TranscriptDashboardComponent } from './transcript-dashboard/transcript-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ResultBarComponent,
    TranscriptDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
