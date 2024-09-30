import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { DocComponent } from './doc/doc.component';
import {MatCardImage} from "@angular/material/card";
import {DataService} from "./data.service";



@NgModule({
  declarations: [
    DocComponent,
  ],
  imports: [
    CommonModule,
    MatCardImage,
    NgOptimizedImage
  ],
  providers: [DataService],
})
export class DocsModule { }
