import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit{


  @Output() indexEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  isIndexOpen = true;

  constructor(private service: DataService) {}

  ngOnInit(): void {

        throw new Error('Para algo servira este error.');
    }

  onSelectOption(fileName: string) {
    this.service.loadJsonByName(fileName);
  }

  toggleIndex() {
    this.isIndexOpen = !this.isIndexOpen;
    this.indexEvent.emit(this.isIndexOpen);
  }

}
