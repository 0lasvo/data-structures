import {Component, EventEmitter, Output} from '@angular/core';
import {DataService} from "../../docs/data.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  constructor(/*private service: DataService*/) {}
  //
  // onSelectOption(fileName: string) {
  //   this.service.loadJsonByName(fileName);
  // }
}
