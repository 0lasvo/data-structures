import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JSONRecord} from "./JSONRecord";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/mydata.json");
  }

  public getPOO(): Observable<any> {
    return this.http.get("./assets/POO.json");
  }

  public getTiposDeDatos(): Observable<any> {
    return this.http.get("./assets/TiposDeDatos.json");
  }

  public getApuntadores(): Observable<any>{
    return this.http.get("./assets/Apuntadores.json");
  }

  public getOrdenamiento(): Observable<any>{
    return this.http.get("./assets/Ordenamiento.json");
  }

  public getListas(): Observable<any>{
    return this.http.get("./assets/Listas.json");
  }

  public getAvanzado(): Observable<any>{
    return this.http.get("./assets/Avanzado.json");
  }

  public getBusqueda(): Observable<any>{
    return this.http.get("./assets/Busqueda.json");
  }

  public getArbolesGrafos(): Observable<any>{
    return this.http.get("./assets/ArbolesGrafos.json");
  }

}
