import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.css']
})
export class HomeRouteComponent implements OnInit {
  title = 'angular 10 SpringBoot CRUD Fullstack App';
  constructor() { }

  ngOnInit(): void {
  }

}
