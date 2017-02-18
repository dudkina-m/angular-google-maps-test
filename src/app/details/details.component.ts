import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Response } from '@angular/http';
import { Mark } from '../mark';

@Component({
  moduleId: module.id,
  selector: 'details-mark',
  templateUrl: 'details.component.html',
  styleUrls: ['details.component.css'],
  providers: [HttpService]
})
export class DetailsComponent implements OnInit {
  id: number = 1;
  mark: Mark;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getDataToMark(this.id).subscribe((data: Response) => this.mark=data.json());
  }

}