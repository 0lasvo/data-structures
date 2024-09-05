import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './Components/index/index.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {DataService} from "./Components/data.service";
import {HttpClientModule} from "@angular/common/http";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {CdkOverlayOrigin} from "@angular/cdk/overlay";
import {MatCardImage} from "@angular/material/card";
import { AboutComponent } from './Components/about/about.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatMenu,
    MatMenuTrigger,
    CdkOverlayOrigin,
    MatMenuItem,
    MatCardImage,
    NgOptimizedImage
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
