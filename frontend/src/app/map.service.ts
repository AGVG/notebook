import { Injectable } from '@angular/core';
declare let google:any;

@Injectable()
export class MapService {
  markerArr: Array<any> = [];

  constructor() { }

  location(map) {
    let input = document.getElementById('location');
    let autocomplete = new google.maps.places.Autocomplete(input);

    google.maps.event.addListener(autocomplete, 'place_changed', function() {
    //  infowindow.close();
     var place = autocomplete.getPlace();
     if (!place.geometry) {
       return;
     }
     if (place.geometry.viewport) {
       map.fitBounds(place.geometry.viewport);
     } else {
       map.setCenter(place.geometry.location);
       map.setZoom(9);
     }

   });
  }

  addMarker(address, map){
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address }, function(results, status) {

       if (status == google.maps.GeocoderStatus.OK) {
         var marker = new google.maps.Marker({
           map: map,
           position: results[0].geometry.location,
         });
       } else {
         alert('Geocode was not successful for the following reason: ' + status);
       }
     });
  }
}
