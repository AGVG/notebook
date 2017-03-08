import { Component, OnInit } from '@angular/core';
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
  initialMap;
  mapOptions: Object = {
      center: {lat: 40.417080, lng: -3.703612},
      zoom: 9,
    };

  constructor(private venue: VenueService, private map: MapService) { }

  ngOnInit() {
    this.initialMap = new google.maps.Map(document.getElementById("map-canvas"), this.mapOptions);
    this.map.location(this.initialMap);

    this.venue.getList()
      .subscribe((result) =>{
        this.venues = result;
        this.venues.forEach((venue) =>{
            this.map.addMarker(venue.location, this.initialMap)
        })
      });
  }

}
