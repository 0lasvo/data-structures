import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {JSONRecord} from "./JSONRecord";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(fileName: string): Observable<JSONRecord[]> {
    return this.http.get<JSONRecord[]>(`assets/json/${fileName}.json`);
  }
}
