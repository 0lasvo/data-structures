import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JSONRecord} from "./JSONRecord";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  public getJsonByName(fileName: string): Observable<any> {
    return this.http.get(`./assets/json/${fileName}.json`);
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/json/mydata.json");
  }

}
