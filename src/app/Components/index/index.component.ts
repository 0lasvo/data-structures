import {Component, EventEmitter, Output} from '@angular/core';
import {DataService} from "../data.service";
import {JSONRecord} from "../JSONRecord";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  @Output() indexEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  isIndexOpen = true;

  constructor(private service: DataService) {}

  onSelectOption(fileName: string) {
    this.service.loadJsonByName(fileName);
  }

  toggleIndex() {
    this.isIndexOpen = !this.isIndexOpen;
    this.indexEvent.emit(this.isIndexOpen);
  }

}
