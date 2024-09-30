import {Component, EventEmitter, Output} from '@angular/core';
import {DataService} from "../../docs/data.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

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
