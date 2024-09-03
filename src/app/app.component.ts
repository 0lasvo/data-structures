import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from "@angular/material/menu";
import { JSONRecord } from "./Components/JSONRecord";
import { DataService } from "./Components/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public answer: JSONRecord[] = [];
  title = 'data-structures';
  isMenuOpen = false;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getJSON().subscribe(data => this.answer = data);
  }

  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isMenuOpen ? this.menuTrigger.openMenu() : this.menuTrigger.closeMenu();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = (event.target as HTMLElement).closest('.menu-icon') ||
      (event.target as HTMLElement).closest('.mat-menu-panel');
    if (!clickedInside && this.isMenuOpen) {
      this.toggleMenu();
    }
  }

  public basicos() {
    this.service.getTiposDeDatos().subscribe(data => {
      this.answer = data;
      console.log(this.answer);
    });
  }

  public busqueda() {
    this.service.getBusqueda().subscribe(data => {
      this.answer = data;
      console.log(this.answer);
    });
  }

  public poo() {
    this.service.getPOO().subscribe(data => {
      this.answer = data;
      console.log(this.answer);
    });
  }

  public ordenamiento() {
    this.service.getOrdenamiento().subscribe(data => {
      this.answer = data;
      console.log(this.answer);
    });
  }

  public apuntadores() {
    this.service.getApuntadores().subscribe(data => {
      this.answer = data;
      console.log(this.answer);
    });
  }

  public avanzados() {
    this.service.getAvanzado().subscribe(data => {
      this.answer = data;
      console.log(this.answer);
    });
  }

  public listas() {
    this.service.getListas().subscribe(data => {
      this.answer = data;
      console.log(this.answer);
    });
  }

  public arbolesGrafos() {
    this.service.getArbolesGrafos().subscribe(data => {
      this.answer = data;
      console.log(this.answer);
    });
  }

}
