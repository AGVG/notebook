import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
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


	updateUser = {
    username    : '',
    password    : '',
    type        : '',
    location    : '',
    name        : '',
    description : '',
    genre       : []
  };

  user;
  hider: boolean;
  userInfo;
  tradeInfo;

  constructor(
    private session: SessionService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.hider = false;
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user);

    this.route.params.subscribe(params =>{
      this.session.getUser(params['username'])
        .subscribe((result) =>{
          if(result.user.type === 'Venue'){
            this.tradeInfo = result.venue;
            this.userInfo = result.user;
            console.log(this.userInfo);
          } else if (result.user.type === 'Artist'){
            this.tradeInfo = result.artist;
            this.userInfo = result.user
            console.log(this.userInfo);
          }
        })
    });
  }

  editor(){
    this.hider = true;
  }

}
