import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from '../../services/http.service';
import {Subscription } from 'rxjs/Subscription';
import { Place } from '../../place';

import {
   SebmGoogleMapMarker, SebmGoogleMapInfoWindow
} from 'angular2-google-maps/core';

@Component({
  moduleId: module.id,
  selector: 'map-mark',
  templateUrl: 'mark.component.html',
  styleUrls: ['mark.component.css'],
  providers: [HttpService]
})
export class MarkComponent implements OnInit {
  places: Place[];
  isClicked: boolean;
  selectedLocation: Location;
  lastClicked: SebmGoogleMapInfoWindow;

  @Output() viewDetails: EventEmitter<any> = new EventEmitter();  

  constructor(private httpService: HttpService) {}
     
  ngOnInit() {
    this.httpService.getDataToMap().subscribe((data: Response) => this.places=data.json());
  }

  closeDetails(infoWindow) {
    if (this.lastClicked && this.lastClicked !== infoWindow){
         this.lastClicked.close();
    }
    this.lastClicked = infoWindow;
  }
}