import { Injectable } from '@angular/core';
declare let google:any;

@Injectable()
export class MapService {
  initialMap;
  constructor() { }

  autocomplete(map) {
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

}
