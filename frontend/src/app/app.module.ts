import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from "@angular/router";
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SessionService } from './session.service';
import { VenueService } from './venue.service';
import { MapService } from './map.service';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { VenueListComponent } from './venue-list/venue-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    HomeComponent,
    VenueListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDcawoqSxq0XhugyPjDyfxchcJmLGiP9EQ',
      libraries: ['places']
    })
  ],
  providers: [SessionService, VenueService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
