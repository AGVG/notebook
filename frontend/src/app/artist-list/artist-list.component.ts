import { Component, OnInit, NgZone } from '@angular/core';
import { ArtistService } from './../artist.service';
import { MapService } from './../map.service';
declare let google:any;

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
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
  query = '';
  filteredList = [];
  elementRef;
  artists;
  hideme: any = {};
  genre;

  constructor(
    private artist: ArtistService,
    private manipulate: MapService,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    console.log("query" + this.query);


    this.artist.getList()
      .subscribe((result) =>{
        this.artists = result;
      });
  }
filter() {
    if (this.query !== ""){
        this.filteredList = this.genres.filter(function(el){
            return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
    }else{
        this.filteredList = [];
    }
}

select(item){
    this.query = item;
    this.filteredList = [];
}

addTodo(value:string) {
  console.log(`${value}`);
}

}
