import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: Object;

  constructor(private session: SessionService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

}
