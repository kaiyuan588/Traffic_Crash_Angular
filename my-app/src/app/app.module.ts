import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { AgmCoreModule } from '@agm/core';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ChartComponent,
    HeaderComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCPOShhTCDI2wD9Q-3EhdjgnvkkXEAp_oU'
    }),
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
