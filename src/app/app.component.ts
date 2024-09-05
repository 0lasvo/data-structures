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
  //isFooterVisible = false;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getJSON().subscribe(data => this.answer = data);
    this.loadJsonData('Home');
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

  /*@HostListener('window:scroll', [])
  onWindowScroll(): void {
    const windowHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY + windowHeight;

    this.isFooterVisible = scrollPosition >= pageHeight;
  }*/


loadJsonData(fileName: string) {
    this.service.getJsonByName(fileName).subscribe(data => {
      this.answer = data;
      this.scrollToSection(data[0]?.title);
      console.log(this.answer);
    });
  }

  onJsonOption(fileName: string) {
    this.loadJsonData(fileName);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
