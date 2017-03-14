import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArtistService {
  BASE_URL: string = 'http://localhost:3000/api/artists';

  constructor(
    private http: Http
  ) { }

  getList() {
    return this.http.get(`${this.BASE_URL}`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/${id}`)
      .map((res) => res.json());
  }
}
