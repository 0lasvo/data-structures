import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { JSONRecord } from "./JSONRecord";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jsonDataSubject = new BehaviorSubject<JSONRecord[]>([]);
  jsonData$ = this.jsonDataSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  public loadJsonByName(fileName: string): void {
    this.router.navigate(['/docs', fileName]);
    this.http.get<JSONRecord[]>(`./assets/json/${fileName}.json`).subscribe(
      (data: JSONRecord[]) => {
        this.jsonDataSubject.next(data);
      },
      (error) => {
        console.error(`Error al cargar el archivo ${fileName}.json: `, error);
      }
    );
  }

}
