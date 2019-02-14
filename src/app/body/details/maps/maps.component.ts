import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  lat: number = 41.890442;
  lng: number = 12.492617;
  title: string = "Localisation"
  constructor() { }

  ngOnInit() {
  }

}
