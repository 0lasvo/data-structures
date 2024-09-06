import { Component } from '@angular/core';
import {DataService} from "../data.service";
import {JSONRecord} from "../JSONRecord";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  constructor(private service: DataService) {}

  onSelectOption(fileName: string) {
    this.service.loadJsonByName(fileName);
  }

}
