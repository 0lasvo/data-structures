import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DocComponent} from "./doc/doc.component";

const routes: Routes = [
  { path: ':fileName', component: DocComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
