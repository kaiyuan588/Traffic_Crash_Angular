import { Component, OnInit } from '@angular/core';
// import { } from 'googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat = 29.629288548876488;
  lng = -82.29815519661075;
  zoom = 7.1;
  constructor() {

  }

  ngOnInit(): void {

  }

}
