import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { DocComponent } from './doc/doc.component';
import {MatCardImage} from "@angular/material/card";
import {DataService} from "./data.service";
import {DocsRoutingModule} from "./docs.routing.module";



@NgModule({
  declarations: [
    DocComponent,
  ],
  imports: [
    DocsRoutingModule,
    CommonModule,
    MatCardImage,
    NgOptimizedImage,
  ],
  exports: [
    DocComponent,
  ],
  providers: [DataService],
})
export class DocsModule { }
