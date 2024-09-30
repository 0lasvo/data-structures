import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
  ]
})
export class SharedModule { }
