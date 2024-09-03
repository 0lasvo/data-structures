import {Component, HostListener, ViewChild} from '@angular/core';
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-structures';
   isMenuOpen = false;

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

  /*public apuntadores(){
    this.service.getApuntadores().subscribe(data => this.answer = data);
  }*/
}
