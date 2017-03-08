import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
declare let google:any;

@Component({
  selector: 'appsignup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  genres: Array<string> = [
    'AltRock'       ,
    'Ambient'       ,
    'Baroque'       ,
    'BlackMetal'    ,
    'Blues'         ,
    'Classical'     ,
    'Country'       ,
    'Disco'         ,
    'Dub'           ,
    'Dubstep'       ,
    'DrumAndBass'   ,
    'EDM'           ,
    'Electronica'   ,
    'Folk'          ,
    'Funk'          ,
    'Gospel'        ,
    'Grime'         ,
    'Grunge'        ,
    'Harcore'       ,
    'HeavyMetal'    ,
    'Hiphop'        ,
    'House'         ,
    'Indie'         ,
    'Instrumental'  ,
    'Jazz'          ,
    'Melody'        ,
    'Metalcore'     ,
    'NewWave'       ,
    'Opera'         ,
    'Orchestra'     ,
    'Pop'           ,
    'Progressive'   ,
    'PunkRock'      ,
    'Rap'           ,
    'Reggae'        ,
    'Reggaeton'     ,
    'Rock'          ,
    'Rockatbilly'   ,
    'Shoegazing'    ,
    'Ska'           ,
    'Soul'          ,
    'Techno'        ,
    'Trance'        ,
    'Trap'          ,
    'Orchestra'     ,
    'World'
  ]


	newUser = {
    username    : '',
    password    : '',
    type        : '',
    location    : '',
    name        : '',
    description : '',
    genre       : []
  };

  user: any;
  error: string;

  constructor(
  	private session: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
    let input = document.getElementById('location');
    let autocomplete = new google.maps.places.Autocomplete(input);
  }

  signup() {
  	this.session.signup(this.newUser)
      .subscribe(result => {
          if (result === true) {
              // login successful
              console.log('result ok', result);
              this.router.navigate(['/']);
          } else {
          		console.log('result ko', result);
              // login failed
              // this.error = 'Username or password is incorrect';
          }
      });
  }
}
