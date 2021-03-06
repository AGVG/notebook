import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { VenueListComponent } from './venue-list/venue-list.component';
import { SessionService } from './session.service';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { UserPageComponent } from './user-page/user-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'venues', component: VenueListComponent },
    { path: 'artists', component: ArtistListComponent },
    { path: 'artists/:id', component: ArtistDetailsComponent },
    { path: ':username', component: UserPageComponent },
    { path: '**', redirectTo: '' }
];
