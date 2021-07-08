import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { CoursesComponent } from './courses.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    MapComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
