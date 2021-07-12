import { getVehiclesByReportNumber } from './../api/api';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
export class Crash_model {
  constructor(
    public report_number: number, 
    public crash_date_time: string, 
    public county: string, 
    public city: string, 
    public investigating_agency: string, 
    public on_street: string, 
    public offset_feet: string, 
    public offset_direction: string, 
    public from_intersecting_street: string, 
    public crash_severity: string, 
    public latitude: number, 
    public longitude: number) {

    }
}
export class Driver_model {
  constructor(
    public report_number: number,
    public vehicle_number: number,
    public person_number: number,
    public injury_severity: string,
    public sex: string,
    public age: number,
    public restraint_systems: string
  ) {

  }
}
export class Vehicle_model {
  constructor(
    public report_number: number,
    public vehicle_number: number,
    public year: number,
    public make: string,
    public model: string,
    public color: string,
    public traveling_on_street: string,
    public traveling_direction: string,
    public maneuver: string
  ) {

  }
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {
  crashes: Crash_model[] = [];
  vehicles: Vehicle_model[] = [];
  drivers: Driver_model[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getCrashes();
    this.setVehicleDetail([]);

  }
  getCrashes(){
    this.httpClient.get<any>('http://localhost:8000/api/crash').subscribe(
      response => {
        console.log(response);
        this.crashes = response
      }
    )
  }
  getVehicleByReportNumber() {
    this.httpClient.get<any>('http://localhost:8000/api/vehicle?report_number=${report_number}').subscribe(
      response => {
        console.log(response);
        this.vehicles = response
      }
    )
  }
  getDriverByVehicleNumber() {
    this.httpClient.get<any>('http://localhost:8000/api/driver?report_number=${report_number}&vehicle_number=${vehicle_number}').subscribe(
      response => {
        console.log(response);
        this.drivers = response
      }
    )
  }
  setVehicleDetail([]) {

  }


  colorMap = (color: string) => {
    switch (color) {
        case "WHT":
            return "White";
        case "BLU":
            return "Blue";
        case "BLK":
            return "White";
        case "GRN":
            return "Blue";
        case "SIL":
            return "White";
        default:
            return "Red";
    }
}

}


