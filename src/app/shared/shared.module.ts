import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {BrowserModule} from "@angular/platform-browser";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTreeModule} from "@angular/material/tree";



@NgModule({
  declarations: [
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    MatTreeModule
  ],
  exports: [
    SidenavComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
