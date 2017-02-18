import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from '../../services/http.service';
import {Subscription } from 'rxjs/Subscription';
import { Place } from '../../place';

@Component({
  moduleId: module.id,
  selector: 'map-mark',
  templateUrl: 'mark.component.html',
  styleUrls: ['mark.component.css'],
  providers: [HttpService]
})
export class MarkComponent implements OnInit {
  places: Place[];  

  constructor(private httpService: HttpService) {}
     
  ngOnInit() {
    this.httpService.getDataToMap().subscribe((data: Response) => this.places=data.json());
  }

  viewDetails(id) {
    console.log(id);
  }
}