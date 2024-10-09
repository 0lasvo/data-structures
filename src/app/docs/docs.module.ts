import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { DocComponent } from './doc/doc.component';
import {MatCardImage} from "@angular/material/card";
import {DataService} from "./data.service";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    DocComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatCardImage,
    NgOptimizedImage
  ],
  exports: [
    DocComponent,
  ],
  providers: [DataService],
})
export class DocsModule { }
