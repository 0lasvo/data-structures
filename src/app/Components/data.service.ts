import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { JSONRecord } from "./JSONRecord";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jsonDataSubject = new BehaviorSubject<JSONRecord[]>([]);
  jsonData$ = this.jsonDataSubject.asObservable();

  constructor(private http: HttpClient) { }

  public loadJsonByName(fileName: string): void {
    this.http.get<JSONRecord[]>(`./assets/json/${fileName}.json`).subscribe(
      (data: JSONRecord[]) => {
        this.jsonDataSubject.next(data);
      },
      (error) => {
        console.error(`Error al cargar el archivo ${fileName}.json: `, error);
      }
    );
  }

  public getJsonData(): JSONRecord[] {
    return this.jsonDataSubject.value;
  }
}
