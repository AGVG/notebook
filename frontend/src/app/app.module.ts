import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { RouterModule } from "@angular/router";
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { VenueListComponent } from './venue-list/venue-list.component';
import { ArtistListComponent } from './artist-list/artist-list.component';

import { SessionService } from './session.service';
import { VenueService } from './venue.service';
import { MapService } from './map.service';
import { ArtistService } from './artist.service';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    HomeComponent,
    VenueListComponent,
    ArtistListComponent,
    FilterPipe
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
  providers: [SessionService, VenueService, MapService, ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
