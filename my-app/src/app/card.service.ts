import { Crash_model } from './model/crash.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

require('dotenv').config();

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private crash_url = process.env.ANGULAR_APP_API_URL;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

}
