import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {
  artist: any;
  constructor(
    private artists: ArtistService,
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getArtistDetails(params['id']);
    });
  }

  getArtistDetails(id) {
    this.artists.get(id)
      .subscribe((result) => {
        console.log(result);
        console.log(result.name);
        this.artist = result;
      });
  }

}
