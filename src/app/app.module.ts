import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { TranscriptComponent } from './transcript/transcript.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TranscriptComponent,
    NavBarComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {path: '', component: TableComponent},
      {path: 'transcript', component: TranscriptComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas,far);
  }
 }
