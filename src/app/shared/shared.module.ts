import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [
    SidenavComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
