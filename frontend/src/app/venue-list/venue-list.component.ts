import { Component, OnInit, NgZone } from '@angular/core';
import { VenueService } from './../venue.service';
import { MapService } from './../map.service';
declare let google:any;

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit {
  venues;
  hideme: any = {};

  constructor(
    private venue: VenueService,
    private manipulate: MapService,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    let map = this.mapInit();
    this.manipulate.autocomplete(map);

    this.venue.getList()
      .subscribe((result) =>{
        this.venues = result;
        let markerArray = [];
        this.venues.forEach((venue) => {
          let geocoder = new google.maps.Geocoder();
          geocoder.geocode( { 'address': venue.location }, (results, status) => {

             if (status == google.maps.GeocoderStatus.OK) {
               var marker = new google.maps.Marker({
                 map: map,
                 position: results[0].geometry.location,
               });

               map.addListener('bounds_changed', () => {
                 this.ngZone.run(() => {
                 let bounds = map.getBounds();
                 if(bounds.contains(marker.getPosition()) === true) {
                   venue.hideme = false;
                 } else {
                   venue.hideme = true;
                 }
              });
            });

            } else {
               alert('Geocode was not successful for the following reason: ' + status);
             }
           });
        });
      });
  }

  mapInit(){
    return new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 40.417080, lng: -3.703612},
    zoom: 4,
   });
  }

}
