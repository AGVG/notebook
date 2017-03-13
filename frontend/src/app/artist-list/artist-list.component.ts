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

  radiuses = [
        {value:'1000', text:'1 km from your location'},
        {value:'5000', text:'5 km from your location'},
        {value:'10000', text:'10 km from your location'},
        {value:'25000', text:'25 km from your location'},
        {value:'100000', text:'100 km from your location'},
        {value:'200000', text:'200 km from your location'},
        {value:'6371000', text:'All Artists'},
    ];

  query = '';
  artists;
  artistLocation;
  filteredList = [];
  genre;
  hideme: any = {};
  radius;
  distance;
  radiusValue: number;
  inputLocation;
  array;

  constructor(
    private artist: ArtistService,
    private map: MapService,
    private ngZone: NgZone
  ) { }

ngOnInit() {

  this.artist.getList()
    .subscribe((result) =>{
      this.artists = result;
      this.artists.forEach((artist) =>{
        artist.hideme = true;
      })

        let input = document.getElementById('location');
        let autocomplete = new google.maps.places.Autocomplete(input);

        autocomplete.addListener("place_changed", ()=>{
          this.inputLocation = autocomplete.getPlace().geometry.location;
          let geocoder = new google.maps.Geocoder();
            this.artists.forEach((artist) =>{
            geocoder.geocode( { 'address': artist.location }, (results, status) => {

               if (status == google.maps.GeocoderStatus.OK) {
                  this.artistLocation = results[0].geometry.location;
                  this.distance = google.maps.geometry.spherical.computeDistanceBetween(this.inputLocation, this.artistLocation);
                  if(this.radiusValue === undefined || this.distance > this.radiusValue ){
                    this.ngZone.run(() => {
                      artist.hideme = true;
                    });
                  } else{
                    this.ngZone.run(() => {
                      artist.hideme = false;
                    });
                  }
                  
              } else {
                 alert('Geocode was not successful for the following reason: ' + status);
               }
            });
          });

      });
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

onSelect() {
  this.radiusValue = this.radius;

  let geocoder = new google.maps.Geocoder();
    this.artists.forEach((artist) =>{
    geocoder.geocode( { 'address': artist.location }, (results, status) => {
       if (status == google.maps.GeocoderStatus.OK) {

          this.artistLocation = results[0].geometry.location;
          this.distance = google.maps.geometry.spherical.computeDistanceBetween(this.inputLocation, this.artistLocation);
          if(this.distance > this.radiusValue ){
            this.ngZone.run(() => {
              artist.hideme = true;
            });
          } else{
            this.ngZone.run(() => {
              artist.hideme = false;
            });
          }

      } else {
         alert('Geocode was not successful for the following reason: ' + status);
       }
    });
  });
}



}
