import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Place } from '../place';

@Component({
  moduleId: module.id,
  selector: 'map-google',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css']
})
export class MapComponent {
  places: Place[];
  lat: number = 59.879037;
  lng: number = 59.87903;
}