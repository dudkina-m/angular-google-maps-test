import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule, MarkerManager, GoogleMapsAPIWrapper, InfoWindowManager } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MarkComponent } from './map/mark/mark.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MarkComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCKAblT19QN4iVCO7JcCjL3q2gwY9na26E'    
    })
  ],
  providers: [MarkerManager, GoogleMapsAPIWrapper, InfoWindowManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
